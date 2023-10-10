import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Math {
    '': NamedNode<'http://www.w3.org/2000/10/swap/math#'>;
    /** A math:Function is unique in terms of math:EqualTo. */
    "Function": NamedNode<'http://www.w3.org/2000/10/swap/math#Function'>;
    /**
     * The class of things that are DAML lists were all of the 
     *       members are math:Value items.
     */
    "List": NamedNode<'http://www.w3.org/2000/10/swap/math#List'>;
    /**
     * a logical operator allows evaluation eihter way, or testing relationship
     *          between two values
     */
    "LogicalOperator": NamedNode<'http://www.w3.org/2000/10/swap/math#LogicalOperator'>;
    /** A math:ReverseFunction is unambiguous in terms of math:EqualTo. */
    "ReverseFunction": NamedNode<'http://www.w3.org/2000/10/swap/math#ReverseFunction'>;
    "StrictProperty": NamedNode<'http://www.w3.org/2000/10/swap/math#StrictProperty'>;
    /** This is the class of things that are math lists with only two members. */
    "TwoMemberedList": NamedNode<'http://www.w3.org/2000/10/swap/math#TwoMemberedList'>;
    /** The class of things that are numeric float values as in Python. */
    "Value": NamedNode<'http://www.w3.org/2000/10/swap/math#Value'>;
    /** The object is calulated as the absolute value of the subject. */
    "absoluteValue": NamedNode<'http://www.w3.org/2000/10/swap/math#absoluteValue'>;
    /** The subject is a pair of numbers. The object is calulated as the arc tangent value of the ratio of the two subject values. */
    "atan2": NamedNode<'http://www.w3.org/2000/10/swap/math#atan2'>;
    /** The subject is an angle expressed in radians. The object is calulated as the cosine value of the subject. */
    "cos": NamedNode<'http://www.w3.org/2000/10/swap/math#cos'>;
    /** The subject is an angle expressed in radians. The object is calulated as the conversion in degrees of the value of the subject. */
    "degrees": NamedNode<'http://www.w3.org/2000/10/swap/math#degrees'>;
    /**
     * The subject is a pair of numbers. The object
     * is calculated by subtracting the second number of the pair from the first.
     *
     */
    "difference": NamedNode<'http://www.w3.org/2000/10/swap/math#difference'>;
    /** True iff the subject is a string representation of a number which  is EQUAL TO a number of which the object is a string representation. */
    "equalTo": NamedNode<'http://www.w3.org/2000/10/swap/math#equalTo'>;
    /**
     * The subject is a pair of numbers. The object
     * is calculated by raising the first number of the power of the second.
     *
     */
    "exponentiation": NamedNode<'http://www.w3.org/2000/10/swap/math#exponentiation'>;
    /** True iff the subject is a string representation of a number which  is greater than the number of which the object is a string representation. */
    "greaterThan": NamedNode<'http://www.w3.org/2000/10/swap/math#greaterThan'>;
    /**
     * The subject is a pair of integer numbers. The object
     * is calculated by dividing the first number of the pair by the second, ignoring remainder.
     *
     */
    "integerQuotient": NamedNode<'http://www.w3.org/2000/10/swap/math#integerQuotient'>;
    /** True iff the subject is a string representation of a number which  is LESS than a number of which the object is a string representation. */
    "lessThan": NamedNode<'http://www.w3.org/2000/10/swap/math#lessThan'>;
    /**
     * The number of items in a list. The subject is a list,
     * the object is calculated as the number of members.
     */
    "memberCount": NamedNode<'http://www.w3.org/2000/10/swap/math#memberCount'>;
    /** The subject or object is calculated to be the negation of the other. */
    "negation": NamedNode<'http://www.w3.org/2000/10/swap/math#negation'>;
    /** True iff the subject is a string representation of a number which  is NOT EQUAL to a number of which the object is a string representation. */
    "notEqualTo": NamedNode<'http://www.w3.org/2000/10/swap/math#notEqualTo'>;
    /** True iff the subject is a string representation of a number which is NOT greater than the number of which the object is a string representation. */
    "notGreaterThan": NamedNode<'http://www.w3.org/2000/10/swap/math#notGreaterThan'>;
    /** True iff the subject is a string representation of a number which  is NOT LESS than a number of which the object is a string representation. */
    "notLessThan": NamedNode<'http://www.w3.org/2000/10/swap/math#notLessThan'>;
    /**
     * The subject is a list of numbers.
     * The object is calculated as the arithmentic product of those numbers.
     *
     */
    "product": NamedNode<'http://www.w3.org/2000/10/swap/math#product'>;
    /**
     * The subject is a pair of numbers. The object
     * is calculated by dividing the first number of the pair by the second.
     *
     */
    "quotient": NamedNode<'http://www.w3.org/2000/10/swap/math#quotient'>;
    /**
     * The subject is a pair of integers. The object
     * is calculated by dividing the first number of the pair by the second and taking the remainder.
     *
     */
    "remainder": NamedNode<'http://www.w3.org/2000/10/swap/math#remainder'>;
    /** The object is calulated as the subject rounded to the nearest integer. */
    "rounded": NamedNode<'http://www.w3.org/2000/10/swap/math#rounded'>;
    /** The subject is an angle expressed in radians. The object is calulated as the sine value of the subject. */
    "sin": NamedNode<'http://www.w3.org/2000/10/swap/math#sin'>;
    /** The subject is an angle expressed in radians. The object is calulated as the hyperbolic sine value of the subject. */
    "sinh": NamedNode<'http://www.w3.org/2000/10/swap/math#sinh'>;
    /**
     * The subject is a list of numbers.
     * The object is calculated as the arithmentic sum of those numbers.
     *
     */
    "sum": NamedNode<'http://www.w3.org/2000/10/swap/math#sum'>;
    /** The subject is an angle expressed in radians. The object is calulated as the tangent value of the subject. */
    "tan": NamedNode<'http://www.w3.org/2000/10/swap/math#tan'>;
    /** The subject is an angle expressed in radians. The object is calulated as the hyperbolic tangent value of the subject. */
    "tanh": NamedNode<'http://www.w3.org/2000/10/swap/math#tanh'>;
}

const builder = namespace("http://www.w3.org/2000/10/swap/math#") as any;
export const strict = builder as NamespaceBuilder<keyof Math> & Math;
export const loose = builder as NamespaceBuilder & Math;
