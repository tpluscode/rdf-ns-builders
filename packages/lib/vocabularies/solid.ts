import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Solid {
    '': NamedNode<'http://www.w3.org/ns/solid/terms#'>;
    /** A Solid account. */
    "Account": NamedNode<'http://www.w3.org/ns/solid/terms#Account'>;
    /** A resource containing notifications. */
    "Inbox": NamedNode<'http://www.w3.org/ns/solid/terms#Inbox'>;
    /** A class of patch expressing insertions, deletions, and conditional modifications to a resource that has an RDF-based representation. */
    "InsertDeletePatch": NamedNode<'http://www.w3.org/ns/solid/terms#InsertDeletePatch'>;
    /** A patch expresses conditional modifications to a resource that has an RDF-based representation. */
    "Patch": NamedNode<'http://www.w3.org/ns/solid/terms#Patch'>;
    /** Listed Type Index is a registry of resources that are publicly discoverable by outside users and applications. */
    "ListedDocument": NamedNode<'http://www.w3.org/ns/solid/terms#ListedDocument'>;
    /** A notification resource. */
    "Notification": NamedNode<'http://www.w3.org/ns/solid/terms#Notification'>;
    /** A resource containing time ordered items and sub-containers.  Sub-containers may be desirable in file based systems to split the timeline into logical components e.g. /yyyy-mm-dd/ as used in ISO 8061. */
    "Timeline": NamedNode<'http://www.w3.org/ns/solid/terms#Timeline'>;
    /** A index of type registries for resources. Applications can register the RDF type they use and list them in the index resource. */
    "TypeIndex": NamedNode<'http://www.w3.org/ns/solid/terms#TypeIndex'>;
    /** The registered types that map a RDF classes/types to their locations using either `instance` or `instanceContainer` property. */
    "TypeRegistration": NamedNode<'http://www.w3.org/ns/solid/terms#TypeRegistration'>;
    /** Unlisted Type Index is a registry of resources that are private to the user and their apps, for types that are not publicly discoverable. */
    "UnlistedDocument": NamedNode<'http://www.w3.org/ns/solid/terms#UnlistedDocument'>;
    /** A solid account belonging to an Agent. */
    "account": NamedNode<'http://www.w3.org/ns/solid/terms#account'>;
    /** The triple patterns this patch removes from the document. */
    "deletes": NamedNode<'http://www.w3.org/ns/solid/terms#deletes'>;
    /** A class that is used to map an listed or unlisted type index. */
    "forClass": NamedNode<'http://www.w3.org/ns/solid/terms#forClass'>;
    /** Deprecated pointer to a Linked Data Notifications inbox; please use http://www.w3.org/ns/ldp#inbox instead. */
    "inbox": NamedNode<'http://www.w3.org/ns/solid/terms#inbox'>;
    /** The triple patterns this patch adds to the document. */
    "inserts": NamedNode<'http://www.w3.org/ns/solid/terms#inserts'>;
    /** Maps a type to an individual resource, typically an index or a directory listing resource. */
    "instance": NamedNode<'http://www.w3.org/ns/solid/terms#instance'>;
    /** Maps a type to a container which the client would have to list to get the instances of that type. */
    "instanceContainer": NamedNode<'http://www.w3.org/ns/solid/terms#instanceContainer'>;
    /** The login URI of a given server. */
    "loginEndpoint": NamedNode<'http://www.w3.org/ns/solid/terms#loginEndpoint'>;
    /** The logout URI of a given server. */
    "logoutEndpoint": NamedNode<'http://www.w3.org/ns/solid/terms#logoutEndpoint'>;
    /** Notification resource for an inbox. */
    "notification": NamedNode<'http://www.w3.org/ns/solid/terms#notification'>;
    /** The preferred OpenID Connect issuer URI for a given WebID. */
    "oidcIssuer": NamedNode<'http://www.w3.org/ns/solid/terms#oidcIssuer'>;
    /** A person or social entity that is considered to have control, rights, and responsibilities over a data storage. */
    "owner": NamedNode<'http://www.w3.org/ns/solid/terms#owner'>;
    /** The document to which this patch applies. */
    "patches": NamedNode<'http://www.w3.org/ns/solid/terms#patches'>;
    /** Points to an unlisted type index resource. */
    "privateTypeIndex": NamedNode<'http://www.w3.org/ns/solid/terms#privateTypeIndex'>;
    /** Points to a listed type index resource. */
    "publicTypeIndex": NamedNode<'http://www.w3.org/ns/solid/terms#publicTypeIndex'>;
    /** Points to a TypeIndex resource. */
    "typeIndex": NamedNode<'http://www.w3.org/ns/solid/terms#typeIndex'>;
    /** Indicates if a message has been read or not. This property should have a boolean datatype. */
    "read": NamedNode<'http://www.w3.org/ns/solid/terms#read'>;
    /** The quota of non-volatile memory that is available for the account (in bytes) */
    "storageQuota": NamedNode<'http://www.w3.org/ns/solid/terms#storageQuota'>;
    /** The amount of non-volatile memory that the account have used (in bytes) */
    "storageUsage": NamedNode<'http://www.w3.org/ns/solid/terms#storageUsage'>;
    /** Timeline for a given resource. */
    "timeline": NamedNode<'http://www.w3.org/ns/solid/terms#timeline'>;
    /** The conditions the document and the inserted and deleted triple patterns need to satisfy in order for the patch to be applied. */
    "where": NamedNode<'http://www.w3.org/ns/solid/terms#where'>;
}

const builder = namespace("http://www.w3.org/ns/solid/terms#") as any;
export const strict = builder as NamespaceBuilder<keyof Solid> & Solid;
export const loose = builder as NamespaceBuilder & Solid;
