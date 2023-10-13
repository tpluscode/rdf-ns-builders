import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Sh {
    '': NamedNode<'http://www.w3.org/ns/shacl#'>;
    /** The base class of validation results, typically not instantiated directly. */
    "AbstractResult": NamedNode<'http://www.w3.org/ns/shacl#AbstractResult'>;
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
    /** The shapes that the focus nodes need to conform to before a rule is executed on them. */
    "condition": NamedNode<'http://www.w3.org/ns/shacl#condition'>;
    /** True if the validation did not produce any validation results, and false otherwise. */
    "conforms": NamedNode<'http://www.w3.org/ns/shacl#conforms'>;
    /** The class of constraint components. */
    "ConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ConstraintComponent'>;
    /** The SPARQL CONSTRUCT query to execute. */
    "construct": NamedNode<'http://www.w3.org/ns/shacl#construct'>;
    "count": NamedNode<'http://www.w3.org/ns/shacl#count'>;
    /** A count expression is a blank node with exactly one value for the property sh:count which is a well-formed node expression. */
    "CountExpression": NamedNode<'http://www.w3.org/ns/shacl#CountExpression'>;
    /** Specifies an RDF datatype that all value nodes must have. */
    "datatype": NamedNode<'http://www.w3.org/ns/shacl#datatype'>;
    "DatatypeConstraintComponent-datatype": NamedNode<'http://www.w3.org/ns/shacl#DatatypeConstraintComponent-datatype'>;
    /** A constraint component that can be used to restrict the datatype of all value nodes. */
    "DatatypeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#DatatypeConstraintComponent'>;
    /** If set to true then all nodes conform to this. */
    "deactivated": NamedNode<'http://www.w3.org/ns/shacl#deactivated'>;
    /** Links a resource with its namespace prefix declarations. */
    "declare": NamedNode<'http://www.w3.org/ns/shacl#declare'>;
    /** A default value for a property, for example for user interface tools to pre-populate input fields. */
    "defaultValue": NamedNode<'http://www.w3.org/ns/shacl#defaultValue'>;
    "desc": NamedNode<'http://www.w3.org/ns/shacl#desc'>;
    /** Human-readable descriptions for the property in the context of the surrounding shape. */
    "description": NamedNode<'http://www.w3.org/ns/shacl#description'>;
    /** Links a result with other results that provide more details, for example to describe violations against nested shapes. */
    "detail": NamedNode<'http://www.w3.org/ns/shacl#detail'>;
    /** Specifies a property where the set of values must be disjoint with the value nodes. */
    "disjoint": NamedNode<'http://www.w3.org/ns/shacl#disjoint'>;
    "DisjointConstraintComponent-disjoint": NamedNode<'http://www.w3.org/ns/shacl#DisjointConstraintComponent-disjoint'>;
    /** A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate. */
    "DisjointConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#DisjointConstraintComponent'>;
    "distinct": NamedNode<'http://www.w3.org/ns/shacl#distinct'>;
    /** A distinct expression is a blank node with exactly one value for the property sh:distinct which is a well-formed node expression. */
    "DistinctExpression": NamedNode<'http://www.w3.org/ns/shacl#DistinctExpression'>;
    "else": NamedNode<'http://www.w3.org/ns/shacl#else'>;
    /** An entailment regime that indicates what kind of inferencing is required by a shapes graph. */
    "entailment": NamedNode<'http://www.w3.org/ns/shacl#entailment'>;
    /** Specifies a property that must have the same values as the value nodes. */
    "equals": NamedNode<'http://www.w3.org/ns/shacl#equals'>;
    "EqualsConstraintComponent-equals": NamedNode<'http://www.w3.org/ns/shacl#EqualsConstraintComponent-equals'>;
    /** A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate. */
    "EqualsConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#EqualsConstraintComponent'>;
    "exists": NamedNode<'http://www.w3.org/ns/shacl#exists'>;
    /** An exists expression is a blank node with exactly one value for sh:exists (which is a well-formed shape). */
    "ExistsExpression": NamedNode<'http://www.w3.org/ns/shacl#ExistsExpression'>;
    /** The node expression that must return true for the value nodes. */
    "expression": NamedNode<'http://www.w3.org/ns/shacl#expression'>;
    "ExpressionConstraintComponent-expression": NamedNode<'http://www.w3.org/ns/shacl#ExpressionConstraintComponent-expression'>;
    /** A constraint component that can be used to verify that a given node expression produces true for all value nodes. */
    "ExpressionConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#ExpressionConstraintComponent'>;
    /** The shape that all input nodes of the expression need to conform to. */
    "filterShape": NamedNode<'http://www.w3.org/ns/shacl#filterShape'>;
    /** A filter shape expression is a blank node with exactly one value for sh:filterShape (which is a well-formed shape) and at most one value for sh:nodes (which is a well-formed node expression). */
    "FilterShapeExpression": NamedNode<'http://www.w3.org/ns/shacl#FilterShapeExpression'>;
    /** An optional flag to be used with regular expression pattern matching. */
    "flags": NamedNode<'http://www.w3.org/ns/shacl#flags'>;
    /** The focus node that was validated when the result was produced. */
    "focusNode": NamedNode<'http://www.w3.org/ns/shacl#focusNode'>;
    "FocusNodeOrConstantTermExpression": NamedNode<'http://www.w3.org/ns/shacl#FocusNodeOrConstantTermExpression'>;
    /** The class of SHACL functions. */
    "Function": NamedNode<'http://www.w3.org/ns/shacl#Function'>;
    /** A function expression is a blank node that does not fulfill any of the syntax rules of the other node expression types and which is the subject of exactly one triple T where the object is a well-formed SHACL list, and each member of that list is a well-formed node expression. */
    "FunctionExpression": NamedNode<'http://www.w3.org/ns/shacl#FunctionExpression'>;
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
    /** A list of node expressions that shall be intersected. */
    "intersection": NamedNode<'http://www.w3.org/ns/shacl#intersection'>;
    /** An intersection expression is a blank node with exactly one value for the property sh:intersection which is a well-formed SHACL list with at least two members (which are well-formed node expressions). */
    "IntersectionExpression": NamedNode<'http://www.w3.org/ns/shacl#IntersectionExpression'>;
    /** The (single) value of this property represents an inverse path (object to subject). */
    "inversePath": NamedNode<'http://www.w3.org/ns/shacl#inversePath'>;
    /** The node kind of all IRIs. */
    "IRI": NamedNode<'http://www.w3.org/ns/shacl#IRI'>;
    /** The node kind of all IRIs or literals. */
    "IRIOrLiteral": NamedNode<'http://www.w3.org/ns/shacl#IRIOrLiteral'>;
    /** Constraints expressed in JavaScript. */
    "js": NamedNode<'http://www.w3.org/ns/shacl#js'>;
    "JSConstraint-js": NamedNode<'http://www.w3.org/ns/shacl#JSConstraint-js'>;
    /** The class of constraints backed by a JavaScript function. */
    "JSConstraint": NamedNode<'http://www.w3.org/ns/shacl#JSConstraint'>;
    /** A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script. */
    "JSConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#JSConstraintComponent'>;
    /** Abstract base class of resources that declare an executable JavaScript. */
    "JSExecutable": NamedNode<'http://www.w3.org/ns/shacl#JSExecutable'>;
    /** The class of SHACL functions that execute a JavaScript function when called. */
    "JSFunction": NamedNode<'http://www.w3.org/ns/shacl#JSFunction'>;
    /** The name of the JavaScript function to execute. */
    "jsFunctionName": NamedNode<'http://www.w3.org/ns/shacl#jsFunctionName'>;
    /** Declares which JavaScript libraries are needed to execute this. */
    "jsLibrary": NamedNode<'http://www.w3.org/ns/shacl#jsLibrary'>;
    /** Represents a JavaScript library, typically identified by one or more URLs of files to include. */
    "JSLibrary": NamedNode<'http://www.w3.org/ns/shacl#JSLibrary'>;
    /** Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files. */
    "jsLibraryURL": NamedNode<'http://www.w3.org/ns/shacl#jsLibraryURL'>;
    /** The class of SHACL rules expressed using JavaScript. */
    "JSRule": NamedNode<'http://www.w3.org/ns/shacl#JSRule'>;
    /** The class of targets that are based on JavaScript functions. */
    "JSTarget": NamedNode<'http://www.w3.org/ns/shacl#JSTarget'>;
    /** The (meta) class for parameterizable targets that are based on JavaScript functions. */
    "JSTargetType": NamedNode<'http://www.w3.org/ns/shacl#JSTargetType'>;
    /** A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used. */
    "JSValidator": NamedNode<'http://www.w3.org/ns/shacl#JSValidator'>;
    /** Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter. */
    "labelTemplate": NamedNode<'http://www.w3.org/ns/shacl#labelTemplate'>;
    /** Specifies a list of language tags that all value nodes must have. */
    "languageIn": NamedNode<'http://www.w3.org/ns/shacl#languageIn'>;
    "LanguageInConstraintComponent-languageIn": NamedNode<'http://www.w3.org/ns/shacl#LanguageInConstraintComponent-languageIn'>;
    /** A constraint component that can be used to enumerate language tags that all value nodes must have. */
    "LanguageInConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LanguageInConstraintComponent'>;
    /** Specifies a property that must have smaller values than the value nodes. */
    "lessThan": NamedNode<'http://www.w3.org/ns/shacl#lessThan'>;
    "LessThanConstraintComponent-lessThan": NamedNode<'http://www.w3.org/ns/shacl#LessThanConstraintComponent-lessThan'>;
    /** A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
    "LessThanConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LessThanConstraintComponent'>;
    /** Specifies a property that must have smaller or equal values than the value nodes. */
    "lessThanOrEquals": NamedNode<'http://www.w3.org/ns/shacl#lessThanOrEquals'>;
    "LessThanOrEqualsConstraintComponent-lessThanOrEquals": NamedNode<'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent-lessThanOrEquals'>;
    /** A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate. */
    "LessThanOrEqualsConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#LessThanOrEqualsConstraintComponent'>;
    "limit": NamedNode<'http://www.w3.org/ns/shacl#limit'>;
    /** A limit expression is a blank node with exactly one value for the property sh:limit which is a literal with datatype xsd:integer and with exactly one value for the property sh:nodes which is a well-formed node expression. */
    "LimitExpression": NamedNode<'http://www.w3.org/ns/shacl#LimitExpression'>;
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
    "minus": NamedNode<'http://www.w3.org/ns/shacl#minus'>;
    /** A minus expression is a blank node with exactly one value for the property sh:minus which is a well-formed node expression and exactly one value for the property sh:nodes which is a well-formed node expression. */
    "MinusExpression": NamedNode<'http://www.w3.org/ns/shacl#MinusExpression'>;
    /** Human-readable labels for the property in the context of the surrounding shape. */
    "name": NamedNode<'http://www.w3.org/ns/shacl#name'>;
    /** The namespace associated with a prefix in a prefix declaration. */
    "namespace": NamedNode<'http://www.w3.org/ns/shacl#namespace'>;
    /** Specifies the node shape that all value nodes must conform to. */
    "node": NamedNode<'http://www.w3.org/ns/shacl#node'>;
    "NodeConstraintComponent-node": NamedNode<'http://www.w3.org/ns/shacl#NodeConstraintComponent-node'>;
    /** A constraint component that can be used to verify that all value nodes conform to the given node shape. */
    "NodeConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeConstraintComponent'>;
    "NodeExpression": NamedNode<'http://www.w3.org/ns/shacl#NodeExpression'>;
    /** Specifies the node kind (e.g. IRI or literal) each value node. */
    "nodeKind": NamedNode<'http://www.w3.org/ns/shacl#nodeKind'>;
    /** The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral. */
    "NodeKind": NamedNode<'http://www.w3.org/ns/shacl#NodeKind'>;
    "NodeKindConstraintComponent-nodeKind": NamedNode<'http://www.w3.org/ns/shacl#NodeKindConstraintComponent-nodeKind'>;
    /** A constraint component that can be used to restrict the RDF node kind of each value node. */
    "NodeKindConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#NodeKindConstraintComponent'>;
    /** The node expression producing the input nodes of a filter shape expression. */
    "nodes": NamedNode<'http://www.w3.org/ns/shacl#nodes'>;
    /** A node shape is a shape that specifies constraint that need to be met with respect to focus nodes. */
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
    /** The prefixes that shall be applied before parsing the associated SPARQL query. */
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
    /** The rules linked to a shape. */
    "rule": NamedNode<'http://www.w3.org/ns/shacl#rule'>;
    /** The class of SHACL rules. Never instantiated directly. */
    "Rule": NamedNode<'http://www.w3.org/ns/shacl#Rule'>;
    /** The SPARQL SELECT query to execute. */
    "select": NamedNode<'http://www.w3.org/ns/shacl#select'>;
    "separator": NamedNode<'http://www.w3.org/ns/shacl#separator'>;
    /** Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation. */
    "severity": NamedNode<'http://www.w3.org/ns/shacl#severity'>;
    /** The class of validation result severity levels, including violation and warning levels. */
    "Severity": NamedNode<'http://www.w3.org/ns/shacl#Severity'>;
    /** A shape is a collection of constraints that may be targeted for certain nodes. */
    "Shape": NamedNode<'http://www.w3.org/ns/shacl#Shape'>;
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
    /** The class of resources that encapsulate a SPARQL query. */
    "SPARQLExecutable": NamedNode<'http://www.w3.org/ns/shacl#SPARQLExecutable'>;
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
    /** Links a shape to individual nodes, indicating that these nodes must conform to the shape. */
    "targetNode": NamedNode<'http://www.w3.org/ns/shacl#targetNode'>;
    /** Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape. */
    "targetObjectsOf": NamedNode<'http://www.w3.org/ns/shacl#targetObjectsOf'>;
    /** Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape. */
    "targetSubjectsOf": NamedNode<'http://www.w3.org/ns/shacl#targetSubjectsOf'>;
    /** The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property. */
    "TargetType": NamedNode<'http://www.w3.org/ns/shacl#TargetType'>;
    "then": NamedNode<'http://www.w3.org/ns/shacl#then'>;
    /** A node expression that represents the current focus node. */
    "this": NamedNode<'http://www.w3.org/ns/shacl#this'>;
    "TripleRule": NamedNode<'http://www.w3.org/ns/shacl#TripleRule'>;
    /** A list of node expressions that shall be used together. */
    "union": NamedNode<'http://www.w3.org/ns/shacl#union'>;
    /** A union expression is a blank node with exactly one value for the property sh:union which is a well-formed SHACL list with at least two members (which are well-formed node expressions). */
    "UnionExpression": NamedNode<'http://www.w3.org/ns/shacl#UnionExpression'>;
    /** Specifies whether all node values must have a unique (or no) language tag. */
    "uniqueLang": NamedNode<'http://www.w3.org/ns/shacl#uniqueLang'>;
    "UniqueLangConstraintComponent-uniqueLang": NamedNode<'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent-uniqueLang'>;
    /** A constraint component that can be used to specify that no pair of value nodes may use the same language tag. */
    "UniqueLangConstraintComponent": NamedNode<'http://www.w3.org/ns/shacl#UniqueLangConstraintComponent'>;
    /** The SPARQL UPDATE to execute. */
    "update": NamedNode<'http://www.w3.org/ns/shacl#update'>;
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
