import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Http {
    '': NamedNode<'http://www.w3.org/2011/http#'>;
    /** A connection used for HTTP transfer. */
    "Connection": NamedNode<'http://www.w3.org/2011/http#Connection'>;
    /** An entity header in an HTTP message. */
    "EntityHeader": NamedNode<'http://www.w3.org/2011/http#EntityHeader'>;
    /** A header in an HTTP message. */
    "MessageHeader": NamedNode<'http://www.w3.org/2011/http#MessageHeader'>;
    /** A general header in an HTTP message. */
    "GeneralHeader": NamedNode<'http://www.w3.org/2011/http#GeneralHeader'>;
    /** A part of a deconstructed header value. */
    "HeaderElement": NamedNode<'http://www.w3.org/2011/http#HeaderElement'>;
    /** A header name. */
    "HeaderName": NamedNode<'http://www.w3.org/2011/http#HeaderName'>;
    /** An HTTP message. */
    "Message": NamedNode<'http://www.w3.org/2011/http#Message'>;
    /** The HTTP method used for the request. */
    "Method": NamedNode<'http://www.w3.org/2011/http#Method'>;
    /** A parameter for a part of a header value. */
    "Parameter": NamedNode<'http://www.w3.org/2011/http#Parameter'>;
    /** An HTTP request. */
    "Request": NamedNode<'http://www.w3.org/2011/http#Request'>;
    /** A header in an HTTP request message. */
    "RequestHeader": NamedNode<'http://www.w3.org/2011/http#RequestHeader'>;
    /** An HTTP response. */
    "Response": NamedNode<'http://www.w3.org/2011/http#Response'>;
    /** A header in an HTTP response message. */
    "ResponseHeader": NamedNode<'http://www.w3.org/2011/http#ResponseHeader'>;
    /** The status code of an HTTP response. */
    "StatusCode": NamedNode<'http://www.w3.org/2011/http#StatusCode'>;
    /** The absolute path sort of request URI. */
    "absolutePath": NamedNode<'http://www.w3.org/2011/http#absolutePath'>;
    /** The request URI of an HTTP request. */
    "requestURI": NamedNode<'http://www.w3.org/2011/http#requestURI'>;
    /** The absolute request URI. */
    "absoluteURI": NamedNode<'http://www.w3.org/2011/http#absoluteURI'>;
    /** The authority sort of request URI. */
    "authority": NamedNode<'http://www.w3.org/2011/http#authority'>;
    /** The entity body of an HTTP message. */
    "body": NamedNode<'http://www.w3.org/2011/http#body'>;
    /** The authority of a connection used for the HTTP transfer. */
    "connectionAuthority": NamedNode<'http://www.w3.org/2011/http#connectionAuthority'>;
    /** The name of a header element. */
    "elementName": NamedNode<'http://www.w3.org/2011/http#elementName'>;
    /** The value of a header element. */
    "elementValue": NamedNode<'http://www.w3.org/2011/http#elementValue'>;
    /** The name of an HTTP header field. */
    "fieldName": NamedNode<'http://www.w3.org/2011/http#fieldName'>;
    /** The value of an HTTP header field. */
    "fieldValue": NamedNode<'http://www.w3.org/2011/http#fieldValue'>;
    /** The name of an HTTP header. */
    "hdrName": NamedNode<'http://www.w3.org/2011/http#hdrName'>;
    /** The deconstructed parts of an HTTP header value. */
    "headerElements": NamedNode<'http://www.w3.org/2011/http#headerElements'>;
    /** The headers in an HTTP message. */
    "headers": NamedNode<'http://www.w3.org/2011/http#headers'>;
    /** The HTTP version of an HTTP message. */
    "httpVersion": NamedNode<'http://www.w3.org/2011/http#httpVersion'>;
    /** The HTTP method name used for the HTTP request. */
    "methodName": NamedNode<'http://www.w3.org/2011/http#methodName'>;
    /** The HTTP method used for the HTTP request. */
    "mthd": NamedNode<'http://www.w3.org/2011/http#mthd'>;
    /** The name of a parameter in a part of a deconstructed HTTP header value. */
    "paramName": NamedNode<'http://www.w3.org/2011/http#paramName'>;
    /** The value of a parameter in a part of a deconstructed HTTP header value. */
    "paramValue": NamedNode<'http://www.w3.org/2011/http#paramValue'>;
    /** The parameters in a part of a deconstructed HTTP header value. */
    "params": NamedNode<'http://www.w3.org/2011/http#params'>;
    /** The reason phrase (status text) of an HTTP response. */
    "reasonPhrase": NamedNode<'http://www.w3.org/2011/http#reasonPhrase'>;
    /** The HTTP requests made via a connection. */
    "requests": NamedNode<'http://www.w3.org/2011/http#requests'>;
    /** The HTTP response sent in answer to an HTTP request. */
    "resp": NamedNode<'http://www.w3.org/2011/http#resp'>;
    /** The status code of an HTTP response. */
    "sc": NamedNode<'http://www.w3.org/2011/http#sc'>;
    /** The status code number. */
    "statusCodeNumber": NamedNode<'http://www.w3.org/2011/http#statusCodeNumber'>;
    /** The status code value of an HTTP response. */
    "statusCodeValue": NamedNode<'http://www.w3.org/2011/http#statusCodeValue'>;
}

const builder = namespace("http://www.w3.org/2011/http#") as any;
export const strict = builder as NamespaceBuilder<keyof Http> & Http;
export const loose = builder as NamespaceBuilder & Http;
