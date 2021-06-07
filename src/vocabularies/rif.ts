import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rif {
    
}

const builder = namespace("http://www.w3.org/2007/rif#") as any;
export const strict = builder as NamespaceBuilder<keyof Rif> & Rif;
export const loose = builder as NamespaceBuilder & Rif;
