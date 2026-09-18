import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface La {
    '': NamedNode<'https://linked.art/ns/terms/'>;
    /**
     * From an ur- digital object to a single concrete representation.
     *         A locator as opposed to an identifier, similar to the approximated_by for Place.
     */
    "access_point": NamedNode<'https://linked.art/ns/terms/access_point'>;
    "added_member_by": NamedNode<'https://linked.art/ns/terms/added_member_by'>;
    "added_member": NamedNode<'https://linked.art/ns/terms/added_member'>;
    "added_to_by": NamedNode<'https://linked.art/ns/terms/added_to_by'>;
    "added_to": NamedNode<'https://linked.art/ns/terms/added_to'>;
    /** The addition of some entity to a Set */
    "Addition": NamedNode<'https://linked.art/ns/terms/Addition'>;
    "contains_members_of": NamedNode<'https://linked.art/ns/terms/contains_members_of'>;
    /** Inverse of Current Permanent Custodian */
    "current_permanent_custodian_of": NamedNode<'https://linked.art/ns/terms/current_permanent_custodian_of'>;
    /** This property records the normal custodian of the object at the time when the assertion was made. The object may have a temporary custodian, for example when it is loaned to another organization for an exhibition or between departments for conservation or storage. */
    "current_permanent_custodian": NamedNode<'https://linked.art/ns/terms/current_permanent_custodian'>;
    "digitally_available_via": NamedNode<'https://linked.art/ns/terms/digitally_available_via'>;
    "digitally_carried_by": NamedNode<'https://linked.art/ns/terms/digitally_carried_by'>;
    "digitally_carries": NamedNode<'https://linked.art/ns/terms/digitally_carries'>;
    "digitally_makes_available": NamedNode<'https://linked.art/ns/terms/digitally_makes_available'>;
    "digitally_shown_by": NamedNode<'https://linked.art/ns/terms/digitally_shown_by'>;
    "digitally_shows": NamedNode<'https://linked.art/ns/terms/digitally_shows'>;
    "DigitalService": NamedNode<'https://linked.art/ns/terms/DigitalService'>;
    /** Similar to skos:exactMatch, the referenced entity is an equivalent instance to the referencing entity. This would not have the same inference issue as exactMatch, whereby the domain and range become skos:Concept, which is equivalent to E55_Type ... and thus everything becomes a Type. */
    "equivalent": NamedNode<'https://linked.art/ns/terms/equivalent'>;
    /** The RightAcquisition that established this Right */
    "established_by": NamedNode<'https://linked.art/ns/terms/established_by'>;
    /** The right established by a RightAcquisition */
    "establishes": NamedNode<'https://linked.art/ns/terms/establishes'>;
    "has_member": NamedNode<'https://linked.art/ns/terms/has_member'>;
    /** The RightAcquisition that invalidated this Right */
    "invalidated_by": NamedNode<'https://linked.art/ns/terms/invalidated_by'>;
    /** The right which is invalidated by a RightAcquisition */
    "invalidates": NamedNode<'https://linked.art/ns/terms/invalidates'>;
    "member_of": NamedNode<'https://linked.art/ns/terms/member_of'>;
    "members_contained_by": NamedNode<'https://linked.art/ns/terms/members_contained_by'>;
    "members_exemplified_by": NamedNode<'https://linked.art/ns/terms/members_exemplified_by'>;
    /** The amount paid */
    "paid_amount": NamedNode<'https://linked.art/ns/terms/paid_amount'>;
    /** Who the payment came from */
    "paid_from": NamedNode<'https://linked.art/ns/terms/paid_from'>;
    /** Who the payment went to */
    "paid_to": NamedNode<'https://linked.art/ns/terms/paid_to'>;
    /** Payment of Money */
    "Payment": NamedNode<'https://linked.art/ns/terms/Payment'>;
    /** Record dot one properties via Attribute Assignments */
    "property_classified_as": NamedNode<'https://linked.art/ns/terms/property_classified_as'>;
    /** The removal of some entity from a Set */
    "Removal": NamedNode<'https://linked.art/ns/terms/Removal'>;
    "removed_from_by": NamedNode<'https://linked.art/ns/terms/removed_from_by'>;
    "removed_from": NamedNode<'https://linked.art/ns/terms/removed_from'>;
    "removed_member_by": NamedNode<'https://linked.art/ns/terms/removed_member_by'>;
    "removed_member": NamedNode<'https://linked.art/ns/terms/removed_member'>;
    /** The acquiring or establishment of a particular E30 Right over some entity */
    "RightAcquisition": NamedNode<'https://linked.art/ns/terms/RightAcquisition'>;
    "Set": NamedNode<'https://linked.art/ns/terms/Set'>;
    /** Abstract transferral of something between entities */
    "Transfer": NamedNode<'https://linked.art/ns/terms/Transfer'>;
    /** Where or with whom did it start */
    "transferred_from": NamedNode<'https://linked.art/ns/terms/transferred_from'>;
    /** Where or with whom did it end */
    "transferred_to": NamedNode<'https://linked.art/ns/terms/transferred_to'>;
    /** What was transferred */
    "transferred": NamedNode<'https://linked.art/ns/terms/transferred'>;
}

const builder = namespace("https://linked.art/ns/terms/") as any;
export const strict = builder as NamespaceBuilder<keyof La> & La;
export const loose = builder as NamespaceBuilder & La;
