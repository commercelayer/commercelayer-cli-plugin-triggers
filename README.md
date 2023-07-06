# commercelayer-cli-plugin-triggers

Commerce Layer CLI Triggers plugin

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@commercelayer/cli-plugin-triggers.svg)](https://npmjs.org/package/@commercelayer/cli-plugin-triggers)
[![Downloads/week](https://img.shields.io/npm/dw/@commercelayer/cli-plugin-triggers.svg)](https://npmjs.org/package/@commercelayer/cli-plugin-triggers)
[![License](https://img.shields.io/npm/l/@commercelayer/cli-plugin-triggers.svg)](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/master/package.json)

<!-- toc -->

* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
## Usage
<!-- usage -->

```sh-session
commercelayer COMMAND

commercelayer [COMMAND] (--help | -h) for detailed information about plugin commands.
```
<!-- usagestop -->
To install as a Commerce Layer CLI plugin run the following command:

```sh-session
$ commercelayer plugins:install triggers
```

## Commands
<!-- commands -->

* [`commercelayer adyen_payment ID`](#commercelayer-adyen_payment-id)
* [`commercelayer adyen_payment:details ID`](#commercelayer-adyen_paymentdetails-id)
* [`commercelayer authorization ID`](#commercelayer-authorization-id)
* [`commercelayer authorization:capture ID`](#commercelayer-authorizationcapture-id)
* [`commercelayer authorization:capture_amount_cents ID`](#commercelayer-authorizationcapture_amount_cents-id)
* [`commercelayer authorization:void ID`](#commercelayer-authorizationvoid-id)
* [`commercelayer axerve_payment ID`](#commercelayer-axerve_payment-id)
* [`commercelayer axerve_payment:update ID`](#commercelayer-axerve_paymentupdate-id)
* [`commercelayer bundle ID`](#commercelayer-bundle-id)
* [`commercelayer bundle:compute_compare_at_amount ID`](#commercelayer-bundlecompute_compare_at_amount-id)
* [`commercelayer bundle:compute_price_amount ID`](#commercelayer-bundlecompute_price_amount-id)
* [`commercelayer capture ID`](#commercelayer-capture-id)
* [`commercelayer capture:refund ID`](#commercelayer-capturerefund-id)
* [`commercelayer capture:refund_amount_cents ID`](#commercelayer-capturerefund_amount_cents-id)
* [`commercelayer checkout_com_payment ID`](#commercelayer-checkout_com_payment-id)
* [`commercelayer checkout_com_payment:details ID`](#commercelayer-checkout_com_paymentdetails-id)
* [`commercelayer checkout_com_payment:refresh ID`](#commercelayer-checkout_com_paymentrefresh-id)
* [`commercelayer customer_password_reset ID`](#commercelayer-customer_password_reset-id)
* [`commercelayer customer_password_reset:reset_password_token ID`](#commercelayer-customer_password_resetreset_password_token-id)
* [`commercelayer gift_card ID`](#commercelayer-gift_card-id)
* [`commercelayer gift_card:activate ID`](#commercelayer-gift_cardactivate-id)
* [`commercelayer gift_card:balance_change_cents ID`](#commercelayer-gift_cardbalance_change_cents-id)
* [`commercelayer gift_card:deactivate ID`](#commercelayer-gift_carddeactivate-id)
* [`commercelayer gift_card:purchase ID`](#commercelayer-gift_cardpurchase-id)
* [`commercelayer in_stock_subscription ID`](#commercelayer-in_stock_subscription-id)
* [`commercelayer in_stock_subscription:activate ID`](#commercelayer-in_stock_subscriptionactivate-id)
* [`commercelayer in_stock_subscription:deactivate ID`](#commercelayer-in_stock_subscriptiondeactivate-id)
* [`commercelayer klarna_payment ID`](#commercelayer-klarna_payment-id)
* [`commercelayer klarna_payment:update ID`](#commercelayer-klarna_paymentupdate-id)
* [`commercelayer line_item ID`](#commercelayer-line_item-id)
* [`commercelayer line_item:external_price ID`](#commercelayer-line_itemexternal_price-id)
* [`commercelayer line_item:reserve_stock ID`](#commercelayer-line_itemreserve_stock-id)
* [`commercelayer market ID`](#commercelayer-market-id)
* [`commercelayer market:disable ID`](#commercelayer-marketdisable-id)
* [`commercelayer market:enable ID`](#commercelayer-marketenable-id)
* [`commercelayer order ID`](#commercelayer-order-id)
* [`commercelayer order:approve ID`](#commercelayer-orderapprove-id)
* [`commercelayer order:approve_and_capture ID`](#commercelayer-orderapprove_and_capture-id)
* [`commercelayer order:archive ID`](#commercelayer-orderarchive-id)
* [`commercelayer order:authorization_amount_cents ID`](#commercelayer-orderauthorization_amount_cents-id)
* [`commercelayer order:authorize ID`](#commercelayer-orderauthorize-id)
* [`commercelayer order:billing_address_clone_id ID`](#commercelayer-orderbilling_address_clone_id-id)
* [`commercelayer order:billing_address_same_as_shipping ID`](#commercelayer-orderbilling_address_same_as_shipping-id)
* [`commercelayer order:cancel ID`](#commercelayer-ordercancel-id)
* [`commercelayer order:capture ID`](#commercelayer-ordercapture-id)
* [`commercelayer order:commit_invoice ID`](#commercelayer-ordercommit_invoice-id)
* [`commercelayer order:create_subscriptions ID`](#commercelayer-ordercreate_subscriptions-id)
* [`commercelayer order:customer_payment_source_id ID`](#commercelayer-ordercustomer_payment_source_id-id)
* [`commercelayer order:nullify_payment_source ID`](#commercelayer-ordernullify_payment_source-id)
* [`commercelayer order:place ID`](#commercelayer-orderplace-id)
* [`commercelayer order:refresh ID`](#commercelayer-orderrefresh-id)
* [`commercelayer order:refund ID`](#commercelayer-orderrefund-id)
* [`commercelayer order:refund_invoice ID`](#commercelayer-orderrefund_invoice-id)
* [`commercelayer order:save_billing_address_to_customer_address_book ID`](#commercelayer-ordersave_billing_address_to_customer_address_book-id)
* [`commercelayer order:save_payment_source_to_customer_wallet ID`](#commercelayer-ordersave_payment_source_to_customer_wallet-id)
* [`commercelayer order:save_shipping_address_to_customer_address_book ID`](#commercelayer-ordersave_shipping_address_to_customer_address_book-id)
* [`commercelayer order:shipping_address_clone_id ID`](#commercelayer-ordershipping_address_clone_id-id)
* [`commercelayer order:shipping_address_same_as_billing ID`](#commercelayer-ordershipping_address_same_as_billing-id)
* [`commercelayer order:start_editing ID`](#commercelayer-orderstart_editing-id)
* [`commercelayer order:stop_editing ID`](#commercelayer-orderstop_editing-id)
* [`commercelayer order:unarchive ID`](#commercelayer-orderunarchive-id)
* [`commercelayer order:update_taxes ID`](#commercelayer-orderupdate_taxes-id)
* [`commercelayer order:validate ID`](#commercelayer-ordervalidate-id)
* [`commercelayer order_subscription ID`](#commercelayer-order_subscription-id)
* [`commercelayer order_subscription:activate ID`](#commercelayer-order_subscriptionactivate-id)
* [`commercelayer order_subscription:cancel ID`](#commercelayer-order_subscriptioncancel-id)
* [`commercelayer order_subscription:deactivate ID`](#commercelayer-order_subscriptiondeactivate-id)
* [`commercelayer payment_method ID`](#commercelayer-payment_method-id)
* [`commercelayer payment_method:disable ID`](#commercelayer-payment_methoddisable-id)
* [`commercelayer payment_method:enable ID`](#commercelayer-payment_methodenable-id)
* [`commercelayer return ID`](#commercelayer-return-id)
* [`commercelayer return:approve ID`](#commercelayer-returnapprove-id)
* [`commercelayer return:archive ID`](#commercelayer-returnarchive-id)
* [`commercelayer return:cancel ID`](#commercelayer-returncancel-id)
* [`commercelayer return:receive ID`](#commercelayer-returnreceive-id)
* [`commercelayer return:reject ID`](#commercelayer-returnreject-id)
* [`commercelayer return:request ID`](#commercelayer-returnrequest-id)
* [`commercelayer return:restock ID`](#commercelayer-returnrestock-id)
* [`commercelayer return:ship ID`](#commercelayer-returnship-id)
* [`commercelayer return:unarchive ID`](#commercelayer-returnunarchive-id)
* [`commercelayer return_line_item ID`](#commercelayer-return_line_item-id)
* [`commercelayer return_line_item:restock ID`](#commercelayer-return_line_itemrestock-id)
* [`commercelayer satispay_payment ID`](#commercelayer-satispay_payment-id)
* [`commercelayer satispay_payment:refresh ID`](#commercelayer-satispay_paymentrefresh-id)
* [`commercelayer shipment ID`](#commercelayer-shipment-id)
* [`commercelayer shipment:get_rates ID`](#commercelayer-shipmentget_rates-id)
* [`commercelayer shipment:on_hold ID`](#commercelayer-shipmenton_hold-id)
* [`commercelayer shipment:packing ID`](#commercelayer-shipmentpacking-id)
* [`commercelayer shipment:picking ID`](#commercelayer-shipmentpicking-id)
* [`commercelayer shipment:purchase ID`](#commercelayer-shipmentpurchase-id)
* [`commercelayer shipment:ready_to_ship ID`](#commercelayer-shipmentready_to_ship-id)
* [`commercelayer shipment:ship ID`](#commercelayer-shipmentship-id)
* [`commercelayer shipping_method ID`](#commercelayer-shipping_method-id)
* [`commercelayer shipping_method:disable ID`](#commercelayer-shipping_methoddisable-id)
* [`commercelayer shipping_method:enable ID`](#commercelayer-shipping_methodenable-id)
* [`commercelayer stock_transfer ID`](#commercelayer-stock_transfer-id)
* [`commercelayer stock_transfer:cancel ID`](#commercelayer-stock_transfercancel-id)
* [`commercelayer stock_transfer:complete ID`](#commercelayer-stock_transfercomplete-id)
* [`commercelayer stock_transfer:in_transit ID`](#commercelayer-stock_transferin_transit-id)
* [`commercelayer stock_transfer:picking ID`](#commercelayer-stock_transferpicking-id)
* [`commercelayer stock_transfer:upcoming ID`](#commercelayer-stock_transferupcoming-id)
* [`commercelayer stripe_payment ID`](#commercelayer-stripe_payment-id)
* [`commercelayer stripe_payment:refresh ID`](#commercelayer-stripe_paymentrefresh-id)
* [`commercelayer stripe_payment:update ID`](#commercelayer-stripe_paymentupdate-id)
* [`commercelayer webhook ID`](#commercelayer-webhook-id)
* [`commercelayer webhook:reset_circuit ID`](#commercelayer-webhookreset_circuit-id)

### `commercelayer adyen_payment ID`

Execute an action on a resource of type adyen_payments.

```sh-session
USAGE
  $ commercelayer adyen_payment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type adyen_payments
```

_See code: [src/commands/adyen_payment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/adyen_payment/index.ts)_

### `commercelayer adyen_payment:details ID`

Send this attribute if you want to send additional details the payment request.

```sh-session
USAGE
  $ commercelayer adyen_payment:details ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to send additional details the payment request.
```

_See code: [src/commands/adyen_payment/details.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/adyen_payment/details.ts)_

### `commercelayer authorization ID`

Execute an action on a resource of type authorizations.

```sh-session
USAGE
  $ commercelayer authorization ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type authorizations
```

_See code: [src/commands/authorization/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/authorization/index.ts)_

### `commercelayer authorization:capture ID`

Send this attribute if you want to create a capture for this authorization.

```sh-session
USAGE
  $ commercelayer authorization:capture ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to create a capture for this authorization.
```

_See code: [src/commands/authorization/capture.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/authorization/capture.ts)_

### `commercelayer authorization:capture_amount_cents ID`

The associated capture amount, in cents.

```sh-session
USAGE
  $ commercelayer authorization:capture_amount_cents ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  The associated capture amount, in cents.
```

_See code: [src/commands/authorization/capture_amount_cents.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/authorization/capture_amount_cents.ts)_

### `commercelayer authorization:void ID`

Send this attribute if you want to create a void for this authorization.

```sh-session
USAGE
  $ commercelayer authorization:void ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to create a void for this authorization.
```

_See code: [src/commands/authorization/void.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/authorization/void.ts)_

### `commercelayer axerve_payment ID`

Execute an action on a resource of type axerve_payments.

```sh-session
USAGE
  $ commercelayer axerve_payment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type axerve_payments
```

_See code: [src/commands/axerve_payment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/axerve_payment/index.ts)_

### `commercelayer axerve_payment:update ID`

Send this attribute if you want to update the payment with fresh order data.

```sh-session
USAGE
  $ commercelayer axerve_payment:update ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to update the payment with fresh order data.
```

_See code: [src/commands/axerve_payment/update.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/axerve_payment/update.ts)_

### `commercelayer bundle ID`

Execute an action on a resource of type bundles.

```sh-session
USAGE
  $ commercelayer bundle ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type bundles
```

_See code: [src/commands/bundle/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/bundle/index.ts)_

### `commercelayer bundle:compute_compare_at_amount ID`

Send this attribute if you want to compute the compare_at_amount_cents as the sum of the prices of the bundle SKUs for the market.

```sh-session
USAGE
  $ commercelayer bundle:compute_compare_at_amount ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to compute the compare_at_amount_cents as the sum of the prices of the bundle SKUs for
  the market.
```

_See code: [src/commands/bundle/compute_compare_at_amount.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/bundle/compute_compare_at_amount.ts)_

### `commercelayer bundle:compute_price_amount ID`

Send this attribute if you want to compute the price_amount_cents as the sum of the prices of the bundle SKUs for the market.

```sh-session
USAGE
  $ commercelayer bundle:compute_price_amount ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to compute the price_amount_cents as the sum of the prices of the bundle SKUs for the
  market.
```

_See code: [src/commands/bundle/compute_price_amount.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/bundle/compute_price_amount.ts)_

### `commercelayer capture ID`

Execute an action on a resource of type captures.

```sh-session
USAGE
  $ commercelayer capture ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type captures
```

_See code: [src/commands/capture/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/capture/index.ts)_

### `commercelayer capture:refund ID`

Send this attribute if you want to create a refund for this capture.

```sh-session
USAGE
  $ commercelayer capture:refund ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to create a refund for this capture.
```

_See code: [src/commands/capture/refund.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/capture/refund.ts)_

### `commercelayer capture:refund_amount_cents ID`

The associated refund amount, in cents.

```sh-session
USAGE
  $ commercelayer capture:refund_amount_cents ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  The associated refund amount, in cents.
```

_See code: [src/commands/capture/refund_amount_cents.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/capture/refund_amount_cents.ts)_

### `commercelayer checkout_com_payment ID`

Execute an action on a resource of type checkout_com_payments.

```sh-session
USAGE
  $ commercelayer checkout_com_payment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type checkout_com_payments
```

_See code: [src/commands/checkout_com_payment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/checkout_com_payment/index.ts)_

### `commercelayer checkout_com_payment:details ID`

Send this attribute if you want to send additional details the payment request (i.e. upon 3DS check).

```sh-session
USAGE
  $ commercelayer checkout_com_payment:details ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to send additional details the payment request (i.e. upon 3DS check).
```

_See code: [src/commands/checkout_com_payment/details.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/checkout_com_payment/details.ts)_

### `commercelayer checkout_com_payment:refresh ID`

Send this attribute if you want to refresh all the pending transactions, can be used as webhooks fallback logic.

```sh-session
USAGE
  $ commercelayer checkout_com_payment:refresh ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to refresh all the pending transactions, can be used as webhooks fallback logic.
```

_See code: [src/commands/checkout_com_payment/refresh.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/checkout_com_payment/refresh.ts)_

### `commercelayer customer_password_reset ID`

Execute an action on a resource of type customer_password_resets.

```sh-session
USAGE
  $ commercelayer customer_password_reset ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type customer_password_resets
```

_See code: [src/commands/customer_password_reset/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/customer_password_reset/index.ts)_

### `commercelayer customer_password_reset:reset_password_token ID`

Send the 'reset_password_token' that you got on create when updating the customer password.

```sh-session
USAGE
  $ commercelayer customer_password_reset:reset_password_token ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send the 'reset_password_token' that you got on create when updating the customer password.
```

_See code: [src/commands/customer_password_reset/reset_password_token.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/customer_password_reset/reset_password_token.ts)_

### `commercelayer gift_card ID`

Execute an action on a resource of type gift_cards.

```sh-session
USAGE
  $ commercelayer gift_card ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type gift_cards
```

_See code: [src/commands/gift_card/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/gift_card/index.ts)_

### `commercelayer gift_card:activate ID`

Send this attribute if you want to activate a gift card.

```sh-session
USAGE
  $ commercelayer gift_card:activate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to activate a gift card.
```

_See code: [src/commands/gift_card/activate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/gift_card/activate.ts)_

### `commercelayer gift_card:balance_change_cents ID`

The balance change, in cents. Send a negative value to reduces the card balance by the specified amount. Send a positive value to recharge the gift card (if rechargeable).

```sh-session
USAGE
  $ commercelayer gift_card:balance_change_cents ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  The balance change, in cents. Send a negative value to reduces the card balance by the specified amount. Send a
  positive value to recharge the gift card (if rechargeable).
```

_See code: [src/commands/gift_card/balance_change_cents.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/gift_card/balance_change_cents.ts)_

### `commercelayer gift_card:deactivate ID`

Send this attribute if you want to deactivate a gift card.

```sh-session
USAGE
  $ commercelayer gift_card:deactivate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to deactivate a gift card.
```

_See code: [src/commands/gift_card/deactivate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/gift_card/deactivate.ts)_

### `commercelayer gift_card:purchase ID`

Send this attribute if you want to confirm a draft gift card. The gift card becomes 'inactive', waiting to be activated.

```sh-session
USAGE
  $ commercelayer gift_card:purchase ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to confirm a draft gift card. The gift card becomes 'inactive', waiting to be
  activated.
```

_See code: [src/commands/gift_card/purchase.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/gift_card/purchase.ts)_

### `commercelayer in_stock_subscription ID`

Execute an action on a resource of type in_stock_subscriptions.

```sh-session
USAGE
  $ commercelayer in_stock_subscription ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type in_stock_subscriptions
```

_See code: [src/commands/in_stock_subscription/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/in_stock_subscription/index.ts)_

### `commercelayer in_stock_subscription:activate ID`

Send this attribute if you want to activate an inactive subscription.

```sh-session
USAGE
  $ commercelayer in_stock_subscription:activate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to activate an inactive subscription.
```

_See code: [src/commands/in_stock_subscription/activate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/in_stock_subscription/activate.ts)_

### `commercelayer in_stock_subscription:deactivate ID`

Send this attribute if you want to dactivate an active subscription.

```sh-session
USAGE
  $ commercelayer in_stock_subscription:deactivate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to dactivate an active subscription.
```

_See code: [src/commands/in_stock_subscription/deactivate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/in_stock_subscription/deactivate.ts)_

### `commercelayer klarna_payment ID`

Execute an action on a resource of type klarna_payments.

```sh-session
USAGE
  $ commercelayer klarna_payment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type klarna_payments
```

_See code: [src/commands/klarna_payment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/klarna_payment/index.ts)_

### `commercelayer klarna_payment:update ID`

Send this attribute if you want to update the payment session with fresh order data.

```sh-session
USAGE
  $ commercelayer klarna_payment:update ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to update the payment session with fresh order data.
```

_See code: [src/commands/klarna_payment/update.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/klarna_payment/update.ts)_

### `commercelayer line_item ID`

Execute an action on a resource of type line_items.

```sh-session
USAGE
  $ commercelayer line_item ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type line_items
```

_See code: [src/commands/line_item/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/line_item/index.ts)_

### `commercelayer line_item:external_price ID`

When creating or updating a new line item, set this attribute to '1' if you want to inject the unit_amount_cents price from an external source.

```sh-session
USAGE
  $ commercelayer line_item:external_price ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  When creating or updating a new line item, set this attribute to '1' if you want to inject the unit_amount_cents price
  from an external source.
```

_See code: [src/commands/line_item/external_price.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/line_item/external_price.ts)_

### `commercelayer line_item:reserve_stock ID`

Send this attribute if you want to reserve the stock for the line item's SKUs quantity. Stock reservations expiration depends on the inventory model's cutoff. When used on update the existing active stock reservations are renewed.

```sh-session
USAGE
  $ commercelayer line_item:reserve_stock ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to reserve the stock for the line item's SKUs quantity. Stock reservations expiration
  depends on the inventory model's cutoff. When used on update the existing active stock reservations are renewed.
```

_See code: [src/commands/line_item/reserve_stock.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/line_item/reserve_stock.ts)_

### `commercelayer market ID`

Execute an action on a resource of type markets.

```sh-session
USAGE
  $ commercelayer market ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type markets
```

_See code: [src/commands/market/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/market/index.ts)_

### `commercelayer market:disable ID`

Send this attribute if you want to mark the market as disabled.

```sh-session
USAGE
  $ commercelayer market:disable ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark the market as disabled.
```

_See code: [src/commands/market/disable.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/market/disable.ts)_

### `commercelayer market:enable ID`

Send this attribute if you want to mark the market as enabled.

```sh-session
USAGE
  $ commercelayer market:enable ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark the market as enabled.
```

_See code: [src/commands/market/enable.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/market/enable.ts)_

### `commercelayer order ID`

Execute an action on a resource of type orders.

```sh-session
USAGE
  $ commercelayer order ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type orders
```

_See code: [src/commands/order/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/index.ts)_

### `commercelayer order:approve ID`

Send this attribute if you want to approve a placed order.

```sh-session
USAGE
  $ commercelayer order:approve ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to approve a placed order.
```

_See code: [src/commands/order/approve.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/approve.ts)_

### `commercelayer order:approve_and_capture ID`

Send this attribute if you want to approve and capture a placed order.

```sh-session
USAGE
  $ commercelayer order:approve_and_capture ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to approve and capture a placed order.
```

_See code: [src/commands/order/approve_and_capture.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/approve_and_capture.ts)_

### `commercelayer order:archive ID`

Send this attribute if you want to archive the order.

```sh-session
USAGE
  $ commercelayer order:archive ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to archive the order.
```

_See code: [src/commands/order/archive.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/archive.ts)_

### `commercelayer order:authorization_amount_cents ID`

The authorization amount, in cents.

```sh-session
USAGE
  $ commercelayer order:authorization_amount_cents ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  The authorization amount, in cents.
```

_See code: [src/commands/order/authorization_amount_cents.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/authorization_amount_cents.ts)_

### `commercelayer order:authorize ID`

Send this attribute if you want to authorize the order's payment source.

```sh-session
USAGE
  $ commercelayer order:authorize ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to authorize the order's payment source.
```

_See code: [src/commands/order/authorize.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/authorize.ts)_

### `commercelayer order:billing_address_clone_id ID`

The id of the address that you want to clone to create the order's billing address.

```sh-session
USAGE
  $ commercelayer order:billing_address_clone_id ID -v <value> [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json           print result in JSON format
  -p, --print          print out the modified resource
  -u, --unformatted    print JSON output without indentation
  -v, --value=<value>  (required) the trigger attribute value

DESCRIPTION
  The id of the address that you want to clone to create the order's billing address.
```

_See code: [src/commands/order/billing_address_clone_id.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/billing_address_clone_id.ts)_

### `commercelayer order:billing_address_same_as_shipping ID`

Send this attribute if you want the billing address to be cloned from the order's shipping address.

```sh-session
USAGE
  $ commercelayer order:billing_address_same_as_shipping ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want the billing address to be cloned from the order's shipping address.
```

_See code: [src/commands/order/billing_address_same_as_shipping.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/billing_address_same_as_shipping.ts)_

### `commercelayer order:cancel ID`

Send this attribute if you want to cancel a placed order. The order's authorization will be automatically voided.

```sh-session
USAGE
  $ commercelayer order:cancel ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to cancel a placed order. The order's authorization will be automatically voided.
```

_See code: [src/commands/order/cancel.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/cancel.ts)_

### `commercelayer order:capture ID`

Send this attribute if you want to capture an authorized order.

```sh-session
USAGE
  $ commercelayer order:capture ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to capture an authorized order.
```

_See code: [src/commands/order/capture.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/capture.ts)_

### `commercelayer order:commit_invoice ID`

Send this attribute if you want commit the sales tax invoice to the associated tax calculator (currently supported by Avalara).

```sh-session
USAGE
  $ commercelayer order:commit_invoice ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want commit the sales tax invoice to the associated tax calculator (currently supported by
  Avalara).
```

_See code: [src/commands/order/commit_invoice.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/commit_invoice.ts)_

### `commercelayer order:create_subscriptions ID`

Send this attribute if you want to create order subscriptions from the recurring line items upon/after placing the order. Subscriptions are generated according to associated subscription model strategy.

```sh-session
USAGE
  $ commercelayer order:create_subscriptions ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to create order subscriptions from the recurring line items upon/after placing the
  order. Subscriptions are generated according to associated subscription model strategy.
```

_See code: [src/commands/order/create_subscriptions.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/create_subscriptions.ts)_

### `commercelayer order:customer_payment_source_id ID`

The id of the customer payment source (i.e. credit card) that you want to use as the order's payment source.

```sh-session
USAGE
  $ commercelayer order:customer_payment_source_id ID -v <value> [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json           print result in JSON format
  -p, --print          print out the modified resource
  -u, --unformatted    print JSON output without indentation
  -v, --value=<value>  (required) the trigger attribute value

DESCRIPTION
  The id of the customer payment source (i.e. credit card) that you want to use as the order's payment source.
```

_See code: [src/commands/order/customer_payment_source_id.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/customer_payment_source_id.ts)_

### `commercelayer order:nullify_payment_source ID`

Send this attribute if you want to nullify the payment source for this order.

```sh-session
USAGE
  $ commercelayer order:nullify_payment_source ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to nullify the payment source for this order.
```

_See code: [src/commands/order/nullify_payment_source.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/nullify_payment_source.ts)_

### `commercelayer order:place ID`

Send this attribute if you want to place the order.

```sh-session
USAGE
  $ commercelayer order:place ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to place the order.
```

_See code: [src/commands/order/place.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/place.ts)_

### `commercelayer order:refresh ID`

Send this attribute if you want to manually refresh the order.

```sh-session
USAGE
  $ commercelayer order:refresh ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to manually refresh the order.
```

_See code: [src/commands/order/refresh.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/refresh.ts)_

### `commercelayer order:refund ID`

Send this attribute if you want to refund a captured order.

```sh-session
USAGE
  $ commercelayer order:refund ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to refund a captured order.
```

_See code: [src/commands/order/refund.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/refund.ts)_

### `commercelayer order:refund_invoice ID`

Send this attribute if you want refund the sales tax invoice to the associated tax calculator (currently supported by Avalara).

```sh-session
USAGE
  $ commercelayer order:refund_invoice ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want refund the sales tax invoice to the associated tax calculator (currently supported by
  Avalara).
```

_See code: [src/commands/order/refund_invoice.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/refund_invoice.ts)_

### `commercelayer order:save_billing_address_to_customer_address_book ID`

Send this attribute if you want the order's billing address to be saved in the customer's address book as a customer address.

```sh-session
USAGE
  $ commercelayer order:save_billing_address_to_customer_address_book ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want the order's billing address to be saved in the customer's address book as a customer
  address.
```

_See code: [src/commands/order/save_billing_address_to_customer_address_book.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/save_billing_address_to_customer_address_book.ts)_

### `commercelayer order:save_payment_source_to_customer_wallet ID`

Send this attribute if you want the order's payment source to be saved in the customer's wallet as a customer payment source.

```sh-session
USAGE
  $ commercelayer order:save_payment_source_to_customer_wallet ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want the order's payment source to be saved in the customer's wallet as a customer payment
  source.
```

_See code: [src/commands/order/save_payment_source_to_customer_wallet.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/save_payment_source_to_customer_wallet.ts)_

### `commercelayer order:save_shipping_address_to_customer_address_book ID`

Send this attribute if you want the order's shipping address to be saved in the customer's address book as a customer address.

```sh-session
USAGE
  $ commercelayer order:save_shipping_address_to_customer_address_book ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want the order's shipping address to be saved in the customer's address book as a customer
  address.
```

_See code: [src/commands/order/save_shipping_address_to_customer_address_book.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/save_shipping_address_to_customer_address_book.ts)_

### `commercelayer order:shipping_address_clone_id ID`

The id of the address that you want to clone to create the order's shipping address.

```sh-session
USAGE
  $ commercelayer order:shipping_address_clone_id ID -v <value> [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json           print result in JSON format
  -p, --print          print out the modified resource
  -u, --unformatted    print JSON output without indentation
  -v, --value=<value>  (required) the trigger attribute value

DESCRIPTION
  The id of the address that you want to clone to create the order's shipping address.
```

_See code: [src/commands/order/shipping_address_clone_id.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/shipping_address_clone_id.ts)_

### `commercelayer order:shipping_address_same_as_billing ID`

Send this attribute if you want the shipping address to be cloned from the order's billing address.

```sh-session
USAGE
  $ commercelayer order:shipping_address_same_as_billing ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want the shipping address to be cloned from the order's billing address.
```

_See code: [src/commands/order/shipping_address_same_as_billing.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/shipping_address_same_as_billing.ts)_

### `commercelayer order:start_editing ID`

Send this attribute if you want to edit the order after it is placed. Remember you cannot exceed the original total amount.

```sh-session
USAGE
  $ commercelayer order:start_editing ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to edit the order after it is placed. Remember you cannot exceed the original total
  amount.
```

_See code: [src/commands/order/start_editing.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/start_editing.ts)_

### `commercelayer order:stop_editing ID`

Send this attribute to stop the editing for the order and return back to placed status.

```sh-session
USAGE
  $ commercelayer order:stop_editing ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute to stop the editing for the order and return back to placed status.
```

_See code: [src/commands/order/stop_editing.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/stop_editing.ts)_

### `commercelayer order:unarchive ID`

Send this attribute if you want to unarchive the order.

```sh-session
USAGE
  $ commercelayer order:unarchive ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to unarchive the order.
```

_See code: [src/commands/order/unarchive.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/unarchive.ts)_

### `commercelayer order:update_taxes ID`

Send this attribute if you want to force tax calculation for this order (a tax calculator must be associated to the order's market).

```sh-session
USAGE
  $ commercelayer order:update_taxes ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to force tax calculation for this order (a tax calculator must be associated to the
  order's market).
```

_See code: [src/commands/order/update_taxes.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/update_taxes.ts)_

### `commercelayer order:validate ID`

Send this attribute if you want to trigger the external validation for the order.

```sh-session
USAGE
  $ commercelayer order:validate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to trigger the external validation for the order.
```

_See code: [src/commands/order/validate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order/validate.ts)_

### `commercelayer order_subscription ID`

Execute an action on a resource of type order_subscriptions.

```sh-session
USAGE
  $ commercelayer order_subscription ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type order_subscriptions
```

_See code: [src/commands/order_subscription/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order_subscription/index.ts)_

### `commercelayer order_subscription:activate ID`

Send this attribute if you want to mark this subscription as active.

```sh-session
USAGE
  $ commercelayer order_subscription:activate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this subscription as active.
```

_See code: [src/commands/order_subscription/activate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order_subscription/activate.ts)_

### `commercelayer order_subscription:cancel ID`

Send this attribute if you want to mark this subscription as cancelled.

```sh-session
USAGE
  $ commercelayer order_subscription:cancel ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this subscription as cancelled.
```

_See code: [src/commands/order_subscription/cancel.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order_subscription/cancel.ts)_

### `commercelayer order_subscription:deactivate ID`

Send this attribute if you want to mark this subscription as inactive.

```sh-session
USAGE
  $ commercelayer order_subscription:deactivate ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this subscription as inactive.
```

_See code: [src/commands/order_subscription/deactivate.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/order_subscription/deactivate.ts)_

### `commercelayer payment_method ID`

Execute an action on a resource of type payment_methods.

```sh-session
USAGE
  $ commercelayer payment_method ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type payment_methods
```

_See code: [src/commands/payment_method/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/payment_method/index.ts)_

### `commercelayer payment_method:disable ID`

Send this attribute if you want to mark the payment method as disabled.

```sh-session
USAGE
  $ commercelayer payment_method:disable ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark the payment method as disabled.
```

_See code: [src/commands/payment_method/disable.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/payment_method/disable.ts)_

### `commercelayer payment_method:enable ID`

Send this attribute if you want to mark the payment method as enabled.

```sh-session
USAGE
  $ commercelayer payment_method:enable ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark the payment method as enabled.
```

_See code: [src/commands/payment_method/enable.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/payment_method/enable.ts)_

### `commercelayer return ID`

Execute an action on a resource of type returns.

```sh-session
USAGE
  $ commercelayer return ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type returns
```

_See code: [src/commands/return/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/index.ts)_

### `commercelayer return:approve ID`

Send this attribute if you want to mark this return as approved.

```sh-session
USAGE
  $ commercelayer return:approve ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this return as approved.
```

_See code: [src/commands/return/approve.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/approve.ts)_

### `commercelayer return:archive ID`

Send this attribute if you want to archive the return.

```sh-session
USAGE
  $ commercelayer return:archive ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to archive the return.
```

_See code: [src/commands/return/archive.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/archive.ts)_

### `commercelayer return:cancel ID`

Send this attribute if you want to mark this return as cancelled.

```sh-session
USAGE
  $ commercelayer return:cancel ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this return as cancelled.
```

_See code: [src/commands/return/cancel.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/cancel.ts)_

### `commercelayer return:receive ID`

Send this attribute if you want to mark this return as received.

```sh-session
USAGE
  $ commercelayer return:receive ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this return as received.
```

_See code: [src/commands/return/receive.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/receive.ts)_

### `commercelayer return:reject ID`

Send this attribute if you want to mark this return as rejected.

```sh-session
USAGE
  $ commercelayer return:reject ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this return as rejected.
```

_See code: [src/commands/return/reject.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/reject.ts)_

### `commercelayer return:request ID`

Send this attribute if you want to activate this return.

```sh-session
USAGE
  $ commercelayer return:request ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to activate this return.
```

_See code: [src/commands/return/request.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/request.ts)_

### `commercelayer return:restock ID`

Send this attribute if you want to restock all of the return line items.

```sh-session
USAGE
  $ commercelayer return:restock ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to restock all of the return line items.
```

_See code: [src/commands/return/restock.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/restock.ts)_

### `commercelayer return:ship ID`

Send this attribute if you want to mark this return as shipped.

```sh-session
USAGE
  $ commercelayer return:ship ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this return as shipped.
```

_See code: [src/commands/return/ship.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/ship.ts)_

### `commercelayer return:unarchive ID`

Send this attribute if you want to unarchive the return.

```sh-session
USAGE
  $ commercelayer return:unarchive ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to unarchive the return.
```

_See code: [src/commands/return/unarchive.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return/unarchive.ts)_

### `commercelayer return_line_item ID`

Execute an action on a resource of type return_line_items.

```sh-session
USAGE
  $ commercelayer return_line_item ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type return_line_items
```

_See code: [src/commands/return_line_item/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return_line_item/index.ts)_

### `commercelayer return_line_item:restock ID`

Send this attribute if you want to restock the line item.

```sh-session
USAGE
  $ commercelayer return_line_item:restock ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to restock the line item.
```

_See code: [src/commands/return_line_item/restock.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/return_line_item/restock.ts)_

### `commercelayer satispay_payment ID`

Execute an action on a resource of type satispay_payments.

```sh-session
USAGE
  $ commercelayer satispay_payment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type satispay_payments
```

_See code: [src/commands/satispay_payment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/satispay_payment/index.ts)_

### `commercelayer satispay_payment:refresh ID`

Send this attribute if you want to refresh all the pending transactions, can be used as webhooks fallback logic.

```sh-session
USAGE
  $ commercelayer satispay_payment:refresh ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to refresh all the pending transactions, can be used as webhooks fallback logic.
```

_See code: [src/commands/satispay_payment/refresh.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/satispay_payment/refresh.ts)_

### `commercelayer shipment ID`

Execute an action on a resource of type shipments.

```sh-session
USAGE
  $ commercelayer shipment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type shipments
```

_See code: [src/commands/shipment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/index.ts)_

### `commercelayer shipment:get_rates ID`

Send this attribute if you want get the shipping rates from the associated carrier accounts.

```sh-session
USAGE
  $ commercelayer shipment:get_rates ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want get the shipping rates from the associated carrier accounts.
```

_See code: [src/commands/shipment/get_rates.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/get_rates.ts)_

### `commercelayer shipment:on_hold ID`

Send this attribute if you want to put this shipment on hold.

```sh-session
USAGE
  $ commercelayer shipment:on_hold ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to put this shipment on hold.
```

_See code: [src/commands/shipment/on_hold.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/on_hold.ts)_

### `commercelayer shipment:packing ID`

Send this attribute if you want to start packing this shipment.

```sh-session
USAGE
  $ commercelayer shipment:packing ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to start packing this shipment.
```

_See code: [src/commands/shipment/packing.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/packing.ts)_

### `commercelayer shipment:picking ID`

Send this attribute if you want to start picking this shipment.

```sh-session
USAGE
  $ commercelayer shipment:picking ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to start picking this shipment.
```

_See code: [src/commands/shipment/picking.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/picking.ts)_

### `commercelayer shipment:purchase ID`

Send this attribute if you want to purchase this shipment with the selected rate.

```sh-session
USAGE
  $ commercelayer shipment:purchase ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to purchase this shipment with the selected rate.
```

_See code: [src/commands/shipment/purchase.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/purchase.ts)_

### `commercelayer shipment:ready_to_ship ID`

Send this attribute if you want to mark this shipment as ready to ship.

```sh-session
USAGE
  $ commercelayer shipment:ready_to_ship ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this shipment as ready to ship.
```

_See code: [src/commands/shipment/ready_to_ship.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/ready_to_ship.ts)_

### `commercelayer shipment:ship ID`

Send this attribute if you want to mark this shipment as shipped.

```sh-session
USAGE
  $ commercelayer shipment:ship ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this shipment as shipped.
```

_See code: [src/commands/shipment/ship.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipment/ship.ts)_

### `commercelayer shipping_method ID`

Execute an action on a resource of type shipping_methods.

```sh-session
USAGE
  $ commercelayer shipping_method ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type shipping_methods
```

_See code: [src/commands/shipping_method/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipping_method/index.ts)_

### `commercelayer shipping_method:disable ID`

Send this attribute if you want to mark the shipping method as disabled.

```sh-session
USAGE
  $ commercelayer shipping_method:disable ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark the shipping method as disabled.
```

_See code: [src/commands/shipping_method/disable.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipping_method/disable.ts)_

### `commercelayer shipping_method:enable ID`

Send this attribute if you want to mark the shipping method as enabled.

```sh-session
USAGE
  $ commercelayer shipping_method:enable ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark the shipping method as enabled.
```

_See code: [src/commands/shipping_method/enable.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/shipping_method/enable.ts)_

### `commercelayer stock_transfer ID`

Execute an action on a resource of type stock_transfers.

```sh-session
USAGE
  $ commercelayer stock_transfer ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type stock_transfers
```

_See code: [src/commands/stock_transfer/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stock_transfer/index.ts)_

### `commercelayer stock_transfer:cancel ID`

Send this attribute if you want to cancel this stock transfer.

```sh-session
USAGE
  $ commercelayer stock_transfer:cancel ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to cancel this stock transfer.
```

_See code: [src/commands/stock_transfer/cancel.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stock_transfer/cancel.ts)_

### `commercelayer stock_transfer:complete ID`

Send this attribute if you want to complete this stock transfer.

```sh-session
USAGE
  $ commercelayer stock_transfer:complete ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to complete this stock transfer.
```

_See code: [src/commands/stock_transfer/complete.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stock_transfer/complete.ts)_

### `commercelayer stock_transfer:in_transit ID`

Send this attribute if you want to mark this stock transfer as in transit.

```sh-session
USAGE
  $ commercelayer stock_transfer:in_transit ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this stock transfer as in transit.
```

_See code: [src/commands/stock_transfer/in_transit.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stock_transfer/in_transit.ts)_

### `commercelayer stock_transfer:picking ID`

Send this attribute if you want to start picking this stock transfer.

```sh-session
USAGE
  $ commercelayer stock_transfer:picking ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to start picking this stock transfer.
```

_See code: [src/commands/stock_transfer/picking.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stock_transfer/picking.ts)_

### `commercelayer stock_transfer:upcoming ID`

Send this attribute if you want to mark this stock transfer as upcoming.

```sh-session
USAGE
  $ commercelayer stock_transfer:upcoming ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to mark this stock transfer as upcoming.
```

_See code: [src/commands/stock_transfer/upcoming.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stock_transfer/upcoming.ts)_

### `commercelayer stripe_payment ID`

Execute an action on a resource of type stripe_payments.

```sh-session
USAGE
  $ commercelayer stripe_payment ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type stripe_payments
```

_See code: [src/commands/stripe_payment/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stripe_payment/index.ts)_

### `commercelayer stripe_payment:refresh ID`

Send this attribute if you want to refresh the payment status, can be used as webhooks fallback logic.

```sh-session
USAGE
  $ commercelayer stripe_payment:refresh ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to refresh the payment status, can be used as webhooks fallback logic.
```

_See code: [src/commands/stripe_payment/refresh.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stripe_payment/refresh.ts)_

### `commercelayer stripe_payment:update ID`

Send this attribute if you want to update the created payment intent with fresh order data.

```sh-session
USAGE
  $ commercelayer stripe_payment:update ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to update the created payment intent with fresh order data.
```

_See code: [src/commands/stripe_payment/update.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/stripe_payment/update.ts)_

### `commercelayer webhook ID`

Execute an action on a resource of type webhooks.

```sh-session
USAGE
  $ commercelayer webhook ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  execute an action on a resource of type webhooks
```

_See code: [src/commands/webhook/index.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/webhook/index.ts)_

### `commercelayer webhook:reset_circuit ID`

Send this attribute if you want to reset the circuit breaker associated to this webhook to 'closed' state and zero failures count.

```sh-session
USAGE
  $ commercelayer webhook:reset_circuit ID [-u [-j -p]]

ARGUMENTS
  ID  the unique id of the resource

FLAGS
  -j, --json         print result in JSON format
  -p, --print        print out the modified resource
  -u, --unformatted  print JSON output without indentation

DESCRIPTION
  Send this attribute if you want to reset the circuit breaker associated to this webhook to 'closed' state and zero
  failures count.
```

_See code: [src/commands/webhook/reset_circuit.ts](https://github.com/commercelayer/commercelayer-cli-plugin-triggers/blob/main/src/commands/webhook/reset_circuit.ts)_
<!-- commandsstop -->
