import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface La {
    '': NamedNode<'https://linked.art/ns/terms/'>;
    /** The addition of some entity to a Set */
    "Addition": NamedNode<'https://linked.art/ns/terms/Addition'>;
    "DigitalService": NamedNode<'https://linked.art/ns/terms/DigitalService'>;
    /** Payment of Money */
    "Payment": NamedNode<'https://linked.art/ns/terms/Payment'>;
    /**  The period of time during which an entity is in a certain phase or state of its existence.  The phase can be physical (the box is open, the painting is 14 ft wide) or social (the sculpture is owned by some Actor, the building is used as a castle). */
    "Phase": NamedNode<'https://linked.art/ns/terms/Phase'>;
    /** The removal of some entity from a Set */
    "Removal": NamedNode<'https://linked.art/ns/terms/Removal'>;
    /** The acquiring or establishment of a particular E30 Right over some entity */
    "RightAcquisition": NamedNode<'https://linked.art/ns/terms/RightAcquisition'>;
    "Set": NamedNode<'https://linked.art/ns/terms/Set'>;
    /**
     * From an ur- digital object to a single concrete representation.
     *         A locator as opposed to an identifier, similar to the approximated_by for Place.
     */
    "access_point": NamedNode<'https://linked.art/ns/terms/access_point'>;
    "added_member": NamedNode<'https://linked.art/ns/terms/added_member'>;
    "added_member_by": NamedNode<'https://linked.art/ns/terms/added_member_by'>;
    "added_to": NamedNode<'https://linked.art/ns/terms/added_to'>;
    "added_to_by": NamedNode<'https://linked.art/ns/terms/added_to_by'>;
    /** This property records the normal custodian of the object at the time when the assertion was made. The object may have a temporary custodian, for example when it is loaned to another organization for an exhibition or between departments for conservation or storage. */
    "current_permanent_custodian": NamedNode<'https://linked.art/ns/terms/current_permanent_custodian'>;
    /** Inverse of Current Permanent Custodian */
    "current_permanent_custodian_of": NamedNode<'https://linked.art/ns/terms/current_permanent_custodian_of'>;
    "digitally_available_via": NamedNode<'https://linked.art/ns/terms/digitally_available_via'>;
    "digitally_makes_available": NamedNode<'https://linked.art/ns/terms/digitally_makes_available'>;
    "digitally_carried_by": NamedNode<'https://linked.art/ns/terms/digitally_carried_by'>;
    "digitally_carries": NamedNode<'https://linked.art/ns/terms/digitally_carries'>;
    "digitally_shown_by": NamedNode<'https://linked.art/ns/terms/digitally_shown_by'>;
    "digitally_shows": NamedNode<'https://linked.art/ns/terms/digitally_shows'>;
    /** Similar to skos:exactMatch, the referenced entity is an equivalent instance to the referencing entity. This would not have the same inference issue as exactMatch, whereby the domain and range become skos:Concept, which is equivalent to E55_Type ... and thus everything becomes a Type. */
    "equivalent": NamedNode<'https://linked.art/ns/terms/equivalent'>;
    /** The RightAcquisition that established this Right */
    "established_by": NamedNode<'https://linked.art/ns/terms/established_by'>;
    /** The right established by a RightAcquisition */
    "establishes": NamedNode<'https://linked.art/ns/terms/establishes'>;
    "has_member": NamedNode<'https://linked.art/ns/terms/has_member'>;
    "member_of": NamedNode<'https://linked.art/ns/terms/member_of'>;
    /**  The relationship between an E1 Entity and one of its Phases. A painting that had two sizes, 16 feet and 14 feet wide, would have two Phases, one for each width. */
    "has_phase": NamedNode<'https://linked.art/ns/terms/has_phase'>;
    /**  The inverse of la:has_phase. */
    "phase_of": NamedNode<'https://linked.art/ns/terms/phase_of'>;
    /**  Events can start or initiate Phases, such as the Modification of a painting to trim it from 16 feet to 14 ft would initiate a 14 feet phase, or the Acquisition of a sculpture by some Actor would initiate that Actor's ownership phase. This relationship links the initiating Event to the Phase. */
    "initiated": NamedNode<'https://linked.art/ns/terms/initiated'>;
    /**  The inverse of la:initiated. */
    "initiated_by": NamedNode<'https://linked.art/ns/terms/initiated_by'>;
    /** The RightAcquisition that invalidated this Right */
    "invalidated_by": NamedNode<'https://linked.art/ns/terms/invalidated_by'>;
    /** The right which is invalidated by a RightAcquisition */
    "invalidates": NamedNode<'https://linked.art/ns/terms/invalidates'>;
    /** The amount paid. */
    "paid_amount": NamedNode<'https://linked.art/ns/terms/paid_amount'>;
    /** Who the payment came from */
    "paid_from": NamedNode<'https://linked.art/ns/terms/paid_from'>;
    /** Who the payment went to */
    "paid_to": NamedNode<'https://linked.art/ns/terms/paid_to'>;
    /** Record dot one properties via Attribute Assignments */
    "property_classified_as": NamedNode<'https://linked.art/ns/terms/property_classified_as'>;
    /**  An E1 Entity that defines the nature of the Phase. For an ownership phase, this would be the owning E39 Actor. For the size of painting phase, this would be the E54 Dimension that describes the size. */
    "related_entity": NamedNode<'https://linked.art/ns/terms/related_entity'>;
    /**  Events can end or terminate Phases, such as the Modification of a painting to trim it from 16 feet to 14 ft would end the 16 feet phase, or the Acquisition of a sculpture by some Actor would end the seller's ownership. This relationship links the terminating Event to the Phase. */
    "terminated": NamedNode<'https://linked.art/ns/terms/terminated'>;
    /**  The inverse of la:related_entity. */
    "related_entity_of": NamedNode<'https://linked.art/ns/terms/related_entity_of'>;
    /**  The relationship between the Entity that the phase is of, and the defining entity. For an ownership phase, this would be P52 has current owner. For the size of painting phase, this would be P43 has dimension. */
    "relationship": NamedNode<'https://linked.art/ns/terms/relationship'>;
    "removed_from": NamedNode<'https://linked.art/ns/terms/removed_from'>;
    "removed_from_by": NamedNode<'https://linked.art/ns/terms/removed_from_by'>;
    "removed_member": NamedNode<'https://linked.art/ns/terms/removed_member'>;
    "removed_member_by": NamedNode<'https://linked.art/ns/terms/removed_member_by'>;
    /**  The inverse of la:terminated. */
    "terminated_by": NamedNode<'https://linked.art/ns/terms/terminated_by'>;
    "has_state": NamedNode<'https://linked.art/ns/terms/has_state'>;
}

const builder = namespace("https://linked.art/ns/terms/") as any;
export const strict = builder as NamespaceBuilder<keyof La> & La;
export const loose = builder as NamespaceBuilder & La;
