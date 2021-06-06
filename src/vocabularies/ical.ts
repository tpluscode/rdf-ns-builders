import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Ical {
    "DomainOf_rrule": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#DomainOf_rrule'>;
    "List_of_Float": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#List_of_Float'>;
    /** Provide a grouping of component properties that define an alarm. */
    "Valarm": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Valarm'>;
    "Value_CAL-ADDRESS": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_CAL-ADDRESS'>;
    "Value_DATE-TIME": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_DATE-TIME'>;
    "Value_DATE": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_DATE'>;
    "Value_DURATION": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_DURATION'>;
    "Value_PERIOD": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_PERIOD'>;
    "Value_RECUR": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_RECUR'>;
    "Vcalendar": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vcalendar'>;
    /** Provide a grouping of component properties that describe an event. */
    "Vevent": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vevent'>;
    /** Provide a grouping of component properties that describe either a request for free/busy time, describe a response to a request for free/busy time or describe a published set of busy time. */
    "Vfreebusy": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vfreebusy'>;
    /** Provide a grouping of component properties that describe a journal entry. */
    "Vjournal": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vjournal'>;
    /** Provide a grouping of component properties that defines a time zone. */
    "Vtimezone": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vtimezone'>;
    /** Provide a grouping of calendar properties that describe a to-do. */
    "Vtodo": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vtodo'>;
    /** This class of property provides a framework for defining non-standard properties. */
    "X-": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#X-'>;
    /** This property defines the action to be invoked when an alarm is triggered. */
    "action": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#action'>;
    /** To specify an alternate text representation for the property value. */
    "altrep": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#altrep'>;
    /** The property provides the capability to associate a document object with a calendar component. */
    "attach": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#attach'>;
    /** The property defines an "Attendee" within a calendar component. */
    "attendee": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#attendee'>;
    "byday": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#byday'>;
    "byhour": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#byhour'>;
    "byminute": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#byminute'>;
    "bymonth": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#bymonth'>;
    "bysecond": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#bysecond'>;
    "bysetpos": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#bysetpos'>;
    "byweekno": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#byweekno'>;
    "byyearday": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#byyearday'>;
    "calAddress": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#calAddress'>;
    /** This property defines the calendar scale used for the calendar information specified in the iCalendar object. */
    "calscale": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#calscale'>;
    /** This property defines the categories for a calendar component. */
    "categories": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#categories'>;
    /** This property defines the access classification for a calendar component. */
    "class": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#class'>;
    /** To specify the common name to be associated with the calendar user specified by the property. */
    "cn": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#cn'>;
    /** This property specifies non-processing information intended to provide a comment to the calendar user. */
    "comment": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#comment'>;
    /** This property defines the date and time that a to-do was actually completed. */
    "completed": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#completed'>;
    "component": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#component'>;
    /** The property is used to represent contact information or alternately a reference to contact information associated with the calendar component. */
    "contact": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#contact'>;
    "count": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#count'>;
    /** This property specifies the date and time that the calendar information was created by the calendar user agent in the calendar store. Note: This is analogous to the creation date and time for a file in the file system. */
    "created": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#created'>;
    /** To specify the type of calendar user specified by the property. */
    "cutype": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#cutype'>;
    "dateTime": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dateTime'>;
    "daylight": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#daylight'>;
    /** To specify the calendar users that have delegated their participation to the calendar user specified by the property. */
    "delegatedFrom": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#delegatedFrom'>;
    /** To specify the calendar users to whom the calendar user specified by the property has delegated participation. */
    "delegatedTo": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#delegatedTo'>;
    /** This property provides a more complete description of the calendar component, than that provided by the "SUMMARY" property. */
    "description": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#description'>;
    /** To specify reference to a directory entry associated with the calendar user specified by the property. */
    "dir": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dir'>;
    /** This property specifies the date and time that a calendar component ends. */
    "dtend": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dtend'>;
    /** The property indicates the date/time that the instance of the iCalendar object was created. */
    "dtstamp": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dtstamp'>;
    /** This property specifies when the calendar component begins. */
    "dtstart": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dtstart'>;
    /** This property defines the date and time that a to-do is expected to be completed. */
    "due": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#due'>;
    /** The property specifies a positive duration of time. */
    "duration": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#duration'>;
    /** To specify an alternate inline encoding for the property value. */
    "encoding": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#encoding'>;
    /** This property defines the list of date/time exceptions for a recurring calendar component. */
    "exdate": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#exdate'>;
    /** This property defines a rule or repeating pattern for an exception to a recurrence set. */
    "exrule": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#exrule'>;
    /** To specify the free or busy time type. */
    "fbtype": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#fbtype'>;
    /** To specify the content type of a referenced object. */
    "fmttype": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#fmttype'>;
    /** The property defines one or more free or busy time intervals. */
    "freebusy": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#freebusy'>;
    "freq": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#freq'>;
    /** This property specifies information related to the global position for the activity specified by a calendar component. */
    "geo": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#geo'>;
    "interval": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#interval'>;
    /** To specify the language for text values in a property or property parameter. */
    "language": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#language'>;
    /** The property specifies the date and time that the information associated with the calendar component was last revised in the calendar store. Note: This is analogous to the modification date and time for a file in the file system. */
    "lastModified": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#lastModified'>;
    /** The property defines the intended venue for the activity defined by a calendar component. */
    "location": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#location'>;
    /** To specify the group or list membership of the calendar user specified by the property. */
    "member": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#member'>;
    /** This property defines the iCalendar object method associated with the calendar object. */
    "method": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#method'>;
    /** The property defines the organizer for a calendar component. */
    "organizer": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#organizer'>;
    /** To specify the participation status for the calendar user specified by the property. */
    "partstat": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#partstat'>;
    /** This property is used by an assignee or delegatee of a to-do to convey the percent completion of a to-do to the Organizer. */
    "percentComplete": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#percentComplete'>;
    /** The property defines the relative priority for a calendar component. */
    "priority": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#priority'>;
    /** This property specifies the identifier for the product that created the iCalendar object. */
    "prodid": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#prodid'>;
    /** To specify the effective range of recurrence instances from the instance specified by the recurrence identifier specified by the property. */
    "range": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#range'>;
    /** This property defines the list of date/times for a recurrence set. */
    "rdate": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#rdate'>;
    /** This property is used in conjunction with the "UID" and "SEQUENCE" property to identify a specific instance of a recurring "VEVENT", "VTODO" or "VJOURNAL" calendar component. The property value is the effective value of the "DTSTART" property of the recurrence instance. */
    "recurrenceId": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#recurrenceId'>;
    /** To specify the relationship of the alarm trigger with respect to the start or end of the calendar component. */
    "related": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#related'>;
    /** The property is used to represent a relationship or reference between one calendar component and another. */
    "relatedTo": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#relatedTo'>;
    /** To specify the type of hierarchical relationship associated with the calendar component specified by the property. */
    "reltype": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#reltype'>;
    /** This property defines the number of time the alarm should be repeated, after the initial trigger. */
    "repeat": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#repeat'>;
    /** This property defines the status code returned for a scheduling request. */
    "requestStatus": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#requestStatus'>;
    /** This property defines the equipment or resources anticipated for an activity specified by a calendar entity.. */
    "resources": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#resources'>;
    /** To specify the participation role for the calendar user specified by the property. */
    "role": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#role'>;
    /** This property defines a rule or repeating pattern for recurring events, to-dos, or time zone definitions. */
    "rrule": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#rrule'>;
    /** To specify whether there is an expectation of a favor of a reply from the calendar user specified by the property value. */
    "rsvp": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#rsvp'>;
    /** To specify the calendar user that is acting on behalf of the calendar user specified by the property. */
    "sentBy": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#sentBy'>;
    /** This property defines the revision sequence number of the calendar component within a sequence of revisions. */
    "sequence": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#sequence'>;
    "standard": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#standard'>;
    /** This property defines the overall status or confirmation for the calendar component. */
    "status": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#status'>;
    /** This property defines a short summary or subject for the calendar component. */
    "summary": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#summary'>;
    /** This property defines whether an event is transparent or not to busy time searches. */
    "transp": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#transp'>;
    /** This property specifies when an alarm will trigger. */
    "trigger": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#trigger'>;
    /** This property specifies the text value that uniquely identifies the "VTIMEZONE" calendar component. */
    "tzid": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzid'>;
    /** This property specifies the customary designation for a time zone description. */
    "tzname": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzname'>;
    /** This property specifies the offset which is in use prior to this time zone observance. */
    "tzoffsetfrom": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzoffsetfrom'>;
    /** This property specifies the offset which is in use in this time zone observance. */
    "tzoffsetto": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzoffsetto'>;
    /** The TZURL provides a means for a VTIMEZONE component to point to a network location that can be used to retrieve an up-to- date version of itself. */
    "tzurl": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzurl'>;
    /** This property defines the persistent, globally unique identifier for the calendar component. */
    "uid": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#uid'>;
    "until": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#until'>;
    /** This property defines a Uniform Resource Locator (URL) associated with the iCalendar object. */
    "url": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#url'>;
    /** This property specifies the identifier corresponding to the highest version number or the minimum and maximum range of the iCalendar specification that is required in order to interpret the iCalendar object. */
    "version": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#version'>;
    "wkst": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#wkst'>;
}

const builder = namespace("http://www.w3.org/2002/12/cal/icaltzd#") as any;
export const strict = builder as NamespaceBuilder<keyof Ical> & Ical;
export const loose = builder as NamespaceBuilder & Ical;
