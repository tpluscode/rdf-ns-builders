import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Cc = NamespaceBuilder & {
    /*credit be given to
                copyright holder and/or author*/
    "Attribution": NamedNode;
    /*exercising rights for
                commercial purposes*/
    "CommercialUse": NamedNode;
    /*derivative and
                combined works must be licensed under specified
                terms, similar to those on the original
                work*/
    "Copyleft": NamedNode;
    /*distribution of
                derivative works*/
    "DerivativeWorks": NamedNode;
    /*distribution, public
                display, and publicly performance*/
    "Distribution": NamedNode;
    /*use in a
                non-developing country*/
    "HighIncomeNationUse": NamedNode;
    /*the legal jurisdiction
                of a license*/
    "Jurisdiction": NamedNode;
    /*derivative works must
                be licensed under specified terms, with at least
                the same conditions as the original work;
                combinations with the work may be licensed under
                different terms*/
    "LesserCopyleft": NamedNode;
    /*a set of
                requests/permissions to users of a Work, e.g. a
                copyright license, the public domain, information
                for distributors*/
    "License": NamedNode;
    /*copyright and license
                notices be kept intact*/
    "Notice": NamedNode;
    /*an action that may or
                may not be allowed or desired*/
    "Permission": NamedNode;
    /*something you may be
                asked not to do*/
    "Prohibition": NamedNode;
    /*making multiple
                copies*/
    "Reproduction": NamedNode;
    /*an action that may or
                may not be requested of you*/
    "Requirement": NamedNode;
    /*derivative works be
                licensed under the same terms or compatible terms
                as the original work*/
    "ShareAlike": NamedNode;
    /*permits commercial
                derivatives, but only non-commercial
                distribution*/
    "Sharing": NamedNode;
    /*source code (the
                preferred form for making modifications) must be
                provided when exercising some rights granted by
                the license.*/
    "SourceCode": NamedNode;
    /*a potentially
                copyrightable work*/
    "Work": NamedNode;
    "attributionName": NamedNode;
    "attributionURL": NamedNode;
    "deprecatedOn": NamedNode;
    "jurisdiction": NamedNode;
    "legalcode": NamedNode;
    "license": NamedNode;
    "morePermissions": NamedNode;
    "permits": NamedNode;
    "prohibits": NamedNode;
    "requires": NamedNode;
    "useGuidelines": NamedNode;
};
export const cc: Cc = (namespace("http://creativecommons.org/ns#") as any);
