import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Sh {
    '': NamedNode<'http://www.w3.org/ns/shacl#'>;
    "1.2": NamedNode<'http://www.w3.org/ns/shacl#1.2'>;
    /** The base class of validation results, typically not instantiated directly. */
    "AbstractResult": NamedNode<'http://www.w3.org/ns/shacl#AbstractResult'>;
    /** Can be used to store instructions that shall be sent as input for external agents that understand natural language. */
    "agentInstruction": NamedNode<'http://www.w3.org/ns/shacl#agentInstruction'>;
    /** The (single) value of this property must be a list of path elements, representing the elements of alternative paths. */
    "alternativePath": NamedNode<'http://www.w3.org/ns/shacl#alternativePath'>;
    /** RDF list of shapes to validate the value nodes against. */
    "and": NamedNode<'http://www.w3.org/ns/shacl#and'>;
    "AndConstraintComponent-and": NamedNode<'http://www.w3.org/ns/shacl#AndConstraintComponent-and'>;
    /** A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes. */
    "AndConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#AndConstraintComponent'>;
    /** The annotation property that shall be set. */
    "annotationProperty": NamedNode<'http://www.w3.org/ns/shacl#annotationProperty'>;
    /** The (default) values of the annotation property. */
    "annotationValue": NamedNode<'http://www.w3.org/ns/shacl#annotationValue'>;
    /** The name of the SPARQL variable from the SELECT clause that shall be used for the values. */
    "annotationVarName": NamedNode<'http://www.w3.org/ns/shacl#annotationVarName'>;
    /** The SPARQL ASK query to execute. */
    "ask": NamedNode<'http://www.w3.org/ns/shacl#ask'>;
    /** The node kind of all blank nodes. */
    "BlankNode": NamedNode<'http://www.w3.org/ns/shacl#BlankNode'>;
    /** The node kind of all blank nodes or IRIs. */
    "BlankNodeOrIRI": NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrIRI'>;
    /** The node kind of all blank nodes or literals. */
    "BlankNodeOrLiteral": NamedNode<'http://www.w3.org/ns/shacl#BlankNodeOrLiteral'>;
    /** A node expression that is the implementation/body of a custom node expression function. */
    "bodyExpression": NamedNode<'http://www.w3.org/ns/shacl#bodyExpression'>;
    /** The type that all value nodes must have. */
    "class": NamedNode<'http://www.w3.org/ns/shacl#class'>;
    "ClassConstraintComponent-class": NamedNode<'http://www.w3.org/ns/shacl#ClassConstraintComponent-class'>;
    /** A constraint component that can be used to verify that each value node is an instance of a given type. */
    "ClassConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ClassConstraintComponent'>;
    /** If set to true then the shape is closed. */
    "closed": NamedNode<'http://www.w3.org/ns/shacl#closed'>;
    "ClosedConstraintComponent-closed": NamedNode<'http://www.w3.org/ns/shacl#ClosedConstraintComponent-closed'>;
    "ClosedConstraintComponent-ignoredProperties": NamedNode<'http://www.w3.org/ns/shacl#ClosedConstraintComponent-ignoredProperties'>;
    /** A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path. */
    "ClosedConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ClosedConstraintComponent'>;
    /** A hint on how code generators should represent the associated shape. */
    "codeIdentifier": NamedNode<'http://www.w3.org/ns/shacl#codeIdentifier'>;
    /** The shapes that the focus nodes need to conform to before a rule is executed on them. */
    "condition": NamedNode<'http://www.w3.org/ns/shacl#condition'>;
    /** Severity levels that are evaluated in the conformance check. */
    "conformanceDisallows": NamedNode<'http://www.w3.org/ns/shacl#conformanceDisallows'>;
    /** True if the validation did not produce any validation results with a severity level of the set of disallowed levels, and false otherwise. */
    "conforms": NamedNode<'http://www.w3.org/ns/shacl#conforms'>;
    /** The subject conforms to the object if validation did not produce any validation results with a severity level of the set of disallowed levels. */
    "conformsTo": NamedNode<'http://www.w3.org/ns/shacl#conformsTo'>;
    /** The class of constraint components. */
    "ConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ConstraintComponent'>;
    /** The SPARQL CONSTRUCT query to execute. */
    "construct": NamedNode<'http://www.w3.org/ns/shacl#construct'>;
    "count": NamedNode<'http://www.w3.org/ns/shacl#count'>;
    /** A count expression is a blank node with exactly one value for the property sh:count which is a well-formed node expression. */
    "CountExpression": NamedNode<'http://www.w3.org/ns/shacl#CountExpression'>;
    /** The class of graphs that typically act in the role of a SHACL data graph. */
    "DataGraph": NamedNode<'http://www.w3.org/ns/shacl#DataGraph'>;
    /** Specifies an RDF datatype that all value nodes must have. */
    "datatype": NamedNode<'http://www.w3.org/ns/shacl#datatype'>;
    "DatatypeConstraintComponent-datatype": NamedNode<'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype'>;
    /** A constraint component that can be used to restrict the datatype of all value nodes. */
    "DatatypeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#DatatypeConstraintComponent'>;
    /** If set to true then all nodes conform to this. */
    "deactivated": NamedNode<'http://www.w3.org/ns/shacl#deactivated'>;
    /** The severity for a debug validation result. */
    "Debug": NamedNode<'http://www.w3.org/ns/shacl#Debug'>;
    /** Links a resource with its namespace prefix declarations. */
    "declare": NamedNode<'http://www.w3.org/ns/shacl#declare'>;
    /** A default value for a property, for example for user interface tools to pre-populate input fields. */
    "defaultValue": NamedNode<'http://www.w3.org/ns/shacl#defaultValue'>;
    "desc": NamedNode<'http://www.w3.org/ns/shacl#desc'>;
    /** The SPARQL DESCRIBE to execute. */
    "describe": NamedNode<'http://www.w3.org/ns/shacl#describe'>;
    /** Human-readable descriptions for the property in the context of the surrounding shape. */
    "description": NamedNode<'http://www.w3.org/ns/shacl#description'>;
    /** Links a result with other results that provide more details, for example to describe violations against nested shapes. */
    "detail": NamedNode<'http://www.w3.org/ns/shacl#detail'>;
    /** Specifies a property path where the set of values must be disjoint with the value nodes. */
    "disjoint": NamedNode<'http://www.w3.org/ns/shacl#disjoint'>;
    "DisjointConstraintComponent-disjoint": NamedNode<'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint'>;
    /** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that can be reached from the focus node via a given property path. */
    "DisjointConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#DisjointConstraintComponent'>;
    "distinct": NamedNode<'http://www.w3.org/ns/shacl#distinct'>;
    /** A distinct expression is a blank node with exactly one value for the property sh:distinct which is a well-formed node expression. */
    "DistinctExpression": NamedNode<'http://www.w3.org/ns/shacl#DistinctExpression'>;
    "else": NamedNode<'http://www.w3.org/ns/shacl#else'>;
    /** An entailment regime that indicates what kind of inferencing is required by a shapes graph. */
    "entailment": NamedNode<'http://www.w3.org/ns/shacl#entailment'>;
    /** Specifies a property path that must have the same values as the value nodes. */
    "equals": NamedNode<'http://www.w3.org/ns/shacl#equals'>;
    "EqualsConstraintComponent-equals": NamedNode<'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals'>;
    /** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that can be reached from the focus node using a given property path. */
    "EqualsConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#EqualsConstraintComponent'>;
    "exists": NamedNode<'http://www.w3.org/ns/shacl#exists'>;
    /** An exists expression is a blank node with exactly one value for sh:exists (which is a well-formed shape). */
    "ExistsExpression": NamedNode<'http://www.w3.org/ns/shacl#ExistsExpression'>;
    /** The node expression that must return true for the value nodes. */
    "expression": NamedNode<'http://www.w3.org/ns/shacl#expression'>;
    "ExpressionConstraintComponent-expression": NamedNode<'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression'>;
    /** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
    "ExpressionConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ExpressionConstraintComponent'>;
    /** Deprecated with SHACL 1.2: replaced by shnex:filterShape. */
    "filterShape": NamedNode<'http://www.w3.org/ns/shacl#filterShape'>;
    /** A filter shape expression is a blank node with exactly one value for sh:filterShape (which is a well-formed shape) and at most one value for sh:nodes (which is a well-formed node expression). */
    "FilterShapeExpression": NamedNode<'http://www.w3.org/ns/shacl#FilterShapeExpression'>;
    /** An optional flag to be used with regular expression pattern matching. */
    "flags": NamedNode<'http://www.w3.org/ns/shacl#flags'>;
    /** The focus node that was validated when the result was produced. */
    "focusNode": NamedNode<'http://www.w3.org/ns/shacl#focusNode'>;
    "FocusNodeOrConstantTermExpression": NamedNode<'http://www.w3.org/ns/shacl#FocusNodeOrConstantTermExpression'>;
    /** Can be used as reification of sh:intent triples to indicate whether the intended interpretation has already been formalized using SHACL in the same shapes graph. */
    "formalized": NamedNode<'http://www.w3.org/ns/shacl#formalized'>;
    /** The class of SHACL functions. */
    "Function": NamedNode<'http://www.w3.org/ns/shacl#Function'>;
    /** A function expression is a blank node that does not fulfill any of the syntax rules of the other node expression types and which is the subject of exactly one triple T where the object is a well-formed SHACL list, and each member of that list is a well-formed node expression. */
    "FunctionExpression": NamedNode<'http://www.w3.org/ns/shacl#FunctionExpression'>;
    /** The class of graphs. */
    "Graph": NamedNode<'http://www.w3.org/ns/shacl#Graph'>;
    /** Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes. */
    "group": NamedNode<'http://www.w3.org/ns/shacl#group'>;
    "groupConcat": NamedNode<'http://www.w3.org/ns/shacl#groupConcat'>;
    /** A group concat expression is a blank node with exactly one value for the property sh:groupConcat which is a well-formed node expression. A group concat expression can have a single value for the property sh:separator which is literal with datatype xsd:string. */
    "GroupConcatExpression": NamedNode<'http://www.w3.org/ns/shacl#GroupConcatExpression'>;
    /** Specifies a value that must be among the value nodes. */
    "hasValue": NamedNode<'http://www.w3.org/ns/shacl#hasValue'>;
    "HasValueConstraintComponent-hasValue": NamedNode<'http://www.w3.org/ns/shacl#HasValueConstraintComponent-hasValue'>;
    /** A constraint component that can be used to verify that one of the value nodes is a given RDF node. */
    "HasValueConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#HasValueConstraintComponent'>;
    "if": NamedNode<'http://www.w3.org/ns/shacl#if'>;
    /** An if expression is a blank node with exactly one value for sh:if (which is a well-formed node expression), at most one value for sh:then (which is a well-formed node expression) and at most one value for sh:else (which is a well-formed node expression). */
    "IfExpression": NamedNode<'http://www.w3.org/ns/shacl#IfExpression'>;
    /** An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path. */
    "ignoredProperties": NamedNode<'http://www.w3.org/ns/shacl#ignoredProperties'>;
    /** Specifies a list of allowed values so that each value node must be among the members of the given list. */
    "in": NamedNode<'http://www.w3.org/ns/shacl#in'>;
    "InConstraintComponent-in": NamedNode<'http://www.w3.org/ns/shacl#InConstraintComponent-in'>;
    /** A constraint component that can be used to exclusively enumerate the permitted value nodes. */
    "InConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#InConstraintComponent'>;
    /** The severity for an informational validation result. */
    "Info": NamedNode<'http://www.w3.org/ns/shacl#Info'>;
    /** Provides human-readable descriptions of one or more intended rules, assumptions, or constraints associated with its subject (e.g., a shape). Can be used as input for external agents that understand natural language. */
    "intent": NamedNode<'http://www.w3.org/ns/shacl#intent'>;
    /** Deprecated with SHACL 1.2: replaced by shnex:intersection. */
    "intersection": NamedNode<'http://www.w3.org/ns/shacl#intersection'>;
    /** An intersection expression is a blank node with exactly one value for the property sh:intersection which is a well-formed SHACL list with at least two members (which are well-formed node expressions). */
    "IntersectionExpression": NamedNode<'http://www.w3.org/ns/shacl#IntersectionExpression'>;
    /** The (single) value of this property represents an inverse path (object to subject). */
    "inversePath": NamedNode<'http://www.w3.org/ns/shacl#inversePath'>;
    /** The node kind of all IRIs. */
    "IRI": NamedNode<'http://www.w3.org/ns/shacl#IRI'>;
    /** The node kind of all IRIs or literals. */
    "IRIOrLiteral": NamedNode<'http://www.w3.org/ns/shacl#IRIOrLiteral'>;
    /** Set to true for the parameter of a named parameter expression function that uniquely identifies it. */
    "keyParameter": NamedNode<'http://www.w3.org/ns/shacl#keyParameter'>;
    /** Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter. */
    "labelTemplate": NamedNode<'http://www.w3.org/ns/shacl#labelTemplate'>;
    /** Specifies a list of language tags that all value nodes must have. */
    "languageIn": NamedNode<'http://www.w3.org/ns/shacl#languageIn'>;
    "LanguageInConstraintComponent-languageIn": NamedNode<'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn'>;
    /** A constraint component that can be used to enumerate language tags that all value nodes must have. */
    "LanguageInConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LanguageInConstraintComponent'>;
    /** Specifies a property path that must have smaller values than the value nodes. */
    "lessThan": NamedNode<'http://www.w3.org/ns/shacl#lessThan'>;
    "LessThanConstraintComponent-lessThan": NamedNode<'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan'>;
    /** A constraint component that can be used to verify that each value node is smaller than all the nodes that can be reached from the focus node via a given property path. */
    "LessThanConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LessThanConstraintComponent'>;
    /** Specifies a property path that must have smaller or equal values than the value nodes. */
    "lessThanOrEquals": NamedNode<'http://www.w3.org/ns/shacl#lessThanOrEquals'>;
    "LessThanOrEqualsConstraintComponent-lessThanOrEquals": NamedNode<'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals'>;
    /** A constraint component that can be used to verify that every value node is smaller than all the nodes that can be reached from the focus node via a given property path. */
    "LessThanOrEqualsConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent'>;
    "limit": NamedNode<'http://www.w3.org/ns/shacl#limit'>;
    /** A limit expression is a blank node with exactly one value for the property sh:limit which is a literal with datatype xsd:integer and with exactly one value for the property sh:nodes which is a well-formed node expression. */
    "LimitExpression": NamedNode<'http://www.w3.org/ns/shacl#LimitExpression'>;
    /** The base class of node expressions (instances) that take a list of parameters. */
    "ListParameterExpression": NamedNode<'http://www.w3.org/ns/shacl#ListParameterExpression'>;
    /** The base class of node expression functions that take a list of parameters. */
    "ListParameterExpressionFunction": NamedNode<'http://www.w3.org/ns/shacl#ListParameterExpressionFunction'>;
    /** The node kind of all literals. */
    "Literal": NamedNode<'http://www.w3.org/ns/shacl#Literal'>;
    "max": NamedNode<'http://www.w3.org/ns/shacl#max'>;
    /** Specifies the maximum number of values in the set of value nodes. */
    "maxCount": NamedNode<'http://www.w3.org/ns/shacl#maxCount'>;
    "MaxCountConstraintComponent-maxCount": NamedNode<'http://www.w3.org/ns/shacl#MaxCountConstraintComponent-maxCount'>;
    /** A constraint component that can be used to restrict the maximum number of value nodes. */
    "MaxCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxCountConstraintComponent'>;
    /** Specifies the maximum exclusive value of each value node. */
    "maxExclusive": NamedNode<'http://www.w3.org/ns/shacl#maxExclusive'>;
    "MaxExclusiveConstraintComponent-maxExclusive": NamedNode<'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent-maxExclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value. */
    "MaxExclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxExclusiveConstraintComponent'>;
    /** A max expression is a blank node with exactly one value for the property sh:max which is a well-formed node expression. */
    "MaxExpression": NamedNode<'http://www.w3.org/ns/shacl#MaxExpression'>;
    /** Specifies the maximum inclusive value of each value node. */
    "maxInclusive": NamedNode<'http://www.w3.org/ns/shacl#maxInclusive'>;
    "MaxInclusiveConstraintComponent-maxInclusive": NamedNode<'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent-maxInclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value. */
    "MaxInclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxInclusiveConstraintComponent'>;
    /** Specifies the maximum string length of each value node. */
    "maxLength": NamedNode<'http://www.w3.org/ns/shacl#maxLength'>;
    "MaxLengthConstraintComponent-maxLength": NamedNode<'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent-maxLength'>;
    /** A constraint component that can be used to restrict the maximum string length of value nodes. */
    "MaxLengthConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxLengthConstraintComponent'>;
    /** Specifies the maximum length that a given SHACL list must have. */
    "maxListLength": NamedNode<'http://www.w3.org/ns/shacl#maxListLength'>;
    "MaxListLengthConstraintComponent-maxListLength": NamedNode<'http://www.w3.org/ns/shacl#MaxListLengthConstraintComponent-maxListLength'>;
    /** Specifies the maximum length of a SHACL list. A violation is reported if the value is not a valid SHACL list. */
    "MaxListLengthConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MaxListLengthConstraintComponent'>;
    /** Specifies the shape that all members of SHACL lists must conform to. */
    "memberShape": NamedNode<'http://www.w3.org/ns/shacl#memberShape'>;
    "MemberShapeConstraintComponent-memberShape": NamedNode<'http://www.w3.org/ns/shacl#MemberShapeConstraintComponent-memberShape'>;
    /** Can be used to specify constraints on the members of a given SHACL list. A violation is reported for each member of the list that does not comply with the constraints specified by the given shape. A violation is reported if the value is not a valid SHACL list. */
    "MemberShapeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MemberShapeConstraintComponent'>;
    /** A human-readable message (possibly with placeholders for variables) explaining the cause of the result. */
    "message": NamedNode<'http://www.w3.org/ns/shacl#message'>;
    "min": NamedNode<'http://www.w3.org/ns/shacl#min'>;
    /** Specifies the minimum number of values in the set of value nodes. */
    "minCount": NamedNode<'http://www.w3.org/ns/shacl#minCount'>;
    "MinCountConstraintComponent-minCount": NamedNode<'http://www.w3.org/ns/shacl#MinCountConstraintComponent-minCount'>;
    /** A constraint component that can be used to restrict the minimum number of value nodes. */
    "MinCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinCountConstraintComponent'>;
    /** Specifies the minimum exclusive value of each value node. */
    "minExclusive": NamedNode<'http://www.w3.org/ns/shacl#minExclusive'>;
    "MinExclusiveConstraintComponent-minExclusive": NamedNode<'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent-minExclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value. */
    "MinExclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinExclusiveConstraintComponent'>;
    /** A min expression is a blank node with exactly one value for the property sh:min which is a well-formed node expression. */
    "MinExpression": NamedNode<'http://www.w3.org/ns/shacl#MinExpression'>;
    /** Specifies the minimum inclusive value of each value node. */
    "minInclusive": NamedNode<'http://www.w3.org/ns/shacl#minInclusive'>;
    "MinInclusiveConstraintComponent-minInclusive": NamedNode<'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent-minInclusive'>;
    /** A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value. */
    "MinInclusiveConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinInclusiveConstraintComponent'>;
    /** Specifies the minimum string length of each value node. */
    "minLength": NamedNode<'http://www.w3.org/ns/shacl#minLength'>;
    "MinLengthConstraintComponent-minLength": NamedNode<'http://www.w3.org/ns/shacl#MinLengthConstraintComponent-minLength'>;
    /** A constraint component that can be used to restrict the minimum string length of value nodes. */
    "MinLengthConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinLengthConstraintComponent'>;
    /** Specifies the minimum length that a given SHACL list must have. */
    "minListLength": NamedNode<'http://www.w3.org/ns/shacl#minListLength'>;
    "MinListLengthConstraintComponent-minListLength": NamedNode<'http://www.w3.org/ns/shacl#MinListLengthConstraintComponent-minListLength'>;
    /** Specifies the minimum length of a SHACL list. A violation is reported if the value is not a valid SHACL list. */
    "MinListLengthConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#MinListLengthConstraintComponent'>;
    /** Deprecated with SHACL 1.2: replaced by shnex:remove. */
    "minus": NamedNode<'http://www.w3.org/ns/shacl#minus'>;
    /** A minus expression is a blank node with exactly one value for the property sh:minus which is a well-formed node expression and exactly one value for the property sh:nodes which is a well-formed node expression. */
    "MinusExpression": NamedNode<'http://www.w3.org/ns/shacl#MinusExpression'>;
    /** Human-readable labels for the property in the context of the surrounding shape. */
    "name": NamedNode<'http://www.w3.org/ns/shacl#name'>;
    /** The base class of node expressions (instances) that take named parameters. */
    "NamedParameterExpression": NamedNode<'http://www.w3.org/ns/shacl#NamedParameterExpression'>;
    /** The base class of node expression functions that take named parameters. */
    "NamedParameterExpressionFunction": NamedNode<'http://www.w3.org/ns/shacl#NamedParameterExpressionFunction'>;
    /** The namespace associated with a prefix in a prefix declaration. */
    "namespace": NamedNode<'http://www.w3.org/ns/shacl#namespace'>;
    /** Specifies the node shape that all value nodes must conform to. */
    "node": NamedNode<'http://www.w3.org/ns/shacl#node'>;
    /** Links a shape to node expressions, indicating the node shape(s) that all value nodes must conform to. */
    "nodeByExpression": NamedNode<'http://www.w3.org/ns/shacl#nodeByExpression'>;
    "NodeByExpressionConstraintComponent-nodeByExpression": NamedNode<'http://www.w3.org/ns/shacl#NodeByExpressionConstraintComponent-nodeByExpression'>;
    /** A constraint component that can be used to verify that all value nodes conform to the node shape(s) produced by the given node expression. */
    "NodeByExpressionConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeByExpressionConstraintComponent'>;
    "NodeConstraintComponent-node": NamedNode<'http://www.w3.org/ns/shacl#NodeConstraintComponent-node'>;
    /** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
    "NodeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeConstraintComponent'>;
    /** The base class of node expression (instances). */
    "NodeExpression": NamedNode<'http://www.w3.org/ns/shacl#NodeExpression'>;
    /** The base (meta) class of node expression functions. */
    "NodeExpressionFunction": NamedNode<'http://www.w3.org/ns/shacl#NodeExpressionFunction'>;
    /** Specifies the node kind (e.g. IRI or literal) each value node. */
    "nodeKind": NamedNode<'http://www.w3.org/ns/shacl#nodeKind'>;
    /** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
    "NodeKind": NamedNode<'http://www.w3.org/ns/shacl#NodeKind'>;
    "NodeKindConstraintComponent-nodeKind": NamedNode<'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind'>;
    /** A constraint component that can be used to restrict the RDF node kind of each value node. */
    "NodeKindConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeKindConstraintComponent'>;
    /** Deprecated with SHACL 1.2: replaced by shnex:nodes. */
    "nodes": NamedNode<'http://www.w3.org/ns/shacl#nodes'>;
    /** A node shape is a shape that specifies constraints that need to be met with respect to focus nodes. */
    "NodeShape": NamedNode<'http://www.w3.org/ns/shacl#NodeShape'>;
    /** The validator(s) used to evaluate a constraint in the context of a node shape. */
    "nodeValidator": NamedNode<'http://www.w3.org/ns/shacl#nodeValidator'>;
    /** Specifies a shape that the value nodes must not conform to. */
    "not": NamedNode<'http://www.w3.org/ns/shacl#not'>;
    "NotConstraintComponent-not": NamedNode<'http://www.w3.org/ns/shacl#NotConstraintComponent-not'>;
    /** A constraint component that can be used to verify that value nodes do not conform to a given shape. */
    "NotConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NotConstraintComponent'>;
    /** An expression producing the nodes that shall be inferred as objects. */
    "object": NamedNode<'http://www.w3.org/ns/shacl#object'>;
    "offset": NamedNode<'http://www.w3.org/ns/shacl#offset'>;
    /** An offset expression is a blank node with exactly one value for the property sh:offset which is a literal with datatype xsd:integer and with exactly one value for the property sh:nodes which is a well-formed node expression. */
    "OffsetExpression": NamedNode<'http://www.w3.org/ns/shacl#OffsetExpression'>;
    /** The (single) value of this property represents a path that is matched one or more times. */
    "oneOrMorePath": NamedNode<'http://www.w3.org/ns/shacl#oneOrMorePath'>;
    /** Indicates whether a parameter is optional. */
    "optional": NamedNode<'http://www.w3.org/ns/shacl#optional'>;
    /** Specifies a list of shapes so that the value nodes must conform to at least one of the shapes. */
    "or": NamedNode<'http://www.w3.org/ns/shacl#or'>;
    "OrConstraintComponent-or": NamedNode<'http://www.w3.org/ns/shacl#OrConstraintComponent-or'>;
    /** A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes. */
    "OrConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#OrConstraintComponent'>;
    /** Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second. */
    "order": NamedNode<'http://www.w3.org/ns/shacl#order'>;
    "orderBy": NamedNode<'http://www.w3.org/ns/shacl#orderBy'>;
    /** An orderBy expression is a blank node with exactly one value for the property sh:orderBy which is a well-formed node expression and with exactly one value for the property sh:nodes which is a well-formed node expression. An orderBy expression can have one value for the property sh:desc which is either true or false. */
    "OrderByExpression": NamedNode<'http://www.w3.org/ns/shacl#OrderByExpression'>;
    /** The parameters of a function or constraint component. */
    "parameter": NamedNode<'http://www.w3.org/ns/shacl#parameter'>;
    /** The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics. */
    "Parameter": NamedNode<'http://www.w3.org/ns/shacl#Parameter'>;
    /** Superclass of components that can take parameters, especially functions and constraint components. */
    "Parameterizable": NamedNode<'http://www.w3.org/ns/shacl#Parameterizable'>;
    /** Specifies the property path of a property shape. */
    "path": NamedNode<'http://www.w3.org/ns/shacl#path'>;
    /** A path expression is a blank node with exactly one value of the property sh:path (which are well-formed property paths) and at most one value for sh:nodes (which is a well-formed node expression). */
    "PathExpression": NamedNode<'http://www.w3.org/ns/shacl#PathExpression'>;
    /** Specifies a regular expression pattern that the string representations of the value nodes must match. */
    "pattern": NamedNode<'http://www.w3.org/ns/shacl#pattern'>;
    "PatternConstraintComponent-flags": NamedNode<'http://www.w3.org/ns/shacl#PatternConstraintComponent-flags'>;
    "PatternConstraintComponent-pattern": NamedNode<'http://www.w3.org/ns/shacl#PatternConstraintComponent-pattern'>;
    /** A constraint component that can be used to verify that every value node matches a given regular expression. */
    "PatternConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#PatternConstraintComponent'>;
    /** An expression producing the properties that shall be inferred as predicates. */
    "predicate": NamedNode<'http://www.w3.org/ns/shacl#predicate'>;
    /** The prefix of a prefix declaration. */
    "prefix": NamedNode<'http://www.w3.org/ns/shacl#prefix'>;
    /** The class of prefix declarations, consisting of pairs of a prefix with a namespace. */
    "PrefixDeclaration": NamedNode<'http://www.w3.org/ns/shacl#PrefixDeclaration'>;
    /** The prefixes that shall be applied before parsing the associated SPARQL query. The objects should define those prefixes using sh:declare. */
    "prefixes": NamedNode<'http://www.w3.org/ns/shacl#prefixes'>;
    /** Links a shape to its property shapes. */
    "property": NamedNode<'http://www.w3.org/ns/shacl#property'>;
    "PropertyConstraintComponent-property": NamedNode<'http://www.w3.org/ns/shacl#PropertyConstraintComponent-property'>;
    /** A constraint component that can be used to verify that all value nodes conform to the given property shape. */
    "PropertyConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#PropertyConstraintComponent'>;
    /** Instances of this class represent groups of property shapes that belong together. */
    "PropertyGroup": NamedNode<'http://www.w3.org/ns/shacl#PropertyGroup'>;
    /** A property shape is a shape that specifies constraints on the values of a focus node for a given property or path. */
    "PropertyShape": NamedNode<'http://www.w3.org/ns/shacl#PropertyShape'>;
    /** The validator(s) used to evaluate a constraint in the context of a property shape. */
    "propertyValidator": NamedNode<'http://www.w3.org/ns/shacl#propertyValidator'>;
    /** The maximum number of value nodes that can conform to the shape. */
    "qualifiedMaxCount": NamedNode<'http://www.w3.org/ns/shacl#qualifiedMaxCount'>;
    "QualifiedMaxCountConstraintComponent-qualifiedMaxCount": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedMaxCount'>;
    "QualifiedMaxCountConstraintComponent-qualifiedValueShape": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShape'>;
    "QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint'>;
    /** A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape. */
    "QualifiedMaxCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMaxCountConstraintComponent'>;
    /** The minimum number of value nodes that must conform to the shape. */
    "qualifiedMinCount": NamedNode<'http://www.w3.org/ns/shacl#qualifiedMinCount'>;
    "QualifiedMinCountConstraintComponent-qualifiedMinCount": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedMinCount'>;
    "QualifiedMinCountConstraintComponent-qualifiedValueShape": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShape'>;
    "QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint'>;
    /** A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape. */
    "QualifiedMinCountConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#QualifiedMinCountConstraintComponent'>;
    /** The shape that a specified number of values must conform to. */
    "qualifiedValueShape": NamedNode<'http://www.w3.org/ns/shacl#qualifiedValueShape'>;
    /** Can be used to mark the qualified value shape to be disjoint with its sibling shapes. */
    "qualifiedValueShapesDisjoint": NamedNode<'http://www.w3.org/ns/shacl#qualifiedValueShapesDisjoint'>;
    /** Can be used to mark the reification statements required. */
    "reificationRequired": NamedNode<'http://www.w3.org/ns/shacl#reificationRequired'>;
    /** The shape that the reified triples must conform to. */
    "reifierShape": NamedNode<'http://www.w3.org/ns/shacl#reifierShape'>;
    "ReifierShapeConstraintComponent-reificationRequired": NamedNode<'http://www.w3.org/ns/shacl#ReifierShapeConstraintComponent-reificationRequired'>;
    "ReifierShapeConstraintComponent-reifierShape": NamedNode<'http://www.w3.org/ns/shacl#ReifierShapeConstraintComponent-reifierShape'>;
    /** A constraint component that can be used to verify that the reifier conforms to a given shape. */
    "ReifierShapeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ReifierShapeConstraintComponent'>;
    /** The validation results contained in a validation report. */
    "result": NamedNode<'http://www.w3.org/ns/shacl#result'>;
    /** Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query. */
    "resultAnnotation": NamedNode<'http://www.w3.org/ns/shacl#resultAnnotation'>;
    /** A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result. */
    "ResultAnnotation": NamedNode<'http://www.w3.org/ns/shacl#ResultAnnotation'>;
    /** Human-readable messages explaining the cause of the result. */
    "resultMessage": NamedNode<'http://www.w3.org/ns/shacl#resultMessage'>;
    /** The path of a validation result, based on the path of the validated property shape. */
    "resultPath": NamedNode<'http://www.w3.org/ns/shacl#resultPath'>;
    /** The severity of the result, e.g. warning. */
    "resultSeverity": NamedNode<'http://www.w3.org/ns/shacl#resultSeverity'>;
    /** The expected type of values returned by the associated function. */
    "returnType": NamedNode<'http://www.w3.org/ns/shacl#returnType'>;
    /** Specifies a class so that each value node must be that class or a (transitive) subclass of that class. */
    "rootClass": NamedNode<'http://www.w3.org/ns/shacl#rootClass'>;
    "RootClassConstraintComponent-rootClass": NamedNode<'http://www.w3.org/ns/shacl#RootClassConstraintComponent-rootClass'>;
    /** A constraint component that can be used to verify that each value node is the given class or a (transitive) subclass of that class. */
    "RootClassConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#RootClassConstraintComponent'>;
    /** The rules linked to a shape. */
    "rule": NamedNode<'http://www.w3.org/ns/shacl#rule'>;
    /** The class of SHACL rules. Never instantiated directly. */
    "Rule": NamedNode<'http://www.w3.org/ns/shacl#Rule'>;
    /** The SPARQL SELECT query to execute. */
    "select": NamedNode<'http://www.w3.org/ns/shacl#select'>;
    "SelectExpression-prefixes": NamedNode<'http://www.w3.org/ns/shacl#SelectExpression-prefixes'>;
    "SelectExpression-select": NamedNode<'http://www.w3.org/ns/shacl#SelectExpression-select'>;
    /** The class of node expressions based on SPARQL SELECT queries. */
    "SelectExpression": NamedNode<'http://www.w3.org/ns/shacl#SelectExpression'>;
    "separator": NamedNode<'http://www.w3.org/ns/shacl#separator'>;
    /** Defines the severity that validation results produced by a shape or constraint must have. Defaults to sh:Violation. */
    "severity": NamedNode<'http://www.w3.org/ns/shacl#severity'>;
    /** The class of validation result severity levels, including violation and warning levels. */
    "Severity": NamedNode<'http://www.w3.org/ns/shacl#Severity'>;
    /** Links from a node in the data graph to a shape that it is expected to conform to. */
    "shape": NamedNode<'http://www.w3.org/ns/shacl#shape'>;
    /** A shape is a collection of constraints that may be targeted for certain nodes. */
    "Shape": NamedNode<'http://www.w3.org/ns/shacl#Shape'>;
    /** A shape class is a class that is also a node shape. sh:ShapeClass can be used as rdf:type instead of the combination of rdfs:Class and sh:NodeShape. */
    "ShapeClass": NamedNode<'http://www.w3.org/ns/shacl#ShapeClass'>;
    /** Shapes graphs that should be used when validating this data graph. */
    "shapesGraph": NamedNode<'http://www.w3.org/ns/shacl#shapesGraph'>;
    /** The class of graphs that typically act in the role of a SHACL shapes graph. */
    "ShapesGraph": NamedNode<'http://www.w3.org/ns/shacl#ShapesGraph'>;
    /** If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process. */
    "shapesGraphWellFormed": NamedNode<'http://www.w3.org/ns/shacl#shapesGraphWellFormed'>;
    /** Specifies whether none of the value nodes may contain a line break. */
    "singleLine": NamedNode<'http://www.w3.org/ns/shacl#singleLine'>;
    "SingleLineConstraintComponent-singleLine": NamedNode<'http://www.w3.org/ns/shacl#SingleLineConstraintComponent-singleLine'>;
    /** A constraint component that can be used to specify that none of the value nodes may contain line breaks. */
    "SingleLineConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#SingleLineConstraintComponent'>;
    /** Specifies the shape that at least one value node must conform to. */
    "someValue": NamedNode<'http://www.w3.org/ns/shacl#someValue'>;
    "SomeValueConstraintComponent-someValue": NamedNode<'http://www.w3.org/ns/shacl#SomeValueConstraintComponent-someValue'>;
    /** A constraint component that can be used to verify that at least one of the value nodes conform to the given shape. */
    "SomeValueConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#SomeValueConstraintComponent'>;
    /** The constraint that was validated when the result was produced. */
    "sourceConstraint": NamedNode<'http://www.w3.org/ns/shacl#sourceConstraint'>;
    /** The constraint component that is the source of the result. */
    "sourceConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#sourceConstraintComponent'>;
    /** The shape that is was validated when the result was produced. */
    "sourceShape": NamedNode<'http://www.w3.org/ns/shacl#sourceShape'>;
    /** Links a shape with SPARQL constraints. */
    "sparql": NamedNode<'http://www.w3.org/ns/shacl#sparql'>;
    /** The class of SPARQL executables that are based on an ASK query. */
    "SPARQLAskExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLAskExecutable'>;
    /** A SPARQL ASK expression is a blank node with exactly one value for the property sh:ask which is string literal. The blank node may have values for the property sh:prefixes and these values are IRIs or blank nodes. Using the values of sh:prefixes as defined by 5.2.1 Prefix Declarations for SPARQL Queries, the value of sh:ask must be valid SPARQL 1.1 ASK query. The blank node may also have exactly one value for the property sh:nodes which is a well-formed node expression. */
    "SPARQLAskExpression": NamedNode<'http://www.w3.org/ns/shacl#SPARQLAskExpression'>;
    /** The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms. */
    "SPARQLAskValidator": NamedNode<'http://www.w3.org/ns/shacl#SPARQLAskValidator'>;
    /** The class of constraints based on SPARQL SELECT queries. */
    "SPARQLConstraint": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstraint'>;
    "SPARQLConstraintComponent-sparql": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstraintComponent-sparql'>;
    /** A constraint component that can be used to define constraints based on SPARQL queries. */
    "SPARQLConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstraintComponent'>;
    /** The class of SPARQL executables that are based on a CONSTRUCT query. */
    "SPARQLConstructExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLConstructExecutable'>;
    /** The class of SPARQL executables based on a SPARQL DESCRIBE. */
    "SPARQLDescribeExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLDescribeExecutable'>;
    /** The class of resources that encapsulate a SPARQL query. */
    "SPARQLExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLExecutable'>;
    /** The SPARQL expression that is executed during evaluation of a node expression. */
    "sparqlExpr": NamedNode<'http://www.w3.org/ns/shacl#sparqlExpr'>;
    "SPARQLExprExpression-prefixes": NamedNode<'http://www.w3.org/ns/shacl#SPARQLExprExpression-prefixes'>;
    "SPARQLExprExpression-sparqlExpr": NamedNode<'http://www.w3.org/ns/shacl#SPARQLExprExpression-sparqlExpr'>;
    /** The class of node expressions based on SPARQL expressions (sh:sparqlExpr). */
    "SPARQLExprExpression": NamedNode<'http://www.w3.org/ns/shacl#SPARQLExprExpression'>;
    /** A function backed by a SPARQL query - either ASK or SELECT. */
    "SPARQLFunction": NamedNode<'http://www.w3.org/ns/shacl#SPARQLFunction'>;
    /** The class of SHACL rules based on SPARQL CONSTRUCT queries. */
    "SPARQLRule": NamedNode<'http://www.w3.org/ns/shacl#SPARQLRule'>;
    /** The class of SPARQL executables based on a SELECT query. */
    "SPARQLSelectExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLSelectExecutable'>;
    /** A SPARQL SELECT expression is a blank node with exactly one value for the property sh:select which is string literal. The blank node may have values for the property sh:prefixes and these values are IRIs or blank nodes. Using the values of sh:prefixes as defined by 5.2.1 Prefix Declarations for SPARQL Queries, the value of sh:select must be valid SPARQL 1.1 SELECT query with exactly one result variable. The blank node may also have exactly one value for the property sh:nodes which is a well-formed node expression. */
    "SPARQLSelectExpression": NamedNode<'http://www.w3.org/ns/shacl#SPARQLSelectExpression'>;
    /** The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform. */
    "SPARQLSelectValidator": NamedNode<'http://www.w3.org/ns/shacl#SPARQLSelectValidator'>;
    /** The class of targets that are based on SPARQL queries. */
    "SPARQLTarget": NamedNode<'http://www.w3.org/ns/shacl#SPARQLTarget'>;
    /** The (meta) class for parameterizable targets that are based on SPARQL queries. */
    "SPARQLTargetType": NamedNode<'http://www.w3.org/ns/shacl#SPARQLTargetType'>;
    /** The class of SPARQL executables based on a SPARQL UPDATE. */
    "SPARQLUpdateExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLUpdateExecutable'>;
    /** An expression producing the resources that shall be inferred as subjects. */
    "subject": NamedNode<'http://www.w3.org/ns/shacl#subject'>;
    /** Specifies a property path where the set of value nodes must be a subset of the values of that property path. */
    "subsetOf": NamedNode<'http://www.w3.org/ns/shacl#subsetOf'>;
    "SubsetOfConstraintComponent-subsetOf": NamedNode<'http://www.w3.org/ns/shacl#SubsetOfConstraintComponent-subsetOf'>;
    /** A constraint component that can be used to verify that the set of value nodes is a subset of the set of nodes that can be reached from the focus node using a given property path. */
    "SubsetOfConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#SubsetOfConstraintComponent'>;
    /** Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements. */
    "suggestedShapesGraph": NamedNode<'http://www.w3.org/ns/shacl#suggestedShapesGraph'>;
    "sum": NamedNode<'http://www.w3.org/ns/shacl#sum'>;
    /** A sum expression is a blank node with exactly one value for the property sh:sum which is a well-formed node expression. */
    "SumExpression": NamedNode<'http://www.w3.org/ns/shacl#SumExpression'>;
    /** Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget. */
    "target": NamedNode<'http://www.w3.org/ns/shacl#target'>;
    /** The base class of targets such as those based on SPARQL queries. */
    "Target": NamedNode<'http://www.w3.org/ns/shacl#Target'>;
    /** Links a shape to a class, indicating that all instances of the class must conform to the shape. */
    "targetClass": NamedNode<'http://www.w3.org/ns/shacl#targetClass'>;
    /** Links a shape to node expressions, indicating that the output nodes must conform to the shape. */
    "targetNode": NamedNode<'http://www.w3.org/ns/shacl#targetNode'>;
    /** Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape. */
    "targetObjectsOf": NamedNode<'http://www.w3.org/ns/shacl#targetObjectsOf'>;
    /** Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape. */
    "targetSubjectsOf": NamedNode<'http://www.w3.org/ns/shacl#targetSubjectsOf'>;
    /** The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property. */
    "TargetType": NamedNode<'http://www.w3.org/ns/shacl#TargetType'>;
    /** Links a (subject) shape to an (object) shape, indicating that all nodes from the data graph that conform to the given (object) shape must conform to the (subject) shape. */
    "targetWhere": NamedNode<'http://www.w3.org/ns/shacl#targetWhere'>;
    "then": NamedNode<'http://www.w3.org/ns/shacl#then'>;
    /** Deprecated with SHACL 1.2: replaced by shnex:var. */
    "this": NamedNode<'http://www.w3.org/ns/shacl#this'>;
    /** The severity for a trace validation result. */
    "Trace": NamedNode<'http://www.w3.org/ns/shacl#Trace'>;
    /** A rule based on triple (subject, predicate, object) pattern. */
    "TripleRule": NamedNode<'http://www.w3.org/ns/shacl#TripleRule'>;
    /** The node kind of all triple terms. */
    "TripleTerm": NamedNode<'http://www.w3.org/ns/shacl#TripleTerm'>;
    /** Deprecated with SHACL 1.2: replaced by shnex:concat. */
    "union": NamedNode<'http://www.w3.org/ns/shacl#union'>;
    /** A union expression is a blank node with exactly one value for the property sh:union which is a well-formed SHACL list with at least two members (which are well-formed node expressions). */
    "UnionExpression": NamedNode<'http://www.w3.org/ns/shacl#UnionExpression'>;
    /** Specifies whether all node values must have a unique (or no) language tag. */
    "uniqueLang": NamedNode<'http://www.w3.org/ns/shacl#uniqueLang'>;
    "UniqueLangConstraintComponent-uniqueLang": NamedNode<'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang'>;
    /** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
    "UniqueLangConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent'>;
    /** Specifies that all members of a SHACL list must be unique. */
    "uniqueMembers": NamedNode<'http://www.w3.org/ns/shacl#uniqueMembers'>;
    "UniqueMembersConstraintComponent-uniqueMembers": NamedNode<'http://www.w3.org/ns/shacl#UniqueMembersConstraintComponent-uniqueMembers'>;
    /** Specifies that all members of a SHACL list must be unique. A violation is reported if the value is not a valid SHACL list. */
    "UniqueMembersConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#UniqueMembersConstraintComponent'>;
    /** Specifies one or more properties (as a URI or rdf:List of URIs) for which no two nodes targeted by the same shape may have the same combination of values. */
    "uniqueValuesFor": NamedNode<'http://www.w3.org/ns/shacl#uniqueValuesFor'>;
    "UniqueValuesForConstraintComponent-uniqueValuesFor": NamedNode<'http://www.w3.org/ns/shacl#UniqueValuesForConstraintComponent-uniqueValuesFor'>;
    /** A constraint component that can be used to ensure that no two nodes targeted by the same shape have the same combination of values for a given set of properties. */
    "UniqueValuesForConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#UniqueValuesForConstraintComponent'>;
    /** The code of a unit that the (literal) value nodes should be interpreted with. Recommended values are plain strings from the UCUM and ISO 4217 standards for units of measure and currencies respectively, or unit URIs from QUDT or a similar ontology. */
    "unit": NamedNode<'http://www.w3.org/ns/shacl#unit'>;
    /** The SPARQL UPDATE to execute. */
    "update": NamedNode<'http://www.w3.org/ns/shacl#update'>;
    /** The subject Validation Report was generated using the object Shapes Graph. */
    "usedShapesGraph": NamedNode<'http://www.w3.org/ns/shacl#usedShapesGraph'>;
    /** A Validation Report that exists for the subject. */
    "validationReport": NamedNode<'http://www.w3.org/ns/shacl#validationReport'>;
    /** The class of SHACL validation reports. */
    "ValidationReport": NamedNode<'http://www.w3.org/ns/shacl#ValidationReport'>;
    /** The class of validation results. */
    "ValidationResult": NamedNode<'http://www.w3.org/ns/shacl#ValidationResult'>;
    /** The validator(s) used to evaluate constraints of either node or property shapes. */
    "validator": NamedNode<'http://www.w3.org/ns/shacl#validator'>;
    /** The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations. */
    "Validator": NamedNode<'http://www.w3.org/ns/shacl#Validator'>;
    /** An RDF node that has caused the result. */
    "value": NamedNode<'http://www.w3.org/ns/shacl#value'>;
    "values": NamedNode<'http://www.w3.org/ns/shacl#values'>;
    /** The severity for a violation validation result. */
    "Violation": NamedNode<'http://www.w3.org/ns/shacl#Violation'>;
    /** The severity for a warning validation result. */
    "Warning": NamedNode<'http://www.w3.org/ns/shacl#Warning'>;
    /** Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes. */
    "xone": NamedNode<'http://www.w3.org/ns/shacl#xone'>;
    "XoneConstraintComponent-xone": NamedNode<'http://www.w3.org/ns/shacl#XoneConstraintComponent-xone'>;
    /** A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes. */
    "XoneConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#XoneConstraintComponent'>;
    /** The (single) value of this property represents a path that is matched zero or more times. */
    "zeroOrMorePath": NamedNode<'http://www.w3.org/ns/shacl#zeroOrMorePath'>;
    /** The (single) value of this property represents a path that is matched zero or one times. */
    "zeroOrOnePath": NamedNode<'http://www.w3.org/ns/shacl#zeroOrOnePath'>;
}

const builder = namespace("http://www.w3.org/ns/shacl#") as any;
export const strict = builder as NamespaceBuilder<keyof Sh> & Sh;
export const loose = builder as NamespaceBuilder & Sh;
