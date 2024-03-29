import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Hydra {
    '': NamedNode<'http://www.w3.org/ns/hydra/core#'>;
    /** A link to the API documentation */
    "apiDocumentation": NamedNode<'http://www.w3.org/ns/hydra/core#apiDocumentation'>;
    /** The Hydra API documentation class */
    "ApiDocumentation": NamedNode<'http://www.w3.org/ns/hydra/core#ApiDocumentation'>;
    /** Provides a base abstract for base Uri source for Iri template resolution. */
    "BaseUriSource": NamedNode<'http://www.w3.org/ns/hydra/core#BaseUriSource'>;
    /** A representation that serializes just the lexical form of a variable value, but omits language and type information. */
    "BasicRepresentation": NamedNode<'http://www.w3.org/ns/hydra/core#BasicRepresentation'>;
    /** The class of Hydra classes. */
    "Class": NamedNode<'http://www.w3.org/ns/hydra/core#Class'>;
    /** Determines whether the provided set of header values is closed or not. */
    "closedSet": NamedNode<'http://www.w3.org/ns/hydra/core#closedSet'>;
    /** Collections somehow related to this resource. */
    "collection": NamedNode<'http://www.w3.org/ns/hydra/core#collection'>;
    /** A collection holding references to a number of related resources. */
    "Collection": NamedNode<'http://www.w3.org/ns/hydra/core#Collection'>;
    /** A description. */
    "description": NamedNode<'http://www.w3.org/ns/hydra/core#description'>;
    /** A link to main entry point of the Web API */
    "entrypoint": NamedNode<'http://www.w3.org/ns/hydra/core#entrypoint'>;
    /** A runtime error, used to report information beyond the returned status code. */
    "Error": NamedNode<'http://www.w3.org/ns/hydra/core#Error'>;
    /** The information expected by the Web API. */
    "expects": NamedNode<'http://www.w3.org/ns/hydra/core#expects'>;
    /** Specification of the header expected by the operation. */
    "expectsHeader": NamedNode<'http://www.w3.org/ns/hydra/core#expectsHeader'>;
    /** A representation that serializes a variable value including its language and type information and thus differentiating between IRIs and literals. */
    "ExplicitRepresentation": NamedNode<'http://www.w3.org/ns/hydra/core#ExplicitRepresentation'>;
    /** Hint on what kind of extensions are in use. */
    "extension": NamedNode<'http://www.w3.org/ns/hydra/core#extension'>;
    /** The first resource of an interlinked set of resources. */
    "first": NamedNode<'http://www.w3.org/ns/hydra/core#first'>;
    /** A property representing a freetext query. */
    "freetextQuery": NamedNode<'http://www.w3.org/ns/hydra/core#freetextQuery'>;
    /** Name of the header. */
    "headerName": NamedNode<'http://www.w3.org/ns/hydra/core#headerName'>;
    /** Specifies a possible either expected or returned header values */
    "HeaderSpecification": NamedNode<'http://www.w3.org/ns/hydra/core#HeaderSpecification'>;
    /** The class of IRI templates. */
    "IriTemplate": NamedNode<'http://www.w3.org/ns/hydra/core#IriTemplate'>;
    /** A mapping from an IRI template variable to a property. */
    "IriTemplateMapping": NamedNode<'http://www.w3.org/ns/hydra/core#IriTemplateMapping'>;
    /** The last resource of an interlinked set of resources. */
    "last": NamedNode<'http://www.w3.org/ns/hydra/core#last'>;
    /** Instructs to limit set only to N elements. */
    "limit": NamedNode<'http://www.w3.org/ns/hydra/core#limit'>;
    /** The class of properties representing links. */
    "Link": NamedNode<'http://www.w3.org/ns/hydra/core#Link'>;
    /** States that the link's context IRI, as defined in RFC 5988, should be used as the base Uri */
    "LinkContext": NamedNode<'http://www.w3.org/ns/hydra/core#LinkContext'>;
    /** This predicate is left for compatibility purposes and hydra:memberAssertion should be used instead. */
    "manages": NamedNode<'http://www.w3.org/ns/hydra/core#manages'>;
    /** A variable-to-property mapping of the IRI template. */
    "mapping": NamedNode<'http://www.w3.org/ns/hydra/core#mapping'>;
    /** A member of the collection */
    "member": NamedNode<'http://www.w3.org/ns/hydra/core#member'>;
    /** Semantics of each member provided by the collection. */
    "memberAssertion": NamedNode<'http://www.w3.org/ns/hydra/core#memberAssertion'>;
    /** The HTTP method. */
    "method": NamedNode<'http://www.w3.org/ns/hydra/core#method'>;
    /** The resource following the current instance in an interlinked set of resources. */
    "next": NamedNode<'http://www.w3.org/ns/hydra/core#next'>;
    /** The object. */
    "object": NamedNode<'http://www.w3.org/ns/hydra/core#object'>;
    /** Instructs to skip N elements of the set. */
    "offset": NamedNode<'http://www.w3.org/ns/hydra/core#offset'>;
    /** An operation supported by the Hydra resource */
    "operation": NamedNode<'http://www.w3.org/ns/hydra/core#operation'>;
    /** An operation. */
    "Operation": NamedNode<'http://www.w3.org/ns/hydra/core#Operation'>;
    /** Instructs to provide a specific page of the collection at a given index. */
    "pageIndex": NamedNode<'http://www.w3.org/ns/hydra/core#pageIndex'>;
    /** Instructs to provide a specific page reference of the collection. */
    "pageReference": NamedNode<'http://www.w3.org/ns/hydra/core#pageReference'>;
    /** A PartialCollectionView describes a partial view of a Collection. Multiple PartialCollectionViews can be connected with the the next/previous properties to allow a client to retrieve all members of the collection. */
    "PartialCollectionView": NamedNode<'http://www.w3.org/ns/hydra/core#PartialCollectionView'>;
    /** A status that might be returned by the Web API (other statuses should be expected and properly handled as well) */
    "possibleStatus": NamedNode<'http://www.w3.org/ns/hydra/core#possibleStatus'>;
    /** Possible value of the header. */
    "possibleValue": NamedNode<'http://www.w3.org/ns/hydra/core#possibleValue'>;
    /** The resource preceding the current instance in an interlinked set of resources. */
    "previous": NamedNode<'http://www.w3.org/ns/hydra/core#previous'>;
    /** A property */
    "property": NamedNode<'http://www.w3.org/ns/hydra/core#property'>;
    /** True if the client can retrieve the property's value, false otherwise. */
    "readable": NamedNode<'http://www.w3.org/ns/hydra/core#readable'>;
    /** True if the property is required, false otherwise. */
    "required": NamedNode<'http://www.w3.org/ns/hydra/core#required'>;
    "resolveRelativeUsing": NamedNode<'http://www.w3.org/ns/hydra/core#resolveRelativeUsing'>;
    /** The class of dereferenceable resources by means a client can attempt to dereference; however, the received responses should still be verified. */
    "Resource": NamedNode<'http://www.w3.org/ns/hydra/core#Resource'>;
    /** The information returned by the Web API on success */
    "returns": NamedNode<'http://www.w3.org/ns/hydra/core#returns'>;
    /** Name of the header returned by the operation. */
    "returnsHeader": NamedNode<'http://www.w3.org/ns/hydra/core#returnsHeader'>;
    /** States that the base Uri should be established using RFC 3986 reference resolution algorithm specified in section 5. */
    "Rfc3986": NamedNode<'http://www.w3.org/ns/hydra/core#Rfc3986'>;
    /** An IRI template as defined by RFC6570. */
    "Rfc6570Template": NamedNode<'http://www.w3.org/ns/hydra/core#Rfc6570Template'>;
    /** A IRI template that can be used to query a collection. */
    "search": NamedNode<'http://www.w3.org/ns/hydra/core#search'>;
    /** Additional information about a status code that might be returned. */
    "Status": NamedNode<'http://www.w3.org/ns/hydra/core#Status'>;
    /** The HTTP status code. Please note it may happen this value will be different to actual status code received. */
    "statusCode": NamedNode<'http://www.w3.org/ns/hydra/core#statusCode'>;
    /** The subject. */
    "subject": NamedNode<'http://www.w3.org/ns/hydra/core#subject'>;
    /** A class known to be supported by the Web API */
    "supportedClass": NamedNode<'http://www.w3.org/ns/hydra/core#supportedClass'>;
    /** An operation supported by instances of the specific Hydra class, or the target of the Hydra link, or IRI template. */
    "supportedOperation": NamedNode<'http://www.w3.org/ns/hydra/core#supportedOperation'>;
    /** The properties known to be supported by a Hydra class */
    "supportedProperty": NamedNode<'http://www.w3.org/ns/hydra/core#supportedProperty'>;
    /** A property known to be supported by a Hydra class. */
    "SupportedProperty": NamedNode<'http://www.w3.org/ns/hydra/core#SupportedProperty'>;
    /** A templated string with placeholders. The literal's datatype indicates the template syntax; if not specified, hydra:Rfc6570Template is assumed. */
    "template": NamedNode<'http://www.w3.org/ns/hydra/core#template'>;
    /** A templated link. */
    "TemplatedLink": NamedNode<'http://www.w3.org/ns/hydra/core#TemplatedLink'>;
    /** A title, often used along with a description. */
    "title": NamedNode<'http://www.w3.org/ns/hydra/core#title'>;
    /** The total number of items referenced by a collection. */
    "totalItems": NamedNode<'http://www.w3.org/ns/hydra/core#totalItems'>;
    /** An IRI template variable */
    "variable": NamedNode<'http://www.w3.org/ns/hydra/core#variable'>;
    /** The representation format to use when expanding the IRI template. */
    "variableRepresentation": NamedNode<'http://www.w3.org/ns/hydra/core#variableRepresentation'>;
    /** A representation specifies how to serialize variable values into strings. */
    "VariableRepresentation": NamedNode<'http://www.w3.org/ns/hydra/core#VariableRepresentation'>;
    /** A specific view of a resource. */
    "view": NamedNode<'http://www.w3.org/ns/hydra/core#view'>;
    /** True if the client can change the property's value, false otherwise. */
    "writable": NamedNode<'http://www.w3.org/ns/hydra/core#writable'>;
    /** This property is left for compatibility purposes and hydra:writable should be used instead. */
    "writeable": NamedNode<'http://www.w3.org/ns/hydra/core#writeable'>;
}

const builder = namespace("http://www.w3.org/ns/hydra/core#") as any;
export const strict = builder as NamespaceBuilder<keyof Hydra> & Hydra;
export const loose = builder as NamespaceBuilder & Hydra;
