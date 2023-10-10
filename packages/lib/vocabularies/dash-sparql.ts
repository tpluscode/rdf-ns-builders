import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dash_sparql {
    '': NamedNode<'http://datashapes.org/sparql#'>;
    "PrefixDeclaration": NamedNode<'http://datashapes.org/sparql#PrefixDeclaration'>;
    /** Returns the absolute value of arg. An error is raised if arg is not a numeric value. */
    "abs": NamedNode<'http://datashapes.org/sparql#abs'>;
    /** The SPARQL symbol, such as "/" for sparql:divide. */
    "symbol": NamedNode<'http://datashapes.org/sparql#symbol'>;
    /** Returns the arithmetic sum of its operands. */
    "add": NamedNode<'http://datashapes.org/sparql#add'>;
    /** Return the logical AND between two (boolean) operands. */
    "and": NamedNode<'http://datashapes.org/sparql#and'>;
    /** Constructs a blank node that is distinct from all blank nodes in the dataset being queried and distinct from all blank nodes created by calls to this constructor for other query solutions. If the no argument form is used, every call results in a distinct blank node. If the form with a simple literal is used, every call results in distinct blank nodes for different simple literals, and the same blank node for calls with the same simple literal within expressions for one solution mapping. This functionality is compatible with the treatment of blank nodes in SPARQL CONSTRUCT templates. */
    "bnode": NamedNode<'http://datashapes.org/sparql#bnode'>;
    /** Returns true if ?arg1 is bound to a value. Returns false otherwise. Variables with the value NaN or INF are considered bound. */
    "bound": NamedNode<'http://datashapes.org/sparql#bound'>;
    /** Returns the smallest (closest to negative infinity) number with no fractional part that is not less than the value of arg. An error is raised if ?arg1 is not a numeric value. */
    "ceil": NamedNode<'http://datashapes.org/sparql#ceil'>;
    /** Takes any number of arguments, and returns the first bound argument, starting at the left. */
    "coalesce": NamedNode<'http://datashapes.org/sparql#coalesce'>;
    "unlimitedParameters": NamedNode<'http://datashapes.org/sparql#unlimitedParameters'>;
    /** The CONCAT built-in function. Creates a single string by concatenating all arguments from left to right. Note that if any one of the arguments is unbound (null) then the whole result string will be unbound. */
    "concat": NamedNode<'http://datashapes.org/sparql#concat'>;
    /** Returns an xsd:boolean indicating whether or not the value of ?arg1 contains (at the beginning, at the end, or anywhere within) at least one sequence of collation units that provides a minimal match to the collation units in the value of ?arg2, according to the collation that is used. */
    "contains": NamedNode<'http://datashapes.org/sparql#contains'>;
    /** Returns the datatype IRI of argument ?arg1; returns xsd:string if the parameter is a simple literal. */
    "datatype": NamedNode<'http://datashapes.org/sparql#datatype'>;
    /** Extracts the day from a date/time literal. */
    "day": NamedNode<'http://datashapes.org/sparql#day'>;
    /** Returns the arithmetic quotient of its operands. */
    "divide": NamedNode<'http://datashapes.org/sparql#divide'>;
    "encode_for_uri": NamedNode<'http://datashapes.org/sparql#encode_for_uri'>;
    /** Returns true if both arguments are equal. */
    "eq": NamedNode<'http://datashapes.org/sparql#eq'>;
    /** Returns the largest (closest to positive infinity) number with no fractional part that is not greater than the value of ?arg1. An error is raised if ?arg1 is not a numeric value. */
    "floor": NamedNode<'http://datashapes.org/sparql#floor'>;
    /** Returns true if ?arg1 >= ?arg2. */
    "ge": NamedNode<'http://datashapes.org/sparql#ge'>;
    /** Returns true if ?arg1 > arg2. */
    "gt": NamedNode<'http://datashapes.org/sparql#gt'>;
    /** Extracts the hours from a date/time literal. */
    "hours": NamedNode<'http://datashapes.org/sparql#hours'>;
    /** The SPARQL 1.1 built-in function IF. */
    "if": NamedNode<'http://datashapes.org/sparql#if'>;
    /** Checks whether the value on the left (?arg1) is one of the values on the right (?arg2, ?arg3 ...). */
    "in": NamedNode<'http://datashapes.org/sparql#in'>;
    /** Creates a IRI resource (node) from a given IRI string (?arg1). */
    "iri": NamedNode<'http://datashapes.org/sparql#iri'>;
    /** Checks whether a given node is a blank node. */
    "isBlank": NamedNode<'http://datashapes.org/sparql#isBlank'>;
    /** Checks whether a given node is a IRI node. */
    "isIRI": NamedNode<'http://datashapes.org/sparql#isIRI'>;
    /** Checks whether a given node is a literal. */
    "isLiteral": NamedNode<'http://datashapes.org/sparql#isLiteral'>;
    /** Returns true if arg1 is a numeric value. Returns false otherwise. term is numeric if it has an appropriate datatype (see the section Operand Data Types) and has a valid lexical form, making it a valid argument to functions and operators taking numeric arguments. */
    "isNumeric": NamedNode<'http://datashapes.org/sparql#isNumeric'>;
    /** Checks whether a node is a URI. */
    "isURI": NamedNode<'http://datashapes.org/sparql#isURI'>;
    /** Returns the language tag of ?arg1, if it has one. It returns "" if the literal has no language tag. Node that the RDF data model does not include literals with an empty language tag. */
    "lang": NamedNode<'http://datashapes.org/sparql#lang'>;
    /** Returns true if language-tag (first argument) matches language-range (second argument) per the basic filtering scheme defined in [RFC4647] section 3.3.1. */
    "langMatches": NamedNode<'http://datashapes.org/sparql#langMatches'>;
    /** Converts a string to lower case characters. */
    "lcase": NamedNode<'http://datashapes.org/sparql#lcase'>;
    /** Returns true if ?arg1 <= ?arg2. */
    "le": NamedNode<'http://datashapes.org/sparql#le'>;
    /** Returns true if ?arg1 < ?arg2. */
    "lt": NamedNode<'http://datashapes.org/sparql#lt'>;
    /** Returns the MD5 checksum, as a hex digit string, calculated on the UTF-8 representation of the simple literal or lexical form of the xsd:string. Hex digits SHOULD be in lower case. */
    "md5": NamedNode<'http://datashapes.org/sparql#md5'>;
    /** Extracts the minutes from a date/time literal. */
    "minutes": NamedNode<'http://datashapes.org/sparql#minutes'>;
    /** Extracts the month from a date/time literal. */
    "month": NamedNode<'http://datashapes.org/sparql#month'>;
    /** Returns the arithmetic product of its operands. */
    "multiply": NamedNode<'http://datashapes.org/sparql#multiply'>;
    /** Returns true if ?arg1 != ?arg2. */
    "ne": NamedNode<'http://datashapes.org/sparql#ne'>;
    /** Returns the boolean negation of the argument. */
    "not": NamedNode<'http://datashapes.org/sparql#not'>;
    /** Checks whether the value on the left (?arg1) is none of the values on the right (?arg2, ?arg3 ...). */
    "notin": NamedNode<'http://datashapes.org/sparql#notin'>;
    /** Gets the current date and time as an xsd:dateTime literal. */
    "now": NamedNode<'http://datashapes.org/sparql#now'>;
    /** Returns the logical OR between two (boolean) operands. */
    "or": NamedNode<'http://datashapes.org/sparql#or'>;
    /** Returns a number between 0 (inclusive) and 1.0e0 (exclusive). Different numbers can be produced every time this function is invoked. Numbers should be produced with approximately equal probability. */
    "rand": NamedNode<'http://datashapes.org/sparql#rand'>;
    /** Returns true if a string (?arg1) matches the regular expression supplied as a pattern (?arg2) as influenced by the value of flags (?arg3), otherwise returns false. */
    "regex": NamedNode<'http://datashapes.org/sparql#regex'>;
    /** Replaces each non-overlapping occurrence of a regular expression pattern with a replacement string. Regular expession matching may involve modifier flags. */
    "replace": NamedNode<'http://datashapes.org/sparql#replace'>;
    /** Returns the number with no fractional part that is closest to the argument. If there are two such numbers, then the one that is closest to positive infinity is returned. An error is raised if ?arg1 is not a numeric value. */
    "round": NamedNode<'http://datashapes.org/sparql#round'>;
    /** Returns TRUE if ?arg1 and ?arg2 are the same RDF term as defined in Resource Description Framework (RDF): Concepts and Abstract Syntax; returns FALSE otherwise. */
    "sameTerm": NamedNode<'http://datashapes.org/sparql#sameTerm'>;
    /** Extracts the seconds from a date/time literal. */
    "seconds": NamedNode<'http://datashapes.org/sparql#seconds'>;
    /** Returns the SHA1 checksum, as a hex digit string, calculated on the UTF-8 representation of the simple literal or lexical form of the xsd:string. Hex digits SHOULD be in lower case. */
    "sha1": NamedNode<'http://datashapes.org/sparql#sha1'>;
    /** Returns the SHA256 checksum, as a hex digit string, calculated on the UTF-8 representation of the simple literal or lexical form of the xsd:string. Hex digits SHOULD be in lower case. */
    "sha256": NamedNode<'http://datashapes.org/sparql#sha256'>;
    /** Returns the SHA384 checksum, as a hex digit string, calculated on the UTF-8 representation of the simple literal or lexical form of the xsd:string. Hex digits SHOULD be in lower case. */
    "sha384": NamedNode<'http://datashapes.org/sparql#sha384'>;
    /** Returns the SHA512 checksum, as a hex digit string, calculated on the UTF-8 representation of the simple literal or lexical form of the xsd:string. Hex digits SHOULD be in lower case. */
    "sha512": NamedNode<'http://datashapes.org/sparql#sha512'>;
    /** Returns the lexical form of ?arg1 (a literal); returns the codepoint representation of ?arg1 (an IRI). This is useful for examining parts of an IRI, for instance, the host-name. */
    "str": NamedNode<'http://datashapes.org/sparql#str'>;
    /** Returns a literal of the same kind (simple literal, plain literal same language tag, xsd:string) as the first argument arg1. The lexical form of the result is the substring of the value of arg1 that proceeds in arg1 the first occurrence of the lexical form of arg2; otherwise the lexical form of the result is the empty string. If the lexical form of arg2 is the empty string, the lexical form of the result is the emprty string. */
    "strafter": NamedNode<'http://datashapes.org/sparql#strafter'>;
    /** Returns a literal of the same kind (simple literal, plain literal same language tag, xsd:string) as the first argument arg1. The lexical form of the result is the substring of the value of arg1 that precedes in arg1 the first occurrence of the lexical form of arg2; otherwise the lexical form of the result is the empty string. If the lexical form of arg2 is the empty string, the lexical form of the result is the emprty string. */
    "strbefore": NamedNode<'http://datashapes.org/sparql#strbefore'>;
    /** Constructs a literal with lexical form and type as specified by the arguments. */
    "strdt": NamedNode<'http://datashapes.org/sparql#strdt'>;
    /** Returns true if the lexical form of ?arg1 ends with the lexical form of ?arg2, otherwise it returns false. */
    "strends": NamedNode<'http://datashapes.org/sparql#strends'>;
    /** Takes a string (?arg1) and a language (?arg2) and constructs a literal with a corresponding language tag. */
    "strlang": NamedNode<'http://datashapes.org/sparql#strlang'>;
    /** Computes the length of a given input string. */
    "strlen": NamedNode<'http://datashapes.org/sparql#strlen'>;
    /** Returns true if the lexical form of ?arg1 begins with the lexical form of ?arg2, otherwise it returns false. */
    "strstarts": NamedNode<'http://datashapes.org/sparql#strstarts'>;
    /** Returns a string that is the scheme specific part of UUID. That is, as a simple literal, the result of generating a UUID, converting to a simple literal and removing the initial urn:uuid:. */
    "struuid": NamedNode<'http://datashapes.org/sparql#struuid'>;
    /** Gets the sub-string of a given string. The index of the first character is 1. */
    "substr": NamedNode<'http://datashapes.org/sparql#substr'>;
    /** Returns the arithmetic difference of its operands. */
    "subtract": NamedNode<'http://datashapes.org/sparql#subtract'>;
    /** Returns the timezone part of ?arg1 as an xsd:dayTimeDuration. Raises an error if there is no timezone. */
    "timezone": NamedNode<'http://datashapes.org/sparql#timezone'>;
    /** Returns the timezone part of ?arg1 as a simple literal. Returns the empty string if there is no timezone. */
    "tz": NamedNode<'http://datashapes.org/sparql#tz'>;
    /** Converts a string to upper case characters. */
    "ucase": NamedNode<'http://datashapes.org/sparql#ucase'>;
    /** Returns the operand ?arg1 with the sign reversed. If ?arg1 is positive, its negative is returned; if it is negative, its positive is returned. */
    "unaryminus": NamedNode<'http://datashapes.org/sparql#unaryminus'>;
    /** Returns the operand ?arg1 with the sign unchanged. */
    "unaryplus": NamedNode<'http://datashapes.org/sparql#unaryplus'>;
    /** Equivalent to IRI. */
    "uri": NamedNode<'http://datashapes.org/sparql#uri'>;
    /** Returns a fresh IRI from the UUID URN scheme. Each call of UUID() returns a different UUID. It must not be the "nil" UUID (all zeroes). The variant and version of the UUID is implementation dependent. */
    "uuid": NamedNode<'http://datashapes.org/sparql#uuid'>;
    /** Extracts the year from a date/time literal. */
    "year": NamedNode<'http://datashapes.org/sparql#year'>;
    "arg1": NamedNode<'http://datashapes.org/sparql#arg1'>;
    "arg2": NamedNode<'http://datashapes.org/sparql#arg2'>;
    "arg3": NamedNode<'http://datashapes.org/sparql#arg3'>;
    "arg4": NamedNode<'http://datashapes.org/sparql#arg4'>;
}

const builder = namespace("http://datashapes.org/sparql#") as any;
export const strict = builder as NamespaceBuilder<keyof Dash_sparql> & Dash_sparql;
export const loose = builder as NamespaceBuilder & Dash_sparql;
