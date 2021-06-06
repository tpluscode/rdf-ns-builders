import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Rev {
    
}

const builder = namespace("http://purl.org/stuff/rev#") as any;
export const strict = builder as NamespaceBuilder<keyof Rev> & Rev;
export const loose = builder as NamespaceBuilder & Rev;
