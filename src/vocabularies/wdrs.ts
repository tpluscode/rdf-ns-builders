import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Wdrs {
    
}

const builder = namespace("http://www.w3.org/2007/05/powder-s#") as any;
export const strict = builder as NamespaceBuilder<keyof Wdrs> & Wdrs;
export const loose = builder as NamespaceBuilder & Wdrs;
