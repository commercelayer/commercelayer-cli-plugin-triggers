import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('events:trigger', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(38000)
})
