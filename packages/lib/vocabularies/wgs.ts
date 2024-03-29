import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Wgs {
    '': NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#'>;
    /**
     * The WGS84 altitude of a SpatialThing (decimal meters 
     * above the local reference ellipsoid).
     */
    "alt": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#alt'>;
    /** A comma-separated representation of a latitude, longitude coordinate. */
    "lat_long": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#lat_long'>;
    /** The WGS84 latitude of a SpatialThing (decimal degrees). */
    "lat": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#lat'>;
    /**
     * The relation between something and the point, 
     *  or other geometrical thing in space, where it is.  For example, the realtionship between
     *  a radio tower and a Point with a given lat and long.
     *  Or a relationship between a park and its outline as a closed arc of points, or a road and
     *  its location as a arc (a sequence of points).
     *  Clearly in practice there will be limit to the accuracy of any such statement, but one would expect
     *  an accuracy appropriate for the size of the object and uses such as mapping .
     *  
     */
    "location": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#location'>;
    /** The WGS84 longitude of a SpatialThing (decimal degrees). */
    "long": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#long'>;
    /**
     *  
     * Uniquely identified by lat/long/alt. i.e.
     *
     * spaciallyIntersects(P1, P2) :- lat(P1, LAT), long(P1, LONG), alt(P1, ALT),
     *   lat(P2, LAT), long(P2, LONG), alt(P2, ALT).
     *
     * sameThing(P1, P2) :- type(P1, Point), type(P2, Point), spaciallyIntersects(P1, P2).
     *   
     */
    "Point": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#Point'>;
    /**
     * Anything with spatial extent, i.e. size, shape, or position.
     *  e.g. people, places, bowling balls, as well as abstract areas like cubes.
     *
     */
    "SpatialThing": NamedNode<'http://www.w3.org/2003/01/geo/wgs84_pos#SpatialThing'>;
}

const builder = namespace("http://www.w3.org/2003/01/geo/wgs84_pos#") as any;
export const strict = builder as NamespaceBuilder<keyof Wgs> & Wgs;
export const loose = builder as NamespaceBuilder & Wgs;
