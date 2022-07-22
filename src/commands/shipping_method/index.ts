import Command from '../../base'
import exec from '../../exec'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { triggers } from '../../triggers/shipping_methods'


const promptAction = async (id: string) => {
  const answers = await inquirer.prompt([{
    type: 'list',
    name: 'trigger',
    message: `Select an action to execute on shipping method ${chalk.yellowBright(id)}:`,
    choices: Object.keys(triggers).sort().map(a => {
      return { name: a, value: a }
    }),
    loop: false,
    pageSize: 10,
  }])
  return answers.trigger
}


export default class ShippingMethodIndex extends Command {

  static description = 'execute an action on a resource of type shipping_methods'

  static flags = {
    ...Command.flags,
  }

  static args = [
    ...Command.args,
  ]

  async run() {

    const { args, flags } = await this.parse(ShippingMethodIndex)

    const id = args.id

    const action = await promptAction(id)

    const fields = [] as string[]

    const res = await exec('shipping_methods', id, action, flags, fields)

    this.log()
    this.printOutput(res, flags)

    this.successMessage('shipping method', action, res.id)

    return res

  }


}
