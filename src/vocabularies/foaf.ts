import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Foaf = NamespaceBuilder & {
    /*An agent (eg. person, group, software or physical artifact).*/
    "Agent": NamedNode<'http://xmlns.com/foaf/0.1/Agent'>;
    /*A document.*/
    "Document": NamedNode<'http://xmlns.com/foaf/0.1/Document'>;
    /*A class of Agents.*/
    "Group": NamedNode<'http://xmlns.com/foaf/0.1/Group'>;
    /*An image.*/
    "Image": NamedNode<'http://xmlns.com/foaf/0.1/Image'>;
    /*A foaf:LabelProperty is any RDF property with texual values that serve as labels.*/
    "LabelProperty": NamedNode<'http://xmlns.com/foaf/0.1/LabelProperty'>;
    /*An online account.*/
    "OnlineAccount": NamedNode<'http://xmlns.com/foaf/0.1/OnlineAccount'>;
    /*An online chat account.*/
    "OnlineChatAccount": NamedNode<'http://xmlns.com/foaf/0.1/OnlineChatAccount'>;
    /*An online e-commerce account.*/
    "OnlineEcommerceAccount": NamedNode<'http://xmlns.com/foaf/0.1/OnlineEcommerceAccount'>;
    /*An online gaming account.*/
    "OnlineGamingAccount": NamedNode<'http://xmlns.com/foaf/0.1/OnlineGamingAccount'>;
    /*An organization.*/
    "Organization": NamedNode<'http://xmlns.com/foaf/0.1/Organization'>;
    /*A person.*/
    "Person": NamedNode<'http://xmlns.com/foaf/0.1/Person'>;
    /*A personal profile RDF document.*/
    "PersonalProfileDocument": NamedNode<'http://xmlns.com/foaf/0.1/PersonalProfileDocument'>;
    /*A project (a collective endeavour of some kind).*/
    "Project": NamedNode<'http://xmlns.com/foaf/0.1/Project'>;
    /*Indicates an account held by this agent.*/
    "account": NamedNode<'http://xmlns.com/foaf/0.1/account'>;
    /*Indicates the name (identifier) associated with this online account.*/
    "accountName": NamedNode<'http://xmlns.com/foaf/0.1/accountName'>;
    /*Indicates a homepage of the service provide for this online account.*/
    "accountServiceHomepage": NamedNode<'http://xmlns.com/foaf/0.1/accountServiceHomepage'>;
    /*The age in years of some agent.*/
    "age": NamedNode<'http://xmlns.com/foaf/0.1/age'>;
    /*An AIM chat ID*/
    "aimChatID": NamedNode<'http://xmlns.com/foaf/0.1/aimChatID'>;
    /*A location that something is based near, for some broadly human notion of near.*/
    "based_near": NamedNode<'http://xmlns.com/foaf/0.1/based_near'>;
    /*The birthday of this Agent, represented in mm-dd string form, eg. '12-31'.*/
    "birthday": NamedNode<'http://xmlns.com/foaf/0.1/birthday'>;
    /*A current project this person works on.*/
    "currentProject": NamedNode<'http://xmlns.com/foaf/0.1/currentProject'>;
    /*A depiction of some thing.*/
    "depiction": NamedNode<'http://xmlns.com/foaf/0.1/depiction'>;
    /*A thing depicted in this representation.*/
    "depicts": NamedNode<'http://xmlns.com/foaf/0.1/depicts'>;
    /*A checksum for the DNA of some thing. Joke.*/
    "dnaChecksum": NamedNode<'http://xmlns.com/foaf/0.1/dnaChecksum'>;
    /*The family name of some person.*/
    "familyName": NamedNode<'http://xmlns.com/foaf/0.1/familyName'>;
    /*The family name of some person.*/
    "family_name": NamedNode<'http://xmlns.com/foaf/0.1/family_name'>;
    /*The first name of a person.*/
    "firstName": NamedNode<'http://xmlns.com/foaf/0.1/firstName'>;
    /*The underlying or 'focal' entity associated with some SKOS-described concept.*/
    "focus": NamedNode<'http://xmlns.com/foaf/0.1/focus'>;
    /*An organization funding a project or person.*/
    "fundedBy": NamedNode<'http://xmlns.com/foaf/0.1/fundedBy'>;
    /*A textual geekcode for this person, see http://www.geekcode.com/geek.html*/
    "geekcode": NamedNode<'http://xmlns.com/foaf/0.1/geekcode'>;
    /*The gender of this Agent (typically but not necessarily 'male' or 'female').*/
    "gender": NamedNode<'http://xmlns.com/foaf/0.1/gender'>;
    /*The given name of some person.*/
    "givenName": NamedNode<'http://xmlns.com/foaf/0.1/givenName'>;
    /*The given name of some person.*/
    "givenname": NamedNode<'http://xmlns.com/foaf/0.1/givenname'>;
    /*Indicates an account held by this agent.*/
    "holdsAccount": NamedNode<'http://xmlns.com/foaf/0.1/holdsAccount'>;
    /*A homepage for some thing.*/
    "homepage": NamedNode<'http://xmlns.com/foaf/0.1/homepage'>;
    /*An ICQ chat ID*/
    "icqChatID": NamedNode<'http://xmlns.com/foaf/0.1/icqChatID'>;
    /*An image that can be used to represent some thing (ie. those depictions which are particularly representative of something, eg. one's photo on a homepage).*/
    "img": NamedNode<'http://xmlns.com/foaf/0.1/img'>;
    /*A page about a topic of interest to this person.*/
    "interest": NamedNode<'http://xmlns.com/foaf/0.1/interest'>;
    /*A document that this thing is the primary topic of.*/
    "isPrimaryTopicOf": NamedNode<'http://xmlns.com/foaf/0.1/isPrimaryTopicOf'>;
    /*A jabber ID for something.*/
    "jabberID": NamedNode<'http://xmlns.com/foaf/0.1/jabberID'>;
    /*A person known by this person (indicating some level of reciprocated interaction between the parties).*/
    "knows": NamedNode<'http://xmlns.com/foaf/0.1/knows'>;
    /*The last name of a person.*/
    "lastName": NamedNode<'http://xmlns.com/foaf/0.1/lastName'>;
    /*A logo representing some thing.*/
    "logo": NamedNode<'http://xmlns.com/foaf/0.1/logo'>;
    /*Something that was made by this agent.*/
    "made": NamedNode<'http://xmlns.com/foaf/0.1/made'>;
    /*An agent that made this thing.*/
    "maker": NamedNode<'http://xmlns.com/foaf/0.1/maker'>;
    /*A personal mailbox, ie. an Internet mailbox associated with exactly one owner, the first owner of this mailbox. This is a 'static inverse functional property', in that there is (across time and change) at most one individual that ever has any particular value for foaf:mbox.*/
    "mbox": NamedNode<'http://xmlns.com/foaf/0.1/mbox'>;
    /*The sha1sum of the URI of an Internet mailbox associated with exactly one owner, the first owner of the mailbox.*/
    "mbox_sha1sum": NamedNode<'http://xmlns.com/foaf/0.1/mbox_sha1sum'>;
    /*Indicates a member of a Group*/
    "member": NamedNode<'http://xmlns.com/foaf/0.1/member'>;
    /*Indicates the class of individuals that are a member of a Group*/
    "membershipClass": NamedNode<'http://xmlns.com/foaf/0.1/membershipClass'>;
    /*An MSN chat ID*/
    "msnChatID": NamedNode<'http://xmlns.com/foaf/0.1/msnChatID'>;
    /*A Myers Briggs (MBTI) personality classification.*/
    "myersBriggs": NamedNode<'http://xmlns.com/foaf/0.1/myersBriggs'>;
    /*A name for some thing.*/
    "name": NamedNode<'http://xmlns.com/foaf/0.1/name'>;
    /*A short informal nickname characterising an agent (includes login identifiers, IRC and other chat nicknames).*/
    "nick": NamedNode<'http://xmlns.com/foaf/0.1/nick'>;
    /*An OpenID for an Agent.*/
    "openid": NamedNode<'http://xmlns.com/foaf/0.1/openid'>;
    /*A page or document about this thing.*/
    "page": NamedNode<'http://xmlns.com/foaf/0.1/page'>;
    /*A project this person has previously worked on.*/
    "pastProject": NamedNode<'http://xmlns.com/foaf/0.1/pastProject'>;
    /*A phone, specified using fully qualified tel: URI scheme (refs: http://www.w3.org/Addressing/schemes.html#tel).*/
    "phone": NamedNode<'http://xmlns.com/foaf/0.1/phone'>;
    /*A .plan comment, in the tradition of finger and '.plan' files.*/
    "plan": NamedNode<'http://xmlns.com/foaf/0.1/plan'>;
    /*The primary topic of some page or document.*/
    "primaryTopic": NamedNode<'http://xmlns.com/foaf/0.1/primaryTopic'>;
    /*A link to the publications of this person.*/
    "publications": NamedNode<'http://xmlns.com/foaf/0.1/publications'>;
    /*A homepage of a school attended by the person.*/
    "schoolHomepage": NamedNode<'http://xmlns.com/foaf/0.1/schoolHomepage'>;
    /*A sha1sum hash, in hex.*/
    "sha1": NamedNode<'http://xmlns.com/foaf/0.1/sha1'>;
    /*A Skype ID*/
    "skypeID": NamedNode<'http://xmlns.com/foaf/0.1/skypeID'>;
    /*A string expressing what the user is happy for the general public (normally) to know about their current activity.*/
    "status": NamedNode<'http://xmlns.com/foaf/0.1/status'>;
    /*The surname of some person.*/
    "surname": NamedNode<'http://xmlns.com/foaf/0.1/surname'>;
    /*A theme.*/
    "theme": NamedNode<'http://xmlns.com/foaf/0.1/theme'>;
    /*A derived thumbnail image.*/
    "thumbnail": NamedNode<'http://xmlns.com/foaf/0.1/thumbnail'>;
    /*A tipjar document for this agent, describing means for payment and reward.*/
    "tipjar": NamedNode<'http://xmlns.com/foaf/0.1/tipjar'>;
    /*Title (Mr, Mrs, Ms, Dr. etc)*/
    "title": NamedNode<'http://xmlns.com/foaf/0.1/title'>;
    /*A topic of some page or document.*/
    "topic": NamedNode<'http://xmlns.com/foaf/0.1/topic'>;
    /*A thing of interest to this person.*/
    "topic_interest": NamedNode<'http://xmlns.com/foaf/0.1/topic_interest'>;
    /*A weblog of some thing (whether person, group, company etc.).*/
    "weblog": NamedNode<'http://xmlns.com/foaf/0.1/weblog'>;
    /*A work info homepage of some person; a page about their work for some organization.*/
    "workInfoHomepage": NamedNode<'http://xmlns.com/foaf/0.1/workInfoHomepage'>;
    /*A workplace homepage of some person; the homepage of an organization they work for.*/
    "workplaceHomepage": NamedNode<'http://xmlns.com/foaf/0.1/workplaceHomepage'>;
    /*A Yahoo chat ID*/
    "yahooChatID": NamedNode<'http://xmlns.com/foaf/0.1/yahooChatID'>;
};
export const foaf: Foaf = (namespace("http://xmlns.com/foaf/0.1/") as any);
