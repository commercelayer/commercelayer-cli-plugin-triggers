import { expect, test } from '@oclif/test'

describe('webhooks:reset_circuit', () => {
  test
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
