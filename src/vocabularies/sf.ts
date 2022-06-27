import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Sf {
    '': NamedNode<'http://www.opengis.net/ont/sf#'>;
    
}

const builder = namespace("http://www.opengis.net/ont/sf#") as any;
export const strict = builder as NamespaceBuilder<keyof Sf> & Sf;
export const loose = builder as NamespaceBuilder & Sf;
