import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Wdrs = NamespaceBuilder & {};
export const wdrs: Wdrs = (namespace(prefixes.wdrs) as any);
