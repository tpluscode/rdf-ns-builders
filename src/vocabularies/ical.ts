import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Ical = NamespaceBuilder & {
    "DomainOf_rrule": NamedNode;
    "List_of_Float": NamedNode;
    /*Provide a grouping of component properties that define an alarm.*/
    "Valarm": NamedNode;
    "Value_CAL-ADDRESS": NamedNode;
    "Value_DATE-TIME": NamedNode;
    "Value_DATE": NamedNode;
    "Value_DURATION": NamedNode;
    "Value_PERIOD": NamedNode;
    "Value_RECUR": NamedNode;
    "Vcalendar": NamedNode;
    /*Provide a grouping of component properties that describe an event.*/
    "Vevent": NamedNode;
    /*Provide a grouping of component properties that describe either a request for free/busy time, describe a response to a request for free/busy time or describe a published set of busy time.*/
    "Vfreebusy": NamedNode;
    /*Provide a grouping of component properties that describe a journal entry.*/
    "Vjournal": NamedNode;
    /*Provide a grouping of component properties that defines a time zone.*/
    "Vtimezone": NamedNode;
    /*Provide a grouping of calendar properties that describe a to-do.*/
    "Vtodo": NamedNode;
    /*This class of property provides a framework for defining non-standard properties.*/
    "X-": NamedNode;
    /*This property defines the action to be invoked when an alarm is triggered.*/
    "action": NamedNode;
    /*To specify an alternate text representation for the property value.*/
    "altrep": NamedNode;
    /*The property provides the capability to associate a document object with a calendar component.*/
    "attach": NamedNode;
    /*The property defines an "Attendee" within a calendar component.*/
    "attendee": NamedNode;
    "byday": NamedNode;
    "byhour": NamedNode;
    "byminute": NamedNode;
    "bymonth": NamedNode;
    "bysecond": NamedNode;
    "bysetpos": NamedNode;
    "byweekno": NamedNode;
    "byyearday": NamedNode;
    "calAddress": NamedNode;
    /*This property defines the calendar scale used for the calendar information specified in the iCalendar object.*/
    "calscale": NamedNode;
    /*This property defines the categories for a calendar component.*/
    "categories": NamedNode;
    /*This property defines the access classification for a calendar component.*/
    "class": NamedNode;
    /*To specify the common name to be associated with the calendar user specified by the property.*/
    "cn": NamedNode;
    /*This property specifies non-processing information intended to provide a comment to the calendar user.*/
    "comment": NamedNode;
    /*This property defines the date and time that a to-do was actually completed.*/
    "completed": NamedNode;
    "component": NamedNode;
    /*The property is used to represent contact information or alternately a reference to contact information associated with the calendar component.*/
    "contact": NamedNode;
    "count": NamedNode;
    /*This property specifies the date and time that the calendar information was created by the calendar user agent in the calendar store. Note: This is analogous to the creation date and time for a file in the file system.*/
    "created": NamedNode;
    /*To specify the type of calendar user specified by the property.*/
    "cutype": NamedNode;
    "dateTime": NamedNode;
    "daylight": NamedNode;
    /*To specify the calendar users that have delegated their participation to the calendar user specified by the property.*/
    "delegatedFrom": NamedNode;
    /*To specify the calendar users to whom the calendar user specified by the property has delegated participation.*/
    "delegatedTo": NamedNode;
    /*This property provides a more complete description of the calendar component, than that provided by the "SUMMARY" property.*/
    "description": NamedNode;
    /*To specify reference to a directory entry associated with the calendar user specified by the property.*/
    "dir": NamedNode;
    /*This property specifies the date and time that a calendar component ends.*/
    "dtend": NamedNode;
    /*The property indicates the date/time that the instance of the iCalendar object was created.*/
    "dtstamp": NamedNode;
    /*This property specifies when the calendar component begins.*/
    "dtstart": NamedNode;
    /*This property defines the date and time that a to-do is expected to be completed.*/
    "due": NamedNode;
    /*The property specifies a positive duration of time.*/
    "duration": NamedNode;
    /*To specify an alternate inline encoding for the property value.*/
    "encoding": NamedNode;
    /*This property defines the list of date/time exceptions for a recurring calendar component.*/
    "exdate": NamedNode;
    /*This property defines a rule or repeating pattern for an exception to a recurrence set.*/
    "exrule": NamedNode;
    /*To specify the free or busy time type.*/
    "fbtype": NamedNode;
    /*To specify the content type of a referenced object.*/
    "fmttype": NamedNode;
    /*The property defines one or more free or busy time intervals.*/
    "freebusy": NamedNode;
    "freq": NamedNode;
    /*This property specifies information related to the global position for the activity specified by a calendar component.*/
    "geo": NamedNode;
    "interval": NamedNode;
    /*To specify the language for text values in a property or property parameter.*/
    "language": NamedNode;
    /*The property specifies the date and time that the information associated with the calendar component was last revised in the calendar store. Note: This is analogous to the modification date and time for a file in the file system.*/
    "lastModified": NamedNode;
    /*The property defines the intended venue for the activity defined by a calendar component.*/
    "location": NamedNode;
    /*To specify the group or list membership of the calendar user specified by the property.*/
    "member": NamedNode;
    /*This property defines the iCalendar object method associated with the calendar object.*/
    "method": NamedNode;
    /*The property defines the organizer for a calendar component.*/
    "organizer": NamedNode;
    /*To specify the participation status for the calendar user specified by the property.*/
    "partstat": NamedNode;
    /*This property is used by an assignee or delegatee of a to-do to convey the percent completion of a to-do to the Organizer.*/
    "percentComplete": NamedNode;
    /*The property defines the relative priority for a calendar component.*/
    "priority": NamedNode;
    /*This property specifies the identifier for the product that created the iCalendar object.*/
    "prodid": NamedNode;
    /*To specify the effective range of recurrence instances from the instance specified by the recurrence identifier specified by the property.*/
    "range": NamedNode;
    /*This property defines the list of date/times for a recurrence set.*/
    "rdate": NamedNode;
    /*This property is used in conjunction with the "UID" and "SEQUENCE" property to identify a specific instance of a recurring "VEVENT", "VTODO" or "VJOURNAL" calendar component. The property value is the effective value of the "DTSTART" property of the recurrence instance.*/
    "recurrenceId": NamedNode;
    /*To specify the relationship of the alarm trigger with respect to the start or end of the calendar component.*/
    "related": NamedNode;
    /*The property is used to represent a relationship or reference between one calendar component and another.*/
    "relatedTo": NamedNode;
    /*To specify the type of hierarchical relationship associated with the calendar component specified by the property.*/
    "reltype": NamedNode;
    /*This property defines the number of time the alarm should be repeated, after the initial trigger.*/
    "repeat": NamedNode;
    /*This property defines the status code returned for a scheduling request.*/
    "requestStatus": NamedNode;
    /*This property defines the equipment or resources anticipated for an activity specified by a calendar entity..*/
    "resources": NamedNode;
    /*To specify the participation role for the calendar user specified by the property.*/
    "role": NamedNode;
    /*This property defines a rule or repeating pattern for recurring events, to-dos, or time zone definitions.*/
    "rrule": NamedNode;
    /*To specify whether there is an expectation of a favor of a reply from the calendar user specified by the property value.*/
    "rsvp": NamedNode;
    /*To specify the calendar user that is acting on behalf of the calendar user specified by the property.*/
    "sentBy": NamedNode;
    /*This property defines the revision sequence number of the calendar component within a sequence of revisions.*/
    "sequence": NamedNode;
    "standard": NamedNode;
    /*This property defines the overall status or confirmation for the calendar component.*/
    "status": NamedNode;
    /*This property defines a short summary or subject for the calendar component.*/
    "summary": NamedNode;
    /*This property defines whether an event is transparent or not to busy time searches.*/
    "transp": NamedNode;
    /*This property specifies when an alarm will trigger.*/
    "trigger": NamedNode;
    /*This property specifies the text value that uniquely identifies the "VTIMEZONE" calendar component.*/
    "tzid": NamedNode;
    /*This property specifies the customary designation for a time zone description.*/
    "tzname": NamedNode;
    /*This property specifies the offset which is in use prior to this time zone observance.*/
    "tzoffsetfrom": NamedNode;
    /*This property specifies the offset which is in use in this time zone observance.*/
    "tzoffsetto": NamedNode;
    /*The TZURL provides a means for a VTIMEZONE component to point to a network location that can be used to retrieve an up-to- date version of itself.*/
    "tzurl": NamedNode;
    /*This property defines the persistent, globally unique identifier for the calendar component.*/
    "uid": NamedNode;
    "until": NamedNode;
    /*This property defines a Uniform Resource Locator (URL) associated with the iCalendar object.*/
    "url": NamedNode;
    /*This property specifies the identifier corresponding to the highest version number or the minimum and maximum range of the iCalendar specification that is required in order to interpret the iCalendar object.*/
    "version": NamedNode;
    "wkst": NamedNode;
};
export const ical: Ical = (namespace(prefixes.ical) as any);
