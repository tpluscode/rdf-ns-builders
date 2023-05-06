import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface List {
    '': NamedNode<'http://www.w3.org/2000/10/swap/list#'>;
    /**
     * Iff the subject is a list of lists and the concatenation of all those lists 
     * is the object, then this is true.
     * eg  ( (1 2) (3 4) ) list:append (1 2 3 4).
     * The object can be calculated as a function of the subject.
     *
     */
    "append": NamedNode<'http://www.w3.org/2000/10/swap/list#append'>;
    /**
     * Iff the object is a list and the subject is in that list, then this is true.
     *
     */
    "in": NamedNode<'http://www.w3.org/2000/10/swap/list#in'>;
    /**
     * Iff the suject is a list and the obbject is the last thing that list, then this is true.
     * The object can be calculated as a function of the list.
     *
     */
    "last": NamedNode<'http://www.w3.org/2000/10/swap/list#last'>;
    /**
     * Iff the subject is a list and the obbject is in that list, then this is true.
     *
     */
    "member": NamedNode<'http://www.w3.org/2000/10/swap/list#member'>;
}

const builder = namespace("http://www.w3.org/2000/10/swap/list#") as any;
export const strict = builder as NamespaceBuilder<keyof List> & List;
export const loose = builder as NamespaceBuilder & List;
