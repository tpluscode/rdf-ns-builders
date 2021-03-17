import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Shex = NamespaceBuilder & {
    /*Annotations provide a format-independent way to provide additional information about elements in a schema. */
    "Annotation": NamedNode<'http://www.w3.org/ns/shex#Annotation'>;
    /*A TripleExpression composed of one or more sub-expressions, all of which must match.*/
    "EachOf": NamedNode<'http://www.w3.org/ns/shex#EachOf'>;
    /*An IRI prefix used for matching IRIs.*/
    "IriStem": NamedNode<'http://www.w3.org/ns/shex#IriStem'>;
    /*An IRI prefix (or wildcard) along with a set of excluded values, used for node matching.*/
    "IriStemRange": NamedNode<'http://www.w3.org/ns/shex#IriStemRange'>;
    /*An Language tag used for matching Literal Languages.*/
    "Language": NamedNode<'http://www.w3.org/ns/shex#Language'>;
    /*An Language prefix used for matching Literal Languages.*/
    "LanguageStem": NamedNode<'http://www.w3.org/ns/shex#LanguageStem'>;
    /*An Language prefix (or wildcard) along with a set of excluded values, used for node matching.*/
    "LanguageStemRange": NamedNode<'http://www.w3.org/ns/shex#LanguageStemRange'>;
    /*An Literal prefix used for matching Literals.*/
    "LiteralStem": NamedNode<'http://www.w3.org/ns/shex#LiteralStem'>;
    /*An Literal prefix (or wildcard) along with a set of excluded values, used for node matching.*/
    "LiteralStemRange": NamedNode<'http://www.w3.org/ns/shex#LiteralStemRange'>;
    /*A constraint on the type or value of an RDF Node.*/
    "NodeConstraint": NamedNode<'http://www.w3.org/ns/shex#NodeConstraint'>;
    /*The set of kinds of RDF Nodes.*/
    "NodeKind": NamedNode<'http://www.w3.org/ns/shex#NodeKind'>;
    /*A TripleExpression composed of one or more sub-expressions, one of which must match.*/
    "OneOf": NamedNode<'http://www.w3.org/ns/shex#OneOf'>;
    /*A Schema contains the set of shapes, used for matching a focus node.*/
    "Schema": NamedNode<'http://www.w3.org/ns/shex#Schema'>;
    /*A list of Semantic Actions that serve as an extension point for Shape Expressions. They appear in lists in Schema's startActs and Shape, OneOf, EachOf and TripleConstraint's semActs.*/
    "SemAct": NamedNode<'http://www.w3.org/ns/shex#SemAct'>;
    /*A shapes schema is captured in a Schema object where shapes is a mapping from shape label to shape expression.*/
    "Shape": NamedNode<'http://www.w3.org/ns/shex#Shape'>;
    /*A ShapeExpression composed of one or more sub-expressions, all of which must match.*/
    "ShapeAnd": NamedNode<'http://www.w3.org/ns/shex#ShapeAnd'>;
    /*The abstract class of Shape Expressions.*/
    "ShapeExpression": NamedNode<'http://www.w3.org/ns/shex#ShapeExpression'>;
    /*A reference to a shape defined in some external Schema.*/
    "ShapeExternal": NamedNode<'http://www.w3.org/ns/shex#ShapeExternal'>;
    /*A ShapeNot is satisfied when it’s included ShapeExpression is not satisfied.*/
    "ShapeNot": NamedNode<'http://www.w3.org/ns/shex#ShapeNot'>;
    /*A ShapeExpression composed of one or more sub-expressions, one of which must match.*/
    "ShapeOr": NamedNode<'http://www.w3.org/ns/shex#ShapeOr'>;
    /*Abstract class for Stems*/
    "Stem": NamedNode<'http://www.w3.org/ns/shex#Stem'>;
    /*Abstract Class for Stem Ranges*/
    "StemRange": NamedNode<'http://www.w3.org/ns/shex#StemRange'>;
    /*A constraint on a triple having a specific predicate and optionally a shape expression used for matching values.*/
    "TripleConstraint": NamedNode<'http://www.w3.org/ns/shex#TripleConstraint'>;
    /*The abstract class of Triple Expressions.*/
    "TripleExpression": NamedNode<'http://www.w3.org/ns/shex#TripleExpression'>;
    /*Indicates that a stem is a Wildcard, rather than a URI prefix.*/
    "Wildcard": NamedNode<'http://www.w3.org/ns/shex#Wildcard'>;
    /*Annotations on a TripleExpression.*/
    "annotation": NamedNode<'http://www.w3.org/ns/shex#annotation'>;
    /*Requires node to be a Blank Node*/
    "bnode": NamedNode<'http://www.w3.org/ns/shex#bnode'>;
    /*Indicates that a Shape is closed, meaning that it may contain no property values other than those used within TripleConstraints.*/
    "closed": NamedNode<'http://www.w3.org/ns/shex#closed'>;
    /*Code executed by Semantic Action.*/
    "code": NamedNode<'http://www.w3.org/ns/shex#code'>;
    /*A datatype constraint.*/
    "datatype": NamedNode<'http://www.w3.org/ns/shex#datatype'>;
    /*Values that are excluded from value matching.*/
    "exclusion": NamedNode<'http://www.w3.org/ns/shex#exclusion'>;
    /*Expression associated with the TripleExpression.*/
    "expression": NamedNode<'http://www.w3.org/ns/shex#expression'>;
    /*List of 2 or more expressions associated with the TripleExpression.*/
    "expressions": NamedNode<'http://www.w3.org/ns/shex#expressions'>;
    /*Properties which may have extra values beyond those matched through a constraint.*/
    "extra": NamedNode<'http://www.w3.org/ns/shex#extra'>;
    /*Regular expression flags*/
    "flags": NamedNode<'http://www.w3.org/ns/shex#flags'>;
    /*for "fractiondigits" constraints, v is less than or equals the number of digits to the right of the decimal place in the XML Schema canonical form[xmlschema-2] of the value of n, ignoring trailing zeros.*/
    "fractiondigits": NamedNode<'http://www.w3.org/ns/shex#fractiondigits'>;
    /*Constrains the subject of a triple, rather than the object.*/
    "inverse": NamedNode<'http://www.w3.org/ns/shex#inverse'>;
    /*Requires node to be an IRI*/
    "iri": NamedNode<'http://www.w3.org/ns/shex#iri'>;
    /*The value used to match the language tag of a language-tagged string.*/
    "languageTag": NamedNode<'http://www.w3.org/ns/shex#languageTag'>;
    /*The exact length of the value of the cell.*/
    "length": NamedNode<'http://www.w3.org/ns/shex#length'>;
    /*Requires node to be an rdf:Literal*/
    "literal": NamedNode<'http://www.w3.org/ns/shex#literal'>;
    /*Maximum number of times this TripleExpression may match; -1 for “*”*/
    "max": NamedNode<'http://www.w3.org/ns/shex#max'>;
    /*An atomic property that contains a single number that is the maximum valid value (exclusive).*/
    "maxexclusive": NamedNode<'http://www.w3.org/ns/shex#maxexclusive'>;
    /*An atomic property that contains a single number that is the maximum valid value (inclusive).*/
    "maxinclusive": NamedNode<'http://www.w3.org/ns/shex#maxinclusive'>;
    /*A numeric atomic property that contains a single integer that is the maximum length of the value.*/
    "maxlength": NamedNode<'http://www.w3.org/ns/shex#maxlength'>;
    /*Minimum number of times this TripleExpression may match.*/
    "min": NamedNode<'http://www.w3.org/ns/shex#min'>;
    /*An atomic property that contains a single number that is the minimum valid value (exclusive).*/
    "minexclusive": NamedNode<'http://www.w3.org/ns/shex#minexclusive'>;
    /*An atomic property that contains a single number that is the minimum valid value (inclusive).*/
    "mininclusive": NamedNode<'http://www.w3.org/ns/shex#mininclusive'>;
    /*An atomic property that contains a single integer that is the minimum length of the value.*/
    "minlength": NamedNode<'http://www.w3.org/ns/shex#minlength'>;
    /*Identifier of SemAct extension.*/
    "name": NamedNode<'http://www.w3.org/ns/shex#name'>;
    /*Restiction on the kind of node matched; restricted to the defined instances of NodeKind. One of shex:iri, shex:bnode, shex:literal, or shex:nonliteral.*/
    "nodeKind": NamedNode<'http://www.w3.org/ns/shex#nodeKind'>;
    /*Requires node to be a Blank Node or IRI*/
    "nonliteral": NamedNode<'http://www.w3.org/ns/shex#nonliteral'>;
    /*Abstract property of numeric facets on a NodeConstraint.*/
    "numericFacet": NamedNode<'http://www.w3.org/ns/shex#numericFacet'>;
    /*The object of an Annotation.*/
    "object": NamedNode<'http://www.w3.org/ns/shex#object'>;
    /*A regular expression used for matching a value.*/
    "pattern": NamedNode<'http://www.w3.org/ns/shex#pattern'>;
    /*The predicate of a TripleConstraint or Annotation.*/
    "predicate": NamedNode<'http://www.w3.org/ns/shex#predicate'>;
    /*Semantic Actions on this TripleExpression.*/
    "semActs": NamedNode<'http://www.w3.org/ns/shex#semActs'>;
    /*Shape Expression referenced by this shape.*/
    "shapeExpr": NamedNode<'http://www.w3.org/ns/shex#shapeExpr'>;
    /*A list of 2 or more Shape Expressions referenced by this shape.*/
    "shapeExprs": NamedNode<'http://www.w3.org/ns/shex#shapeExprs'>;
    /*Shapes in this Schema.*/
    "shapes": NamedNode<'http://www.w3.org/ns/shex#shapes'>;
    /*A ShapeExpression matched against the focus node prior to any other mapped expressions.*/
    "start": NamedNode<'http://www.w3.org/ns/shex#start'>;
    /*Semantic Actions run on the Schema.*/
    "startActs": NamedNode<'http://www.w3.org/ns/shex#startActs'>;
    /*A stem value used for matching or excluding values.*/
    "stem": NamedNode<'http://www.w3.org/ns/shex#stem'>;
    /*An abstract property of string facets on a NodeConstraint.*/
    "stringFacet": NamedNode<'http://www.w3.org/ns/shex#stringFacet'>;
    /*for "totaldigits" constraints, v equals the number of digits in the XML Schema canonical form[xmlschema-2] of the value of n*/
    "totaldigits": NamedNode<'http://www.w3.org/ns/shex#totaldigits'>;
    /*A ShapeExpression used for matching the object (or subject if inverted) of a TripleConstraint.*/
    "valueExpr": NamedNode<'http://www.w3.org/ns/shex#valueExpr'>;
    /*A value restriction on a NodeConstraint.*/
    "values": NamedNode<'http://www.w3.org/ns/shex#values'>;
    /*An abstract property of string and numeric facets on a NodeConstraint.*/
    "xsFacet": NamedNode<'http://www.w3.org/ns/shex#xsFacet'>;
};
export const shex: Shex = (namespace("http://www.w3.org/ns/shex#") as any);
