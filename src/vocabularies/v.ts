import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type V = NamespaceBuilder & {};
export const v: V = (namespace("http://rdf.data-vocabulary.org/#") as any);
