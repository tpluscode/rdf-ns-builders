import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Xml = NamespaceBuilder & {};
export const xml: Xml = (namespace(prefixes.xml) as any);
