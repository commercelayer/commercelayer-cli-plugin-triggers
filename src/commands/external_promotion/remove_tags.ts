import Command from '../../base'
import { triggers } from '../../triggers/external_promotions'
import { type ExternalPromotion } from '@commercelayer/sdk'


const TRIGGER = 'remove_tags'


export default class ExternalPromotionRemoveTags extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(ExternalPromotionRemoveTags)

		const res = await this.executeAction<ExternalPromotion>('external_promotions', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('external_promotion', TRIGGER, res.id)

    return res

	}

}
