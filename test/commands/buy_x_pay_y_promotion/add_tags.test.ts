import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('buy_x_pay_y_promotions:add_tags', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(61000)
})
