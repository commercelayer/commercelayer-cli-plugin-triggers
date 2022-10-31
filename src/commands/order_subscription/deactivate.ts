import Command from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/order_subscriptions'


const TRIGGER = 'deactivate'


export default class OrderSubscriptionDeactivate extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
	}

	static args = [
		...Command.args,
	]


	async run(): Promise<any> {

    const { args, flags } = await this.parse(OrderSubscriptionDeactivate)

		const res = await exec('order_subscriptions', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('order_subscription', TRIGGER, res.id)

    return res

	}

}
