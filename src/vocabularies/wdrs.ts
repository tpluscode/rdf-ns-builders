import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Wdrs = NamespaceBuilder & {};
export const wdrs: Wdrs = (namespace("http://www.w3.org/2007/05/powder-s#") as any);
