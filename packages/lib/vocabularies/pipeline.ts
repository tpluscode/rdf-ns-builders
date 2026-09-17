import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Pipeline {
    '': NamedNode<'https://pipeline.described.at/'>;
    "FileContents": NamedNode<'https://pipeline.described.at/FileContents'>;
    "name": NamedNode<'https://pipeline.described.at/name'>;
    /** An operation is the definition of a reusable step */
    "Operation": NamedNode<'https://pipeline.described.at/Operation'>;
    /** Definition of a Pipeline */
    "Pipeline": NamedNode<'https://pipeline.described.at/Pipeline'>;
    /** Readable Stream */
    "Readable": NamedNode<'https://pipeline.described.at/Readable'>;
    /** Readable Stream in Object Mode */
    "ReadableObjectMode": NamedNode<'https://pipeline.described.at/ReadableObjectMode'>;
    "required": NamedNode<'https://pipeline.described.at/required'>;
    "sensitive": NamedNode<'https://pipeline.described.at/sensitive'>;
    /** Definition of a Pipeline Step */
    "Step": NamedNode<'https://pipeline.described.at/Step'>;
    /** Ordered List of Pipeline Steps */
    "stepList": NamedNode<'https://pipeline.described.at/stepList'>;
    /** Definition of Steps for a Pipeline */
    "steps": NamedNode<'https://pipeline.described.at/steps'>;
    "value": NamedNode<'https://pipeline.described.at/value'>;
    "variable": NamedNode<'https://pipeline.described.at/variable'>;
    "Variable": NamedNode<'https://pipeline.described.at/Variable'>;
    "VariableName": NamedNode<'https://pipeline.described.at/VariableName'>;
    /** It should be a subject of p:variable properties */
    "variables": NamedNode<'https://pipeline.described.at/variables'>;
    /** Writable Stream */
    "Writable": NamedNode<'https://pipeline.described.at/Writable'>;
    /** Writable Stream in Object Mode */
    "WritableObjectMode": NamedNode<'https://pipeline.described.at/WritableObjectMode'>;
}

const builder = namespace("https://pipeline.described.at/") as any;
export const strict = builder as NamespaceBuilder<keyof Pipeline> & Pipeline;
export const loose = builder as NamespaceBuilder & Pipeline;
