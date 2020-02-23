import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type As = NamespaceBuilder & {
    /*Actor accepts the Object*/
    "Accept": NamedNode;
    /*An Object representing some form of Action that has been taken*/
    "Activity": NamedNode;
    /*To Add an Object or Link to Something*/
    "Add": NamedNode;
    /*Actor announces the object to the target*/
    "Announce": NamedNode;
    /*Represents a software application of any sort*/
    "Application": NamedNode;
    /*To Arrive Somewhere (can be used, for instance, to indicate that a particular entity is currently located somewhere, e.g. a "check-in")*/
    "Arrive": NamedNode;
    /*A written work. Typically several paragraphs long. For example, a blog post or a news article.*/
    "Article": NamedNode;
    /*An audio file*/
    "Audio": NamedNode;
    "Block": NamedNode;
    /*An ordered or unordered collection of Objects or Links*/
    "Collection": NamedNode;
    /*A subset of items from a Collection*/
    "CollectionPage": NamedNode;
    /*To Create Something*/
    "Create": NamedNode;
    /*To Delete Something*/
    "Delete": NamedNode;
    /*The actor dislikes the object*/
    "Dislike": NamedNode;
    /*Represents a digital document/file of any sort*/
    "Document": NamedNode;
    /*An Event of any kind*/
    "Event": NamedNode;
    /*To flag something (e.g. flag as inappropriate, flag as spam, etc)*/
    "Flag": NamedNode;
    /*To Express Interest in Something*/
    "Follow": NamedNode;
    /*A Group of any kind.*/
    "Group": NamedNode;
    /*Actor is ignoring the Object*/
    "Ignore": NamedNode;
    /*An Image file*/
    "Image": NamedNode;
    /*An Activity that has no direct object*/
    "IntransitiveActivity": NamedNode;
    /*To invite someone or something to something*/
    "Invite": NamedNode;
    /*To Join Something*/
    "Join": NamedNode;
    /*To Leave Something*/
    "Leave": NamedNode;
    /*To Like Something*/
    "Like": NamedNode;
    /*Represents a qualified reference to another resource. Patterned after the RFC5988 Web Linking Model*/
    "Link": NamedNode;
    /*The actor listened to the object*/
    "Listen": NamedNode;
    /*A specialized Link that represents an @mention*/
    "Mention": NamedNode;
    /*The actor is moving the object. The target specifies where the object is moving to. The origin specifies where the object is moving from.*/
    "Move": NamedNode;
    /*A Short note, typically less than a single paragraph. A "tweet" is an example, or a "status update"*/
    "Note": NamedNode;
    "Object": NamedNode;
    /*To Offer something to someone or something*/
    "Offer": NamedNode;
    /*A variation of Collection in which items are strictly ordered*/
    "OrderedCollection": NamedNode;
    /*An ordered subset of items from an OrderedCollection*/
    "OrderedCollectionPage": NamedNode;
    /*A rdf:List variant for Objects and Links*/
    "OrderedItems": NamedNode;
    /*An Organization*/
    "Organization": NamedNode;
    /*A Web Page*/
    "Page": NamedNode;
    /*A Person*/
    "Person": NamedNode;
    /*A physical or logical location*/
    "Place": NamedNode;
    /*A Profile Document*/
    "Profile": NamedNode;
    /*A question of any sort.*/
    "Question": NamedNode;
    /*The actor read the object*/
    "Read": NamedNode;
    /*Actor rejects the Object*/
    "Reject": NamedNode;
    /*Represents a Social Graph relationship between two Individuals (indicated by the 'a' and 'b' properties)*/
    "Relationship": NamedNode;
    /*To Remove Something*/
    "Remove": NamedNode;
    /*A service provided by some entity*/
    "Service": NamedNode;
    /*Actor tentatively accepts the Object*/
    "TentativeAccept": NamedNode;
    /*Actor tentatively rejects the object*/
    "TentativeReject": NamedNode;
    /*A placeholder for a deleted object*/
    "Tombstone": NamedNode;
    /*The actor is traveling to the target. The origin specifies where the actor is traveling from.*/
    "Travel": NamedNode;
    /*To Undo Something. This would typically be used to indicate that a previous Activity has been undone.*/
    "Undo": NamedNode;
    /*To Update/Modify Something*/
    "Update": NamedNode;
    /*A Video document of any kind.*/
    "Video": NamedNode;
    /*The actor viewed the object*/
    "View": NamedNode;
    /*Specifies the accuracy around the point established by the longitude and latitude*/
    "accuracy": NamedNode;
    /*Subproperty of as:attributedTo that identifies the primary actor*/
    "actor": NamedNode;
    /*The altitude of a place*/
    "altitude": NamedNode;
    /*Describes a possible inclusive answer or option for a question.*/
    "anyOf": NamedNode;
    "attachment": NamedNode;
    "attachments": NamedNode;
    /*Identifies an entity to which an object is attributed*/
    "attributedTo": NamedNode;
    "audience": NamedNode;
    /*Identifies the author of an object. Deprecated. Use as:attributedTo instead*/
    "author": NamedNode;
    "bcc": NamedNode;
    "bto": NamedNode;
    "cc": NamedNode;
    /*The content of the object.*/
    "content": NamedNode;
    /*Specifies the context within which an object exists or an activity was performed*/
    "context": NamedNode;
    "current": NamedNode;
    /*Specifies the date and time the object was deleted*/
    "deleted": NamedNode;
    /*On a Profile object, describes the object described by the profile*/
    "describes": NamedNode;
    "downstreamDuplicates": NamedNode;
    /*The duration of the object*/
    "duration": NamedNode;
    /*The ending time of the object*/
    "endTime": NamedNode;
    "first": NamedNode;
    /*On a Tombstone object, describes the former type of the deleted object*/
    "formerType": NamedNode;
    "generator": NamedNode;
    /*The display height expressed as device independent pixels*/
    "height": NamedNode;
    /*The target URI of the Link*/
    "href": NamedNode;
    /*A hint about the language of the referenced resource*/
    "hreflang": NamedNode;
    "icon": NamedNode;
    "id": NamedNode;
    "image": NamedNode;
    "inReplyTo": NamedNode;
    /*Indentifies an object used (or to be used) to complete an activity*/
    "instrument": NamedNode;
    "items": NamedNode;
    "last": NamedNode;
    /*The latitude*/
    "latitude": NamedNode;
    "location": NamedNode;
    /*The longitude*/
    "longitude": NamedNode;
    /*The MIME Media Type*/
    "mediaType": NamedNode;
    "name": NamedNode;
    "next": NamedNode;
    "object": NamedNode;
    "objectType": NamedNode;
    /*Describes a possible exclusive answer or option for a question.*/
    "oneOf": NamedNode;
    /*For certain activities, specifies the entity from which the action is directed.*/
    "origin": NamedNode;
    "partOf": NamedNode;
    "prev": NamedNode;
    "preview": NamedNode;
    "provider": NamedNode;
    /*Specifies the date and time the object was published*/
    "published": NamedNode;
    /*Specifies a radius around the point established by the longitude and latitude*/
    "radius": NamedNode;
    /*A numeric rating (>= 0.0, <= 5.0) for the object*/
    "rating": NamedNode;
    /*The RFC 5988 or HTML5 Link Relation associated with the Link*/
    "rel": NamedNode;
    /*On a Relationship object, describes the type of relationship*/
    "relationship": NamedNode;
    "replies": NamedNode;
    "result": NamedNode;
    /*In a strictly ordered logical collection, specifies the index position of the first item in the items list*/
    "startIndex": NamedNode;
    /*The starting time of the object*/
    "startTime": NamedNode;
    /*On a Relationship object, identifies the subject. e.g. when saying "John is connected to Sally", 'subject' refers to 'John'*/
    "subject": NamedNode;
    /*A short summary of the object*/
    "summary": NamedNode;
    "tag": NamedNode;
    "tags": NamedNode;
    "target": NamedNode;
    "to": NamedNode;
    /*The total number of items in a logical collection*/
    "totalItems": NamedNode;
    /*Identifies the unit of measurement used by the radius, altitude and accuracy properties. The value can be expressed either as one of a set of predefined units or as a well-known common URI that identifies units.*/
    "units": NamedNode;
    /*Specifies when the object was last updated*/
    "updated": NamedNode;
    "upstreamDuplicates": NamedNode;
    /*Specifies a link to a specific representation of the Object*/
    "url": NamedNode;
    "verb": NamedNode;
    /*Specifies the preferred display width of the content, expressed in terms of device independent pixels.*/
    "width": NamedNode;
};
export const as: As = (namespace(prefixes.as) as any);
