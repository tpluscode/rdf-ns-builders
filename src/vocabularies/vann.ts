import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Vann {
    /** A reference to a resource that describes changes between this version of a vocabulary and the previous. */
    "changes": NamedNode<'http://purl.org/vocab/vann/changes'>;
    /** A reference to a resource that provides an example of how this resource can be used. */
    "example": NamedNode<'http://purl.org/vocab/vann/example'>;
    /** The preferred namespace prefix to use when using terms from this vocabulary in an XML document. */
    "preferredNamespacePrefix": NamedNode<'http://purl.org/vocab/vann/preferredNamespacePrefix'>;
    /** The preferred namespace URI to use when using terms from this vocabulary in an XML document. */
    "preferredNamespaceUri": NamedNode<'http://purl.org/vocab/vann/preferredNamespaceUri'>;
    /** A group of related terms in a vocabulary. */
    "termGroup": NamedNode<'http://purl.org/vocab/vann/termGroup'>;
    /** A reference to a resource that provides information on how this resource is to be used. */
    "usageNote": NamedNode<'http://purl.org/vocab/vann/usageNote'>;
    "vann-vocab-20050401": NamedNode<'http://purl.org/vocab/vann/vann-vocab-20050401'>;
    "vann-vocab-20040305": NamedNode<'http://purl.org/vocab/vann/vann-vocab-20040305'>;
}

const builder = namespace("http://purl.org/vocab/vann/") as any;
export const strict = builder as NamespaceBuilder<keyof Vann> & Vann;
export const loose = builder as NamespaceBuilder & Vann;
