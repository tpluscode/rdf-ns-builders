import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface As {
    /** Actor accepts the Object */
    "Accept": NamedNode<'https://www.w3.org/ns/activitystreams#Accept'>;
    /** An Object representing some form of Action that has been taken */
    "Activity": NamedNode<'https://www.w3.org/ns/activitystreams#Activity'>;
    /** To Add an Object or Link to Something */
    "Add": NamedNode<'https://www.w3.org/ns/activitystreams#Add'>;
    /** Actor announces the object to the target */
    "Announce": NamedNode<'https://www.w3.org/ns/activitystreams#Announce'>;
    /** Represents a software application of any sort */
    "Application": NamedNode<'https://www.w3.org/ns/activitystreams#Application'>;
    /** To Arrive Somewhere (can be used, for instance, to indicate that a particular entity is currently located somewhere, e.g. a "check-in") */
    "Arrive": NamedNode<'https://www.w3.org/ns/activitystreams#Arrive'>;
    /** A written work. Typically several paragraphs long. For example, a blog post or a news article. */
    "Article": NamedNode<'https://www.w3.org/ns/activitystreams#Article'>;
    /** An audio file */
    "Audio": NamedNode<'https://www.w3.org/ns/activitystreams#Audio'>;
    "Block": NamedNode<'https://www.w3.org/ns/activitystreams#Block'>;
    /** An ordered or unordered collection of Objects or Links */
    "Collection": NamedNode<'https://www.w3.org/ns/activitystreams#Collection'>;
    /** A subset of items from a Collection */
    "CollectionPage": NamedNode<'https://www.w3.org/ns/activitystreams#CollectionPage'>;
    /** To Create Something */
    "Create": NamedNode<'https://www.w3.org/ns/activitystreams#Create'>;
    /** To Delete Something */
    "Delete": NamedNode<'https://www.w3.org/ns/activitystreams#Delete'>;
    /** The actor dislikes the object */
    "Dislike": NamedNode<'https://www.w3.org/ns/activitystreams#Dislike'>;
    /** Represents a digital document/file of any sort */
    "Document": NamedNode<'https://www.w3.org/ns/activitystreams#Document'>;
    /** An Event of any kind */
    "Event": NamedNode<'https://www.w3.org/ns/activitystreams#Event'>;
    /** To flag something (e.g. flag as inappropriate, flag as spam, etc) */
    "Flag": NamedNode<'https://www.w3.org/ns/activitystreams#Flag'>;
    /** To Express Interest in Something */
    "Follow": NamedNode<'https://www.w3.org/ns/activitystreams#Follow'>;
    /** A Group of any kind. */
    "Group": NamedNode<'https://www.w3.org/ns/activitystreams#Group'>;
    /** Actor is ignoring the Object */
    "Ignore": NamedNode<'https://www.w3.org/ns/activitystreams#Ignore'>;
    /** An Image file */
    "Image": NamedNode<'https://www.w3.org/ns/activitystreams#Image'>;
    /** An Activity that has no direct object */
    "IntransitiveActivity": NamedNode<'https://www.w3.org/ns/activitystreams#IntransitiveActivity'>;
    /** To invite someone or something to something */
    "Invite": NamedNode<'https://www.w3.org/ns/activitystreams#Invite'>;
    /** To Join Something */
    "Join": NamedNode<'https://www.w3.org/ns/activitystreams#Join'>;
    /** To Leave Something */
    "Leave": NamedNode<'https://www.w3.org/ns/activitystreams#Leave'>;
    /** To Like Something */
    "Like": NamedNode<'https://www.w3.org/ns/activitystreams#Like'>;
    /** Represents a qualified reference to another resource. Patterned after the RFC5988 Web Linking Model */
    "Link": NamedNode<'https://www.w3.org/ns/activitystreams#Link'>;
    /** The actor listened to the object */
    "Listen": NamedNode<'https://www.w3.org/ns/activitystreams#Listen'>;
    /** A specialized Link that represents an @mention */
    "Mention": NamedNode<'https://www.w3.org/ns/activitystreams#Mention'>;
    /** The actor is moving the object. The target specifies where the object is moving to. The origin specifies where the object is moving from. */
    "Move": NamedNode<'https://www.w3.org/ns/activitystreams#Move'>;
    /** A Short note, typically less than a single paragraph. A "tweet" is an example, or a "status update" */
    "Note": NamedNode<'https://www.w3.org/ns/activitystreams#Note'>;
    "Object": NamedNode<'https://www.w3.org/ns/activitystreams#Object'>;
    /** To Offer something to someone or something */
    "Offer": NamedNode<'https://www.w3.org/ns/activitystreams#Offer'>;
    /** A variation of Collection in which items are strictly ordered */
    "OrderedCollection": NamedNode<'https://www.w3.org/ns/activitystreams#OrderedCollection'>;
    /** An ordered subset of items from an OrderedCollection */
    "OrderedCollectionPage": NamedNode<'https://www.w3.org/ns/activitystreams#OrderedCollectionPage'>;
    /** A rdf:List variant for Objects and Links */
    "OrderedItems": NamedNode<'https://www.w3.org/ns/activitystreams#OrderedItems'>;
    /** An Organization */
    "Organization": NamedNode<'https://www.w3.org/ns/activitystreams#Organization'>;
    /** A Web Page */
    "Page": NamedNode<'https://www.w3.org/ns/activitystreams#Page'>;
    /** A Person */
    "Person": NamedNode<'https://www.w3.org/ns/activitystreams#Person'>;
    /** A physical or logical location */
    "Place": NamedNode<'https://www.w3.org/ns/activitystreams#Place'>;
    /** A Profile Document */
    "Profile": NamedNode<'https://www.w3.org/ns/activitystreams#Profile'>;
    /** A question of any sort. */
    "Question": NamedNode<'https://www.w3.org/ns/activitystreams#Question'>;
    /** The actor read the object */
    "Read": NamedNode<'https://www.w3.org/ns/activitystreams#Read'>;
    /** Actor rejects the Object */
    "Reject": NamedNode<'https://www.w3.org/ns/activitystreams#Reject'>;
    /** Represents a Social Graph relationship between two Individuals (indicated by the 'a' and 'b' properties) */
    "Relationship": NamedNode<'https://www.w3.org/ns/activitystreams#Relationship'>;
    /** To Remove Something */
    "Remove": NamedNode<'https://www.w3.org/ns/activitystreams#Remove'>;
    /** A service provided by some entity */
    "Service": NamedNode<'https://www.w3.org/ns/activitystreams#Service'>;
    /** Actor tentatively accepts the Object */
    "TentativeAccept": NamedNode<'https://www.w3.org/ns/activitystreams#TentativeAccept'>;
    /** Actor tentatively rejects the object */
    "TentativeReject": NamedNode<'https://www.w3.org/ns/activitystreams#TentativeReject'>;
    /** A placeholder for a deleted object */
    "Tombstone": NamedNode<'https://www.w3.org/ns/activitystreams#Tombstone'>;
    /** The actor is traveling to the target. The origin specifies where the actor is traveling from. */
    "Travel": NamedNode<'https://www.w3.org/ns/activitystreams#Travel'>;
    /** To Undo Something. This would typically be used to indicate that a previous Activity has been undone. */
    "Undo": NamedNode<'https://www.w3.org/ns/activitystreams#Undo'>;
    /** To Update/Modify Something */
    "Update": NamedNode<'https://www.w3.org/ns/activitystreams#Update'>;
    /** A Video document of any kind. */
    "Video": NamedNode<'https://www.w3.org/ns/activitystreams#Video'>;
    /** The actor viewed the object */
    "View": NamedNode<'https://www.w3.org/ns/activitystreams#View'>;
    /** Specifies the accuracy around the point established by the longitude and latitude */
    "accuracy": NamedNode<'https://www.w3.org/ns/activitystreams#accuracy'>;
    /** Subproperty of as:attributedTo that identifies the primary actor */
    "actor": NamedNode<'https://www.w3.org/ns/activitystreams#actor'>;
    /** The altitude of a place */
    "altitude": NamedNode<'https://www.w3.org/ns/activitystreams#altitude'>;
    /** Describes a possible inclusive answer or option for a question. */
    "anyOf": NamedNode<'https://www.w3.org/ns/activitystreams#anyOf'>;
    "attachment": NamedNode<'https://www.w3.org/ns/activitystreams#attachment'>;
    "attachments": NamedNode<'https://www.w3.org/ns/activitystreams#attachments'>;
    /** Identifies an entity to which an object is attributed */
    "attributedTo": NamedNode<'https://www.w3.org/ns/activitystreams#attributedTo'>;
    "audience": NamedNode<'https://www.w3.org/ns/activitystreams#audience'>;
    /** Identifies the author of an object. Deprecated. Use as:attributedTo instead */
    "author": NamedNode<'https://www.w3.org/ns/activitystreams#author'>;
    "bcc": NamedNode<'https://www.w3.org/ns/activitystreams#bcc'>;
    "bto": NamedNode<'https://www.w3.org/ns/activitystreams#bto'>;
    "cc": NamedNode<'https://www.w3.org/ns/activitystreams#cc'>;
    /** The content of the object. */
    "content": NamedNode<'https://www.w3.org/ns/activitystreams#content'>;
    /** Specifies the context within which an object exists or an activity was performed */
    "context": NamedNode<'https://www.w3.org/ns/activitystreams#context'>;
    "current": NamedNode<'https://www.w3.org/ns/activitystreams#current'>;
    /** Specifies the date and time the object was deleted */
    "deleted": NamedNode<'https://www.w3.org/ns/activitystreams#deleted'>;
    /** On a Profile object, describes the object described by the profile */
    "describes": NamedNode<'https://www.w3.org/ns/activitystreams#describes'>;
    "downstreamDuplicates": NamedNode<'https://www.w3.org/ns/activitystreams#downstreamDuplicates'>;
    /** The duration of the object */
    "duration": NamedNode<'https://www.w3.org/ns/activitystreams#duration'>;
    /** The ending time of the object */
    "endTime": NamedNode<'https://www.w3.org/ns/activitystreams#endTime'>;
    "first": NamedNode<'https://www.w3.org/ns/activitystreams#first'>;
    /** On a Tombstone object, describes the former type of the deleted object */
    "formerType": NamedNode<'https://www.w3.org/ns/activitystreams#formerType'>;
    "generator": NamedNode<'https://www.w3.org/ns/activitystreams#generator'>;
    /** The display height expressed as device independent pixels */
    "height": NamedNode<'https://www.w3.org/ns/activitystreams#height'>;
    /** The target URI of the Link */
    "href": NamedNode<'https://www.w3.org/ns/activitystreams#href'>;
    /** A hint about the language of the referenced resource */
    "hreflang": NamedNode<'https://www.w3.org/ns/activitystreams#hreflang'>;
    "icon": NamedNode<'https://www.w3.org/ns/activitystreams#icon'>;
    "image": NamedNode<'https://www.w3.org/ns/activitystreams#image'>;
    "inReplyTo": NamedNode<'https://www.w3.org/ns/activitystreams#inReplyTo'>;
    /** Indentifies an object used (or to be used) to complete an activity */
    "instrument": NamedNode<'https://www.w3.org/ns/activitystreams#instrument'>;
    "items": NamedNode<'https://www.w3.org/ns/activitystreams#items'>;
    "last": NamedNode<'https://www.w3.org/ns/activitystreams#last'>;
    /** The latitude */
    "latitude": NamedNode<'https://www.w3.org/ns/activitystreams#latitude'>;
    "location": NamedNode<'https://www.w3.org/ns/activitystreams#location'>;
    /** The longitude */
    "longitude": NamedNode<'https://www.w3.org/ns/activitystreams#longitude'>;
    /** The MIME Media Type */
    "mediaType": NamedNode<'https://www.w3.org/ns/activitystreams#mediaType'>;
    "name": NamedNode<'https://www.w3.org/ns/activitystreams#name'>;
    "next": NamedNode<'https://www.w3.org/ns/activitystreams#next'>;
    "object": NamedNode<'https://www.w3.org/ns/activitystreams#object'>;
    "objectType": NamedNode<'https://www.w3.org/ns/activitystreams#objectType'>;
    /** Describes a possible exclusive answer or option for a question. */
    "oneOf": NamedNode<'https://www.w3.org/ns/activitystreams#oneOf'>;
    /** For certain activities, specifies the entity from which the action is directed. */
    "origin": NamedNode<'https://www.w3.org/ns/activitystreams#origin'>;
    "partOf": NamedNode<'https://www.w3.org/ns/activitystreams#partOf'>;
    "prev": NamedNode<'https://www.w3.org/ns/activitystreams#prev'>;
    "preview": NamedNode<'https://www.w3.org/ns/activitystreams#preview'>;
    "provider": NamedNode<'https://www.w3.org/ns/activitystreams#provider'>;
    /** Specifies the date and time the object was published */
    "published": NamedNode<'https://www.w3.org/ns/activitystreams#published'>;
    /** Specifies a radius around the point established by the longitude and latitude */
    "radius": NamedNode<'https://www.w3.org/ns/activitystreams#radius'>;
    /** A numeric rating (>= 0.0, <= 5.0) for the object */
    "rating": NamedNode<'https://www.w3.org/ns/activitystreams#rating'>;
    /** The RFC 5988 or HTML5 Link Relation associated with the Link */
    "rel": NamedNode<'https://www.w3.org/ns/activitystreams#rel'>;
    /** On a Relationship object, describes the type of relationship */
    "relationship": NamedNode<'https://www.w3.org/ns/activitystreams#relationship'>;
    "replies": NamedNode<'https://www.w3.org/ns/activitystreams#replies'>;
    "result": NamedNode<'https://www.w3.org/ns/activitystreams#result'>;
    /** In a strictly ordered logical collection, specifies the index position of the first item in the items list */
    "startIndex": NamedNode<'https://www.w3.org/ns/activitystreams#startIndex'>;
    /** The starting time of the object */
    "startTime": NamedNode<'https://www.w3.org/ns/activitystreams#startTime'>;
    /** On a Relationship object, identifies the subject. e.g. when saying "John is connected to Sally", 'subject' refers to 'John' */
    "subject": NamedNode<'https://www.w3.org/ns/activitystreams#subject'>;
    /** A short summary of the object */
    "summary": NamedNode<'https://www.w3.org/ns/activitystreams#summary'>;
    "tag": NamedNode<'https://www.w3.org/ns/activitystreams#tag'>;
    "tags": NamedNode<'https://www.w3.org/ns/activitystreams#tags'>;
    "target": NamedNode<'https://www.w3.org/ns/activitystreams#target'>;
    "to": NamedNode<'https://www.w3.org/ns/activitystreams#to'>;
    /** The total number of items in a logical collection */
    "totalItems": NamedNode<'https://www.w3.org/ns/activitystreams#totalItems'>;
    /** Identifies the unit of measurement used by the radius, altitude and accuracy properties. The value can be expressed either as one of a set of predefined units or as a well-known common URI that identifies units. */
    "units": NamedNode<'https://www.w3.org/ns/activitystreams#units'>;
    /** Specifies when the object was last updated */
    "updated": NamedNode<'https://www.w3.org/ns/activitystreams#updated'>;
    "upstreamDuplicates": NamedNode<'https://www.w3.org/ns/activitystreams#upstreamDuplicates'>;
    /** Specifies a link to a specific representation of the Object */
    "url": NamedNode<'https://www.w3.org/ns/activitystreams#url'>;
    "verb": NamedNode<'https://www.w3.org/ns/activitystreams#verb'>;
    /** Specifies the preferred display width of the content, expressed in terms of device independent pixels. */
    "width": NamedNode<'https://www.w3.org/ns/activitystreams#width'>;
}

const builder = namespace("https://www.w3.org/ns/activitystreams#") as any;
export const strict = builder as NamespaceBuilder<keyof As> & As;
export const loose = builder as NamespaceBuilder & As;
