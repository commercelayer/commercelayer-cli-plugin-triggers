import { runCommand } from '@oclif/test'
import { expect } from 'chai'


describe('bundles:compute_compare_at_amount', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(61000)
})
