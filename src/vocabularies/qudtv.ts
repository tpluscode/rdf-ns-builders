import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Qudtv = NamespaceBuilder & {};
export const qudtv: Qudtv = (namespace(prefixes.qudtv) as any);
