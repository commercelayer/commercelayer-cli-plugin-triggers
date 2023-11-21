import Command, { Flags } from '../../base'
import { triggers } from '../../triggers/orders'
import { type Order } from '@commercelayer/sdk'


const TRIGGER = 'customer_payment_source_id'


export default class OrderCustomerPaymentSourceId extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		value: Flags.string({
      char: 'v',
      description: 'the trigger attribute value',
      multiple: false,
      required: true,
    }),
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(OrderCustomerPaymentSourceId)

		const res = await this.executeAction<Order>('orders', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('order', TRIGGER, res.id)

    return res

	}

}
