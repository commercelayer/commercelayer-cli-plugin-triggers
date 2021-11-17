import Command, { flags } from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/orders'


const TRIGGER = 'customer_payment_source_id'


export default class OrderCustomerPaymentSourceId extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
    value: flags.string({
      char: 'v',
      description: 'the trigger attribute value',
      multiple: false,
      required: true,
    }),
	}

	static args = [
		...Command.args,
	]


	async run() {

    const { args, flags } = this.parse(OrderCustomerPaymentSourceId)

		const res = await exec('orders', args.id, TRIGGER, flags)

    this.successMessage(TRIGGER, res.id)

    return res

	}

}
