import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Wdr = NamespaceBuilder & {};
export const wdr: Wdr = (namespace(prefixes.wdr) as any);
