import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Set {
    '': NamedNode<'http://www.w3.org/2000/10/swap/set#'>;
    /**
     * The subject is a list of sets,
     *     and the objet is the difference of the sets in the object
     */
    "difference": NamedNode<'http://www.w3.org/2000/10/swap/set#difference'>;
    /**
     * This set contains that as a member.
     *     Cwm will bind the subject to each of the members of the object.
     */
    "in": NamedNode<'http://www.w3.org/2000/10/swap/set#in'>;
    /**
     * The subject is a list of sets,
     *     and the objet is the intersection of the sets in the object
     */
    "intersection": NamedNode<'http://www.w3.org/2000/10/swap/set#intersection'>;
    /**
     * This is a member of that set.
     *     Cwm will bind the object to each of the members of the suject.
     */
    "member": NamedNode<'http://www.w3.org/2000/10/swap/set#member'>;
    /**
     * The subject is a list of sets,
     *     and the objet is the symmetricDifference of the sets in the object
     */
    "symmetricDifference": NamedNode<'http://www.w3.org/2000/10/swap/set#symmetricDifference'>;
    /**
     * The subject is a list [sic] of sets,
     *     and the objet is the union of the sets in the object
     */
    "union": NamedNode<'http://www.w3.org/2000/10/swap/set#union'>;
}

const builder = namespace("http://www.w3.org/2000/10/swap/set#") as any;
export const strict = builder as NamespaceBuilder<keyof Set> & Set;
export const loose = builder as NamespaceBuilder & Set;
