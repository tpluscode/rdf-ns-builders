import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Xkos {
    "ClassificationLevel": NamedNode;
    "ConceptAssociation": NamedNode;
    "Correspondence": NamedNode;
    "ExplanatoryNote": NamedNode;
    "additionalContentNote": NamedNode;
    "after": NamedNode;
    "before": NamedNode;
    "belongsTo": NamedNode;
    "caseLaw": NamedNode;
    "causal": NamedNode;
    "causedBy": NamedNode;
    "causes": NamedNode;
    "classifiedUnder": NamedNode;
    "compares": NamedNode;
    "coreContentNote": NamedNode;
    "covers": NamedNode;
    "coversExhaustively": NamedNode;
    "coversMutuallyExclusively": NamedNode;
    "depth": NamedNode;
    "disjoint": NamedNode;
    "exclusionNote": NamedNode;
    "follows": NamedNode;
    "generalizes": NamedNode;
    "hasPart": NamedNode;
    "inclusionNote": NamedNode;
    "isPartOf": NamedNode;
    "levels": NamedNode;
    "madeOf": NamedNode;
    "maxLength": NamedNode;
    /*immediate successor in the sequence*/
    "next": NamedNode;
    "notationPattern": NamedNode;
    "numberOfLevels": NamedNode;
    "organizedBy": NamedNode;
    /*This property is expected to store plain text literals, without HTML or XML markup.*/
    "plainText": NamedNode;
    /*predecessor in the sequence*/
    "precedes": NamedNode;
    /*immediate predecessor in the sequence*/
    "previous": NamedNode;
    "sequential": NamedNode;
    "sourceConcept": NamedNode;
    "specializes": NamedNode;
    /*successeur dans la séquence*/
    "succeeds": NamedNode;
    "supersedes": NamedNode;
    "targetConcept": NamedNode;
    "temporal": NamedNode;
    "variant": NamedNode;
}
export const xkos: Xkos = (namespace(prefixes.xkos) as any);
