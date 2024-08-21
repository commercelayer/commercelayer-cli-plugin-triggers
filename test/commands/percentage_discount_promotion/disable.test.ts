import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('percentage_discount_promotions:disable', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(38000)
})
