import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Rif = NamespaceBuilder & {};
export const rif: Rif = (namespace("http://www.w3.org/2007/rif#") as any);
