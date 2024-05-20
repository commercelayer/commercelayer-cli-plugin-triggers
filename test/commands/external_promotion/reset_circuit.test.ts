import { expect, test } from '@oclif/test'

describe('external_promotions:reset_circuit', () => {
  test
    .timeout(36000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
