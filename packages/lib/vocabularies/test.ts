import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Test {
    '': NamedNode<'http://www.w3.org/2006/03/test-description#'>;
    /** the item has gone through a first review, which shows it as valid for further processing */
    "accepted": NamedNode<'http://www.w3.org/2006/03/test-description#accepted'>;
    /** the item has gone through the review process and was approved */
    "approved": NamedNode<'http://www.w3.org/2006/03/test-description#approved'>;
    /** a more specific review of the item has been assigned to someone */
    "assigned": NamedNode<'http://www.w3.org/2006/03/test-description#assigned'>;
    /** The results that a conformant implementation is expected to produce when this test is executed */
    "expectedResults": NamedNode<'http://www.w3.org/2006/03/test-description#expectedResults'>;
    /** Information Resource (e.g. a file) used as input for the test case */
    "informationResourceInput": NamedNode<'http://www.w3.org/2006/03/test-description#informationResourceInput'>;
    /** Information Resource (e.g. a file) that contains the expected results for the test case */
    "informationResourceResults": NamedNode<'http://www.w3.org/2006/03/test-description#informationResourceResults'>;
    /** Parameters or data that are needed for the test execution. */
    "input": NamedNode<'http://www.w3.org/2006/03/test-description#input'>;
    /** the item had already gone through the review process, but the results of the review need to be re-assessed due to new input */
    "onhold": NamedNode<'http://www.w3.org/2006/03/test-description#onhold'>;
    /** a condition that must be met before the test is executed */
    "preCondition": NamedNode<'http://www.w3.org/2006/03/test-description#preCondition'>;
    "purpose": NamedNode<'http://www.w3.org/2006/03/test-description#purpose'>;
    /** the item has gone through the review process and was rejected */
    "rejected": NamedNode<'http://www.w3.org/2006/03/test-description#rejected'>;
    "reviewStatus": NamedNode<'http://www.w3.org/2006/03/test-description#reviewStatus'>;
    /** A particular stage in a review process */
    "ReviewStatus": NamedNode<'http://www.w3.org/2006/03/test-description#ReviewStatus'>;
    "SimpleReviewStatus": NamedNode<'http://www.w3.org/2006/03/test-description#SimpleReviewStatus'>;
    /** a description or a link of what part of which specification lead to the creation of this test case */
    "specificationReference": NamedNode<'http://www.w3.org/2006/03/test-description#specificationReference'>;
    /** A test case which relates to a requirement set in a specification */
    "SpecificationTestCase": NamedNode<'http://www.w3.org/2006/03/test-description#SpecificationTestCase'>;
    /** A set of test inputs, execution conditions, and expected results developed for a particular objective, such as to exercise a particular program path or to verify compliance with a specific requirement */
    "TestCase": NamedNode<'http://www.w3.org/2006/03/test-description#TestCase'>;
    /** the item has been proposed, but hasn't been reviewed (e.g. for completeness) yet */
    "unreviewed": NamedNode<'http://www.w3.org/2006/03/test-description#unreviewed'>;
}

const builder = namespace("http://www.w3.org/2006/03/test-description#") as any;
export const strict = builder as NamespaceBuilder<keyof Test> & Test;
export const loose = builder as NamespaceBuilder & Test;
