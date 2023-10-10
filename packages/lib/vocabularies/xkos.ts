import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Xkos {
    '': NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#'>;
    "ClassificationLevel": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#ClassificationLevel'>;
    "ConceptAssociation": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#ConceptAssociation'>;
    "Correspondence": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#Correspondence'>;
    "ExplanatoryNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#ExplanatoryNote'>;
    "additionalContentNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#additionalContentNote'>;
    "inclusionNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#inclusionNote'>;
    "after": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#after'>;
    "temporal": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#temporal'>;
    "before": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#before'>;
    "belongsTo": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#belongsTo'>;
    "caseLaw": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#caseLaw'>;
    "causal": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#causal'>;
    "causedBy": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#causedBy'>;
    "causes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#causes'>;
    "classifiedUnder": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#classifiedUnder'>;
    "compares": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#compares'>;
    "coreContentNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#coreContentNote'>;
    "covers": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#covers'>;
    "coversExhaustively": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#coversExhaustively'>;
    "coversMutuallyExclusively": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#coversMutuallyExclusively'>;
    "depth": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#depth'>;
    "disjoint": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#disjoint'>;
    "exclusionNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#exclusionNote'>;
    "follows": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#follows'>;
    "generalizes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#generalizes'>;
    "specializes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#specializes'>;
    "hasPart": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#hasPart'>;
    "isPartOf": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#isPartOf'>;
    "levels": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#levels'>;
    "madeOf": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#madeOf'>;
    "maxLength": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#maxLength'>;
    /** immediate successor in the sequence */
    "next": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#next'>;
    /** successeur dans la séquence */
    "succeeds": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#succeeds'>;
    "notationPattern": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#notationPattern'>;
    "numberOfLevels": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#numberOfLevels'>;
    "organizedBy": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#organizedBy'>;
    /** This property is expected to store plain text literals, without HTML or XML markup. */
    "plainText": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#plainText'>;
    /** predecessor in the sequence */
    "precedes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#precedes'>;
    "sequential": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#sequential'>;
    /** immediate predecessor in the sequence */
    "previous": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#previous'>;
    "sourceConcept": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#sourceConcept'>;
    "supersedes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#supersedes'>;
    "targetConcept": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#targetConcept'>;
    "variant": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#variant'>;
}

const builder = namespace("http://rdf-vocabulary.ddialliance.org/xkos#") as any;
export const strict = builder as NamespaceBuilder<keyof Xkos> & Xkos;
export const loose = builder as NamespaceBuilder & Xkos;
