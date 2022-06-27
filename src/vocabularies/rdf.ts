import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rdf {
    '': NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#'>;
    /** The class of containers of alternatives. */
    "Alt": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#Alt'>;
    /** The class of unordered containers. */
    "Bag": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#Bag'>;
    /** A class representing a compound literal. */
    "CompoundLiteral": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#CompoundLiteral'>;
    /** The datatype of RDF literals storing fragments of HTML content */
    "HTML": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#HTML'>;
    /** The datatype of RDF literals storing JSON content. */
    "JSON": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#JSON'>;
    /** The class of RDF Lists. */
    "List": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#List'>;
    /** The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2 */
    "PlainLiteral": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#PlainLiteral'>;
    /** The class of RDF properties. */
    "Property": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#Property'>;
    /** The class of ordered containers. */
    "Seq": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#Seq'>;
    /** The class of RDF statements. */
    "Statement": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement'>;
    /** The datatype of XML literal values. */
    "XMLLiteral": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#XMLLiteral'>;
    /** The base direction component of a CompoundLiteral. */
    "direction": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#direction'>;
    /** The first item in the subject RDF list. */
    "first": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#first'>;
    /** The datatype of language-tagged string values */
    "langString": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#langString'>;
    /** The language component of a CompoundLiteral. */
    "language": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#language'>;
    /** The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it. */
    "nil": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#nil'>;
    /** The object of the subject RDF statement. */
    "object": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#object'>;
    /** The predicate of the subject RDF statement. */
    "predicate": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate'>;
    /** The rest of the subject RDF list after the first item. */
    "rest": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#rest'>;
    /** The subject of the subject RDF statement. */
    "subject": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#subject'>;
    /** The subject is an instance of a class. */
    "type": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'>;
    /** Idiomatic property used for structured values. */
    "value": NamedNode<'http://www.w3.org/1999/02/22-rdf-syntax-ns#value'>;
}

const builder = namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Rdf> & Rdf;
export const loose = builder as NamespaceBuilder & Rdf;
