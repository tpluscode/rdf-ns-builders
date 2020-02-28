import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Time = NamespaceBuilder & {
    /*Description of date and time structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of year, month, day properties restricted to corresponding XML Schema types xsd:gYear, xsd:gMonth and xsd:gDay, respectively.*/
    "DateTimeDescription": NamedNode;
    /*DateTimeInterval is a subclass of ProperInterval, defined using the multi-element DateTimeDescription.*/
    "DateTimeInterval": NamedNode;
    /*The day of week*/
    "DayOfWeek": NamedNode;
    /*Duration of a temporal extent expressed as a number scaled by a temporal unit*/
    "Duration": NamedNode;
    /*Description of temporal extent structured with separate values for the various elements of a calendar-clock system. The temporal reference system is fixed to Gregorian Calendar, and the range of each of the numeric properties is restricted to xsd:decimal*/
    "DurationDescription": NamedNode;
    "Friday": NamedNode;
    /*Description of date and time structured with separate values for the various elements of a calendar-clock system*/
    "GeneralDateTimeDescription": NamedNode;
    /*Description of temporal extent structured with separate values for the various elements of a calendar-clock system.*/
    "GeneralDurationDescription": NamedNode;
    /*A temporal entity with zero extent or duration*/
    "Instant": NamedNode;
    /*A temporal entity with an extent or duration*/
    "Interval": NamedNode;
    "January": NamedNode;
    "Monday": NamedNode;
    /*The month of the year*/
    "MonthOfYear": NamedNode;
    /*A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different*/
    "ProperInterval": NamedNode;
    "Saturday": NamedNode;
    "Sunday": NamedNode;
    /*A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system.
    
    This is a stub class, representing the set of all temporal reference systems.*/
    "TRS": NamedNode;
    /*Time extent; duration of a time interval separate from its particular start position*/
    "TemporalDuration": NamedNode;
    /*A temporal interval or instant.*/
    "TemporalEntity": NamedNode;
    /*A position on a time-line*/
    "TemporalPosition": NamedNode;
    /*A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position.*/
    "TemporalUnit": NamedNode;
    "Thursday": NamedNode;
    /*A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system. */
    "TimePosition": NamedNode;
    /*A Time Zone specifies the amount by which the local time is offset from UTC.
        A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region.
    The region where it applies and the offset from UTC are specified by a locally recognised governing authority.*/
    "TimeZone": NamedNode;
    "Tuesday": NamedNode;
    "Wednesday": NamedNode;
    /*Year duration*/
    "Year": NamedNode;
    /*Gives directionality to time. If a temporal entity T1 is after another temporal entity T2, then the beginning of T1 is after the end of T2.*/
    "after": NamedNode;
    /*Gives directionality to time. If a temporal entity T1 is before another temporal entity T2, then the end of T1 is before the beginning of T2. Thus, "before" can be considered to be basic to instants and derived for intervals.*/
    "before": NamedNode;
    /*Day position in a calendar-clock system.
    
    The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar. */
    "day": NamedNode;
    /*The day of week, whose value is a member of the class time:DayOfWeek*/
    "dayOfWeek": NamedNode;
    /*The number of the day within the year*/
    "dayOfYear": NamedNode;
    /*length of, or element of the length of, a temporal extent expressed in days*/
    "days": NamedNode;
    /*Day of month - formulated as a text string with a pattern constraint to reproduce the same lexical form as gDay, except that values up to 99 are permitted, in order to support calendars with more than 31 days in a month.
    Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.*/
    "generalDay": NamedNode;
    /*Month of year - formulated as a text string with a pattern constraint to reproduce the same lexical form as gMonth, except that values up to 20 are permitted, in order to support calendars with more than 12 months in the year.
    Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.*/
    "generalMonth": NamedNode;
    /*Year number - formulated as a text string with a pattern constraint to reproduce the same lexical form as gYear, but not restricted to values from the Gregorian calendar.
    Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.*/
    "generalYear": NamedNode;
    /*Beginning of a temporal entity*/
    "hasBeginning": NamedNode;
    /*Value of DateTimeInterval expressed as a structured value. The beginning and end of the interval coincide with the limits of the shortest element in the description.*/
    "hasDateTimeDescription": NamedNode;
    /*Duration of a temporal entity, expressed as a scaled value or nominal value*/
    "hasDuration": NamedNode;
    /*Duration of a temporal entity, expressed using a structured description*/
    "hasDurationDescription": NamedNode;
    /*End of a temporal entity.*/
    "hasEnd": NamedNode;
    /*The temporal reference system used by a temporal position or extent description. */
    "hasTRS": NamedNode;
    /*Duration of a temporal entity.*/
    "hasTemporalDuration": NamedNode;
    /*Supports the association of a temporal entity (instant or interval) to any thing*/
    "hasTime": NamedNode;
    /*Extent of a temporal entity, expressed using xsd:duration*/
    "hasXSDDuration": NamedNode;
    /*Hour position in a calendar-clock system.*/
    "hour": NamedNode;
    /*length of, or element of the length of, a temporal extent expressed in hours*/
    "hours": NamedNode;
    /*Position of an instant, expressed using a structured description*/
    "inDateTime": NamedNode;
    /*Position of a time instant*/
    "inTemporalPosition": NamedNode;
    /*Position of an instant, expressed as a temporal coordinate or nominal value*/
    "inTimePosition": NamedNode;
    /*Position of an instant, expressed using xsd:date*/
    "inXSDDate": NamedNode;
    /*Position of an instant, expressed using xsd:dateTime*/
    "inXSDDateTime": NamedNode;
    /*Position of an instant, expressed using xsd:dateTimeStamp*/
    "inXSDDateTimeStamp": NamedNode;
    /*Position of an instant, expressed using xsd:gYear*/
    "inXSDgYear": NamedNode;
    /*Position of an instant, expressed using xsd:gYearMonth*/
    "inXSDgYearMonth": NamedNode;
    /*An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals.*/
    "inside": NamedNode;
    /*If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2.*/
    "intervalAfter": NamedNode;
    /*If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2.*/
    "intervalBefore": NamedNode;
    /*If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2.*/
    "intervalContains": NamedNode;
    /*If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known.*/
    "intervalDisjoint": NamedNode;
    /*If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2.*/
    "intervalDuring": NamedNode;
    /*If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2.*/
    "intervalEquals": NamedNode;
    /*If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2.*/
    "intervalFinishedBy": NamedNode;
    /*If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2.*/
    "intervalFinishes": NamedNode;
    /*If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2.*/
    "intervalIn": NamedNode;
    /*If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2.*/
    "intervalMeets": NamedNode;
    /*If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2.*/
    "intervalMetBy": NamedNode;
    /*If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2.*/
    "intervalOverlappedBy": NamedNode;
    /*If a proper interval T1 is intervalOverlaps another proper interval T2, then the beginning of T1 is before the beginning of T2, the end of T1 is after the beginning of T2, and the end of T1 is before the end of T2.*/
    "intervalOverlaps": NamedNode;
    /*If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2.*/
    "intervalStartedBy": NamedNode;
    /*If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2.*/
    "intervalStarts": NamedNode;
    /*Minute position in a calendar-clock system.*/
    "minute": NamedNode;
    /*length, or element of, a temporal extent expressed in minutes*/
    "minutes": NamedNode;
    /*Month position in a calendar-clock system.
    
    The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar. */
    "month": NamedNode;
    /*The month of the year, whose value is a member of the class time:MonthOfYear*/
    "monthOfYear": NamedNode;
    /*length of, or element of the length of, a temporal extent expressed in months*/
    "months": NamedNode;
    /*The (nominal) value indicating temporal position in an ordinal reference system */
    "nominalPosition": NamedNode;
    /*Value of a temporal extent expressed as a decimal number scaled by a temporal unit*/
    "numericDuration": NamedNode;
    /*The (numeric) value indicating position within a temporal coordinate system */
    "numericPosition": NamedNode;
    /*Second position in a calendar-clock system.*/
    "second": NamedNode;
    /*length of, or element of the length of, a temporal extent expressed in seconds*/
    "seconds": NamedNode;
    /*The time zone for clock elements in the temporal position*/
    "timeZone": NamedNode;
    "unitDay": NamedNode;
    "unitHour": NamedNode;
    "unitMinute": NamedNode;
    "unitMonth": NamedNode;
    "unitSecond": NamedNode;
    /*The temporal unit which provides the precision of a date-time value or scale of a temporal extent*/
    "unitType": NamedNode;
    "unitWeek": NamedNode;
    "unitYear": NamedNode;
    /*Week number within the year.*/
    "week": NamedNode;
    /*length of, or element of the length of, a temporal extent expressed in weeks*/
    "weeks": NamedNode;
    /*Value of DateTimeInterval expressed as a compact value.*/
    "xsdDateTime": NamedNode;
    /*Year position in a calendar-clock system.
    
    The range of this property is not specified, so can be replaced by any specific representation of a calendar year from any calendar. */
    "year": NamedNode;
    /*length of, or element of the length of, a temporal extent expressed in years*/
    "years": NamedNode;
    "2006": NamedNode;
    "2016": NamedNode;
};
export const time: Time = (namespace("http://www.w3.org/2006/time#") as any);
