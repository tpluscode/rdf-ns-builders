import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Sh {
    '': NamedNode<'http://www.w3.org/ns/shacl#'>;
    "ask": NamedNode<'http://www.w3.org/ns/shacl#ask'>;
    "BlankNode": NamedNode<'http://www.w3.org/ns/shacl#BlankNode'>;
    "BlankNodeOrIRI": NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrIRI'>;
    "construct": NamedNode<'http://www.w3.org/ns/shacl#construct'>;
    "count": NamedNode<'http://www.w3.org/ns/shacl#count'>;
    /** A count expression is a blank node with exactly one value for the property sh:count which is a well-formed node expression. */
    "CountExpression": NamedNode<'http://www.w3.org/ns/shacl#CountExpression'>;
    "desc": NamedNode<'http://www.w3.org/ns/shacl#desc'>;
    "distinct": NamedNode<'http://www.w3.org/ns/shacl#distinct'>;
    /** A distinct expression is a blank node with exactly one value for the property sh:distinct which is a well-formed node expression. */
    "DistinctExpression": NamedNode<'http://www.w3.org/ns/shacl#DistinctExpression'>;
    "else": NamedNode<'http://www.w3.org/ns/shacl#else'>;
    "exists": NamedNode<'http://www.w3.org/ns/shacl#exists'>;
    /** An exists expression is a blank node with exactly one value for sh:exists (which is a well-formed shape). */
    "ExistsExpression": NamedNode<'http://www.w3.org/ns/shacl#ExistsExpression'>;
    "expression": NamedNode<'http://www.w3.org/ns/shacl#expression'>;
    "filterShape": NamedNode<'http://www.w3.org/ns/shacl#filterShape'>;
    /** A filter shape expression is a blank node with exactly one value for sh:filterShape (which is a well-formed shape) and at most one value for sh:nodes (which is a well-formed node expression). */
    "FilterShapeExpression": NamedNode<'http://www.w3.org/ns/shacl#FilterShapeExpression'>;
    "FocusNodeOrConstantTermExpression": NamedNode<'http://www.w3.org/ns/shacl#FocusNodeOrConstantTermExpression'>;
    /** A function expression is a blank node that does not fulfill any of the syntax rules of the other node expression types and which is the subject of exactly one triple T where the object is a well-formed SHACL list, and each member of that list is a well-formed node expression. */
    "FunctionExpression": NamedNode<'http://www.w3.org/ns/shacl#FunctionExpression'>;
    "groupConcat": NamedNode<'http://www.w3.org/ns/shacl#groupConcat'>;
    /** A group concat expression is a blank node with exactly one value for the property sh:groupConcat which is a well-formed node expression. A group concat expression can have a single value for the property sh:separator which is literal with datatype xsd:string. */
    "GroupConcatExpression": NamedNode<'http://www.w3.org/ns/shacl#GroupConcatExpression'>;
    "if": NamedNode<'http://www.w3.org/ns/shacl#if'>;
    /** An if expression is a blank node with exactly one value for sh:if (which is a well-formed node expression), at most one value for sh:then (which is a well-formed node expression) and at most one value for sh:else (which is a well-formed node expression). */
    "IfExpression": NamedNode<'http://www.w3.org/ns/shacl#IfExpression'>;
    "intersection": NamedNode<'http://www.w3.org/ns/shacl#intersection'>;
    /** An intersection expression is a blank node with exactly one value for the property sh:intersection which is a well-formed SHACL list with at least two members (which are well-formed node expressions). */
    "IntersectionExpression": NamedNode<'http://www.w3.org/ns/shacl#IntersectionExpression'>;
    "IRIOrLiteral": NamedNode<'http://www.w3.org/ns/shacl#IRIOrLiteral'>;
    "limit": NamedNode<'http://www.w3.org/ns/shacl#limit'>;
    /** A limit expression is a blank node with exactly one value for the property sh:limit which is a literal with datatype xsd:integer and with exactly one value for the property sh:nodes which is a well-formed node expression. */
    "LimitExpression": NamedNode<'http://www.w3.org/ns/shacl#LimitExpression'>;
    "max": NamedNode<'http://www.w3.org/ns/shacl#max'>;
    /** A max expression is a blank node with exactly one value for the property sh:max which is a well-formed node expression. */
    "MaxExpression": NamedNode<'http://www.w3.org/ns/shacl#MaxExpression'>;
    "min": NamedNode<'http://www.w3.org/ns/shacl#min'>;
    /** A min expression is a blank node with exactly one value for the property sh:min which is a well-formed node expression. */
    "MinExpression": NamedNode<'http://www.w3.org/ns/shacl#MinExpression'>;
    "minus": NamedNode<'http://www.w3.org/ns/shacl#minus'>;
    /** A minus expression is a blank node with exactly one value for the property sh:minus which is a well-formed node expression and exactly one value for the property sh:nodes which is a well-formed node expression. */
    "MinusExpression": NamedNode<'http://www.w3.org/ns/shacl#MinusExpression'>;
    "NodeExpression": NamedNode<'http://www.w3.org/ns/shacl#NodeExpression'>;
    "nodes": NamedNode<'http://www.w3.org/ns/shacl#nodes'>;
    "NodeShape": NamedNode<'http://www.w3.org/ns/shacl#NodeShape'>;
    "object": NamedNode<'http://www.w3.org/ns/shacl#object'>;
    "offset": NamedNode<'http://www.w3.org/ns/shacl#offset'>;
    /** An offset expression is a blank node with exactly one value for the property sh:offset which is a literal with datatype xsd:integer and with exactly one value for the property sh:nodes which is a well-formed node expression. */
    "OffsetExpression": NamedNode<'http://www.w3.org/ns/shacl#OffsetExpression'>;
    "orderBy": NamedNode<'http://www.w3.org/ns/shacl#orderBy'>;
    /** An orderBy expression is a blank node with exactly one value for the property sh:orderBy which is a well-formed node expression and with exactly one value for the property sh:nodes which is a well-formed node expression. An orderBy expression can have one value for the property sh:desc which is either true or false. */
    "OrderByExpression": NamedNode<'http://www.w3.org/ns/shacl#OrderByExpression'>;
    "path": NamedNode<'http://www.w3.org/ns/shacl#path'>;
    /** A path expression is a blank node with exactly one value of the property sh:path (which are well-formed property paths) and at most one value for sh:nodes (which is a well-formed node expression). */
    "PathExpression": NamedNode<'http://www.w3.org/ns/shacl#PathExpression'>;
    "predicate": NamedNode<'http://www.w3.org/ns/shacl#predicate'>;
    "prefixes": NamedNode<'http://www.w3.org/ns/shacl#prefixes'>;
    "select": NamedNode<'http://www.w3.org/ns/shacl#select'>;
    "separator": NamedNode<'http://www.w3.org/ns/shacl#separator'>;
    /** A SPARQL ASK expression is a blank node with exactly one value for the property sh:ask which is string literal. The blank node may have values for the property sh:prefixes and these values are IRIs or blank nodes. Using the values of sh:prefixes as defined by 5.2.1 Prefix Declarations for SPARQL Queries, the value of sh:ask must be valid SPARQL 1.1 ASK query. The blank node may also have exactly one value for the property sh:nodes which is a well-formed node expression. */
    "SPARQLAskExpression": NamedNode<'http://www.w3.org/ns/shacl#SPARQLAskExpression'>;
    "SPARQLRule": NamedNode<'http://www.w3.org/ns/shacl#SPARQLRule'>;
    /** A SPARQL SELECT expression is a blank node with exactly one value for the property sh:select which is string literal. The blank node may have values for the property sh:prefixes and these values are IRIs or blank nodes. Using the values of sh:prefixes as defined by 5.2.1 Prefix Declarations for SPARQL Queries, the value of sh:select must be valid SPARQL 1.1 SELECT query with exactly one result variable. The blank node may also have exactly one value for the property sh:nodes which is a well-formed node expression. */
    "SPARQLSelectExpression": NamedNode<'http://www.w3.org/ns/shacl#SPARQLSelectExpression'>;
    "subject": NamedNode<'http://www.w3.org/ns/shacl#subject'>;
    "sum": NamedNode<'http://www.w3.org/ns/shacl#sum'>;
    /** A sum expression is a blank node with exactly one value for the property sh:sum which is a well-formed node expression. */
    "SumExpression": NamedNode<'http://www.w3.org/ns/shacl#SumExpression'>;
    "then": NamedNode<'http://www.w3.org/ns/shacl#then'>;
    "TripleRule": NamedNode<'http://www.w3.org/ns/shacl#TripleRule'>;
    "union": NamedNode<'http://www.w3.org/ns/shacl#union'>;
    /** A union expression is a blank node with exactly one value for the property sh:union which is a well-formed SHACL list with at least two members (which are well-formed node expressions). */
    "UnionExpression": NamedNode<'http://www.w3.org/ns/shacl#UnionExpression'>;
    "values": NamedNode<'http://www.w3.org/ns/shacl#values'>;
}

const builder = namespace("http://www.w3.org/ns/shacl#") as any;
export const strict = builder as NamespaceBuilder<keyof Sh> & Sh;
export const loose = builder as NamespaceBuilder & Sh;
