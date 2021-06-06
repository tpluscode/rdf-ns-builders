import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface V {
    
}

const builder = namespace("http://rdf.data-vocabulary.org/#") as any;
export const strict = builder as NamespaceBuilder<keyof V> & V;
export const loose = builder as NamespaceBuilder & V;
