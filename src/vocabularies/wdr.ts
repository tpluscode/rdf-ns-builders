import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Wdr = NamespaceBuilder & {};
export const wdr: Wdr = (namespace("http://www.w3.org/2007/05/powder#") as any);
