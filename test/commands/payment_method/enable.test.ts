import { expect, test } from '@oclif/test'

describe('payment_methods:enable', () => {
  test
    .timeout(41000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
