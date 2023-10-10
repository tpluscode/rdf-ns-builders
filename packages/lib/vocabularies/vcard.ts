import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Vcard {
    '': NamedNode<'http://www.w3.org/2006/vcard/ns#'>;
    "Acquaintance": NamedNode<'http://www.w3.org/2006/vcard/ns#Acquaintance'>;
    /** Used for relation type codes. The URI of the relation type code must be used as the value for the Relation Type. */
    "RelatedType": NamedNode<'http://www.w3.org/2006/vcard/ns#RelatedType'>;
    /** To specify the components of the delivery address for the  object */
    "Address": NamedNode<'http://www.w3.org/2006/vcard/ns#Address'>;
    "Agent": NamedNode<'http://www.w3.org/2006/vcard/ns#Agent'>;
    /** This class is deprecated */
    "BBS": NamedNode<'http://www.w3.org/2006/vcard/ns#BBS'>;
    /** Used for telephone type codes. The URI of the telephone type code must be used as the value for the Telephone Type. */
    "TelephoneType": NamedNode<'http://www.w3.org/2006/vcard/ns#TelephoneType'>;
    /** This class is deprecated */
    "Car": NamedNode<'http://www.w3.org/2006/vcard/ns#Car'>;
    /** Also called mobile telephone */
    "Cell": NamedNode<'http://www.w3.org/2006/vcard/ns#Cell'>;
    "Child": NamedNode<'http://www.w3.org/2006/vcard/ns#Child'>;
    "Colleague": NamedNode<'http://www.w3.org/2006/vcard/ns#Colleague'>;
    "Contact": NamedNode<'http://www.w3.org/2006/vcard/ns#Contact'>;
    "Coresident": NamedNode<'http://www.w3.org/2006/vcard/ns#Coresident'>;
    "Coworker": NamedNode<'http://www.w3.org/2006/vcard/ns#Coworker'>;
    "Crush": NamedNode<'http://www.w3.org/2006/vcard/ns#Crush'>;
    "Date": NamedNode<'http://www.w3.org/2006/vcard/ns#Date'>;
    /** This class is deprecated */
    "Dom": NamedNode<'http://www.w3.org/2006/vcard/ns#Dom'>;
    /** Used for type codes. The URI of the type code must be used as the value for Type. */
    "Type": NamedNode<'http://www.w3.org/2006/vcard/ns#Type'>;
    /** To specify the electronic mail address for communication with the object the vCard represents. Use the hasEmail object property. */
    "Email": NamedNode<'http://www.w3.org/2006/vcard/ns#Email'>;
    "Emergency": NamedNode<'http://www.w3.org/2006/vcard/ns#Emergency'>;
    "Fax": NamedNode<'http://www.w3.org/2006/vcard/ns#Fax'>;
    "Female": NamedNode<'http://www.w3.org/2006/vcard/ns#Female'>;
    /** Used for gender codes. The URI of the gender code must be used as the value for Gender. */
    "Gender": NamedNode<'http://www.w3.org/2006/vcard/ns#Gender'>;
    "Friend": NamedNode<'http://www.w3.org/2006/vcard/ns#Friend'>;
    /** Object representing a group of persons or entities.  A group object will usually contain hasMember properties to specify the members of the group. */
    "Group": NamedNode<'http://www.w3.org/2006/vcard/ns#Group'>;
    /** The parent class for all objects */
    "Kind": NamedNode<'http://www.w3.org/2006/vcard/ns#Kind'>;
    /** An object representing a single person or entity */
    "Individual": NamedNode<'http://www.w3.org/2006/vcard/ns#Individual'>;
    /** An object representing a named geographical place */
    "Location": NamedNode<'http://www.w3.org/2006/vcard/ns#Location'>;
    /**
     * An object representing an organization.  An organization is a single entity, and might represent a business or government, a department or division within a business or government, a club, an association, or the like.
     *
     */
    "Organization": NamedNode<'http://www.w3.org/2006/vcard/ns#Organization'>;
    /** This implies that the property is related to an individual's personal life */
    "Home": NamedNode<'http://www.w3.org/2006/vcard/ns#Home'>;
    /** This class is deprecated */
    "ISDN": NamedNode<'http://www.w3.org/2006/vcard/ns#ISDN'>;
    /** This class is deprecated */
    "Internet": NamedNode<'http://www.w3.org/2006/vcard/ns#Internet'>;
    /** This class is deprecated */
    "Intl": NamedNode<'http://www.w3.org/2006/vcard/ns#Intl'>;
    "Kin": NamedNode<'http://www.w3.org/2006/vcard/ns#Kin'>;
    /** The vCard class is  equivalent to the new Kind class, which is the parent for the four explicit types of vCards (Individual, Organization, Location, Group) */
    "VCard": NamedNode<'http://www.w3.org/2006/vcard/ns#VCard'>;
    /** This class is deprecated */
    "Label": NamedNode<'http://www.w3.org/2006/vcard/ns#Label'>;
    "Male": NamedNode<'http://www.w3.org/2006/vcard/ns#Male'>;
    "Me": NamedNode<'http://www.w3.org/2006/vcard/ns#Me'>;
    "Met": NamedNode<'http://www.w3.org/2006/vcard/ns#Met'>;
    /** This class is deprecated */
    "Modem": NamedNode<'http://www.w3.org/2006/vcard/ns#Modem'>;
    /** This class is deprecated */
    "Msg": NamedNode<'http://www.w3.org/2006/vcard/ns#Msg'>;
    "Muse": NamedNode<'http://www.w3.org/2006/vcard/ns#Muse'>;
    /** To specify the components of the name of the object */
    "Name": NamedNode<'http://www.w3.org/2006/vcard/ns#Name'>;
    "Neighbor": NamedNode<'http://www.w3.org/2006/vcard/ns#Neighbor'>;
    "None": NamedNode<'http://www.w3.org/2006/vcard/ns#None'>;
    "Other": NamedNode<'http://www.w3.org/2006/vcard/ns#Other'>;
    /** This class is deprecated */
    "PCS": NamedNode<'http://www.w3.org/2006/vcard/ns#PCS'>;
    "Pager": NamedNode<'http://www.w3.org/2006/vcard/ns#Pager'>;
    /** This class is deprecated */
    "Parcel": NamedNode<'http://www.w3.org/2006/vcard/ns#Parcel'>;
    "Parent": NamedNode<'http://www.w3.org/2006/vcard/ns#Parent'>;
    /** This class is deprecated */
    "Postal": NamedNode<'http://www.w3.org/2006/vcard/ns#Postal'>;
    /** This class is deprecated */
    "Pref": NamedNode<'http://www.w3.org/2006/vcard/ns#Pref'>;
    "Sibling": NamedNode<'http://www.w3.org/2006/vcard/ns#Sibling'>;
    "Spouse": NamedNode<'http://www.w3.org/2006/vcard/ns#Spouse'>;
    "Sweetheart": NamedNode<'http://www.w3.org/2006/vcard/ns#Sweetheart'>;
    /** This class is deprecated. Use the hasTelephone object property. */
    "Tel": NamedNode<'http://www.w3.org/2006/vcard/ns#Tel'>;
    /** Also called sms telephone */
    "Text": NamedNode<'http://www.w3.org/2006/vcard/ns#Text'>;
    "TextPhone": NamedNode<'http://www.w3.org/2006/vcard/ns#TextPhone'>;
    "Unknown": NamedNode<'http://www.w3.org/2006/vcard/ns#Unknown'>;
    "Video": NamedNode<'http://www.w3.org/2006/vcard/ns#Video'>;
    "Voice": NamedNode<'http://www.w3.org/2006/vcard/ns#Voice'>;
    /** This implies that the property is related to an individual's work place */
    "Work": NamedNode<'http://www.w3.org/2006/vcard/ns#Work'>;
    /** This class is deprecated */
    "X400": NamedNode<'http://www.w3.org/2006/vcard/ns#X400'>;
    /** The additional name associated with the object */
    "additional-name": NamedNode<'http://www.w3.org/2006/vcard/ns#additional-name'>;
    /** This object property has been mapped */
    "adr": NamedNode<'http://www.w3.org/2006/vcard/ns#adr'>;
    /** To specify the components of the delivery address for the object */
    "hasAddress": NamedNode<'http://www.w3.org/2006/vcard/ns#hasAddress'>;
    /** This object property has been deprecated */
    "agent": NamedNode<'http://www.w3.org/2006/vcard/ns#agent'>;
    /** The date of marriage, or equivalent, of the object */
    "anniversary": NamedNode<'http://www.w3.org/2006/vcard/ns#anniversary'>;
    /** To specify the birth date of the object */
    "bday": NamedNode<'http://www.w3.org/2006/vcard/ns#bday'>;
    /** The category information about the object, also known as tags */
    "category": NamedNode<'http://www.w3.org/2006/vcard/ns#category'>;
    /** This data property has been deprecated */
    "class": NamedNode<'http://www.w3.org/2006/vcard/ns#class'>;
    /** The country name associated with the address of the object */
    "country-name": NamedNode<'http://www.w3.org/2006/vcard/ns#country-name'>;
    /** This object property has been mapped */
    "email": NamedNode<'http://www.w3.org/2006/vcard/ns#email'>;
    /** To specify the electronic mail address for communication with the object */
    "hasEmail": NamedNode<'http://www.w3.org/2006/vcard/ns#hasEmail'>;
    /** This data property has been deprecated */
    "extended-address": NamedNode<'http://www.w3.org/2006/vcard/ns#extended-address'>;
    /** The family name associated with the object */
    "family-name": NamedNode<'http://www.w3.org/2006/vcard/ns#family-name'>;
    /** The formatted text corresponding to the name of the object */
    "fn": NamedNode<'http://www.w3.org/2006/vcard/ns#fn'>;
    /** This object property has been mapped */
    "geo": NamedNode<'http://www.w3.org/2006/vcard/ns#geo'>;
    /** To specify information related to the global positioning of the object. May also be used as a property parameter. */
    "hasGeo": NamedNode<'http://www.w3.org/2006/vcard/ns#hasGeo'>;
    /** The given name associated with the object */
    "given-name": NamedNode<'http://www.w3.org/2006/vcard/ns#given-name'>;
    /** Used to support property parameters for the additional name data property */
    "hasAdditionalName": NamedNode<'http://www.w3.org/2006/vcard/ns#hasAdditionalName'>;
    /** To specify the busy time associated with the object. (Was called FBURL in RFC6350) */
    "hasCalendarBusy": NamedNode<'http://www.w3.org/2006/vcard/ns#hasCalendarBusy'>;
    /** To specify the calendar associated with the object. (Was called CALURI in RFC6350) */
    "hasCalendarLink": NamedNode<'http://www.w3.org/2006/vcard/ns#hasCalendarLink'>;
    /** To specify the calendar user address to which a scheduling request be sent for the object. (Was called CALADRURI in RFC6350) */
    "hasCalendarRequest": NamedNode<'http://www.w3.org/2006/vcard/ns#hasCalendarRequest'>;
    /** Used to support property parameters for the category data property */
    "hasCategory": NamedNode<'http://www.w3.org/2006/vcard/ns#hasCategory'>;
    /** Used to support property parameters for the country name data property */
    "hasCountryName": NamedNode<'http://www.w3.org/2006/vcard/ns#hasCountryName'>;
    /** Used to support property parameters for the formatted name data property */
    "hasFN": NamedNode<'http://www.w3.org/2006/vcard/ns#hasFN'>;
    /** Used to support property parameters for the family name data property */
    "hasFamilyName": NamedNode<'http://www.w3.org/2006/vcard/ns#hasFamilyName'>;
    /** To specify  the sex or gender identity of the object. URIs are recommended to enable interoperable sex and gender codes to be used. */
    "hasGender": NamedNode<'http://www.w3.org/2006/vcard/ns#hasGender'>;
    /** Used to support property parameters for the given name data property */
    "hasGivenName": NamedNode<'http://www.w3.org/2006/vcard/ns#hasGivenName'>;
    /** Used to support property parameters for the honorific prefix data property */
    "hasHonorificPrefix": NamedNode<'http://www.w3.org/2006/vcard/ns#hasHonorificPrefix'>;
    /** Used to support property parameters for the honorific suffix data property */
    "hasHonorificSuffix": NamedNode<'http://www.w3.org/2006/vcard/ns#hasHonorificSuffix'>;
    /** To specify the instant messaging and presence protocol communications with the object. (Was called IMPP in RFC6350) */
    "hasInstantMessage": NamedNode<'http://www.w3.org/2006/vcard/ns#hasInstantMessage'>;
    /** To specify a public key or authentication certificate associated with the object */
    "hasKey": NamedNode<'http://www.w3.org/2006/vcard/ns#hasKey'>;
    /** This object property has been mapped */
    "key": NamedNode<'http://www.w3.org/2006/vcard/ns#key'>;
    /** Used to support property parameters for the language data property */
    "hasLanguage": NamedNode<'http://www.w3.org/2006/vcard/ns#hasLanguage'>;
    /** Used to support property parameters for the locality data property */
    "hasLocality": NamedNode<'http://www.w3.org/2006/vcard/ns#hasLocality'>;
    /** To specify a graphic image of a logo associated with the object */
    "hasLogo": NamedNode<'http://www.w3.org/2006/vcard/ns#hasLogo'>;
    /** This object property has been mapped */
    "logo": NamedNode<'http://www.w3.org/2006/vcard/ns#logo'>;
    /** To include a member in the group this object represents. (This property can only be used by Group individuals) */
    "hasMember": NamedNode<'http://www.w3.org/2006/vcard/ns#hasMember'>;
    /** To specify the components of the name of the object */
    "hasName": NamedNode<'http://www.w3.org/2006/vcard/ns#hasName'>;
    /** This object property has been mapped */
    "n": NamedNode<'http://www.w3.org/2006/vcard/ns#n'>;
    /** Used to support property parameters for the nickname data property */
    "hasNickname": NamedNode<'http://www.w3.org/2006/vcard/ns#hasNickname'>;
    /** The nick name associated with the object */
    "nickname": NamedNode<'http://www.w3.org/2006/vcard/ns#nickname'>;
    /** Used to support property parameters for the note data property */
    "hasNote": NamedNode<'http://www.w3.org/2006/vcard/ns#hasNote'>;
    /** Used to support property parameters for the organization name data property */
    "hasOrganizationName": NamedNode<'http://www.w3.org/2006/vcard/ns#hasOrganizationName'>;
    /** Used to support property parameters for the organization unit name data property */
    "hasOrganizationUnit": NamedNode<'http://www.w3.org/2006/vcard/ns#hasOrganizationUnit'>;
    /** To specify an image or photograph information that annotates some aspect of the object */
    "hasPhoto": NamedNode<'http://www.w3.org/2006/vcard/ns#hasPhoto'>;
    /** This object property has been mapped */
    "photo": NamedNode<'http://www.w3.org/2006/vcard/ns#photo'>;
    /** Used to support property parameters for the postal code data property */
    "hasPostalCode": NamedNode<'http://www.w3.org/2006/vcard/ns#hasPostalCode'>;
    /** Used to support property parameters for the region data property */
    "hasRegion": NamedNode<'http://www.w3.org/2006/vcard/ns#hasRegion'>;
    /** To specify a relationship between another entity and the entity represented by this object */
    "hasRelated": NamedNode<'http://www.w3.org/2006/vcard/ns#hasRelated'>;
    /** Used to support property parameters for the role data property */
    "hasRole": NamedNode<'http://www.w3.org/2006/vcard/ns#hasRole'>;
    /** To specify a digital sound content information that annotates some aspect of the object */
    "hasSound": NamedNode<'http://www.w3.org/2006/vcard/ns#hasSound'>;
    /** This object property has been mapped */
    "sound": NamedNode<'http://www.w3.org/2006/vcard/ns#sound'>;
    /** To identify the source of directory information of the object */
    "hasSource": NamedNode<'http://www.w3.org/2006/vcard/ns#hasSource'>;
    /** Used to support property parameters for the street address data property */
    "hasStreetAddress": NamedNode<'http://www.w3.org/2006/vcard/ns#hasStreetAddress'>;
    /** To specify the telephone number for telephony communication with the object */
    "hasTelephone": NamedNode<'http://www.w3.org/2006/vcard/ns#hasTelephone'>;
    /** This object property has been mapped */
    "tel": NamedNode<'http://www.w3.org/2006/vcard/ns#tel'>;
    /** Used to support property parameters for the title data property */
    "hasTitle": NamedNode<'http://www.w3.org/2006/vcard/ns#hasTitle'>;
    /** To specify a value that represents a globally unique identifier corresponding to the object */
    "hasUID": NamedNode<'http://www.w3.org/2006/vcard/ns#hasUID'>;
    /** To specify a uniform resource locator associated with the object */
    "hasURL": NamedNode<'http://www.w3.org/2006/vcard/ns#hasURL'>;
    /** This object property has been mapped */
    "url": NamedNode<'http://www.w3.org/2006/vcard/ns#url'>;
    /** Used to indicate the resource value of an object property that requires property parameters */
    "hasValue": NamedNode<'http://www.w3.org/2006/vcard/ns#hasValue'>;
    /** The honorific prefix of the name associated with the object */
    "honorific-prefix": NamedNode<'http://www.w3.org/2006/vcard/ns#honorific-prefix'>;
    /** The honorific suffix of the name associated with the object */
    "honorific-suffix": NamedNode<'http://www.w3.org/2006/vcard/ns#honorific-suffix'>;
    /** This data property has been deprecated */
    "label": NamedNode<'http://www.w3.org/2006/vcard/ns#label'>;
    /** To specify the language that may be used for contacting the object. May also be used as a property parameter. */
    "language": NamedNode<'http://www.w3.org/2006/vcard/ns#language'>;
    /** This data property has been deprecated. See hasGeo */
    "latitude": NamedNode<'http://www.w3.org/2006/vcard/ns#latitude'>;
    /** The locality (e.g. city or town) associated with the address of the object */
    "locality": NamedNode<'http://www.w3.org/2006/vcard/ns#locality'>;
    /** This data property has been deprecated. See hasGeo */
    "longitude": NamedNode<'http://www.w3.org/2006/vcard/ns#longitude'>;
    /** This data property has been deprecated */
    "mailer": NamedNode<'http://www.w3.org/2006/vcard/ns#mailer'>;
    /** A note associated with the object */
    "note": NamedNode<'http://www.w3.org/2006/vcard/ns#note'>;
    /** This object property has been mapped. Use the organization-name data property. */
    "org": NamedNode<'http://www.w3.org/2006/vcard/ns#org'>;
    /** To specify the organizational name associated with the object */
    "organization-name": NamedNode<'http://www.w3.org/2006/vcard/ns#organization-name'>;
    /** To specify the organizational unit name associated with the object */
    "organization-unit": NamedNode<'http://www.w3.org/2006/vcard/ns#organization-unit'>;
    /** This data property has been deprecated */
    "post-office-box": NamedNode<'http://www.w3.org/2006/vcard/ns#post-office-box'>;
    /** The postal code associated with the address of the object */
    "postal-code": NamedNode<'http://www.w3.org/2006/vcard/ns#postal-code'>;
    /** To specify the identifier for the product that created the object */
    "prodid": NamedNode<'http://www.w3.org/2006/vcard/ns#prodid'>;
    /** The region (e.g. state or province) associated with the address of the object */
    "region": NamedNode<'http://www.w3.org/2006/vcard/ns#region'>;
    /** To specify revision information about the object */
    "rev": NamedNode<'http://www.w3.org/2006/vcard/ns#rev'>;
    /** To specify the function or part played in a particular situation by the object */
    "role": NamedNode<'http://www.w3.org/2006/vcard/ns#role'>;
    /** To specify the string to be used for national-language-specific sorting. Used as a property parameter only. */
    "sort-string": NamedNode<'http://www.w3.org/2006/vcard/ns#sort-string'>;
    /** The street address associated with the address of the object */
    "street-address": NamedNode<'http://www.w3.org/2006/vcard/ns#street-address'>;
    /** To specify the position or job of the object */
    "title": NamedNode<'http://www.w3.org/2006/vcard/ns#title'>;
    /** To indicate time zone information that is specific to the object. May also be used as a property parameter. */
    "tz": NamedNode<'http://www.w3.org/2006/vcard/ns#tz'>;
    /** Used to indicate the literal value of a data property that requires property parameters */
    "value": NamedNode<'http://www.w3.org/2006/vcard/ns#value'>;
}

const builder = namespace("http://www.w3.org/2006/vcard/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Vcard> & Vcard;
export const loose = builder as NamespaceBuilder & Vcard;
