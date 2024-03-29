import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Qb {
    '': NamedNode<'http://purl.org/linked-data/cube#'>;
    /** Abstract superclass for everything that can have attributes and dimensions */
    "Attachable": NamedNode<'http://purl.org/linked-data/cube#Attachable'>;
    /** An alternative to qb:componentProperty which makes explicit that the component is a attribute */
    "attribute": NamedNode<'http://purl.org/linked-data/cube#attribute'>;
    /** The class of components which represent attributes of observations in the cube, e.g. unit of measurement */
    "AttributeProperty": NamedNode<'http://purl.org/linked-data/cube#AttributeProperty'>;
    /** Superclass of all coded ComponentProperties */
    "CodedProperty": NamedNode<'http://purl.org/linked-data/cube#CodedProperty'>;
    /** gives the code list associated with a CodedProperty */
    "codeList": NamedNode<'http://purl.org/linked-data/cube#codeList'>;
    /** indicates a component specification which is included in the structure of the dataset */
    "component": NamedNode<'http://purl.org/linked-data/cube#component'>;
    /** Indicates the level at which the component property should be attached, this might an qb:DataSet, qb:Slice or qb:Observation, or a qb:MeasureProperty. */
    "componentAttachment": NamedNode<'http://purl.org/linked-data/cube#componentAttachment'>;
    /** indicates a ComponentProperty (i.e. attribute/dimension) expected on a DataSet, or a dimension fixed in a SliceKey */
    "componentProperty": NamedNode<'http://purl.org/linked-data/cube#componentProperty'>;
    /** Abstract super-property of all properties representing dimensions, attributes or measures */
    "ComponentProperty": NamedNode<'http://purl.org/linked-data/cube#ComponentProperty'>;
    /**
     * Indicates whether a component property is required (true) or optional (false) in the context of a DSD. Only applicable
     *     to components correspond to an attribute. Defaults to false (optional).
     */
    "componentRequired": NamedNode<'http://purl.org/linked-data/cube#componentRequired'>;
    /** Abstract class of things which reference one or more ComponentProperties */
    "ComponentSet": NamedNode<'http://purl.org/linked-data/cube#ComponentSet'>;
    /** Used to define properties of a component (attribute, dimension etc) which are specific to its usage in a DSD. */
    "ComponentSpecification": NamedNode<'http://purl.org/linked-data/cube#ComponentSpecification'>;
    /** gives the concept which is being measured or indicated by a ComponentProperty */
    "concept": NamedNode<'http://purl.org/linked-data/cube#concept'>;
    /** indicates the data set of which this observation is a part */
    "dataSet": NamedNode<'http://purl.org/linked-data/cube#dataSet'>;
    /** Represents a collection of observations, possibly organized into various slices, conforming to some common dimensional structure. */
    "DataSet": NamedNode<'http://purl.org/linked-data/cube#DataSet'>;
    /** Defines the structure of a DataSet or slice */
    "DataStructureDefinition": NamedNode<'http://purl.org/linked-data/cube#DataStructureDefinition'>;
    /** An alternative to qb:componentProperty which makes explicit that the component is a dimension */
    "dimension": NamedNode<'http://purl.org/linked-data/cube#dimension'>;
    /** The class of components which represent the dimensions of the cube */
    "DimensionProperty": NamedNode<'http://purl.org/linked-data/cube#DimensionProperty'>;
    /** Represents a generalized hierarchy of concepts which can be used for coding. The hierarchy is defined by one or more roots together with a property which relates concepts in the hierarchy to thier child concept .  The same concepts may be members of multiple hierarchies provided that different qb:parentChildProperty values are used for each hierarchy. */
    "HierarchicalCodeList": NamedNode<'http://purl.org/linked-data/cube#HierarchicalCodeList'>;
    /** Specifies a root of the hierarchy. A hierarchy may have multiple roots but must have at least one. */
    "hierarchyRoot": NamedNode<'http://purl.org/linked-data/cube#hierarchyRoot'>;
    /** An alternative to qb:componentProperty which makes explicit that the component is a measure */
    "measure": NamedNode<'http://purl.org/linked-data/cube#measure'>;
    /** An alternative to qb:componentProperty which makes explicit that the component is a measure dimension */
    "measureDimension": NamedNode<'http://purl.org/linked-data/cube#measureDimension'>;
    /** The class of components which represent the measured value of the phenomenon being observed */
    "MeasureProperty": NamedNode<'http://purl.org/linked-data/cube#MeasureProperty'>;
    /** Generic measure dimension, the value of this dimension indicates which measure (from the set of measures in the DSD) is being given by the obsValue (or other primary measure) */
    "measureType": NamedNode<'http://purl.org/linked-data/cube#measureType'>;
    /** indicates a observation contained within this slice of the data set */
    "observation": NamedNode<'http://purl.org/linked-data/cube#observation'>;
    /** A single observation in the cube, may have one or more associated measured values */
    "Observation": NamedNode<'http://purl.org/linked-data/cube#Observation'>;
    /** Indicates a group of observations. The domain of this property is left open so that a group may be attached to different resources and need not be restricted to a single DataSet */
    "observationGroup": NamedNode<'http://purl.org/linked-data/cube#observationGroup'>;
    /** A, possibly arbitrary, group of observations. */
    "ObservationGroup": NamedNode<'http://purl.org/linked-data/cube#ObservationGroup'>;
    /** indicates a priority order for the components of sets with this structure, used to guide presentations - lower order numbers come before higher numbers, un-numbered components come last */
    "order": NamedNode<'http://purl.org/linked-data/cube#order'>;
    /** Specifies a property which relates a parent concept in the hierarchy to a child concept. */
    "parentChildProperty": NamedNode<'http://purl.org/linked-data/cube#parentChildProperty'>;
    /** Indicates a subset of a DataSet defined by fixing a subset of the dimensional values */
    "slice": NamedNode<'http://purl.org/linked-data/cube#slice'>;
    /** Denotes a subset of a DataSet defined by fixing a subset of the dimensional values, component properties on the Slice */
    "Slice": NamedNode<'http://purl.org/linked-data/cube#Slice'>;
    /** indicates a slice key which is used for slices in this dataset */
    "sliceKey": NamedNode<'http://purl.org/linked-data/cube#sliceKey'>;
    /** Denotes a subset of the component properties of a DataSet which are fixed in the corresponding slices */
    "SliceKey": NamedNode<'http://purl.org/linked-data/cube#SliceKey'>;
    /** indicates the sub-key corresponding to this slice */
    "sliceStructure": NamedNode<'http://purl.org/linked-data/cube#sliceStructure'>;
    /** indicates the structure to which this data set conforms */
    "structure": NamedNode<'http://purl.org/linked-data/cube#structure'>;
}

const builder = namespace("http://purl.org/linked-data/cube#") as any;
export const strict = builder as NamespaceBuilder<keyof Qb> & Qb;
export const loose = builder as NamespaceBuilder & Qb;
