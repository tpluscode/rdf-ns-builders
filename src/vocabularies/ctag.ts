import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Ctag = NamespaceBuilder & {};
export const ctag: Ctag = (namespace("http://commontag.org/ns#") as any);
