import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Dcam {
    '': NamedNode<'http://purl.org/dc/dcam/'>;
    /** An enumerated set of resources. */
    "VocabularyEncodingScheme": NamedNode<'http://purl.org/dc/dcam/VocabularyEncodingScheme'>;
    /** A suggested class for subjects of this property. */
    "domainIncludes": NamedNode<'http://purl.org/dc/dcam/domainIncludes'>;
    /** A relationship between a resource and a vocabulary encoding scheme which indicates that the resource is a member of a set. */
    "memberOf": NamedNode<'http://purl.org/dc/dcam/memberOf'>;
    /** A suggested class for values of this property. */
    "rangeIncludes": NamedNode<'http://purl.org/dc/dcam/rangeIncludes'>;
}

const builder = namespace("http://purl.org/dc/dcam/") as any;
export const strict = builder as NamespaceBuilder<keyof Dcam> & Dcam;
export const loose = builder as NamespaceBuilder & Dcam;
