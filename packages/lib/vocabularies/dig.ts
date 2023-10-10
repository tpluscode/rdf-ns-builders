import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dig {
    '': NamedNode<'http://www.ics.forth.gr/isl/CRMdig/'>;
    /**
     * This class comprises events by which a digital device runs a software program or a series of  computing 
     * 	operations on a digital object  as a single task, which is completely determined by its digital input, 
     * 	the software and the generic properties of the device. 
     * 	
     */
    "D10_Software_Execution": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D10_Software_Execution'>;
    /**
     * This class comprises events that happen on physical digital devices following a human activity that intentionally caused its 
     * 	immediate or delayed initiation and results in the creation of a new instance of D1 Digital Object on behalf of the human actor. 
     * 	The input of a D7 Digital Machine Event may be parameter settings and/or data to be processed. 
     * 	Some D7 Digital Machine Events may form part of a wider E65 Creation event. 
     * 	In this case, all machine output of the partial events is regarded as creation of the overall activity.
     * 	
     */
    "D7_Digital_Machine_Event": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D7_Digital_Machine_Event'>;
    /**
     * This class comprises actions measuring physical properties using a digital device, 
     * 	that are determined by a systematic procedure and creates an instance of D9 Data Object, 
     * 	which is stored on an instance of D13 Digital Information Carrier. 
     * 	In contrast to instances of D10 Software Execution, environmental factors have an intended influence on the outcome of an instance of D11 Digital Measurement Event. 
     * 	Measurement devices may include running distinct software, such as the RAW to JPEG conversion in digital cameras. 
     * 	In this case, the event is regarded as instance of both classes, D10 Software Execution and D11 Digital Measurement Event.
     * 	
     */
    "D11_Digital_Measurement_Event": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D11_Digital_Measurement_Event'>;
    /**
     * This class comprises events that transfer a digital object from one digital carrier to another. 
     * 	Normally, the digital object remains the same. If in general or by observation the transfer implies or has 
     * 	implied some data corruption, the change of the digital objects may be documented distinguishing input and output 
     * 	rather than instantiating the property L14 transferred (was transferred by). 
     * 	
     */
    "D12_Data_Transfer_Event": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D12_Data_Transfer_Event'>;
    /**
     * This class comprises all instances of E84 Information Carrier that are explicitly designed to be 
     * 	used as persistent digital physical carriers of instances of D1 Digital Object. 
     * 	A D13 Digital Information Carrier may or may not contain information, e.g., an empty diskette.
     * 	
     */
    "D13_Digital_Information_Carrier": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D13_Digital_Information_Carrier'>;
    /**
     * This class comprises software codes,computer programs,procedures, and functions that are
     * 	used to operate a system of digital objects. 
     */
    "D14_Software": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D14_Software'>;
    /**
     * This class comprises identifiable immaterial items that can be represented as sets of bit sequences, 
     * 	such as data sets, e-texts, images, audio or video items, software, etc., and are documented as single units. 
     * 	Any aggregation of instances of D1 Digital Object into a whole treated as single unit is also regarded as an instance of D1 Digital Object. 
     * 	This means that for instance, the content of a DVD, an XML file on it, and an element of this file, are regarded as distinct instances of 
     * 	D1 Digital Object, mutually related by the P106 is composed of (forms part of) property.
     * A D1 Digital Object does not depend on a specific physical carrier, and it can exist on one or more carriers simultaneously.
     *
     */
    "D1_Digital_Object": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D1_Digital_Object'>;
    /**
     * This class comprises the proper noun name that identifies a person that acts
     * as an entity.
     */
    "D21_Person_Name": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D21_Person_Name'>;
    "D23_Room": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D23_Room'>;
    /**
     * This class comprises objects that make propositions about other artefacts. 
     * 	Instances of this class are not the attributes themselves, by which things are annotated, 
     * 	but represent the connection between the concepts related in a proposition, and the activities of creation, modification and deletion. 
     * 	
     */
    "D29_Annotation_Object": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D29_Annotation_Object'>;
    /**
     * This class comprises events that result in the creation of instances of D9 Data Object that 
     * 	represent the appearance and/or form of an instance of E18 Physical Thing such as paper documents, statues, buildings, paintings, etc. 
     * 	A particular case is the analogue-to-digital conversion of audiovisual material.
     * 	This class represents the transition from a material thing to an immaterial representation of it. 
     * 	The characteristic subsequent processing steps on digital objects are regarded as instances of D3 Formal Derivation.
     *
     */
    "D2_Digitization_Process": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D2_Digitization_Process'>;
    /**
     * This class comprises events that describe the creation of associations (Annotation Objects) between objects 
     * 	or areas of objects of the Repository, with other objects or regions or persons, places, events. It is the event that creates the Annotation Object.
     */
    "D30_Annotation_Event": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D30_Annotation_Event'>;
    /**
     * This class describes a part (of any shape or size) of interest in basically any media object stored in the Object Repository,
     * 	i.e., a text, an image, a video or a 3D model. It points to content consisting of just a portion or area of a file. 
     * In some contexts, however, the area can also point to content represented by an integral (i.e., proper) file. It is equal to the METS AREA element 
     */
    "D35_Area": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D35_Area'>;
    /**
     * This class comprises events that result in the creation of a D1 Digital Object from another one following a deterministic algorithm, 
     * 	such that the resulting instance of digital object shares representative properties with the original object. 
     * 	In other words, this class describes the transition from an immaterial object referred to by property L21 used as derivation source (was derivation source for) 
     * 	to another immaterial object referred to by property L22 created derivative (was derivative created by) preserving the 
     * 	representation of some things but in a different form. Characteristic examples are colour corrections, contrast changes and resizing of images.
     * 	
     */
    "D3_Formal_Derivation": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D3_Formal_Derivation'>;
    /**
     * This class comprises identifiable material items such as computers, scanners, cameras, etc. that 
     * 	have the capability to process or produce instances of  D1 Digital Object.
     * 	
     */
    "D8_Digital_Device": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D8_Digital_Device'>;
    /**
     * This class comprises instances of D1 Digital Object that are the direct result of a digital 
     * 	measurement or a formal derivative of it, containing quantitative properties of some physical things or other constellations of matter.
     * 	
     */
    "D9_Data_Object": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/D9_Data_Object'>;
    /**
     * This property associates an instance of D7 Digital Machine Event with an instance of D1 Digital Object
     *  which is the input used to specify the machine action.  
     * This property is a specialisation of P16 used specific object(was used for).
     *
     */
    "L10_had_input": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L10_had_input'>;
    "L10i_was_input_of": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L10i_was_input_of'>;
    /**
     * This property associates an instance of D7 Digital Machine Event with an instance of D1 Digital Object
     *  which is the output of the activity.  
     * This property is a specialisation of P94 has created (was created by).
     */
    "L11_had_output": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L11_had_output'>;
    "L11i_was_output_of": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L11i_was_output_of'>;
    /**
     * This property associates an instance of D7 Digital Machine Event  with an object,
     *  the D8 Digital Device, which happened with, e.g  a capturing event that happened on/with a digital camera, etc. 
     * This property is a specialisation of P12 occurred in the presence of (was present at).
     */
    "L12_happened_on_device": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L12_happened_on_device'>;
    "L12i_was_device_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L12i_was_device_for'>;
    /**
     * This property associates an instance of D10 Software Execution with a digital object
     *  used as a parameter during the process.This property is a specialisation of L1O had input (was input of).
     */
    "L13_used_parameters": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L13_used_parameters'>;
    "L13i_parameters_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L13i_parameters_for'>;
    /**
     * This property  identifies a digital object transferred by a D12 Data Transfer Event.
     * This property is a specialisation of L11 had output (was output of).
     */
    "L14_transferred": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L14_transferred'>;
    "L14i_was_transferred_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L14i_was_transferred_by'>;
    /**
     * This property  identifies a digital device used as a medium on which data are transferred 
     * through a D12 Data Transfer Event.
     */
    "L15_has_sender": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L15_has_sender'>;
    "L15i_was_sender_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L15i_was_sender_for'>;
    /**
     * This property  identifies a digital device used as a medium to receive data  
     * through a D12 Data Transfer Event.
     */
    "L16_has_receiver": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L16_has_receiver'>;
    "L16i_was_receiver_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L16i_was_receiver_for'>;
    /**
     * This property associates an instance of D11 Digital Measurement Event with the instance of E55
     * Type of object to which it applied. This property is a specialisation of P125 used object of type. 
     */
    "L17_measured_thing_of_type": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L17_measured_thing_of_type'>;
    "L17i_was_type_of_thing_measured_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L17i_was_type_of_thing_measured_by'>;
    /**
     * This property identifies a Digital Information Carrier modified in a Digital Machine Event.
     * This property is a specialisation of P31 has modified.
     */
    "L18_has_modified": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L18_has_modified'>;
    "L18i_was_modified_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L18i_was_modified_by'>;
    /**
     * This property associates an instance of a D13 Digital Information Carrier with the instance of Digital Object 
     * that is stored on it. This property is a specialisation of P128 carries.
     */
    "L19_stores": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L19_stores'>;
    "L19i_is_stored_on": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L19i_is_stored_on'>;
    /**
     * This property associates an instance of D2 Digitization Process with an instance of E18 Physical Thing which is a material thing.  
     * This property is a specialisation of P39 measured (was measured by).
     *
     */
    "L1_digitized": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L1_digitized'>;
    "L1i_was_digitized_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L1i_was_digitized_by'>;
    /**
     * This property identifies a Data Object that came into existence as a result of a D11 Digital Measurement Event.
     * This property is a specialisation of P40 observed dimension and L11 had output.
     */
    "L20_has_created": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L20_has_created'>;
    "L20i_was_created_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L20i_was_created_by'>;
    /** This property associates an instance of a D3 Formal Derivation with the instance of D1 Digital Object that is used as a derivation source. */
    "L21_used_as_derivation_source": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L21_used_as_derivation_source'>;
    /**
     * This property associates an instance of D10 Software Execution with an instance of D1 Digital Object
     *  which is used as a source, a software essential for the performance.  
     * This property is a specialisation of L10F had input (was input of).
     * 	
     */
    "L2_used_as_source": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L2_used_as_source'>;
    "L21i_was_derivation_source_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L21i_was_derivation_source_for'>;
    "L2i_was_source_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L2i_was_source_for'>;
    /**
     * This property associates an instance of D3 Formal Derivation with the Digital Object it used to create a version of.
     * This property is a specialisation of L11 had output.
     */
    "L22_created_derivative": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L22_created_derivative'>;
    "L22i_was_derivative_created_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L22i_was_derivative_created_by'>;
    /**
     * This property associates an instance of D7 Digital Machine Event with the instance of D14 Software that had used.
     * This property is a specialisation of P16 used specific object.
     */
    "L23_used_software_or_firmware": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L23_used_software_or_firmware'>;
    "L23i_was_software_or_firmware_used_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L23i_was_software_or_firmware_used_by'>;
    /** This property identifies the logfile that was created by a D10 Software Execution in order to record all the activities in the system. */
    "L24_created_logfile": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L24_created_logfile'>;
    "L24i_was_logfile_created_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L24i_was_logfile_created_by'>;
    /**
     * This property describes the participation of a Legal Body in being responsible for the outcome of a specific activity.
     * This property is a specialisation of P14 carried out by.
     */
    "L29_has_responsible_organization": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L29_has_responsible_organization'>;
    "L29i_is_responsible_organization_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L29i_is_responsible_organization_for'>;
    /**
     * This property describes the activity that is being operated by a person.
     * This property is a specialisation of P14 carried out by.
     */
    "L30_has_operator": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L30_has_operator'>;
    "L30i_is_operator_of": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L30i_is_operator_of'>;
    /**
     * This property allows the starting point for a D7 Digital Machine Event to be situated.   
     * This property expresses the approximation of the starting date of a time span.
     */
    "L31_has_starting_date-time": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L31_has_starting_date-time'>;
    /**
     * This property allows the ending point for a D7 Digital Machine Event to be situated.   
     * This property expresses the approximation of the ending date of a time span.
     */
    "L32_has_ending_date-time": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L32_has_ending_date-time'>;
    /**
     * This property identifies the maker, the actor who is responsible for the production of a device,
     *  a computer, a digital camera, any kind of a machine that has been produced.
     * This property is a shortcut of a more fully developed path from CRM E12 Production:P108 has produced:E24 Physical Man-Made Thing. 
     * In this case, there is no need to describe the more detailed property through a production event,so L33 has maker is reccomended to be used instead. 
     */
    "L33_has_maker": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L33_has_maker'>;
    "L33i_is_maker_of": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L33i_is_maker_of'>;
    /**
     * This property describes the participation of a Legal Body in being contractor for the outcome of a specific activity.
     * This property is a specialisation of L29_has_responsible_organization.
     */
    "L34_has_contractor": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L34_has_contractor'>;
    "L34i_is_contractor_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L34i_is_contractor_for'>;
    /**
     * This property describes the participation of a Legal Body in being commissioner for the outcome of a specific activity.
     * This property is a specialisation of L29_has_responsible_organization.
     */
    "L35_has_commissioner": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L35_has_commissioner'>;
    "L35i_is_commissioner_for": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L35i_is_commissioner_for'>;
    /**
     * This property describes the associations between objects or areas of objects of the RI, 
     * with other objects or regions or persons, places, events..
     */
    "L43_annotates": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L43_annotates'>;
    "L43i_is_annotated_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L43i_is_annotated_by'>;
    /** This property is a specialisation of P3 has note and associates a comment with an instance of an object E1 CRM Entity. */
    "L47_has_comment": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L47_has_comment'>;
    /**
     * This property identifies the D29 Annotation Object (associations) that came into existence as a result of a D30 Annotation Event.
     * This property is a specialisation of P94 has created.
     */
    "L48_created_annotation": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L48_created_annotation'>;
    "L48i_was_annotation_created_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L48i_was_annotation_created_by'>;
    /**
     * This property describes the association between a particular area declared in an original digital object.
     * This property is a specialisation of P106 is composed of.
     */
    "L49_is_primary_area_of": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L49_is_primary_area_of'>;
    "L49i_has_primary_area": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L49i_has_primary_area'>;
    /**
     * This property associates an instance of E1 Entity with an instance of resource used as a preferred lexical label.  
     * This property is a specialisation of rdf schema label.
     *
     */
    "L4_has_preferred_label": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L4_has_preferred_label'>;
    /**
     * This property describes the association between an area and the digital object to which it is propagated.
     * This property is a specialisation of P106 is composed of.
     */
    "L50_is_propagated_area_of": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L50_is_propagated_area_of'>;
    "L50i_has_propagated_area": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L50i_has_propagated_area'>;
    /** This property defines a personal name used to identify a person. */
    "L51_has_first_name": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L51_has_first_name'>;
    /**
     * This property defines the last name used to identify a person.
     * This property is a specialisation of L4 has preferred label.
     */
    "L52_has_last_name": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L52_has_last_name'>;
    /** This property describes a non unique identification applied to E1 CRM Entity. */
    "L53_is_not_uniquely_identified_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L53_is_not_uniquely_identified_by'>;
    /**
     * This property describes the association kind of "same as" between objects. It is used to declare that two or more objects are
     * exactly the same.
     */
    "L54_is_same-as": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L54_is_same-as'>;
    /**
     * This property describes the association kind of "same as" between objects. It is used to declare that two or more objects are
     * exactly the same.
     */
    "L54i_is_same-as": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L54i_is_same-as'>;
    /**
     * This property records the inventory number that was used to identify an instance of E1 CRM Entity 
     * at the time this property was record. This property is a specialisation of L53F is not uniquely identified by.
     */
    "L55_has_inventory_no": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L55_has_inventory_no'>;
    /**
     * This property records the pixel width of the data object; it approximates a dimension that is 
     * part of the image data analysis.This property is a specialisation of P90 has value.
     */
    "L56_has_pixel_width": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L56_has_pixel_width'>;
    /**
     * This property records the pixel height of the data object; it approximates a dimension that is 
     * part of the image data analysis.This property is a specialisation of P90 has value.
     */
    "L57_has_pixel_height": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L57_has_pixel_height'>;
    /**
     * This property records the serial number that was assigned to identify an instance of E22 Man Made Object.
     *  This property is a specialisation of L53 is not uniquely identified by.
     */
    "L59_has_serial_number": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L59_has_serial_number'>;
    /**
     * This property describes the CRM Entities documented by instances of Digitization Processes.
     * This property is a specialisation of P140 assigned attribute to.
     */
    "L60_documents": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L60_documents'>;
    "L60i_is_documented_by": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L60i_is_documented_by'>;
    /**
     * This property describes the minimum period of time covered by a digital machine event. It 
     * identifies the minimum extent of the event. This property is a specialisation of P81 ongoing throughout.
     */
    "L61_was_ongoing_at": NamedNode<'http://www.ics.forth.gr/isl/CRMdig/L61_was_ongoing_at'>;
}

const builder = namespace("http://www.ics.forth.gr/isl/CRMdig/") as any;
export const strict = builder as NamespaceBuilder<keyof Dig> & Dig;
export const loose = builder as NamespaceBuilder & Dig;
