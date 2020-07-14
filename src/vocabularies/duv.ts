import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Duv = NamespaceBuilder & {
    /*Predefined criteria used to express a user opinion about a dataset or distribution using a discrete range of values.*/
    "RatingFeedback": NamedNode;
    /*A helpful description of actions that can be performed on a given dataset or distribution.*/
    "Usage": NamedNode;
    /*A synopsis describing the way a tool can use a dataset or distribution.*/
    "UsageTool": NamedNode;
    /*User feedback on the dataset. Expresses whether the dataset was useful or not, for example.*/
    "UserFeedback": NamedNode;
    /*The distributor is the organization that makes the dataset available for downloading and use.*/
    "hasDistributor": NamedNode;
    /*User feedback associated with Dataset or distribution*/
    "hasFeedback": NamedNode;
    /*Rating Feedback has rating opinion*/
    "hasRating": NamedNode;
    /*Dataset/distribution usage guidance or instructions.*/
    "hasUsage": NamedNode;
    /*Describes the tool that provides the Usage */
    "hasUsageTool": NamedNode;
    /*Dataset associated with Usage. */
    "refersTo": NamedNode;
};
export const duv: Duv = (namespace("http://www.w3.org/ns/duv#") as any);
