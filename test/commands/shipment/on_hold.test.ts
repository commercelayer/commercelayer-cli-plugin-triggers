import { expect, test } from '@oclif/test'

describe('shipments:on_hold', () => {
  test
    .timeout(46000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
