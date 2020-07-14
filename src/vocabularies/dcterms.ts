import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Dcterms = NamespaceBuilder & {
    /*A resource that acts or has the power to act.*/
    "Agent": NamedNode;
    /*A group of agents.*/
    "AgentClass": NamedNode;
    /*A book, article, or other documentary resource.*/
    "BibliographicResource": NamedNode;
    /*The set of regions in space defined by their geographic coordinates according to the DCMI Box Encoding Scheme.*/
    "Box": NamedNode;
    /*The set of classes specified by the DCMI Type Vocabulary, used to categorize the nature or genre of the resource.*/
    "DCMIType": NamedNode;
    /*The set of conceptual resources specified by the Dewey Decimal Classification.*/
    "DDC": NamedNode;
    /*A digital resource format.*/
    "FileFormat": NamedNode;
    /*A rate at which something recurs.*/
    "Frequency": NamedNode;
    /*The set of media types specified by the Internet Assigned Numbers Authority.*/
    "IMT": NamedNode;
    /*The set of codes listed in ISO 3166-1 for the representation of names of countries.*/
    "ISO3166": NamedNode;
    /*The three-letter alphabetic codes listed in ISO639-2 for the representation of names of languages.*/
    "ISO639-2": NamedNode;
    /*The set of three-letter codes listed in ISO 639-3 for the representation of names of languages.*/
    "ISO639-3": NamedNode;
    /*The extent or range of judicial, law enforcement, or other authority.*/
    "Jurisdiction": NamedNode;
    /*The set of conceptual resources specified by the Library of Congress Classification.*/
    "LCC": NamedNode;
    /*The set of labeled concepts specified by the Library of Congress Subject Headings.*/
    "LCSH": NamedNode;
    /*A legal document giving official permission to do something with a resource.*/
    "LicenseDocument": NamedNode;
    /*A system of signs, symbols, sounds, gestures, or rules used in communication.*/
    "LinguisticSystem": NamedNode;
    /*A spatial region or named place.*/
    "Location": NamedNode;
    /*A location, period of time, or jurisdiction.*/
    "LocationPeriodOrJurisdiction": NamedNode;
    /*The set of labeled concepts specified by the Medical Subject Headings.*/
    "MESH": NamedNode;
    /*A file format or physical medium.*/
    "MediaType": NamedNode;
    /*A media type or extent.*/
    "MediaTypeOrExtent": NamedNode;
    /*A method by which resources are added to a collection.*/
    "MethodOfAccrual": NamedNode;
    /*A process that is used to engender knowledge, attitudes, and skills.*/
    "MethodOfInstruction": NamedNode;
    /*The set of conceptual resources specified by the National Library of Medicine Classification.*/
    "NLM": NamedNode;
    /*The set of time intervals defined by their limits according to the DCMI Period Encoding Scheme.*/
    "Period": NamedNode;
    /*An interval of time that is named or defined by its start and end dates.*/
    "PeriodOfTime": NamedNode;
    /*A physical material or carrier.*/
    "PhysicalMedium": NamedNode;
    /*A material thing.*/
    "PhysicalResource": NamedNode;
    /*The set of points in space defined by their geographic coordinates according to the DCMI Point Encoding Scheme.*/
    "Point": NamedNode;
    /*A plan or course of action by an authority, intended to influence and determine decisions, actions, and other matters.*/
    "Policy": NamedNode;
    /*Any changes in ownership and custody of a resource since its creation that are significant for its authenticity, integrity, and interpretation.*/
    "ProvenanceStatement": NamedNode;
    /*The set of tags, constructed according to RFC 1766, for the identification of languages.*/
    "RFC1766": NamedNode;
    /*The set of tags constructed according to RFC 3066 for the identification of languages.*/
    "RFC3066": NamedNode;
    /*The set of tags constructed according to RFC 4646 for the identification of languages.*/
    "RFC4646": NamedNode;
    /*The set of tags constructed according to RFC 5646 for the identification of languages.*/
    "RFC5646": NamedNode;
    /*A statement about the intellectual property rights (IPR) held in or over a resource, a legal document giving official permission to do something with a resource, or a statement about access rights.*/
    "RightsStatement": NamedNode;
    /*A dimension or extent, or a time taken to play or execute.*/
    "SizeOrDuration": NamedNode;
    /*A reference point against which other things can be evaluated or compared.*/
    "Standard": NamedNode;
    /*The set of places specified by the Getty Thesaurus of Geographic Names.*/
    "TGN": NamedNode;
    /*The set of conceptual resources specified by the Universal Decimal Classification.*/
    "UDC": NamedNode;
    /*The set of identifiers constructed according to the generic syntax for Uniform Resource Identifiers as specified by the Internet Engineering Task Force.*/
    "URI": NamedNode;
    /*The set of dates and times constructed according to the W3C Date and Time Formats Specification.*/
    "W3CDTF": NamedNode;
    /*A summary of the resource.*/
    "abstract": NamedNode;
    /*Information about who access the resource or an indication of its security status.*/
    "accessRights": NamedNode;
    /*The method by which items are added to a collection.*/
    "accrualMethod": NamedNode;
    /*The frequency with which items are added to a collection.*/
    "accrualPeriodicity": NamedNode;
    /*The policy governing the addition of items to a collection.*/
    "accrualPolicy": NamedNode;
    /*An alternative name for the resource.*/
    "alternative": NamedNode;
    /*A class of agents for whom the resource is intended or useful.*/
    "audience": NamedNode;
    /*Date that the resource became or will become available.*/
    "available": NamedNode;
    /*A bibliographic reference for the resource.*/
    "bibliographicCitation": NamedNode;
    /*An established standard to which the described resource conforms.*/
    "conformsTo": NamedNode;
    /*An entity responsible for making contributions to the resource.*/
    "contributor": NamedNode;
    /*The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant.*/
    "coverage": NamedNode;
    /*Date of creation of the resource.*/
    "created": NamedNode;
    /*An entity responsible for making the resource.*/
    "creator": NamedNode;
    /*A point or period of time associated with an event in the lifecycle of the resource.*/
    "date": NamedNode;
    /*Date of acceptance of the resource.*/
    "dateAccepted": NamedNode;
    /*Date of copyright of the resource.*/
    "dateCopyrighted": NamedNode;
    /*Date of submission of the resource.*/
    "dateSubmitted": NamedNode;
    /*An account of the resource.*/
    "description": NamedNode;
    /*A class of agents, defined in terms of progression through an educational or training context, for which the described resource is intended.*/
    "educationLevel": NamedNode;
    /*The size or duration of the resource.*/
    "extent": NamedNode;
    /*The file format, physical medium, or dimensions of the resource.*/
    "format": NamedNode;
    /*A related resource that is substantially the same as the pre-existing described resource, but in another format.*/
    "hasFormat": NamedNode;
    /*A related resource that is included either physically or logically in the described resource.*/
    "hasPart": NamedNode;
    /*A related resource that is a version, edition, or adaptation of the described resource.*/
    "hasVersion": NamedNode;
    /*An unambiguous reference to the resource within a given context.*/
    "identifier": NamedNode;
    /*A process, used to engender knowledge, attitudes and skills, that the described resource is designed to support.*/
    "instructionalMethod": NamedNode;
    /*A pre-existing related resource that is substantially the same as the described resource, but in another format.*/
    "isFormatOf": NamedNode;
    /*A related resource in which the described resource is physically or logically included.*/
    "isPartOf": NamedNode;
    /*A related resource that references, cites, or otherwise points to the described resource.*/
    "isReferencedBy": NamedNode;
    /*A related resource that supplants, displaces, or supersedes the described resource.*/
    "isReplacedBy": NamedNode;
    /*A related resource that requires the described resource to support its function, delivery, or coherence.*/
    "isRequiredBy": NamedNode;
    /*A related resource of which the described resource is a version, edition, or adaptation.*/
    "isVersionOf": NamedNode;
    /*Date of formal issuance of the resource.*/
    "issued": NamedNode;
    /*A language of the resource.*/
    "language": NamedNode;
    /*A legal document giving official permission to do something with the resource.*/
    "license": NamedNode;
    /*An entity that mediates access to the resource.*/
    "mediator": NamedNode;
    /*The material or physical carrier of the resource.*/
    "medium": NamedNode;
    /*Date on which the resource was changed.*/
    "modified": NamedNode;
    /*A statement of any changes in ownership and custody of the resource since its creation that are significant for its authenticity, integrity, and interpretation.*/
    "provenance": NamedNode;
    /*An entity responsible for making the resource available.*/
    "publisher": NamedNode;
    /*A related resource that is referenced, cited, or otherwise pointed to by the described resource.*/
    "references": NamedNode;
    /*A related resource.*/
    "relation": NamedNode;
    /*A related resource that is supplanted, displaced, or superseded by the described resource.*/
    "replaces": NamedNode;
    /*A related resource that is required by the described resource to support its function, delivery, or coherence.*/
    "requires": NamedNode;
    /*Information about rights held in and over the resource.*/
    "rights": NamedNode;
    /*A person or organization owning or managing rights over the resource.*/
    "rightsHolder": NamedNode;
    /*A related resource from which the described resource is derived.*/
    "source": NamedNode;
    /*Spatial characteristics of the resource.*/
    "spatial": NamedNode;
    /*A topic of the resource.*/
    "subject": NamedNode;
    /*A list of subunits of the resource.*/
    "tableOfContents": NamedNode;
    /*Temporal characteristics of the resource.*/
    "temporal": NamedNode;
    /*A name given to the resource.*/
    "title": NamedNode;
    /*The nature or genre of the resource.*/
    "type": NamedNode;
    /*Date (often a range) of validity of a resource.*/
    "valid": NamedNode;
    "Extent": NamedNode;
};
export const dcterms: Dcterms = (namespace("http://purl.org/dc/terms/") as any);
