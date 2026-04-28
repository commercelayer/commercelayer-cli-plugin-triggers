import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('orders:save_payment_source_to_customer_wallet', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(61000)
})
