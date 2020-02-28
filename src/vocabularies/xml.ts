import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Xml = NamespaceBuilder & {};
export const xml: Xml = (namespace("http://www.w3.org/XML/1998/namespace") as any);
