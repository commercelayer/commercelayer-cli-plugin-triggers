import { expect, test } from '@oclif/test'

describe('orders:cancel', () => {
  test
    .timeout(46000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
