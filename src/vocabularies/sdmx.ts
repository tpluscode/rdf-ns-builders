import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Sdmx {
    '': NamedNode<'http://purl.org/linked-data/sdmx#'>;
    "CodeList": NamedNode<'http://purl.org/linked-data/sdmx#CodeList'>;
    /** Denotes an SDMX concept, used in the particular SDMX terminological sense, which is in principle narrower than skos:Concept */
    "Concept": NamedNode<'http://purl.org/linked-data/sdmx#Concept'>;
    /** Abstract superclass of classes denoting statistical roles which be played by concepts */
    "ConceptRole": NamedNode<'http://purl.org/linked-data/sdmx#ConceptRole'>;
    /** concept for a dimension or attribute that plays the role of an identifier where the identifier is taken from a known system of counts (e.g. the Nth current dataset update for a given day) */
    "CountRole": NamedNode<'http://purl.org/linked-data/sdmx#CountRole'>;
    /** A specialization of qb:DataStructureDefinition which additional constraints: if there are multiple measures then a MeasureDimensionProperty must be included in the DSD */
    "DataStructureDefinition": NamedNode<'http://purl.org/linked-data/sdmx#DataStructureDefinition'>;
    /** concept for a dimension or attribute that plays the role of the DataAttribute subject to whom the data refers (e.g. the reporting agent for primary reporting, the country for secondary reporting) */
    "EntityRole": NamedNode<'http://purl.org/linked-data/sdmx#EntityRole'>;
    /** concept for a dimension or attribute that plays the role of frequency */
    "FrequencyRole": NamedNode<'http://purl.org/linked-data/sdmx#FrequencyRole'>;
    /** concept for a dimension or attribute that plays the role of an identifier which is taken from a known scheme of identifiers. */
    "IdentityRole": NamedNode<'http://purl.org/linked-data/sdmx#IdentityRole'>;
    /** concept for a dimension that plays the role of identifying a type of measure */
    "MeasureTypeRole": NamedNode<'http://purl.org/linked-data/sdmx#MeasureTypeRole'>;
    /** concept for a dimension or attribute that plays the role of a date/time identifier in the KeyFamily which is not related to the time of the observation */
    "NonObsTimeRole": NamedNode<'http://purl.org/linked-data/sdmx#NonObsTimeRole'>;
    /** concept for a measure that plays the role of the observation in a time series */
    "PrimaryMeasureRole": NamedNode<'http://purl.org/linked-data/sdmx#PrimaryMeasureRole'>;
    /** concept for a dimension that specifies the time of the observation of the primaryMeasure */
    "TimeRole": NamedNode<'http://purl.org/linked-data/sdmx#TimeRole'>;
    /** The concept corresponding to the generic measure type dimension which indicates which measure is being denoted by the primary measure on an observation */
    "measureTypeConcept": NamedNode<'http://purl.org/linked-data/sdmx#measureTypeConcept'>;
    /** Indicates an additional component used as the primary measure within the SDMX data. In the case of multi-measure data sets the RDF representation uses the specific measure rather than a subsuming overall measure. This property records the subsuming primary measure (typically sdmx-measure:obsValue) to enable round tripping of this information. */
    "primaryMeasure": NamedNode<'http://purl.org/linked-data/sdmx#primaryMeasure'>;
}

const builder = namespace("http://purl.org/linked-data/sdmx#") as any;
export const strict = builder as NamespaceBuilder<keyof Sdmx> & Sdmx;
export const loose = builder as NamespaceBuilder & Sdmx;
