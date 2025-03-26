import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dprod {
    '': NamedNode<'https://ekgf.github.io/dprod/'>;
    /** A data product may have input and output ports, code and metadata */
    "DataProduct": NamedNode<'https://ekgf.github.io/dprod/DataProduct'>;
    /** The lifecycle of the data product as defined by EDM Council CDMC */
    "DataProductLifecycleStatus": NamedNode<'https://ekgf.github.io/dprod/DataProductLifecycleStatus'>;
    "dataProductOwner": NamedNode<'https://ekgf.github.io/dprod/dataProductOwner'>;
    /** The domain is intended to be a resource in its own right. This specification does not constrain the class to be used. */
    "domain": NamedNode<'https://ekgf.github.io/dprod/domain'>;
    "Enumeration": NamedNode<'https://ekgf.github.io/dprod/Enumeration'>;
    "informationSensitivityClassification": NamedNode<'https://ekgf.github.io/dprod/informationSensitivityClassification'>;
    "InformationSensitivityClassification": NamedNode<'https://ekgf.github.io/dprod/InformationSensitivityClassification'>;
    "inputDataset": NamedNode<'https://ekgf.github.io/dprod/inputDataset'>;
    "inputPort": NamedNode<'https://ekgf.github.io/dprod/inputPort'>;
    "isAccessServiceOf": NamedNode<'https://ekgf.github.io/dprod/isAccessServiceOf'>;
    "isDistributionOf": NamedNode<'https://ekgf.github.io/dprod/isDistributionOf'>;
    "lifecycleStatus": NamedNode<'https://ekgf.github.io/dprod/lifecycleStatus'>;
    "outputDataset": NamedNode<'https://ekgf.github.io/dprod/outputDataset'>;
    "outputPort": NamedNode<'https://ekgf.github.io/dprod/outputPort'>;
    "protocol": NamedNode<'https://ekgf.github.io/dprod/protocol'>;
    "Protocol": NamedNode<'https://ekgf.github.io/dprod/Protocol'>;
    "purpose": NamedNode<'https://ekgf.github.io/dprod/purpose'>;
    "securitySchemaType": NamedNode<'https://ekgf.github.io/dprod/securitySchemaType'>;
    "SecuritySchemaType": NamedNode<'https://ekgf.github.io/dprod/SecuritySchemaType'>;
}

const builder = namespace("https://ekgf.github.io/dprod/") as any;
export const strict = builder as NamespaceBuilder<keyof Dprod> & Dprod;
export const loose = builder as NamespaceBuilder & Dprod;
