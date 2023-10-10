import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Sh {
    '': NamedNode<'http://www.w3.org/ns/shacl#'>;
    /** Links a resource with its namespace prefix declarations. */
    "declare": NamedNode<'http://www.w3.org/ns/shacl#declare'>;
    /** Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements. */
    "suggestedShapesGraph": NamedNode<'http://www.w3.org/ns/shacl#suggestedShapesGraph'>;
    /** The base class of validation results, typically not instantiated directly. */
    "AbstractResult": NamedNode<'http://www.w3.org/ns/shacl#AbstractResult'>;
    "AndConstraintComponent-and": NamedNode<'http://www.w3.org/ns/shacl#AndConstraintComponent-and'>;
    /** The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics. */
    "Parameter": NamedNode<'http://www.w3.org/ns/shacl#Parameter'>;
    /** Specifies the property path of a property shape. */
    "path": NamedNode<'http://www.w3.org/ns/shacl#path'>;
    /** RDF list of shapes to validate the value nodes against. */
    "and": NamedNode<'http://www.w3.org/ns/shacl#and'>;
    /** A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes. */
    "AndConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#AndConstraintComponent'>;
    /** The class of constraint components. */
    "ConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ConstraintComponent'>;
    /** The parameters of a function or constraint component. */
    "parameter": NamedNode<'http://www.w3.org/ns/shacl#parameter'>;
    /** The node kind of all blank nodes. */
    "BlankNode": NamedNode<'http://www.w3.org/ns/shacl#BlankNode'>;
    /** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
    "NodeKind": NamedNode<'http://www.w3.org/ns/shacl#NodeKind'>;
    /** The node kind of all blank nodes or IRIs. */
    "BlankNodeOrIRI": NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrIRI'>;
    /** The node kind of all blank nodes or literals. */
    "BlankNodeOrLiteral": NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrLiteral'>;
    "ClassConstraintComponent-class": NamedNode<'http://www.w3.org/ns/shacl#ClassConstraintComponent-class'>;
    /** Specifies the node kind (e.g. IRI or literal) each value node. */
    "nodeKind": NamedNode<'http://www.w3.org/ns/shacl#nodeKind'>;
    /** The node kind of all IRIs. */
    "IRI": NamedNode<'http://www.w3.org/ns/shacl#IRI'>;
    /** The type that all value nodes must have. */
    "class": NamedNode<'http://www.w3.org/ns/shacl#class'>;
    /** A constraint component that can be used to verify that each value node is an instance of a given type. */
    "ClassConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ClassConstraintComponent'>;
    "ClosedConstraintComponent-closed": NamedNode<'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed'>;
    /** Specifies an RDF datatype that all value nodes must have. */
    "datatype": NamedNode<'http://www.w3.org/ns/shacl#datatype'>;
    /** If set to true then the shape is closed. */
    "closed": NamedNode<'http://www.w3.org/ns/shacl#closed'>;
    "ClosedConstraintComponent-ignoredProperties": NamedNode<'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties'>;
    /** Indicates whether a parameter is optional. */
    "optional": NamedNode<'http://www.w3.org/ns/shacl#optional'>;
    /** An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path. */
    "ignoredProperties": NamedNode<'http://www.w3.org/ns/shacl#ignoredProperties'>;
    /** A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path. */
    "ClosedConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ClosedConstraintComponent'>;
    /** Superclass of components that can take parameters, especially functions and constraint components. */
    "Parameterizable": NamedNode<'http://www.w3.org/ns/shacl#Parameterizable'>;
    "DatatypeConstraintComponent-datatype": NamedNode<'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype'>;
    /** Specifies the maximum number of values in the set of value nodes. */
    "maxCount": NamedNode<'http://www.w3.org/ns/shacl#maxCount'>;
    /** A constraint component that can be used to restrict the datatype of all value nodes. */
    "DatatypeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#DatatypeConstraintComponent'>;
    "DisjointConstraintComponent-disjoint": NamedNode<'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint'>;
    /** Specifies a property where the set of values must be disjoint with the value nodes. */
    "disjoint": NamedNode<'http://www.w3.org/ns/shacl#disjoint'>;
    /** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate. */
    "DisjointConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#DisjointConstraintComponent'>;
    "EqualsConstraintComponent-equals": NamedNode<'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals'>;
    /** Specifies a property that must have the same values as the value nodes. */
    "equals": NamedNode<'http://www.w3.org/ns/shacl#equals'>;
    /** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate. */
    "EqualsConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#EqualsConstraintComponent'>;
    "ExpressionConstraintComponent-expression": NamedNode<'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression'>;
    /** The node expression that must return true for the value nodes. */
    "expression": NamedNode<'http://www.w3.org/ns/shacl#expression'>;
    /** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
    "ExpressionConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ExpressionConstraintComponent'>;
    /** The class of SHACL functions. */
    "Function": NamedNode<'http://www.w3.org/ns/shacl#Function'>;
    "HasValueConstraintComponent-hasValue": NamedNode<'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue'>;
    /** Specifies a value that must be among the value nodes. */
    "hasValue": NamedNode<'http://www.w3.org/ns/shacl#hasValue'>;
    /** A constraint component that can be used to verify that one of the value nodes is a given RDF node. */
    "HasValueConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#HasValueConstraintComponent'>;
    /** The node kind of all IRIs or literals. */
    "IRIOrLiteral": NamedNode<'http://www.w3.org/ns/shacl#IRIOrLiteral'>;
    "InConstraintComponent-in": NamedNode<'http://www.w3.org/ns/shacl#InConstraintComponent-in'>;
    /** Specifies a list of allowed values so that each value node must be among the members of the given list. */
    "in": NamedNode<'http://www.w3.org/ns/shacl#in'>;
    /** A constraint component that can be used to exclusively enumerate the permitted value nodes. */
    "InConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#InConstraintComponent'>;
    /** The severity for an informational validation result. */
    "Info": NamedNode<'http://www.w3.org/ns/shacl#Info'>;
    /** The class of validation result severity levels, including violation and warning levels. */
    "Severity": NamedNode<'http://www.w3.org/ns/shacl#Severity'>;
    "JSConstraint-js": NamedNode<'http://www.w3.org/ns/shacl#JSConstraint-js'>;
    /** Constraints expressed in JavaScript. */
    "js": NamedNode<'http://www.w3.org/ns/shacl#js'>;
    /** The class of constraints backed by a JavaScript function. */
    "JSConstraint": NamedNode<'http://www.w3.org/ns/shacl#JSConstraint'>;
    /** Abstract base class of resources that declare an executable JavaScript. */
    "JSExecutable": NamedNode<'http://www.w3.org/ns/shacl#JSExecutable'>;
    /** A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script. */
    "JSConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#JSConstraintComponent'>;
    /** The class of SHACL functions that execute a JavaScript function when called. */
    "JSFunction": NamedNode<'http://www.w3.org/ns/shacl#JSFunction'>;
    /** Represents a JavaScript library, typically identified by one or more URLs of files to include. */
    "JSLibrary": NamedNode<'http://www.w3.org/ns/shacl#JSLibrary'>;
    /** The class of SHACL rules expressed using JavaScript. */
    "JSRule": NamedNode<'http://www.w3.org/ns/shacl#JSRule'>;
    /** The class of SHACL rules. Never instantiated directly. */
    "Rule": NamedNode<'http://www.w3.org/ns/shacl#Rule'>;
    /** The class of targets that are based on JavaScript functions. */
    "JSTarget": NamedNode<'http://www.w3.org/ns/shacl#JSTarget'>;
    /** The base class of targets such as those based on SPARQL queries. */
    "Target": NamedNode<'http://www.w3.org/ns/shacl#Target'>;
    /** The (meta) class for parameterizable targets that are based on JavaScript functions. */
    "JSTargetType": NamedNode<'http://www.w3.org/ns/shacl#JSTargetType'>;
    /** The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property. */
    "TargetType": NamedNode<'http://www.w3.org/ns/shacl#TargetType'>;
    /** A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used. */
    "JSValidator": NamedNode<'http://www.w3.org/ns/shacl#JSValidator'>;
    /** The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations. */
    "Validator": NamedNode<'http://www.w3.org/ns/shacl#Validator'>;
    "LanguageInConstraintComponent-languageIn": NamedNode<'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn'>;
    /** Specifies a list of language tags that all value nodes must have. */
    "languageIn": NamedNode<'http://www.w3.org/ns/shacl#languageIn'>;
    /** A constraint component that can be used to enumerate language tags that all value nodes must have. */
    "LanguageInConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LanguageInConstraintComponent'>;
    "LessThanConstraintComponent-lessThan": NamedNode<'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan'>;
    /** Specifies a property that must have smaller values than the value nodes. */
    "lessThan": NamedNode<'http://www.w3.org/ns/shacl#lessThan'>;
    /** A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
    "LessThanConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LessThanConstraintComponent'>;
    "LessThanOrEqualsConstraintComponent-lessThanOrEquals": NamedNode<'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals'>;
    /** Specifies a property that must have smaller or equal values than the value nodes. */
    "lessThanOrEquals": NamedNode<'http://www.w3.org/ns/shacl#lessThanOrEquals'>;
    /** A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
    "LessThanOrEqualsConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent'>;
    /** The node kind of all literals. */
    "Literal": NamedNode<'http://www.w3.org/ns/shacl#Literal'>;
    "MaxCountConstraintComponent-maxCount": NamedNode<'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount'>;
    /** A constraint component that can be used to restrict the maximum number of value nodes. */
    "MaxCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxCountConstraintComponent'>;
    "MaxExclusiveConstraintComponent-maxExclusive": NamedNode<'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive'>;
    /** Specifies the maximum exclusive value of each value node. */
    "maxExclusive": NamedNode<'http://www.w3.org/ns/shacl#maxExclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value. */
    "MaxExclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent'>;
    "MaxInclusiveConstraintComponent-maxInclusive": NamedNode<'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive'>;
    /** Specifies the maximum inclusive value of each value node. */
    "maxInclusive": NamedNode<'http://www.w3.org/ns/shacl#maxInclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value. */
    "MaxInclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent'>;
    "MaxLengthConstraintComponent-maxLength": NamedNode<'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength'>;
    /** Specifies the maximum string length of each value node. */
    "maxLength": NamedNode<'http://www.w3.org/ns/shacl#maxLength'>;
    /** A constraint component that can be used to restrict the maximum string length of value nodes. */
    "MaxLengthConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent'>;
    "MinCountConstraintComponent-minCount": NamedNode<'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount'>;
    /** Specifies the minimum number of values in the set of value nodes. */
    "minCount": NamedNode<'http://www.w3.org/ns/shacl#minCount'>;
    /** A constraint component that can be used to restrict the minimum number of value nodes. */
    "MinCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinCountConstraintComponent'>;
    "MinExclusiveConstraintComponent-minExclusive": NamedNode<'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive'>;
    /** Specifies the minimum exclusive value of each value node. */
    "minExclusive": NamedNode<'http://www.w3.org/ns/shacl#minExclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value. */
    "MinExclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent'>;
    "MinInclusiveConstraintComponent-minInclusive": NamedNode<'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive'>;
    /** Specifies the minimum inclusive value of each value node. */
    "minInclusive": NamedNode<'http://www.w3.org/ns/shacl#minInclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value. */
    "MinInclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent'>;
    "MinLengthConstraintComponent-minLength": NamedNode<'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength'>;
    /** Specifies the minimum string length of each value node. */
    "minLength": NamedNode<'http://www.w3.org/ns/shacl#minLength'>;
    /** A constraint component that can be used to restrict the minimum string length of value nodes. */
    "MinLengthConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinLengthConstraintComponent'>;
    "NodeConstraintComponent-node": NamedNode<'http://www.w3.org/ns/shacl#NodeConstraintComponent-node'>;
    /** Specifies the node shape that all value nodes must conform to. */
    "node": NamedNode<'http://www.w3.org/ns/shacl#node'>;
    /** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
    "NodeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeConstraintComponent'>;
    "NodeKindConstraintComponent-nodeKind": NamedNode<'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind'>;
    /** A constraint component that can be used to restrict the RDF node kind of each value node. */
    "NodeKindConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeKindConstraintComponent'>;
    /** A node shape is a shape that specifies constraint that need to be met with respect to focus nodes. */
    "NodeShape": NamedNode<'http://www.w3.org/ns/shacl#NodeShape'>;
    /** A shape is a collection of constraints that may be targeted for certain nodes. */
    "Shape": NamedNode<'http://www.w3.org/ns/shacl#Shape'>;
    "NotConstraintComponent-not": NamedNode<'http://www.w3.org/ns/shacl#NotConstraintComponent-not'>;
    /** Specifies a shape that the value nodes must not conform to. */
    "not": NamedNode<'http://www.w3.org/ns/shacl#not'>;
    /** A constraint component that can be used to verify that value nodes do not conform to a given shape. */
    "NotConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NotConstraintComponent'>;
    "OrConstraintComponent-or": NamedNode<'http://www.w3.org/ns/shacl#OrConstraintComponent-or'>;
    /** Specifies a list of shapes so that the value nodes must conform to at least one of the shapes. */
    "or": NamedNode<'http://www.w3.org/ns/shacl#or'>;
    /** A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes. */
    "OrConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#OrConstraintComponent'>;
    /** A property shape is a shape that specifies constraints on the values of a focus node for a given property or path. */
    "PropertyShape": NamedNode<'http://www.w3.org/ns/shacl#PropertyShape'>;
    "PatternConstraintComponent-flags": NamedNode<'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags'>;
    /** An optional flag to be used with regular expression pattern matching. */
    "flags": NamedNode<'http://www.w3.org/ns/shacl#flags'>;
    "PatternConstraintComponent-pattern": NamedNode<'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern'>;
    /** Specifies a regular expression pattern that the string representations of the value nodes must match. */
    "pattern": NamedNode<'http://www.w3.org/ns/shacl#pattern'>;
    /** A constraint component that can be used to verify that every value node matches a given regular expression. */
    "PatternConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#PatternConstraintComponent'>;
    /** The class of prefix declarations, consisting of pairs of a prefix with a namespace. */
    "PrefixDeclaration": NamedNode<'http://www.w3.org/ns/shacl#PrefixDeclaration'>;
    "PropertyConstraintComponent-property": NamedNode<'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property'>;
    /** Links a shape to its property shapes. */
    "property": NamedNode<'http://www.w3.org/ns/shacl#property'>;
    /** A constraint component that can be used to verify that all value nodes conform to the given property shape. */
    "PropertyConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#PropertyConstraintComponent'>;
    /** Instances of this class represent groups of property shapes that belong together. */
    "PropertyGroup": NamedNode<'http://www.w3.org/ns/shacl#PropertyGroup'>;
    "QualifiedMaxCountConstraintComponent-qualifiedMaxCount": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount'>;
    /** The maximum number of value nodes that can conform to the shape. */
    "qualifiedMaxCount": NamedNode<'http://www.w3.org/ns/shacl#qualifiedMaxCount'>;
    "QualifiedMaxCountConstraintComponent-qualifiedValueShape": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape'>;
    /** The shape that a specified number of values must conform to. */
    "qualifiedValueShape": NamedNode<'http://www.w3.org/ns/shacl#qualifiedValueShape'>;
    "QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint'>;
    /** Can be used to mark the qualified value shape to be disjoint with its sibling shapes. */
    "qualifiedValueShapesDisjoint": NamedNode<'http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint'>;
    /** A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape. */
    "QualifiedMaxCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent'>;
    "QualifiedMinCountConstraintComponent-qualifiedMinCount": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount'>;
    /** The minimum number of value nodes that must conform to the shape. */
    "qualifiedMinCount": NamedNode<'http://www.w3.org/ns/shacl#qualifiedMinCount'>;
    "QualifiedMinCountConstraintComponent-qualifiedValueShape": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape'>;
    "QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint'>;
    /** A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape. */
    "QualifiedMinCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent'>;
    /** A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result. */
    "ResultAnnotation": NamedNode<'http://www.w3.org/ns/shacl#ResultAnnotation'>;
    /** The class of SPARQL executables that are based on an ASK query. */
    "SPARQLAskExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLAskExecutable'>;
    /** The class of resources that encapsulate a SPARQL query. */
    "SPARQLExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLExecutable'>;
    /** The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms. */
    "SPARQLAskValidator": NamedNode<'http://www.w3.org/ns/shacl#SPARQLAskValidator'>;
    /** The class of constraints based on SPARQL SELECT queries. */
    "SPARQLConstraint": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstraint'>;
    /** The class of SPARQL executables based on a SELECT query. */
    "SPARQLSelectExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLSelectExecutable'>;
    "SPARQLConstraintComponent-sparql": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql'>;
    /** Links a shape with SPARQL constraints. */
    "sparql": NamedNode<'http://www.w3.org/ns/shacl#sparql'>;
    /** A constraint component that can be used to define constraints based on SPARQL queries. */
    "SPARQLConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstraintComponent'>;
    /** The class of SPARQL executables that are based on a CONSTRUCT query. */
    "SPARQLConstructExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstructExecutable'>;
    /** A function backed by a SPARQL query - either ASK or SELECT. */
    "SPARQLFunction": NamedNode<'http://www.w3.org/ns/shacl#SPARQLFunction'>;
    /** The class of SHACL rules based on SPARQL CONSTRUCT queries. */
    "SPARQLRule": NamedNode<'http://www.w3.org/ns/shacl#SPARQLRule'>;
    /** The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform. */
    "SPARQLSelectValidator": NamedNode<'http://www.w3.org/ns/shacl#SPARQLSelectValidator'>;
    /** The class of targets that are based on SPARQL queries. */
    "SPARQLTarget": NamedNode<'http://www.w3.org/ns/shacl#SPARQLTarget'>;
    /** The (meta) class for parameterizable targets that are based on SPARQL queries. */
    "SPARQLTargetType": NamedNode<'http://www.w3.org/ns/shacl#SPARQLTargetType'>;
    /** The class of SPARQL executables based on a SPARQL UPDATE. */
    "SPARQLUpdateExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLUpdateExecutable'>;
    "TripleRule": NamedNode<'http://www.w3.org/ns/shacl#TripleRule'>;
    "UniqueLangConstraintComponent-uniqueLang": NamedNode<'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang'>;
    /** Specifies whether all node values must have a unique (or no) language tag. */
    "uniqueLang": NamedNode<'http://www.w3.org/ns/shacl#uniqueLang'>;
    /** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
    "UniqueLangConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent'>;
    /** The class of SHACL validation reports. */
    "ValidationReport": NamedNode<'http://www.w3.org/ns/shacl#ValidationReport'>;
    /** The class of validation results. */
    "ValidationResult": NamedNode<'http://www.w3.org/ns/shacl#ValidationResult'>;
    /** The severity for a violation validation result. */
    "Violation": NamedNode<'http://www.w3.org/ns/shacl#Violation'>;
    /** The severity for a warning validation result. */
    "Warning": NamedNode<'http://www.w3.org/ns/shacl#Warning'>;
    "XoneConstraintComponent-xone": NamedNode<'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone'>;
    /** Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes. */
    "xone": NamedNode<'http://www.w3.org/ns/shacl#xone'>;
    /** A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes. */
    "XoneConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#XoneConstraintComponent'>;
    /** The (single) value of this property must be a list of path elements, representing the elements of alternative paths. */
    "alternativePath": NamedNode<'http://www.w3.org/ns/shacl#alternativePath'>;
    /** The annotation property that shall be set. */
    "annotationProperty": NamedNode<'http://www.w3.org/ns/shacl#annotationProperty'>;
    /** The (default) values of the annotation property. */
    "annotationValue": NamedNode<'http://www.w3.org/ns/shacl#annotationValue'>;
    /** The name of the SPARQL variable from the SELECT clause that shall be used for the values. */
    "annotationVarName": NamedNode<'http://www.w3.org/ns/shacl#annotationVarName'>;
    /** The SPARQL ASK query to execute. */
    "ask": NamedNode<'http://www.w3.org/ns/shacl#ask'>;
    /** The shapes that the focus nodes need to conform to before a rule is executed on them. */
    "condition": NamedNode<'http://www.w3.org/ns/shacl#condition'>;
    /** True if the validation did not produce any validation results, and false otherwise. */
    "conforms": NamedNode<'http://www.w3.org/ns/shacl#conforms'>;
    /** The SPARQL CONSTRUCT query to execute. */
    "construct": NamedNode<'http://www.w3.org/ns/shacl#construct'>;
    /** If set to true then all nodes conform to this. */
    "deactivated": NamedNode<'http://www.w3.org/ns/shacl#deactivated'>;
    /** A default value for a property, for example for user interface tools to pre-populate input fields. */
    "defaultValue": NamedNode<'http://www.w3.org/ns/shacl#defaultValue'>;
    /** Human-readable descriptions for the property in the context of the surrounding shape. */
    "description": NamedNode<'http://www.w3.org/ns/shacl#description'>;
    /** Links a result with other results that provide more details, for example to describe violations against nested shapes. */
    "detail": NamedNode<'http://www.w3.org/ns/shacl#detail'>;
    /** An entailment regime that indicates what kind of inferencing is required by a shapes graph. */
    "entailment": NamedNode<'http://www.w3.org/ns/shacl#entailment'>;
    /** The shape that all input nodes of the expression need to conform to. */
    "filterShape": NamedNode<'http://www.w3.org/ns/shacl#filterShape'>;
    /** The focus node that was validated when the result was produced. */
    "focusNode": NamedNode<'http://www.w3.org/ns/shacl#focusNode'>;
    /** Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes. */
    "group": NamedNode<'http://www.w3.org/ns/shacl#group'>;
    /** A list of node expressions that shall be intersected. */
    "intersection": NamedNode<'http://www.w3.org/ns/shacl#intersection'>;
    /** The (single) value of this property represents an inverse path (object to subject). */
    "inversePath": NamedNode<'http://www.w3.org/ns/shacl#inversePath'>;
    /** The name of the JavaScript function to execute. */
    "jsFunctionName": NamedNode<'http://www.w3.org/ns/shacl#jsFunctionName'>;
    /** Declares which JavaScript libraries are needed to execute this. */
    "jsLibrary": NamedNode<'http://www.w3.org/ns/shacl#jsLibrary'>;
    /** Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files. */
    "jsLibraryURL": NamedNode<'http://www.w3.org/ns/shacl#jsLibraryURL'>;
    /** Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter. */
    "labelTemplate": NamedNode<'http://www.w3.org/ns/shacl#labelTemplate'>;
    /** A human-readable message (possibly with placeholders for variables) explaining the cause of the result. */
    "message": NamedNode<'http://www.w3.org/ns/shacl#message'>;
    /** Human-readable labels for the property in the context of the surrounding shape. */
    "name": NamedNode<'http://www.w3.org/ns/shacl#name'>;
    /** The namespace associated with a prefix in a prefix declaration. */
    "namespace": NamedNode<'http://www.w3.org/ns/shacl#namespace'>;
    /** The validator(s) used to evaluate a constraint in the context of a node shape. */
    "nodeValidator": NamedNode<'http://www.w3.org/ns/shacl#nodeValidator'>;
    /** The node expression producing the input nodes of a filter shape expression. */
    "nodes": NamedNode<'http://www.w3.org/ns/shacl#nodes'>;
    /** An expression producing the nodes that shall be inferred as objects. */
    "object": NamedNode<'http://www.w3.org/ns/shacl#object'>;
    /** The (single) value of this property represents a path that is matched one or more times. */
    "oneOrMorePath": NamedNode<'http://www.w3.org/ns/shacl#oneOrMorePath'>;
    /** Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second. */
    "order": NamedNode<'http://www.w3.org/ns/shacl#order'>;
    /** An expression producing the properties that shall be inferred as predicates. */
    "predicate": NamedNode<'http://www.w3.org/ns/shacl#predicate'>;
    /** The prefix of a prefix declaration. */
    "prefix": NamedNode<'http://www.w3.org/ns/shacl#prefix'>;
    /** The prefixes that shall be applied before parsing the associated SPARQL query. */
    "prefixes": NamedNode<'http://www.w3.org/ns/shacl#prefixes'>;
    /** The validator(s) used to evaluate a constraint in the context of a property shape. */
    "propertyValidator": NamedNode<'http://www.w3.org/ns/shacl#propertyValidator'>;
    /** The validation results contained in a validation report. */
    "result": NamedNode<'http://www.w3.org/ns/shacl#result'>;
    /** Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query. */
    "resultAnnotation": NamedNode<'http://www.w3.org/ns/shacl#resultAnnotation'>;
    /** Human-readable messages explaining the cause of the result. */
    "resultMessage": NamedNode<'http://www.w3.org/ns/shacl#resultMessage'>;
    /** The path of a validation result, based on the path of the validated property shape. */
    "resultPath": NamedNode<'http://www.w3.org/ns/shacl#resultPath'>;
    /** The severity of the result, e.g. warning. */
    "resultSeverity": NamedNode<'http://www.w3.org/ns/shacl#resultSeverity'>;
    /** The expected type of values returned by the associated function. */
    "returnType": NamedNode<'http://www.w3.org/ns/shacl#returnType'>;
    /** The rules linked to a shape. */
    "rule": NamedNode<'http://www.w3.org/ns/shacl#rule'>;
    /** The SPARQL SELECT query to execute. */
    "select": NamedNode<'http://www.w3.org/ns/shacl#select'>;
    /** Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation. */
    "severity": NamedNode<'http://www.w3.org/ns/shacl#severity'>;
    /** Shapes graphs that should be used when validating this data graph. */
    "shapesGraph": NamedNode<'http://www.w3.org/ns/shacl#shapesGraph'>;
    /** If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process. */
    "shapesGraphWellFormed": NamedNode<'http://www.w3.org/ns/shacl#shapesGraphWellFormed'>;
    /** The constraint that was validated when the result was produced. */
    "sourceConstraint": NamedNode<'http://www.w3.org/ns/shacl#sourceConstraint'>;
    /** The constraint component that is the source of the result. */
    "sourceConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#sourceConstraintComponent'>;
    /** The shape that is was validated when the result was produced. */
    "sourceShape": NamedNode<'http://www.w3.org/ns/shacl#sourceShape'>;
    /** An expression producing the resources that shall be inferred as subjects. */
    "subject": NamedNode<'http://www.w3.org/ns/shacl#subject'>;
    /** Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget. */
    "target": NamedNode<'http://www.w3.org/ns/shacl#target'>;
    /** Links a shape to a class, indicating that all instances of the class must conform to the shape. */
    "targetClass": NamedNode<'http://www.w3.org/ns/shacl#targetClass'>;
    /** Links a shape to individual nodes, indicating that these nodes must conform to the shape. */
    "targetNode": NamedNode<'http://www.w3.org/ns/shacl#targetNode'>;
    /** Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape. */
    "targetObjectsOf": NamedNode<'http://www.w3.org/ns/shacl#targetObjectsOf'>;
    /** Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape. */
    "targetSubjectsOf": NamedNode<'http://www.w3.org/ns/shacl#targetSubjectsOf'>;
    /** A node expression that represents the current focus node. */
    "this": NamedNode<'http://www.w3.org/ns/shacl#this'>;
    /** A list of node expressions that shall be used together. */
    "union": NamedNode<'http://www.w3.org/ns/shacl#union'>;
    /** The SPARQL UPDATE to execute. */
    "update": NamedNode<'http://www.w3.org/ns/shacl#update'>;
    /** The validator(s) used to evaluate constraints of either node or property shapes. */
    "validator": NamedNode<'http://www.w3.org/ns/shacl#validator'>;
    /** An RDF node that has caused the result. */
    "value": NamedNode<'http://www.w3.org/ns/shacl#value'>;
    /** The (single) value of this property represents a path that is matched zero or more times. */
    "zeroOrMorePath": NamedNode<'http://www.w3.org/ns/shacl#zeroOrMorePath'>;
    /** The (single) value of this property represents a path that is matched zero or one times. */
    "zeroOrOnePath": NamedNode<'http://www.w3.org/ns/shacl#zeroOrOnePath'>;
}

const builder = namespace("http://www.w3.org/ns/shacl#") as any;
export const strict = builder as NamespaceBuilder<keyof Sh> & Sh;
export const loose = builder as NamespaceBuilder & Sh;
