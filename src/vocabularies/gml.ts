import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Gml {
    
}

const builder = namespace("http://www.opengis.net/ont/gml#") as any;
export const strict = builder as NamespaceBuilder<keyof Gml> & Gml;
export const loose = builder as NamespaceBuilder & Gml;
