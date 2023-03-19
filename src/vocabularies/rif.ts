import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rif {
    '': NamedNode<'http://www.w3.org/2007/rif#'>;
    
}

const builder = namespace("http://www.w3.org/2007/rif#") as any;
export const strict = builder as NamespaceBuilder<keyof Rif> & Rif;
export const loose = builder as NamespaceBuilder & Rif;
