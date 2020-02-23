import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Foaf = NamespaceBuilder & {
    /*An agent (eg. person, group, software or physical artifact).*/
    "Agent": NamedNode;
    /*A document.*/
    "Document": NamedNode;
    /*A class of Agents.*/
    "Group": NamedNode;
    /*An image.*/
    "Image": NamedNode;
    /*A foaf:LabelProperty is any RDF property with texual values that serve as labels.*/
    "LabelProperty": NamedNode;
    /*An online account.*/
    "OnlineAccount": NamedNode;
    /*An online chat account.*/
    "OnlineChatAccount": NamedNode;
    /*An online e-commerce account.*/
    "OnlineEcommerceAccount": NamedNode;
    /*An online gaming account.*/
    "OnlineGamingAccount": NamedNode;
    /*An organization.*/
    "Organization": NamedNode;
    /*A person.*/
    "Person": NamedNode;
    /*A personal profile RDF document.*/
    "PersonalProfileDocument": NamedNode;
    /*A project (a collective endeavour of some kind).*/
    "Project": NamedNode;
    /*Indicates an account held by this agent.*/
    "account": NamedNode;
    /*Indicates the name (identifier) associated with this online account.*/
    "accountName": NamedNode;
    /*Indicates a homepage of the service provide for this online account.*/
    "accountServiceHomepage": NamedNode;
    /*The age in years of some agent.*/
    "age": NamedNode;
    /*An AIM chat ID*/
    "aimChatID": NamedNode;
    /*A location that something is based near, for some broadly human notion of near.*/
    "based_near": NamedNode;
    /*The birthday of this Agent, represented in mm-dd string form, eg. '12-31'.*/
    "birthday": NamedNode;
    /*A current project this person works on.*/
    "currentProject": NamedNode;
    /*A depiction of some thing.*/
    "depiction": NamedNode;
    /*A thing depicted in this representation.*/
    "depicts": NamedNode;
    /*A checksum for the DNA of some thing. Joke.*/
    "dnaChecksum": NamedNode;
    /*The family name of some person.*/
    "familyName": NamedNode;
    /*The family name of some person.*/
    "family_name": NamedNode;
    /*The first name of a person.*/
    "firstName": NamedNode;
    /*The underlying or 'focal' entity associated with some SKOS-described concept.*/
    "focus": NamedNode;
    /*An organization funding a project or person.*/
    "fundedBy": NamedNode;
    /*A textual geekcode for this person, see http://www.geekcode.com/geek.html*/
    "geekcode": NamedNode;
    /*The gender of this Agent (typically but not necessarily 'male' or 'female').*/
    "gender": NamedNode;
    /*The given name of some person.*/
    "givenName": NamedNode;
    /*The given name of some person.*/
    "givenname": NamedNode;
    /*Indicates an account held by this agent.*/
    "holdsAccount": NamedNode;
    /*A homepage for some thing.*/
    "homepage": NamedNode;
    /*An ICQ chat ID*/
    "icqChatID": NamedNode;
    /*An image that can be used to represent some thing (ie. those depictions which are particularly representative of something, eg. one's photo on a homepage).*/
    "img": NamedNode;
    /*A page about a topic of interest to this person.*/
    "interest": NamedNode;
    /*A document that this thing is the primary topic of.*/
    "isPrimaryTopicOf": NamedNode;
    /*A jabber ID for something.*/
    "jabberID": NamedNode;
    /*A person known by this person (indicating some level of reciprocated interaction between the parties).*/
    "knows": NamedNode;
    /*The last name of a person.*/
    "lastName": NamedNode;
    /*A logo representing some thing.*/
    "logo": NamedNode;
    /*Something that was made by this agent.*/
    "made": NamedNode;
    /*An agent that made this thing.*/
    "maker": NamedNode;
    /*A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox. This is a 'static inverse functional property', in that there is (across time and change) at most one individual that ever has any particular value for foaf:mbox.*/
    "mbox": NamedNode;
    /*The sha1sum of the URI of an Internet mailbox associated with exactly one owner, the first owner of the mailbox.*/
    "mbox_sha1sum": NamedNode;
    /*Indicates a member of a Group*/
    "member": NamedNode;
    /*Indicates the class of individuals that are a member of a Group*/
    "membershipClass": NamedNode;
    /*An MSN chat ID*/
    "msnChatID": NamedNode;
    /*A Myers Briggs (MBTI) personality classification.*/
    "myersBriggs": NamedNode;
    /*A name for some thing.*/
    "name": NamedNode;
    /*A short informal nickname characterising an agent (includes login identifiers, IRC and other chat nicknames).*/
    "nick": NamedNode;
    /*An OpenID for an Agent.*/
    "openid": NamedNode;
    /*A page or document about this thing.*/
    "page": NamedNode;
    /*A project this person has previously worked on.*/
    "pastProject": NamedNode;
    /*A phone, specified using fully qualified tel: URI scheme (refs: http://www.w3.org/Addressing/schemes.html#tel).*/
    "phone": NamedNode;
    /*A .plan comment, in the tradition of finger and '.plan' files.*/
    "plan": NamedNode;
    /*The primary topic of some page or document.*/
    "primaryTopic": NamedNode;
    /*A link to the publications of this person.*/
    "publications": NamedNode;
    /*A homepage of a school attended by the person.*/
    "schoolHomepage": NamedNode;
    /*A sha1sum hash, in hex.*/
    "sha1": NamedNode;
    /*A Skype ID*/
    "skypeID": NamedNode;
    /*A string expressing what the user is happy for the general public (normally) to know about their current activity.*/
    "status": NamedNode;
    /*The surname of some person.*/
    "surname": NamedNode;
    /*A theme.*/
    "theme": NamedNode;
    /*A derived thumbnail image.*/
    "thumbnail": NamedNode;
    /*A tipjar document for this agent, describing means for payment and reward.*/
    "tipjar": NamedNode;
    /*Title (Mr, Mrs, Ms, Dr. etc)*/
    "title": NamedNode;
    /*A topic of some page or document.*/
    "topic": NamedNode;
    /*A thing of interest to this person.*/
    "topic_interest": NamedNode;
    /*A weblog of some thing (whether person, group, company etc.).*/
    "weblog": NamedNode;
    /*A work info homepage of some person; a page about their work for some organization.*/
    "workInfoHomepage": NamedNode;
    /*A workplace homepage of some person; the homepage of an organization they work for.*/
    "workplaceHomepage": NamedNode;
    /*A Yahoo chat ID*/
    "yahooChatID": NamedNode;
};
export const foaf: Foaf = (namespace(prefixes.foaf) as any);
