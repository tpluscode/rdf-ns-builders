import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Owl {
    '': NamedNode<'http://www.w3.org/2002/07/owl#'>;
    /** The class of collections of pairwise different individuals. */
    "AllDifferent": NamedNode<'http://www.w3.org/2002/07/owl#AllDifferent'>;
    /** The class of collections of pairwise disjoint classes. */
    "AllDisjointClasses": NamedNode<'http://www.w3.org/2002/07/owl#AllDisjointClasses'>;
    /** The class of collections of pairwise disjoint properties. */
    "AllDisjointProperties": NamedNode<'http://www.w3.org/2002/07/owl#AllDisjointProperties'>;
    /** The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object. */
    "Annotation": NamedNode<'http://www.w3.org/2002/07/owl#Annotation'>;
    /** The class of annotation properties. */
    "AnnotationProperty": NamedNode<'http://www.w3.org/2002/07/owl#AnnotationProperty'>;
    /** The class of asymmetric properties. */
    "AsymmetricProperty": NamedNode<'http://www.w3.org/2002/07/owl#AsymmetricProperty'>;
    /** The class of object properties. */
    "ObjectProperty": NamedNode<'http://www.w3.org/2002/07/owl#ObjectProperty'>;
    /** The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object. */
    "Axiom": NamedNode<'http://www.w3.org/2002/07/owl#Axiom'>;
    /** The class of OWL classes. */
    "Class": NamedNode<'http://www.w3.org/2002/07/owl#Class'>;
    /** The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead. */
    "DataRange": NamedNode<'http://www.w3.org/2002/07/owl#DataRange'>;
    /** The class of data properties. */
    "DatatypeProperty": NamedNode<'http://www.w3.org/2002/07/owl#DatatypeProperty'>;
    /** The class of deprecated classes. */
    "DeprecatedClass": NamedNode<'http://www.w3.org/2002/07/owl#DeprecatedClass'>;
    /** The class of deprecated properties. */
    "DeprecatedProperty": NamedNode<'http://www.w3.org/2002/07/owl#DeprecatedProperty'>;
    /** The class of functional properties. */
    "FunctionalProperty": NamedNode<'http://www.w3.org/2002/07/owl#FunctionalProperty'>;
    /** The class of inverse-functional properties. */
    "InverseFunctionalProperty": NamedNode<'http://www.w3.org/2002/07/owl#InverseFunctionalProperty'>;
    /** The class of irreflexive properties. */
    "IrreflexiveProperty": NamedNode<'http://www.w3.org/2002/07/owl#IrreflexiveProperty'>;
    /** The class of named individuals. */
    "NamedIndividual": NamedNode<'http://www.w3.org/2002/07/owl#NamedIndividual'>;
    /** The class of OWL individuals. */
    "Thing": NamedNode<'http://www.w3.org/2002/07/owl#Thing'>;
    /** The class of negative property assertions. */
    "NegativePropertyAssertion": NamedNode<'http://www.w3.org/2002/07/owl#NegativePropertyAssertion'>;
    /** This is the empty class. */
    "Nothing": NamedNode<'http://www.w3.org/2002/07/owl#Nothing'>;
    /** The class of ontologies. */
    "Ontology": NamedNode<'http://www.w3.org/2002/07/owl#Ontology'>;
    /** The class of ontology properties. */
    "OntologyProperty": NamedNode<'http://www.w3.org/2002/07/owl#OntologyProperty'>;
    /** The class of reflexive properties. */
    "ReflexiveProperty": NamedNode<'http://www.w3.org/2002/07/owl#ReflexiveProperty'>;
    /** The class of property restrictions. */
    "Restriction": NamedNode<'http://www.w3.org/2002/07/owl#Restriction'>;
    /** The class of symmetric properties. */
    "SymmetricProperty": NamedNode<'http://www.w3.org/2002/07/owl#SymmetricProperty'>;
    /** The class of transitive properties. */
    "TransitiveProperty": NamedNode<'http://www.w3.org/2002/07/owl#TransitiveProperty'>;
    /** The property that determines the class that a universal property restriction refers to. */
    "allValuesFrom": NamedNode<'http://www.w3.org/2002/07/owl#allValuesFrom'>;
    /** The property that determines the predicate of an annotated axiom or annotated annotation. */
    "annotatedProperty": NamedNode<'http://www.w3.org/2002/07/owl#annotatedProperty'>;
    /** The property that determines the subject of an annotated axiom or annotated annotation. */
    "annotatedSource": NamedNode<'http://www.w3.org/2002/07/owl#annotatedSource'>;
    /** The property that determines the object of an annotated axiom or annotated annotation. */
    "annotatedTarget": NamedNode<'http://www.w3.org/2002/07/owl#annotatedTarget'>;
    /** The property that determines the predicate of a negative property assertion. */
    "assertionProperty": NamedNode<'http://www.w3.org/2002/07/owl#assertionProperty'>;
    /** The annotation property that indicates that a given ontology is backward compatible with another ontology. */
    "backwardCompatibleWith": NamedNode<'http://www.w3.org/2002/07/owl#backwardCompatibleWith'>;
    /** The data property that does not relate any individual to any data value. */
    "bottomDataProperty": NamedNode<'http://www.w3.org/2002/07/owl#bottomDataProperty'>;
    /** The object property that does not relate any two individuals. */
    "bottomObjectProperty": NamedNode<'http://www.w3.org/2002/07/owl#bottomObjectProperty'>;
    /** The property that determines the cardinality of an exact cardinality restriction. */
    "cardinality": NamedNode<'http://www.w3.org/2002/07/owl#cardinality'>;
    /** The property that determines that a given class is the complement of another class. */
    "complementOf": NamedNode<'http://www.w3.org/2002/07/owl#complementOf'>;
    /** The property that determines that a given data range is the complement of another data range with respect to the data domain. */
    "datatypeComplementOf": NamedNode<'http://www.w3.org/2002/07/owl#datatypeComplementOf'>;
    /** The annotation property that indicates that a given entity has been deprecated. */
    "deprecated": NamedNode<'http://www.w3.org/2002/07/owl#deprecated'>;
    /** The property that determines that two given individuals are different. */
    "differentFrom": NamedNode<'http://www.w3.org/2002/07/owl#differentFrom'>;
    /** The property that determines that a given class is equivalent to the disjoint union of a collection of other classes. */
    "disjointUnionOf": NamedNode<'http://www.w3.org/2002/07/owl#disjointUnionOf'>;
    /** The property that determines that two given classes are disjoint. */
    "disjointWith": NamedNode<'http://www.w3.org/2002/07/owl#disjointWith'>;
    /** The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom. */
    "distinctMembers": NamedNode<'http://www.w3.org/2002/07/owl#distinctMembers'>;
    /** The property that determines that two given classes are equivalent, and that is used to specify datatype definitions. */
    "equivalentClass": NamedNode<'http://www.w3.org/2002/07/owl#equivalentClass'>;
    /** The property that determines that two given properties are equivalent. */
    "equivalentProperty": NamedNode<'http://www.w3.org/2002/07/owl#equivalentProperty'>;
    /** The property that determines the collection of properties that jointly build a key. */
    "hasKey": NamedNode<'http://www.w3.org/2002/07/owl#hasKey'>;
    /** The property that determines the property that a self restriction refers to. */
    "hasSelf": NamedNode<'http://www.w3.org/2002/07/owl#hasSelf'>;
    /** The property that determines the individual that a has-value restriction refers to. */
    "hasValue": NamedNode<'http://www.w3.org/2002/07/owl#hasValue'>;
    /** The property that is used for importing other ontologies into a given ontology. */
    "imports": NamedNode<'http://www.w3.org/2002/07/owl#imports'>;
    /** The annotation property that indicates that a given ontology is incompatible with another ontology. */
    "incompatibleWith": NamedNode<'http://www.w3.org/2002/07/owl#incompatibleWith'>;
    /** The property that determines the collection of classes or data ranges that build an intersection. */
    "intersectionOf": NamedNode<'http://www.w3.org/2002/07/owl#intersectionOf'>;
    /** The property that determines that two given properties are inverse. */
    "inverseOf": NamedNode<'http://www.w3.org/2002/07/owl#inverseOf'>;
    /** The property that determines the cardinality of a maximum cardinality restriction. */
    "maxCardinality": NamedNode<'http://www.w3.org/2002/07/owl#maxCardinality'>;
    /** The property that determines the cardinality of a maximum qualified cardinality restriction. */
    "maxQualifiedCardinality": NamedNode<'http://www.w3.org/2002/07/owl#maxQualifiedCardinality'>;
    /** The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom. */
    "members": NamedNode<'http://www.w3.org/2002/07/owl#members'>;
    /** The property that determines the cardinality of a minimum cardinality restriction. */
    "minCardinality": NamedNode<'http://www.w3.org/2002/07/owl#minCardinality'>;
    /** The property that determines the cardinality of a minimum qualified cardinality restriction. */
    "minQualifiedCardinality": NamedNode<'http://www.w3.org/2002/07/owl#minQualifiedCardinality'>;
    /** The property that determines the class that a qualified object cardinality restriction refers to. */
    "onClass": NamedNode<'http://www.w3.org/2002/07/owl#onClass'>;
    /** The property that determines the data range that a qualified data cardinality restriction refers to. */
    "onDataRange": NamedNode<'http://www.w3.org/2002/07/owl#onDataRange'>;
    /** The property that determines the datatype that a datatype restriction refers to. */
    "onDatatype": NamedNode<'http://www.w3.org/2002/07/owl#onDatatype'>;
    /** The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to. */
    "onProperties": NamedNode<'http://www.w3.org/2002/07/owl#onProperties'>;
    /** The property that determines the property that a property restriction refers to. */
    "onProperty": NamedNode<'http://www.w3.org/2002/07/owl#onProperty'>;
    /** The property that determines the collection of individuals or data values that build an enumeration. */
    "oneOf": NamedNode<'http://www.w3.org/2002/07/owl#oneOf'>;
    /** The annotation property that indicates the predecessor ontology of a given ontology. */
    "priorVersion": NamedNode<'http://www.w3.org/2002/07/owl#priorVersion'>;
    /** The property that determines the n-tuple of properties that build a sub property chain of a given property. */
    "propertyChainAxiom": NamedNode<'http://www.w3.org/2002/07/owl#propertyChainAxiom'>;
    /** The property that determines that two given properties are disjoint. */
    "propertyDisjointWith": NamedNode<'http://www.w3.org/2002/07/owl#propertyDisjointWith'>;
    /** The property that determines the cardinality of an exact qualified cardinality restriction. */
    "qualifiedCardinality": NamedNode<'http://www.w3.org/2002/07/owl#qualifiedCardinality'>;
    /** The property that determines that two given individuals are equal. */
    "sameAs": NamedNode<'http://www.w3.org/2002/07/owl#sameAs'>;
    /** The property that determines the class that an existential property restriction refers to. */
    "someValuesFrom": NamedNode<'http://www.w3.org/2002/07/owl#someValuesFrom'>;
    /** The property that determines the subject of a negative property assertion. */
    "sourceIndividual": NamedNode<'http://www.w3.org/2002/07/owl#sourceIndividual'>;
    /** The property that determines the object of a negative object property assertion. */
    "targetIndividual": NamedNode<'http://www.w3.org/2002/07/owl#targetIndividual'>;
    /** The property that determines the value of a negative data property assertion. */
    "targetValue": NamedNode<'http://www.w3.org/2002/07/owl#targetValue'>;
    /** The data property that relates every individual to every data value. */
    "topDataProperty": NamedNode<'http://www.w3.org/2002/07/owl#topDataProperty'>;
    /** The object property that relates every two individuals. */
    "topObjectProperty": NamedNode<'http://www.w3.org/2002/07/owl#topObjectProperty'>;
    /** The property that determines the collection of classes or data ranges that build a union. */
    "unionOf": NamedNode<'http://www.w3.org/2002/07/owl#unionOf'>;
    /** The property that identifies the version IRI of an ontology. */
    "versionIRI": NamedNode<'http://www.w3.org/2002/07/owl#versionIRI'>;
    /** The annotation property that provides version information for an ontology or another OWL construct. */
    "versionInfo": NamedNode<'http://www.w3.org/2002/07/owl#versionInfo'>;
    /** The property that determines the collection of facet-value pairs that define a datatype restriction. */
    "withRestrictions": NamedNode<'http://www.w3.org/2002/07/owl#withRestrictions'>;
}

const builder = namespace("http://www.w3.org/2002/07/owl#") as any;
export const strict = builder as NamespaceBuilder<keyof Owl> & Owl;
export const loose = builder as NamespaceBuilder & Owl;
