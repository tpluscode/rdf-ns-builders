import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Sf = NamespaceBuilder & {};
export const sf: Sf = (namespace("http://www.opengis.net/ont/sf#") as any);
