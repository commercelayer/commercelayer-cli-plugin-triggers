
import type { Trigger } from '../common'


export const triggers: Record<string, Trigger> = {
  external_price: {
      action: 'external_price',
      trigger: '_external_price',
      description: 'When creating or updating a new line item, set this attribute to \'1\' if you want to inject the unit_amount_cents price from an external source. Any successive price computation will be done externally, until the attribute is reset to \'0\'.',
    },
	reserve_stock: {
      action: 'reserve_stock',
      trigger: '_reserve_stock',
      description: 'Send this attribute if you want to reserve the stock for the line item\'s SKUs quantity. Stock reservations expiration depends on the inventory model\'s cutoff. When used on update the existing active stock reservations are renewed. Cannot be passed by sales channels.',
    },
	reset_circuit: {
      action: 'reset_circuit',
      trigger: '_reset_circuit',
      description: 'Send this attribute if you want to reset the circuit breaker associated to this resource to \'closed\' state and zero failures count. Cannot be passed by sales channels.',
    },
	add_tags: {
      action: 'add_tags',
      trigger: '_add_tags',
      description: 'Comma separated list of tags to be added. Duplicates, invalid and non existing ones are discarded. Cannot be passed by sales channels.',
    },
	remove_tags: {
      action: 'remove_tags',
      trigger: '_remove_tags',
      description: 'Comma separated list of tags to be removed. Duplicates, invalid and non existing ones are discarded. Cannot be passed by sales channels.',
    },
}


export type ActionType =
  'external_price' |
	'reserve_stock' |
	'reset_circuit' |
	'add_tags' |
	'remove_tags'
