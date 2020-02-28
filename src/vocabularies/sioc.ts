import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Sioc = NamespaceBuilder & {
    /*Community is a high-level concept that defines an online community and what it consists of.*/
    "Community": NamedNode;
    /*An area in which content Items are contained.*/
    "Container": NamedNode;
    /*A discussion area on which Posts or entries are made.*/
    "Forum": NamedNode;
    /*An Item is something which can be in a Container.*/
    "Item": NamedNode;
    /*An article or message that can be posted to a Forum.*/
    "Post": NamedNode;
    /*A Role is a function of a UserAccount within a scope of a particular Forum, Site, etc.*/
    "Role": NamedNode;
    /*A Site can be the location of an online community or set of communities, with UserAccounts and Usergroups creating Items in a set of Containers. It can be thought of as a web-accessible data Space.*/
    "Site": NamedNode;
    /*A Space is a place where data resides, e.g. on a website, desktop, fileshare, etc.*/
    "Space": NamedNode;
    /*A container for a series of threaded discussion Posts or Items.*/
    "Thread": NamedNode;
    /*UserAccount is now preferred. This is a deprecated class for a User in an online community site.*/
    "User": NamedNode;
    /*A user account in an online community site.*/
    "UserAccount": NamedNode;
    /*A set of UserAccounts whose owners have a common purpose or interest. Can be used for access control purposes.*/
    "Usergroup": NamedNode;
    /*Specifies that this Item is about a particular resource, e.g. a Post describing a book, hotel, etc.*/
    "about": NamedNode;
    /*Refers to the foaf:Agent or foaf:Person who owns this sioc:UserAccount.*/
    "account_of": NamedNode;
    /*Refers to who (e.g. a UserAccount, e-mail address, etc.) a particular Item is addressed to.*/
    "addressed_to": NamedNode;
    /*A Site that the UserAccount is an administrator of.*/
    "administrator_of": NamedNode;
    /*The URI of a file attached to an Item.*/
    "attachment": NamedNode;
    /*An image or depiction used to represent this UserAccount.*/
    "avatar": NamedNode;
    /*An Item that this Container contains.*/
    "container_of": NamedNode;
    /*The content of the Item in plain text format.*/
    "content": NamedNode;
    /*The encoded content of the Post, contained in CDATA areas.*/
    "content_encoded": NamedNode;
    /*When this was created, in ISO 8601 format.*/
    "created_at": NamedNode;
    /*A resource that the UserAccount is a creator of.*/
    "creator_of": NamedNode;
    /*When this was delivered, in ISO 8601 format.*/
    "delivered_at": NamedNode;
    /*The content of the Post.*/
    "description": NamedNode;
    /*The Item that this discussion is about.*/
    "discussion_of": NamedNode;
    /*Links to a previous (older) revision of this Item or Post.*/
    "earlier_version": NamedNode;
    /*An electronic mail address of the UserAccount.*/
    "email": NamedNode;
    /*An electronic mail address of the UserAccount, encoded using SHA1.*/
    "email_sha1": NamedNode;
    /*This links Items to embedded statements, facts and structured content.*/
    "embeds_knowledge": NamedNode;
    /*A feed (e.g. RSS, Atom, etc.) pertaining to this resource (e.g. for a Forum, Site, UserAccount, etc.).*/
    "feed": NamedNode;
    /*First (real) name of this User. Synonyms include given name or christian name.*/
    "first_name": NamedNode;
    /*Indicates that one UserAccount follows another UserAccount (e.g. for microblog posts or other content item updates).*/
    "follows": NamedNode;
    /*A UserAccount that has this Role.*/
    "function_of": NamedNode;
    /*A URI for the application used to generate this Item.*/
    "generator": NamedNode;
    "group_of": NamedNode;
    /*A UserAccount that is an administrator of this Site.*/
    "has_administrator": NamedNode;
    /*The Container to which this Item belongs.*/
    "has_container": NamedNode;
    /*This is the UserAccount that made this resource.*/
    "has_creator": NamedNode;
    /*A discussion that is related to this Item. The discussion can be anything, for example, a sioc:Forum or sioc:Thread, a sioct:WikiArticle or simply a foaf:Document.*/
    "has_discussion": NamedNode;
    /*A Role that this UserAccount has.*/
    "has_function": NamedNode;
    "has_group": NamedNode;
    /*The Site that hosts this Container.*/
    "has_host": NamedNode;
    /*A UserAccount that is a member of this Usergroup.*/
    "has_member": NamedNode;
    /*A UserAccount that is a moderator of this Forum.*/
    "has_moderator": NamedNode;
    /*A UserAccount that modified this resource (e.g. Item, Container, Space).*/
    "has_modifier": NamedNode;
    /*A UserAccount that this resource is owned by.*/
    "has_owner": NamedNode;
    /*A Container or Forum that this Container or Forum is a child of.*/
    "has_parent": NamedNode;
    /*An resource that is a part of this subject.*/
    "has_part": NamedNode;
    /*Points to an Item or Post that is a reply or response to this Item or Post.*/
    "has_reply": NamedNode;
    /*A resource that this Role applies to.*/
    "has_scope": NamedNode;
    /*A data Space which this resource is a part of.*/
    "has_space": NamedNode;
    /*A UserAccount that is subscribed to this Container.*/
    "has_subscriber": NamedNode;
    /*Points to a Usergroup that has certain access to this Space.*/
    "has_usergroup": NamedNode;
    /*A Container that is hosted on this Site.*/
    "host_of": NamedNode;
    /*An identifier of a SIOC concept instance. For example, a user ID. Must be unique for instances of each type of SIOC concept within the same site.*/
    "id": NamedNode;
    /*The IP address used when creating this Item, UserAccount, etc. This can be associated with a creator. Some wiki articles list the IP addresses for the creator or modifiers when the usernames are absent.*/
    "ip_address": NamedNode;
    /*The date and time of the last activity associated with a SIOC concept instance, and expressed in ISO 8601 format. This could be due to a reply Post or Comment, a modification to an Item, etc.*/
    "last_activity_date": NamedNode;
    /*The date and time of the last Post (or Item) in a Forum (or a Container), in ISO 8601 format.*/
    "last_item_date": NamedNode;
    /*Last (real) name of this user. Synonyms include surname or family name.*/
    "last_name": NamedNode;
    /*The date and time of the last reply Post or Comment, which could be associated with a starter Item or Post or with a Thread, and expressed in ISO 8601 format.*/
    "last_reply_date": NamedNode;
    /*Links to a later (newer) revision of this Item or Post.*/
    "later_version": NamedNode;
    /*Links to the latest revision of this Item or Post.*/
    "latest_version": NamedNode;
    /*Used to indicate some form of endorsement by a UserAccount or Agent of an Item, Container, Space, UserAccount, etc.*/
    "likes": NamedNode;
    /*A URI of a document which contains this SIOC object.*/
    "link": NamedNode;
    /*Links extracted from hyperlinks within a SIOC concept, e.g. Post or Site.*/
    "links_to": NamedNode;
    /*A Usergroup that this UserAccount is a member of.*/
    "member_of": NamedNode;
    /*Refers to a UserAccount that a particular Item mentions.*/
    "mentions": NamedNode;
    /*A Forum that a UserAccount is a moderator of.*/
    "moderator_of": NamedNode;
    /*When this was modified, in ISO 8601 format.*/
    "modified_at": NamedNode;
    /*A resource that this UserAccount has modified.*/
    "modifier_of": NamedNode;
    /*The name of a SIOC concept instance, e.g. a username for a UserAccount, group name for a Usergroup, etc.*/
    "name": NamedNode;
    /*Next Item or Post in a given Container sorted by date.*/
    "next_by_date": NamedNode;
    /*Links to the next revision of this Item or Post.*/
    "next_version": NamedNode;
    /*A note associated with this resource, for example, if it has been edited by a UserAccount.*/
    "note": NamedNode;
    /*The number of unique authors (UserAccounts and unregistered posters) who have contributed to this Item, Thread, Post, etc.*/
    "num_authors": NamedNode;
    /*The number of Posts (or Items) in a Forum (or a Container).*/
    "num_items": NamedNode;
    /*The number of replies that this Item, Thread, Post, etc. has. Useful for when the reply structure is absent.*/
    "num_replies": NamedNode;
    /*The number of Threads (AKA discussion topics) in a Forum.*/
    "num_threads": NamedNode;
    /*The number of times this Item, Thread, UserAccount profile, etc. has been viewed.*/
    "num_views": NamedNode;
    /*A resource owned by a particular UserAccount, for example, a weblog or image gallery.*/
    "owner_of": NamedNode;
    /*A child Container or Forum that this Container or Forum is a parent of.*/
    "parent_of": NamedNode;
    /*A resource that the subject is a part of.*/
    "part_of": NamedNode;
    /*Previous Item or Post in a given Container sorted by date.*/
    "previous_by_date": NamedNode;
    /*Links to the previous revision of this Item or Post.*/
    "previous_version": NamedNode;
    /*When this was read, in ISO 8601 format.*/
    "read_at": NamedNode;
    /*Links either created explicitly or extracted implicitly on the HTML level from the Post.*/
    "reference": NamedNode;
    /*Related resources for this resource, e.g. for Posts, perhaps determined implicitly from topics or references.*/
    "related_to": NamedNode;
    /*Links to an Item or Post which this Item or Post is a reply to.*/
    "reply_of": NamedNode;
    /*For the reply-to address set in email messages, IMs, etc. The property name was chosen to avoid confusion with has_reply/reply_of (the reply graph).*/
    "respond_to": NamedNode;
    /*A Role that has a scope of this resource.*/
    "scope_of": NamedNode;
    /*For shared Items where there is a certain creator_of and an intermediary who shares or forwards it (e.g. as a sibling Item).*/
    "shared_by": NamedNode;
    /*An Item may have a sibling or a twin that exists in a different Container, but the siblings may differ in some small way (for example, language, category, etc.). The sibling of this Item should be self-describing (that is, it should contain all available information).*/
    "sibling": NamedNode;
    /*A resource which belongs to this data Space.*/
    "space_of": NamedNode;
    /*Keyword(s) describing subject of the Post.*/
    "subject": NamedNode;
    /*A Container that a UserAccount is subscribed to.*/
    "subscriber_of": NamedNode;
    /*This is the title (subject line) of the Post. Note that for a Post within a threaded discussion that has no parents, it would detail the topic thread.*/
    "title": NamedNode;
    /*A topic of interest, linking to the appropriate URI, e.g. in the Open Directory Project or of a SKOS category.*/
    "topic": NamedNode;
    /*A Space that the Usergroup has access to.*/
    "usergroup_of": NamedNode;
};
export const sioc: Sioc = (namespace("http://rdfs.org/sioc/ns#") as any);
