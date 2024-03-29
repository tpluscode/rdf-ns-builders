import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dpv {
    '': NamedNode<'http://www.w3.org/ns/dpv#'>;
    "AcademicResearch": NamedNode<'http://www.w3.org/ns/dpv#AcademicResearch'>;
    "Accent": NamedNode<'http://www.w3.org/ns/dpv#Accent'>;
    "AccessControl": NamedNode<'http://www.w3.org/ns/dpv#AccessControl'>;
    "AccessControlMethod": NamedNode<'http://www.w3.org/ns/dpv#AccessControlMethod'>;
    "AccountIdentifier": NamedNode<'http://www.w3.org/ns/dpv#AccountIdentifier'>;
    "Acquantaince": NamedNode<'http://www.w3.org/ns/dpv#Acquantaince'>;
    "Acquire": NamedNode<'http://www.w3.org/ns/dpv#Acquire'>;
    "Adapt": NamedNode<'http://www.w3.org/ns/dpv#Adapt'>;
    /** Advertising is a subset of Marketing. Advertising by itself does not indicate 'personalisation' i.e. personalised ads. */
    "Advertising": NamedNode<'http://www.w3.org/ns/dpv#Advertising'>;
    "Age": NamedNode<'http://www.w3.org/ns/dpv#Age'>;
    "Align": NamedNode<'http://www.w3.org/ns/dpv#Align'>;
    "Alter": NamedNode<'http://www.w3.org/ns/dpv#Alter'>;
    "Analyse": NamedNode<'http://www.w3.org/ns/dpv#Analyse'>;
    "Anonymise": NamedNode<'http://www.w3.org/ns/dpv#Anonymise'>;
    "Anonymization": NamedNode<'http://www.w3.org/ns/dpv#Anonymization'>;
    "ApartmentOwned": NamedNode<'http://www.w3.org/ns/dpv#ApartmentOwned'>;
    "Association": NamedNode<'http://www.w3.org/ns/dpv#Association'>;
    "Attitude": NamedNode<'http://www.w3.org/ns/dpv#Attitude'>;
    "Authenticating": NamedNode<'http://www.w3.org/ns/dpv#Authenticating'>;
    "AuthenticationHistory": NamedNode<'http://www.w3.org/ns/dpv#AuthenticationHistory'>;
    "AuthenticationProtocols": NamedNode<'http://www.w3.org/ns/dpv#AuthenticationProtocols'>;
    /** non-technical authorisation procedures: How is it described on an organisational level, who gets access to the data */
    "AuthorisationProcedure": NamedNode<'http://www.w3.org/ns/dpv#AuthorisationProcedure'>;
    "Authority": NamedNode<'http://www.w3.org/ns/dpv#Authority'>;
    "AutomatedDecisionMaking": NamedNode<'http://www.w3.org/ns/dpv#AutomatedDecisionMaking'>;
    "BankAccount": NamedNode<'http://www.w3.org/ns/dpv#BankAccount'>;
    "Behavioral": NamedNode<'http://www.w3.org/ns/dpv#Behavioral'>;
    "Biometric": NamedNode<'http://www.w3.org/ns/dpv#Biometric'>;
    "BloodType": NamedNode<'http://www.w3.org/ns/dpv#BloodType'>;
    "BrowserFingerprint": NamedNode<'http://www.w3.org/ns/dpv#BrowserFingerprint'>;
    "BrowsingBehavior": NamedNode<'http://www.w3.org/ns/dpv#BrowsingBehavior'>;
    "BrowsingBehaviour": NamedNode<'http://www.w3.org/ns/dpv#BrowsingBehaviour'>;
    "BrowsingReferral": NamedNode<'http://www.w3.org/ns/dpv#BrowsingReferral'>;
    "CallLog": NamedNode<'http://www.w3.org/ns/dpv#CallLog'>;
    "CarOwned": NamedNode<'http://www.w3.org/ns/dpv#CarOwned'>;
    "Certification": NamedNode<'http://www.w3.org/ns/dpv#Certification'>;
    "CertificationSeal": NamedNode<'http://www.w3.org/ns/dpv#CertificationSeal'>;
    "Character": NamedNode<'http://www.w3.org/ns/dpv#Character'>;
    /** The legality of age defining a child varies by jurisdiction. In addition, 'child' is distinct from a 'minor'. For example, the legal age drinking alcohol can be 21, which makes a person of age 20 a 'minor' in this context. In other cases, 'minor' and 'child' are used interchangeably to refer to a person below some legally defined age. */
    "Child": NamedNode<'http://www.w3.org/ns/dpv#Child'>;
    "CodeOfConduct": NamedNode<'http://www.w3.org/ns/dpv#CodeOfConduct'>;
    "Collect": NamedNode<'http://www.w3.org/ns/dpv#Collect'>;
    "Combine": NamedNode<'http://www.w3.org/ns/dpv#Combine'>;
    "CommercialInterest": NamedNode<'http://www.w3.org/ns/dpv#CommercialInterest'>;
    "CommercialResearch": NamedNode<'http://www.w3.org/ns/dpv#CommercialResearch'>;
    "Communication": NamedNode<'http://www.w3.org/ns/dpv#Communication'>;
    "CommunicationForCustomerCare": NamedNode<'http://www.w3.org/ns/dpv#CommunicationForCustomerCare'>;
    "CommunicationsMetadata": NamedNode<'http://www.w3.org/ns/dpv#CommunicationsMetadata'>;
    "Connection": NamedNode<'http://www.w3.org/ns/dpv#Connection'>;
    "Consent": NamedNode<'http://www.w3.org/ns/dpv#Consent'>;
    "Consult": NamedNode<'http://www.w3.org/ns/dpv#Consult'>;
    "Consultation": NamedNode<'http://www.w3.org/ns/dpv#Consultation'>;
    "ConsultationWithAuthority": NamedNode<'http://www.w3.org/ns/dpv#ConsultationWithAuthority'>;
    "Contact": NamedNode<'http://www.w3.org/ns/dpv#Contact'>;
    "Context": NamedNode<'http://www.w3.org/ns/dpv#Context'>;
    "Contract": NamedNode<'http://www.w3.org/ns/dpv#Contract'>;
    "Copy": NamedNode<'http://www.w3.org/ns/dpv#Copy'>;
    "Country": NamedNode<'http://www.w3.org/ns/dpv#Country'>;
    "CreateEventRecommendations": NamedNode<'http://www.w3.org/ns/dpv#CreateEventRecommendations'>;
    "CreatePersonalizedRecommendations": NamedNode<'http://www.w3.org/ns/dpv#CreatePersonalizedRecommendations'>;
    "CreateProductRecommendations": NamedNode<'http://www.w3.org/ns/dpv#CreateProductRecommendations'>;
    "Credit": NamedNode<'http://www.w3.org/ns/dpv#Credit'>;
    "CreditCapacity": NamedNode<'http://www.w3.org/ns/dpv#CreditCapacity'>;
    "CreditCardNumber": NamedNode<'http://www.w3.org/ns/dpv#CreditCardNumber'>;
    "CreditRecord": NamedNode<'http://www.w3.org/ns/dpv#CreditRecord'>;
    "CreditScore": NamedNode<'http://www.w3.org/ns/dpv#CreditScore'>;
    "CreditStanding": NamedNode<'http://www.w3.org/ns/dpv#CreditStanding'>;
    "CreditWorthiness": NamedNode<'http://www.w3.org/ns/dpv#CreditWorthiness'>;
    "Criminal": NamedNode<'http://www.w3.org/ns/dpv#Criminal'>;
    "CriminalCharge": NamedNode<'http://www.w3.org/ns/dpv#CriminalCharge'>;
    "CriminalConviction": NamedNode<'http://www.w3.org/ns/dpv#CriminalConviction'>;
    "CriminalPardon": NamedNode<'http://www.w3.org/ns/dpv#CriminalPardon'>;
    "CustomerCare": NamedNode<'http://www.w3.org/ns/dpv#CustomerCare'>;
    /** The terms 'Controller' is usually the more common form of indicating a Data Controller. In ISO/IEC the term 'PII Controller' is used. */
    "DataController": NamedNode<'http://www.w3.org/ns/dpv#DataController'>;
    "DataProcessor": NamedNode<'http://www.w3.org/ns/dpv#DataProcessor'>;
    "DataProtectionAuthority": NamedNode<'http://www.w3.org/ns/dpv#DataProtectionAuthority'>;
    "DataProtectionOfficer": NamedNode<'http://www.w3.org/ns/dpv#DataProtectionOfficer'>;
    /** Source is direct point of data collection; 'origin' would indicate the original/others points of where the data originates from */
    "DataSource": NamedNode<'http://www.w3.org/ns/dpv#DataSource'>;
    /** The term 'data subject' is specific to the GDPR, but is functionally equivalent to the term 'individual' and the ISO/IEC term 'PII Principle'. */
    "DataSubject": NamedNode<'http://www.w3.org/ns/dpv#DataSubject'>;
    /** Based on use of definitions, the notion of 'Data Subject Right' can be equivalent to 'Individual Right' or 'Right of a Person' */
    "DataSubjectRight": NamedNode<'http://www.w3.org/ns/dpv#DataSubjectRight'>;
    /** sub-processor' is a commonly used term similar to 'sub-contractor' and does not have a specific legal definition */
    "DataSubProcessor": NamedNode<'http://www.w3.org/ns/dpv#DataSubProcessor'>;
    "DeIdentification": NamedNode<'http://www.w3.org/ns/dpv#DeIdentification'>;
    "DeliveryOfGoods": NamedNode<'http://www.w3.org/ns/dpv#DeliveryOfGoods'>;
    "Demeanor": NamedNode<'http://www.w3.org/ns/dpv#Demeanor'>;
    "Demographic": NamedNode<'http://www.w3.org/ns/dpv#Demographic'>;
    "Derive": NamedNode<'http://www.w3.org/ns/dpv#Derive'>;
    "DerivedPersonalData": NamedNode<'http://www.w3.org/ns/dpv#DerivedPersonalData'>;
    "DesignStandard": NamedNode<'http://www.w3.org/ns/dpv#DesignStandard'>;
    "Destruct": NamedNode<'http://www.w3.org/ns/dpv#Destruct'>;
    "DeviceApplications": NamedNode<'http://www.w3.org/ns/dpv#DeviceApplications'>;
    "DeviceBased": NamedNode<'http://www.w3.org/ns/dpv#DeviceBased'>;
    "DeviceOperatingSystem": NamedNode<'http://www.w3.org/ns/dpv#DeviceOperatingSystem'>;
    "DeviceSoftware": NamedNode<'http://www.w3.org/ns/dpv#DeviceSoftware'>;
    "Dialect": NamedNode<'http://www.w3.org/ns/dpv#Dialect'>;
    "DirectMarketing": NamedNode<'http://www.w3.org/ns/dpv#DirectMarketing'>;
    "Disability": NamedNode<'http://www.w3.org/ns/dpv#Disability'>;
    "DisciplinaryAction": NamedNode<'http://www.w3.org/ns/dpv#DisciplinaryAction'>;
    "Disclose": NamedNode<'http://www.w3.org/ns/dpv#Disclose'>;
    "DiscloseByTransmission": NamedNode<'http://www.w3.org/ns/dpv#DiscloseByTransmission'>;
    "Dislike": NamedNode<'http://www.w3.org/ns/dpv#Dislike'>;
    "Disseminate": NamedNode<'http://www.w3.org/ns/dpv#Disseminate'>;
    "Divorce": NamedNode<'http://www.w3.org/ns/dpv#Divorce'>;
    "DNACode": NamedNode<'http://www.w3.org/ns/dpv#DNACode'>;
    /** Top class: Impact Assessment, and DPIA is sub-class */
    "DPIA": NamedNode<'http://www.w3.org/ns/dpv#DPIA'>;
    "DrugTestResult": NamedNode<'http://www.w3.org/ns/dpv#DrugTestResult'>;
    "EmailAddress": NamedNode<'http://www.w3.org/ns/dpv#EmailAddress'>;
    "EmailContent": NamedNode<'http://www.w3.org/ns/dpv#EmailContent'>;
    "EmploymentHistory": NamedNode<'http://www.w3.org/ns/dpv#EmploymentHistory'>;
    "EncryptionInRest": NamedNode<'http://www.w3.org/ns/dpv#EncryptionInRest'>;
    "EncryptionInTransfer": NamedNode<'http://www.w3.org/ns/dpv#EncryptionInTransfer'>;
    "Erase": NamedNode<'http://www.w3.org/ns/dpv#Erase'>;
    "Ethnicity": NamedNode<'http://www.w3.org/ns/dpv#Ethnicity'>;
    "EthnicOrigin": NamedNode<'http://www.w3.org/ns/dpv#EthnicOrigin'>;
    "EvaluationScoring": NamedNode<'http://www.w3.org/ns/dpv#EvaluationScoring'>;
    "expiry": NamedNode<'http://www.w3.org/ns/dpv#expiry'>;
    "External": NamedNode<'http://www.w3.org/ns/dpv#External'>;
    "Family": NamedNode<'http://www.w3.org/ns/dpv#Family'>;
    "FamilyHealthHistory": NamedNode<'http://www.w3.org/ns/dpv#FamilyHealthHistory'>;
    "FamilyStructure": NamedNode<'http://www.w3.org/ns/dpv#FamilyStructure'>;
    "Favorite": NamedNode<'http://www.w3.org/ns/dpv#Favorite'>;
    "FavoriteColor": NamedNode<'http://www.w3.org/ns/dpv#FavoriteColor'>;
    "FavoriteFood": NamedNode<'http://www.w3.org/ns/dpv#FavoriteFood'>;
    "FavoriteMusic": NamedNode<'http://www.w3.org/ns/dpv#FavoriteMusic'>;
    "Fetish": NamedNode<'http://www.w3.org/ns/dpv#Fetish'>;
    "Financial": NamedNode<'http://www.w3.org/ns/dpv#Financial'>;
    "FinancialAccount": NamedNode<'http://www.w3.org/ns/dpv#FinancialAccount'>;
    "FinancialAccountNumber": NamedNode<'http://www.w3.org/ns/dpv#FinancialAccountNumber'>;
    "Fingerprint": NamedNode<'http://www.w3.org/ns/dpv#Fingerprint'>;
    "FraudPreventionAndDetection": NamedNode<'http://www.w3.org/ns/dpv#FraudPreventionAndDetection'>;
    "Friend": NamedNode<'http://www.w3.org/ns/dpv#Friend'>;
    "Gender": NamedNode<'http://www.w3.org/ns/dpv#Gender'>;
    "GeneralReputation": NamedNode<'http://www.w3.org/ns/dpv#GeneralReputation'>;
    "Geographic": NamedNode<'http://www.w3.org/ns/dpv#Geographic'>;
    "GPSCoordinate": NamedNode<'http://www.w3.org/ns/dpv#GPSCoordinate'>;
    "GroupMembership": NamedNode<'http://www.w3.org/ns/dpv#GroupMembership'>;
    "GuidelinesPrinciple": NamedNode<'http://www.w3.org/ns/dpv#GuidelinesPrinciple'>;
    "HairColor": NamedNode<'http://www.w3.org/ns/dpv#HairColor'>;
    "hasAddress": NamedNode<'http://www.w3.org/ns/dpv#hasAddress'>;
    "hasAlgorithmicLogic": NamedNode<'http://www.w3.org/ns/dpv#hasAlgorithmicLogic'>;
    /** The actual notice that the Data Subject received to consent to, either a text or link to a document, which should be usable to decide whether the form or consent was compliant to legislation, e.g. documenting how the user has been informed about rights and implications (such as, right to data portability,right to recitffy, right to erasure, right to restrict processing, right to object, rights regarding automated decision making or profiling, processors, third parties, sub-processors, outside-EEA transfers, automated decision-making, or other necessary details of the privacy-policy). Can be TextOrDocumentOrURI. */
    "hasConsentNotice": NamedNode<'http://www.w3.org/ns/dpv#hasConsentNotice'>;
    "hasConsequences": NamedNode<'http://www.w3.org/ns/dpv#hasConsequences'>;
    "hasContact": NamedNode<'http://www.w3.org/ns/dpv#hasContact'>;
    "hasContext": NamedNode<'http://www.w3.org/ns/dpv#hasContext'>;
    "hasDataController": NamedNode<'http://www.w3.org/ns/dpv#hasDataController'>;
    "hasDataSource": NamedNode<'http://www.w3.org/ns/dpv#hasDataSource'>;
    "hasDataSubject": NamedNode<'http://www.w3.org/ns/dpv#hasDataSubject'>;
    "hasDuration": NamedNode<'http://www.w3.org/ns/dpv#hasDuration'>;
    "hasExpiry": NamedNode<'http://www.w3.org/ns/dpv#hasExpiry'>;
    /** Can be TextOrDocumentOrURI */
    "hasExpiryCondition": NamedNode<'http://www.w3.org/ns/dpv#hasExpiryCondition'>;
    "hasExpiryTime": NamedNode<'http://www.w3.org/ns/dpv#hasExpiryTime'>;
    /** Human involvement is also relevant to 'human in the loop' */
    "hasHumanInvolvement": NamedNode<'http://www.w3.org/ns/dpv#hasHumanInvolvement'>;
    "hasIdentifier": NamedNode<'http://www.w3.org/ns/dpv#hasIdentifier'>;
    "hasLegalBasis": NamedNode<'http://www.w3.org/ns/dpv#hasLegalBasis'>;
    "hasLocation": NamedNode<'http://www.w3.org/ns/dpv#hasLocation'>;
    "hasName": NamedNode<'http://www.w3.org/ns/dpv#hasName'>;
    "hasPersonalDataCategory": NamedNode<'http://www.w3.org/ns/dpv#hasPersonalDataCategory'>;
    "hasProcessing": NamedNode<'http://www.w3.org/ns/dpv#hasProcessing'>;
    /** Normally this would be the dataSubject, but in some exceptional cases, the consent might be given on behalf by someone else, e.g. parents of minors. */
    "hasProvisionBy": NamedNode<'http://www.w3.org/ns/dpv#hasProvisionBy'>;
    /** This field can be used to proivde a justification why the provision was provided by another DataSubject or legal entity,  e.g. declariing the relationship (parent, guardian), in combination with the field provisionBy */
    "hasProvisionByJustification": NamedNode<'http://www.w3.org/ns/dpv#hasProvisionByJustification'>;
    /** Can be used to record information of how consent was provided e.g. by a click to a form, in writing, etc., by logging into a system and confirm per email, or with some additional authentication, etc. */
    "hasProvisionMethod": NamedNode<'http://www.w3.org/ns/dpv#hasProvisionMethod'>;
    "hasProvisionTime": NamedNode<'http://www.w3.org/ns/dpv#hasProvisionTime'>;
    "hasPurpose": NamedNode<'http://www.w3.org/ns/dpv#hasPurpose'>;
    "hasRecipient": NamedNode<'http://www.w3.org/ns/dpv#hasRecipient'>;
    "hasRepresentative": NamedNode<'http://www.w3.org/ns/dpv#hasRepresentative'>;
    "hasRight": NamedNode<'http://www.w3.org/ns/dpv#hasRight'>;
    "hasRisk": NamedNode<'http://www.w3.org/ns/dpv#hasRisk'>;
    "hasSector": NamedNode<'http://www.w3.org/ns/dpv#hasSector'>;
    "hasStorage": NamedNode<'http://www.w3.org/ns/dpv#hasStorage'>;
    "hasTechnicalOrganisationalMeasure": NamedNode<'http://www.w3.org/ns/dpv#hasTechnicalOrganisationalMeasure'>;
    /** Normally this would be the dataSubject, but in some exceptional cases, the consent might be withdraawn on behalf by someone else, e.g. parents of minors. */
    "hasWithdrawalBy": NamedNode<'http://www.w3.org/ns/dpv#hasWithdrawalBy'>;
    /** This field can be used to proivde a justification why the weithdrawal was done by another DataSubject or legal entity, e.g. declariing the relationship (parent, guardian), in combination with the field withdrawalBy */
    "hasWithdrawalByJustification": NamedNode<'http://www.w3.org/ns/dpv#hasWithdrawalByJustification'>;
    /** Can be used to record information of how to withdraw consent, e.g. by a click to a form, in writing, etc., by logging into a system and confirm per email, or with some additional authentication, etc. */
    "hasWithdrawalMethod": NamedNode<'http://www.w3.org/ns/dpv#hasWithdrawalMethod'>;
    "hasWithdrawalTime": NamedNode<'http://www.w3.org/ns/dpv#hasWithdrawalTime'>;
    "Health": NamedNode<'http://www.w3.org/ns/dpv#Health'>;
    "HealthHistory": NamedNode<'http://www.w3.org/ns/dpv#HealthHistory'>;
    "HealthRecord": NamedNode<'http://www.w3.org/ns/dpv#HealthRecord'>;
    "Height": NamedNode<'http://www.w3.org/ns/dpv#Height'>;
    "Historical": NamedNode<'http://www.w3.org/ns/dpv#Historical'>;
    "HouseOwned": NamedNode<'http://www.w3.org/ns/dpv#HouseOwned'>;
    "Identifying": NamedNode<'http://www.w3.org/ns/dpv#Identifying'>;
    "IdentityVerification": NamedNode<'http://www.w3.org/ns/dpv#IdentityVerification'>;
    "ImpactAssessment": NamedNode<'http://www.w3.org/ns/dpv#ImpactAssessment'>;
    "ImproveExistingProductsAndServices": NamedNode<'http://www.w3.org/ns/dpv#ImproveExistingProductsAndServices'>;
    "ImproveInternalCRMProcesses": NamedNode<'http://www.w3.org/ns/dpv#ImproveInternalCRMProcesses'>;
    "Income": NamedNode<'http://www.w3.org/ns/dpv#Income'>;
    "IncomeBracket": NamedNode<'http://www.w3.org/ns/dpv#IncomeBracket'>;
    "IncreaseServiceRobustness": NamedNode<'http://www.w3.org/ns/dpv#IncreaseServiceRobustness'>;
    "IndividualHealthHistory": NamedNode<'http://www.w3.org/ns/dpv#IndividualHealthHistory'>;
    "InnovativeUseOfNewTechnologies": NamedNode<'http://www.w3.org/ns/dpv#InnovativeUseOfNewTechnologies'>;
    "Intention": NamedNode<'http://www.w3.org/ns/dpv#Intention'>;
    "Interaction": NamedNode<'http://www.w3.org/ns/dpv#Interaction'>;
    "Interest": NamedNode<'http://www.w3.org/ns/dpv#Interest'>;
    "Internal": NamedNode<'http://www.w3.org/ns/dpv#Internal'>;
    "InternalResourceOptimisation": NamedNode<'http://www.w3.org/ns/dpv#InternalResourceOptimisation'>;
    "IPAddress": NamedNode<'http://www.w3.org/ns/dpv#IPAddress'>;
    /** The conditions for what is considered 'explicit consent' differ by norms and laws. */
    "isExplicit": NamedNode<'http://www.w3.org/ns/dpv#isExplicit'>;
    "Job": NamedNode<'http://www.w3.org/ns/dpv#Job'>;
    "KnowledgeBelief": NamedNode<'http://www.w3.org/ns/dpv#KnowledgeBelief'>;
    "Language": NamedNode<'http://www.w3.org/ns/dpv#Language'>;
    "LargeScaleProcessing": NamedNode<'http://www.w3.org/ns/dpv#LargeScaleProcessing'>;
    "LegalAgreement": NamedNode<'http://www.w3.org/ns/dpv#LegalAgreement'>;
    /** Legal basis (plural: legal bases) are defined by legislations and regulations, whose applicability is usually restricted to specific jurisdictions. */
    "LegalBasis": NamedNode<'http://www.w3.org/ns/dpv#LegalBasis'>;
    "LegalCompliance": NamedNode<'http://www.w3.org/ns/dpv#LegalCompliance'>;
    "LegalEntity": NamedNode<'http://www.w3.org/ns/dpv#LegalEntity'>;
    "LifeHistory": NamedNode<'http://www.w3.org/ns/dpv#LifeHistory'>;
    "Like": NamedNode<'http://www.w3.org/ns/dpv#Like'>;
    "LinkClicked": NamedNode<'http://www.w3.org/ns/dpv#LinkClicked'>;
    "LoanRecord": NamedNode<'http://www.w3.org/ns/dpv#LoanRecord'>;
    "Location": NamedNode<'http://www.w3.org/ns/dpv#Location'>;
    "MACAddress": NamedNode<'http://www.w3.org/ns/dpv#MACAddress'>;
    "MakeAvailable": NamedNode<'http://www.w3.org/ns/dpv#MakeAvailable'>;
    "MaritalStatus": NamedNode<'http://www.w3.org/ns/dpv#MaritalStatus'>;
    "Marketing": NamedNode<'http://www.w3.org/ns/dpv#Marketing'>;
    "Marriage": NamedNode<'http://www.w3.org/ns/dpv#Marriage'>;
    "MatchingCombining": NamedNode<'http://www.w3.org/ns/dpv#MatchingCombining'>;
    "measureImplementedBy": NamedNode<'http://www.w3.org/ns/dpv#measureImplementedBy'>;
    "MedicalHealth": NamedNode<'http://www.w3.org/ns/dpv#MedicalHealth'>;
    "MentalHealth": NamedNode<'http://www.w3.org/ns/dpv#MentalHealth'>;
    "mitigatesRisk": NamedNode<'http://www.w3.org/ns/dpv#mitigatesRisk'>;
    "Move": NamedNode<'http://www.w3.org/ns/dpv#Move'>;
    "Name": NamedNode<'http://www.w3.org/ns/dpv#Name'>;
    "NDA": NamedNode<'http://www.w3.org/ns/dpv#NDA'>;
    "NonCommercialResearch": NamedNode<'http://www.w3.org/ns/dpv#NonCommercialResearch'>;
    "Obtain": NamedNode<'http://www.w3.org/ns/dpv#Obtain'>;
    "OfficialID": NamedNode<'http://www.w3.org/ns/dpv#OfficialID'>;
    "Offspring": NamedNode<'http://www.w3.org/ns/dpv#Offspring'>;
    "Opinion": NamedNode<'http://www.w3.org/ns/dpv#Opinion'>;
    "OptimisationForConsumer": NamedNode<'http://www.w3.org/ns/dpv#OptimisationForConsumer'>;
    "OptimisationForController": NamedNode<'http://www.w3.org/ns/dpv#OptimisationForController'>;
    "OptimiseUserInterface": NamedNode<'http://www.w3.org/ns/dpv#OptimiseUserInterface'>;
    "OrganisationalMeasure": NamedNode<'http://www.w3.org/ns/dpv#OrganisationalMeasure'>;
    "Organise": NamedNode<'http://www.w3.org/ns/dpv#Organise'>;
    "Ownership": NamedNode<'http://www.w3.org/ns/dpv#Ownership'>;
    "Parent": NamedNode<'http://www.w3.org/ns/dpv#Parent'>;
    "Password": NamedNode<'http://www.w3.org/ns/dpv#Password'>;
    "Payment": NamedNode<'http://www.w3.org/ns/dpv#Payment'>;
    "PaymentCard": NamedNode<'http://www.w3.org/ns/dpv#PaymentCard'>;
    "PaymentCardExpiry": NamedNode<'http://www.w3.org/ns/dpv#PaymentCardExpiry'>;
    "PaymentCardNumber": NamedNode<'http://www.w3.org/ns/dpv#PaymentCardNumber'>;
    /** For a formal legal definition of personal data, see GDPR Art.4-1. An informal definition consists of any data directly or indirectly associated or related to an individual. This definition is equivalent to ISO/IEC definition of Personally Identifiable Information (PII). */
    "PersonalDataCategory": NamedNode<'http://www.w3.org/ns/dpv#PersonalDataCategory'>;
    "PersonalDataHandling": NamedNode<'http://www.w3.org/ns/dpv#PersonalDataHandling'>;
    "PersonalisedAdvertising": NamedNode<'http://www.w3.org/ns/dpv#PersonalisedAdvertising'>;
    "PersonalisedBenefits": NamedNode<'http://www.w3.org/ns/dpv#PersonalisedBenefits'>;
    "Personality": NamedNode<'http://www.w3.org/ns/dpv#Personality'>;
    "PersonalPossession": NamedNode<'http://www.w3.org/ns/dpv#PersonalPossession'>;
    "PhilosophicalBelief": NamedNode<'http://www.w3.org/ns/dpv#PhilosophicalBelief'>;
    "PhysicalAddress": NamedNode<'http://www.w3.org/ns/dpv#PhysicalAddress'>;
    "PhysicalCharacteristic": NamedNode<'http://www.w3.org/ns/dpv#PhysicalCharacteristic'>;
    "PhysicalHealth": NamedNode<'http://www.w3.org/ns/dpv#PhysicalHealth'>;
    "PhysicalTrait": NamedNode<'http://www.w3.org/ns/dpv#PhysicalTrait'>;
    "PIA": NamedNode<'http://www.w3.org/ns/dpv#PIA'>;
    "Picture": NamedNode<'http://www.w3.org/ns/dpv#Picture'>;
    "Piercing": NamedNode<'http://www.w3.org/ns/dpv#Piercing'>;
    "PINCode": NamedNode<'http://www.w3.org/ns/dpv#PINCode'>;
    "PoliticalAffiliation": NamedNode<'http://www.w3.org/ns/dpv#PoliticalAffiliation'>;
    "Preference": NamedNode<'http://www.w3.org/ns/dpv#Preference'>;
    "Prescription": NamedNode<'http://www.w3.org/ns/dpv#Prescription'>;
    "PrivacyByDefault": NamedNode<'http://www.w3.org/ns/dpv#PrivacyByDefault'>;
    "PrivacyByDesign": NamedNode<'http://www.w3.org/ns/dpv#PrivacyByDesign'>;
    "PrivacyPreference": NamedNode<'http://www.w3.org/ns/dpv#PrivacyPreference'>;
    "Processing": NamedNode<'http://www.w3.org/ns/dpv#Processing'>;
    "Proclivitie": NamedNode<'http://www.w3.org/ns/dpv#Proclivitie'>;
    "Professional": NamedNode<'http://www.w3.org/ns/dpv#Professional'>;
    "ProfessionalCertification": NamedNode<'http://www.w3.org/ns/dpv#ProfessionalCertification'>;
    "ProfessionalEvaluation": NamedNode<'http://www.w3.org/ns/dpv#ProfessionalEvaluation'>;
    "ProfessionalInterview": NamedNode<'http://www.w3.org/ns/dpv#ProfessionalInterview'>;
    "Profiling": NamedNode<'http://www.w3.org/ns/dpv#Profiling'>;
    "PseudoAnonymise": NamedNode<'http://www.w3.org/ns/dpv#PseudoAnonymise'>;
    "PseudoAnonymization": NamedNode<'http://www.w3.org/ns/dpv#PseudoAnonymization'>;
    "PseudonymisationEncryption": NamedNode<'http://www.w3.org/ns/dpv#PseudonymisationEncryption'>;
    "PublicLife": NamedNode<'http://www.w3.org/ns/dpv#PublicLife'>;
    "Purchase": NamedNode<'http://www.w3.org/ns/dpv#Purchase'>;
    "PurchasesAndSpendingHabit": NamedNode<'http://www.w3.org/ns/dpv#PurchasesAndSpendingHabit'>;
    "Purpose": NamedNode<'http://www.w3.org/ns/dpv#Purpose'>;
    "Race": NamedNode<'http://www.w3.org/ns/dpv#Race'>;
    /** A recipient of personal data can be used to indicate any entity that receives personal data. This can be a Third Party, Processor (GDPR), or even a Controller. */
    "Recipient": NamedNode<'http://www.w3.org/ns/dpv#Recipient'>;
    "Record": NamedNode<'http://www.w3.org/ns/dpv#Record'>;
    "Reference": NamedNode<'http://www.w3.org/ns/dpv#Reference'>;
    "RegistrationAuthentication": NamedNode<'http://www.w3.org/ns/dpv#RegistrationAuthentication'>;
    "RegularityOfRecertification": NamedNode<'http://www.w3.org/ns/dpv#RegularityOfRecertification'>;
    "Relationship": NamedNode<'http://www.w3.org/ns/dpv#Relationship'>;
    "Religion": NamedNode<'http://www.w3.org/ns/dpv#Religion'>;
    "ReligiousBelief": NamedNode<'http://www.w3.org/ns/dpv#ReligiousBelief'>;
    "Remove": NamedNode<'http://www.w3.org/ns/dpv#Remove'>;
    "Representative": NamedNode<'http://www.w3.org/ns/dpv#Representative'>;
    "RequestedServiceProvision": NamedNode<'http://www.w3.org/ns/dpv#RequestedServiceProvision'>;
    "ResearchAndDevelopment": NamedNode<'http://www.w3.org/ns/dpv#ResearchAndDevelopment'>;
    "Restrict": NamedNode<'http://www.w3.org/ns/dpv#Restrict'>;
    "Retina": NamedNode<'http://www.w3.org/ns/dpv#Retina'>;
    "Retrieve": NamedNode<'http://www.w3.org/ns/dpv#Retrieve'>;
    /** A 'right' is a legal, social, or ethical principle of freedom or entitlement which dictate the norms regarding what is allowed or owed.. Rights as a concept encompass a broad area of norms and entities, and are not specific to Individuals or Data Protection / Privacy. For individual specific rights, see dpv:DataSubjectRight */
    "Right": NamedNode<'http://www.w3.org/ns/dpv#Right'>;
    /** Risks can be associated with one or more different concepts such as purpose, processing, personal data, technical or organisational measure. */
    "Risk": NamedNode<'http://www.w3.org/ns/dpv#Risk'>;
    /** Data Protection Impact Assessments as per GDPR art 35, other Privacy Impact Assessments, threat severity assessment https://www.cnil.fr/en/privacy-impact-assessment-pia */
    "RiskManagementProcedure": NamedNode<'http://www.w3.org/ns/dpv#RiskManagementProcedure'>;
    "RiskMitigationMeasure": NamedNode<'http://www.w3.org/ns/dpv#RiskMitigationMeasure'>;
    "RoomNumber": NamedNode<'http://www.w3.org/ns/dpv#RoomNumber'>;
    "Salary": NamedNode<'http://www.w3.org/ns/dpv#Salary'>;
    "Sale": NamedNode<'http://www.w3.org/ns/dpv#Sale'>;
    "School": NamedNode<'http://www.w3.org/ns/dpv#School'>;
    "Seal": NamedNode<'http://www.w3.org/ns/dpv#Seal'>;
    "SecretText": NamedNode<'http://www.w3.org/ns/dpv#SecretText'>;
    /** There are various sector codes used commonly to indicate the domain of an organisation or business. Examples include NACE (EU), ISIC (UN), SIC and NAICS (USA). */
    "Sector": NamedNode<'http://www.w3.org/ns/dpv#Sector'>;
    "Security": NamedNode<'http://www.w3.org/ns/dpv#Security'>;
    "SellDataToThirdParties": NamedNode<'http://www.w3.org/ns/dpv#SellDataToThirdParties'>;
    "SellInsightsFromData": NamedNode<'http://www.w3.org/ns/dpv#SellInsightsFromData'>;
    "SellProductsToDataSubject": NamedNode<'http://www.w3.org/ns/dpv#SellProductsToDataSubject'>;
    "SellTargettedAdvertisements": NamedNode<'http://www.w3.org/ns/dpv#SellTargettedAdvertisements'>;
    "ServiceConsumptionBehavior": NamedNode<'http://www.w3.org/ns/dpv#ServiceConsumptionBehavior'>;
    "ServiceOptimization": NamedNode<'http://www.w3.org/ns/dpv#ServiceOptimization'>;
    "ServicePersonalization": NamedNode<'http://www.w3.org/ns/dpv#ServicePersonalization'>;
    "ServiceProvision": NamedNode<'http://www.w3.org/ns/dpv#ServiceProvision'>;
    "Sexual": NamedNode<'http://www.w3.org/ns/dpv#Sexual'>;
    "SexualHistory": NamedNode<'http://www.w3.org/ns/dpv#SexualHistory'>;
    "SexualPreference": NamedNode<'http://www.w3.org/ns/dpv#SexualPreference'>;
    "Share": NamedNode<'http://www.w3.org/ns/dpv#Share'>;
    "Sibling": NamedNode<'http://www.w3.org/ns/dpv#Sibling'>;
    "SingleSignOn": NamedNode<'http://www.w3.org/ns/dpv#SingleSignOn'>;
    "SkinTone": NamedNode<'http://www.w3.org/ns/dpv#SkinTone'>;
    "Social": NamedNode<'http://www.w3.org/ns/dpv#Social'>;
    "SocialMediaCommunication": NamedNode<'http://www.w3.org/ns/dpv#SocialMediaCommunication'>;
    "SocialMediaMarketing": NamedNode<'http://www.w3.org/ns/dpv#SocialMediaMarketing'>;
    "SocialNetwork": NamedNode<'http://www.w3.org/ns/dpv#SocialNetwork'>;
    "SocialStatus": NamedNode<'http://www.w3.org/ns/dpv#SocialStatus'>;
    /** trade union membership, which is explicitly included in the taxative listing in GDPR Art. 9 (1), is not covered yet. */
    "SpecialCategoryPersonalData": NamedNode<'http://www.w3.org/ns/dpv#SpecialCategoryPersonalData'>;
    "StaffTraining": NamedNode<'http://www.w3.org/ns/dpv#StaffTraining'>;
    "StorageDeletion": NamedNode<'http://www.w3.org/ns/dpv#StorageDeletion'>;
    "StorageDuration": NamedNode<'http://www.w3.org/ns/dpv#StorageDuration'>;
    "StorageLocation": NamedNode<'http://www.w3.org/ns/dpv#StorageLocation'>;
    "StorageRestoration": NamedNode<'http://www.w3.org/ns/dpv#StorageRestoration'>;
    "StorageRestriction": NamedNode<'http://www.w3.org/ns/dpv#StorageRestriction'>;
    "Store": NamedNode<'http://www.w3.org/ns/dpv#Store'>;
    "Structure": NamedNode<'http://www.w3.org/ns/dpv#Structure'>;
    "SystematicMonitoring": NamedNode<'http://www.w3.org/ns/dpv#SystematicMonitoring'>;
    "Tattoo": NamedNode<'http://www.w3.org/ns/dpv#Tattoo'>;
    "Tax": NamedNode<'http://www.w3.org/ns/dpv#Tax'>;
    "TechnicalMeasure": NamedNode<'http://www.w3.org/ns/dpv#TechnicalMeasure'>;
    "TechnicalOrganisationalMeasure": NamedNode<'http://www.w3.org/ns/dpv#TechnicalOrganisationalMeasure'>;
    "TelephoneNumber": NamedNode<'http://www.w3.org/ns/dpv#TelephoneNumber'>;
    "ThirdParty": NamedNode<'http://www.w3.org/ns/dpv#ThirdParty'>;
    "Thought": NamedNode<'http://www.w3.org/ns/dpv#Thought'>;
    "Tracking": NamedNode<'http://www.w3.org/ns/dpv#Tracking'>;
    "Transaction": NamedNode<'http://www.w3.org/ns/dpv#Transaction'>;
    "Transactional": NamedNode<'http://www.w3.org/ns/dpv#Transactional'>;
    "Transfer": NamedNode<'http://www.w3.org/ns/dpv#Transfer'>;
    "Transform": NamedNode<'http://www.w3.org/ns/dpv#Transform'>;
    "Transmit": NamedNode<'http://www.w3.org/ns/dpv#Transmit'>;
    "TVViewingBehavior": NamedNode<'http://www.w3.org/ns/dpv#TVViewingBehavior'>;
    "UID": NamedNode<'http://www.w3.org/ns/dpv#UID'>;
    "UsageAnalytics": NamedNode<'http://www.w3.org/ns/dpv#UsageAnalytics'>;
    "Use": NamedNode<'http://www.w3.org/ns/dpv#Use'>;
    "UserInterfacePersonalisation": NamedNode<'http://www.w3.org/ns/dpv#UserInterfacePersonalisation'>;
    "Username": NamedNode<'http://www.w3.org/ns/dpv#Username'>;
    "VoiceCommunicationRecording": NamedNode<'http://www.w3.org/ns/dpv#VoiceCommunicationRecording'>;
    "VoiceMail": NamedNode<'http://www.w3.org/ns/dpv#VoiceMail'>;
    "VulnerableDataSubject": NamedNode<'http://www.w3.org/ns/dpv#VulnerableDataSubject'>;
    "Weight": NamedNode<'http://www.w3.org/ns/dpv#Weight'>;
    "WorkHistory": NamedNode<'http://www.w3.org/ns/dpv#WorkHistory'>;
}

const builder = namespace("http://www.w3.org/ns/dpv#") as any;
export const strict = builder as NamespaceBuilder<keyof Dpv> & Dpv;
export const loose = builder as NamespaceBuilder & Dpv;
