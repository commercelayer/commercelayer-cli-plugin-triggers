import { expect, test } from '@oclif/test'

describe('shipments:get_rates', () => {
  test
    .timeout(5000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
