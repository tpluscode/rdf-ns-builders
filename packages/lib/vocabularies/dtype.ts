import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dtype {
    '': NamedNode<'http://www.linkedmodel.org/schema/dtype#'>;
    "code": NamedNode<'http://www.linkedmodel.org/schema/dtype#code'>;
    "CodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#CodeList'>;
    "CompositeCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#CompositeCodeList'>;
    "compositeOf": NamedNode<'http://www.linkedmodel.org/schema/dtype#compositeOf'>;
    "defaultValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#defaultValue'>;
    "DerivedCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#DerivedCodeList'>;
    "derivedFrom": NamedNode<'http://www.linkedmodel.org/schema/dtype#derivedFrom'>;
    "EnumeratedValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#EnumeratedValue'>;
    "Enumeration": NamedNode<'http://www.linkedmodel.org/schema/dtype#Enumeration'>;
    "hasMember": NamedNode<'http://www.linkedmodel.org/schema/dtype#hasMember'>;
    "isInvalid": NamedNode<'http://www.linkedmodel.org/schema/dtype#isInvalid'>;
    "literal": NamedNode<'http://www.linkedmodel.org/schema/dtype#literal'>;
    "numericUnion": NamedNode<'http://www.linkedmodel.org/schema/dtype#numericUnion'>;
    "order": NamedNode<'http://www.linkedmodel.org/schema/dtype#order'>;
    "orderIndex": NamedNode<'http://www.linkedmodel.org/schema/dtype#orderIndex'>;
    "position": NamedNode<'http://www.linkedmodel.org/schema/dtype#position'>;
    "refersTo": NamedNode<'http://www.linkedmodel.org/schema/dtype#refersTo'>;
    "SimpleCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#SimpleCodeList'>;
    "type": NamedNode<'http://www.linkedmodel.org/schema/dtype#type'>;
    "value": NamedNode<'http://www.linkedmodel.org/schema/dtype#value'>;
    "ValueReference": NamedNode<'http://www.linkedmodel.org/schema/dtype#ValueReference'>;
}

const builder = namespace("http://www.linkedmodel.org/schema/dtype#") as any;
export const strict = builder as NamespaceBuilder<keyof Dtype> & Dtype;
export const loose = builder as NamespaceBuilder & Dtype;
