import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('adyen_payments:details', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(38000)
})
