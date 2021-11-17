import Command from '../../base'
import exec from '../../exec'
import { triggers } from '../../triggers/shipments'


const TRIGGER = 'on_hold'


export default class ShipmentOnHold extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		...Command.flags,
	}

	static args = [
		...Command.args,
	]


	async run() {

    const { args, flags } = this.parse(ShipmentOnHold)

		const res = await exec('shipments', args.id, TRIGGER, flags)

    this.successMessage(TRIGGER, res.id)

    return res

	}

}
