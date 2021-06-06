import Program from 'commander'
import { build } from '../build'

Program.command('generate')
  .requiredOption('-p, --vocabsPackage <vocabsPackage>', 'Name of source package. Must be installede and have exact same exports as @zazuko/rdf-vocabularies')
  .option('-o, --outDir <outDir>', 'Directory in which to create builder modules', 'vocabularies')
  .action(build)

Program.parse(process.argv)
