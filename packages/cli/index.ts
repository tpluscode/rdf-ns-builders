import { Command } from 'commander'
import { build } from './lib/index.js'

const program = new Command()

program.command('generate')
  .option('-p, --vocabsPackage <vocabsPackage>', 'Name of source package or path to local module (typescript included)')
  .option('-v, --vocab <vocabsPackage>', 'Name of source package or path to local module (typescript included)')
  .option('-o, --outDir <outDir>', 'Directory in which to create builder modules', 'builders')
  .action(build)

program.parse()
