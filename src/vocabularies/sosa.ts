import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Sosa = NamespaceBuilder & {
    /*An actuatable quality (property, characteristic) of a FeatureOfInterest.*/
    "ActuatableProperty": NamedNode;
    /*An Actuation carries out an (Actuation) Procedure to change the state of the world using an Actuator.*/
    "Actuation": NamedNode;
    /*A device that is used by, or implements, an (Actuation) Procedure that changes the state of the world.*/
    "Actuator": NamedNode;
    /*The thing whose property is being estimated or calculated in the course of an Observation to arrive at a Result or whose property is being manipulated by an Actuator, or which is being sampled or transformed in an act of Sampling.*/
    "FeatureOfInterest": NamedNode;
    /*An observable quality (property, characteristic) of a FeatureOfInterest.*/
    "ObservableProperty": NamedNode;
    /*Act of carrying out an (Observation) Procedure to estimate or calculate a value of a property of a FeatureOfInterest. Links to a Sensor to describe what made the Observation and how; links to an ObservableProperty to describe what the result is an estimate of, and to a FeatureOfInterest to detail what that property was associated with.*/
    "Observation": NamedNode;
    /*A Platform is an entity that hosts other entities, particularly Sensors, Actuators, Samplers, and other Platforms.*/
    "Platform": NamedNode;
    /*A workflow, protocol, plan, algorithm, or computational method specifying how to make an Observation, create a Sample, or make a change to the state of the world (via an Actuator). A Procedure is re-usable, and might be involved in many Observations, Samplings, or Actuations. It explains the steps to be carried out to arrive at reproducible results.*/
    "Procedure": NamedNode;
    /*The Result of an Observation, Actuation, or act of Sampling. To store an observation's simple result value one can use the hasSimpleResult property.*/
    "Result": NamedNode;
    /*A Sample is the result from an act of Sampling.*/
    "Sample": NamedNode;
    /*A device that is used by, or implements, a Sampling Procedure to create or transform one or more samples.*/
    "Sampler": NamedNode;
    /*An act of Sampling carries out a sampling Procedure to create or transform one or more samples.*/
    "Sampling": NamedNode;
    /*Device, agent (including humans), or software (simulation) involved in, or implementing, a Procedure. Sensors respond to a stimulus, e.g., a change in the environment, or input data composed from the results of prior Observations, and generate a Result. Sensors can be hosted by Platforms.*/
    "Sensor": NamedNode;
    /*Relation between an Actuation and the property of a FeatureOfInterest it is acting upon.*/
    "actsOnProperty": NamedNode;
    /*A relation between an Observation and the entity whose quality was observed, or between an Actuation and the entity whose property was modified, or between an act of Sampling and the entity that was sampled.*/
    "hasFeatureOfInterest": NamedNode;
    /*Relation linking an Observation or Actuation or act of Sampling and a Result or Sample.*/
    "hasResult": NamedNode;
    /*Relation between a FeatureOfInterest and the Sample used to represent it.*/
    "hasSample": NamedNode;
    /*The simple value of an Observation or Actuation or act of Sampling.*/
    "hasSimpleResult": NamedNode;
    /*Relation between a Platform and a Sensor, Actuator, Sampler, or Platform, hosted or mounted on it.*/
    "hosts": NamedNode;
    /*Relation between an ActuatableProperty of a FeatureOfInterest and an Actuation changing its state.*/
    "isActedOnBy": NamedNode;
    /*A relation between a FeatureOfInterest and an Observation about it, an Actuation acting on it, or an act of Sampling that sampled it.*/
    "isFeatureOfInterestOf": NamedNode;
    /*Relation between a Sensor, Actuator, Sampler, or Platform, and the Platform that it is mounted on or hosted by.*/
    "isHostedBy": NamedNode;
    /*Relation between an ObservableProperty and the Sensor able to observe it.*/
    "isObservedBy": NamedNode;
    /*Relation linking a Result to the Observation or Actuation or act of Sampling that created or caused it.*/
    "isResultOf": NamedNode;
    /*Relation from a Sample to the FeatureOfInterest that it is intended to be representative of.*/
    "isSampleOf": NamedNode;
    /*Relation between an Actuator and the Actuation it has made.*/
    "madeActuation": NamedNode;
    /*Relation linking an Actuation to the Actuator that made that Actuation.*/
    "madeByActuator": NamedNode;
    /*Relation linking an act of Sampling to the Sampler (sampling device or entity) that made it.*/
    "madeBySampler": NamedNode;
    /*Relation between an Observation and the Sensor which made the Observation.*/
    "madeBySensor": NamedNode;
    /*Relation between a Sensor and an Observation made by the Sensor.*/
    "madeObservation": NamedNode;
    /*Relation between a Sampler (sampling device or entity) and the Sampling act it performed.*/
    "madeSampling": NamedNode;
    /*Relation linking an Observation to the property that was observed. The ObservableProperty should be a property of the FeatureOfInterest (linked by hasFeatureOfInterest) of this Observation.*/
    "observedProperty": NamedNode;
    /*Relation between a Sensor and an ObservableProperty that it is capable of sensing.*/
    "observes": NamedNode;
    /*The time that the Result of an Observation, Actuation or Sampling applies to the FeatureOfInterest. Not necessarily the same as the resultTime. May be an Interval or an Instant, or some other compound TemporalEntity.*/
    "phenomenonTime": NamedNode;
    /*The result time is the instant of time when the Observation, Actuation or Sampling activity was completed.*/
    "resultTime": NamedNode;
    /*A relation to link to a re-usable Procedure used in making an Observation, an Actuation, or a Sample, typically through a Sensor, Actuator or Sampler.*/
    "usedProcedure": NamedNode;
};
export const sosa: Sosa = (namespace(prefixes.sosa) as any);
