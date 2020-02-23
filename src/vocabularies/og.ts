import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Og {
    /*[DEPRECATED] An album to which some audio belongs.*/
    "audio:album": NamedNode;
    /*[DEPRECATED] An artist of some audio.*/
    "audio:artist": NamedNode;
    /*A relevant, secure audio URL for your object.*/
    "audio:secure_url": NamedNode;
    /*[DEPRECATED] A title for some audio.*/
    "audio:title": NamedNode;
    /*The mime type of an audio file e.g., "application/mp3"*/
    "audio:type": NamedNode;
    /*A relevant audio URL for your object.*/
    "audio": NamedNode;
    /*[DEPRECATED] The country name of the resource e.g., "USA"*/
    "country-name": NamedNode;
    /*A one to two sentence description of your object.*/
    "description": NamedNode;
    /*The word to precede the object's title in a sentence (e.g., "the" in "the statue of liberty").  Valid values are "a", "an", "the", "", and "auto".*/
    "determiner": NamedNode;
    /*[DEPRECATED] Email of the contact for your object.*/
    "email": NamedNode;
    /*[DEPRECATED] Fax number of the contact for your object.*/
    "fax_number": NamedNode;
    /*The height of an image.*/
    "image:height": NamedNode;
    /*A secure image URL which should represent your object within the graph.*/
    "image:secure_url": NamedNode;
    /*The mime type of an image.*/
    "image:type": NamedNode;
    /*The width of an image.*/
    "image:width": NamedNode;
    /*An image URL which should represent your object within the graph.*/
    "image": NamedNode;
    /*[DEPRECATED] International Standard Book Number for you object.*/
    "isbn": NamedNode;
    /*[DEPRECATED] The latitude of the resource e.g., the latitude of a company.*/
    "latitude": NamedNode;
    /*A Unix locale in which this markup is rendered.*/
    "locale": NamedNode;
    /*[DEPRECATED] The locality of the resource e.g, "Palo Alto"*/
    "locality": NamedNode;
    /*[DEPRECATED] The longitude of the resource e.g., the longitude of a company.*/
    "longitude": NamedNode;
    /*[DEPRECATED] Phone number of the contact for your object.*/
    "phone_number": NamedNode;
    /*[DEPRECATED] The postal code of the resource e.g., "94304"*/
    "postal-code": NamedNode;
    /*[DEPRECATED] The region of the resource e.g., "CA"*/
    "region": NamedNode;
    /*If your object is part of a larger web site, the name which should be displayed for the overall site. e.g., "IMDb".*/
    "site_name": NamedNode;
    /*[DEPRECATED] The street address of the resource e.g., "1601 S California Ave".*/
    "street-address": NamedNode;
    /*The title of the object as it should appear within the graph, e.g.,  "The Rock".*/
    "title": NamedNode;
    /*The type of your object, e.g., "movie".  Depending on the type you specify, other properties may also be required.*/
    "type": NamedNode;
    /*[DEPRECATED] Universal Product Code for your object.*/
    "upc": NamedNode;
    /*The canonical URL of your object that will be used as its permanent ID in the graph, e.g., "http://www.imdb.com/title/tt0117500/".*/
    "url": NamedNode;
    /*The height of a video.*/
    "video:height": NamedNode;
    /*A relevant, secure video URL for your object.*/
    "video:secure_url": NamedNode;
    /*The mime type of a video e.g., "application/x-shockwave-flash"*/
    "video:type": NamedNode;
    /*The width of a video.*/
    "video:width": NamedNode;
    /*A relevant video URL for your object.*/
    "video": NamedNode;
}
export const og: Og = (namespace(prefixes.og) as any);
