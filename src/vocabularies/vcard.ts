import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Vcard {
    "Acquaintance": NamedNode;
    /*To specify the components of the delivery address for the  object*/
    "Address": NamedNode;
    "Agent": NamedNode;
    /*This class is deprecated*/
    "BBS": NamedNode;
    /*This class is deprecated*/
    "Car": NamedNode;
    /*Also called mobile telephone*/
    "Cell": NamedNode;
    "Child": NamedNode;
    "Colleague": NamedNode;
    "Contact": NamedNode;
    "Coresident": NamedNode;
    "Coworker": NamedNode;
    "Crush": NamedNode;
    "Date": NamedNode;
    /*This class is deprecated*/
    "Dom": NamedNode;
    /*To specify the electronic mail address for communication with the object the vCard represents. Use the hasEmail object property.*/
    "Email": NamedNode;
    "Emergency": NamedNode;
    "Fax": NamedNode;
    "Female": NamedNode;
    "Friend": NamedNode;
    /*Used for gender codes. The URI of the gender code must be used as the value for Gender.*/
    "Gender": NamedNode;
    /*Object representing a group of persons or entities.  A group object will usually contain hasMember properties to specify the members of the group.*/
    "Group": NamedNode;
    /*This implies that the property is related to an individual's personal life*/
    "Home": NamedNode;
    /*This class is deprecated*/
    "ISDN": NamedNode;
    /*An object representing a single person or entity*/
    "Individual": NamedNode;
    /*This class is deprecated*/
    "Internet": NamedNode;
    /*This class is deprecated*/
    "Intl": NamedNode;
    "Kin": NamedNode;
    /*The parent class for all objects*/
    "Kind": NamedNode;
    /*This class is deprecated*/
    "Label": NamedNode;
    /*An object representing a named geographical place*/
    "Location": NamedNode;
    "Male": NamedNode;
    "Me": NamedNode;
    "Met": NamedNode;
    /*This class is deprecated*/
    "Modem": NamedNode;
    /*This class is deprecated*/
    "Msg": NamedNode;
    "Muse": NamedNode;
    /*To specify the components of the name of the object*/
    "Name": NamedNode;
    "Neighbor": NamedNode;
    "None": NamedNode;
    /*An object representing an organization.  An organization is a single entity, and might represent a business or government, a department or division within a business or government, a club, an association, or the like.
    */
    "Organization": NamedNode;
    "Other": NamedNode;
    /*This class is deprecated*/
    "PCS": NamedNode;
    "Pager": NamedNode;
    /*This class is deprecated*/
    "Parcel": NamedNode;
    "Parent": NamedNode;
    /*This class is deprecated*/
    "Postal": NamedNode;
    /*This class is deprecated*/
    "Pref": NamedNode;
    /*Used for relation type codes. The URI of the relation type code must be used as the value for the Relation Type.*/
    "RelatedType": NamedNode;
    "Sibling": NamedNode;
    "Spouse": NamedNode;
    "Sweetheart": NamedNode;
    /*This class is deprecated. Use the hasTelephone object property.*/
    "Tel": NamedNode;
    /*Used for telephone type codes. The URI of the telephone type code must be used as the value for the Telephone Type.*/
    "TelephoneType": NamedNode;
    /*Also called sms telephone*/
    "Text": NamedNode;
    "TextPhone": NamedNode;
    /*Used for type codes. The URI of the type code must be used as the value for Type.*/
    "Type": NamedNode;
    "Unknown": NamedNode;
    /*The vCard class is  equivalent to the new Kind class, which is the parent for the four explicit types of vCards (Individual, Organization, Location, Group)*/
    "VCard": NamedNode;
    "Video": NamedNode;
    "Voice": NamedNode;
    /*This implies that the property is related to an individual's work place*/
    "Work": NamedNode;
    /*This class is deprecated*/
    "X400": NamedNode;
    /*The additional name associated with the object*/
    "additional-name": NamedNode;
    /*This object property has been mapped*/
    "adr": NamedNode;
    /*This object property has been deprecated*/
    "agent": NamedNode;
    /*The date of marriage, or equivalent, of the object*/
    "anniversary": NamedNode;
    /*To specify the birth date of the object*/
    "bday": NamedNode;
    /*The category information about the object, also known as tags*/
    "category": NamedNode;
    /*This data property has been deprecated*/
    "class": NamedNode;
    /*The country name associated with the address of the object*/
    "country-name": NamedNode;
    /*This object property has been mapped*/
    "email": NamedNode;
    /*This data property has been deprecated*/
    "extended-address": NamedNode;
    /*The family name associated with the object*/
    "family-name": NamedNode;
    /*The formatted text corresponding to the name of the object*/
    "fn": NamedNode;
    /*This object property has been mapped*/
    "geo": NamedNode;
    /*The given name associated with the object*/
    "given-name": NamedNode;
    /*Used to support property parameters for the additional name data property*/
    "hasAdditionalName": NamedNode;
    /*To specify the components of the delivery address for the object*/
    "hasAddress": NamedNode;
    /*To specify the busy time associated with the object. (Was called FBURL in RFC6350)*/
    "hasCalendarBusy": NamedNode;
    /*To specify the calendar associated with the object. (Was called CALURI in RFC6350)*/
    "hasCalendarLink": NamedNode;
    /*To specify the calendar user address to which a scheduling request be sent for the object. (Was called CALADRURI in RFC6350)*/
    "hasCalendarRequest": NamedNode;
    /*Used to support property parameters for the category data property*/
    "hasCategory": NamedNode;
    /*Used to support property parameters for the country name data property*/
    "hasCountryName": NamedNode;
    /*To specify the electronic mail address for communication with the object*/
    "hasEmail": NamedNode;
    /*Used to support property parameters for the formatted name data property*/
    "hasFN": NamedNode;
    /*Used to support property parameters for the family name data property*/
    "hasFamilyName": NamedNode;
    /*To specify  the sex or gender identity of the object. URIs are recommended to enable interoperable sex and gender codes to be used.*/
    "hasGender": NamedNode;
    /*To specify information related to the global positioning of the object. May also be used as a property parameter.*/
    "hasGeo": NamedNode;
    /*Used to support property parameters for the given name data property*/
    "hasGivenName": NamedNode;
    /*Used to support property parameters for the honorific prefix data property*/
    "hasHonorificPrefix": NamedNode;
    /*Used to support property parameters for the honorific suffix data property*/
    "hasHonorificSuffix": NamedNode;
    /*To specify the instant messaging and presence protocol communications with the object. (Was called IMPP in RFC6350)*/
    "hasInstantMessage": NamedNode;
    /*To specify a public key or authentication certificate associated with the object*/
    "hasKey": NamedNode;
    /*Used to support property parameters for the language data property*/
    "hasLanguage": NamedNode;
    /*Used to support property parameters for the locality data property*/
    "hasLocality": NamedNode;
    /*To specify a graphic image of a logo associated with the object */
    "hasLogo": NamedNode;
    /*To include a member in the group this object represents. (This property can only be used by Group individuals)*/
    "hasMember": NamedNode;
    /*To specify the components of the name of the object*/
    "hasName": NamedNode;
    /*Used to support property parameters for the nickname data property*/
    "hasNickname": NamedNode;
    /*Used to support property parameters for the note data property*/
    "hasNote": NamedNode;
    /*Used to support property parameters for the organization name data property*/
    "hasOrganizationName": NamedNode;
    /*Used to support property parameters for the organization unit name data property*/
    "hasOrganizationUnit": NamedNode;
    /*To specify an image or photograph information that annotates some aspect of the object*/
    "hasPhoto": NamedNode;
    /*Used to support property parameters for the postal code data property*/
    "hasPostalCode": NamedNode;
    /*Used to support property parameters for the region data property*/
    "hasRegion": NamedNode;
    /*To specify a relationship between another entity and the entity represented by this object*/
    "hasRelated": NamedNode;
    /*Used to support property parameters for the role data property*/
    "hasRole": NamedNode;
    /*To specify a digital sound content information that annotates some aspect of the object*/
    "hasSound": NamedNode;
    /*To identify the source of directory information of the object*/
    "hasSource": NamedNode;
    /*Used to support property parameters for the street address data property*/
    "hasStreetAddress": NamedNode;
    /*To specify the telephone number for telephony communication with the object*/
    "hasTelephone": NamedNode;
    /*Used to support property parameters for the title data property*/
    "hasTitle": NamedNode;
    /*To specify a value that represents a globally unique identifier corresponding to the object*/
    "hasUID": NamedNode;
    /*To specify a uniform resource locator associated with the object*/
    "hasURL": NamedNode;
    /*Used to indicate the resource value of an object property that requires property parameters*/
    "hasValue": NamedNode;
    /*The honorific prefix of the name associated with the object*/
    "honorific-prefix": NamedNode;
    /*The honorific suffix of the name associated with the object*/
    "honorific-suffix": NamedNode;
    /*This object property has been mapped*/
    "key": NamedNode;
    /*This data property has been deprecated*/
    "label": NamedNode;
    /*To specify the language that may be used for contacting the object. May also be used as a property parameter.*/
    "language": NamedNode;
    /*This data property has been deprecated. See hasGeo*/
    "latitude": NamedNode;
    /*The locality (e.g. city or town) associated with the address of the object*/
    "locality": NamedNode;
    /*This object property has been mapped*/
    "logo": NamedNode;
    /*This data property has been deprecated. See hasGeo*/
    "longitude": NamedNode;
    /*This data property has been deprecated*/
    "mailer": NamedNode;
    /*This object property has been mapped*/
    "n": NamedNode;
    /*The nick name associated with the object*/
    "nickname": NamedNode;
    /*A note associated with the object*/
    "note": NamedNode;
    /*This object property has been mapped. Use the organization-name data property.*/
    "org": NamedNode;
    /*To specify the organizational name associated with the object*/
    "organization-name": NamedNode;
    /*To specify the organizational unit name associated with the object*/
    "organization-unit": NamedNode;
    /*This object property has been mapped*/
    "photo": NamedNode;
    /*This data property has been deprecated*/
    "post-office-box": NamedNode;
    /*The postal code associated with the address of the object*/
    "postal-code": NamedNode;
    /*To specify the identifier for the product that created the object*/
    "prodid": NamedNode;
    /*The region (e.g. state or province) associated with the address of the object*/
    "region": NamedNode;
    /*To specify revision information about the object*/
    "rev": NamedNode;
    /*To specify the function or part played in a particular situation by the object*/
    "role": NamedNode;
    /*To specify the string to be used for national-language-specific sorting. Used as a property parameter only.*/
    "sort-string": NamedNode;
    /*This object property has been mapped*/
    "sound": NamedNode;
    /*The street address associated with the address of the object*/
    "street-address": NamedNode;
    /*This object property has been mapped*/
    "tel": NamedNode;
    /*To specify the position or job of the object*/
    "title": NamedNode;
    /*To indicate time zone information that is specific to the object. May also be used as a property parameter.*/
    "tz": NamedNode;
    /*This object property has been mapped*/
    "url": NamedNode;
    /*Used to indicate the literal value of a data property that requires property parameters*/
    "value": NamedNode;
}
export const vcard: Vcard = (namespace(prefixes.vcard) as any);
