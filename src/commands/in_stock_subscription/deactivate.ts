import Command from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/in_stock_subscriptions'


const TRIGGER = 'deactivate'


export default class InStockSubscriptionDeactivate extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
	}

	static args = [
		...Command.args,
	]


	async run() {

    const { args, flags } = await this.parse(InStockSubscriptionDeactivate)

		const res = await exec('in_stock_subscriptions', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('in_stock_subscription', TRIGGER, res.id)

    return res

	}

}
