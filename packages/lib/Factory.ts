/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import * as StrictBuilders from './index.js'

export interface NsBuildersFactory {
  ns: typeof StrictBuilders
}

export class NsBuildersFactory {
  init() {
    this.ns = StrictBuilders
  }
}
