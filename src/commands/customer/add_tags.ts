import Command from '../../base'
import { triggers } from '../../triggers/customers'
import { type Customer } from '@commercelayer/sdk'


const TRIGGER = 'add_tags'


export default class CustomerAddTags extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(CustomerAddTags)

		const res = await this.executeAction<Customer>('customers', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('customer', TRIGGER, res.id)

    return res

	}

}
