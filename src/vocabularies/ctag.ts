import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Ctag {
}
export const ctag: Ctag = (namespace(prefixes.ctag) as any);
