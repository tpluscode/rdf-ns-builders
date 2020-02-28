import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Wdrs = NamespaceBuilder & {};
export const wdrs: Wdrs = (namespace("http://www.w3.org/2007/05/powder-s#") as any);
