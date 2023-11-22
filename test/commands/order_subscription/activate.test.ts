import { expect, test } from '@oclif/test'

describe('order_subscriptions:activate', () => {
  test
    .timeout(31000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
