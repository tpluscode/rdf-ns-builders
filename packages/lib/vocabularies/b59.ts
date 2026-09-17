import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface B59 {
    '': NamedNode<'https://barnard59.zazuko.com/vocab#'>;
    "CliCommand": NamedNode<'https://barnard59.zazuko.com/vocab#CliCommand'>;
    "command": NamedNode<'https://barnard59.zazuko.com/vocab#command'>;
    /** The pipeline executed by a CLI command */
    "pipeline": NamedNode<'https://barnard59.zazuko.com/vocab#pipeline'>;
    /** It must be a literal with a path relative to installation directory (node_modules) */
    "source": NamedNode<'https://barnard59.zazuko.com/vocab#source'>;
}

const builder = namespace("https://barnard59.zazuko.com/vocab#") as any;
export const strict = builder as NamespaceBuilder<keyof B59> & B59;
export const loose = builder as NamespaceBuilder & B59;
