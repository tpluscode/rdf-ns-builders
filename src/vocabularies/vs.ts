import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Vs {
    '': NamedNode<'http://www.w3.org/2003/06/sw-vocab-status/ns#'>;
    /** more information about the status etc of a term, typically human oriented */
    "moreinfo": NamedNode<'http://www.w3.org/2003/06/sw-vocab-status/ns#moreinfo'>;
    /** the status of a vocabulary term, expressed as a short symbolic string; known values include 'unstable','testing', 'stable' and 'archaic' */
    "term_status": NamedNode<'http://www.w3.org/2003/06/sw-vocab-status/ns#term_status'>;
    /** human-oriented documentation, examples etc for use of this term */
    "userdocs": NamedNode<'http://www.w3.org/2003/06/sw-vocab-status/ns#userdocs'>;
}

const builder = namespace("http://www.w3.org/2003/06/sw-vocab-status/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Vs> & Vs;
export const loose = builder as NamespaceBuilder & Vs;
