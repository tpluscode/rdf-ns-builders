import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Xml {
    '': NamedNode<'http://www.w3.org/XML/1998/namespace/'>;
    
}

const builder = namespace("http://www.w3.org/XML/1998/namespace/") as any;
export const strict = builder as NamespaceBuilder<keyof Xml> & Xml;
export const loose = builder as NamespaceBuilder & Xml;
