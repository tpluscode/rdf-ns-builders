#!/usr/bin/env ts-node

import Program from 'commander'
import { build } from '../build'

Program.command('generate')
  .requiredOption('-p, --vocabsPackage <vocabsPackage>', 'Name of source package or path to local module (typescript included)')
  .option('-o, --outDir <outDir>', 'Directory in which to create builder modules', 'builders')
  .action(build)

Program.parse(process.argv)
