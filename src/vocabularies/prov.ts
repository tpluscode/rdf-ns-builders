import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Prov {
    '': NamedNode<'http://www.w3.org/ns/prov#'>;
    "Accept": NamedNode<'http://www.w3.org/ns/prov#Accept'>;
    "Activity": NamedNode<'http://www.w3.org/ns/prov#Activity'>;
    /** ActivityInfluence provides additional descriptions of an Activity's binary influence upon any other kind of resource. Instances of ActivityInfluence use the prov:activity property to cite the influencing Activity. */
    "ActivityInfluence": NamedNode<'http://www.w3.org/ns/prov#ActivityInfluence'>;
    "Agent": NamedNode<'http://www.w3.org/ns/prov#Agent'>;
    /** AgentInfluence provides additional descriptions of an Agent's binary influence upon any other kind of resource. Instances of AgentInfluence use the prov:agent property to cite the influencing Agent. */
    "AgentInfluence": NamedNode<'http://www.w3.org/ns/prov#AgentInfluence'>;
    /** An instance of prov:Association provides additional descriptions about the binary prov:wasAssociatedWith relation from an prov:Activity to some prov:Agent that had some responsiblity for it. For example, :baking prov:wasAssociatedWith :baker; prov:qualifiedAssociation [ a prov:Association; prov:agent :baker; :foo :bar ]. */
    "Association": NamedNode<'http://www.w3.org/ns/prov#Association'>;
    /** An instance of prov:Attribution provides additional descriptions about the binary prov:wasAttributedTo relation from an prov:Entity to some prov:Agent that had some responsible for it. For example, :cake prov:wasAttributedTo :baker; prov:qualifiedAttribution [ a prov:Attribution; prov:entity :baker; :foo :bar ]. */
    "Attribution": NamedNode<'http://www.w3.org/ns/prov#Attribution'>;
    /** Note that there are kinds of bundles (e.g. handwritten letters, audio recordings, etc.) that are not expressed in PROV-O, but can be still be described by PROV-O. */
    "Bundle": NamedNode<'http://www.w3.org/ns/prov#Bundle'>;
    "Collection": NamedNode<'http://www.w3.org/ns/prov#Collection'>;
    /** An instance of prov:Communication provides additional descriptions about the binary prov:wasInformedBy relation from an informed prov:Activity to the prov:Activity that informed it. For example, :you_jumping_off_bridge prov:wasInformedBy :everyone_else_jumping_off_bridge; prov:qualifiedCommunication [ a prov:Communication; prov:activity :everyone_else_jumping_off_bridge; :foo :bar ]. */
    "Communication": NamedNode<'http://www.w3.org/ns/prov#Communication'>;
    "Contribute": NamedNode<'http://www.w3.org/ns/prov#Contribute'>;
    "Contributor": NamedNode<'http://www.w3.org/ns/prov#Contributor'>;
    "Copyright": NamedNode<'http://www.w3.org/ns/prov#Copyright'>;
    "Create": NamedNode<'http://www.w3.org/ns/prov#Create'>;
    "Creator": NamedNode<'http://www.w3.org/ns/prov#Creator'>;
    /** An instance of prov:Delegation provides additional descriptions about the binary prov:actedOnBehalfOf relation from a performing prov:Agent to some prov:Agent for whom it was performed. For example, :mixing prov:wasAssociatedWith :toddler . :toddler prov:actedOnBehalfOf :mother; prov:qualifiedDelegation [ a prov:Delegation; prov:entity :mother; :foo :bar ]. */
    "Delegation": NamedNode<'http://www.w3.org/ns/prov#Delegation'>;
    /** An instance of prov:Derivation provides additional descriptions about the binary prov:wasDerivedFrom relation from some derived prov:Entity to another prov:Entity from which it was derived. For example, :chewed_bubble_gum prov:wasDerivedFrom :unwrapped_bubble_gum; prov:qualifiedDerivation [ a prov:Derivation; prov:entity :unwrapped_bubble_gum; :foo :bar ]. */
    "Derivation": NamedNode<'http://www.w3.org/ns/prov#Derivation'>;
    /** A given dictionary forms a given structure for its members. A different structure (obtained either by insertion or removal of members) constitutes a different dictionary. */
    "Dictionary": NamedNode<'http://www.w3.org/ns/prov#Dictionary'>;
    /** Type for a generic provenance query service. Mainly for use in RDF provenance query service descriptions, to facilitate discovery in linked data environments. */
    "DirectQueryService": NamedNode<'http://www.w3.org/ns/prov#DirectQueryService'>;
    "EmptyCollection": NamedNode<'http://www.w3.org/ns/prov#EmptyCollection'>;
    "EmptyDictionary": NamedNode<'http://www.w3.org/ns/prov#EmptyDictionary'>;
    /** An instance of prov:End provides additional descriptions about the binary prov:wasEndedBy relation from some ended prov:Activity to an prov:Entity that ended it. For example, :ball_game prov:wasEndedBy :buzzer; prov:qualifiedEnd [ a prov:End; prov:entity :buzzer; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ]. */
    "End": NamedNode<'http://www.w3.org/ns/prov#End'>;
    "Entity": NamedNode<'http://www.w3.org/ns/prov#Entity'>;
    /** EntityInfluence provides additional descriptions of an Entity's binary influence upon any other kind of resource. Instances of EntityInfluence use the prov:entity property to cite the influencing Entity. */
    "EntityInfluence": NamedNode<'http://www.w3.org/ns/prov#EntityInfluence'>;
    /** An instance of prov:Generation provides additional descriptions about the binary prov:wasGeneratedBy relation from a generated prov:Entity to the prov:Activity that generated it. For example, :cake prov:wasGeneratedBy :baking; prov:qualifiedGeneration [ a prov:Generation; prov:activity :baking; :foo :bar ]. */
    "Generation": NamedNode<'http://www.w3.org/ns/prov#Generation'>;
    /** An instance of prov:Influence provides additional descriptions about the binary prov:wasInfluencedBy relation from some influenced Activity, Entity, or Agent to the influencing Activity, Entity, or Agent. For example, :stomach_ache prov:wasInfluencedBy :spoon; prov:qualifiedInfluence [ a prov:Influence; prov:entity :spoon; :foo :bar ] . Because prov:Influence is a broad relation, the more specific relations (Communication, Delegation, End, etc.) should be used when applicable. */
    "Influence": NamedNode<'http://www.w3.org/ns/prov#Influence'>;
    "Insertion": NamedNode<'http://www.w3.org/ns/prov#Insertion'>;
    /** An instantaneous event, or event for short, happens in the world and marks a change in the world, in its activities and in its entities. The term 'event' is commonly used in process algebra with a similar meaning. Events represent communications or interactions; they are assumed to be atomic and instantaneous. */
    "InstantaneousEvent": NamedNode<'http://www.w3.org/ns/prov#InstantaneousEvent'>;
    /** An instance of prov:Invalidation provides additional descriptions about the binary prov:wasInvalidatedBy relation from an invalidated prov:Entity to the prov:Activity that invalidated it. For example, :uncracked_egg prov:wasInvalidatedBy :baking; prov:qualifiedInvalidation [ a prov:Invalidation; prov:activity :baking; :foo :bar ]. */
    "Invalidation": NamedNode<'http://www.w3.org/ns/prov#Invalidation'>;
    "KeyEntityPair": NamedNode<'http://www.w3.org/ns/prov#KeyEntityPair'>;
    "Location": NamedNode<'http://www.w3.org/ns/prov#Location'>;
    "Modify": NamedNode<'http://www.w3.org/ns/prov#Modify'>;
    "Organization": NamedNode<'http://www.w3.org/ns/prov#Organization'>;
    "Person": NamedNode<'http://www.w3.org/ns/prov#Person'>;
    /** There exist no prescriptive requirement on the nature of plans, their representation, the actions or steps they consist of, or their intended goals. Since plans may evolve over time, it may become necessary to track their provenance, so plans themselves are entities. Representing the plan explicitly in the provenance can be useful for various tasks: for example, to validate the execution as represented in the provenance record, to manage expectation failures, or to provide explanations. */
    "Plan": NamedNode<'http://www.w3.org/ns/prov#Plan'>;
    /** An instance of prov:PrimarySource provides additional descriptions about the binary prov:hadPrimarySource relation from some secondary prov:Entity to an earlier, primary prov:Entity. For example, :blog prov:hadPrimarySource :newsArticle; prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :newsArticle; :foo :bar ] . */
    "PrimarySource": NamedNode<'http://www.w3.org/ns/prov#PrimarySource'>;
    "Publish": NamedNode<'http://www.w3.org/ns/prov#Publish'>;
    "Publisher": NamedNode<'http://www.w3.org/ns/prov#Publisher'>;
    /** An instance of prov:Quotation provides additional descriptions about the binary prov:wasQuotedFrom relation from some taken prov:Entity from an earlier, larger prov:Entity. For example, :here_is_looking_at_you_kid prov:wasQuotedFrom :casablanca_script; prov:qualifiedQuotation [ a prov:Quotation; prov:entity :casablanca_script; :foo :bar ]. */
    "Quotation": NamedNode<'http://www.w3.org/ns/prov#Quotation'>;
    "Removal": NamedNode<'http://www.w3.org/ns/prov#Removal'>;
    "Replace": NamedNode<'http://www.w3.org/ns/prov#Replace'>;
    /** An instance of prov:Revision provides additional descriptions about the binary prov:wasRevisionOf relation from some newer prov:Entity to an earlier prov:Entity. For example, :draft_2 prov:wasRevisionOf :draft_1; prov:qualifiedRevision [ a prov:Revision; prov:entity :draft_1; :foo :bar ]. */
    "Revision": NamedNode<'http://www.w3.org/ns/prov#Revision'>;
    "RightsAssignment": NamedNode<'http://www.w3.org/ns/prov#RightsAssignment'>;
    "RightsHolder": NamedNode<'http://www.w3.org/ns/prov#RightsHolder'>;
    "Role": NamedNode<'http://www.w3.org/ns/prov#Role'>;
    /** Type for a generic provenance query service. Mainly for use in RDF provenance query service descriptions, to facilitate discovery in linked data environments. */
    "ServiceDescription": NamedNode<'http://www.w3.org/ns/prov#ServiceDescription'>;
    "SoftwareAgent": NamedNode<'http://www.w3.org/ns/prov#SoftwareAgent'>;
    /** An instance of prov:Start provides additional descriptions about the binary prov:wasStartedBy relation from some started prov:Activity to an prov:Entity that started it. For example, :foot_race prov:wasStartedBy :bang; prov:qualifiedStart [ a prov:Start; prov:entity :bang; :foo :bar; prov:atTime '2012-03-09T08:05:08-05:00'^^xsd:dateTime ] . */
    "Start": NamedNode<'http://www.w3.org/ns/prov#Start'>;
    "Submit": NamedNode<'http://www.w3.org/ns/prov#Submit'>;
    /** An instance of prov:Usage provides additional descriptions about the binary prov:used relation from some prov:Activity to an prov:Entity that it used. For example, :keynote prov:used :podium; prov:qualifiedUsage [ a prov:Usage; prov:entity :podium; :foo :bar ]. */
    "Usage": NamedNode<'http://www.w3.org/ns/prov#Usage'>;
    /** An object property to express the accountability of an agent towards another agent. The subordinate agent acted on behalf of the responsible agent in an actual activity. */
    "actedOnBehalfOf": NamedNode<'http://www.w3.org/ns/prov#actedOnBehalfOf'>;
    "activity": NamedNode<'http://www.w3.org/ns/prov#activity'>;
    "activityOfInfluence": NamedNode<'http://www.w3.org/ns/prov#activityOfInfluence'>;
    "agent": NamedNode<'http://www.w3.org/ns/prov#agent'>;
    "agentOfInfluence": NamedNode<'http://www.w3.org/ns/prov#agentOfInfluence'>;
    "alternateOf": NamedNode<'http://www.w3.org/ns/prov#alternateOf'>;
    "aq": NamedNode<'http://www.w3.org/ns/prov#aq'>;
    /**
     * prov:asInBundle is used to specify which bundle the general entity of a prov:mentionOf property is described.
     *
     * When :x prov:mentionOf :y and :y is described in Bundle :b, the triple :x prov:asInBundle :b is also asserted to cite the Bundle in which :y was described.
     */
    "asInBundle": NamedNode<'http://www.w3.org/ns/prov#asInBundle'>;
    /** The Location of any resource. */
    "atLocation": NamedNode<'http://www.w3.org/ns/prov#atLocation'>;
    /** The time at which an InstantaneousEvent occurred, in the form of xsd:dateTime. */
    "atTime": NamedNode<'http://www.w3.org/ns/prov#atTime'>;
    /** Classify prov-o terms into three categories, including 'starting-point', 'qualifed', and 'extended'. This classification is used by the prov-o html document to gently introduce prov-o terms to its users. */
    "category": NamedNode<'http://www.w3.org/ns/prov#category'>;
    /** Classify prov-o terms into six components according to prov-dm, including 'agents-responsibility', 'alternate', 'annotations', 'collections', 'derivations', and 'entities-activities'. This classification is used so that readers of prov-o specification can find its correspondence with the prov-dm specification. */
    "component": NamedNode<'http://www.w3.org/ns/prov#component'>;
    /** A reference to the principal section of the PROV-CONSTRAINTS document that describes this concept. */
    "constraints": NamedNode<'http://www.w3.org/ns/prov#constraints'>;
    "contributed": NamedNode<'http://www.w3.org/ns/prov#contributed'>;
    /** A definition quoted from PROV-DM or PROV-CONSTRAINTS that describes the concept expressed with this OWL term. */
    "definition": NamedNode<'http://www.w3.org/ns/prov#definition'>;
    "derivedByInsertionFrom": NamedNode<'http://www.w3.org/ns/prov#derivedByInsertionFrom'>;
    "derivedByRemovalFrom": NamedNode<'http://www.w3.org/ns/prov#derivedByRemovalFrom'>;
    /** relates a generic provenance query service resource (type prov:ServiceDescription) to a specific query service description (e.g. a prov:DirectQueryService or a sd:Service). */
    "describesService": NamedNode<'http://www.w3.org/ns/prov#describesService'>;
    "dictionary": NamedNode<'http://www.w3.org/ns/prov#dictionary'>;
    /** A reference to the principal section of the PROV-DM document that describes this concept. */
    "dm": NamedNode<'http://www.w3.org/ns/prov#dm'>;
    /** A note by the OWL development team about how this term expresses the PROV-DM concept, or how it should be used in context of semantic web or linked data. */
    "editorialNote": NamedNode<'http://www.w3.org/ns/prov#editorialNote'>;
    /** When the prov-o term does not have a definition drawn from prov-dm, and the prov-o editor provides one. */
    "editorsDefinition": NamedNode<'http://www.w3.org/ns/prov#editorsDefinition'>;
    "ended": NamedNode<'http://www.w3.org/ns/prov#ended'>;
    /** The time at which an activity ended. See also prov:startedAtTime. */
    "endedAtTime": NamedNode<'http://www.w3.org/ns/prov#endedAtTime'>;
    "entity": NamedNode<'http://www.w3.org/ns/prov#entity'>;
    "entityOfInfluence": NamedNode<'http://www.w3.org/ns/prov#entityOfInfluence'>;
    "generalizationOf": NamedNode<'http://www.w3.org/ns/prov#generalizationOf'>;
    "generated": NamedNode<'http://www.w3.org/ns/prov#generated'>;
    "generatedAsDerivation": NamedNode<'http://www.w3.org/ns/prov#generatedAsDerivation'>;
    /** The time at which an entity was completely created and is available for use. */
    "generatedAtTime": NamedNode<'http://www.w3.org/ns/prov#generatedAtTime'>;
    /** The _optional_ Activity of an Influence, which used, generated, invalidated, or was the responsibility of some Entity. This property is _not_ used by ActivityInfluence (use prov:activity instead). */
    "hadActivity": NamedNode<'http://www.w3.org/ns/prov#hadActivity'>;
    "hadDelegate": NamedNode<'http://www.w3.org/ns/prov#hadDelegate'>;
    "hadDerivation": NamedNode<'http://www.w3.org/ns/prov#hadDerivation'>;
    "hadDictionaryMember": NamedNode<'http://www.w3.org/ns/prov#hadDictionaryMember'>;
    /** The _optional_ Generation involved in an Entity's Derivation. */
    "hadGeneration": NamedNode<'http://www.w3.org/ns/prov#hadGeneration'>;
    "hadInfluence": NamedNode<'http://www.w3.org/ns/prov#hadInfluence'>;
    "hadMember": NamedNode<'http://www.w3.org/ns/prov#hadMember'>;
    /** The _optional_ Plan adopted by an Agent in Association with some Activity. Plan specifications are out of the scope of this specification. */
    "hadPlan": NamedNode<'http://www.w3.org/ns/prov#hadPlan'>;
    "hadPrimarySource": NamedNode<'http://www.w3.org/ns/prov#hadPrimarySource'>;
    "hadRevision": NamedNode<'http://www.w3.org/ns/prov#hadRevision'>;
    /** The _optional_ Role that an Entity assumed in the context of an Activity. For example, :baking prov:used :spoon; prov:qualified [ a prov:Usage; prov:entity :spoon; prov:hadRole roles:mixing_implement ]. */
    "hadRole": NamedNode<'http://www.w3.org/ns/prov#hadRole'>;
    /** The _optional_ Usage involved in an Entity's Derivation. */
    "hadUsage": NamedNode<'http://www.w3.org/ns/prov#hadUsage'>;
    /** Indicates anchor URI for a potentially dynamic resource instance. */
    "has_anchor": NamedNode<'http://www.w3.org/ns/prov#has_anchor'>;
    /** Indicates a provenance-URI for a resource; the resource identified by this property presents a provenance record about its subject or anchor resource. */
    "has_provenance": NamedNode<'http://www.w3.org/ns/prov#has_provenance'>;
    /** Indicates a provenance query service that can access provenance related to its subject or anchor resource. */
    "has_query_service": NamedNode<'http://www.w3.org/ns/prov#has_query_service'>;
    "influenced": NamedNode<'http://www.w3.org/ns/prov#influenced'>;
    /** Subproperties of prov:influencer are used to cite the object of an unqualified PROV-O triple whose predicate is a subproperty of prov:wasInfluencedBy (e.g. prov:used, prov:wasGeneratedBy). prov:influencer is used much like rdf:object is used. */
    "influencer": NamedNode<'http://www.w3.org/ns/prov#influencer'>;
    "informed": NamedNode<'http://www.w3.org/ns/prov#informed'>;
    "insertedKeyEntityPair": NamedNode<'http://www.w3.org/ns/prov#insertedKeyEntityPair'>;
    "invalidated": NamedNode<'http://www.w3.org/ns/prov#invalidated'>;
    /** The time at which an entity was invalidated (i.e., no longer usable). */
    "invalidatedAtTime": NamedNode<'http://www.w3.org/ns/prov#invalidatedAtTime'>;
    /** PROV-O does not define all property inverses. The directionalities defined in PROV-O should be given preference over those not defined. However, if users wish to name the inverse of a PROV-O property, the local name given by prov:inverse should be used. */
    "inverse": NamedNode<'http://www.w3.org/ns/prov#inverse'>;
    "locationOf": NamedNode<'http://www.w3.org/ns/prov#locationOf'>;
    /**
     * prov:mentionOf is used to specialize an entity as described in another bundle. It is to be used in conjuction with prov:asInBundle.
     *
     * prov:asInBundle is used to cite the Bundle in which the generalization was mentioned.
     */
    "mentionOf": NamedNode<'http://www.w3.org/ns/prov#mentionOf'>;
    /** A reference to the principal section of the PROV-DM document that describes this concept. */
    "n": NamedNode<'http://www.w3.org/ns/prov#n'>;
    /** The position that this OWL term should be listed within documentation. The scope of the documentation (e.g., among all terms, among terms within a prov:category, among properties applying to a particular class, etc.) is unspecified. */
    "order": NamedNode<'http://www.w3.org/ns/prov#order'>;
    "pairEntity": NamedNode<'http://www.w3.org/ns/prov#pairEntity'>;
    "pairKey": NamedNode<'http://www.w3.org/ns/prov#pairKey'>;
    /** Relates a resource to a provenance pingback service that may receive additional provenance links about the resource. */
    "pingback": NamedNode<'http://www.w3.org/ns/prov#pingback'>;
    /** Relates a provenance service to a URI template string for constructing provenance-URIs. */
    "provenanceUriTemplate": NamedNode<'http://www.w3.org/ns/prov#provenanceUriTemplate'>;
    /** If this Activity prov:wasAssociatedWith Agent :ag, then it can qualify the Association using prov:qualifiedAssociation [ a prov:Association;  prov:agent :ag; :foo :bar ]. */
    "qualifiedAssociation": NamedNode<'http://www.w3.org/ns/prov#qualifiedAssociation'>;
    "qualifiedAssociationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedAssociationOf'>;
    /** If this Entity prov:wasAttributedTo Agent :ag, then it can qualify how it was influenced using prov:qualifiedAttribution [ a prov:Attribution;  prov:agent :ag; :foo :bar ]. */
    "qualifiedAttribution": NamedNode<'http://www.w3.org/ns/prov#qualifiedAttribution'>;
    "qualifiedAttributionOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedAttributionOf'>;
    /** If this Activity prov:wasInformedBy Activity :a, then it can qualify how it was influenced using prov:qualifiedCommunication [ a prov:Communication;  prov:activity :a; :foo :bar ]. */
    "qualifiedCommunication": NamedNode<'http://www.w3.org/ns/prov#qualifiedCommunication'>;
    "qualifiedCommunicationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedCommunicationOf'>;
    /** If this Agent prov:actedOnBehalfOf Agent :ag, then it can qualify how with prov:qualifiedResponsibility [ a prov:Responsibility;  prov:agent :ag; :foo :bar ]. */
    "qualifiedDelegation": NamedNode<'http://www.w3.org/ns/prov#qualifiedDelegation'>;
    "qualifiedDelegationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedDelegationOf'>;
    /** If this Entity prov:wasDerivedFrom Entity :e, then it can qualify how it was derived using prov:qualifiedDerivation [ a prov:Derivation;  prov:entity :e; :foo :bar ]. */
    "qualifiedDerivation": NamedNode<'http://www.w3.org/ns/prov#qualifiedDerivation'>;
    "qualifiedDerivationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedDerivationOf'>;
    /** If this Activity prov:wasEndedBy Entity :e1, then it can qualify how it was ended using prov:qualifiedEnd [ a prov:End;  prov:entity :e1; :foo :bar ]. */
    "qualifiedEnd": NamedNode<'http://www.w3.org/ns/prov#qualifiedEnd'>;
    "qualifiedEndOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedEndOf'>;
    /**
     * This annotation property links a subproperty of prov:wasInfluencedBy with the subclass of prov:Influence and the qualifying property that are used to qualify it. 
     *
     * Example annotation:
     *
     *     prov:wasGeneratedBy prov:qualifiedForm prov:qualifiedGeneration, prov:Generation .
     *
     * Then this unqualified assertion:
     *
     *     :entity1 prov:wasGeneratedBy :activity1 .
     *
     * can be qualified by adding:
     *
     *    :entity1 prov:qualifiedGeneration :entity1Gen .
     *    :entity1Gen 
     *        a prov:Generation, prov:Influence;
     *        prov:activity :activity1;
     *        :customValue 1337 .
     *
     * Note how the value of the unqualified influence (prov:wasGeneratedBy :activity1) is mirrored as the value of the prov:activity (or prov:entity, or prov:agent) property on the influence class.
     */
    "qualifiedForm": NamedNode<'http://www.w3.org/ns/prov#qualifiedForm'>;
    /** If this Activity prov:generated Entity :e, then it can qualify how it performed the Generation using prov:qualifiedGeneration [ a prov:Generation;  prov:entity :e; :foo :bar ]. */
    "qualifiedGeneration": NamedNode<'http://www.w3.org/ns/prov#qualifiedGeneration'>;
    "qualifiedGenerationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedGenerationOf'>;
    /** Because prov:qualifiedInfluence is a broad relation, the more specific relations (qualifiedCommunication, qualifiedDelegation, qualifiedEnd, etc.) should be used when applicable. */
    "qualifiedInfluence": NamedNode<'http://www.w3.org/ns/prov#qualifiedInfluence'>;
    "qualifiedInfluenceOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedInfluenceOf'>;
    "qualifiedInsertion": NamedNode<'http://www.w3.org/ns/prov#qualifiedInsertion'>;
    /** If this Entity prov:wasInvalidatedBy Activity :a, then it can qualify how it was invalidated using prov:qualifiedInvalidation [ a prov:Invalidation;  prov:activity :a; :foo :bar ]. */
    "qualifiedInvalidation": NamedNode<'http://www.w3.org/ns/prov#qualifiedInvalidation'>;
    "qualifiedInvalidationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedInvalidationOf'>;
    /** If this Entity prov:hadPrimarySource Entity :e, then it can qualify how using prov:qualifiedPrimarySource [ a prov:PrimarySource; prov:entity :e; :foo :bar ]. */
    "qualifiedPrimarySource": NamedNode<'http://www.w3.org/ns/prov#qualifiedPrimarySource'>;
    /** If this Entity prov:wasQuotedFrom Entity :e, then it can qualify how using prov:qualifiedQuotation [ a prov:Quotation;  prov:entity :e; :foo :bar ]. */
    "qualifiedQuotation": NamedNode<'http://www.w3.org/ns/prov#qualifiedQuotation'>;
    "qualifiedQuotationOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedQuotationOf'>;
    "qualifiedRemoval": NamedNode<'http://www.w3.org/ns/prov#qualifiedRemoval'>;
    /** If this Entity prov:wasRevisionOf Entity :e, then it can qualify how it was revised using prov:qualifiedRevision [ a prov:Revision;  prov:entity :e; :foo :bar ]. */
    "qualifiedRevision": NamedNode<'http://www.w3.org/ns/prov#qualifiedRevision'>;
    "qualifiedSourceOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedSourceOf'>;
    /** If this Activity prov:wasStartedBy Entity :e1, then it can qualify how it was started using prov:qualifiedStart [ a prov:Start;  prov:entity :e1; :foo :bar ]. */
    "qualifiedStart": NamedNode<'http://www.w3.org/ns/prov#qualifiedStart'>;
    "qualifiedStartOf": NamedNode<'http://www.w3.org/ns/prov#qualifiedStartOf'>;
    /** If this Activity prov:used Entity :e, then it can qualify how it used it using prov:qualifiedUsage [ a prov:Usage; prov:entity :e; :foo :bar ]. */
    "qualifiedUsage": NamedNode<'http://www.w3.org/ns/prov#qualifiedUsage'>;
    "qualifiedUsingActivity": NamedNode<'http://www.w3.org/ns/prov#qualifiedUsingActivity'>;
    "quotedAs": NamedNode<'http://www.w3.org/ns/prov#quotedAs'>;
    "removedKey": NamedNode<'http://www.w3.org/ns/prov#removedKey'>;
    "revisedEntity": NamedNode<'http://www.w3.org/ns/prov#revisedEntity'>;
    "sharesDefinitionWith": NamedNode<'http://www.w3.org/ns/prov#sharesDefinitionWith'>;
    "specializationOf": NamedNode<'http://www.w3.org/ns/prov#specializationOf'>;
    "started": NamedNode<'http://www.w3.org/ns/prov#started'>;
    /** The time at which an activity started. See also prov:endedAtTime. */
    "startedAtTime": NamedNode<'http://www.w3.org/ns/prov#startedAtTime'>;
    "todo": NamedNode<'http://www.w3.org/ns/prov#todo'>;
    /** Classes and properties used to qualify relationships are annotated with prov:unqualifiedForm to indicate the property used to assert an unqualified provenance relation. */
    "unqualifiedForm": NamedNode<'http://www.w3.org/ns/prov#unqualifiedForm'>;
    /** A prov:Entity that was used by this prov:Activity. For example, :baking prov:used :spoon, :egg, :oven . */
    "used": NamedNode<'http://www.w3.org/ns/prov#used'>;
    "value": NamedNode<'http://www.w3.org/ns/prov#value'>;
    "wasActivityOfInfluence": NamedNode<'http://www.w3.org/ns/prov#wasActivityOfInfluence'>;
    "wasAssociateFor": NamedNode<'http://www.w3.org/ns/prov#wasAssociateFor'>;
    /** An prov:Agent that had some (unspecified) responsibility for the occurrence of this prov:Activity. */
    "wasAssociatedWith": NamedNode<'http://www.w3.org/ns/prov#wasAssociatedWith'>;
    /** Attribution is the ascribing of an entity to an agent. */
    "wasAttributedTo": NamedNode<'http://www.w3.org/ns/prov#wasAttributedTo'>;
    /** The more specific subproperties of prov:wasDerivedFrom (i.e., prov:wasQuotedFrom, prov:wasRevisionOf, prov:hadPrimarySource) should be used when applicable. */
    "wasDerivedFrom": NamedNode<'http://www.w3.org/ns/prov#wasDerivedFrom'>;
    /** End is when an activity is deemed to have ended. An end may refer to an entity, known as trigger, that terminated the activity. */
    "wasEndedBy": NamedNode<'http://www.w3.org/ns/prov#wasEndedBy'>;
    "wasGeneratedBy": NamedNode<'http://www.w3.org/ns/prov#wasGeneratedBy'>;
    /** Because prov:wasInfluencedBy is a broad relation, its more specific subproperties (e.g. prov:wasInformedBy, prov:actedOnBehalfOf, prov:wasEndedBy, etc.) should be used when applicable. */
    "wasInfluencedBy": NamedNode<'http://www.w3.org/ns/prov#wasInfluencedBy'>;
    /** An activity a2 is dependent on or informed by another activity a1, by way of some unspecified entity that is generated by a1 and used by a2. */
    "wasInformedBy": NamedNode<'http://www.w3.org/ns/prov#wasInformedBy'>;
    "wasInvalidatedBy": NamedNode<'http://www.w3.org/ns/prov#wasInvalidatedBy'>;
    "wasMemberOf": NamedNode<'http://www.w3.org/ns/prov#wasMemberOf'>;
    "wasPlanOf": NamedNode<'http://www.w3.org/ns/prov#wasPlanOf'>;
    "wasPrimarySourceOf": NamedNode<'http://www.w3.org/ns/prov#wasPrimarySourceOf'>;
    /** An entity is derived from an original entity by copying, or 'quoting', some or all of it. */
    "wasQuotedFrom": NamedNode<'http://www.w3.org/ns/prov#wasQuotedFrom'>;
    /** A revision is a derivation that revises an entity into a revised version. */
    "wasRevisionOf": NamedNode<'http://www.w3.org/ns/prov#wasRevisionOf'>;
    "wasRoleIn": NamedNode<'http://www.w3.org/ns/prov#wasRoleIn'>;
    /** Start is when an activity is deemed to have started. A start may refer to an entity, known as trigger, that initiated the activity. */
    "wasStartedBy": NamedNode<'http://www.w3.org/ns/prov#wasStartedBy'>;
    "wasUsedBy": NamedNode<'http://www.w3.org/ns/prov#wasUsedBy'>;
    "wasUsedInDerivation": NamedNode<'http://www.w3.org/ns/prov#wasUsedInDerivation'>;
}

const builder = namespace("http://www.w3.org/ns/prov#") as any;
export const strict = builder as NamespaceBuilder<keyof Prov> & Prov;
export const loose = builder as NamespaceBuilder & Prov;
