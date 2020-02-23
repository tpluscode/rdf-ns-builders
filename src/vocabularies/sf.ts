import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Sf = NamespaceBuilder & {};
export const sf: Sf = (namespace(prefixes.sf) as any);
