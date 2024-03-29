
import type { Trigger } from '../common'


export const triggers: Record<string, Trigger> = {
  update: {
      action: 'update',
      trigger: '_update',
      description: 'Send this attribute if you want to update the payment session with fresh order data.',
    },
}


export type ActionType =
  'update'
