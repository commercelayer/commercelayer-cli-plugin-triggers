import { expect, test } from '@oclif/test'

describe('returns:cancel', () => {
  test
    .timeout(36000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
