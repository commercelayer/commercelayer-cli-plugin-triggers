
import type { Trigger } from '../common'


export const triggers: Record<string, Trigger> = {
  disable: {
      action: 'disable',
      trigger: '_disable',
      description: 'Send this attribute if you want to mark this resource as disabled.',
    },
	enable: {
      action: 'enable',
      trigger: '_enable',
      description: 'Send this attribute if you want to mark this resource as enabled.',
    },
}


export type ActionType =
  'disable' |
	'enable'
