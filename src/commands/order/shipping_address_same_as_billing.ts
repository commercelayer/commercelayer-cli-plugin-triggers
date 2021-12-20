import Command from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/orders'


const TRIGGER = 'shipping_address_same_as_billing'


export default class OrderShippingAddressSameAsBilling extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
	}

	static args = [
		...Command.args,
	]


	async run() {

    const { args, flags } = this.parse(OrderShippingAddressSameAsBilling)

		const res = await exec('orders', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('order', TRIGGER, res.id)

    return res

	}

}
