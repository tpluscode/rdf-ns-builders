import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Ical {
    '': NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#'>;
    /**
     * 	    value type: TEXT
     */
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
    /**
     * 	    value type: TEXT
     */
    "calscale": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#calscale'>;
    /**
     * 	    value type: TEXT
     */
    "categories": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#categories'>;
    /**
     * 	    value type: TEXT
     */
    "class": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#class'>;
    /** To specify the common name to be associated with the calendar user specified by the property. */
    "cn": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#cn'>;
    /**
     * 	    value type: TEXT
     */
    "comment": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#comment'>;
    /** This property defines the date and time that a to-do was actually completed. */
    "completed": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#completed'>;
    "component": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#component'>;
    /**
     * 	    value type: TEXT
     */
    "contact": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#contact'>;
    "count": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#count'>;
    /**
     * 	    value type: DATE-TIME
     */
    "created": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#created'>;
    /** To specify the type of calendar user specified by the property. */
    "cutype": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#cutype'>;
    "dateTime": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dateTime'>;
    "daylight": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#daylight'>;
    /** To specify the calendar users that have delegated their participation to the calendar user specified by the property. */
    "delegatedFrom": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#delegatedFrom'>;
    /** To specify the calendar users to whom the calendar user specified by the property has delegated participation. */
    "delegatedTo": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#delegatedTo'>;
    /**
     * 	    value type: TEXT
     */
    "description": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#description'>;
    /** To specify reference to a directory entry associated with the calendar user specified by the property. */
    "dir": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dir'>;
    "DomainOf_rrule": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#DomainOf_rrule'>;
    /** This property specifies the date and time that a calendar component ends. */
    "dtend": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dtend'>;
    /**
     * 	    value type: DATE-TIME
     */
    "dtstamp": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dtstamp'>;
    /**
     * 	    default value type: DATE-TIME
     */
    "dtstart": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#dtstart'>;
    /**
     * 	    default value type: DATE-TIME
     */
    "due": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#due'>;
    /** The property specifies a positive duration of time. */
    "duration": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#duration'>;
    /** To specify an alternate inline encoding for the property value. */
    "encoding": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#encoding'>;
    /**
     * 	    default value type: DATE-TIME
     */
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
    /**
     * 	    value type: DATE-TIME
     */
    "lastModified": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#lastModified'>;
    "List_of_Float": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#List_of_Float'>;
    /**
     * 	    value type: TEXT
     */
    "location": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#location'>;
    /** To specify the group or list membership of the calendar user specified by the property. */
    "member": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#member'>;
    /**
     * 	    value type: TEXT
     */
    "method": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#method'>;
    /**
     * 	    value type: CAL-ADDRESS
     */
    "organizer": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#organizer'>;
    /** To specify the participation status for the calendar user specified by the property. */
    "partstat": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#partstat'>;
    /** This property is used by an assignee or delegatee of a to-do to convey the percent completion of a to-do to the Organizer. */
    "percentComplete": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#percentComplete'>;
    /**
     * 	    value type: INTEGER
     */
    "priority": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#priority'>;
    /**
     * 	    value type: TEXT
     */
    "prodid": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#prodid'>;
    /** To specify the effective range of recurrence instances from the instance specified by the recurrence identifier specified by the property. */
    "range": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#range'>;
    /**
     * 	    default value type: DATE-TIME
     */
    "rdate": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#rdate'>;
    /**
     * 	    default value type: DATE-TIME
     */
    "recurrenceId": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#recurrenceId'>;
    /** To specify the relationship of the alarm trigger with respect to the start or end of the calendar component. */
    "related": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#related'>;
    /**
     * 	    value type: TEXT
     */
    "relatedTo": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#relatedTo'>;
    /** To specify the type of hierarchical relationship associated with the calendar component specified by the property. */
    "reltype": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#reltype'>;
    /**
     * 	    value type: INTEGER
     */
    "repeat": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#repeat'>;
    /**
     * 	    value type: TEXT
     */
    "requestStatus": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#requestStatus'>;
    /**
     * 	    value type: TEXT
     */
    "resources": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#resources'>;
    /** To specify the participation role for the calendar user specified by the property. */
    "role": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#role'>;
    /**
     * 	    value type: RECUR
     */
    "rrule": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#rrule'>;
    /** To specify whether there is an expectation of a favor of a reply from the calendar user specified by the property value. */
    "rsvp": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#rsvp'>;
    /** To specify the calendar user that is acting on behalf of the calendar user specified by the property. */
    "sentBy": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#sentBy'>;
    /** This property defines the revision sequence number of the calendar component within a sequence of revisions. */
    "sequence": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#sequence'>;
    "standard": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#standard'>;
    /**
     * 	    value type: TEXT
     */
    "status": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#status'>;
    /**
     * 	    value type: TEXT
     */
    "summary": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#summary'>;
    /**
     * 	    value type: TEXT
     */
    "transp": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#transp'>;
    /** This property specifies when an alarm will trigger. */
    "trigger": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#trigger'>;
    /**
     * 	    value type: TEXT
     */
    "tzid": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzid'>;
    /**
     * 	    value type: TEXT
     */
    "tzname": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzname'>;
    /** This property specifies the offset which is in use prior to this time zone observance. */
    "tzoffsetfrom": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzoffsetfrom'>;
    /**
     * 	    value type: UTC-OFFSET
     */
    "tzoffsetto": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzoffsetto'>;
    /** The TZURL provides a means for a VTIMEZONE component to point to a network location that can be used to retrieve an up-to- date version of itself. */
    "tzurl": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#tzurl'>;
    /**
     * 	    value type: TEXT
     */
    "uid": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#uid'>;
    "until": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#until'>;
    /**
     * 	    value type: URI
     */
    "url": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#url'>;
    /** Provide a grouping of component properties that define an alarm. */
    "Valarm": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Valarm'>;
    "Value_CAL-ADDRESS": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_CAL-ADDRESS'>;
    "Value_DATE-TIME": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_DATE-TIME'>;
    "Value_DATE": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_DATE'>;
    "Value_DURATION": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_DURATION'>;
    "Value_PERIOD": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_PERIOD'>;
    "Value_RECUR": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Value_RECUR'>;
    "Vcalendar": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#Vcalendar'>;
    /**
     * 	    value type: TEXT
     */
    "version": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#version'>;
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
    "wkst": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#wkst'>;
    /** This class of property provides a framework for defining non-standard properties. */
    "X-": NamedNode<'http://www.w3.org/2002/12/cal/icaltzd#X-'>;
}

const builder = namespace("http://www.w3.org/2002/12/cal/icaltzd#") as any;
export const strict = builder as NamespaceBuilder<keyof Ical> & Ical;
export const loose = builder as NamespaceBuilder & Ical;
