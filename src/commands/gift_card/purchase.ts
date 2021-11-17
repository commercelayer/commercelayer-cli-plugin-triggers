import Command from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/gift_cards'


const TRIGGER = 'purchase'


export default class GiftCardPurchase extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
	}

	static args = [
		...Command.args,
	]


	async run() {

    const { args, flags } = this.parse(GiftCardPurchase)

		const res = await exec('gift_cards', args.id, TRIGGER, flags)

    this.successMessage(TRIGGER, res.id)

    return res

	}

}
