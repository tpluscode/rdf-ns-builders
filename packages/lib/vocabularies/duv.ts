import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Duv {
    '': NamedNode<'http://www.w3.org/ns/duv#'>;
    /** The distributor is the organization that makes the dataset available for downloading and use. */
    "hasDistributor": NamedNode<'http://www.w3.org/ns/duv#hasDistributor'>;
    /** User feedback associated with Dataset or distribution */
    "hasFeedback": NamedNode<'http://www.w3.org/ns/duv#hasFeedback'>;
    /** Rating Feedback has rating opinion */
    "hasRating": NamedNode<'http://www.w3.org/ns/duv#hasRating'>;
    /** Dataset/distribution usage guidance or instructions. */
    "hasUsage": NamedNode<'http://www.w3.org/ns/duv#hasUsage'>;
    /** Describes the tool that provides the Usage */
    "hasUsageTool": NamedNode<'http://www.w3.org/ns/duv#hasUsageTool'>;
    /** Predefined criteria used to express a user opinion about a dataset or distribution using a discrete range of values. */
    "RatingFeedback": NamedNode<'http://www.w3.org/ns/duv#RatingFeedback'>;
    /** Dataset associated with Usage. */
    "refersTo": NamedNode<'http://www.w3.org/ns/duv#refersTo'>;
    /** A helpful description of actions that can be performed on a given dataset or distribution. */
    "Usage": NamedNode<'http://www.w3.org/ns/duv#Usage'>;
    /** A synopsis describing the way a tool can use a dataset or distribution. */
    "UsageTool": NamedNode<'http://www.w3.org/ns/duv#UsageTool'>;
    /** User feedback on the dataset. Expresses whether the dataset was useful or not, for example. */
    "UserFeedback": NamedNode<'http://www.w3.org/ns/duv#UserFeedback'>;
}

const builder = namespace("http://www.w3.org/ns/duv#") as any;
export const strict = builder as NamespaceBuilder<keyof Duv> & Duv;
export const loose = builder as NamespaceBuilder & Duv;
