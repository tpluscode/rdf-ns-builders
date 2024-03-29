import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Geof {
    '': NamedNode<'http://www.opengis.net/def/function/geosparql/'>;
    "boundary": NamedNode<'http://www.opengis.net/def/function/geosparql/boundary'>;
    "buffer": NamedNode<'http://www.opengis.net/def/function/geosparql/buffer'>;
    "convexHull": NamedNode<'http://www.opengis.net/def/function/geosparql/convexHull'>;
    "difference": NamedNode<'http://www.opengis.net/def/function/geosparql/difference'>;
    "distance": NamedNode<'http://www.opengis.net/def/function/geosparql/distance'>;
    "ehContains": NamedNode<'http://www.opengis.net/def/function/geosparql/ehContains'>;
    "ehCoveredBy": NamedNode<'http://www.opengis.net/def/function/geosparql/ehCoveredBy'>;
    "ehCovers": NamedNode<'http://www.opengis.net/def/function/geosparql/ehCovers'>;
    "ehDisjoint": NamedNode<'http://www.opengis.net/def/function/geosparql/ehDisjoint'>;
    "ehEquals": NamedNode<'http://www.opengis.net/def/function/geosparql/ehEquals'>;
    "ehInside": NamedNode<'http://www.opengis.net/def/function/geosparql/ehInside'>;
    "ehMeet": NamedNode<'http://www.opengis.net/def/function/geosparql/ehMeet'>;
    "ehOverlap": NamedNode<'http://www.opengis.net/def/function/geosparql/ehOverlap'>;
    "envelope": NamedNode<'http://www.opengis.net/def/function/geosparql/envelope'>;
    "getSRID": NamedNode<'http://www.opengis.net/def/function/geosparql/getSRID'>;
    "intersection": NamedNode<'http://www.opengis.net/def/function/geosparql/intersection'>;
    "rcc8dc": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8dc'>;
    "rcc8ec": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8ec'>;
    "rcc8eq": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8eq'>;
    "rcc8ntpp": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8ntpp'>;
    "rcc8ntppi": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8ntppi'>;
    "rcc8po": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8po'>;
    "rcc8tpp": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8tpp'>;
    "rcc8tppi": NamedNode<'http://www.opengis.net/def/function/geosparql/rcc8tppi'>;
    "relate": NamedNode<'http://www.opengis.net/def/function/geosparql/relate'>;
    "sfContains": NamedNode<'http://www.opengis.net/def/function/geosparql/sfContains'>;
    "sfCrosses": NamedNode<'http://www.opengis.net/def/function/geosparql/sfCrosses'>;
    "sfDisjoint": NamedNode<'http://www.opengis.net/def/function/geosparql/sfDisjoint'>;
    "sfEquals": NamedNode<'http://www.opengis.net/def/function/geosparql/sfEquals'>;
    "sfIntersects": NamedNode<'http://www.opengis.net/def/function/geosparql/sfIntersects'>;
    "sfOverlaps": NamedNode<'http://www.opengis.net/def/function/geosparql/sfOverlaps'>;
    "sfTouches": NamedNode<'http://www.opengis.net/def/function/geosparql/sfTouches'>;
    "sfWithin": NamedNode<'http://www.opengis.net/def/function/geosparql/sfWithin'>;
    "symDifference": NamedNode<'http://www.opengis.net/def/function/geosparql/symDifference'>;
    "union": NamedNode<'http://www.opengis.net/def/function/geosparql/union'>;
}

const builder = namespace("http://www.opengis.net/def/function/geosparql/") as any;
export const strict = builder as NamespaceBuilder<keyof Geof> & Geof;
export const loose = builder as NamespaceBuilder & Geof;
