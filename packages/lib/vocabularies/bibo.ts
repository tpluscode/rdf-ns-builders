import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Bibo {
    '': NamedNode<'http://purl.org/ontology/bibo/'>;
    /** A summary of the resource. */
    "abstract": NamedNode<'http://purl.org/ontology/bibo/abstract'>;
    /** A scholarly academic article, typically published in a journal. */
    "AcademicArticle": NamedNode<'http://purl.org/ontology/bibo/AcademicArticle'>;
    /** A legal decision that affirms a ruling. */
    "affirmedBy": NamedNode<'http://purl.org/ontology/bibo/affirmedBy'>;
    /** Critical or explanatory note for a Document. */
    "annotates": NamedNode<'http://purl.org/ontology/bibo/annotates'>;
    /** The date on which a legal case is argued before a court. Date is of format xsd:date */
    "argued": NamedNode<'http://purl.org/ontology/bibo/argued'>;
    /** A written composition in prose, usually nonfiction, on a specific topic, forming an independent part of a book or other publication, as a newspaper or magazine. */
    "Article": NamedNode<'http://purl.org/ontology/bibo/Article'>;
    "asin": NamedNode<'http://purl.org/ontology/bibo/asin'>;
    /** An audio document; aka record. */
    "AudioDocument": NamedNode<'http://purl.org/ontology/bibo/AudioDocument'>;
    /** An audio-visual document; film, video, and so forth. */
    "AudioVisualDocument": NamedNode<'http://purl.org/ontology/bibo/AudioVisualDocument'>;
    /** An ordered list of authors. Normally, this list is seen as a priority list that order authors by importance. */
    "authorList": NamedNode<'http://purl.org/ontology/bibo/authorList'>;
    "bdarcus": NamedNode<'http://purl.org/ontology/bibo/bdarcus'>;
    /** Draft legislation presented for discussion to a legal body. */
    "Bill": NamedNode<'http://purl.org/ontology/bibo/Bill'>;
    /** A written or printed work of fiction or nonfiction, usually on sheets of paper fastened or bound together within covers. */
    "Book": NamedNode<'http://purl.org/ontology/bibo/Book'>;
    /** A section of a book. */
    "BookSection": NamedNode<'http://purl.org/ontology/bibo/BookSection'>;
    /** A written argument submitted to a court. */
    "Brief": NamedNode<'http://purl.org/ontology/bibo/Brief'>;
    /** An chapter number */
    "chapter": NamedNode<'http://purl.org/ontology/bibo/chapter'>;
    /** A chapter of a book. */
    "Chapter": NamedNode<'http://purl.org/ontology/bibo/Chapter'>;
    /**
     * Relates a document to another document that cites the
     * first document.
     */
    "citedBy": NamedNode<'http://purl.org/ontology/bibo/citedBy'>;
    /**
     * Relates a document to another document that is cited
     * by the first document as reference, comment, review, quotation or for
     * another purpose.
     */
    "cites": NamedNode<'http://purl.org/ontology/bibo/cites'>;
    /** A collection of statutes. */
    "Code": NamedNode<'http://purl.org/ontology/bibo/Code'>;
    "coden": NamedNode<'http://purl.org/ontology/bibo/coden'>;
    /** A document that simultaneously contains other documents. */
    "CollectedDocument": NamedNode<'http://purl.org/ontology/bibo/CollectedDocument'>;
    /** A collection of Documents or Collections */
    "Collection": NamedNode<'http://purl.org/ontology/bibo/Collection'>;
    /** A meeting for consultation or discussion. */
    "Conference": NamedNode<'http://purl.org/ontology/bibo/Conference'>;
    /** This property is for a plain-text rendering of the content of a Document. While the plain-text content of an entire document could be described by this property. */
    "content": NamedNode<'http://purl.org/ontology/bibo/content'>;
    /** An ordered list of contributors. Normally, this list is seen as a priority list that order contributors by importance. */
    "contributorList": NamedNode<'http://purl.org/ontology/bibo/contributorList'>;
    /** A court associated with a legal document; for example, that which issues a decision. */
    "court": NamedNode<'http://purl.org/ontology/bibo/court'>;
    /** A collection of legal cases. */
    "CourtReporter": NamedNode<'http://purl.org/ontology/bibo/CourtReporter'>;
    /** The thesis degree. */
    "degree": NamedNode<'http://purl.org/ontology/bibo/degree'>;
    /** A Film director. */
    "director": NamedNode<'http://purl.org/ontology/bibo/director'>;
    /** Distributor of a document or a collection of documents. */
    "distributor": NamedNode<'http://purl.org/ontology/bibo/distributor'>;
    /** A document (noun) is a bounded physical representation of body of information designed with the capacity (and usually intent) to communicate. A document may manifest symbolic, diagrammatic or sensory-representational information. */
    "Document": NamedNode<'http://purl.org/ontology/bibo/Document'>;
    /** a distinct part of a larger document or collected document. */
    "DocumentPart": NamedNode<'http://purl.org/ontology/bibo/DocumentPart'>;
    /** The status of the publication of a document. */
    "DocumentStatus": NamedNode<'http://purl.org/ontology/bibo/DocumentStatus'>;
    "doi": NamedNode<'http://purl.org/ontology/bibo/doi'>;
    "eanucc13": NamedNode<'http://purl.org/ontology/bibo/eanucc13'>;
    /** An edited book. */
    "EditedBook": NamedNode<'http://purl.org/ontology/bibo/EditedBook'>;
    /** The name defining a special edition of a document. Normally its a literal value composed of a version number and words. */
    "edition": NamedNode<'http://purl.org/ontology/bibo/edition'>;
    /** A person having managerial and sometimes policy-making responsibility for the editorial part of a publishing firm or of a newspaper, magazine, or other publication. */
    "editor": NamedNode<'http://purl.org/ontology/bibo/editor'>;
    /** An ordered list of editors. Normally, this list is seen as a priority list that order editors by importance. */
    "editorList": NamedNode<'http://purl.org/ontology/bibo/editorList'>;
    "eissn": NamedNode<'http://purl.org/ontology/bibo/eissn'>;
    /** A written communication addressed to a person or organization and transmitted electronically. */
    "Email": NamedNode<'http://purl.org/ontology/bibo/Email'>;
    "Event": NamedNode<'http://purl.org/ontology/bibo/Event'>;
    /** A passage selected from a larger work. */
    "Excerpt": NamedNode<'http://purl.org/ontology/bibo/Excerpt'>;
    "fgiasson": NamedNode<'http://purl.org/ontology/bibo/fgiasson'>;
    /** aka movie. */
    "Film": NamedNode<'http://purl.org/ontology/bibo/Film'>;
    "gtin14": NamedNode<'http://purl.org/ontology/bibo/gtin14'>;
    "handle": NamedNode<'http://purl.org/ontology/bibo/handle'>;
    /** An instance or a session in which testimony and arguments are presented, esp. before an official, as a judge in a lawsuit. */
    "Hearing": NamedNode<'http://purl.org/ontology/bibo/Hearing'>;
    "identifier": NamedNode<'http://purl.org/ontology/bibo/identifier'>;
    /** A document that presents visual or diagrammatic information. */
    "Image": NamedNode<'http://purl.org/ontology/bibo/Image'>;
    /** A formalized discussion between two or more people. */
    "Interview": NamedNode<'http://purl.org/ontology/bibo/Interview'>;
    /** An agent that is interviewed by another agent. */
    "interviewee": NamedNode<'http://purl.org/ontology/bibo/interviewee'>;
    /** An agent that interview another agent. */
    "interviewer": NamedNode<'http://purl.org/ontology/bibo/interviewer'>;
    "isbn": NamedNode<'http://purl.org/ontology/bibo/isbn'>;
    "isbn10": NamedNode<'http://purl.org/ontology/bibo/isbn10'>;
    "isbn13": NamedNode<'http://purl.org/ontology/bibo/isbn13'>;
    "issn": NamedNode<'http://purl.org/ontology/bibo/issn'>;
    /** An issue number */
    "issue": NamedNode<'http://purl.org/ontology/bibo/issue'>;
    /** something that is printed or published and distributed, esp. a given number of a periodical */
    "Issue": NamedNode<'http://purl.org/ontology/bibo/Issue'>;
    /** An entity responsible for issuing often informally published documents such as press releases, reports, etc. */
    "issuer": NamedNode<'http://purl.org/ontology/bibo/issuer'>;
    /** A periodical of scholarly journal Articles. */
    "Journal": NamedNode<'http://purl.org/ontology/bibo/Journal'>;
    "lccn": NamedNode<'http://purl.org/ontology/bibo/lccn'>;
    /** A document accompanying a legal case. */
    "LegalCaseDocument": NamedNode<'http://purl.org/ontology/bibo/LegalCaseDocument'>;
    /** A document containing an authoritative determination (as a decree or judgment) made after consideration of facts or law. */
    "LegalDecision": NamedNode<'http://purl.org/ontology/bibo/LegalDecision'>;
    /** A legal document; for example, a court decision, a brief, and so forth. */
    "LegalDocument": NamedNode<'http://purl.org/ontology/bibo/LegalDocument'>;
    /** A legal document proposing or enacting a law or a group of laws. */
    "Legislation": NamedNode<'http://purl.org/ontology/bibo/Legislation'>;
    /** A written or printed communication addressed to a person or organization and usually transmitted by mail. */
    "Letter": NamedNode<'http://purl.org/ontology/bibo/Letter'>;
    /** A description (often numeric) that locates an item within a containing document or collection. */
    "locator": NamedNode<'http://purl.org/ontology/bibo/locator'>;
    /** A periodical of magazine Articles. A magazine is a publication that is issued periodically, usually bound in a paper cover, and typically contains essays, stories, poems, etc., by many writers, and often photographs and drawings, frequently specializing in a particular subject or area, as hobbies, news, or sports. */
    "Magazine": NamedNode<'http://purl.org/ontology/bibo/Magazine'>;
    /** A small reference book, especially one giving instructions. */
    "Manual": NamedNode<'http://purl.org/ontology/bibo/Manual'>;
    /** An unpublished Document, which may also be submitted to a publisher for publication. */
    "Manuscript": NamedNode<'http://purl.org/ontology/bibo/Manuscript'>;
    /** A graphical depiction of geographic features. */
    "Map": NamedNode<'http://purl.org/ontology/bibo/Map'>;
    /** A loose, thematic, collection of Documents, often Books. */
    "MultiVolumeBook": NamedNode<'http://purl.org/ontology/bibo/MultiVolumeBook'>;
    /** A periodical of documents, usually issued daily or weekly, containing current news, editorials, feature articles, and usually advertising. */
    "Newspaper": NamedNode<'http://purl.org/ontology/bibo/Newspaper'>;
    /** Notes or annotations about a resource. */
    "Note": NamedNode<'http://purl.org/ontology/bibo/Note'>;
    /** A generic item or document number. Not to be confused with issue number. */
    "number": NamedNode<'http://purl.org/ontology/bibo/number'>;
    /** The number of pages contained in a document */
    "numPages": NamedNode<'http://purl.org/ontology/bibo/numPages'>;
    /** The number of volumes contained in a collection of documents (usually a series, periodical, etc.). */
    "numVolumes": NamedNode<'http://purl.org/ontology/bibo/numVolumes'>;
    "oclcnum": NamedNode<'http://purl.org/ontology/bibo/oclcnum'>;
    /** The organizer of an event; includes conference organizers, but also government agencies or other bodies that are responsible for conducting hearings. */
    "organizer": NamedNode<'http://purl.org/ontology/bibo/organizer'>;
    /** Owner of a document or a collection of documents. */
    "owner": NamedNode<'http://purl.org/ontology/bibo/owner'>;
    /** Ending page number within a continuous page range. */
    "pageEnd": NamedNode<'http://purl.org/ontology/bibo/pageEnd'>;
    /** A string of non-contiguous page spans that locate a Document within a Collection. Example: 23-25, 34, 54-56. For continuous page ranges, use the pageStart and pageEnd properties. */
    "pages": NamedNode<'http://purl.org/ontology/bibo/pages'>;
    /** Starting page number within a continuous page range. */
    "pageStart": NamedNode<'http://purl.org/ontology/bibo/pageStart'>;
    /** A document describing the exclusive right granted by a government to an inventor to manufacture, use, or sell an invention for a certain number of years. */
    "Patent": NamedNode<'http://purl.org/ontology/bibo/Patent'>;
    /** A public performance. */
    "Performance": NamedNode<'http://purl.org/ontology/bibo/Performance'>;
    "performer": NamedNode<'http://purl.org/ontology/bibo/performer'>;
    /** A group of related documents issued at regular intervals. */
    "Periodical": NamedNode<'http://purl.org/ontology/bibo/Periodical'>;
    /** A communication between an agent and one or more specific recipients. */
    "PersonalCommunication": NamedNode<'http://purl.org/ontology/bibo/PersonalCommunication'>;
    /** A personal communication manifested in some document. */
    "PersonalCommunicationDocument": NamedNode<'http://purl.org/ontology/bibo/PersonalCommunicationDocument'>;
    "pmid": NamedNode<'http://purl.org/ontology/bibo/pmid'>;
    /** The prefix of a name */
    "prefixName": NamedNode<'http://purl.org/ontology/bibo/prefixName'>;
    /** Relates a document to an event; for example, a paper to a conference. */
    "presentedAt": NamedNode<'http://purl.org/ontology/bibo/presentedAt'>;
    /** Relates an event to associated documents; for example, conference to a paper. */
    "presents": NamedNode<'http://purl.org/ontology/bibo/presents'>;
    /** A compilation of documents published from an event, such as a conference. */
    "Proceedings": NamedNode<'http://purl.org/ontology/bibo/Proceedings'>;
    /** Producer of a document or a collection of documents. */
    "producer": NamedNode<'http://purl.org/ontology/bibo/producer'>;
    /** An excerpted collection of words. */
    "Quote": NamedNode<'http://purl.org/ontology/bibo/Quote'>;
    /** An agent that receives a communication document. */
    "recipient": NamedNode<'http://purl.org/ontology/bibo/recipient'>;
    /** A document that presents authoritative reference information, such as a dictionary or encylopedia . */
    "ReferenceSource": NamedNode<'http://purl.org/ontology/bibo/ReferenceSource'>;
    /** A document describing an account or statement describing in detail an event, situation, or the like, usually as the result of observation, inquiry, etc.. */
    "Report": NamedNode<'http://purl.org/ontology/bibo/Report'>;
    /** The resource in which another resource is reproduced. */
    "reproducedIn": NamedNode<'http://purl.org/ontology/bibo/reproducedIn'>;
    /** A legal decision that reverses a ruling. */
    "reversedBy": NamedNode<'http://purl.org/ontology/bibo/reversedBy'>;
    /** Relates a review document to a reviewed thing (resource, item, etc.). */
    "reviewOf": NamedNode<'http://purl.org/ontology/bibo/reviewOf'>;
    /** A section number */
    "section": NamedNode<'http://purl.org/ontology/bibo/section'>;
    /** A loose, thematic, collection of Documents, often Books. */
    "Series": NamedNode<'http://purl.org/ontology/bibo/Series'>;
    "shortDescription": NamedNode<'http://purl.org/ontology/bibo/shortDescription'>;
    /** The abbreviation of a title. */
    "shortTitle": NamedNode<'http://purl.org/ontology/bibo/shortTitle'>;
    "sici": NamedNode<'http://purl.org/ontology/bibo/sici'>;
    /** A slide in a slideshow */
    "Slide": NamedNode<'http://purl.org/ontology/bibo/Slide'>;
    /** A presentation of a series of slides, usually presented in front of an audience with written text and images. */
    "Slideshow": NamedNode<'http://purl.org/ontology/bibo/Slideshow'>;
    /** A document describing a specification. */
    "Specification": NamedNode<'http://purl.org/ontology/bibo/Specification'>;
    /** A document describing a standard: a specification organized through a standards body. */
    "Standard": NamedNode<'http://purl.org/ontology/bibo/Standard'>;
    /** The publication status of (typically academic) content. */
    "status": NamedNode<'http://purl.org/ontology/bibo/status'>;
    /** A bill enacted into law. */
    "Statute": NamedNode<'http://purl.org/ontology/bibo/Statute'>;
    /** A legal decision on appeal that takes action on a case (affirming it, reversing it, etc.). */
    "subsequentLegalDecision": NamedNode<'http://purl.org/ontology/bibo/subsequentLegalDecision'>;
    /** The suffix of a name */
    "suffixName": NamedNode<'http://purl.org/ontology/bibo/suffixName'>;
    /** A document created to summarize research findings associated with the completion of an academic degree. */
    "Thesis": NamedNode<'http://purl.org/ontology/bibo/Thesis'>;
    /** The academic degree of a Thesis */
    "ThesisDegree": NamedNode<'http://purl.org/ontology/bibo/ThesisDegree'>;
    /** Relates a document to some transcribed original. */
    "transcriptOf": NamedNode<'http://purl.org/ontology/bibo/transcriptOf'>;
    /** Relates a translated document to the original document. */
    "translationOf": NamedNode<'http://purl.org/ontology/bibo/translationOf'>;
    /** A person who translates written document from one language to another. */
    "translator": NamedNode<'http://purl.org/ontology/bibo/translator'>;
    "upc": NamedNode<'http://purl.org/ontology/bibo/upc'>;
    /** Universal Resource Identifier of a document */
    "uri": NamedNode<'http://purl.org/ontology/bibo/uri'>;
    /** A volume number */
    "volume": NamedNode<'http://purl.org/ontology/bibo/volume'>;
    /** A web page is an online document available (at least initially) on the world wide web. A web page is written first and foremost to appear on the web, as distinct from other online resources such as books, manuscripts or audio documents which use the web primarily as a distribution mechanism alongside other more traditional methods such as print. */
    "Webpage": NamedNode<'http://purl.org/ontology/bibo/Webpage'>;
    /** A group of Webpages accessible on the Web. */
    "Website": NamedNode<'http://purl.org/ontology/bibo/Website'>;
    /** A seminar, discussion group, or the like, that emphasizes zxchange of ideas and the demonstration and application of techniques, skills, etc. */
    "Workshop": NamedNode<'http://purl.org/ontology/bibo/Workshop'>;
}

const builder = namespace("http://purl.org/ontology/bibo/") as any;
export const strict = builder as NamespaceBuilder<keyof Bibo> & Bibo;
export const loose = builder as NamespaceBuilder & Bibo;
