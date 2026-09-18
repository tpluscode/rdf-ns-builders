import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Cube {
    '': NamedNode<'https://cube.link/'>;
    /** Specifies constraints that need to be met on the Cube. Used for metadata and validation. */
    "Constraint": NamedNode<'https://cube.link/Constraint'>;
    /** Represents the entry point for a collection of observations, conforming to some common dimensional structure. */
    "Cube": NamedNode<'https://cube.link/Cube'>;
    /** The KeyDimension tags one or multiple dimensions which are together uniquely identifying an observation. You can think of them as the Key in a relational database. */
    "KeyDimension": NamedNode<'https://cube.link/KeyDimension'>;
    /** The MeasureDimension tags at least one dimension, but potentially multiple, which is the actual measurement, or statistical count attached to an observation. */
    "MeasureDimension": NamedNode<'https://cube.link/MeasureDimension'>;
    /** Connects a set of observations with a single observation. */
    "observation": NamedNode<'https://cube.link/observation'>;
    /** A single observation in the cube, may have one or more associated dimensions. */
    "Observation": NamedNode<'https://cube.link/Observation'>;
    /** Connects a cube with a constraint for metadata and validation. */
    "observationConstraint": NamedNode<'https://cube.link/observationConstraint'>;
    /** Connects a cube with a set of observations. */
    "observationSet": NamedNode<'https://cube.link/observationSet'>;
    /** A set of observations. */
    "ObservationSet": NamedNode<'https://cube.link/ObservationSet'>;
    /** Connects an observation with the agent that created the observation. The agent can be a person, organisation, device or software. A description of the method to gather the data could be attached to the agent. */
    "observedBy": NamedNode<'https://cube.link/observedBy'>;
    /** An observation which is not defined. */
    "Undefined": NamedNode<'https://cube.link/Undefined'>;
}

const builder = namespace("https://cube.link/") as any;
export const strict = builder as NamespaceBuilder<keyof Cube> & Cube;
export const loose = builder as NamespaceBuilder & Cube;
