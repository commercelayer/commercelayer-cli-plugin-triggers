import { expect, test } from '@oclif/test'

describe('gift_cards:activate', () => {
  test
    .timeout(37000)
    .stdout()
    .command(['noc'])
    .it('runs NoC', ctx => {
      expect(ctx.stdout).to.contain('-= NoC =-')
    })
})
