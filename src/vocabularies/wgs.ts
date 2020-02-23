import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Wgs = NamespaceBuilder & {
    /*
    Uniquely identified by lat/long/alt. i.e.
    
    spaciallyIntersects(P1, P2) :- lat(P1, LAT), long(P1, LONG), alt(P1, ALT),
      lat(P2, LAT), long(P2, LONG), alt(P2, ALT).
    
    sameThing(P1, P2) :- type(P1, Point), type(P2, Point), spaciallyIntersects(P1, P2).
      */
    "Point": NamedNode;
    /*Anything with spatial extent, i.e. size, shape, or position.
     e.g. people, places, bowling balls, as well as abstract areas like cubes.
    */
    "SpatialThing": NamedNode;
    /*The WGS84 altitude of a SpatialThing (decimal meters
    above the local reference ellipsoid).*/
    "alt": NamedNode;
    /*The WGS84 latitude of a SpatialThing (decimal degrees).*/
    "lat": NamedNode;
    /*A comma-separated representation of a latitude, longitude coordinate.*/
    "lat_long": NamedNode;
    /*The relation between something and the point,
     or other geometrical thing in space, where it is.  For example, the realtionship between
     a radio tower and a Point with a given lat and long.
     Or a relationship between a park and its outline as a closed arc of points, or a road and
     its location as a arc (a sequence of points).
     Clearly in practice there will be limit to the accuracy of any such statement, but one would expect
     an accuracy appropriate for the size of the object and uses such as mapping .
     */
    "location": NamedNode;
    /*The WGS84 longitude of a SpatialThing (decimal degrees).*/
    "long": NamedNode;
};
export const wgs: Wgs = (namespace(prefixes.wgs) as any);
