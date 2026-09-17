/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import * as StrictBuilders from './strict.js'
import type { CustomNamespaces } from './index.js'

export interface NsBuildersFactory {
  ns: typeof StrictBuilders & CustomNamespaces
}

export class NsBuildersFactory {
  init() {
    this.ns = StrictBuilders
  }
}
