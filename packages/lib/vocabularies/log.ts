import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Log {
    '': NamedNode<'http://www.w3.org/2000/10/swap/log#'>;
    /**
     * Any statement mentioning anything in this class
     * is considered boring and purged by the cwm --purge option.
     * This is a convenience, and does not have any value when published as a
     * general fact on the web.
     */
    "Chaff": NamedNode<'http://www.w3.org/2000/10/swap/log#Chaff'>;
    /**
     * All possible conclusions which can be drawn from a formula.
     *
     * The object of this function, a formula, is the set of conclusions which can be
     * drawn from the subject formula, by successively applying any
     * rules it contains to the data it contains. This is equivalent to
     * cwm's "--think" command line function.  It does use built-ins, so
     * it may for example indirectly invoke other documents, validate
     * signatures, etc.
     *
     */
    "conclusion": NamedNode<'http://www.w3.org/2000/10/swap/log#conclusion'>;
    /**
     * "A function to merge formulae: logical AND.
     *
     * The subject is a list of formulae.
     * The object, which can be generated, is a formula containing a copy
     * of each of the formulae in the list on the left.
     * A cwm built-in function.
     *
     */
    "conjunction": NamedNode<'http://www.w3.org/2000/10/swap/log#conjunction'>;
    /**
     * This connects a document and a string that represents it.
     * (Cwm knows how to go get a document in order to evaluate this.)
     * Note that the content-type of the information is not given and
     * so must be known or guessed.
     */
    "content": NamedNode<'http://www.w3.org/2000/10/swap/log#content'>;
    /**
     * 	When document D is the definitiveDocument for property P,
     * any statement X P Y is true iff and only if the semantics of document D
     * include that statement.
     *
     * For example, there may be a definitive document for the zipcode of
     * airports by airport code, and so on. This is useful to let a reasoner
     * know that it can extend its query to the given document.
     * (Cwm will do this if its mode includes "r").
     *
     */
    "definitiveDocument": NamedNode<'http://www.w3.org/2000/10/swap/log#definitiveDocument'>;
    /**
     * 	When service S is the definitiveService for property P,
     * any statement X P Y is true iff and only if a query to S returns
     * that it is.  The protocol for the service S depends on the scheme.
     * For mysql protocol, the URI of the service is like
     * sql://user:password@host.domain/database/.
     *
     * For example, there may be a definitive service for the zipcode of
     * airports by airport code, and so on. This is useful to let a reasoner
     * know that it can help resolve a query by delegating it to the service
     * in question.
     * (Cwm will do this if its mode includes "r").
     *
     */
    "definitiveService": NamedNode<'http://www.w3.org/2000/10/swap/log#definitiveService'>;
    /**
     * Takes a list of a string and a URI and creates a datatyped
     *      literal. For example, { ("2005-03-30T11:00:00" :tz) log:dtlit ?X } => { ?X a :Answer } .
     *     will produce "2005-03-30T11:00:00"^^:tz a :Answer .
     */
    "dtlit": NamedNode<'http://www.w3.org/2000/10/swap/log#dtlit'>;
    /**
     * True if the subject and object are the same RDF node (symbol or literal).
     * Do not confuse with owl:sameAs.
     * A cwm built-in logical operator, RDF graph level.
     *
     */
    "equalTo": NamedNode<'http://www.w3.org/2000/10/swap/log#equalTo'>;
    "Formula": NamedNode<'http://www.w3.org/2000/10/swap/log#Formula'>;
    /**
     * Logical implication. 
     * This is the relation between the antecedent (subject) and
     * conclusion (object) of a rule.
     * The application of a rule to a knowledge-base is as follows.
     * For every substitution which, applied to the antecedent,
     * gives a formula which is a subset of the knowledge-base,
     * then the result of applying that same substitution to the
     * conclusion may be added to the knowledge-base.
     *
     * related: See log:conclusion. 
     * (See the CWM manual for command line options to determine how
     * rules from different sources are applied to and the results
     * added to various formula.)
     *
     */
    "implies": NamedNode<'http://www.w3.org/2000/10/swap/log#implies'>;
    /**
     * The subject formula includes the object formula.
     * Formula A includes formula B if there exists some substitution
     * which when applied to B creates a formula B' such that for
     * every statement in B' is also in A, every variable
     * universally (or existentially) quantified in B' is quantified in
     * the same way in A. 
     *
     * Variable substitution is applied recursively to nested compound terms such as
     * formulae, lists and sets.
     *
     * (Understood natively by cwm when in in the antecedent of a rule.
     * You can use this to peer inside nested formulae.)
     */
    "includes": NamedNode<'http://www.w3.org/2000/10/swap/log#includes'>;
    "List": NamedNode<'http://www.w3.org/2000/10/swap/log#List'>;
    /**
     * A document which, which parsed as Notation3
     * as defined in general by http://www.w3.org/DesignIssues/Notation3.html
     * and this schema, conveys the intent of the author by the semantics defined
     * on those specifications, and the semantics defined by the specifications
     * of any other identifiers used in the document.
     *
     */
    "N3Document": NamedNode<'http://www.w3.org/2000/10/swap/log#N3Document'>;
    /** The subject formula, expressed as N3, gives this string. */
    "n3String": NamedNode<'http://www.w3.org/2000/10/swap/log#n3String'>;
    /**
     * Equality in this sense is actually the same URI.
     * A cwm built-in logical operator.
     *
     */
    "notEqualTo": NamedNode<'http://www.w3.org/2000/10/swap/log#notEqualTo'>;
    /**
     * The object formula is NOT a subset of subject.
     *     True iff log:includes is false.
     *     The converse of log:includes. (Understood natively by cwm.
     *     The subject formula may contain variables.
     *     (In cwm, variables must of course end up getting bound
     *     before the log:include test can be done, or an infinite result set
     *     would result)
     *     Related: See includes
     */
    "notIncludes": NamedNode<'http://www.w3.org/2000/10/swap/log#notIncludes'>;
    "Other": NamedNode<'http://www.w3.org/2000/10/swap/log#Other'>;
    /**
     * The subject is a key and the object is a string,
     * where the strings are to be output in the order of the keys.
     * See cwm --strings in cwm --help.
     *
     */
    "outputString": NamedNode<'http://www.w3.org/2000/10/swap/log#outputString'>;
    /** The subject string, parsed as N3, gives this formula. */
    "parsedAsN3": NamedNode<'http://www.w3.org/2000/10/swap/log#parsedAsN3'>;
    /**
     * For anything identified by a URI with a fragid, this is the
     * thing identified by the same URI without a hash or fragid.
     * For anything else, it is itself.
     */
    "racine": NamedNode<'http://www.w3.org/2000/10/swap/log#racine'>;
    /**
     * This is a low-level language type, one of log:Formula, log:Literal, 
     * log:List, log:Set or log:Other. 
     * Example: log:semanticsOrError returns either a formula or a string,
     * and you can check which using log:rawType.
     *
     */
    "rawType": NamedNode<'http://www.w3.org/2000/10/swap/log#rawType'>;
    /**
     * This allows one to look at the actual string of the URI which identifies this,
     * for anything, even a blank node or a formula. This peeks into the internal
     * workings of cwm, and so is not normally used. Use log:uri instead.
     *
     */
    "rawUri": NamedNode<'http://www.w3.org/2000/10/swap/log#rawUri'>;
    /**
     * The log:semantics of a document is the formula.
     * achieved by parsing representation of the document.
     *  For a document in Notation3, log:semantics is the
     * log:parsedAsN3 of the log:contents of the document.
     * For a document in RDF/XML, it is parsed according to the
     * RDF/XML specification to yield an RDF formula
     * (a subclass of N3 log:Formula).
     *
     * [Aside: Philosophers will be distracted here into worrying about the meaning
     * of meaning. At least we didn't call this function "meaning"!
     * In as much as N3 is used as an interlingua for interoperability
     * for different systems, this for an N3 based system is the meaning 
     * expressed by a document.]
     *
     * (Cwm knows how to go get a document and parse N3 and RDF/XML
     * it in order to evaluate this.
     * Other languages for web documents 
     * may be defined whose N3 semantics are therefore
     * also calculable, and so they could be added in due course.
     * See for example GRDDL, RDFa, etc)
     */
    "semantics": NamedNode<'http://www.w3.org/2000/10/swap/log#semantics'>;
    /**
     * This connects a document and either the formula it parses to,
     * or an error message explaining what went wrong with trying. See log:semantics.
     * (Cwm knows how to go get a document and parse it in order to evaluate this.)
     *
     */
    "semanticsOrError": NamedNode<'http://www.w3.org/2000/10/swap/log#semanticsOrError'>;
    "String": NamedNode<'http://www.w3.org/2000/10/swap/log#String'>;
    /**
     * Something which is true: believe it as you would believe this.
     *     
     * 	Understood natively by cwm in that it will execute rules in a formula
     * 	declared a Truth within a formula it is already taking rules from.
     */
    "Truth": NamedNode<'http://www.w3.org/2000/10/swap/log#Truth'>;
    /**
     * This allows one to look at the actual string of the URI which identifies this.
     *
     * (Cwm can get the URI of a resource or get the resource from the URI.)
     * This is a level breaker, breaking the rule of not looking inside a
     * URI.   Use (eg with  string:match) to replace RDF's old "aboutEach"
     * functionality. Use to implement the URI spec and protocol specs, etc.
     *
     */
    "uri": NamedNode<'http://www.w3.org/2000/10/swap/log#uri'>;
}

const builder = namespace("http://www.w3.org/2000/10/swap/log#") as any;
export const strict = builder as NamespaceBuilder<keyof Log> & Log;
export const loose = builder as NamespaceBuilder & Log;
