import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Vann {
    /*A reference to a resource that describes changes between this version of a vocabulary and the previous.*/
    "changes": NamedNode;
    /*A reference to a resource that provides an example of how this resource can be used.*/
    "example": NamedNode;
    /*The preferred namespace prefix to use when using terms from this vocabulary in an XML document.*/
    "preferredNamespacePrefix": NamedNode;
    /*The preferred namespace URI to use when using terms from this vocabulary in an XML document.*/
    "preferredNamespaceUri": NamedNode;
    /*A group of related terms in a vocabulary.*/
    "termGroup": NamedNode;
    /*A reference to a resource that provides information on how this resource is to be used.*/
    "usageNote": NamedNode;
    "vann-vocab-20050401": NamedNode;
    "vann-vocab-20040305": NamedNode;
}
export const vann: Vann = (namespace(prefixes.vann) as any);
