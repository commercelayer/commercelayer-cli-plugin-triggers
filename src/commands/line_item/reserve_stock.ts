import Command from '../../base'
import { triggers } from '../../triggers/line_items'
import { type LineItem } from '@commercelayer/sdk'


const TRIGGER = 'reserve_stock'


export default class LineItemReserveStock extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(LineItemReserveStock)

		const res = await this.executeAction<LineItem>('line_items', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('line_item', TRIGGER, res.id)

    return res

	}

}
