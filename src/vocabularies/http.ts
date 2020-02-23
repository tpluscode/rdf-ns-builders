import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Http = NamespaceBuilder & {
    /*A connection used for HTTP transfer.*/
    "Connection": NamedNode;
    /*An entity header in an HTTP message.*/
    "EntityHeader": NamedNode;
    /*A general header in an HTTP message.*/
    "GeneralHeader": NamedNode;
    /*A part of a deconstructed header value.*/
    "HeaderElement": NamedNode;
    /*A header name.*/
    "HeaderName": NamedNode;
    /*An HTTP message.*/
    "Message": NamedNode;
    /*A header in an HTTP message.*/
    "MessageHeader": NamedNode;
    /*The HTTP method used for the request.*/
    "Method": NamedNode;
    /*A parameter for a part of a header value.*/
    "Parameter": NamedNode;
    /*An HTTP request.*/
    "Request": NamedNode;
    /*A header in an HTTP request message.*/
    "RequestHeader": NamedNode;
    /*An HTTP response.*/
    "Response": NamedNode;
    /*A header in an HTTP response message.*/
    "ResponseHeader": NamedNode;
    /*The status code of an HTTP response.*/
    "StatusCode": NamedNode;
    /*The absolute path sort of request URI.*/
    "absolutePath": NamedNode;
    /*The absolute request URI.*/
    "absoluteURI": NamedNode;
    /*The authority sort of request URI.*/
    "authority": NamedNode;
    /*The entity body of an HTTP message.*/
    "body": NamedNode;
    /*The authority of a connection used for the HTTP transfer.*/
    "connectionAuthority": NamedNode;
    /*The name of a header element.*/
    "elementName": NamedNode;
    /*The value of a header element.*/
    "elementValue": NamedNode;
    /*The name of an HTTP header field.*/
    "fieldName": NamedNode;
    /*The value of an HTTP header field.*/
    "fieldValue": NamedNode;
    /*The name of an HTTP header.*/
    "hdrName": NamedNode;
    /*The deconstructed parts of an HTTP header value.*/
    "headerElements": NamedNode;
    /*The headers in an HTTP message.*/
    "headers": NamedNode;
    /*The HTTP version of an HTTP message.*/
    "httpVersion": NamedNode;
    /*The HTTP method name used for the HTTP request.*/
    "methodName": NamedNode;
    /*The HTTP method used for the HTTP request.*/
    "mthd": NamedNode;
    /*The name of a parameter in a part of a deconstructed HTTP header value.*/
    "paramName": NamedNode;
    /*The value of a parameter in a part of a deconstructed HTTP header value.*/
    "paramValue": NamedNode;
    /*The parameters in a part of a deconstructed HTTP header value.*/
    "params": NamedNode;
    /*The reason phrase (status text) of an HTTP response.*/
    "reasonPhrase": NamedNode;
    /*The request URI of an HTTP request.*/
    "requestURI": NamedNode;
    /*The HTTP requests made via a connection.*/
    "requests": NamedNode;
    /*The HTTP response sent in answer to an HTTP request.*/
    "resp": NamedNode;
    /*The status code of an HTTP response.*/
    "sc": NamedNode;
    /*The status code number.*/
    "statusCodeNumber": NamedNode;
    /*The status code value of an HTTP response.*/
    "statusCodeValue": NamedNode;
};
export const http: Http = (namespace(prefixes.http) as any);
