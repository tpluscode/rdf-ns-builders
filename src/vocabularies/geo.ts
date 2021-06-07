import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Geo {
    /**
     *       This class represents the top-level feature type. This class is 
     *       equivalent to GFI_Feature defined in ISO 19156:2011, and it is 
     *       superclass of all feature types.
     *     
     */
    "Feature": NamedNode<'http://www.opengis.net/ont/geosparql#Feature'>;
    /**
     *       The class represents the top-level geometry type. This class is 
     *       equivalent to the UML class GM_Object defined in ISO 19107, and 
     *       it is superclass of all geometry types.
     *     
     */
    "Geometry": NamedNode<'http://www.opengis.net/ont/geosparql#Geometry'>;
    /**
     *       The class spatial-object represents everything that can have 
     *       a spatial representation. It is superclass of feature and geometry.
     *     
     */
    "SpatialObject": NamedNode<'http://www.opengis.net/ont/geosparql#SpatialObject'>;
    /**
     *       The GML serialization of a geometry
     *     
     */
    "asGML": NamedNode<'http://www.opengis.net/ont/geosparql#asGML'>;
    /**
     *       The WKT serialization of a geometry
     *     
     */
    "asWKT": NamedNode<'http://www.opengis.net/ont/geosparql#asWKT'>;
    /**
     *       The number of measurements or axes needed to describe the position of this
     *       geometry in a coordinate system.
     *     
     */
    "coordinateDimension": NamedNode<'http://www.opengis.net/ont/geosparql#coordinateDimension'>;
    /**
     *       The default geometry to be used in spatial calculations.
     *       It is Usually the most detailed geometry.
     *     
     */
    "defaultGeometry": NamedNode<'http://www.opengis.net/ont/geosparql#defaultGeometry'>;
    /**
     *       The topological dimension of this geometric object, which 
     *       must be less than or equal to the coordinate dimension. 
     *       In non-homogeneous collections, this will return the largest 
     *       topological dimension of the contained objects.
     *     
     */
    "dimension": NamedNode<'http://www.opengis.net/ont/geosparql#dimension'>;
    /**
     *       Exists if the subject SpatialObject spatially contains the 
     *       object SpatialObject. DE-9IM: T*TFF*FF*
     *     
     */
    "ehContains": NamedNode<'http://www.opengis.net/ont/geosparql#ehContains'>;
    /**
     *       Exists if the subject SpatialObject is spatially covered 
     *       by the object SpatialObject. DE-9IM: TFF*TFT**
     *     
     */
    "ehCoveredBy": NamedNode<'http://www.opengis.net/ont/geosparql#ehCoveredBy'>;
    /**
     *       Exists if the subject SpatialObject spatially covers the 
     *       object SpatialObject. DE-9IM: T*TFT*FF*
     *     
     */
    "ehCovers": NamedNode<'http://www.opengis.net/ont/geosparql#ehCovers'>;
    /**
     *       Exists if the subject SpatialObject is spatially disjoint
     *       from the object SpatialObject. DE-9IM: FF*FF****
     *     
     */
    "ehDisjoint": NamedNode<'http://www.opengis.net/ont/geosparql#ehDisjoint'>;
    /**
     *       Exists if the subject SpatialObject spatially equals the 
     *       object SpatialObject. DE-9IM: TFFFTFFFT
     *     
     */
    "ehEquals": NamedNode<'http://www.opengis.net/ont/geosparql#ehEquals'>;
    /**
     *       Exists if the subject SpatialObject is spatially inside 
     *       the object SpatialObject. DE-9IM: TFF*FFT**
     *     
     */
    "ehInside": NamedNode<'http://www.opengis.net/ont/geosparql#ehInside'>;
    /**
     *       Exists if the subject SpatialObject spatially meets the 
     *       object SpatialObject. 
     *       DE-9IM: FT******* ^ F**T***** ^ F***T****
     *     
     */
    "ehMeet": NamedNode<'http://www.opengis.net/ont/geosparql#ehMeet'>;
    /**
     *       Exists if the subject SpatialObject spatially overlaps the 
     *       object SpatialObject. DE-9IM: T*T***T**
     *     
     */
    "ehOverlap": NamedNode<'http://www.opengis.net/ont/geosparql#ehOverlap'>;
    /**
     *       A GML serialization of a geometry object.
     *     
     */
    "gmlLiteral": NamedNode<'http://www.opengis.net/ont/geosparql#gmlLiteral'>;
    /**
     *       A spatial representation for a given feature.
     *     
     */
    "hasGeometry": NamedNode<'http://www.opengis.net/ont/geosparql#hasGeometry'>;
    /**
     *       Connects a geometry object with its text-based serialization.
     *     
     */
    "hasSerialization": NamedNode<'http://www.opengis.net/ont/geosparql#hasSerialization'>;
    /**
     *       (true) if this geometric object is the empty Geometry. If 
     *       true, then this geometric object represents the empty point 
     *       set for the coordinate space.
     *     
     */
    "isEmpty": NamedNode<'http://www.opengis.net/ont/geosparql#isEmpty'>;
    /**
     *       (true) if this geometric object has no anomalous geometric 
     *       points, such as self intersection or self tangency.
     *     
     */
    "isSimple": NamedNode<'http://www.opengis.net/ont/geosparql#isSimple'>;
    /**
     *       Exists if the subject SpatialObject is spatially disjoint
     *       from the object SpatialObject. DE-9IM: FFTFFTTTT
     *     
     */
    "rcc8dc": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8dc'>;
    /**
     *       Exists if the subject SpatialObject spatially meets the 
     *       object SpatialObject. DE-9IM: FFTFTTTTT
     *     
     */
    "rcc8ec": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8ec'>;
    /**
     *       Exists if the subject SpatialObject spatially equals the 
     *       object SpatialObject. DE-9IM: TFFFTFFFT
     *     
     */
    "rcc8eq": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8eq'>;
    /**
     *       Exists if the subject SpatialObject is spatially inside 
     *       the object SpatialObject. DE-9IM: TFFTFFTTT
     *     
     */
    "rcc8ntpp": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8ntpp'>;
    /**
     *       Exists if the subject SpatialObject spatially contains the 
     *       object SpatialObject. DE-9IM: TTTFFTFFT
     *     
     */
    "rcc8ntppi": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8ntppi'>;
    /**
     *       Exists if the subject SpatialObject spatially overlaps the 
     *       object SpatialObject. DE-9IM: TTTTTTTTT
     *     
     */
    "rcc8po": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8po'>;
    /**
     *       Exists if the subject SpatialObject is spatially covered 
     *       by the object SpatialObject. DE-9IM: TFFTTFTTT
     *     
     */
    "rcc8tpp": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8tpp'>;
    /**
     *       Exists if the subject SpatialObject spatially covers the 
     *       object SpatialObject. DE-9IM: TTTFTTFFT
     *     
     */
    "rcc8tppi": NamedNode<'http://www.opengis.net/ont/geosparql#rcc8tppi'>;
    /**
     *       Exists if the subject SpatialObject spatially contains the 
     *       object SpatialObject. DE-9IM: T*****FF*
     *     
     */
    "sfContains": NamedNode<'http://www.opengis.net/ont/geosparql#sfContains'>;
    /**
     *       Exists if the subject SpatialObject spatially crosses the 
     *       object SpatialObject. DE-9IM: T*T******
     *     
     */
    "sfCrosses": NamedNode<'http://www.opengis.net/ont/geosparql#sfCrosses'>;
    /**
     *       Exists if the subject SpatialObject is spatially disjoint 
     *       from the object SpatialObject. DE-9IM: FF*FF****
     *     
     */
    "sfDisjoint": NamedNode<'http://www.opengis.net/ont/geosparql#sfDisjoint'>;
    /**
     *       Exists if the subject SpatialObject spatially equals the 
     *       object SpatialObject. DE-9IM: TFFFTFFFT
     *     
     */
    "sfEquals": NamedNode<'http://www.opengis.net/ont/geosparql#sfEquals'>;
    /**
     *       Exists if the subject SpatialObject is not spatially disjoint 
     *       from the object SpatialObject.
     *       DE-9IM: T******** ^ *T******* ^ ***T***** ^ ****T**** 
     *     
     */
    "sfIntersects": NamedNode<'http://www.opengis.net/ont/geosparql#sfIntersects'>;
    /**
     *       Exists if the subject SpatialObject spatially overlaps the 
     *       object SpatialObject. DE-9IM: T*T***T** 
     *     
     */
    "sfOverlaps": NamedNode<'http://www.opengis.net/ont/geosparql#sfOverlaps'>;
    /**
     *       Exists if the subject SpatialObject spatially touches the 
     *       object SpatialObject.
     *       DE-9IM: FT******* ^ F**T***** ^ F***T****
     *     
     */
    "sfTouches": NamedNode<'http://www.opengis.net/ont/geosparql#sfTouches'>;
    /**
     *       Exists if the subject SpatialObject is spatially within the 
     *       object SpatialObject. DE-9IM: T*F**F***
     *     
     */
    "sfWithin": NamedNode<'http://www.opengis.net/ont/geosparql#sfWithin'>;
    /**
     *       The number of measurements or axes needed to describe the spatial position of 
     *       this geometry in a coordinate system.
     *     
     */
    "spatialDimension": NamedNode<'http://www.opengis.net/ont/geosparql#spatialDimension'>;
    /**
     *       A Well-known Text serialization of a geometry object.
     *     
     */
    "wktLiteral": NamedNode<'http://www.opengis.net/ont/geosparql#wktLiteral'>;
}

const builder = namespace("http://www.opengis.net/ont/geosparql#") as any;
export const strict = builder as NamespaceBuilder<keyof Geo> & Geo;
export const loose = builder as NamespaceBuilder & Geo;
