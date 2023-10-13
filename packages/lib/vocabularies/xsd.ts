import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Xsd {
    '': NamedNode<'http://www.w3.org/2001/XMLSchema#'>;
    /**
     *     `anyAtomicType` is a special _restriction_ of `anySimpleType`. The _value_ and
     *     _lexical spaces_ of `anyAtomicType` are the unions of the _value_ and
     *     _lexical spaces_ of all the _primitive_ datatypes, and `anyAtomicType` is
     *     their _base type_.
     *   
     */
    "anyAtomicType": NamedNode<'http://www.w3.org/2001/XMLSchema#anyAtomicType'>;
    /**
     *     The definition of `anySimpleType` is a special _restriction_ of `anyType`. The
     *     _lexical space_ of a`nySimpleType` is the set of all sequences of Unicode
     *     characters, and its _value space_ includes all _atomic values_ and all
     *     finite-length lists of zero or more _atomic values_.
     *   
     */
    "anySimpleType": NamedNode<'http://www.w3.org/2001/XMLSchema#anySimpleType'>;
    /**
     *     The root of the [XML Schema 1.1] datatype heirarchy.
     *   
     */
    "anyType": NamedNode<'http://www.w3.org/2001/XMLSchema#anyType'>;
    /**
     *     `anyURI` represents an Internationalized Resource Identifier Reference
     *     (IRI). An `anyURI` value can be absolute or relative, and may have an
     *     optional fragment identifier (i.e., it may be an IRI Reference). This
     *     type should be used when the value fulfills the role of an IRI, as
     *     defined in [RFC 3987] or its successor(s) in the IETF Standards Track.
     *   
     */
    "anyURI": NamedNode<'http://www.w3.org/2001/XMLSchema#anyURI'>;
    /**
     *     `base64Binary` represents arbitrary Base64-encoded binary data. For
     *     `base64Binary` data the entire binary stream is encoded using the `Base64`
     *     Encoding defined in [RFC 3548], which is derived from the encoding
     *     described in [RFC 2045].
     *   
     */
    "base64Binary": NamedNode<'http://www.w3.org/2001/XMLSchema#base64Binary'>;
    /**
     *     `boolean` represents the values of two-valued logic.
     *   
     */
    "boolean": NamedNode<'http://www.w3.org/2001/XMLSchema#boolean'>;
    /**
     *     `byte` is _derived_ from `short` by setting the value of `maxInclusive` to be
     *     `127` and `minInclusive` to be `-128`. The _base type_ of `byte` is `short`.
     *   
     */
    "byte": NamedNode<'http://www.w3.org/2001/XMLSchema#byte'>;
    /**
     *     `date` represents top-open intervals of exactly one day in length on the
     *     timelines of `dateTime`, beginning on the beginning moment of each day, up to
     *     but not including the beginning moment of the next day). For non-timezoned
     *     values, the top-open intervals disjointly cover the non-timezoned timeline,
     *     one per day. For timezoned values, the intervals begin at every minute and
     *     therefore overlap.
     *   
     */
    "date": NamedNode<'http://www.w3.org/2001/XMLSchema#date'>;
    /**
     *     `dateTime` represents instants of time, optionally marked with a particular
     *     time zone offset. Values representing the same instant but having different
     *     time zone offsets are equal but not identical.
     *   
     */
    "dateTime": NamedNode<'http://www.w3.org/2001/XMLSchema#dateTime'>;
    /**
     *     The `dateTimeStamp` datatype is _derived_ from `dateTime` by giving the value
     *     required to its `explicitTimezone` facet. The result is that all values of
     *     `dateTimeStamp` are required to have explicit time zone offsets and the
     *     datatype is totally ordered.
     *   
     */
    "dateTimeStamp": NamedNode<'http://www.w3.org/2001/XMLSchema#dateTimeStamp'>;
    /**
     *      `dayTimeDuration` is a datatype _derived_ from `duration` by restricting its
     *      _lexical representations_ to instances of `dayTimeDurationLexicalRep`. The
     *      _value space_ of `dayTimeDuration` is therefore that of `duration` restricted
     *      to those whose `months` property is `0`. This results in a `duration` datatype
     *      which is totally ordered.
     *   
     */
    "dayTimeDuration": NamedNode<'http://www.w3.org/2001/XMLSchema#dayTimeDuration'>;
    /**
     *     `decimal` represents a subset of the real numbers, which can be represented
     *     by decimal numerals. The _value space_ of decimal is the set of numbers
     *     that can be obtained by dividing an integer by a non-negative power of ten,
     *     i.e., expressible as `i / 10n` where `i` and `n` are integers and `n ≥ 0`.
     *     Precision is not reflected in this value space; the number `2.0` is not
     *     distinct from the number `2.00`. The order relation on `decimal` is the order
     *     relation on real numbers, restricted to this subset.
     *   
     */
    "decimal": NamedNode<'http://www.w3.org/2001/XMLSchema#decimal'>;
    /**
     *     The `double` datatype is patterned after the IEEE double-precision 64-bit
     *     floating point datatype [IEEE 754-2008]. Each floating point datatype has a
     *     value space that is a subset of the rational numbers. Floating point
     *     numbers are often used to approximate arbitrary real numbers.
     *   
     */
    "double": NamedNode<'http://www.w3.org/2001/XMLSchema#double'>;
    /**
     *     `duration` is a datatype that represents durations of time. The concept of
     *     duration being captured is drawn from those of [ISO 8601], specifically
     *     durations without fixed endpoints. For example, "15 days" (whose most
     *     common lexical representation in duration is `"'P15D'"`) is a duration value;
     *     "15 days beginning 12 July 1995" and "15 days ending 12 July 1995" are not
     *     duration values. duration can provide addition and subtraction operations
     *     between duration values and between duration/dateTime value pairs, and can
     *     be the result of subtracting dateTime values. However, only addition to
     *     `dateTime` is required for XML Schema processing and is defined in the
     *     function `dateTimePlusDuration`.
     *   
     */
    "duration": NamedNode<'http://www.w3.org/2001/XMLSchema#duration'>;
    /**
     *     `ENTITIES` represents the `ENTITIES` attribute type from [XML]. The _value
     *     space_ of `ENTITIES` is the set of finite, non-zero-length sequences of
     *     `ENTITY` values that have been declared as unparsed entities in a document
     *     type definition. The _lexical space_ of `ENTITIES` is the set of
     *     space-separated lists of tokens, of which each token is in the _lexical
     *     space_ of `ENTITY`. The _item type_ of `ENTITIES` is `ENTITY`. `ENTITIES` is
     *     derived from `anySimpleType` in two steps: an anonymous list type is
     *     defined, whose _item type_ is `ENTITY`; this is the _base type_ of `ENTITIES`,
     *     which restricts its value space to lists with at least one item.
     *   
     */
    "ENTITIES": NamedNode<'http://www.w3.org/2001/XMLSchema#ENTITIES'>;
    /**
     *      `ENTITY` represents the `ENTITY` attribute type from [XML]. The _value space_
     *      of `ENTITY` is the set of all strings that match the `NCName` production in
     *      [Namespaces in XML] and have been declared as an unparsed entity in a
     *      document type definition. The _lexical space_ of ENTITY is the set of all
     *      strings that match the NCName production in [Namespaces in XML]. The
     *      _base type_ of ENTITY is NCName.
     *   
     */
    "ENTITY": NamedNode<'http://www.w3.org/2001/XMLSchema#ENTITY'>;
    /**
     *     The `float` datatype is patterned after the IEEE single-precision 32-bit
     *     floating point datatype [IEEE 754-2008]. Its value space is a subset of the
     *     rational numbers. Floating point numbers are often used to approximate
     *     arbitrary real numbers.
     *   
     */
    "float": NamedNode<'http://www.w3.org/2001/XMLSchema#float'>;
    /**
     *     `gDay` represents whole days within an arbitrary month—days that recur at the
     *     same point in each (Gregorian) month. This datatype is used to represent a
     *     specific day of the month. To indicate, for example, that an employee gets
     *     a paycheck on the 15th of each month. (Obviously, days beyond 28 cannot
     *     occur in all months; they are nonetheless permitted, up to 31.)
     *   
     */
    "gDay": NamedNode<'http://www.w3.org/2001/XMLSchema#gDay'>;
    /**
     *     `gMonth` represents whole (Gregorian) months within an arbitrary year—months
     *     that recur at the same point in each year. It might be used, for example,
     *     to say what month annual Thanksgiving celebrations fall in different
     *     countries (`--11` in the United States, `--10` in Canada, and possibly other
     *     months in other countries).
     *   
     */
    "gMonth": NamedNode<'http://www.w3.org/2001/XMLSchema#gMonth'>;
    /**
     *     `gMonthDay` represents whole calendar days that recur at the same point in
     *     each calendar year, or that occur in some arbitrary calendar year.
     *     (Obviously, days beyond 28 cannot occur in all Februaries; 29 is
     *     nonetheless permitted.)
     *   
     */
    "gMonthDay": NamedNode<'http://www.w3.org/2001/XMLSchema#gMonthDay'>;
    /**
     *     `gYear` represents Gregorian calendar years.
     *   
     */
    "gYear": NamedNode<'http://www.w3.org/2001/XMLSchema#gYear'>;
    /**
     *     `gYearMonth` represents specific whole Gregorian months in specific Gregorian years.
     *   
     */
    "gYearMonth": NamedNode<'http://www.w3.org/2001/XMLSchema#gYearMonth'>;
    /**
     *     hexBinary` represents arbitrary hex-encoded binary data. 
     *   
     */
    "hexBinary": NamedNode<'http://www.w3.org/2001/XMLSchema#hexBinary'>;
    /**
     *      `ID` represents the `ID` attribute type from [XML]. The _value space_ of `ID` is
     *      the set of all strings that match the `NCName` production in [Namespaces
     *      in XML]. The _lexical space_ of `ID` is the set of all strings that match
     *      the `NCName` production in [Namespaces in XML]. The _base type_ of `ID` is
     *      `NCName`.
     *   
     */
    "ID": NamedNode<'http://www.w3.org/2001/XMLSchema#ID'>;
    /**
     *     `IDREF` represents the `IDREF` attribute type from [XML]. The _value space_ of
     *     `IDREF` is the set of all strings that match the `NCName` production in
     *     [Namespaces in XML]. The _lexical space_ of `IDREF` is the set of strings
     *     that match the `NCName` production in [Namespaces in XML]. The _base type_
     *     of `IDREF` is `NCName`.
     *   
     */
    "IDREF": NamedNode<'http://www.w3.org/2001/XMLSchema#IDREF'>;
    /**
     *     `IDREFS` represents the `IDREFS` attribute type from [XML]. The _value space_
     *     of `IDREFS` is the set of finite, non-zero-length sequences of `IDREF`s. The
     *     _lexical space_ of `IDREFS` is the set of space-separated lists of tokens, of
     *     which each token is in the _lexical space_ of `IDREF`. The _item type_ of
     *     `IDREFS` is `IDREF`. `IDREFS` is derived from `anySimpleType` in two steps: an
     *     anonymous list type is defined, whose _item type_ is `IDREF`; this is the
     *     _base type_ of `IDREFS`, which restricts its value space to lists with at
     *     least one item.
     *   
     */
    "IDREFS": NamedNode<'http://www.w3.org/2001/XMLSchema#IDREFS'>;
    /**
     *       `int` is _derived_ from `long` by setting the value of `maxInclusive` to be
     *       `2147483647` and `minInclusive` to be `-2147483648`. The _base type_ of `int`
     *       is `long`.
     *   
     */
    "int": NamedNode<'http://www.w3.org/2001/XMLSchema#int'>;
    /**
     *      `integer` is _derived_ from `decimal` by fixing the value of `fractionDigits`
     *      to be `0` and disallowing the trailing decimal point. This results in the
     *      standard mathematical concept of the integer numbers. The _value space_ of
     *      `integer` is the infinite set `{...,-2,-1,0,1,2,...}`. The _base type_ of
     *      `integer` is `decimal`.
     *   
     */
    "integer": NamedNode<'http://www.w3.org/2001/XMLSchema#integer'>;
    /**
     *     `language` represents formal natural language identifiers, as defined by [BCP
     *     47] (currently represented by [RFC 4646] and [RFC 4647]) or its
     *     successor(s). The _value space_ and _lexical space_ of `language` are the set
     *     of all strings that conform to the pattern `[a-zA-Z]{1,8}(-[a-zA-Z0-9]{1,8})*`.
     *   
     */
    "language": NamedNode<'http://www.w3.org/2001/XMLSchema#language'>;
    /**
     *      `long` is _derived_ from `integer` by setting the value of `maxInclusive` to
     *      be `9223372036854775807` and `minInclusive` to be `-9223372036854775808`. The
     *      _base type_ of `long` is `integer`.
     *   
     */
    "long": NamedNode<'http://www.w3.org/2001/XMLSchema#long'>;
    /**
     *     `Name` represents XML Names. The _value space_ of `Name` is the set of all
     *     strings which match the `Name` production of [XML]. The _lexical space_ of
     *     `Name` is the set of all strings which match the `Name` production of [XML].
     *     The _base type_ of `Name` is `token`.
     *   
     */
    "Name": NamedNode<'http://www.w3.org/2001/XMLSchema#Name'>;
    /**
     *      `NCName` represents XML "non-colonized" Names. The _value space_ of `NCName`
     *      is the set of all strings which match the `NCName` production of
     *      [Namespaces in XML]. The _lexical space_ of `NCName` is the set of all
     *      strings which match the `NCName` production of [Namespaces in XML]. The
     *      _base type_ of `NCName` is `Name`.
     *   
     */
    "NCName": NamedNode<'http://www.w3.org/2001/XMLSchema#NCName'>;
    /**
     *      `negativeInteger` is _derived_ from `nonPositiveInteger` by setting the value
     *      of `maxInclusive` to be `-1`. This results in the standard mathematical
     *      concept of the negative integers. The _value space_ of `negativeInteger` is
     *      the infinite set `{...,-2,-1}`. The _base type_ of `negativeInteger` is
     *      `nonPositiveInteger`.
     *   
     */
    "negativeInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#negativeInteger'>;
    /**
     *      `NMTOKEN` represents the `NMTOKEN` attribute type from [XML]. The _value
     *      space_ of `NMTOKEN` is the set of tokens that match the `Nmtoken` production
     *      in [XML]. The _lexical space_ of `NMTOKEN` is the set of strings that
     *      match the Nmtoken production in [XML]. The _base type_ of `NMTOKEN` is
     *      `token`.
     *   
     */
    "NMTOKEN": NamedNode<'http://www.w3.org/2001/XMLSchema#NMTOKEN'>;
    /**
     *     `NMTOKENS` represents the `NMTOKENS` attribute type from [XML]. The _value
     *     space_ of `NMTOKENS` is the set of finite, non-zero-length sequences of
     *     `NMTOKEN`s. The _lexical space_ of `NMTOKENS` is the set of space-separated
     *     lists of tokens, of which each token is in the _lexical space_ of `NMTOKEN`.
     *     The _item type_ of `NMTOKENS` is `NMTOKEN`. `NMTOKENS` is derived from
     *     `anySimpleType` in two steps: an anonymous list type is defined, whose
     *     _item type_ is `NMTOKEN`; this is the _base type_ of `NMTOKENS`, which
     *     restricts its value space to lists with at least one item.
     *   
     */
    "NMTOKENS": NamedNode<'http://www.w3.org/2001/XMLSchema#NMTOKENS'>;
    /**
     *      `nonNegativeInteger` is _derived_ from `integer` by setting the value of
     *      `minInclusive` to be `0`. This results in the standard mathematical concept
     *      of the non-negative integers. The _value space_ of `nonNegativeInteger` is
     *      the infinite set `{0,1,2,...}`. The _base type_ of `nonNegativeInteger` is
     *      `integer`.
     *   
     */
    "nonNegativeInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#nonNegativeInteger'>;
    /**
     *     `nonPositiveInteger` is _derived_ from `integer` by setting the value of
     *     `maxInclusive` to be `0`. This results in the standard mathematical concept
     *     of the non-positive integers. The _value space_ of `nonPositiveInteger` is
     *     the infinite set `{...,-2,-1,0}`. The _base type_ of `nonPositiveInteger` is
     *     `integer`.
     *   
     */
    "nonPositiveInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#nonPositiveInteger'>;
    /**
     *     `normalizedString` represents white space normalized strings. The _value
     *     space_ of `normalizedString` is the set of strings that do not contain the
     *     carriage return (`#xD`), line feed (`#xA`) nor tab (`#x9`) characters. The
     *     _lexical space_ of `normalizedString` is the set of strings that do not
     *     contain the carriage return (`#xD`), line feed (`#xA`) nor tab (`#x9`)
     *     characters. The _base type_ of `normalizedString` is `string`.
     *   
     */
    "normalizedString": NamedNode<'http://www.w3.org/2001/XMLSchema#normalizedString'>;
    /**
     *     `NOTATION` represents the `NOTATION` attribute type from [XML]. The _value
     *     space_ of `NOTATION` is the set of `QNames` of notations declared in the
     *     current schema. The _lexical space_ of `NOTATION` is the set of all names of
     *     notations declared in the current schema (in the form of `QNames`).
     *   
     */
    "NOTATION": NamedNode<'http://www.w3.org/2001/XMLSchema#NOTATION'>;
    /**
     *      `positiveInteger` is _derived_ from `nonNegativeInteger` by setting the value
     *      of `minInclusive` to be `1`. This results in the standard mathematical
     *      concept of the positive integer numbers. The _value space_ of
     *      `positiveInteger` is the infinite set `{1,2,...}`. The _base type_ of
     *      `positiveInteger` is `nonNegativeInteger`.
     *   
     */
    "positiveInteger": NamedNode<'http://www.w3.org/2001/XMLSchema#positiveInteger'>;
    /**
     *     `QName` represents XML qualified names. The _value space_ of `QName` is the set
     *     of tuples `{namespace name, local part}`, where namespace name is an `anyURI`
     *     and local part is an `NCName`. The _lexical space_ of `QName` is the set of
     *     strings that match the `QName` production of [Namespaces in XML].
     *   
     */
    "QName": NamedNode<'http://www.w3.org/2001/XMLSchema#QName'>;
    /**
     *     `short` is _derived_ from `int` by setting the value of `maxInclusive` to be
     *     `32767` and `minInclusive` to be `-32768`. The _base type_ of `short` is `int`.
     *   
     */
    "short": NamedNode<'http://www.w3.org/2001/XMLSchema#short'>;
    /**
     *     The `string` datatype represents character strings in XML.
     *   
     */
    "string": NamedNode<'http://www.w3.org/2001/XMLSchema#string'>;
    /**
     *     `time` represents instants of time that recur at the same point in each
     *     calendar day, or that occur in some arbitrary calendar day.
     *   
     */
    "time": NamedNode<'http://www.w3.org/2001/XMLSchema#time'>;
    /**
     *      `token` represents tokenized strings. The _value space_ of `token` is the set
     *      of strings that do not contain the carriage return (`#xD`), line feed (`#xA`)
     *      nor tab (`#x9`) characters, that have no leading or trailing spaces (`#x20`)
     *      and that have no internal sequences of two or more spaces. The _lexical
     *      space_ of `token` is the set of strings that do not contain the carriage
     *      return (`#xD`), line feed (`#xA`) nor tab (`#x9`) characters, that have no
     *      leading or trailing spaces (`#x20`) and that have no internal sequences of
     *      two or more spaces. The _base type_ of `token` is `normalizedString`.
     *   
     */
    "token": NamedNode<'http://www.w3.org/2001/XMLSchema#token'>;
    /**
     *       `unsignedByte` is _derived_ from `unsignedShort` by setting the value of
     *       `maxInclusive` to be `255`. The _base type_ of `unsignedByte` is
     *       `unsignedShort`.
     *     
     */
    "unsignedByte": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedByte'>;
    /**
     *     `unsignedInt` is _derived_ from `unsignedLong` by setting the value of
     *     `maxInclusive` to be `4294967295`. The _base type_ of `unsignedInt` is
     *     `unsignedLong`.
     *   
     */
    "unsignedInt": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedInt'>;
    /**
     *      `unsignedLong` is _derived_ from `nonNegativeInteger` by setting the value of
     *      `maxInclusive` to be `18446744073709551615`. The _base type_ of `unsignedLong`
     *      is `nonNegativeInteger`.
     *   
     */
    "unsignedLong": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedLong'>;
    /**
     *        `unsignedShort` is _derived_ from `unsignedInt` by setting the value of
     *        `maxInclusive` to be `65535`. The _base type_ of `unsignedShort` is
     *        `unsignedInt`.
     *     
     */
    "unsignedShort": NamedNode<'http://www.w3.org/2001/XMLSchema#unsignedShort'>;
    /**
     *      `yearMonthDuration` is a datatype _derived_ from `duration` by restricting its
     *      _lexical representations_ to instances of `yearMonthDurationLexicalRep`. The
     *      _value space_ of `yearMonthDuration` is therefore that of `duration`
     *      restricted to those whose `seconds` property is `0`. This results in a
     *      `duration` datatype which is totally ordered.
     *   
     */
    "yearMonthDuration": NamedNode<'http://www.w3.org/2001/XMLSchema#yearMonthDuration'>;
}

const builder = namespace("http://www.w3.org/2001/XMLSchema#") as any;
export const strict = builder as NamespaceBuilder<keyof Xsd> & Xsd;
export const loose = builder as NamespaceBuilder & Xsd;
