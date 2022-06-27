import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Void {
    '': NamedNode<'http://rdfs.org/ns/void#'>;
    /** A set of RDF triples that are published, maintained or aggregated by a single provider. */
    "Dataset": NamedNode<'http://rdfs.org/ns/void#Dataset'>;
    /** A web resource whose foaf:primaryTopic or foaf:topics include void:Datasets. */
    "DatasetDescription": NamedNode<'http://rdfs.org/ns/void#DatasetDescription'>;
    /** A collection of RDF links between two void:Datasets. */
    "Linkset": NamedNode<'http://rdfs.org/ns/void#Linkset'>;
    /** A technical feature of a void:Dataset, such as a supported RDF serialization format. */
    "TechnicalFeature": NamedNode<'http://rdfs.org/ns/void#TechnicalFeature'>;
    /** The rdfs:Class that is the rdf:type of all entities in a class-based partition. */
    "class": NamedNode<'http://rdfs.org/ns/void#class'>;
    /** A subset of a void:Dataset that contains only the entities of a certain rdfs:Class. */
    "classPartition": NamedNode<'http://rdfs.org/ns/void#classPartition'>;
    /** The total number of distinct classes in a void:Dataset. In other words, the number of distinct resources occuring as objects of rdf:type triples in the dataset. */
    "classes": NamedNode<'http://rdfs.org/ns/void#classes'>;
    /** An RDF dump, partial or complete, of a void:Dataset. */
    "dataDump": NamedNode<'http://rdfs.org/ns/void#dataDump'>;
    /** The total number of distinct objects in a void:Dataset. In other words, the number of distinct resources that occur in the object position of triples in the dataset. Literals are included in this count. */
    "distinctObjects": NamedNode<'http://rdfs.org/ns/void#distinctObjects'>;
    /** The total number of distinct subjects in a void:Dataset. In other words, the number of distinct resources that occur in the subject position of triples in the dataset. */
    "distinctSubjects": NamedNode<'http://rdfs.org/ns/void#distinctSubjects'>;
    /** The total number of documents, for datasets that are published as a set of individual documents, such as RDF/XML documents or RDFa-annotated web pages. Non-RDF documents, such as web pages in HTML or images, are usually not included in this count. This property is intended for datasets where the total number of triples or entities is hard to determine. void:triples or void:entities should be preferred where practical. */
    "documents": NamedNode<'http://rdfs.org/ns/void#documents'>;
    /** The total number of entities that are described in a void:Dataset. */
    "entities": NamedNode<'http://rdfs.org/ns/void#entities'>;
    "exampleResource": NamedNode<'http://rdfs.org/ns/void#exampleResource'>;
    "feature": NamedNode<'http://rdfs.org/ns/void#feature'>;
    /** Points to the void:Dataset that a document is a part of. */
    "inDataset": NamedNode<'http://rdfs.org/ns/void#inDataset'>;
    "linkPredicate": NamedNode<'http://rdfs.org/ns/void#linkPredicate'>;
    /** The dataset describing the objects of the triples contained in the Linkset. */
    "objectsTarget": NamedNode<'http://rdfs.org/ns/void#objectsTarget'>;
    /** An OpenSearch description document for a free-text search service over a void:Dataset. */
    "openSearchDescription": NamedNode<'http://rdfs.org/ns/void#openSearchDescription'>;
    /** The total number of distinct properties in a void:Dataset. In other words, the number of distinct resources that occur in the predicate position of triples in the dataset. */
    "properties": NamedNode<'http://rdfs.org/ns/void#properties'>;
    /** The rdf:Property that is the predicate of all triples in a property-based partition. */
    "property": NamedNode<'http://rdfs.org/ns/void#property'>;
    /** A subset of a void:Dataset that contains only the triples of a certain rdf:Property. */
    "propertyPartition": NamedNode<'http://rdfs.org/ns/void#propertyPartition'>;
    /** A top concept or entry point for a void:Dataset that is structured in a tree-like fashion. All resources in a dataset can be reached by following links from its root resources in a small number of steps. */
    "rootResource": NamedNode<'http://rdfs.org/ns/void#rootResource'>;
    "sparqlEndpoint": NamedNode<'http://rdfs.org/ns/void#sparqlEndpoint'>;
    /** The dataset describing the subjects of triples contained in the Linkset. */
    "subjectsTarget": NamedNode<'http://rdfs.org/ns/void#subjectsTarget'>;
    "subset": NamedNode<'http://rdfs.org/ns/void#subset'>;
    /** One of the two datasets linked by the Linkset. */
    "target": NamedNode<'http://rdfs.org/ns/void#target'>;
    /** The total number of triples contained in a void:Dataset. */
    "triples": NamedNode<'http://rdfs.org/ns/void#triples'>;
    /** Defines a simple URI look-up protocol for accessing a dataset. */
    "uriLookupEndpoint": NamedNode<'http://rdfs.org/ns/void#uriLookupEndpoint'>;
    /** Defines a regular expression pattern matching URIs in the dataset. */
    "uriRegexPattern": NamedNode<'http://rdfs.org/ns/void#uriRegexPattern'>;
    /** A URI that is a common string prefix of all the entity URIs in a void:Dataset. */
    "uriSpace": NamedNode<'http://rdfs.org/ns/void#uriSpace'>;
    /** A vocabulary that is used in the dataset. */
    "vocabulary": NamedNode<'http://rdfs.org/ns/void#vocabulary'>;
}

const builder = namespace("http://rdfs.org/ns/void#") as any;
export const strict = builder as NamespaceBuilder<keyof Void> & Void;
export const loose = builder as NamespaceBuilder & Void;
