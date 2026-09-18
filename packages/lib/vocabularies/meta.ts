import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Meta {
    '': NamedNode<'https://cube.link/meta/'>;
    /** This property is used on a Dimension Constraint to be ignored by application specified. (It shall use the same objects as used on `schema:workExample`.) */
    "applicationIgnores": NamedNode<'https://cube.link/meta/applicationIgnores'>;
    /** The kind or variety of the data in a dimension. Often schema:GeoCoordinates and schema:GeoShape for Spatial and time:GeneralTimeDescription for Temporal is used. */
    "dataKind": NamedNode<'https://cube.link/meta/dataKind'>;
    /** A meta:dimensionRelation property is used to express the relation of this dimension in related to other dimension, examples are Deviation and StandardError */
    "dimensionRelation": NamedNode<'https://cube.link/meta/dimensionRelation'>;
    /** A hierarchy is defined and can be named schema:name. This can help user interfaces to allow a selection in case of multiple hierarchies. */
    "Hierarchy": NamedNode<'https://cube.link/meta/Hierarchy'>;
    /** This property is mandatory and defines one or multiple root concepts. It is the starting point of the hierarchy which is then defined through a cascade of levels where the use of shacl:path is connecting the concepts. The simplest case is only two levels, the root level and how they are connected to the observations in the dimension. If there are multiple levels they are nested with meta:nextInHierarchy. */
    "hierarchyRoot": NamedNode<'https://cube.link/meta/hierarchyRoot'>;
    /** This property is used on a Dimension Constraint to express a hierarchy implemented in such. It is possible to add multiple different hierarchies on one dimension. A hierarchy must have at least one meta:hierarchyRoot. */
    "inHierarchy": NamedNode<'https://cube.link/meta/inHierarchy'>;
    /** With meta:nextInHierarchy it is possible to */
    "nextInHierarchy": NamedNode<'https://cube.link/meta/nextInHierarchy'>;
    /** This property is used on a Dimension Constraint to express a relation with other properties through a meta:Relation instance, the nature of this relationship is determined by the properties used on the instance. */
    "relatesTo": NamedNode<'https://cube.link/meta/relatesTo'>;
    /** A meta:Relation resource is used to express the relation or hiarchy between different dimensions, the nature of the relationship is determined by the properties used. A meta:Relation is linked to an observation through a meta:relation property. */
    "Relation": NamedNode<'https://cube.link/meta/Relation'>;
    /** A schema:DefinedTermSet which holds the Resources used for a shared dimension. */
    "SharedDimension": NamedNode<'https://cube.link/meta/SharedDimension'>;
}

const builder = namespace("https://cube.link/meta/") as any;
export const strict = builder as NamespaceBuilder<keyof Meta> & Meta;
export const loose = builder as NamespaceBuilder & Meta;
