import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Xsd {
    /**
     *     ENTITIES represents the ENTITIES attribute type from [XML]. The ·value
     *     space· of ENTITIES is the set of finite, non-zero-length sequences of
     *     ·ENTITY· values that have been declared as unparsed entities in a document
     *     type definition. The ·lexical space· of ENTITIES is the set of
     *     space-separated lists of tokens, of which each token is in the ·lexical
     *     space· of ENTITY. The ·item type· of ENTITIES is ENTITY. ENTITIES is
     *     derived from ·anySimpleType· in two steps: an anonymous list type is
     *     defined, whose ·item type· is ENTITY; this is the ·base type· of ENTITIES,
     *     which restricts its value space to lists with at least one item.
     *   
     */
    "ENTITIES": NamedNode<'http://www.w3.org/2001/XMLSchema#ENTITIES'>;
    /**
     *      ENTITY represents the ENTITY attribute type from [XML]. The ·value space·
     *      of ENTITY is the set of all strings that ·match· the NCName production in
     *      [Namespaces in XML] and have been declared as an unparsed entity in a
     *      document type definition. The ·lexical space· of ENTITY is the set of all
     *      strings that ·match· the NCName production in [Namespaces in XML]. The
     *      ·base type· of ENTITY is NCName.
     *   
     */
    "ENTITY": NamedNode<'http://www.w3.org/2001/XMLSchema#ENTITY'>;
    /**
     *      ID represents the ID attribute type from [XML]. The ·value space· of ID is
     *      the set of all strings that ·match· the NCName production in [Namespaces
     *      in XML]. The ·lexical space· of ID is the set of all strings that ·match·
     *      the NCName production in [Namespaces in XML]. The ·base type· of ID is
     *      NCName.
     *   
     */
    "ID": NamedNode<'http://www.w3.org/2001/XMLSchema#ID'>;
    /**
     *     IDREF represents the IDREF attribute type from [XML]. The ·value space· of
     *     IDREF is the set of all strings that ·match· the NCName production in
     *     [Namespaces in XML]. The ·lexical space· of IDREF is the set of strings
     *     that ·match· the NCName production in [Namespaces in XML]. The ·base type·
     *     of IDREF is NCName.
     *   
     */
    "IDREF": NamedNode<'http://www.w3.org/2001/XMLSchema#IDREF'>;
    /**
     *     IDREFS represents the IDREFS attribute type from [XML]. The ·value space·
     *     of IDREFS is the set of finite, non-zero-length sequences of IDREFs. The
     *     ·lexical space· of IDREFS is the set of space-separated lists of tokens, of
     *     which each token is in the ·lexical space· of IDREF. The ·item type· of
     *     IDREFS is IDREF. IDREFS is derived from ·anySimpleType· in two steps: an
     *     anonymous list type is defined, whose ·item type· is IDREF; this is the
     *     ·base type· of IDREFS, which restricts its value space to lists with at
     *     least one item.
     *   
     */
    "IDREFS": NamedNode<'http://www.w3.org/2001/XMLSchema#IDREFS'>;
    /**
     *      NCName represents XML "non-colonized" Names. The ·value space· of NCName
     *      is the set of all strings which ·match· the NCName production of
     *      [Namespaces in XML]. The ·lexical space· of NCName is the set of all
     *      strings which ·match· the NCName production of [Namespaces in XML]. The
     *      ·base type· of NCName is Name.
     *   
     */
    "NCName": NamedNode<'http://www.w3.org/2001/XMLSchema#NCName'>;
    /**
     *      NMTOKEN represents the NMTOKEN attribute type from [XML]. The ·value
     *      space· of NMTOKEN is the set of tokens that ·match· the Nmtoken production
     *      in [XML]. The ·lexical space· of NMTOKEN is the set of strings that
     *      ·match· the Nmtoken production in [XML]. The ·base type· of NMTOKEN is
     *      token.
     *   
     */
    "NMTOKEN": NamedNode<'http://www.w3.org/2001/XMLSchema#NMTOKEN'>;
    /**
     *     NMTOKENS represents the NMTOKENS attribute type from [XML]. The ·value
     *     space· of NMTOKENS is the set of finite, non-zero-length sequences of
     *     ·NMTOKEN·s. The ·lexical space· of NMTOKENS is the set of space-separated
     *     lists of tokens, of which each token is in the ·lexical space· of NMTOKEN.
     *     The ·item type· of NMTOKENS is NMTOKEN. NMTOKENS is derived from
     *     ·anySimpleType· in two steps: an anonymous list type is defined, whose
     *     ·item type· is NMTOKEN; this is the ·base type· of NMTOKENS, which
     *     restricts its value space to lists with at least one item.
     *   
     */
    "NMTOKENS": NamedNode<'http://www.w3.org/2001/XMLSchema#NMTOKENS'>;
    /**
     *     NOTATION represents the NOTATION attribute type from [XML]. The ·value
     *     space· of NOTATION is the set of QNames of notations declared in the
     *     current schema. The ·lexical space· of NOTATION is the set of all names of
     *     notations declared in the current schema (in the form of QNames).
     *   
     */
    "NOTATION": NamedNode<'http://www.w3.org/2001/XMLSchema#NOTATION'>;
    /**
     *     Name represents XML Names. The ·value space· of Name is the set of all
     *     strings which ·match· the Name production of [XML]. The ·lexical space· of
     *     Name is the set of all strings which ·match· the Name production of [XML].
     *     The ·base type· of Name is token.
     *   
     */
    "Name": NamedNode<'http://www.w3.org/2001/XMLSchema#Name'>;
    /**
     *     QName represents XML qualified names. The ·value space· of QName is the set
     *     of tuples {namespace name, local part}, where namespace name is an anyURI
     *     and local part is an NCName. The ·lexical space· of QName is the set of
     *     strings that ·match· the QName production of [Namespaces in XML].
     *   
     */
    "QName": NamedNode<'http://www.w3.org/2001/XMLSchema#QName'>;
    /**
     *     anyAtomicType is a special ·restriction· of anySimpleType. The ·value· and
     *     ·lexical spaces· of anyAtomicType are the unions of the ·value· and
     *     ·lexical spaces· of all the ·primitive· datatypes, and anyAtomicType is
     *     their ·base type·.
     *   
     */
    "anyAtomicType": NamedNode<'http://www.w3.org/2001/XMLSchema#anyAtomicType'>;
    /**
     *     The definition of anySimpleType is a special ·restriction· of anyType. The
     *     ·lexical space· of anySimpleType is the set of all sequences of Unicode
     *     characters, and its ·value space· includes all ·atomic values· and all
     *     finite-length lists of zero or more ·atomic values·.
     *   
     */
    "anySimpleType": NamedNode<'http://www.w3.org/2001/XMLSchema#anySimpleType'>;
    /**
     *     The root of the [XML Schema 1.1] datatype heirarchy.
     *   
     */
    "anyType": NamedNode<'http://www.w3.org/2001/XMLSchema#anyType'>;
    /**
     *     anyURI represents an Internationalized Resource Identifier Reference
     *     (IRI). An anyURI value can be absolute or relative, and may have an
     *     optional fragment identifier (i.e., it may be an IRI Reference). This
     *     type should be used when the value fulfills the role of an IRI, as
     *     defined in [RFC 3987] or its successor(s) in the IETF Standards Track.
     *   
     */
    "anyURI": NamedNode<'http://www.w3.org/2001/XMLSchema#anyURI'>;
    /**
     *     base64Binary represents arbitrary Base64-encoded binary data. For
     *     base64Binary data the entire binary stream is encoded using the Base64
     *     Encoding defined in [RFC 3548], which is derived from the encoding
     *     described in [RFC 2045].
     *   
     */
    "base64Binary": NamedNode<'http://www.w3.org/2001/XMLSchema#base64Binary'>;
    /**
     *     boolean represents the values of two-valued logic.
     *   
     */
    "boolean": NamedNode<'http://www.w3.org/2001/XMLSchema#boolean'>;
    /**
     *     byte is ·derived· from short by setting the value of ·maxInclusive· to be
     *     127 and ·minInclusive· to be -128. The ·base type· of byte is short.
     *   
     */
    "byte": NamedNode<'http://www.w3.org/2001/XMLSchema#byte'>;
    /**
     *     date represents top-open intervals of exactly one day in length on the
     *     timelines of dateTime, beginning on the beginning moment of each day, up to
     *     but not including the beginning moment of the next day). For non-timezoned
     *     values, the top-open intervals disjointly cover the non-timezoned timeline,
     *     one per day. For timezoned values, the intervals begin at every minute and
     *     therefore overlap.
     *   
     */
    "date": NamedNode<'http://www.w3.org/2001/XMLSchema#date'>;
    /**
     *     dateTime represents instants of time, optionally marked with a particular
     *     time zone offset. Values representing the same instant but having different
     *     time zone offsets are equal but not identical.
     *   
     */
    "dateTime": NamedNode<'http://www.w3.org/2001/XMLSchema#dateTime'>;
    /**
     *     The dateTimeStamp datatype is ·derived· from dateTime by giving the value
     *     required to its explicitTimezone facet. The result is that all values of
     *     dateTimeStamp are required to have explicit time zone offsets and the
     *     datatype is totally ordered.
     *   
     */
    "dateTimeStamp": NamedNode<'http://www.w3.org/2001/XMLSchema#dateTimeStamp'>;
    /**
     *      dayTimeDuration is a datatype ·derived· from duration by restricting its
     *      ·lexical representations· to instances of dayTimeDurationLexicalRep. The
     *      ·value space· of dayTimeDuration is therefore that of duration restricted
     *      to those whose ·months· property is 0. This results in a duration datatype
     *      which is totally ordered.
     *   
     */
    "dayTimeDuration": NamedNode<'http://www.w3.org/2001/XMLSchema#dayTimeDuration'>;
    /**
     *     decimal represents a subset of the real numbers, which can be represented
     *     by decimal numerals. The ·value space· of decimal is the set of numbers
     *     that can be obtained by dividing an integer by a non-negative power of ten,
     *     i.e., expressible as i / 10n where i and n are integers and n ≥ 0.
     *     Precision is not reflected in this value space; the number 2.0 is not
     *     distinct from the number 2.00. The order relation on decimal is the order
     *     relation on real numbers, restricted to this subset.
     *   
     */
    "decimal": NamedNode<'http://www.w3.org/2001/XMLSchema#decimal'>;
    /**
     *     The double datatype is patterned after the IEEE double-precision 64-bit
     *     floating point datatype [IEEE 754-2008]. Each floating point datatype has a
     *     value space that is a subset of the rational numbers. Floating point
     *     numbers are often used to approximate arbitrary real numbers.
     *   
     */
    "double": NamedNode<'http://www.w3.org/2001/XMLSchema#double'>;
    /**
     *     duration is a datatype that represents durations of time. The concept of
     *     duration being captured is drawn from those of [ISO 8601], specifically
     *     durations without fixed endpoints. For example, "15 days" (whose most
     *     common lexical representation in duration is "'P15D'") is a duration value;
     *     "15 days beginning 12 July 1995" and "15 days ending 12 July 1995" are not
     *     duration values. duration can provide addition and subtraction operations
     *     between duration values and between duration/dateTime value pairs, and can
     *     be the result of subtracting dateTime values. However, only addition to
     *     dateTime is required for XML Schema processing and is defined in the
     *     function ·dateTimePlusDuration·.
     *   
     */
    "duration": NamedNode<'http://www.w3.org/2001/XMLSchema#duration'>;
    /**
     *     The float datatype is patterned after the IEEE single-precision 32-bit
     *     floating point datatype [IEEE 754-2008]. Its value space is a subset of the
     *     rational numbers. Floating point numbers are often used to approximate
     *     arbitrary real numbers.
     *   
     */
    "float": NamedNode<'http://www.w3.org/2001/XMLSchema#float'>;
    /**
     *     gDay represents whole days within an arbitrary month—days that recur at the
     *     same point in each (Gregorian) month. This datatype is used to represent a
     *     specific day of the month. To indicate, for example, that an employee gets
     *     a paycheck on the 15th of each month. (Obviously, days beyond 28 cannot
     *     occur in all months; they are nonetheless permitted, up to 31.)
     *   
     */
    "gDay": NamedNode<'http://www.w3.org/2001/XMLSchema#gDay'>;
    /**
     *     gMonth represents whole (Gregorian) months within an arbitrary year—months
     *     that recur at the same point in each year. It might be used, for example,
     *     to say what month annual Thanksgiving celebrations fall in different
     *     countries (--11 in the United States, --10 in Canada, and possibly other
     *     months in other countries).
     *   
     */
    "gMonth": NamedNode<'http://www.w3.org/2001/XMLSchema#gMonth'>;
    /**
     *     gMonthDay represents whole calendar days that recur at the same point in
     *     each calendar year, or that occur in some arbitrary calendar year.
     *     (Obviously, days beyond 28 cannot occur in all Februaries; 29 is
     *     nonetheless permitted.)
     *   
     */
    "gMonthDay": NamedNode<'http://www.w3.org/2001/XMLSchema#gMonthDay'>;
    /**
     *     gYear represents Gregorian calendar years.
     *   
     */
    "gYear": NamedNode<'http://www.w3.org/2001/XMLSchema#gYear'>;
    /**
     *     gYearMonth represents specific whole Gregorian months in specific Gregorian years.
     *   
     */
    "gYearMonth": NamedNode<'http://www.w3.org/2001/XMLSchema#gYearMonth'>;
    /**
     *     hexBinary represents arbitrary hex-encoded binary data. 
     *   
     */
    "hexBinary": NamedNode<'http://www.w3.org/2001/XMLSchema#hexBinary'>;
    /**
     *       int is ·derived· from long by setting the value of ·maxInclusive· to be
     *       2147483647 and ·minInclusive· to be -2147483648. The ·base type· of int
     *       is long.
     *   
     */
    "int": NamedNode<'http://www.w3.org/2001/XMLSchema#int'>;
    /**
     *      integer is ·derived· from decimal by fixing the value of ·fractionDigits·
     *      to be 0 and disallowing the trailing decimal point. This results in the
     *      standard mathematical concept of the integer numbers. The ·value space· of
     *      integer is the infinite set {...,-2,-1,0,1,2,...}. The ·base type· of
     *      integer is decimal.
     *   
     */
    "integer": NamedNode<'http://www.w3.org/2001/XMLSchema#integer'>;
    /**
     *     language represents formal natural language identifiers, as defined by [BCP
     *     47] (currently represented by [RFC 4646] and [RFC 4647]) or its
     *     successor(s). The ·value space· and ·lexical space· of language are the set
     *     of all strings that conform to the pattern [a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*
     *   
     */
    "language": NamedNode<'http://www.w3.org/2001/XMLSchema#language'>;
    /**
     *      long is ·derived· from integer by setting the value of ·maxInclusive· to
     *      be 9223372036854775807 and ·minInclusive· to be -9223372036854775808. The
     *      ·base type· of long is integer.
     *   
     */
    "long": NamedNode<'http://www.w3.org/2001/XMLSchema#long'>;
    /**
     *      negativeInteger is ·derived· from nonPositiveInteger by setting the value
     *      of ·maxInclusive· to be -1. This results in the standard mathematical
     *      concept of the negative integers. The ·value space· of negativeInteger is
     *      the infinite set {...,-2,-1}. The ·base type· of negativeInteger is
     *      nonPositiveInteger.
     *   
     */
    "negativeInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#negativeInteger'>;
    /**
     *      nonNegativeInteger is ·derived· from integer by setting the value of
     *      ·minInclusive· to be 0. This results in the standard mathematical concept
     *      of the non-negative integers. The ·value space· of nonNegativeInteger is
     *      the infinite set {0,1,2,...}. The ·base type· of nonNegativeInteger is
     *      integer.
     *   
     */
    "nonNegativeInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#nonNegativeInteger'>;
    /**
     *     nonPositiveInteger is ·derived· from integer by setting the value of
     *     ·maxInclusive· to be 0. This results in the standard mathematical concept
     *     of the non-positive integers. The ·value space· of nonPositiveInteger is
     *     the infinite set {...,-2,-1,0}. The ·base type· of nonPositiveInteger is
     *     integer.
     *   
     */
    "nonPositiveInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#nonPositiveInteger'>;
    /**
     *     normalizedString represents white space normalized strings. The ·value
     *     space· of normalizedString is the set of strings that do not contain the
     *     carriage return (#xD), line feed (#xA) nor tab (#x9) characters. The
     *     ·lexical space· of normalizedString is the set of strings that do not
     *     contain the carriage return (#xD), line feed (#xA) nor tab (#x9)
     *     characters. The ·base type· of normalizedString is string.
     *   
     */
    "normalizedString": NamedNode<'http://www.w3.org/2001/XMLSchema#normalizedString'>;
    /**
     *      positiveInteger is ·derived· from nonNegativeInteger by setting the value
     *      of ·minInclusive· to be 1. This results in the standard mathematical
     *      concept of the positive integer numbers. The ·value space· of
     *      positiveInteger is the infinite set {1,2,...}. The ·base type· of
     *      positiveInteger is nonNegativeInteger.
     *   
     */
    "positiveInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#positiveInteger'>;
    /**
     *     short is ·derived· from int by setting the value of ·maxInclusive· to be
     *     32767 and ·minInclusive· to be -32768. The ·base type· of short is int.
     *   
     */
    "short": NamedNode<'http://www.w3.org/2001/XMLSchema#short'>;
    /**
     *     The string datatype represents character strings in XML.
     *   
     */
    "string": NamedNode<'http://www.w3.org/2001/XMLSchema#string'>;
    /**
     *     time represents instants of time that recur at the same point in each
     *     calendar day, or that occur in some arbitrary calendar day.
     *   
     */
    "time": NamedNode<'http://www.w3.org/2001/XMLSchema#time'>;
    /**
     *      token represents tokenized strings. The ·value space· of token is the set
     *      of strings that do not contain the carriage return (#xD), line feed (#xA)
     *      nor tab (#x9) characters, that have no leading or trailing spaces (#x20)
     *      and that have no internal sequences of two or more spaces. The ·lexical
     *      space· of token is the set of strings that do not contain the carriage
     *      return (#xD), line feed (#xA) nor tab (#x9) characters, that have no
     *      leading or trailing spaces (#x20) and that have no internal sequences of
     *      two or more spaces. The ·base type· of token is normalizedString.
     *   
     */
    "token": NamedNode<'http://www.w3.org/2001/XMLSchema#token'>;
    /**
     *       nsignedByte is ·derived· from unsignedShort by setting the value of
     *       ·maxInclusive· to be 255. The ·base type· of unsignedByte is
     *       unsignedShort.
     *     
     */
    "unsignedByte": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedByte'>;
    /**
     *     unsignedInt is ·derived· from unsignedLong by setting the value of
     *     ·maxInclusive· to be 4294967295. The ·base type· of unsignedInt is
     *     unsignedLong.
     *   
     */
    "unsignedInt": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedInt'>;
    /**
     *      unsignedLong is ·derived· from nonNegativeInteger by setting the value of
     *      ·maxInclusive· to be 18446744073709551615. The ·base type· of unsignedLong
     *      is nonNegativeInteger.
     *   
     */
    "unsignedLong": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedLong'>;
    /**
     *        unsignedShort is ·derived· from unsignedInt by setting the value of
     *        ·maxInclusive· to be 65535. The ·base type· of unsignedShort is
     *        unsignedInt.
     *     
     */
    "unsignedShort": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedShort'>;
    /**
     *      yearMonthDuration is a datatype ·derived· from duration by restricting its
     *      ·lexical representations· to instances of yearMonthDurationLexicalRep. The
     *      ·value space· of yearMonthDuration is therefore that of duration
     *      restricted to those whose ·seconds· property is 0. This results in a
     *      duration datatype which is totally ordered.
     *   
     */
    "yearMonthDuration": NamedNode<'http://www.w3.org/2001/XMLSchema#yearMonthDuration'>;
}

const builder = namespace("http://www.w3.org/2001/XMLSchema#") as any;
export const strict = builder as NamespaceBuilder<keyof Xsd> & Xsd;
export const loose = builder as NamespaceBuilder & Xsd;
