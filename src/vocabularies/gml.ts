import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Gml = NamespaceBuilder & {};
export const gml: Gml = (namespace("http://www.opengis.net/ont/gml#") as any);
