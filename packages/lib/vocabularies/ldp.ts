import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Ldp {
    '': NamedNode<'http://www.w3.org/ns/ldp#'>;
    /** Ascending order. */
    "Ascending": NamedNode<'http://www.w3.org/ns/ldp#Ascending'>;
    /** An LDPC that uses a predefined predicate to simply link to its contained resources. */
    "BasicContainer": NamedNode<'http://www.w3.org/ns/ldp#BasicContainer'>;
    /** Links a resource with constraints that the server requires requests like creation and update to conform to. */
    "constrainedBy": NamedNode<'http://www.w3.org/ns/ldp#constrainedBy'>;
    /** A Linked Data Platform RDF Source (LDP-RS) that also conforms to additional patterns and conventions for managing membership. Readers should refer to the specification defining this ontology for the list of behaviors associated with it. */
    "Container": NamedNode<'http://www.w3.org/ns/ldp#Container'>;
    /** Links a container with resources created through the container. */
    "contains": NamedNode<'http://www.w3.org/ns/ldp#contains'>;
    /** Descending order. */
    "Descending": NamedNode<'http://www.w3.org/ns/ldp#Descending'>;
    /** An LDPC that is similar to a LDP-DC but it allows an indirection with the ability to list as member a resource, such as a URI representing a real-world object, that is different from the resource that is created. */
    "DirectContainer": NamedNode<'http://www.w3.org/ns/ldp#DirectContainer'>;
    /** Indicates which predicate is used in membership triples, and that the membership triple pattern is < membership-constant-URI , object-of-hasMemberRelation, member-URI >. */
    "hasMemberRelation": NamedNode<'http://www.w3.org/ns/ldp#hasMemberRelation'>;
    /** Links a resource to a container where notifications for the resource can be created and discovered. */
    "inbox": NamedNode<'http://www.w3.org/ns/ldp#inbox'>;
    /** An LDPC that has the flexibility of choosing what form the membership triples take. */
    "IndirectContainer": NamedNode<'http://www.w3.org/ns/ldp#IndirectContainer'>;
    /** Indicates which triple in a creation request should be used as the member-URI value in the membership triple added when the creation request is successful. */
    "insertedContentRelation": NamedNode<'http://www.w3.org/ns/ldp#insertedContentRelation'>;
    /** Indicates which predicate is used in membership triples, and that the membership triple pattern is < member-URI , object-of-isMemberOfRelation, membership-constant-URI >. */
    "isMemberOfRelation": NamedNode<'http://www.w3.org/ns/ldp#isMemberOfRelation'>;
    /** LDP servers should use this predicate as the membership predicate if there is no obvious predicate from an application vocabulary to use. */
    "member": NamedNode<'http://www.w3.org/ns/ldp#member'>;
    /** Indicates the membership-constant-URI in a membership triple.  Depending upon the membership triple pattern a container uses, as indicated by the presence of ldp:hasMemberRelation or ldp:isMemberOfRelation, the membership-constant-URI might occupy either the subject or object position in membership triples. */
    "membershipResource": NamedNode<'http://www.w3.org/ns/ldp#membershipResource'>;
    /** Used to indicate default and typical behavior for ldp:insertedContentRelation, where the member-URI value in the membership triple added when a creation request is successful is the URI assigned to the newly created resource. */
    "MemberSubject": NamedNode<'http://www.w3.org/ns/ldp#MemberSubject'>;
    /** A Linked Data Platform Resource (LDPR) whose state is NOT represented as RDF. */
    "NonRDFSource": NamedNode<'http://www.w3.org/ns/ldp#NonRDFSource'>;
    /** URI signifying that the resource is an in-sequence page resource, as defined by LDP Paging.  Typically used on Link rel='type' response headers. */
    "Page": NamedNode<'http://www.w3.org/ns/ldp#Page'>;
    /** Link to a page sequence resource, as defined by LDP Paging.  Typically used to communicate the sorting criteria used to allocate LDPC members to pages. */
    "pageSequence": NamedNode<'http://www.w3.org/ns/ldp#pageSequence'>;
    /** The collation used to order the members across pages in a page sequence when comparing strings. */
    "pageSortCollation": NamedNode<'http://www.w3.org/ns/ldp#pageSortCollation'>;
    /** Link to the list of sorting criteria used by the server in a representation.  Typically used on Link response headers as an extension link relation URI in the rel= parameter. */
    "pageSortCriteria": NamedNode<'http://www.w3.org/ns/ldp#pageSortCriteria'>;
    /** Element in the list of sorting criteria used by the server to assign container members to pages. */
    "PageSortCriterion": NamedNode<'http://www.w3.org/ns/ldp#PageSortCriterion'>;
    /** The ascending/descending/etc order used to order the members across pages in a page sequence. */
    "pageSortOrder": NamedNode<'http://www.w3.org/ns/ldp#pageSortOrder'>;
    /** Predicate used to specify the order of the members across a page sequence's in-sequence page resources; it asserts nothing about the order of members in the representation of a single page. */
    "pageSortPredicate": NamedNode<'http://www.w3.org/ns/ldp#pageSortPredicate'>;
    /** URI identifying a LDPC's containment triples, for example to allow clients to express interest in receiving them. */
    "PreferContainment": NamedNode<'http://www.w3.org/ns/ldp#PreferContainment'>;
    /** Archaic alias for ldp:PreferMinimalContainer */
    "PreferEmptyContainer": NamedNode<'http://www.w3.org/ns/ldp#PreferEmptyContainer'>;
    /** URI identifying a LDPC's membership triples, for example to allow clients to express interest in receiving them. */
    "PreferMembership": NamedNode<'http://www.w3.org/ns/ldp#PreferMembership'>;
    /** URI identifying the subset of a LDPC's triples present in an empty LDPC, for example to allow clients to express interest in receiving them.  Currently this excludes containment and membership triples, but in the future other exclusions might be added.  This definition is written to automatically exclude those new classes of triples. */
    "PreferMinimalContainer": NamedNode<'http://www.w3.org/ns/ldp#PreferMinimalContainer'>;
    /** A Linked Data Platform Resource (LDPR) whose state is represented as RDF. */
    "RDFSource": NamedNode<'http://www.w3.org/ns/ldp#RDFSource'>;
    /** A HTTP-addressable resource whose lifecycle is managed by a LDP server. */
    "Resource": NamedNode<'http://www.w3.org/ns/ldp#Resource'>;
}

const builder = namespace("http://www.w3.org/ns/ldp#") as any;
export const strict = builder as NamespaceBuilder<keyof Ldp> & Ldp;
export const loose = builder as NamespaceBuilder & Ldp;
