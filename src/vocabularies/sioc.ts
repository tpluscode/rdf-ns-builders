import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Sioc {
    /** Community is a high-level concept that defines an online community and what it consists of. */
    "Community": NamedNode<'http://rdfs.org/sioc/ns#Community'>;
    /** An area in which content Items are contained. */
    "Container": NamedNode<'http://rdfs.org/sioc/ns#Container'>;
    /** A discussion area on which Posts or entries are made. */
    "Forum": NamedNode<'http://rdfs.org/sioc/ns#Forum'>;
    /** An Item is something which can be in a Container. */
    "Item": NamedNode<'http://rdfs.org/sioc/ns#Item'>;
    /** An article or message that can be posted to a Forum. */
    "Post": NamedNode<'http://rdfs.org/sioc/ns#Post'>;
    /** A Role is a function of a UserAccount within a scope of a particular Forum, Site, etc. */
    "Role": NamedNode<'http://rdfs.org/sioc/ns#Role'>;
    /** A Site can be the location of an online community or set of communities, with UserAccounts and Usergroups creating Items in a set of Containers. It can be thought of as a web-accessible data Space. */
    "Site": NamedNode<'http://rdfs.org/sioc/ns#Site'>;
    /** A Space is a place where data resides, e.g. on a website, desktop, fileshare, etc. */
    "Space": NamedNode<'http://rdfs.org/sioc/ns#Space'>;
    /** A container for a series of threaded discussion Posts or Items. */
    "Thread": NamedNode<'http://rdfs.org/sioc/ns#Thread'>;
    /** UserAccount is now preferred. This is a deprecated class for a User in an online community site. */
    "User": NamedNode<'http://rdfs.org/sioc/ns#User'>;
    /** A user account in an online community site. */
    "UserAccount": NamedNode<'http://rdfs.org/sioc/ns#UserAccount'>;
    /** A set of UserAccounts whose owners have a common purpose or interest. Can be used for access control purposes. */
    "Usergroup": NamedNode<'http://rdfs.org/sioc/ns#Usergroup'>;
    /** Specifies that this Item is about a particular resource, e.g. a Post describing a book, hotel, etc. */
    "about": NamedNode<'http://rdfs.org/sioc/ns#about'>;
    /** Refers to the foaf:Agent or foaf:Person who owns this sioc:UserAccount. */
    "account_of": NamedNode<'http://rdfs.org/sioc/ns#account_of'>;
    /** Refers to who (e.g. a UserAccount, e-mail address, etc.) a particular Item is addressed to. */
    "addressed_to": NamedNode<'http://rdfs.org/sioc/ns#addressed_to'>;
    /** A Site that the UserAccount is an administrator of. */
    "administrator_of": NamedNode<'http://rdfs.org/sioc/ns#administrator_of'>;
    /** The URI of a file attached to an Item. */
    "attachment": NamedNode<'http://rdfs.org/sioc/ns#attachment'>;
    /** An image or depiction used to represent this UserAccount. */
    "avatar": NamedNode<'http://rdfs.org/sioc/ns#avatar'>;
    /** An Item that this Container contains. */
    "container_of": NamedNode<'http://rdfs.org/sioc/ns#container_of'>;
    /** The content of the Item in plain text format. */
    "content": NamedNode<'http://rdfs.org/sioc/ns#content'>;
    /** The encoded content of the Post, contained in CDATA areas. */
    "content_encoded": NamedNode<'http://rdfs.org/sioc/ns#content_encoded'>;
    /** When this was created, in ISO 8601 format. */
    "created_at": NamedNode<'http://rdfs.org/sioc/ns#created_at'>;
    /** A resource that the UserAccount is a creator of. */
    "creator_of": NamedNode<'http://rdfs.org/sioc/ns#creator_of'>;
    /** When this was delivered, in ISO 8601 format. */
    "delivered_at": NamedNode<'http://rdfs.org/sioc/ns#delivered_at'>;
    /** The content of the Post. */
    "description": NamedNode<'http://rdfs.org/sioc/ns#description'>;
    /** The Item that this discussion is about. */
    "discussion_of": NamedNode<'http://rdfs.org/sioc/ns#discussion_of'>;
    /** Links to a previous (older) revision of this Item or Post. */
    "earlier_version": NamedNode<'http://rdfs.org/sioc/ns#earlier_version'>;
    /** An electronic mail address of the UserAccount. */
    "email": NamedNode<'http://rdfs.org/sioc/ns#email'>;
    /** An electronic mail address of the UserAccount, encoded using SHA1. */
    "email_sha1": NamedNode<'http://rdfs.org/sioc/ns#email_sha1'>;
    /** This links Items to embedded statements, facts and structured content. */
    "embeds_knowledge": NamedNode<'http://rdfs.org/sioc/ns#embeds_knowledge'>;
    /** A feed (e.g. RSS, Atom, etc.) pertaining to this resource (e.g. for a Forum, Site, UserAccount, etc.). */
    "feed": NamedNode<'http://rdfs.org/sioc/ns#feed'>;
    /** First (real) name of this User. Synonyms include given name or christian name. */
    "first_name": NamedNode<'http://rdfs.org/sioc/ns#first_name'>;
    /** Indicates that one UserAccount follows another UserAccount (e.g. for microblog posts or other content item updates). */
    "follows": NamedNode<'http://rdfs.org/sioc/ns#follows'>;
    /** A UserAccount that has this Role. */
    "function_of": NamedNode<'http://rdfs.org/sioc/ns#function_of'>;
    /** A URI for the application used to generate this Item. */
    "generator": NamedNode<'http://rdfs.org/sioc/ns#generator'>;
    "group_of": NamedNode<'http://rdfs.org/sioc/ns#group_of'>;
    /** A UserAccount that is an administrator of this Site. */
    "has_administrator": NamedNode<'http://rdfs.org/sioc/ns#has_administrator'>;
    /** The Container to which this Item belongs. */
    "has_container": NamedNode<'http://rdfs.org/sioc/ns#has_container'>;
    /** This is the UserAccount that made this resource. */
    "has_creator": NamedNode<'http://rdfs.org/sioc/ns#has_creator'>;
    /** A discussion that is related to this Item. The discussion can be anything, for example, a sioc:Forum or sioc:Thread, a sioct:WikiArticle or simply a foaf:Document. */
    "has_discussion": NamedNode<'http://rdfs.org/sioc/ns#has_discussion'>;
    /** A Role that this UserAccount has. */
    "has_function": NamedNode<'http://rdfs.org/sioc/ns#has_function'>;
    "has_group": NamedNode<'http://rdfs.org/sioc/ns#has_group'>;
    /** The Site that hosts this Container. */
    "has_host": NamedNode<'http://rdfs.org/sioc/ns#has_host'>;
    /** A UserAccount that is a member of this Usergroup. */
    "has_member": NamedNode<'http://rdfs.org/sioc/ns#has_member'>;
    /** A UserAccount that is a moderator of this Forum. */
    "has_moderator": NamedNode<'http://rdfs.org/sioc/ns#has_moderator'>;
    /** A UserAccount that modified this resource (e.g. Item, Container, Space). */
    "has_modifier": NamedNode<'http://rdfs.org/sioc/ns#has_modifier'>;
    /** A UserAccount that this resource is owned by. */
    "has_owner": NamedNode<'http://rdfs.org/sioc/ns#has_owner'>;
    /** A Container or Forum that this Container or Forum is a child of. */
    "has_parent": NamedNode<'http://rdfs.org/sioc/ns#has_parent'>;
    /** An resource that is a part of this subject. */
    "has_part": NamedNode<'http://rdfs.org/sioc/ns#has_part'>;
    /** Points to an Item or Post that is a reply or response to this Item or Post. */
    "has_reply": NamedNode<'http://rdfs.org/sioc/ns#has_reply'>;
    /** A resource that this Role applies to. */
    "has_scope": NamedNode<'http://rdfs.org/sioc/ns#has_scope'>;
    /** A data Space which this resource is a part of. */
    "has_space": NamedNode<'http://rdfs.org/sioc/ns#has_space'>;
    /** A UserAccount that is subscribed to this Container. */
    "has_subscriber": NamedNode<'http://rdfs.org/sioc/ns#has_subscriber'>;
    /** Points to a Usergroup that has certain access to this Space. */
    "has_usergroup": NamedNode<'http://rdfs.org/sioc/ns#has_usergroup'>;
    /** A Container that is hosted on this Site. */
    "host_of": NamedNode<'http://rdfs.org/sioc/ns#host_of'>;
    /** An identifier of a SIOC concept instance. For example, a user ID. Must be unique for instances of each type of SIOC concept within the same site. */
    "id": NamedNode<'http://rdfs.org/sioc/ns#id'>;
    /** The IP address used when creating this Item, UserAccount, etc. This can be associated with a creator. Some wiki articles list the IP addresses for the creator or modifiers when the usernames are absent. */
    "ip_address": NamedNode<'http://rdfs.org/sioc/ns#ip_address'>;
    /** The date and time of the last activity associated with a SIOC concept instance, and expressed in ISO 8601 format. This could be due to a reply Post or Comment, a modification to an Item, etc. */
    "last_activity_date": NamedNode<'http://rdfs.org/sioc/ns#last_activity_date'>;
    /** The date and time of the last Post (or Item) in a Forum (or a Container), in ISO 8601 format. */
    "last_item_date": NamedNode<'http://rdfs.org/sioc/ns#last_item_date'>;
    /** Last (real) name of this user. Synonyms include surname or family name. */
    "last_name": NamedNode<'http://rdfs.org/sioc/ns#last_name'>;
    /** The date and time of the last reply Post or Comment, which could be associated with a starter Item or Post or with a Thread, and expressed in ISO 8601 format. */
    "last_reply_date": NamedNode<'http://rdfs.org/sioc/ns#last_reply_date'>;
    /** Links to a later (newer) revision of this Item or Post. */
    "later_version": NamedNode<'http://rdfs.org/sioc/ns#later_version'>;
    /** Links to the latest revision of this Item or Post. */
    "latest_version": NamedNode<'http://rdfs.org/sioc/ns#latest_version'>;
    /** Used to indicate some form of endorsement by a UserAccount or Agent of an Item, Container, Space, UserAccount, etc. */
    "likes": NamedNode<'http://rdfs.org/sioc/ns#likes'>;
    /** A URI of a document which contains this SIOC object. */
    "link": NamedNode<'http://rdfs.org/sioc/ns#link'>;
    /** Links extracted from hyperlinks within a SIOC concept, e.g. Post or Site. */
    "links_to": NamedNode<'http://rdfs.org/sioc/ns#links_to'>;
    /** A Usergroup that this UserAccount is a member of. */
    "member_of": NamedNode<'http://rdfs.org/sioc/ns#member_of'>;
    /** Refers to a UserAccount that a particular Item mentions. */
    "mentions": NamedNode<'http://rdfs.org/sioc/ns#mentions'>;
    /** A Forum that a UserAccount is a moderator of. */
    "moderator_of": NamedNode<'http://rdfs.org/sioc/ns#moderator_of'>;
    /** When this was modified, in ISO 8601 format. */
    "modified_at": NamedNode<'http://rdfs.org/sioc/ns#modified_at'>;
    /** A resource that this UserAccount has modified. */
    "modifier_of": NamedNode<'http://rdfs.org/sioc/ns#modifier_of'>;
    /** The name of a SIOC concept instance, e.g. a username for a UserAccount, group name for a Usergroup, etc. */
    "name": NamedNode<'http://rdfs.org/sioc/ns#name'>;
    /** Next Item or Post in a given Container sorted by date. */
    "next_by_date": NamedNode<'http://rdfs.org/sioc/ns#next_by_date'>;
    /** Links to the next revision of this Item or Post. */
    "next_version": NamedNode<'http://rdfs.org/sioc/ns#next_version'>;
    /** A note associated with this resource, for example, if it has been edited by a UserAccount. */
    "note": NamedNode<'http://rdfs.org/sioc/ns#note'>;
    /** The number of unique authors (UserAccounts and unregistered posters) who have contributed to this Item, Thread, Post, etc. */
    "num_authors": NamedNode<'http://rdfs.org/sioc/ns#num_authors'>;
    /** The number of Posts (or Items) in a Forum (or a Container). */
    "num_items": NamedNode<'http://rdfs.org/sioc/ns#num_items'>;
    /** The number of replies that this Item, Thread, Post, etc. has. Useful for when the reply structure is absent. */
    "num_replies": NamedNode<'http://rdfs.org/sioc/ns#num_replies'>;
    /** The number of Threads (AKA discussion topics) in a Forum. */
    "num_threads": NamedNode<'http://rdfs.org/sioc/ns#num_threads'>;
    /** The number of times this Item, Thread, UserAccount profile, etc. has been viewed. */
    "num_views": NamedNode<'http://rdfs.org/sioc/ns#num_views'>;
    /** A resource owned by a particular UserAccount, for example, a weblog or image gallery. */
    "owner_of": NamedNode<'http://rdfs.org/sioc/ns#owner_of'>;
    /** A child Container or Forum that this Container or Forum is a parent of. */
    "parent_of": NamedNode<'http://rdfs.org/sioc/ns#parent_of'>;
    /** A resource that the subject is a part of. */
    "part_of": NamedNode<'http://rdfs.org/sioc/ns#part_of'>;
    /** Previous Item or Post in a given Container sorted by date. */
    "previous_by_date": NamedNode<'http://rdfs.org/sioc/ns#previous_by_date'>;
    /** Links to the previous revision of this Item or Post. */
    "previous_version": NamedNode<'http://rdfs.org/sioc/ns#previous_version'>;
    /** When this was read, in ISO 8601 format. */
    "read_at": NamedNode<'http://rdfs.org/sioc/ns#read_at'>;
    /** Links either created explicitly or extracted implicitly on the HTML level from the Post. */
    "reference": NamedNode<'http://rdfs.org/sioc/ns#reference'>;
    /** Related resources for this resource, e.g. for Posts, perhaps determined implicitly from topics or references. */
    "related_to": NamedNode<'http://rdfs.org/sioc/ns#related_to'>;
    /** Links to an Item or Post which this Item or Post is a reply to. */
    "reply_of": NamedNode<'http://rdfs.org/sioc/ns#reply_of'>;
    /** For the reply-to address set in email messages, IMs, etc. The property name was chosen to avoid confusion with has_reply/reply_of (the reply graph). */
    "respond_to": NamedNode<'http://rdfs.org/sioc/ns#respond_to'>;
    /** A Role that has a scope of this resource. */
    "scope_of": NamedNode<'http://rdfs.org/sioc/ns#scope_of'>;
    /** For shared Items where there is a certain creator_of and an intermediary who shares or forwards it (e.g. as a sibling Item). */
    "shared_by": NamedNode<'http://rdfs.org/sioc/ns#shared_by'>;
    /** An Item may have a sibling or a twin that exists in a different Container, but the siblings may differ in some small way (for example, language, category, etc.). The sibling of this Item should be self-describing (that is, it should contain all available information). */
    "sibling": NamedNode<'http://rdfs.org/sioc/ns#sibling'>;
    /** A resource which belongs to this data Space. */
    "space_of": NamedNode<'http://rdfs.org/sioc/ns#space_of'>;
    /** Keyword(s) describing subject of the Post. */
    "subject": NamedNode<'http://rdfs.org/sioc/ns#subject'>;
    /** A Container that a UserAccount is subscribed to. */
    "subscriber_of": NamedNode<'http://rdfs.org/sioc/ns#subscriber_of'>;
    /** This is the title (subject line) of the Post. Note that for a Post within a threaded discussion that has no parents, it would detail the topic thread. */
    "title": NamedNode<'http://rdfs.org/sioc/ns#title'>;
    /** A topic of interest, linking to the appropriate URI, e.g. in the Open Directory Project or of a SKOS category. */
    "topic": NamedNode<'http://rdfs.org/sioc/ns#topic'>;
    /** A Space that the Usergroup has access to. */
    "usergroup_of": NamedNode<'http://rdfs.org/sioc/ns#usergroup_of'>;
}

const builder = namespace("http://rdfs.org/sioc/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Sioc> & Sioc;
export const loose = builder as NamespaceBuilder & Sioc;
