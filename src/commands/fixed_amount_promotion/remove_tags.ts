import Command from '../../base'
import { triggers } from '../../triggers/fixed_amount_promotions'
import { type FixedAmountPromotion } from '@commercelayer/sdk'


const TRIGGER = 'remove_tags'


export default class FixedAmountPromotionRemoveTags extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(FixedAmountPromotionRemoveTags)

		const res = await this.executeAction<FixedAmountPromotion>('fixed_amount_promotions', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('fixed_amount_promotion', TRIGGER, res.id)

    return res

	}

}
