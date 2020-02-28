import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Wdr = NamespaceBuilder & {};
export const wdr: Wdr = (namespace("http://www.w3.org/2007/05/powder#") as any);
