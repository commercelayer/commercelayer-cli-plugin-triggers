import Command from '../../base'
import { triggers } from '../../triggers/customer_password_resets'
import { type CustomerPasswordReset } from '@commercelayer/sdk'


const TRIGGER = 'reset_password_token'


export default class CustomerPasswordResetResetPasswordToken extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(CustomerPasswordResetResetPasswordToken)

		const res = await this.executeAction<CustomerPasswordReset>('customer_password_resets', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('customer_password_reset', TRIGGER, res.id)

    return res

	}

}
