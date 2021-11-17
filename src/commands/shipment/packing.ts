import Command from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/shipments'


const TRIGGER = 'packing'


export default class ShipmentPacking extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
	}

	static args = [
		...Command.args,
	]


	async run() {

    const { args, flags } = this.parse(ShipmentPacking)

		const res = await exec('shipments', args.id, TRIGGER, flags)

    this.successMessage('shipment', TRIGGER, res.id)

    return res

	}

}
