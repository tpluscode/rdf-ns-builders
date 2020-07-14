import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Ctag = NamespaceBuilder & {};
export const ctag: Ctag = (namespace("http://commontag.org/ns#") as any);
