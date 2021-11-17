import { expect, test } from '@oclif/test'

describe('order_subscriptions:activate', () => {
  test
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
