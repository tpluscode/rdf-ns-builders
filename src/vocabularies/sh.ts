import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Sh = NamespaceBuilder & {
    /*The base class of validation results, typically not instantiated directly.*/
    "AbstractResult": NamedNode;
    "AndConstraintComponent-and": NamedNode;
    /*A constraint component that can be used to test whether a value node conforms to all members of a provided list of shapes.*/
    "AndConstraintComponent": NamedNode;
    /*The node kind of all blank nodes.*/
    "BlankNode": NamedNode;
    /*The node kind of all blank nodes or IRIs.*/
    "BlankNodeOrIRI": NamedNode;
    /*The node kind of all blank nodes or literals.*/
    "BlankNodeOrLiteral": NamedNode;
    "ClassConstraintComponent-class": NamedNode;
    /*A constraint component that can be used to verify that each value node is an instance of a given type.*/
    "ClassConstraintComponent": NamedNode;
    "ClosedConstraintComponent-closed": NamedNode;
    "ClosedConstraintComponent-ignoredProperties": NamedNode;
    /*A constraint component that can be used to indicate that focus nodes must only have values for those properties that have been explicitly enumerated via sh:property/sh:path.*/
    "ClosedConstraintComponent": NamedNode;
    /*The class of constraint components.*/
    "ConstraintComponent": NamedNode;
    "DatatypeConstraintComponent-datatype": NamedNode;
    /*A constraint component that can be used to restrict the datatype of all value nodes.*/
    "DatatypeConstraintComponent": NamedNode;
    "DisjointConstraintComponent-disjoint": NamedNode;
    /*A constraint component that can be used to verify that the set of value nodes is disjoint with the the set of nodes that have the focus node as subject and the value of a given property as predicate.*/
    "DisjointConstraintComponent": NamedNode;
    "EqualsConstraintComponent-equals": NamedNode;
    /*A constraint component that can be used to verify that the set of value nodes is equal to the set of nodes that have the focus node as subject and the value of a given property as predicate.*/
    "EqualsConstraintComponent": NamedNode;
    "ExpressionConstraintComponent-expression": NamedNode;
    /*A constraint component that can be used to verify that a given node expression produces true for all value nodes.*/
    "ExpressionConstraintComponent": NamedNode;
    /*The class of SHACL functions.*/
    "Function": NamedNode;
    "HasValueConstraintComponent-hasValue": NamedNode;
    /*A constraint component that can be used to verify that one of the value nodes is a given RDF node.*/
    "HasValueConstraintComponent": NamedNode;
    /*The node kind of all IRIs.*/
    "IRI": NamedNode;
    /*The node kind of all IRIs or literals.*/
    "IRIOrLiteral": NamedNode;
    "InConstraintComponent-in": NamedNode;
    /*A constraint component that can be used to exclusively enumerate the permitted value nodes.*/
    "InConstraintComponent": NamedNode;
    /*The severity for an informational validation result.*/
    "Info": NamedNode;
    "JSConstraint-js": NamedNode;
    /*The class of constraints backed by a JavaScript function.*/
    "JSConstraint": NamedNode;
    /*A constraint component with the parameter sh:js linking to a sh:JSConstraint containing a sh:script.*/
    "JSConstraintComponent": NamedNode;
    /*Abstract base class of resources that declare an executable JavaScript.*/
    "JSExecutable": NamedNode;
    /*The class of SHACL functions that execute a JavaScript function when called.*/
    "JSFunction": NamedNode;
    /*Represents a JavaScript library, typically identified by one or more URLs of files to include.*/
    "JSLibrary": NamedNode;
    /*The class of SHACL rules expressed using JavaScript.*/
    "JSRule": NamedNode;
    /*The class of targets that are based on JavaScript functions.*/
    "JSTarget": NamedNode;
    /*The (meta) class for parameterizable targets that are based on JavaScript functions.*/
    "JSTargetType": NamedNode;
    /*A SHACL validator based on JavaScript. This can be used to declare SHACL constraint components that perform JavaScript-based validation when used.*/
    "JSValidator": NamedNode;
    "LanguageInConstraintComponent-languageIn": NamedNode;
    /*A constraint component that can be used to enumerate language tags that all value nodes must have.*/
    "LanguageInConstraintComponent": NamedNode;
    "LessThanConstraintComponent-lessThan": NamedNode;
    /*A constraint component that can be used to verify that each value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate.*/
    "LessThanConstraintComponent": NamedNode;
    "LessThanOrEqualsConstraintComponent-lessThanOrEquals": NamedNode;
    /*A constraint component that can be used to verify that every value node is smaller than all the nodes that have the focus node as subject and the value of a given property as predicate.*/
    "LessThanOrEqualsConstraintComponent": NamedNode;
    /*The node kind of all literals.*/
    "Literal": NamedNode;
    "MaxCountConstraintComponent-maxCount": NamedNode;
    /*A constraint component that can be used to restrict the maximum number of value nodes.*/
    "MaxCountConstraintComponent": NamedNode;
    "MaxExclusiveConstraintComponent-maxExclusive": NamedNode;
    /*A constraint component that can be used to restrict the range of value nodes with a maximum exclusive value.*/
    "MaxExclusiveConstraintComponent": NamedNode;
    "MaxInclusiveConstraintComponent-maxInclusive": NamedNode;
    /*A constraint component that can be used to restrict the range of value nodes with a maximum inclusive value.*/
    "MaxInclusiveConstraintComponent": NamedNode;
    "MaxLengthConstraintComponent-maxLength": NamedNode;
    /*A constraint component that can be used to restrict the maximum string length of value nodes.*/
    "MaxLengthConstraintComponent": NamedNode;
    "MinCountConstraintComponent-minCount": NamedNode;
    /*A constraint component that can be used to restrict the minimum number of value nodes.*/
    "MinCountConstraintComponent": NamedNode;
    "MinExclusiveConstraintComponent-minExclusive": NamedNode;
    /*A constraint component that can be used to restrict the range of value nodes with a minimum exclusive value.*/
    "MinExclusiveConstraintComponent": NamedNode;
    "MinInclusiveConstraintComponent-minInclusive": NamedNode;
    /*A constraint component that can be used to restrict the range of value nodes with a minimum inclusive value.*/
    "MinInclusiveConstraintComponent": NamedNode;
    "MinLengthConstraintComponent-minLength": NamedNode;
    /*A constraint component that can be used to restrict the minimum string length of value nodes.*/
    "MinLengthConstraintComponent": NamedNode;
    "NodeConstraintComponent-node": NamedNode;
    /*A constraint component that can be used to verify that all value nodes conform to the given node shape.*/
    "NodeConstraintComponent": NamedNode;
    /*The class of all node kinds, including sh:BlankNode, sh:IRI, sh:Literal or the combinations of these: sh:BlankNodeOrIRI, sh:BlankNodeOrLiteral, sh:IRIOrLiteral.*/
    "NodeKind": NamedNode;
    "NodeKindConstraintComponent-nodeKind": NamedNode;
    /*A constraint component that can be used to restrict the RDF node kind of each value node.*/
    "NodeKindConstraintComponent": NamedNode;
    /*A node shape is a shape that specifies constraint that need to be met with respect to focus nodes.*/
    "NodeShape": NamedNode;
    "NotConstraintComponent-not": NamedNode;
    /*A constraint component that can be used to verify that value nodes do not conform to a given shape.*/
    "NotConstraintComponent": NamedNode;
    "OrConstraintComponent-or": NamedNode;
    /*A constraint component that can be used to restrict the value nodes so that they conform to at least one out of several provided shapes.*/
    "OrConstraintComponent": NamedNode;
    /*The class of parameter declarations, consisting of a path predicate and (possibly) information about allowed value type, cardinality and other characteristics.*/
    "Parameter": NamedNode;
    /*Superclass of components that can take parameters, especially functions and constraint components.*/
    "Parameterizable": NamedNode;
    "PatternConstraintComponent-flags": NamedNode;
    "PatternConstraintComponent-pattern": NamedNode;
    /*A constraint component that can be used to verify that every value node matches a given regular expression.*/
    "PatternConstraintComponent": NamedNode;
    /*The class of prefix declarations, consisting of pairs of a prefix with a namespace.*/
    "PrefixDeclaration": NamedNode;
    "PropertyConstraintComponent-property": NamedNode;
    /*A constraint component that can be used to verify that all value nodes conform to the given property shape.*/
    "PropertyConstraintComponent": NamedNode;
    /*Instances of this class represent groups of property shapes that belong together.*/
    "PropertyGroup": NamedNode;
    /*A property shape is a shape that specifies constraints on the values of a focus node for a given property or path.*/
    "PropertyShape": NamedNode;
    "QualifiedMaxCountConstraintComponent-qualifiedMaxCount": NamedNode;
    "QualifiedMaxCountConstraintComponent-qualifiedValueShape": NamedNode;
    "QualifiedMaxCountConstraintComponent-qualifiedValueShapesDisjoint": NamedNode;
    /*A constraint component that can be used to verify that a specified maximum number of value nodes conforms to a given shape.*/
    "QualifiedMaxCountConstraintComponent": NamedNode;
    "QualifiedMinCountConstraintComponent-qualifiedMinCount": NamedNode;
    "QualifiedMinCountConstraintComponent-qualifiedValueShape": NamedNode;
    "QualifiedMinCountConstraintComponent-qualifiedValueShapesDisjoint": NamedNode;
    /*A constraint component that can be used to verify that a specified minimum number of value nodes conforms to a given shape.*/
    "QualifiedMinCountConstraintComponent": NamedNode;
    /*A class of result annotations, which define the rules to derive the values of a given annotation property as extra values for a validation result.*/
    "ResultAnnotation": NamedNode;
    /*The class of SHACL rules. Never instantiated directly.*/
    "Rule": NamedNode;
    /*The class of SPARQL executables that are based on an ASK query.*/
    "SPARQLAskExecutable": NamedNode;
    /*The class of validators based on SPARQL ASK queries. The queries are evaluated for each value node and are supposed to return true if the given node conforms.*/
    "SPARQLAskValidator": NamedNode;
    /*The class of constraints based on SPARQL SELECT queries.*/
    "SPARQLConstraint": NamedNode;
    "SPARQLConstraintComponent-sparql": NamedNode;
    /*A constraint component that can be used to define constraints based on SPARQL queries.*/
    "SPARQLConstraintComponent": NamedNode;
    /*The class of SPARQL executables that are based on a CONSTRUCT query.*/
    "SPARQLConstructExecutable": NamedNode;
    /*The class of resources that encapsulate a SPARQL query.*/
    "SPARQLExecutable": NamedNode;
    /*A function backed by a SPARQL query - either ASK or SELECT.*/
    "SPARQLFunction": NamedNode;
    /*The class of SHACL rules based on SPARQL CONSTRUCT queries.*/
    "SPARQLRule": NamedNode;
    /*The class of SPARQL executables based on a SELECT query.*/
    "SPARQLSelectExecutable": NamedNode;
    /*The class of validators based on SPARQL SELECT queries. The queries are evaluated for each focus node and are supposed to produce bindings for all focus nodes that do not conform.*/
    "SPARQLSelectValidator": NamedNode;
    /*The class of targets that are based on SPARQL queries.*/
    "SPARQLTarget": NamedNode;
    /*The (meta) class for parameterizable targets that are based on SPARQL queries.*/
    "SPARQLTargetType": NamedNode;
    /*The class of SPARQL executables based on a SPARQL UPDATE.*/
    "SPARQLUpdateExecutable": NamedNode;
    /*The class of validation result severity levels, including violation and warning levels.*/
    "Severity": NamedNode;
    /*A shape is a collection of constraints that may be targeted for certain nodes.*/
    "Shape": NamedNode;
    /*The base class of targets such as those based on SPARQL queries.*/
    "Target": NamedNode;
    /*The (meta) class for parameterizable targets.	Instances of this are instantiated as values of the sh:target property.*/
    "TargetType": NamedNode;
    "TripleRule": NamedNode;
    "UniqueLangConstraintComponent-uniqueLang": NamedNode;
    /*A constraint component that can be used to specify that no pair of value nodes may use the same language tag.*/
    "UniqueLangConstraintComponent": NamedNode;
    /*The class of SHACL validation reports.*/
    "ValidationReport": NamedNode;
    /*The class of validation results.*/
    "ValidationResult": NamedNode;
    /*The class of validators, which provide instructions on how to process a constraint definition. This class serves as base class for the SPARQL-based validators and other possible implementations.*/
    "Validator": NamedNode;
    /*The severity for a violation validation result.*/
    "Violation": NamedNode;
    /*The severity for a warning validation result.*/
    "Warning": NamedNode;
    "XoneConstraintComponent-xone": NamedNode;
    /*A constraint component that can be used to restrict the value nodes so that they conform to exactly one out of several provided shapes.*/
    "XoneConstraintComponent": NamedNode;
    /*The (single) value of this property must be a list of path elements, representing the elements of alternative paths.*/
    "alternativePath": NamedNode;
    /*RDF list of shapes to validate the value nodes against.*/
    "and": NamedNode;
    /*The annotation property that shall be set.*/
    "annotationProperty": NamedNode;
    /*The (default) values of the annotation property.*/
    "annotationValue": NamedNode;
    /*The name of the SPARQL variable from the SELECT clause that shall be used for the values.*/
    "annotationVarName": NamedNode;
    /*The SPARQL ASK query to execute.*/
    "ask": NamedNode;
    /*The type that all value nodes must have.*/
    "class": NamedNode;
    /*If set to true then the shape is closed.*/
    "closed": NamedNode;
    /*The shapes that the focus nodes need to conform to before a rule is executed on them.*/
    "condition": NamedNode;
    /*True if the validation did not produce any validation results, and false otherwise.*/
    "conforms": NamedNode;
    /*The SPARQL CONSTRUCT query to execute.*/
    "construct": NamedNode;
    /*Specifies an RDF datatype that all value nodes must have.*/
    "datatype": NamedNode;
    /*If set to true then all nodes conform to this.*/
    "deactivated": NamedNode;
    /*Links a resource with its namespace prefix declarations.*/
    "declare": NamedNode;
    /*A default value for a property, for example for user interface tools to pre-populate input fields.*/
    "defaultValue": NamedNode;
    /*Human-readable descriptions for the property in the context of the surrounding shape.*/
    "description": NamedNode;
    /*Links a result with other results that provide more details, for example to describe violations against nested shapes.*/
    "detail": NamedNode;
    /*Specifies a property where the set of values must be disjoint with the value nodes.*/
    "disjoint": NamedNode;
    /*An entailment regime that indicates what kind of inferencing is required by a shapes graph.*/
    "entailment": NamedNode;
    /*Specifies a property that must have the same values as the value nodes.*/
    "equals": NamedNode;
    /*The node expression that must return true for the value nodes.*/
    "expression": NamedNode;
    /*The shape that all input nodes of the expression need to conform to.*/
    "filterShape": NamedNode;
    /*An optional flag to be used with regular expression pattern matching.*/
    "flags": NamedNode;
    /*The focus node that was validated when the result was produced.*/
    "focusNode": NamedNode;
    /*Can be used to link to a property group to indicate that a property shape belongs to a group of related property shapes.*/
    "group": NamedNode;
    /*Specifies a value that must be among the value nodes.*/
    "hasValue": NamedNode;
    /*An optional RDF list of properties that are also permitted in addition to those explicitly enumerated via sh:property/sh:path.*/
    "ignoredProperties": NamedNode;
    /*Specifies a list of allowed values so that each value node must be among the members of the given list.*/
    "in": NamedNode;
    /*A list of node expressions that shall be intersected.*/
    "intersection": NamedNode;
    /*The (single) value of this property represents an inverse path (object to subject).*/
    "inversePath": NamedNode;
    /*Constraints expressed in JavaScript.*/
    "js": NamedNode;
    /*The name of the JavaScript function to execute.*/
    "jsFunctionName": NamedNode;
    /*Declares which JavaScript libraries are needed to execute this.*/
    "jsLibrary": NamedNode;
    /*Declares the URLs of a JavaScript library. This should be the absolute URL of a JavaScript file. Implementations may redirect those to local files.*/
    "jsLibraryURL": NamedNode;
    /*Outlines how human-readable labels of instances of the associated Parameterizable shall be produced. The values can contain {?paramName} as placeholders for the actual values of the given parameter.*/
    "labelTemplate": NamedNode;
    /*Specifies a list of language tags that all value nodes must have.*/
    "languageIn": NamedNode;
    /*Specifies a property that must have smaller values than the value nodes.*/
    "lessThan": NamedNode;
    /*Specifies a property that must have smaller or equal values than the value nodes.*/
    "lessThanOrEquals": NamedNode;
    /*Specifies the maximum number of values in the set of value nodes.*/
    "maxCount": NamedNode;
    /*Specifies the maximum exclusive value of each value node.*/
    "maxExclusive": NamedNode;
    /*Specifies the maximum inclusive value of each value node.*/
    "maxInclusive": NamedNode;
    /*Specifies the maximum string length of each value node.*/
    "maxLength": NamedNode;
    /*A human-readable message (possibly with placeholders for variables) explaining the cause of the result.*/
    "message": NamedNode;
    /*Specifies the minimum number of values in the set of value nodes.*/
    "minCount": NamedNode;
    /*Specifies the minimum exclusive value of each value node.*/
    "minExclusive": NamedNode;
    /*Specifies the minimum inclusive value of each value node.*/
    "minInclusive": NamedNode;
    /*Specifies the minimum string length of each value node.*/
    "minLength": NamedNode;
    /*Human-readable labels for the property in the context of the surrounding shape.*/
    "name": NamedNode;
    /*The namespace associated with a prefix in a prefix declaration.*/
    "namespace": NamedNode;
    /*Specifies the node shape that all value nodes must conform to.*/
    "node": NamedNode;
    /*Specifies the node kind (e.g. IRI or literal) each value node.*/
    "nodeKind": NamedNode;
    /*The validator(s) used to evaluate a constraint in the context of a node shape.*/
    "nodeValidator": NamedNode;
    /*The node expression producing the input nodes of a filter shape expression.*/
    "nodes": NamedNode;
    /*Specifies a shape that the value nodes must not conform to.*/
    "not": NamedNode;
    /*An expression producing the nodes that shall be inferred as objects.*/
    "object": NamedNode;
    /*The (single) value of this property represents a path that is matched one or more times.*/
    "oneOrMorePath": NamedNode;
    /*Indicates whether a parameter is optional.*/
    "optional": NamedNode;
    /*Specifies a list of shapes so that the value nodes must conform to at least one of the shapes.*/
    "or": NamedNode;
    /*Specifies the relative order of this compared to its siblings. For example use 0 for the first, 1 for the second.*/
    "order": NamedNode;
    /*The parameters of a function or constraint component.*/
    "parameter": NamedNode;
    /*Specifies the property path of a property shape.*/
    "path": NamedNode;
    /*Specifies a regular expression pattern that the string representations of the value nodes must match.*/
    "pattern": NamedNode;
    /*An expression producing the properties that shall be inferred as predicates.*/
    "predicate": NamedNode;
    /*The prefix of a prefix declaration.*/
    "prefix": NamedNode;
    /*The prefixes that shall be applied before parsing the associated SPARQL query.*/
    "prefixes": NamedNode;
    /*Links a shape to its property shapes.*/
    "property": NamedNode;
    /*The validator(s) used to evaluate a constraint in the context of a property shape.*/
    "propertyValidator": NamedNode;
    /*The maximum number of value nodes that can conform to the shape.*/
    "qualifiedMaxCount": NamedNode;
    /*The minimum number of value nodes that must conform to the shape.*/
    "qualifiedMinCount": NamedNode;
    /*The shape that a specified number of values must conform to.*/
    "qualifiedValueShape": NamedNode;
    /*Can be used to mark the qualified value shape to be disjoint with its sibling shapes.*/
    "qualifiedValueShapesDisjoint": NamedNode;
    /*The validation results contained in a validation report.*/
    "result": NamedNode;
    /*Links a SPARQL validator with zero or more sh:ResultAnnotation instances, defining how to derive additional result properties based on the variables of the SELECT query.*/
    "resultAnnotation": NamedNode;
    /*Human-readable messages explaining the cause of the result.*/
    "resultMessage": NamedNode;
    /*The path of a validation result, based on the path of the validated property shape.*/
    "resultPath": NamedNode;
    /*The severity of the result, e.g. warning.*/
    "resultSeverity": NamedNode;
    /*The expected type of values returned by the associated function.*/
    "returnType": NamedNode;
    /*The rules linked to a shape.*/
    "rule": NamedNode;
    /*The SPARQL SELECT query to execute.*/
    "select": NamedNode;
    /*Defines the severity that validation results produced by a shape must have. Defaults to sh:Violation.*/
    "severity": NamedNode;
    /*Shapes graphs that should be used when validating this data graph.*/
    "shapesGraph": NamedNode;
    /*If true then the validation engine was certain that the shapes graph has passed all SHACL syntax requirements during the validation process.*/
    "shapesGraphWellFormed": NamedNode;
    /*The constraint that was validated when the result was produced.*/
    "sourceConstraint": NamedNode;
    /*The constraint component that is the source of the result.*/
    "sourceConstraintComponent": NamedNode;
    /*The shape that is was validated when the result was produced.*/
    "sourceShape": NamedNode;
    /*Links a shape with SPARQL constraints.*/
    "sparql": NamedNode;
    /*An expression producing the resources that shall be inferred as subjects.*/
    "subject": NamedNode;
    /*Suggested shapes graphs for this ontology. The values of this property may be used in the absence of specific sh:shapesGraph statements.*/
    "suggestedShapesGraph": NamedNode;
    /*Links a shape to a target specified by an extension language, for example instances of sh:SPARQLTarget.*/
    "target": NamedNode;
    /*Links a shape to a class, indicating that all instances of the class must conform to the shape.*/
    "targetClass": NamedNode;
    /*Links a shape to individual nodes, indicating that these nodes must conform to the shape.*/
    "targetNode": NamedNode;
    /*Links a shape to a property, indicating that all all objects of triples that have the given property as their predicate must conform to the shape.*/
    "targetObjectsOf": NamedNode;
    /*Links a shape to a property, indicating that all subjects of triples that have the given property as their predicate must conform to the shape.*/
    "targetSubjectsOf": NamedNode;
    /*A node expression that represents the current focus node.*/
    "this": NamedNode;
    /*A list of node expressions that shall be used together.*/
    "union": NamedNode;
    /*Specifies whether all node values must have a unique (or no) language tag.*/
    "uniqueLang": NamedNode;
    /*The SPARQL UPDATE to execute.*/
    "update": NamedNode;
    /*The validator(s) used to evaluate constraints of either node or property shapes.*/
    "validator": NamedNode;
    /*An RDF node that has caused the result.*/
    "value": NamedNode;
    /*Specifies a list of shapes so that the value nodes must conform to exactly one of the shapes.*/
    "xone": NamedNode;
    /*The (single) value of this property represents a path that is matched zero or more times.*/
    "zeroOrMorePath": NamedNode;
    /*The (single) value of this property represents a path that is matched zero or one times.*/
    "zeroOrOnePath": NamedNode;
};
export const sh: Sh = (namespace(prefixes.sh) as any);
