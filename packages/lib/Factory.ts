import * as StrictBuilders from './index.js'

export interface NsBuildersFactory {
  ns: typeof StrictBuilders
}

export class NsBuildersFactory {
  init() {
    this.ns = StrictBuilders
  }
}
