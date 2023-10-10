import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dcmitype {
    '': NamedNode<'http://purl.org/dc/dcmitype/'>;
    /** An aggregation of resources. */
    "Collection": NamedNode<'http://purl.org/dc/dcmitype/Collection'>;
    /** Data encoded in a defined structure. */
    "Dataset": NamedNode<'http://purl.org/dc/dcmitype/Dataset'>;
    /** A non-persistent, time-based occurrence. */
    "Event": NamedNode<'http://purl.org/dc/dcmitype/Event'>;
    /** A visual representation other than text. */
    "Image": NamedNode<'http://purl.org/dc/dcmitype/Image'>;
    /** A resource requiring interaction from the user to be understood, executed, or experienced. */
    "InteractiveResource": NamedNode<'http://purl.org/dc/dcmitype/InteractiveResource'>;
    /** A series of visual representations imparting an impression of motion when shown in succession. */
    "MovingImage": NamedNode<'http://purl.org/dc/dcmitype/MovingImage'>;
    /** An inanimate, three-dimensional object or substance. */
    "PhysicalObject": NamedNode<'http://purl.org/dc/dcmitype/PhysicalObject'>;
    /** A system that provides one or more functions. */
    "Service": NamedNode<'http://purl.org/dc/dcmitype/Service'>;
    /** A computer program in source or compiled form. */
    "Software": NamedNode<'http://purl.org/dc/dcmitype/Software'>;
    /** A resource primarily intended to be heard. */
    "Sound": NamedNode<'http://purl.org/dc/dcmitype/Sound'>;
    /** A static visual representation. */
    "StillImage": NamedNode<'http://purl.org/dc/dcmitype/StillImage'>;
    /** A resource consisting primarily of words for reading. */
    "Text": NamedNode<'http://purl.org/dc/dcmitype/Text'>;
}

const builder = namespace("http://purl.org/dc/dcmitype/") as any;
export const strict = builder as NamespaceBuilder<keyof Dcmitype> & Dcmitype;
export const loose = builder as NamespaceBuilder & Dcmitype;
