import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Wdrs {
    '': NamedNode<'http://www.w3.org/2007/05/powder-s#'>;
    /** A POWDER document. */
    "Document": NamedNode<'http://www.w3.org/2007/05/powder-s#Document'>;
    /** A software agent able to process POWDER documents. */
    "Processor": NamedNode<'http://www.w3.org/2007/05/powder-s#Processor'>;
    /** A pointer to a document that describes how Description Resources created by a FOAF Agent or a DC Terms Agent may be authenticated */
    "authenticate": NamedNode<'http://www.w3.org/2007/05/powder-s#authenticate'>;
    /** A property that takes a Boolean value to declare whether the author of the data certifies the described resource. */
    "certified": NamedNode<'http://www.w3.org/2007/05/powder-s#certified'>;
    /** A property that links a resource to a POWDER document that certifies it. */
    "certifiedby": NamedNode<'http://www.w3.org/2007/05/powder-s#certifiedby'>;
    /** A property denoting a description of the specific error found in a given POWDER document. */
    "data_error": NamedNode<'http://www.w3.org/2007/05/powder-s#data_error'>;
    /** An RDF property to exactly match the describedby relationship type introduced in http://www.w3.org/TR/powder-dr/#assoc-linking and formally defined in appendix D of the same document, i.e. the relationship A 'describedby' B asserts that resource B provides a description of resource A. There are no constraints on the format or representation of either A or B, neither are there any further constraints on either resource. */
    "describedby": NamedNode<'http://www.w3.org/2007/05/powder-s#describedby'>;
    /** A property denoting the code of any error encountered by the POWDER processor. */
    "error_code": NamedNode<'http://www.w3.org/2007/05/powder-s#error_code'>;
    /** This property is meant to be used in OWL2 instead of wdrs:matchesregex. It denotes the string data range corresponding to a set of IRIs. */
    "hasIRI": NamedNode<'http://www.w3.org/2007/05/powder-s#hasIRI'>;
    /** This property denotes the author of a POWDER document. */
    "issuedby": NamedNode<'http://www.w3.org/2007/05/powder-s#issuedby'>;
    /** Points to a graphic summary for the resources in a given class. Typically, it is a logo denoting conformance of a given (set of) resource(s) to a given set of criteria. */
    "logo": NamedNode<'http://www.w3.org/2007/05/powder-s#logo'>;
    /** This is the key 'include' property for IRI set definitions in POWDER-S. It is necessary to take account of the POWDER Semantic Extension to process this fully. The value is a regular expression that is matched against an IRI. */
    "matchesregex": NamedNode<'http://www.w3.org/2007/05/powder-s#matchesregex'>;
    /** Property used in results returned from a POWDER Processor that has no data about the candidate resource. The value is the IRI of the processor. */
    "notknownto": NamedNode<'http://www.w3.org/2007/05/powder-s#notknownto'>;
    /** This is the key 'exclude' property for IRI set definitions in POWDER-S. It is necessary to take account of the POWDER Semantic Extension to process this fully. The value is a regular expression that is matched against an IRI. */
    "notmatchesregex": NamedNode<'http://www.w3.org/2007/05/powder-s#notmatchesregex'>;
    /** A property denoting a description of the specific software error. */
    "proc_error": NamedNode<'http://www.w3.org/2007/05/powder-s#proc_error'>;
    /** Links to a Base64-encoded binary SHA-1 hash of the described resource. May be used by POWDER Processors when assessing trustworthiness of a DR. */
    "sha1sum": NamedNode<'http://www.w3.org/2007/05/powder-s#sha1sum'>;
    /** A property that links a POWDER document to some other data source that supports the descriptions provided. */
    "supportedby": NamedNode<'http://www.w3.org/2007/05/powder-s#supportedby'>;
    /** Property linking to a free-text tag which may include spaces. */
    "tag": NamedNode<'http://www.w3.org/2007/05/powder-s#tag'>;
    /** This property provides a summary of the descriptorset that it annotates, suitable for display to end users. */
    "text": NamedNode<'http://www.w3.org/2007/05/powder-s#text'>;
    /** Provides a timestamp that a POWDER Processor may use when assessing trustworthiness of a POWDER document. Informally, a POWDER Processor should normally ignore data in the document before the given date. */
    "validfrom": NamedNode<'http://www.w3.org/2007/05/powder-s#validfrom'>;
    /** Provides a timestamp that a POWDER Processor may use when assessing trustworthiness of a POWDER document. Informally, a POWDER Processor should normally ignore data in the document after the given date. */
    "validuntil": NamedNode<'http://www.w3.org/2007/05/powder-s#validuntil'>;
}

const builder = namespace("http://www.w3.org/2007/05/powder-s#") as any;
export const strict = builder as NamespaceBuilder<keyof Wdrs> & Wdrs;
export const loose = builder as NamespaceBuilder & Wdrs;
