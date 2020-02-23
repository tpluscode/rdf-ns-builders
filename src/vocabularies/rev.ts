import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Rev {
}
export const rev: Rev = (namespace(prefixes.rev) as any);
