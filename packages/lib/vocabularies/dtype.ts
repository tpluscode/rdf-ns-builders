import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dtype {
    '': NamedNode<'http://www.linkedmodel.org/schema/dtype#'>;
    /** A unique value that is assigned to an enumeration member. */
    "code": NamedNode<'http://www.linkedmodel.org/schema/dtype#code'>;
    "CodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#CodeList'>;
    "CompositeCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#CompositeCodeList'>;
    "compositeOf": NamedNode<'http://www.linkedmodel.org/schema/dtype#compositeOf'>;
    "dateUnion": NamedNode<'http://www.linkedmodel.org/schema/dtype#dateUnion'>;
    "defaultObjectValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#defaultObjectValue'>;
    "defaultValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#defaultValue'>;
    "DerivedCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#DerivedCodeList'>;
    "derivedFrom": NamedNode<'http://www.linkedmodel.org/schema/dtype#derivedFrom'>;
    "EnumeratedValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#EnumeratedValue'>;
    "Enumeration": NamedNode<'http://www.linkedmodel.org/schema/dtype#Enumeration'>;
    "GMD_DTYPE": NamedNode<'http://www.linkedmodel.org/schema/dtype#GMD_DTYPE'>;
    "hasMember": NamedNode<'http://www.linkedmodel.org/schema/dtype#hasMember'>;
    "isInvalid": NamedNode<'http://www.linkedmodel.org/schema/dtype#isInvalid'>;
    "literal": NamedNode<'http://www.linkedmodel.org/schema/dtype#literal'>;
    "numericUnion": NamedNode<'http://www.linkedmodel.org/schema/dtype#numericUnion'>;
    "objectValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#objectValue'>;
    "order": NamedNode<'http://www.linkedmodel.org/schema/dtype#order'>;
    "orderIndex": NamedNode<'http://www.linkedmodel.org/schema/dtype#orderIndex'>;
    "refersTo": NamedNode<'http://www.linkedmodel.org/schema/dtype#refersTo'>;
    "SimpleCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#SimpleCodeList'>;
    "type": NamedNode<'http://www.linkedmodel.org/schema/dtype#type'>;
    "value": NamedNode<'http://www.linkedmodel.org/schema/dtype#value'>;
    "ValueReference": NamedNode<'http://www.linkedmodel.org/schema/dtype#ValueReference'>;
}

const builder = namespace("http://www.linkedmodel.org/schema/dtype#") as any;
export const strict = builder as NamespaceBuilder<keyof Dtype> & Dtype;
export const loose = builder as NamespaceBuilder & Dtype;
