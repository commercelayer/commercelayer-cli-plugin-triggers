import { expect, test } from '@oclif/test'

describe('orders:create_subscriptions', () => {
  test
    .timeout(41000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
