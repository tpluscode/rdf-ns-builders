import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Wdr {
    
}

const builder = namespace("http://www.w3.org/2007/05/powder#") as any;
export const strict = builder as NamespaceBuilder<keyof Wdr> & Wdr;
export const loose = builder as NamespaceBuilder & Wdr;
