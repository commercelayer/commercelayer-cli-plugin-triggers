import { expect, test } from '@oclif/test'

describe('fixed_amount_promotions:add_tags', () => {
  test
    .timeout(52000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
