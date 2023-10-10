import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Earl {
    '': NamedNode<'http://www.w3.org/ns/earl#'>;
    /** a statement that embodies the results of a test */
    "Assertion": NamedNode<'http://www.w3.org/ns/earl#Assertion'>;
    /** an entity such as a person, a software tool, an organization, or any other grouping that carries out a test collectively */
    "Assertor": NamedNode<'http://www.w3.org/ns/earl#Assertor'>;
    /** the class of outcomes to denote an undetermined outcome */
    "CannotTell": NamedNode<'http://www.w3.org/ns/earl#CannotTell'>;
    /** a discrete value that describes a resulting condition from carrying out the test */
    "OutcomeValue": NamedNode<'http://www.w3.org/ns/earl#OutcomeValue'>;
    /** the class of outcomes to denote failing a test */
    "Fail": NamedNode<'http://www.w3.org/ns/earl#Fail'>;
    /** the class of outcomes to denote the test is not applicable */
    "NotApplicable": NamedNode<'http://www.w3.org/ns/earl#NotApplicable'>;
    /** the class of outcomes to denote the test has not been carried out */
    "NotTested": NamedNode<'http://www.w3.org/ns/earl#NotTested'>;
    /** the class of outcomes to denote passing a test */
    "Pass": NamedNode<'http://www.w3.org/ns/earl#Pass'>;
    /** any piece of software such as an authoring tool, browser, or evaluation tool */
    "Software": NamedNode<'http://www.w3.org/ns/earl#Software'>;
    /** an atomic test, usually one that is a partial test for a requirement */
    "TestCase": NamedNode<'http://www.w3.org/ns/earl#TestCase'>;
    /** a testable statement, usually one that can be passed or failed */
    "TestCriterion": NamedNode<'http://www.w3.org/ns/earl#TestCriterion'>;
    /** describes how a test was carried out */
    "TestMode": NamedNode<'http://www.w3.org/ns/earl#TestMode'>;
    /** a higher-level requirement that is tested by executing one or more sub-tests */
    "TestRequirement": NamedNode<'http://www.w3.org/ns/earl#TestRequirement'>;
    /** the actual result of performing the test */
    "TestResult": NamedNode<'http://www.w3.org/ns/earl#TestResult'>;
    /** the class of things that have been tested against some test criterion */
    "TestSubject": NamedNode<'http://www.w3.org/ns/earl#TestSubject'>;
    /** assertor of an assertion */
    "assertedBy": NamedNode<'http://www.w3.org/ns/earl#assertedBy'>;
    "automatic": NamedNode<'http://www.w3.org/ns/earl#automatic'>;
    "cantTell": NamedNode<'http://www.w3.org/ns/earl#cantTell'>;
    "failed": NamedNode<'http://www.w3.org/ns/earl#failed'>;
    "inapplicable": NamedNode<'http://www.w3.org/ns/earl#inapplicable'>;
    /** additional warnings or error messages in a human-readable form */
    "info": NamedNode<'http://www.w3.org/ns/earl#info'>;
    /** assertor that is primarily responsible for performing the test */
    "mainAssertor": NamedNode<'http://www.w3.org/ns/earl#mainAssertor'>;
    "manual": NamedNode<'http://www.w3.org/ns/earl#manual'>;
    /** mode in which the test was performed */
    "mode": NamedNode<'http://www.w3.org/ns/earl#mode'>;
    /** outcome of performing the test */
    "outcome": NamedNode<'http://www.w3.org/ns/earl#outcome'>;
    "passed": NamedNode<'http://www.w3.org/ns/earl#passed'>;
    /** location within a test subject that are most relevant to a test result */
    "pointer": NamedNode<'http://www.w3.org/ns/earl#pointer'>;
    /** result of an assertion */
    "result": NamedNode<'http://www.w3.org/ns/earl#result'>;
    "semiAuto": NamedNode<'http://www.w3.org/ns/earl#semiAuto'>;
    /** test subject of an assertion */
    "subject": NamedNode<'http://www.w3.org/ns/earl#subject'>;
    /** test criterion of an assertion */
    "test": NamedNode<'http://www.w3.org/ns/earl#test'>;
    "undisclosed": NamedNode<'http://www.w3.org/ns/earl#undisclosed'>;
    "unknownMode": NamedNode<'http://www.w3.org/ns/earl#unknownMode'>;
    "untested": NamedNode<'http://www.w3.org/ns/earl#untested'>;
}

const builder = namespace("http://www.w3.org/ns/earl#") as any;
export const strict = builder as NamespaceBuilder<keyof Earl> & Earl;
export const loose = builder as NamespaceBuilder & Earl;
