import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Skos = NamespaceBuilder & {
    "Collection": NamedNode;
    "Concept": NamedNode;
    "ConceptScheme": NamedNode;
    "OrderedCollection": NamedNode;
    /*The range of skos:altLabel is the class of RDF plain literals.*/
    "altLabel": NamedNode;
    "broadMatch": NamedNode;
    /*Broader concepts are typically rendered as parents in a concept hierarchy (tree).*/
    "broader": NamedNode;
    "broaderTransitive": NamedNode;
    "changeNote": NamedNode;
    "closeMatch": NamedNode;
    "definition": NamedNode;
    "editorialNote": NamedNode;
    /*skos:exactMatch is disjoint with each of the properties skos:broadMatch and skos:relatedMatch.*/
    "exactMatch": NamedNode;
    "example": NamedNode;
    "hasTopConcept": NamedNode;
    /*The range of skos:hiddenLabel is the class of RDF plain literals.*/
    "hiddenLabel": NamedNode;
    "historyNote": NamedNode;
    "inScheme": NamedNode;
    /*These concept mapping relations mirror semantic relations, and the data model defined below is similar (with the exception of skos:exactMatch) to the data model defined for semantic relations. A distinct vocabulary is provided for concept mapping relations, to provide a convenient way to differentiate links within a concept scheme from links between concept schemes. However, this pattern of usage is not a formal requirement of the SKOS data model, and relies on informal definitions of best practice.*/
    "mappingRelation": NamedNode;
    "member": NamedNode;
    /*For any resource, every item in the list given as the value of the
          skos:memberList property is also a value of the skos:member property.*/
    "memberList": NamedNode;
    "narrowMatch": NamedNode;
    /*Narrower concepts are typically rendered as children in a concept hierarchy (tree).*/
    "narrower": NamedNode;
    "narrowerTransitive": NamedNode;
    "notation": NamedNode;
    "note": NamedNode;
    /*A resource has no more than one value of skos:prefLabel per language tag, and no more than one value of skos:prefLabel without language tag.*/
    "prefLabel": NamedNode;
    /*skos:related is disjoint with skos:broaderTransitive*/
    "related": NamedNode;
    "relatedMatch": NamedNode;
    "scopeNote": NamedNode;
    "semanticRelation": NamedNode;
    "topConceptOf": NamedNode;
};
export const skos: Skos = (namespace(prefixes.skos) as any);
