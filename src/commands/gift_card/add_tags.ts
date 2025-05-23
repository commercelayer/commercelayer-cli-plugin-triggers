import Command from '../../base'
import { triggers } from '../../triggers/gift_cards'
import { type GiftCard } from '@commercelayer/sdk'


const TRIGGER = 'add_tags'


export default class GiftCardAddTags extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(GiftCardAddTags)

		const res = await this.executeAction<GiftCard>('gift_cards', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('gift_card', TRIGGER, res.id)

    return res

	}

}
