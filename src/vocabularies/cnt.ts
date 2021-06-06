import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Cnt {
    /** The content. */
    "Content": NamedNode<'http://www.w3.org/2011/content#Content'>;
    /** The base64 encoded content (can be used for binary content). */
    "ContentAsBase64": NamedNode<'http://www.w3.org/2011/content#ContentAsBase64'>;
    /** The text content (can be used for text content). */
    "ContentAsText": NamedNode<'http://www.w3.org/2011/content#ContentAsText'>;
    /** The XML content (can only be used for XML-wellformed content). */
    "ContentAsXML": NamedNode<'http://www.w3.org/2011/content#ContentAsXML'>;
    /** The document type declaration. */
    "DoctypeDecl": NamedNode<'http://www.w3.org/2011/content#DoctypeDecl'>;
    /** The Base64 encoded byte sequence of the content. */
    "bytes": NamedNode<'http://www.w3.org/2011/content#bytes'>;
    /** The character encoding used to create a character sequence from a byte sequence or vice versa. */
    "characterEncoding": NamedNode<'http://www.w3.org/2011/content#characterEncoding'>;
    /** The character sequence of the text content. */
    "chars": NamedNode<'http://www.w3.org/2011/content#chars'>;
    /** The character encoding declared in the XML declaration. */
    "declaredEncoding": NamedNode<'http://www.w3.org/2011/content#declaredEncoding'>;
    /** The document type name. */
    "doctypeName": NamedNode<'http://www.w3.org/2011/content#doctypeName'>;
    /** The document type declaration. */
    "dtDecl": NamedNode<'http://www.w3.org/2011/content#dtDecl'>;
    /** The internal document type definition subset within the document type declarations. */
    "internalSubset": NamedNode<'http://www.w3.org/2011/content#internalSubset'>;
    /** The XML content preceding the document type declaration. */
    "leadingMisc": NamedNode<'http://www.w3.org/2011/content#leadingMisc'>;
    /** The document type declarations's public identifier. */
    "publicId": NamedNode<'http://www.w3.org/2011/content#publicId'>;
    /** The XML content following the document type declaration. */
    "rest": NamedNode<'http://www.w3.org/2011/content#rest'>;
    /** The standalone declaration in the XML declaration. */
    "standalone": NamedNode<'http://www.w3.org/2011/content#standalone'>;
    /** The document type declarations's system identifier (typed: xsd:anyURI) */
    "systemId": NamedNode<'http://www.w3.org/2011/content#systemId'>;
    /** The XML version declared in the XML declaration. */
    "version": NamedNode<'http://www.w3.org/2011/content#version'>;
}

const builder = namespace("http://www.w3.org/2011/content#") as any;
export const strict = builder as NamespaceBuilder<keyof Cnt> & Cnt;
export const loose = builder as NamespaceBuilder & Cnt;
