import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rss {
    '': NamedNode<'http://purl.org/rss/1.0/'>;
    /** An RSS information channel. */
    "channel": NamedNode<'http://purl.org/rss/1.0/channel'>;
    /** A short text description of the subject. */
    "description": NamedNode<'http://purl.org/rss/1.0/description'>;
    /** An RSS image. */
    "image": NamedNode<'http://purl.org/rss/1.0/image'>;
    /** An RSS item. */
    "item": NamedNode<'http://purl.org/rss/1.0/item'>;
    /** Points to a list of rss:item elements that are members of the subject channel. */
    "items": NamedNode<'http://purl.org/rss/1.0/items'>;
    /** The URL to which an HTML rendering of the subject will link. */
    "link": NamedNode<'http://purl.org/rss/1.0/link'>;
    /** The text input field's (variable) name. */
    "name": NamedNode<'http://purl.org/rss/1.0/name'>;
    /** An RSS text input. */
    "textinput": NamedNode<'http://purl.org/rss/1.0/textinput'>;
    /** A descriptive title for the channel. */
    "title": NamedNode<'http://purl.org/rss/1.0/title'>;
    /** The URL of the image to used in the 'src' attribute of the channel's image tag when rendered as HTML. */
    "url": NamedNode<'http://purl.org/rss/1.0/url'>;
}

const builder = namespace("http://purl.org/rss/1.0/") as any;
export const strict = builder as NamespaceBuilder<keyof Rss> & Rss;
export const loose = builder as NamespaceBuilder & Rss;
