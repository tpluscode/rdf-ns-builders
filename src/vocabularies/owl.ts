import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Owl = NamespaceBuilder & {
    /*The class of collections of pairwise different individuals.*/
    "AllDifferent": NamedNode;
    /*The class of collections of pairwise disjoint classes.*/
    "AllDisjointClasses": NamedNode;
    /*The class of collections of pairwise disjoint properties.*/
    "AllDisjointProperties": NamedNode;
    /*The class of annotated annotations for which the RDF serialization consists of an annotated subject, predicate and object.*/
    "Annotation": NamedNode;
    /*The class of annotation properties.*/
    "AnnotationProperty": NamedNode;
    /*The class of asymmetric properties.*/
    "AsymmetricProperty": NamedNode;
    /*The class of annotated axioms for which the RDF serialization consists of an annotated subject, predicate and object.*/
    "Axiom": NamedNode;
    /*The class of OWL classes.*/
    "Class": NamedNode;
    /*The class of OWL data ranges, which are special kinds of datatypes. Note: The use of the IRI owl:DataRange has been deprecated as of OWL 2. The IRI rdfs:Datatype SHOULD be used instead.*/
    "DataRange": NamedNode;
    /*The class of data properties.*/
    "DatatypeProperty": NamedNode;
    /*The class of deprecated classes.*/
    "DeprecatedClass": NamedNode;
    /*The class of deprecated properties.*/
    "DeprecatedProperty": NamedNode;
    /*The class of functional properties.*/
    "FunctionalProperty": NamedNode;
    /*The class of inverse-functional properties.*/
    "InverseFunctionalProperty": NamedNode;
    /*The class of irreflexive properties.*/
    "IrreflexiveProperty": NamedNode;
    /*The class of named individuals.*/
    "NamedIndividual": NamedNode;
    /*The class of negative property assertions.*/
    "NegativePropertyAssertion": NamedNode;
    /*This is the empty class.*/
    "Nothing": NamedNode;
    /*The class of object properties.*/
    "ObjectProperty": NamedNode;
    /*The class of ontologies.*/
    "Ontology": NamedNode;
    /*The class of ontology properties.*/
    "OntologyProperty": NamedNode;
    /*The class of reflexive properties.*/
    "ReflexiveProperty": NamedNode;
    /*The class of property restrictions.*/
    "Restriction": NamedNode;
    /*The class of symmetric properties.*/
    "SymmetricProperty": NamedNode;
    /*The class of OWL individuals.*/
    "Thing": NamedNode;
    /*The class of transitive properties.*/
    "TransitiveProperty": NamedNode;
    /*The property that determines the class that a universal property restriction refers to.*/
    "allValuesFrom": NamedNode;
    /*The property that determines the predicate of an annotated axiom or annotated annotation.*/
    "annotatedProperty": NamedNode;
    /*The property that determines the subject of an annotated axiom or annotated annotation.*/
    "annotatedSource": NamedNode;
    /*The property that determines the object of an annotated axiom or annotated annotation.*/
    "annotatedTarget": NamedNode;
    /*The property that determines the predicate of a negative property assertion.*/
    "assertionProperty": NamedNode;
    /*The annotation property that indicates that a given ontology is backward compatible with another ontology.*/
    "backwardCompatibleWith": NamedNode;
    /*The data property that does not relate any individual to any data value.*/
    "bottomDataProperty": NamedNode;
    /*The object property that does not relate any two individuals.*/
    "bottomObjectProperty": NamedNode;
    /*The property that determines the cardinality of an exact cardinality restriction.*/
    "cardinality": NamedNode;
    /*The property that determines that a given class is the complement of another class.*/
    "complementOf": NamedNode;
    /*The property that determines that a given data range is the complement of another data range with respect to the data domain.*/
    "datatypeComplementOf": NamedNode;
    /*The annotation property that indicates that a given entity has been deprecated.*/
    "deprecated": NamedNode;
    /*The property that determines that two given individuals are different.*/
    "differentFrom": NamedNode;
    /*The property that determines that a given class is equivalent to the disjoint union of a collection of other classes.*/
    "disjointUnionOf": NamedNode;
    /*The property that determines that two given classes are disjoint.*/
    "disjointWith": NamedNode;
    /*The property that determines the collection of pairwise different individuals in a owl:AllDifferent axiom.*/
    "distinctMembers": NamedNode;
    /*The property that determines that two given classes are equivalent, and that is used to specify datatype definitions.*/
    "equivalentClass": NamedNode;
    /*The property that determines that two given properties are equivalent.*/
    "equivalentProperty": NamedNode;
    /*The property that determines the collection of properties that jointly build a key.*/
    "hasKey": NamedNode;
    /*The property that determines the property that a self restriction refers to.*/
    "hasSelf": NamedNode;
    /*The property that determines the individual that a has-value restriction refers to.*/
    "hasValue": NamedNode;
    /*The property that is used for importing other ontologies into a given ontology.*/
    "imports": NamedNode;
    /*The annotation property that indicates that a given ontology is incompatible with another ontology.*/
    "incompatibleWith": NamedNode;
    /*The property that determines the collection of classes or data ranges that build an intersection.*/
    "intersectionOf": NamedNode;
    /*The property that determines that two given properties are inverse.*/
    "inverseOf": NamedNode;
    /*The property that determines the cardinality of a maximum cardinality restriction.*/
    "maxCardinality": NamedNode;
    /*The property that determines the cardinality of a maximum qualified cardinality restriction.*/
    "maxQualifiedCardinality": NamedNode;
    /*The property that determines the collection of members in either a owl:AllDifferent, owl:AllDisjointClasses or owl:AllDisjointProperties axiom.*/
    "members": NamedNode;
    /*The property that determines the cardinality of a minimum cardinality restriction.*/
    "minCardinality": NamedNode;
    /*The property that determines the cardinality of a minimum qualified cardinality restriction.*/
    "minQualifiedCardinality": NamedNode;
    /*The property that determines the class that a qualified object cardinality restriction refers to.*/
    "onClass": NamedNode;
    /*The property that determines the data range that a qualified data cardinality restriction refers to.*/
    "onDataRange": NamedNode;
    /*The property that determines the datatype that a datatype restriction refers to.*/
    "onDatatype": NamedNode;
    /*The property that determines the n-tuple of properties that a property restriction on an n-ary data range refers to.*/
    "onProperties": NamedNode;
    /*The property that determines the property that a property restriction refers to.*/
    "onProperty": NamedNode;
    /*The property that determines the collection of individuals or data values that build an enumeration.*/
    "oneOf": NamedNode;
    /*The annotation property that indicates the predecessor ontology of a given ontology.*/
    "priorVersion": NamedNode;
    /*The property that determines the n-tuple of properties that build a sub property chain of a given property.*/
    "propertyChainAxiom": NamedNode;
    /*The property that determines that two given properties are disjoint.*/
    "propertyDisjointWith": NamedNode;
    /*The property that determines the cardinality of an exact qualified cardinality restriction.*/
    "qualifiedCardinality": NamedNode;
    /*The property that determines that two given individuals are equal.*/
    "sameAs": NamedNode;
    /*The property that determines the class that an existential property restriction refers to.*/
    "someValuesFrom": NamedNode;
    /*The property that determines the subject of a negative property assertion.*/
    "sourceIndividual": NamedNode;
    /*The property that determines the object of a negative object property assertion.*/
    "targetIndividual": NamedNode;
    /*The property that determines the value of a negative data property assertion.*/
    "targetValue": NamedNode;
    /*The data property that relates every individual to every data value.*/
    "topDataProperty": NamedNode;
    /*The object property that relates every two individuals.*/
    "topObjectProperty": NamedNode;
    /*The property that determines the collection of classes or data ranges that build a union.*/
    "unionOf": NamedNode;
    /*The property that identifies the version IRI of an ontology.*/
    "versionIRI": NamedNode;
    /*The annotation property that provides version information for an ontology or another OWL construct.*/
    "versionInfo": NamedNode;
    /*The property that determines the collection of facet-value pairs that define a datatype restriction.*/
    "withRestrictions": NamedNode;
};
export const owl: Owl = (namespace("http://www.w3.org/2002/07/owl#") as any);
