import { expect, test } from '@oclif/test'

describe('returns:refund', () => {
  test
    .timeout(37000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
