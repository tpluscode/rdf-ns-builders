import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Lvont = NamespaceBuilder & {
    /*A CJK character radical.*/
    "CJKRadical": NamedNode<'http://lexvo.org/ontology#CJKRadical'>;
    /*An abstract character as defined by the Unicode Standard,
      Version 5, in Chapter 3.4.*/
    "Character": NamedNode<'http://lexvo.org/ontology#Character'>;
    /*Geographic regions on Earth or elsewhere.*/
    "GeographicRegion": NamedNode<'http://lexvo.org/ontology#GeographicRegion'>;
    /*Groups of human language variants that are or were spoken, written, or signed at some point in time.*/
    "Language": NamedNode<'http://lexvo.org/ontology#Language'>;
    /*A writing system considered abstractly, i.e. independent
        of language-specific variations.*/
    "Script": NamedNode<'http://lexvo.org/ontology#Script'>;
    /*A term in a specific language.*/
    "Term": NamedNode<'http://lexvo.org/ontology#Term'>;
    /*The property of having a broader, more generic concept.*/
    "broader": NamedNode<'http://lexvo.org/ontology#broader'>;
    /*The property of a CJK character being conventionally
        associated with a CJK character radical.*/
    "characterRadical": NamedNode<'http://lexvo.org/ontology#characterRadical'>;
    /*The property of a term containing a specific character.*/
    "containsCharacter": NamedNode<'http://lexvo.org/ontology#containsCharacter'>;
    /*The property of conceptually evoking some object.*/
    "evokes": NamedNode<'http://lexvo.org/ontology#evokes'>;
    /*The property of a character being composed of another character.*/
    "hasCharacterComponent": NamedNode<'http://lexvo.org/ontology#hasCharacterComponent'>;
    /*The property of having a member.*/
    "hasMember": NamedNode<'http://lexvo.org/ontology#hasMember'>;
    /*The property of a document being written in a specific script,
        or a language being written or having being written in a specific script by a considerable
        group of language users.*/
    "inScript": NamedNode<'http://lexvo.org/ontology#inScript'>;
    /*The property of being involved in something, e.g. for semantic participants' involvement in a semantic frame.*/
    "involvedIn": NamedNode<'http://lexvo.org/ontology#involvedIn'>;
    /*The property of involving some entity, e.g. for semantic participants involved in a semantic frame.*/
    "involves": NamedNode<'http://lexvo.org/ontology#involves'>;
    "isFocusOf": NamedNode<'http://lexvo.org/ontology#isFocusOf'>;
    "iso15924Alphacode": NamedNode<'http://lexvo.org/ontology#iso15924Alphacode'>;
    "iso639P1Code": NamedNode<'http://lexvo.org/ontology#iso639P1Code'>;
    "iso639P2BCode": NamedNode<'http://lexvo.org/ontology#iso639P2BCode'>;
    "iso639P2TCode": NamedNode<'http://lexvo.org/ontology#iso639P2TCode'>;
    "iso639P3Code": NamedNode<'http://lexvo.org/ontology#iso639P3Code'>;
    "iso639P5Code": NamedNode<'http://lexvo.org/ontology#iso639P5Code'>;
    /*If C lvont:Label L and L skosxl:literalForm V, then X rdfs:label V.*/
    "label": NamedNode<'http://lexvo.org/ontology#label'>;
    /*The property of a resource being mainly encoded in a specific language.*/
    "language": NamedNode<'http://lexvo.org/ontology#language'>;
    /*A lexical category that a term can be used in.*/
    "lexicalCategory": NamedNode<'http://lexvo.org/ontology#lexicalCategory'>;
    "marcCode": NamedNode<'http://lexvo.org/ontology#marcCode'>;
    /*the semiotic property of a natural language word meaning something, i.e. a
        relationship between words and resources that they represent (or represented) to a considerable number of humans*/
    "means": NamedNode<'http://lexvo.org/ontology#means'>;
    /*The property of being a member of a group.*/
    "memberOf": NamedNode<'http://lexvo.org/ontology#memberOf'>;
    /*The property of having a narrower, less generic concept.*/
    "narrower": NamedNode<'http://lexvo.org/ontology#narrower'>;
    /*The property of being at least nearly the same as something else. For instance,
        the geographical area comprising the island of Malta is nearly the same as the island of Malta.*/
    "nearlySameAs": NamedNode<'http://lexvo.org/ontology#nearlySameAs'>;
    /*The property of a character conventionally being
        written with a specific number strokes, excluding the strokes of its radical.*/
    "nonRadicalStrokes": NamedNode<'http://lexvo.org/ontology#nonRadicalStrokes'>;
    "representedBy": NamedNode<'http://lexvo.org/ontology#representedBy'>;
    /*the semiotic property of semantically representing something, i.e. a
        relationship between words and other signs and resources that they represent (or represented) to a considerable number of humans*/
    "represents": NamedNode<'http://lexvo.org/ontology#represents'>;
    /*The property of a script being used for a particular language by
       a considerable of language users (but not necessarily the majority of all language users).*/
    "scriptFor": NamedNode<'http://lexvo.org/ontology#scriptFor'>;
    /*The property of being at least somewhat the same as something else. For instance,
        the City of Los Angeles is somewhat the same as the Greater Los Angeles area.*/
    "somewhatSameAs": NamedNode<'http://lexvo.org/ontology#somewhatSameAs'>;
    /*The strength of an rdf:Statement, given is a value in [0,1].*/
    "strength": NamedNode<'http://lexvo.org/ontology#strength'>;
    /*The property of genuine identity in the Leibnizian sense.*/
    "strictlySameAs": NamedNode<'http://lexvo.org/ontology#strictlySameAs'>;
    /*translational equivalence between words and other signs
        and resources that they represent to or represented to a considerable number of humans*/
    "translation": NamedNode<'http://lexvo.org/ontology#translation'>;
    /*The property of an object
        (e.g., a language, writing system, or a specific element or aspect of a language or writing system)
        being used somewhat extensively in a particular geographical region
        at some point in time.*/
    "usedIn": NamedNode<'http://lexvo.org/ontology#usedIn'>;
    /*The property of a language being written or having being written in a specific
        script by a considerable group of language users.*/
    "usesScript": NamedNode<'http://lexvo.org/ontology#usesScript'>;
    /*The property of being a variant of another resource.*/
    "variant": NamedNode<'http://lexvo.org/ontology#variant'>;
};
export const lvont: Lvont = (namespace("http://lexvo.org/ontology#") as any);
