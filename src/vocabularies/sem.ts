import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Sem = NamespaceBuilder & {
    /*Actors are entities that take part in an Event, either actively or passively. Actors do not necessarily have to be sentient. They can also be objects. Actors are a thing, animate or inanimate, physical or non-physical.
    */
    "Actor": NamedNode;
    /*EventType contains all resources that are used to classify Actors, e.g. person*/
    "ActorType": NamedNode;
    /*Authorities are entities that state SEM properties. Their nature is not specified. They can symbolize people, organizations, sources of information, etc.*/
    "Authority": NamedNode;
    /*The SEM Constraint class contains instances of properties that have a constrained (i.e. not universal) validity. This includes time dependent validity (Temporary), validity in the guise of a specific role (Role), or validity according to a given Authority (View).*/
    "Constraint": NamedNode;
    /*The SEM Core class contains all entities that make up the context of an event: Events, Actors, Places, Times. This class is meant to be extended for each application domain.*/
    "Core": NamedNode;
    /*Events are things that happen. This comprises everything from historical events to web site sessions and mythical journeys. Event is the central class of SEM.*/
    "Event": NamedNode;
    /*EventType contains all resources that are used to classify Events, e.g. meeting.*/
    "EventType": NamedNode;
    /*Objects are passive, inanimate Actors.*/
    "Object": NamedNode;
    /*Places are locations where an Event happens. They do not need to be physical places and hence do not necessarily need coordinates. Neither do they need to have any significance apart from them being the location of an Event.*/
    "Place": NamedNode;
    /*EventType contains all resources that are used to classify Places, e.g. river.*/
    "PlaceType": NamedNode;
    /*Roles are properties with a subspecified function or position indicated by a RoleType in the scope of an Event. For example, the sem:hasActor property can be subspecified with the RoleType attacker, to denote that the type of participation of the Actor in the scope of the Event is "attacker". The sem:hasPlace property can be subspecified with the RoleType origin, to denote that within the scope of the Event it is the origin.*/
    "Role": NamedNode;
    /*EventType contains all resources that are used to classify Roles, e.g. receiver.*/
    "RoleType": NamedNode;
    /*Temporaries are properties that only hold during a certain Time, which is either indicated with the sem:hasTime property to an instance of sem:Time, or with the sem:hasTimeStamp property to some timestamp(s).*/
    "Temporary": NamedNode;
    /*Time contains symbolic representations of when an Event took place. Time instances do not necessarily need to have a timestamp associated with them. The Time class exists to represent semantics of time, e.g. that one thing happens before another, even though the exact timestamps are unknown.*/
    "Time": NamedNode;
    /*EventType contains all resources that are used to classify Time, e.g. century.*/
    "TimeType": NamedNode;
    /*The SEM Type class contains all types of Core instances. These can be either individuals of classes themselves. This class is meant to be extended for each application domain.*/
    "Type": NamedNode;
    /*Views are properties that only hold according to a certain Authority.*/
    "View": NamedNode;
    /*According to is used to state which Authority sais that a property constrained by the View Constraint is true.*/
    "accordingTo": NamedNode;
    /*Has actor type is used to assign a type to an actor.*/
    "actorType": NamedNode;
    /*Event properties connect Events to other SEM Core entities.*/
    "eventProperty": NamedNode;
    /*Has event type is used to assign a type to an event.*/
    "eventType": NamedNode;
    /*Has actor is used to state which Actors or Objects participate in an Event.*/
    "hasActor": NamedNode;
    /*Has begin timestamp is used to indicate the beginning of a time interval. Omitting the hasBeginTimeStamp while stating a hasEndTimeStamp is interpreted as an open ended interval.*/
    "hasBeginTimeStamp": NamedNode;
    /*Has earliest begin timestamp is used to indicate the earliest possible starting time of an uncertain time interval.*/
    "hasEarliestBeginTimeStamp": NamedNode;
    /*Has earliest end timestamp is used to indicate the earliest possible ending time of an uncertain time interval.*/
    "hasEarliestEndTimeStamp": NamedNode;
    /*Has end timestamp is used to indicate the end of a time interval. Omitting the hasEndTimeStamp while stating a hasBeginTimeStamp is interpreted as an open ended interval.*/
    "hasEndTimeStamp": NamedNode;
    /*Has latest begin timestamp is used to indicate the latest possible starting time of an uncertain time interval.*/
    "hasLatestBeginTimeStamp": NamedNode;
    /*Has latest end timestamp is used to indicate the latest possible ending time of an uncertain time interval.*/
    "hasLatestEndTimeStamp": NamedNode;
    /*Has place is used to state in which Place(s) an Event happened. Coordinates can be attached to the Place with the W3C Geospatial Vocabulary (http://www.w3.org/2005/Incubator/geo/XGR-geo-20071023/).*/
    "hasPlace": NamedNode;
    /*Has subevent connects an Event to other Events that belong to it. This is a very generic property that does not mean the subevents fully define the superconcept or that there is any causal relationship.*/
    "hasSubEvent": NamedNode;
    /*Has sub type is used to state that a type falls under another type. This is a generic aggregation relation that is used to generalize over various hierarchical relations that can exist between types.*/
    "hasSubType": NamedNode;
    /*Has time is used to indicate at which time an Event took place or when a property under the Temporary Constraint is valid. Has time points to a symbolic representation of time, which allows semantic relations between time resources. (see http://www.w3.org/TR/owl-time/)*/
    "hasTime": NamedNode;
    /*Has timestamp is used to put time indicators on any individual. It is the most common way to state when an Event took place. There are subproperties of hasTimeStamp to represent time intervals and uncertain time intervals. If the exact moment is not known, but it is necessary to specify a certain time, use hasTime instead. All of these properties are also used to indicate the time at which a property under the Temporary Constraint is valid.*/
    "hasTimeStamp": NamedNode;
    /*Has place type is used to assign a type to a place.*/
    "placeType": NamedNode;
    /*Has role type is used to assign a role type to a Role property constraint. This role is a subspecification of the eventProperty which it constrains. For example, if an Event hasActor an Actor and this property is given a Role Constraint, then roleType can be used to assign a role to the participation of the Actor in the Event indicated by hasActor.*/
    "roleType": NamedNode;
    /*Inverse property of hasSubEvent*/
    "subEventOf": NamedNode;
    /*The inverse property of hasSubType.*/
    "subTypeOf": NamedNode;
    /*Has time type is used to assign a type to a time individual.*/
    "timeType": NamedNode;
    /*Type is the super property of the properties that are used to indicate the type of a Core instance, eventType, actorType, placeType, timeType; and of roleType. Types can be both classes and individuals, cf. OWL 2 punning.*/
    "type": NamedNode;
};
export const sem: Sem = (namespace(prefixes.sem) as any);
