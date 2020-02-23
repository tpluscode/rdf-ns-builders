import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Vs {
    /*more information about the status etc of a term, typically human oriented*/
    "moreinfo": NamedNode;
    /*the status of a vocabulary term, expressed as a short symbolic string; known values include 'unstable','testing', 'stable' and 'archaic'*/
    "term_status": NamedNode;
    /*human-oriented documentation, examples etc for use of this term*/
    "userdocs": NamedNode;
}
export const vs: Vs = (namespace(prefixes.vs) as any);
