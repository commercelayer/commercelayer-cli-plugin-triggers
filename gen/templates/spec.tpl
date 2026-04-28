import { expect } from 'chai'
import { runCommand } from '@oclif/test'


describe('##__RESOURCE_TYPE__##:##__ACTION_ID__##', () => {
  it('runs NoC', async () => {
    const { stdout } = await runCommand<{ name: string }>(['noc'])
    expect(stdout).to.contain('-= NoC =-')
  }).timeout(##__SPEC_TIMEOUT__##)
})
