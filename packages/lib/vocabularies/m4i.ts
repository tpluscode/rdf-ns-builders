import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface M4i {
    '': NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#'>;
    "ContactPerson": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ContactPerson'>;
    "DataCollector": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#DataCollector'>;
    "DataCurator": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#DataCurator'>;
    "DataManager": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#DataManager'>;
    "Distributor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Distributor'>;
    "Editor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Editor'>;
    "endOfProject": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#endOfProject'>;
    "hasAdmissibleUnit": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAdmissibleUnit'>;
    "hasAdmissibleValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAdmissibleValue'>;
    "hasAssignedValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAssignedValue'>;
    "hasAssignmentTimestamp": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasAssignmentTimestamp'>;
    "hasCoverageInterval": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasCoverageInterval'>;
    "hasDateAssignmentCreated": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentCreated'>;
    "hasDateAssignmentDeleted": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentDeleted'>;
    "hasDateAssignmentModified": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentModified'>;
    "hasDateAssignmentValidFrom": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentValidFrom'>;
    "hasDateAssignmentValidUntil": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasDateAssignmentValidUntil'>;
    "hasEmployedTool": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasEmployedTool'>;
    "hasExpandedUnc": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasExpandedUnc'>;
    "hasKindOfQuantity": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasKindOfQuantity'>;
    "hasNumericalValue": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasNumericalValue'>;
    "hasParameter": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasParameter'>;
    "hasRorId": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasRorId'>;
    "hasRuntimeAssignment": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasRuntimeAssignment'>;
    "hasSymbol": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasSymbol'>;
    "hasUncertaintyDeclaration": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasUncertaintyDeclaration'>;
    "hasUnit": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasUnit'>;
    "hasVariable": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasVariable'>;
    "hasVariableDescription": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#hasVariableDescription'>;
    "HostingInstitution": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#HostingInstitution'>;
    "identifier": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#identifier'>;
    "implementedByTool": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#implementedByTool'>;
    "implementsMethod": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#implementsMethod'>;
    "inProject": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#inProject'>;
    "investigates": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#investigates'>;
    "investigatesProperty": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#investigatesProperty'>;
    "isEmployedToolIn": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#isEmployedToolIn'>;
    "KindOfQuantity": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#KindOfQuantity'>;
    "Method": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Method'>;
    "NumericalAssignment": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#NumericalAssignment'>;
    "orcidId": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#orcidId'>;
    "Other": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Other'>;
    "ProcessingStep": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProcessingStep'>;
    "Producer": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Producer'>;
    "ProjectLeader": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProjectLeader'>;
    "ProjectManager": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProjectManager'>;
    "ProjectMember": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ProjectMember'>;
    "projectParticipant": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#projectParticipant'>;
    "projectReferenceID": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#projectReferenceID'>;
    "realizesMethod": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#realizesMethod'>;
    "RegistrationAgency": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RegistrationAgency'>;
    "RegistrationAuthority": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RegistrationAuthority'>;
    "RelatedPerson": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RelatedPerson'>;
    "Researcher": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Researcher'>;
    "ResearchGroup": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#ResearchGroup'>;
    "RightsHolder": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#RightsHolder'>;
    "Sponsor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Sponsor'>;
    "startOfProject": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#startOfProject'>;
    "Supervisor": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Supervisor'>;
    "Tool": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#Tool'>;
    "UncertaintyDeclaration": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#UncertaintyDeclaration'>;
    "UsageInstruction": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#UsageInstruction'>;
    "WorkPackageLeader": NamedNode<'http://w3id.org/nfdi4ing/metadata4ing#WorkPackageLeader'>;
}

const builder = namespace("http://w3id.org/nfdi4ing/metadata4ing#") as any;
export const strict = builder as NamespaceBuilder<keyof M4i> & M4i;
export const loose = builder as NamespaceBuilder & M4i;
