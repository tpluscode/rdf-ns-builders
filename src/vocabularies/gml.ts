import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Gml {
}
export const gml: Gml = (namespace(prefixes.gml) as any);
