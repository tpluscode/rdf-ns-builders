import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Rss = NamespaceBuilder & {
    /*An RSS information channel.*/
    "channel": NamedNode;
    /*A short text description of the subject.*/
    "description": NamedNode;
    /*An RSS image.*/
    "image": NamedNode;
    /*An RSS item.*/
    "item": NamedNode;
    /*Points to a list of rss:item elements that are members of the subject channel.*/
    "items": NamedNode;
    /*The URL to which an HTML rendering of the subject will link.*/
    "link": NamedNode;
    /*The text input field's (variable) name.*/
    "name": NamedNode;
    /*An RSS text input.*/
    "textinput": NamedNode;
    /*A descriptive title for the channel.*/
    "title": NamedNode;
    /*The URL of the image to used in the 'src' attribute of the channel's image tag when rendered as HTML.*/
    "url": NamedNode;
};
export const rss: Rss = (namespace("http://purl.org/rss/1.0/") as any);
