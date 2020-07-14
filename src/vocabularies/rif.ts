import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Rif = NamespaceBuilder & {};
export const rif: Rif = (namespace("http://www.w3.org/2007/rif#") as any);
