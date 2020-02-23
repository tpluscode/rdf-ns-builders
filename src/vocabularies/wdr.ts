import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Wdr {
}
export const wdr: Wdr = (namespace(prefixes.wdr) as any);
