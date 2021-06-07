import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface V {
    
}

const builder = namespace("http://rdf.data-vocabulary.org/#") as any;
export const strict = builder as NamespaceBuilder<keyof V> & V;
export const loose = builder as NamespaceBuilder & V;
