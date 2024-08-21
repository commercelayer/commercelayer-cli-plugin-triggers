import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('orders:shipping_address_same_as_billing', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(38000)
})
