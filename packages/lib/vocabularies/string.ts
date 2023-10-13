import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface String {
    '': NamedNode<'http://www.w3.org/2000/10/swap/string#'>;
    /** (obsolete - (was backwards!) - use: string:concatenation) */
    "concat": NamedNode<'http://www.w3.org/2000/10/swap/string#concat'>;
    /**
     * The subject is a list of strings. The object is calculated as
     * 		a concatenation of those strings.
     */
    "concatenation": NamedNode<'http://www.w3.org/2000/10/swap/string#concatenation'>;
    /** True iff the subject string contains the object string. */
    "contains": NamedNode<'http://www.w3.org/2000/10/swap/string#contains'>;
    /**
     * True iff the subject string contains the object string,
     * with the comparison done ignoring the difference between upper case and
     * lower case characters.
     */
    "containsIgnoringCase": NamedNode<'http://www.w3.org/2000/10/swap/string#containsIgnoringCase'>;
    /** True iff the subject string ends with the object string. */
    "endsWith": NamedNode<'http://www.w3.org/2000/10/swap/string#endsWith'>;
    /**
     * True iff the subject string is the same as object string
     * ignoring differences between upper and lower case.
     */
    "equalIgnoringCase": NamedNode<'http://www.w3.org/2000/10/swap/string#equalIgnoringCase'>;
    /**
     * The subject is a list, whose first member is a format string,
     *         and whose remaining members are arguments to the format string.
     *         The formating string is in the style of python's % operator,
     *         very similar to C's sprintf().
     *         The object is calculated from the subject.
     */
    "format": NamedNode<'http://www.w3.org/2000/10/swap/string#format'>;
    /**
     * True iff the string is greater than the object
     * 	when ordered according to Unicode(tm) code order.
     */
    "greaterThan": NamedNode<'http://www.w3.org/2000/10/swap/string#greaterThan'>;
    /**
     * True iff the string is less than the object
     * 	when ordered according to Unicode(tm) code order.
     */
    "lessThan": NamedNode<'http://www.w3.org/2000/10/swap/string#lessThan'>;
    /**
     * The subject is a string;
     * the object is is a regular expression in the perl, python style.
     * It is true iff the string matches the regexp.
     */
    "matches": NamedNode<'http://www.w3.org/2000/10/swap/string#matches'>;
    /**
     * True iff the subject string is the NOT same as object string
     * ignoring differences between upper and lower case.
     */
    "notEqualIgnoringCase": NamedNode<'http://www.w3.org/2000/10/swap/string#notEqualIgnoringCase'>;
    /**
     * True iff the string is NOT greater than the object
     * 	when ordered according to Unicode(tm) code order.
     */
    "notGreaterThan": NamedNode<'http://www.w3.org/2000/10/swap/string#notGreaterThan'>;
    /**
     * True iff the string is NOT less than the object
     * 	when ordered according to Unicode(tm) code order.
     */
    "notLessThan": NamedNode<'http://www.w3.org/2000/10/swap/string#notLessThan'>;
    /**
     * The subject string;
     * the object is is a regular expression in the perl, python style.
     * It is true iff the string does NOT match the regexp.
     */
    "notMatches": NamedNode<'http://www.w3.org/2000/10/swap/string#notMatches'>;
    /**
     * A built-in for replacing characters or sub.
     *     takes a list of 3 strings; the first is the
     *     input data, the second the old and the third the new string.
     *     The object is calculated as the rplaced string.
     *     For example, ("fofof bar", "of", "baz") string:replace "fbazbaz bar"
     *     
     */
    "replace": NamedNode<'http://www.w3.org/2000/10/swap/string#replace'>;
    /**
     * The subject is a list of two strings. The second string is
     * a regular expression in the perl, python style.
     * It must contain one group (a part in parentheses).  If the first string in the list matches
     * the regular expression, then the object is calculated as being the
     * part of the first string which matches the group.
     */
    "scrape": NamedNode<'http://www.w3.org/2000/10/swap/string#scrape'>;
    /** True iff the subject string starts with the object string. */
    "startsWith": NamedNode<'http://www.w3.org/2000/10/swap/string#startsWith'>;
    "String": NamedNode<'http://www.w3.org/2000/10/swap/string#String'>;
}

const builder = namespace("http://www.w3.org/2000/10/swap/string#") as any;
export const strict = builder as NamespaceBuilder<keyof String> & String;
export const loose = builder as NamespaceBuilder & String;
