import { expect, test } from '@oclif/test'

describe('captures:refund_amount_cents', () => {
  test
    .timeout(15000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
