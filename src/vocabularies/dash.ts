import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Dash = NamespaceBuilder & {
    "Action-actionGroup": NamedNode<'http://datashapes.org/dash#Action-actionGroup'>;
    "Action-actionIconClass": NamedNode<'http://datashapes.org/dash#Action-actionIconClass'>;
    "Action-parameter": NamedNode<'http://datashapes.org/dash#Action-parameter'>;
    /*An executable command triggered by an agent, backed by a Script implementation. Actions may get deactivated using sh:deactivated.*/
    "Action": NamedNode<'http://datashapes.org/dash#Action'>;
    /*A group of ResourceActions, used to arrange items in menus etc. Similar to sh:PropertyGroups, they may have a sh:order and should have labels (in multiple languages if applicable).*/
    "ActionGroup": NamedNode<'http://datashapes.org/dash#ActionGroup'>;
    /*A test case that evaluates a dash:Action using provided input parameters. Requires exactly one value for dash:action and will operate on the test case's graph (with imports) as both data and shapes graph.
    
    Currently only supports read-only actions, allowing the comparison of actual results with the expected results.*/
    "ActionTestCase": NamedNode<'http://datashapes.org/dash#ActionTestCase'>;
    /*A reusable instance of dash:AllObjectsTarget.*/
    "AllObjects": NamedNode<'http://datashapes.org/dash#AllObjects'>;
    /*A target containing all objects in the data graph as focus nodes.*/
    "AllObjectsTarget": NamedNode<'http://datashapes.org/dash#AllObjectsTarget'>;
    /*A reusable instance of dash:AllSubjectsTarget.*/
    "AllSubjects": NamedNode<'http://datashapes.org/dash#AllSubjects'>;
    /*A target containing all subjects in the data graph as focus nodes.*/
    "AllSubjectsTarget": NamedNode<'http://datashapes.org/dash#AllSubjectsTarget'>;
    /*An auto-complete field to enter the label of instances of a class. This is the fallback editor for any URI resource if no other editors are more suitable.*/
    "AutoCompleteEditor": NamedNode<'http://datashapes.org/dash#AutoCompleteEditor'>;
    /*A Viewer for blank nodes, rendering as the label of the blank node.*/
    "BlankNodeViewer": NamedNode<'http://datashapes.org/dash#BlankNodeViewer'>;
    /*An editor for boolean literals, rendering as a select box with values true and false.
    
    Also displays the current value (such as "1"^^xsd:boolean), but only allows to switch to true or false.*/
    "BooleanSelectEditor": NamedNode<'http://datashapes.org/dash#BooleanSelectEditor'>;
    "ClosedByTypesConstraintComponent-closedByTypes": NamedNode<'http://datashapes.org/dash#ClosedByTypesConstraintComponent-closedByTypes'>;
    /*A constraint component that can be used to declare that focus nodes are "closed" based on their rdf:types, meaning that focus nodes may only have values for the properties that are explicitly enumerated via sh:property/sh:path in property constraints at their rdf:types and the superclasses of those. This assumes that the type classes are also shapes.*/
    "ClosedByTypesConstraintComponent": NamedNode<'http://datashapes.org/dash#ClosedByTypesConstraintComponent'>;
    "CoExistsWithConstraintComponent-coExistsWith": NamedNode<'http://datashapes.org/dash#CoExistsWithConstraintComponent-coExistsWith'>;
    /*A constraint component that can be used to express a constraint on property shapes so that if the property path has any value then the given property must also have a value, and vice versa.*/
    "CoExistsWithConstraintComponent": NamedNode<'http://datashapes.org/dash#CoExistsWithConstraintComponent'>;
    "ConstraintReificationShape-message": NamedNode<'http://datashapes.org/dash#ConstraintReificationShape-message'>;
    "ConstraintReificationShape-severity": NamedNode<'http://datashapes.org/dash#ConstraintReificationShape-severity'>;
    /*Can be used to attach sh:severity and sh:messages to individual constraints using reification.*/
    "ConstraintReificationShape": NamedNode<'http://datashapes.org/dash#ConstraintReificationShape'>;
    "DASHJSLibrary": NamedNode<'http://datashapes.org/dash#DASHJSLibrary'>;
    /*An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:date or xsd:dateTime.*/
    "DateOrDateTime": NamedNode<'http://datashapes.org/dash#DateOrDateTime'>;
    /*An editor for xsd:date literals, offering a calendar-like date picker.*/
    "DatePickerEditor": NamedNode<'http://datashapes.org/dash#DatePickerEditor'>;
    /*An editor for xsd:dateTime literals, offering a calendar-like date picker and a time selector.*/
    "DateTimePickerEditor": NamedNode<'http://datashapes.org/dash#DateTimePickerEditor'>;
    /*
            A resource encapsulating a query that can be used to construct rdf:type triples for certain untyped nodes
            that are an object in a triple where the predicate has a sh:defaultValueType.
            This can be used as a pre-processor for shape graphs before they are validated.
            */
    "DefaultValueTypeRule": NamedNode<'http://datashapes.org/dash#DefaultValueTypeRule'>;
    "DefinitionPropertyGroup": NamedNode<'http://datashapes.org/dash#DefinitionPropertyGroup'>;
    /*An editor for non-literal values, typically displaying a nested form where the values of the linked resource can be edited directly on the "parent" form. Implementations that do not support this (yet) could fall back to an auto-complete widget.*/
    "DetailsEditor": NamedNode<'http://datashapes.org/dash#DetailsEditor'>;
    /*A Viewer for resources that shows the details of the value using its default view shape as a nested form-like display.*/
    "DetailsViewer": NamedNode<'http://datashapes.org/dash#DetailsViewer'>;
    /*The class of widgets for editing value nodes.*/
    "Editor": NamedNode<'http://datashapes.org/dash#Editor'>;
    /*A drop-down editor for enumerated values (typically based on sh:in lists).*/
    "EnumSelectEditor": NamedNode<'http://datashapes.org/dash#EnumSelectEditor'>;
    /*An platform (such as TopBraid) that may have features needed to execute, for example, SPARQL queries.*/
    "ExecutionPlatform": NamedNode<'http://datashapes.org/dash#ExecutionPlatform'>;
    /*An action typically showing up in an Explore section of a selected resource. Cannot make changes to the data.*/
    "ExploreAction": NamedNode<'http://datashapes.org/dash#ExploreAction'>;
    /*A result representing a validation failure such as an unsupported recursion.*/
    "FailureResult": NamedNode<'http://datashapes.org/dash#FailureResult'>;
    /*Represents a failure of a test case.*/
    "FailureTestCaseResult": NamedNode<'http://datashapes.org/dash#FailureTestCaseResult'>;
    /*A test case that verifies that a given SPARQL expression produces a given, expected result.*/
    "FunctionTestCase": NamedNode<'http://datashapes.org/dash#FunctionTestCase'>;
    /*A test case that can be used to verify that an RDF file could be loaded (from a file) and that the resulting RDF graph is equivalent to a given TTL file.*/
    "GraphStoreTestCase": NamedNode<'http://datashapes.org/dash#GraphStoreTestCase'>;
    /*A suggestion consisting of added and/or deleted triples, represented as rdf:Statements via dash:addedTriple and dash:deletedTriple.*/
    "GraphUpdate": NamedNode<'http://datashapes.org/dash#GraphUpdate'>;
    /*A test case that performs SHACL constraint validation on the whole graph and compares the results with the expected validation results stored with the test case. By default this excludes meta-validation (i.e. the validation of the shape definitions themselves). If that's desired, set dash:validateShapes to true.*/
    "GraphValidationTestCase": NamedNode<'http://datashapes.org/dash#GraphValidationTestCase'>;
    /*An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either rdf:HTML, xsd:string or rdf:langString.*/
    "HTMLOrStringOrLangString": NamedNode<'http://datashapes.org/dash#HTMLOrStringOrLangString'>;
    /*A Viewer for HTML encoded text from rdf:HTML literals, rendering as parsed HTML DOM elements. Also displays the language if the HTML has a lang attribute on its root DOM element.*/
    "HTMLViewer": NamedNode<'http://datashapes.org/dash#HTMLViewer'>;
    "HasValueInConstraintComponent-hasValueIn": NamedNode<'http://datashapes.org/dash#HasValueInConstraintComponent-hasValueIn'>;
    /*A constraint component that can be used to express a constraint on property shapes so that one of the values of the property path must be a member of a given list of nodes.*/
    "HasValueInConstraintComponent": NamedNode<'http://datashapes.org/dash#HasValueInConstraintComponent'>;
    /*A target type for all subjects where a given predicate has a certain object value.*/
    "HasValueTarget": NamedNode<'http://datashapes.org/dash#HasValueTarget'>;
    "HasValueWithClassConstraintComponent-hasValueWithClass": NamedNode<'http://datashapes.org/dash#HasValueWithClassConstraintComponent-hasValueWithClass'>;
    /*A constraint component that can be used to express a constraint on property shapes so that one of the values of the property path must be an instance of a given class.*/
    "HasValueWithClassConstraintComponent": NamedNode<'http://datashapes.org/dash#HasValueWithClassConstraintComponent'>;
    /*A Viewer for literals, rendering as a hyperlink to a URL.
    
    For literals it assumes the lexical form is the URL.
    
    This is often used as default viewer for xsd:anyURI literals. Unsupported for blank nodes.*/
    "HyperlinkViewer": NamedNode<'http://datashapes.org/dash#HyperlinkViewer'>;
    /*A Viewer for URI values that are recognized as images by a browser, rendering as an image.*/
    "ImageViewer": NamedNode<'http://datashapes.org/dash#ImageViewer'>;
    "ImplementationPropertyGroup": NamedNode<'http://datashapes.org/dash#ImplementationPropertyGroup'>;
    "IndexedConstraintComponent-indexed": NamedNode<'http://datashapes.org/dash#IndexedConstraintComponent-indexed'>;
    /*A constraint component that can be used to mark property shapes to be indexed, meaning that each of its value nodes must carry a dash:index from 0 to N.*/
    "IndexedConstraintComponent": NamedNode<'http://datashapes.org/dash#IndexedConstraintComponent'>;
    /*A test case to verify whether an inferencing engine is producing identical results to those stored as expected results.*/
    "InferencingTestCase": NamedNode<'http://datashapes.org/dash#InferencingTestCase'>;
    /*A drop-down editor for all instances of the target class (based on sh:class of the property).*/
    "InstancesSelectEditor": NamedNode<'http://datashapes.org/dash#InstancesSelectEditor'>;
    /*A test case that calls a given SHACL-JS JavaScript function like a sh:JSFunction and compares its result with the dash:expectedResult.*/
    "JSTestCase": NamedNode<'http://datashapes.org/dash#JSTestCase'>;
    /*A Viewer for URI resources, rendering as a hyperlink to that URI based on the display label of the resource. Also includes other ways of interacting with the URI such as opening a nested summary display.*/
    "LabelViewer": NamedNode<'http://datashapes.org/dash#LabelViewer'>;
    /*A Viewer for literals with a language tag, rendering as the text plus a language indicator.*/
    "LangStringViewer": NamedNode<'http://datashapes.org/dash#LangStringViewer'>;
    /*Defines constraints on what it means for a node to be a node within a well-formed RDF list. Note that this does not check whether the rdf:rest items are also well-formed lists as this would lead to unsupported recursion.*/
    "ListNodeShape": NamedNode<'http://datashapes.org/dash#ListNodeShape'>;
    /*Defines constraints on what it means for a node to be a well-formed RDF list.
    
    The focus node must either be rdf:nil or not recursive. Furthermore, this shape uses dash:ListNodeShape as a "helper" to walk through all members of the whole list (including itself).*/
    "ListShape": NamedNode<'http://datashapes.org/dash#ListShape'>;
    /*A simple viewer for literals, rendering the lexical form of the value.*/
    "LiteralViewer": NamedNode<'http://datashapes.org/dash#LiteralViewer'>;
    "ModifyAction-skipPreview": NamedNode<'http://datashapes.org/dash#ModifyAction-skipPreview'>;
    /*An action typically showing up in a Modify section of a selected resource. May make changes to the data.*/
    "ModifyAction": NamedNode<'http://datashapes.org/dash#ModifyAction'>;
    /*An editor for multiple/all value nodes at once.*/
    "MultiEditor": NamedNode<'http://datashapes.org/dash#MultiEditor'>;
    /*A viewer for multiple/all values at once.*/
    "MultiViewer": NamedNode<'http://datashapes.org/dash#MultiViewer'>;
    "NonRecursiveConstraintComponent-nonRecursive": NamedNode<'http://datashapes.org/dash#NonRecursiveConstraintComponent-nonRecursive'>;
    /*Used to state that a property or path must not point back to itself.
    
    For example, "a person cannot have itself as parent" can be expressed by setting dash:nonRecursive=true for a given sh:path.
    
    To express that a person cannot have itself among any of its (recursive) parents, use a sh:path with the + operator such as ex:parent+.*/
    "NonRecursiveConstraintComponent": NamedNode<'http://datashapes.org/dash#NonRecursiveConstraintComponent'>;
    /*A Shape that is no node can conform to.*/
    "None": NamedNode<'http://datashapes.org/dash#None'>;
    "ParameterConstraintComponent-parameter": NamedNode<'http://datashapes.org/dash#ParameterConstraintComponent-parameter'>;
    /*A constraint component that can be used to verify that all value nodes conform to the given Parameter.*/
    "ParameterConstraintComponent": NamedNode<'http://datashapes.org/dash#ParameterConstraintComponent'>;
    "PrimaryKeyConstraintComponent-uriStart": NamedNode<'http://datashapes.org/dash#PrimaryKeyConstraintComponent-uriStart'>;
    /*Enforces a constraint that the given property (sh:path) serves as primary key for all resources in the target of the shape. If a property has been declared to be the primary key then each resource must have exactly one value for that property. Furthermore, the URIs of those resources must start with a given string (dash:uriStart), followed by the URL-encoded primary key value. For example if dash:uriStart is "http://example.org/country-" and the primary key for an instance is "de" then the URI must be "http://example.org/country-de". Finally, as a result of the URI policy, there can not be any other resource with the same value under the same primary key policy.*/
    "PrimaryKeyConstraintComponent": NamedNode<'http://datashapes.org/dash#PrimaryKeyConstraintComponent'>;
    /*A test case running a given SPARQL SELECT query and comparing its results with those stored as JSON Result Set in the expected result property.*/
    "QueryTestCase": NamedNode<'http://datashapes.org/dash#QueryTestCase'>;
    "RDFQueryJSLibrary": NamedNode<'http://datashapes.org/dash#RDFQueryJSLibrary'>;
    "ReifiableByConstraintComponent-reifiableBy": NamedNode<'http://datashapes.org/dash#ReifiableByConstraintComponent-reifiableBy'>;
    "ReifiableByConstraintComponent": NamedNode<'http://datashapes.org/dash#ReifiableByConstraintComponent'>;
    "ResourceAction-jsCondition": NamedNode<'http://datashapes.org/dash#ResourceAction-jsCondition'>;
    /*An Action that can be executed for a selected resource. Such Actions show up in context menus once they have been assigned a sh:group.*/
    "ResourceAction": NamedNode<'http://datashapes.org/dash#ResourceAction'>;
    /*A rich text editor to enter the lexical value of a literal and a drop down to select language. The selected language is stored in the HTML lang attribute of the root node in the HTML DOM tree.*/
    "RichTextEditor": NamedNode<'http://datashapes.org/dash#RichTextEditor'>;
    "RootClassConstraintComponent-rootClass": NamedNode<'http://datashapes.org/dash#RootClassConstraintComponent-rootClass'>;
    /*A constraint component defining the parameter dash:rootClass, which restricts the values to be either the root class itself or one of its subclasses. This is typically used in conjunction with properties that have rdfs:Class as their type.*/
    "RootClassConstraintComponent": NamedNode<'http://datashapes.org/dash#RootClassConstraintComponent'>;
    /*Encapsulates one or more SPARQL CONSTRUCT queries that can be parameterized. Parameters will become pre-bound variables in the queries.*/
    "SPARQLConstructTemplate": NamedNode<'http://datashapes.org/dash#SPARQLConstructTemplate'>;
    /*Encapsulates a SPARQL SELECT query that can be parameterized. Parameters will become pre-bound variables in the query.*/
    "SPARQLSelectTemplate": NamedNode<'http://datashapes.org/dash#SPARQLSelectTemplate'>;
    /*A SuggestionGenerator based on a SPARQL UPDATE query (sh:update), producing an instance of dash:GraphUpdate. The INSERTs become dash:addedTriple and the DELETEs become dash:deletedTriple. The WHERE clause operates on the data graph with the pre-bound variables $subject, $predicate and $object, as well as the other pre-bound variables for the parameters of the constraint.
    
    In many cases, there may be multiple possible suggestions to fix a problem. For example, with sh:maxLength there are many ways to slice a string. In those cases, the system will first iterate through the result variables from a SELECT query (sh:select) and apply these results as pre-bound variables into the UPDATE query.*/
    "SPARQLUpdateSuggestionGenerator": NamedNode<'http://datashapes.org/dash#SPARQLUpdateSuggestionGenerator'>;
    "Script-comment": NamedNode<'http://datashapes.org/dash#Script-comment'>;
    "Script-js": NamedNode<'http://datashapes.org/dash#Script-js'>;
    "Script-label": NamedNode<'http://datashapes.org/dash#Script-label'>;
    /*An executable unit implemented in one or more languages such as JavaScript.*/
    "Script": NamedNode<'http://datashapes.org/dash#Script'>;
    /*A test case that evaluates a script. Requires exactly one value for dash:js and will operate on the test case's graph (with imports) as both data and shapes graph.
    
    Supports read-only scripts only at this stage.*/
    "ScriptTestCase": NamedNode<'http://datashapes.org/dash#ScriptTestCase'>;
    /*A shape script contains extra code that gets injected into the API for the associated node shape. In particular you can use this to define additional functions that operate on the current focus node (the this variable in JavaScript).*/
    "ShapeScript": NamedNode<'http://datashapes.org/dash#ShapeScript'>;
    /*An editor for individual value nodes.*/
    "SingleEditor": NamedNode<'http://datashapes.org/dash#SingleEditor'>;
    /*A constraint component that can be used to declare that all values that are literals must have a lexical form that contains no line breaks ('\n' or '\r').
    
    User interfaces may use the dash:singleLine flag to prefer a text field over a (multi-line) text area.*/
    "SingleLineConstraintComponent": NamedNode<'http://datashapes.org/dash#SingleLineConstraintComponent'>;
    /*A viewer for a single value.*/
    "SingleViewer": NamedNode<'http://datashapes.org/dash#SingleViewer'>;
    "StemConstraintComponent-stem": NamedNode<'http://datashapes.org/dash#StemConstraintComponent-stem'>;
    /*A constraint component that can be used to verify that every value node is an IRI and the IRI starts with a given string value.*/
    "StemConstraintComponent": NamedNode<'http://datashapes.org/dash#StemConstraintComponent'>;
    /*An rdf:List that can be used in property constraints as value for sh:or to indicate that all values of a property must be either xsd:string or rdf:langString.*/
    "StringOrLangString": NamedNode<'http://datashapes.org/dash#StringOrLangString'>;
    "SubSetOfConstraintComponent-subSetOf": NamedNode<'http://datashapes.org/dash#SubSetOfConstraintComponent-subSetOf'>;
    /*A constraint component that can be used to state that the set of value nodes must be a subset of the value of a given property.*/
    "SubSetOfConstraintComponent": NamedNode<'http://datashapes.org/dash#SubSetOfConstraintComponent'>;
    /*A result representing a successfully validated constraint.*/
    "SuccessResult": NamedNode<'http://datashapes.org/dash#SuccessResult'>;
    /*Represents a successful run of a test case.*/
    "SuccessTestCaseResult": NamedNode<'http://datashapes.org/dash#SuccessTestCaseResult'>;
    /*Base class of suggestions that modify a graph to "fix" the source of a validation result.*/
    "Suggestion": NamedNode<'http://datashapes.org/dash#Suggestion'>;
    /*Base class of objects that can generate suggestions (added or deleted triples) for a validation result of a given constraint component.*/
    "SuggestionGenerator": NamedNode<'http://datashapes.org/dash#SuggestionGenerator'>;
    /*Class of results that have been produced as suggestions, not through SHACL validation. How the actual results are produced is up to implementers. Each instance of this class should have values for sh:focusNode, sh:resultMessage, sh:resultSeverity (suggested default: sh:Info), and dash:suggestion to point at one or more suggestions.*/
    "SuggestionResult": NamedNode<'http://datashapes.org/dash#SuggestionResult'>;
    "SymmetricConstraintComponent-symmetric": NamedNode<'http://datashapes.org/dash#SymmetricConstraintComponent-symmetric'>;
    /*A contraint component for property shapes to validate that a property is symmetric. For symmetric properties, if A relates to B then B must relate to A.*/
    "SymmetricConstraintComponent": NamedNode<'http://datashapes.org/dash#SymmetricConstraintComponent'>;
    /*A test case to verify that a (SHACL-based) feature works as expected.*/
    "TestCase": NamedNode<'http://datashapes.org/dash#TestCase'>;
    /*Base class for results produced by running test cases.*/
    "TestCaseResult": NamedNode<'http://datashapes.org/dash#TestCaseResult'>;
    /*Abstract base class for test environments, holding information on how to set up a test case.*/
    "TestEnvironment": NamedNode<'http://datashapes.org/dash#TestEnvironment'>;
    /*A multi-line text area to enter the value of a literal.*/
    "TextAreaEditor": NamedNode<'http://datashapes.org/dash#TextAreaEditor'>;
    /*A multi-line text area to enter the value of a literal and a drop down to select a language.*/
    "TextAreaWithLangEditor": NamedNode<'http://datashapes.org/dash#TextAreaWithLangEditor'>;
    /*A simple input field to enter the value of a literal, without the ability to change language or datatype.
    
    This is the fallback editor for any literal if no other editors are more suitable.*/
    "TextFieldEditor": NamedNode<'http://datashapes.org/dash#TextFieldEditor'>;
    /*A single-line input field to enter the value of a literal and a drop down to select language, which is mandatory unless xsd:string is among the permissible datatypes.*/
    "TextFieldWithLangEditor": NamedNode<'http://datashapes.org/dash#TextFieldWithLangEditor'>;
    /*An input field to enter the URI of a resource, e.g. rdfs:seeAlso links or images.*/
    "URIEditor": NamedNode<'http://datashapes.org/dash#URIEditor'>;
    /*A Viewer for URI resources, rendering as a hyperlink to that URI. Also includes other ways of interacting with the URI such as opening a nested summary display.*/
    "URIViewer": NamedNode<'http://datashapes.org/dash#URIViewer'>;
    "UniqueValueForClassConstraintComponent-uniqueValueForClass": NamedNode<'http://datashapes.org/dash#UniqueValueForClassConstraintComponent-uniqueValueForClass'>;
    /*A constraint component that can be used to state that the values of a property must be unique for all instances of a given class (and its subclasses).*/
    "UniqueValueForClassConstraintComponent": NamedNode<'http://datashapes.org/dash#UniqueValueForClassConstraintComponent'>;
    /*A Viewer for HTML content from untrusted sources. This viewer will sanitize the HTML before rendering. Any a, button, checkbox, form, hidden, input, img, script, select, style and textarea tags and class and style attributes will be removed.*/
    "UntrustedHTMLViewer": NamedNode<'http://datashapes.org/dash#UntrustedHTMLViewer'>;
    /*Abstract superclass for test cases concerning SHACL constraint validation. Future versions may add new kinds of validatin test cases, e.g. to validate a single resource only.*/
    "ValidationTestCase": NamedNode<'http://datashapes.org/dash#ValidationTestCase'>;
    /*A viewer that renders all values of a given property as a table, with one value per row, and the columns defined by the shape that is the sh:node or sh:class of the property.*/
    "ValueTableViewer": NamedNode<'http://datashapes.org/dash#ValueTableViewer'>;
    /*The class of widgets for viewing value nodes.*/
    "Viewer": NamedNode<'http://datashapes.org/dash#Viewer'>;
    /*Base class of user interface components that can be used to display or edit value nodes.*/
    "Widget": NamedNode<'http://datashapes.org/dash#Widget'>;
    /*Indicates that a class is "abstract" and cannot be used in asserted rdf:type triples. Only non-abstract subclasses of abstract classes should be instantiated directly.*/
    "abstract": NamedNode<'http://datashapes.org/dash#abstract'>;
    /*Links an Action with the ActionGroup that it should be arranged in.*/
    "actionGroup": NamedNode<'http://datashapes.org/dash#actionGroup'>;
    /*The (CSS) class of an Action for display purposes alongside the label.*/
    "actionIconClass": NamedNode<'http://datashapes.org/dash#actionIconClass'>;
    /*May link a dash:GraphUpdate with one or more triples (represented as instances of rdf:Statement) that should be added to fix the source of the result.*/
    "addedTriple": NamedNode<'http://datashapes.org/dash#addedTriple'>;
    /*Represents all users/roles, for example as a possible value of the default view for role property.*/
    "all": NamedNode<'http://datashapes.org/dash#all'>;
    /*Can be used to state that a shape is applicable to instances of a given class. This is a softer statement than "target class": a target means that all instances of the class must conform to the shape. Being applicable to simply means that the shape may apply to (some) instances of the class. This information can be used by algorithms or humans.*/
    "applicableToClass": NamedNode<'http://datashapes.org/dash#applicableToClass'>;
    /*If set to true then the results of the SHACL function can be cached in between invocations with the same arguments. In other words, they are stateless and do not depend on triples in any graph, or the current time stamp etc.*/
    "cachable": NamedNode<'http://datashapes.org/dash#cachable'>;
    "closedByTypes": NamedNode<'http://datashapes.org/dash#closedByTypes'>;
    /*Specifies a property that must have a value whenever the property path has a value, and must have no value whenever the property path has no value.*/
    "coExistsWith": NamedNode<'http://datashapes.org/dash#coExistsWith'>;
    /*Can be used to indicate that a property/path represented by a property constraint represents a composite relationship. In a composite relationship, the life cycle of a "child" object (value of the property/path) depends on the "parent" object (focus node). If the parent gets deleted, then the child objects should be deleted, too. Tools may use dash:composite (if set to true) to implement cascading delete operations.*/
    "composite": NamedNode<'http://datashapes.org/dash#composite'>;
    /*
            Links a property with a default value type.
            The default value type is assumed to be the <code>rdf:type</code> of values of the property
            that declare no type on their own.
            An example use of <code>sh:defaultValueType</code> is <code>sh:property</code>,
            the values of which are assumed to be instances of <code>sh:PropertyShape</code>
            even if they are untyped (blank) nodes.
            */
    "defaultValueType": NamedNode<'http://datashapes.org/dash#defaultValueType'>;
    /*Links a node shape with the roles for which it shall be used as default view. User interfaces can use these values to select how to present a given RDF resource. The values of this property are URIs representing a group of users or agents. There is a dedicated URI dash:all representing all users.*/
    "defaultViewForRole": NamedNode<'http://datashapes.org/dash#defaultViewForRole'>;
    /*May link a dash:GraphUpdate result with one or more triples (represented as instances of rdf:Statement) that should be deleted to fix the source of the result.*/
    "deletedTriple": NamedNode<'http://datashapes.org/dash#deletedTriple'>;
    /*Can be used in dash:js node expressions to enumerate the predicates that the computation of the values may depend on. This can be used by clients to determine whether an edit requires re-computation of values on a form or elsewhere. For example, if the dash:js is something like "focusNode.firstName + focusNode.lastName" then the dependency predicates should be ex:firstName and ex:lastName.*/
    "dependencyPredicate": NamedNode<'http://datashapes.org/dash#dependencyPredicate'>;
    /*Can be used to link a SHACL property shape with the URL of a SPARQL endpoint that may contain further RDF triples for the value nodes delivered by the property. This can be used to inform a processor that it should switch to values from an external graph when the user wants to retrieve more information about a value.
    
    This property should be regarded as an "annotation", i.e. it does not have any impact on validation or other built-in SHACL features. However, selected tools may want to use this information. One implementation strategy would be to periodically fetch the values specified by the sh:node or sh:class shape associated with the property, using the property shapes in that shape, and add the resulting triples into the main query graph.
    
    An example value is "https://query.wikidata.org/sparql".*/
    "detailsEndpoint": NamedNode<'http://datashapes.org/dash#detailsEndpoint'>;
    /*Can be used to link a SHACL property shape with a SHACL node expression that produces the URIs of one or more graphs that contain further RDF triples for the value nodes delivered by the property. This can be used to inform a processor that it should switch to another data graph when the user wants to retrieve more information about a value.
    
    The node expressions are evaluated with the focus node as input. (It is unclear whether there are also cases where the result may be different for each specific value, in which case the node expression would need a second input argument).
    
    This property should be regarded as an "annotation", i.e. it does not have any impact on validation or other built-in SHACL features. However, selected tools may want to use this information.*/
    "detailsGraph": NamedNode<'http://datashapes.org/dash#detailsGraph'>;
    /*Can be used to link a property shape with an editor, to state a preferred editing widget in user interfaces.*/
    "editor": NamedNode<'http://datashapes.org/dash#editor'>;
    /*Specifies a prefix that shall be excluded from the Script code generation.*/
    "excludedPrefix": NamedNode<'http://datashapes.org/dash#excludedPrefix'>;
    /*The expected result(s) of a test case. The value range of this property is different for each kind of test cases.*/
    "expectedResult": NamedNode<'http://datashapes.org/dash#expectedResult'>;
    /*A flag to indicate that the expected result represents a JSON string. If set to true, then tests would compare JSON structures (regardless of whitespaces) instead of actual syntax.*/
    "expectedResultIsJSON": NamedNode<'http://datashapes.org/dash#expectedResultIsJSON'>;
    /*A flag to indicate that the expected result represents an RDF graph encoded as a Turtle file. If set to true, then tests would compare graphs instead of actual syntax.*/
    "expectedResultIsTTL": NamedNode<'http://datashapes.org/dash#expectedResultIsTTL'>;
    /*Can be used to mark that certain validation results have already been fixed.*/
    "fixed": NamedNode<'http://datashapes.org/dash#fixed'>;
    "hasClass": NamedNode<'http://datashapes.org/dash#hasClass'>;
    /*Checks whether a given node (?value) has a value less than (<) the provided ?maxExclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.*/
    "hasMaxExclusive": NamedNode<'http://datashapes.org/dash#hasMaxExclusive'>;
    /*Checks whether a given node (?value) has a value less than or equal to (<=) the provided ?maxInclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.*/
    "hasMaxInclusive": NamedNode<'http://datashapes.org/dash#hasMaxInclusive'>;
    /*Checks whether a given string (?value) has a length within a given maximum string length.*/
    "hasMaxLength": NamedNode<'http://datashapes.org/dash#hasMaxLength'>;
    /*Checks whether a given node (?value) has value greater than (>) the provided ?minExclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.*/
    "hasMinExclusive": NamedNode<'http://datashapes.org/dash#hasMinExclusive'>;
    /*Checks whether a given node (?value) has value greater than or equal to (>=) the provided ?minInclusive. Returns false if this cannot be determined, e.g. because values do not have comparable types.*/
    "hasMinInclusive": NamedNode<'http://datashapes.org/dash#hasMinInclusive'>;
    /*Checks whether a given string (?value) has a length within a given minimum string length.*/
    "hasMinLength": NamedNode<'http://datashapes.org/dash#hasMinLength'>;
    /*Checks whether a given node (?value) has a given sh:NodeKind (?nodeKind). For example, sh:hasNodeKind(42, sh:Literal) = true.*/
    "hasNodeKind": NamedNode<'http://datashapes.org/dash#hasNodeKind'>;
    /*Checks whether the string representation of a given node (?value) matches a given regular expression (?pattern). Returns false if the value is a blank node.*/
    "hasPattern": NamedNode<'http://datashapes.org/dash#hasPattern'>;
    "hasRootClass": NamedNode<'http://datashapes.org/dash#hasRootClass'>;
    /*Checks whether a given node is an IRI starting with a given stem.*/
    "hasStem": NamedNode<'http://datashapes.org/dash#hasStem'>;
    /*Specifies a constraint that at least one of the value nodes must be a member of the given list.*/
    "hasValueIn": NamedNode<'http://datashapes.org/dash#hasValueIn'>;
    /*Specifies a constraint that at least one of the value nodes must be an instance of a given class.*/
    "hasValueWithClass": NamedNode<'http://datashapes.org/dash#hasValueWithClass'>;
    /*The height.*/
    "height": NamedNode<'http://datashapes.org/dash#height'>;
    /*Properties marked as hidden do not appear in user interfaces, yet remain part of the shape for other purposes such as validation and scripting or GraphQL schema generation.*/
    "hidden": NamedNode<'http://datashapes.org/dash#hidden'>;
    /*Can be used to state that one (subject) execution platform includes all features of another platform (object).*/
    "includedExecutionPlatform": NamedNode<'http://datashapes.org/dash#includedExecutionPlatform'>;
    "index": NamedNode<'http://datashapes.org/dash#index'>;
    "indexed": NamedNode<'http://datashapes.org/dash#indexed'>;
    /*Checks whether a given shape or constraint has been marked as "deactivated" using sh:deactivated.*/
    "isDeactivated": NamedNode<'http://datashapes.org/dash#isDeactivated'>;
    "isIn": NamedNode<'http://datashapes.org/dash#isIn'>;
    "isLanguageIn": NamedNode<'http://datashapes.org/dash#isLanguageIn'>;
    /*Checks if a given sh:NodeKind is one that includes BlankNodes.*/
    "isNodeKindBlankNode": NamedNode<'http://datashapes.org/dash#isNodeKindBlankNode'>;
    /*Checks if a given sh:NodeKind is one that includes IRIs.*/
    "isNodeKindIRI": NamedNode<'http://datashapes.org/dash#isNodeKindIRI'>;
    /*Checks if a given sh:NodeKind is one that includes Literals.*/
    "isNodeKindLiteral": NamedNode<'http://datashapes.org/dash#isNodeKindLiteral'>;
    /*The JavaScript source code of a Script.*/
    "js": NamedNode<'http://datashapes.org/dash#js'>;
    /*Can be set to true for those constraint components where the validation does not require to visit any other triples than the shape definitions and the direct property values of the focus node mentioned in the property constraints. Examples of this include sh:minCount and sh:hasValue.
    
    Constraint components that are marked as such can be optimized by engines, e.g. they can be evaluated client-side at form submission time, without having to make a round-trip to a server, assuming the client has downloaded a complete snapshot of the resource.
    
    Any component marked with dash:staticConstraint is also a dash:localConstraint.*/
    "localConstraint": NamedNode<'http://datashapes.org/dash#localConstraint'>;
    /*For file-typed properties, this can be used to specify the expected/allowed mime types of its values. This can be used, for example, to limit file input boxes or file selectors. If multiple values are allowed then they need to be separated by commas.
    
    Example values are listed at https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types*/
    "mimeTypes": NamedNode<'http://datashapes.org/dash#mimeTypes'>;
    /*Links the constraint component with instances of dash:SuggestionGenerator that may be used to produce suggestions for a given validation result that was produced by a property constraint.*/
    "propertySuggestionGenerator": NamedNode<'http://datashapes.org/dash#propertySuggestionGenerator'>;
    /*Used as a hint for user interfaces that values of the associated property should not be editable. The values of this may be the boolean literals true or false or, more generally, a SHACL node expression that must evaluate to true or false.*/
    "readOnly": NamedNode<'http://datashapes.org/dash#readOnly'>;
    /*Can be used to specify the node shape that may be applied to reified statements produced by a property shape. The property shape must have a URI resource as its sh:path. The values of this property must be node shapes. User interfaces can use this information to determine which properties to present to users when reified statements are explored or edited. Use dash:None to indicate that no reification should be permitted.*/
    "reifiableBy": NamedNode<'http://datashapes.org/dash#reifiableBy'>;
    /*Links a SPARQL executable with the platforms that it can be executed on. This can be used by a SHACL implementation to determine whether a constraint validator or rule shall be ignored based on the current platform. For example, if a SPARQL query uses a function or magic property that is only available in TopBraid then a non-TopBraid platform can ignore the constraint (or simply always return no validation results). If this property has no value then the assumption is that the execution will succeed. As soon as one value exists, the assumption is that the engine supports at least one of the given platforms.*/
    "requiredExecutionPlatform": NamedNode<'http://datashapes.org/dash#requiredExecutionPlatform'>;
    /*Links a class with the Resource Actions that can be applied to instances of that class.*/
    "resourceAction": NamedNode<'http://datashapes.org/dash#resourceAction'>;
    "rootClass": NamedNode<'http://datashapes.org/dash#rootClass'>;
    /*States that a subject resource has a given shape. This property can, for example, be used to capture results of SHACL validation on static data.*/
    "shape": NamedNode<'http://datashapes.org/dash#shape'>;
    "shapeScript": NamedNode<'http://datashapes.org/dash#shapeScript'>;
    "singleLine": NamedNode<'http://datashapes.org/dash#singleLine'>;
    /*Can be set to true for those constraint components where the validation does not require to visit any other triples than the parameters. Examples of this include sh:datatype or sh:nodeKind, where no further triples need to be queried to determine the result.
    
    Constraint components that are marked as such can be optimized by engines, e.g. they can be evaluated client-side at form submission time, without having to make a round-trip to a server.*/
    "staticConstraint": NamedNode<'http://datashapes.org/dash#staticConstraint'>;
    /*Specifies a string value that the IRI of the value nodes must start with.*/
    "stem": NamedNode<'http://datashapes.org/dash#stem'>;
    "subSetOf": NamedNode<'http://datashapes.org/dash#subSetOf'>;
    /*Can be used to link a result with one or more suggestions on how to address or improve the underlying issue.*/
    "suggestion": NamedNode<'http://datashapes.org/dash#suggestion'>;
    /*An optional confidence between 0% and 100%. Suggestions with 100% confidence are strongly recommended. Can be used to sort recommended updates.*/
    "suggestionConfidence": NamedNode<'http://datashapes.org/dash#suggestionConfidence'>;
    /*Links a sh:SPARQLConstraint or sh:JSConstraint with instances of dash:SuggestionGenerator that may be used to produce suggestions for a given validation result that was produced by the constraint.*/
    "suggestionGenerator": NamedNode<'http://datashapes.org/dash#suggestionGenerator'>;
    /*Can be used to link a suggestion with the group identifier to which it belongs. By default this is a link to the dash:SuggestionGenerator, but in principle this could be any value.*/
    "suggestionGroup": NamedNode<'http://datashapes.org/dash#suggestionGroup'>;
    /*True to declare that the associated property path is symmetric.*/
    "symmetric": NamedNode<'http://datashapes.org/dash#symmetric'>;
    /*Indicates whether this test modifies the specified dash:testEnvironment. If set to true then a test runner can make sure to wipe out the previous environment, while leaving it false (or undefined) means that the test runner can reuse the environment from the previous test case. As setting up and tearing down tests is sometimes slow, this flag can significantly accelerate test execution.*/
    "testModifiesEnvironment": NamedNode<'http://datashapes.org/dash#testModifiesEnvironment'>;
    /*Returns a literal with datatype xsd:string that has the input value as its string. If the input value is an (URI) resource then its URI will be used.*/
    "toString": NamedNode<'http://datashapes.org/dash#toString'>;
    "uniqueValueForClass": NamedNode<'http://datashapes.org/dash#uniqueValueForClass'>;
    /*True to also validate the shapes itself (i.e. parameter declarations).*/
    "validateShapes": NamedNode<'http://datashapes.org/dash#validateShapes'>;
    /*Computes the number of objects for a given subject/predicate combination.*/
    "valueCount": NamedNode<'http://datashapes.org/dash#valueCount'>;
    /*Can be used to link a property shape with a viewer, to state a preferred viewing widget in user interfaces.*/
    "viewer": NamedNode<'http://datashapes.org/dash#viewer'>;
    /*The width.*/
    "width": NamedNode<'http://datashapes.org/dash#width'>;
    /*The x position.*/
    "x": NamedNode<'http://datashapes.org/dash#x'>;
    /*The y position.*/
    "y": NamedNode<'http://datashapes.org/dash#y'>;
    "skipPreview": NamedNode<'http://datashapes.org/dash#skipPreview'>;
    "nonRecursive": NamedNode<'http://datashapes.org/dash#nonRecursive'>;
    "uriStart": NamedNode<'http://datashapes.org/dash#uriStart'>;
    "jsCondition": NamedNode<'http://datashapes.org/dash#jsCondition'>;
    "testCase": NamedNode<'http://datashapes.org/dash#testCase'>;
    "uri": NamedNode<'http://datashapes.org/dash#uri'>;
    "predicate": NamedNode<'http://datashapes.org/dash#predicate'>;
    "nodeKind": NamedNode<'http://datashapes.org/dash#nodeKind'>;
    "subject": NamedNode<'http://datashapes.org/dash#subject'>;
    "focusNode": NamedNode<'http://datashapes.org/dash#focusNode'>;
    "testGraph": NamedNode<'http://datashapes.org/dash#testGraph'>;
    "action": NamedNode<'http://datashapes.org/dash#action'>;
    "object": NamedNode<'http://datashapes.org/dash#object'>;
    "arg": NamedNode<'http://datashapes.org/dash#arg'>;
    "constraintOrShape": NamedNode<'http://datashapes.org/dash#constraintOrShape'>;
    "variables": NamedNode<'http://datashapes.org/dash#variables'>;
    "expression": NamedNode<'http://datashapes.org/dash#expression'>;
};
export const dash: Dash = (namespace("http://datashapes.org/dash#") as any);
