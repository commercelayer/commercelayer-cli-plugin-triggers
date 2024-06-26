/* eslint-disable no-console, no-eval */
import fs from 'fs'
import snakeCase from 'lodash.snakecase'
import { join } from 'node:path'
import { clSchema } from '@commercelayer/cli-core'

const Inflector = require('inflector-js')


const COMMANDS_DIR = 'src/commands'
const TRIGGERS_DIR = 'src/triggers'
const TEMPLATES_DIR = 'gen/templates'
const SPECS_DIR = 'test/commands'


const clean = () => {

  // Clean triggers dir
  const triggers = fs.readdirSync(TRIGGERS_DIR)
  triggers.forEach(f => fs.unlinkSync(join(TRIGGERS_DIR, f)))
  console.log('Deleted trigger files')

  // Clean commands dir
  const files = fs.readdirSync(COMMANDS_DIR)
  files.forEach(f => fs.rmSync(join(COMMANDS_DIR, f), { recursive: true, force: true }))
  console.log('Deleted command files')

  // Clean specs dir
  const specs = fs.readdirSync(SPECS_DIR)
  specs.forEach(f => fs.rmSync(join(SPECS_DIR, f), { recursive: true, force: true }))
  console.log('Deleted spec files')

}


const readTemplate = (template: string): string => {
  let tpl = template
  if (!tpl.endsWith('.tpl')) tpl += '.tpl'
  return fs.readFileSync(join(TEMPLATES_DIR, tpl), { encoding: 'utf-8' })
}


const getResourceActions = async (): Promise<{ [key: string]: any[] }> => {

  console.log('Downloading OpenAPI schema ...')

  const schema = await clSchema.download()

  console.log('Downloaded OpenAPI schema v' + schema.info.version)

  const actions: { [key: string]: any[] } = {}

  Object.entries(schema.components.schemas).filter(([k, _t]) => k.endsWith('Update')).forEach(([k, t]) => {
    const triggerAttributes: any[] = []
    Object.entries((t as any).properties.data.properties.attributes.properties).forEach(([k, v]) => {
      if (k.startsWith('_')) triggerAttributes.push({ action: k.substring(1), trigger: k, description: (v as any).description })
    })
    const res = snakeCase(k.replace('Update', '')) as string
    if (triggerAttributes.length > 0) actions[res] = triggerAttributes
  })

  return actions

}


const updateTriggers = async (): Promise<{ [k: string]: any }> => {

  const actions = await getResourceActions()

  const triggersTpl = readTemplate('triggers')

  const generatedTriggers: { [k: string]: any } = {}

  Object.entries(actions).forEach(([r, t]) => {

    const actionsObject = t.map(v => {
      return `${v.action}: {
      action: '${v.action}',
      trigger: '${v.trigger}',
      description: '${v.description.replace(/'/g, '\\\'')}',
    },`
    }).join('\n\t')

    let triggers = triggersTpl.replace(/##__TRIGGERS__##/, actionsObject)

    triggers = triggers.replace(/##__ACTION__##/, t.map(v => `'${v.action}'`).join(' |\n\t'))

    const resType = Inflector.pluralize(r)

    fs.writeFileSync(join(TRIGGERS_DIR, `${resType}.ts`), triggers, { encoding: 'utf-8' })

    generatedTriggers[r] = eval(`({${actionsObject}})`)

    console.log(`Updated ${r} triggers`)

  })

  return generatedTriggers

}



const FLAG_VALUE_STR = `value: Flags.string({
      char: 'v',
      description: 'the trigger attribute value',
      multiple: false,
      required: true,
    }),`


const generate = async () => {

  console.log('Cleaning folders ...')
  clean()

  console.log('Updating trigger list ...')
  const generatedTriggers = await updateTriggers()
  console.log('Trigger list updated')

  const indexTpl = readTemplate('index')
  const actionTpl = readTemplate('action')
  const specTpl = readTemplate('spec')


  const specTimeout = 1000 * Object.keys(generatedTriggers).length

  Object.entries(generatedTriggers).forEach(([resource, triggers]) => {

    const resType = Inflector.pluralize(resource)
    const resClass = Inflector.camelize(resource)

    const cmdDir = join(COMMANDS_DIR, resource)
    // fs.rmdirSync(cmdDir)
    fs.mkdirSync(cmdDir)

    const spcDir = join(SPECS_DIR, resource)
    // fs.rmdirSync(spcDir)
    fs.mkdirSync(spcDir)


    let index = indexTpl.replace(/##__RESOURCE_NAME__##/g, resource.replace(/_/g, ' '))
    index = index.replace(/##__RESOURCE_NAME__##/g, resource)
    index = index.replace(/##__RESOURCE_TYPE__##/g, resType)
    index = index.replace(/##__RESOURCE_CLASS__##/g, resClass)
    fs.writeFileSync(join(cmdDir, 'index.ts'), index)


    Object.keys(triggers).forEach(action => {

      let command = actionTpl.replace(/##__ACTION_ID__##/g, action)
      command = command.replace(/##__ACTION_NAME__##/g, Inflector.camelize(action))
      command = command.replace(/##__RESOURCE_NAME__##/g, resource)
      command = command.replace(/##__RESOURCE_TYPE__##/g, resType)
      command = command.replace(/##__RESOURCE_CLASS__##/g, resClass)

      const flagValue = action.endsWith('_id') ? FLAG_VALUE_STR : ''
      command = command.replace(/##__FLAG_VALUE__##/, flagValue)
      const flagsImport = action.endsWith('_id') ? ', { Flags }' : ''
      command = command.replace(/##__FLAGS_IMPORT__##/, flagsImport)

      const fileName = action + '.ts'
      fs.writeFileSync(join(cmdDir, fileName), command)
      console.log(`Created command: ${action} [${fileName}]`)

      let spec = specTpl.replace(/##__ACTION_ID__##/g, action)
      spec = spec.replace(/##__RESOURCE_TYPE__##/g, resType)
      spec = spec.replace(/##__SPEC_TIMEOUT__##/g, String(specTimeout))
      const specName = fileName.replace(/.ts/g, '.test.ts')
      fs.writeFileSync(join(spcDir, specName), spec)
      console.log(`Created spec: ${action} [${specName}]`)

    })

  })

  fs.copyFileSync(join(TEMPLATES_DIR, 'noc.tpl'), join(COMMANDS_DIR, 'noc.ts'))

  /*
  console.log('Generating commands manifest ...')
  Manifest.run().then(() => console.log('Generated commands manifest'))
    .then(() => console.log('Order commands generation completed.'))
  */

}


generate()
