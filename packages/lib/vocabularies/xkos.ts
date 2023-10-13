import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Xkos {
    '': NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#'>;
    "additionalContentNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#additionalContentNote'>;
    "after": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#after'>;
    "before": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#before'>;
    "belongsTo": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#belongsTo'>;
    "caseLaw": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#caseLaw'>;
    "causal": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#causal'>;
    "causedBy": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#causedBy'>;
    "causes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#causes'>;
    "ClassificationLevel": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#ClassificationLevel'>;
    "classifiedUnder": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#classifiedUnder'>;
    "compares": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#compares'>;
    "ConceptAssociation": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#ConceptAssociation'>;
    "coreContentNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#coreContentNote'>;
    "Correspondence": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#Correspondence'>;
    "covers": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#covers'>;
    "coversExhaustively": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#coversExhaustively'>;
    "coversMutuallyExclusively": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#coversMutuallyExclusively'>;
    "depth": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#depth'>;
    "disjoint": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#disjoint'>;
    "exclusionNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#exclusionNote'>;
    "ExplanatoryNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#ExplanatoryNote'>;
    "follows": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#follows'>;
    "generalizes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#generalizes'>;
    "hasPart": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#hasPart'>;
    "inclusionNote": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#inclusionNote'>;
    "isPartOf": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#isPartOf'>;
    "levels": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#levels'>;
    "madeOf": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#madeOf'>;
    "maxLength": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#maxLength'>;
    /** immediate successor in the sequence */
    "next": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#next'>;
    "notationPattern": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#notationPattern'>;
    "numberOfLevels": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#numberOfLevels'>;
    "organizedBy": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#organizedBy'>;
    /** This property is expected to store plain text literals, without HTML or XML markup. */
    "plainText": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#plainText'>;
    /** predecessor in the sequence */
    "precedes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#precedes'>;
    /** immediate predecessor in the sequence */
    "previous": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#previous'>;
    "sequential": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#sequential'>;
    "sourceConcept": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#sourceConcept'>;
    "specializes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#specializes'>;
    /** successeur dans la séquence */
    "succeeds": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#succeeds'>;
    "supersedes": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#supersedes'>;
    "targetConcept": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#targetConcept'>;
    "temporal": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#temporal'>;
    "variant": NamedNode<'http://rdf-vocabulary.ddialliance.org/xkos#variant'>;
}

const builder = namespace("http://rdf-vocabulary.ddialliance.org/xkos#") as any;
export const strict = builder as NamespaceBuilder<keyof Xkos> & Xkos;
export const loose = builder as NamespaceBuilder & Xkos;
