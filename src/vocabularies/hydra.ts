import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Hydra = NamespaceBuilder & {
    /*The Hydra API documentation class*/
    "ApiDocumentation": NamedNode;
    /*A representation that serializes just the lexical form of a variable value, but omits language and type information.*/
    "BasicRepresentation": NamedNode;
    /*The class of Hydra classes. Hydra classes and their instances are dereferenceable resources.*/
    "Class": NamedNode;
    /*A collection holding references to a number of related resources.*/
    "Collection": NamedNode;
    /*A runtime error, used to report information beyond the returned status code.*/
    "Error": NamedNode;
    /*A representation that serializes a variable value including its language and type information and thus differentiating between IRIs and literals.*/
    "ExplicitRepresentation": NamedNode;
    /*The class of IRI templates.*/
    "IriTemplate": NamedNode;
    /*A mapping from an IRI template variable to a property.*/
    "IriTemplateMapping": NamedNode;
    /*The class of properties representing links.*/
    "Link": NamedNode;
    /*An operation.*/
    "Operation": NamedNode;
    /*A PartialCollectionView describes a partial view of a Collection. Multiple PartialCollectionViews can be connected with the the next/previous properties to allow a client to retrieve all members of the collection.*/
    "PartialCollectionView": NamedNode;
    /*The class of dereferenceable resources.*/
    "Resource": NamedNode;
    /*An IRI template as defined by RFC6570.*/
    "Rfc6570Template": NamedNode;
    /*Additional information about a status code that might be returned.*/
    "Status": NamedNode;
    /*A property known to be supported by a Hydra class.*/
    "SupportedProperty": NamedNode;
    /*A templated link.*/
    "TemplatedLink": NamedNode;
    /*A representation specifies how to serialize variable values into strings.*/
    "VariableRepresentation": NamedNode;
    /*A link to the API documentation*/
    "apiDocumentation": NamedNode;
    /*Collections somehow related to this resource.*/
    "collection": NamedNode;
    /*A description.*/
    "description": NamedNode;
    /*A link to main entry point of the Web API*/
    "entrypoint": NamedNode;
    /*The information expected by the Web API.*/
    "expects": NamedNode;
    /*Specification of the header expected by the operation.*/
    "expectsHeader": NamedNode;
    /*The first resource of an interlinked set of resources.*/
    "first": NamedNode;
    /*A property representing a freetext query.*/
    "freetextQuery": NamedNode;
    /*The last resource of an interlinked set of resources.*/
    "last": NamedNode;
    /*Instructs to limit set only to N elements.*/
    "limit": NamedNode;
    /*Semantics of each member provided by the collection.*/
    "manages": NamedNode;
    /*A variable-to-property mapping of the IRI template.*/
    "mapping": NamedNode;
    /*A member of the collection*/
    "member": NamedNode;
    /*The HTTP method.*/
    "method": NamedNode;
    /*The resource following the current instance in an interlinked set of resources.*/
    "next": NamedNode;
    /*The object.*/
    "object": NamedNode;
    /*Instructs to skip N elements of the set.*/
    "offset": NamedNode;
    /*An operation supported by the Hydra resource*/
    "operation": NamedNode;
    /*Instructs to provide a specific page of the collection at a given index.*/
    "pageIndex": NamedNode;
    /*Instructs to provide a specific page reference of the collection.*/
    "pageReference": NamedNode;
    /*A status that might be returned by the Web API (other statuses should be expected and properly handled as well)*/
    "possibleStatus": NamedNode;
    /*The resource preceding the current instance in an interlinked set of resources.*/
    "previous": NamedNode;
    /*A property*/
    "property": NamedNode;
    /*True if the client can retrieve the property's value, false otherwise.*/
    "readable": NamedNode;
    /*True if the property is required, false otherwise.*/
    "required": NamedNode;
    /*The information returned by the Web API on success*/
    "returns": NamedNode;
    /*Name of the header returned by the operation.*/
    "returnsHeader": NamedNode;
    /*A IRI template that can be used to query a collection.*/
    "search": NamedNode;
    /*The HTTP status code*/
    "statusCode": NamedNode;
    /*The subject.*/
    "subject": NamedNode;
    /*A class known to be supported by the Web API*/
    "supportedClass": NamedNode;
    /*An operation supported by instances of the specific Hydra class or the target of the Hydra link*/
    "supportedOperation": NamedNode;
    /*The properties known to be supported by a Hydra class*/
    "supportedProperty": NamedNode;
    /*A templated string with placeholders. The literal's datatype indicates the template syntax; if not specified, hydra:Rfc6570Template is assumed.*/
    "template": NamedNode;
    /*A title, often used along with a description.*/
    "title": NamedNode;
    /*The total number of items referenced by a collection.*/
    "totalItems": NamedNode;
    /*An IRI template variable*/
    "variable": NamedNode;
    /*The representation format to use when expanding the IRI template.*/
    "variableRepresentation": NamedNode;
    /*A specific view of a resource.*/
    "view": NamedNode;
    /*True if the client can change the property's value, false otherwise.*/
    "writeable": NamedNode;
};
export const hydra: Hydra = (namespace(prefixes.hydra) as any);
