import Command from '../../base'
import { triggers } from '../../triggers/orders'
import { type Order } from '@commercelayer/sdk'


const TRIGGER = 'reset_circuit'


export default class OrderResetCircuit extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(OrderResetCircuit)

		const res = await this.executeAction<Order>('orders', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('order', TRIGGER, res.id)

    return res

	}

}
