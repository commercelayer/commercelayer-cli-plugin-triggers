import { expect, test } from '@oclif/test'

describe('checkout_com_payments:refresh', () => {
  test
    .timeout(5000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
