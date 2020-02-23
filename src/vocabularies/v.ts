import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type V = NamespaceBuilder & {};
export const v: V = (namespace(prefixes.v) as any);
