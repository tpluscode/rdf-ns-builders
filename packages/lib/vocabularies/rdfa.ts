import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Rdfa {
    '': NamedNode<'http://www.w3.org/ns/rdfa#'>;
    "context": NamedNode<'http://www.w3.org/ns/rdfa#context'>;
    "copy": NamedNode<'http://www.w3.org/ns/rdfa#copy'>;
    "DocumentError": NamedNode<'http://www.w3.org/ns/rdfa#DocumentError'>;
    "Error": NamedNode<'http://www.w3.org/ns/rdfa#Error'>;
    "Info": NamedNode<'http://www.w3.org/ns/rdfa#Info'>;
    "Pattern": NamedNode<'http://www.w3.org/ns/rdfa#Pattern'>;
    "PGClass": NamedNode<'http://www.w3.org/ns/rdfa#PGClass'>;
    "prefix": NamedNode<'http://www.w3.org/ns/rdfa#prefix'>;
    "PrefixMapping": NamedNode<'http://www.w3.org/ns/rdfa#PrefixMapping'>;
    "PrefixOrTermMapping": NamedNode<'http://www.w3.org/ns/rdfa#PrefixOrTermMapping'>;
    "PrefixRedefinition": NamedNode<'http://www.w3.org/ns/rdfa#PrefixRedefinition'>;
    "term": NamedNode<'http://www.w3.org/ns/rdfa#term'>;
    "TermMapping": NamedNode<'http://www.w3.org/ns/rdfa#TermMapping'>;
    "UnresolvedCURIE": NamedNode<'http://www.w3.org/ns/rdfa#UnresolvedCURIE'>;
    "UnresolvedTerm": NamedNode<'http://www.w3.org/ns/rdfa#UnresolvedTerm'>;
    "uri": NamedNode<'http://www.w3.org/ns/rdfa#uri'>;
    "usesVocabulary": NamedNode<'http://www.w3.org/ns/rdfa#usesVocabulary'>;
    "VocabReferenceError": NamedNode<'http://www.w3.org/ns/rdfa#VocabReferenceError'>;
    "vocabulary": NamedNode<'http://www.w3.org/ns/rdfa#vocabulary'>;
    "Warning": NamedNode<'http://www.w3.org/ns/rdfa#Warning'>;
}

const builder = namespace("http://www.w3.org/ns/rdfa#") as any;
export const strict = builder as NamespaceBuilder<keyof Rdfa> & Rdfa;
export const loose = builder as NamespaceBuilder & Rdfa;
