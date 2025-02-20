import Command from '../../base'
import { triggers } from '../../triggers/authorizations'
import { type Authorization } from '@commercelayer/sdk'


const TRIGGER = 'cancel'


export default class AuthorizationCancel extends Command {

	static description = triggers[TRIGGER].description

  static flags = {
		
	}

	static args = {
		...Command.args,
  }


	async run(): Promise<any> {

    const { args, flags } = await this.parse(AuthorizationCancel)

		const res = await this.executeAction<Authorization>('authorizations', args.id, TRIGGER, flags)

    if (flags.print) this.printOutput(res, flags)

    this.successMessage('authorization', TRIGGER, res.id)

    return res

	}

}
