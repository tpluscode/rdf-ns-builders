import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Shsh {
    '': NamedNode<'https://www.w3.org/ns/shacl-shacl#'>;
    
}

const builder = namespace("https://www.w3.org/ns/shacl-shacl#") as any;
export const strict = builder as NamespaceBuilder<keyof Shsh> & Shsh;
export const loose = builder as NamespaceBuilder & Shsh;
