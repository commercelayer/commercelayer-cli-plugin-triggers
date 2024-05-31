import Command from '../../base'
import { triggers } from '../../triggers/shipments'
import { type Shipment } from '@commercelayer/sdk'


const TRIGGER = 'upcoming'


export default class ShipmentUpcoming extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(ShipmentUpcoming)

		const res = await this.executeAction<Shipment>('shipments', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('shipment', TRIGGER, res.id)

    return res

	}

}