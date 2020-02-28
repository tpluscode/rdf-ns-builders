import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Dc11 = NamespaceBuilder & {
    /*An entity responsible for making contributions to the resource.*/
    "contributor": NamedNode;
    /*The spatial or temporal topic of the resource, spatial applicability of the resource, or jurisdiction under which the resource is relevant.*/
    "coverage": NamedNode;
    /*An entity primarily responsible for making the resource.*/
    "creator": NamedNode;
    /*A point or period of time associated with an event in the lifecycle of the resource.*/
    "date": NamedNode;
    /*An account of the resource.*/
    "description": NamedNode;
    /*The file format, physical medium, or dimensions of the resource.*/
    "format": NamedNode;
    /*An unambiguous reference to the resource within a given context.*/
    "identifier": NamedNode;
    /*A language of the resource.*/
    "language": NamedNode;
    /*An entity responsible for making the resource available.*/
    "publisher": NamedNode;
    /*A related resource.*/
    "relation": NamedNode;
    /*Information about rights held in and over the resource.*/
    "rights": NamedNode;
    /*A related resource from which the described resource is derived.*/
    "source": NamedNode;
    /*The topic of the resource.*/
    "subject": NamedNode;
    /*A name given to the resource.*/
    "title": NamedNode;
    /*The nature or genre of the resource.*/
    "type": NamedNode;
};
export const dc11: Dc11 = (namespace("http://purl.org/dc/elements/1.1/") as any);
