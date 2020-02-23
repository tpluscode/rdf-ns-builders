import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Dtype {
    "CodeList": NamedNode;
    "CompositeCodeList": NamedNode;
    "DerivedCodeList": NamedNode;
    "EnumeratedValue": NamedNode;
    "Enumeration": NamedNode;
    "SimpleCodeList": NamedNode;
    "ValueReference": NamedNode;
    "code": NamedNode;
    "compositeOf": NamedNode;
    "defaultValue": NamedNode;
    "derivedFrom": NamedNode;
    "hasMember": NamedNode;
    "isInvalid": NamedNode;
    "literal": NamedNode;
    "numericUnion": NamedNode;
    "order": NamedNode;
    "orderIndex": NamedNode;
    "position": NamedNode;
    "refersTo": NamedNode;
    "type": NamedNode;
    "value": NamedNode;
}
export const dtype: Dtype = (namespace(prefixes.dtype) as any);
