import { expect, test } from '@oclif/test'

describe('stripe_payments:refresh', () => {
  test
    .timeout(35000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
