import { expect, test } from '@oclif/test'

describe('webhooks:enable', () => {
  test
    .timeout(32000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})