import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Cnt = NamespaceBuilder & {
    /*The content.*/
    "Content": NamedNode;
    /*The base64 encoded content (can be used for binary content).*/
    "ContentAsBase64": NamedNode;
    /*The text content (can be used for text content).*/
    "ContentAsText": NamedNode;
    /*The XML content (can only be used for XML-wellformed content).*/
    "ContentAsXML": NamedNode;
    /*The document type declaration.*/
    "DoctypeDecl": NamedNode;
    /*The Base64 encoded byte sequence of the content.*/
    "bytes": NamedNode;
    /*The character encoding used to create a character sequence from a byte sequence or vice versa.*/
    "characterEncoding": NamedNode;
    /*The character sequence of the text content.*/
    "chars": NamedNode;
    /*The character encoding declared in the XML declaration.*/
    "declaredEncoding": NamedNode;
    /*The document type name.*/
    "doctypeName": NamedNode;
    /*The document type declaration.*/
    "dtDecl": NamedNode;
    /*The internal document type definition subset within the document type declarations.*/
    "internalSubset": NamedNode;
    /*The XML content preceding the document type declaration.*/
    "leadingMisc": NamedNode;
    /*The document type declarations's public identifier.*/
    "publicId": NamedNode;
    /*The XML content following the document type declaration.*/
    "rest": NamedNode;
    /*The standalone declaration in the XML declaration.*/
    "standalone": NamedNode;
    /*The document type declarations's system identifier (typed: xsd:anyURI)*/
    "systemId": NamedNode;
    /*The XML version declared in the XML declaration.*/
    "version": NamedNode;
};
export const cnt: Cnt = (namespace(prefixes.cnt) as any);
