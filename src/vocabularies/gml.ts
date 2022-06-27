import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Gml {
    '': NamedNode<'http://www.opengis.net/ont/gml#'>;
    
}

const builder = namespace("http://www.opengis.net/ont/gml#") as any;
export const strict = builder as NamespaceBuilder<keyof Gml> & Gml;
export const loose = builder as NamespaceBuilder & Gml;
