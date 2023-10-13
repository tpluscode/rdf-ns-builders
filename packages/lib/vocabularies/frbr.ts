import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Frbr {
    '': NamedNode<'http://purl.org/vocab/frbr/core#'>;
    /**
     * An expression abridged in another one.
     *
     * In the abridged expression some content of the previous expression is removed, but the result does not alter the content to the extent that it becomes a new work. The expressions resulting from such modification are generally autonomous in nature (i.e., they do not normally require reference to the prior expression in order to be used or understood). 
     */
    "abridgement": NamedNode<'http://purl.org/vocab/frbr/core#abridgement'>;
    /** It identifies the entire expression of an abridged one. */
    "abridgementOf": NamedNode<'http://purl.org/vocab/frbr/core#abridgementOf'>;
    /**
     * A work/expression adapted in another one.
     *
     * This property describe the modification of an original work that is sufficient in degree to warrant their being considered as new works, rather than simply different expressions of the same work. If there exists a relation of this kind among two different expressions, they always refer to different works.
     */
    "adaption": NamedNode<'http://purl.org/vocab/frbr/core#adaption'>;
    /** It identifies the work/expression of an adapted one. */
    "adaptionOf": NamedNode<'http://purl.org/vocab/frbr/core#adaptionOf'>;
    /**
     * A manifestation having another one as alternate.
     *
     * The alternate relationship involves manifestations that effectively serve as alternates for each other. The alternate relationship obtains, for example, when a publication, sound recording, video, etc. is issued in more than one format or when it is released simultaneously by different publishers in different countries.
     */
    "alternate": NamedNode<'http://purl.org/vocab/frbr/core#alternate'>;
    /** It identifies the manifestation of an alternative one. */
    "alternateOf": NamedNode<'http://purl.org/vocab/frbr/core#alternateOf'>;
    /**
     * An expression arranged in another one.
     *
     * In the arranged expression some content of the previous expression is changed in some way, but the result does not alter the content to the extent that it becomes a new work. The expressions resulting from such modification are generally autonomous in nature (i.e., they do not normally require reference to the prior expression in order to be used or understood).
     */
    "arrangement": NamedNode<'http://purl.org/vocab/frbr/core#arrangement'>;
    /** It identifies the original expression of an arranged one. */
    "arrangementOf": NamedNode<'http://purl.org/vocab/frbr/core#arrangementOf'>;
    /**
     * An expression work/expression having another one as complement.
     *
     * This property describes works that are intended to be combined with or inserted into the related work. In other words, they are intended to be integrated in some way with the other work, but were not part of the original conception of that prior work. If there exists a relation of this kind among two different expressions, then they always refer to different works.
     */
    "complement": NamedNode<'http://purl.org/vocab/frbr/core#complement'>;
    /** It identifies the work/expression of that is a complement of another one. */
    "complementOf": NamedNode<'http://purl.org/vocab/frbr/core#complementOf'>;
    /**
     * An abstract notion or idea.
     *
     * The entity defined as concept encompasses a comprehensive range of abstractions that may be the subject of a work: fields of knowledge, disciplines, schools of thought (philosophies, religions, political ideologies, etc.), theories, processes, techniques, practices, etc.  A concept may be broad in nature or narrowly defined and precise. 
     */
    "Concept": NamedNode<'http://purl.org/vocab/frbr/core#Concept'>;
    /**
     * An organization or group of individuals and/or organizations acting as a unit.
     *
     * The entity defined as corporate body encompasses organizations and groups of individuals and/or organizations that are identified by a particular name, including occasional groups and groups that are constituted as meetings, conferences, congresses, expeditions, exhibitions, festivals, fairs, etc.
     */
    "CorporateBody": NamedNode<'http://purl.org/vocab/frbr/core#CorporateBody'>;
    /** A work linked to its creator. */
    "creator": NamedNode<'http://purl.org/vocab/frbr/core#creator'>;
    /** The creator of a particular work. */
    "creatorOf": NamedNode<'http://purl.org/vocab/frbr/core#creatorOf'>;
    /** An expression embodied in a manifestation. */
    "embodiment": NamedNode<'http://purl.org/vocab/frbr/core#embodiment'>;
    /** A manifestation that embodies an expression. */
    "embodimentOf": NamedNode<'http://purl.org/vocab/frbr/core#embodimentOf'>;
    /** It describes different aspects of user interests in the products of intellectual or artistic artifact. */
    "Endeavour": NamedNode<'http://purl.org/vocab/frbr/core#Endeavour'>;
    /**
     * An action or occurrence.
     *
     * The entity defined as event encompasses a comprehensive range of actions and occurrences that may be the subject of a work: historical events, epochs, periods of time, etc. 
     */
    "Event": NamedNode<'http://purl.org/vocab/frbr/core#Event'>;
    /** A manifestation exemplified in an item. */
    "exemplar": NamedNode<'http://purl.org/vocab/frbr/core#exemplar'>;
    /** An item that exemplifies a manifestation. */
    "exemplarOf": NamedNode<'http://purl.org/vocab/frbr/core#exemplarOf'>;
    /**
     * The intellectual or artistic realization of a work in the form of alpha-numeric, musical, or choreographic notation, sound, image, object, movement, etc., or any combination of such forms.
     *
     * An expression is the specific intellectual or artistic form that a work takes each time it is "realized." Expression encompasses, for example, the specific words, sentences, paragraphs, etc. that result from the realization of a work in the form of a text, or the particular sounds, phrasing, etc. resulting from the realization of a musical work.
     */
    "Expression": NamedNode<'http://purl.org/vocab/frbr/core#Expression'>;
    /**
     * An work/expression imitated in another one.
     *
     * This property describes works that are intended to be an imitation another original work that is sufficient in degree to warrant their being considered as new works, rather than simply different expressions of the same work. If there exists a relation of this kind among two different expressions, then they always refer to different works.
     */
    "imitation": NamedNode<'http://purl.org/vocab/frbr/core#imitation'>;
    /** It identifies the work/expression of an imitated one. */
    "imitationOf": NamedNode<'http://purl.org/vocab/frbr/core#imitationOf'>;
    /**
     * A single exemplar of a manifestation.
     *
     * The entity defined as item is a concrete entity. It is in many instances a single physical object (e.g., a copy of a one-volume monograph, a single audio cassette, etc.). There are instances, however, where the entity defined as item comprises more than one physical object (e.g., a monograph issued as two separately bound volumes, a recording issued on three separate compact discs, etc.). 
     */
    "Item": NamedNode<'http://purl.org/vocab/frbr/core#Item'>;
    /**
     * The physical embodiment of an expression of a work.
     *
     * The entity defined as manifestation encompasses a wide range of materials and formats. As an entity, manifestation represents all the physical objects that bear the same characteristics, in respect to both intellectual content and physical form. 
     */
    "Manifestation": NamedNode<'http://purl.org/vocab/frbr/core#Manifestation'>;
    /**
     * A material thing.
     *
     * The entity defined as object encompasses a comprehensive range of material things that may be the subject of a work: animate and inanimate objects occurring in nature; fixed, movable, and moving objects that are the product of human creation; objects that no longer exist. 
     */
    "Object": NamedNode<'http://purl.org/vocab/frbr/core#Object'>;
    /** An item linked to its owner. */
    "owner": NamedNode<'http://purl.org/vocab/frbr/core#owner'>;
    /** The owner of a particular item. */
    "ownerOf": NamedNode<'http://purl.org/vocab/frbr/core#ownerOf'>;
    /** A part of an endeavour. */
    "part": NamedNode<'http://purl.org/vocab/frbr/core#part'>;
    /** An endeavour incorporating another endeavour. */
    "partOf": NamedNode<'http://purl.org/vocab/frbr/core#partOf'>;
    /** An individual. The entity defined as person encompasses individuals that are deceased as well as those that are living. */
    "Person": NamedNode<'http://purl.org/vocab/frbr/core#Person'>;
    /**
     * A location.
     *
     * The entity defined as place encompasses a comprehensive range of locations: terrestrial and extra-terrestrial; historical and contemporary; geographic features and geo-political jurisdictions. 
     */
    "Place": NamedNode<'http://purl.org/vocab/frbr/core#Place'>;
    /** A manifestation linked to its prodecer. */
    "producer": NamedNode<'http://purl.org/vocab/frbr/core#producer'>;
    /** The producer of a particular manifestation. */
    "producerOf": NamedNode<'http://purl.org/vocab/frbr/core#producerOf'>;
    /** A work realized through an expression. */
    "realization": NamedNode<'http://purl.org/vocab/frbr/core#realization'>;
    /** An expression that realizes a work. */
    "realizationOf": NamedNode<'http://purl.org/vocab/frbr/core#realizationOf'>;
    /** An expression linked to its realizer. */
    "realizer": NamedNode<'http://purl.org/vocab/frbr/core#realizer'>;
    /** The realizer of a particular expression. */
    "realizerOf": NamedNode<'http://purl.org/vocab/frbr/core#realizerOf'>;
    /**
     * An item reconfigured in another one.
     *
     * The reconfiguration relationship is one in which one or more items are changed in such a way that a new item or items result. Most commonly, an item of one manifestation is bound with an item of a different manifestation to make a new item. 
     */
    "reconfiguration": NamedNode<'http://purl.org/vocab/frbr/core#reconfiguration'>;
    /** It identifies the manifestation of a reconfigured one. */
    "reconfigurationOf": NamedNode<'http://purl.org/vocab/frbr/core#reconfigurationOf'>;
    "relatedEndeavour": NamedNode<'http://purl.org/vocab/frbr/core#relatedEndeavour'>;
    /**
     * A manifestation/item reproduced in another one.
     *
     * A reproduction indicates the relationship as it would be drawn from the first manifestation/item in the relationship to the second manifestation/item in the relationship.
     */
    "reproduction": NamedNode<'http://purl.org/vocab/frbr/core#reproduction'>;
    /** It identifies the manifestation/item of a reproduced one. */
    "reproductionOf": NamedNode<'http://purl.org/vocab/frbr/core#reproductionOf'>;
    /** Any endeavour having a particular entity that is responsible of it. */
    "responsibleEntity": NamedNode<'http://purl.org/vocab/frbr/core#responsibleEntity'>;
    /** It represents those responsible for the intellectual or artistic content, the physical production and dissemination, or the custodianship of any endeavour. */
    "ResponsibleEntity": NamedNode<'http://purl.org/vocab/frbr/core#ResponsibleEntity'>;
    /** An entity that is resposible for a particular endeavour. */
    "responsibleEntityOf": NamedNode<'http://purl.org/vocab/frbr/core#responsibleEntityOf'>;
    /**
     * An expression revised in another one.
     *
     * A revision has the intent to alter or update the content of the prior expression, but without changing the content so much that it becomes a new work.
     */
    "revision": NamedNode<'http://purl.org/vocab/frbr/core#revision'>;
    /** It identifies the previous expression of a revised one. */
    "revisionOf": NamedNode<'http://purl.org/vocab/frbr/core#revisionOf'>;
    /** A work linked to a particular subject it is talking about. */
    "subject": NamedNode<'http://purl.org/vocab/frbr/core#subject'>;
    /** It represents an additional set of entities that serve as the subjects of works. */
    "Subject": NamedNode<'http://purl.org/vocab/frbr/core#Subject'>;
    /** A subject a work talks abbout. */
    "subjectOf": NamedNode<'http://purl.org/vocab/frbr/core#subjectOf'>;
    /**
     * An expression work/expression having another one as successor.
     *
     * The successor type of relationship involves a kind of linear progression of content from one work/expression to the other. In some cases, the content of the successor may be closely connected to the content of the preceding work, which would result in a work that is referential. In others, such as with loosely connected parts of a trilogy, the successor will be autonomous. Serial publications that result from the merger or split of their predecessors and stand on their own without requiring reference to the predecessor are also examples of autonomous works that fall within the successor relationship type. If there exists a relation of this kind among two different expressions, then they always refer to different works.
     */
    "successor": NamedNode<'http://purl.org/vocab/frbr/core#successor'>;
    /** It identifies the previous work/expression of a succeeded one. */
    "successorOf": NamedNode<'http://purl.org/vocab/frbr/core#successorOf'>;
    /**
     * A work/expression summarized in another one.
     *
     * This property describe the summarization of an original work that is sufficient in degree to warrant their being considered as new works, rather than simply different expressions of the same work. If there exists a relation of this kind among two different expressions, they always refer to different works.
     */
    "summarization": NamedNode<'http://purl.org/vocab/frbr/core#summarization'>;
    /** It identifies the original work/expression of a summarized one. */
    "summarizationOf": NamedNode<'http://purl.org/vocab/frbr/core#summarizationOf'>;
    /**
     * An expression work/expression having another one as supplement.
     *
     * The supplement relationship type involves works/expressions that are intended to be used in conjunction with another work/expression. Some of these, such as indices, concordances, teachers' guides, glosses, and instruction manuals for electronic resources will be so closely associated with the content of the related work/expression that they are useless without the other work/expression.
     */
    "supplement": NamedNode<'http://purl.org/vocab/frbr/core#supplement'>;
    /** It identifies the work/expression of a particular supplement of it. */
    "supplementOf": NamedNode<'http://purl.org/vocab/frbr/core#supplementOf'>;
    /**
     * An work/expression transformed in another one.
     *
     * This property describes the transformation of an original work or expression into another work or expression that is sufficiently different in degree to warrant the product of the transformation being considered as a new work or expression, rather than simply a different expression of the original work. If there exists a frbr:transformation relation between two different expressions, then they always relate to different works.
     */
    "transformation": NamedNode<'http://purl.org/vocab/frbr/core#transformation'>;
    /** It identifies the original work/expression of a trasformed one. */
    "transformationOf": NamedNode<'http://purl.org/vocab/frbr/core#transformationOf'>;
    /**
     * An expression translated in another one.
     *
     * It allows to refer to a literal translation, in which the intent is to render the intellectual content of the previous expression as accurately as possible.
     */
    "translation": NamedNode<'http://purl.org/vocab/frbr/core#translation'>;
    /** It identifies the original expression of a translated one. */
    "translationOf": NamedNode<'http://purl.org/vocab/frbr/core#translationOf'>;
    /**
     * A distinct intellectual or artistic creation.
     *
     * A work is an abstract entity; there is no single material object one can point to as the work. We recognize the work through individual realizations or expressions of the work, but the work itself exists only in the commonality of content between and among the various expressions of the work. When we speak of Homer's Iliad as a work, our point of reference is not a particular recitation or text of the work, but the intellectual creation that lies behind all the various expressions of the work. 
     */
    "Work": NamedNode<'http://purl.org/vocab/frbr/core#Work'>;
}

const builder = namespace("http://purl.org/vocab/frbr/core#") as any;
export const strict = builder as NamespaceBuilder<keyof Frbr> & Frbr;
export const loose = builder as NamespaceBuilder & Frbr;
