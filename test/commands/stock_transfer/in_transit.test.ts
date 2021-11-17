import { expect, test } from '@oclif/test'

describe('stock_transfers:in_transit', () => {
  test
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
