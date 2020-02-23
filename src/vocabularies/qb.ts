import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Qb = NamespaceBuilder & {
    /*Abstract superclass for everything that can have attributes and dimensions*/
    "Attachable": NamedNode;
    /*The class of components which represent attributes of observations in the cube, e.g. unit of measurement*/
    "AttributeProperty": NamedNode;
    /*Superclass of all coded ComponentProperties*/
    "CodedProperty": NamedNode;
    /*Abstract super-property of all properties representing dimensions, attributes or measures*/
    "ComponentProperty": NamedNode;
    /*Abstract class of things which reference one or more ComponentProperties*/
    "ComponentSet": NamedNode;
    /*Used to define properties of a component (attribute, dimension etc) which are specific to its usage in a DSD.*/
    "ComponentSpecification": NamedNode;
    /*Represents a collection of observations, possibly organized into various slices, conforming to some common dimensional structure.*/
    "DataSet": NamedNode;
    /*Defines the structure of a DataSet or slice*/
    "DataStructureDefinition": NamedNode;
    /*The class of components which represent the dimensions of the cube*/
    "DimensionProperty": NamedNode;
    /*Represents a generalized hierarchy of concepts which can be used for coding. The hierarchy is defined by one or more roots together with a property which relates concepts in the hierarchy to thier child concept .  The same concepts may be members of multiple hierarchies provided that different qb:parentChildProperty values are used for each hierarchy.*/
    "HierarchicalCodeList": NamedNode;
    /*The class of components which represent the measured value of the phenomenon being observed*/
    "MeasureProperty": NamedNode;
    /*A single observation in the cube, may have one or more associated measured values*/
    "Observation": NamedNode;
    /*A, possibly arbitrary, group of observations.*/
    "ObservationGroup": NamedNode;
    /*Denotes a subset of a DataSet defined by fixing a subset of the dimensional values, component properties on the Slice*/
    "Slice": NamedNode;
    /*Denotes a subset of the component properties of a DataSet which are fixed in the corresponding slices*/
    "SliceKey": NamedNode;
    /*An alternative to qb:componentProperty which makes explicit that the component is a attribute*/
    "attribute": NamedNode;
    /*gives the code list associated with a CodedProperty*/
    "codeList": NamedNode;
    /*indicates a component specification which is included in the structure of the dataset*/
    "component": NamedNode;
    /*Indicates the level at which the component property should be attached, this might an qb:DataSet, qb:Slice or qb:Observation, or a qb:MeasureProperty.*/
    "componentAttachment": NamedNode;
    /*indicates a ComponentProperty (i.e. attribute/dimension) expected on a DataSet, or a dimension fixed in a SliceKey*/
    "componentProperty": NamedNode;
    /*Indicates whether a component property is required (true) or optional (false) in the context of a DSD. Only applicable
        to components correspond to an attribute. Defaults to false (optional).*/
    "componentRequired": NamedNode;
    /*gives the concept which is being measured or indicated by a ComponentProperty*/
    "concept": NamedNode;
    /*indicates the data set of which this observation is a part*/
    "dataSet": NamedNode;
    /*An alternative to qb:componentProperty which makes explicit that the component is a dimension*/
    "dimension": NamedNode;
    /*Specifies a root of the hierarchy. A hierarchy may have multiple roots but must have at least one.*/
    "hierarchyRoot": NamedNode;
    /*An alternative to qb:componentProperty which makes explicit that the component is a measure*/
    "measure": NamedNode;
    /*An alternative to qb:componentProperty which makes explicit that the component is a measure dimension*/
    "measureDimension": NamedNode;
    /*Generic measure dimension, the value of this dimension indicates which measure (from the set of measures in the DSD) is being given by the obsValue (or other primary measure)*/
    "measureType": NamedNode;
    /*indicates a observation contained within this slice of the data set*/
    "observation": NamedNode;
    /*Indicates a group of observations. The domain of this property is left open so that a group may be attached to different resources and need not be restricted to a single DataSet*/
    "observationGroup": NamedNode;
    /*indicates a priority order for the components of sets with this structure, used to guide presentations - lower order numbers come before higher numbers, un-numbered components come last*/
    "order": NamedNode;
    /*Specifies a property which relates a parent concept in the hierarchy to a child concept.*/
    "parentChildProperty": NamedNode;
    /*Indicates a subset of a DataSet defined by fixing a subset of the dimensional values*/
    "slice": NamedNode;
    /*indicates a slice key which is used for slices in this dataset*/
    "sliceKey": NamedNode;
    /*indicates the sub-key corresponding to this slice*/
    "sliceStructure": NamedNode;
    /*indicates the structure to which this data set conforms*/
    "structure": NamedNode;
};
export const qb: Qb = (namespace(prefixes.qb) as any);
