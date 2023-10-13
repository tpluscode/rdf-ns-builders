import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dqv {
    '': NamedNode<'http://www.w3.org/ns/dqv#'>;
    /** Represents a group of quality dimensions in which a common type of information is used as quality indicator. */
    "Category": NamedNode<'http://www.w3.org/ns/dqv#Category'>;
    /** Refers to the resource (e.g., a dataset, a linkset, a graph, a set of triples) on which the quality measurement is performed. In the DQV context, this property is generally expected to be used in statements in which objects are instances of dcat:Dataset or dcat:Distribution. */
    "computedOn": NamedNode<'http://www.w3.org/ns/dqv#computedOn'>;
    /** Represents criteria relevant for assessing quality. Each quality dimension must have one or more metric to measure it. A dimension is linked with a category using the dqv:inCategory property. */
    "Dimension": NamedNode<'http://www.w3.org/ns/dqv#Dimension'>;
    /** Represents the expected data type for metric's observed value (e.g. xsd:boolean, xsd:double etc...) */
    "expectedDataType": NamedNode<'http://www.w3.org/ns/dqv#expectedDataType'>;
    /** Refers to a quality annotation. Quality annotation can be applied to any kind of resource, e.g., a dataset, a linkset, a graph, a set of triples. However, in the DQV context, this property is generally expected to be used in statements in which subjects are instances of dcat:Dataset or dcat:Distribution. */
    "hasQualityAnnotation": NamedNode<'http://www.w3.org/ns/dqv#hasQualityAnnotation'>;
    /** Refers to the performed quality measurements. Quality measurements can be performed to any kind of resource (e.g., a dataset, a linkset, a graph, a set of triples). However, in the DQV context, this property is generally expected to be used in statements in which subjects are instances of dcat:Dataset or dcat:Distribution. */
    "hasQualityMeasurement": NamedNode<'http://www.w3.org/ns/dqv#hasQualityMeasurement'>;
    /** Refers to a grouping of quality information such as certificates, policies, measurements and annotations as a named graph. Quality information represented in such a grouping can pertain to any kind of resource (e.g., a dataset, a linkset, a graph, a set of triples). However, in the DQV context, this property is generally expected to be used in statements in which subjects are instances of dcat:Dataset or dcat:Distribution. */
    "hasQualityMetadata": NamedNode<'http://www.w3.org/ns/dqv#hasQualityMetadata'>;
    /** Represents the category a dimension is grouped in. */
    "inCategory": NamedNode<'http://www.w3.org/ns/dqv#inCategory'>;
    /** Represents the dimensions a quality metric, certificate and annotation allow a measurement of. */
    "inDimension": NamedNode<'http://www.w3.org/ns/dqv#inDimension'>;
    /** Indicates the metric being observed. */
    "isMeasurementOf": NamedNode<'http://www.w3.org/ns/dqv#isMeasurementOf'>;
    /** Represents a standard to measure a quality dimension. An observation (instance of dqv:QualityMeasurement) assigns a value in a given unit to a Metric. */
    "Metric": NamedNode<'http://www.w3.org/ns/dqv#Metric'>;
    "precision": NamedNode<'http://www.w3.org/ns/dqv#precision'>;
    /** Represents quality annotations, including ratings, quality certificates or feedback that can be associated to datasets or distributions. Quality annotations must have one oa:motivatedBy statement with an instance of oa:Motivation (and skos:Concept) that reflects a quality assessment purpose. We define this instance as dqv:qualityAssessment. */
    "QualityAnnotation": NamedNode<'http://www.w3.org/ns/dqv#QualityAnnotation'>;
    "qualityAssessment": NamedNode<'http://www.w3.org/ns/dqv#qualityAssessment'>;
    /** An annotation that associates a resource (especially, a dataset or a distribution) to another resource (for example, a document) that certifies the resource's quality according to a set of quality assessment rules. */
    "QualityCertificate": NamedNode<'http://www.w3.org/ns/dqv#QualityCertificate'>;
    /** Represents the evaluation of a given dataset (or dataset distribution) against a specific quality metric. */
    "QualityMeasurement": NamedNode<'http://www.w3.org/ns/dqv#QualityMeasurement'>;
    /** Represents a dataset of quality measurements, evaluations of one or more datasets (or dataset distributions) against specific quality metrics. */
    "QualityMeasurementDataset": NamedNode<'http://www.w3.org/ns/dqv#QualityMeasurementDataset'>;
    /** Represents quality metadata, it is defined to group quality certificates, policies, measurements and annotations under a named graph. */
    "QualityMetadata": NamedNode<'http://www.w3.org/ns/dqv#QualityMetadata'>;
    /** Represents a policy or agreement that is chiefly governed by data quality concerns. */
    "QualityPolicy": NamedNode<'http://www.w3.org/ns/dqv#QualityPolicy'>;
    /** Represents feedback that users have on the quality of datasets or distributions. Besides dqv:qualityAssessment, which is the motivation required by all quality annotations, one of the predefined instances of oa:Motivation should be indicated as motivation to distinguish among the different kinds of feedback, e.g., classifications, questions. */
    "UserQualityFeedback": NamedNode<'http://www.w3.org/ns/dqv#UserQualityFeedback'>;
    /** Refers to values computed by metric. */
    "value": NamedNode<'http://www.w3.org/ns/dqv#value'>;
}

const builder = namespace("http://www.w3.org/ns/dqv#") as any;
export const strict = builder as NamespaceBuilder<keyof Dqv> & Dqv;
export const loose = builder as NamespaceBuilder & Dqv;
