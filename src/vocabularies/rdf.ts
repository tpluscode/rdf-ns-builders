import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Rdf = NamespaceBuilder & {
    /*The class of containers of alternatives.*/
    "Alt": NamedNode;
    /*The class of unordered containers.*/
    "Bag": NamedNode;
    /*A class representing a compound literal.*/
    "CompoundLiteral": NamedNode;
    /*The datatype of RDF literals storing fragments of HTML content*/
    "HTML": NamedNode;
    /*The datatype of RDF literals storing JSON content.*/
    "JSON": NamedNode;
    /*The class of RDF Lists.*/
    "List": NamedNode;
    /*The class of plain (i.e. untyped) literal values, as used in RIF and OWL 2*/
    "PlainLiteral": NamedNode;
    /*The class of RDF properties.*/
    "Property": NamedNode;
    /*The class of ordered containers.*/
    "Seq": NamedNode;
    /*The class of RDF statements.*/
    "Statement": NamedNode;
    /*The datatype of XML literal values.*/
    "XMLLiteral": NamedNode;
    /*The base direction component of a CompoundLiteral.*/
    "direction": NamedNode;
    /*The first item in the subject RDF list.*/
    "first": NamedNode;
    /*The datatype of language-tagged string values*/
    "langString": NamedNode;
    /*The language component of a CompoundLiteral.*/
    "language": NamedNode;
    /*The empty list, with no items in it. If the rest of a list is nil then the list has no more items in it.*/
    "nil": NamedNode;
    /*The object of the subject RDF statement.*/
    "object": NamedNode;
    /*The predicate of the subject RDF statement.*/
    "predicate": NamedNode;
    /*The rest of the subject RDF list after the first item.*/
    "rest": NamedNode;
    /*The subject of the subject RDF statement.*/
    "subject": NamedNode;
    /*The subject is an instance of a class.*/
    "type": NamedNode;
    /*Idiomatic property used for structured values.*/
    "value": NamedNode;
};
export const rdf: Rdf = (namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#") as any);
