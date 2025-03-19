import { expect, test } from '@oclif/test'

describe('in_stock_subscriptions:deactivate', () => {
  test
    .timeout(52000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
