import { expect, test } from '@oclif/test'

describe('shipments:remove_tags', () => {
  test
    .timeout(52000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
