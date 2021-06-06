import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Ctag {
    
}

const builder = namespace("http://commontag.org/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Ctag> & Ctag;
export const loose = builder as NamespaceBuilder & Ctag;
