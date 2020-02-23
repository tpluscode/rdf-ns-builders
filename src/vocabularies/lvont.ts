import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Lvont = NamespaceBuilder & {
    /*A CJK character radical.*/
    "CJKRadical": NamedNode;
    /*An abstract character as defined by the Unicode Standard,
      Version 5, in Chapter 3.4.*/
    "Character": NamedNode;
    /*Geographic regions on Earth or elsewhere.*/
    "GeographicRegion": NamedNode;
    /*Groups of human language variants that are or were spoken, written, or signed at some point in time.*/
    "Language": NamedNode;
    /*A writing system considered abstractly, i.e. independent
        of language-specific variations.*/
    "Script": NamedNode;
    /*A term in a specific language.*/
    "Term": NamedNode;
    /*The property of having a broader, more generic concept.*/
    "broader": NamedNode;
    /*The property of a CJK character being conventionally
        associated with a CJK character radical.*/
    "characterRadical": NamedNode;
    /*The property of a term containing a specific character.*/
    "containsCharacter": NamedNode;
    /*The property of conceptually evoking some object.*/
    "evokes": NamedNode;
    /*The property of a character being composed of another character.*/
    "hasCharacterComponent": NamedNode;
    /*The property of having a member.*/
    "hasMember": NamedNode;
    /*The property of a document being written in a specific script,
        or a language being written or having being written in a specific script by a considerable
        group of language users.*/
    "inScript": NamedNode;
    /*The property of being involved in something, e.g. for semantic participants' involvement in a semantic frame.*/
    "involvedIn": NamedNode;
    /*The property of involving some entity, e.g. for semantic participants involved in a semantic frame.*/
    "involves": NamedNode;
    "isFocusOf": NamedNode;
    "iso15924Alphacode": NamedNode;
    "iso639P1Code": NamedNode;
    "iso639P2BCode": NamedNode;
    "iso639P2TCode": NamedNode;
    "iso639P3Code": NamedNode;
    "iso639P5Code": NamedNode;
    /*If C lvont:Label L and L skosxl:literalForm V, then X rdfs:label V.*/
    "label": NamedNode;
    /*The property of a resource being mainly encoded in a specific language.*/
    "language": NamedNode;
    /*A lexical category that a term can be used in.*/
    "lexicalCategory": NamedNode;
    "marcCode": NamedNode;
    /*the semiotic property of a natural language word meaning something, i.e. a
        relationship between words and resources that they represent (or represented) to a considerable number of humans*/
    "means": NamedNode;
    /*The property of being a member of a group.*/
    "memberOf": NamedNode;
    /*The property of having a narrower, less generic concept.*/
    "narrower": NamedNode;
    /*The property of being at least nearly the same as something else. For instance,
        the geographical area comprising the island of Malta is nearly the same as the island of Malta.*/
    "nearlySameAs": NamedNode;
    /*The property of a character conventionally being
        written with a specific number strokes, excluding the strokes of its radical.*/
    "nonRadicalStrokes": NamedNode;
    "representedBy": NamedNode;
    /*the semiotic property of semantically representing something, i.e. a
        relationship between words and other signs and resources that they represent (or represented) to a considerable number of humans*/
    "represents": NamedNode;
    /*The property of a script being used for a particular language by
       a considerable of language users (but not necessarily the majority of all language users).*/
    "scriptFor": NamedNode;
    /*The property of being at least somewhat the same as something else. For instance,
        the City of Los Angeles is somewhat the same as the Greater Los Angeles area.*/
    "somewhatSameAs": NamedNode;
    /*The strength of an rdf:Statement, given is a value in [0,1].*/
    "strength": NamedNode;
    /*The property of genuine identity in the Leibnizian sense.*/
    "strictlySameAs": NamedNode;
    /*translational equivalence between words and other signs
        and resources that they represent to or represented to a considerable number of humans*/
    "translation": NamedNode;
    /*The property of an object
        (e.g., a language, writing system, or a specific element or aspect of a language or writing system)
        being used somewhat extensively in a particular geographical region
        at some point in time.*/
    "usedIn": NamedNode;
    /*The property of a language being written or having being written in a specific
        script by a considerable group of language users.*/
    "usesScript": NamedNode;
    /*The property of being a variant of another resource.*/
    "variant": NamedNode;
};
export const lvont: Lvont = (namespace(prefixes.lvont) as any);
