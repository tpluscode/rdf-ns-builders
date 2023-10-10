import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Mads {
    '': NamedNode<'http://www.loc.gov/mads/rdf/v1#'>;
    "Address": NamedNode<'http://www.loc.gov/mads/rdf/v1#Address'>;
    /** A resource that describes an individual's affiliation with an organization or group, such as the nature of the affiliation and the active dates. */
    "Affiliation": NamedNode<'http://www.loc.gov/mads/rdf/v1#Affiliation'>;
    /** Describes a resource whose label is a non-jurisdictional geographic entity. */
    "Area": NamedNode<'http://www.loc.gov/mads/rdf/v1#Area'>;
    /** Describes a resource whose label represents a geographic place or feature, especially when a more precise geographic determination (City, Country, Region, etc.) cannot be made. */
    "Geographic": NamedNode<'http://www.loc.gov/mads/rdf/v1#Geographic'>;
    /** A concept with a controlled label. */
    "Authority": NamedNode<'http://www.loc.gov/mads/rdf/v1#Authority'>;
    /** A former Authority. */
    "DeprecatedAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#DeprecatedAuthority'>;
    /** A madsrdf:Collection is an organizational unit, members of which will have some form of intellectually unifying theme but not to the extent that it defines an independent knowledge organization system. It aggregates madsrdf:Authority descriptions or other madsrdf:MADSCollection resources. */
    "MADSCollection": NamedNode<'http://www.loc.gov/mads/rdf/v1#MADSCollection'>;
    /** MADS Scheme is an organizational unit that describes a knowledge organization system. It aggregates madsrdf:Authority descriptions and/or madsrdf:MADSCollection resources included in the knowledge organization system. Including a madsrdf:MADSCollection within a madsrdf:MADSScheme should be done with care; when a madsrdf:MADSCollection is part of a madsrdf:MADSScheme, then any madsrdf:Authority within that madsrdf:MADSCollection is effectively also in the madsrdf:MADSScheme. */
    "MADSScheme": NamedNode<'http://www.loc.gov/mads/rdf/v1#MADSScheme'>;
    /** A resource whose label is the alternate form of an Authority or Deprecated Authority. */
    "Variant": NamedNode<'http://www.loc.gov/mads/rdf/v1#Variant'>;
    /** Describes a resource whose label is an inhabited place incorporated as a city, town, etc. */
    "City": NamedNode<'http://www.loc.gov/mads/rdf/v1#City'>;
    /** Describes a resource whose label is a smaller unit within a populated place, e.g., a neighborhood, park, or street. */
    "CitySection": NamedNode<'http://www.loc.gov/mads/rdf/v1#CitySection'>;
    /** The label of a madsrdf:ComplexSubject is the concatenation of labels from two or more madsrdf:SimpleType descriptions, except that the combination of madsrdf:SimpleType labels for the madsrdf:ComplexSubject does not meet the conditions to be the label of a madsrdf:NameTitle resource or madsrdf:HierarchicalGeographic resource. */
    "ComplexSubject": NamedNode<'http://www.loc.gov/mads/rdf/v1#ComplexSubject'>;
    /** madsrdf:ComplexType is a resource whose label is the concatenation of labels from two or more Authority descriptions or two or more Variant descriptions or some combination of Authority and Variant descriptions, each of a madsrdf:SimpleType. */
    "ComplexType": NamedNode<'http://www.loc.gov/mads/rdf/v1#ComplexType'>;
    "MADSType": NamedNode<'http://www.loc.gov/mads/rdf/v1#MADSType'>;
    /** madsrdf:SimpleType is a resource with a label constituting a single word or phrase. */
    "SimpleType": NamedNode<'http://www.loc.gov/mads/rdf/v1#SimpleType'>;
    /** Describes a resource whose label represents a conference name. */
    "ConferenceName": NamedNode<'http://www.loc.gov/mads/rdf/v1#ConferenceName'>;
    /** Describes a resource whose label represents a name, especially when a more precise Name type (madsrdf:ConferenceName, masdrdf:FamilyName, etc.) cannot be identified. */
    "Name": NamedNode<'http://www.loc.gov/mads/rdf/v1#Name'>;
    /** Describes a resource whose label is one of seven large landmasses on Earth. These are: Asia, Africa, Europe, North America, South America, Australia, and Antarctica. */
    "Continent": NamedNode<'http://www.loc.gov/mads/rdf/v1#Continent'>;
    /** Describes a resource whose label is the name of a corporate entity, which may include political or ecclesiastical entities. */
    "CorporateName": NamedNode<'http://www.loc.gov/mads/rdf/v1#CorporateName'>;
    /** Describes a resource whose label is a country, i.e. a political entity considered a country. */
    "Country": NamedNode<'http://www.loc.gov/mads/rdf/v1#Country'>;
    /** Describes a resource whose label is the largest local administrative unit, e.g. Warwickshire, in a country, e.g. England. */
    "County": NamedNode<'http://www.loc.gov/mads/rdf/v1#County'>;
    "DateNameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#DateNameElement'>;
    "NameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#NameElement'>;
    /** madsrdf:Element types describe the various parts of labels. */
    "Element": NamedNode<'http://www.loc.gov/mads/rdf/v1#Element'>;
    /** Describes a resource whose label is any extraterrestrial entity or space, including a solar system, a galaxy, a star system, and a planet, including a geographic feature of an individual planet. */
    "ExtraterrestrialArea": NamedNode<'http://www.loc.gov/mads/rdf/v1#ExtraterrestrialArea'>;
    /** Describes a resource whose label represents a family name. */
    "FamilyName": NamedNode<'http://www.loc.gov/mads/rdf/v1#FamilyName'>;
    "FamilyNameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#FamilyNameElement'>;
    "FullNameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#FullNameElement'>;
    /** Describes a resource whose label is a genre or form term. Genre terms for textual materials designate specific kinds of materials distinguished by the style or technique of their intellectual contents; for example, biographies, catechisms, essays, hymns, or reviews. Form terms designate historically and functionally specific kinds of materials as distinguished by an examination of their physical character, characteristics of their intellectual content, or the order of information within them; for example, daybooks, diaries, directories, journals, memoranda, questionnaires, syllabi, or time sheets. In the context of graphic materials, genre headings denote categories of material distinguished by vantage point, intended purpose, characteristics of the creator, publication status, or method of representation. */
    "GenreForm": NamedNode<'http://www.loc.gov/mads/rdf/v1#GenreForm'>;
    "GenreFormElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#GenreFormElement'>;
    "GeographicElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#GeographicElement'>;
    "GivenNameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#GivenNameElement'>;
    /** A madsrdf:HierarchicalGeographic indicates that its label is the concatenation of labels from a sequence of madsrdf:Geographic types taken from one of the madsrdf:Geographic sub-classes such as madsrdf:City, madsrdf:Country, madsrdf:State, madsrdf:Region, madsrdf:Area, etc. The madsrdf:Geographic resources that constitute the madsrdf:HierarchicalGeographic should have a broader to narrower hierarchical relationship between them. */
    "HierarchicalGeographic": NamedNode<'http://www.loc.gov/mads/rdf/v1#HierarchicalGeographic'>;
    /** A madsrdf:Identifier resource describes an identifier by associating the identifier value with its type. To be used to record identifiers for a resource in the absence of URIs. */
    "Identifier": NamedNode<'http://www.loc.gov/mads/rdf/v1#Identifier'>;
    /** Describes a resource whose label is a tract of land surrounded by water and smaller than a continent but is not itself a separate country. */
    "Island": NamedNode<'http://www.loc.gov/mads/rdf/v1#Island'>;
    /** Describes a resource whose label represents a language. */
    "Language": NamedNode<'http://www.loc.gov/mads/rdf/v1#Language'>;
    "LanguageElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#LanguageElement'>;
    "MainTitleElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#MainTitleElement'>;
    "TitleElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#TitleElement'>;
    /** The label of a madsrdf:NameTitle resource is the concatenation of a label of a madsrdf:Name description and the label of a madsrdf:Title description. Both description types (madsrdf:Name and madsrdf:Title) are of madsrdf:SimpleType types. */
    "NameTitle": NamedNode<'http://www.loc.gov/mads/rdf/v1#NameTitle'>;
    "NonSortElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#NonSortElement'>;
    /** Describes a resource whose label represents an occcupation. */
    "Occupation": NamedNode<'http://www.loc.gov/mads/rdf/v1#Occupation'>;
    "PartNameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#PartNameElement'>;
    "PartNumberElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#PartNumberElement'>;
    /** Describes a resource whose label represents a personal name. */
    "PersonalName": NamedNode<'http://www.loc.gov/mads/rdf/v1#PersonalName'>;
    /** Describes a resource whose label is a first order political division, e.g. Ontario, within a country, e.g. Canada. */
    "Province": NamedNode<'http://www.loc.gov/mads/rdf/v1#Province'>;
    /** A madsrdf:RWO is an abstract entity and identifies a Real World Object (RWO) identified by the label of a madsrdf:Authority or madsrdf:DeprecatedAuthority. */
    "RWO": NamedNode<'http://www.loc.gov/mads/rdf/v1#RWO'>;
    /** Describes a resource whose label is an area that has the status of a jurisdiction, usually incorporating more than one first level jurisdiction. */
    "Region": NamedNode<'http://www.loc.gov/mads/rdf/v1#Region'>;
    /** A resource that represents the source of information about another resource. madsrdf:Source is a type of citation. */
    "Source": NamedNode<'http://www.loc.gov/mads/rdf/v1#Source'>;
    /** Describes a resource whose label is a first order political division, e.g. Montana, within a country, e.g. U.S. */
    "State": NamedNode<'http://www.loc.gov/mads/rdf/v1#State'>;
    "SubTitleElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#SubTitleElement'>;
    /** Describes a resource whose label represents a time-based notion. */
    "Temporal": NamedNode<'http://www.loc.gov/mads/rdf/v1#Temporal'>;
    "TemporalElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#TemporalElement'>;
    "TermsOfAddressNameElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#TermsOfAddressNameElement'>;
    /** Describes a resource whose label is a geographical area belonging to or under the jurisdiction of a governmental authority. */
    "Territory": NamedNode<'http://www.loc.gov/mads/rdf/v1#Territory'>;
    /** Describes a resource whose label represents a title. */
    "Title": NamedNode<'http://www.loc.gov/mads/rdf/v1#Title'>;
    /** Describes a resource whose label represents a topic. */
    "Topic": NamedNode<'http://www.loc.gov/mads/rdf/v1#Topic'>;
    "TopicElement": NamedNode<'http://www.loc.gov/mads/rdf/v1#TopicElement'>;
    /** Latest date in a period of activity. */
    "activityEndDate": NamedNode<'http://www.loc.gov/mads/rdf/v1#activityEndDate'>;
    /** Earliest date in a period of activity. */
    "activityStartDate": NamedNode<'http://www.loc.gov/mads/rdf/v1#activityStartDate'>;
    /** This relates an Authority or Variant to its administrative metadata, which is, minimimally, a Class defined outside of the MADS/RDF namespace. The RecordInfo Class from the RecordInfo ontology is recommended. */
    "adminMetadata": NamedNode<'http://www.loc.gov/mads/rdf/v1#adminMetadata'>;
    /** The date an individual ceased to be affiliated with an organization. */
    "affiliationEnd": NamedNode<'http://www.loc.gov/mads/rdf/v1#affiliationEnd'>;
    /** The date an individual established an affiliation with an organization. */
    "affiliationStart": NamedNode<'http://www.loc.gov/mads/rdf/v1#affiliationStart'>;
    /** Language that a person, organization, or family uses for publication, communication, etc., or in which a work is expressed. */
    "associatedLanguage": NamedNode<'http://www.loc.gov/mads/rdf/v1#associatedLanguage'>;
    /** A town, city, province, state, and/or country associated with persons, corporate bodies, families, works, and expressions. */
    "associatedLocale": NamedNode<'http://www.loc.gov/mads/rdf/v1#associatedLocale'>;
    /** A lexical string representing a controlled, curated label for the Authority. */
    "authoritativeLabel": NamedNode<'http://www.loc.gov/mads/rdf/v1#authoritativeLabel'>;
    /** The year a person was born. Date of birth may also include the month and day of the person’s birth. (RDA 9.3.2.1) */
    "birthDate": NamedNode<'http://www.loc.gov/mads/rdf/v1#birthDate'>;
    /** The town, city, province, state, and/or country in which a person was born. */
    "birthPlace": NamedNode<'http://www.loc.gov/mads/rdf/v1#birthPlace'>;
    /** A note detailing a modification to an Authority or Variant. */
    "changeNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#changeNote'>;
    /** A note about the resource. */
    "note": NamedNode<'http://www.loc.gov/mads/rdf/v1#note'>;
    /** A note about how the madsrdf:Source relates to the resource about which the madsrdf:Source is the information source. */
    "citationNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#citationNote'>;
    /** The cited resource. */
    "citationSource": NamedNode<'http://www.loc.gov/mads/rdf/v1#citationSource'>;
    /** Should use a standard term - such as 'found' or 'not found' - to indicate whether the cited resource yielded information about the resource related to the madsrdf:Source. */
    "citationStatus": NamedNode<'http://www.loc.gov/mads/rdf/v1#citationStatus'>;
    /** The city component of an address. */
    "city": NamedNode<'http://www.loc.gov/mads/rdf/v1#city'>;
    /** The classification code associated with a madsrdf:Authority. */
    "classification": NamedNode<'http://www.loc.gov/mads/rdf/v1#classification'>;
    /** A code is a string of characters associated with a the authoritative or deprecated label. It may record an historical notation once used to uniquely identify a concept. */
    "code": NamedNode<'http://www.loc.gov/mads/rdf/v1#code'>;
    /** madsrdf:componentList organizes the madsrdf:SimpleType resources whose labels are represented in the label of the associated madsrdf:ComplexType resource. */
    "componentList": NamedNode<'http://www.loc.gov/mads/rdf/v1#componentList'>;
    /** Country associated with an address. */
    "country": NamedNode<'http://www.loc.gov/mads/rdf/v1#country'>;
    /** Ending date of the date range for which the beginning date is recorded in madsrdf:creationDateStart. */
    "creationDateEnd": NamedNode<'http://www.loc.gov/mads/rdf/v1#creationDateEnd'>;
    /** For a work, earliest date (normally the year) associated with a work; that date may be the date the work was created or first published or released. For an expression, the earliest date (normally the year) associated with an expression; that date may be the date of the earliest known manifestation of that expression. In both cases the date may be the starting date of a range or a single date. */
    "creationDateStart": NamedNode<'http://www.loc.gov/mads/rdf/v1#creationDateStart'>;
    /** The year a person died. Date of death may also include the month and day of the person’s death. (RDA 9.3.3.1) */
    "deathDate": NamedNode<'http://www.loc.gov/mads/rdf/v1#deathDate'>;
    /** The town, city, province, state, and/or country in which a person died. */
    "deathPlace": NamedNode<'http://www.loc.gov/mads/rdf/v1#deathPlace'>;
    /** An explanation of the meaning of an Authority, DeprecatedAuthority, or Variant description. */
    "definitionNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#definitionNote'>;
    /** A note pertaining to the deletion of a resource. */
    "deletionNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#deletionNote'>;
    /** A label once considered authoritative (controlled and curated) but which is no longer. */
    "deprecatedLabel": NamedNode<'http://www.loc.gov/mads/rdf/v1#deprecatedLabel'>;
    /** A note pertaining to the management of the label associated with the resource. */
    "editorialNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#editorialNote'>;
    /** The madsrdf:elementList property is used to organize the various parts of labels. */
    "elementList": NamedNode<'http://www.loc.gov/mads/rdf/v1#elementList'>;
    "elementValue": NamedNode<'http://www.loc.gov/mads/rdf/v1#elementValue'>;
    "email": NamedNode<'http://www.loc.gov/mads/rdf/v1#email'>;
    /** Any attribute that serves to characterize a person, family or corporate body or that may be needed for differentiation from other persons. families or corporate bodies and for which separate content designation is not already defined.Or */
    "entityDescriptor": NamedNode<'http://www.loc.gov/mads/rdf/v1#entityDescriptor'>;
    /** The year a corporate body was established. Date of establishment may also include the month and day of the corporate body’s establishment. */
    "establishDate": NamedNode<'http://www.loc.gov/mads/rdf/v1#establishDate'>;
    /** A example of how the resource might be used. */
    "exampleNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#exampleNote'>;
    /** The second address line, if needed. */
    "extendedAddress": NamedNode<'http://www.loc.gov/mads/rdf/v1#extendedAddress'>;
    "extension": NamedNode<'http://www.loc.gov/mads/rdf/v1#extension'>;
    /** Fax number */
    "fax": NamedNode<'http://www.loc.gov/mads/rdf/v1#fax'>;
    /** The field of activity associated with an individual. */
    "fieldOfActivity": NamedNode<'http://www.loc.gov/mads/rdf/v1#fieldOfActivity'>;
    /** Full form of name needed to distinguish a person from another person with the same preferred name. */
    "fullerName": NamedNode<'http://www.loc.gov/mads/rdf/v1#fullerName'>;
    /** The gender with which a person identifies. */
    "gender": NamedNode<'http://www.loc.gov/mads/rdf/v1#gender'>;
    "hasAbbreviationVariant": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasAbbreviationVariant'>;
    /** Associates a Variant with an Authority or Deprecrated Authority. Unless the variant type can be more specifically identified, use 'hasVariant.' */
    "hasVariant": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasVariant'>;
    "hasAcronymVariant": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasAcronymVariant'>;
    /** Property to associate an individual, such as a foaf:Agent, to a group or organization with which an individual is or has been affiliated. */
    "hasAffiliation": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasAffiliation'>;
    /** The address of the group or organization with which an individual is associated. */
    "hasAffiliationAddress": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasAffiliationAddress'>;
    "hasBroaderAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasBroaderAuthority'>;
    /** Unless the relationship can be more specifically identified, use 'hasRelatedAuthority.' */
    "hasRelatedAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasRelatedAuthority'>;
    /** Creates a direct relationship between an Authority and one that is more narrowly defined. */
    "hasNarrowerAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasNarrowerAuthority'>;
    /** Creates a direct relationship between an Authority and a more broadly defined Authority from a different MADS Scheme. */
    "hasBroaderExternalAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasBroaderExternalAuthority'>;
    /** A term that specifies a characteristic that differentiates a work or expression from another one. */
    "hasChararacteristic": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasChararacteristic'>;
    /** Records a relationship between an Authority and one that is closely related from a different MADS Scheme. */
    "hasCloseExternalAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasCloseExternalAuthority'>;
    /** Establishes a relationship between a CorporateName Authority and one of the same that is more broadly defined. */
    "hasCorporateParentAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasCorporateParentAuthority'>;
    /** Establishes a relationship between a CorporateName Authority and one of the same that is more narrowly defined. */
    "hasCorporateSubsidiaryAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasCorporateSubsidiaryAuthority'>;
    /** Establishes a relationship between an Authority that represents the demonym - Japanese or Greek, for example - and an Authority that represents the Geographic place - Japan or Greece, respectively - associated with the demonym. */
    "hasDemonym": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasDemonym'>;
    /** Establishes a relationship between an Authority that represents a Geographic place - Japan or Greece, for example - and an Authority that represents the demonym - Japanese or Greek, respectively - associated with the place. */
    "isDemonymFor": NamedNode<'http://www.loc.gov/mads/rdf/v1#isDemonymFor'>;
    /** Used to reference a resource that was an earlier form. This is Related type='earlier' in MADS XML. */
    "hasEarlierEstablishedForm": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasEarlierEstablishedForm'>;
    /** Denotes a relationship between an Authority and/or DeprecatedAuthority. The relationship may or may or may not be reciprocated and there is no certainty that the related resource will further illuminate the original resource. */
    "see": NamedNode<'http://www.loc.gov/mads/rdf/v1#see'>;
    /** Use to reference the later form of a resource. This is Related type='later' in MADS XML. */
    "hasLaterEstablishedForm": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasLaterEstablishedForm'>;
    /** Records a relationship between an Authority and one to which it matches exactly but from a different MADS Scheme. */
    "hasExactExternalAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasExactExternalAuthority'>;
    "hasExpansionVariant": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasExpansionVariant'>;
    /** Use for variants that are searchable, but not necessarily for display. */
    "hasHiddenVariant": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasHiddenVariant'>;
    /** Associates a resource with a madsrdf:Identifier. */
    "hasIdentifier": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasIdentifier'>;
    /** Associates an Authority or other Collection with a madsrdf:MADSCollection. */
    "hasMADSCollectionMember": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasMADSCollectionMember'>;
    /** Associates a Collection with a madsrdf:Authority or another madsrdf:MADSCollection. */
    "isMemberOfMADSCollection": NamedNode<'http://www.loc.gov/mads/rdf/v1#isMemberOfMADSCollection'>;
    /** Associates an Authority or Collection with a madsrdf:MADSScheme. */
    "hasMADSSchemeMember": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasMADSSchemeMember'>;
    "isMemberOfMADSScheme": NamedNode<'http://www.loc.gov/mads/rdf/v1#isMemberOfMADSScheme'>;
    /** Creates a direct relationship between an Authority and a more narrowly defined Authority from a different MADS Scheme. */
    "hasNarrowerExternalAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasNarrowerExternalAuthority'>;
    /** Establishes a relationship between two Authority resources. It is reciprocal, so the relationship must be shared. This is Related type='equivalent' in MADS XML. */
    "hasReciprocalAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasReciprocalAuthority'>;
    /** Establishes a relationship between an Authority and one from a different MADS Scheme. It is reciprocal, so the relationship must be shared. */
    "hasReciprocalExternalAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasReciprocalExternalAuthority'>;
    /** Associates a resource description with its Source. */
    "hasSource": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasSource'>;
    /** Identifies an Authority that is at the top of the hierarchy of authorities within the MADS Scheme. */
    "hasTopMemberOfMADSScheme": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasTopMemberOfMADSScheme'>;
    /** A Variant whose label represents a translation of that of the authoritative label. */
    "hasTranslationVariant": NamedNode<'http://www.loc.gov/mads/rdf/v1#hasTranslationVariant'>;
    /** A label entered for discovery purposes but not shown. */
    "hiddenLabel": NamedNode<'http://www.loc.gov/mads/rdf/v1#hiddenLabel'>;
    /** A note pertaining to the history of the resource. */
    "historyNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#historyNote'>;
    /** Designation indicative of royalty, nobility, or ecclesiastical rank or office, or a term of address for a person of religious vocation. */
    "honoraryTitle": NamedNode<'http://www.loc.gov/mads/rdf/v1#honoraryTitle'>;
    "hours": NamedNode<'http://www.loc.gov/mads/rdf/v1#hours'>;
    /** The scheme associated with the identifier. For example, "LCCN" would be used when the Identifier Value (madsrdf:idValue) is a LC Control Number. */
    "idScheme": NamedNode<'http://www.loc.gov/mads/rdf/v1#idScheme'>;
    /** The value of the identifier conforming to the Identifier Scheme syntax. */
    "idValue": NamedNode<'http://www.loc.gov/mads/rdf/v1#idValue'>;
    /** Associates a madsrdf:Authority with the Real World Object that is the subject of the authority's label. */
    "identifiesRWO": NamedNode<'http://www.loc.gov/mads/rdf/v1#identifiesRWO'>;
    /** Associates a Real World Object with its Authority description. */
    "isIdentifiedByAuthority": NamedNode<'http://www.loc.gov/mads/rdf/v1#isIdentifiedByAuthority'>;
    /** Identifies a MADS Scheme in which the Authority is at the top of the hierarchy. */
    "isTopMemberOfMADSScheme": NamedNode<'http://www.loc.gov/mads/rdf/v1#isTopMemberOfMADSScheme'>;
    /** Records the individual's role or position in the organization with which the individual is affiliated. A "job title" might be appropriate. */
    "natureOfAffiliation": NamedNode<'http://www.loc.gov/mads/rdf/v1#natureOfAffiliation'>;
    /** A profession or occupation in which the person works or has worked. */
    "occupation": NamedNode<'http://www.loc.gov/mads/rdf/v1#occupation'>;
    /** The group or organization with which an individual is associated. */
    "organization": NamedNode<'http://www.loc.gov/mads/rdf/v1#organization'>;
    "phone": NamedNode<'http://www.loc.gov/mads/rdf/v1#phone'>;
    "postcode": NamedNode<'http://www.loc.gov/mads/rdf/v1#postcode'>;
    /** A well-known individual who is a member of the family. */
    "prominentFamilyMember": NamedNode<'http://www.loc.gov/mads/rdf/v1#prominentFamilyMember'>;
    "scopeNote": NamedNode<'http://www.loc.gov/mads/rdf/v1#scopeNote'>;
    /** The state associated with an address. */
    "state": NamedNode<'http://www.loc.gov/mads/rdf/v1#state'>;
    /** First line of address. For second line, use madsrdf:extendedAddress. */
    "streetAddress": NamedNode<'http://www.loc.gov/mads/rdf/v1#streetAddress'>;
    /** The year a corporate body was terminated. Date of termination may also include the month and day of the corporate body’s termination. */
    "terminateDate": NamedNode<'http://www.loc.gov/mads/rdf/v1#terminateDate'>;
    /** "Use [This Resource] For." Traditional "USE FOR" reference. */
    "useFor": NamedNode<'http://www.loc.gov/mads/rdf/v1#useFor'>;
    /** "Use [This Other Resource] Instead." Traditional "USE" reference. */
    "useInstead": NamedNode<'http://www.loc.gov/mads/rdf/v1#useInstead'>;
    /** The lexical, variant form of an authoritative label. */
    "variantLabel": NamedNode<'http://www.loc.gov/mads/rdf/v1#variantLabel'>;
    /** The country or other territorial jurisdiction from which a work originated. */
    "workOrigin": NamedNode<'http://www.loc.gov/mads/rdf/v1#workOrigin'>;
}

const builder = namespace("http://www.loc.gov/mads/rdf/v1#") as any;
export const strict = builder as NamespaceBuilder<keyof Mads> & Mads;
export const loose = builder as NamespaceBuilder & Mads;
