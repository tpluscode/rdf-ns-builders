import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Geor {
    "ehContains": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehContains'>;
    "ehCoveredBy": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehCoveredBy'>;
    "ehCovers": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehCovers'>;
    "ehDisjoint": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehDisjoint'>;
    "ehEquals": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehEquals'>;
    "ehInside": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehInside'>;
    "ehMeet": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehMeet'>;
    "ehOverlap": NamedNode<'http://www.opengis.net/def/rule/geosparql/ehOverlap'>;
    "rcc8dc": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8dc'>;
    "rcc8ec": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8ec'>;
    "rcc8eq": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8eq'>;
    "rcc8ntpp": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8ntpp'>;
    "rcc8ntppi": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8ntppi'>;
    "rcc8po": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8po'>;
    "rcc8tpp": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8tpp'>;
    "rcc8tppi": NamedNode<'http://www.opengis.net/def/rule/geosparql/rcc8tppi'>;
    "sfContains": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfContains'>;
    "sfCrosses": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfCrosses'>;
    "sfDisjoint": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfDisjoint'>;
    "sfEquals": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfEquals'>;
    "sfIntersects": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfIntersects'>;
    "sfOverlaps": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfOverlaps'>;
    "sfTouches": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfTouches'>;
    "sfWithin": NamedNode<'http://www.opengis.net/def/rule/geosparql/sfWithin'>;
}

const builder = namespace("http://www.opengis.net/def/rule/geosparql/") as any;
export const strict = builder as NamespaceBuilder<keyof Geor> & Geor;
export const loose = builder as NamespaceBuilder & Geor;
