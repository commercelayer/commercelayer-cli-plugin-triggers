import { expect, test } from '@oclif/test'

describe('returns:reject', () => {
  test
    .timeout(46000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
