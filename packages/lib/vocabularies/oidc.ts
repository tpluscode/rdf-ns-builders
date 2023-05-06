import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Oidc {
    '': NamedNode<'http://www.w3.org/ns/solid/oidc#'>;
    /** TODO */
    "application_type": NamedNode<'http://www.w3.org/ns/solid/oidc#application_type'>;
    /** A name for this client that can be presented to an End-User */
    "client_name": NamedNode<'http://www.w3.org/ns/solid/oidc#client_name'>;
    /** A URI for this client's home page */
    "client_uri": NamedNode<'http://www.w3.org/ns/solid/oidc#client_uri'>;
    /** A collection of URIs where individuals or entities responsible for this client can be contacted. */
    "contacts": NamedNode<'http://www.w3.org/ns/solid/oidc#contacts'>;
    /** TODO */
    "default_max_age": NamedNode<'http://www.w3.org/ns/solid/oidc#default_max_age'>;
    /** A collection of OAuth 2.0 Grant Types that the client will restrict itself to using. */
    "grant_types": NamedNode<'http://www.w3.org/ns/solid/oidc#grant_types'>;
    /** A URI for this client's logo */
    "logo_uri": NamedNode<'http://www.w3.org/ns/solid/oidc#logo_uri'>;
    /** A URI for this client's policy document */
    "policy_uri": NamedNode<'http://www.w3.org/ns/solid/oidc#policy_uri'>;
    /** A collection of registered URIs used by the client for redirection */
    "redirect_uris": NamedNode<'http://www.w3.org/ns/solid/oidc#redirect_uris'>;
    /** TODO */
    "require_auth_time": NamedNode<'http://www.w3.org/ns/solid/oidc#require_auth_time'>;
    /** A collection of OAuth 2.0 Response Types that the client will restrict itself to using. */
    "response_types": NamedNode<'http://www.w3.org/ns/solid/oidc#response_types'>;
    /** An OAuth2 scope for the requested access token. */
    "scope": NamedNode<'http://www.w3.org/ns/solid/oidc#scope'>;
    /** The requested client authentication method for the Token Endpoint */
    "token_endpoint_auth_method": NamedNode<'http://www.w3.org/ns/solid/oidc#token_endpoint_auth_method'>;
    /** A URI for this client's terms of service document */
    "tos_uri": NamedNode<'http://www.w3.org/ns/solid/oidc#tos_uri'>;
}

const builder = namespace("http://www.w3.org/ns/solid/oidc#") as any;
export const strict = builder as NamespaceBuilder<keyof Oidc> & Oidc;
export const loose = builder as NamespaceBuilder & Oidc;
