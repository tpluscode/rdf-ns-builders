import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Ssn {
    /** Describes the Deployment of one or more Systems for a particular purpose. Deployment may be done on a Platform. */
    "Deployment": NamedNode<'http://www.w3.org/ns/ssn/Deployment'>;
    /** Any information that is provided to a Procedure for its use. */
    "Input": NamedNode<'http://www.w3.org/ns/ssn/Input'>;
    /** Any information that is reported from a Procedure. */
    "Output": NamedNode<'http://www.w3.org/ns/ssn/Output'>;
    /** A quality of an entity. An aspect of an entity that is intrinsic to and cannot exist without the entity. */
    "Property": NamedNode<'http://www.w3.org/ns/ssn/Property'>;
    /** An event in the real world that 'triggers' the Sensor. The properties associated to the Stimulus may be different to the eventual observed ObservableProperty. It is the event, not the object, that triggers the Sensor. */
    "Stimulus": NamedNode<'http://www.w3.org/ns/ssn/Stimulus'>;
    /** System is a unit of abstraction for pieces of infrastructure that implement Procedures. A System may have components, its subsystems, which are other systems. */
    "System": NamedNode<'http://www.w3.org/ns/ssn/System'>;
    /** Relation between a Deployment and the Platform on which the Systems are deployed. */
    "deployedOnPlatform": NamedNode<'http://www.w3.org/ns/ssn/deployedOnPlatform'>;
    /** Relation between a Deployment and a deployed System. */
    "deployedSystem": NamedNode<'http://www.w3.org/ns/ssn/deployedSystem'>;
    /** A relation from a Sensor to the Stimulus that the Sensor detects. The Stimulus itself will be serving as a proxy for some ObservableProperty. */
    "detects": NamedNode<'http://www.w3.org/ns/ssn/detects'>;
    /** A relation between some aspect of an entity and a Property. */
    "forProperty": NamedNode<'http://www.w3.org/ns/ssn/forProperty'>;
    /** Relation between a System and a Deployment, recording that the System is deployed in that Deployment. */
    "hasDeployment": NamedNode<'http://www.w3.org/ns/ssn/hasDeployment'>;
    /** Relation between a Procedure and an Input to it. */
    "hasInput": NamedNode<'http://www.w3.org/ns/ssn/hasInput'>;
    /** Relation between a Procedure and an Output of it. */
    "hasOutput": NamedNode<'http://www.w3.org/ns/ssn/hasOutput'>;
    /** Relation between an entity and a Property of that entity. */
    "hasProperty": NamedNode<'http://www.w3.org/ns/ssn/hasProperty'>;
    /** Relation between a System and its component parts. */
    "hasSubSystem": NamedNode<'http://www.w3.org/ns/ssn/hasSubSystem'>;
    /** Relation between a Procedure (an algorithm, procedure or method) and an entity that implements that Procedure in some executable way. */
    "implementedBy": NamedNode<'http://www.w3.org/ns/ssn/implementedBy'>;
    /** Relation between an entity that implements a Procedure in some executable way and the Procedure (an algorithm, procedure or method). */
    "implements": NamedNode<'http://www.w3.org/ns/ssn/implements'>;
    /** Relation between a Platform and a Deployment, meaning that the deployedSystems of the Deployment are hosted on the Platform. */
    "inDeployment": NamedNode<'http://www.w3.org/ns/ssn/inDeployment'>;
    /** Relation between a Property and the entity it belongs to. */
    "isPropertyOf": NamedNode<'http://www.w3.org/ns/ssn/isPropertyOf'>;
    /** A relation from a Stimulus to the Property that the Stimulus is serving as a proxy for. */
    "isProxyFor": NamedNode<'http://www.w3.org/ns/ssn/isProxyFor'>;
    /** Relation between an Observation and the Stimulus that originated it. */
    "wasOriginatedBy": NamedNode<'http://www.w3.org/ns/ssn/wasOriginatedBy'>;
}

const builder = namespace("http://www.w3.org/ns/ssn/") as any;
export const strict = builder as NamespaceBuilder<keyof Ssn> & Ssn;
export const loose = builder as NamespaceBuilder & Ssn;
