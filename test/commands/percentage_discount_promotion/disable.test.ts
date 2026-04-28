import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('percentage_discount_promotions:disable', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(61000)
})
