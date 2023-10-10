import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dash {
    '': NamedNode<'http://datashapes.org/dash#'>;
    /** The class of possible values for dash:apiStatus. */
    "APIStatus": NamedNode<'http://datashapes.org/dash#APIStatus'>;
    /** An executable command triggered by an agent, backed by a Script implementation. Actions may get deactivated using sh:deactivated. */
    "Action": NamedNode<'http://datashapes.org/dash#Action'>;
    /** Indicates that a class is "abstract" and cannot be used in asserted rdf:type triples. Only non-abstract subclasses of abstract classes should be instantiated directly. */
    "abstract": NamedNode<'http://datashapes.org/dash#abstract'>;
    /** A class that is also a node shape. This class can be used as rdf:type instead of the combination of rdfs:Class and sh:NodeShape. */
    "ShapeClass": NamedNode<'http://datashapes.org/dash#ShapeClass'>;
    /** An executable unit implemented in one or more languages such as JavaScript. */
    "Script": NamedNode<'http://datashapes.org/dash#Script'>;
    /** A group of ResourceActions, used to arrange items in menus etc. Similar to sh:PropertyGroups, they may have a sh:order and should have labels (in multiple languages if applicable). */
    "ActionGroup": NamedNode<'http://datashapes.org/dash#ActionGroup'>;
    /**
     * A test case that evaluates a dash:Action using provided input parameters. Requires exactly one value for dash:action and will operate on the test case's graph (with imports) as both data and shapes graph.
     *
     * Currently only supports read-only actions, allowing the comparison of actual results with the expected results.
     */
    "ActionTestCase": NamedNode<'http://datashapes.org/dash#ActionTestCase'>;
    /** A test case to verify that a (SHACL-based) feature works as expected. */
    "TestCase": NamedNode<'http://datashapes.org/dash#TestCase'>;
    /** A reusable instance of dash:AllObjectsTarget. */
    "AllObjects": NamedNode<'http://datashapes.org/dash#AllObjects'>;
    /** A target containing all objects in the data graph as focus nodes. */
    "AllObjectsTarget": NamedNode<'http://datashapes.org/dash#AllObjectsTarget'>;
    /** A reusable instance of dash:AllSubjectsTarget. */
    "AllSubjects": NamedNode<'http://datashapes.org/dash#AllSubjects'>;
    /** A target containing all subjects in the data graph as focus nodes. */
    "AllSubjectsTarget": NamedNode<'http://datashapes.org/dash#AllSubjectsTarget'>;
    /** An auto-complete field to enter the label of instances of a class. This is the fallback editor for any URI resource if no other editors are more suitable. */
    "AutoCompleteEditor": NamedNode<'http://datashapes.org/dash#AutoCompleteEditor'>;
    /** An editor for individual value nodes. */
    "SingleEditor": NamedNode<'http://datashapes.org/dash#SingleEditor'>;
    /** A Viewer for blank nodes, rendering as the label of the blank node. */
    "BlankNodeViewer": NamedNode<'http://datashapes.org/dash#BlankNodeViewer'>;
    /** A viewer for a single value. */
    "SingleViewer": NamedNode<'http://datashapes.org/dash#SingleViewer'>;
    /**
     * An editor for boolean literals, rendering as a select box with values true and false.
     *
     * Also displays the current value (such as "1"^^xsd:boolean), but only allows to switch to true or false.
     */
    "BooleanSelectEditor": NamedNode<'http://datashapes.org/dash#BooleanSelectEditor'>;
    /**
     * Class of ADS scripts that are executed after edits to the data graph were made, but within the same edit.
     *
     * These scripts may access the current changes from the graphs with names dataset.addedGraphURI and dataset.deletedGraphURI to learn about which resource values have been added or deleted. For example query them using graph.withDataGraph(dataset.addedGraphURI, ...) or via SPARQL's GRAPH keyword.
     *
     * Change scripts may then perform further changes which would again become visible to other change scripts. They MUST NOT have other side effects though, because they may get executed in Preview mode, or the change may cause constraint violations and then be rejected. For side effects, after the change has been applied, use commit scripts (dash:CommitScript).
     *
     * Change scripts are executed by their relative sh:order, with a default value of 0. Use lower values to execute before other scripts.
     */
    "ChangeScript": NamedNode<'http://datashapes.org/dash#ChangeScript'>;
    "ClosedByTypesConstraintComponent-closedByTypes": NamedNode<'http://datashapes.org/dash#ClosedByTypesConstraintComponent-closedByTypes'>;
    /** Can be used to specify the node shape that may be applied to reified statements produced by a property shape. The property shape must have a URI resource as its sh:path. The values of this property must be node shapes. User interfaces can use this information to determine which properties to present to users when reified statements are explored or edited. Use dash:None to indicate that no reification should be permitted. */
    "reifiableBy": NamedNode<'http://datashapes.org/dash#reifiableBy'>;
    /** Can be used to attach sh:severity and sh:messages to individual constraints using reification. */
    "ConstraintReificationShape": NamedNode<'http://datashapes.org/dash#ConstraintReificationShape'>;
    "closedByTypes": NamedNode<'http://datashapes.org/dash#closedByTypes'>;
    /** A constraint component that can be used to declare that focus nodes are "closed" based on their rdf:types, meaning that focus nodes may only have values for the properties that are explicitly enumerated via sh:property/sh:path in property constraints at their rdf:types and the superclasses of those. This assumes that the type classes are also shapes. */
    "ClosedByTypesConstraintComponent": NamedNode<'http://datashapes.org/dash#ClosedByTypesConstraintComponent'>;
    "CoExistsWithConstraintComponent-coExistsWith": NamedNode<'http://datashapes.org/dash#CoExistsWithConstraintComponent-coExistsWith'>;
    /** Can be used to link a property shape with an editor, to state a preferred editing widget in user interfaces. */
    "editor": NamedNode<'http://datashapes.org/dash#editor'>;
    /** An editor for properties that are either defined as instances of rdf:Property or used as IRI values of sh:path. The component uses auto-complete to find these properties by their rdfs:labels or sh:names. */
    "PropertyAutoCompleteEditor": NamedNode<'http://datashapes.org/dash#PropertyAutoCompleteEditor'>;
    /** Can be used to link a property shape with a viewer, to state a preferred viewing widget in user interfaces. */
    "viewer": NamedNode<'http://datashapes.org/dash#viewer'>;
    /** A viewer for properties that renders a hyperlink using the display label or sh:name, allowing users to either navigate to the rdf:Property resource or the property shape definition. Should be used in conjunction with PropertyAutoCompleteEditor. */
    "PropertyLabelViewer": NamedNode<'http://datashapes.org/dash#PropertyLabelViewer'>;
    /** Specifies a property that must have a value whenever the property path has a value, and must have no value whenever the property path has no value. */
    "coExistsWith": NamedNode<'http://datashapes.org/dash#coExistsWith'>;
    /** A constraint component that can be used to express a constraint on property shapes so that if the property path has any value then the given property must also have a value, and vice versa. */
    "CoExistsWithConstraintComponent": NamedNode<'http://datashapes.org/dash#CoExistsWithConstraintComponent'>;
    /**
     * Can be set to true for those constraint components where the validation does not require to visit any other triples than the shape definitions and the direct property values of the focus node mentioned in the property constraints. Examples of this include sh:minCount and sh:hasValue.
     *
     * Constraint components that are marked as such can be optimized by engines, e.g. they can be evaluated client-side at form submission time, without having to make a round-trip to a server, assuming the client has downloaded a complete snapshot of the resource.
     *
     * Any component marked with dash:staticConstraint is also a dash:localConstraint.
     */
    "localConstraint": NamedNode<'http://datashapes.org/dash#localConstraint'>;
    /**
     * Class of ADS scripts that are executed after edits to the data graph were made and have been committed.
     *
     * These scripts may access the changes that have just happened from the graphs with names dataset.addedGraphURI and dataset.deletedGraphURI to learn about which resource values have been added or deleted. For example query them using graph.withDataGraph(dataset.addedGraphURI, ...) or via SPARQL's GRAPH keyword.
     *
     * Commit scripts may then perform side effects such as updating other graphs or sending out notifications to external systems. For edits that should be made within a finishing change, use change scripts (dash:ChangeScript).
     *
     * Commit scripts are executed by their relative sh:order, with a default value of 0. Use lower values to execute before other scripts.
     */
    "CommitScript": NamedNode<'http://datashapes.org/dash#CommitScript'>;
    "ConstraintReificationShape-message": NamedNode<'http://datashapes.org/dash#ConstraintReificationShape-message'>;
    "singleLine": NamedNode<'http://datashapes.org/dash#singleLine'>;
    /** An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:string or rdf:langString. */
    "StringOrLangString": NamedNode<'http://datashapes.org/dash#StringOrLangString'>;
    "ConstraintReificationShape-severity": NamedNode<'http://datashapes.org/dash#ConstraintReificationShape-severity'>;
    /**
     * A script that is executed when a new instance of the class associated via dash:constructor is created, e.g. from a New button. Such scripts typically declare one or more parameters that are collected from the user when the script starts. The values of these parameters can be used as named variables in the script for arbitrary purposes such as setting the URI or initializing some property values of the new instance.
     *
     * The variable focusNode will hold the named node of the selected type, for example when a constructor is associated with a superclass but the user has pressed New for a subclass.
     *
     * The last expression of the script will be used as result of the constructor, so that the surrounding tool knows which resource shall be navigated to next.
     */
    "Constructor": NamedNode<'http://datashapes.org/dash#Constructor'>;
    /** An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:date or xsd:dateTime. */
    "DateOrDateTime": NamedNode<'http://datashapes.org/dash#DateOrDateTime'>;
    /** An editor for xsd:date literals, offering a calendar-like date picker. */
    "DatePickerEditor": NamedNode<'http://datashapes.org/dash#DatePickerEditor'>;
    /** An editor for xsd:dateTime literals, offering a calendar-like date picker and a time selector. */
    "DateTimePickerEditor": NamedNode<'http://datashapes.org/dash#DateTimePickerEditor'>;
    /** Depiction properties provide images representing the focus nodes. Typical examples may be a photo of an animal or the map of a country. */
    "DepictionRole": NamedNode<'http://datashapes.org/dash#DepictionRole'>;
    /** The class of roles that a property (shape) may take for its focus nodes. */
    "PropertyRole": NamedNode<'http://datashapes.org/dash#PropertyRole'>;
    /** Features that have been marked deprecated will remain in the API but should no longer be used by new code and may get deleted in the foreseeable future (e.g., with the next major release). */
    "Deprecated": NamedNode<'http://datashapes.org/dash#Deprecated'>;
    /** Description properties should produce text literals that may be used as an introduction/summary of what a focus node does. */
    "DescriptionRole": NamedNode<'http://datashapes.org/dash#DescriptionRole'>;
    /** An editor for non-literal values, typically displaying a nested form where the values of the linked resource can be edited directly on the "parent" form. Implementations that do not support this (yet) could fall back to an auto-complete widget. */
    "DetailsEditor": NamedNode<'http://datashapes.org/dash#DetailsEditor'>;
    /** A Viewer for resources that shows the details of the value using its default view shape as a nested form-like display. */
    "DetailsViewer": NamedNode<'http://datashapes.org/dash#DetailsViewer'>;
    /** The class of widgets for editing value nodes. */
    "Editor": NamedNode<'http://datashapes.org/dash#Editor'>;
    /** Base class of user interface components that can be used to display or edit value nodes. */
    "Widget": NamedNode<'http://datashapes.org/dash#Widget'>;
    /** A drop-down editor for enumerated values (typically based on sh:in lists). */
    "EnumSelectEditor": NamedNode<'http://datashapes.org/dash#EnumSelectEditor'>;
    /** Features that are marked experimental can be used by early adopters but there is no guarantee that they will reach stable state. */
    "Experimental": NamedNode<'http://datashapes.org/dash#Experimental'>;
    /** An action typically showing up in an Explore section of a selected resource. Cannot make changes to the data. */
    "ExploreAction": NamedNode<'http://datashapes.org/dash#ExploreAction'>;
    /** An Action that can be executed for a selected resource. Such Actions show up in context menus once they have been assigned a sh:group. */
    "ResourceAction": NamedNode<'http://datashapes.org/dash#ResourceAction'>;
    /** A result representing a validation failure such as an unsupported recursion. */
    "FailureResult": NamedNode<'http://datashapes.org/dash#FailureResult'>;
    /** Represents a failure of a test case. */
    "FailureTestCaseResult": NamedNode<'http://datashapes.org/dash#FailureTestCaseResult'>;
    /** Base class for results produced by running test cases. */
    "TestCaseResult": NamedNode<'http://datashapes.org/dash#TestCaseResult'>;
    /** A test case that verifies that a given SPARQL expression produces a given, expected result. */
    "FunctionTestCase": NamedNode<'http://datashapes.org/dash#FunctionTestCase'>;
    /** A service that does not apply to a specific resource (as ResourceService does) but operates on the whole graph. The focusNode variable will be the URI of the current base graph (e.g. <urn:x-evn-master:geo> as a NamedNode. */
    "GraphService": NamedNode<'http://datashapes.org/dash#GraphService'>;
    /** A script that gets exposed as a web service, e.g. /tbl/service/ex/MyService */
    "Service": NamedNode<'http://datashapes.org/dash#Service'>;
    /** A test case that can be used to verify that an RDF file could be loaded (from a file) and that the resulting RDF graph is equivalent to a given TTL file. */
    "GraphStoreTestCase": NamedNode<'http://datashapes.org/dash#GraphStoreTestCase'>;
    /** A suggestion consisting of added and/or deleted triples, represented as rdf:Statements via dash:addedTriple and dash:deletedTriple. */
    "GraphUpdate": NamedNode<'http://datashapes.org/dash#GraphUpdate'>;
    /** Base class of suggestions that modify a graph to "fix" the source of a validation result. */
    "Suggestion": NamedNode<'http://datashapes.org/dash#Suggestion'>;
    /** A test case that performs SHACL constraint validation on the whole graph and compares the results with the expected validation results stored with the test case. By default this excludes meta-validation (i.e. the validation of the shape definitions themselves). If that's desired, set dash:validateShapes to true. */
    "GraphValidationTestCase": NamedNode<'http://datashapes.org/dash#GraphValidationTestCase'>;
    /** Abstract superclass for test cases concerning SHACL constraint validation. Future versions may add new kinds of validatin test cases, e.g. to validate a single resource only. */
    "ValidationTestCase": NamedNode<'http://datashapes.org/dash#ValidationTestCase'>;
    /** An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either rdf:HTML, xsd:string or rdf:langString (in that order of preference). */
    "HTMLOrStringOrLangString": NamedNode<'http://datashapes.org/dash#HTMLOrStringOrLangString'>;
    /** A Viewer for HTML encoded text from rdf:HTML literals, rendering as parsed HTML DOM elements. Also displays the language if the HTML has a lang attribute on its root DOM element. */
    "HTMLViewer": NamedNode<'http://datashapes.org/dash#HTMLViewer'>;
    "HasValueInConstraintComponent-hasValueIn": NamedNode<'http://datashapes.org/dash#HasValueInConstraintComponent-hasValueIn'>;
    /**
     * Defines constraints on what it means for a node to be a well-formed RDF list.
     *
     * The focus node must either be rdf:nil or not recursive. Furthermore, this shape uses dash:ListNodeShape as a "helper" to walk through all members of the whole list (including itself).
     */
    "ListShape": NamedNode<'http://datashapes.org/dash#ListShape'>;
    /** Specifies a constraint that at least one of the value nodes must be a member of the given list. */
    "hasValueIn": NamedNode<'http://datashapes.org/dash#hasValueIn'>;
    /** A constraint component that can be used to express a constraint on property shapes so that one of the values of the property path must be a member of a given list of nodes. */
    "HasValueInConstraintComponent": NamedNode<'http://datashapes.org/dash#HasValueInConstraintComponent'>;
    /** A target type for all subjects where a given predicate has a certain object value. */
    "HasValueTarget": NamedNode<'http://datashapes.org/dash#HasValueTarget'>;
    "HasValueWithClassConstraintComponent-hasValueWithClass": NamedNode<'http://datashapes.org/dash#HasValueWithClassConstraintComponent-hasValueWithClass'>;
    /** Specifies a constraint that at least one of the value nodes must be an instance of a given class. */
    "hasValueWithClass": NamedNode<'http://datashapes.org/dash#hasValueWithClass'>;
    /** A constraint component that can be used to express a constraint on property shapes so that one of the values of the property path must be an instance of a given class. */
    "HasValueWithClassConstraintComponent": NamedNode<'http://datashapes.org/dash#HasValueWithClassConstraintComponent'>;
    /**
     * A Viewer for literals, rendering as a hyperlink to a URL.
     *
     * For literals it assumes the lexical form is the URL.
     *
     * This is often used as default viewer for xsd:anyURI literals. Unsupported for blank nodes.
     */
    "HyperlinkViewer": NamedNode<'http://datashapes.org/dash#HyperlinkViewer'>;
    /** ID properties are short strings or other literals that identify the focus node among siblings. Examples may include social security numbers. */
    "IDRole": NamedNode<'http://datashapes.org/dash#IDRole'>;
    /**
     * Icon properties produce images that are typically small and almost square-shaped, and that may be displayed in the upper left corner of a focus node's display. Values should be xsd:string or xsd:anyURI literals or IRI nodes pointing at URLs. Those URLs should ideally be vector graphics such as .svg files.
     *
     * Instances of the same class often have the same icon, and this icon may be computed using a sh:values rule or as sh:defaultValue.
     *
     * If the value is a relative URL then those should be resolved against the server that delivered the surrounding page.
     */
    "IconRole": NamedNode<'http://datashapes.org/dash#IconRole'>;
    /** A Viewer for URI values that are recognized as images by a browser, rendering as an image. */
    "ImageViewer": NamedNode<'http://datashapes.org/dash#ImageViewer'>;
    /**
     * The code associated with instances of this class will get injected into the generated APIs, as global code snippets. Typically used to declare libraries of utility functions or constants that are (compared to shape scripts) not necessarily associated with specific classes or shapes.
     *
     * Note that the JavaScript code stored in dash:js cannot use the export keyword because the code must also work in external scripts (such as on Node.js). Instead, you need to enumerate the exported symbols via dash:exports.
     */
    "IncludedScript": NamedNode<'http://datashapes.org/dash#IncludedScript'>;
    "IndexedConstraintComponent-indexed": NamedNode<'http://datashapes.org/dash#IndexedConstraintComponent-indexed'>;
    "indexed": NamedNode<'http://datashapes.org/dash#indexed'>;
    /** A constraint component that can be used to mark property shapes to be indexed, meaning that each of its value nodes must carry a dash:index from 0 to N. */
    "IndexedConstraintComponent": NamedNode<'http://datashapes.org/dash#IndexedConstraintComponent'>;
    /** A test case to verify whether an inferencing engine is producing identical results to those stored as expected results. */
    "InferencingTestCase": NamedNode<'http://datashapes.org/dash#InferencingTestCase'>;
    /** A multi-viewer that renders all values horizontally, in a more compact form that just a single value per row. */
    "InlineViewer": NamedNode<'http://datashapes.org/dash#InlineViewer'>;
    /** A viewer for multiple/all values at once. */
    "MultiViewer": NamedNode<'http://datashapes.org/dash#MultiViewer'>;
    /** A drop-down editor for all instances of the target class (based on sh:class of the property). */
    "InstancesSelectEditor": NamedNode<'http://datashapes.org/dash#InstancesSelectEditor'>;
    /**
     * A tabular viewer for rdf:JSON literals with a lexical form in the following format:
     *
     * {
     * 	vars: [ 'col1', 'col2' ],                   // These are the column keys
     * 	headerLabels: [ 'Column 1', 'Column 2' ],   // Optional, for the column headers
     * 	bindings: [                                 // These become the rows
     * 		{
     * 			col1: {
     * 				lex: 'Value2',
     * 				datatype: '...#string',
     * 			},
     * 			col2: {
     * 				uri: 'http://.../Instance',
     * 				label: 'Example Instance',
     * 			},
     * 		},
     * 		...
     * 	],
     * }
     *
     * The resulting table will use the headerLabels (if they exist) as column headers, otherwise derive the headers from the variable names. The vars must match the fields in the bindings. The table will contain one row for each binding.
     *
     * Using Active Data Shapes, you can construct such literals dynamically using a sh:values rule, e.g.
     *
     * ex:MyClass-myProperty
     * 	a sh:PropertyShape ;
     * 	sh:path ex:myProperty ;
     * 	sh:values [
     * 		dash:js """
     * 			DataViewers.createTableViewerJSON(focusNode.select(`
     * 				SELECT ?col1 ?col2
     * 				WHERE {
     * 					$this ex:prop1 ?col1 .
     * 					$this ex:prop2 ?col2 .
     * 				}
     * 			`))"""
     * 	] .
     *
     * You may also produce the JSON literal programmatically in JavaScript, or assert the triples by other means.
     */
    "JSONTableViewer": NamedNode<'http://datashapes.org/dash#JSONTableViewer'>;
    /** The Key info role may be assigned to properties that are likely of special interest to a reader, so that they should appear whenever a summary of a focus node is shown. */
    "KeyInfoRole": NamedNode<'http://datashapes.org/dash#KeyInfoRole'>;
    /** Properties with this role produce strings that may serve as display label for the focus nodes. Labels should be either plain string literals or strings with a language tag. The values should also be single-line. */
    "LabelRole": NamedNode<'http://datashapes.org/dash#LabelRole'>;
    /** A Viewer for URI resources, rendering as a hyperlink to that URI based on the display label of the resource. Also includes other ways of interacting with the URI such as opening a nested summary display. */
    "LabelViewer": NamedNode<'http://datashapes.org/dash#LabelViewer'>;
    /** A Viewer for literals with a language tag, rendering as the text plus a language indicator. */
    "LangStringViewer": NamedNode<'http://datashapes.org/dash#LangStringViewer'>;
    /** Defines constraints on what it means for a node to be a node within a well-formed RDF list. Note that this does not check whether the rdf:rest items are also well-formed lists as this would lead to unsupported recursion. */
    "ListNodeShape": NamedNode<'http://datashapes.org/dash#ListNodeShape'>;
    /** A simple viewer for literals, rendering the lexical form of the value. */
    "LiteralViewer": NamedNode<'http://datashapes.org/dash#LiteralViewer'>;
    /** An action typically showing up in a Modify section of a selected resource. May make changes to the data. */
    "ModifyAction": NamedNode<'http://datashapes.org/dash#ModifyAction'>;
    /** An editor for multiple/all value nodes at once. */
    "MultiEditor": NamedNode<'http://datashapes.org/dash#MultiEditor'>;
    /**
     * A multi-function is a function that can return zero or more result objects consisting of one or more result variables. While normal (SPARQL/SHACL) functions can only return a single result node, multi-functions may not only return multiple nodes but even multiple individual variables per solution.
     *
     * A common way of defining multi-functions is by wrapping a SPARQL SELECT query, using dash:SPARQLMultiFunction. However, some MultiFunctions (in TopBraid) may also be implemented natively.
     */
    "MultiFunction": NamedNode<'http://datashapes.org/dash#MultiFunction'>;
    /** The class of widgets for viewing value nodes. */
    "Viewer": NamedNode<'http://datashapes.org/dash#Viewer'>;
    /** An "editor" that simply informs the user that the values cannot be edited here, but for example through source code editing. */
    "NoSuitableEditor": NamedNode<'http://datashapes.org/dash#NoSuitableEditor'>;
    /** A viewer for SHACL Node Expressions. */
    "NodeExpressionViewer": NamedNode<'http://datashapes.org/dash#NodeExpressionViewer'>;
    "NonRecursiveConstraintComponent-nonRecursive": NamedNode<'http://datashapes.org/dash#NonRecursiveConstraintComponent-nonRecursive'>;
    /** Used to state that a property or path must not point back to itself. */
    "NonRecursiveConstraintComponent": NamedNode<'http://datashapes.org/dash#NonRecursiveConstraintComponent'>;
    /** A Shape that is no node can conform to. */
    "None": NamedNode<'http://datashapes.org/dash#None'>;
    "ParameterConstraintComponent-parameter": NamedNode<'http://datashapes.org/dash#ParameterConstraintComponent-parameter'>;
    /** A constraint component that can be used to verify that all value nodes conform to the given Parameter. */
    "ParameterConstraintComponent": NamedNode<'http://datashapes.org/dash#ParameterConstraintComponent'>;
    "PrimaryKeyConstraintComponent-uriStart": NamedNode<'http://datashapes.org/dash#PrimaryKeyConstraintComponent-uriStart'>;
    /** Enforces a constraint that the given property (sh:path) serves as primary key for all resources in the target of the shape. If a property has been declared to be the primary key then each resource must have exactly one value for that property. Furthermore, the URIs of those resources must start with a given string (dash:uriStart), followed by the URL-encoded primary key value. For example if dash:uriStart is "http://example.org/country-" and the primary key for an instance is "de" then the URI must be "http://example.org/country-de". Finally, as a result of the URI policy, there can not be any other resource with the same value under the same primary key policy. */
    "PrimaryKeyConstraintComponent": NamedNode<'http://datashapes.org/dash#PrimaryKeyConstraintComponent'>;
    /** A test case running a given SPARQL SELECT query and comparing its results with those stored as JSON Result Set in the expected result property. */
    "QueryTestCase": NamedNode<'http://datashapes.org/dash#QueryTestCase'>;
    "ReifiableByConstraintComponent-reifiableBy": NamedNode<'http://datashapes.org/dash#ReifiableByConstraintComponent-reifiableBy'>;
    "ReifiableByConstraintComponent": NamedNode<'http://datashapes.org/dash#ReifiableByConstraintComponent'>;
    /** A Service that can (and must) be applied to a given resource as focus node. Use dash:resourceService to link a class to the services that apply to its instances. */
    "ResourceService": NamedNode<'http://datashapes.org/dash#ResourceService'>;
    /** A rich text editor to enter the lexical value of a literal and a drop down to select language. The selected language is stored in the HTML lang attribute of the root node in the HTML DOM tree. */
    "RichTextEditor": NamedNode<'http://datashapes.org/dash#RichTextEditor'>;
    "RootClassConstraintComponent-rootClass": NamedNode<'http://datashapes.org/dash#RootClassConstraintComponent-rootClass'>;
    "rootClass": NamedNode<'http://datashapes.org/dash#rootClass'>;
    /** A constraint component defining the parameter dash:rootClass, which restricts the values to be either the root class itself or one of its subclasses. This is typically used in conjunction with properties that have rdfs:Class as their type. */
    "RootClassConstraintComponent": NamedNode<'http://datashapes.org/dash#RootClassConstraintComponent'>;
    "hasRootClass": NamedNode<'http://datashapes.org/dash#hasRootClass'>;
    /** Encapsulates one or more SPARQL CONSTRUCT queries that can be parameterized. Parameters will become pre-bound variables in the queries. */
    "SPARQLConstructTemplate": NamedNode<'http://datashapes.org/dash#SPARQLConstructTemplate'>;
    /** A multi-function based on a SPARQL SELECT query. The query gets executed with the arguments pre-bound to the variables declared as parameters. The results of the multi-function are all result bindings from the SPARQL result set. */
    "SPARQLMultiFunction": NamedNode<'http://datashapes.org/dash#SPARQLMultiFunction'>;
    /** Encapsulates a SPARQL SELECT query that can be parameterized. Parameters will become pre-bound variables in the query. */
    "SPARQLSelectTemplate": NamedNode<'http://datashapes.org/dash#SPARQLSelectTemplate'>;
    /**
     * A SuggestionGenerator based on a SPARQL UPDATE query (sh:update), producing an instance of dash:GraphUpdate. The INSERTs become dash:addedTriple and the DELETEs become dash:deletedTriple. The WHERE clause operates on the data graph with the pre-bound variables $focusNode, $predicate and $value, as well as the other pre-bound variables for the parameters of the constraint.
     *
     * In many cases, there may be multiple possible suggestions to fix a problem. For example, with sh:maxLength there are many ways to slice a string. In those cases, the system will first iterate through the result variables from a SELECT query (sh:select) and apply these results as pre-bound variables into the UPDATE query.
     */
    "SPARQLUpdateSuggestionGenerator": NamedNode<'http://datashapes.org/dash#SPARQLUpdateSuggestionGenerator'>;
    /** Base class of objects that can generate suggestions (added or deleted triples) for a validation result of a given constraint component. */
    "SuggestionGenerator": NamedNode<'http://datashapes.org/dash#SuggestionGenerator'>;
    "ScriptAPIGenerationRules": NamedNode<'http://datashapes.org/dash#ScriptAPIGenerationRules'>;
    "ScriptAPIShape-generateClass": NamedNode<'http://datashapes.org/dash#ScriptAPIShape-generateClass'>;
    "ScriptAPIShape-generatePrefixClasses": NamedNode<'http://datashapes.org/dash#ScriptAPIShape-generatePrefixClasses'>;
    "ScriptAPIShape-generatePrefixConstants": NamedNode<'http://datashapes.org/dash#ScriptAPIShape-generatePrefixConstants'>;
    /** Defines the properties that instruct the ADS Script API generator about what prefixes, constants and classes to generate. */
    "ScriptAPIShape": NamedNode<'http://datashapes.org/dash#ScriptAPIShape'>;
    /**
     * The class of constraints that are based on Scripts. Depending on whether dash:onAllValues is set to true, these scripts can access the following pre-assigned variables:
     *
     * - focusNode: the focus node of the constraint (a NamedNode)
     * - if dash:onAllValues is not true: value: the current value node (e.g. a JavaScript string for xsd:string literals, a number for numeric literals or true or false for xsd:boolean literals. All other literals become LiteralNodes, and non-literals become instances of NamedNode)
     * - if dash:onAllValues is true: values: an array of current value nodes, as above.
     *
     * If the expression returns an array then each array member will be mapped to one validation result, following the mapping rules below.
     *
     * For string results, a validation result will use the string as sh:resultMessage.
     * For boolean results, a validation result will be produced if the result is false (true means no violation).
     *
     * For object results, a validation result will be produced using the value of the field "message" of the object as result message. If the field "value" has a value then this will become the sh:value in the violation.
     *
     * Unless another sh:message has been directly returned, the sh:message of the dash:ScriptConstraint will be used, similar to sh:message at SPARQL Constraints. These sh:messages can access the values {$focusNode}, {$value} etc as template variables.
     */
    "ScriptConstraint": NamedNode<'http://datashapes.org/dash#ScriptConstraint'>;
    "ScriptConstraintComponent-scriptConstraint": NamedNode<'http://datashapes.org/dash#ScriptConstraintComponent-scriptConstraint'>;
    "ScriptConstraintComponent": NamedNode<'http://datashapes.org/dash#ScriptConstraintComponent'>;
    /**
     * Script functions can be used from SPARQL queries and will be injected into the generated prefix object (in JavaScript, for ADS scripts). The dash:js will be inserted into a generated JavaScript function and therefore needs to use the return keyword to produce results. These JS snippets can access the parameter values based on the local name of the sh:Parameter's path. For example ex:value can be accessed using value.
     *
     * SPARQL use note: Since these functions may be used from any data graph and any shapes graph, they must not rely on any API apart from what's available in the shapes graph that holds the rdf:type triple of the function itself. In other words, at execution time from SPARQL, the ADS shapes graph will be the home graph of the function's declaration.
     */
    "ScriptFunction": NamedNode<'http://datashapes.org/dash#ScriptFunction'>;
    /**
     * A Suggestion Generator that is backed by an Active Data Shapes script. The script needs to return a JSON object or an array of JSON objects if it shall generate multiple suggestions. It may also return null to indicate that nothing was suggested. Note that the whole script is evaluated as a (JavaScript) expression, and those will use the last value as result. So simply putting an object at the end of your script should do. Alternatively, define the bulk of the operation as a function and simply call that function in the script.
     *
     * Each response object can have the following fields:
     *
     * {
     * 	message: "The human readable message",  // Defaults to the rdfs:label(s) of the suggestion generator
     * 	add: [ // An array of triples to add, each triple as an array with three nodes
     * 		[ subject, predicate, object ],
     * 		[ ... ]
     * 	],
     * 	delete: [
     * 		... like add, for the triples to delete
     * 	]
     * }
     *
     * Suggestions with neither added nor deleted triples will be discarded.
     *
     * At execution time, the script operates on the data graph as the active graph, with the following pre-bound variables:
     * - focusNode: the NamedNode that is the sh:focusNode of the validation result
     * - predicate: the NamedNode representing the predicate of the validation result, assuming sh:resultPath is a URI
     * - value: the value node from the validation result's sh:value, cast into the most suitable JS object
     * - the other pre-bound variables for the parameters of the constraint, e.g. in a sh:maxCount constraint it would be maxCount
     *
     * The script will be executed in read-only mode, i.e. it cannot modify the graph.
     *
     * Example with dash:js:
     *
     * ({
     * 	message: `Copy labels into ${graph.localName(predicate)}`,
     * 	add: focusNode.values(rdfs.label).map(label => 
     * 		[ focusNode, predicate, label ]
     *     )
     * })
     */
    "ScriptSuggestionGenerator": NamedNode<'http://datashapes.org/dash#ScriptSuggestionGenerator'>;
    /**
     * A test case that evaluates a script. Requires exactly one value for dash:js and will operate on the test case's graph (with imports) as both data and shapes graph.
     *
     * Supports read-only scripts only at this stage.
     */
    "ScriptTestCase": NamedNode<'http://datashapes.org/dash#ScriptTestCase'>;
    /**
     * A SHACL validator based on an Active Data Shapes script.
     *
     * See the comment at dash:ScriptConstraint for the basic evaluation approach. Note that in addition to focusNode and value/values, the script can access pre-bound variables for each declared argument of the constraint component.
     */
    "ScriptValidator": NamedNode<'http://datashapes.org/dash#ScriptValidator'>;
    /** Properties marked as hidden do not appear in user interfaces, yet remain part of the shape for other purposes such as validation and scripting or GraphQL schema generation. */
    "hidden": NamedNode<'http://datashapes.org/dash#hidden'>;
    /** A shape script contains extra code that gets injected into the API for the associated node shape. In particular you can use this to define additional functions that operate on the current focus node (the this variable in JavaScript). */
    "ShapeScript": NamedNode<'http://datashapes.org/dash#ShapeScript'>;
    "SingleLineConstraintComponent-singleLine": NamedNode<'http://datashapes.org/dash#SingleLineConstraintComponent-singleLine'>;
    /**
     * A constraint component that can be used to declare that all values that are literals must have a lexical form that contains no line breaks ('\n' or '\r').
     *
     * User interfaces may use the dash:singleLine flag to prefer a text field over a (multi-line) text area.
     */
    "SingleLineConstraintComponent": NamedNode<'http://datashapes.org/dash#SingleLineConstraintComponent'>;
    /** Features that have been marked stable are deemed of good quality and can be used until marked deprecated. */
    "Stable": NamedNode<'http://datashapes.org/dash#Stable'>;
    "StemConstraintComponent-stem": NamedNode<'http://datashapes.org/dash#StemConstraintComponent-stem'>;
    /** Specifies a string value that the IRI of the value nodes must start with. */
    "stem": NamedNode<'http://datashapes.org/dash#stem'>;
    /** A constraint component that can be used to verify that every value node is an IRI and the IRI starts with a given string value. */
    "StemConstraintComponent": NamedNode<'http://datashapes.org/dash#StemConstraintComponent'>;
    /**
     * Can be set to true for those constraint components where the validation does not require to visit any other triples than the parameters. Examples of this include sh:datatype or sh:nodeKind, where no further triples need to be queried to determine the result.
     *
     * Constraint components that are marked as such can be optimized by engines, e.g. they can be evaluated client-side at form submission time, without having to make a round-trip to a server.
     */
    "staticConstraint": NamedNode<'http://datashapes.org/dash#staticConstraint'>;
    /** Checks whether a given node is an IRI starting with a given stem. */
    "hasStem": NamedNode<'http://datashapes.org/dash#hasStem'>;
    /** An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:string, rdf:langString or rdf:HTML (in that order of preference). */
    "StringOrLangStringOrHTML": NamedNode<'http://datashapes.org/dash#StringOrLangStringOrHTML'>;
    /** An editor for properties that declare a dash:rootClass. The editor allows selecting either the class itself or one of its subclasses. */
    "SubClassEditor": NamedNode<'http://datashapes.org/dash#SubClassEditor'>;
    "SubSetOfConstraintComponent-subSetOf": NamedNode<'http://datashapes.org/dash#SubSetOfConstraintComponent-subSetOf'>;
    "subSetOf": NamedNode<'http://datashapes.org/dash#subSetOf'>;
    /** A constraint component that can be used to state that the set of value nodes must be a subset of the value of a given property. */
    "SubSetOfConstraintComponent": NamedNode<'http://datashapes.org/dash#SubSetOfConstraintComponent'>;
    /** A result representing a successfully validated constraint. */
    "SuccessResult": NamedNode<'http://datashapes.org/dash#SuccessResult'>;
    /** Represents a successful run of a test case. */
    "SuccessTestCaseResult": NamedNode<'http://datashapes.org/dash#SuccessTestCaseResult'>;
    /** Class of results that have been produced as suggestions, not through SHACL validation. How the actual results are produced is up to implementers. Each instance of this class should have values for sh:focusNode, sh:resultMessage, sh:resultSeverity (suggested default: sh:Info), and dash:suggestion to point at one or more suggestions. */
    "SuggestionResult": NamedNode<'http://datashapes.org/dash#SuggestionResult'>;
    "SymmetricConstraintComponent-symmetric": NamedNode<'http://datashapes.org/dash#SymmetricConstraintComponent-symmetric'>;
    /** True to declare that the associated property path is symmetric. */
    "symmetric": NamedNode<'http://datashapes.org/dash#symmetric'>;
    /** A contraint component for property shapes to validate that a property is symmetric. For symmetric properties, if A relates to B then B must relate to A. */
    "SymmetricConstraintComponent": NamedNode<'http://datashapes.org/dash#SymmetricConstraintComponent'>;
    /** Abstract base class for test environments, holding information on how to set up a test case. */
    "TestEnvironment": NamedNode<'http://datashapes.org/dash#TestEnvironment'>;
    /** A multi-line text area to enter the value of a literal. */
    "TextAreaEditor": NamedNode<'http://datashapes.org/dash#TextAreaEditor'>;
    /** A multi-line text area to enter the value of a literal and a drop down to select a language. */
    "TextAreaWithLangEditor": NamedNode<'http://datashapes.org/dash#TextAreaWithLangEditor'>;
    /**
     * A simple input field to enter the value of a literal, without the ability to change language or datatype.
     *
     * This is the fallback editor for any literal if no other editors are more suitable.
     */
    "TextFieldEditor": NamedNode<'http://datashapes.org/dash#TextFieldEditor'>;
    /** A single-line input field to enter the value of a literal and a drop down to select language, which is mandatory unless xsd:string is among the permissible datatypes. */
    "TextFieldWithLangEditor": NamedNode<'http://datashapes.org/dash#TextFieldWithLangEditor'>;
    /** An input field to enter the URI of a resource, e.g. rdfs:seeAlso links or images. */
    "URIEditor": NamedNode<'http://datashapes.org/dash#URIEditor'>;
    /** A Viewer for URI resources, rendering as a hyperlink to that URI. Also includes other ways of interacting with the URI such as opening a nested summary display. */
    "URIViewer": NamedNode<'http://datashapes.org/dash#URIViewer'>;
    "UniqueValueForClassConstraintComponent-uniqueValueForClass": NamedNode<'http://datashapes.org/dash#UniqueValueForClassConstraintComponent-uniqueValueForClass'>;
    "uniqueValueForClass": NamedNode<'http://datashapes.org/dash#uniqueValueForClass'>;
    /** A constraint component that can be used to state that the values of a property must be unique for all instances of a given class (and its subclasses). */
    "UniqueValueForClassConstraintComponent": NamedNode<'http://datashapes.org/dash#UniqueValueForClassConstraintComponent'>;
    /** A Viewer for HTML content from untrusted sources. This viewer will sanitize the HTML before rendering. Any a, button, checkbox, form, hidden, input, img, script, select, style and textarea tags and class and style attributes will be removed. */
    "UntrustedHTMLViewer": NamedNode<'http://datashapes.org/dash#UntrustedHTMLViewer'>;
    /** A viewer that renders all values of a given property as a table, with one value per row, and the columns defined by the shape that is the sh:node or sh:class of the property. */
    "ValueTableViewer": NamedNode<'http://datashapes.org/dash#ValueTableViewer'>;
    /** Links an Action with the ActionGroup that it should be arranged in. */
    "actionGroup": NamedNode<'http://datashapes.org/dash#actionGroup'>;
    /** The (CSS) class of an Action for display purposes alongside the label. */
    "actionIconClass": NamedNode<'http://datashapes.org/dash#actionIconClass'>;
    /** May link a dash:GraphUpdate with one or more triples (represented as instances of rdf:Statement) that should be added to fix the source of the result. */
    "addedTriple": NamedNode<'http://datashapes.org/dash#addedTriple'>;
    /** Represents all users/roles, for example as a possible value of the default view for role property. */
    "all": NamedNode<'http://datashapes.org/dash#all'>;
    /** Defines how and whether the associated feature is part of an external API. APIs may be implemented as (REST) web services, via GraphQL or ADS Script APIs. */
    "apiStatus": NamedNode<'http://datashapes.org/dash#apiStatus'>;
    /** Can be used to state that a shape is applicable to instances of a given class. This is a softer statement than "target class": a target means that all instances of the class must conform to the shape. Being applicable to simply means that the shape may apply to (some) instances of the class. This information can be used by algorithms or humans. */
    "applicableToClass": NamedNode<'http://datashapes.org/dash#applicableToClass'>;
    /** If set to true then the results of the SHACL function can be cached in between invocations with the same arguments. In other words, they are stateless and do not depend on triples in any graph, or the current time stamp etc. */
    "cachable": NamedNode<'http://datashapes.org/dash#cachable'>;
    /** Can be used to indicate that a property/path represented by a property constraint represents a composite relationship. In a composite relationship, the life cycle of a "child" object (value of the property/path) depends on the "parent" object (focus node). If the parent gets deleted, then the child objects should be deleted, too. Tools may use dash:composite (if set to true) to implement cascading delete operations. */
    "composite": NamedNode<'http://datashapes.org/dash#composite'>;
    /** Used to mark certain parameterizables as context-free, meaning that the outcome of a process does not depend on the currently active query graph. */
    "contextFree": NamedNode<'http://datashapes.org/dash#contextFree'>;
    /** Can be used to annotate a graph (usually the owl:Ontology) with the default language that tools should suggest for new literal values. For example, predominantly English graphs should have "en" as default language. */
    "defaultLang": NamedNode<'http://datashapes.org/dash#defaultLang'>;
    /** Links a node shape with the roles for which it shall be used as default view. User interfaces can use these values to select how to present a given RDF resource. The values of this property are URIs representing a group of users or agents. There is a dedicated URI dash:all representing all users. */
    "defaultViewForRole": NamedNode<'http://datashapes.org/dash#defaultViewForRole'>;
    /** May link a dash:GraphUpdate result with one or more triples (represented as instances of rdf:Statement) that should be deleted to fix the source of the result. */
    "deletedTriple": NamedNode<'http://datashapes.org/dash#deletedTriple'>;
    /** Can be used in dash:js node expressions to enumerate the predicates that the computation of the values may depend on. This can be used by clients to determine whether an edit requires re-computation of values on a form or elsewhere. For example, if the dash:js is something like "focusNode.firstName + focusNode.lastName" then the dependency predicates should be ex:firstName and ex:lastName. */
    "dependencyPredicate": NamedNode<'http://datashapes.org/dash#dependencyPredicate'>;
    /**
     * Can be used to link a SHACL property shape with the URL of a SPARQL endpoint that may contain further RDF triples for the value nodes delivered by the property. This can be used to inform a processor that it should switch to values from an external graph when the user wants to retrieve more information about a value.
     *
     * This property should be regarded as an "annotation", i.e. it does not have any impact on validation or other built-in SHACL features. However, selected tools may want to use this information. One implementation strategy would be to periodically fetch the values specified by the sh:node or sh:class shape associated with the property, using the property shapes in that shape, and add the resulting triples into the main query graph.
     *
     * An example value is "https://query.wikidata.org/sparql".
     */
    "detailsEndpoint": NamedNode<'http://datashapes.org/dash#detailsEndpoint'>;
    /**
     * Can be used to link a SHACL property shape with a SHACL node expression that produces the URIs of one or more graphs that contain further RDF triples for the value nodes delivered by the property. This can be used to inform a processor that it should switch to another data graph when the user wants to retrieve more information about a value.
     *
     * The node expressions are evaluated with the focus node as input. (It is unclear whether there are also cases where the result may be different for each specific value, in which case the node expression would need a second input argument).
     *
     * This property should be regarded as an "annotation", i.e. it does not have any impact on validation or other built-in SHACL features. However, selected tools may want to use this information.
     */
    "detailsGraph": NamedNode<'http://datashapes.org/dash#detailsGraph'>;
    /** The expected result(s) of a test case. The value range of this property is different for each kind of test cases. */
    "expectedResult": NamedNode<'http://datashapes.org/dash#expectedResult'>;
    /** A flag to indicate that the expected result represents a JSON string. If set to true, then tests would compare JSON structures (regardless of whitespaces) instead of actual syntax. */
    "expectedResultIsJSON": NamedNode<'http://datashapes.org/dash#expectedResultIsJSON'>;
    /** A flag to indicate that the expected result represents an RDF graph encoded as a Turtle file. If set to true, then tests would compare graphs instead of actual syntax. */
    "expectedResultIsTTL": NamedNode<'http://datashapes.org/dash#expectedResultIsTTL'>;
    /** Can be used to mark that certain validation results have already been fixed. */
    "fixed": NamedNode<'http://datashapes.org/dash#fixed'>;
    "hasClass": NamedNode<'http://datashapes.org/dash#hasClass'>;
    /** Checks whether a given node (?value) has a value less than (<) the provided ?maxExclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types. */
    "hasMaxExclusive": NamedNode<'http://datashapes.org/dash#hasMaxExclusive'>;
    /** Checks whether a given node (?value) has a value less than or equal to (<=) the provided ?maxInclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types. */
    "hasMaxInclusive": NamedNode<'http://datashapes.org/dash#hasMaxInclusive'>;
    /** Checks whether a given string (?value) has a length within a given maximum string length. */
    "hasMaxLength": NamedNode<'http://datashapes.org/dash#hasMaxLength'>;
    /** Checks whether a given node (?value) has value greater than (>) the provided ?minExclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types. */
    "hasMinExclusive": NamedNode<'http://datashapes.org/dash#hasMinExclusive'>;
    /** Checks whether a given node (?value) has value greater than or equal to (>=) the provided ?minInclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types. */
    "hasMinInclusive": NamedNode<'http://datashapes.org/dash#hasMinInclusive'>;
    /** Checks whether a given string (?value) has a length within a given minimum string length. */
    "hasMinLength": NamedNode<'http://datashapes.org/dash#hasMinLength'>;
    /** Checks whether a given node (?value) has a given sh:NodeKind (?nodeKind). For example, sh:hasNodeKind(42, sh:Literal) = true. */
    "hasNodeKind": NamedNode<'http://datashapes.org/dash#hasNodeKind'>;
    /** Checks whether the string representation of a given node (?value) matches a given regular expression (?pattern). Returns false if the value is a blank node. */
    "hasPattern": NamedNode<'http://datashapes.org/dash#hasPattern'>;
    /** The height. */
    "height": NamedNode<'http://datashapes.org/dash#height'>;
    "index": NamedNode<'http://datashapes.org/dash#index'>;
    /** Checks whether a given shape or constraint has been marked as "deactivated" using sh:deactivated. */
    "isDeactivated": NamedNode<'http://datashapes.org/dash#isDeactivated'>;
    "isIn": NamedNode<'http://datashapes.org/dash#isIn'>;
    "isLanguageIn": NamedNode<'http://datashapes.org/dash#isLanguageIn'>;
    /** Checks if a given sh:NodeKind is one that includes BlankNodes. */
    "isNodeKindBlankNode": NamedNode<'http://datashapes.org/dash#isNodeKindBlankNode'>;
    /** Checks if a given sh:NodeKind is one that includes IRIs. */
    "isNodeKindIRI": NamedNode<'http://datashapes.org/dash#isNodeKindIRI'>;
    /** Checks if a given sh:NodeKind is one that includes Literals. */
    "isNodeKindLiteral": NamedNode<'http://datashapes.org/dash#isNodeKindLiteral'>;
    "isSubClassOf-subclass": NamedNode<'http://datashapes.org/dash#isSubClassOf-subclass'>;
    "isSubClassOf-superclass": NamedNode<'http://datashapes.org/dash#isSubClassOf-superclass'>;
    /** Returns true if a given class (first argument) is a subclass of a given other class (second argument), or identical to that class. This is equivalent to an rdfs:subClassOf* check. */
    "isSubClassOf": NamedNode<'http://datashapes.org/dash#isSubClassOf'>;
    /** The JavaScript source code of a Script. */
    "js": NamedNode<'http://datashapes.org/dash#js'>;
    /**
     * For file-typed properties, this can be used to specify the expected/allowed mime types of its values. This can be used, for example, to limit file input boxes or file selectors. If multiple values are allowed then they need to be separated by commas.
     *
     * Example values are listed at https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
     */
    "mimeTypes": NamedNode<'http://datashapes.org/dash#mimeTypes'>;
    /** If set to true at a property shape then any sh:values and sh:defaultValue rules of this property will be ignored when 'all inferences' are computed. This is useful for property values that shall only be computed for individual focus nodes (e.g. when a user visits a resource) but not for large inference runs. */
    "neverMaterialize": NamedNode<'http://datashapes.org/dash#neverMaterialize'>;
    /** If set to true for a ScriptConstraint or ScriptValidator, then the associated script will receive all value nodes at once, as a value of the variable values. By default (or false), the script is called for each value node individually. */
    "onAllValues": NamedNode<'http://datashapes.org/dash#onAllValues'>;
    /** Links the constraint component with instances of dash:SuggestionGenerator that may be used to produce suggestions for a given validation result that was produced by a property constraint. */
    "propertySuggestionGenerator": NamedNode<'http://datashapes.org/dash#propertySuggestionGenerator'>;
    /** Used as a hint for user interfaces that values of the associated property should not be editable. The values of this may be the boolean literals true or false or, more generally, a SHACL node expression that must evaluate to true or false. */
    "readOnly": NamedNode<'http://datashapes.org/dash#readOnly'>;
    /** Links a class with the Resource Actions that can be applied to instances of that class. */
    "resourceAction": NamedNode<'http://datashapes.org/dash#resourceAction'>;
    /** States that a subject resource has a given shape. This property can, for example, be used to capture results of SHACL validation on static data. */
    "shape": NamedNode<'http://datashapes.org/dash#shape'>;
    "shapeScript": NamedNode<'http://datashapes.org/dash#shapeScript'>;
    /** Can be used to link a result with one or more suggestions on how to address or improve the underlying issue. */
    "suggestion": NamedNode<'http://datashapes.org/dash#suggestion'>;
    /** An optional confidence between 0% and 100%. Suggestions with 100% confidence are strongly recommended. Can be used to sort recommended updates. */
    "suggestionConfidence": NamedNode<'http://datashapes.org/dash#suggestionConfidence'>;
    /** Links a sh:SPARQLConstraint or sh:JSConstraint with instances of dash:SuggestionGenerator that may be used to produce suggestions for a given validation result that was produced by the constraint. */
    "suggestionGenerator": NamedNode<'http://datashapes.org/dash#suggestionGenerator'>;
    /** Can be used to link a suggestion with the group identifier to which it belongs. By default this is a link to the dash:SuggestionGenerator, but in principle this could be any value. */
    "suggestionGroup": NamedNode<'http://datashapes.org/dash#suggestionGroup'>;
    /** Returns a literal with datatype xsd:string that has the input value as its string. If the input value is an (URI) resource then its URI will be used. */
    "toString": NamedNode<'http://datashapes.org/dash#toString'>;
    /**
     * Inserts a given value into a given URI template, producing a new xsd:anyURI literal.
     *
     * In the future this should support RFC 6570 but for now it is limited to simple {...} patterns.
     */
    "uriTemplate": NamedNode<'http://datashapes.org/dash#uriTemplate'>;
    /** True to also validate the shapes itself (i.e. parameter declarations). */
    "validateShapes": NamedNode<'http://datashapes.org/dash#validateShapes'>;
    /** Computes the number of objects for a given subject/predicate combination. */
    "valueCount": NamedNode<'http://datashapes.org/dash#valueCount'>;
    /** The width. */
    "width": NamedNode<'http://datashapes.org/dash#width'>;
    /** The x position. */
    "x": NamedNode<'http://datashapes.org/dash#x'>;
    /** The y position. */
    "y": NamedNode<'http://datashapes.org/dash#y'>;
    "object": NamedNode<'http://datashapes.org/dash#object'>;
    "predicate": NamedNode<'http://datashapes.org/dash#predicate'>;
    "nonRecursive": NamedNode<'http://datashapes.org/dash#nonRecursive'>;
    "uriStart": NamedNode<'http://datashapes.org/dash#uriStart'>;
    "generateClass": NamedNode<'http://datashapes.org/dash#generateClass'>;
    "generatePrefixClasses": NamedNode<'http://datashapes.org/dash#generatePrefixClasses'>;
    "generatePrefixConstants": NamedNode<'http://datashapes.org/dash#generatePrefixConstants'>;
    "scriptConstraint": NamedNode<'http://datashapes.org/dash#scriptConstraint'>;
    "constraintOrShape": NamedNode<'http://datashapes.org/dash#constraintOrShape'>;
    "nodeKind": NamedNode<'http://datashapes.org/dash#nodeKind'>;
    "subclass": NamedNode<'http://datashapes.org/dash#subclass'>;
    "superclass": NamedNode<'http://datashapes.org/dash#superclass'>;
    "arg": NamedNode<'http://datashapes.org/dash#arg'>;
    "template": NamedNode<'http://datashapes.org/dash#template'>;
    "value": NamedNode<'http://datashapes.org/dash#value'>;
    "subject": NamedNode<'http://datashapes.org/dash#subject'>;
}

const builder = namespace("http://datashapes.org/dash#") as any;
export const strict = builder as NamespaceBuilder<keyof Dash> & Dash;
export const loose = builder as NamespaceBuilder & Dash;
