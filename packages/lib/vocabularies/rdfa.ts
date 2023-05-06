import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rdfa {
    '': NamedNode<'http://www.w3.org/ns/rdfa#'>;
    "DocumentError": NamedNode<'http://www.w3.org/ns/rdfa#DocumentError'>;
    "Error": NamedNode<'http://www.w3.org/ns/rdfa#Error'>;
    "PGClass": NamedNode<'http://www.w3.org/ns/rdfa#PGClass'>;
    "Info": NamedNode<'http://www.w3.org/ns/rdfa#Info'>;
    "Pattern": NamedNode<'http://www.w3.org/ns/rdfa#Pattern'>;
    "PrefixMapping": NamedNode<'http://www.w3.org/ns/rdfa#PrefixMapping'>;
    "PrefixOrTermMapping": NamedNode<'http://www.w3.org/ns/rdfa#PrefixOrTermMapping'>;
    "PrefixRedefinition": NamedNode<'http://www.w3.org/ns/rdfa#PrefixRedefinition'>;
    "Warning": NamedNode<'http://www.w3.org/ns/rdfa#Warning'>;
    "TermMapping": NamedNode<'http://www.w3.org/ns/rdfa#TermMapping'>;
    "UnresolvedCURIE": NamedNode<'http://www.w3.org/ns/rdfa#UnresolvedCURIE'>;
    "UnresolvedTerm": NamedNode<'http://www.w3.org/ns/rdfa#UnresolvedTerm'>;
    "VocabReferenceError": NamedNode<'http://www.w3.org/ns/rdfa#VocabReferenceError'>;
    "context": NamedNode<'http://www.w3.org/ns/rdfa#context'>;
    "copy": NamedNode<'http://www.w3.org/ns/rdfa#copy'>;
    "prefix": NamedNode<'http://www.w3.org/ns/rdfa#prefix'>;
    "term": NamedNode<'http://www.w3.org/ns/rdfa#term'>;
    "uri": NamedNode<'http://www.w3.org/ns/rdfa#uri'>;
    "usesVocabulary": NamedNode<'http://www.w3.org/ns/rdfa#usesVocabulary'>;
    "vocabulary": NamedNode<'http://www.w3.org/ns/rdfa#vocabulary'>;
}

const builder = namespace("http://www.w3.org/ns/rdfa#") as any;
export const strict = builder as NamespaceBuilder<keyof Rdfa> & Rdfa;
export const loose = builder as NamespaceBuilder & Rdfa;
