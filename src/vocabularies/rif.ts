import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Rif {
}
export const rif: Rif = (namespace(prefixes.rif) as any);
