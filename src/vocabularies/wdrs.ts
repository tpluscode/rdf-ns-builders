import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Wdrs {
}
export const wdrs: Wdrs = (namespace(prefixes.wdrs) as any);
