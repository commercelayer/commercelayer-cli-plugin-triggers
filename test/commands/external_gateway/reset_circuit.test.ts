import { expect, test } from '@oclif/test'

describe('external_gateways:reset_circuit', () => {
  test
    .timeout(35000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})