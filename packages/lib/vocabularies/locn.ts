import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Locn {
    '': NamedNode<'http://www.w3.org/ns/locn#'>;
    /** The locn:address property relationship associates any resource with the locn:Address class */
    "address": NamedNode<'http://www.w3.org/ns/locn#address'>;
    /** An "address representation" as conceptually defined by the INSPIRE Address Representation data type. The locn:addressId property may be used to link this locn:Address to other representations. */
    "Address": NamedNode<'http://www.w3.org/ns/locn#Address'>;
    /** The name or names of a geographic area or locality that groups a number of addressable objects for addressing purposes, without being an administrative unit. This would typically be part of a city, a neighbourhood or village. The domain of locn:addressArea is locn:Address. */
    "addressArea": NamedNode<'http://www.w3.org/ns/locn#addressArea'>;
    /** The concept of adding a globally unique identifier for each instance of an address is a crucial part of the INSPIRE data spec. The domain of locn:addressId is locn:Address. */
    "addressId": NamedNode<'http://www.w3.org/ns/locn#addressId'>;
    /** The uppermost administrative unit for the address, almost always a country. The domain of locn:adminUnitL1 is locn:Address and the range is a literal, conceptually defined by the INSPIRE Geographical Name data type. */
    "adminUnitL1": NamedNode<'http://www.w3.org/ns/locn#adminUnitL1'>;
    /** The region of the address, usually a county, state or other such area that typically encompasses several localities. The domain of  locn:adminUnitL2 is locn:Address and the range is a literal, conceptually defined by the INSPIRE Geographical Name data type. */
    "adminUnitL2": NamedNode<'http://www.w3.org/ns/locn#adminUnitL2'>;
    /** The complete address written as a string, with or without formatting. The domain of locn:fullAddress is locn:Address. */
    "fullAddress": NamedNode<'http://www.w3.org/ns/locn#fullAddress'>;
    /**
     * A geographic name is a proper noun applied to a spatial object. Taking the example used in the relevant INSPIRE data specification (page 18), the following are all valid geographic names for the Greek capital:
     * - Αθήνα (the Greek endonym written in the Greek script)
     * - Athína (the standard Romanisation of the endonym)
     * - Athens (the English language exonym)
     * For INSPIRE-conformant data, provide the metadata for the geographic name using a skos:Concept as a datatype.
     *
     */
    "geographicName": NamedNode<'http://www.w3.org/ns/locn#geographicName'>;
    /** Associates any resource with the corresponding geometry. */
    "geometry": NamedNode<'http://www.w3.org/ns/locn#geometry'>;
    /** The locn:Geometry class provides the means to identify a location as a point, line, polygon, etc. expressed using coordinates in some coordinate reference system. */
    "Geometry": NamedNode<'http://www.w3.org/ns/locn#Geometry'>;
    /** The location property links any resource to the Location Class. Asserting the location relationship implies only that the domain has some connection to a Location in time or space. It does not imply that the resource is necessarily at that location at the time when the assertion is made. */
    "location": NamedNode<'http://www.w3.org/ns/locn#location'>;
    /**
     * A number or a sequence of characters that uniquely identifies the locator within the relevant scope(s). The full identification of the locator could include one or more locator designators.
     *     
     */
    "locatorDesignator": NamedNode<'http://www.w3.org/ns/locn#locatorDesignator'>;
    /**
     * Proper noun(s) applied to the real world entity identified by the locator. The locator name could be the name of the property or complex, of the building or part of the building, or it could be the name of a room inside a building. 
     *     
     */
    "locatorName": NamedNode<'http://www.w3.org/ns/locn#locatorName'>;
    /** The Post Office Box number. The domain of locn:poBox is locn:Address. */
    "poBox": NamedNode<'http://www.w3.org/ns/locn#poBox'>;
    /** The post code (a.k.a postal code, zip code etc.). Post codes are common elements in many countries' postal address systems. The domain of locn:postCode is locn:Address. */
    "postCode": NamedNode<'http://www.w3.org/ns/locn#postCode'>;
    /** The key postal division of the address, usually the city. (INSPIRE's definition is "One or more names created and maintained for postal purposes to identify a subdivision of addresses and postal delivery points."). The domain of locn:postName is locn:Address. */
    "postName": NamedNode<'http://www.w3.org/ns/locn#postName'>;
    /** An address component that represents the name of a passage or way through from one location to another. A thoroughfare is not necessarily a road, it might be a waterway or some other feature. The domain of locn:thoroughfare is locn:Address. */
    "thoroughfare": NamedNode<'http://www.w3.org/ns/locn#thoroughfare'>;
}

const builder = namespace("http://www.w3.org/ns/locn#") as any;
export const strict = builder as NamespaceBuilder<keyof Locn> & Locn;
export const loose = builder as NamespaceBuilder & Locn;
