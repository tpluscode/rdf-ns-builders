import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Og {
    '': NamedNode<'http://ogp.me/ns#'>;
    /** [DEPRECATED] An album to which some audio belongs. */
    "audio:album": NamedNode<'http://ogp.me/ns#audio:album'>;
    /** [DEPRECATED] An artist of some audio. */
    "audio:artist": NamedNode<'http://ogp.me/ns#audio:artist'>;
    /** A relevant, secure audio URL for your object. */
    "audio:secure_url": NamedNode<'http://ogp.me/ns#audio:secure_url'>;
    /** [DEPRECATED] A title for some audio. */
    "audio:title": NamedNode<'http://ogp.me/ns#audio:title'>;
    /** The mime type of an audio file e.g., "application/mp3" */
    "audio:type": NamedNode<'http://ogp.me/ns#audio:type'>;
    /** A relevant audio URL for your object. */
    "audio": NamedNode<'http://ogp.me/ns#audio'>;
    /** [DEPRECATED] The country name of the resource e.g., "USA" */
    "country-name": NamedNode<'http://ogp.me/ns#country-name'>;
    /** A one to two sentence description of your object. */
    "description": NamedNode<'http://ogp.me/ns#description'>;
    /** The word to precede the object's title in a sentence (e.g., "the" in "the statue of liberty").  Valid values are "a", "an", "the", "", and "auto". */
    "determiner": NamedNode<'http://ogp.me/ns#determiner'>;
    /** [DEPRECATED] Email of the contact for your object. */
    "email": NamedNode<'http://ogp.me/ns#email'>;
    /** [DEPRECATED] Fax number of the contact for your object. */
    "fax_number": NamedNode<'http://ogp.me/ns#fax_number'>;
    /** The height of an image. */
    "image:height": NamedNode<'http://ogp.me/ns#image:height'>;
    /** A secure image URL which should represent your object within the graph. */
    "image:secure_url": NamedNode<'http://ogp.me/ns#image:secure_url'>;
    /** The mime type of an image. */
    "image:type": NamedNode<'http://ogp.me/ns#image:type'>;
    /** The width of an image. */
    "image:width": NamedNode<'http://ogp.me/ns#image:width'>;
    /** An image URL which should represent your object within the graph. */
    "image": NamedNode<'http://ogp.me/ns#image'>;
    /** [DEPRECATED] International Standard Book Number for you object. */
    "isbn": NamedNode<'http://ogp.me/ns#isbn'>;
    /** [DEPRECATED] The latitude of the resource e.g., the latitude of a company. */
    "latitude": NamedNode<'http://ogp.me/ns#latitude'>;
    /** A Unix locale in which this markup is rendered. */
    "locale": NamedNode<'http://ogp.me/ns#locale'>;
    /** [DEPRECATED] The locality of the resource e.g, "Palo Alto" */
    "locality": NamedNode<'http://ogp.me/ns#locality'>;
    /** [DEPRECATED] The longitude of the resource e.g., the longitude of a company. */
    "longitude": NamedNode<'http://ogp.me/ns#longitude'>;
    /** [DEPRECATED] Phone number of the contact for your object. */
    "phone_number": NamedNode<'http://ogp.me/ns#phone_number'>;
    /** [DEPRECATED] The postal code of the resource e.g., "94304" */
    "postal-code": NamedNode<'http://ogp.me/ns#postal-code'>;
    /** [DEPRECATED] The region of the resource e.g., "CA" */
    "region": NamedNode<'http://ogp.me/ns#region'>;
    /** If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb". */
    "site_name": NamedNode<'http://ogp.me/ns#site_name'>;
    /** [DEPRECATED] The street address of the resource e.g., "1601 S California Ave". */
    "street-address": NamedNode<'http://ogp.me/ns#street-address'>;
    /** The title of the object as it should appear within the graph, e.g.,  "The Rock". */
    "title": NamedNode<'http://ogp.me/ns#title'>;
    /** The type of your object, e.g., "movie".  Depending on the type you specify, other properties may also be required. */
    "type": NamedNode<'http://ogp.me/ns#type'>;
    /** [DEPRECATED] Universal Product Code for your object. */
    "upc": NamedNode<'http://ogp.me/ns#upc'>;
    /** The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/". */
    "url": NamedNode<'http://ogp.me/ns#url'>;
    /** The height of a video. */
    "video:height": NamedNode<'http://ogp.me/ns#video:height'>;
    /** A relevant, secure video URL for your object. */
    "video:secure_url": NamedNode<'http://ogp.me/ns#video:secure_url'>;
    /** The mime type of a video e.g., "application/x-shockwave-flash" */
    "video:type": NamedNode<'http://ogp.me/ns#video:type'>;
    /** The width of a video. */
    "video:width": NamedNode<'http://ogp.me/ns#video:width'>;
    /** A relevant video URL for your object. */
    "video": NamedNode<'http://ogp.me/ns#video'>;
}

const builder = namespace("http://ogp.me/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Og> & Og;
export const loose = builder as NamespaceBuilder & Og;
