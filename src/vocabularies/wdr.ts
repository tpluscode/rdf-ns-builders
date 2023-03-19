import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Wdr {
    '': NamedNode<'http://www.w3.org/2007/05/powder#'>;
    
}

const builder = namespace("http://www.w3.org/2007/05/powder#") as any;
export const strict = builder as NamespaceBuilder<keyof Wdr> & Wdr;
export const loose = builder as NamespaceBuilder & Wdr;
