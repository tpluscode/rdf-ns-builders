import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Crm {
    '': NamedNode<'http://www.cidoc-crm.org/cidoc-crm/'>;
    /**
     * This class comprises transfers of the physical custody or the legal responsibility for the physical custody of objects. The recording of the donor or recipient is optional. It is possible that in an instance of E10 Transfer of Custody there is either no donor or no recipient.
     * Depending on the circumstances, it may describe:
     * 1. the beginning of custody (there is no previous custodian)
     * 2. the end of custody (there is no subsequent custodian)
     * 3. the transfer of custody (transfer from one custodian to the next)
     * 4. the receipt of custody from an unknown source (the previous custodian is unknown)
     * 5. the declared loss of an object (the current or subsequent custodian is unknown)
     * In the event that only a single kind of transfer of custody occurs, either the legal responsibility for the custody or the actual physical possession of the object but not both, this difference should be expressed using the property P2 has type (is type of).
     * The sense of physical possession requires that the object of custody be in the hands of the keeper at least with a part representative for the whole. The way, in which a representative part is defined, should ensure that it is unambiguous who keeps a part and who the whole and should be consistent with the identity criteria of the kept instance of E18 Physical Thing.
     * The interpretation of the museum notion of "accession" differs between institutions. The CIDOC CRM therefore models legal ownership and physical custody separately. Institutions will then model their specific notions of accession and deaccession as combinations of these.
     * Theft is a specific case of illegal transfer of custody.
     */
    "E10_Transfer_of_Custody": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E10_Transfer_of_Custody'>;
    /**
     * This class comprises actions intentionally carried out by instances of E39 Actor that result in changes of state in the cultural, social, or physical systems documented.
     * This notion includes complex, composite and long-lasting actions such as the building of a settlement or a war, as well as simple, short-lived actions such as the opening of a door.
     */
    "E7_Activity": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E7_Activity'>;
    /**
     * This class comprises instances of E7 Activity that are undertaken to create, alter or change instances of E24 Physical Human-Made Thing.
     * This class includes the production of an item from raw materials and other so far undocumented objects. It also includes the conservation treatment of an object.
     * Since the distinction between modification and production is not always clear, modification is regarded as the more generally applicable concept. This implies that some items may be consumed or destroyed in an instance of E11 Modification, and that others may be produced as a result of it. An event should also be documented using an instance of E81 Transformation if it results in the destruction of one or more objects and the simultaneous production of others using parts or material from the originals. In this case, the new items have separate identities.
     * An activity undertaken on an object which was designed to alter it, but which, in fact, it did not in any seemingly significant way (such as the application of a solvent during conservation which failed to dissolve any part of the object), is still considered as an instance of E11 Modification. Typically, any such activity will leave at least forensic traces of evidence on the object.
     * If the instance of E29 Design or Procedure utilized for the modification prescribes the use of specific materials, they should be documented using property P68 foresees use of (use foreseen by): E57 Material of E29 Design or Procedure, rather than via P126 employed (was employed in): E57 Material.
     */
    "E11_Modification": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E11_Modification'>;
    /**
     * This class comprises activities that are designed to, and succeed in, creating one or more new items.
     * It specializes the notion of modification into production. The decision as to whether or not an object is regarded as new is context sensitive. Normally, items are considered “new” if there is no obvious overall similarity between them and the consumed items and material used in their production. In other cases, an item is considered “new” because it becomes relevant to documentation by a modification. For example, the scribbling of a name on a potsherd may make it a voting token. The original potsherd may not be worth documenting, in contrast to the inscribed one.
     * This entity can be collective: the printing of a thousand books, for example, would normally be considered a single event.
     * An event should also be documented using an instance of E81 Transformation if it results in the destruction of one or more objects and the simultaneous production of others using parts or material from the originals. In this case, the new items have separate identities and matter is preserved, but identity is not.
     */
    "E12_Production": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E12_Production'>;
    /**
     * This class comprises events that bring into existence any instance of E77 Persistent Item.
     * It may be used for temporal reasoning about things (intellectual products, physical items, groups of people, living beings) beginning to exist; it serves as a hook for determination of a “terminus post quem” or “terminus ante quem”.
     */
    "E63_Beginning_of_Existence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E63_Beginning_of_Existence'>;
    /**
     * This class comprises the actions of making assertions about one property of an object or any single relation between two items or concepts. The type of the property asserted to hold between two items or concepts can be described by the property P177 assigned property of type (is type of property assigned): E55 Type.
     * For example, the class describes the actions of people making propositions and statements during certain scientific/scholarly procedures, e.g., the person and date when a condition statement was made, an identifier was assigned, the museum object was measured, etc. Which kinds of such assignments and statements need to be documented explicitly in structures of a schema rather than free text, depends on whether this information should be accessible by structured queries.
     * This class allows for the documentation of how the respective assignment came about, and whose opinion it was. Note that all instances of properties described in a knowledge base are the opinion of someone. Per default, they are the opinion of the team maintaining the knowledge base. This fact must not individually be registered for all instances of properties provided by the maintaining team, because it would result in an endless recursion of whose opinion was the description of an opinion. Therefore, the use of instances of E13 Attribute Assignment marks the fact, that the maintaining team is in general neutral to the validity of the respective assertion, but registers someone else’s opinion and how it came about.
     * All properties assigned in such an action can also be seen as directly relating the respective pair of items or concepts. Multiple use of instances of E13 Attribute Assignment may possibly lead to a collection of contradictory values.
     * All cases of properties in this model that are also described indirectly through a subclass of E13 Attribute Assignment are characterised as "short cuts" of a path via this subclass. This redundant modelling of two alternative views is preferred because many implementations may have good reasons to model either the action of assertion or the short cut, and the relation between both alternatives can be captured by simple rules.
     */
    "E13_Attribute_Assignment": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E13_Attribute_Assignment'>;
    /**
     * This class describes the act of assessing the state of preservation of an object during a particular period.
     * The condition assessment may be carried out by inspection, measurement or through historical research. This class is used to document circumstances of the respective assessment that may be relevant to interpret its quality at a later stage, or to continue research on related documents.
     */
    "E14_Condition_Assessment": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E14_Condition_Assessment'>;
    /**
     * This class comprises activities that result in the allocation of an identifier to an instance of E1 CRM Entity. Instances of E15 Identifier Assignment may include the creation of the identifier from multiple constituents, which themselves may be instances of E41 Appellation. The syntax and kinds of constituents to be used may be declared in a rule constituting an instance of E29 Design or Procedure.
     * Examples of such identifiers include Find Numbers, Inventory Numbers, uniform titles in the sense of librarianship and Digital Object Identifiers (DOI). Documenting the act of identifier assignment and deassignment is especially useful when objects change custody or the identification system of an organization is changed. In order to keep track of the identity of things in such cases, it is important to document by whom, when and for what purpose an identifier is assigned to an item.
     * The fact that an identifier is a preferred one for an organisation can be expressed by using the property E1 CRM Entity. P48 has preferred identifier (is preferred identifier of): E42 Identifier. It can better be expressed in a context independent form by assigning a suitable E55 Type, such as “preferred identifier assignment”, to the respective instance of E15 Identifier Assignment via the P2 has type property.
     */
    "E15_Identifier_Assignment": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E15_Identifier_Assignment'>;
    /**
     * This class comprises actions measuring quantitative physical properties and other values that can be determined by a systematic, objective procedure of direct observation of particular states of physical reality.
     * An instance of E16 Measurement may use simple counting or tools, such as yardsticks or radiation detection devices. The interest is in the method and care applied, so that the reliability of the result may be judged at a later stage, or research continued on the associated documents. The date of the event is important for dimensions, which may change value over time, such as the length of an object subject to shrinkage. Methods and devices employed should be associated with instances of E16 Measurement by properties such as P33 used specific technique: E29 Design or Procedure, P125 used object of type: E55 Type, P16 used specific object (was used for): E70 Thing, whereas basic techniques such as "carbon-14 dating" should be encoded using P2 has type (is type of): E55 Type. Details of methods and devices reused or reusable in other instances of E16 Measurement should be documented for these entities rather than the measurements themselves, whereas details of particular execution may be documented by free text or by instantiating adequate sub-activities, if the detail may be of interest for an overarching query.
     * Regardless whether a measurement is made by an instrument or by human senses, it represents the initial transition from physical reality to information without any other documented information object in between within the reasoning chain that would represent the result of the interaction of the observer or device with reality. Therefore, determining properties of an instance of E90 Symbolic Object is regarded as an instance of E13 Attribute Assignment, which may be inferred from observing and measuring representative carriers. In the case that the carrier can be named, the property P16 used specific object (was used for): should be used to indicate the instance(s) of E18 Physical Thing that was used as the empirical basis for the attribute assignment. For instance, inferring properties of depicted items using image material, such as satellite images, is not regarded as an instance of E16 Measurement, but as a subsequent instance of E13 Attribute Assignment. Rather, only the production of the images, understood as arrays of radiation intensities, is regarded as an instance of E16 Measurement. The same reasoning holds for other sensor data.
     */
    "E16_Measurement": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E16_Measurement'>;
    /**
     * This class comprises the actions of classifying items of whatever kind. Such items include objects, specimens, people, actions and concepts.
     * This class allows for the documentation of the context of classification acts in cases where the value of the classification depends on the personal opinion of the classifier, and the date that the classification was made. This class also encompasses the notion of "determination," i.e., the systematic and molecular identification of a specimen in biology.
     */
    "E17_Type_Assignment": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E17_Type_Assignment'>;
    /**
     * This class comprises all persistent physical items with a relatively stable form, human-made or natural.
     * Depending on the existence of natural boundaries of such things, the CIDOC CRM distinguishes the instances of E19 Physical Object from instances of E26 Physical Feature, such as holes, rivers, pieces of land etc. Most instances of E19 Physical Object can be moved (if not too heavy), whereas features are integral to the surrounding matter.
     * An instance of E18 Physical Thing occupies not only a particular geometric space at any instant of its existence, but in the course of its existence it also forms a trajectory through spacetime, which occupies a real, that is phenomenal, volume in spacetime. We include in the occupied space the space filled by the matter of the physical thing and all its inner spaces, such as the interior of a box. For the purpose of more detailed descriptions of the presence of an instance of E18 Physical Thing in space and time it can be associated with its specific instance of E92 Spacetime Volume by the property P196 defines (is defined by).
     * The CIDOC CRM is generally not concerned with amounts of matter in fluid or gaseous states, as long as they are not confined in an identifiable way for an identifiable minimal time-span.
     */
    "E18_Physical_Thing": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E18_Physical_Thing'>;
    /**
     * This class comprises those material or immaterial items to which instances of E30 Right, such as the right of ownership or use, can be applied.
     * This is true for all instances of E18 Physical Thing. In the case of instances of E28 Conceptual Object, however, the identity of an instance of E28 Conceptual Object or the method of its use may be too ambiguous to reliably establish instances of E30 Right, as in the case of taxa and inspirations. Ownership of corporations is currently regarded as out of scope of the CIDOC CRM.
     */
    "E72_Legal_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E72_Legal_Object'>;
    /**
     * This class comprises items of a material nature that are units for documentation and have physical boundaries that separate them completely in an objective way from other objects.
     * The class also includes all aggregates of objects made for functional purposes of whatever kind, independent of physical coherence, such as a set of chessmen. Typically, instances of E19 Physical Object can be moved (if not too heavy).
     * In some contexts, such objects, except for aggregates, are also called “bona fide objects” (Smith &amp; Varzi, 2000, pp.401-420), i.e., naturally defined objects.
     * The decision as to what is documented as a complete item, rather than by its parts or components, may be a purely administrative decision or may be a result of the order in which the item was acquired.
     */
    "E19_Physical_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E19_Physical_Object'>;
    /**
     * This class comprises all things in the universe of discourse of the CIDOC Conceptual Reference Model.
     * It is an abstract concept providing for three general properties:
     * Identification by name or appellation, and in particular by a preferred identifier
     * Classification by type, allowing further refinement of the specific subclass an instance belongs to
     * Attachment of free text and other unstructured data for the expression of anything not captured by formal properties
     * All other classes within the CIDOC CRM are directly or indirectly specialisations of E1 CRM Entity.
     */
    "E1_CRM_Entity": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E1_CRM_Entity'>;
    /**
     * This class comprises individual items of a material nature, which live, have lived or are natural products of or from living organisms.
     * Artificial objects that incorporate biological elements, such as Victorian butterfly frames, can be documented as both instances of E20 Biological Object and E22 Human-Made Object.
     */
    "E20_Biological_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E20_Biological_Object'>;
    /**
     * This class comprises real persons who live or are assumed to have lived.
     * Legendary figures that may have existed, such as Ulysses and King Arthur, fall into this class if the documentation refers to them as historical figures. In cases where doubt exists as to whether several persons are in fact identical, multiple instances can be created and linked to indicate their relationship. The CIDOC CRM does not propose a specific form to support reasoning about possible identity.
     * In a bibliographic context, a name presented following the conventions usually employed for personal names will be assumed to correspond to an actual real person (an instance of E21 Person), unless evidence is available to indicate that this is not the case. The fact that a persona may erroneously be classified as an instance of E21 Person does not imply that the concept comprises personae.
     */
    "E21_Person": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E21_Person'>;
    /** This class comprises people, either individually or in groups, who have the potential to perform intentional actions of kinds for which someone may be held responsible. */
    "E39_Actor": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E39_Actor'>;
    /**
     * This class comprises all persistent physical objects of any size that are purposely created by human activity and have physical boundaries that separate them completely in an objective way from other objects.
     * The class also includes all aggregates of objects made for functional purposes of whatever kind, independent of physical coherence, such as a set of chessmen.
     */
    "E22_Human-Made_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E22_Human-Made_Object'>;
    /**
     * This class comprises all persistent physical items of any size that are purposely created by human activity. This class comprises, besides others, Human-Made objects, such as a sword, and Human-Made features, such as rock art. For example, a “cup and ring” carving on bedrock is regarded as instance of E24 Physical Human-Made Thing.
     * Instances of Human-Made thing may be the result of modifying pre-existing physical things, preserving larger parts or most of the original matter and structure, which poses the question if they are new or even Human-Made, the respective interventions of production made on such original material should be obvious and sufficient to regard that the product has a new, distinct identity and intended function and is human-made. Substantial continuity of the previous matter and structure in the new product can be documented by describing the production process also as an instance of E81 Transformation.
     * Whereas interventions of conservation and repair are not regarded to produce a new Human-Made thing, the results of preparation of natural history specimens that substantially change their natural or original state should be regarded as physical Human-Made things, including the uncovering of petrified biological features from a solid piece of stone. On the other side, scribbling a museum number on a natural object should not be regarded to make it Human-Made. This notwithstanding, parts, sections, segments, or features of a physical Human-Made thing may continue to be non-Human-Made and preserved during the production process, for example natural pearls used as a part of an eardrop.
     */
    "E24_Physical_Human-Made_Thing": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E24_Physical_Human-Made_Thing'>;
    /**
     * This class comprises discrete, identifiable human-made items that are documented as single units.
     * These items are either intellectual products or human-made physical things, and are characterized by relative stability. They may for instance have a solid physical form, an electronic encoding, or they may be logical concepts or structures.
     */
    "E71_Human-Made_Thing": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E71_Human-Made_Thing'>;
    /** This class comprises physical features that are purposely created by human activity, such as scratches, artificial caves, artificial water channels, etc. In particular, it includes the information encoding features on mechanical or digital carriers. */
    "E25_Human-Made_Feature": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E25_Human-Made_Feature'>;
    /**
     * This class comprises identifiable features that are physically attached in an integral way to particular physical objects.
     * Instances of E26 Physical Feature share many of the attributes of instances of E19 Physical Object. They may have a one-, two- or three-dimensional geometric extent, but there are no natural borders that separate them completely in an objective way from the carrier objects. For example, a doorway is a feature but the door itself, being attached by hinges, is not.
     * Instances of E26 Physical Feature can be features in a narrower sense, such as scratches, holes, reliefs, surface colours, reflection zones in an opal crystal or a density change in a piece of wood. In the wider sense, they are portions of particular objects with partially imaginary borders, such as the core of the Earth, an area of property on the surface of the Earth, a landscape or the head of a contiguous marble statue. They can be measured and dated, and it is sometimes possible to state who or what is or was responsible for them. They cannot be separated from the carrier object, but a segment of the carrier object may be identified (or sometimes removed) carrying the complete feature.
     * This definition coincides with the definition of "fiat objects" (Smith &amp; Varzi, 2000, pp.401-420), with the exception of aggregates of “bona fide objects”.
     */
    "E26_Physical_Feature": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E26_Physical_Feature'>;
    /**
     * This class comprises pieces of land or sea floor.
     * In contrast to the purely geometric notion of E53 Place, this class describes constellations of matter on the surface of the Earth or other celestial body, which can be represented by photographs, paintings and maps.
     * Instances of E27 Site are composed of relatively immobile material items and features in a particular configuration at a particular location.
     */
    "E27_Site": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E27_Site'>;
    /**
     * This class comprises non-material products of our minds and other human produced data that have become objects of a discourse about their identity, circumstances of creation or historical implication. The production of such information may have been supported by the use of technical devices such as cameras or computers.
     * Characteristically, instances of this class are created, invented or thought by someone, and then may be documented or communicated between persons. Instances of E28 Conceptual Object have the ability to exist on more than one particular carrier at the same time, such as paper, electronic signals, marks, audio media, paintings, photos, human memories, etc.
     * They cannot be destroyed. They exist as long as they can be found on at least one carrier or in at least one human memory. Their existence ends when the last carrier and the last memory are lost.
     */
    "E28_Conceptual_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E28_Conceptual_Object'>;
    /**
     * This class comprises documented plans for the execution of actions in order to achieve a result of a specific quality, form or contents. In particular, it comprises plans for deliberate human activities that may result in new instances of E71 Human-Made Thing or for shaping or guiding the execution of an instance of E7 Activity.
     * Instances of E29 Design or Procedure can be structured in parts and sequences or depend on others.
     * This is modelled using P69 has association with (is associated with): E29 Design or Procedure.
     * Designs or procedures can be seen as one of the following
     * 1. A schema for the activities it describes
     * 2. A schema of the products that result from their application.
     * 3. An independent intellectual product that may have never been applied, such as Leonardo da Vinci’s famous plans for flying machines.
     * Because designs or procedures may never be applied or only partially executed, the CIDOC CRM models a loose relationship between the plan and the respective product.
     */
    "E29_Design_or_Procedure": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E29_Design_or_Procedure'>;
    /**
     * This class comprises identifiable immaterial items, such as poems, jokes, data sets, images, texts, multimedia objects, procedural prescriptions, computer program code, algorithm or mathematical formulae, that have an objectively recognizable structure and are documented as single units. The encoding structure known as a "named graph" also falls under this class, so that each "named graph" is an instance of E73 Information Object.
     * An instance of E73 Information Object does not depend on a specific physical carrier, which can include human memory, and it can exist on one or more carriers simultaneously.
     * Instances of E73 Information Object of a linguistic nature should be declared as instances of the E33 Linguistic Object subclass. Instances of E73 Information Object of a documentary nature should be declared as instances of the E31 Document subclass. Conceptual items such as types and classes are not instances of E73 Information Object, nor are ideas without a reproducible expression.
     */
    "E73_Information_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E73_Information_Object'>;
    /**
     * This class comprises all phenomena, such as the instances of E4 Periods and E5 Events, which happen over a limited extent in time. This extent in time must be contiguous, i.e., without gaps. In case the defining kinds of phenomena for an instance of E2 Temporal Entity cease to happen, and occur later again at another time, we regard that the former instance of E2 Temporal Entity has ended and a new instance has come into existence. In more intuitive terms, the same event cannot happen twice.
     * In some contexts, such phenomena are also called perdurants. This class is disjoint from E77 Persistent Item and is an abstract class that typically has no direct instances. E2 Temporal Entity is specialized into E4 Period, which applies to a particular geographic area (defined with a greater or lesser degree of precision), and E3 Condition State, which applies to instances of E18 Physical Thing.
     */
    "E2_Temporal_Entity": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E2_Temporal_Entity'>;
    /**
     * This class comprises legal privileges concerning material and immaterial things or their derivatives.
     * These include reproduction and property rights.
     */
    "E30_Right": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E30_Right'>;
    /**
     * This class comprises immaterial items, including but not limited to stories, plots, procedural prescriptions, algorithms, laws of physics or images that are, or represent in some sense, sets of propositions about real or imaginary things and that are documented as single units or serve as topic of discourse.
     * This class also comprises items that are “about” something in the sense of a subject. In the wider sense, this class includes expressions of psychological value such as non-figural art and musical themes. However, conceptual items such as types and classes are not instances of E89 Propositional Object. This should not be confused with the definition of a type, which is indeed an instance of E89 Propositional Object.
     */
    "E89_Propositional_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E89_Propositional_Object'>;
    /**
     * This class comprises identifiable immaterial items that make propositions about reality.
     * These propositions may be expressed in text, graphics, images, audiograms, videograms or by other similar means. Documentation databases are regarded as instances of E31 Document. This class should not be confused with the concept “document” in Information Technology, which is compatible with E73 Information Object.
     */
    "E31_Document": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E31_Document'>;
    /** This class comprises encyclopaedia, thesauri, authority lists and other documents that define terminology or conceptual systems for consistent use. */
    "E32_Authority_Document": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E32_Authority_Document'>;
    "E33_E41_Linguistic_Appellation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E33_E41_Linguistic_Appellation'>;
    /**
     * This class comprises identifiable expressions in natural language or languages.
     * Instances of E33 Linguistic Object can be expressed in many ways: e.g., as written texts, recorded speech or sign language. However, the CIDOC CRM treats instances of E33 Linguistic Object independently from the medium or method by which they are expressed. Expressions in formal languages, such as computer code or mathematical formulae, are not treated as instances of E33 Linguistic Object by the CIDOC CRM. These should be modelled as instances of E73 Information Object.
     * In general, an instance of E33 Linguistic Object may also contain non-linguistic information, often of artistic or aesthetic value. Only in cases in which the content of an instance of E33 Linguistic Object can completely be expressed by a series of binary-encoded symbols, its content may be documented within a respective knowledge base by the property P190 has symbolic content: E62 String. Otherwise, it should be understood as an identifiable digital resource only available independently from the respective knowledge base.
     * In other cases, such as pages of an illuminated manuscript or recordings containing speech in a language supported by a writing system, the linguistic part of the content of an instance of E33 Linguistic Object may be documented within a respective knowledge base in a note by P3 has note: E62 String. Otherwise, it may be described using the property P165 incorporates (is incorporated in): E73 Information Object as a different object with its own identity.
     */
    "E33_Linguistic_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E33_Linguistic_Object'>;
    /**
     * This class comprises signs, either meaningful or not, or arrangements of signs following a specific syntax, that are used or can be used to refer to and identify a specific instance of some class or category within a certain context.
     * Instances of E41 Appellation do not identify things by their meaning, even if they happen to have one, but instead by convention, tradition, or agreement. Instances of E41 Appellation are cultural constructs; as such, they have a context, a history, and a use in time and space by some group of users. A given instance of E41 Appellation can have alternative forms, i.e., other instances of E41 Appellation that are always regarded as equivalent independent from the thing it denotes.
     * Different languages may use different appellations for the same thing, such as the names of major cities. Some appellations may be formulated using a valid noun phrase of a particular language. In these cases, the respective instances of E41 Appellation should also be declared as instances of E33 Linguistic Object. Then the language using the appellation can be declared with the property P72 has language: E56 Language.
     * Instances of E41 Appellation may be used to identify any instance of E1 CRM Entity and sometimes are characteristic for instances of more specific subclasses E1 CRM Entity, such as for instances of E52 Time-Span (for instance “dates”), E39 Actor, E53 Place or E28 Conceptual Object. Postal addresses and E-mail addresses are characteristic examples of identifiers used by services transporting things between clients.
     * Even numerically expressed identifiers for extents in space or time are also regarded as instances of E41 Appellation, such as Gregorian dates or spatial coordinates, even though they allow for determining some time or location by a known procedure starting from a reference point and by virtue of that fact play a double role as instances of E59 Primitive Value.
     * E41 Appellation should not be confused with the act of naming something. Cf. E15 Identifier Assignment
     */
    "E41_Appellation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E41_Appellation'>;
    /**
     * This class comprises recognisable, texts attached to instances of E24 Physical Human-Made Thing.
     * The transcription of the text can be documented in a note by P3 has note: E62 String. The alphabet used can be documented by P2 has type: E55 Type. This class does not intend to describe the idiosyncratic characteristics of an individual physical embodiment of an inscription, but the underlying prototype. The physical embodiment is modelled in the CIDOC CRM as instances of E24 Physical Human-Made Thing.
     * The relationship of a physical copy of a book to the text it contains is modelled using E18 Physical Thing. P128 carries (is carried by): E33 Linguistic Object.
     */
    "E34_Inscription": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E34_Inscription'>;
    /**
     * This class comprises symbols, signs, signatures or short texts applied to instances of E24 Physical Human-Made Thing by arbitrary techniques, often in order to indicate such things as creator, owner, dedications, purpose or to communicate information generally. Instances of E37 Mark do not represent the actual image of a mark, but the abstract ideal (or archetype) as used for codification in reference documents forming cultural documentation.
     * This class specifically excludes features that have no semantic significance, such as scratches or tool marks. These should be documented as instances of E25 Human-Made Feature.
     */
    "E37_Mark": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E37_Mark'>;
    /**
     * This class comprises textual strings that within a cultural context can be clearly identified as titles due to their form. Being a subclass of E41 Appellation, E35 Title can only be used when such a string is actually used as a title of a work, such as a text, an artwork, or a piece of music.
     * Titles are proper noun phrases or verbal phrases, and should not be confused with generic object names such as “chair”, “painting” or “book” (the latter are common nouns that stand for instances of E55 Type). Titles may be assigned by the creator of the work itself, or by a social group.
     * This class also comprises the translations of titles that are used as surrogates for the original titles in different social contexts.
     */
    "E35_Title": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E35_Title'>;
    /**
     * This class comprises the intellectual or conceptual aspects of recognisable marks, images and other visual works.
     * This class does not intend to describe the idiosyncratic characteristics of an individual physical embodiment of a visual item, but the underlying prototype. For example, a mark such as the ICOM logo is generally considered to be the same logo when used on any number of publications. The size, orientation and colour may change, but the logo remains uniquely identifiable. The same is true of images that are reproduced many times. This means that visual items are independent of their physical support.
     * The class E36 Visual Item provides a means of identifying and linking together instances of E24 Physical Human-Made Thing that carry the same visual qualities (symbols, marks or images etc.). The property P62 depicts (is depicted by) between E24 Physical Human-Made Thing and depicted subjects (E1 CRM Entity) is a shortcut of the more fully developed path from E24 Physical Human-Made Thing through P65 shows visual item (is shown by), E36 Visual Item, P138 represents (has representation) to E1CRM Entity, which in addition captures the optical features of the depiction.
     */
    "E36_Visual_Item": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E36_Visual_Item'>;
    /**
     * This class comprises items that have persistent characteristics of structural nature substantially related to their identity and their integrity, sometimes known as “endurants” in philosophy. Persistent Items may be physical entities, such as people, animals or things, conceptual entities such as ideas, concepts, products of the imagination or even names.
     * Instances of E77 Persistent Item may be present or be part of interactions in different periods or events. They can repeatedly be recognized at disparate occasions during their existence by characteristics of structural nature. The respective characteristics need not be exactly the same during all the existence of an instance of E77 Persistent Item. Often, they undergo gradual change, still bearing some similarities with that of previous times, or disappear completely and new emerge. For instance, a person, from the time of being born on, will gradually change all its features and acquire new ones, such as a scar. Even the DNA in different body cells will develop defects and mutations. Nevertheless, relevant characteristics used should be sufficiently similar to recognize the instance for some substantial period of time.
     * The more specific criteria that determine the identity of instances of subclasses of E77 Persistent Item may vary considerably and are described or referred to in the respective scope notes. The decision about which exact criteria to use depends on whether the observable behaviour of the respective part of reality such confined conforms to the reasoning the user is interested in. For example, a building can be regarded as no longer existing if it is dismantled and the materials reused in a different configuration. On the other hand, human beings go through radical and profound changes during their life-span, affecting both material composition and form, yet preserve their identity by other criteria, such as being bodily separated from other persons. Similarly, inanimate objects may be subject to exchange of parts and matter. On the opposite, the identity of a (version of a) text of a scientific publication is given by the exact arrangement of its relevant symbols.
     * The main classes of objects that fall outside the scope of the E77 Persistent Item class are temporal objects such as periods, events and acts, and descriptive properties.
     * An instance of E77 Persistent Item does not require actual knowledge of the identifying features of the instance being currently known. There may be cases, where the actual identifying features of an instance of E77 Persistent Item are not decidable at a particular state of knowledge.
     */
    "E77_Persistent_Item": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E77_Persistent_Item'>;
    /**
     * This class comprises the states of objects characterised by a certain condition over a time-span.
     * An instance of this class describes the prevailing physical condition of any material object or feature during a specific instance of E52 Time-Span. In general, the time-span for which a certain condition can be asserted may be shorter than the real time-span, for which this condition held.
     * The nature of that condition can be described using P2 has type. For example, the instance of E3 Condition State “condition of the SS Great Britain between 22-nd September 1846 and 27-th August 1847” can be characterized as an instance “wrecked” of E55 Type.
     */
    "E3_Condition_State": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E3_Condition_State'>;
    /**
     * This class comprises identifiable symbols and any aggregation of symbols, such as characters, identifiers, traffic signs, emblems, texts, data sets, images, musical scores, multimedia objects, computer program code or mathematical formulae that have an objectively recognizable structure and that are documented as single units.
     * It includes sets of signs of any nature, which may serve to designate something, or to communicate some propositional content. An instance of E90 Symbolic Object may or may not have a specific meaning, for example an arbitrary character string.
     * In some cases, the content of an instance of E90 Symbolic Object may completely be represented by a serialized digital content model, such as a sequence of ASCII-encoded characters, an XML or HTML document, or a TIFF image. The property P3 has note and its subproperty P190 has symbolic content allow for the description of this content model. In order to disambiguate which symbolic level is the carrier of the meaning, the property P3.1 has type can be used to specify the encoding (e.g., "bit", "Latin character", RGB pixel).
     */
    "E90_Symbolic_Object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E90_Symbolic_Object'>;
    /**
     * This class comprises strings or codes assigned to instances of E1 CRM Entity in order to identify them uniquely and permanently within the context of one or more organisations. Such codes are often known as inventory numbers, registration codes, etc. and are typically composed of alphanumeric sequences. Postal addresses, telephone numbers, URLs and e-mail addresses are characteristic examples of identifiers used by services transporting things between clients.
     * The class E42 Identifier is not normally used for machine-generated identifiers used for automated processing unless these are also used by human agents.
     */
    "E42_Identifier": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E42_Identifier'>;
    /**
     * This class comprises sets of coherent phenomena or cultural manifestations occurring in time and space.
     * It is the social or physical coherence of these phenomena that identify an instance of E4 Period and not the associated spatiotemporal extent. This extent is only the “ground” or space in an abstract physical sense that the actual process of growth, spread and retreat has covered. Consequently, different periods can overlap and coexist in time and space, such as when a nomadic culture exists in the same area and time as a sedentary culture. This also means that overlapping land use rights, common among first nations, amounts to overlapping periods.
     * Often, this class is used to describe prehistoric or historic periods such as the “Neolithic Period”, the “Ming Dynasty” or the “McCarthy Era”, but also geopolitical units and activities of settlements are regarded as special cases of E4 Period. However, there are no assumptions about the scale of the associated phenomena. In particular all events are seen as synthetic processes consisting of coherent phenomena. Therefore, E4 Period is a superclass of E5 Event. For example, a modern clinical birth, an instance of E67 Birth, can be seen as both a single event, i.e., an instance of E5 Event, and as an extended period, i.e., an instance of E4 Period, that consists of multiple physical processes and complementary activities performed by multiple instances of E39 Actor.
     * As the actual extent of an instance of E4 Period in spacetime we regard the trajectories of the participating physical things during their participation in an instance of E4 Period. This includes the open spaces via which these things have interacted and the spaces by which they had the potential to interact during that period or event in the way defined by the type of the respective period or event. Examples include the air in a meeting room transferring the voices of the participants. Since these phenomena are fuzzy, we assume the spatiotemporal extent to be contiguous, except for cases of phenomena spreading out over islands or other separated areas, including geopolitical units distributed over disconnected areas such as islands or colonies.
     * Whether the trajectories necessary for participants to travel between these areas are regarded as part of the spatiotemporal extent or not has to be decided in each case based on a concrete analysis, taking use of the sea for other purposes than travel, such as fishing, into consideration. One may also argue that the activities to govern disconnected areas imply travelling through spaces connecting them and that these areas hence are spatially connected in a way, but it appears counterintuitive to consider for instance travel routes in international waters as extensions of geopolitical units.
     * Consequently, an instance of E4 Period may occupy a number of disjoint spacetime volumes, however there must not be a discontinuity in the time-span covered by these spacetime volumes. This means that an instance of E4 Period must be contiguous in time. If it has ended in all areas, it has ended as a whole. However, it may end in one area before another, such as in the Polynesian migration, and it continues as long as it is ongoing in at least one area.
     * We model E4 Period as a subclass of E2 Temporal Entity and of E92 Spacetime Volume. The latter is intended as a phenomenal spacetime volume as defined in CIDOC CRMgeo (Doerr &amp; Hiebel, 2013). By virtue of this multiple inheritance, we can discuss the physical extent of an instance of E4 Period without representing each instance of it together with an instance of its associated spacetime volume. This model combines two quite different kinds of substance: an instance of E4 Period is a phenomenon while an instance of E92 Spacetime Volume is an aggregation of points in spacetime. However, the real spatiotemporal extent of an instance of E4 Period is regarded to be unique to it due to all its details and fuzziness; its identity and existence depends uniquely on the identity of the instance of E4 Period. Therefore, this multiple inheritance is unambiguous and effective and furthermore corresponds to the intuitions of natural language.
     * Typical use of this class in cultural heritage documentation is for documenting cultural and artistic periods. There are two different conceptualisations of ‘artistic style’, defined either by physical features or by historical context. For example, “Impressionism” can be viewed as a period in the European sphere of influence lasting from approximately 1870 to 1905 during which paintings with particular characteristics were produced by a group of artists that included (among others) Monet, Renoir, Pissarro, Sisley and Degas. Alternatively, it can be regarded as a style applicable to all paintings sharing the characteristics of the works produced by the Impressionist painters, regardless of historical context. The first interpretation is an instance of E4 Period, and the second defines morphological object types that fall under E55 Type.
     * A geopolitical unit as a specific case of an instance of E4 Period is the set of activities and phenomena related to the claim of power, the consequences of belonging to a jurisdictional area and an administrative system that establishes a geopolitical unit. Examples from the modern period are countries or administrative areas of countries such as districts whose actions and structures define activities and phenomena in the area that they intend to govern. The borders of geopolitical units are often defined in contracts or treaties although they may deviate from the actual practice. The spatiotemporal properties of Geopolitical units can be modelled through the properties inherited from E92 Spacetime Volume.
     * Another specific case of an instance of E4 Period is the actual extent of the set of activities and phenomena as evidenced by their physical traces that define a settlement, such as the populated period of Nineveh.
     */
    "E4_Period": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E4_Period'>;
    /** This class comprises 4-dimensional point sets (volumes) in physical spacetime (in contrast to mathematical models of it) regardless their true geometric forms. They may derive their identity from being the extent of a material phenomenon or from being the interpretation of an expression defining an extent in spacetime. Intersections of instances of E92 Spacetime Volume, E53 Place and E52 Time-Span are also regarded as instances of E92 Spacetime Volume. An instance of E92 Spacetime Volume is either contiguous or composed of a finite number of contiguous subsets. Its boundaries may be fuzzy due to the properties of the phenomena it derives from or due to the limited precision up to which defining expression can be identified with a real extent in spacetime. The duration of existence of an instance of E92 Spacetime Volume is its projection on time. */
    "E92_Spacetime_Volume": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E92_Spacetime_Volume'>;
    /**
     * This class comprises abstract temporal extents, in the sense of Galilean physics, having a beginning, an end and a duration.
     * Instances of E52 Time-Span have no semantic connotations about phenomena happening within the temporal extent they represent. They do not convey any meaning other than a positioning on the “time-line” of chronology. The actual extent of an instance of E52 Time-Span can be approximated by properties of E52 Time-Span giving inner and outer bounds in the form of dates (instances of E61 Time Primitive). Comparing knowledge about time-spans is fundamental for chronological reasoning.
     * Some instances of E52 Time-Span may be defined as the actual, in principle observable, temporal extent of instances of E2 Temporal Entity via the property P4 has time-span (is time-span of): E52 Time-Span. They constitute phenomenal time-spans as defined in CRMgeo (Doerr &amp; Hiebel 2013). Since our knowledge of history is imperfect and physical phenomena are fuzzy in nature, the extent of phenomenal time-spans can only be described in approximation. An extreme case of approximation, might, for example, define an instance of E52 Time-Span having unknown beginning, end and duration. It may, nevertheless, be associated with other descriptions by which we can infer knowledge about it, such as in relative chronologies.
     * Some instances of E52 may be defined precisely as representing a declaration of a temporal extent, as, for instance, done in a business contract. They constitute declarative time-spans as defined in CRMgeo (Doerr &amp; Hiebel 2013) and can be described via the property E61 Time Primitive P170 defines time (time is defined by): E52 Time-Span.
     * When used as a common E52 Time-Span for two events, it will nevertheless describe them as being simultaneous, even if nothing else is known.
     */
    "E52_Time-Span": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E52_Time-Span'>;
    /**
     * This class comprises extents in the natural space we live in, in particular on the surface of the Earth, in the pure sense of physics: independent from temporal phenomena and matter. They may serve describing the physical location of things or phenomena or other areas of interest. Geometrically, instances of E53 Place constitute single contiguous areas or a finite aggregation of disjoint areas in space which are each individually contiguous. They may have fuzzy boundaries.
     * The instances of E53 Place are usually determined by reference to the position of “immobile” objects such as buildings, cities, mountains, rivers, or dedicated geodetic marks, but may also be determined by reference to mobile objects. A Place can be determined by combining a frame of reference and a location with respect to this frame.
     * It is sometimes argued that instances of E53 Place are best identified by global coordinates or absolute reference systems. However, relative references are often more relevant in the context of cultural documentation and tend to be more precise. In particular, we are often interested in position in relation to large, mobile objects, such as ships. For example, the Place at which Nelson died is known with reference to a large mobile object – H.M.S Victory. A resolution of this Place in terms of absolute coordinates would require knowledge of the movements of the vessel and the precise time of death, either of which may be revised, and the result would lack historical and cultural relevance.
     * Any instance of E18 Physical Thing can serve as a frame of reference for an instance of E53 Place. This may be documented using the property P157 is at rest relative to (provides reference space for).
     */
    "E53_Place": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E53_Place'>;
    /**
     * This class comprises quantifiable properties that can be measured by some calibrated means and can be approximated by values, i.e., by points or regions in a mathematical or conceptual space, such as natural or real numbers, RGB values etc.
     * An instance of E54 Dimension represents the empirical or theoretically derived quantity, including the precision tolerances resulting from the particular method or calculation. The identity of an instance of E54 Dimension depends on the method of its determination because each method may produce different values even when determining comparable qualities. For instance, the wingspan of a bird alive or dead is a different dimension. Thermoluninescence dating and Rehydroxylation [RHX] dating are different dimensions of temporal distance from now, even if they aim at dating the same object. The method of determination should be expressed using the property P2 has type (is type of). Note that simple terms such as “diameter” or “length” are normally insufficient to unambiguously describe a respective dimension. In contrast, “maximum linear extent” may be sufficient.
     * The properties of the class E54 Dimension allow for expressing the numerical approximation of the values of instances of E54 Dimension adequate to the precision of the applied method of determination. If the respective quantity belongs to a non-discrete space according to the laws of physics, such as spatial distances, it is recommended to record them as approximations by intervals or regions of indeterminacy enclosing the assumed true values. For instance, a length of 5 cm may be recorded as 4.5-5.5 cm, according to the precision of the respective observation. Note, that comparability of values described in different units depends critically on the representation as value regions.
     * Numerical approximations in archaic instances of E58 Measurement Unit used in historical records should be preserved. Equivalents corresponding to current knowledge should be recorded as additional instances of E54 Dimension, as appropriate.
     */
    "E54_Dimension": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E54_Dimension'>;
    /**
     * This class comprises concepts denoted by terms from thesauri and controlled vocabularies used to characterize and classify instances of CIDOC CRM classes. Instances of E55 Type represent concepts in contrast to instances of E41 Appellation which are used to name instances of CIDOC CRM classes.
     * E55 Type is the CIDOC CRM’s interface to domain specific ontologies and thesauri. These can be represented in the CIDOC CRM as subclasses of E55 Type, forming hierarchies of terms, i.e., instances of E55 Type linked via P127 has broader term (has narrower term): E55 Type. Such hierarchies may be extended with additional properties.
     */
    "E55_Type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E55_Type'>;
    /**
     * This class is a specialization of E55 Type and comprises the natural languages in the sense of concepts.
     * This type is used categorically in the model without reference to instances of it, i.e., the Model does not foresee the description of instances of instances of E56 Language, e.g.: “instances of Mandarin Chinese”.
     * It is recommended that internationally or nationally agreed codes and terminology are used to denote instances of E56 Language, such as those defined in ISO 639-2:1998 and later versions.
     */
    "E56_Language": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E56_Language'>;
    /**
     * This class is a specialization of E55 Type and comprises the concepts of materials.
     * Instances of E57 Material may denote properties of matter before its use, during its use, and as incorporated in an object, such as ultramarine powder, tempera paste, reinforced concrete. Discrete pieces of raw-materials kept in museums, such as bricks, sheets of fabric, pieces of metal, should be modelled individually in the same way as other objects. Discrete used or processed pieces, such as the stones from Nefer Titi's temple, should be modelled as parts (cf. P46 is composed of (forms part of): E18 Physical Thing).
     * This type is used categorically in the model without reference to instances of it, i.e., the Model does not foresee the description of instances of instances of E57 Material, e.g.: “instances of gold”.
     * It is recommended that internationally or nationally agreed codes and terminology are used.
     */
    "E57_Material": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E57_Material'>;
    /**
     * This class is a specialization of E55 Type and comprises the types of measurement units: feet, inches, centimetres, litres, lumens, etc.
     * This type is used categorically in the model without reference to instances of it, i.e., the Model does not foresee the description of instances of instances of E58 Measurement Unit, e.g.: “instances of cm”.
     * Système International (SI) units or internationally recognized non-SI terms should be used whenever possible, such as those defined by ISO80000:2009. Archaic Measurement Units used in historical records should be preserved.
     */
    "E58_Measurement_Unit": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E58_Measurement_Unit'>;
    /**
     * This class comprises distinct, delimited and coherent processes and interactions of a material nature, in cultural, social or physical systems, involving and affecting instances of E77 Persistent Item in a way characteristic of the kind of process. Typical examples are meetings, births, deaths, actions of decision taking, making or inventing things, but also more complex and extended ones such as conferences, elections, building of a castle, or battles.
     * While the continuous growth of a tree lacks the limits characteristic of an event, its germination from a seed does qualify as an event. Similarly, the blowing of the wind lacks the distinctness and limits of an event, but a hurricane, flood or earthquake would qualify as an event. Mental processes are considered as events, in cases where they are connected with the material externalization of their results; for example, the creation of a poem, a performance or a change of intention that becomes obvious from subsequent actions or declarations.
     * The effects of an instance of E5 Event may not lead to relevant permanent changes of properties or relations of the items involved in it, for example an unrecorded performance. Of course, in order to be documented, some kind of evidence for an event must exist, be it witnesses, traces or products of the event.
     * While instances of E4 Period always require some form of coherence between its constituent phenomena, in addition, the essential constituents of instances of E5 Event should contribute to an overall effect; for example, the statements made during a meeting and the listening of the audience.
     * Viewed at a coarse level of detail, an instance of E5 Event may appear as if it had an ‘instantaneous’ overall effect, but any process or interaction of material nature in reality have an extent in time and space. At a fine level, instances of E5 Event may be analysed into component phenomena and phases within a space and timeframe, and as such can be seen as a period, regardless of the size of the phenomena. The reverse is not necessarily the case: not all instances of E4 Period give rise to a noteworthy overall effect and are thus not instances of E5 Event.
     */
    "E5_Event": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E5_Event'>;
    /**
     * This class comprises events that end the existence of any instance of E77 Persistent Item.
     * It may be used for temporal reasoning about things (physical items, groups of people, living beings) ceasing to exist; it serves as a hook for determination of a “terminus post quem” or “terminus ante quem”. In cases where substance from an instance of E77 Persistent Item continues to exist in a new form, the process would be documented as instances of E81 Transformation.
     */
    "E64_End_of_Existence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E64_End_of_Existence'>;
    /** This class comprises events that result in the creation of conceptual items or immaterial products, such as legends, poems, texts, music, images, movies, laws, types etc. */
    "E65_Creation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E65_Creation'>;
    /**
     * This class comprises events that result in the formation of a formal or informal E74 Group of people, such as a club, society, association, corporation or nation.
     * E66 Formation does not include the arbitrary aggregation of people who do not act as a collective.
     * The formation of an instance of E74 Group does not require that the group is populated with members at the time of formation. In order to express the joining of members at the time of formation, the respective activity should be simultaneously an instance of both E66 Formation and E85 Joining.
     */
    "E66_Formation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E66_Formation'>;
    /**
     * This class comprises the births of human beings. E67 Birth is a biological event focussing on the context of people coming into life. (E63 Beginning of Existence comprises the coming into life of any living being).
     * Twins, triplets etc. are typically brought into life by the same instance of E67 Birth. The introduction of E67 Birth as a documentation element allows the description of a range of family relationships in a simple model. Suitable extensions may describe more details and the complexity of motherhood with the intervention of modern medicine. In this model, the biological father is not seen as a necessary participant in the birth.
     */
    "E67_Birth": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E67_Birth'>;
    /**
     * This class comprises the events that result in the formal or informal termination of an instance of E74 Group.
     * If the dissolution was deliberate, the Dissolution event should also be instantiated as an instance of E7 Activity.
     */
    "E68_Dissolution": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E68_Dissolution'>;
    /**
     * This class comprises the deaths of human beings.
     * If a person is killed, the death should be documented as an instance of both E69 Death and E7 Activity. The death or perishing of other living beings should be documented as instances of E64 End of Existence.
     */
    "E69_Death": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E69_Death'>;
    /**
     * This class comprises events that destroy one or more instances of E18 Physical Thing such that they lose their identity as the subjects of documentation.
     * Some destruction events are intentional, while others are independent of human activity. Intentional destruction may be documented by classifying the event as both an instance of E6 Destruction and of E7 Activity.
     * The decision to document an object as destroyed, transformed or modified is context sensitive:
     * 1. If the matter remaining from the destruction is not documented, the event is modelled solely as an instance of E6 Destruction.
     * 2. An event should also be documented as an instance of E81 Transformation if it results in the destruction of one or more objects and the simultaneous production of others using parts or material from the original. In this case, the new items have separate identities. Matter is preserved, but identity is not.
     * 3. When the initial identity of the changed instance of E18 Physical Thing is preserved, the event should be documented as an instance of E11 Modification.
     */
    "E6_Destruction": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E6_Destruction'>;
    /**
     * This general class comprises discrete, identifiable, instances of E77 Persistent Item that are documented as single units, that either consist of matter or depend on being carried by matter and are characterized by relative stability.
     * They may be intellectual products or physical things. They may for instance have a solid physical form, an electronic encoding, or they may be a logical concept or structure.
     */
    "E70_Thing": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E70_Thing'>;
    /**
     * This class comprises any gatherings or organizations of human individuals or groups that act collectively or in a similar way due to any form of unifying relationship. In the wider sense this class also comprises official positions which used to be regarded in certain contexts as one actor, independent of the current holder of the office, such as the president of a country. In such cases, it may happen that the group never had more than one member. A joint pseudonym (i.e., a name that seems indicative of an individual but that is actually used as a persona by two or more people) is a particular case of E74 Group.
     * A gathering of people becomes an instance of E74 Group when it exhibits organizational characteristics usually typified by a set of ideas or beliefs held in common, or actions performed together. These might be communication, creating some common artifact, a common purpose such as study, worship, business, sports, etc. Nationality can be modelled as membership in an instance of E74 Group. Married couples and other concepts of family are regarded as particular examples of E74 Group.
     */
    "E74_Group": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E74_Group'>;
    /**
     * This class comprises aggregations of instances of E18 Physical Thing that are assembled and maintained (“curated” and “preserved,” in museological terminology) by one or more instances of E39 Actor over time for a specific purpose and audience, and according to a particular collection development plan. Typical instances of curated holdings are museum collections, archives, library holdings and digital libraries. A digital library is regarded as an instance of E18 Physical Thing because it requires keeping physical carriers of the electronic content.
     * Items may be added or removed from an E78 Curated Holding in pursuit of this plan. This class should not be confused with the E39 Actor maintaining the E78 Curated Holding often referred to with the name of the E78 Curated Holding (e.g., “The Wallace Collection decided…”).
     * Collective objects in the general sense, like a tomb full of gifts, a folder with stamps or a set of chessmen, should be documented as instances of E19 Physical Object, and not as instances of E78 Curated Holding. This is because they form wholes either because they are physically bound together or because they are kept together for their functionality.
     */
    "E78_Curated_Holding": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E78_Curated_Holding'>;
    /**
     * This class comprises activities that result in an instance of E18 Physical Thing being increased, enlarged or augmented by the addition of a part.
     * Typical scenarios include the attachment of an accessory, the integration of a component, the addition of an element to an aggregate object, or the accessioning of an object into a curated instance of E78 Curated Holding. Both the E18 Physical Thing being augmented and the E18 Physical Thing that is being added are treated as separate identifiable wholes prior to the instance of E79 Part Addition. Following the addition of parts, the resulting assemblages are treated objectively as single identifiable wholes, made up of constituent or component parts bound together either physically (for example the engine becoming a part of the car), or by sharing a common purpose (such as the 32 chess pieces that make up a chess set). This class of activities forms a basis for reasoning about the history and continuity of identity of objects that are integrated into other objects over time, such as precious gemstones being repeatedly incorporated into different items of jewellery, or cultural artefacts being added to different museum instances of E78 Curated Holding over their lifespan..
     */
    "E79_Part_Addition": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E79_Part_Addition'>;
    /**
     * This class comprises the activities that result in an instance of E18 Physical Thing being decreased by the removal of a part.
     * Typical scenarios include the detachment of an accessory, the removal of a component or part of a composite object, or the deaccessioning of an object from a curated collection, an instance of E78 Curated Holding. If the instance of E80 Part Removal results in the total decomposition of the original object into pieces, such that the whole ceases to exist, the activity should instead be modelled as an instance of E81 Transformation, i.e., a simultaneous destruction and production. In cases where the part removed has no discernible identity prior to its removal but does have an identity subsequent to its removal, the activity should be modelled as both an instance of E80 Part Removal and E12 Production. This class of activities forms a basis for reasoning about the history, and continuity of identity over time, of objects that are removed from other objects, such as precious gemstones being extracted from different items of jewellery, or cultural artifacts being deaccessioned from different museum collections over their lifespan.
     */
    "E80_Part_Removal": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E80_Part_Removal'>;
    /**
     * This class comprises the events that result in the simultaneous destruction of one or more than one E18 Physical Thing and the creation of one or more than one E18 Physical Thing that preserves recognizable substance and structure from the first one(s) but has fundamentally different nature or identity.
     * Although the old and the new instances of E18 Physical Thing are treated as discrete entities having separate, unique identities, they are causally connected through the E81 Transformation; the destruction of the old E18 Physical Thing(s) directly causes the creation of the new one(s) using or preserving some relevant substance and structure. Instances of E81 Transformation are therefore distinct from re-classifications (documented using E17 Type Assignment) or modifications (documented using E11 Modification) of objects that do not fundamentally change their nature or identity. Characteristic cases are reconstructions and repurposing of historical buildings or ruins, fires leaving buildings in ruins, taxidermy of specimen in natural history.
     * Even though such instances of E81 Transformation are often motivated by a change of intended use, substantial material changes should justify the documentation of the result as a new instance of E18 Physical Thing and not just the change of function. The latter may be documented as an extended activity (instance of E7 Activity) of using it.
     */
    "E81_Transformation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E81_Transformation'>;
    /**
     * This class comprises activities formally defining new types of items.
     * It is typically a rigorous scholarly or scientific process that ensures a type is exhaustively described and appropriately named. In some cases, particularly in archaeology and the life sciences, E83 Type Creation requires the identification of an exemplary specimen and the publication of the type definition in an appropriate scholarly forum. The activity modelled as an instance of E83 Type Creation is central to research in the life sciences, where a type would be referred to as a “taxon,” the type description as a “protologue,” and the exemplary specimens as “original element” or “holotype”.
     */
    "E83_Type_Creation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E83_Type_Creation'>;
    /**
     * This class comprises the activities that result in an instance of E39 Actor becoming a member of an instance of E74 Group. This class does not imply initiative by either party. It may be the initiative of a third party.
     * Typical scenarios include becoming a member of a social organisation, becoming employee of a company, marriage, the adoption of a child by a family and the inauguration of somebody into an official position.
     */
    "E85_Joining": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E85_Joining'>;
    /**
     * This class comprises the activities that result in an instance of E39 Actor to be disassociated from an instance of E74 Group. This class does not imply initiative by either party. It may be the initiative of a third party.
     * Typical scenarios include the termination of membership in a social organisation, ending the employment at a company, divorce, and the end of tenure of somebody in an official position.
     */
    "E86_Leaving": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E86_Leaving'>;
    /**
     * This class comprises the activities that result in the continuity of management and the preservation and evolution of instances of E78 Curated Holding, following an implicit or explicit curation plan.
     * It specializes the notion of activity into the curation of a collection and allows the history of curation to be recorded.
     * Items are accumulated and organized following criteria like subject, chronological period, material type, style of art etc. and can be added or removed from an instance of E78 Curated Holding for a specific purpose and/or audience. The initial aggregation of items of a collection is regarded as an instance of E12 Production Event while the activity of evolving, preserving and promoting a collection is regarded as an instance of E87 Curation Activity.
     */
    "E87_Curation_Activity": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E87_Curation_Activity'>;
    /**
     * This class comprises transfers of legal ownership from one or more instances of E39 Actor to one or more other instances of E39 Actor.
     * The class also applies to the establishment or loss of ownership of instances of E18 Physical Thing. It does not, however, imply changes of any other kinds of right. The recording of the donor and/or recipient is optional. It is possible that in an instance of E8 Acquisition there is either no donor or no recipient. Depending on the circumstances, it may describe:
     * 1. the beginning of ownership
     * 2. the end of ownership
     * 3. the transfer of ownership
     * 4. the acquisition from an unknown source
     * 5. the loss of title due to destruction of the item
     * It may also describe events where a collector appropriates legal title, for example by annexation or field collection. The interpretation of the museum notion of "accession" differs between institutions. The CIDOC CRM therefore models legal ownership (E8 Acquisition) and physical custody (E10 Transfer of Custody) separately. Institutions will then model their specific notions of accession and deaccession as combinations of these.
     */
    "E8_Acquisition": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E8_Acquisition'>;
    /**
     * This class comprises instances of E92 Spacetime Volume, whose temporal extent has been chosen in order to determine the spatial extent of a phenomenon over the chosen time-span. Respective phenomena may, for instance, be historical events or periods, but can also be the diachronic extent and existence of physical things. In other words, instances of this class fix a slice of another instance of E92 Spacetime Volume in time.
     * The temporal extent of an instance of E93 Presence typically is predetermined by the researcher so as to focus the investigation particularly on finding the spatial extent of the phenomenon by testing for its characteristic features. There are at least two basic directions such investigations might take. The investigation may wish to determine where something was during some time or it may wish to reconstruct the total passage of a phenomenon’s spacetime volume through an examination of discrete presences. Observation and measurement of features indicating the presence or absence of a phenomenon in some space allows for the progressive approximation of spatial extents through argumentation typically based on inclusion, exclusion and various overlaps.
     */
    "E93_Presence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E93_Presence'>;
    /**
     * This class comprises transfers of legal ownership from one or more instances of E39 Actor to one or more different instances of E39 Actor, where the transferring party is completely compensated by the payment of a monetary amount. In more detail, a purchase agreement establishes a fixed monetary obligation at its initialization on the receiving party, to the giving party. An instance of E96 Purchase begins with the contract or equivalent agreement and ends with the fulfilment of all contractual obligations. In the case that the activity is abandoned before both parties have fulfilled these obligations, the activity is not regarded as an instance of E96 Purchase.
     * This class is a very specific case of the much more complex social business practices of exchange of goods and the creation and satisfaction of related social obligations. Purchase activities which define individual sales prices per object can be modelled by instantiating E96 Purchase for each object individually and as part of an overall instance of E96 Purchase transaction.
     */
    "E96_Purchase": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E96_Purchase'>;
    /** This class comprises quantities of monetary possessions or obligations in terms of their nominal value with respect to a particular currency. These quantities may be abstract accounting units, the nominal value of a heap of coins or bank notes at the time of validity of the respective currency, the nominal value of a bill of exchange or other documents expressing monetary claims or obligations. It specifically excludes amounts expressed in terms of weights of valuable items, like gold and diamonds, and quantities of other non-currency items, like goats or stocks and bonds. */
    "E97_Monetary_Amount": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E97_Monetary_Amount'>;
    /** This class comprises the units in which a monetary system, supported by an administrative authority or other community, quantifies and arithmetically compares all monetary amounts declared in the unit. The unit of a monetary system must describe a nominal value which is kept constant by its administrative authority and an associated banking system if it exists, and not by market value. For instance, one may pay with grams of gold, but the respective monetary amount would have been agreed as the gold price in US dollars on the day of the payment. Under this definition, British Pounds, U.S. Dollars, and European Euros are examples of currency, but “grams of gold” is not. One monetary system has one and only one currency. Instances of this class must not be confused with coin denominations, such as “Dime” or “Sestertius”. Non-monetary exchange of value in terms of quantities of a particular type of goods, such as cows, do not constitute a currency. */
    "E98_Currency": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E98_Currency'>;
    /** This classes comprises types that stand as the models for instances of E22 Human-Made Object that are produced as the result of production activities using plans exact enough to result in one or more series of uniform, functionally and aesthetically identical and interchangeable items. The product type is the intended ideal form of the manufacture process. It is typical of instances of E22 that conform to an instance of E99 Product Type that its component parts are interchangeable with component parts of other instances of E22 made after the model of the same instance of E99. Frequently, the uniform production according to a given instance of E99 Product Type is achieved by creating individual tools, such as moulds or print plates that are themselves carriers of the design of the product type. Modern tools may use the flexibility of electronically controlled devices to achieve such uniformity. The product type itself, i.e., the potentially unlimited series of aesthetically equivalent items, may be the target of artistic design, rather than the individual object. In extreme cases, only one instance of a product type may have been produced, such as in a "print on demand" process which was only triggered once. However, this should not be confused with industrial prototypes, such as car prototypes, which are produced prior to the production line being set up, or test the production line itself. */
    "E99_Product_Type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E99_Product_Type'>;
    /**
     * This class comprises changes of the physical location of the instances of E19 Physical Object.
     * Note, that the class E9 Move inherits the property P7 took place at (witnessed): E53 Place. This property should be used to describe the trajectory or a larger area within which a move takes place, whereas the properties P26 moved to (was destination of), P27 moved from (was origin of) describe the start and end points only. Moves may also be documented to consist of other moves (via P9 consists of (forms part of)), in order to describe intermediate stages on a trajectory. In that case, start and end points of the partial moves should match appropriately between each other and with the overall event.
     */
    "E9_Move": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/E9_Move'>;
    /**
     * This property links an instance of E69 Death to the instance of E21 Person that died.
     * An instance of E69 Death may involve multiple people, for example in the case of a battle or disaster.
     * This is not intended for use with general natural history material, only people.
     */
    "P100_was_death_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P100_was_death_of'>;
    /**
     * This property links an instance of E64 End of Existence to the instance of E77 Persistent Item taken out of existence by it.
     * In the case of immaterial things, the instance of E64 End of Existence is considered to take place with the destruction of the last physical carrier.
     * This allows an “end” to be attached to any instance of E77 Persistent Item being documented i.e., instances of E70 Thing, E72 Legal Object, E39 Actor, E41 Appellation and E55 Type. For many instances of E77 Persistent Item we know the maximum life-span and can infer that they must have ended to exist. We assume in that case an instance of E64 End of Existence, which may be as unnoticeable as forgetting the secret knowledge by the last representative of some indigenous nation.
     */
    "P93_took_out_of_existence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P93_took_out_of_existence'>;
    "P100i_died_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P100i_died_in'>;
    "P93i_was_taken_out_of_existence_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P93i_was_taken_out_of_existence_by'>;
    /**
     * This property associates an instance of E70 Thing with an instance of E55 Type that describes the type of use that it was actually employed for.
     * It allows the relationship between particular things, both physical and immaterial, and the general methods and techniques of real use to be documented. This may well be different from the intended functional purpose of the instance of E70 Thing (which can be documented with P103 was intended for (was intention of)). For example, it could be recorded that a particular wooden crate had a general use as a shelf support on a market stall even though it had been originally intended for carrying vegetables.
     * The use of this property is intended to allow the documentation of usage patterns attested in historical records or through scientific investigation (for instance ceramic residue analysis). It should not be used to document the intended, and thus assumed, use of an object.
     */
    "P101_had_as_general_use": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P101_had_as_general_use'>;
    "P101i_was_use_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P101i_was_use_of'>;
    /**
     * This property associates an instance of E35 Title has been applied to an instance of E71 Human-Made Thing.
     * The P102.1 has type property of the P102 has title (is title of) property enables the relationship between the title and the thing to be further clarified, for example, if the title was a given title, a supplied title etc.
     * It allows any human-made material or immaterial thing to be given a title. It is possible to imagine a title being created without a specific object in mind.
     */
    "P102_has_title": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P102_has_title'>;
    /**
     * This property describes the naming or identification of any real-world item by a name or any other identifier.
     * This property is intended for identifiers in general use, which form part of the world the model intends to describe, and not merely for internal database identifiers which are specific to a technical system, unless these latter also have a more general use outside the technical context. This property includes in particular identification by mathematical expressions such as coordinate systems used for the identification of instances of E53 Place. The property does not reveal anything about when, where and by whom this identifier was used. A more detailed representation can be made using the fully developed (i.e., indirect) path through E15 Identifier Assignment.
     * This property is a shortcut for the path from E1 CRM Entity through P140i was attributed by, E15 Identifier Assignment, P37 assigned to E42 Identifier.
     * It is also a shortcut for the path from E1 CRM Entity through P1 is identified by, E41 Appellation, P139 has alternative form to E41 Appellation.
     */
    "P1_is_identified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P1_is_identified_by'>;
    "P102i_is_title_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P102i_is_title_of'>;
    "P1i_identifies": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P1i_identifies'>;
    /**
     * This property links an instance of E71 Human-Made Thing to an instance of E55 Type describing its intended usage.
     * It creates a relation between specific human-made things, both physical and immaterial, to types of intended methods and techniques of use. Note: A link between specific human-made things and a specific use activity should be expressed using P19 was intended use of (was made for).
     */
    "P103_was_intended_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P103_was_intended_for'>;
    "P103i_was_intention_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P103i_was_intention_of'>;
    /**
     * This property links a particular instance of E72 Legal Object to the instances of E30 Right to which it is subject.
     * The Right is held by an E39 Actor as described by P75 possesses (is possessed by).
     */
    "P104_is_subject_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P104_is_subject_to'>;
    "P104i_applies_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P104i_applies_to'>;
    /**
     * This property identifies the instance of E39 Actor who holds the instances of E30 Right to an instance of E72 Legal Object.
     * It is a superproperty of P52 has current owner (is current owner of) because ownership is a right that is held on the owned object.
     * This property is a shortcut of the fully developed path from E72 Legal Object, P104 is subject to, E30 Right, P75i is possessed by to E39 Actor.
     */
    "P105_right_held_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P105_right_held_by'>;
    "P105i_has_right_on": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P105i_has_right_on'>;
    /**
     * This property associates an instance of E90 Symbolic Object with a part of it that is by itself an instance of E90 Symbolic Object, such as fragments of texts or clippings from an image.
     * This property is transitive asymmetric.
     */
    "P106_is_composed_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P106_is_composed_of'>;
    "P106i_forms_part_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P106i_forms_part_of'>;
    /**
     * This property associates an instance of E74 Group with an instance of E39 Actor that is or has been a member thereof.
     * Instances of E74 Group and E21 Person may all be members of instances of E74 Group. An instance of E74 Group may be founded initially without any member.
     * This property is a shortcut of the more fully developed path from E74 Group, P144i gained member by, E85 Joining, P143 joined to E39 Actor.
     * The property P107.1 kind of member can be used to specify the type of membership or the role the member has in the group.
     */
    "P107_has_current_or_former_member": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P107_has_current_or_former_member'>;
    "P107i_is_current_or_former_member_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P107i_is_current_or_former_member_of'>;
    /**
     * This property identifies the instance of E24 Physical Human-Made Thing that came into existence as a result of the instance of E12 Production.
     * The identity of an instance of E24 Physical Human-Made Thing is not defined by its matter, but by its existence as a subject of documentation. An E12 Production can result in the creation of multiple instances of E24 Physical Human-Made Thing.
     */
    "P108_has_produced": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P108_has_produced'>;
    /** This property identifies the instance of E18 Physical Thing modified in an instance of E11 Modification. */
    "P31_has_modified": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P31_has_modified'>;
    /**
     * This property links an instance of E63 Beginning of Existence to the instance of E77 Persistent Item brought into existence by it.
     * It allows a “start” to be attached to any instance of E77 Persistent Item being documented, i.e., as instances of E70 Thing, E72 Legal Object, E39 Actor, E41 Appellation and E55 Type.
     */
    "P92_brought_into_existence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P92_brought_into_existence'>;
    "P108i_was_produced_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P108i_was_produced_by'>;
    "P31i_was_modified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P31i_was_modified_by'>;
    "P92i_was_brought_into_existence_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P92i_was_brought_into_existence_by'>;
    /**
     * This property identifies the instance of E39 Actor who assumed or have assumed overall curatorial responsibility for an instance of E78 Curated Holding.
     * It does not allow a history of curation to be recorded. This would require use of an event initiating a curator being responsible for a collection.
     */
    "P109_has_current_or_former_curator": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P109_has_current_or_former_curator'>;
    /**
     * This property identifies the instance of E39 Actor who has or has had custody of an instance of E18 Physical Thing at some time. This property leaves open the question if parts of this physical thing have been added or removed during the time-spans it has been under the custody of this actor, but it is required that at least a part which can unambiguously be identified as representing the whole has been under this custody for its whole time. The way, in which a representative part is defined, should ensure that it is unambiguous who keeps a part and who the whole and should be consistent with the identity criteria of the kept instance of E18 Physical Thing.
     * The distinction with P50 has current keeper (is current keeper of) is that P49 has former or current keeper (is former or current keeper of) leaves open the question as to whether the specified keepers are current.
     * This property is a shortcut for the more detailed path from E18 Physical Thing through P30i custody transferred through, E10 Transfer of Custody, P28 custody surrendered by or P29 custody received by to E39 Actor.
     */
    "P49_has_former_or_current_keeper": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P49_has_former_or_current_keeper'>;
    "P109i_is_current_or_former_curator_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P109i_is_current_or_former_curator_of'>;
    "P49i_is_former_or_current_keeper_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P49i_is_former_or_current_keeper_of'>;
    /**
     * This property associates an instance of E92 Spacetime Volume with another instance of E92 Spacetime Volume that falls within the latter. In other words, all points in the former are also points in the latter.
     * This property is transitive and reflexive.
     */
    "P10_falls_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P10_falls_within'>;
    /**
     * This symmetric property associates two instances of E92 Spacetime Volume that have some of their extents in common. If only the fuzzy boundaries of the instances of E92 Spacetime Volume overlap, this property cannot be determined from observation alone and therefore should not be applied. However, there may be other forms of justification that the two instances of E92 Spacetime Volume must have some of their extents in common regardless of where and when precisely.
     * If this property holds for two instances of E92 Spacetime Volume then it cannot be the case that P133 is spatiotemporally separated from also holds for the same two instances. Furthermore, there are cases where neither P132 spatiotemporally overlaps with nor P133 is spatiotemporally separated from holds between two instances of E92 Spacetime Volume. This would occur where only an overlap of the fuzzy boundaries of the two instances of E92 Spacetime Volume occurs and no other evidence is available.
     * This property is not transitive. This property is symmetric. This property is reflexive.
     */
    "P132_spatiotemporally_overlaps_with": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P132_spatiotemporally_overlaps_with'>;
    "P10i_contains": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P10i_contains'>;
    /**
     * This property identifies the instance of E24 Physical Human-Made Thing that is added to (augmented) in an instance of E79 Part Addition.
     * Although an instance of E79 Part Addition event normally concerns only one instance of E24 Physical Human-Made Thing, it is possible to imagine circumstances under which more than one item might be added to (augmented). For example, the artist Jackson Pollock trailing paint onto multiple canvasses.
     */
    "P110_augmented": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P110_augmented'>;
    "P110i_was_augmented_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P110i_was_augmented_by'>;
    /** This property identifies the instance of E18 Physical Thing that is added during an instance of E79 Part Addition activity. */
    "P111_added": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P111_added'>;
    /**
     * This property describes the use of material or immaterial things in a way essential to the performance or the outcome of an instance of E7 Activity.
     * This property typically applies to tools, instruments, moulds, raw materials and items embedded in a product. It implies that the presence of the object in question was a necessary condition for the action. For example, the activity of writing this text required the use of a computer. An immaterial thing can be used if at least one of its carriers is present. For example, the software tools on a computer.
     * Another example is the use of a particular name by a particular group of people over some span to identify a thing, such as a settlement. In this case, the physical carriers of this name are at least the people understanding its use.
     */
    "P16_used_specific_object": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P16_used_specific_object'>;
    "P111i_was_added_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P111i_was_added_by'>;
    "P16i_was_used_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P16i_was_used_for'>;
    /**
     * This property identifies the instance of E18 Physical Thing that was diminished by an instance of E80 Part Removal.
     * Although an instance of E80 Part removal activity normally concerns only one instance of E18 Physical Thing, it is possible to imagine circumstances under which more than one item might be diminished by a single instance of E80 Part Removal activity.
     */
    "P112_diminished": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P112_diminished'>;
    "P112i_was_diminished_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P112i_was_diminished_by'>;
    /** This property identifies the instance of E18 Physical Thing that is removed during an instance of E80 Part Removal activity. */
    "P113_removed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P113_removed'>;
    /**
     * This property describes the active or passive presence of an E77 Persistent Item in an instance of E5 Event without implying any specific role.
     * It documents known events in which an instance of E77 Persistent Item was present during the course of its life or history. For example, an object may be the desk, now in a museum, on which a treaty was signed. The instance of E53 Place and the instance of E52 Time-Span where and when these events happened provide us with constraints about the presence of the related instance E77 Persistent Item in the past. Instances of E90 Symbolic Object, in particular information objects, are physically present in events via at least one of the instances of E18 Physical Thing carrying them. Note, that the human mind can be such a carrier. A precondition for a transfer of information to a person or another new physical carrier is the presence of the respective information object and this person or physical thing in one event.
     */
    "P12_occurred_in_the_presence_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P12_occurred_in_the_presence_of'>;
    "P113i_was_removed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P113i_was_removed_by'>;
    "P12i_was_present_at": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P12i_was_present_at'>;
    /**
     * This property describes the active or passive participation of instances of E39 Actors in an instance of E5 Event.
     * It documents known events in which an instance of E39 Actor has participated during the course of that actor’s life or history. The instances of E53 Place and E52 Time-Span where and when these events happened provide us with constraints about the presence of the related instances of E39 Actor in the past. Collective actors, i.e., instances of E74 Group, may physically participate in events via their representing instances of E21 Persons only. The participation of multiple actors in an event is most likely an indication of their acquaintance and interaction.
     * The property implies that the actor was involved in the event but does not imply any causal relationship. For instance, someone having been portrayed can be said to have participated in the creation of the portrait.
     */
    "P11_had_participant": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P11_had_participant'>;
    "P11i_participated_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P11i_participated_in'>;
    /**
     * This symmetric property associates an instance of E53 Place with another instance of E53 Place geometrically overlapping it.
     * It does not specify anything about the shared area. This property is purely spatial. It does not imply that phenomena that define, by their extent, places related by P121 overlaps with have ever covered a common area at the same time or even coexisted. In contrast, spatiotemporal overlaps described by P132 spatiotemporally overlaps are the total of areas simultaneously covered by the related spacetime volumes.
     * This property is symmetric. This property is reflexive.
     */
    "P121_overlaps_with": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P121_overlaps_with'>;
    /**
     * This symmetric property associates an instance of E53 Place with another instance of E53 Place which shares a part of its border.
     * This property is purely spatial. It does not imply that the phenomena that define, by their extent, places related by P122 borders with have ever shared a respective border at the same time or even coexisted. In particular, this may be the case when the respective common border is formed by a natural feature.
     * This property is not transitive. This property is symmetric.
     */
    "P122_borders_with": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P122_borders_with'>;
    /** This property identifies the instance or instances of E18 Physical Thing that are the result of an instance of E81 Transformation. New items replace the transformed item or items, which cease to exist as units of documentation. The physical continuity between the old and the new is expressed by the links to the common instance of E81 Transformation. */
    "P123_resulted_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P123_resulted_in'>;
    "P123i_resulted_from": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P123i_resulted_from'>;
    /**
     * This property identifies the instance or instances E18 Physical Thing that have ceased to exist due to an instance of E81 Transformation.
     * The item that has ceased to exist and was replaced by the result of the Transformation. The continuity between both items, the new and the old, is expressed by the links to the common instance of E81 Transformation.
     */
    "P124_transformed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P124_transformed'>;
    "P124i_was_transformed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P124i_was_transformed_by'>;
    /**
     * This property associates an instance of E7 Activity to an instance of E55 Type, which classifies an instance of E70 Thing used in an instance of E7 Activity, when the specific instance is either unknown or not of interest, such as use of "a hammer".
     * This property is a shortcut of the more fully developed path from E7 Activity through P16 used specific object, E70 Thing, P2 has type, to E55 Type
     */
    "P125_used_object_of_type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P125_used_object_of_type'>;
    "P125i_was_type_of_object_used_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P125i_was_type_of_object_used_in'>;
    /**
     * This property identifies the instance of E57 Material employed in an instance of E11 Modification.
     * The instance of E57 Material used during the instance of E11 Modification does not necessarily become incorporated into the instance of E24 Physical Human-Made Thing that forms the subject of the instance of E11 Modification.
     */
    "P126_employed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P126_employed'>;
    "P126i_was_employed_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P126i_was_employed_in'>;
    /**
     * This property associates an instance of E55 Type with another instance of E55 Type that has a broader meaning.
     * It allows instances of E55 Types to be organised into hierarchies. This is the sense of "broader term generic (BTG)" as defined in ISO 25964-2:2013 (International Organization for Standardization 2013).
     * This property is transitive. This property is asymmetric.
     */
    "P127_has_broader_term": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P127_has_broader_term'>;
    "P127i_has_narrower_term": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P127i_has_narrower_term'>;
    /** This property identifies an instance E90 Symbolic Object carried by an instance of E18 Physical Thing. Since an instance of E90 Symbolic Object is defined as an immaterial idealization over potentially multiple carriers, any individual realization on a particular physical carrier may be defective, due to deterioration or shortcomings in the process of creating the realization compared to the intended ideal. As long as such defects do not substantially affect the complete recognition of the respective symbolic object, it is still regarded as carrying an instance of this E90 Symbolic Object. If these defects are of scholarly interest, the particular realization can be modelled as an instance of E25 Human-Made Feature. Note, that any instance of E90 Symbolic Object incorporated (P165) in the carried symbolic object is also carried by the same instance of E18 Physical Thing. */
    "P128_carries": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P128_carries'>;
    /**
     * This property generalises the notions of "copy of" and "similar to" into a directed relationship, where the domain expresses the derivative or influenced item and the range the source or influencing item, if such a direction can be established. The property can also be used to express similarity in cases that can be stated between two objects only, without historical knowledge about its reasons. The property expresses a symmetric relationship in case no direction of influence can be established either from evidence on the item itself or from historical knowledge. This holds in particular for siblings of a derivation process from a common source or non-causal cultural parallels, such as some weaving patterns.
     * The P130.1 kind of similarity property of the P130 shows features of (features are also found on) property enables the relationship between the domain and the range to be further clarified, in the sense from domain to range, if applicable. For example, it may be expressed if both items are product “of the same mould”, or if two texts “contain identical paragraphs”.
     * If the reason for similarity is a sort of derivation process, i.e., that the creator has used or had in mind the form of a particular thing during the creation or production, this process should be explicitly modelled. In these cases, P130 shows features of can be regarded as a shortcut of such a process. However, the current model does not contain any path specific enough to infer this property. Specializations of the CIDOC CRM may however be more explicit, for instance describing the use of moulds etc.
     * This property is not transitive. This property is irreflexive.
     */
    "P130_shows_features_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P130_shows_features_of'>;
    "P128i_is_carried_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P128i_is_carried_by'>;
    "P130i_features_are_also_found_on": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P130i_features_are_also_found_on'>;
    /**
     * This property documents that an instance of E89 Propositional Object has as subject an instance of E1 CRM Entity.
     * This differs from P67 refers to (is referred to by), which refers to an instance of E1 CRM Entity, in that it describes the primary subject or subjects of an instance of E89 Propositional Object.
     */
    "P129_is_about": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P129_is_about'>;
    /** This property documents that an instance of E89 Propositional Object makes a statement about an instance of E1 CRM Entity. P67 refers to (is referred to by) has the P67.1 has type link to an instance of E55 Type. This is intended to allow a more detailed description of the type of reference. This differs from P129 is about (is subject of), which describes the primary subject or subjects of the instance of E89 Propositional Object. */
    "P67_refers_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P67_refers_to'>;
    "P129i_is_subject_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P129i_is_subject_of'>;
    "P67i_is_referred_to_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P67i_is_referred_to_by'>;
    /**
     * This symmetric property associates two instances of E92 Spacetime Volume that have no extents in common. If only the fuzzy boundaries of the instances of E92 Spacetime Volume overlap, this property cannot be determined from observation alone and therefore should not be applied. However, there may be other forms of justification that the two instances of E92 Spacetime Volume must not have any of their extents in common regardless of where and when precisely.
     * If this property holds for two instances of E92 Spacetime Volume then it cannot be the case that P132 spatiotemporally overlaps with also holds for the same two instances. Furthermore, there are cases where neither P132 spatiotemporally overlaps with nor P133 is spatiotemporally separated from holds between two instances of E92 Spacetime Volume. This would occur where only an overlap of the fuzzy boundaries of the two instances of E92 Spacetime Volume occurs and no other evidence is available.
     * This property is not transitive. This property is symmetric. This property is irreflexive.
     */
    "P133_is_spatiotemporally_separated_from": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P133_is_spatiotemporally_separated_from'>;
    /**
     * This property associates two instances of E7 Activity, where the domain is considered as an intentional continuation of the range. A continuation of an activity may happen when the continued activity is still ongoing or after the continued activity has completely ended. The continuing activity may have started already before it decided to continue the other one. Continuation implies a coherence of intentions and outcomes of the involved activities.
     * This property is not transitive. This property is asymmetric.
     */
    "P134_continued": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P134_continued'>;
    /**
     * This is a high-level property, which captures the relationship between an instance of E7 Activity and anything, that is, an instance of E1 CRM Entity that may have had some bearing upon it.
     * The property has more specific sub properties.
     */
    "P15_was_influenced_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P15_was_influenced_by'>;
    "P176i_starts_after_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P176i_starts_after_the_start_of'>;
    "P134i_was_continued_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P134i_was_continued_by'>;
    "P15i_influenced": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P15i_influenced'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity starts definitely before the start of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-start &lt; B-start is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to a disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets, overlaps, contains, finished-by}. This property is transitive. This property is asymmetric.
     *
     * Figure 14: Temporal entity A starts before the start of temporal entity B. Here A is longer than B
     *
     * Figure 15: Temporal entity A starts before the start of temporal entity B. Here A is shorter than B
     */
    "P176_starts_before_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P176_starts_before_the_start_of'>;
    /** This property identifies the instance of E55 Type, which is created in an instance of E83 Type Creation activity. */
    "P135_created_type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P135_created_type'>;
    /**
     * This property links an instance of E65 Creation to the instance of E28 Conceptual Object created by it.
     * It represents the act of conceiving the intellectual content of the instance of E28 Conceptual Object. It does not represent the act of creating the first physical carrier of the instance of E28 Conceptual Object. As an example, this is the composition of a poem, not its commitment to paper.
     */
    "P94_has_created": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P94_has_created'>;
    "P135i_was_created_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P135i_was_created_by'>;
    "P94i_was_created_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P94i_was_created_by'>;
    /**
     * This property identifies one or more instances of E1 CRM Entity that were used as evidence to declare a new instance of E55 Type.
     * The examination of these items is often the only objective way to understand the precise characteristics of a new type. Such items should be deposited in a museum or similar institution for that reason. The taxonomic role renders the specific relationship of each item to the type, such as "holotype" or "original element".
     */
    "P136_was_based_on": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P136_was_based_on'>;
    "P136i_supported_type_creation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P136i_supported_type_creation'>;
    /**
     * This property associates an instance of E1 CRM Entity with an instance of E55 Type for which it has been declared to be a particularly characteristic example.
     * The P137.1 in the taxonomic role property of P137 exemplifies (is exemplified by) allows differentiation of taxonomic roles. The taxonomic role renders the specific relationship of this example to the type, such as "prototypical", "archetypical", "lectotype", etc. The taxonomic role "lectotype" is not associated with the instance of E83 Type Creation itself but is selected in a later phase.
     */
    "P137_exemplifies": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P137_exemplifies'>;
    /**
     * This property allows sub typing of CIDOC CRM entities –a form of specialisation – through the use of a terminological hierarchy, or thesaurus.
     * The CIDOC CRM is intended to focus on the high-level entities and relationships needed to describe data structures. Consequently, it does not specialise entities any further than is required for this immediate purpose. However, entities in the isA hierarchy of the CIDOC CRM may by specialised into any number of sub entities, which can be defined in the E55 Type hierarchy. E41 Appellation, for example, may be specialised into “e-mail address”, “telephone number”, “post office box”, “URL” etc. none of which figures explicitly in the CIDOC CRM hierarchy. A comprehensive explanation about refining CIDOC CRM concepts by E55 Type is given in the section “About Types” in the section on “Specific Modelling Constructs” of this document.
     * This property is a shortcut for the path from E1 CRM Entity through P41i was classified by, E17 Type Assignment, P42 assigned to E55 Type.
     */
    "P2_has_type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P2_has_type'>;
    "P137i_is_exemplified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P137i_is_exemplified_by'>;
    "P2i_is_type_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P2i_is_type_of'>;
    /**
     * This property establishes the relationship between an instance of E36 Visual Item and the instance of E1 CRM Entity that it visually represents.
     * Any entity may be represented visually. This property is part of the fully developed path from E24 Physical Human-Made Thing through P65 shows visual item (is shown by), E36 Visual Item, P138 represents (has representation) to E1 CRM Entity, which is shortcut by P62 depicts (is depicted by). P138.1 mode of representation allows the nature of the representation to be refined.
     * This property is also used for the relationship between an original and a digitisation of the original by the use of techniques such as digital photography, flatbed or infrared scanning. Digitisation is here seen as a process with a mechanical, causal component rendering the spatial distribution of structural and optical properties of the original and does not necessarily include any visual similarity identifiable by human observation.
     */
    "P138_represents": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P138_represents'>;
    "P138i_has_representation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P138i_has_representation'>;
    /**
     * This property associates an instance of E41 Appellation with another instance of E41 Appellation that constitutes a derivative or variant of the former and that may also be used for identifying items identified by the former, in suitable contexts, independent from the particular item to be identified. This property should not be confused with additional variants of names used characteristically for a single, particular item, such as individual nicknames. It is a directed relationship, where the range expresses the derivative or variant and the domain the source of derivation or original form of variation, if such a direction can be established. Otherwise, the relationship is symmetric.
     * Multiple names assigned to an object, which do not apply to all things identified with the specific instance of E41 Appellation, should be modelled as repeated values of P1 is identified by (identifies) of this object.
     * P139.1 has type allows the type of derivation to be refined, for instance “transliteration from Latin 1 to ASCII”.
     */
    "P139_has_alternative_form": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P139_has_alternative_form'>;
    "P139i_is_alternative_form_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P139i_is_alternative_form_of'>;
    /**
     * This property links an instance of E6 Destruction to an instance of E18 Physical Thing that has been destroyed by it.
     * Destruction implies the end of an item’s life as a subject of cultural documentation – the physical matter of which the item was composed may in fact continue to exist. An instance of E6 Destruction may be contiguous with an instance of E12 Production that brings into existence a derived object composed partly of matter from the destroyed object.
     */
    "P13_destroyed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P13_destroyed'>;
    "P13i_was_destroyed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P13i_was_destroyed_by'>;
    /**
     * This property associates an instance of E13 Attribute Assignment with the instance of E1 CRM Entity about which it made an attribution. The instance of E1 CRM Entity plays the role of the domain of the attribution.
     * The kind of attribution made should be documented using P177 assigned property of type (is type of property assigned).
     */
    "P140_assigned_attribute_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P140_assigned_attribute_to'>;
    "P140i_was_attributed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P140i_was_attributed_by'>;
    /**
     * This property associates an instance of E13 Attribute Assignment with the instance of E1 CRM Entity used in the attribution. The instance of E1 CRM Entity here plays the role of the range of the attribution.
     * The kind of attribution made should be documented using P177 assigned property of type (is type of property assigned).
     */
    "P141_assigned": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P141_assigned'>;
    "P141i_was_assigned_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P141i_was_assigned_by'>;
    /** This property associates an instance of E15 Identifier Assignment with the instance of E90 Symbolic Object used as constituent of an instance of E42 Identifier in this act of assignment. */
    "P142_used_constituent": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P142_used_constituent'>;
    "P142i_was_used_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P142i_was_used_in'>;
    /**
     * This property identifies the instance of E39 Actor that becomes member of an instance of E74 Group in an instance of E85 Joining.
     * Joining events allow for describing actors becoming members of a group with the more detailed path E74 Group, P144i gained member by, E85 Joining, P143 joined, E39 Actor, compared to the shortcut offered by P107 has current or former member (is current or former member of).
     */
    "P143_joined": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P143_joined'>;
    "P143i_was_joined_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P143i_was_joined_by'>;
    /**
     * This property identifies the instance of E74 Group of which an instance of E39 Actor becomes a member through an instance of E85 Joining.
     * Although a joining activity normally concerns only one instance of E74 Group, it is possible to imagine circumstances under which becoming member of one Group implies becoming member of another Group as well.
     * Joining events allow for describing people becoming members of a group with a more detailed path from E74 Group through, P144i gained member by, E85 Joining, P143 joined, E39 Actor, compared to the shortcut offered by P107 has current or former member (is current or former member of).
     * The property P144.1 kind of member can be used to specify the type of membership or the role the member has in the group.
     */
    "P144_joined_with": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P144_joined_with'>;
    "P144i_gained_member_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P144i_gained_member_by'>;
    /** This property identifies the instance of E39 Actor that leaves an instance of E74 Group through an instance of E86 Leaving. */
    "P145_separated": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P145_separated'>;
    "P145i_left_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P145i_left_by'>;
    /**
     * This property identifies the instance of E74 Group an instance of E39 Actor leaves through an instance of E86 Leaving.
     * Although a leaving activity normally concerns only one instance of E74 Group, it is possible to imagine circumstances under which leaving one E74 Group implies leaving another E74 Group as well.
     */
    "P146_separated_from": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P146_separated_from'>;
    "P146i_lost_member_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P146i_lost_member_by'>;
    /** This property associates an instance of E87 Curation Activity with the instance of E78 Curated Holding with that is subject of that curation activity following some implicit or explicit curation plan. */
    "P147_curated": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P147_curated'>;
    "P147i_was_curated_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P147i_was_curated_by'>;
    /**
     * This property associates an instance of E89 Propositional Object with a structural part of it that is by itself an instance of E89 Propositional Object.
     * This property is transitive. This property is asymmetric.
     */
    "P148_has_component": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P148_has_component'>;
    "P148i_is_component_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P148i_is_component_of'>;
    /**
     * This property describes the active participation of an instance of E39 Actor in an instance of E7 Activity.
     * It implies causal or legal responsibility. The P14.1 in the role of property of the property specifies the nature of an Actor’s participation.
     */
    "P14_carried_out_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P14_carried_out_by'>;
    "P14i_performed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P14i_performed'>;
    /**
     * This property associates an instance of E55 Type “A” with an instance of E55 Type “B”, when items of type “A” typically form part of items of type “B”, such as “car motors” and “cars”.
     * It allows types to be organised into hierarchies based on one type describing a typical part of another. This property is equivalent to "broader term partitive (BTP)" as defined in ISO 2788 and “broaderPartitive” in SKOS.
     * This property is not transitive. This property is asymmetric.
     */
    "P150_defines_typical_parts_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P150_defines_typical_parts_of'>;
    "P150i_defines_typical_wholes_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P150i_defines_typical_wholes_for'>;
    /** This property associates an instance of E66 Formation with an instance of E74 Group from which the new group was formed preserving a sense of continuity such as in mission, membership or tradition. */
    "P151_was_formed_from": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P151_was_formed_from'>;
    "P151i_participated_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P151i_participated_in'>;
    /**
     * This property associates an instance of E21 Person with another instance of E21 Person who plays the role of the first instance’s parent, regardless of whether the relationship is biological parenthood, assumed or pretended biological parenthood or an equivalent legal status of rights and obligations obtained by a social or legal act.
     * This property is, among others, a shortcut of the fully developed paths from E21 Person through P98i was born, E67 Birth, P96 by mother to E21 Person, and from E21 Person through P98i was born, E67 Birth, P97 from father to E21 Person.
     * This property is not transitive. This property is irreflexive.
     */
    "P152_has_parent": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P152_has_parent'>;
    "P152i_is_parent_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P152i_is_parent_of'>;
    /**
     * This property describes the largest volume in space, an instance of E53 Place, that an instance of E18 Physical Thing has occupied at any time during its existence, with respect to the reference space relative to the physical thing itself. This allows for describing the thing itself as a place that may contain other things, such as a box that may contain coins. In other words, it is the volume that contains all the points which the thing has covered at some time during its existence. The reference space for the associated place must be the one that is permanently at rest (P157 is at rest relative to) relative to the physical thing. For instances of E19 Physical Objects it is the one which is at rest relative to the object itself, i.e., which moves together with the object. For instances of E26 Physical Feature it is one which is at rest relative to the physical feature itself and the surrounding matter immediately connected to it. Therefore, there is a 1:1 relation between the instance E18 Physical Thing and the instance of E53 Place it occupies. We include in the occupied space the space filled by the matter of the physical thing and all its inner spaces.
     * This property implies the fully developed path from E18 Physical Thing through P196 defines, E92 Spacetime Volume, P161 has spatial projection to E53 Place. However, in contrast to P156 occupies, the property P161 has spatial projection does not constrain the reference space of the referred instance of E53 Place.
     * In contrast to P156 occupies, for the property P53 has former or current location the following holds:
     * It does not constrain the reference space of the referred instance of E53 Place.
     * It identifies a possibly wider instance of E53 Place at which a thing is or has been for some unspecified time-span.
     * If the reference space of the referred instance of E53 Place is not at rest with respect to the physical thing found there, the physical thing may move away after some time to another place and/or may have been at some other place before. The same holds for the fully developed path from E18 Physical Thing through P196 defines, E92 Spacetime Volume, P161 has spatial projection to E53 Place.
     */
    "P156_occupies": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P156_occupies'>;
    "P157i_provides_reference_space_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P157i_provides_reference_space_for'>;
    /**
     * This property identifies an instance of E53 Place as the former or current location of an instance of E18 Physical Thing.
     * In the case of instances of E19 Physical Object, the property does not allow any indication of the Time-Span during which the instance of E19 Physical Object was located at this instance of E53 Place, nor if this is the current location.
     * In the case of immobile objects, the Place would normally correspond to the Place of creation.
     * This property is a shortcut. A more detailed representation can make use of the fully developed (i.e., indirect) path from E19 Physical Object, though, P25i moved by, E9 Move, P26 moved to or P27 moved from to E53 Place.
     */
    "P53_has_former_or_current_location": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P53_has_former_or_current_location'>;
    "P156i_is_occupied_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P156i_is_occupied_by'>;
    /** This property associates an instance of E53 Place with the instance of E18 Physical Thing that determines a reference space for this instance of E53 Place by being at rest with respect to this reference space. The relative stability of form of an instance of E18 Physical Thing defines its default reference space. The reference space is not spatially limited to the referred thing. For example, a ship determines a reference space in terms of which other ships in its neighbourhood may be described. Larger constellations of matter, such as continental plates, may comprise many physical features that are at rest with them and define the same reference space. */
    "P157_is_at_rest_relative_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P157_is_at_rest_relative_to'>;
    "P53i_is_former_or_current_location_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P53i_is_former_or_current_location_of'>;
    /** This property describes the temporal projection of an instance of E92 Spacetime Volume. The property P4 has time-span is the same as P160 has temporal projection if it is used to document an instance of E4 Period or any subclass of it. */
    "P160_has_temporal_projection": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P160_has_temporal_projection'>;
    "P160i_is_temporal_projection_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P160i_is_temporal_projection_of'>;
    /**
     * This property associates an instance of an instance of E92 Spacetime Volume with an instance of E53 Place that is the result of the spatial projection of the instance of the E92 Spacetime Volume on a reference space.
     * In general, there can be more than one useful reference space (for reference space see P156 occupies and P157 is at rest relative to) to describe the spatial projection of a spacetime volume, for example, in describing a sea battle, the difference between the battle ship and the seafloor as reference spaces. Thus, it can be seen that the projection is not unique.
     * The spatial projection is the actual spatial coverage of a spacetime volume, which normally has fuzzy boundaries except for instances of E92 Spacetime Volumes which are geometrically defined in the same reference system as the range of this property are an exception to this and do not have fuzzy boundaries. Modelling explicitly fuzzy spatial projections serves therefore as a common topological reference of different spatial approximations rather than absolute geometric determination, for instance for relating outer or inner spatial boundaries for the respective spacetime volumes.
     * In case the domain of an instance of P161 has spatial projection is an instance of E4 Period, the spatial projection describes all areas that period was ever present at, for instance, the Roman Empire.
     * This property is part of the fully developed path from E18 Physical Thing through P196 defines, E92 Spacetime Volume, P161 has spatial projection to E53 Place, which in turn is implied by P156 occupies (is occupied by).
     * This property is part of the fully developed path from E4 Period through P161 has spatial projection, E53 Place, P89 falls within (contains) to E53 Place, which in turn is shortcut by P7 took place at (witnessed).
     */
    "P161_has_spatial_projection": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P161_has_spatial_projection'>;
    "P161i_is_spatial_projection_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P161i_is_spatial_projection_of'>;
    /**
     * This property relates an instance of E93 Presence with the instance of E52 Time-Span that defines the time-slice of the spacetime volume that this instance of E93 Presence is related to via the property P166 was a presence of (had presence).
     * There are two typical cases for the determination of the related instance of E52 Time-Span. In the first, it is the temporal extent of an instance of E2 Temporal Entity (documented with P4 has time-span (is time-span of)): this then documents the simultaneity of the instance of E93 Presence and the instance of E2 Temporal Entity, even if the absolute time-span is not known, and can be regarded as a phenomenal time-span. In the second, the instance of E52 Time-Span is a date range declared in or derived from historical sources or provided by dating methods: this is a declarative time-span.
     */
    "P164_is_temporally_specified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P164_is_temporally_specified_by'>;
    "P164i_temporally_specifies": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P164i_temporally_specifies'>;
    /**
     * This property associates an instance of E73 Information Object with an instance of E90 Symbolic Object (or any of its subclasses) that was included in it.
     * This property makes it possible to recognise the autonomous status of the incorporated signs, which were created in a distinct context, and can be incorporated in many instances of E73 Information Object, and to highlight the difference between structural and accidental whole-part relationships between conceptual entities.
     * It accounts for many cultural facts that are quite frequent and significant: the inclusion of a poem in an anthology, the re-use of an operatic aria in a new opera, the use of a reproduction of a painting for a book cover or a CD booklet, the integration of textual quotations, the presence of lyrics in a song that sets those lyrics to music, the presence of the text of a play in a movie based on that play, etc.
     * In particular, this property allows for modelling relationships of different levels of symbolic specificity, such as the natural language words making up a particular text, the characters making up the words and punctuation, the choice of fonts and page layout for the characters.
     * When restricted to information objects, that is, seen as a property with E73 Information Object as domain and range the property is transitive.
     * A digital photograph of a manuscript page incorporates the text of a manuscript page, if the respective text is defined as a sequence of symbols of a particular type, such as Latin characters, and the resolution and quality of the digital image is sufficient to resolve these symbols so they are readable on the digital image.
     * This property is asymmetric.
     */
    "P165_incorporates": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P165_incorporates'>;
    "P165i_is_incorporated_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P165i_is_incorporated_in'>;
    /** This property associates an instance of E93 Presence with the instance of E92 Spacetime Volume of which it represents a temporal restriction (i.e.: a time-slice). Instantiating this property constitutes a necessary part of the identity of the respective instance of E93 Presence. */
    "P166_was_a_presence_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P166_was_a_presence_of'>;
    "P166i_had_presence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P166i_had_presence'>;
    /**
     * This property associates an instance of E93 Presence with an instance of E53 Place that geometrically includes the spatial projection of the respective instance of E93 Presence. Besides others, this property may be used to state in which space an object has been for some known time, such as a room of a castle or in a drawer. It may also be used to describe a confinement of the spatial extent of some realm during a known time-span.
     * This property is a shortcut of the more fully developed path from E93 Presence through P161 has spatial projection, E53 Place, P89 falls within (contains) to E53 Place.
     */
    "P167_was_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P167_was_within'>;
    "P167i_includes": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P167i_includes'>;
    /** This property associates an instance of E53 Place with an instance of E94 Space Primitive that defines it. Syntactic variants or use of different scripts may result in multiple instances of E94 Space Primitive defining exactly the same place. Transformations between different reference systems always result in new definitions of places approximating each other and not in alternative definitions. */
    "P168_place_is_defined_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P168_place_is_defined_by'>;
    /** Scope note for 'P169': This property associates an instance of E95 Spacetime Primitive with the instance of E92 Spacetime Volume it defines. */
    "P169i_spacetime_volume_is_defined_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P169i_spacetime_volume_is_defined_by'>;
    /**
     * Scope note for 'P170': This property associates an instance of E61 Time Primitive with the instance of E52 Time-Span that constitutes the interpretation of the terms of the time primitive as an extent in absolute, real time.
     * The quantification allows several instances of E61 Time Primitive that are each expressed in different syntactic forms, to define the same instance of E52 Time-Span.
     */
    "P170i_time_is_defined_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P170i_time_is_defined_by'>;
    /**
     * This property describes the maximum spatial extent within which an instance of E53 Place falls. Since instances of E53 Places may not have precisely known spatial extents, the CIDOC CRM supports statements about maximum spatial extents of instances of E53 Place. This property allows an instance of E53 Place’s maximum spatial extent (i.e., its outer boundary) to be assigned an instance of E94 Space Primitive value.
     * This property is a shortcut of the fully developed path from E53 Place, P89 falls within, E53 Place, P168 place is defined by to E94 Space Primitive through a declarative Place that is not explicitly documented, to a Space Primitive: declarative places are defined in CRMgeo (Doerr and Hiebel 2013).
     */
    "P171_at_some_place_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P171_at_some_place_within'>;
    /**
     * This property describes a minimum spatial extent which is contained within an instance of E53 Place. Since instances of E53 Place may not have precisely known spatial extents, the CIDOC CRM supports statements about minimum spatial extents of instances of E53 Place. This property allows an instance of E53 Places’s minimum spatial extent (i.e., its inner boundary or a point being within a Place) to be assigned an instance of E94 Space Primitive value.
     * This property is a shortcut of the fully developed path from E53 Place, P89i contains, E53 Place, P168 place is defined by to E94 Space Primitive
     */
    "P172_contains": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P172_contains'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity starts before or simultaneously with the end of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-start ≤ B-end is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to the disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets, met-by, overlaps, starts, started-by, contains, finishes, finished-by, equals, during, overlapped by}.
     * This property is not transitive.
     *
     * Figure 8: Temporal entity A starts before or with the end of temporal entity B. Here A is longer than B
     *
     * Figure 9: Temporal entity A starts before or with the end of temporal entity B. Here A is shorter than B
     */
    "P173_starts_before_or_with_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P173_starts_before_or_with_the_end_of'>;
    "P173i_ends_after_or_with_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P173i_ends_after_or_with_the_start_of'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity starts definitely before the end of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-start &lt; B-end is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to a disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets, overlaps, starts, started-by, contains, finishes, finished-by, equals, during, overlapped by}
     * Typically, this property is a consequence of a known influence of some event on another event or activity, such as a novel written by someone being continued by someone else, or the knowledge of a defeat on a distant battlefield causing people to end their ongoing activities. This property is not transitive. This property is irreflexive.
     *
     * Figure 10: Temporal entity A starts before the end of temporal entity B. Here A is longer than B
     *
     * Figure 11: Temporal entity A starts before the end of temporal entity B. Here A is shorter than B
     */
    "P174_starts_before_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P174_starts_before_the_end_of'>;
    "P174i_ends_after_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P174i_ends_after_the_start_of'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity starts before or simultaneously with the start of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-start ≤ B-start is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to a disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets, overlaps, starts, started-by, contains, finished-by, equals}
     * In a model with fuzzy borders, this property will not be transitive.
     * This property is irreflexive.
     *
     * Figure 12: Temporal entity A starts before or with the start of temporal entity B. Here A is longer than B
     *
     * Figure 13: Temporal entity A starts before or with the start of temporal entity B. Here A is shorter than B
     */
    "P175_starts_before_or_with_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P175_starts_before_or_with_the_start_of'>;
    "P175i_starts_after_or_with_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P175i_starts_after_or_with_the_start_of'>;
    /**
     * This property associates an instance of E13 Attribute Assignment with the type of property or relation that this assignment maintains to hold between the item to which it assigns an attribute and the attribute itself. Note that the properties defined by the CIDOC CRM also constitute instances of E55 Type themselves. The direction of the assigned property of type is understood to be from the attributed item (the range of property P140 assigned attribute to) to the attribute item (the range of the property P141 assigned). More than one property type may be assigned to hold between two items.
     * A comprehensive explanation about refining CIDOC CRM concepts by E55 Type is given in the section “About Types” in the section on “Specific Modelling Constructs” of this document.
     */
    "P177_assigned_property_of_type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P177_assigned_property_of_type'>;
    "P177i_is_type_of_property_assigned": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P177i_is_type_of_property_assigned'>;
    /** This property establishes the relationship between an instance of E96 Purchase and the instance of E97 Monetary Amount that forms the compensation for the transaction. The monetary amount agreed upon may change in the course of the purchase activity. */
    "P179_had_sales_price": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P179_had_sales_price'>;
    "P179i_was_sales_price_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P179i_was_sales_price_of'>;
    /**
     * This property describes an item or items that are regarded as a reason for carrying out the instance of E7 Activity.
     * For example, the discovery of a large hoard of treasure may call for a celebration, an order from headquarters can start a military manoeuvre.
     */
    "P17_was_motivated_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P17_was_motivated_by'>;
    "P17i_motivated": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P17i_motivated'>;
    /** This property establishes the relationship between an instance of E97 Monetary Amount and the instance of E98 Currency that it is measured in. */
    "P180_has_currency": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P180_has_currency'>;
    /** This property shows the type of unit an instance of E54 Dimension was expressed in. */
    "P91_has_unit": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P91_has_unit'>;
    "P180i_was_currency_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P180i_was_currency_of'>;
    "P91i_is_unit_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P91i_is_unit_of'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity ends before or simultaneously with the start of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-end ≤ B-start is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to a disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets}.
     * This property is transitive. This property is asymmetric.
     *
     * Figure 16: Temporal entity A ends before or with the start of temporal entity B. Here A is longer than B
     *
     * Figure 17: Temporal entity A ends before or with the start of temporal entity B. Here A is shorter than B
     */
    "P182_ends_before_or_with_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P182_ends_before_or_with_the_start_of'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity ends definitely before the end of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-end &lt; B-end is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to a disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets, overlaps, starts, during}.
     * This property is transitive. This property is asymmetric.
     *
     * Figure 22: Temporal entity A ends before the end of temporal entity B. Here A is longer than B
     *
     * Figure 23: Temporal entity A ends before the end of temporal entity B. Here A is shorter than B
     */
    "P185_ends_before_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P185_ends_before_the_end_of'>;
    "P182i_starts_after_or_with_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P182i_starts_after_or_with_the_end_of'>;
    "P185i_ends_after_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P185i_ends_after_the_end_of'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity ends definitely before the start of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-end &lt; B-start is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to the following Allen temporal relation (Allen, 1983) : {before}.
     * This property is transitive. This property is asymmetric.
     *
     * Figure 18: Temporal entity A ends before the start of temporal entity B. Here A is longer than B
     *
     * Figure 19: Temporal entity A ends before the start of temporal entity B. Here A is shorter than B
     */
    "P183_ends_before_the_start_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P183_ends_before_the_start_of'>;
    "P183i_starts_after_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P183i_starts_after_the_end_of'>;
    /**
     * This property specifies that the temporal extent of the domain instance A of E2 Temporal Entity ends before or simultaneously with the end of the temporal extent of the range instance B of E2 Temporal Entity.
     * In other words, if A = [A-start, A-end] and B = [B-start, B-end], we mean A-end ≤ B-end is true.
     * This property is part of the set of temporal primitives P173 – P176, P182 – P185.
     * This property corresponds to a disjunction (logical OR) of the following Allen temporal relations (Allen, 1983): {before, meets, overlaps, finished by, start, equals, during, finishes}.
     * This property is irreflexive
     *
     * Figure 20: Temporal entity A ends before or with the end of temporal entity B. Here A is longer than B
     *
     * Figure 21: Temporal entity A ends before or with the end of temporal entity B. Here A is shorter than B
     */
    "P184_ends_before_or_with_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P184_ends_before_or_with_the_end_of'>;
    "P184i_ends_with_or_after_the_end_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P184i_ends_with_or_after_the_end_of'>;
    /** This property associates an instance of E12 Production with the instance of E99 Production Type, that is, the type of the things it produces. */
    "P186_produced_thing_of_product_type": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P186_produced_thing_of_product_type'>;
    "P186i_is_produced_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P186i_is_produced_by'>;
    /** This property associates an instance of E99 Product Type with an instance of E29 Design or Procedure that completely determines the production of instances of E18 Physical Thing. The resulting instances of E18 Physical Thing are considered exemplars of this instance of E99 Product Type when the process specified is correctly executed. Note that the respective instance of E29 Design or Procedure may not necessarily be fixed in a written/graphical form, and may require the use of tools or models unique to the product type. The same instance of E99 Product Type may be associated with several variant plans. */
    "P187_has_production_plan": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P187_has_production_plan'>;
    "P187i_is_production_plan_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P187i_is_production_plan_for'>;
    /** This property associates an instance of E99 Product Type with an instance of E19 Physical Object that is needed for the production of an instance of E18 Physical Thing. When the process of production is correctly executed in accordance with the plan and using the specified instance of E19 Physical Object, the resulting instance of E18 Physical Thing is considered an exemplar of this instance of E99 Product Type. The instance of E19 Physical Object may bear distinct features that are transformed into characteristic features of the resulting instance of E18 Physical Thing. Examples include models and moulds. */
    "P188_requires_production_tool": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P188_requires_production_tool'>;
    "P188i_is_production_tool_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P188i_is_production_tool_for'>;
    /**
     * This property associates an instance of E53 Place with another instance of E53 Place, which is defined in the same reference space, and which is used to approximate the former. The property does not necessarily state the quality or accuracy of this approximation, but rather indicates the use of the first instance of place to approximate the second.
     * In common documentation practice, find or encounter spots e.g., in archaeology, botany or zoology are often related to the closest village, river or other named place without detailing the relation, e.g., if it is located within the village or in a certain distance of the specified place. In this case the stated “phenomenal” place found in the documentation can be seen as approximation of the actual encounter spot without more specific knowledge.
     * In more recent documentation often point coordinate information is provided that originates from GPS measurements or georeferencing from a map. This point coordinate information does not state the actual place of the encounter spot but tries to approximate it with a “declarative” place. The accuracy depends on the methodology used when creating the coordinates. It may be dependent on technical limitations like GPS accuracy but also on the method where the GPS location is taken in relation to the measured feature. If the methodology is known a maximum deviation from the measured point can be calculated and the encounter spot or feature may be related to the resulting circle using an instance of P171 at some place within.
     * This property is not transitive. This property is reflexive.
     */
    "P189_approximates": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P189_approximates'>;
    "P189i_is_approximated_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P189i_is_approximated_by'>;
    /**
     * This property associates an instance of E90 Symbolic Object with a complete, identifying representation of its content in the form of an instance of E62 String.
     * This property only applies to instances of E90 Symbolic Object that can be represented completely in this form. The representation may be more specific than the symbolic level defining the identity condition of the represented. This depends on the type of the symbolic object represented. For instance, if a name has type "Modern Greek character sequence", it may be represented in a loss-free Latin transcription, meaning however the sequence of Greek letters.
     * As another example, if the represented object has type "English words sequence", American English or British English spelling variants may be chosen to represent the English word "colour" without defining a different symbolic object. If a name has type "European traditional name", no particular string may define its content.
     */
    "P190_has_symbolic_content": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P190_has_symbolic_content'>;
    /**
     * This property is a container for all informal descriptions about an object that have not been expressed in terms of CIDOC CRM constructs.
     * In particular, it captures the characterisation of the item itself, its internal structures, appearance etc.
     * Like property P2 has type (is type of), this property is a consequence of the restricted focus of the CIDOC CRM. The aim is not to capture, in a structured form, everything that can be said about an item; indeed, the CIDOC CRM formalism is not regarded as sufficient to express everything that can be said. Good practice requires use of distinct note fields for different aspects of a characterisation. The P3.1 has type property of P3 has note allows differentiation of specific notes, e.g., “construction”, “decoration” etc.
     * An item may have many notes, but a note is attached to a specific item.
     */
    "P3_has_note": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P3_has_note'>;
    /** This property describes the length of time covered by an instance of E52 Time-Span. It allows an instance of E52 Time-Span to be associated with an instance of E54 Dimension representing duration independent from the actual beginning and end. Indeterminacy of the duration value can be expressed by assigning a numerical interval to the property P90 has value of E54 Dimension. */
    "P191_had_duration": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P191_had_duration'>;
    "P191i_was_duration_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P191i_was_duration_of'>;
    /**
     * This property associates an instance of E93 Presence with the instance of E18 Physical Thing of which it represents a temporal restriction (i.e.: a time-slice) of the thing’s trajectory through spacetime. In other words, it describes where the instance of E18 Physical Thing was or moved around within a given time-span. Instantiating this property constitutes a necessary part of the identity of the respective instance of E93 Presence.
     * This property is a strong shortcut of the fully developed path from E18 Physical Thing through P196 defines, E92 Spacetime Volume, P166 was a presence of (had presence) to E93 Presence.
     */
    "P195_was_a_presence_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P195_was_a_presence_of'>;
    "P195i_had_presence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P195i_had_presence'>;
    /**
     * This property associates an instance of E18 Physical Thing with the instance of E92 Spacetime Volume that constitutes the complete trajectory of its geometric extent through spacetime for the whole time of the existence of the instance of E18 Physical Thing.
     * An instance of E18 Physical Thing not only occupies a particular geometric space at each instant of its existence, but in the course of its existence it also forms a trajectory through spacetime, which occupies a real, that is phenomenal, volume in spacetime, i.e., the instance of E92 Spacetime Volume this property associates it with. This real spatiotemporal extent of the instance of E18 Physical Thing is regarded as being unique, in all its details and fuzziness; the identity and existence of the E92 Spacetime Volume depends uniquely on the identity of the instance of E18 Physical Thing, whose existence defines it. It constitutes a phenomenal spacetime volume as defined in CRMgeo (Doerr &amp; Hiebel, 2013).
     * Included in this spacetime volume are both the spaces filled by the matter of the physical thing and any inner space that may exist, for instance the interior of a box. Physical things consisting of aggregations of physically unconnected objects, such as a set of chessmen, occupy a finite number of individually contiguous subsets of this spacetime volume equal to the number of objects that constitute the set and that are never connected during its existence.
     */
    "P196_defines": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P196_defines'>;
    "P196i_is_defined_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P196i_is_defined_by'>;
    /**
     * This property associates an instance of E93 Presence with an instance of E53 Place that geometrically overlaps with the spatial projection of the respective instance of E93 Presence. A use case of this property is to state through which places an object or an instance of E21 Person has or was moved within a given time-span. It may also be used to describe a partial or complete, temporary or permanent extension of the spatial extent of some realm into a neighbouring region during a known time-span. It may also be used to describe a partial or complete, temporary or permanent extension of the spatial extent of some realm into a neighbouring region during a known time-span.
     * This property is a shortcut of the more fully developed path from E93 Presence through P161 has spatial projection, E53 Place, P121 overlaps with, to E53 Place.
     */
    "P197_covered_parts_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P197_covered_parts_of'>;
    "P197i_was_partially_covered_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P197i_was_partially_covered_by'>;
    /**
     * This property relates one instance of E18 Physical Thing which acts as a container or support to a supported or contained instance of E18 Physical Thing. Typical examples of E18 Physical Things which are intended to function as a container or support include shelves, folders or boxes. These containers or supports provide a stable surface which is intended for other physical objects to be placed upon for storage, display, transport or other similar functions.
     * This property is a shortcut of the more fully developed path from E18 Physical Thing through P59 has section, E53 Place, P53i is former or current location of, to E18 Physical Thing. It is not a sub-property of P46 is composed of, as the held or supported object is not a component of the container or support.
     * This property can be used to avoid explicitly instantiating the E53 Place which is defined by an instance of E18 Physical Thing, especially when the only intended use of that instance of E18 Physical Thing is to act as a container or surface for the storage of other instances of E18 Physical Thing. The place’s existence is defined by the existence of the container or surface, and will go out of existence at the same time as the destruction of the container or surface.
     * This property is transitive. This property is asymmetric.
     */
    "P198_holds_or_supports": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P198_holds_or_supports'>;
    "P198i_is_held_or_supported_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P198i_is_held_or_supported_by'>;
    /**
     * This property relates an instance of E7 Activity with instances of E71 Human-Made Thing, created specifically for use in the activity.
     * This is distinct from the intended use of an item in some general type of activity such as the book of common prayer which was intended for use in Church of England services (see P101 had as general use (was use of)).
     */
    "P19_was_intended_use_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P19_was_intended_use_of'>;
    "P19i_was_made_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P19i_was_made_for'>;
    /**
     * This property identifies the relationship between a preparatory activity, an instance of E7 Activity and the instance of E5 Event it is intended to be preparation for.
     * This includes activities, orders and other organisational actions, taken in preparation for other activities or events.
     * P20 had specific purpose (was purpose of) implies that an activity succeeded in achieving its aim. If it does not succeed, such as the setting of a trap that did not catch anything, one may document the unrealized intention using P21 had general purpose (was purpose of): E55 Type and/or P33 used specific technique (was used by): E29 Design or Procedure.
     */
    "P20_had_specific_purpose": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P20_had_specific_purpose'>;
    "P20i_was_purpose_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P20i_was_purpose_of'>;
    /**
     * This property describes an intentional relationship between an instance of E7 Activity and some general goal or purpose, described as an instance of E55 Type.
     * This may involve activities intended as preparation for some type of activity or event. P21 had general purpose (was purpose of) differs from P20 had specific purpose (was purpose of) in that no occurrence of an event is implied as the purpose.
     */
    "P21_had_general_purpose": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P21_had_general_purpose'>;
    "P21i_was_purpose_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P21i_was_purpose_of'>;
    /**
     * This property identifies the instance of E39 Actor that acquires the legal ownership of an object as a result of an instance of E8 Acquisition.
     * The property will typically describe an Actor purchasing or otherwise acquiring an object from another Actor. However, title may also be acquired, without any corresponding loss of title by another Actor, through legal fieldwork such as hunting, shooting or fishing.
     * In reality the title is either transferred to or from someone, or both.
     */
    "P22_transferred_title_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P22_transferred_title_to'>;
    "P22i_acquired_title_through": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P22i_acquired_title_through'>;
    /**
     * This property identifies the instance(s) of E39 Actor who relinquish legal ownership as the result of an instance of E8 Acquisition.
     * The property will typically be used to describe a person donating or selling an object to a museum. In reality title is either transferred to or from someone, or both.
     */
    "P23_transferred_title_from": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P23_transferred_title_from'>;
    "P23i_surrendered_title_through": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P23i_surrendered_title_through'>;
    /**
     * This property identifies the instance(s) of E18 Physical Thing involved in an instance of E8 Acquisition.
     * In reality, an acquisition must refer to at least one transferred item.
     */
    "P24_transferred_title_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P24_transferred_title_of'>;
    "P24i_changed_ownership_through": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P24i_changed_ownership_through'>;
    /**
     * This property identifies an instance of E19 Physical Object that was moved by an instance of E9 Move. A move must concern at least one object.
     * The property implies the object’s passive participation. For example, Monet’s painting “Impression sunrise” was moved for the first Impressionist exhibition in 1874.
     */
    "P25_moved": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P25_moved'>;
    "P25i_moved_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P25i_moved_by'>;
    /**
     * This property identifies a destination, an instance of E53 place, of an instance of E9 Move.
     * A move will be linked to a destination, such as the move of an artifact from storage to display. A move may be linked to many terminal instances of E53 Place by multiple instances of this property. In this case the move describes a distribution of a set of objects. The area of the move includes the origin(s), route and destination(s).
     * Therefore, the described destination is an instance of E53 Place which P89 falls within (contains) the instance of E53 Place the move P7 took place at.
     */
    "P26_moved_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P26_moved_to'>;
    "P26i_was_destination_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P26i_was_destination_of'>;
    /**
     * This property identifies an origin, an instance of E53 Place, of an instance of E9 Move.
     * A move will be linked to an origin, such as the move of an artifact from storage to display. A move may be linked to many starting instances of E53 Place by multiple instances of this property. In this case the move describes the picking up of a set of objects. The area of the move includes the origin(s), route and destination(s).
     * Therefore, the described origin is an instance of E53 Place which P89 falls within (contains) the instance of E53 Place the move P7 took place at.
     */
    "P27_moved_from": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P27_moved_from'>;
    "P27i_was_origin_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P27i_was_origin_of'>;
    /**
     * This property identifies the instance(s) of E39 Actor who surrender custody of an instance of E18 Physical Thing in an instance of E10 Transfer of Custody.
     * The property will typically describe an Actor surrendering custody of an object when it is handed over to someone else’s care. On occasion, physical custody may be surrendered involuntarily – through accident, loss or theft.
     * In reality, custody is either transferred to someone or from someone, or both.
     */
    "P28_custody_surrendered_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P28_custody_surrendered_by'>;
    "P28i_surrendered_custody_through": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P28i_surrendered_custody_through'>;
    /**
     * This property identifies the instance(s) E39 Actor who receive custody of an instance of E18 Physical Thing in an instance of E10 Transfer of Custody.
     * The property will typically describe Actors receiving custody of an object when it is handed over from another Actor’s care. On occasion, physical custody may be received involuntarily or illegally – through accident, unsolicited donation, or theft.
     * In reality, custody is either transferred to someone or from someone, or both.
     */
    "P29_custody_received_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P29_custody_received_by'>;
    "P29i_received_custody_through": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P29i_received_custody_through'>;
    /**
     * This property identifies the instance(s) of E18 Physical Thing concerned in an instance of E10 Transfer of Custody.
     * The property will typically describe the object that is handed over by an instance of E39 Actor to to the custody of another instance of E39 Actor. On occasion, physical custody may be transferred involuntarily or illegally – through accident, unsolicited donation, or theft.
     */
    "P30_transferred_custody_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P30_transferred_custody_of'>;
    "P30i_custody_transferred_through": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P30i_custody_transferred_through'>;
    /**
     * This property identifies the technique or method, modelled as an instance of E55 Type, that was employed in an instance of E7 Activity.
     * These techniques should be drawn from an external E55 Type hierarchy of consistent terminology of general techniques or methods such as embroidery, oil-painting, carbon dating, etc. Specific documented techniques should be described as instances of E29 Design or Procedure.
     */
    "P32_used_general_technique": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P32_used_general_technique'>;
    "P32i_was_technique_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P32i_was_technique_of'>;
    /**
     * This property identifies a specific instance of E29 Design or Procedure in order to carry out an instance of E7 Activity or parts of it.
     * The property differs from P32 used general technique (was technique of) in that P33 refers to an instance of E29 Design or Procedure, which is a concrete information object in its own right rather than simply being a term or a method known by tradition.
     * Typical examples would include intervention plans for conservation or the construction plans of a building.
     */
    "P33_used_specific_technique": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P33_used_specific_technique'>;
    "P33i_was_used_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P33i_was_used_by'>;
    /**
     * This property identifies the instance of E18 Physical Thing that was assessed during an instance of E14 Condition Assessment activity.
     * Conditions may be assessed either by direct observation or using recorded evidence. In the latter case the instance of E18 Physical Thing does not need to be present or extant at the time of assessment.
     */
    "P34_concerned": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P34_concerned'>;
    "P34i_was_assessed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P34i_was_assessed_by'>;
    /** This property identifies the instance of E3 Condition State that was observed in an instance of E14 Condition Assessment activity. */
    "P35_has_identified": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P35_has_identified'>;
    "P35i_was_identified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P35i_was_identified_by'>;
    /**
     * This property records the identifier that was assigned to an item in an instance of P37 Identifier Assignment.
     * The same identifier may be assigned on more than one occasion.
     * An Identifier might be created prior to an assignment.
     */
    "P37_assigned": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P37_assigned'>;
    "P37i_was_assigned_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P37i_was_assigned_by'>;
    /**
     * This property records the identifier that was deassigned from an instance of E1 CRM Entity.
     * De-assignment of an identifier may be necessary when an item is taken out of an inventory, a new numbering system is introduced or items are merged or split up.
     * The same identifier may be deassigned on more than one occasion.
     */
    "P38_deassigned": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P38_deassigned'>;
    "P38i_was_deassigned_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P38i_was_deassigned_by'>;
    /** This property associates an instance of E16 Measurement with the instance of E18 Physical Thing upon which it acted. The instance of E16 Measurement is specific to the measured object. An instance of E18 Physical Thing may be measured more than once with different results, constituting different instances of E16 Measurement. */
    "P39_measured": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P39_measured'>;
    "P39i_was_measured_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P39i_was_measured_by'>;
    /**
     * This property records the dimension that was observed in an E16 Measurement Event.
     * E54 Dimension can be any quantifiable aspect of E70 Thing. Weight, image colour depth and monetary value are dimensions in this sense. One measurement activity may determine more than one dimension of one object.
     * Dimensions may be determined either by direct observation or using recorded evidence. In the latter case the measured Thing does not need to be present or extant.
     * Even though knowledge of the value of a dimension requires measurement, the dimension may be an object of discourse prior to, or even without, any measurement being made.
     */
    "P40_observed_dimension": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P40_observed_dimension'>;
    "P40i_was_observed_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P40i_was_observed_in'>;
    /**
     * This property records the item to which a type was assigned in an E17 Type Assignment activity.
     * Any instance of a CIDOC CRM entity may be assigned a type through type assignment. Type assignment events allow a more detailed path from E1 CRM Entity through P41i was classified by, E17 Type Assignment, P42 assigned, to E55 Type for assigning types to objects compared to the shortcut offered by P2 has type (is type of).
     */
    "P41_classified": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P41_classified'>;
    "P41i_was_classified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P41i_was_classified_by'>;
    /**
     * This property records the type that was assigned to an entity by an E17 Type Assignment activity.
     * Type assignment events allow a more detailed path from E1 CRM Entity through P41i was classified by, E17 Type Assignment, P42 assigned, to E55 Type for assigning types to objects compared to the shortcut offered by P2 has type (is type of).
     * For example, a fragment of an antique vessel could be assigned the type “attic red figured belly handled amphora” by expert A. The same fragment could be assigned the type “shoulder handled amphora” by expert B.
     * A Type may be intellectually constructed independent from assigning an instance of it.
     */
    "P42_assigned": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P42_assigned'>;
    "P42i_was_assigned_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P42i_was_assigned_by'>;
    /**
     * This property records an instance of E54 Dimension of some instance of E70 Thing.
     * In the case that the recorded property is a result of a measurement of an instance of E18 Physical Thing, this property is a shortcut of the more fully developed path from E18 Physical Thing through P39i was measured by, E16 Measurement, P40 observed dimension to E54 Dimension.
     * It offers no information about how and when an E54 Dimension was established, nor by whom. Knowledge about an instance of E54 Dimension need not be the result of a measurement; it may be the result of evaluating data or other information, which should be documented as an instance of E13 Attribute Assignment.
     * An instance of E54 Dimension is specific to an instance of E70 Thing.
     */
    "P43_has_dimension": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P43_has_dimension'>;
    "P43i_is_dimension_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P43i_is_dimension_of'>;
    /**
     * This property records an E3 Condition State for some E18 Physical Thing.
     * This property is a shortcut of the more fully developed path from E18 Physical Thing through P34i was assessed by, E14 Condition Assessment, P35 has identified to E3 Condition State. It offers no information about how and when the E3 Condition State was established, nor by whom.
     * An instance of Condition State is specific to an instance of E18 Physical Thing.
     */
    "P44_has_condition": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P44_has_condition'>;
    "P44i_is_condition_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P44i_is_condition_of'>;
    /**
     * This property identifies the instances of E57 Materials of which an instance of E18 Physical Thing is composed.
     * All physical things consist of physical materials. P45 consists of (is incorporated in) allows the different materials to be recorded. P45 consists of (is incorporated in) refers here to observed material as opposed to the consumed raw material.
     * A material, such as a theoretical alloy, may not have any physical instances.
     */
    "P45_consists_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P45_consists_of'>;
    "P45i_is_incorporated_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P45i_is_incorporated_in'>;
    /**
     * This property associates an instance of E18 Physical Thing with another instance of Physical Thing that forms part of it. The spatial extent of the composing part is included in the spatial extent of the whole.
     * Component elements, since they are themselves instances of E18 Physical Thing, may be further analysed into sub-components, thereby creating a hierarchy of part decomposition. An instance of E18 Physical Thing may be shared between multiple wholes, for example two buildings may share a common wall. This property does not specify when and for how long a component element resided in the respective whole. If a component is not part of a whole from the beginning of existence or until the end of existence of the whole, the classes E79 Part Addition and E90 Part Removal can be used to document when a component became part of a particular whole and/or when it stopped being a part of it. For the time-span of being part of the respective whole, the component is completely contained in the place the whole occupies.
     * This property is intended to describe specific components that are individually documented, rather than general aspects. Overall descriptions of the structure of an instance of E18 Physical Thing are captured by the P3 has note property.
     * The instances of E57 Material of which an instance of E18 Physical Thing is composed should be documented using P45 consists of (is incorporated in).
     * This property is transitive and asymmetric.
     */
    "P46_is_composed_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P46_is_composed_of'>;
    "P46i_forms_part_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P46i_forms_part_of'>;
    /**
     * This property records the preferred instance of E42 Identifier that was used to identify an instance of E1 CRM Entity at the time this property was recorded.
     * More than one preferred identifier may have been assigned to an item over time.
     * Use of this property requires an external mechanism for assigning temporal validity to the respective CIDOC CRM instance.
     * The fact that an identifier is a preferred one for an organisation can be better expressed in a context independent form by assigning a suitable instance of E55 Type to the respective instance of E15 Identifier Assignment using the P2 has type property.
     */
    "P48_has_preferred_identifier": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P48_has_preferred_identifier'>;
    "P48i_is_preferred_identifier_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P48i_is_preferred_identifier_of'>;
    /** This property associates an instance of E2 Temporal Entity with the instance of E52 Time-Span during which it was on-going. The associated instance of E52 Time-Span is understood as the real time-span during which the phenomena making up the temporal entity instance were active. More than one instance of E2 Temporal Entity may share a common instance of E52 Time-Span only if they come into being and end being due to identical declarations or events. */
    "P4_has_time-span": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P4_has_time-span'>;
    "P4i_is_time-span_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P4i_is_time-span_of'>;
    /**
     * This property identifies the instance of E39 Actor that had custody of an instance of E18 Physical Thing at the time of validity of the record or database containing the statement that uses this property.
     * This property is a shortcut for the more detailed path from E18 Physical Thing through, P30i custody transferred through, E10 Transfer of Custody, P29 custody received by to E39 Actor, if and only if the custody has not been surrendered by the receiving actor at any later time
     */
    "P50_has_current_keeper": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P50_has_current_keeper'>;
    "P50i_is_current_keeper_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P50i_is_current_keeper_of'>;
    /**
     * This property identifies an instance of E39 Actor that is or had been the legal owner (i.e., title holder) of an instance of E18 Physical Thing at some time.
     * The distinction with P52 has current owner (is current owner of) is that P51 has former or current owner (is former or current owner of) does not indicate whether the specified owners are current.
     * This property is a shortcut for the more detailed path from E18 Physical Thing through P24i changed ownership through, E8 Acquisition, P23 transferred title from, or P22 transferred title to to E39 Actor.
     */
    "P51_has_former_or_current_owner": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P51_has_former_or_current_owner'>;
    "P51i_is_former_or_current_owner_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P51i_is_former_or_current_owner_of'>;
    /**
     * This property identifies the instance of E21 Person or E74 Group that was the owner of an instance of E18 Physical Thing at the time of validity of the record or database containing the statement that uses this property.
     * This property is a shortcut for the more detailed path from E18 Physical Thing through, P24i changed ownership through, E8 Acquisition, P22 transferred title to to E39 Actor, if and only if this acquisition event is the most recent.
     */
    "P52_has_current_owner": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P52_has_current_owner'>;
    "P52i_is_current_owner_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P52i_is_current_owner_of'>;
    /**
     * This property records the foreseen permanent location of an instance of E19 Physical Object at the time of validity of the record or database containing the statement that uses this property.
     * P54 has current permanent location (is current permanent location of) is similar to P55 has current location (currently holds). However, it indicates the E53 Place currently reserved for an object, such as the permanent storage location or a permanent exhibit location. The object may be temporarily removed from the permanent location, for example when used in temporary exhibitions or loaned to another institution. The object may never actually be located at its permanent location.
     */
    "P54_has_current_permanent_location": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P54_has_current_permanent_location'>;
    "P54i_is_current_permanent_location_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P54i_is_current_permanent_location_of'>;
    /**
     * This property records the location of an instance of E19 Physical Object at the time of validity of the record or database containing the statement that uses this property.
     * This property is a specialisation of P53 has former or current location (is former or current location of). It indicates that the instance of E53 Place associated with the instance of E19 Physical Object is the current location of the object. The property does not allow any indication of how long the object has been at the current location.
     * This property is a shortcut. A more detailed representation can make use of the fully developed (i.e., indirect) path from E19 Physical Object, through, P25i moved by, E9 Move, P26 moved to to E53 Place if and only if this Move is the most recent.
     */
    "P55_has_current_location": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P55_has_current_location'>;
    "P55i_currently_holds": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P55i_currently_holds'>;
    /**
     * This property links an instance of E19 Physical Object to an instance of E26 Physical Feature that it bears.
     * An instance of E26 Physical Feature can only exist on one object. One object may bear more than one E26 Physical Feature. An instance of E27 Site should be considered as an instance of E26 Physical Feature on the surface of the Earth.
     * An instance B of E26 Physical Feature being a detail of the structure of another instance A of E26 Physical Feature can be linked to B by use of the property P46 is composed of (forms part of). This implies that the subfeature B is P56i is found on the same E19 Physical Object as A.
     * This property is a shortcut. A more detailed representation can make use of the fully developed (i.e., indirect) path E19 Physical Object, through, P59 has section, E53 Place, P53i is former or current location of to E26 Physical Feature.
     */
    "P56_bears_feature": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P56_bears_feature'>;
    "P56i_is_found_on": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P56i_is_found_on'>;
    /**
     * This property documents the number of parts, an instance of E60 Number, of which an instance of E19 Physical Object is composed.
     * This may be used as a method of checking inventory counts with regard to aggregate or collective objects. What constitutes a part or component depends on the context and requirements of the documentation. Normally, the parts documented in this way would not be considered as worthy of individual attention.
     * For a more complete description, objects may be decomposed into their components and constituents using P46 is composed of (forms parts of) and P45 consists of (is incorporated in). This allows each element to be described individually.
     */
    "P57_has_number_of_parts": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P57_has_number_of_parts'>;
    /** This property links an area, i.e., an instance of E53 Place to the instance of E18 Physical Thing upon which it is found. This area may either be identified by a name, or by a geometry in terms of a coordinate system adapted to the shape of the respective instance of E18 Physical Thing. Typically, names identifying sections of physical objects are composed of the name of a kind of part and the name of the object itself, such as "The poop deck of H.M.S. Victory", which is composed of "poop deck" and "H.M.S. Victory". */
    "P59_has_section": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P59_has_section'>;
    "P59i_is_located_on_or_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P59i_is_located_on_or_within'>;
    /**
     * This property describes the decomposition of an instance of E3 Condition State into discrete, subsidiary states.
     * It is assumed that the sub-states into which the condition state is analysed form a logical whole - although the entire story may not be completely known – and that the sub-states are in fact constitutive of the general condition state. For example, a general condition state of “in ruins” may be decomposed into the individual stages of decay.
     * This property is transitive and asymmetric.
     */
    "P5_consists_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P5_consists_of'>;
    "P5i_forms_part_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P5i_forms_part_of'>;
    /**
     * This property identifies something that is depicted by an instance of E24 Physical Human-Made Thing. Depicting is meant in the sense that an instance of E24 Physical Human-Made Thing intentionally shows, through its optical qualities or form, a representation of the entity depicted. Photographs are by default regarded as being intentional in this sense. Anything that is designed to change the properties of the depiction, such as an e-book reader, is specifically excluded. The property does not pertain to inscriptions or any other information encoding.
     * This property is a shortcut of the more fully developed path from E24 Physical Human-Made Thing through P65 shows visual item, E36 Visual Item, P138 represents to E1 CRM Entity. P62.1 mode of depiction allows the nature of the depiction to be refined.
     */
    "P62_depicts": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P62_depicts'>;
    "P62i_is_depicted_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P62i_is_depicted_by'>;
    /**
     * This property documents an instance of E36 Visual Item shown by an instance of E24 Physical Human-Made Thing.
     * This property is similar to P62 depicts (is depicted by) in that it associates an instance of E24 Physical Human-Made Thing with a visual representation. However, P65 shows visual item (is shown by) differs from the P62 depicts (is depicted by) property in that it makes no claims about what the instance of E36 Visual Item is deemed to represent. An instance of E36 Visual Item identifies a recognisable image or visual symbol, regardless of what this image may or may not represent.
     * For example, all recent British coins bear a portrait of Queen Elizabeth II, a fact that is correctly documented using P62 depicts (is depicted by). Different portraits have been used at different periods, however. P65 shows visual item (is shown by) can be used to refer to a particular portrait.
     * P65 shows visual item (is shown by) may also be used for Visual Items such as signs, marks and symbols, for example the 'Maltese Cross' or the 'copyright symbol’ that have no particular representational content.
     * This property is part of the fully developed path E24 Physical Human-Made Thing, P65 shows visual item, E36 Visual Item, P138 represents to E1 CRM Entity which is shortcut by, P62 depicts (is depicted by).
     */
    "P65_shows_visual_item": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P65_shows_visual_item'>;
    "P65i_is_shown_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P65i_is_shown_by'>;
    /**
     * This property identifies an instance of E57 Material foreseen to be used by an instance of E29 Design or Procedure.
     * E29 Designs and procedures commonly foresee the use of particular instances of E57 Material. The fabrication of adobe bricks, for example, requires straw, clay and water. This property enables this to be documented.
     * This property is not intended for the documentation of instances of E57 Materials that were used on a particular occasion when an instance of E29 Design or Procedure was executed.
     */
    "P68_foresees_use_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P68_foresees_use_of'>;
    "P68i_use_foreseen_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P68i_use_foreseen_by'>;
    /**
     * This property generalises relationships like whole-part, sequence, prerequisite or inspired by between instances of E29 Design or Procedure. Any instance of E29 Design or Procedure may be associated with other designs or procedures. The property is considered to be symmetrical unless otherwise indicated by P69.1 has type. The property is not transitive
     * This property is a directed relationship. The P69.1 has type property of P69 has association with allows the nature of the association to be specified reading from domain to range; examples of types of association between instances of E29 Design or Procedure include: has part, follows, requires, etc.
     * Instances of this property are considered to be symmetric, in case no directed sense is provided for them by the property P69.1 has type.
     * The property can typically be used to model the decomposition of the description of a complete workflow into a series of separate procedures.
     */
    "P69_has_association_with": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P69_has_association_with'>;
    "P69i_is_associated_with": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P69i_is_associated_with'>;
    /**
     * This property describes the CRM Entities documented as instances of E31 Document.
     * Documents may describe any conceivable entity, hence the link to the highest-level entity in the CIDOC CRM class hierarchy. This property is intended for cases where a reference is regarded as making a proposition about reality. This may be of a documentary character, in the scholarly or scientific sense, or a more general statement.
     */
    "P70_documents": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P70_documents'>;
    "P70i_is_documented_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P70i_is_documented_in'>;
    /** This property associates an instance of E32 Authority Document, with an instance of E1 CRM Entity which it lists for reference purposes. */
    "P71_lists": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P71_lists'>;
    "P71i_is_listed_in": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P71i_is_listed_in'>;
    /**
     * This property associates an instance(s) of E33 Linguistic Object with an instance of E56 Language in which it is, at least partially, expressed.
     * Linguistic Objects are composed in one or more human Languages. This property allows these languages to be documented.
     */
    "P72_has_language": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P72_has_language'>;
    "P72i_is_language_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P72i_is_language_of'>;
    /**
     * This property links an instance of E33 Linguistic Object (A), to another instance of E33 Linguistic Object (B) which is the translation of A.
     * When an instance of E33 Linguistic Object is translated into a new language a new instance of E33 Linguistic Object is created, despite the translation being conceptually similar to the source.
     * This property is asymmetric.
     */
    "P73_has_translation": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P73_has_translation'>;
    "P73i_is_translation_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P73i_is_translation_of'>;
    /**
     * This property describes the current or former place of residence (an instance of E53 Place) of an instance of E39 Actor.
     * The residence may be either the place where the actor resides, or a legally registered address of any kind.
     */
    "P74_has_current_or_former_residence": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P74_has_current_or_former_residence'>;
    "P74i_is_current_or_former_residence_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P74i_is_current_or_former_residence_of'>;
    /** This property associates an instance of E39 Actor to an instance of E30 Right over which the actor holds or has held a legal claim. */
    "P75_possesses": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P75_possesses'>;
    "P75i_is_possessed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P75i_is_possessed_by'>;
    /** This property associates an instance of E39 Actor to an instance of E41 Appellation which a communication service uses to direct communications to this actor, such as an e-mail address, fax number, or postal address. */
    "P76_has_contact_point": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P76_has_contact_point'>;
    "P76i_provides_access_to": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P76i_provides_access_to'>;
    /** This property associates an instance of E52 Time-Span with a note detailing the scholarly or scientific opinions and justifications about the certainty, precision, sources etc. of its beginning. Such notes may also be used to elaborate arguments about constraints or to give explanations of alternatives. */
    "P79_beginning_is_qualified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P79_beginning_is_qualified_by'>;
    /**
     * This property describes the spatial location of an instance of E4 Period.
     * The related instance of E53 Place should be seen as a wider approximation of the geometric area within which the phenomena that characterise the period in question occurred, see below. P7 took place at (witnessed) does not convey any meaning other than spatial positioning (frequently on the surface of the earth). For example, the period “Révolution française” can be said to have taken place in “France in 1789”; the “Victorian” period may be said to have taken place in “Britain from 1837-1901” and its colonies, as well as other parts of Europe and North America. An instance of E4 Period can take place at multiple non-contiguous, non-overlapping locations.
     * This property is a shortcut of the more fully developed path from E4 Period through P161 has spatial projection, E53 Place, P89 falls within to E53 Place. E4 Period is a subclass of E92 Spacetime Volume. By the definition of P161 has spatial projection an instance of E4 Period takes place on all its spatial projections, that is, instances of E53 Place. Something happening at a given place can also be considered to happen at a larger place containing the first. For example, the assault on the Bastille 14-th July 1789 took place in the area covered by Paris in 1789 but also in the area covered by France in 1789.
     */
    "P7_took_place_at": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P7_took_place_at'>;
    "P7i_witnessed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P7i_witnessed'>;
    /** This property associates an instance of E52 Time-Span with a note detailing the scholarly or scientific opinions and justifications about the end of this time-span concerning certainty, precision, sources etc. This property may also be used to describe arguments constraining possible dates and to distinguish reasons for alternative dates. */
    "P80_end_is_qualified_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P80_end_is_qualified_by'>;
    /** This property associates an instance of E52 Time-Span with an instance of E61 Time Primitive specifying a minimum period of time covered by it. Since Time-Spans may not have precisely known temporal extents, the CIDOC CRM supports statements about the minimum and maximum temporal extents of Time-Spans. This property allows a Time-Span’s minimum temporal extent (i.e., its inner boundary) to be assigned an E61 Time Primitive value. Time Primitives are treated by the CIDOC CRM as application or system specific date intervals, and are not further analysed. If different sources of evidence justify different minimum extents without contradicting each other, the smallest interval including all these extents will be the best estimate. This should be taken into account for information integration. */
    "P81_ongoing_throughout": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P81_ongoing_throughout'>;
    "P81a_end_of_the_begin": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P81a_end_of_the_begin'>;
    "P81b_begin_of_the_end": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P81b_begin_of_the_end'>;
    /** This property describes the maximum period of time within which an E52 Time-Span falls. Since Time-Spans may not have precisely known temporal extents, the CIDOC CRM supports statements about the minimum and maximum temporal extents of Time-Spans. This property allows a Time-Span’s maximum temporal extent (i.e., its outer boundary) to be assigned an E61 Time Primitive value. Time Primitives are treated by the CIDOC CRM as application or system specific date intervals, and are not further analysed. If different sources of evidence justify different maximum extents without contradicting each other, the resulting intersection of all these extents will be the best estimate. This should be taken into account for information integration. */
    "P82_at_some_time_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P82_at_some_time_within'>;
    "P82a_begin_of_the_begin": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P82a_begin_of_the_begin'>;
    "P82b_end_of_the_end": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P82b_end_of_the_end'>;
    /**
     * This property describes the inclusion relationship between two instances of E52 Time-Span.
     * This property supports the notion that the temporal extent of an instance of E52 Time-Span falls within the temporal extent of another instance of E52 Time-Span. It addresses temporal containment only, and no contextual link between the two instances of E52 Time-Span is implied. This property is transitive and reflexive.
     */
    "P86_falls_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P86_falls_within'>;
    "P86i_contains": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P86i_contains'>;
    /**
     * This property identifies an instance of E53 Place that falls wholly within the extent of another instance of E53 Place.
     * It addresses spatial containment only and does not imply any relationship between things or phenomena occupying these places.
     * This property is transitive and reflexive.
     */
    "P89_falls_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P89_falls_within'>;
    "P89i_contains": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P89i_contains'>;
    /**
     * This property describes the location of an instance of E4 Period with respect to an instance of E19 Physical Object.
     * This property is a shortcut of the more fully developed path from E4 Period through P7 took place at, E53 Place, P156i is occupied by E18 Physical Thing.
     * It describes a period that can be located with respect to the space defined by an E19 Physical Object such as a ship or a building. The precise geographical location of the object during the period in question may be unknown or unimportant.
     * For example, the French and German armistice of 22-nd June 1940 was signed in the same railway carriage as the armistice of 11-th November 1918.
     */
    "P8_took_place_on_or_within": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P8_took_place_on_or_within'>;
    "P8i_witnessed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P8i_witnessed'>;
    /** This property allows an instance of E54 Dimension to be approximated by an instance of E60 Number primitive. */
    "P90_has_value": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P90_has_value'>;
    "P90a_has_lower_value_limit": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P90a_has_lower_value_limit'>;
    "P90b_has_upper_value_limit": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P90b_has_upper_value_limit'>;
    /** This property associates the instance of E66 Formation with the instance of E74 Group that it founded. */
    "P95_has_formed": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P95_has_formed'>;
    "P95i_was_formed_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P95i_was_formed_by'>;
    /**
     * This property links an instance of E67 Birth to an instance of E21 Person in the role of birth-giving mother.
     * Note that biological fathers are not necessarily participants in the Birth (see P97 from father (was father for)). The instance of E21 Person being born is linked to the instance of E67 Birth with the property P98 brought into life (was born). This is not intended for use with general natural history material, only people. There is no explicit method for modelling conception and gestation except by using extensions.
     */
    "P96_by_mother": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P96_by_mother'>;
    "P96i_gave_birth": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P96i_gave_birth'>;
    /**
     * This property links an instance of E67 Birth to an instance of E21 Person in the role of biological father.
     * Note that biological fathers are not seen as necessary participants in the birth, whereas birth-giving mothers are (see P96 by mother (gave birth)). The Person being born is linked to the Birth with the property P98 brought into life (was born).
     * This is not intended for use with general natural history material, only people. There is no explicit method for modelling conception and gestation except by using extensions.
     * An instance of E67 Birth is normally (but not always) associated with one biological father.
     */
    "P97_from_father": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P97_from_father'>;
    "P97i_was_father_for": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P97i_was_father_for'>;
    /**
     * This property links an instance of E67 Birth event to an instance of E21 Person in the role of offspring.
     * Twins, triplets etc. are brought into life by the same instance of E67 Birth. This is not intended for use with general Natural History material, only people. There is no explicit method for modelling conception and gestation except by using extensions.
     */
    "P98_brought_into_life": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P98_brought_into_life'>;
    "P98i_was_born": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P98i_was_born'>;
    /** This property associates the instance of E68 Dissolution with the instance of E74 Group that it disbanded. */
    "P99_dissolved": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P99_dissolved'>;
    "P99i_was_dissolved_by": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P99i_was_dissolved_by'>;
    /**
     * This property associates an instance of E4 Period with another instance of E4 Period that is defined by a subset of the phenomena that define the former. Therefore, the spacetime volume of the latter must fall within the spacetime volume of the former.
     * This property is transitive and asymmetric.
     */
    "P9_consists_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P9_consists_of'>;
    "P9i_forms_part_of": NamedNode<'http://www.cidoc-crm.org/cidoc-crm/P9i_forms_part_of'>;
}

const builder = namespace("http://www.cidoc-crm.org/cidoc-crm/") as any;
export const strict = builder as NamespaceBuilder<keyof Crm> & Crm;
export const loose = builder as NamespaceBuilder & Crm;
