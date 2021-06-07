import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Dc11 {
    /** An entity responsible for making contributions to the resource. */
    "contributor": NamedNode<'http://purl.org/dc/elements/1.1/contributor'>;
    /** The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant. */
    "coverage": NamedNode<'http://purl.org/dc/elements/1.1/coverage'>;
    /** An entity primarily responsible for making the resource. */
    "creator": NamedNode<'http://purl.org/dc/elements/1.1/creator'>;
    /** A point or period of time associated with an event in the lifecycle of the resource. */
    "date": NamedNode<'http://purl.org/dc/elements/1.1/date'>;
    /** An account of the resource. */
    "description": NamedNode<'http://purl.org/dc/elements/1.1/description'>;
    /** The file format, physical medium, or dimensions of the resource. */
    "format": NamedNode<'http://purl.org/dc/elements/1.1/format'>;
    /** An unambiguous reference to the resource within a given context. */
    "identifier": NamedNode<'http://purl.org/dc/elements/1.1/identifier'>;
    /** A language of the resource. */
    "language": NamedNode<'http://purl.org/dc/elements/1.1/language'>;
    /** An entity responsible for making the resource available. */
    "publisher": NamedNode<'http://purl.org/dc/elements/1.1/publisher'>;
    /** A related resource. */
    "relation": NamedNode<'http://purl.org/dc/elements/1.1/relation'>;
    /** Information about rights held in and over the resource. */
    "rights": NamedNode<'http://purl.org/dc/elements/1.1/rights'>;
    /** A related resource from which the described resource is derived. */
    "source": NamedNode<'http://purl.org/dc/elements/1.1/source'>;
    /** The topic of the resource. */
    "subject": NamedNode<'http://purl.org/dc/elements/1.1/subject'>;
    /** A name given to the resource. */
    "title": NamedNode<'http://purl.org/dc/elements/1.1/title'>;
    /** The nature or genre of the resource. */
    "type": NamedNode<'http://purl.org/dc/elements/1.1/type'>;
}

const builder = namespace("http://purl.org/dc/elements/1.1/") as any;
export const strict = builder as NamespaceBuilder<keyof Dc11> & Dc11;
export const loose = builder as NamespaceBuilder & Dc11;
