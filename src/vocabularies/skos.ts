import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Skos {
    "Collection": NamedNode<'http://www.w3.org/2004/02/skos/core#Collection'>;
    "Concept": NamedNode<'http://www.w3.org/2004/02/skos/core#Concept'>;
    "ConceptScheme": NamedNode<'http://www.w3.org/2004/02/skos/core#ConceptScheme'>;
    "OrderedCollection": NamedNode<'http://www.w3.org/2004/02/skos/core#OrderedCollection'>;
    /** The range of skos:altLabel is the class of RDF plain literals. */
    "altLabel": NamedNode<'http://www.w3.org/2004/02/skos/core#altLabel'>;
    "broadMatch": NamedNode<'http://www.w3.org/2004/02/skos/core#broadMatch'>;
    /** Broader concepts are typically rendered as parents in a concept hierarchy (tree). */
    "broader": NamedNode<'http://www.w3.org/2004/02/skos/core#broader'>;
    "broaderTransitive": NamedNode<'http://www.w3.org/2004/02/skos/core#broaderTransitive'>;
    "changeNote": NamedNode<'http://www.w3.org/2004/02/skos/core#changeNote'>;
    "closeMatch": NamedNode<'http://www.w3.org/2004/02/skos/core#closeMatch'>;
    "definition": NamedNode<'http://www.w3.org/2004/02/skos/core#definition'>;
    "editorialNote": NamedNode<'http://www.w3.org/2004/02/skos/core#editorialNote'>;
    /** skos:exactMatch is disjoint with each of the properties skos:broadMatch and skos:relatedMatch. */
    "exactMatch": NamedNode<'http://www.w3.org/2004/02/skos/core#exactMatch'>;
    "example": NamedNode<'http://www.w3.org/2004/02/skos/core#example'>;
    "hasTopConcept": NamedNode<'http://www.w3.org/2004/02/skos/core#hasTopConcept'>;
    /** The range of skos:hiddenLabel is the class of RDF plain literals. */
    "hiddenLabel": NamedNode<'http://www.w3.org/2004/02/skos/core#hiddenLabel'>;
    "historyNote": NamedNode<'http://www.w3.org/2004/02/skos/core#historyNote'>;
    "inScheme": NamedNode<'http://www.w3.org/2004/02/skos/core#inScheme'>;
    /** These concept mapping relations mirror semantic relations, and the data model defined below is similar (with the exception of skos:exactMatch) to the data model defined for semantic relations. A distinct vocabulary is provided for concept mapping relations, to provide a convenient way to differentiate links within a concept scheme from links between concept schemes. However, this pattern of usage is not a formal requirement of the SKOS data model, and relies on informal definitions of best practice. */
    "mappingRelation": NamedNode<'http://www.w3.org/2004/02/skos/core#mappingRelation'>;
    "member": NamedNode<'http://www.w3.org/2004/02/skos/core#member'>;
    /**
     * For any resource, every item in the list given as the value of the
     *       skos:memberList property is also a value of the skos:member property.
     */
    "memberList": NamedNode<'http://www.w3.org/2004/02/skos/core#memberList'>;
    "narrowMatch": NamedNode<'http://www.w3.org/2004/02/skos/core#narrowMatch'>;
    /** Narrower concepts are typically rendered as children in a concept hierarchy (tree). */
    "narrower": NamedNode<'http://www.w3.org/2004/02/skos/core#narrower'>;
    "narrowerTransitive": NamedNode<'http://www.w3.org/2004/02/skos/core#narrowerTransitive'>;
    "notation": NamedNode<'http://www.w3.org/2004/02/skos/core#notation'>;
    "note": NamedNode<'http://www.w3.org/2004/02/skos/core#note'>;
    /** A resource has no more than one value of skos:prefLabel per language tag, and no more than one value of skos:prefLabel without language tag. */
    "prefLabel": NamedNode<'http://www.w3.org/2004/02/skos/core#prefLabel'>;
    /** skos:related is disjoint with skos:broaderTransitive */
    "related": NamedNode<'http://www.w3.org/2004/02/skos/core#related'>;
    "relatedMatch": NamedNode<'http://www.w3.org/2004/02/skos/core#relatedMatch'>;
    "scopeNote": NamedNode<'http://www.w3.org/2004/02/skos/core#scopeNote'>;
    "semanticRelation": NamedNode<'http://www.w3.org/2004/02/skos/core#semanticRelation'>;
    "topConceptOf": NamedNode<'http://www.w3.org/2004/02/skos/core#topConceptOf'>;
}

const builder = namespace("http://www.w3.org/2004/02/skos/core#") as any;
export const strict = builder as NamespaceBuilder<keyof Skos> & Skos;
export const loose = builder as NamespaceBuilder & Skos;
