import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Sdmx = NamespaceBuilder & {
    "CodeList": NamedNode;
    /*Denotes an SDMX concept, used in the particular SDMX terminological sense, which is in principle narrower than skos:Concept*/
    "Concept": NamedNode;
    /*Abstract superclass of classes denoting statistical roles which be played by concepts*/
    "ConceptRole": NamedNode;
    /*concept for a dimension or attribute that plays the role of an identifier where the identifier is taken from a known system of counts (e.g. the Nth current dataset update for a given day)*/
    "CountRole": NamedNode;
    /*A specialization of qb:DataStructureDefinition which additional constraints: if there are multiple measures then a MeasureDimensionProperty must be included in the DSD*/
    "DataStructureDefinition": NamedNode;
    /*concept for a dimension or attribute that plays the role of the DataAttribute subject to whom the data refers (e.g. the reporting agent for primary reporting, the country for secondary reporting)*/
    "EntityRole": NamedNode;
    /*concept for a dimension or attribute that plays the role of frequency*/
    "FrequencyRole": NamedNode;
    /*concept for a dimension or attribute that plays the role of an identifier which is taken from a known scheme of identifiers.*/
    "IdentityRole": NamedNode;
    /*concept for a dimension that plays the role of identifying a type of measure*/
    "MeasureTypeRole": NamedNode;
    /*concept for a dimension or attribute that plays the role of a date/time identifier in the KeyFamily which is not related to the time of the observation*/
    "NonObsTimeRole": NamedNode;
    /*concept for a measure that plays the role of the observation in a time series*/
    "PrimaryMeasureRole": NamedNode;
    /*concept for a dimension that specifies the time of the observation of the primaryMeasure*/
    "TimeRole": NamedNode;
    /*The concept corresponding to the generic measure type dimension which indicates which measure is being denoted by the primary measure on an observation*/
    "measureTypeConcept": NamedNode;
    /*Indicates an additional component used as the primary measure within the SDMX data. In the case of multi-measure data sets the RDF representation uses the specific measure rather than a subsuming overall measure. This property records the subsuming primary measure (typically sdmx-measure:obsValue) to enable round tripping of this information.*/
    "primaryMeasure": NamedNode;
};
export const sdmx: Sdmx = (namespace("http://purl.org/linked-data/sdmx#") as any);
