import { expect, test } from '@oclif/test'

describe('in_stock_subscriptions:activate', () => {
  test
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
