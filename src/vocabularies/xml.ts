import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Xml {
}
export const xml: Xml = (namespace(prefixes.xml) as any);
