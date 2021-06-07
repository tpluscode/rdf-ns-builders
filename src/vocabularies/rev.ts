import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rev {
    
}

const builder = namespace("http://purl.org/stuff/rev#") as any;
export const strict = builder as NamespaceBuilder<keyof Rev> & Rev;
export const loose = builder as NamespaceBuilder & Rev;
