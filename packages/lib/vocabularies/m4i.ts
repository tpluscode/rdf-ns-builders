import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface M4i {
    '': NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#'>;
    /** A binary variable that expects as a value either true or false. */
    "BooleanVariable": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#BooleanVariable'>;
    /** Configuration of a tool or a method in form of a set of parameters that is used in a research process. */
    "Configuration": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Configuration'>;
    /** References a tool or method that is configured by a setup configuration. */
    "configures": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#configures'>;
    /** Person with knowledge of how to access, troubleshoot, or otherwise field issues related to the resource */
    "ContactPerson": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ContactPerson'>;
    /** Person/institution responsible for finding or gathering/collecting data under the guidelines of the author(s) or Principal Investigator (PI) */
    "DataCollector": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#DataCollector'>;
    /** Person tasked with reviewing, enhancing, cleaning, or standardizing metadata and the associated data submitted for storage, use, and maintenance within a data centre or repository */
    "DataCurator": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#DataCurator'>;
    /** Person (or organisation with a staff of data managers, such as a data centre) responsible for maintaining the finished resource */
    "DataManager": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#DataManager'>;
    /** Institution tasked with responsibility to generate/disseminate copies of the resource in either electronic or print form */
    "Distributor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Distributor'>;
    /** A person who oversees the details related to the publication format of the resource */
    "Editor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Editor'>;
    /** Projektenddatum */
    "endOfProject": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#endOfProject'>;
    /** OBSOLETE. (x hasAdmissibleUnit y) means that y is a unit that can be associated with the variable x */
    "hasAdmissibleUnit": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAdmissibleUnit'>;
    /** (x hasAdmissibleValue y) means that y is a value that can be assigned to the variable x */
    "hasAdmissibleValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAdmissibleValue'>;
    /** Referenziert einen Parameter, der zur Laufzeit konfiguriert wird. */
    "hasAssignedParameter": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAssignedParameter'>;
    /** Referenziert eine Menge von Parametern, die zur Laufzeit konfiguriert wird. */
    "hasAssignedParameterSet": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAssignedParameterSet'>;
    /** (a hasAssignedValue y) means that a: x = y is an assignment where the value y is assigned to a variable x */
    "hasAssignedValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAssignedValue'>;
    /** Points to a timestamp associated with an assignment; there are multiple kinds of timestamp datatype properties, which are included here from schema.org */
    "hasAssignmentTimestamp": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAssignmentTimestamp'>;
    /** A boolean value that can be true (expressed by 'true' or '1') or false (expressed by 'false' or '0'). */
    "hasBooleanValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasBooleanValue'>;
    /** OBSOLETE. Associates an six:Real quantity value with an six:CoverageInterval */
    "hasCoverageInterval": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasCoverageInterval'>;
    /** Points to a date(time) of creation of an assignment */
    "hasDateAssignmentCreated": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentCreated'>;
    /** Points to a date(time) of deletion of an assignment */
    "hasDateAssignmentDeleted": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentDeleted'>;
    /** Points to a date(time) of modification of an assignment */
    "hasDateAssignmentModified": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentModified'>;
    /** Points to a date(time) at which the validity of an assignment begins */
    "hasDateAssignmentValidFrom": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentValidFrom'>;
    /** Points to a date(time) at which the validity of an assignment ends */
    "hasDateAssignmentValidUntil": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentValidUntil'>;
    /** Points to a tool that is used within a given processing step */
    "hasEmployedTool": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasEmployedTool'>;
    /** OBSOLETE. Relates an six:Real to its expanded uncertainty */
    "hasExpandedUnc": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasExpandedUnc'>;
    /** Referenziert einen festen Parameter, der sich nicht zur Laufzeit ändert. */
    "hasFixedParameter": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasFixedParameter'>;
    /** Referenziert einen festen Parametersatz, der sich nicht zur Laufzeit ändert. */
    "hasFixedParameterSet": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasFixedParameterSet'>;
    /** Points to the property characterization (i.e., to the kind of quantity) from a controlled vocabulary */
    "hasKindOfQuantity": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasKindOfQuantity'>;
    /** Represents the highest value of a multi-valued variable */
    "hasMaximumValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasMaximumValue'>;
    /** Represents the lowest value of a multi-valued variable */
    "hasMinimumValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasMinimumValue'>;
    /** Represents the numerical value of a real */
    "hasNumericalValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasNumericalValue'>;
    /** Points to a parameter of a given method or tool. */
    "hasParameter": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasParameter'>;
    /** Referenziert eine Menge von Parametern beispielsweise einer Methode oder eines Werkzeugs. */
    "hasParameterSet": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasParameterSet'>;
    /** A Research Organization Registry identifier that persistently and uniquely identifies a research organization */
    "hasRorId": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasRorId'>;
    /** Points to an assignment that is neither input nor output */
    "hasRuntimeAssignment": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasRuntimeAssignment'>;
    /** Describes the spacing of a multi-valued variable */
    "hasStepSize": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasStepSize'>;
    /** A character string of any length */
    "hasStringValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasStringValue'>;
    /** Buchstabe oder Zeichenkette, die eine Variable repräsentiert */
    "hasSymbol": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasSymbol'>;
    /** Associates a quantity value with its mandatory uncertainty declaration (i.e., with an expanded uncertainty or a coverage interval) */
    "hasUncertaintyDeclaration": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasUncertaintyDeclaration'>;
    /** Represents the unit of a numerical value (real or complex or list) */
    "hasUnit": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasUnit'>;
    /** A value of any type */
    "hasValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasValue'>;
    /** ( a hasVariable x ) bedeutet, dass a: x = y eine Variablenzuordnung ist, in der der Variablen x ein Wert zugeordnet wird. */
    "hasVariable": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasVariable'>;
    /** Textual and human readable description of a variable in a research context */
    "hasVariableDescription": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasVariableDescription'>;
    /** Typically, the organisation allowing the resource to be available on the internet through the provision of its hardware/software/operating support */
    "HostingInstitution": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#HostingInstitution'>;
    /** A systematically built alphanumeric string that identifies a unique object (e.g. a person, a publication, an organisation, a research activity, a sample, etc.) or a unique class of objects. */
    "identifier": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#identifier'>;
    /** Points to a tool that implements a given method */
    "implementedByTool": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#implementedByTool'>;
    /** Points to a method that is implemented by a given tool */
    "implementsMethod": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#implementsMethod'>;
    /** A property that connects a person or an organization with a project. */
    "inProject": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#inProject'>;
    /** (x investigates y) means that x is about y, in the context of scientific research and development */
    "investigates": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#investigates'>;
    /** (x investigatesProperty y) means that x is about target property y, in the context of scientific research and development */
    "investigatesProperty": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#investigatesProperty'>;
    /** Points to a processing step the tool has been used in */
    "isEmployedToolIn": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#isEmployedToolIn'>;
    /** Abstract description of a method for analysis, generation and transformation of data and material objects like, e.g., 'Fourier Transform Infrared Spectroscopy' or 'Molecular Dynamics Simulation'. Note that while values for relevant parameters should be provided, m4i:Method does not refer to the actual execution of the process that is described (use m4i:ProcessingStep for that), but rather a description of the underlying principle. */
    "Method": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Method'>;
    /** Assignment by which a variable (e.g., a physical property) is assigned a quantity value (scalar x measurement unit) in some context (e.g., applied to some object of research) */
    "NumericalAssignment": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#NumericalAssignment'>;
    /** A variable that expects a float or integer as a value */
    "NumericalVariable": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#NumericalVariable'>;
    /** Open Researcher and Contributor ID: an identifier, that allows unique identification of a person, usually active in research. */
    "orcidId": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#orcidId'>;
    /** Any person or institution making a significant contribution to the development and/or maintenance of the resource, but whose contribution is notadequately described by any of the other values for contributorType */
    "Other": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Other'>;
    /** Specific action undertaken during research */
    "ProcessingStep": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProcessingStep'>;
    /** Typically,a person or organisation responsible for the artistry and form of a media product */
    "Producer": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Producer'>;
    /** Person officially designated as head of project team or sub-project team instrumental in the work necessary to development of the resource */
    "ProjectLeader": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProjectLeader'>;
    /** Person officially designated as manager of a project. Project may consist of one or many project teams and sub-teams. */
    "ProjectManager": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProjectManager'>;
    /** Person on the membership list of a designated project/project team */
    "ProjectMember": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProjectMember'>;
    /** A property that connects a project with a person or an organisation. */
    "projectParticipant": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#projectParticipant'>;
    /** An alphanumeric identifier for a project. We recommend using an identifier which is understandable outside the involved institutions and possibly resolvable and persistent, such as the [Research Activity Identifier (RAiD)](https://raid.org/) or a funder-given ID (see for example the [DFG project database](https://gepris.dfg.de/gepris/OCTOPUS) or the [EU project database](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/projects-results)). */
    "projectReferenceID": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#projectReferenceID'>;
    /** Points to a method that is used within a given processing step */
    "realizesMethod": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#realizesMethod'>;
    /** Institution/organisation officially appointed by a Registration Authority to handle specific tasks within a defined area of responsibility */
    "RegistrationAgency": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RegistrationAgency'>;
    /** A standards-setting body from which Registration Agencies obtain official recognition and guidance */
    "RegistrationAuthority": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RegistrationAuthority'>;
    /** A person without a specifically defined role in the development of the resource, but who is someone the author wishes to recognize */
    "RelatedPerson": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RelatedPerson'>;
    /** Points to a variable that is represented through a field within a recordset */
    "representsVariable": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#representsVariable'>;
    /** A person involved in analysing data or the results of an experiment or formal study. May indicate an intern or assistant to one of the authors who helped with research but who was not so “key” as to be listed as an author. */
    "Researcher": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Researcher'>;
    /** Typically refers to a group of individuals with a lab, department, or divisionthathas a specifically defined focus of activity. */
    "ResearchGroup": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ResearchGroup'>;
    /** Person or institution owning or managing property rights, including intellectual property rights over the resource */
    "RightsHolder": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RightsHolder'>;
    /** Person or organisation that issued a contract or under the auspices of which a work has been written, printed, published, developed, etc. */
    "Sponsor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Sponsor'>;
    /** Startdatum eines Projekts */
    "startOfProject": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#startOfProject'>;
    /** Designated administrator over one or more groups/teams working to produce a resource, or over one or more steps of a development process */
    "Supervisor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Supervisor'>;
    /** A variable that expects a string of characters as a value */
    "TextVariable": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#TextVariable'>;
    /** Object that helps an agent perform an action (e.g., John wrote a book with a pen), i.e., an object of the relation schema:instrument or m4i:hasTool */
    "Tool": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Tool'>;
    /** OBSOLETE. Declaration that can be applied to an six:Real quantity value to give an assessment of uncertainty */
    "UncertaintyDeclaration": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#UncertaintyDeclaration'>;
    /** Textual description of a processing step within a research process to enable or facilitate its reproducibility */
    "UsageInstruction": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#UsageInstruction'>;
    /** References a configuration of parameters that is used in a processing step to set up a method or tool. */
    "usesConfiguration": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#usesConfiguration'>;
    /** A set of variables belonging together, which can be of same or different types (numerical, text or boolean). */
    "VariableSet": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#VariableSet'>;
    /** A Work Package is a recognized data product, not all of which is included in publication. The package, instead, may include notes, discarded documents, etc. The Work Package Leader is responsible for ensuring the comprehensive contents, versioning, and availability of the Work Package during the development of the resource. */
    "WorkPackageLeader": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#WorkPackageLeader'>;
}

const builder = namespace("http://w3id.org/nfdi4ing/metadata4ing#") as any;
export const strict = builder as NamespaceBuilder<keyof M4i> & M4i;
export const loose = builder as NamespaceBuilder & M4i;
