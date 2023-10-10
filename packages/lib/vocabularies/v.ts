import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface V {
    '': NamedNode<'http://rdf.data-vocabulary.org/#'>;
    
}

const builder = namespace("http://rdf.data-vocabulary.org/#") as any;
export const strict = builder as NamespaceBuilder<keyof V> & V;
export const loose = builder as NamespaceBuilder & V;
