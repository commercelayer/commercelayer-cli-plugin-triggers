import { expect, test } from '@oclif/test'

describe('stock_line_items:release_stock', () => {
  test
    .timeout(32000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})