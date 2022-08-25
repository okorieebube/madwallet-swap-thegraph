import { log } from '@graphprotocol/graph-ts'

import {
  Swap
} from "../generated/SwapRouter/SwapRouter"

import { SwapItem } from "../generated/schema"

export function handleSwap(event: Swap): void {
  let swapItem = new SwapItem(event.transaction.hash.toHex())
  swapItem.amount = event.params.feeAmount
  swapItem.save()
}
