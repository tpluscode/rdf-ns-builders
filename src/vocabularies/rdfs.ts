import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rdfs {
    '': NamedNode<'http://www.w3.org/2000/01/rdf-schema#'>;
    /** Further information about the subject resource. */
    "seeAlso": NamedNode<'http://www.w3.org/2000/01/rdf-schema#seeAlso'>;
    /** The class of classes. */
    "Class": NamedNode<'http://www.w3.org/2000/01/rdf-schema#Class'>;
    /** A description of the subject resource. */
    "comment": NamedNode<'http://www.w3.org/2000/01/rdf-schema#comment'>;
    /** The defininition of the subject resource. */
    "isDefinedBy": NamedNode<'http://www.w3.org/2000/01/rdf-schema#isDefinedBy'>;
    /** A human-readable name for the subject. */
    "label": NamedNode<'http://www.w3.org/2000/01/rdf-schema#label'>;
    /** The subject is a subclass of a class. */
    "subClassOf": NamedNode<'http://www.w3.org/2000/01/rdf-schema#subClassOf'>;
    /** The class resource, everything. */
    "Resource": NamedNode<'http://www.w3.org/2000/01/rdf-schema#Resource'>;
    /** The class of RDF containers. */
    "Container": NamedNode<'http://www.w3.org/2000/01/rdf-schema#Container'>;
    /**
     * The class of container membership properties, rdf:_1, rdf:_2, ...,
     *                     all of which are sub-properties of 'member'.
     */
    "ContainerMembershipProperty": NamedNode<'http://www.w3.org/2000/01/rdf-schema#ContainerMembershipProperty'>;
    /** The class of RDF datatypes. */
    "Datatype": NamedNode<'http://www.w3.org/2000/01/rdf-schema#Datatype'>;
    /** The class of literal values, eg. textual strings and integers. */
    "Literal": NamedNode<'http://www.w3.org/2000/01/rdf-schema#Literal'>;
    /** A domain of the subject property. */
    "domain": NamedNode<'http://www.w3.org/2000/01/rdf-schema#domain'>;
    /** A range of the subject property. */
    "range": NamedNode<'http://www.w3.org/2000/01/rdf-schema#range'>;
    /** The subject is a subproperty of a property. */
    "subPropertyOf": NamedNode<'http://www.w3.org/2000/01/rdf-schema#subPropertyOf'>;
    /** A member of the subject resource. */
    "member": NamedNode<'http://www.w3.org/2000/01/rdf-schema#member'>;
}

const builder = namespace("http://www.w3.org/2000/01/rdf-schema#") as any;
export const strict = builder as NamespaceBuilder<keyof Rdfs> & Rdfs;
export const loose = builder as NamespaceBuilder & Rdfs;
