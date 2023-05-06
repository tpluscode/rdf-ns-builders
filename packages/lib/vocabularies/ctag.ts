import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Ctag {
    '': NamedNode<'http://commontag.org/ns#'>;
    /** A Tag asserted by the author of a content resource. */
    "AuthorTag": NamedNode<'http://commontag.org/ns#AuthorTag'>;
    /** A Common Tag associating a URI and a keyword to annotate a resource. */
    "Tag": NamedNode<'http://commontag.org/ns#Tag'>;
    /** A Tag asserted by an automated tool on a content resource. */
    "AutoTag": NamedNode<'http://commontag.org/ns#AutoTag'>;
    /** A Tag asserted by the reader (consumer) of a content resource. */
    "ReaderTag": NamedNode<'http://commontag.org/ns#ReaderTag'>;
    /** Content which has one or more Common Tag. */
    "TaggedContent": NamedNode<'http://commontag.org/ns#TaggedContent'>;
    /** A resource (URI) representing the concepts described by the content. */
    "isAbout": NamedNode<'http://commontag.org/ns#isAbout'>;
    /** A local, human-readable name for a Tag. */
    "label": NamedNode<'http://commontag.org/ns#label'>;
    /** A a resource (URI) representing the conceptual meaning of a Tag. */
    "means": NamedNode<'http://commontag.org/ns#means'>;
    /** Links a resource to a Common Tag. */
    "tagged": NamedNode<'http://commontag.org/ns#tagged'>;
    /** The date the Tag was assigned. */
    "taggingDate": NamedNode<'http://commontag.org/ns#taggingDate'>;
}

const builder = namespace("http://commontag.org/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Ctag> & Ctag;
export const loose = builder as NamespaceBuilder & Ctag;
