import { expect, test } from '@oclif/test'

describe('orders:billing_address_same_as_shipping', () => {
  test
    .timeout(32000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
