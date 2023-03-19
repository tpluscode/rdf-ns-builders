import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rico {
    '': NamedNode<'https://www.ica.org/standards/RiC/ontology#'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Agent, when the Agent accumulates it, be it intentionally (collecting it) or
     *             not (receiving it in the course of its activities).
     */
    "AccumulationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AccumulationRelation'>;
    /**
     * Connects at least one Record Resource or an Instantiation to at
     *             least one Agent that creates or accumulates the Record Resource, receives it, or sends
     *             it.
     */
    "AgentOriginationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentOriginationRelation'>;
    /**
     * When it exists, specifies the identifier and name of RiC-CM
     *             component that corresponds to the annotated class or property.
     */
    "RiCCMCorrespondingComponent": NamedNode<'https://www.ica.org/standards/RiC/ontology#RiCCMCorrespondingComponent'>;
    /** The doing of something for some human purpose. */
    "Activity": NamedNode<'https://www.ica.org/standards/RiC/ontology#Activity'>;
    /** Something that happens in time and space. */
    "Event": NamedNode<'https://www.ica.org/standards/RiC/ontology#Event'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Activity, when the Record Resource or Instantiation results from the
     *             activity.
     */
    "ActivityDocumentationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ActivityDocumentationRelation'>;
    /**
     * Specifies the provenance or origin of at least one Record
     *             Resource or Instantiation, for example the relation between a Record Resource and the
     *             Agent which created it or the Activity from which it resulted.
     */
    "ProvenanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ProvenanceRelation'>;
    /** Categorization of an Activity. */
    "ActivityType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ActivityType'>;
    /**
     * A superclass for any category of some thing. A type
     *             characterizes an entity.
     */
    "Type": NamedNode<'https://www.ica.org/standards/RiC/ontology#Type'>;
    /**
     * A Person, or Group, or an entity created by a Person or Group
     *             (Mechanism), or a Position, that acts in the world.
     */
    "Agent": NamedNode<'https://www.ica.org/standards/RiC/ontology#Agent'>;
    /**
     * Any idea, material thing, or event within the realm of human
     *             experience.
     */
    "Thing": NamedNode<'https://www.ica.org/standards/RiC/ontology#Thing'>;
    /**
     * Connects at least one Agent, to at least another Agent, when the
     *             first one(s) control(s) in a way the activities of the second one(s).
     */
    "AgentControlRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentControlRelation'>;
    /**
     * Connects at least one Agent to at least another Agent, when the
     *             first one is hierarchically superior to the second one.
     */
    "AgentHierarchicalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentHierarchicalRelation'>;
    /**
     * Connects at least one Agent, and at least one Thing over which
     *             the Agent has some authority.
     */
    "AuthorityRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AuthorityRelation'>;
    /** Connects at least two Agents. */
    "AgentToAgentRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentToAgentRelation'>;
    /**
     * A label, title or term designating an Agent in order to make it
     *             distinguishable from other similar entities.
     */
    "AgentName": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentName'>;
    /**
     * A label, title or term designating the entity in order to make
     *             it distinguishable from other similar entities.
     */
    "Name": NamedNode<'https://www.ica.org/standards/RiC/ontology#Name'>;
    /**
     * Connects at least one Agent, to at least another Agent, that
     *             succeeds it chronologically for, for instance, fullfilling some functions or performing
     *             some activities.
     */
    "AgentTemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AgentTemporalRelation'>;
    /**
     * Connects at least one Thing to at least one Thing that follows
     *             it in chronological order.
     */
    "TemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#TemporalRelation'>;
    /**
     * The top level relation class. It connects at least two Things.
     *             An instance of a Relation may have some datatype and object properties : a descriptive
     *             note (datatype property) like any Thing ; certainty (for 'certain', 'quite probable',
     *             'uncertain','unknown'); a date (use either the date datatype property or the Date class
     *             and isAssociatedWithDate object property ; a state (relationState) ; a location (use
     *             Place class and isAssociatedWithPlace object property) ; a source of information that
     *             can be used as an evidence for it (use either source datatype property or hasSource
     *             object property).
     */
    "Relation": NamedNode<'https://www.ica.org/standards/RiC/ontology#Relation'>;
    /**
     * A concept of any kind that is used for designating an Entity and
     *             referring to it.
     */
    "Appellation": NamedNode<'https://www.ica.org/standards/RiC/ontology#Appellation'>;
    /**
     * An idea, unit of thought, abstract cultural object or
     *             category
     */
    "Concept": NamedNode<'https://www.ica.org/standards/RiC/ontology#Concept'>;
    /**
     * The relation between an Appellation and at least one Thing that
     *             the Appellation designates.
     */
    "AppellationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AppellationRelation'>;
    /**
     * Connects at least one Record to at least one Person, Group or
     *             Position that is responsible for conceiving and formulating the information contained in
     *             the Record.
     */
    "AuthorshipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#AuthorshipRelation'>;
    /**
     * Connects at least one Record Resource or Instantiation to at
     *             least one Agent, when the Agent is either responsible for all or some of the content of
     *             the Record Resource, or is a contributor to the genesis or production of the
     *             Instantiation.
     */
    "CreationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#CreationRelation'>;
    /** The extent of a Record Resource carrier */
    "CarrierExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#CarrierExtent'>;
    /**
     * Countable characteristics of the content of an entity expressed
     *             as a quantity.
     */
    "Extent": NamedNode<'https://www.ica.org/standards/RiC/ontology#Extent'>;
    /**
     * Categorization of physical material in or on which information
     *             is represented.
     */
    "CarrierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#CarrierType'>;
    /**
     * Connects at lest one Person, to at least another Person, when
     *             the first has child the second one.
     */
    "ChildRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ChildRelation'>;
    /**
     * Connects at least one Person to at least another Person, when
     *             the first has/have descendant the second one(s).
     */
    "DescendanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#DescendanceRelation'>;
    /**
     * The fundamental form of communication in which a Record is
     *             expressed and the human sense through which it is intended to be
     *             perceived.
     */
    "ContentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ContentType'>;
    /**
     * Longitudinal and latitudinal information of a
     *             Place.
     */
    "Coordinates": NamedNode<'https://www.ica.org/standards/RiC/ontology#Coordinates'>;
    /**
     * An organized group of persons that act together as an Agent, and
     *             that has a recognized legal or social status.
     */
    "CorporateBody": NamedNode<'https://www.ica.org/standards/RiC/ontology#CorporateBody'>;
    /** Two or more Agents that act together as an Agent. */
    "Group": NamedNode<'https://www.ica.org/standards/RiC/ontology#Group'>;
    /** Categorization of a Corporate Body. */
    "CorporateBodyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#CorporateBodyType'>;
    /**
     * Connects at least two Persons, when they correspond to each
     *             other.
     */
    "CorrespondenceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#CorrespondenceRelation'>;
    /**
     * Connects at least two Persons that directly know each other
     *             during their existence. This relation is symmetric.
     */
    "KnowingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#KnowingRelation'>;
    /**
     * Chronological information associated with an entity that
     *             contributes to its identification and contextualization.
     */
    "Date": NamedNode<'https://www.ica.org/standards/RiC/ontology#Date'>;
    /**
     * Chronological information associated with an entity that
     *             contributes to its identification and contextualization, that implies or explicitly
     *             states a start date and end date.
     */
    "DateRange": NamedNode<'https://www.ica.org/standards/RiC/ontology#DateRange'>;
    /** Non-contiguous single dates or date ranges. */
    "DateSet": NamedNode<'https://www.ica.org/standards/RiC/ontology#DateSet'>;
    /**
     * Categorization of a person according to characteristics such as
     *             age, gender, education, place of origin, ethnic/cultural identification, religion,
     *             etc.
     */
    "DemographicGroup": NamedNode<'https://www.ica.org/standards/RiC/ontology#DemographicGroup'>;
    /**
     * Connects an Instantiation to at least one Instantiation that is
     *             derived from it.
     */
    "DerivationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#DerivationRelation'>;
    /** Connects at least two instantiations */
    "InstantiationToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#InstantiationToInstantiationRelation'>;
    /**
     * Connects at least two Persons, when they have some family link,
     *             i.e. belong to the same family.
     */
    "FamilyRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#FamilyRelation'>;
    /**
     * Categorization of the document with respect to its extrinsic and
     *             intrinsic elements that together communicate its content, administrative and documentary
     *             context, and authority
     */
    "DocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#DocumentaryFormType'>;
    /**
     * An annotation property for recording a possible mapping to a
     *             component in another model or ontology
     */
    "closeTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#closeTo'>;
    /**
     * Connects at least one Event to at least one Thing, when the
     *             first is associated with the existence and lifecycle of the second one.
     */
    "EventRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#EventRelation'>;
    /** Categorization of an Event. */
    "EventType": NamedNode<'https://www.ica.org/standards/RiC/ontology#EventType'>;
    /** Categorization of the extent that is being measured */
    "ExtentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ExtentType'>;
    /**
     * Two or more persons related by birth, or through marriage,
     *             adoption, civil union, or other social conventions that bind them together as a socially
     *             recognized familial group.
     */
    "Family": NamedNode<'https://www.ica.org/standards/RiC/ontology#Family'>;
    /** Categorization of a Family. */
    "FamilyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#FamilyType'>;
    /**
     * Connects at least two Instantiations which may be considered as
     *             equivalent.
     */
    "FunctionalEquivalenceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#FunctionalEquivalenceRelation'>;
    /**
     * A process or system created by a Person or Group that performs
     *             an Activity.
     */
    "Mechanism": NamedNode<'https://www.ica.org/standards/RiC/ontology#Mechanism'>;
    /** A human being with a social identity or persona. */
    "Person": NamedNode<'https://www.ica.org/standards/RiC/ontology#Person'>;
    /** The functional role of a Person within a Group. */
    "Position": NamedNode<'https://www.ica.org/standards/RiC/ontology#Position'>;
    /**
     * Connects a Group and at least another Group, when the first one
     *             as the second one(s) among its subdivisions.
     */
    "GroupSubdivisionRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#GroupSubdivisionRelation'>;
    /**
     * Connects a Thing to at least one constitutive or component part
     *             of that Thing.
     */
    "WholePartRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#WholePartRelation'>;
    /**
     * A word, number, letter, symbol, or any combination of these used
     *             to uniquely identify or reference an individual instance of an entity within a specific
     *             information domain.
     */
    "Identifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#Identifier'>;
    /** Categorization of an Identifier. */
    "IdentifierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#IdentifierType'>;
    /**
     * The inscription of information made by an Agent on a physical
     *             carrier in any persistent, recoverable form as a means of communicating information
     *             through time and space.
     */
    "Instantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#Instantiation'>;
    /** The extent of an Instantiation. */
    "InstantiationExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#InstantiationExtent'>;
    /**
     * Connects at least one Agent and one Record Resource or
     *             Instantiation on which the Agent has some intellectual property rights.
     */
    "IntellectualPropertyRightsRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#IntellectualPropertyRightsRelation'>;
    /**
     * Connects at least one Person to at least another one, when the
     *             first one has some knowledge of the second one through time or space.
     */
    "KnowingOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#KnowingOfRelation'>;
    /**
     * A spoken or written human language represented in the Record or
     *             Record Part, or used by the Agent.
     */
    "Language": NamedNode<'https://www.ica.org/standards/RiC/ontology#Language'>;
    /**
     * Connects at least one Person and at least one Group, when the
     *             first one leads the second one.
     */
    "LeadershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#LeadershipRelation'>;
    /** A status defined by law. */
    "LegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#LegalStatus'>;
    /**
     * Connects at least one Agent, and at least one Record Resource or
     *             Instantiation that the Agent manages.
     */
    "ManagementRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ManagementRelation'>;
    /**
     * Delegation of authority by an Agent to another Agent to perform
     *             an Activity.
     */
    "Mandate": NamedNode<'https://www.ica.org/standards/RiC/ontology#Mandate'>;
    /** Conditions that govern the existence or authority of an Agent or the performance of an Activity, or that contribute to the distinct characteristics of things created or managed by an Agent. */
    "Rule": NamedNode<'https://www.ica.org/standards/RiC/ontology#Rule'>;
    /**
     * Connects at least one Mandate, and at least one Agent, when the
     *             first gives the second one the authority or competencies to act. May also involve one to
     *             many Activities that the Mandate(s) assign(s) to the Agent(s).
     */
    "MandateRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#MandateRelation'>;
    /**
     * Connects at least one Rule to at least one Thing, when it is
     *             associated with existence and lifecycle of the Thing.
     */
    "RuleRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RuleRelation'>;
    /**
     * Connects a Group and at least one Person, when the first one has
     *             the second one(s) among its members.
     */
    "MembershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#MembershipRelation'>;
    /**
     * Connects an Instantiation and at least another Instantiation,
     *             when the first is migrated into the second one(s).
     */
    "MigrationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#MigrationRelation'>;
    /**
     * Categorization of a profession, trade, or craft pursued by a
     *             person in fulfilment of an Activity.
     */
    "OccupationType": NamedNode<'https://www.ica.org/standards/RiC/ontology#OccupationType'>;
    /**
     * Connects at least one Group, Person or Position, and at least a
     *             Thing that these Agent(s) own(s).
     */
    "OwnershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#OwnershipRelation'>;
    /**
     * Connects at least one Activity to at least one Agent, when the
     *             first is performed by the second one(s).
     */
    "PerformanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PerformanceRelation'>;
    /**
     * A delimitation of the physical territory of a
     *             Place.
     */
    "PhysicalLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PhysicalLocation'>;
    /** Bounded, named geographic area or region. */
    "Place": NamedNode<'https://www.ica.org/standards/RiC/ontology#Place'>;
    /**
     * A label, title or term designating a Place in order to make it
     *             distinguishable from other similar entities.
     */
    "PlaceName": NamedNode<'https://www.ica.org/standards/RiC/ontology#PlaceName'>;
    /**
     * Connects a Place and at least one Thing, when the first is
     *             associated with the existence and lifecycle of the second one.
     */
    "PlaceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PlaceRelation'>;
    /** Categorization of a Place. */
    "PlaceType": NamedNode<'https://www.ica.org/standards/RiC/ontology#PlaceType'>;
    /**
     * Connects at least one Person, and at least one Position that the
     *             Person occupies.
     */
    "PositionHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PositionHoldingRelation'>;
    /**
     * Connects at least one Position, and a Group, when the first
     *             one(s) exist(s) in/is defined within the second one.
     */
    "PositionToGroupRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#PositionToGroupRelation'>;
    /**
     * Categorization of the method used in the representation of
     *             information on the Instantiation.
     */
    "ProductionTechniqueType": NamedNode<'https://www.ica.org/standards/RiC/ontology#ProductionTechniqueType'>;
    /**
     * A Proxy represents (stands for) a Record Resource as it exists
     *             in a specific Record Set.
     */
    "Proxy": NamedNode<'https://www.ica.org/standards/RiC/ontology#Proxy'>;
    /**
     * Information inscribed at least once by any method on any
     *             physical carrier in any persistent, recoverable form by an Agent in the course of life
     *             or work Activity.
     */
    "Record": NamedNode<'https://www.ica.org/standards/RiC/ontology#Record'>;
    /**
     * A Record, Record Set, or Record Part produced or acquired and
     *             retained by an Agent in the course of Activity.
     */
    "RecordResource": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResource'>;
    /**
     * Part of a Record with discrete information content that
     *             contributes to the Record's physical or intellectual completeness.
     */
    "RecordPart": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordPart'>;
    /** The extent of the content of a Record Resource. */
    "RecordResourceExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceExtent'>;
    /**
     * Connects two to more Record Resources when there is a genetic
     *             relation between them. Genetic in this sense is as defined by diplomatics, i.e. the
     *             process by which a Record Resource is developed.
     */
    "RecordResourceGeneticRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceGeneticRelation'>;
    /** Connects at least two Record Resources. */
    "RecordResourceToRecordResourceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceToRecordResourceRelation'>;
    /**
     * Connects at least one Agent, and one or more Record Resource or
     *             Instantiation that the Agent holds.
     */
    "RecordResourceHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceHoldingRelation'>;
    /**
     * Connects a Record Resource to one or more Instantiations that
     *             instantiate it.
     */
    "RecordResourceToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordResourceToInstantiationRelation'>;
    /**
     * One or more records that are associated by categorization and/or
     *             physical aggregation by the creator or other Agent.
     */
    "RecordSet": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordSet'>;
    /** A broad categorization of the type of Record Set. */
    "RecordSetType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordSetType'>;
    /**
     * Categorization of the production or reproduction status of a
     *             Record or Record Part.
     */
    "RecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#RecordState'>;
    /**
     * Categorization of the method of recording the content type of a
     *             Record Resource.
     */
    "RepresentationType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RepresentationType'>;
    /**
     * The role an agent plays in some context (usually in some
     *             creation relation). Not to be confused with a position (position of an agent in some
     *             group). For example, a person who is the head of some corporate body may play the role
     *             of annotator (of a record) in a creation relation.
     */
    "RoleType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RoleType'>;
    /** Categorization of a Rule. */
    "RuleType": NamedNode<'https://www.ica.org/standards/RiC/ontology#RuleType'>;
    /**
     * Connects at least one Thing to at least one Thing that follows
     *             it in some sequence.
     */
    "SequentialRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#SequentialRelation'>;
    /**
     * Connects at least two Persons, when they are
     *             siblings.
     */
    "SiblingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#SiblingRelation'>;
    /**
     * Chronological information associated with an entity that
     *             contributes to its identification and contextualization, related to a single point in
     *             time.
     */
    "SingleDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#SingleDate'>;
    /**
     * Connects at least two Persons, when they are
     *             spouses.
     */
    "SpouseRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#SpouseRelation'>;
    /**
     * Connects at least one Person to at least another Person, who is
     *             their student.
     */
    "TeachingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#TeachingRelation'>;
    /**
     * A name that is used for a Record Resource or a
     *             Rule
     */
    "Title": NamedNode<'https://www.ica.org/standards/RiC/ontology#Title'>;
    /**
     * Connects a category (a Type) and at least one Thing that belongs
     *             to this category.
     */
    "TypeRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#TypeRelation'>;
    /**
     * A definite magnitude of a quantity, defined and adopted by convention or by
     *             law, that is used as a standard for measurement of the same kind of quantity. Can be
     *             spacial units (cm, m), weigt (g, kg), time (s, h), storage (MB, TB) or more informal
     *             units used in the archival context like number of boxes, pages or words.
     */
    "UnitOfMeasurement": NamedNode<'https://www.ica.org/standards/RiC/ontology#UnitOfMeasurement'>;
    /**
     * Connects at least two Agents that have some type of work
     *             relation in the course of their activities.
     */
    "WorkRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#WorkRelation'>;
    /**
     * Information on the anticipated accession(s) to the Record
     *             Set.
     */
    "accrual": NamedNode<'https://www.ica.org/standards/RiC/ontology#accrual'>;
    /** Information on the status of an Accrual */
    "accrualStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#accrualStatus'>;
    /**
     * Connects an Accumulation Relation to one of the accumulated
     *             Record Resources or Instantiations
     */
    "accumulationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#accumulationRelationHasSource'>;
    /**
     * Connects an Agent Origination Relation to one of the resulting
     *             Record Resource or Instantiation
     */
    "agentOriginationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentOriginationRelationHasSource'>;
    /**
     * Connects a Record Resource or Instantiation (that is
     *             accumulated) to an Accumulation Relation.
     */
    "recordResourceOrInstantiationIsSourceOfAccumulationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsSourceOfAccumulationRelation'>;
    /**
     * Connects an Accumulation Relation to one of the accumulating
     *             Agents
     */
    "accumulationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#accumulationRelationHasTarget'>;
    /**
     * Connects an Agent Origination Relation to one of the creating or
     *             accumulating Agents
     */
    "agentOriginationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentOriginationRelationHasTarget'>;
    /**
     * Connects one of the accumulating Agents to an Accumulation
     *             Relation
     */
    "agentIsTargetOfAccumulationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfAccumulationRelation'>;
    /**
     * Connects an Activity Documentation Relation to one of the
     *             resulting Record Resources or Instantiations
     */
    "activityDocumentationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityDocumentationRelationHasSource'>;
    /**
     * Connects a Provenance Relation to a Record Resource or
     *             Instantiation.
     */
    "provenanceRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#provenanceRelationHasSource'>;
    /**
     * Connects a Record Resource or Instantiation (that documents an
     *             Activity) to an Activity Documentation Relation.
     */
    "recordResourceOrInstantiationIsSourceOfActivityDocumentationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsSourceOfActivityDocumentationRelation'>;
    /**
     * Connects an Activity Documentation Relation to one of the
     *             documented Activities
     */
    "activityDocumentationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityDocumentationRelationHasTarget'>;
    /**
     * Connects a Provenance Relation to an Agent or
     *             Activity.
     */
    "provenanceRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#provenanceRelationHasTarget'>;
    /**
     * Connects an Activity to an Activity Documentation
     *             Relation
     */
    "activityIsTargetOfActivityDocumentationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityIsTargetOfActivityDocumentationRelation'>;
    /**
     * Connects an Activity to an Agent Temporal Relation (when the
     *             Activity is transferred from an Agent to another one) or a Mandate Relation (the Mandate
     *             assigns the Activity to the Agent or defines it).
     */
    "activityIsContextOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityIsContextOfRelation'>;
    /**
     * Connects a Thing (that is a secondary, contextual entity during
     *             the existence of the Relation) to a n-ary Relation.
     */
    "thingIsContextOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsContextOfRelation'>;
    /**
     * Connects an Agent Temporal Relation or Mandate Relation, to an
     *             Activity that is, either transferred from an Agent to another one, or assigned by a
     *             Mandate to an Agent.
     */
    "asConcernsActivity": NamedNode<'https://www.ica.org/standards/RiC/ontology#asConcernsActivity'>;
    /**
     * Connects an Activity that is performed to a Performance
     *             Relation
     */
    "activityIsSourceOfPerformanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#activityIsSourceOfPerformanceRelation'>;
    /**
     * Connects a Thing (that is the source of a Relation) to a
     *             Relation.
     */
    "thingIsSourceOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsSourceOfRelation'>;
    /**
     * Connects a Performance Relation to a performed
     *             Activity.
     */
    "performanceRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#performanceRelationHasSource'>;
    /**
     * Connects an Agent or Activity that is the provenance of a Record
     *             resource or Instantiation, to a Provenance Relation
     */
    "agentOrActivityIsTargetOfProvenanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentOrActivityIsTargetOfProvenanceRelation'>;
    /**
     * Connects an Event to a Thing on which the Event has or had some
     *             significant impact.
     */
    "affectsOrAffected": NamedNode<'https://www.ica.org/standards/RiC/ontology#affectsOrAffected'>;
    /**
     * Connects an Event to a Thing that is or was actively or
     *             passively involved in it.
     */
    "hasOrHadParticipant": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadParticipant'>;
    /** Inverse of 'affects or affected' object property. */
    "isOrWasAffectedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAffectedBy'>;
    /**
     * Connects an Agent Control Relation to one of the controlling
     *             Agents
     */
    "agentControlRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentControlRelationHasSource'>;
    /**
     * Connects an Agent Hierarchical Relation to one of the
     *             hierarchically superior Agents
     */
    "agentHierarchicalRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentHierarchicalRelationHasSource'>;
    /**
     * Connects an Authority Relation to an Agent that has the
     *             authority
     */
    "authorityRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorityRelationHasSource'>;
    /**
     * Connects a controlling Agent to an Agent Control
     *             Relation
     */
    "agentIsSourceOfAgentControlRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfAgentControlRelation'>;
    /**
     * Connects an Agent Control Relation to one of the controlled
     *             Agents
     */
    "agentControlRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentControlRelationHasTarget'>;
    /**
     * Connects an Agent Hierarchical Relation to one of the
     *             hierarchically inferior Agents
     */
    "agentHierarchicalRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentHierarchicalRelationHasTarget'>;
    /**
     * Connects an Authority Relation to a Thing over which the
     *             Authority is performed
     */
    "authorityRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorityRelationHasTarget'>;
    /**
     * Connects one of the controlled Agents to an Agent Control
     *             Relation
     */
    "agentIsTargetOfAgentControlRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfAgentControlRelation'>;
    /** Connects an Agent to a Work Relation */
    "agentHasWorkRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentHasWorkRelation'>;
    /** Connects an Agent to an Agent Relation */
    "agentIsConnectedToAgentRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsConnectedToAgentRelation'>;
    /** Connects a Work Relation to an Agent. */
    "workRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#workRelationConnects'>;
    /**
     * Connects an Agent Relation to one of the involved
     *             Agents
     */
    "agentRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentRelationConnects'>;
    /**
     * Connects an n-ary Relation to a Thing that is its
     *             source.
     */
    "relationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationHasSource'>;
    /**
     * Connects a hierarchically superior Agent to an Agent
     *             Hierarchical Relation
     */
    "agentIsSourceOfAgentHierarchicalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfAgentHierarchicalRelation'>;
    /**
     * Connects an n-ary Relation to a Thing that is its
     *             target.
     */
    "relationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationHasTarget'>;
    /**
     * Connects one of the hierarchically inferior Agents to an Agent
     *             Hierarchical Relation
     */
    "agentIsTargetOfAgentHierarchicalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfAgentHierarchicalRelation'>;
    /** Connects a Thing to a n-ary Relation. */
    "thingIsConnectedToRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsConnectedToRelation'>;
    /**
     * Connects a predecessor Agent to an Agent Temporal
     *             Relation
     */
    "agentIsSourceOfAgentTemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfAgentTemporalRelation'>;
    /**
     * Connects a Thing to a Temporal Relation, when this Thing
     *             precedes other Thing(s) in time.
     */
    "thingIsSourceOfTemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsSourceOfTemporalRelation'>;
    /**
     * Connects an Agent Temporal Relation to one of the predecessor
     *             Agents
     */
    "agentTemporalRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentTemporalRelationHasSource'>;
    /**
     * Connects an Agent thas has the authority, to an Authority
     *             Relation
     */
    "agentIsSourceOfAuthorityRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfAuthorityRelation'>;
    /**
     * Connects an Agent having the intellectual property rights, to an
     *             Intellectual Property Rights Relation
     */
    "agentIsSourceOfIntellectualPropertyRightsRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfIntellectualPropertyRightsRelation'>;
    /**
     * Connects an IntellectualPropertyRightsRelation to one of the
     *             Group, Person or Position that holds the rights.
     */
    "intellectualPropertyRightsRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#intellectualPropertyRightsRelationHasSource'>;
    /** Connects a manager Agent to a Management Relation */
    "agentIsSourceOfManagementRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfManagementRelation'>;
    /**
     * Connects a Management Relation to an Agent who is involved as a
     *             manager.
     */
    "managementRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#managementRelationHasSource'>;
    /** Connects an owner Agent to an Ownership Relation */
    "agentIsSourceOfOwnershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfOwnershipRelation'>;
    /**
     * Connects an Ownership Relation to a Person, Group or Position
     *             that is involved as an owner.
     */
    "ownershipRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#ownershipRelationHasSource'>;
    /**
     * Connects an Agent that holds a Record Resource or Instantiation,
     *             to a Record Resource Holding Relation
     */
    "agentIsSourceOfRecordResourceHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsSourceOfRecordResourceHoldingRelation'>;
    /**
     * Connects a Record Resource Holding Relation to an Agent (as the
     *             holder of a Record Resource or Instantiation).
     */
    "recordResourceHoldingRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceHoldingRelationHasSource'>;
    /**
     * Connects one of the Agents that created or accumulated the
     *             Record resource or Instantiation, to an Agent Origination Relation
     */
    "agentIsTargetOfAgentOriginationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfAgentOriginationRelation'>;
    /**
     * Connects a Thing (that is under authority of an Agent) to an
     *             Authority Relation.
     */
    "thingIsTargetOfAuthorityRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfAuthorityRelation'>;
    /** Connects a Thing to a n-ary Relation. */
    "thingIsTargetOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfRelation'>;
    /**
     * Connects a successor Agent to an Agent Temporal
     *             Relation
     */
    "agentIsTargetOfAgentTemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfAgentTemporalRelation'>;
    /**
     * Connects a Thing (that follows other Thing(s) in time) to a
     *             Temporal Relation.
     */
    "thingIsTargetOfTemporalRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfTemporalRelation'>;
    /**
     * Connects an Agent Temporal Relation to one of the successor
     *             Agents
     */
    "agentTemporalRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentTemporalRelationHasTarget'>;
    /**
     * Connects a Person, Group or Position to an Authorship
     *             Relation.
     */
    "agentIsTargetOfAuthorshipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfAuthorshipRelation'>;
    /** Connects a creator Agent to a Creation Relation */
    "agentIsTargetOfCreationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfCreationRelation'>;
    /**
     * Connects an Authorship Relation to one of the author Person,
     *             Group or Position.
     */
    "authorshipRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorshipRelationHasTarget'>;
    /**
     * Connects a Creation Relation to one of the creator
     *             Agents
     */
    "creationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationRelationHasTarget'>;
    /** Connects a mandated Agent to a Mandate Relation */
    "agentIsTargetOfMandateRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfMandateRelation'>;
    /**
     * Connects a Thing (that is associated with a Rule) to a Rule
     *             Relation.
     */
    "thingIsTargetOfRuleRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfRuleRelation'>;
    /**
     * Connects a Mandate Relation to an Agent who is given the
     *             authority or competencies to act.
     */
    "mandateRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#mandateRelationHasTarget'>;
    /** Connects an Agent to a Performance Relation */
    "agentIsTargetOfPerformanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#agentIsTargetOfPerformanceRelation'>;
    /**
     * Connects a Performance Relation to a performing
     *             Agent.
     */
    "performanceRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#performanceRelationHasTarget'>;
    /**
     * Connects a Record Resource or Instantiation (that is created,
     *             sent or accumulated) to an Agent Origination Relation.
     */
    "recordResourceOrInstantiationIsSourceOfAgentOriginationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsSourceOfAgentOriginationRelation'>;
    /**
     * Connects an n-ary Relation to any of the Things
     *             involved.
     */
    "relationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationConnects'>;
    /**
     * Connects a Temporal Relation to a Thing that precedes other
     *             Thing(s) in time.
     */
    "temporalRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#temporalRelationHasSource'>;
    /**
     * Connects a Temporal Relation to a Thing that follows other
     *             Thing(s) in time.
     */
    "temporalRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#temporalRelationHasTarget'>;
    /** Reference system used for altitude */
    "altimetricSystem": NamedNode<'https://www.ica.org/standards/RiC/ontology#altimetricSystem'>;
    /**
     * Framework or standard used to represent an
     *             information.
     */
    "referenceSystem": NamedNode<'https://www.ica.org/standards/RiC/ontology#referenceSystem'>;
    /**
     * The height of a Place above a reference level, especially above
     *             sea level.
     */
    "altitude": NamedNode<'https://www.ica.org/standards/RiC/ontology#altitude'>;
    /**
     * The extent, quantity, amount, or degree of an entity, as
     *             determined by measurement or calculation.
     */
    "measure": NamedNode<'https://www.ica.org/standards/RiC/ontology#measure'>;
    /**
     * Connects an Appellation to an Appellation
     *             Relation
     */
    "appellationIsSourceOfAppellationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#appellationIsSourceOfAppellationRelation'>;
    /**
     * Connects an Appellation Relation to the concerned
     *             Appellation
     */
    "appellationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#appellationRelationHasSource'>;
    /**
     * Connects an Appellation Relation to one of the designated
     *             Things
     */
    "appellationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#appellationRelationHasTarget'>;
    /**
     * Connects a Thing (that is designated by an Appellation) to an
     *             Appellation Relation.
     */
    "thingIsTargetOfAppellationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfAppellationRelation'>;
    /**
     * Connects an n-ary Relation to a Thing that is a secondary,
     *             contextual entity during the existence of the Relation.
     */
    "relationHasContext": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationHasContext'>;
    /**
     * Description of evidences that the Record Resource or
     *             Instantiation is what it purports to be, was created or sent by the said Agent, at the
     *             said time and has not been tampered or corrupted.
     */
    "authenticityNote": NamedNode<'https://www.ica.org/standards/RiC/ontology#authenticityNote'>;
    /** Inverse of 'authorizes' object property */
    "authorizedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizedBy'>;
    /**
     * Inverse of 'is rule associated with' object
     *             property.
     */
    "isAssociatedWithRule": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithRule'>;
    /**
     * Connects a Mandate to the Agent that the Mandate gives the
     *             authority or competencies to act.
     */
    "authorizes": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizes'>;
    /**
     * Connects a Rule to a Thing that is associated with the existence
     *             and lifecycle of the Rule.
     */
    "isRuleAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRuleAssociatedWith'>;
    /**
     * Connects a Mandate Relation to an Agent that assigns the
     *             Mandate.
     */
    "authorizingAgent": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizingAgent'>;
    /**
     * Connects an Agent that assigns the Mandate, to a Mandate
     *             Relation.
     */
    "isAuthorizingAgentInMandateRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAuthorizingAgentInMandateRelation'>;
    /**
     * Information on a Mandate that authorizes an Agent to perform an
     *             Activity.
     */
    "authorizingMandate": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorizingMandate'>;
    /**
     * The rule or conditions that govern the existence or lifecycle of
     *             a Thing.
     */
    "ruleFollowed": NamedNode<'https://www.ica.org/standards/RiC/ontology#ruleFollowed'>;
    /**
     * Connects an Authorship Relation to one of the Records involved
     *             in the relation.
     */
    "authorshipRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#authorshipRelationHasSource'>;
    /**
     * Connects a Creation Relation to one of the created Record
     *             Resources or Instantiations
     */
    "creationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationRelationHasSource'>;
    /** Connects a Record and an Authorship Relation. */
    "recordIsSourceOfAuthorshipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordIsSourceOfAuthorshipRelation'>;
    /** Date at which something began. */
    "beginningDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#beginningDate'>;
    /**
     * Chronological information associated with an entity that
     *             contributes to its identification and contextualization.
     */
    "date": NamedNode<'https://www.ica.org/standards/RiC/ontology#date'>;
    /** Date at which a Person was born. */
    "birthDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#birthDate'>;
    /**
     * Used system of reckoning time in which the beginning, length,
     *             and divisions of a year are defined, sometimes along with multiyear
     *             cycles.
     */
    "calendar": NamedNode<'https://www.ica.org/standards/RiC/ontology#calendar'>;
    /**
     * Identifier of the standard of the Normalized
     *             date.
     */
    "dateStandard": NamedNode<'https://www.ica.org/standards/RiC/ontology#dateStandard'>;
    /**
     * Number of physical units and/or physical dimensions of the
     *             carrier of a record resource instantiation. Various carriers, depending on specific
     *             needs, may have more than one relevant dimension. In some cases, indicating the number
     *             of physical units may be sufficient, while in other case, relevant dimensions should be
     *             used in order to characterize the carrier.
     */
    "carrierExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#carrierExtent'>;
    /**
     * Countable characteristics of the content of an entity expressed
     *             as a quantity.
     */
    "physicalOrLogicalExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#physicalOrLogicalExtent'>;
    /**
     * Qualifies the level of certitude of the accuracy of a Date, an
     *             Event or a Relation.
     */
    "certainty": NamedNode<'https://www.ica.org/standards/RiC/ontology#certainty'>;
    /** Connects a Child Relation to a parent Person */
    "childRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#childRelationHasSource'>;
    /**
     * Connects a Descendance Relation to one of the ancestor
     *             Persons
     */
    "descendanceRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#descendanceRelationHasSource'>;
    /**
     * Connects a Person (as a parent) to a Child
     *             Relation.
     */
    "personIsSourceOfChildRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsSourceOfChildRelation'>;
    /** Connects a Child Relation to a child Person */
    "childRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#childRelationHasTarget'>;
    /**
     * Connects a Descendance Relation to one of the descendant
     *             Persons
     */
    "descendanceRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#descendanceRelationHasTarget'>;
    /**
     * Connects a Person (as a child) to a Child
     *             Relation.
     */
    "personIsTargetOfChildRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsTargetOfChildRelation'>;
    /**
     * A term, number or alphanumeric string that is usually taken from
     *             an external classification vocabulary or scheme that qualifies the Record
     *             Resource.
     */
    "classification": NamedNode<'https://www.ica.org/standards/RiC/ontology#classification'>;
    /**
     * Terms and circumstances affecting the availability of a Record
     *             Resource for consultation. Such conditions may originate in laws, regulations and
     *             policies, including those pertaining to privacy and security concerns or restrictions;
     *             they may concern a specific Instantiation of a Record Resource, for example, conditions
     *             that require preservation treatment; or they may specify the software or hardware
     *             necessary to access the Instantiation.
     */
    "conditionsOfAccess": NamedNode<'https://www.ica.org/standards/RiC/ontology#conditionsOfAccess'>;
    /**
     * Terms and circumstances affecting the use of a Record Resource
     *             after access has been provided. Includes conditions governing reproduction of the Record
     *             Resource under applicable copyright (intellectual property) and/or property legislation,
     *             and of the Instantiation, due to conservation status.
     */
    "conditionsOfUse": NamedNode<'https://www.ica.org/standards/RiC/ontology#conditionsOfUse'>;
    /**
     * Connects a Place to a region that is or was within
     *             it.
     */
    "containsOrContained": NamedNode<'https://www.ica.org/standards/RiC/ontology#containsOrContained'>;
    /**
     * Connects a Thing to a constitutive or component part of that
     *             Thing.
     */
    "hasOrHadPart": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPart'>;
    /**
     * Inverse of 'is place associated with' object
     *             property.
     */
    "isAssociatedWithPlace": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithPlace'>;
    /**
     * Connects a Place to a Thing that Place is associated with the
     *             existence and lifecycle of.
     */
    "isPlaceAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPlaceAssociatedWith'>;
    /**
     * Inverse of 'contains or contained' object
     *             property.
     */
    "isOrWasContainedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasContainedBy'>;
    /**
     * Connects a Correspondence Relation to one of the Persons
     *             involved
     */
    "correspondenceRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#correspondenceRelationConnects'>;
    /**
     * Connects Knowing Relation to any known Person
     *             involved.
     */
    "knowingRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowingRelationConnects'>;
    /** Connects a Person to a Correspondence Relation. */
    "personHasCorrespondenceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personHasCorrespondenceRelation'>;
    /** Date at which an entity was created. */
    "creationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationDate'>;
    /**
     * Connects a Record Resource or Instantiation (that is created) to
     *             a Creation Relation.
     */
    "recordResourceOrInstantiationIsSourceOfCreationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsSourceOfCreationRelation'>;
    /**
     * Connects a Creation Relation to the Role Type that the creator
     *             Agent(s) has in the creation process
     */
    "creationWithRole": NamedNode<'https://www.ica.org/standards/RiC/ontology#creationWithRole'>;
    /**
     * Connects a Role Type to a Creation Relation (this Role Type
     *             being the specific role played by the creating Person in the context of this
     *             Relation).
     */
    "roleIsContextOfCreationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#roleIsContextOfCreationRelation'>;
    /**
     * Indicates the precision of a date. It specifies if, and to what
     *             extent, the value is an estimation.
     */
    "dateQualifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#dateQualifier'>;
    /** Date at which a Person died. */
    "deathDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#deathDate'>;
    /** Date at which something ended. */
    "endDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#endDate'>;
    /** Date at which an entity was deleted. */
    "deletionDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#deletionDate'>;
    /**
     * Connects a Derivation Relation to the Instantiation from which
     *             one or more Instantiations is derived.
     */
    "derivationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#derivationRelationHasSource'>;
    /**
     * Connects an Instantiation to Instantiation Relation to one of
     *             the related Instantiations.
     */
    "instantiationToInstantiationRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationToInstantiationRelationConnects'>;
    /**
     * Connects an Instantiation (from which at least one Instantiation
     *             is derived) to a Derivation Relation.
     */
    "instantiationIsSourceOfDerivationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsSourceOfDerivationRelation'>;
    /**
     * Connects a Derivation Relation to one of the derived
     *             Instantiations
     */
    "derivationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#derivationRelationHasTarget'>;
    /**
     * Connects a derived Instantiation to a Derivation
     *             Relation.
     */
    "instantiationIsTargetOfDerivationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsTargetOfDerivationRelation'>;
    /** Connects a Family Relation to a Person. */
    "familyRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#familyRelationConnects'>;
    /**
     * Connects a Person (as an ancestor) to a Descendance
     *             Relation.
     */
    "personIsSourceOfDescendanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsSourceOfDescendanceRelation'>;
    /**
     * Connects a Person (as a descendant) to a Descendance
     *             Relation.
     */
    "personIsTargetOfDescendanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsTargetOfDescendanceRelation'>;
    /**
     * Connects a Record Resource to a Thing that it
     *             describes.
     */
    "describesOrDescribed": NamedNode<'https://www.ica.org/standards/RiC/ontology#describesOrDescribed'>;
    /**
     * Connects a Record Resource to a Thing that is or was its
     *             subject.
     */
    "hasOrHadSubject": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubject'>;
    /**
     * Inverse of 'describes or described' object
     *             property.
     */
    "isOrWasDescribedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDescribedBy'>;
    /**
     * Descriptive information about an entity that is not otherwise
     *             addressed.
     */
    "descriptiveNote": NamedNode<'https://www.ica.org/standards/RiC/ontology#descriptiveNote'>;
    /** Inverse of 'documents' object property. */
    "documentedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#documentedBy'>;
    /**
     * Connects an Event to a Thing that results or resulted from the
     *             Event.
     */
    "resultsOrResultedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#resultsOrResultedIn'>;
    /**
     * Connects a Record Resource or an Instantiation to the Activity
     *             that generates the Record Resource or Instantiation.
     */
    "documents": NamedNode<'https://www.ica.org/standards/RiC/ontology#documents'>;
    /**
     * Inverse of 'results or resulted in' object
     *             property.
     */
    "resultsOrResultedFrom": NamedNode<'https://www.ica.org/standards/RiC/ontology#resultsOrResultedFrom'>;
    /** Connects an Event to an Event Relation */
    "eventIsSourceOfEventRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#eventIsSourceOfEventRelation'>;
    /** Connects an Event Relation to an Event */
    "eventRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#eventRelationHasSource'>;
    /** Connects an Event Relation to an associated Thing */
    "eventRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#eventRelationHasTarget'>;
    /**
     * Connects a Thing (that is associated with an Event) to an Event
     *             Relation.
     */
    "thingIsTargetOfEventRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfEventRelation'>;
    /**
     * Connects a Position to a Group in which that Position exists or
     *             existed, or that is defined by that Group�s organizational structure.
     */
    "existsOrExistedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#existsOrExistedIn'>;
    /**
     * Connects two Agents. This object property is
     *             symmetric.
     */
    "isAgentAssociatedWithAgent": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAgentAssociatedWithAgent'>;
    /**
     * Inverse of 'exists or existed in' object
     *             property.
     */
    "hasOrHadPosition": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPosition'>;
    /** Natural language expression of a Date. */
    "expressedDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#expressedDate'>;
    /** A textual expression of an Appellation or Date. */
    "textualValue": NamedNode<'https://www.ica.org/standards/RiC/ontology#textualValue'>;
    /**
     * Inverse of 'is or was expressed by' object
     *             property.
     */
    "expressesOrExpressed": NamedNode<'https://www.ica.org/standards/RiC/ontology#expressesOrExpressed'>;
    /**
     * Connects a Rule to a Record Resource that expresses or expressed
     *             the Rule.
     */
    "isOrWasExpressedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasExpressedBy'>;
    /** Connects a Person to a Family Relation. */
    "personHasFamilyRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personHasFamilyRelation'>;
    /** Inverse of 'precedes in time' object property. */
    "followsInTime": NamedNode<'https://www.ica.org/standards/RiC/ontology#followsInTime'>;
    /** Inverse of 'precedesOrPreceded' object property. */
    "followsOrFollowed": NamedNode<'https://www.ica.org/standards/RiC/ontology#followsOrFollowed'>;
    /**
     * Connects a Thing to a Thing that follows it in chronological
     *             order.
     */
    "precedesInTime": NamedNode<'https://www.ica.org/standards/RiC/ontology#precedesInTime'>;
    /**
     * The most generic object property. Connects an Thing to any other
     *             Thing This is a symmetric object property.
     */
    "isRelatedTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRelatedTo'>;
    /**
     * Connects a Thing to a Thing that follows or followed it in some
     *             sequence.
     */
    "precedesOrPreceded": NamedNode<'https://www.ica.org/standards/RiC/ontology#precedesOrPreceded'>;
    /**
     * Connects a Functional Equivalence Relation to one of the
     *             functionally equivalent Instantiations.
     */
    "functionalEquivalenceRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#functionalEquivalenceRelationConnects'>;
    /**
     * Connects an Instantiation to a Functional Equivalence
     *             Relation
     */
    "instantiationIsConnectedToFunctionalEquivalenceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsConnectedToFunctionalEquivalenceRelation'>;
    /**
     * Reference system used for geographical
     *             coordinates.
     */
    "geodesicSystem": NamedNode<'https://www.ica.org/standards/RiC/ontology#geodesicSystem'>;
    /**
     * Longitudinal and latitudinal information of a
     *             Place.
     */
    "geographicalCoordinates": NamedNode<'https://www.ica.org/standards/RiC/ontology#geographicalCoordinates'>;
    /**
     * Connects the Group that has at least a subdivision, to a Group
     *             Subdivision Relation
     */
    "groupIsSourceOfGroupSubdivisionRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupIsSourceOfGroupSubdivisionRelation'>;
    /**
     * Connects a Thing to a Whole Part Relation, when this Thing has
     *             Part other Thing(s).
     */
    "thingIsSourceOfWholePartRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsSourceOfWholePartRelation'>;
    /**
     * Connects a Group Subdivision Relation to the Group that has
     *             subdivisions
     */
    "groupSubdivisionRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupSubdivisionRelationHasSource'>;
    /**
     * Connects the Group (that has one to many members) to a
     *             Membership Relation
     */
    "groupIsSourceOfMembershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupIsSourceOfMembershipRelation'>;
    /**
     * Connects a Membership Relation to the Group that has
     *             member(s).
     */
    "membershipRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#membershipRelationHasSource'>;
    /**
     * Connects a Group that is a subdivision, to a Group Subdivision
     *             Relation
     */
    "groupIsTargetOfGroupSubdivisionRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupIsTargetOfGroupSubdivisionRelation'>;
    /**
     * Connects a Thing to a Whole Part Relation, when this Thing is
     *             Part of another Thing.
     */
    "thingIsTargetOfWholePartRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfWholePartRelation'>;
    /**
     * Connects a Group Subdivision Relation to one of the Groups that
     *             is a subdivision
     */
    "groupSubdivisionRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupSubdivisionRelationHasTarget'>;
    /**
     * Connects a Group (which has a leader) to a Leadership
     *             Relation
     */
    "groupIsTargetOfLeadershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupIsTargetOfLeadershipRelation'>;
    /** Connects a Leadership Relation to a lead Group. */
    "leadershipRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#leadershipRelationHasTarget'>;
    /**
     * Connects the Group (in which a Position exists) to a Position To
     *             Group Relation
     */
    "groupIsTargetOfPositionToGroupRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#groupIsTargetOfPositionToGroupRelation'>;
    /**
     * Connects a Position to Group Relation to a Group (in which a
     *             Position exists).
     */
    "positionToGroupRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionToGroupRelationHasTarget'>;
    /**
     * Connects a Whole Part Relation to the Thing that has some
     *             parts.
     */
    "wholePartRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#wholePartRelationHasSource'>;
    /**
     * Connects a Whole Part Relation to a Thing that is a
     *             part.
     */
    "wholePartRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#wholePartRelationHasTarget'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             accumulates it, be it intentionally (collecting) or not (receiving in the course of its
     *             activities).
     */
    "hasAccumulator": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAccumulator'>;
    /**
     * Connects a Record Resource or an Instantiation to an Agent that
     *             creates or accumulates the Record Resource, receives it, or sends it.
     */
    "hasProvenance": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasProvenance'>;
    /** Inverse of 'has accumulator' object property. */
    "isAccumulatorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAccumulatorOf'>;
    /**
     * Connects an Activity to an Activity Type that categorizes
     *             it.
     */
    "hasActivityType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasActivityType'>;
    /**
     * Connects a Thing to a Type that categorizes or categorized
     *             it.
     */
    "hasOrHadCategory": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCategory'>;
    /**
     * Connects an Activity Type to an Activity that it
     *             categorizes.
     */
    "isActivityTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isActivityTypeOf'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             it is addressed to.
     */
    "hasAddressee": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAddressee'>;
    /** Inverse of 'has addressee' object property. */
    "isAddresseeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAddresseeOf'>;
    /** Inverse of 'has descendant' object property. */
    "hasAncestor": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAncestor'>;
    /**
     * Connects two Persons that have some type of family link, i.e.
     *             belong to the same family. This relation is symmetric.
     */
    "hasFamilyAssociationWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasFamilyAssociationWith'>;
    /** Inverse of 'has successor' object property. */
    "isSuccessorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSuccessorOf'>;
    /** Connects a Person to one of their descendants. */
    "hasDescendant": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDescendant'>;
    /**
     * Connects a Record to the Group, Person or Position that is
     *             responsible for conceiving and formulating the information contained in the
     *             Record.
     */
    "hasAuthor": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasAuthor'>;
    /**
     * Connects a Record Resource or an Instantiation to an Agent that
     *             is either responsible for all or some of the content of the Record Resource or is a
     *             contributor to the genesis or production of an Instantiation.
     */
    "hasCreator": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCreator'>;
    /** Inverse of 'has author' object property. */
    "isAuthorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAuthorOf'>;
    /** Inverse of 'is beginning date of' object property */
    "hasBeginningDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasBeginningDate'>;
    /**
     * Inverse of 'is date associated with' object
     *             property.
     */
    "isAssociatedWithDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithDate'>;
    /**
     * Connects a Date to a Thing that came into existence on that
     *             Date.
     */
    "isBeginningDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isBeginningDateOf'>;
    /** Inverse of 'is birth date of' object property */
    "hasBirthDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasBirthDate'>;
    /**
     * Connects a Date to a Person that was born on that
     *             Date.
     */
    "isBirthDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isBirthDateOf'>;
    /**
     * Connects an Instantiation to a Carrier Type which categorizes
     *             its carrier.
     */
    "hasCarrierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCarrierType'>;
    /**
     * Connects a Carrier Type to an Instantiation whose carrier it
     *             categorizes.
     */
    "isCarrierTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCarrierTypeOf'>;
    /** Connects a Person to one of their children. */
    "hasChild": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasChild'>;
    /** Inverse of 'has child' object property. */
    "isChildOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isChildOf'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             collects it intentionally (is a collector).
     */
    "hasCollector": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCollector'>;
    /** Inverse of 'has collector' object property. */
    "isCollectorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCollectorOf'>;
    /**
     * Connects a Record or a Record Part to a Content Type which
     *             categorizes its content.
     */
    "hasContentOfType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasContentOfType'>;
    /**
     * Connects a Content Type to a Record or Record Part whose content
     *             it categorizes.
     */
    "isContentTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isContentTypeOf'>;
    /**
     * Connects a Record Resource to a copy of that Record
     *             Resource.
     */
    "hasCopy": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasCopy'>;
    /**
     * Connects two Record Resources when there is a genetic link
     *             between them. Genetic in this sense is as defined by diplomatics, i.e. the process by
     *             which a Record Resource is developed. This relation is symmetric.
     */
    "hasGeneticLinkToRecordResource": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasGeneticLinkToRecordResource'>;
    /** Inverse of 'has copy' object property. */
    "isCopyOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCopyOf'>;
    /** Inverse of 'has creator' object property. */
    "isCreatorOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isCreatorOf'>;
    /** Inverse of 'is death date of' object property */
    "hasDeathDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDeathDate'>;
    /** Inverse of 'is end date of' object property. */
    "hasEndDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasEndDate'>;
    /**
     * Connects a Date to a Person who died on that
     *             Date.
     */
    "isDeathDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDeathDateOf'>;
    /**
     * Connects an Instantiation to an Instantiation that is derived
     *             from it.
     */
    "hasDerivedInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDerivedInstantiation'>;
    /**
     * Connects two Instantiations. This object property is
     *             symmetric.
     */
    "isInstantiationAssociatedWithInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#isInstantiationAssociatedWithInstantiation'>;
    /**
     * Inverse of 'has derived instantiation' object
     *             property.
     */
    "isDerivedFromInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDerivedFromInstantiation'>;
    /**
     * Connects an Agent to another Agent that succeeds it
     *             chronologically.
     */
    "hasSuccessor": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSuccessor'>;
    /**
     * Connects a Record or Record Part to its Documentary Form
     *             Type.
     */
    "hasDocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDocumentaryFormType'>;
    /**
     * Connects a Documentary Form Type to a Record or Record Part that
     *             it categorizes.
     */
    "isDocumentaryFormTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDocumentaryFormTypeOf'>;
    /** Inverse of 'is draft of' object property. */
    "hasDraft": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasDraft'>;
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
     * Connects an Event to an Event Type which categorizes
     *             it.
     */
    "hasEventType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasEventType'>;
    /**
     * Connects an Event Type to an Event that is
     *             categorizes.
     */
    "isEventTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEventTypeOf'>;
    /** Connects a Record Resource or Instantiation to an Extent */
    "hasExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasExtent'>;
    /** Connects an Extent to a Record Resource or Instantiation */
    "isExtentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isExtentOf'>;
    /**
     * Connects an Extent to an Extent Type that categorizes what is being
     *             measured.
     */
    "hasExtentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasExtentType'>;
    /**
     * Connects an Extent Type to an Extent that it
     *             categorizes.
     */
    "isExtentTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isExtentTypeOf'>;
    /**
     * Connects a Family to a Family Type that categorizes
     *             it.
     */
    "hasFamilyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasFamilyType'>;
    /**
     * Connects a Family Type to a Family that is
     *             categorizes.
     */
    "isFamilyTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isFamilyTypeOf'>;
    /**
     * Connects two Record Resources. This object property is
     *             symmetric.
     */
    "isRecordResourceAssociatedWithRecordResource": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRecordResourceAssociatedWithRecordResource'>;
    /**
     * Connects an Identifier and an Identifier Type that categorizes
     *             it.
     */
    "hasIdentifierType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasIdentifierType'>;
    /**
     * Connects an Identifier Type and an Identifier that it
     *             categorizes.
     */
    "isIdentifierTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isIdentifierTypeOf'>;
    /**
     * Connects a Record Resource to one of its
     *             Instantiations.
     */
    "hasInstantiation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasInstantiation'>;
    /** Inverse of 'has instantiation' object property. */
    "isInstantiationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isInstantiationOf'>;
    /**
     * Inverse of 'is modification date of' object
     *             property.
     */
    "hasModificationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasModificationDate'>;
    /**
     * Connects a Date to a Thing that was modified on that
     *             Date.
     */
    "isModificationDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isModificationDateOf'>;
    /**
     * Connects an Agent and (one of) its present or past Agent
     *             Name.
     */
    "hasOrHadAgentName": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAgentName'>;
    /**
     * Connects a Thing to one of its past or present
     *             Names.
     */
    "hasOrHadName": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadName'>;
    /**
     * Connects an Agent Name to an Agent it designates or
     *             designated.
     */
    "isOrWasAgentNameOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAgentNameOf'>;
    /**
     * Connects a Record Set and a Category (Type) to which all the
     *             Records or Record Parts that are or were included in the Record Set
     *             belong.
     */
    "hasOrHadAllMembersWithCategory": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithCategory'>;
    /**
     * Connects a Category (Type) and a Record Set whose all present or
     *             past Record or Record Part members belong to that Category.
     */
    "isOrWasCategoryOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCategoryOfAllMembersOf'>;
    /**
     * Connects a Record Set and a Content Type that categorizes all
     *             the Records or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithContentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithContentType'>;
    /**
     * Connects a Content Type and a Record Set whose all past or
     *             present Record or Record Part members have that Content Type.
     */
    "isOrWasContentTypeOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasContentTypeOfAllMembersOf'>;
    /**
     * Connects a Record Set and a Documentary Form Type that
     *             categorizes all the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadAllMembersWithDocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithDocumentaryFormType'>;
    /**
     * Connects a Documentary Form Type and a Record Set whose all past
     *             or present Record or Record Part members have that Documentary Form Type.
     */
    "isOrWasDocumentaryFormTypeOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDocumentaryFormTypeOfAllMembersOf'>;
    /**
     * Connects a Record Set and a Language used by all the Records or
     *             Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithLanguage": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithLanguage'>;
    /**
     * Connects a Language and a Record Set whose all present or past
     *             Record or Record Part members use that Language.
     */
    "isOrWasLanguageOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLanguageOfAllMembersOf'>;
    /**
     * Connects a Record Set and a Legal Status that categorizes all
     *             the Records or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithLegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithLegalStatus'>;
    /**
     * Connects a Legal Status and a Record Set whose all past or
     *             present Record or Record Part members have that Legal Status.
     */
    "isOrWasLegalStatusOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLegalStatusOfAllMembersOf'>;
    /**
     * Connects a Record Set and a Record State that categorizes all
     *             the Records or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadAllMembersWithRecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAllMembersWithRecordState'>;
    /**
     * Connects a Record State and a Record Set whose all past or
     *             present Record or Record Part members have that Record State.
     */
    "isOrWasRecordStateOfAllMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRecordStateOfAllMembersOf'>;
    /**
     * Connects a Thing to an Appellation that is or was used for
     *             designating it.
     */
    "hasOrHadAppellation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAppellation'>;
    /**
     * Connects an Appellation to a Thing that it designates or
     *             designated.
     */
    "isOrWasAppellationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAppellationOf'>;
    /**
     * Connects an Agent to a Thing the Agent has or had authority
     *             over.
     */
    "hasOrHadAuthorityOver": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadAuthorityOver'>;
    /**
     * Inverse of 'has or had authority over' object
     *             property.
     */
    "isOrWasUnderAuthorityOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasUnderAuthorityOf'>;
    /**
     * Connects a Type (a category) to a Thing that it categorizes or
     *             categorized.
     */
    "isOrWasCategoryOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCategoryOf'>;
    /**
     * Connects an Instantiation to one of its present or past
     *             component instantiations.
     */
    "hasOrHadComponent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadComponent'>;
    /**
     * Inverse of 'has or had component' object
     *             property.
     */
    "isOrWasComponentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasComponentOf'>;
    /**
     * Connects a Record to a Record Part that is or was a component of
     *             that Record.
     */
    "hasOrHadConstituent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadConstituent'>;
    /**
     * Inverse of 'has or had constituent' object
     *             property.
     */
    "isOrWasConstituentOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasConstituentOf'>;
    /**
     * Inverse of 'is or was controller of' object
     *             property.
     */
    "hasOrHadController": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadController'>;
    /**
     * Inverse of 'has or had subordinate' object
     *             property.
     */
    "isOrWasSubordinateTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubordinateTo'>;
    /**
     * Connects an Agent to another Agent it controls or controlled via
     *             Activities, i.e. controls by function.
     */
    "isOrWasControllerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasControllerOf'>;
    /**
     * Connects a Physical Location to its past or present coordinates
     *             in a reference system.
     */
    "hasOrHadCoordinates": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCoordinates'>;
    /**
     * Connects an instance of Coordinates to a Physical Location it
     *             locates or located on earth, according to some reference system.
     */
    "isOrWasCoordinatesOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCoordinatesOf'>;
    /**
     * Connects a Corporate Body to a Corporate Body Type which
     *             categorizes or categorized it.
     */
    "hasOrHadCorporateBodyType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCorporateBodyType'>;
    /**
     * Connects a Corporate Body Type to a Corporate Body that it
     *             categorizes or categorized.
     */
    "isOrWasCorporateBodyTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCorporateBodyTypeOf'>;
    /**
     * Connects two Persons that correspond or have corresponded with
     *             each other. This relation is symmetric.
     */
    "hasOrHadCorrespondent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadCorrespondent'>;
    /**
     * Connects two Persons that directly know each other during their
     *             existence. This object property is symmetric.
     */
    "knows": NamedNode<'https://www.ica.org/standards/RiC/ontology#knows'>;
    /**
     * Connects a Person or a Group to a Demographic Group to which it
     *             belongs or belonged.
     */
    "hasOrHadDemographicGroup": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadDemographicGroup'>;
    /**
     * Connects a Demographic Group to a Person or Group which belongs
     *             or belonged to it.
     */
    "isOrWasDemographicGroupOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDemographicGroupOf'>;
    /** Inverse of 'is or was holder of' object property. */
    "hasOrHadHolder": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadHolder'>;
    /**
     * Inverse of 'is or was manager of' object
     *             property.
     */
    "hasOrHadManager": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadManager'>;
    /**
     * Connects an Agent to a Record Resource or Instantiation that the
     *             Agent holds or held.
     */
    "isOrWasHolderOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasHolderOf'>;
    /**
     * Connects a Thing to one of its past or present
     *             Identifiers.
     */
    "hasOrHadIdentifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadIdentifier'>;
    /**
     * Connects an Identifier to a Thing that it identified or
     *             identifies.
     */
    "isOrWasIdentifierOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasIdentifierOf'>;
    /**
     * Inverse of 'is or was holder of intellectual property rights of'
     *             object property.
     */
    "hasOrHadIntellectualPropertyRightsHolder": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadIntellectualPropertyRightsHolder'>;
    /**
     * Connects an Agent to a Record Resource or Instantiation on which
     *             the Agent has or had some intellectual property rights.
     */
    "isOrWasHolderOfIntellectualPropertyRightsOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasHolderOfIntellectualPropertyRightsOf'>;
    /**
     * Inverse of 'is or was jurisdiction of' object
     *             property.
     */
    "hasOrHadJurisdiction": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadJurisdiction'>;
    /**
     * Connects a Place to an Agent that has or had jurisdiction over
     *             the Place.
     */
    "isOrWasJurisdictionOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasJurisdictionOf'>;
    /**
     * Connects an Agent or Record Resource to a Language that it uses
     *             or used.
     */
    "hasOrHadLanguage": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLanguage'>;
    /**
     * Connects a Language to an Agent, Record or Record Part that uses
     *             or used it.
     */
    "isOrWasLanguageOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLanguageOf'>;
    /** Inverse of 'is or was leader of' object property. */
    "hasOrHadLeader": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLeader'>;
    /**
     * Connects a Person to the Group that Person leads or led in the
     *             past.
     */
    "isOrWasLeaderOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLeaderOf'>;
    /**
     * Connects an Agent or Record Resource to a Legal Status which
     *             categorized or categorizes it.
     */
    "hasOrHadLegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLegalStatus'>;
    /**
     * Connects a Legal Status to an Agent or Record Resource that it
     *             categorizes.
     */
    "isOrWasLegalStatusOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLegalStatusOf'>;
    /**
     * Inverse of 'is or was location of' object
     *             property.
     */
    "hasOrHadLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadLocation'>;
    /**
     * Connects a Place to a Thing that is or was located in the
     *             Place.
     */
    "isOrWasLocationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLocationOf'>;
    /**
     * Connects a Record Resource to a Thing that is or was its main
     *             subject.
     */
    "hasOrHadMainSubject": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadMainSubject'>;
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
     * Connects a Group to a Person that is or was a member of that
     *             Group.
     */
    "hasOrHadMember": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadMember'>;
    /** Inverse of 'has or had member' object property. */
    "isOrWasMemberOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasMemberOf'>;
    /**
     * Connects a Name to a Thing that it designated or
     *             designates.
     */
    "isOrWasNameOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasNameOf'>;
    /**
     * Connects a Person to an Occupation Type that categorized or
     *             categorizes his/her occupation (profession, trade or craft).
     */
    "hasOrHadOccupationOfType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadOccupationOfType'>;
    /**
     * Connects an Occupation Type to a Person whose occupation is or
     *             was categorized by it.
     */
    "isOrWasOccupationTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasOccupationTypeOf'>;
    /** Inverse of 'is or was owner of' object property. */
    "hasOrHadOwner": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadOwner'>;
    /**
     * Connects a Group, Person or Position to a Thing that this Agent
     *             owns or owned.
     */
    "isOrWasOwnerOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasOwnerOf'>;
    /** Inverse of 'has or had part' relation. */
    "isOrWasPartOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPartOf'>;
    /**
     * Connects an Event to a Thing that is associated with the
     *             existence and lifecycle of the Event.
     */
    "isEventAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEventAssociatedWith'>;
    /**
     * Inverse of 'has or had participant' object
     *             property.
     */
    "isOrWasParticipantIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasParticipantIn'>;
    /**
     * Connects a Place to one of its past or present Physical
     *             Location.
     */
    "hasOrHadPhysicalLocation": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPhysicalLocation'>;
    /**
     * Connects a Physical Location to a Place, when it is or was its
     *             location.
     */
    "isOrWasPhysicalLocationOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPhysicalLocationOf'>;
    /**
     * Connects a Place to one of its past or present
     *             names.
     */
    "hasOrHadPlaceName": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPlaceName'>;
    /**
     * Connects a Place Name to a Place that was or is designated by
     *             it.
     */
    "isOrWasPlaceNameOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPlaceNameOf'>;
    /**
     * Connects a Place to a Place Type that categorized or categorizes
     *             it.
     */
    "hasOrHadPlaceType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadPlaceType'>;
    /**
     * Connects a Place Type to a Place that is or was categorized by
     *             it.
     */
    "isOrWasPlaceTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPlaceTypeOf'>;
    /**
     * Connects a Rule to a Rule Type that categorized or categorizes
     *             it.
     */
    "hasOrHadRuleType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadRuleType'>;
    /**
     * connects a Rule Type to a Rule that it categorized or
     *             categorizes.
     */
    "isOrWasRuleTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRuleTypeOf'>;
    /**
     * Connects a Record Set and a Category (Type) to which some of the
     *             Records or Record Parts that are or were included in the Record Set
     *             belong.
     */
    "hasOrHadSomeMembersWithCategory": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithCategory'>;
    /**
     * Connects a Category (Type) and a Record Set whose some present
     *             or past Record or Record Part members belong to that Category.
     */
    "isOrWasCategoryOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasCategoryOfSomeMembersOf'>;
    /**
     * Connects a Record Set and a Content Type that categorizes some
     *             of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithContentType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithContentType'>;
    /**
     * Connects a Content Type and a Record Set whose some past or
     *             present Record or Record Part members have that Content Type.
     */
    "isOrWasContentTypeOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasContentTypeOfSomeMembersOf'>;
    /**
     * Connects a Record Set and a Language used by some of the Records
     *             or Record Parts that are or were included in the Record Set.
     */
    "hasOrHadSomeMembersWithLanguage": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithLanguage'>;
    /**
     * Connects a Language and a Record Set whose some present or past
     *             Record or Record Part members use that Language.
     */
    "isOrWasLanguageOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLanguageOfSomeMembersOf'>;
    /**
     * Connects a Record Set and a Legal Status that categorizes some
     *             of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithLegalStatus": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithLegalStatus'>;
    /**
     * Connects a Legal Status and a Record Set whose some past or
     *             present Record or Record Part members have that Legal Status.
     */
    "isOrWasLegalStatusOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasLegalStatusOfSomeMembersOf'>;
    /**
     * Connects a Record Set and a Record State that categorizes some
     *             of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMembersWithRecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMembersWithRecordState'>;
    /**
     * Connects a Record State and a Record Set whose some past or
     *             present Record or Record Part members have that Record State.
     */
    "isOrWasRecordStateOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRecordStateOfSomeMembersOf'>;
    /**
     * Connects a Record Set and a Documentary Form Type that
     *             categorizes some of the Records or Record Parts that are or were included in the Record
     *             Set.
     */
    "hasOrHadSomeMemberswithDocumentaryFormType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSomeMemberswithDocumentaryFormType'>;
    /**
     * Connects a Documentary Form Type and a Record Set whose some
     *             past or present Record or Record Part members have that Documentary Form
     *             Type.
     */
    "isOrWasDocumentaryFormTypeOfSomeMembersOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasDocumentaryFormTypeOfSomeMembersOf'>;
    /**
     * Connects two Persons that are or were married. This relation is
     *             symmetric.
     */
    "hasOrHadSpouse": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSpouse'>;
    /** Inverse of 'has or had teacher' object property. */
    "hasOrHadStudent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadStudent'>;
    /**
     * Connects a Person to another Person who is or was their
     *             student.
     */
    "hasOrHadTeacher": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadTeacher'>;
    /**
     * Connects a Group to one of its present or past
     *             subdivisions.
     */
    "hasOrHadSubdivision": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubdivision'>;
    /**
     * Connects an Agent to an Agent that is hierarchically
     *             inferior.
     */
    "hasOrHadSubordinate": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubordinate'>;
    /**
     * Inverse of 'has or had subdivision' object
     *             property.
     */
    "isOrWasSubdivisionOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubdivisionOf'>;
    /**
     * Connects an Event to one of a series of Events that constitute
     *             the original, broader, past or ongoing Event.
     */
    "hasOrHadSubevent": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadSubevent'>;
    /**
     * Inverse of 'is event associated with' object
     *             property.
     */
    "isAssociatedWithEvent": NamedNode<'https://www.ica.org/standards/RiC/ontology#isAssociatedWithEvent'>;
    /** Inverse of 'has or had subevent' object property. */
    "isOrWasSubeventOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubeventOf'>;
    /** Inverse of 'has or had subject' object property. */
    "isOrWasSubjectOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasSubjectOf'>;
    /**
     * Connects a Record Resource, Instantiation or Rule to a title
     *             that is or was used for designating it.
     */
    "hasOrHadTitle": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadTitle'>;
    /**
     * Connects a Title to a Record Resource, Instantiation or Rule
     *             that it designated or designates.
     */
    "isOrWasTitleOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasTitleOf'>;
    /**
     * Connects two Agents that have or had some type of work relation
     *             in the course of their activities. This relation is symmetric.
     */
    "hasOrHadWorkRelationWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOrHadWorkRelationWith'>;
    /** Inverse of 'is original of' object property. */
    "hasOriginal": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasOriginal'>;
    /**
     * Connects the original version of a Record to a copy or a later
     *             version.
     */
    "isOriginalOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOriginalOf'>;
    /**
     * Connects an Instantiation to a Production Technique Type that
     *             categorizes its production technique.
     */
    "hasProductionTechniqueType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasProductionTechniqueType'>;
    /**
     * Connects a Production Technique Type to an Instantiation whose
     *             production technique is categorized by it.
     */
    "isProductionTechniqueTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isProductionTechniqueTypeOf'>;
    /** inverse of 'has provenance' object property. */
    "isProvenanceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isProvenanceOf'>;
    /**
     * Connects a Record resource to an Agent who published
     *             it.
     */
    "hasPublisher": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasPublisher'>;
    /**
     * Connects an Agent to a Record Resource that it
     *             published.
     */
    "isPublisherOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isPublisherOf'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             receives it in the course of its activities.
     */
    "hasReceiver": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasReceiver'>;
    /** Inverse of 'received by' object property. */
    "isReceiverOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isReceiverOf'>;
    /**
     * Connects a Record Set to a Record Set Type that categorizes
     *             it.
     */
    "hasRecordSetType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasRecordSetType'>;
    /**
     * Connects a Record Set Type to a Record Set that it
     *             categorizes.
     */
    "isRecordSetTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRecordSetTypeOf'>;
    /**
     * Connects a Record or Record Part to a Record State that
     *             categorizes its state.
     */
    "hasRecordState": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasRecordState'>;
    /**
     * Connects a Record State to a Record or Record Part whose state
     *             it categorizes.
     */
    "isRecordStateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRecordStateOf'>;
    /**
     * Connects a Record Resource to a reply, usually in the form of
     *             correspondence.
     */
    "hasReply": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasReply'>;
    /** Inverse of 'has reply' object property. */
    "isReplyTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isReplyTo'>;
    /**
     * Connects an Instantiation to a Representation Type that
     *             categorizes its representation type.
     */
    "hasRepresentationType": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasRepresentationType'>;
    /**
     * Connects a Representation Type to an Instantiation that it
     *             categorizes.
     */
    "isRepresentationTypeOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isRepresentationTypeOf'>;
    /**
     * Connects a Record Resource or an Instantiation to the Agent that
     *             sends it
     */
    "hasSender": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSender'>;
    /** Inverse of 'has sender' object property. */
    "isSenderOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSenderOf'>;
    /**
     * Connects two Persons that are siblings. This relation is
     *             symmetric.
     */
    "hasSibling": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSibling'>;
    /**
     * Connects a Record Resource or Relation to a Record Resource or
     *             Agent that is used as a source of information for identifying or describing
     *             it.
     */
    "hasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasSource'>;
    /**
     * Connects a Record Resource or an Agent to a Record Resource or
     *             Relation, when the first is used as a source of information for identifying or
     *             describing the second one.
     */
    "isSourceOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isSourceOf'>;
    /** Connects an Extent to a Unit Of Measurement */
    "hasUnitOfMeasurement": NamedNode<'https://www.ica.org/standards/RiC/ontology#hasUnitOfMeasurement'>;
    /** Inverse of 'has unit of measurement' object property */
    "isUnitOfMeasurementOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isUnitOfMeasurementOf'>;
    /** Vertical dimension of an entity. */
    "height": NamedNode<'https://www.ica.org/standards/RiC/ontology#height'>;
    /**
     * Summary of the development of an entity, since its origin until
     *             present time.
     */
    "history": NamedNode<'https://www.ica.org/standards/RiC/ontology#history'>;
    /**
     * A word, number, letter, symbol, or any combination of these used
     *             to uniquely identify or reference an individual instance of an entity within a specific
     *             information domain. Includes Global Persistent Identifiers (globally unique and
     *             persistently resolvable identifier for the entity) and/or Local
     *             Identifiers.
     */
    "identifier": NamedNode<'https://www.ica.org/standards/RiC/ontology#identifier'>;
    /**
     * Connects a Record Set to a Record or Record Set it aggregates,
     *             or aggregated in the past.
     */
    "includesOrIncluded": NamedNode<'https://www.ica.org/standards/RiC/ontology#includesOrIncluded'>;
    /**
     * Inverse of 'includes or included' object
     *             property.
     */
    "isOrWasIncludedIn": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasIncludedIn'>;
    /**
     * Countable characteristics of the Instantiation expressed as a
     *             quantity.
     */
    "instantiationExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationExtent'>;
    /**
     * Connects an Instantiation to an Instantiation to Instantiation
     *             Relation.
     */
    "instantiationIsConnectedToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsConnectedToInstantiationRelation'>;
    /**
     * Connects an Instantiation (from which at least one Instantiation
     *             is migrated) to a Migration Relation.
     */
    "instantiationIsSourceOfMigrationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsSourceOfMigrationRelation'>;
    /**
     * Connects a Migration Relation to the migrated
     *             Instantiation.
     */
    "migrationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#migrationRelationHasSource'>;
    /**
     * Connects an Instantiation which results from a migration, to a
     *             Migration Relation.
     */
    "instantiationIsTargetOfMigrationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsTargetOfMigrationRelation'>;
    /**
     * Connects a Migration Relation to a resulting
     *             Instantiation.
     */
    "migrationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#migrationRelationHasTarget'>;
    /**
     * Connects an Instantiation of a Record Resource to the Record
     *             Resource to Instantiation Relation.
     */
    "instantiationIsTargetOfRecordResourceToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationIsTargetOfRecordResourceToInstantiationRelation'>;
    /**
     * Connects a Record Resource To Instantiation Relation to an
     *             Instantiation of the involved Record Resource. 
     */
    "recordResourceToInstantiationRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceToInstantiationRelationHasTarget'>;
    /**
     * Information about the physical arrangement and composition of an
     *             Instantiation.
     */
    "instantiationStructure": NamedNode<'https://www.ica.org/standards/RiC/ontology#instantiationStructure'>;
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
     * Information about the completeness of a Record Resource or
     *             Instantiation.
     */
    "integrity": NamedNode<'https://www.ica.org/standards/RiC/ontology#integrity'>;
    /**
     * Connects an IintellectualPropertyRightsRelation to one of the
     *             Record Resource or Instantiation on which the rights are held.
     */
    "intellectualPropertyRightsRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#intellectualPropertyRightsRelationHasTarget'>;
    /**
     * Connects a Record Resource or Instantiation (on which some
     *             intellectual property rights are held) to an Intellectual Property Rights
     *             Relation.
     */
    "recordResourceOrInstantiationIsTargetOfIntellectualPropertyRightsRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsTargetOfIntellectualPropertyRightsRelation'>;
    /**
     * Connects a Date to a Thing that the Date is associated with the
     *             existence and lifecycle of.
     */
    "isDateAssociatedWith": NamedNode<'https://www.ica.org/standards/RiC/ontology#isDateAssociatedWith'>;
    /**
     * Connects two Things that are considered
     *             equivalent.
     */
    "isEquivalentTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isEquivalentTo'>;
    /**
     * Connects a Date to an Appellation, when it is the date at which
     *             the Appellation was first used.
     */
    "isFromUseDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isFromUseDateOf'>;
    /**
     * Connects an Appellation to the Date from which it was
     *             used.
     */
    "wasUsedFromDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasUsedFromDate'>;
    /**
     * Connects two Instantiations which may be considered as
     *             equivalent. This relation is symmetric.
     */
    "isFunctionallyEquivalentTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isFunctionallyEquivalentTo'>;
    /**
     * Connects a Date and a Thing that was last modified at this
     *             Date.
     */
    "isLastUpdateDateOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#isLastUpdateDateOf'>;
    /**
     * Connects a Thing to the Date when it was last
     *             modified.
     */
    "wasLastUpdatedAtDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasLastUpdatedAtDate'>;
    /**
     * Connects two Places that are or were geographically adjacent.
     *             This is a symmetric object property.
     */
    "isOrWasAdjacentTo": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasAdjacentTo'>;
    /**
     * Connects a Rule to an Agent that enforces or enforced the
     *             Rule.
     */
    "isOrWasEnforcedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasEnforcedBy'>;
    /**
     * Inverse of 'is or was enforced by' object
     *             property.
     */
    "isOrWasResponsibleForEnforcing": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasResponsibleForEnforcing'>;
    /**
     * Inverse of 'occupies or occupied' object
     *             property.
     */
    "isOrWasOccupiedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasOccupiedBy'>;
    /**
     * Connects a Person to a Position they occupy or
     *             occupied.
     */
    "occupiesOrOccupied": NamedNode<'https://www.ica.org/standards/RiC/ontology#occupiesOrOccupied'>;
    /**
     * Connects an Activity to an Agent that performed or performs the
     *             Activity.
     */
    "isOrWasPerformedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasPerformedBy'>;
    /**
     * Inverse of 'is or was performed by' object
     *             property.
     */
    "performsOrPerformed": NamedNode<'https://www.ica.org/standards/RiC/ontology#performsOrPerformed'>;
    /**
     * Inverse of the 'regulates or regulated' object
     *             property.
     */
    "isOrWasRegulatedBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#isOrWasRegulatedBy'>;
    /**
     * Connects a Rule to a Thing that it regulates or
     *             regulated.
     */
    "regulatesOrRegulated": NamedNode<'https://www.ica.org/standards/RiC/ontology#regulatesOrRegulated'>;
    /** Inverse of 'issued by' object property. */
    "isResponsibleForIssuing": NamedNode<'https://www.ica.org/standards/RiC/ontology#isResponsibleForIssuing'>;
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
     * Connects an Appellation to the Date till when it was
     *             used.
     */
    "wasUsedToDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#wasUsedToDate'>;
    /**
     * Connects a Knowing Of Relation to a 'knowing of' Person (a
     *             Person who has some knowledge of another one.)
     */
    "knowingOfRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowingOfRelationHasSource'>;
    /**
     * Connects a Person (who has some knowledge of another one) to a
     *             Knowing Of Relation.
     */
    "personIsSourceOfKnowingOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsSourceOfKnowingOfRelation'>;
    /**
     * Connects a Knowing Of Relation to a 'known by' Person (a Person
     *             on which another one has some has some knowledge.)
     */
    "knowingOfRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowingOfRelationHasTarget'>;
    /**
     * Connects a Person (of which another Person has some knowledge)
     *             to a Knowing Of Relation.
     */
    "personIsTargetOfKnowingOfRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsTargetOfKnowingOfRelation'>;
    /** Connects a Person to a Knowing Relation. */
    "personHasKnowingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personHasKnowingRelation'>;
    /** Inverse of 'knows of' object property. */
    "knownBy": NamedNode<'https://www.ica.org/standards/RiC/ontology#knownBy'>;
    /**
     * Connects a Person to another Person they have some knowledge of
     *             through time or space.
     */
    "knowsOf": NamedNode<'https://www.ica.org/standards/RiC/ontology#knowsOf'>;
    /** Date at which an entity was last updated. */
    "lastModificationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#lastModificationDate'>;
    /** Date of the modification of an entity. */
    "modificationDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#modificationDate'>;
    /**
     * Distance in degrees north or south of the
     *             equator.
     */
    "latitude": NamedNode<'https://www.ica.org/standards/RiC/ontology#latitude'>;
    /**
     * Connects a Leadership Relation to a Person who is involved as a
     *             leader.
     */
    "leadershipRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#leadershipRelationHasSource'>;
    /**
     * Connects a Person (as a leader) to a Leadership
     *             Relation.
     */
    "personIsSourceOfLeadershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsSourceOfLeadershipRelation'>;
    /**
     * Connects a Leadership Relation to the Position occupied by the
     *             leading Person.
     */
    "leadershipWithPosition": NamedNode<'https://www.ica.org/standards/RiC/ontology#leadershipWithPosition'>;
    /**
     * Connects a Position to a Leadership Relation (the leading Person
     *             occupies that Position).
     */
    "positionIsContextOfLeadershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionIsContextOfLeadershipRelation'>;
    /**
     * A delimitation of the physical territory of a place. This
     *             datatype property is used to describe basic human-readable text such as an address, a
     *             cadastral reference, or less precise information found in a record.
     */
    "location": NamedNode<'https://www.ica.org/standards/RiC/ontology#location'>;
    /**
     * Distance in degrees east or west of a prime
     *             meridian.
     */
    "longitude": NamedNode<'https://www.ica.org/standards/RiC/ontology#longitude'>;
    /**
     * Connects a Management Relation to a Record Resource or
     *             Instantiation that is involved as a managed thing.
     */
    "managementRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#managementRelationHasTarget'>;
    /**
     * Connects a Record Resource or Instantiation (that is managed by
     *             an Agent) to a Management Relation.
     */
    "recordResourceOrInstantiationIsTargetOfManagementRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsTargetOfManagementRelation'>;
    /** Connects a Mandate to a Mandate Relation. */
    "mandateIsSourceOfMandateRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#mandateIsSourceOfMandateRelation'>;
    /** Connects a Rule to a Rule Relation. */
    "ruleIsSourceOfRuleRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#ruleIsSourceOfRuleRelation'>;
    /** Connects a Mandate Relation to a Mandate. */
    "mandateRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#mandateRelationHasSource'>;
    /** Connects a Rule Relation to a Rule. */
    "ruleRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#ruleRelationHasSource'>;
    /**
     * Connects a Rule Relation to a Thing (that is associated to a
     *             Rule).
     */
    "ruleRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#ruleRelationHasTarget'>;
    /**
     * Connects a Membership Relation to a Person who is involved as a
     *             member.
     */
    "membershipRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#membershipRelationHasTarget'>;
    /**
     * Connects a Person (as a member of a Group) to a Membership
     *             Relation.
     */
    "personIsTargetOfMembershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsTargetOfMembershipRelation'>;
    /**
     * Connects a Membership Relation to the Position occupied by the
     *             member Person(s).
     */
    "membershipWithPosition": NamedNode<'https://www.ica.org/standards/RiC/ontology#membershipWithPosition'>;
    /**
     * Connects a Position to a Membership Relation (the member Person
     *             occupies that Position).
     */
    "positionIsContextOfMembershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionIsContextOfMembershipRelation'>;
    /** Inverse of 'migrated into' object property. */
    "migratedFrom": NamedNode<'https://www.ica.org/standards/RiC/ontology#migratedFrom'>;
    /**
     * Connects an Instantiation to a version it has been migrated
     *             to.
     */
    "migratedInto": NamedNode<'https://www.ica.org/standards/RiC/ontology#migratedInto'>;
    /**
     * A label, title or term designating the entity in order to make
     *             it distinguishable from other similar entities. For Record Resource or Instantiation,
     *             the Name is generally assigned by an Agent as most do not have a Name given when
     *             created.
     */
    "name": NamedNode<'https://www.ica.org/standards/RiC/ontology#name'>;
    /**
     * Date representation based on a standard, preferably
     *             machine-readable.
     */
    "normalizedDateValue": NamedNode<'https://www.ica.org/standards/RiC/ontology#normalizedDateValue'>;
    /**
     * Value representation based on a standard, preferably
     *             machine-readable.
     */
    "normalizedValue": NamedNode<'https://www.ica.org/standards/RiC/ontology#normalizedValue'>;
    /**
     * Connects two Places that geographically overlap or overlapped.
     *             This object property is symmetric.
     */
    "overlapsOrOverlapped": NamedNode<'https://www.ica.org/standards/RiC/ontology#overlapsOrOverlapped'>;
    /**
     * Connects an Ownership Relation to a Thing that is
     *             owned.
     */
    "ownershipRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#ownershipRelationHasTarget'>;
    /**
     * Connects a Thing (that is owned by a Group, a Person or a
     *             Position) to an Ownership Relation.
     */
    "thingIsTargetOfOwnershipRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfOwnershipRelation'>;
    /** Connects a Person to a Sibling Relation. */
    "personHasSiblingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personHasSiblingRelation'>;
    /**
     * Connects a Sibling Relation to one of the siblings
     *             involved.
     */
    "siblingRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#siblingRelationConnects'>;
    /** Connects a Person to a Spouse Relation. */
    "personHasSpouseRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personHasSpouseRelation'>;
    /**
     * Connects a Sibling Relation to one of the spouses
     *             involved.
     */
    "spouseRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#spouseRelationConnects'>;
    /**
     * Connects a Person (who occupies a Position) to a Position
     *             Holding Relation.
     */
    "personIsSourceOfPositionHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsSourceOfPositionHoldingRelation'>;
    /**
     * Connects a Position Holding Relation to a Person (who occupies a
     *             Position).
     */
    "positionHoldingRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionHoldingRelationHasSource'>;
    /**
     * Connects a Person (as a teacher) to a Teaching
     *             Relation.
     */
    "personIsSourceOfTeachingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsSourceOfTeachingRelation'>;
    /**
     * Connects a Teaching Relation to a Person (who is a
     *             teacher).
     */
    "teachingRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#teachingRelationHasSource'>;
    /**
     * Connects a Person (as a student) to a Teaching
     *             Relation.
     */
    "personIsTargetOfTeachingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#personIsTargetOfTeachingRelation'>;
    /**
     * Connects a Teaching Relation to a Person (who is a
     *             student).
     */
    "teachingRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#teachingRelationHasTarget'>;
    /**
     * Information about the physical features of the Instantiation.
     *             Includes information about the physical nature and condition such as conservation
     *             status.
     */
    "physicalCharacteristics": NamedNode<'https://www.ica.org/standards/RiC/ontology#physicalCharacteristics'>;
    /**
     * Connects a Place (as associated to a Thing) to a Place
     *             Relation.
     */
    "placeIsSourceOfPlaceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#placeIsSourceOfPlaceRelation'>;
    /** Connects a Place Relation to the Place concerned. */
    "placeRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#placeRelationHasSource'>;
    /**
     * Connects a Place Relation to a Thing that is associated to the
     *             Place.
     */
    "placeRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#placeRelationHasTarget'>;
    /**
     * Connects a Thing (that is associated with a Place) to a Place
     *             Relation.
     */
    "thingIsTargetOfPlaceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfPlaceRelation'>;
    /**
     * Connects a Position Holding Relation to a Position (that is
     *             occupied).
     */
    "positionHoldingRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionHoldingRelationHasTarget'>;
    /**
     * Connects a Position (that is occupied by a Person) to a Position
     *             Holding Relation.
     */
    "positionIsTargetOfPositionHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionIsTargetOfPositionHoldingRelation'>;
    /**
     * Connects a Position (that exists within a Group) to a Position
     *             to Group Relation.
     */
    "positionIsSourceOfPositionToGroupRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionIsSourceOfPositionToGroupRelation'>;
    /**
     * Connects a Position to Group Relation to a Position (that exists
     *             in a Group).
     */
    "positionToGroupRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#positionToGroupRelationHasSource'>;
    /**
     * Method used in the representation of information on the
     *             Instantiation.
     */
    "productionTechnique": NamedNode<'https://www.ica.org/standards/RiC/ontology#productionTechnique'>;
    /**
     * Connects a Record Resource or Instantiation (that is created or
     *             accumulated by an Agent, or documents an Activity) to a Provenance
     *             Relation.
     */
    "recordResourceOrInstantiationIsSourceOfProvenanceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsSourceOfProvenanceRelation'>;
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
     * Conditions of an Instantiation that impact the legibility or
     *             completeness of Record Resource, and thus the viability of its use. Conditions may be
     *             associated with deficiencies in the processes of Record (re)creation or capture, or the
     *             deterioration of the Instantiation (e.g. its carrier) causing loss of information of the
     *             record over time
     */
    "qualityOfRepresentation": NamedNode<'https://www.ica.org/standards/RiC/ontology#qualityOfRepresentation'>;
    /** Machine-readable quantity. */
    "quantity": NamedNode<'https://www.ica.org/standards/RiC/ontology#quantity'>;
    /**
     * The quantity of information content as human experienced
     *             represented in the Record Resource. The method and precision of expressing the quantity
     *             of information represented in a Record Resource will vary by the kind of Record Resource
     *             being described as well as by processing economy constraints. For record sets, quantity
     *             may be expressed as number of records, or, for analogue records in particular, by the
     *             physical storage dimensions of the Record members. For individual records or record
     *             parts, quantity may be expressed in more precise terms. Use if you don't use
     *             RecordResourceExtent class and its properties for handling such
     *             information.
     */
    "recordResourceExtent": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceExtent'>;
    /**
     * Connects a Record Resource Genetic Relation to one of the
     *             associated Record Resources.
     */
    "recordResourceGeneticRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceGeneticRelationConnects'>;
    /**
     * Connects a Record Resource relation to one of the related Record
     *             Resources.
     */
    "recordResourceRelationConnects": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceRelationConnects'>;
    /**
     * Connects a Record Resource to a Record Resource Genetic
     *             Relation.
     */
    "recordResourceIsConnectedToRecordResourceGeneticRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceIsConnectedToRecordResourceGeneticRelation'>;
    /**
     * Connects a Record Resource Holding Relation to a Record Resource
     *             or Instantiation (that is held by an Agent).
     */
    "recordResourceHoldingRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceHoldingRelationHasTarget'>;
    /**
     * Connects a Record Resource or Instantiation (that is held by an
     *             Agent) to a Record Resource Holding Relation.
     */
    "recordResourceOrInstantiationIsTargetOfRecordResourceHoldingRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceOrInstantiationIsTargetOfRecordResourceHoldingRelation'>;
    /**
     * Connects a Record Resource to a Record Resource
     *             Relation.
     */
    "recordResourceIsConnectedToRecordResourceRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceIsConnectedToRecordResourceRelation'>;
    /**
     * Connects a Record Resource (that was instantiated) to a Record
     *             Resource To Instantiation Relation
     */
    "recordResourceIsSourceOfRecordResourceToInstantiationRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceIsSourceOfRecordResourceToInstantiationRelation'>;
    /**
     * Connects a Record Resource To Instantiation Relation to the
     *             Record Resource (that was instantiated). 
     */
    "recordResourceToInstantiationRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#recordResourceToInstantiationRelationHasSource'>;
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
     * Used to qualify the state of a Relation (e. g. present, past,
     *             ongoing, unknown).
     */
    "relationState": NamedNode<'https://www.ica.org/standards/RiC/ontology#relationState'>;
    /**
     * Summary of the scope (such as time periods, geography) and
     *             content (such as subject matter, administrative processes) of the Record Resource. It
     *             should highlight the information conveyed in the Record Resource, why it was created,
     *             received, and/or maintained, and the Agents connected to it. Scope and Content provides
     *             a more complete summary of the informational content of the Record Resource. It may
     *             include description of relations with agents, activities, dates and places, or with
     *             other record resources. It is not to be confused with the History attribute which
     *             focuses on the origination and subsequence changes to a Record Resource.
     */
    "scopeAndContent": NamedNode<'https://www.ica.org/standards/RiC/ontology#scopeAndContent'>;
    /**
     * Connects a Sequential Relation to a Thing that precedes other
     *             Thing(s) in the sequence.
     */
    "sequentialRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#sequentialRelationHasSource'>;
    /**
     * Connects a Thing to a Sequential Relation, when this Thing
     *             precedes other Thing(s) in the sequence.
     */
    "thingIsSourceOfSequentialRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsSourceOfSequentialRelation'>;
    /**
     * Connects a Sequential Relation to a Thing that follows other
     *             Thing(s) in the sequence.
     */
    "sequentialRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#sequentialRelationHasTarget'>;
    /**
     * Connects a Thing (that follows other Thing(s) in a sequence) to
     *             a Sequential Relation.
     */
    "thingIsTargetOfSequentialRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfSequentialRelation'>;
    /**
     * Information about a source used to identify or describe an
     *             entity.
     */
    "source": NamedNode<'https://www.ica.org/standards/RiC/ontology#source'>;
    /**
     * Describes any relevant physical or software feature of any
     *             device involved in the creation or management of a Record Resource.
     */
    "technicalCharacteristics": NamedNode<'https://www.ica.org/standards/RiC/ontology#technicalCharacteristics'>;
    /**
     * Connects a Thing (that is categorized by a Type) to a Type
     *             Relation.
     */
    "thingIsTargetOfTypeRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#thingIsTargetOfTypeRelation'>;
    /**
     * Connects a Type Relation to a Thing (that is categorized by the
     *             involved Type).
     */
    "typeRelationHasTarget": NamedNode<'https://www.ica.org/standards/RiC/ontology#typeRelationHasTarget'>;
    /**
     * An identifying name of a Record Resource, Instantiation or
     *             Rule.
     */
    "title": NamedNode<'https://www.ica.org/standards/RiC/ontology#title'>;
    /** A term used to characterize an entity. */
    "type": NamedNode<'https://www.ica.org/standards/RiC/ontology#type'>;
    /** Connects a Type (a category) to a Type Relation. */
    "typeIsSourceOfTypeRelation": NamedNode<'https://www.ica.org/standards/RiC/ontology#typeIsSourceOfTypeRelation'>;
    /**
     * Connects a Type Relation to the Type (that categorizes the
     *             involved Thing(s)).
     */
    "typeRelationHasSource": NamedNode<'https://www.ica.org/standards/RiC/ontology#typeRelationHasSource'>;
    /**
     * A definite magnitude of a quantity, defined and adopted by convention or by
     *             law, that is used as a standard for measurement of the same kind of quantity. Can be
     *             spacial units (cm, m), weight (g, kg), time (s, h), storage (MB, TB) or more informal
     *             units used in the archival context like number of boxes, pages or words.
     */
    "unitOfMeasurement": NamedNode<'https://www.ica.org/standards/RiC/ontology#unitOfMeasurement'>;
    /** Date at which an Appellation was first used. */
    "usedFromDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#usedFromDate'>;
    /** Date until an Appellation was used. */
    "usedToDate": NamedNode<'https://www.ica.org/standards/RiC/ontology#usedToDate'>;
    /** Horizontal dimension of an entity. */
    "width": NamedNode<'https://www.ica.org/standards/RiC/ontology#width'>;
}

const builder = namespace("https://www.ica.org/standards/RiC/ontology#") as any;
export const strict = builder as NamespaceBuilder<keyof Rico> & Rico;
export const loose = builder as NamespaceBuilder & Rico;
