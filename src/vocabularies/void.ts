import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Void = NamespaceBuilder & {
    /*A set of RDF triples that are published, maintained or aggregated by a single provider.*/
    "Dataset": NamedNode;
    /*A web resource whose foaf:primaryTopic or foaf:topics include void:Datasets.*/
    "DatasetDescription": NamedNode;
    /*A collection of RDF links between two void:Datasets.*/
    "Linkset": NamedNode;
    /*A technical feature of a void:Dataset, such as a supported RDF serialization format.*/
    "TechnicalFeature": NamedNode;
    /*The rdfs:Class that is the rdf:type of all entities in a class-based partition.*/
    "class": NamedNode;
    /*A subset of a void:Dataset that contains only the entities of a certain rdfs:Class.*/
    "classPartition": NamedNode;
    /*The total number of distinct classes in a void:Dataset. In other words, the number of distinct resources occuring as objects of rdf:type triples in the dataset.*/
    "classes": NamedNode;
    /*An RDF dump, partial or complete, of a void:Dataset.*/
    "dataDump": NamedNode;
    /*The total number of distinct objects in a void:Dataset. In other words, the number of distinct resources that occur in the object position of triples in the dataset. Literals are included in this count.*/
    "distinctObjects": NamedNode;
    /*The total number of distinct subjects in a void:Dataset. In other words, the number of distinct resources that occur in the subject position of triples in the dataset.*/
    "distinctSubjects": NamedNode;
    /*The total number of documents, for datasets that are published as a set of individual documents, such as RDF/XML documents or RDFa-annotated web pages. Non-RDF documents, such as web pages in HTML or images, are usually not included in this count. This property is intended for datasets where the total number of triples or entities is hard to determine. void:triples or void:entities should be preferred where practical.*/
    "documents": NamedNode;
    /*The total number of entities that are described in a void:Dataset.*/
    "entities": NamedNode;
    "exampleResource": NamedNode;
    "feature": NamedNode;
    /*Points to the void:Dataset that a document is a part of.*/
    "inDataset": NamedNode;
    "linkPredicate": NamedNode;
    /*The dataset describing the objects of the triples contained in the Linkset.*/
    "objectsTarget": NamedNode;
    /*An OpenSearch description document for a free-text search service over a void:Dataset.*/
    "openSearchDescription": NamedNode;
    /*The total number of distinct properties in a void:Dataset. In other words, the number of distinct resources that occur in the predicate position of triples in the dataset.*/
    "properties": NamedNode;
    /*The rdf:Property that is the predicate of all triples in a property-based partition.*/
    "property": NamedNode;
    /*A subset of a void:Dataset that contains only the triples of a certain rdf:Property.*/
    "propertyPartition": NamedNode;
    /*A top concept or entry point for a void:Dataset that is structured in a tree-like fashion. All resources in a dataset can be reached by following links from its root resources in a small number of steps.*/
    "rootResource": NamedNode;
    "sparqlEndpoint": NamedNode;
    /*The dataset describing the subjects of triples contained in the Linkset.*/
    "subjectsTarget": NamedNode;
    "subset": NamedNode;
    /*One of the two datasets linked by the Linkset.*/
    "target": NamedNode;
    /*The total number of triples contained in a void:Dataset.*/
    "triples": NamedNode;
    /*Defines a simple URI look-up protocol for accessing a dataset.*/
    "uriLookupEndpoint": NamedNode;
    /*Defines a regular expression pattern matching URIs in the dataset.*/
    "uriRegexPattern": NamedNode;
    /*A URI that is a common string prefix of all the entity URIs in a void:Dataset.*/
    "uriSpace": NamedNode;
    /*A vocabulary that is used in the dataset.*/
    "vocabulary": NamedNode;
};
export const _void: Void = (namespace(prefixes.void) as any);
