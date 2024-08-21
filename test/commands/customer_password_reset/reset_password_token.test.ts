import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('customer_password_resets:reset_password_token', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(38000)
})
