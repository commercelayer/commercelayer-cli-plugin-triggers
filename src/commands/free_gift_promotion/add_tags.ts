import Command from '../../base'
import { triggers } from '../../triggers/free_gift_promotions'
import { type FreeGiftPromotion } from '@commercelayer/sdk'


const TRIGGER = 'add_tags'


export default class FreeGiftPromotionAddTags extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(FreeGiftPromotionAddTags)

		const res = await this.executeAction<FreeGiftPromotion>('free_gift_promotions', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('free_gift_promotion', TRIGGER, res.id)

    return res

	}

}
