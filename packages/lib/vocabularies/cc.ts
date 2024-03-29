import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Cc {
    '': NamedNode<'http://creativecommons.org/ns#'>;
    /**
     * credit be given to
     * 		    copyright holder and/or author
     */
    "Attribution": NamedNode<'http://creativecommons.org/ns#Attribution'>;
    "attributionName": NamedNode<'http://creativecommons.org/ns#attributionName'>;
    "attributionURL": NamedNode<'http://creativecommons.org/ns#attributionURL'>;
    /**
     * exercising rights for
     * 		    commercial purposes
     */
    "CommercialUse": NamedNode<'http://creativecommons.org/ns#CommercialUse'>;
    /**
     * derivative and
     * 		    combined works must be licensed under specified
     * 		    terms, similar to those on the original
     * 		    work
     */
    "Copyleft": NamedNode<'http://creativecommons.org/ns#Copyleft'>;
    "deprecatedOn": NamedNode<'http://creativecommons.org/ns#deprecatedOn'>;
    /**
     * distribution of
     * 		    derivative works
     */
    "DerivativeWorks": NamedNode<'http://creativecommons.org/ns#DerivativeWorks'>;
    /**
     * distribution, public
     * 		    display, and publicly performance
     */
    "Distribution": NamedNode<'http://creativecommons.org/ns#Distribution'>;
    /**
     * use in a
     * 		    non-developing country
     */
    "HighIncomeNationUse": NamedNode<'http://creativecommons.org/ns#HighIncomeNationUse'>;
    "jurisdiction": NamedNode<'http://creativecommons.org/ns#jurisdiction'>;
    /**
     * the legal jurisdiction
     * 		    of a license
     */
    "Jurisdiction": NamedNode<'http://creativecommons.org/ns#Jurisdiction'>;
    "legalcode": NamedNode<'http://creativecommons.org/ns#legalcode'>;
    /**
     * derivative works must
     * 		    be licensed under specified terms, with at least
     * 		    the same conditions as the original work;
     * 		    combinations with the work may be licensed under
     * 		    different terms
     */
    "LesserCopyleft": NamedNode<'http://creativecommons.org/ns#LesserCopyleft'>;
    "license": NamedNode<'http://creativecommons.org/ns#license'>;
    /**
     * a set of
     * 		    requests/permissions to users of a Work, e.g. a
     * 		    copyright license, the public domain, information
     * 		    for distributors
     */
    "License": NamedNode<'http://creativecommons.org/ns#License'>;
    "morePermissions": NamedNode<'http://creativecommons.org/ns#morePermissions'>;
    /**
     * copyright and license
     * 		    notices be kept intact
     */
    "Notice": NamedNode<'http://creativecommons.org/ns#Notice'>;
    /**
     * an action that may or
     * 		    may not be allowed or desired
     */
    "Permission": NamedNode<'http://creativecommons.org/ns#Permission'>;
    "permits": NamedNode<'http://creativecommons.org/ns#permits'>;
    /**
     * something you may be
     * 		    asked not to do
     */
    "Prohibition": NamedNode<'http://creativecommons.org/ns#Prohibition'>;
    "prohibits": NamedNode<'http://creativecommons.org/ns#prohibits'>;
    /**
     * making multiple
     * 		    copies
     */
    "Reproduction": NamedNode<'http://creativecommons.org/ns#Reproduction'>;
    /**
     * an action that may or
     * 		    may not be requested of you
     */
    "Requirement": NamedNode<'http://creativecommons.org/ns#Requirement'>;
    "requires": NamedNode<'http://creativecommons.org/ns#requires'>;
    /**
     * derivative works be
     * 		    licensed under the same terms or compatible terms
     * 		    as the original work
     */
    "ShareAlike": NamedNode<'http://creativecommons.org/ns#ShareAlike'>;
    /**
     * permits commercial
     * 		    derivatives, but only non-commercial
     * 		    distribution
     */
    "Sharing": NamedNode<'http://creativecommons.org/ns#Sharing'>;
    /**
     * source code (the
     * 		    preferred form for making modifications) must be
     * 		    provided when exercising some rights granted by
     * 		    the license.
     */
    "SourceCode": NamedNode<'http://creativecommons.org/ns#SourceCode'>;
    "useGuidelines": NamedNode<'http://creativecommons.org/ns#useGuidelines'>;
    /**
     * a potentially
     * 		    copyrightable work
     */
    "Work": NamedNode<'http://creativecommons.org/ns#Work'>;
}

const builder = namespace("http://creativecommons.org/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Cc> & Cc;
export const loose = builder as NamespaceBuilder & Cc;
