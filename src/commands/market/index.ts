import Command from '../../base'
import exec from '../../exec'
import inquirer from 'inquirer'
import { clColor } from '@commercelayer/cli-core'
import { triggers } from '../../triggers/markets'


const promptAction = async (id: string): Promise<any> => {
  const answers = await inquirer.prompt([{
    type: 'list',
    name: 'trigger',
    message: `Select an action to execute on market ${clColor.api.id(id)}:`,
    choices: Object.keys(triggers).sort().map(a => {
      return { name: a, value: a }
    }),
    loop: false,
    pageSize: 10,
  }])
  return answers.trigger
}


export default class MarketIndex extends Command {

  static description = 'execute an action on a resource of type markets'

  static flags = {
    ...Command.flags,
  }

  static args = [
    ...Command.args,
  ]

  async run(): Promise<any> {

    const { args, flags } = await this.parse(MarketIndex)

    const id = args.id

    const action = await promptAction(id)

    const fields = [] as string[]

    const res = await exec('markets', id, action, flags, fields)

    this.log()
    this.printOutput(res, flags)

    this.successMessage('market', action, res.id)

    return res

  }


}