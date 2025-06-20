import Command from '../../base'
import { triggers } from '../../triggers/adyen_payments'
import { type AdyenPayment } from '@commercelayer/sdk'


const TRIGGER = 'balance'


export default class AdyenPaymentBalance extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(AdyenPaymentBalance)

		const res = await this.executeAction<AdyenPayment>('adyen_payments', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('adyen_payment', TRIGGER, res.id)

    return res

	}

}
