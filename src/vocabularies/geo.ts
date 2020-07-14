import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Geo = NamespaceBuilder & {
    /*
          This class represents the top-level feature type. This class is
          equivalent to GFI_Feature defined in ISO 19156:2011, and it is
          superclass of all feature types.
        */
    "Feature": NamedNode;
    /*
          The class represents the top-level geometry type. This class is
          equivalent to the UML class GM_Object defined in ISO 19107, and
          it is superclass of all geometry types.
        */
    "Geometry": NamedNode;
    /*
          The class spatial-object represents everything that can have
          a spatial representation. It is superclass of feature and geometry.
        */
    "SpatialObject": NamedNode;
    /*
          The GML serialization of a geometry
        */
    "asGML": NamedNode;
    /*
          The WKT serialization of a geometry
        */
    "asWKT": NamedNode;
    /*
          The number of measurements or axes needed to describe the position of this
          geometry in a coordinate system.
        */
    "coordinateDimension": NamedNode;
    /*
          The default geometry to be used in spatial calculations.
          It is Usually the most detailed geometry.
        */
    "defaultGeometry": NamedNode;
    /*
          The topological dimension of this geometric object, which
          must be less than or equal to the coordinate dimension.
          In non-homogeneous collections, this will return the largest
          topological dimension of the contained objects.
        */
    "dimension": NamedNode;
    /*
          Exists if the subject SpatialObject spatially contains the
          object SpatialObject. DE-9IM: T*TFF*FF*
        */
    "ehContains": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially covered
          by the object SpatialObject. DE-9IM: TFF*TFT**
        */
    "ehCoveredBy": NamedNode;
    /*
          Exists if the subject SpatialObject spatially covers the
          object SpatialObject. DE-9IM: T*TFT*FF*
        */
    "ehCovers": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially disjoint
          from the object SpatialObject. DE-9IM: FF*FF****
        */
    "ehDisjoint": NamedNode;
    /*
          Exists if the subject SpatialObject spatially equals the
          object SpatialObject. DE-9IM: TFFFTFFFT
        */
    "ehEquals": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially inside
          the object SpatialObject. DE-9IM: TFF*FFT**
        */
    "ehInside": NamedNode;
    /*
          Exists if the subject SpatialObject spatially meets the
          object SpatialObject.
          DE-9IM: FT******* ^ F**T***** ^ F***T****
        */
    "ehMeet": NamedNode;
    /*
          Exists if the subject SpatialObject spatially overlaps the
          object SpatialObject. DE-9IM: T*T***T**
        */
    "ehOverlap": NamedNode;
    /*
          A GML serialization of a geometry object.
        */
    "gmlLiteral": NamedNode;
    /*
          A spatial representation for a given feature.
        */
    "hasGeometry": NamedNode;
    /*
          Connects a geometry object with its text-based serialization.
        */
    "hasSerialization": NamedNode;
    /*
          (true) if this geometric object is the empty Geometry. If
          true, then this geometric object represents the empty point
          set for the coordinate space.
        */
    "isEmpty": NamedNode;
    /*
          (true) if this geometric object has no anomalous geometric
          points, such as self intersection or self tangency.
        */
    "isSimple": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially disjoint
          from the object SpatialObject. DE-9IM: FFTFFTTTT
        */
    "rcc8dc": NamedNode;
    /*
          Exists if the subject SpatialObject spatially meets the
          object SpatialObject. DE-9IM: FFTFTTTTT
        */
    "rcc8ec": NamedNode;
    /*
          Exists if the subject SpatialObject spatially equals the
          object SpatialObject. DE-9IM: TFFFTFFFT
        */
    "rcc8eq": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially inside
          the object SpatialObject. DE-9IM: TFFTFFTTT
        */
    "rcc8ntpp": NamedNode;
    /*
          Exists if the subject SpatialObject spatially contains the
          object SpatialObject. DE-9IM: TTTFFTFFT
        */
    "rcc8ntppi": NamedNode;
    /*
          Exists if the subject SpatialObject spatially overlaps the
          object SpatialObject. DE-9IM: TTTTTTTTT
        */
    "rcc8po": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially covered
          by the object SpatialObject. DE-9IM: TFFTTFTTT
        */
    "rcc8tpp": NamedNode;
    /*
          Exists if the subject SpatialObject spatially covers the
          object SpatialObject. DE-9IM: TTTFTTFFT
        */
    "rcc8tppi": NamedNode;
    /*
          Exists if the subject SpatialObject spatially contains the
          object SpatialObject. DE-9IM: T*****FF*
        */
    "sfContains": NamedNode;
    /*
          Exists if the subject SpatialObject spatially crosses the
          object SpatialObject. DE-9IM: T*T******
        */
    "sfCrosses": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially disjoint
          from the object SpatialObject. DE-9IM: FF*FF****
        */
    "sfDisjoint": NamedNode;
    /*
          Exists if the subject SpatialObject spatially equals the
          object SpatialObject. DE-9IM: TFFFTFFFT
        */
    "sfEquals": NamedNode;
    /*
          Exists if the subject SpatialObject is not spatially disjoint
          from the object SpatialObject.
          DE-9IM: T******** ^ *T******* ^ ***T***** ^ ****T****
        */
    "sfIntersects": NamedNode;
    /*
          Exists if the subject SpatialObject spatially overlaps the
          object SpatialObject. DE-9IM: T*T***T**
        */
    "sfOverlaps": NamedNode;
    /*
          Exists if the subject SpatialObject spatially touches the
          object SpatialObject.
          DE-9IM: FT******* ^ F**T***** ^ F***T****
        */
    "sfTouches": NamedNode;
    /*
          Exists if the subject SpatialObject is spatially within the
          object SpatialObject. DE-9IM: T*F**F***
        */
    "sfWithin": NamedNode;
    /*
          The number of measurements or axes needed to describe the spatial position of
          this geometry in a coordinate system.
        */
    "spatialDimension": NamedNode;
    /*
          A Well-known Text serialization of a geometry object.
        */
    "wktLiteral": NamedNode;
};
export const geo: Geo = (namespace("http://www.opengis.net/ont/geosparql#") as any);
