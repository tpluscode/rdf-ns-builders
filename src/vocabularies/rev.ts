import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Rev = NamespaceBuilder & {};
export const rev: Rev = (namespace("http://purl.org/stuff/rev#") as any);
