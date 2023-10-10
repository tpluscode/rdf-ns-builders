import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dcterms {
    '': NamedNode<'http://purl.org/dc/terms/'>;
    /** Date on which the resource was changed. */
    "modified": NamedNode<'http://purl.org/dc/terms/modified'>;
    /** An entity responsible for making the resource available. */
    "publisher": NamedNode<'http://purl.org/dc/terms/publisher'>;
    /** A name given to the resource. */
    "title": NamedNode<'http://purl.org/dc/terms/title'>;
    /** A resource that acts or has the power to act. */
    "Agent": NamedNode<'http://purl.org/dc/terms/Agent'>;
    /** Date of formal issuance of the resource. */
    "issued": NamedNode<'http://purl.org/dc/terms/issued'>;
    /** A group of agents. */
    "AgentClass": NamedNode<'http://purl.org/dc/terms/AgentClass'>;
    /** A book, article, or other documentary resource. */
    "BibliographicResource": NamedNode<'http://purl.org/dc/terms/BibliographicResource'>;
    /** The set of regions in space defined by their geographic coordinates according to the DCMI Box Encoding Scheme. */
    "Box": NamedNode<'http://purl.org/dc/terms/Box'>;
    /** The set of classes specified by the DCMI Type Vocabulary, used to categorize the nature or genre of the resource. */
    "DCMIType": NamedNode<'http://purl.org/dc/terms/DCMIType'>;
    /** The set of conceptual resources specified by the Dewey Decimal Classification. */
    "DDC": NamedNode<'http://purl.org/dc/terms/DDC'>;
    /** A digital resource format. */
    "FileFormat": NamedNode<'http://purl.org/dc/terms/FileFormat'>;
    /** A file format or physical medium. */
    "MediaType": NamedNode<'http://purl.org/dc/terms/MediaType'>;
    /** A rate at which something recurs. */
    "Frequency": NamedNode<'http://purl.org/dc/terms/Frequency'>;
    /** The set of media types specified by the Internet Assigned Numbers Authority. */
    "IMT": NamedNode<'http://purl.org/dc/terms/IMT'>;
    /** The set of codes listed in ISO 3166-1 for the representation of names of countries. */
    "ISO3166": NamedNode<'http://purl.org/dc/terms/ISO3166'>;
    /** The three-letter alphabetic codes listed in ISO639-2 for the representation of names of languages. */
    "ISO639-2": NamedNode<'http://purl.org/dc/terms/ISO639-2'>;
    /** The set of three-letter codes listed in ISO 639-3 for the representation of names of languages. */
    "ISO639-3": NamedNode<'http://purl.org/dc/terms/ISO639-3'>;
    /** The extent or range of judicial, law enforcement, or other authority. */
    "Jurisdiction": NamedNode<'http://purl.org/dc/terms/Jurisdiction'>;
    /** A location, period of time, or jurisdiction. */
    "LocationPeriodOrJurisdiction": NamedNode<'http://purl.org/dc/terms/LocationPeriodOrJurisdiction'>;
    /** The set of conceptual resources specified by the Library of Congress Classification. */
    "LCC": NamedNode<'http://purl.org/dc/terms/LCC'>;
    /** The set of labeled concepts specified by the Library of Congress Subject Headings. */
    "LCSH": NamedNode<'http://purl.org/dc/terms/LCSH'>;
    /** A legal document giving official permission to do something with a resource. */
    "LicenseDocument": NamedNode<'http://purl.org/dc/terms/LicenseDocument'>;
    /** A statement about the intellectual property rights (IPR) held in or over a resource, a legal document giving official permission to do something with a resource, or a statement about access rights. */
    "RightsStatement": NamedNode<'http://purl.org/dc/terms/RightsStatement'>;
    /** A system of signs, symbols, sounds, gestures, or rules used in communication. */
    "LinguisticSystem": NamedNode<'http://purl.org/dc/terms/LinguisticSystem'>;
    /** An account of the resource. */
    "description": NamedNode<'http://purl.org/dc/terms/description'>;
    /** A spatial region or named place. */
    "Location": NamedNode<'http://purl.org/dc/terms/Location'>;
    /** The set of labeled concepts specified by the Medical Subject Headings. */
    "MESH": NamedNode<'http://purl.org/dc/terms/MESH'>;
    /** A media type or extent. */
    "MediaTypeOrExtent": NamedNode<'http://purl.org/dc/terms/MediaTypeOrExtent'>;
    /** A method by which resources are added to a collection. */
    "MethodOfAccrual": NamedNode<'http://purl.org/dc/terms/MethodOfAccrual'>;
    /** A process that is used to engender knowledge, attitudes, and skills. */
    "MethodOfInstruction": NamedNode<'http://purl.org/dc/terms/MethodOfInstruction'>;
    /** The set of conceptual resources specified by the National Library of Medicine Classification. */
    "NLM": NamedNode<'http://purl.org/dc/terms/NLM'>;
    /** The set of time intervals defined by their limits according to the DCMI Period Encoding Scheme. */
    "Period": NamedNode<'http://purl.org/dc/terms/Period'>;
    /** An interval of time that is named or defined by its start and end dates. */
    "PeriodOfTime": NamedNode<'http://purl.org/dc/terms/PeriodOfTime'>;
    /** A physical material or carrier. */
    "PhysicalMedium": NamedNode<'http://purl.org/dc/terms/PhysicalMedium'>;
    /** A material thing. */
    "PhysicalResource": NamedNode<'http://purl.org/dc/terms/PhysicalResource'>;
    /** The set of points in space defined by their geographic coordinates according to the DCMI Point Encoding Scheme. */
    "Point": NamedNode<'http://purl.org/dc/terms/Point'>;
    /** A plan or course of action by an authority, intended to influence and determine decisions, actions, and other matters. */
    "Policy": NamedNode<'http://purl.org/dc/terms/Policy'>;
    /** Any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation. */
    "ProvenanceStatement": NamedNode<'http://purl.org/dc/terms/ProvenanceStatement'>;
    /** The set of tags, constructed according to RFC 1766, for the identification of languages. */
    "RFC1766": NamedNode<'http://purl.org/dc/terms/RFC1766'>;
    /** The set of tags constructed according to RFC 3066 for the identification of languages. */
    "RFC3066": NamedNode<'http://purl.org/dc/terms/RFC3066'>;
    /** The set of tags constructed according to RFC 4646 for the identification of languages. */
    "RFC4646": NamedNode<'http://purl.org/dc/terms/RFC4646'>;
    /** The set of tags constructed according to RFC 5646 for the identification of languages. */
    "RFC5646": NamedNode<'http://purl.org/dc/terms/RFC5646'>;
    /** A dimension or extent, or a time taken to play or execute. */
    "SizeOrDuration": NamedNode<'http://purl.org/dc/terms/SizeOrDuration'>;
    /** A reference point against which other things can be evaluated or compared. */
    "Standard": NamedNode<'http://purl.org/dc/terms/Standard'>;
    /** The set of places specified by the Getty Thesaurus of Geographic Names. */
    "TGN": NamedNode<'http://purl.org/dc/terms/TGN'>;
    /** The set of conceptual resources specified by the Universal Decimal Classification. */
    "UDC": NamedNode<'http://purl.org/dc/terms/UDC'>;
    /** The set of identifiers constructed according to the generic syntax for Uniform Resource Identifiers as specified by the Internet Engineering Task Force. */
    "URI": NamedNode<'http://purl.org/dc/terms/URI'>;
    /** The set of dates and times constructed according to the W3C Date and Time Formats Specification. */
    "W3CDTF": NamedNode<'http://purl.org/dc/terms/W3CDTF'>;
    /** A summary of the resource. */
    "abstract": NamedNode<'http://purl.org/dc/terms/abstract'>;
    /** Information about who access the resource or an indication of its security status. */
    "accessRights": NamedNode<'http://purl.org/dc/terms/accessRights'>;
    /** Information about rights held in and over the resource. */
    "rights": NamedNode<'http://purl.org/dc/terms/rights'>;
    /** The method by which items are added to a collection. */
    "accrualMethod": NamedNode<'http://purl.org/dc/terms/accrualMethod'>;
    /** The frequency with which items are added to a collection. */
    "accrualPeriodicity": NamedNode<'http://purl.org/dc/terms/accrualPeriodicity'>;
    /** The policy governing the addition of items to a collection. */
    "accrualPolicy": NamedNode<'http://purl.org/dc/terms/accrualPolicy'>;
    /** An alternative name for the resource. */
    "alternative": NamedNode<'http://purl.org/dc/terms/alternative'>;
    /** A class of agents for whom the resource is intended or useful. */
    "audience": NamedNode<'http://purl.org/dc/terms/audience'>;
    /** Date that the resource became or will become available. */
    "available": NamedNode<'http://purl.org/dc/terms/available'>;
    /** A point or period of time associated with an event in the lifecycle of the resource. */
    "date": NamedNode<'http://purl.org/dc/terms/date'>;
    /** A bibliographic reference for the resource. */
    "bibliographicCitation": NamedNode<'http://purl.org/dc/terms/bibliographicCitation'>;
    /** An unambiguous reference to the resource within a given context. */
    "identifier": NamedNode<'http://purl.org/dc/terms/identifier'>;
    /** An established standard to which the described resource conforms. */
    "conformsTo": NamedNode<'http://purl.org/dc/terms/conformsTo'>;
    /** A related resource. */
    "relation": NamedNode<'http://purl.org/dc/terms/relation'>;
    /** An entity responsible for making contributions to the resource. */
    "contributor": NamedNode<'http://purl.org/dc/terms/contributor'>;
    /** The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant. */
    "coverage": NamedNode<'http://purl.org/dc/terms/coverage'>;
    /** Date of creation of the resource. */
    "created": NamedNode<'http://purl.org/dc/terms/created'>;
    /** An entity responsible for making the resource. */
    "creator": NamedNode<'http://purl.org/dc/terms/creator'>;
    /** Date of acceptance of the resource. */
    "dateAccepted": NamedNode<'http://purl.org/dc/terms/dateAccepted'>;
    /** Date of copyright of the resource. */
    "dateCopyrighted": NamedNode<'http://purl.org/dc/terms/dateCopyrighted'>;
    /** Date of submission of the resource. */
    "dateSubmitted": NamedNode<'http://purl.org/dc/terms/dateSubmitted'>;
    /** A class of agents, defined in terms of progression through an educational or training context, for which the described resource is intended. */
    "educationLevel": NamedNode<'http://purl.org/dc/terms/educationLevel'>;
    /** The size or duration of the resource. */
    "extent": NamedNode<'http://purl.org/dc/terms/extent'>;
    /** The file format, physical medium, or dimensions of the resource. */
    "format": NamedNode<'http://purl.org/dc/terms/format'>;
    /** A related resource that is substantially the same as the pre-existing described resource, but in another format. */
    "hasFormat": NamedNode<'http://purl.org/dc/terms/hasFormat'>;
    /** A related resource that is included either physically or logically in the described resource. */
    "hasPart": NamedNode<'http://purl.org/dc/terms/hasPart'>;
    /** A related resource that is a version, edition, or adaptation of the described resource. */
    "hasVersion": NamedNode<'http://purl.org/dc/terms/hasVersion'>;
    /** A process, used to engender knowledge, attitudes and skills, that the described resource is designed to support. */
    "instructionalMethod": NamedNode<'http://purl.org/dc/terms/instructionalMethod'>;
    /** A pre-existing related resource that is substantially the same as the described resource, but in another format. */
    "isFormatOf": NamedNode<'http://purl.org/dc/terms/isFormatOf'>;
    /** A related resource in which the described resource is physically or logically included. */
    "isPartOf": NamedNode<'http://purl.org/dc/terms/isPartOf'>;
    /** A related resource that references, cites, or otherwise points to the described resource. */
    "isReferencedBy": NamedNode<'http://purl.org/dc/terms/isReferencedBy'>;
    /** A related resource that supplants, displaces, or supersedes the described resource. */
    "isReplacedBy": NamedNode<'http://purl.org/dc/terms/isReplacedBy'>;
    /** A related resource that requires the described resource to support its function, delivery, or coherence. */
    "isRequiredBy": NamedNode<'http://purl.org/dc/terms/isRequiredBy'>;
    /** A related resource of which the described resource is a version, edition, or adaptation. */
    "isVersionOf": NamedNode<'http://purl.org/dc/terms/isVersionOf'>;
    /** A language of the resource. */
    "language": NamedNode<'http://purl.org/dc/terms/language'>;
    /** A legal document giving official permission to do something with the resource. */
    "license": NamedNode<'http://purl.org/dc/terms/license'>;
    /** An entity that mediates access to the resource. */
    "mediator": NamedNode<'http://purl.org/dc/terms/mediator'>;
    /** The material or physical carrier of the resource. */
    "medium": NamedNode<'http://purl.org/dc/terms/medium'>;
    /** A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity, and interpretation. */
    "provenance": NamedNode<'http://purl.org/dc/terms/provenance'>;
    /** A related resource that is referenced, cited, or otherwise pointed to by the described resource. */
    "references": NamedNode<'http://purl.org/dc/terms/references'>;
    /** A related resource that is supplanted, displaced, or superseded by the described resource. */
    "replaces": NamedNode<'http://purl.org/dc/terms/replaces'>;
    /** A related resource that is required by the described resource to support its function, delivery, or coherence. */
    "requires": NamedNode<'http://purl.org/dc/terms/requires'>;
    /** A person or organization owning or managing rights over the resource. */
    "rightsHolder": NamedNode<'http://purl.org/dc/terms/rightsHolder'>;
    /** A related resource from which the described resource is derived. */
    "source": NamedNode<'http://purl.org/dc/terms/source'>;
    /** Spatial characteristics of the resource. */
    "spatial": NamedNode<'http://purl.org/dc/terms/spatial'>;
    /** A topic of the resource. */
    "subject": NamedNode<'http://purl.org/dc/terms/subject'>;
    /** A list of subunits of the resource. */
    "tableOfContents": NamedNode<'http://purl.org/dc/terms/tableOfContents'>;
    /** Temporal characteristics of the resource. */
    "temporal": NamedNode<'http://purl.org/dc/terms/temporal'>;
    /** The nature or genre of the resource. */
    "type": NamedNode<'http://purl.org/dc/terms/type'>;
    /** Date (often a range) of validity of a resource. */
    "valid": NamedNode<'http://purl.org/dc/terms/valid'>;
    "Extent": NamedNode<'http://purl.org/dc/terms/Extent'>;
}

const builder = namespace("http://purl.org/dc/terms/") as any;
export const strict = builder as NamespaceBuilder<keyof Dcterms> & Dcterms;
export const loose = builder as NamespaceBuilder & Dcterms;
