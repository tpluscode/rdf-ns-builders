import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Dtype {
    "CodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#CodeList'>;
    "CompositeCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#CompositeCodeList'>;
    "DerivedCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#DerivedCodeList'>;
    "EnumeratedValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#EnumeratedValue'>;
    "Enumeration": NamedNode<'http://www.linkedmodel.org/schema/dtype#Enumeration'>;
    "SimpleCodeList": NamedNode<'http://www.linkedmodel.org/schema/dtype#SimpleCodeList'>;
    "ValueReference": NamedNode<'http://www.linkedmodel.org/schema/dtype#ValueReference'>;
    "code": NamedNode<'http://www.linkedmodel.org/schema/dtype#code'>;
    "compositeOf": NamedNode<'http://www.linkedmodel.org/schema/dtype#compositeOf'>;
    "defaultValue": NamedNode<'http://www.linkedmodel.org/schema/dtype#defaultValue'>;
    "derivedFrom": NamedNode<'http://www.linkedmodel.org/schema/dtype#derivedFrom'>;
    "hasMember": NamedNode<'http://www.linkedmodel.org/schema/dtype#hasMember'>;
    "isInvalid": NamedNode<'http://www.linkedmodel.org/schema/dtype#isInvalid'>;
    "literal": NamedNode<'http://www.linkedmodel.org/schema/dtype#literal'>;
    "numericUnion": NamedNode<'http://www.linkedmodel.org/schema/dtype#numericUnion'>;
    "order": NamedNode<'http://www.linkedmodel.org/schema/dtype#order'>;
    "orderIndex": NamedNode<'http://www.linkedmodel.org/schema/dtype#orderIndex'>;
    "position": NamedNode<'http://www.linkedmodel.org/schema/dtype#position'>;
    "refersTo": NamedNode<'http://www.linkedmodel.org/schema/dtype#refersTo'>;
    "type": NamedNode<'http://www.linkedmodel.org/schema/dtype#type'>;
    "value": NamedNode<'http://www.linkedmodel.org/schema/dtype#value'>;
}

const builder = namespace("http://www.linkedmodel.org/schema/dtype#") as any;
export const strict = builder as NamespaceBuilder<keyof Dtype> & Dtype;
export const loose = builder as NamespaceBuilder & Dtype;
