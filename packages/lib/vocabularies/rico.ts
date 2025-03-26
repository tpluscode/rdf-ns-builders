import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Rico {
    '': NamedNode<'https://www.ica.org/standards/RiC/ontology#'>;
    /**
     * Information on the anticipated accession(s) to the Record
     *             Set.
     */
    "accruals": NamedNode<'https://www.ica.org/standards/RiC/ontology#accruals'>;
    /** Information on the status of possible accruals */
    "accrualsStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#accrualsStatus'>;
    /**
     * Connects an AccumulationRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "accumulationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#accumulationRelation_role'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Agent, when the Record Resource or Instantiation is or was accumulated by the
     *             Agent, be it intentionally (collecting it) or not (receiving it in the course of its
     *             activities). The Record Resource(s) or Instantiation(s) is the source of the Relation,
     *             and the Agent(s) is the target.
     */
    "AccumulationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AccumulationRelation'>;
    /** The doing of something for some human purpose. */
    "Activity": NamedNode<'https://www.ica.org/standards/RiC/ontology#Activity'>;
    /**
     * Connects an ActivityDocumentationRelation to itself. It is a
     *             property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "activityDocumentationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityDocumentationRelation_role'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Activity, when the Record Resource or Instantiation results from the Activity.
     *             The Record Resource(s) or Instantiation(s) is the source of the Relation, and the
     *             Activity(-ies) is the target.
     */
    "ActivityDocumentationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ActivityDocumentationRelation'>;
    /**
     * Connects an Activity to an Agent Temporal Relation (when the
     *             Activity is transferred from an Agent to another one) or a Mandate Relation (the Mandate
     *             assigns the Activity to the Agent or defines it).
     */
    "activityIsContextOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityIsContextOfRelation'>;
    /** Categorization of an Activity. */
    "ActivityType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ActivityType'>;
    /**
     * Connects an Event to a Thing on which the Event has or had some
     *             significant impact.
     */
    "affectsOrAffected": NamedNode<'https://www.ica.org/standards/RiC/ontology#affectsOrAffected'>;
    /**
     * A Person, or Group, or an entity created by a Person or Group
     *             (Mechanism), or a Position, that acts in the world.
     */
    "Agent": NamedNode<'https://www.ica.org/standards/RiC/ontology#Agent'>;
    /**
     * Connects an AgentControlRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "agentControlRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentControlRelation_role'>;
    /**
     * Connects at least one Agent, to at least another Agent, when the
     *             first one(s) control(s) or controlled in a way the activities of the second one(s). The
     *             Relation is oriented from the controlling agent to the controlled one: the controlling
     *             Agent(s) is the source of the Relation, and the controlled Agent(s) is the
     *             target.
     */
    "AgentControlRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentControlRelation'>;
    /**
     * Inverse of 'is or was location of agent' object
     *             property.
     */
    "agentHasOrHadLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentHasOrHadLocation'>;
    /**
     * Connects an AgentHierarchicalRelation to itself. It is a
     *             property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "agentHierarchicalRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentHierarchicalRelation_role'>;
    /**
     * Connects at least one Agent to at least another Agent, when the
     *             first one is or was hierarchically superior to the second one. The Relation is oriented
     *             towards the 'bottom' of the hierarchical tree: the superior Agent(s) is the source of
     *             the Relation, and the inferior Agent(s) is the target.
     */
    "AgentHierarchicalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentHierarchicalRelation'>;
    /**
     * A label, title or term designating an Agent in order to make it
     *             distinguishable from other similar entities.
     */
    "AgentName": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentName'>;
    /**
     * Connects an AgentTemporalRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "agentTemporalRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentTemporalRelation_role'>;
    /**
     * Connects at least one Agent to at least another Agent that
     *             succeeds it chronologically for, for instance, fullfilling some functions or performing
     *             some activities. The Relation is oriented chronologically, from the predecessor to the
     *             successor: the predecessor Agent(s) is the source of the Relation, and the successor
     *             Agent(s) is the target.
     */
    "AgentTemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentTemporalRelation'>;
    /**
     * Connects an AgentToAgentRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "agentToAgentRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentToAgentRelation_role'>;
    /**
     * Connects at least two Agents. This Relation is a generic, not
     *             oriented one.
     */
    "AgentToAgentRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentToAgentRelation'>;
    /** Reference system used for altitude */
    "altimetricSystem": NamedNode<'https://www.ica.org/standards/RiC/ontology#altimetricSystem'>;
    /**
     * The height of a Place above a reference level, especially above
     *             sea level.
     */
    "altitude": NamedNode<'https://www.ica.org/standards/RiC/ontology#altitude'>;
    /**
     * A concept of any kind that is used for designating an Entity and
     *             referring to it.
     */
    "Appellation": NamedNode<'https://www.ica.org/standards/RiC/ontology#Appellation'>;
    /**
     * Connects an AppellationRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "appellationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#appellationRelation_role'>;
    /**
     * Connects an Appellation and at least one Thing that the
     *             Appellation designates or designated. The Appellation is the source of the Relation and
     *             the Thing(s) is the target.
     */
    "AppellationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AppellationRelation'>;
    /**
     * Connects an Agent Temporal Relation or Mandate Relation, to an
     *             Activity that is, either transferred from an Agent to another one, or assigned by a
     *             Mandate to an Agent.
     */
    "asConcernsActivity": NamedNode<'https://www.ica.org/standards/RiC/ontology#asConcernsActivity'>;
    /**
     * Description of the evidence that a Record Resource or
     *             Instantiation is what it purports to be, was created or sent by the said Agent at the
     *             said time, and has not been tampered with, corrupted, or forged. 
     */
    "authenticityNote": NamedNode<'https://www.ica.org/standards/RiC/ontology#authenticityNote'>;
    /**
     * Connects an AuthorityRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "authorityRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorityRelation_role'>;
    /**
     * Connects at least one Agent and at least one Thing over which
     *             the Agent has or had some authority. The Agent(s) is the source of the relation, and the
     *             Thing(s) is the target.
     */
    "AuthorityRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AuthorityRelation'>;
    /** Inverse of 'authorizes' object property */
    "authorizedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizedBy'>;
    /**
     * Connects a Mandate to the Agent that the Mandate gives the
     *             authority or competencies to act.
     */
    "authorizes": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizes'>;
    /**
     * Connects a Mandate Relation to an Agent that assigns the
     *             Mandate.
     */
    "authorizingAgent": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizingAgent'>;
    /**
     * Information on a Mandate that authorizes an Agent to perform an
     *             Activity.
     */
    "authorizingMandate": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizingMandate'>;
    /**
     * Connects an AuthorshipRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "authorshipRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorshipRelation_role'>;
    /**
     * Connects at least one Record to at least one Person, Group or
     *             Position that is or was responsible for conceiving and formulating the information
     *             contained in the Record. The Record is the source of the Relation and the Person(s),
     *             Group(s) or Position(s) is the target. 
     */
    "AuthorshipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AuthorshipRelation'>;
    /** Date at which something began. */
    "beginningDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#beginningDate'>;
    /** Date at which a Person was born. */
    "birthDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#birthDate'>;
    /**
     * Number of physical units and/or physical dimensions of the
     *             carrier of an Instantiation. In order to manage an Instantiation of a record resource it
     *             is necessary to note the extent of the carrier as well as that of the Instantiation
     *             itself. Whether it is necessary to note dimensions, the number of relevant units, or
     *             both, depends on the nature of the carrier and particular business needs.
     */
    "carrierExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#carrierExtent'>;
    /**
     * Number of physical units and/or physical dimensions of the
     *             carrier of an Instantiation.
     */
    "CarrierExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#CarrierExtent'>;
    /**
     * Categorization of physical material on which information is
     *             represented.
     */
    "CarrierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#CarrierType'>;
    /**
     * Connects a ChildRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "childRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#childRelation_role'>;
    /**
     * Connects at least one Person to at least another Person, when
     *             the first has(ave) child(s) the second one(s). The Relation is oriented from the parent
     *             to the child: the parent is the source of the relation, and the child(ren) is the
     *             target.
     */
    "ChildRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ChildRelation'>;
    /**
     * A term, number or alphanumeric string that is usually taken from
     *             an external classification vocabulary or scheme that qualifies a Record Resource. 
     */
    "classification": NamedNode<'https://www.ica.org/standards/RiC/ontology#classification'>;
    /**
     * An annotation property for recording a possible mapping to a
     *             component in another model or ontology
     */
    "closeTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#closeTo'>;
    /**
     * An idea, unit of thought, abstract cultural object or
     *             category
     */
    "Concept": NamedNode<'https://www.ica.org/standards/RiC/ontology#Concept'>;
    /**
     * Terms and circumstances affecting the availability of a Record
     *             Resource or an Instantiation for consultation.
     */
    "conditionsOfAccess": NamedNode<'https://www.ica.org/standards/RiC/ontology#conditionsOfAccess'>;
    /**
     * Terms and circumstances affecting the use of a Record Resource
     *             or an Instantiation after access has been provided. Includes conditions governing
     *             reproduction of the Record Resource under applicable copyright (intellectual property)
     *             and/or property legislation or due to conservation status.
     */
    "conditionsOfUse": NamedNode<'https://www.ica.org/standards/RiC/ontology#conditionsOfUse'>;
    /**
     * Connects a Place to a Place that it contained in the
     *             past.
     */
    "contained": NamedNode<'https://www.ica.org/standards/RiC/ontology#contained'>;
    /**
     * Connects a Place to a region that is or was within
     *             it.
     */
    "containsOrContained": NamedNode<'https://www.ica.org/standards/RiC/ontology#containsOrContained'>;
    /**
     * Connects a Place to a Place that it contains, directly or indirectly. This is
     *             a transitive relation.
     */
    "containsTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#containsTransitive'>;
    /**
     * The fundamental form of communication in which a Record or
     *             Record Part is expressed.
     */
    "ContentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ContentType'>;
    /**
     * Longitudinal and latitudinal information about a
     *             Place.
     */
    "Coordinates": NamedNode<'https://www.ica.org/standards/RiC/ontology#Coordinates'>;
    /**
     * An organized group of persons that act together as an Agent, and
     *             that has a recognized legal or social status.
     */
    "CorporateBody": NamedNode<'https://www.ica.org/standards/RiC/ontology#CorporateBody'>;
    /** Categorization of a Corporate Body. */
    "CorporateBodyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#CorporateBodyType'>;
    /**
     * Connects a CorrespondenceRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "correspondenceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#correspondenceRelation_role'>;
    /**
     * Connects at least two Persons, when they correspond or
     *             corresponded to each other. This Relation is not oriented.
     */
    "CorrespondenceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#CorrespondenceRelation'>;
    /** Date at which an entity was created. */
    "creationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationDate'>;
    /**
     * Connects a CreationRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "creationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationRelation_role'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Agent, when the Agent is either responsible for all or some of the content of
     *             the Record Resource, or is a contributor to the genesis or production of the
     *             Instantiation. The Record Resource or Instantiation is the source of the Relation, and
     *             the Agent(s) is the target. 
     */
    "CreationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#CreationRelation'>;
    /**
     * Connects a Creation Relation to the Role Type that the creator
     *             Agent(s) has in the creation process
     */
    "creationWithRole": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationWithRole'>;
    /**
     * Chronological information associated with an entity that
     *             contributes to its identification and contextualization.
     */
    "date": NamedNode<'https://www.ica.org/standards/RiC/ontology#date'>;
    /**
     * Chronological information associated with an entity that
     *             contributes to its identification and contextualization.
     */
    "Date": NamedNode<'https://www.ica.org/standards/RiC/ontology#Date'>;
    /**
     * A human readable qualification of a Date to indicate the level
     *             of precision or certainty.
     */
    "dateQualifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#dateQualifier'>;
    /** Categorization of a Date. */
    "DateType": NamedNode<'https://www.ica.org/standards/RiC/ontology#DateType'>;
    /** Date at which a Person died. */
    "deathDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#deathDate'>;
    /**
     * Categorization of a Person or Group based on shared
     *             characteristics.
     */
    "DemographicGroup": NamedNode<'https://www.ica.org/standards/RiC/ontology#DemographicGroup'>;
    /**
     * Connects a DerivationRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "derivationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#derivationRelation_role'>;
    /**
     * Connects an Instantiation to at least one Instantiation that is
     *             derived from it, whether it exists or has been lost or destroyed. The Relation is
     *             oriented chronologically, from the first Instantiation in time to the derived
     *             Instantiation: the first Instantiation is the source of the Relation, and the derived
     *             Instantiation(s) is the target.
     */
    "DerivationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#DerivationRelation'>;
    /**
     * Connects a DescendanceRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "descendanceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#descendanceRelation_role'>;
    /**
     * Connects at least one Person to at least another Person, when
     *             the first has/have descendant the second one(s). The Relation is oriented from the
     *             ascendant to the descendant: the ascendant Person(s) is the source of the Relation, and
     *             the descendant Person(s) is the target.
     */
    "DescendanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#DescendanceRelation'>;
    /**
     * Connects a Record Resource to a Thing that it describes or
     *             described.
     */
    "describesOrDescribed": NamedNode<'https://www.ica.org/standards/RiC/ontology#describesOrDescribed'>;
    /** Date at which an entity was deleted. */
    "destructionDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#destructionDate'>;
    /** Connects a Place to another Place that it directly contains. */
    "directlyContains": NamedNode<'https://www.ica.org/standards/RiC/ontology#directlyContains'>;
    /**
     * Connects a Thing to a Thing that it follows directly in some non
     *             chronological sequence.
     */
    "directlyFollowsInSequence": NamedNode<'https://www.ica.org/standards/RiC/ontology#directlyFollowsInSequence'>;
    /**
     * Connects a Record Set to a Record or Record Set which it
     *             includes directly.
     */
    "directlyIncludes": NamedNode<'https://www.ica.org/standards/RiC/ontology#directlyIncludes'>;
    /**
     * Connects a Thing to a Thing that it precedes directly in some
     *             non chronological sequence.
     */
    "directlyPrecedesInSequence": NamedNode<'https://www.ica.org/standards/RiC/ontology#directlyPrecedesInSequence'>;
    /**
     * Categorization of a Record or Record Part with respect to its
     *             extrinsic and intrinsic elements that together communicate its content, administrative
     *             and documentary context, and authority.
     */
    "DocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#DocumentaryFormType'>;
    /** Inverse of 'documents' object property. */
    "documentedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#documentedBy'>;
    /**
     * Connects a Record Resource or an Instantiation to the Activity
     *             that generates the Record Resource or Instantiation.
     */
    "documents": NamedNode<'https://www.ica.org/standards/RiC/ontology#documents'>;
    /** Date at which something ended. */
    "endDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#endDate'>;
    /**
     * Something that happens or occurs in time and
     *             space.
     */
    "Event": NamedNode<'https://www.ica.org/standards/RiC/ontology#Event'>;
    /**
     * Connects an EventRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "eventRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#eventRelation_role'>;
    /**
     * Connects at least one Event to at least one Thing, when the
     *             first is associated with the existence and lifecycle of the second one. The Event(s) is
     *             the source of the Relation, and the Thing(s) is the target.
     */
    "EventRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#EventRelation'>;
    /** Categorization of an Event. */
    "EventType": NamedNode<'https://www.ica.org/standards/RiC/ontology#EventType'>;
    /**
     * Connects a Record Resource to a Relation, when the first is used
     *             for proving the existence of the second one, or for describing it.
     */
    "evidences": NamedNode<'https://www.ica.org/standards/RiC/ontology#evidences'>;
    /**
     * Connects a Position to a Group in which that Position exists or
     *             existed, or that is defined by that Group's organizational structure.
     */
    "existsOrExistedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#existsOrExistedIn'>;
    /**
     * Natural language expression of a date. This property is a
     *             specialization of the name property. In order that the precise meaning of the date can
     *             be understood, information such as the calendar used or other specific context should be
     *             included.
     */
    "expressedDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#expressedDate'>;
    /**
     * Inverse of 'is or was expressed by' object
     *             property.
     */
    "expressesOrExpressed": NamedNode<'https://www.ica.org/standards/RiC/ontology#expressesOrExpressed'>;
    /**
     * Countable characteristics of the content of an entity expressed
     *             as a quantity.
     */
    "Extent": NamedNode<'https://www.ica.org/standards/RiC/ontology#Extent'>;
    /**
     * Categorization of the extent that is being
     *             measured.
     */
    "ExtentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ExtentType'>;
    /**
     * Two or more persons related by birth, or through marriage,
     *             adoption, civil union, or other social conventions that bind them together as a socially
     *             recognized familial group.
     */
    "Family": NamedNode<'https://www.ica.org/standards/RiC/ontology#Family'>;
    /**
     * Connects a FamilyRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "familyRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#familyRelation_role'>;
    /**
     * Connects at least two Persons, when they have some family link,
     *             i.e. belong to the same family. This Relation is a generic, not oriented
     *             one.
     */
    "FamilyRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#FamilyRelation'>;
    /** Categorization of a Family. */
    "FamilyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#FamilyType'>;
    /**
     * Connects a Thing to a Thing that it followed in some non
     *             chronological sequence in the past.
     */
    "followedInSequence": NamedNode<'https://www.ica.org/standards/RiC/ontology#followedInSequence'>;
    /**
     * Connects a Thing to a Thing that it directly or indirectly
     *             follows in some non chronological sequence.
     */
    "followsInSequenceTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#followsInSequenceTransitive'>;
    /**
     * Inverse of 'precedes in time' object property. This is a
     *             transitive relation.
     */
    "followsInTime": NamedNode<'https://www.ica.org/standards/RiC/ontology#followsInTime'>;
    /** Inverse of 'precedesOrPreceded' object property. */
    "followsOrFollowed": NamedNode<'https://www.ica.org/standards/RiC/ontology#followsOrFollowed'>;
    /**
     * Connects a FunctionalEquivalenceRelation to itself. It is a
     *             property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "functionalEquivalenceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#functionalEquivalenceRelation_role'>;
    /**
     * Connects at least two Instantiations which may be considered as
     *             equivalent. This Relation is not oriented.
     */
    "FunctionalEquivalenceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#FunctionalEquivalenceRelation'>;
    /**
     * General information about an entity. General description may be
     *             used to describe any entity. There are different appropriate uses for general
     *             description. First, while it is recommended that more specific properties be used in
     *             describing an entity, it may be desirable, for economic or other reasons, to describe
     *             two or more specific properties together. Second, general description may be used to
     *             describe one or more characteristics that are not otherwise accommodated in RiC-O.
     *             Third, it may be used to provide a succinct summary or abstract description in addition
     *             to more detailed specific description.
     */
    "generalDescription": NamedNode<'https://www.ica.org/standards/RiC/ontology#generalDescription'>;
    /**
     * Reference system used for geographical
     *             coordinates.
     */
    "geodesicSystem": NamedNode<'https://www.ica.org/standards/RiC/ontology#geodesicSystem'>;
    /** Longitudinal and latitudinal information about a Place. */
    "geographicalCoordinates": NamedNode<'https://www.ica.org/standards/RiC/ontology#geographicalCoordinates'>;
    /** Two or more Agents that act together as an Agent. */
    "Group": NamedNode<'https://www.ica.org/standards/RiC/ontology#Group'>;
    /**
     * Connects a GroupSubdivisionRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "groupSubdivisionRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupSubdivisionRelation_role'>;
    /**
     * Connects a Group and at least another Group, when the first one
     *             has or had the second one(s) among its subdivisions. The Relation is oriented from the
     *             Group to its subdivision(s): the parent Group is the source and the subdivision Group(s)
     *             is the target.
     */
    "GroupSubdivisionRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#GroupSubdivisionRelation'>;
    /**
     * Connects an Instantiation to another Instantiation that was its
     *             component in the past.
     */
    "hadComponent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hadComponent'>;
    /**
     * Connects a Record or Record Part to another Record or Record
     *             Part that was its constituent in the past.
     */
    "hadConstituent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hadConstituent'>;
    /**
     * Connects a Thing to a Thing that was a constitutive or component
     *             part of that Thing in the past.
     */
    "hadPart": NamedNode<'https://www.ica.org/standards/RiC/ontology#hadPart'>;
    /** Connects a Group to one of its past subdivisions. */
    "hadSubdivision": NamedNode<'https://www.ica.org/standards/RiC/ontology#hadSubdivision'>;
    /**
     * Connects a past Event to one of a series of past Events that
     *             constituted that original, broader, past Event.
     */
    "hadSubevent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hadSubevent'>;
    /**
     * Connects an Agent to an Agent that was hierarchically inferior
     *             in the past.
     */
    "hadSubordinate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hadSubordinate'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             accumulates it, be it intentionally (collecting) or not (receiving in the course of its
     *             activities).
     */
    "hasAccumulator": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAccumulator'>;
    /**
     * Connects an Activity to an Activity Type that categorizes
     *             it.
     */
    "hasActivityType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasActivityType'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             it is addressed to.
     */
    "hasAddressee": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAddressee'>;
    /**
     * Inverse of 'has descendant' object property. This is a
     *             transitive relation.
     */
    "hasAncestor": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAncestor'>;
    /**
     * Connects a Record to the Group, Person or Position that is
     *             responsible for conceiving and formulating the information contained in the
     *             Record.
     */
    "hasAuthor": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAuthor'>;
    /** Inverse of 'is beginning date of' object property */
    "hasBeginningDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasBeginningDate'>;
    /** Inverse of 'is birth date of' object property */
    "hasBirthDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasBirthDate'>;
    /** Inverse of 'is birth place of' object property */
    "hasBirthPlace": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasBirthPlace'>;
    /**
     * Connects an Instantiation to a Carrier Type which categorizes
     *             its carrier.
     */
    "hasCarrierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCarrierType'>;
    /** Connects a Person to one of their children. */
    "hasChild": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasChild'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             collects it intentionally, i.e., the Agent is a collector.
     */
    "hasCollector": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCollector'>;
    /**
     * Connects an Instantiation to another Instantiation that is,
     *             directly or indirectly, a component of that Instantiation. This is a transitive
     *             relation.
     */
    "hasComponentTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasComponentTransitive'>;
    /**
     * Connects a Record or Record Part to another Record or Record
     *             Part that is its constituent, directly or indirectly. This is a transitive
     *             relation.
     */
    "hasConstituentTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasConstituentTransitive'>;
    /**
     * Connects a Record or a Record Part to a Content Type which
     *             categorizes its content.
     */
    "hasContentOfType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasContentOfType'>;
    /**
     * Connects a Record Resource to a copy of that Record
     *             Resource.
     */
    "hasCopy": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCopy'>;
    /** Inverse of 'is creation date of' object property */
    "hasCreationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCreationDate'>;
    /**
     * Connects a Record Resource or an Instantiation to an Agent that
     *             is either responsible for all or some of the content of the Record Resource or is a
     *             contributor to the genesis or production of an Instantiation.
     */
    "hasCreator": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCreator'>;
    /** Connects a Date to its Date Type. */
    "hasDateType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDateType'>;
    /** Inverse of 'is death date of' object property */
    "hasDeathDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDeathDate'>;
    /** Inverse of 'is death place of' object property */
    "hasDeathPlace": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDeathPlace'>;
    /**
     * Connects a Person to one of their descendants. This is a
     *             transitive relation.
     */
    "hasDescendant": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDescendant'>;
    /**
     * Inverse of 'is destruction date of' object
     *             property.
     */
    "hasDestructionDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDestructionDate'>;
    /**
     * Connects an Instantiation to another Instantiation that is its
     *             direct component.
     */
    "hasDirectComponent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDirectComponent'>;
    /**
     * Connects a Record to another Record or Record Part that is its
     *             direct constituent.
     */
    "hasDirectConstituent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDirectConstituent'>;
    /**
     * Connects a Thing to a Thing that is a direct constitutive or
     *             component part of that Thing.
     */
    "hasDirectPart": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDirectPart'>;
    /**
     * Connects a Group to one of its direct
     *             subdivisions.
     */
    "hasDirectSubdivision": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDirectSubdivision'>;
    /**
     * Connects an ongoing Event to one of a series of Events that
     *             directly constitute that broader, ongoing Event.
     */
    "hasDirectSubevent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDirectSubevent'>;
    /**
     * Connects an Agent to an Agent that is its direct
     *             subordinate.
     */
    "hasDirectSubordinate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDirectSubordinate'>;
    /**
     * Connects a Record or Record Part to its Documentary Form
     *             Type.
     */
    "hasDocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDocumentaryFormType'>;
    /** Inverse of 'is draft of' object property. */
    "hasDraft": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDraft'>;
    /** Inverse of 'is end date of' object property. */
    "hasEndDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasEndDate'>;
    /**
     * Connects an Event to an Event Type which categorizes
     *             it.
     */
    "hasEventType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasEventType'>;
    /**
     * Connects a Record Resource or Instantiation to an
     *             Extent
     */
    "hasExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasExtent'>;
    /**
     * Connects an Extent to an Extent Type that categorizes what is
     *             being measured.
     */
    "hasExtentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasExtentType'>;
    /**
     * Connects two Persons that have some type of family link, i.e.
     *             belong to the same family. This relation is symmetric.
     */
    "hasFamilyAssociationWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasFamilyAssociationWith'>;
    /**
     * Connects a Family to a Family Type that categorizes
     *             it.
     */
    "hasFamilyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasFamilyType'>;
    /**
     * Connects two Record Resources when there is a genetic link
     *             between them. Genetic in this sense is as defined by diplomatics, i.e. the process by
     *             which a Record Resource is developed. This relation is symmetric.
     */
    "hasGeneticLinkToRecordResource": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasGeneticLinkToRecordResource'>;
    /**
     * Connects an Identifier and an Identifier Type that categorizes
     *             it.
     */
    "hasIdentifierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasIdentifierType'>;
    /**
     * Inverse of 'is modification date of' object
     *             property.
     */
    "hasModificationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasModificationDate'>;
    /**
     * Connects a Record Resource or an Instantiation to an Agent that
     *             creates or accumulates it, receives it, or sends it, or to an Activity that generates
     *             it.
     */
    "hasOrganicOrFunctionalProvenance": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrganicOrFunctionalProvenance'>;
    /**
     * Connects a Record Resource or an Instantiation to an Agent that
     *             creates or accumulates the Record Resource, receives it, or sends it.
     */
    "hasOrganicProvenance": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrganicProvenance'>;
    /**
     * Connects an Agent and (one of) its present or past Agent
     *             Name.
     */
    "hasOrHadAgentName": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAgentName'>;
    /**
     * Connects a Record Set and a Category (Type) to which all the
     *             Records or Record Parts that are or were included in the Record Set
     *             belong.
     */
    "hasOrHadAllMembersWithCategory": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithCategory'>;
    /**
     * Connects a Record Set and a Content Type that categorizes all
     *             the Records or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithContentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithContentType'>;
    /**
     * Inverse of 'is or was creation date of all members of' object
     *             property
     */
    "hasOrHadAllMembersWithCreationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithCreationDate'>;
    /**
     * Connects a Record Set and a Documentary Form Type that
     *             categorizes all the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadAllMembersWithDocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithDocumentaryFormType'>;
    /**
     * Connects a Record Set and a Language used by all the Records or
     *             Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithLanguage": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithLanguage'>;
    /**
     * Connects a Record Set and a Legal Status that categorizes all
     *             the Records or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithLegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithLegalStatus'>;
    /**
     * Connects a Record Set and a Record State that categorizes all
     *             the Records or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithRecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithRecordState'>;
    /**
     * Connects a record resource to one of its analogue
     *             instantiations, whether it exists or has been lost or destroyed.
     */
    "hasOrHadAnalogueInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAnalogueInstantiation'>;
    /**
     * Connects a Thing to an Appellation that is or was used for
     *             designating it.
     */
    "hasOrHadAppellation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAppellation'>;
    /**
     * Connects an Agent to a Thing over which the Agent has or had
     *             some kind of authority.
     */
    "hasOrHadAuthorityOver": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAuthorityOver'>;
    /**
     * Connects a Thing to a Type that categorizes or categorized
     *             it.
     */
    "hasOrHadCategory": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCategory'>;
    /**
     * Connects an Instantiation to one of its present or past
     *             component instantiations.
     */
    "hasOrHadComponent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadComponent'>;
    /**
     * Connects a Record or Record Part to a Record or Record part that
     *             is or was a constituent of that Record or Record Part.
     */
    "hasOrHadConstituent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadConstituent'>;
    /**
     * Inverse of 'is or was controller of' object
     *             property.
     */
    "hasOrHadController": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadController'>;
    /**
     * Connects a Physical Location to its past or present coordinates
     *             in a reference system.
     */
    "hasOrHadCoordinates": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCoordinates'>;
    /**
     * Connects a Corporate Body to a Corporate Body Type which
     *             categorizes or categorized it.
     */
    "hasOrHadCorporateBodyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCorporateBodyType'>;
    /**
     * Connects two Persons that correspond or have corresponded with
     *             each other. This relation is symmetric.
     */
    "hasOrHadCorrespondent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCorrespondent'>;
    /**
     * Connects a Person or a Group to a Demographic Group to which it
     *             belongs or belonged.
     */
    "hasOrHadDemographicGroup": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadDemographicGroup'>;
    /**
     * Connects an instantiation to an instantiation that is derived
     *             from it, whether it exists or has been lost or destroyed.
     */
    "hasOrHadDerivedInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadDerivedInstantiation'>;
    /**
     * Connects a record resource to one of its digital instantiations,
     *             whether it exists or has been lost or destroyed.
     */
    "hasOrHadDigitalInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadDigitalInstantiation'>;
    /**
     * Inverse of 'is or was employer of' object
     *             property.
     */
    "hasOrHadEmployer": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadEmployer'>;
    /** Inverse of 'is or was holder of' object property. */
    "hasOrHadHolder": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadHolder'>;
    /**
     * Connects a Thing to one of its past or present
     *             Identifiers.
     */
    "hasOrHadIdentifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadIdentifier'>;
    /**
     * Connects a Record Resource to an Instantiation, which either may
     *             exist or may have been lost or destroyed.
     */
    "hasOrHadInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadInstantiation'>;
    /**
     * Inverse of 'is or was holder of intellectual property rights of'
     *             object property.
     */
    "hasOrHadIntellectualPropertyRightsHolder": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadIntellectualPropertyRightsHolder'>;
    /**
     * Inverse of 'is or was jurisdiction of' object
     *             property.
     */
    "hasOrHadJurisdiction": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadJurisdiction'>;
    /**
     * Connects an Agent, Record or Record Part to a Language that uses
     *             or used it.
     */
    "hasOrHadLanguage": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLanguage'>;
    /** Inverse of 'is or was leader of' object property. */
    "hasOrHadLeader": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLeader'>;
    /**
     * Connects an Agent or Record Resource to a Legal Status which
     *             categorized or categorizes it.
     */
    "hasOrHadLegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLegalStatus'>;
    /**
     * Inverse of 'is or was location of' object
     *             property.
     */
    "hasOrHadLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLocation'>;
    /**
     * Connects a Record Resource to a Thing that is or was its main
     *             subject.
     */
    "hasOrHadMainSubject": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadMainSubject'>;
    /**
     * Inverse of 'is or was manager of' object
     *             property.
     */
    "hasOrHadManager": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadManager'>;
    /**
     * Connects a Mandate to a Mandate Type that categorized or
     *             categorizes it.
     */
    "hasOrHadMandateType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadMandateType'>;
    /**
     * Connects a Group to a Person that is or was a member of that
     *             Group.
     */
    "hasOrHadMember": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadMember'>;
    /**
     * Inverse of 'is or was creation date of most members of' object
     *             property
     */
    "hasOrHadMostMembersWithCreationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadMostMembersWithCreationDate'>;
    /**
     * Connects a Thing to one of its past or present
     *             Names.
     */
    "hasOrHadName": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadName'>;
    /**
     * Connects a Person to an Occupation Type that categorized or
     *             categorizes his/her occupation (profession, trade or craft).
     */
    "hasOrHadOccupationOfType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadOccupationOfType'>;
    /** Inverse of 'is or was owner of' object property. */
    "hasOrHadOwner": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadOwner'>;
    /**
     * Connects a Thing to a constitutive or component part of that
     *             Thing.
     */
    "hasOrHadPart": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPart'>;
    /**
     * Connects an Event to a Thing that is or was actively or
     *             passively involved in it.
     */
    "hasOrHadParticipant": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadParticipant'>;
    /**
     * Connects a Place to one of its past or present Physical
     *             Location.
     */
    "hasOrHadPhysicalLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPhysicalLocation'>;
    /**
     * Connects a Place to one of its past or present
     *             names.
     */
    "hasOrHadPlaceName": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPlaceName'>;
    /**
     * Connects a Place to a Place Type that categorized or categorizes
     *             it.
     */
    "hasOrHadPlaceType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPlaceType'>;
    /**
     * Inverse of 'exists or existed in' object
     *             property.
     */
    "hasOrHadPosition": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPosition'>;
    /**
     * Connects a Rule to a Rule Type that categorized or categorizes
     *             it.
     */
    "hasOrHadRuleType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadRuleType'>;
    /**
     * Connects a Record Set and a Category (Type) to which some of the
     *             Records or Record Parts that are or were included in the Record Set
     *             belong.
     */
    "hasOrHadSomeMembersWithCategory": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithCategory'>;
    /**
     * Connects a Record Set and a Content Type that categorizes some
     *             of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithContentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithContentType'>;
    /**
     * Inverse of 'is or was creation date of some members of' object
     *             property
     */
    "hasOrHadSomeMembersWithCreationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithCreationDate'>;
    /**
     * Connects a Record Set and a Documentary Form Type that
     *             categorizes some of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithDocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithDocumentaryFormType'>;
    /**
     * Connects a Record Set and a Language used by some of the Records
     *             or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadSomeMembersWithLanguage": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithLanguage'>;
    /**
     * Connects a Record Set and a Legal Status that categorizes some
     *             of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithLegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithLegalStatus'>;
    /**
     * Connects a Record Set and a Record State that categorizes some
     *             of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithRecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithRecordState'>;
    /**
     * Connects two Persons who are or were married. This relation is
     *             symmetric.
     */
    "hasOrHadSpouse": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSpouse'>;
    /** Inverse of 'has or had teacher' object property. */
    "hasOrHadStudent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadStudent'>;
    /**
     * Connects a Group to one of its present or past
     *             subdivisions.
     */
    "hasOrHadSubdivision": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubdivision'>;
    /**
     * Connects an Event to one of a series of Events that constitute
     *             the original, broader, past or ongoing Event.
     */
    "hasOrHadSubevent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubevent'>;
    /**
     * Connects a Record Resource to a Thing that is or was its
     *             subject.
     */
    "hasOrHadSubject": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubject'>;
    /**
     * Connects an Agent to an Agent that is hierarchically
     *             inferior.
     */
    "hasOrHadSubordinate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubordinate'>;
    /**
     * Connects a Person to another Person who is or was their
     *             teacher.
     */
    "hasOrHadTeacher": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadTeacher'>;
    /**
     * Connects a Record Resource, Instantiation or Rule to a title
     *             that is or was used for designating it.
     */
    "hasOrHadTitle": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadTitle'>;
    /**
     * Connects two Agents that have or had some type of work relation
     *             in the course of their activities. This relation is symmetric.
     */
    "hasOrHadWorkRelationWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadWorkRelationWith'>;
    /** Inverse of 'is original of' object property. */
    "hasOriginal": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOriginal'>;
    /**
     * Connects a Thing to a Thing that is, directly or indirectly, a
     *             constitutive or component part of that Thing. This is a transitive
     *             relation.
     */
    "hasPartTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasPartTransitive'>;
    /**
     * Connects an Instantiation to a Production Technique Type that
     *             categorizes its production technique.
     */
    "hasProductionTechniqueType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasProductionTechniqueType'>;
    /**
     * Inverse of 'is publication date of' object
     *             property
     */
    "hasPublicationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasPublicationDate'>;
    /**
     * Connects a Record resource to an Agent who published
     *             it.
     */
    "hasPublisher": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasPublisher'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             receives it in the course of the Agent's activities.
     */
    "hasReceiver": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasReceiver'>;
    /**
     * Connects a Record Set to a Record Set Type that categorizes
     *             it.
     */
    "hasRecordSetType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasRecordSetType'>;
    /**
     * Connects a Record or Record Part to a Record State that
     *             categorizes its state.
     */
    "hasRecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasRecordState'>;
    /**
     * Connects a Record Resource to a reply, usually in the form of
     *             correspondence.
     */
    "hasReply": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasReply'>;
    /**
     * Connects an Instantiation to a Representation Type that
     *             categorizes its representation type.
     */
    "hasRepresentationType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasRepresentationType'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             sends it
     */
    "hasSender": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSender'>;
    /**
     * Connects two Persons who are siblings. This relation is
     *             symmetric.
     */
    "hasSibling": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSibling'>;
    /**
     * Connects a Group to another Group that is one of its direct or
     *             indirect subdivisions. This is a transitive relation.
     */
    "hasSubdivisionTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSubdivisionTransitive'>;
    /**
     * Connects an ongoing Event to one of a series of Events that
     *             directly or indirectly constitute that broader, ongoing Event. This is a transitive
     *             relation.
     */
    "hasSubeventTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSubeventTransitive'>;
    /**
     * Connects an Agent to an Agent that is directly or indirectly
     *             hierarchically inferior. This is a transitive relation.
     */
    "hasSubordinateTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSubordinateTransitive'>;
    /**
     * Connects an Agent to another Agent that succeeds it
     *             chronologically.
     */
    "hasSuccessor": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSuccessor'>;
    /** Connects an Extent to a Unit Of Measurement */
    "hasUnitOfMeasurement": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasUnitOfMeasurement'>;
    /** Inverse of 'is within' object property */
    "hasWithin": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasWithin'>;
    /** Vertical dimension of an entity. */
    "height": NamedNode<'https://www.ica.org/standards/RiC/ontology#height'>;
    /**
     * Summary of the development of an entity throughout its
     *             existence.
     */
    "history": NamedNode<'https://www.ica.org/standards/RiC/ontology#history'>;
    /**
     * A word, number, letter, symbol, or any combination of these used
     *             to uniquely identify or reference an individual instance of an entity within a specific
     *             information domain. Can include Global Persistent Identifiers (globally unique and
     *             persistently resolvable identifier for the entity) and/or Local Identifiers. Both the
     *             domain within which the identifier is unique, and the rules used in forming the
     *             identifier value should be provided with the identifier value.
     */
    "identifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#identifier'>;
    /**
     * A word, number, letter, symbol, or any combination of these used
     *             to uniquely identify or reference an individual instance of an entity within a specific
     *             information domain.
     */
    "Identifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#Identifier'>;
    /** Categorization of an Identifier. */
    "IdentifierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#IdentifierType'>;
    /**
     * Connects a Record Set to a Record or Record Set which it
     *             included in the past.
     */
    "included": NamedNode<'https://www.ica.org/standards/RiC/ontology#included'>;
    /**
     * Connects a Record Set to a Record or Record Set it aggregates,
     *             or aggregated in the past.
     */
    "includesOrIncluded": NamedNode<'https://www.ica.org/standards/RiC/ontology#includesOrIncluded'>;
    /**
     * Connects a Record Set to a Record or Record Set which it
     *             includes directly or indirectly. This is a transitive relation.
     */
    "includesTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#includesTransitive'>;
    /**
     * The inscription of information made by an Agent on a physical
     *             carrier in any persistent, recoverable form as a means of communicating information
     *             through time and space.
     */
    "Instantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#Instantiation'>;
    /**
     * Countable characteristics of an Instantiation expressed as a
     *             quantity.
     */
    "instantiationExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationExtent'>;
    /**
     * Countable characteristics of an Instantiation expressed as a
     *             quantity.
     */
    "InstantiationExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#InstantiationExtent'>;
    /**
     * Information about the physical arrangement and composition of an
     *             Instantiation.
     */
    "instantiationStructure": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationStructure'>;
    /**
     * Connects an InstantiationToInstantiationRelation to itself. It
     *             is a property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "instantiationToInstantiationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationToInstantiationRelation_role'>;
    /**
     * Connects at least two instantiations. This Relation is a
     *             generic, not oriented one.
     */
    "InstantiationToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#InstantiationToInstantiationRelation'>;
    /**
     * Information about the known intellectual completeness of a
     *             Record Resource.
     */
    "integrityNote": NamedNode<'https://www.ica.org/standards/RiC/ontology#integrityNote'>;
    /**
     * Connects an IntellectualPropertyRightsRelation to itself. It is
     *             a property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "intellectualPropertyRightsRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#intellectualPropertyRightsRelation_role'>;
    /**
     * Connects at least one Agent and one Record Resource or
     *             Instantiation on which the Agent has or had some intellectual property rights. The
     *             Agent(s) is the source of the Relation and the Record Resource(s) or Instantiation(s) is
     *             the target.
     */
    "IntellectualPropertyRightsRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#IntellectualPropertyRightsRelation'>;
    /**
     * Connects two Dates that overlap. This relation is
     *             symmetric.
     */
    "intersects": NamedNode<'https://www.ica.org/standards/RiC/ontology#intersects'>;
    /** Inverse of 'has accumulator' object property. */
    "isAccumulatorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAccumulatorOf'>;
    /**
     * Connects an Activity Type to an Activity that it
     *             categorizes.
     */
    "isActivityTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isActivityTypeOf'>;
    /** Inverse of 'has addressee' object property. */
    "isAddresseeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAddresseeOf'>;
    /**
     * Connects two Agents. This object property is
     *             symmetric.
     */
    "isAgentAssociatedWithAgent": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAgentAssociatedWithAgent'>;
    /**
     * Inverse of 'is place associated with agent' object
     *             property.
     */
    "isAgentAssociatedWithPlace": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAgentAssociatedWithPlace'>;
    /**
     * Inverse of 'is date associated with' object
     *             property.
     */
    "isAssociatedWithDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithDate'>;
    /**
     * Inverse of 'is event associated with' object
     *             property.
     */
    "isAssociatedWithEvent": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithEvent'>;
    /**
     * Inverse of 'is place associated with' object
     *             property.
     */
    "isAssociatedWithPlace": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithPlace'>;
    /**
     * Inverse of 'is rule associated with' object
     *             property.
     */
    "isAssociatedWithRule": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithRule'>;
    /**
     * Connects an Agent that assigns the Mandate, to a Mandate
     *             Relation.
     */
    "isAuthorizingAgentInMandateRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAuthorizingAgentInMandateRelation'>;
    /** Inverse of 'has author' object property. */
    "isAuthorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAuthorOf'>;
    /**
     * Connects a Date to a Thing that came into existence on that
     *             Date.
     */
    "isBeginningDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isBeginningDateOf'>;
    /**
     * Connects a Date to a Person that was born on that
     *             Date.
     */
    "isBirthDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isBirthDateOf'>;
    /**
     * Connects a Place to a Person who was born in that
     *             Place.
     */
    "isBirthPlaceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isBirthPlaceOf'>;
    /**
     * Connects a Carrier Type to an Instantiation whose carrier it
     *             categorizes.
     */
    "isCarrierTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCarrierTypeOf'>;
    /** Inverse of 'has child' object property. */
    "isChildOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isChildOf'>;
    /** Inverse of 'has collector' object property. */
    "isCollectorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCollectorOf'>;
    /**
     * Connects an Instantiation to another Instantiation of which it
     *             is, directly or indirectly, a component. This is a transitive relation.
     */
    "isComponentOfTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isComponentOfTransitive'>;
    /**
     * Connects a Record or Record Part to another Record or Record
     *             Part of which it is a constituent, directly or indirectly. This is a transitive
     *             relation.
     */
    "isConstituentOfTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isConstituentOfTransitive'>;
    /**
     * Connects a Place to a Place that is, directly or indirectly,
     *             contained by it. This is a transitive relation.
     */
    "isContainedByTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isContainedByTransitive'>;
    /**
     * Connects a Content Type to a Record or Record Part whose content
     *             it categorizes.
     */
    "isContentTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isContentTypeOf'>;
    /** Inverse of 'has copy' object property. */
    "isCopyOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCopyOf'>;
    /**
     * Connects a Date to a Record Resource or Instantiation that was
     *             created at this Date.
     */
    "isCreationDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCreationDateOf'>;
    /** Inverse of 'has creator' object property. */
    "isCreatorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCreatorOf'>;
    /**
     * Connects a Date to a Thing with whose existence and lifecycle
     *             the Date is associated.
     */
    "isDateAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDateAssociatedWith'>;
    /**
     * Connects a Date to an Event that occurred at this Date. An event
     *             or activity can be recurrent, which implies that one single event can be related to
     *             several dates.
     */
    "isDateOfOccurrenceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDateOfOccurrenceOf'>;
    /**
     * Connects a Date Type to a Date that it
     *             categorizes.
     */
    "isDateTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDateTypeOf'>;
    /**
     * Connects a Date to a Person who died on that
     *             Date.
     */
    "isDeathDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDeathDateOf'>;
    /**
     * Connects a Place to a Person who died in that
     *             Place.
     */
    "isDeathPlaceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDeathPlaceOf'>;
    /**
     * Connects a Date to a Thing that was destructed at that
     *             Date.
     */
    "isDestructionDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDestructionDateOf'>;
    /**
     * Connects an Instantiation to another Instantiation of which it
     *             is a direct component.
     */
    "isDirectComponentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectComponentOf'>;
    /**
     * Connects a Record or Record Part to another Record or Record
     *             Part of which it is a direct constituent.
     */
    "isDirectConstituentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectConstituentOf'>;
    /**
     * Connects a Place to a Place that directly contains
     *             it.
     */
    "isDirectlyContainedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectlyContainedBy'>;
    /**
     * Connects a Record to a Record or Record Set in which it is
     *             directly included.
     */
    "isDirectlyIncludedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectlyIncludedIn'>;
    /**
     * Connects a Thing to a Thing of which it is direct constitutive
     *             or component part.
     */
    "isDirectPartOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectPartOf'>;
    /**
     * Connects a Group to the Group it is a direct subdivision
     *             of.
     */
    "isDirectSubdivisionOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectSubdivisionOf'>;
    /**
     * Connects an ongoing Event to the Event it is a direct part
     *             of.
     */
    "isDirectSubeventOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectSubeventOf'>;
    /**
     * Connects an Agent to an Agent that is directly hierarchically
     *             superior.
     */
    "isDirectSubordinateTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDirectSubordinateTo'>;
    /**
     * Connects a Documentary Form Type to a Record or Record Part that
     *             it categorizes.
     */
    "isDocumentaryFormTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDocumentaryFormTypeOf'>;
    /**
     * Connects a draft to the final version of a
     *             Record.
     */
    "isDraftOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDraftOf'>;
    /**
     * Connects a Date to a Thing whose existence ended on that
     *             Date.
     */
    "isEndDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEndDateOf'>;
    /**
     * Connects two Things that are considered
     *             equivalent.
     */
    "isEquivalentTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEquivalentTo'>;
    /**
     * Connects an Event to a Thing that is associated with the
     *             existence and lifecycle of the Event.
     */
    "isEventAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEventAssociatedWith'>;
    /**
     * Connects an Event Type to an Event that it
     *             categorizes.
     */
    "isEventTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEventTypeOf'>;
    /**
     * Connects a Relation to a Record Resource that is used for
     *             proving is existence or describing it.
     */
    "isEvidencedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEvidencedBy'>;
    /** Connects an Extent to a Thing */
    "isExtentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isExtentOf'>;
    /**
     * Connects an Extent Type to an Extent that it
     *             categorizes.
     */
    "isExtentTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isExtentTypeOf'>;
    /**
     * Connects a Family Type to a Family that it
     *             categorizes.
     */
    "isFamilyTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isFamilyTypeOf'>;
    /**
     * Connects a Date to an Appellation, when it is the date at which
     *             the Appellation was first used.
     */
    "isFromUseDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isFromUseDateOf'>;
    /**
     * Connects two Instantiations which may be considered as
     *             equivalent. This relation is symmetric.
     */
    "isFunctionallyEquivalentTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isFunctionallyEquivalentTo'>;
    /**
     * Connects an Identifier Type and an Identifier that it
     *             categorizes.
     */
    "isIdentifierTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isIdentifierTypeOf'>;
    /**
     * Connects a Record to a Record or Record Set in which it is
     *             directly or indirectly included. This is a transitive relation.
     */
    "isIncludedInTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isIncludedInTransitive'>;
    /**
     * Connects two Instantiations. This relation is
     *             symmetric.
     */
    "isInstantiationAssociatedWithInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#isInstantiationAssociatedWithInstantiation'>;
    /**
     * Connects a Date and a Thing that was last modified at this
     *             Date.
     */
    "isLastUpdateDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isLastUpdateDateOf'>;
    /**
     * Connects a Date to a Thing that was modified on that
     *             Date.
     */
    "isModificationDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isModificationDateOf'>;
    /**
     * Inverse of 'has organic or functional provenance' object
     *             property.
     */
    "isOrganicOrFunctionalProvenanceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrganicOrFunctionalProvenanceOf'>;
    /**
     * Inverse of 'has organic provenance' object
     *             property.
     */
    "isOrganicProvenanceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrganicProvenanceOf'>;
    /**
     * Connects the original version of a Record to a copy or a later
     *             version.
     */
    "isOriginalOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOriginalOf'>;
    /**
     * Connects two Places that are or were geographically adjacent.
     *             This relation is symmetric.
     */
    "isOrWasAdjacentTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAdjacentTo'>;
    /** Inverse of 'affects or affected' object property. */
    "isOrWasAffectedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAffectedBy'>;
    /**
     * Connects an Agent Name to an Agent it designates or
     *             designated.
     */
    "isOrWasAgentNameOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAgentNameOf'>;
    /**
     * Inverse of 'has or had analogue instantiation' object
     *             property.
     */
    "isOrWasAnalogueInstantiationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAnalogueInstantiationOf'>;
    /**
     * Connects an Appellation to a Thing that it designates or
     *             designated.
     */
    "isOrWasAppellationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAppellationOf'>;
    /**
     * Connects a Type (a category) to a Thing that it categorizes or
     *             categorized.
     */
    "isOrWasCategoryOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCategoryOf'>;
    /**
     * Connects a Category (Type) and a Record Set whose all present or
     *             past Record or Record Part members belong to that Category.
     */
    "isOrWasCategoryOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCategoryOfAllMembersOf'>;
    /**
     * Connects a Category (Type) and a Record Set whose some present
     *             or past Record or Record Part members belong to that Category.
     */
    "isOrWasCategoryOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCategoryOfSomeMembersOf'>;
    /**
     * Inverse of 'has or had component' object
     *             property.
     */
    "isOrWasComponentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasComponentOf'>;
    /**
     * Inverse of 'has or had constituent' object
     *             property.
     */
    "isOrWasConstituentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasConstituentOf'>;
    /**
     * Inverse of 'contains or contained' object
     *             property.
     */
    "isOrWasContainedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasContainedBy'>;
    /**
     * Connects a Content Type and a Record Set whose all past or
     *             present Record or Record Part members have that Content Type.
     */
    "isOrWasContentTypeOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasContentTypeOfAllMembersOf'>;
    /**
     * Connects a Content Type and a Record Set whose some past or
     *             present Record or Record Part members have that Content Type.
     */
    "isOrWasContentTypeOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasContentTypeOfSomeMembersOf'>;
    /**
     * Connects an Agent to another Agent it controls or
     *             controlled.
     */
    "isOrWasControllerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasControllerOf'>;
    /**
     * Connects an instance of Coordinates to a Physical Location it
     *             locates or located on earth, according to some reference system.
     */
    "isOrWasCoordinatesOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCoordinatesOf'>;
    /**
     * Connects a Corporate Body Type to a Corporate Body that it
     *             categorizes or categorized.
     */
    "isOrWasCorporateBodyTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCorporateBodyTypeOf'>;
    /**
     * Connects a Date to a Record Set all of whose present or past
     *             members were created at this Date.
     */
    "isOrWasCreationDateOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCreationDateOfAllMembersOf'>;
    /**
     * Connects a Date to a Record Set most of whose present or past
     *             members were created at this Date.
     */
    "isOrWasCreationDateOfMostMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCreationDateOfMostMembersOf'>;
    /**
     * Connects a Date to a Record Set some of whose present or past
     *             members were created at this Date.
     */
    "isOrWasCreationDateOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCreationDateOfSomeMembersOf'>;
    /**
     * Connects a Demographic Group to a Person or Group which belongs
     *             or belonged to it.
     */
    "isOrWasDemographicGroupOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDemographicGroupOf'>;
    /**
     * Inverse of 'has or had derived instantiation' object
     *             property.
     */
    "isOrWasDerivedFromInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDerivedFromInstantiation'>;
    /**
     * Inverse of 'describes or described' object
     *             property.
     */
    "isOrWasDescribedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDescribedBy'>;
    /**
     * Inverse of 'has or had digital instantiation' object
     *             property.
     */
    "isOrWasDigitalInstantiationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDigitalInstantiationOf'>;
    /**
     * Connects a Documentary Form Type and a Record Set whose all past
     *             or present Record or Record Part members have that Documentary Form Type.
     */
    "isOrWasDocumentaryFormTypeOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDocumentaryFormTypeOfAllMembersOf'>;
    /**
     * Connects a Documentary Form Type and a Record Set whose some
     *             past or present Record or Record Part members have that Documentary Form
     *             Type.
     */
    "isOrWasDocumentaryFormTypeOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDocumentaryFormTypeOfSomeMembersOf'>;
    /**
     * Connects a Corporate Body or a Person to a Person who is or was
     *             their employee.
     */
    "isOrWasEmployerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasEmployerOf'>;
    /**
     * Connects a Rule to an Agent that enforces or enforced the
     *             Rule.
     */
    "isOrWasEnforcedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasEnforcedBy'>;
    /**
     * Connects a Rule to a Record Resource that expresses or expressed
     *             the Rule.
     */
    "isOrWasExpressedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasExpressedBy'>;
    /**
     * Connects an Agent to a Record Resource or Instantiation that the
     *             Agent holds or held.
     */
    "isOrWasHolderOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasHolderOf'>;
    /**
     * Connects an Agent to a Record Resource or Instantiation on which
     *             the Agent has or had some intellectual property rights.
     */
    "isOrWasHolderOfIntellectualPropertyRightsOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasHolderOfIntellectualPropertyRightsOf'>;
    /**
     * Connects an Identifier to a Thing that it identified or
     *             identifies.
     */
    "isOrWasIdentifierOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasIdentifierOf'>;
    /**
     * Inverse of 'includes or included' object
     *             property.
     */
    "isOrWasIncludedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasIncludedIn'>;
    /**
     * Inverse of 'has or had instantiation' object
     *             property.
     */
    "isOrWasInstantiationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasInstantiationOf'>;
    /**
     * Connects a Place to an Agent that has or had jurisdiction over
     *             the Place.
     */
    "isOrWasJurisdictionOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasJurisdictionOf'>;
    /**
     * Connects a Language to an Agent, Record or Record Part that uses
     *             or used it.
     */
    "isOrWasLanguageOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLanguageOf'>;
    /**
     * Connects a Language and a Record Set whose all present or past
     *             Record or Record Part members use that Language.
     */
    "isOrWasLanguageOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLanguageOfAllMembersOf'>;
    /**
     * Connects a Language and a Record Set whose some present or past
     *             Record or Record Part members use that Language.
     */
    "isOrWasLanguageOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLanguageOfSomeMembersOf'>;
    /**
     * Connects a Person to the Group that Person leads or led in the
     *             past.
     */
    "isOrWasLeaderOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLeaderOf'>;
    /**
     * Connects a Legal Status to an Agent or Record Resource that it
     *             categorizes.
     */
    "isOrWasLegalStatusOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLegalStatusOf'>;
    /**
     * Connects a Legal Status and a Record Set whose all past or
     *             present Record or Record Part members have that Legal Status.
     */
    "isOrWasLegalStatusOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLegalStatusOfAllMembersOf'>;
    /**
     * Connects a Legal Status and a Record Set whose some past or
     *             present Record or Record Part members have that Legal Status.
     */
    "isOrWasLegalStatusOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLegalStatusOfSomeMembersOf'>;
    /**
     * Connects a Place to a Thing that is or was located in the
     *             Place.
     */
    "isOrWasLocationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLocationOf'>;
    /**
     * Connects a Place to an Agent that is or was located in this
     *             Place.
     */
    "isOrWasLocationOfAgent": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLocationOfAgent'>;
    /**
     * Inverse of 'has or had main subject' object
     *             property.
     */
    "isOrWasMainSubjectOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasMainSubjectOf'>;
    /**
     * Connects an Agent to a Record Resource or Instantiation that the
     *             Agent managed or manages.
     */
    "isOrWasManagerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasManagerOf'>;
    /**
     * Connects a Mandate Type to a Mandate that it categorized or
     *             categorizes.
     */
    "isOrWasMandateTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasMandateTypeOf'>;
    /** Inverse of 'has or had member' object property. */
    "isOrWasMemberOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasMemberOf'>;
    /**
     * Connects a Name to a Thing that it designated or
     *             designates.
     */
    "isOrWasNameOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasNameOf'>;
    /**
     * Connects an Occupation Type to a Person whose occupation is or
     *             was categorized by it.
     */
    "isOrWasOccupationTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasOccupationTypeOf'>;
    /**
     * Inverse of 'occupies or occupied' object
     *             property.
     */
    "isOrWasOccupiedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasOccupiedBy'>;
    /**
     * Connects a Group, Person or Position to a Thing that this Agent
     *             owns or owned.
     */
    "isOrWasOwnerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasOwnerOf'>;
    /**
     * Inverse of 'has or had participant' object
     *             property.
     */
    "isOrWasParticipantIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasParticipantIn'>;
    /** Inverse of 'has or had part' relation. */
    "isOrWasPartOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPartOf'>;
    /**
     * Connects an Activity to an Agent that performed or performs the
     *             Activity.
     */
    "isOrWasPerformedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPerformedBy'>;
    /**
     * Connects a Physical Location to a Place, when it is or was its
     *             location.
     */
    "isOrWasPhysicalLocationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPhysicalLocationOf'>;
    /**
     * Connects a Place Name to a Place that was or is designated by
     *             it.
     */
    "isOrWasPlaceNameOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPlaceNameOf'>;
    /**
     * Connects a Place Type to a Place that is or was categorized by
     *             it.
     */
    "isOrWasPlaceTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPlaceTypeOf'>;
    /**
     * Connects a Record State and a Record Set whose all past or
     *             present Record or Record Part members have that Record State.
     */
    "isOrWasRecordStateOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRecordStateOfAllMembersOf'>;
    /**
     * Connects a Record State and a Record Set whose some past or
     *             present Record or Record Part members have that Record State.
     */
    "isOrWasRecordStateOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRecordStateOfSomeMembersOf'>;
    /**
     * Inverse of the 'regulates or regulated' object
     *             property.
     */
    "isOrWasRegulatedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRegulatedBy'>;
    /**
     * Inverse of 'is or was enforced by' object
     *             property.
     */
    "isOrWasResponsibleForEnforcing": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasResponsibleForEnforcing'>;
    /**
     * Connects a Rule Type to a Rule that it categorized or
     *             categorizes.
     */
    "isOrWasRuleTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRuleTypeOf'>;
    /**
     * Inverse of 'has or had subdivision' object
     *             property.
     */
    "isOrWasSubdivisionOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubdivisionOf'>;
    /** Inverse of 'has or had subevent' object property. */
    "isOrWasSubeventOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubeventOf'>;
    /** Inverse of 'has or had subject' object property. */
    "isOrWasSubjectOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubjectOf'>;
    /**
     * Inverse of 'has or had subordinate' object
     *             property.
     */
    "isOrWasSubordinateTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubordinateTo'>;
    /**
     * Connects a Title to a Record Resource, Instantiation or Rule
     *             that it designated or designates.
     */
    "isOrWasTitleOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasTitleOf'>;
    /**
     * Inverse of 'has or had authority over' object
     *             property.
     */
    "isOrWasUnderAuthorityOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasUnderAuthorityOf'>;
    /**
     * Connects a Thing to a Thing of which it is a a constitutive or
     *             component part, directly or indirectly. This is a transitive relation.
     */
    "isPartOfTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPartOfTransitive'>;
    /**
     * Connects a Place to a Thing with whose existence and lifecycle
     *             the Place is associated.
     */
    "isPlaceAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPlaceAssociatedWith'>;
    /**
     * Connects a Place to an Agent which is related to that
     *             Place.
     */
    "isPlaceAssociatedWithAgent": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPlaceAssociatedWithAgent'>;
    /**
     * Connects a Production Technique Type to an Instantiation whose
     *             production technique is categorized by it.
     */
    "isProductionTechniqueTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isProductionTechniqueTypeOf'>;
    /**
     * Connects a Date to a Record Resource that was made public at
     *             this Date.
     */
    "isPublicationDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPublicationDateOf'>;
    /**
     * Connects an Agent to a Record Resource that it
     *             published.
     */
    "isPublisherOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPublisherOf'>;
    /** Inverse of 'received by' object property. */
    "isReceiverOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isReceiverOf'>;
    /**
     * Connects two Record Resources. This relation is
     *             symmetric.
     */
    "isRecordResourceAssociatedWithRecordResource": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRecordResourceAssociatedWithRecordResource'>;
    /**
     * Connects a Record Set Type to a Record Set that it
     *             categorizes.
     */
    "isRecordSetTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRecordSetTypeOf'>;
    /**
     * Connects a Record State to a Record or Record Part whose state
     *             it categorizes.
     */
    "isRecordStateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRecordStateOf'>;
    /**
     * The most generic relation, is related to, connects any Thing to
     *             any other Thing. This relation is symmetric.
     */
    "isRelatedTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRelatedTo'>;
    /** Inverse of 'has reply' object property. */
    "isReplyTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isReplyTo'>;
    /**
     * Connects a Representation Type to an Instantiation that it
     *             categorizes.
     */
    "isRepresentationTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRepresentationTypeOf'>;
    /** Inverse of 'issued by' object property. */
    "isResponsibleForIssuing": NamedNode<'https://www.ica.org/standards/RiC/ontology#isResponsibleForIssuing'>;
    /**
     * Connects a Rule to a Thing that is associated with the
     *             Rule.
     */
    "isRuleAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRuleAssociatedWith'>;
    /** Inverse of 'has sender' object property. */
    "isSenderOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSenderOf'>;
    /**
     * Connects a Group to the Group it is a direct or indirect
     *             subdivision of. This is a transitive relation.
     */
    "isSubdivisionOfTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSubdivisionOfTransitive'>;
    /**
     * Connects an ongoing Event to an Event of which it is a direct or
     *             indirect part. This is a transitive relation.
     */
    "isSubeventOfTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSubeventOfTransitive'>;
    /**
     * Connects an Agent to an Agent that is directly or indirectly
     *             hierarchically superior. This is a transitive relation.
     */
    "isSubordinateToTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSubordinateToTransitive'>;
    /** Inverse of 'has successor' object property. */
    "isSuccessorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSuccessorOf'>;
    /**
     * Connects a Rule to the Agent that issued or published the
     *             Rule.
     */
    "issuedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#issuedBy'>;
    /**
     * Connects a Date to an Appellation, when it is the date till
     *             which the Appellation was used.
     */
    "isToUseDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isToUseDateOf'>;
    /**
     * Inverse of 'has unit of measurement' object
     *             property
     */
    "isUnitOfMeasurementOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isUnitOfMeasurementOf'>;
    /**
     * Connects a Date to a Date in which it is
     *             contained.
     */
    "isWithin": NamedNode<'https://www.ica.org/standards/RiC/ontology#isWithin'>;
    /**
     * Connects a KnowingOfRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "knowingOfRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowingOfRelation_role'>;
    /**
     * Connects at least one Person to at least another one, when the
     *             first one has some knowledge of the second one through time or space. The first Person
     *             is the source of the Relation, and the second one is the target.
     */
    "KnowingOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#KnowingOfRelation'>;
    /**
     * Connects a KnowingRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "knowingRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowingRelation_role'>;
    /**
     * Connects at least two Persons who directly know each other
     *             during their existence. This Relation is not oriented.
     */
    "KnowingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#KnowingRelation'>;
    /** Inverse of 'knows of' object property. */
    "knownBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#knownBy'>;
    /**
     * Connects two Persons that directly know each other during their
     *             existence. This relation is symmetric.
     */
    "knows": NamedNode<'https://www.ica.org/standards/RiC/ontology#knows'>;
    /**
     * Connects a Person to another Person they have some knowledge of
     *             through time or space.
     */
    "knowsOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowsOf'>;
    /**
     * A spoken or written human language represented in a Record
     *             Resource or used by an Agent.
     */
    "Language": NamedNode<'https://www.ica.org/standards/RiC/ontology#Language'>;
    /** Date at which an entity was last updated. */
    "lastModificationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#lastModificationDate'>;
    /**
     * Distance in degrees north or south of the
     *             equator.
     */
    "latitude": NamedNode<'https://www.ica.org/standards/RiC/ontology#latitude'>;
    /**
     * Connects a LeadershipRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "leadershipRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#leadershipRelation_role'>;
    /**
     * Connects at least one Person and at least one Group, when the
     *             first one(s) lead(s) or led the second one(s). The Relation is oriented from the leading
     *             Person to the Group: the leading Person(s) is the source of the Relation, and the
     *             Group(s) is the target.
     */
    "LeadershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#LeadershipRelation'>;
    /**
     * Connects a Leadership Relation to the Position occupied by the
     *             leading Person.
     */
    "leadershipWithPosition": NamedNode<'https://www.ica.org/standards/RiC/ontology#leadershipWithPosition'>;
    /** A status defined by law. */
    "LegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#LegalStatus'>;
    /** Length of an entity. */
    "length": NamedNode<'https://www.ica.org/standards/RiC/ontology#length'>;
    /**
     * A delimitation of the physical territory of a Place. Used to
     *             describe basic human-readable text such as an address, a cadastral reference, or less
     *             precise information found in a Record.
     */
    "location": NamedNode<'https://www.ica.org/standards/RiC/ontology#location'>;
    /**
     * Distance in degrees east or west of a prime
     *             meridian.
     */
    "longitude": NamedNode<'https://www.ica.org/standards/RiC/ontology#longitude'>;
    /**
     * Connects a ManagementRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "managementRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#managementRelation_role'>;
    /**
     * Connects at least one Agent and at least one Record Resource or
     *             Instantiation that the Agent manages or managed. The Agent(s) is the source of the
     *             Relation, and the Record Resource(s) or Instantiation(s) is the target.
     */
    "ManagementRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ManagementRelation'>;
    /**
     * Delegation of responsibility or authority by an Agent to another
     *             Agent to perform an Activity.
     */
    "Mandate": NamedNode<'https://www.ica.org/standards/RiC/ontology#Mandate'>;
    /**
     * Connects a MandateRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "mandateRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#mandateRelation_role'>;
    /**
     * Connects at least one Mandate and at least one Agent, when the
     *             first gives or gave the second one the authority or competencies to act. May also
     *             involve one to many Activities that the Mandate(s) assign(s) or assigned to the
     *             Agent(s). The Mandate(s) is the source of the Relation and the Agent(s) is the
     *             target.
     */
    "MandateRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#MandateRelation'>;
    /** Categorization of a Mandate. */
    "MandateType": NamedNode<'https://www.ica.org/standards/RiC/ontology#MandateType'>;
    /**
     * The extent, quantity, amount, or degree of an entity, as
     *             determined by measurement or calculation.
     */
    "measure": NamedNode<'https://www.ica.org/standards/RiC/ontology#measure'>;
    /**
     * A process or system created by a Person or Group that performs
     *             an Activity.
     */
    "Mechanism": NamedNode<'https://www.ica.org/standards/RiC/ontology#Mechanism'>;
    /**
     * Connects a MembershipRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "membershipRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#membershipRelation_role'>;
    /**
     * Connects a Group and at least one Person, when the first one has
     *             or had the second one(s) among its members. The Relation is oriented from the Group to
     *             its members: the Group(s) is the source of the Relation, and the Person(s) is the
     *             target.
     */
    "MembershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#MembershipRelation'>;
    /**
     * Connects a Membership Relation to the Position occupied by the
     *             member Person(s).
     */
    "membershipWithPosition": NamedNode<'https://www.ica.org/standards/RiC/ontology#membershipWithPosition'>;
    /** Inverse of 'migrated into' object property. */
    "migratedFrom": NamedNode<'https://www.ica.org/standards/RiC/ontology#migratedFrom'>;
    /**
     * Connects an Instantiation to a version it has been migrated
     *             into.
     */
    "migratedInto": NamedNode<'https://www.ica.org/standards/RiC/ontology#migratedInto'>;
    /**
     * Connects a MigrationRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "migrationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#migrationRelation_role'>;
    /**
     * Connects an Instantiation and at least another Instantiation it
     *             has been migrated into. The Relation is oriented chronologically, from the first
     *             Instantiation in time (the migrated one) to the one which results from its migration:
     *             the first Instantiation in time is the source of the Relation, and the resulting
     *             Instantiation is the target.
     */
    "MigrationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#MigrationRelation'>;
    /** Date of the modification of an entity. */
    "modificationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#modificationDate'>;
    /**
     * A label, title or term designating an entity in order to make it
     *             distinguishable from other similar entities.
     */
    "name": NamedNode<'https://www.ica.org/standards/RiC/ontology#name'>;
    /**
     * A label, title or term designating an entity in order to make it
     *             distinguishable from other similar entities.
     */
    "Name": NamedNode<'https://www.ica.org/standards/RiC/ontology#Name'>;
    /**
     * Machine readable representation of the date based on a public
     *             technical standard.
     */
    "normalizedDateValue": NamedNode<'https://www.ica.org/standards/RiC/ontology#normalizedDateValue'>;
    /**
     * Value representation based on a standard, preferably
     *             machine-readable.
     */
    "normalizedValue": NamedNode<'https://www.ica.org/standards/RiC/ontology#normalizedValue'>;
    /**
     * Categorization of a profession, trade, or craft pursued by a
     *             Person in fulfilment of an Activity.
     */
    "OccupationType": NamedNode<'https://www.ica.org/standards/RiC/ontology#OccupationType'>;
    /**
     * Connects a Person to a Position they occupy or
     *             occupied.
     */
    "occupiesOrOccupied": NamedNode<'https://www.ica.org/standards/RiC/ontology#occupiesOrOccupied'>;
    /**
     * Inverse of 'is date of occurrence of' object
     *             property
     */
    "occurredAtDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#occurredAtDate'>;
    /**
     * Connects an OrganicOrFunctionalProvenanceRelation to itself. It
     *             is a property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "organicOrFunctionalProvenanceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#organicOrFunctionalProvenanceRelation_role'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Agent or Activity, when the Agent or Activity is the provenance of the Record
     *             Resource or Instantiation (i.e. when the Agent created, accumulated or maintained the
     *             Record Resource or Instantiation, or when the Activity resulted into them). The Record
     *             Resource(s) or Instantiation(s) is the source of the Relation, and the Agent(s) or
     *             Activity(-ies) is the target.
     */
    "OrganicOrFunctionalProvenanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#OrganicOrFunctionalProvenanceRelation'>;
    /**
     * Connects an OrganicProvenanceRelation to itself. It is a
     *             property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "organicProvenanceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#organicProvenanceRelation_role'>;
    /**
     * Connects at least one Record Resource or an Instantiation to at
     *             least one Agent that creates or accumulates the Record Resource, receives it, or sends
     *             it. The Record Resource(s) or Instantiation(s) is the source of the Relation, and the
     *             Agent(s) is the target.
     */
    "OrganicProvenanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#OrganicProvenanceRelation'>;
    /**
     * Connects two Places that geographically overlap or overlapped.
     *             This relation is symmetric.
     */
    "overlapsOrOverlapped": NamedNode<'https://www.ica.org/standards/RiC/ontology#overlapsOrOverlapped'>;
    /**
     * Connects an OwnershipRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "ownershipRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#ownershipRelation_role'>;
    /**
     * Connects at least one Group, Person or Position and at least a
     *             Thing that these Agent(s) own(s) or owned. The Group(s), Person(s) or Position(s) is the
     *             source of the Relation, and the Agent(s) is the target.
     */
    "OwnershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#OwnershipRelation'>;
    /**
     * Connects a PerformanceRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "performanceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#performanceRelation_role'>;
    /**
     * Connects at least one Activity to at least one Agent that
     *             performs or performed the activity. The Activity(-ies) is the source of the Relation and
     *             the Agent(s) is the target.
     */
    "PerformanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PerformanceRelation'>;
    /**
     * Inverse of 'is or was performed by' object
     *             property.
     */
    "performsOrPerformed": NamedNode<'https://www.ica.org/standards/RiC/ontology#performsOrPerformed'>;
    /** An individual human being. */
    "Person": NamedNode<'https://www.ica.org/standards/RiC/ontology#Person'>;
    /**
     * Information about the physical features, completeness, or
     *             conservation status of an Instantiation. Includes information about the physical nature
     *             and condition such as conservation status or the deterioration of an Instantiation (for
     *             example its carrier) affecting the ability to recover information. 
     */
    "physicalCharacteristicsNote": NamedNode<'https://www.ica.org/standards/RiC/ontology#physicalCharacteristicsNote'>;
    /**
     * A delimitation of the physical territory of a
     *             Place.
     */
    "PhysicalLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PhysicalLocation'>;
    /**
     * Countable characteristics of the content of an entity expressed
     *             as a quantity.
     */
    "physicalOrLogicalExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#physicalOrLogicalExtent'>;
    /** Bounded, named geographic area or region. */
    "Place": NamedNode<'https://www.ica.org/standards/RiC/ontology#Place'>;
    /**
     * A label, title or term designating a Place in order to make it
     *             distinguishable from other similar entities.
     */
    "PlaceName": NamedNode<'https://www.ica.org/standards/RiC/ontology#PlaceName'>;
    /**
     * Connects a PlaceRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "placeRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#placeRelation_role'>;
    /**
     * Connects a Place and at least one Thing when the first is
     *             associated with the existence and lifecycle of the second one. The Place is the source
     *             of the Relation and the Thing(s) is the target.
     */
    "PlaceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PlaceRelation'>;
    /** Categorization of a Place. */
    "PlaceType": NamedNode<'https://www.ica.org/standards/RiC/ontology#PlaceType'>;
    /** The functional role of a Person within a Group. */
    "Position": NamedNode<'https://www.ica.org/standards/RiC/ontology#Position'>;
    /**
     * Connects a PositionHoldingRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "positionHoldingRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionHoldingRelation_role'>;
    /**
     * Connects at least one Person and at least one Position that the
     *             Person(s) occupies or occupied. The Person is the source of the Relation and the
     *             Position is the target.
     */
    "PositionHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PositionHoldingRelation'>;
    /**
     * Connects a Position to a Leadership Relation (the leading Person
     *             occupies that Position).
     */
    "positionIsContextOfLeadershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionIsContextOfLeadershipRelation'>;
    /**
     * Connects a Position to a Membership Relation (the member Person
     *             occupies that Position).
     */
    "positionIsContextOfMembershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionIsContextOfMembershipRelation'>;
    /**
     * Connects a PositionToGroupRelation to itself. It is a property
     *             that can stand for an instance of the class when necessary, e.g. when you explore a
     *             knowledge graph.
     */
    "positionToGroupRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionToGroupRelation_role'>;
    /**
     * Connects at least one Position and a Group in which the
     *             position(s) exist(s) or existed, or that is (are) defined by that group's organizational
     *             structure. The Position(s) is the source of the Relation and the Group is the
     *             target.
     */
    "PositionToGroupRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PositionToGroupRelation'>;
    /**
     * Connects a Thing to a Thing that followed it in some non
     *             chronological sequence in the past.
     */
    "precededInSequence": NamedNode<'https://www.ica.org/standards/RiC/ontology#precededInSequence'>;
    /**
     * Connects a Thing to a Thing that follows it directly or
     *             indirectly in some non chronological sequence. This is a transitive
     *             relation.
     */
    "precedesInSequenceTransitive": NamedNode<'https://www.ica.org/standards/RiC/ontology#precedesInSequenceTransitive'>;
    /**
     * Connects a Thing to a Thing that follows it in chronological
     *             order. This is a transitive relation.
     */
    "precedesInTime": NamedNode<'https://www.ica.org/standards/RiC/ontology#precedesInTime'>;
    /**
     * Connects a Thing to a Thing that follows or followed it in some
     *             sequence.
     */
    "precedesOrPreceded": NamedNode<'https://www.ica.org/standards/RiC/ontology#precedesOrPreceded'>;
    /**
     * The method used in the representation of information on an
     *             Instantiation.
     */
    "productionTechnique": NamedNode<'https://www.ica.org/standards/RiC/ontology#productionTechnique'>;
    /**
     * The method used in the representation of information on an
     *             instantiation.
     */
    "ProductionTechniqueType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ProductionTechniqueType'>;
    /**
     * A Proxy represents (stands for) a Record Resource as it exists
     *             in a specific Record Set.
     */
    "Proxy": NamedNode<'https://www.ica.org/standards/RiC/ontology#Proxy'>;
    /**
     * Connects a Proxy to the Record Resource it stands for in the
     *             specific context of a Record Set.
     */
    "proxyFor": NamedNode<'https://www.ica.org/standards/RiC/ontology#proxyFor'>;
    /**
     * Connects a Proxy to the Record Set in which it stands for
     *             (represents) another Record Resource.
     */
    "proxyIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#proxyIn'>;
    /** Date of the publication of a Record Resource. */
    "publicationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#publicationDate'>;
    /**
     * Characteristics of an Instantiation that affect the ability to
     *             recover the intellectual content. Such characteristics may be related to the methods
     *             used in creating the Instantiation or introduced subsequent to the creation through
     *             accident.
     */
    "qualityOfRepresentationNote": NamedNode<'https://www.ica.org/standards/RiC/ontology#qualityOfRepresentationNote'>;
    /** Machine-readable quantity. */
    "quantity": NamedNode<'https://www.ica.org/standards/RiC/ontology#quantity'>;
    /**
     * Discrete information content formed and inscribed, at least
     *             once, by any method on any carrier in any persistent, recoverable form by an Agent in
     *             the course of life or work activity.
     */
    "Record": NamedNode<'https://www.ica.org/standards/RiC/ontology#Record'>;
    /**
     * Component of a Record with independent information content that
     *             contributes to the intellectual completeness of the Record.
     */
    "RecordPart": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordPart'>;
    /**
     * Information produced or acquired and retained by an Agent in the
     *             course of life or work activity.
     */
    "RecordResource": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResource'>;
    /**
     * The quantity of information content, as human experienced,
     *             contained in a Record Resource. The method and precision of expressing the quantity of
     *             information represented in a Record Resource will vary according to the kind of Record
     *             Resource being described, processing economy constraints, etc. For record sets, quantity
     *             may be expressed as number of records, or, for analogue records in particular, by the
     *             physical storage dimensions of the members of the Record Set. For individual records or
     *             record parts, quantity may be expressed in more precise terms. 
     */
    "recordResourceExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceExtent'>;
    /**
     * The quantity of information content, as human experienced,
     *             contained in a Record Resource.
     */
    "RecordResourceExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceExtent'>;
    /**
     * Connects a RecordResourceGeneticRelation to itself. It is a
     *             property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "recordResourceGeneticRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceGeneticRelation_role'>;
    /**
     * Connects two or more record resources when there is a genetic
     *             link between them. Genetic in this sense is as defined by diplomatics, i.e., the process
     *             by which a record resource is developed. This Relation is a generic, not oriented
     *             one.
     */
    "RecordResourceGeneticRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceGeneticRelation'>;
    /**
     * Connects a RecordResourceHoldingRelation to itself. It is a
     *             property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "recordResourceHoldingRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceHoldingRelation_role'>;
    /**
     * Connects at least one Agent and one or more Record Resource or
     *             Instantiation that the Agent(s) hold(s) or held. The Agent(s) is the source of the
     *             Relation and the Record Resource(s) or Instantiation is the target.
     */
    "RecordResourceHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceHoldingRelation'>;
    /**
     * Information about the intellectual arrangement and composition
     *             of a Record Resource. For Record and Record Part, it encompasses information about the
     *             intellectual composition of the record, the presence of record parts and their
     *             functions. For Record Set, it encompasses information about the methodology or criteria
     *             used for arranging the Record Set members or Record members within the containing Record
     *             Set
     */
    "recordResourceStructure": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceStructure'>;
    /**
     * Connects a RecordResourceToInstantiationRelation to itself. It
     *             is a property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "recordResourceToInstantiationRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceToInstantiationRelation_role'>;
    /**
     * Connects a Record Resource to one or more Instantiations that
     *             instantiate it, and which either may exist or may have been lost or destroyed. The
     *             Record Resource is the source of the Relation and the Instantiation(s) is the
     *             target.
     */
    "RecordResourceToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceToInstantiationRelation'>;
    /**
     * Connects a RecordResourceToRecordResourceRelation to itself. It
     *             is a property that can stand for an instance of the class when necessary, e.g. when you
     *             explore a knowledge graph.
     */
    "recordResourceToRecordResourceRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceToRecordResourceRelation_role'>;
    /**
     * Connects at least two Record Resources. This Relation is a
     *             generic, not oriented one.
     */
    "RecordResourceToRecordResourceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceToRecordResourceRelation'>;
    /**
     * One or more records that are grouped together by an Agent based
     *             on the records sharing one or more attributes or relations.
     */
    "RecordSet": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordSet'>;
    /** A broad categorization of the type of Record Set. */
    "RecordSetType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordSetType'>;
    /**
     * Description of the production or reproduction status of a Record
     *             or Record Part.
     */
    "RecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordState'>;
    /**
     * Framework or standard used to represent an
     *             information.
     */
    "referenceSystem": NamedNode<'https://www.ica.org/standards/RiC/ontology#referenceSystem'>;
    /**
     * Connects a Rule to a Thing that it regulates or
     *             regulated.
     */
    "regulatesOrRegulated": NamedNode<'https://www.ica.org/standards/RiC/ontology#regulatesOrRegulated'>;
    /**
     * Connects a Relation to itself. It is a property that can stand
     *             for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "relation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#relation_role'>;
    /**
     * The top level relation class. It connects at least two Things.
     *             An instance of a Relation may have some datatype and object properties: a general
     *             description (datatype property) like any Thing; a certainty (for 'certain', 'quite
     *             probable', 'uncertain','unknown'); a date (use either the date datatype property or the
     *             Date class and isAssociatedWithDate object property); a state (relationState); a
     *             location (use the Place class and isAssociatedWithPlace object property); a source of
     *             information that can be used as an evidence for it (use either source datatype property
     *             or hasSource object property). This Relation is the most generic one; it is not
     *             oriented.
     */
    "Relation": NamedNode<'https://www.ica.org/standards/RiC/ontology#Relation'>;
    /**
     * Qualifies the level of certitude of the accuracy of a
     *             Relation.
     */
    "relationCertainty": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationCertainty'>;
    /**
     * Connects an n-ary Relation to any of the Things
     *             involved.
     */
    "relationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationConnects'>;
    /**
     * Connects an n-ary Relation to a Thing that is a secondary,
     *             contextual entity during the existence of the Relation.
     */
    "relationHasContext": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationHasContext'>;
    /**
     * Connects an n-ary Relation to a Thing that is its
     *             source.
     */
    "relationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationHasSource'>;
    /**
     * Connects an n-ary Relation to a Thing that is its
     *             target.
     */
    "relationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationHasTarget'>;
    /**
     * A source of information used for identifying and describing a
     *             Relation.
     */
    "relationSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationSource'>;
    /**
     * Used to qualify the state of a Relation (e. g. present, past,
     *             ongoing, unknown).
     */
    "relationState": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationState'>;
    /**
     * Method of recording the content type of an
     *             Instantiation
     */
    "RepresentationType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RepresentationType'>;
    /** Inverse of 'was merged into' object property. */
    "resultedFromTheMergerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#resultedFromTheMergerOf'>;
    /** Inverse of 'was split into' object property. */
    "resultedFromTheSplitOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#resultedFromTheSplitOf'>;
    /**
     * Inverse of 'results or resulted in' object
     *             property.
     */
    "resultsOrResultedFrom": NamedNode<'https://www.ica.org/standards/RiC/ontology#resultsOrResultedFrom'>;
    /**
     * Connects an Event to a Thing that results or resulted from the
     *             Event.
     */
    "resultsOrResultedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#resultsOrResultedIn'>;
    /**
     * When it exists, specifies the identifier and name of RiC-CM
     *             component that corresponds to the annotated class or property.
     */
    "RiCCMCorrespondingComponent": NamedNode<'https://www.ica.org/standards/RiC/ontology#RiCCMCorrespondingComponent'>;
    /**
     * Connects a Role Type to a Creation Relation (this Role Type
     *             being the specific role played by the creating Person in the context of this
     *             Relation).
     */
    "roleIsContextOfCreationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#roleIsContextOfCreationRelation'>;
    /**
     * The role an Agent plays in some context (usually in some
     *             creation relation). Not to be confused with a Position (position of an agent in some
     *             group). For example, a Person who is the head of some Corporate Body may play the role
     *             of annotator (of a record) in a creation relation.
     */
    "RoleType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RoleType'>;
    /**
     * Conditions that govern the existence, responsibility, or
     *             authority of an Agent; or the performance of an Activity by an Agent; or that contribute
     *             to the distinct characteristics of things created or managed by an Agent.
     */
    "Rule": NamedNode<'https://www.ica.org/standards/RiC/ontology#Rule'>;
    /**
     * The rule or conditions that govern the existence or lifecycle of
     *             a Thing.
     */
    "ruleFollowed": NamedNode<'https://www.ica.org/standards/RiC/ontology#ruleFollowed'>;
    /**
     * Connects a RuleRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "ruleRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#ruleRelation_role'>;
    /**
     * Connects at least one Rule to at least one Thing when it is
     *             associated with existence and lifecycle of the Thing. The Rule(s) is the source of the
     *             Relation, and the Thing(s) is the target.
     */
    "RuleRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RuleRelation'>;
    /** Categorization of a Rule. */
    "RuleType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RuleType'>;
    /**
     * Summary of the scope (such as time periods, geography) and
     *             content (such as subject matter, administrative processes) of a Record Resource.
     *             Provides a more complete summary of the informational content of the Record Resource
     *             highlighting the information conveyed in the Record Resource, why it was created,
     *             received, and/or maintained, and the agents connected to it. It may include description
     *             of relations with agents, activities, dates and places, or with other record
     *             resources.
     */
    "scopeAndContent": NamedNode<'https://www.ica.org/standards/RiC/ontology#scopeAndContent'>;
    /**
     * Connects a SequentialRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "sequentialRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#sequentialRelation_role'>;
    /**
     * Connects at least one Thing to at least one other Thing that
     *             follows or followed it in some sequence. The Relation is oriented from the first
     *             Thing(s) in the sequence to the following one(s): the first Thing(s) is the source, and
     *             the following Thing(s) is the target.
     */
    "SequentialRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#SequentialRelation'>;
    /**
     * Connects a SiblingRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "siblingRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#siblingRelation_role'>;
    /**
     * Connects at least two Persons, when they are siblings. This
     *             Relation is not oriented.
     */
    "SiblingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#SiblingRelation'>;
    /**
     * Connects a SpouseRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "spouseRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#spouseRelation_role'>;
    /**
     * Connects at least two Persons, when they are spouses. This
     *             Relation is not oriented.
     */
    "SpouseRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#SpouseRelation'>;
    /**
     * Information about the intellectual arrangement and composition
     *             of a Record Resource or the physical arrangement and composition of an Instantiation.
     *             For Record and Record Part, it encompasses information about the intellectual
     *             composition of the record, the presence of record parts and their functions. For Record
     *             Set, it encompasses information about the methodology or criteria used for arranging the
     *             Record Set members or Record members within the containing Record Set. For
     *             Instantiation, it may comprise information about the composition of the physical
     *             elements of the instantiation
     */
    "structure": NamedNode<'https://www.ica.org/standards/RiC/ontology#structure'>;
    /**
     * Connects a TeachingRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "teachingRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#teachingRelation_role'>;
    /**
     * Connects at least one Person to at least another Person who is
     *             or was their student. The Relation is oriented from the teacher(s) to the student(s):
     *             the teacher Person(s) is the source of the Relation, and the student Person(s) is the
     *             target.
     */
    "TeachingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#TeachingRelation'>;
    /**
     * Describes any relevant physical or software feature of any
     *             device involved in the creation or management of a Record Resource.
     */
    "technicalCharacteristics": NamedNode<'https://www.ica.org/standards/RiC/ontology#technicalCharacteristics'>;
    /**
     * Connects a TemporalRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "temporalRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#temporalRelation_role'>;
    /**
     * Connects at least one Thing to at least one other Thing that
     *             follows it in chronological order. The Relation is oriented chronologically: the
     *             preceding Thing(s) is the source of the Relation, the following Thing(s) is the
     *             target.
     */
    "TemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#TemporalRelation'>;
    /** A textual expression of an Appellation or Date. */
    "textualValue": NamedNode<'https://www.ica.org/standards/RiC/ontology#textualValue'>;
    /**
     * Any idea, material thing, or event within the realm of human
     *             experience.
     */
    "Thing": NamedNode<'https://www.ica.org/standards/RiC/ontology#Thing'>;
    /** Connects a Thing to a n-ary Relation. */
    "thingIsConnectedToRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsConnectedToRelation'>;
    /**
     * Connects a Thing (that is a secondary, contextual entity during
     *             the existence of the Relation) to a n-ary Relation.
     */
    "thingIsContextOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsContextOfRelation'>;
    /**
     * Connects a Thing (that is the source of a Relation) to a
     *             Relation.
     */
    "thingIsSourceOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsSourceOfRelation'>;
    /**
     * Connects a Thing (that is the target of a Relation) to a n-ary
     *             Relation.
     */
    "thingIsTargetOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfRelation'>;
    /**
     * An identifying name of a Record Resource, Instantiation or
     *             Rule.
     */
    "title": NamedNode<'https://www.ica.org/standards/RiC/ontology#title'>;
    /**
     * A name that is used for a Record Resource or a
     *             Rule
     */
    "Title": NamedNode<'https://www.ica.org/standards/RiC/ontology#Title'>;
    /** A term used to characterize an entity. */
    "type": NamedNode<'https://www.ica.org/standards/RiC/ontology#type'>;
    /**
     * A superclass for any category of some thing. A type
     *             characterizes an entity.
     */
    "Type": NamedNode<'https://www.ica.org/standards/RiC/ontology#Type'>;
    /**
     * Connects a TypeRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "typeRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#typeRelation_role'>;
    /**
     * Connects a category (a Type) and at least one Thing that belongs
     *             to this category. The Type(s) is the source of the Relation, and the Thing(s) is the
     *             target.
     */
    "TypeRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#TypeRelation'>;
    /**
     * A definite magnitude of a quantity, defined and adopted by
     *             convention or by law, that is used as a standard for measurement of the same kind of
     *             quantity. Can be spacial units (cm, m), weight (g, kg), time (s, h), storage (MB, TB) or
     *             more informal units used in the archival context like number of boxes, pages or
     *             words.
     */
    "unitOfMeasurement": NamedNode<'https://www.ica.org/standards/RiC/ontology#unitOfMeasurement'>;
    /**
     * A definite magnitude of a quantity, defined and adopted by
     *             convention or by law, that is used as a standard for measurement of the same kind of
     *             quantity. Can be spacial units (cm, m), weight (g, kg), time (s, h), storage (MB, TB) or
     *             more informal units used in the archival context like number of boxes, pages or
     *             words.
     */
    "UnitOfMeasurement": NamedNode<'https://www.ica.org/standards/RiC/ontology#UnitOfMeasurement'>;
    /** Date at which an Appellation was first used. */
    "usedFromDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#usedFromDate'>;
    /** Date until an Appellation was used. */
    "usedToDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#usedToDate'>;
    /**
     * Connects an Instantiation to another Instantiation of which it
     *             was a component in the past.
     */
    "wasComponentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasComponentOf'>;
    /**
     * Connects a Record or Record Part to another Record or Record
     *             Part of which it was a constituent in the past.
     */
    "wasConstituentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasConstituentOf'>;
    /**
     * Connects a Place to a Place within which it was
     *             contained.
     */
    "wasContainedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasContainedBy'>;
    /**
     * Connects a Record to a Record or Record Set in which it was
     *             included in the past.
     */
    "wasIncludedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasIncludedIn'>;
    /**
     * Connects a Thing to the Date when it was last
     *             modified.
     */
    "wasLastUpdatedAtDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasLastUpdatedAtDate'>;
    /**
     * Connects a Corporate Body to another Corporate Body that is the
     *             result of a merger of the previous one with one to many other corporate
     *             bodies.
     */
    "wasMergedInto": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasMergedInto'>;
    /**
     * Connects a Thing to a Thing of which it was a constitutive or
     *             component part in the past.
     */
    "wasPartOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasPartOf'>;
    /**
     * Connects a Corporate Body to one of the Corporate Bodies that
     *             results from the split of the previous one into two to many corporate
     *             bodies.
     */
    "wasSplitInto": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasSplitInto'>;
    /**
     * Connects a subdivision to the Group it was a part of in the
     *             past.
     */
    "wasSubdivisionOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasSubdivisionOf'>;
    /**
     * Connects a past Event to the broader Event of which it was a
     *             part.
     */
    "wasSubeventOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasSubeventOf'>;
    /**
     * Connects an Agent to an Agent that was hierarchically superior
     *             in the past.
     */
    "wasSubordinateTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasSubordinateTo'>;
    /**
     * Connects an Appellation to the Date from which it was
     *             used.
     */
    "wasUsedFromDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasUsedFromDate'>;
    /**
     * Connects an Appellation to the Date till when it was
     *             used.
     */
    "wasUsedToDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasUsedToDate'>;
    /**
     * Connects a WholePartRelation to itself. It is a property that
     *             can stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "wholePartRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#wholePartRelation_role'>;
    /**
     * Connects a Thing to at least one other Thing that is or was a
     *             portion or division of the whole Thing. The Relation is oriented from the Thing to its
     *             part(s): the Thing is the source of the Relation, and the part Thing(s) is the
     *             target.
     */
    "WholePartRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#WholePartRelation'>;
    /** Horizontal dimension of an entity. */
    "width": NamedNode<'https://www.ica.org/standards/RiC/ontology#width'>;
    /**
     * Connects a WorkRelation to itself. It is a property that can
     *             stand for an instance of the class when necessary, e.g. when you explore a knowledge
     *             graph.
     */
    "workRelation_role": NamedNode<'https://www.ica.org/standards/RiC/ontology#workRelation_role'>;
    /**
     * Connects at least two Agents that have or had some type of work
     *             relation in the course of their activities. This Relation is not
     *             oriented.
     */
    "WorkRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#WorkRelation'>;
}

const builder = namespace("https://www.ica.org/standards/RiC/ontology#") as any;
export const strict = builder as NamespaceBuilder<keyof Rico> & Rico;
export const loose = builder as NamespaceBuilder & Rico;
