import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Ebucore {
    '': NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#'>;
    /** An abridged title. */
    "abrigedTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#abrigedTitle'>;
    /** To provide an abstract. */
    "abstract": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#abstract'>;
    /** The conditions under which content can be accessed. */
    "AccessConditions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AccessConditions'>;
    /** To define a type of Action. */
    "Action_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Action_Type'>;
    /** A class to log Actions. */
    "Action": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Action'>;
    /** The description of an Action. */
    "actionDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionDescription'>;
    /** An identifier attributed to an Action. */
    "actionId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionId'>;
    /** The name of an Action. */
    "actionName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionName'>;
    /** The time when the Action occurs. */
    "actionTimestamp": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionTimestamp'>;
    /** The edit unit number at which the Action occurs. */
    "actionTimestampEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionTimestampEditUnits'>;
    /** The normal play time at which the Action occurs. */
    "actionTimestampNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionTimestampNormalPlayTime'>;
    /** The timecode at which the Action occurs. */
    "actionTimestampTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionTimestampTimecode'>;
    /** The timecode (dropframe) at which the Action occurs. */
    "actionTimestampTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionTimestampTimecodeDropFrame'>;
    /** A type of Action. */
    "actionType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#actionType'>;
    /** To define an active format code. */
    "ActiveFormatDescriptorCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ActiveFormatDescriptorCode'>;
    /** To provide the end date of activity of an Organisation. */
    "activityEndDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#activityEndDate'>;
    /** To provide the start date of activity of an Organisation. */
    "activityStartDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#activityStartDate'>;
    /** A flag to indiucate adult content. */
    "adultContent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#adultContent'>;
    /** An Organisation to which a Contact is affiliated (with period of validity). */
    "Affiliation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Affiliation'>;
    /** The date of end of Affiliation. */
    "affiliationEndDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#affiliationEndDate'>;
    /** The date of Affiliation. */
    "affiliationStartDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#affiliationStartDate'>;
    /** The age of a Contact/Person. */
    "age": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#age'>;
    /** A person / contact or organisation. */
    "Agent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Agent'>;
    /** A link to a DBPedia page. */
    "agentDbpedia": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentDbpedia'>;
    /** To provide a description of an Agent. */
    "agentDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentDescription'>;
    /** To provide an email address. */
    "agentEmailAddress": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentEmailAddress'>;
    "agentFacebook": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentFacebook'>;
    /** The fee of an Agent. */
    "agentFee": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentFee'>;
    "agentFlickr": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentFlickr'>;
    /** An identifier attributed to an Agent. */
    "agentId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentId'>;
    /** A link to an imdb page. */
    "agentImdb": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentImdb'>;
    "agentInstagram": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentInstagram'>;
    /** Range: a URL or URI. */
    "agentLinkedData": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentLinkedData'>;
    "agentLinkedIn": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentLinkedIn'>;
    /**
     * To provide the mobile telephone number of an
     *             Agent (Contact/Person or organisation)
     */
    "agentMobileTelephoneNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentMobileTelephoneNumber'>;
    /** To provide a name of an Agent. */
    "agentName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentName'>;
    /** To provide a nickname of a Contact/Person. */
    "agentNickname": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentNickname'>;
    /** To provide the previous name of a Contact/Person. */
    "agentPreviousName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentPreviousName'>;
    /**
     * To provide a link to a web resource containing
     *             information related to an Agent (Contact/Person or Organisation).
     */
    "agentRelatedInformationLink": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentRelatedInformationLink'>;
    /** To provide a link to e.g. a web resource related to an Agent. */
    "agentRelatedLink": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentRelatedLink'>;
    /**
     * To provide a link to a web resource containing
     *             information related to an Agent (Contact/Person or Organisation).
     */
    "agentRelatedPressLink": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentRelatedPressLink'>;
    /** Links to an Agent's social media. */
    "agentSocialMedia": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentSocialMedia'>;
    /**
     * To provide the telephone number of an Agent
     *             (Contact/Person or Organisation).
     */
    "agentTelephoneNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentTelephoneNumber'>;
    "agentTwitter": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentTwitter'>;
    /** Range: string or anyURI or Concept. */
    "agentType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentType'>;
    /**
     * To provide the address of the webpage of an
     *             Agent (Contact/Person or Organisation).
     */
    "agentWebHomepage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentWebHomepage'>;
    /** A link to a wikidata page. */
    "agentWikidata": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentWikidata'>;
    "agentWikipedia": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#agentWikipedia'>;
    /** To provide an alternative title. */
    "alternativeTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#alternativeTitle'>;
    /**
     * Any ancillary data provided with the content
     *             other than captioning and subtitling.
     */
    "AncillaryData": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AncillaryData'>;
    /**
     * To define the format of AncillaryData such as
     *             legacy data used to be carried in vertical blanking intervals. This is provided as free
     *             text in an annotation label or as an identifier pointing to a term in a classification
     *             scheme.
     */
    "AncillaryDataFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AncillaryDataFormat'>;
    /** To identify an animal. */
    "Animal": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Animal'>;
    /** To year of birth of an animal. */
    "animalBirthYear": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalBirthYear'>;
    /** To provide a breed code for an animal.. */
    "AnimalBreedCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AnimalBreedCode'>;
    /** To associate a fictitious character name with an animal. */
    "animalCharacterName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalCharacterName'>;
    /** To associate a code with an animal. */
    "animalCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalCode'>;
    /** To provide a colour code for an animal.. */
    "AnimalColourCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AnimalColourCode'>;
    /** To describe an animal. */
    "animalDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalDescription'>;
    /** To give the gender of an animal. */
    "animalGender": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalGender'>;
    /** To associate an Id with an animal. */
    "animalId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalId'>;
    /** To name an animal. */
    "animalName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalName'>;
    /** To replicate the passport of an animal. */
    "animalPassport": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#animalPassport'>;
    /** To define a type of Annotation. */
    "Annotation_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Annotation_Type'>;
    /** A class used to annotate Assets. */
    "Annotation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Annotation'>;
    /** To estimate the confidence in an Annotation. */
    "annotationConfidence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationConfidence'>;
    /** To provide the date and time when an Annotation has been reviewed. */
    "annotationCurationDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationCurationDateTime'>;
    /** To describe an Annotation. */
    "annotationDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationDescription'>;
    /** To identify an Annotation. */
    "annotationId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationId'>;
    /** To name an Annotation. */
    "annotationName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationName'>;
    /** To estimate the saliency of an Annotation. */
    "annotationSaliency": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationSaliency'>;
    /** To define a type of Annotation. */
    "annotationType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#annotationType'>;
    /** Range: string or CountryCode. */
    "appliesOutOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#appliesOutOf'>;
    /** To identify the media resource to which the Rating applies. */
    "appliesTo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#appliesTo'>;
    /** The Asset to which Rights apply. */
    "applyTo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#applyTo'>;
    /** Range: Agent or string */
    "approvedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#approvedBy'>;
    /** To define a type of artefact. */
    "Artefact_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Artefact_Type'>;
    /** To identify and describe artefacts used in a production (on and behind the stage). */
    "Artefact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Artefact'>;
    /** To flag the availability of an Artefact. */
    "artefactAvailability": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactAvailability'>;
    /** The height of the box containing the Artefact. */
    "artefactBoxHeight": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactBoxHeight'>;
    /** The coordinates on a vertical axis of the position of the top left corner of the box containing the Artefact. */
    "artefactBoxTopLeftCornerLineNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactBoxTopLeftCornerLineNumber'>;
    /** The coordinates on an horizontal axis of the position of the top left corner of the box containing the Artefact. */
    "artefactBoxTopLeftCornerPixelNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactBoxTopLeftCornerPixelNumber'>;
    /** The width of the box containing the Artefact. */
    "artefactBoxWidth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactBoxWidth'>;
    /** To specify the brand of an Artefact. */
    "artefactBrand": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactBrand'>;
    /** To provide the clour(s) of an Artefact. */
    "artefactColour": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactColour'>;
    /** To provide a contextual comment about an Artefact. */
    "artefactComment": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactComment'>;
    /** The date when an Artefact was purchased. . */
    "artefactDateOfPurchase": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactDateOfPurchase'>;
    /** The date when an Artefact was sold. */
    "artefactDateOfSell": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactDateOfSell'>;
    /** A description of an Artefact. */
    "artefactDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactDescription'>;
    /** Range: string or Identifier. */
    "artefactId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactId'>;
    /** To specify a model of an Artefact. */
    "artefactModel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactModel'>;
    /** A name associated with an Artefact. */
    "artefactName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactName'>;
    /** To specify the period associated with an Artefact. */
    "artefactPeriod": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactPeriod'>;
    /** To specifythe price of an Artefact. */
    "artefactPriceAmount": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactPriceAmount'>;
    /** To specify a reference of an Artefact. */
    "artefactReference": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactReference'>;
    /** To specify the style associated with an Artefact. */
    "artefactStyle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactStyle'>;
    /** Range: string or Artefact_type. */
    "artefactType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactType'>;
    /** To provide information on the usage history of an Artefact. */
    "artefactUsageHistory": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactUsageHistory'>;
    /** To specify a website where more 	information can be found on the Artefact. */
    "artefactWebsite": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#artefactWebsite'>;
    /** To specify the aspect ratio. */
    "aspectRatio": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#aspectRatio'>;
    /** To define a type of asset. */
    "Asset_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Asset_Type'>;
    /**
     * The Class "Asset" is an
     *             object to which an identifier will be associated at commissioning. It will serve as a
     *             central reference point to manage rights associated to EditorialObjects, Resources,
     *             MediaResources or Essences, and PublicationEvents (distribution and exploitation
     *             conditions).
     */
    "Asset": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Asset'>;
    /** To provide a description of an Asset. */
    "assetDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#assetDescription'>;
    /** Range: an Identifier or anyURI or string. */
    "assetId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#assetId'>;
    /** To provide a name of an Asset. */
    "assetName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#assetName'>;
    /** Range: string or anyURI or Concept. */
    "assetType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#assetType'>;
    /** To describe a feeling summarising the atmosphere. */
    "Atmosphere": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Atmosphere'>;
    /**
     * The target audience (target region, target
     *             audience category but also parental guidance recommendation) for which the media
     *             resource is intended.
     */
    "AudienceLevel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudienceLevel'>;
    /**
     * The audience by which the Resource can be
     *             seen according to ratings like MPAA  (http://en.wikipedia.org/wiki/Motion_picture_rating_system) or other organisational / national / local standards.
     */
    "AudienceRating": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudienceRating'>;
    /** To define the technique use to measure an audience score. */
    "AudienceScoreRecordingTechnique": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudienceScoreRecordingTechnique'>;
    /** The audio bitrate. */
    "audioBitRate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioBitRate'>;
    /** The max audio bitrate. */
    "audioBitRateMax": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioBitRateMax'>;
    /** The audio bitrate mode. */
    "audioBitRateMode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioBitRateMode'>;
    /** To define the function of an AudioChannel. */
    "AudioChannelFunction": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioChannelFunction'>;
    /**
     * The total number of audio channels contained in
     *             the MediaResource.
     */
    "audioChannelNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioChannelNumber'>;
    /** To define the purpose of an AudioChannel. */
    "AudioChannelPurpose": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioChannelPurpose'>;
    /** To provide information about an audio codec. */
    "AudioCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioCodec'>;
    /** to define a type of AudioContent. */
    "AudioContent_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioContent_Type'>;
    /**
     * An audioContent defines one component of a programme (e.g. background
     * 				music), its association with an audioGroup (e.g. a 2.0 audioPackFormat of
     * 				audioChannelFormats for stereo reproduction), its association with an
     * 				audioStreamFormat, and its set of loudness parameters.
     */
    "AudioContent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioContent'>;
    /** A Track containing audio description. */
    "AudioDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioDescription'>;
    /** The encoding format for the audio. */
    "AudioEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioEncodingFormat'>;
    /** The encoding level as defined in specifications. */
    "audioEncodingLevel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioEncodingLevel'>;
    /** The encoding profile as defined in specifications. */
    "audioEncodingProfile": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioEncodingProfile'>;
    /** To define an AudioFormat. */
    "AudioFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioFormat'>;
    /** To define an audio object in reference to the Audio Definition Model (ADM) */
    "AudioObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioObject'>;
    /** to define a type of AudioProgramme. */
    "AudioProgramme_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioProgramme_Type'>;
    /**
     * A set of one or more audioContent that derive from the same material,
     * 				i.e. an audioMultiplex, and the definition of its multiplexed audioContents (e.g.
     * 				foreground and commentary, background music).
     */
    "AudioProgramme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioProgramme'>;
    /** An audioStreamFormat describes a decodable signal - PCM signal or a Dolby E stream for example. It is composed of one or more AudioTracks. */
    "AudioStream": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioStream'>;
    /**
     * An audioTrack is the basic audio data container of a medium. Attribute is
     * 				an unambiguous reference to this container in a given medium.
     */
    "AudioTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioTrack'>;
    /**
     * The configuration of audio tracks contained in
     *             the MediaResource.
     */
    "audioTrackConfiguration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioTrackConfiguration'>;
    /**
     * The total number of audio tracks contained in
     *             the MediaResource.
     */
    "audioTrackNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#audioTrackNumber'>;
    /** To describe the purpose of an AudioTrack e.g. dubbing. */
    "AudioTrackPurpose": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#AudioTrackPurpose'>;
    /** To define a type of Award. */
    "Award_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Award_Type'>;
    /** To describe an Award and associated information. */
    "Award": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Award'>;
    /** To provide an Award ceremony name. */
    "awardCeremony": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#awardCeremony'>;
    /** To provide an date when an Award was delivered. */
    "awardDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#awardDate'>;
    /** To provide a description for an Award. */
    "awardDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#awardDescription'>;
    /** Range: string or Identifier */
    "awardId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#awardId'>;
    /** To provide the name of an Award. */
    "awardName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#awardName'>;
    /** To define a type of Award. */
    "awardType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#awardType'>;
    /** Documents of various nature. */
    "BibliographicalObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BibliographicalObject'>;
    /** To record a biography. */
    "Biography": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Biography'>;
    /**
     * To provide the bitdepth at which the
     *             MediaResource has been encoded.
     */
    "bitDepth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#bitDepth'>;
    /**
     * To provide the bitrate at which the
     *             MediaResource can be played in bits/second. Current bitrate if constant, and average bitrate if variable.
     */
    "bitRate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#bitRate'>;
    /** The maximum bitrate when variable, in bits per second. */
    "bitRateMax": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#bitRateMax'>;
    /**
     * A flag to indicate if the bit rate is fixed or
     *             variable.
     */
    "bitRateMode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#bitRateMode'>;
    /**
     * To provide the overall bitrate at which the
     *             MediaResource can be played in bits/second. Current bitrate if constant, and average bitrate if variable.
     */
    "bitRateOverall": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#bitRateOverall'>;
    /** The FIMS BMContent. */
    "BMContent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BMContent'>;
    /** The FIMS Essence */
    "BMEssence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BMEssence'>;
    /** A template describe as a BMEssence. */
    "BMTemplate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BMTemplate'>;
    /** To provide a bookmark. */
    "bookmark": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#bookmark'>;
    /**
     * A group of EditorialObjects having a Brand as a
     *             common denominator.
     */
    "Brand": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Brand'>;
    /** To describe a breaking news. */
    "BreakingNewsItem": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BreakingNewsItem'>;
    /** To define a type of business object. */
    "BusinessObject_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BusinessObject_Type'>;
    /**
     * An image, a document, an annotation
     *             (descriptive textual metadata or audio/video tag), a tag (time related in audiovisual
     *             media resources), or an audiovisual media resource (optionally composed of one or more
     *             fragment / part and / or audio, video data tracks). Other types of BusinessObjects may
     *             be defined as subclasses.
     */
    "BusinessObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#BusinessObject'>;
    /** To provide a description of an BusinessObject. */
    "businessObjectDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#businessObjectDescription'>;
    /** Range: an Identifier or anyURI or string. */
    "businessObjectId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#businessObjectId'>;
    /** To provide a name of an BusinessObject. */
    "businessObjectName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#businessObjectName'>;
    /** A type attributed to a BusinessObject. */
    "businessObjectType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#businessObjectType'>;
    /**
     * To signal the presence of hard of hearing
     *             captioning.
     */
    "Captioning": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Captioning'>;
    /**
     * To define the format of captioning.
     *             Captioning's main use isfor hard of hearing transcription. This is provided as
     *             free text in an annotation label or as an identifier pointing to a term in a
     *             classification scheme.
     */
    "CaptioningFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CaptioningFormat'>;
    /**
     * A member of the cast list (a list of performers/actors and associated fictitious
     *             characters).
     */
    "Cast": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Cast'>;
    /** E.g. a fictitious contact / person. */
    "Character": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Character'>;
    /** To provide the description of a Character. */
    "characterDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#characterDescription'>;
    /** To identify the end character index of the portion of text to which the Annotation applies. */
    "characterEndIndex": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#characterEndIndex'>;
    /** To specify the name of a Character. */
    "characterName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#characterName'>;
    /** To identify the start character index of the portion of text to which the Annotation applies. */
    "characterStartIndex": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#characterStartIndex'>;
    /** To allocate a city code. */
    "CityCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CityCode'>;
    /** For use in models where Clip is common. */
    "Clip": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Clip'>;
    /** Identifies relationship between a digital instantiation of a Resource and its direct copy, with no generational loss. */
    "clonedTo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#clonedTo'>;
    /**
     * Closed captioning is provided as separate
     *             content.
     */
    "ClosedCaptions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ClosedCaptions'>;
    /**
     * Closed subtitles are provided as separate
     *             content.
     */
    "ClosedSubtitling": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ClosedSubtitling'>;
    /** To provide information on a codec. */
    "Codec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Codec'>;
    /** To provide information on the product family of the Codec. */
    "codecFamily": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#codecFamily'>;
    /** Range: string or Identifier. */
    "codecId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#codecId'>;
    /** To provide a name for the Codec, e.g. a product name. */
    "codecName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#codecName'>;
    /** To provide information on the version of the Codec. */
    "codecVersion": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#codecVersion'>;
    /**
     * A group of EditorialObjects. There can be many
     *             types of collections for which specific sub-classes should be defined. In the worl of
     *             archives, A collection corresponds to all items belonging to an individual /
     *             collector.
     */
    "Collection": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Collection'>;
    /**
     * The CoulourSpace of a VideoResource. A
     *             ColourSpace is defined as free text in an annotation label or as an identifier pointing
     *             to a term in a classification scheme such as
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_ColourCodeCS.rdf.
     */
    "ColourSpace": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ColourSpace'>;
    /** To provide a comment. */
    "comments": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#comments'>;
    /** To identify a type of commercial content. */
    "CommercialCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CommercialCode'>;
    /** A component e.g. audio, video, data or else or a MediaResource or Essence. */
    "Component": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Component'>;
    /** A physical person. */
    "Contact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Contact'>;
    /** To identify an container codec, e.g. MXF */
    "ContainerCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContainerCodec'>;
    /** To define the conatiner encoding format. */
    "ContainerEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContainerEncodingFormat'>;
    /**
     * The definition of the container if available as
     *             a MIME type. This is provided as free text in an annotation label or as an identifier
     *             pointing to a term in a classification scheme. For more information:
     *             http://www.iana.org/assignments/media-types/application/index.html.
     */
    "ContainerMimeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContainerMimeType'>;
    /** To provide information about a particular type of content potentially sensitive. */
    "ContentAlert": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContentAlert'>;
    /** To define a code of EditorialFormat */
    "ContentEditorialCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContentEditorialCode'>;
    /** To define an EditorialFormat */
    "ContentEditorialFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContentEditorialFormat'>;
    /** To define a type of contract. */
    "ContractType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ContractType'>;
    /**
     * To provide a copyright
     *             statement.
     */
    "Copyright": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Copyright'>;
    /** To identify and describe Costumes used in productions. */
    "Costume": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Costume'>;
    /** To specify the gender associated with a Costume. */
    "costumeGender": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#costumeGender'>;
    /** To collect all information available useful to determine the size of a Costume. */
    "costumeSizeInformation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#costumeSizeInformation'>;
    /** Range: a string or a Concept code from a vocabulary, e.g. Getty */
    "costumeTexture": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#costumeTexture'>;
    /** To specify a type of Costume. */
    "costumeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#costumeType'>;
    /** To define a costume type. */
    "CostumeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CostumeType'>;
    /** To identify a country by its ISO code. */
    "CountryCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CountryCode'>;
    /**
     * To provide information on possible restrictions
     *             regarding the temporal and spatial coverage for publication.
     */
    "CoverageRestrictions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CoverageRestrictions'>;
    /** A set of creative commons rights. */
    "CreativeCommons": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CreativeCommons'>;
    /** A member of the Crew. */
    "Crew": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Crew'>;
    /** To identify a style of Cuisine. */
    "CuisineStyle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CuisineStyle'>;
    /** To identify a currency by its ISO code. */
    "CurrencyCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#CurrencyCode'>;
    /**
     * To provide addtional technical information on
     *             the characteristics of data streams in a MediaResource including but not limited to
     *             AncillaryData, Subtilting and Captioning. Additional specific data format may be defined
     *             as subclasses of DataFormat.
     */
    "DataFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#DataFormat'>;
    /**
     * Ancillary data track e.g. Â¨captioning"
     *             or "subtitling" in addition to video and audio tracks.
     */
    "DataTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#DataTrack'>;
    /** A date associated to an Asset. */
    "date": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#date'>;
    /** The date when the Asset was archived. */
    "dateArchived": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateArchived'>;
    /** The date when the Asset was first broadcast publicly on television or radio or via streaming. */
    "dateBroadcast": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateBroadcast'>;
    /** The date of creation of the Asset. */
    "dateCreated": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateCreated'>;
    /** The date when the Resource was deleted. */
    "dateDeleted": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateDeleted'>;
    /** The date when the Resource was digitised. */
    "dateDigitised": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateDigitised'>;
    /** The date when the Resource was first made available to the public for purchase, download, or online access. */
    "dateDistributed": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateDistributed'>;
    /** The date when the Resource was ingested/acquired in institutional holdings. */
    "dateIngested": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateIngested'>;
    /** The date when the Asset was issued. */
    "dateIssued": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateIssued'>;
    /** The date when the licence for the Asset begins. */
    "datelicensed": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#datelicensed'>;
    /** The date when the licence for the Asset ends. */
    "datelicenseEnd": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#datelicenseEnd'>;
    /** The date when the Resource was copied or converted from an obsolete or endangered original format to a more updated format for preservation. */
    "dateMigrated": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateMigrated'>;
    /** To indicate the date at which the Asset has been modified. */
    "dateModified": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateModified'>;
    /** The date when the Resource was converted from its original format into a format pre-selected by the institution for preservation. */
    "dateNormalized": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateNormalized'>;
    /** The date when a Contact/Person is born. */
    "dateOfBirth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateOfBirth'>;
    /** The date when a Contact/Person has passed away. */
    "dateOfDeath": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateOfDeath'>;
    /** The date when a Contact/Person has retired. */
    "dateOfRetirement": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateOfRetirement'>;
    /** The date of production of the Asset. */
    "dateProduced": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateProduced'>;
    /** The date when the Resource was first made available to the public for purchase, download, or online access. */
    "dateReleased": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateReleased'>;
    /** The date when the Asset was moved from one digital or physical location to another. */
    "dateTransferred": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateTransferred'>;
    /** The most recent date when the Resource was confirmed to be valid through manual or digital QC. */
    "dateValidated": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dateValidated'>;
    /**
     * A department within and
     *             organisation.
     */
    "Department": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Department'>;
    /**
     * A DepictedEVent is fictitious or historical or
     *             other sort of Event that the content of the BusinessObject or resource relates
     *             to.
     */
    "DepictedEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#DepictedEvent'>;
    /** To identify a new version derived from the original. */
    "derivedTo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#derivedTo'>;
    /**
     * This can be specialised by using sub-properties
     *             like defined in http://www.ebu.ch/metadata/cs/web/ebu_DescriptionTypeCodeCS_p.xml.htm
     *             implemented as examples as e.g. 'summary' or
     *             'script'.
     */
    "description": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#description'>;
    /**
     * The Data Identifier word (along with the SDID,
     *             if used), indicates the type of ancillary data that the packet corresponds
     *             to.
     */
    "DID": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#DID'>;
    /** Describes the physical dimensions of a MediaResource, with units of measure concatenated to become part of the value. */
    "dimensions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dimensions'>;
    /**
     * To provide a disclaimer of any
     *             form.
     */
    "Disclaimer": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Disclaimer'>;
    /** The description of a Dish. */
    "dishDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dishDescription'>;
    /** The name of a Dish. */
    "dishName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dishName'>;
    /** The aspect ratio when displayed. */
    "displayAspectRatio": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#displayAspectRatio'>;
    /** The order in which an Agent appears in a scene. */
    "displayOrder": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#displayOrder'>;
    /**
     * To describe a publication in the form of a
     *             document e.g. a html webpage (news item) or a pdf document e.g. a script.
     */
    "Document": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Document'>;
    /**
     * To provide technical information about the
     *             format of a document such as the orientation. This is provided as free text in an
     *             annotation label or as an identifier pointing to a term in a classification
     *             scheme.
     */
    "DocumentFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#DocumentFormat'>;
    /** Provides additional information about a NewsItem, e.g. date and place, subject. */
    "Dopesheet": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Dopesheet'>;
    /** Range: string or Language. */
    "dubbedTo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#dubbedTo'>;
    /** To provide information on the duration of an EditorialObject or MediaResource. */
    "duration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#duration'>;
    /** To provide a duration in edit units. */
    "durationEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#durationEditUnits'>;
    /**
     * To provide a duration as normal
     *             time.
     */
    "durationNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#durationNormalPlayTime'>;
    /** To provide information on the published / announced duration of an EditorialObject. */
    "durationPublished": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#durationPublished'>;
    /** To provide a published duration as normal play time. */
    "durationPublishedNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#durationPublishedNormalPlayTime'>;
    /**
     * The duration expressed as a
     *             timecode.
     */
    "durationTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#durationTimecode'>;
    /**
     * The duration expressed as a
     *             timecode with drop frames.
     */
    "durationTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#durationTimecodeDropFrame'>;
    /** To define a type of editorial object. */
    "EditorialObject_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#EditorialObject_Type'>;
    /**
     * In the audiovisual domain, the Class
     *             EditorialObject transforms a commissioned concept into an editorial definition of a
     *             MediaResource before fabrication (in the Production Domain) and Distribution (in the
     *             Distribution Domain). An EditorialObject is a set of descriptive metadata summarising
     *             e.g. editing decisions. An EditorialObject can also be a part of an EditorialObject,
     *             which is defined by its start time and duration. An EditorialObject can also be a group
     *             of EditorialObjects. For example a series composed of episodes is defined as an
     *             EditorialObject.
     */
    "EditorialObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#EditorialObject'>;
    /** To provide a description of an EditorialObject. */
    "editorialObjectDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#editorialObjectDescription'>;
    /** Range: an Identifier or anyURI or string. */
    "editorialObjectId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#editorialObjectId'>;
    /** A name attributed to an EditorialObject. */
    "editorialObjectName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#editorialObjectName'>;
    /** A type attributed to an EditorialObject. */
    "editorialObjectType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#editorialObjectType'>;
    /**
     * The edit unit is e.g. the inverse of the audio
     *             sample rate or video frame rate.
     */
    "editUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#editUnit'>;
    /** To provide information on the education. */
    "education": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#education'>;
    /** To define a type of emotion. */
    "Emotion_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Emotion_Type'>;
    /** A class to log Emotions. */
    "Emotion": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Emotion'>;
    /** The description of an Emotion. */
    "emotionDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionDescription'>;
    /** The edit unit number at which the Emotion occurs. */
    "emotionEditUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionEditUnit'>;
    /** Range: anyURI or string or Identifier */
    "emotionId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionId'>;
    /** A name attributed to an Emotion. */
    "emotionName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionName'>;
    /** The normal play time at which the Emotion occurs. */
    "emotionNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionNormalPlayTime'>;
    /** The timecode at which the Emotion occurs. */
    "emotionTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionTimecode'>;
    /** The timecode (dropframe) at which the Emotion occurs. */
    "emotionTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionTimecodeDropFrame'>;
    /** To identify a timestamp at which an Emotion can be seen. */
    "emotionTimestamp": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionTimestamp'>;
    /** A type of Emotion. */
    "emotionType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#emotionType'>;
    /**
     * To provide a definition of the encoding format
     *             for audio and video. This is provided as free text in an annotation label or as an
     *             identifier pointing to a term in a classification scheme e.g.
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_AudioCompressionCodeCS.rdf or
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_VideoCompressionCodeCS.rdf.
     */
    "EncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#EncodingFormat'>;
    /** To define an encoding level. */
    "encodingLevel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#encodingLevel'>;
    /** The encoding profile as defined in specifications. */
    "encodingProfile": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#encodingProfile'>;
    /** To define an end timestamp, e.g. the end point of a MediaResource. */
    "end": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#end'>;
    /** The end time in edit units. */
    "endEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endEditUnits'>;
    /**
     * The end time expressed using a time
     *             expression.
     */
    "endNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endNormalPlayTime'>;
    /** The offset end time in edit units. */
    "endOffsetEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endOffsetEditUnits'>;
    /** The offset end time in normal play time. */
    "endOffsetNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endOffsetNormalPlayTime'>;
    /** The offset end timecode. */
    "endOffsetTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endOffsetTimecode'>;
    /** The offset end timecode dropframe. */
    "endOffsetTimecodedropframe": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endOffsetTimecodedropframe'>;
    /**
     * An end time expressed as
     *             timecode.
     */
    "endTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endTimecode'>;
    /**
     * An end time expressed as
     *             timecode with drop frames.
     */
    "endTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#endTimecodeDropFrame'>;
    /** To describe an episode in a series. */
    "Episode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Episode'>;
    /** The Episode Number */
    "episodeNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#episodeNumber'>;
    /** The Episode Number in a season */
    "episodeNumberInSeason": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#episodeNumberInSeason'>;
    /** The Episode Number in a series */
    "episodeNumberInSeries": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#episodeNumberInSeries'>;
    /** Essence is content ready for distribution. Essence can become a MediaResource in further production processes. */
    "Essence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Essence'>;
    /**
     * Additional types of event shall be defined as
     *             new sub-classes of event.
     */
    "Event": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Event'>;
    /** To provide a description for an Event. */
    "eventDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventDescription'>;
    /** The duration of an Event. */
    "eventDuration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventDuration'>;
    /** The end date of an Event. */
    "eventEndDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventEndDate'>;
    /** The end date and time of an Event. */
    "eventEndDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventEndDateTime'>;
    /** The end time of an Event. */
    "eventEndTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventEndTime'>;
    /** An identifier attributed to an Event. */
    "eventId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventId'>;
    /** To provide a name for an Event. */
    "eventName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventName'>;
    /** The period of time during which an Event has occured. */
    "eventPeriod": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventPeriod'>;
    /** The start date of an Event. */
    "eventStartDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventStartDate'>;
    /** The start date and time of an Event. */
    "eventStartDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventStartDateTime'>;
    /** The start time of an Event. */
    "eventStartTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventStartTime'>;
    /** Range: Event or string */
    "eventType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#eventType'>;
    /** To define a type of event. */
    "EventType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#EventType'>;
    /** To define a type of exclusity rights. */
    "ExclusivityType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ExclusivityType'>;
    /**
     * To highlight potential exploitation
     *             issues.
     */
    "ExploitationIssues": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ExploitationIssues'>;
    /** To provide information on the family of a Person. */
    "familyInformation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#familyInformation'>;
    /** The family name of a Person. */
    "familyName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#familyName'>;
    /** The editorial object for a feature film. */
    "Feature": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Feature'>;
    /** To describe a fictional Event. */
    "FictionalEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#FictionalEvent'>;
    /** To describe a fictional Location. */
    "FictionalLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#FictionalLocation'>;
    /** To define a fictional Organisation. */
    "FictionalOrganisation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#FictionalOrganisation'>;
    /** To describe a fictional Person, e.g. a character in a drama. */
    "FictionalPerson": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#FictionalPerson'>;
    /**
     * A file format for Resources other than
     *             audiovisual resources. The format is defined as free text or pointing at a term in a
     *             classification scheme e.g.
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_FileFormatCS.rdf.
     */
    "FileFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#FileFormat'>;
    /** Provides the size of a MediaResource in bytes. */
    "fileSize": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#fileSize'>;
    /** To flag this is a first showing PublicationEvent. */
    "firstShowing": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#firstShowing'>;
    /** To falg this is a first showing  PublicationEvent on this service. */
    "firstShowingThisService": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#firstShowingThisService'>;
    /** Provides a user/audience-generated description, tag, or label for resource content. */
    "folksonomy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#folksonomy'>;
    /** A link to an Asset precedinging the current Asset in an ordered sequence. */
    "followsInSequence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#followsInSequence'>;
    /** To describe Food shown or consumed in productions. */
    "Food": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Food'>;
    /** To define a category of Food. */
    "foodCategory": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#foodCategory'>;
    /** The Food ingredients or Food items. */
    "foodIngredient": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#foodIngredient'>;
    /** To define a style of food. */
    "FoodStyle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#FoodStyle'>;
    /**
     * The format provides technical information on
     *             the format of a Resource. A BusinessObject can be instantiated in a variety of Resources
     *             each in a particular Format. Other specific data formats may be defined as subclasses of
     *             format.
     */
    "Format": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Format'>;
    /** A version identifier attributed to a Format. */
    "formatId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#formatId'>;
    /** A version identifier attributed to a Format. */
    "formatVersionId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#formatVersionId'>;
    /** The height of a video frame. */
    "frameHeight": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#frameHeight'>;
    /** The unit used to measure the height of a frame. */
    "frameHeightUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#frameHeightUnit'>;
    /** The unit used to express the frame rate of a MediaResource in frames/second. */
    "frameRate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#frameRate'>;
    /**
     * The unit used to express the frame width or
     *             height. The unit by default is 'pixel'.
     */
    "frameSizeUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#frameSizeUnit'>;
    /** The width of a video frame. */
    "frameWidth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#frameWidth'>;
    /** The unit used to measure the width of a frame. */
    "frameWidthUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#frameWidthUnit'>;
    /** A flag to indicate that the access to the PublicationEvent is 'free'. */
    "free": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#free'>;
    /** The gender of a Person e.g. male or female. */
    "gender": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#gender'>;
    /** Identifies the generation of a version of a resource, i.e. master, edit master, distribution copy, etc. */
    "Generation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Generation'>;
    /**
     * This class shall be used to provide information
     *             on the genre of the BusinessObject or Resource. This is provided as free text in an
     *             annotation label or as an identifier pointing to a term in a classification scheme e.g.
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_ContentGenreCS.rdf or
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_EditorialFormatCodeCS.rdf.
     */
    "Genre": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Genre'>;
    /** To identify geographical areas where content cannor be accessed. */
    "geoBlocking": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#geoBlocking'>;
    /** The given name of a Person. */
    "givenName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#givenName'>;
    /**
     * To define a collection / group of media
     *             resources, for example a series made of episodes.
     */
    "Group": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Group'>;
    /**
     * A textual description of a
     *             Group.
     */
    "groupDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#groupDescription'>;
    /** An identifier attributed to a Group. */
    "groupId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#groupId'>;
    /** The name attributed to a Group. */
    "groupName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#groupName'>;
    /** A type attributed to a Group. */
    "groupType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#groupType'>;
    /** Range: string or AccessConditions. */
    "hasAccessConditions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAccessConditions'>;
    /** Range: string or Agent. */
    "hasActionRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasActionRelatedAgent'>;
    /** Range: string or Scene. */
    "hasActionRelatedScene": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasActionRelatedScene'>;
    /**
     * A property to establish the relation between a
     *             Contact/Person and an Organisation.
     */
    "hasAffiliation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAffiliation'>;
    /** Range: a string or an anyURI (e,g, a URL to a webpage) or a Biography. */
    "hasAgentBiography": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentBiography'>;
    /** Range: string or CountryCode */
    "hasAgentCountryOfResidence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentCountryOfResidence'>;
    /** Range: a string or Language. */
    "hasAgentLanguage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentLanguage'>;
    /** Range: string or Agent. */
    "hasAgentMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentMember'>;
    /** Range: a string or CountryCode. */
    "hasAgentNationality": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentNationality'>;
    /** To indicate the place of residence of an Agent. */
    "hasAgentPlaceOfResidence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentPlaceOfResidence'>;
    "hasAgentRelatedPicture": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAgentRelatedPicture'>;
    /** To identify ancillary data in the media resource. */
    "hasAncillaryData": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAncillaryData'>;
    /** Range: string or AncillaryDataFormat */
    "hasAncillaryDataFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAncillaryDataFormat'>;
    /** To associate a breed code with an animal. */
    "hasAnimalBreedCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnimalBreedCode'>;
    /** To associate a colour code with an animal. */
    "hasAnimalColourCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnimalColourCode'>;
    /** To identify the role of an animal. */
    "hasAnimalRole": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnimalRole'>;
    /** To define the Annotation has a string or instance of an EBUCore class. */
    "hasAnnotationBody": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationBody'>;
    /** To define the purpose of an Annotation. */
    "hasAnnotationPurpose": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationPurpose'>;
    /** To identify an Agent subject of the Annotation. */
    "hasAnnotationRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationRelatedAgent'>;
    /** To identify an Artefact subject of the Annotation. */
    "hasAnnotationRelatedArtefact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationRelatedArtefact'>;
    /** To identify an Event subject of the Annotation. */
    "hasAnnotationRelatedEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationRelatedEvent'>;
    /** To identify a Location subject of the Annotation. */
    "hasAnnotationRelatedLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationRelatedLocation'>;
    /** To define the target object to which the Annotation applies. */
    "hasAnnotationTarget": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAnnotationTarget'>;
    /** Range: string or Agent */
    "hasArtefactBuyer": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactBuyer'>;
    /** Range: string or Agent */
    "hasArtefactCreator": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactCreator'>;
    /** Range: string or Location */
    "hasArtefactLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactLocation'>;
    /** Range: string or Agent */
    "hasArtefactOwner": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactOwner'>;
    /** Range: string or CurrencyCode */
    "hasArtefactPriceCurrency": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactPriceCurrency'>;
    /** Range: string or Agent */
    "hasArtefactRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactRelatedAgent'>;
    /** Range: string or EditorialObject */
    "hasArtefactRelatedEditorialObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactRelatedEditorialObject'>;
    /** Range: string or Location */
    "hasArtefactRelatedLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactRelatedLocation'>;
    /** Range: string or PhysicalResource */
    "hasArtefactRelatedPhysicalResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactRelatedPhysicalResource'>;
    /** Range: string or Resource */
    "hasArtefactRelatedResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactRelatedResource'>;
    /** Range: string or Agent */
    "hasArtefactRetailer": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactRetailer'>;
    /** Range: string or Agent */
    "hasArtefactSupplier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasArtefactSupplier'>;
    /** To associate a BusinessObject with an Asset. */
    "hasAssetRelatedBusinessObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssetRelatedBusinessObject'>;
    /** To associate an EditorialObject with an Asset. */
    "hasAssetRelatedEditorialObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssetRelatedEditorialObject'>;
    /** To identify a related MediaResource. */
    "hasAssetRelatedMediaResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssetRelatedMediaResource'>;
    /** To identify a related Resource. */
    "hasAssetRelatedResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssetRelatedResource'>;
    "hasAssociatedArtefact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssociatedArtefact'>;
    /** To identify an associated asset. */
    "hasAssociatedAsset": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssociatedAsset'>;
    /** To define a Relation. */
    "hasAssociatedRelation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAssociatedRelation'>;
    /** Range: string or AudienceScorerecordingTechnique. */
    "hasAudienceScoreRecordingTechnique": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudienceScoreRecordingTechnique'>;
    /** Range:string or AudioCodec */
    "hasAudioCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudioCodec'>;
    /** Range:string or AudioContent_Type. */
    "hasAudioContentType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudioContentType'>;
    /**
     * To signal the presence of
     *             AudioDescription.
     */
    "hasAudioDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudioDescription'>;
    /** Range: string or AudioEncodingFormat */
    "hasAudioEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudioEncodingFormat'>;
    /** Range:string or AudioProgramme_Type */
    "hasAudioProgrammeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudioProgrammeType'>;
    /** To identify AudioTracks in the Resource. */
    "hasAudioTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAudioTrack'>;
    /** Range: string or Agent. */
    "hasAwardRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAwardRelatedAgent'>;
    /** To link a BusinessObject to an Award. */
    "hasAwardRelatedBusinessObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAwardRelatedBusinessObject'>;
    /** An Event e.g. a ceremony, associated to an Award. */
    "hasAwardRelatedEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasAwardRelatedEvent'>;
    /** Range: a string or an Award. */
    "hasBeenAwarded": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasBeenAwarded'>;
    /**
     * To signal the presence of
     *             Captioning.
     */
    "hasCaptioning": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCaptioning'>;
    /** Range: string or CaptioningFormat */
    "hasCaptioningFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCaptioningFormat'>;
    /** Range: string or Agent */
    "hasCaptioningSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCaptioningSource'>;
    /** A member of the cast. */
    "hasCastMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCastMember'>;
    /** Range: a string or a Role/Concept from a controlled vocabulary. */
    "hasCastRole": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCastRole'>;
    /** The logo of a Publication Channel */
    "hasChannelLogo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasChannelLogo'>;
    /**
     * To associate PublicationEvents with
     *             PublicationChannels.
     */
    "hasChannelPublicationEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasChannelPublicationEvent'>;
    /** Range: a string or a "fictitious" person - Character. */
    "hasCharacter": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCharacter'>;
    /** Range: string or Codec */
    "hasCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCodec'>;
    /** Range: string or Agent. */
    "hasCodecVendor": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCodecVendor'>;
    /** Range: string or Concept */
    "hasColourSpace": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasColourSpace'>;
    /** Range: a link to a Contact or a string. */
    "hasContact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasContact'>;
    /** Range: string or ContainerCodec */
    "hasContainerCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasContainerCodec'>;
    /** Range: string or ContainerEncodingFormat */
    "hasContainerEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasContainerEncodingFormat'>;
    /** Range: string or MimeType */
    "hasContainerMimeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasContainerMimeType'>;
    /** Range: string or ContentEditorialFormat. */
    "hasContentEditorialFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasContentEditorialFormat'>;
    /** Range: string or Agent */
    "hasContributor": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasContributor'>;
    /** Range: string or Copyright. */
    "hasCopyright": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCopyright'>;
    /** Range: a string or Costume_type e.g. a Concept code from a vocabulary, e.g. Getty. */
    "hasCostumeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCostumeType'>;
    /** Range: string or CountryCode */
    "hasCountryOfBirth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCountryOfBirth'>;
    /** Range: string or CountryCode */
    "hasCountryOfDeath": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCountryOfDeath'>;
    /** Range: string or Event or Location */
    "hasCoverage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCoverage'>;
    /** Range: string or CoverageRestrictions. */
    "hasCoverageRestrictions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCoverageRestrictions'>;
    /** Range: string or Location. */
    "hasCreationLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCreationLocation'>;
    /** Range: string or Creative Commons. */
    "hasCreativeCommons": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCreativeCommons'>;
    /** Range: string or Agent. */
    "hasCreator": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCreator'>;
    /** A member of the crew. */
    "hasCrewMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCrewMember'>;
    /** Range: a string or a Role/Concept from a controlled vocabulary. */
    "hasCrewRole": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCrewRole'>;
    /** Range: a string or CountryCode */
    "hasCuisineOrigin": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCuisineOrigin'>;
    /** Range: a string or CuisineStyle */
    "hasCuisineStyle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasCuisineStyle'>;
    /** Range: string or DataFormat */
    "hasDataFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDataFormat'>;
    /** To identify DataTracks in the Resource. */
    "hasDataTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDataTrack'>;
    /** Range: string or Department. */
    "hasDepartment": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDepartment'>;
    /** Range: string or Disclaimer. */
    "hasDisclaimer": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDisclaimer'>;
    /** Range: string or Document format */
    "hasDocumentFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDocumentFormat'>;
    /** Range: string or Dopesheet. */
    "hasDopesheet": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDopesheet'>;
    /** Range: string or Language. */
    "hasDubbedLanguage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasDubbedLanguage'>;
    /** Range: string or Identifier. */
    "hasEidrIdentifier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEidrIdentifier'>;
    /** Range: String or Agent */
    "hasEmotionRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEmotionRelatedAgent'>;
    /** Range: string or Scene */
    "hasEmotionRelatedScene": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEmotionRelatedScene'>;
    /** Range: string or Encoding format */
    "hasEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEncodingFormat'>;
    /** Range: string or Episode. */
    "hasEpisode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEpisode'>;
    /** Range: string or Agent */
    "hasEventRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventRelatedAgent'>;
    /** An artefact related to an Event. */
    "hasEventRelatedArtefact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventRelatedArtefact'>;
    /** A BusinessObject relates to an Event. */
    "hasEventRelatedBusinessObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventRelatedBusinessObject'>;
    /** An Event relates to an Event. */
    "hasEventRelatedEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventRelatedEvent'>;
    /** Range: a Location or a string */
    "hasEventRelatedLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventRelatedLocation'>;
    /** A Resource relates to an Event. */
    "hasEventRelatedResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventRelatedResource'>;
    /** To define a type of Event. */
    "hasEventType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasEventType'>;
    /** Range: string or Exploitation Issues. */
    "hasExploitationIssues": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasExploitationIssues'>;
    /** Range: string or FileFormat. */
    "hasFileFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasFileFormat'>;
    /** Range: string or FoodStyle. */
    "hasFoodStyle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasFoodStyle'>;
    /** Range: string, Format or any Format-related Concept */
    "hasFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasFormat'>;
    /** Range: Identifier or string or anyURI. */
    "hasFormatId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasFormatId'>;
    /**
     * Identifies the generation of a version of a resource, i.e. master,
     *       edit master, distribution copy, etc.
     */
    "hasGeneration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasGeneration'>;
    /**
     * To define a Genre/category associated to the
     *             BusinesssObject.
     */
    "hasGenre": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasGenre'>;
    /**
     * The hash value associated to a Resource. There
     *             are different methods / algorithms to calculate hash values, which can be defined as
     *             subproperties.
     */
    "hashValue": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hashValue'>;
    /** Range: string or Identifier. */
    "hasIdentifier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasIdentifier'>;
    /** Range: Concept or string */
    "hasIdentifierType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasIdentifierType'>;
    /** A locator / URI or a Picture. */
    "hasIdPicture": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasIdPicture'>;
    /** Range: string or Codec */
    "hasImageCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasImageCodec'>;
    /** Range: string or ImageFormat */
    "hasImageFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasImageFormat'>;
    /** Range: string or Identifier. */
    "hasIMediaIdentifier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasIMediaIdentifier'>;
    /** Range: string or IPR Restrictions. */
    "hasIPRRestrictions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasIPRRestrictions'>;
    /** Range: string or Identifier. */
    "hasIsanIdentifier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasIsanIdentifier'>;
    /** Range: string or KeyCareerEvent */
    "hasKeyCareerEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasKeyCareerEvent'>;
    /** Range: string or KeyPersonalEvent */
    "hasKeyPersonalEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasKeyPersonalEvent'>;
    /** Range: Keyword or string or any URI from a controlled vocabulary */
    "hasKeyword": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasKeyword'>;
    /** Range: string or Language. */
    "hasLanguage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLanguage'>;
    /** Range: string or Licensing. */
    "hasLicensing": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLicensing'>;
    /** Range: string or LocationCode. */
    "hasLocationCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocationCode'>;
    /** A picture associated with a Location. */
    "hasLocationPicture": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocationPicture'>;
    /** Range: a string or an Artefact. */
    "hasLocationRelatedArtefact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocationRelatedArtefact'>;
    /** Range: a string or an Event. */
    "hasLocationRelatedEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocationRelatedEvent'>;
    /** To identify a Resource associated with a Location. */
    "hasLocationRelatedResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocationRelatedResource'>;
    /** Range: string or LocationType. */
    "hasLocationType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocationType'>;
    /** A locator from where the MediaResource can be accessed. */
    "hasLocator": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLocator'>;
    /**
     * Logos can be used in a variety of contexts.
     *             Logo can be associated with an Organisation or a Service or a PublicationChannel.
     */
    "hasLogo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasLogo'>;
    /** A manifestation is the physical embodiment of work e.g. a tape, a file... */
    "hasManifestation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasManifestation'>;
    /** To identify the master of a Resource */
    "hasMaster": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMaster'>;
    /**
     * To define relation to MediaFragments
     *             withiin a MediaResource.
     */
    "hasMediaFragment": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMediaFragment'>;
    /** Range: string or Medium */
    "hasMedium": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMedium'>;
    /** To establish group/collection relationship between EditorialObjects. */
    "hasMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMember'>;
    /** To identify a PublicationPlan that forms part of another PublicationPlan. */
    "hasMemberPublicationPlan": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMemberPublicationPlan'>;
    /** To identify MetadataTracks in the Resource. */
    "hasMetadataTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMetadataTrack'>;
    /** Range: string or MimeType */
    "hasMimeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasMimeType'>;
    /** Range: string or ObjectType. */
    "hasObjectType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasObjectType'>;
    /** The logo representing an Organisation */
    "hasOrganisationLogo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasOrganisationLogo'>;
    /** Range: string or Staff. */
    "hasOrganisationStaff": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasOrganisationStaff'>;
    /** Range: string or Language. */
    "hasOriginalLanguage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasOriginalLanguage'>;
    /** To link a EditorialOject to a parent. */
    "hasParentEditorialObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasParentEditorialObject'>;
    /** To link a MediaResource to a parent. */
    "hasParentMediaResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasParentMediaResource'>;
    /**
     * To define Parts (segments, fragments, shots, etc.)
     *             within an EditorialObject.
     */
    "hasPart": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPart'>;
    /** To identify participating Agents. */
    "hasParticipatingAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasParticipatingAgent'>;
    /** A type of Part. */
    "hasPartType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPartType'>;
    /** Range: a locator/URI or a Picture. */
    "hasPictogram": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPictogram'>;
    /** To identify the place of birth. */
    "hasPlaceOfBirth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPlaceOfBirth'>;
    /** To identify the place of death. */
    "hasPlaceOfDeath": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPlaceOfDeath'>;
    /** Range: string or Agent. */
    "hasProducer": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasProducer'>;
    /** Range: a Location or string */
    "hasProductionLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasProductionLocation'>;
    /** Range: string, anyURI or Concept. */
    "hasProvenance": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasProvenance'>;
    /** The instance of an object sourced by the Provenance. */
    "hasProvenanceTarget": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasProvenanceTarget'>;
    /**
     * To associate PublicationEvents with
     *             PublicationChannels or as elements of a PublicationHistory or PublicationPlanning.
     */
    "hasPublicationEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublicationEvent'>;
    /** To provide the history of publication of an EditorailObject or MediaResource. */
    "hasPublicationHistory": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublicationHistory'>;
    /** Range: string or PublicationMedium. */
    "hasPublicationMedium": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublicationMedium'>;
    /** To identify a subplan of a publication plan. */
    "hasPublicationPlanMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublicationPlanMember'>;
    /** Range: string or PublicationPlan_type. */
    "hasPublicationPlanType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublicationPlanType'>;
    /** Range: string or Location */
    "hasPublicationRegion": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublicationRegion'>;
    /** To identify an Agent involved in the publication of the Resource or BusinessObject. */
    "hasPublisher": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasPublisher'>;
    /** Range: a string or a Rating. */
    "hasRating": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRating'>;
    /** Range: string or Agent. */
    "hasRatingProvider": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRatingProvider'>;
    /** Range: string or Agent. */
    "hasRatingSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRatingSource'>;
    /** To identify animals associate with an Asset. */
    "hasRelatedAnimal": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAnimal'>;
    /** Range: string or Artefact. */
    "hasRelatedArtefact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedArtefact'>;
    /** To identify related Assets. */
    "hasRelatedAsset": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAsset'>;
    /** To identify related Audio Content */
    "hasRelatedAudioContent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAudioContent'>;
    /** To identify related Audio Objects */
    "hasRelatedAudioObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAudioObject'>;
    /** A related audio programme */
    "hasRelatedAudioProgramme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAudioProgramme'>;
    /** To identify related Audio Tracks */
    "hasRelatedAudioTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAudioTrack'>;
    /** Range: string or Award. */
    "hasRelatedAward": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedAward'>;
    /** To identify related EditorialObjects. */
    "hasRelatedEditorialObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedEditorialObject'>;
    /** To establish a relation between a MediaResource and an Essence. */
    "hasRelatedEssence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedEssence'>;
    /**
     * A property to identify the 
     *             Events, all real or fictional, covered by the 
     *             EditorialObject.
     */
    "hasRelatedEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedEvent'>;
    /** To associate an Image with a BusinessObject. */
    "hasRelatedImage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedImage'>;
    /**
     * A property to identify the 
     *             Locations, all real or fictional, covered by the 
     *             EditorialObject.
     */
    "hasRelatedLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedLocation'>;
    /** To associate a Part of an Asset with a MediaFragment within the association MediaResource instantiating the Asset. */
    "hasRelatedMediaFragment": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedMediaFragment'>;
    /** To identify a MediaResource associated with an Asset or a BusinessObject or a PublicationEvent or another Resource. */
    "hasRelatedMediaResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedMediaResource'>;
    /** To associate a Picture with a BusinessObject or a Resource. */
    "hasRelatedPicture": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedPicture'>;
    /** Range: string or PublicationChannel */
    "hasRelatedPublicationChannel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedPublicationChannel'>;
    /** To identify the PublicationEvent associated with a MediaResource (manifestation of an EditorialObject). */
    "hasRelatedPublicationEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedPublicationEvent'>;
    /** Range, a string a URI or a Record. */
    "hasRelatedRecord": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedRecord'>;
    /** To identify a Resource associated with an Asset or a BusinessObject or a PublicationEvent or another Resource. */
    "hasRelatedResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedResource'>;
    /** Range: string or Service. */
    "hasRelatedService": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedService'>;
    /** A TextLine or free text related to an EditorialObject. */
    "hasRelatedTextLine": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelatedTextLine'>;
    /** Range: string or Agent. */
    "hasRelationSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRelationSource'>;
    /** A locator from where the Resource can be accessed. */
    "hasResourceLocator": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasResourceLocator'>;
    /** Range: string or Review. */
    "hasReview": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasReview'>;
    /** Range: string or Rights Clearance. */
    "hasRightsClearance": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRightsClearance'>;
    /** Range: a string or a Contact. */
    "hasRightsContact": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRightsContact'>;
    /** Range: a string or an Agent. */
    "hasRightsHolder": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRightsHolder'>;
    /** Range: a string or a Role/Concept from a controlled vocabulary. */
    "hasRole": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasRole'>;
    /** To identiify Seasons in a Series. */
    "hasSeason": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSeason'>;
    /** Range: string or Genre */
    "hasServiceGenre": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasServiceGenre'>;
    /** The Logo characterising a Service */
    "hasServiceLogo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasServiceLogo'>;
    /** Range: Location or string */
    "hasShootingLocation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasShootingLocation'>;
    /** A locator/URI to a resource or a Signing resource. */
    "hasSigning": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSigning'>;
    /** Range: string or SigningFormat. */
    "hasSigningFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSigningFormat'>;
    /** Range: string or Agent. */
    "hasSigningSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSigningSource'>;
    /** To identify the source of a MediaResource. */
    "hasSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSource'>;
    /** Range: string or Staff. */
    "hasStaffMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStaffMember'>;
    /** Range: a string or a Role/Concept from a controlled vocabulary. */
    "hasStaffRole": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStaffRole'>;
    /** Range: Agent or string */
    "hasStakeholder": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStakeholder'>;
    /** Identifies the technical video standard of a MediaResource, i.e. NTSC or PAL. */
    "hasStandard": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStandard'>;
    /** Range: Identifier, anyURI, string */
    "hasStorageId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStorageId'>;
    /** Range:; string or Storage_Type */
    "hasStorageType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasStorageType'>;
    /** Range: string, anyURI or Subject */
    "hasSubject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSubject'>;
    /** Range: string or Subtitling */
    "hasSubtitling": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSubtitling'>;
    /** Range: string or SubtitlingFormat */
    "hasSubtitlingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSubtitlingFormat'>;
    /** Range: a string or an Agent. */
    "hasSubtitlingSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasSubtitlingSource'>;
    /** Range: string or TargetAudience. */
    "hasTargetAudience": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTargetAudience'>;
    /** To specify a target platform. */
    "hasTargetPlatform": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTargetPlatform'>;
    /** Range: a Person or a string */
    "hasTeamMember": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTeamMember'>;
    /** Range: string or Identifier. */
    "hasTextLineId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTextLineId'>;
    /** Range: string or Agent. */
    "hasTextLineRelatedAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTextLineRelatedAgent'>;
    /** Range: string or Character. */
    "hasTextLineRelatedCharacter": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTextLineRelatedCharacter'>;
    /** Range: string or Scene. */
    "hasTextLineRelatedScene": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTextLineRelatedScene'>;
    /** Range: string or Agent. */
    "hasTextLineSource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTextLineSource'>;
    /** Range: string or TextLine_Type */
    "hasTextLineType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTextLineType'>;
    /** Range: a Concept, anyURI or a string */
    "hasTheme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTheme'>;
    /** To identify a timecode track with a MediaResource. */
    "hasTimecodeTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTimecodeTrack'>;
    /** To associate a TimelineTrack with an EditorialObject */
    "hasTimelineTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTimelineTrack'>;
    /** To associate an EditorialObject to a TimelineTrackPart */
    "hasTimelineTrackPart": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTimelineTrackPart'>;
    /** Range: string or anyURI or TimelineTrack_Type. */
    "hasTimelineTrackType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTimelineTrackType'>;
    /** Range: a Topic, anyURI or a string */
    "hasTopic": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTopic'>;
    /** To associate audio/data/video tracks with a MediaResource. */
    "hasTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTrack'>;
    /** An element to identify a part of a track by a title, a start time and an end time in both the media source and media destinationn. */
    "hasTrackPart": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTrackPart'>;
    /** Range: string or TrackPurpose. */
    "hasTrackPurpose": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasTrackPurpose'>;
    /** An type of Asset. */
    "hasType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasType'>;
    /** Range: string or UsageRestrictions. */
    "hasUsageRestrictions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasUsageRestrictions'>;
    /** Range: string or UsageRights. */
    "hasUsageRights": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasUsageRights'>;
    /** To identify another version of an Asset, BusinessObject or Resource. */
    "hasVersion": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasVersion'>;
    /** Range: string or VideoCodec */
    "hasVideoCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasVideoCodec'>;
    /** Range: string or VideoEncodingFormat */
    "hasVideoEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasVideoEncodingFormat'>;
    /** To identify VideoTracks in the Resource. */
    "hasVideoTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasVideoTrack'>;
    /** Range: string or WrappingType. */
    "hasWrappingType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hasWrappingType'>;
    /**
     * The height of e.g. a video frame typically
     *             expressed as a number of lines or the height of a picture/image expressed in millimeters
     *             or else.
     */
    "height": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#height'>;
    /** To specify a unit to express height. */
    "heightUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#heightUnit'>;
    /** To provide highlights. */
    "highlights": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#highlights'>;
    /** The hobbies of a Person. */
    "hobbies": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#hobbies'>;
    /** The date when the identifier was generated. */
    "idDateOfCreation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#idDateOfCreation'>;
    /** To support the use of structured identifiers. */
    "Identifier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Identifier'>;
    /** To define a type of identifier. */
    "IdentifierType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#IdentifierType'>;
    /** Range: string or anyURI. */
    "identifierValue": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#identifierValue'>;
    /** The distance between 2 I-frames also known as the gop size. */
    "iFrameSize": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#iFrameSize'>;
    /**
     * A still image / thumbnail / key frame / logo
     *             related to the media resource or being the media resource itself.
     */
    "Image": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Image'>;
    /** to identify a codec for images */
    "ImageCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ImageCodec'>;
    /**
     * To provide technical information about the
     *             format of an image such as the orientation. This is provided as free text in an
     *             annotation label or as an identifier pointing to a term in a classification
     *             scheme.
     */
    "ImageFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ImageFormat'>;
    /** Identifies the inches per second at which an analog audio tape should be played back for human consumption. */
    "inchesPerSecond": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#inchesPerSecond'>;
    /**
     * To link a particular manifestation of a
     *             BusinessObject to the corresponding Resource.
     */
    "instantiates": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#instantiates'>;
    /** To indicate the purpose for which content was created. */
    "IntentionCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#IntentionCode'>;
    /**
     * To provide information on intellectual
     *             property.
     */
    "IPRRestrictions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#IPRRestrictions'>;
    /** Range: string or Agent. */
    "isAgent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isAgent'>;
    /** To identify the groom / care taker of an animal. */
    "isAnimalGroom": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isAnimalGroom'>;
    /** To identify the owner of an animal. */
    "isAnimalOwner": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isAnimalOwner'>;
    /** To link an Annotation to a MediaResource. */
    "isAnnotatedMediaResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isAnnotatedMediaResource'>;
    /** To link an Annotation to an Agent who created it. */
    "isAnnotationBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isAnnotationBy'>;
    /** Tassociate an Agent with a Provenance instance. */
    "isAttributedTo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isAttributedTo'>;
    /** Range: a string or Brand */
    "isBrand": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isBrand'>;
    /** Range: string or Agent. */
    "isCharacter": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isCharacter'>;
    /** To link a BusinessOject or Resource to a parent. */
    "isChildOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isChildOf'>;
    /** To identify the source of a clone Editorial Object or Resource */
    "isClonedFrom": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isClonedFrom'>;
    /** To identify mediaResources used to compose an Essence. */
    "isComposedOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isComposedOf'>;
    /** Range: a link to Rights or open text (string). */
    "isCoveredBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isCoveredBy'>;
    /** Identifies a content-based relationship between two resources. */
    "isDerivedFrom": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isDerivedFrom'>;
    /** Range: Service or string. */
    "isDistributedOn": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isDistributedOn'>;
    /** the origin of a dubbed MediaResource. */
    "isDubbedFrom": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isDubbedFrom'>;
    /** To identify an Editorial Object based on the same Editorial format */
    "isEditorialFormatOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isEditorialFormatOf'>;
    /** Range: Series or string. */
    "isEpisodeOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isEpisodeOf'>;
    /** The Episode of a Series or a Season. */
    "isEpisodeOfSeason": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isEpisodeOfSeason'>;
    /** The Episode of a Series or a Season. */
    "isEpisodeOfSeries": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isEpisodeOfSeries'>;
    /** Range: a string or a FictitiousPerson. */
    "isFictitiousPerson": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isFictitiousPerson'>;
    /** To identify a MediaResource instantiating an EditorialObject. */
    "isInstantiatedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isInstantiatedBy'>;
    /** Range: Agent or String */
    "isIssuedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isIssuedBy'>;
    /** To identify the master of a derived media resource. */
    "isMasterOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isMasterOf'>;
    /** To identify the Media Resource to which a Media Fragment belongs to */
    "isMediaFragmentOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isMediaFragmentOf'>;
    /** Range: string or Group. */
    "isMemberOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isMemberOf'>;
    /** To identify a parent Publication Plan */
    "isMemberOfPublicationPlan": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isMemberOfPublicationPlan'>;
    /** A link to an Asset following the current Asset in an ordered sequence. */
    "isNextInSequence": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isNextInSequence'>;
    /** Range: string or Service. */
    "isOperatedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isOperatedBy'>;
    /** Range: string or Agent. */
    "isOwnedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isOwnedBy'>;
    /** To link a Asset to a parent Asset. */
    "isParentOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isParentOf'>;
    /** To identify the editorial object to which belongs a part. */
    "isPartOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isPartOf'>;
    /** Range: e.g. a string, URL or Locator. */
    "isPictureIdLocator": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isPictureIdLocator'>;
    /** To identify the BusinessObject associated with a Rating. */
    "isRatingRelatedToBusinessObject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isRatingRelatedToBusinessObject'>;
    /** To identify the resource associated with a Rating. */
    "isRatingRelatedToResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isRatingRelatedToResource'>;
    /** To described references between assets. */
    "isReferencedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isReferencedBy'>;
    /** Range: Service or string */
    "isReleasedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isReleasedBy'>;
    /** To identify substitutions. */
    "isReplacedBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isReplacedBy'>;
    /** To express strong relations between Assets, BusinessObjects or Resources. */
    "isRequiredBy": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isRequiredBy'>;
    /** To associatre a PublicationEvent with an EditorialObject. */
    "isScheduledOn": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isScheduledOn'>;
    /** Range: Series or string. */
    "isSeasonOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isSeasonOf'>;
    /** Range: Brand or string. */
    "isSeriesOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isSeriesOf'>;
    /** To associate an EditorialObject with a part of the TimelineTrack. */
    "isTimelineTrackPartOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isTimelineTrackPartOf'>;
    /** An element to identify a part of a track by a title, a start time and an end time in both the media source and media destination. */
    "isTrackPartOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isTrackPartOf'>;
    /** To identify related versions. */
    "isVersionOf": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#isVersionOf'>;
    /** An item e.g. newsItem or sportItem */
    "Item": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Item'>;
    /** To describe a key career Event of a Contact. */
    "KeyCareerEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#KeyCareerEvent'>;
    /** To describe a significant event. */
    "KeyEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#KeyEvent'>;
    /**
     * A key frame is a frame extarcted from video,
     *             e.g. representative of a part of a MediaResource.
     */
    "Keyframe": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Keyframe'>;
    /** A key personal Event of a Contact. */
    "KeyPersonalEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#KeyPersonalEvent'>;
    /**
     * To proivde keywords and define key concepts
     *             illustrating the content of the Resource or EditorialObject. This is provided as free
     *             text in an annotation label or as an identifier pointing to a term in a classification
     *             scheme.
     */
    "Keyword": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Keyword'>;
    /**
     * To provide information on languages present in
     *             the BusinessObject and its purpose. This is provided as free text in an annotation label
     *             or as an identifier pointing to a term in a classification scheme.Other language
     *             specific types may be added as subclasses of language.
     */
    "Language": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Language'>;
    /** To define the licensing terms associated with an Asset. */
    "Licensing": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Licensing'>;
    /**
     * To provide the number of the line on which
     *             ancillary data is being carried and the equivalent in the digital domain.
     */
    "lineNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#lineNumber'>;
    /** To define a custom link. */
    "Link": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Link'>;
    /** Range: string or Logo */
    "linkToLogo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#linkToLogo'>;
    /** Range: anyURI or Sticker. */
    "linkToSticker": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#linkToSticker'>;
    /** A flag to signal that content is live */
    "live": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#live'>;
    /** To provide a family name in its local expression. */
    "localFamiliyName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#localFamiliyName'>;
    /** To provide a given name in its local expression. */
    "localGivenName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#localGivenName'>;
    /**
     * This is provided as free text in an annotation
     *             label or as an identifier pointing to a term in a classification scheme.
     */
    "Location": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Location'>;
    /**
     * To provide the address of a
     *            Location.
     */
    "locationAddress": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAddress'>;
    /**
     * To provide the Area part of an
     *             Adrress.
     */
    "locationAddressArea": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAddressArea'>;
    /**
     * To provide the country name and or country
     *             code.
     */
    "locationAddressCountry": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAddressCountry'>;
    /** To provide an address line. */
    "locationAddressLine": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAddressLine'>;
    /**
     * To provide the name of a city, village,
     *             etc.
     */
    "locationAddressLocality": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAddressLocality'>;
    /**
     * To provide an address postal
     *             code.
     */
    "locationAddressPostalCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAddressPostalCode'>;
    /**
     * To define the altitude of a Location in
     *             meters.
     */
    "locationAltitude": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationAltitude'>;
    /** A code given to a Location. */
    "LocationCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#LocationCode'>;
    /**
     * To specify the name of the gps coordinate
     *             system used for the Location.
     */
    "locationCoordinateSystemName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationCoordinateSystemName'>;
    /** To provide a description of a particular Location. */
    "locationDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationDescription'>;
    /** An identifier attributed to a Location. */
    "locationId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationId'>;
    /** The latitude of the Location. */
    "locationLatitude": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationLatitude'>;
    /**
     * To define the longitude of the
     *             Location.
     */
    "locationLongitude": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationLongitude'>;
    /** To provide a namefor a particular Location. */
    "locationName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationName'>;
    /** Range: string or RegionCode */
    "locationRegion": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationRegion'>;
    /** A type of time at a Location. */
    "locationTimeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationTimeType'>;
    /** To define a type of time at a location. */
    "LocationTimeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#LocationTimeType'>;
    /** A type of Location. */
    "locationType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locationType'>;
    /** To define a type of location. */
    "LocationType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#LocationType'>;
    /** Custom attributes are to be associated by implementers. */
    "Locator": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Locator'>;
    /** Information on the locator target. */
    "locatorTargetInformation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#locatorTargetInformation'>;
    /** To log everything in the content following predefined rules and criterias, as a neutral sequence of (possibly timed) textual descriptions. */
    "log": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#log'>;
    /**
     * A Logo allows to visually identify an
     *             organisation, publicationService, publicationChannel, or ratings /
     *             parentalGuidance
     */
    "Logo": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Logo'>;
    /** The value for integrated loudness measured at AudioProgramme or AudioContent level. */
    "loudnessIntegratedLoudness": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessIntegratedLoudness'>;
    /** The value for maximum momentary loudness measured at AudioProgramme or AudioContent level. */
    "loudnessMaxMomentary": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessMaxMomentary'>;
    /** The value for maximum max short term loudness measured at AudioProgramme or AudioContent level. */
    "loudnessMaxShortTerm": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessMaxShortTerm'>;
    /** The value for maximum true peak loudness measured at AudioProgramme or AudioContent level. */
    "loudnessMaxTruepeak": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessMaxTruepeak'>;
    /** The method for loudness measurement at AudioProgramme or AudioContent level. */
    "loudnessMethod": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessMethod'>;
    /** To provide loudness parameters. */
    "loudnessParameters": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessParameters'>;
    /** The loudness range measured at AudioProgramme or AudioContent level. */
    "loudnessRange": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#loudnessRange'>;
    /**
     * Specifies the main title or name given to the
     *             EditorialObject.
     */
    "mainTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#mainTitle'>;
    /** To identify the marital status of a Person. */
    "maritalStatus": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#maritalStatus'>;
    /** A MediaFragment is a temporal or spatial segment of a resource identified by a MediaGragment URI (http://www.w3.org/2008/WebVideo/Fragments/WD-media-fragments-spec/). */
    "MediaFragment": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#MediaFragment'>;
    /** To define a type of MediaResource. */
    "MediaResource_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#MediaResource_Type'>;
    /**
     * The use of MediaResource is reserved to
     *             audiovisual content. In a production process, several MediaResources can be edited and assembled to realsie an Essence ready for distribution (see IMF package and OPL)
     */
    "MediaResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#MediaResource'>;
    /** A description of a MediaResource. */
    "mediaResourceDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#mediaResourceDescription'>;
    /** Range: Identifier or string */
    "mediaResourceId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#mediaResourceId'>;
    /** To identify a type of MediaResource, e.g. a template'. */
    "mediaResourceType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#mediaResourceType'>;
    /** To provide additional information on the type of media. */
    "MediaType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#MediaType'>;
    /**
     * To provide information on the medium formats in
     *             which the resource is available. This is provided as free text in an annotation label or
     *             as an identifier pointing to a term in a classification scheme.
     */
    "Medium": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Medium'>;
    /** A Track on which metadata is embedded (e.g. MXF). */
    "MetadataTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#MetadataTrack'>;
    /** To provide one or more middle names for a Person. */
    "middleName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#middleName'>;
    /** A flag to indicate whether it is allowed to insert ad breaks in mid-roll. */
    "midRollAdAllowed": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#midRollAdAllowed'>;
    /**
     * The definition of the container if available as
     *             a MIME type. This is provided as free text in an annotation label or as an identifier
     *             pointing to a term in a classification scheme. For more information:
     *             http://www.iana.org/assignments/media-types/index.html.
     */
    "MimeType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#MimeType'>;
    /** A NewsItem aggregates all information about a particular news event. */
    "NewsItem": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#NewsItem'>;
    /** The nickname of a Person. */
    "nickName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#nickName'>;
    /**
     * A flag to signal that a noise filter has been
     *             used.
     */
    "noiseFilter": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#noiseFilter'>;
    /** A flag to indicate that the EditorialObejct has not been rated. */
    "notRated": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#notRated'>;
    /** To provide the number of audio tracks. */
    "numberOfAudioTracks": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#numberOfAudioTracks'>;
    /** The number of Tracks composing the MediaResource. */
    "numberOfTracks": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#numberOfTracks'>;
    /** To provide the number of video tracks. */
    "numberOfVideoTracks": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#numberOfVideoTracks'>;
    /**
     * To specify the type of BusinessObject e.g. and
     *             EditorialObject of type "programme" or clip". This is
     *             provided as free text in an annotation label or as an identifier pointing to a term in a
     *             classification scheme e.g.
     *             http://www.ebu.ch/metadata/ontologies/skos/ebu_ObjectTypeCodeCS.rdf.
     */
    "ObjectType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ObjectType'>;
    /** The job / occupation name of a Person. */
    "occupation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#occupation'>;
    /** To identify the PublicationEvents provided through a Service. */
    "offers": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#offers'>;
    /**
     * To provide the professional/office email
     *             address of an Agent (Contact/Person or Organisation).
     */
    "officeEmailAddress": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#officeEmailAddress'>;
    /**
     * To provide the office mobile telephone number of an
     *             Agent (Contact/Person).
     */
    "officeMobileTelephoneNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#officeMobileTelephoneNumber'>;
    /**
     * To provide the office telephone number of an
     *             Agent (Contact/Person).
     */
    "officeTelephoneNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#officeTelephoneNumber'>;
    /**
     * Open Captions are burned in the
     *             image.
     */
    "OpenCaptions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#OpenCaptions'>;
    /**
     * Open subtitles are burned in the
     *             image.
     */
    "OpenSubtitling": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#OpenSubtitling'>;
    /** A flag to indicate that a EditorialObject is member of an ordered group or is an ordered group (e.g. Series) */
    "orderedFlag": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#orderedFlag'>;
    /** An organisation (business, corporation, federation, etc.) or moral agent (government body). */
    "Organisation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Organisation'>;
    /** To provide a description of an Organisation. */
    "organisationDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#organisationDescription'>;
    /** Range: string or Identifier */
    "organisationId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#organisationId'>;
    /** To provide the full name of an Organisation. */
    "organisationName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#organisationName'>;
    /** Range: string or anyURI or Concept. */
    "organisationType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#organisationType'>;
    /**
     * The orientation of a Document or an Image i.e. landscape or
     *             portrait.
     */
    "orientation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#orientation'>;
    /**
     * The original language in which the
     *             BusinessObject or Resource has been created and released. This is provided as free text
     *             in an annotation label or as an identifier pointing to a term in a classification
     *             scheme.
     */
    "OriginalLanguage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#OriginalLanguage'>;
    /** The original title used to identify the work. */
    "originalTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#originalTitle'>;
    /**
     * The size of a media package in
     *             Bytes.
     */
    "packageByteSize": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#packageByteSize'>;
    /**
     * The name of a media package in
     *             Bytes.
     */
    "packageName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#packageName'>;
    /** To define a type or part. */
    "Part_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Part_Type'>;
    /**
     * A Fragment is a particular section of a
     *             MediaResource identified by a start and end time or duration. Fragment can also be
     *             called segment or part.
     */
    "Part": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Part'>;
    /** A definition associated with the Part. */
    "partDefinition": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#partDefinition'>;
    /** A description associated with the Part. */
    "partDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#partDescription'>;
    /** Range: a string or Identifier */
    "partId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#partId'>;
    /** A name associated with the Part. */
    "partName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#partName'>;
    /**
     * The number associated to a Part as one among
     *             many.
     */
    "partNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#partNumber'>;
    /** The total number of Parts associated with an EditorialObject. */
    "partTotalNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#partTotalNumber'>;
    /** To identify a Party intervening in a transaction or contractual agreement. */
    "Party": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Party'>;
    /** To describe a Person. */
    "Person": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Person'>;
    /** To provide a description of a Person. */
    "personDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#personDescription'>;
    /** To indicate the height of a person. */
    "personHeight": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#personHeight'>;
    /** Range: an Identifier or anyURI or string. */
    "personId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#personId'>;
    /** To provide e.g. compound names. */
    "personName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#personName'>;
    /** A type attributed to a Person. */
    "personType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#personType'>;
    /** To indicate the weight of a person. */
    "personWeight": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#personWeight'>;
    /** To describe a physical resource e.g. a tape. */
    "PhysicalResource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PhysicalResource'>;
    /** A visual / graphical representation of a concept. */
    "Pictogram": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Pictogram'>;
    /** A photography, a logo, a pictogram, etc. */
    "Picture": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Picture'>;
    /** To define a picture display format code. */
    "PictureDisplayFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PictureDisplayFormat'>;
    /** A platform like a network or operator platform. */
    "Platform": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Platform'>;
    /** Identifies the rate of units against time at which the resource should be played back for human consumption.  If the unit of measure is known, use sub-properties framesPerSecond or inchesPerSecond. */
    "playbackSpeed": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#playbackSpeed'>;
    /** To provide a playlist. */
    "playlist": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#playlist'>;
    /** To identify the Essence used in a PublicationEvent */
    "playsOut": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#playsOut'>;
    /**
     * To indicate the position of an EditorialObject in an ordered
     *       group.
     */
    "position": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#position'>;
    /**
     * To provide the private email address of an
     *             Agent (Contact/Person)
     */
    "privateEmailAddress": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#privateEmailAddress'>;
    /**
     * To provide an private web homepage of an Agent
     *             (Contact/Person).
     */
    "privateHomepage": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#privateHomepage'>;
    /**
     * To provide the private mobile telephone number of an
     *             Agent (Contact/Person).
     */
    "privateMobileTelephoneNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#privateMobileTelephoneNumber'>;
    /**
     * To provide the private telephone number of an
     *             Agent (Contact/Person).
     */
    "privateTelephoneNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#privateTelephoneNumber'>;
    /** A synopsis or summary provided by the producer at the time of production. */
    "productionSynopsis": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#productionSynopsis'>;
    /**
     * An EditorialObject corresponding to a
     *             MediaResource ready for publication.
     */
    "Programme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Programme'>;
    /** To provide textual promotional information. */
    "promotionalInformation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#promotionalInformation'>;
    /** To identify and describe Props used in productions (e.g. vehicles, objects of various shapes and brand and purpose, etc.). */
    "Props": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Props'>;
    "Provenance": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Provenance'>;
    /** The date of creation of a Provenance instance. */
    "provenanceDateCreated": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#provenanceDateCreated'>;
    /** The date of modification of a Provenance instance. */
    "provenanceDateModified": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#provenanceDateModified'>;
    /** To describe a Provenance. */
    "provenanceDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#provenanceDescription'>;
    /** To identify a Provenance. */
    "provenanceId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#provenanceId'>;
    /** To name a Provenance. */
    "provenanceName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#provenanceName'>;
    /** Range: string, anyURI or Concept. */
    "provenanceType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#provenanceType'>;
    /** To define a type of publication channel. */
    "PublicationChannel_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationChannel_Type'>;
    /**
     * The name of the channel through which a
     *             Resource has been published as a PublicationEvent. A PublicationChannel can use a
     *             variety of medias e.g. broadcast or online.
     */
    "PublicationChannel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationChannel'>;
    /** To provide a description of a PublicationChannel e.g. a TV channel or website. */
    "publicationChannelDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationChannelDescription'>;
    /** Range: Identifier, anyURI, string */
    "publicationChannelId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationChannelId'>;
    /** To provide a name to a PublicationChannel e.g. a TV channel or website. */
    "publicationChannelName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationChannelName'>;
    /** Range: string or PublicationChannel_Type. */
    "publicationChannelType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationChannelType'>;
    /** The actual duration of a PublicationEvent. */
    "publicationDuration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationDuration'>;
    /** The actual end date and time of a PublicationEvent. */
    "publicationEndDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEndDateTime'>;
    /** To define a type of publication event. */
    "PublicationEvent_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationEvent_Type'>;
    /**
     * To describe any manifestation of a media
     *             resource on any media (live, on demand, catch-up TV, etc.) and the appropriate
     *             PublciationChannel.
     */
    "PublicationEvent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationEvent'>;
    /** To provide an abstract for a PublicationEvent. */
    "publicationEventAbstract": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEventAbstract'>;
    /** To provide the description of a PublicationEvent. */
    "publicationEventDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEventDescription'>;
    /** Range: Identifier, anyURI, string */
    "publicationEventId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEventId'>;
    /** To provide a name to a PublicationEvent. */
    "publicationEventName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEventName'>;
    /** To provide a title for a PublicationEvent. */
    "publicationEventTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEventTitle'>;
    /** A type of PublicationEvent. */
    "publicationEventType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationEventType'>;
    /**
     * A collection of PublicationEvents through which
     *             a resource has been published.
     */
    "PublicationHistory": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationHistory'>;
    "PublicationMedium": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationMedium'>;
    /** To define a type of publication plan. */
    "PublicationPlan_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationPlan_Type'>;
    /** A collection of PublicationEvents organised as a PublicationPlanning. */
    "PublicationPlan": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#PublicationPlan'>;
    /** A description of a PublicationPlan. */
    "publicationPlanDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationPlanDescription'>;
    /** The end date of a PublicationPlan */
    "publicationPlanEndDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationPlanEndDate'>;
    /** Range: Identifier, anyURI, string */
    "publicationPlanId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationPlanId'>;
    /** A name attributed to a PublicationPlan. */
    "publicationPlanName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationPlanName'>;
    /** The start date of a PublicationPlan */
    "publicationPlanStartDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationPlanStartDate'>;
    /** To provide a status regarding the PublicationPlan. */
    "publicationPlanStatus": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationPlanStatus'>;
    /** To express specifically the schedule date to which a PublicationEvent is related in particular if the broacdast time is after midnight. For example, the schedule date would be May 29th and the programme is published at 1 am on May 30th, while still associated in the schedule with the night of May 29th. */
    "publicationScheduleDate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationScheduleDate'>;
    /** The actual start date and time of a PublicationEvent. */
    "publicationStartDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publicationStartDateTime'>;
    /**
     * The end date and time of a PublicationEvent as
     *             scheduled.
     */
    "publishedEndDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publishedEndDateTime'>;
    /**
     * The start date and time of a PublicationEvent
     *             as scheduled.
     */
    "publishedStartDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publishedStartDateTime'>;
    /** The title used to identify the work at publication time. */
    "publishedTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publishedTitle'>;
    /** The editorial object associated to a PublicationEvent. */
    "publishes": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#publishes'>;
    /** To indicate a publication status. */
    "pubStatus": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#pubStatus'>;
    /**
     * A programme for distribution on radio
     *             channels.
     */
    "RadioProgramme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#RadioProgramme'>;
    /**
     * This is provided as free text in an annotation
     *             label or as an identifier pointing to a term in a classification scheme.
     */
    "Rating": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Rating'>;
    /** To associate a description with a Rating. */
    "ratingDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingDescription'>;
    /** Range: string or anyURI or Identifier. */
    "ratingId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingId'>;
    /** To associate a name with a Rating. */
    "ratingName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingName'>;
    /**
     * The maximum value of the scale used for the Rating
     *             of a MediaResource.
     */
    "ratingScaleMax": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingScaleMax'>;
    /**
     * The minimum value of the scale used for rating
     *             a MediaResource.
     */
    "ratingScaleMin": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingScaleMin'>;
    /** To identify the environment in which rating applies. */
    "ratingSystemEnvironment": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingSystemEnvironment'>;
    /** To identify a Rating system by its name. */
    "ratingSystemName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingSystemName'>;
    /** Range: string or anyURI or Concept. */
    "ratingType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingType'>;
    /**
     * To express a free text Rating value defined in
     *             a rating classification scheme.
     */
    "ratingValue": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#ratingValue'>;
    /** A flag to indicate that the Essence is ready for publication. */
    "readyForPublication": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#readyForPublication'>;
    /** A reason given for a rating. */
    "reason": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#reason'>;
    /** The record the description of an Asset. */
    "Record": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Record'>;
    /** To express a reference between Assets, BusinessObjects or Resources. */
    "references": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#references'>;
    /** To define a region.(@en} */
    "RegionCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#RegionCode'>;
    /**
     * To define the top left corner of a zone on
     *             the x-axis. If present with regionDelimy, the zone definition is complemented by the
     *             associated values of the height and width.
     */
    "regionDelimX": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#regionDelimX'>;
    /**
     * To define the bottom right corner of a zone on
     *             the y-axis. If present with regionDelimX, the zone definition is complemented by the
     *             associated values of the height and width.
     */
    "regionDelimY": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#regionDelimY'>;
    /** To specify a type of relation. */
    "Relation_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Relation_Type'>;
    /** To define links and relations. */
    "Relation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Relation'>;
    /** Range: string or Identifier. */
    "relationIdentifier": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationIdentifier'>;
    /** To define a link in a Relation. */
    "relationLink": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationLink'>;
    /** A note to provide additional information about a Relation. */
    "relationNote": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationNote'>;
    /** A boolean to define if a Relation is defined within and ordered group. */
    "relationOrderedGroupFlag": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationOrderedGroupFlag'>;
    /** The order number in a list. */
    "relationRunningOrderNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationRunningOrderNumber'>;
    /** Total number of group members in a Relation. */
    "relationTotalNumberOfGroupMembers": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationTotalNumberOfGroupMembers'>;
    /** Range: string or Relation_Type. */
    "relationType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#relationType'>;
    /** To identify substitution. */
    "replaces": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#replaces'>;
    /** To establish a relation between a BusinessObject and an Asset. */
    "represents": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#represents'>;
    /** To express dependency. */
    "requires": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#requires'>;
    /** To define the resolution of an Asset e.g. video, image... */
    "resolution": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resolution'>;
    /** To define a type of resource. */
    "Resource_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Resource_Type'>;
    /** To describe a Resource. */
    "Resource": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Resource'>;
    /** A desciprtion of a Resource. */
    "resourceDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceDescription'>;
    /**
     * The name of the file containing the
     *             Resource.
     */
    "resourceFilename": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceFilename'>;
    /** Provides the size of a Resource in bytes. */
    "resourceFileSize": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceFileSize'>;
    /** An identifier associated to a Resource. */
    "resourceId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceId'>;
    /** Range: Resource_type or anyURI or string */
    "resourceIdType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceIdType'>;
    /** Information on the Resource locator target. */
    "resourceLocatorTargetInformation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceLocatorTargetInformation'>;
    /** The name given to a Resource. */
    "resourceName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceName'>;
    /** The start offset within a Resource. */
    "resourceOffset": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceOffset'>;
    /** The resource offset in normal play time */
    "resourceOffsetNormalPlaytime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceOffsetNormalPlaytime'>;
    /** The resource offset in edit units */
    "resourceOffsetNumberEditUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceOffsetNumberEditUnit'>;
    /** The resource offset in timecode */
    "resourceOffsetTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceOffsetTimecode'>;
    /** The resource offset in timecode dropframe */
    "resourceOffsetTimecodedropframe": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#resourceOffsetTimecodedropframe'>;
    /** To provide a Review. */
    "Review": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Review'>;
    /**
     * To provide information on the rights, including
     *             intellectual property, related to a BusinessObject or Resource.
     */
    "Rights": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Rights'>;
    /**
     * To signal that rights have been cleared (or
     *             not)
     */
    "RightsClearance": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#RightsClearance'>;
    /** A flag to indicate that righst have been cleared */
    "rightsClearanceFlag": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsClearanceFlag'>;
    /** To define the duration of the period when Rights are applicable. */
    "rightsDuration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsDuration'>;
    /** To define the end time until when Rights are applicable. */
    "rightsEndDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsEndDateTime'>;
    /** To express an expression of Rights. */
    "rightsExpression": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsExpression'>;
    /** Range: Identifier, anyURI, string */
    "rightsId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsId'>;
    /**
     * A link to e.g. a webpage where an expression of
     *             the rights can be found and consulted.
     */
    "rightsLink": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsLink'>;
    /** To define the start time since when Rights are applicable. */
    "rightsStartDateTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsStartDateTime'>;
    /** Range: string or CountryCode. */
    "rightsTerritoryExcludes": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsTerritoryExcludes'>;
    /** Range: string or CountryCode. */
    "rightsTerritoryIncludes": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsTerritoryIncludes'>;
    /** Range: a string or a Rights_Type or a ContractType. */
    "rightsType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#rightsType'>;
    /** To define a type of Rights. */
    "RightsType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#RightsType'>;
    /**
     * To define the role / action of an agent. This
     *             is provided as free text in an annotation label or as an identifier pointing to a term
     *             in a classification scheme.
     */
    "Role": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Role'>;
    /** Range: string or anyURI. */
    "roleId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#roleId'>;
    /** To define a type of Role (not the Role itself). */
    "roleType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#roleType'>;
    /** To provide a salutation title e.g M. Ms, Dr, Pr. */
    "salutationTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#salutationTitle'>;
    /** The frequency at which audio is sampled per second. Also called sampling rate. */
    "sampleRate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#sampleRate'>;
    /**
     * The size of an audio sample in
     *             bits. Also called bit depth.
     */
    "sampleSize": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#sampleSize'>;
    /** The type of audio sample. */
    "sampleType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#sampleType'>;
    /**
     * To define the scanning format for a
     *             MediaResource. For video, the two main values are "interlaced" or
     *             "progressive".
     */
    "scanningFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#scanningFormat'>;
    /** A specifc type of Part. */
    "Scene": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Scene'>;
    /** To provide a script. */
    "script": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#script'>;
    /**
     * Secondary data identification word for
     *             ancillary data. Send mode identifier. An identifier which indicates the transmission
     *             timing for closed caption data.
     */
    "SDID": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#SDID'>;
    /**
     * A series can be composed of one or more seasons
     *             clustering a certain number of episodes. Fro this reason, seasons are related to series
     *             using the isRelatedTo property.
     */
    "Season": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Season'>;
    /** To provide a Season number. */
    "seasonNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#seasonNumber'>;
    /**
     * Series is a particular type of collection. TV
     *             or Radio Series are composed of Episodes.
     */
    "Series": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Series'>;
    /** To define a type of service. */
    "Service_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Service_Type'>;
    /**
     * A service is the umbrella under which one or
     *             more PublicationChannel is operated.
     */
    "Service": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Service'>;
    /** A description of the Service. */
    "serviceDescription": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#serviceDescription'>;
    /** Range: string or Identifier. */
    "serviceId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#serviceId'>;
    /** The name of the Service. */
    "serviceName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#serviceName'>;
    /** Range: string or Service_type */
    "serviceType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#serviceType'>;
    /** A specifc type of Part. */
    "Shot": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Shot'>;
    /** Provides a shot-by-shot description of a MediaResource. */
    "shotLog": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#shotLog'>;
    /**
     * To signal the presence of Signing for hard of
     *             hearing users. The type of Signing (e.g. incursted in or else) or language of Signing
     *             can be specified using the appropriate properties.
     */
    "Signing": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Signing'>;
    /**
     * To provide additional information on the
     *             signing format. This is provided as free text in an annotation label or as an identifier
     *             pointing to a term in a classification scheme.
     */
    "SigningFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#SigningFormat'>;
    /** To identify a sign language by its code. */
    "SignLanguageCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#SignLanguageCode'>;
    /** A SportItem aggregates all information about a sport event. */
    "SportItem": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#SportItem'>;
    /** A member of Staff. */
    "Staff": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Staff'>;
    /** identifies the technical video standard of a resource, i.e. NTSC or PAL. */
    "Standard": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Standard'>;
    /** Start timestamp e.g. the start time for a MediaResource. */
    "start": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#start'>;
    /**
     * A start time expressed as a number of edit
     *             units.
     */
    "startEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startEditUnits'>;
    /** A start time expressed as a normal play time. */
    "startNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startNormalPlayTime'>;
    /**
     * A start offset time expressed as a number of edit
     *             units.
     */
    "startOffsetEditUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startOffsetEditUnit'>;
    /** A start offset time expressed as normal play time. */
    "startOffsetNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startOffsetNormalPlayTime'>;
    /**
     * A start offset time expressed as
     *             timecode.
     */
    "startOffsetTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startOffsetTimecode'>;
    /**
     * A start offset time expressed as
     *             timecode with drop frames.
     */
    "startOffsetTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startOffsetTimecodeDropFrame'>;
    /**
     * A start time expressed as
     *             timecode.
     */
    "startTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startTimecode'>;
    /**
     * A start time expressed as
     *             timecode with drop frames.
     */
    "startTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#startTimecodeDropFrame'>;
    /** A sticker associated with a Costume. */
    "Sticker": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Sticker'>;
    /**
     * The type of storage used for the repository.
     *             This is provided as free text in an annotation label or as an identifier pointing to a
     *             term in a classification scheme.
     */
    "Storage_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Storage_Type'>;
    /** A continuous stream of bits. */
    "Stream": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Stream'>;
    /**
     * A term describing the topic covered by the
     *             BusinessObject or resource. This is provided as free text in an annotation label or as
     *             an identifier pointing to a term in a classification scheme.
     */
    "Subject": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Subject'>;
    /** A complementary subtitle. */
    "subtitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#subtitle'>;
    /**
     * To signal the presence of subtitles for
     *             translation in alternative languages.
     */
    "Subtitling": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Subtitling'>;
    /**
     * To define the format of subtitling.
     *             subtitling's main use isfor translation. This is provided as free text in an
     *             annotation label  or as an identifier pointing to a term in a classification
     *             scheme.
     */
    "SubtitlingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#SubtitlingFormat'>;
    /** To provide a suffix associated with a Person name e.g. Jr. */
    "suffix": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#suffix'>;
    /** To provide a summary. */
    "summary": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#summary'>;
    /** To provide a summary. */
    "synopsis": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#synopsis'>;
    /** to provide a table of content. */
    "tableOfContent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#tableOfContent'>;
    /** To provide a list of tags. */
    "tag": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#tag'>;
    /** To identify the audience for which the content was created. */
    "TargetAudience": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TargetAudience'>;
    /** To define the system used to provide a TargetAudience. */
    "targetAudienceSystem": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#targetAudienceSystem'>;
    /** To specify a target platform. */
    "TargetPlatform": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TargetPlatform'>;
    /** To define a Team. */
    "Team": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Team'>;
    /** An Essence defined as a Template with all associated technical parameters. */
    "Template": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Template'>;
    /** To identify a territory e.g. by its UN code. */
    "TerritoryCode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TerritoryCode'>;
    /** A class specific to the annotation of a text or portions of text. */
    "TextAnnotation": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TextAnnotation'>;
    /** To define a TextLine type. */
    "TextLine_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TextLine_Type'>;
    /** To provide lines of text extracted from or additional to the resource. */
    "TextLine": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TextLine'>;
    /** The height of the text box containing the TextLine. */
    "textLineBoxHeight": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineBoxHeight'>;
    /** The coordinates on a vertical axis of the position of the top left corner of the text box containing the TextLine. */
    "textLineBoxTopLeftCornerLineNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineBoxTopLeftCornerLineNumber'>;
    /** The coordinates on an horizontal axis of the position of the top left corner of the text box containing the TextLine. */
    "textLineBoxTopLeftCornerPixelNumber": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineBoxTopLeftCornerPixelNumber'>;
    /** The width of the text box containing the TextLine. */
    "textLineBoxWidth": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineBoxWidth'>;
    /** To provide the content of a text line. */
    "textLineContent": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineContent'>;
    /** The end time of a TextLine expressed as a number of edit units. */
    "textLineEndEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineEndEditUnits'>;
    /** The end time of a TextLine expressed as a normal play time. */
    "textLineEndNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineEndNormalPlayTime'>;
    /** The end time point of a TextLine in a Scene. */
    "textLineEndTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineEndTime'>;
    /** The end time of a TextLine expressed as timecode. */
    "textLineEndTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineEndTimecode'>;
    /** The end time of a TextLine expressed as timecode with drop frames. */
    "textLineEndTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineEndTimecodeDropFrame'>;
    /** The order in which a text line can be found e.g. in a scene. */
    "textLineOrder": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineOrder'>;
    /** The start time of a TextLine expressed as a number of edit units. */
    "textLineStartEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineStartEditUnits'>;
    /** The start time of a TextLine expressed as a normal play time. */
    "textLineStartNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineStartNormalPlayTime'>;
    /** The start time point of a TextLine in a Scene. */
    "textLineStartTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineStartTime'>;
    /** The start time of a TextLine expressed as timecode. */
    "textLineStartTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineStartTimecode'>;
    /** The start time of a TextLine expressed as timecode with drop frames. */
    "textLineStartTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#textLineStartTimecodeDropFrame'>;
    /** To specify the usage of a text. */
    "TextUsageType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TextUsageType'>;
    /** To define a Theme associated with an Asset. */
    "Theme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Theme'>;
    /**
     * A thumbnail is a low resolution picture that
     *             can be associated with EditorialObjects or e.g. MediaResources or
     *             Contacts.
     */
    "Thumbnail": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Thumbnail'>;
    /** A track with timecode information e.g. in MXF. */
    "TimecodeTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TimecodeTrack'>;
    /** the tie of creation of an Asset. */
    "timeCreated": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#timeCreated'>;
    /** To define a timed text authoring technique. */
    "TimedTextAuthoringTechnique": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TimedTextAuthoringTechnique'>;
    /** To define a type of timed text. */
    "TimedTextContentType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TimedTextContentType'>;
    /** To define a timed text subtitle format. */
    "TimedTextSubtitleTargetFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TimedTextSubtitleTargetFormat'>;
    /** To specify a type or TimelineTrack. */
    "TimelineTrack_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TimelineTrack_Type'>;
    /** To define a time sequence of EditorialObjects. */
    "TimelineTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TimelineTrack'>;
    /** To express the duration of a TimelineTrack. */
    "timelineTrackDuration": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#timelineTrackDuration'>;
    /** To provide a duration as a number of edit units. */
    "timelineTrackDurationEditUnits": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#timelineTrackDurationEditUnits'>;
    /**
     * To provide a duration as normal
     *             time.
     */
    "timelineTrackDurationNormalPlayTime": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#timelineTrackDurationNormalPlayTime'>;
    /**
     * The duration expressed as a
     *             timecode.
     */
    "timelineTrackDurationTimecode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#timelineTrackDurationTimecode'>;
    /**
     * The duration expressed as a
     *             timecode with drop frames.
     */
    "timelineTrackDurationTimecodeDropFrame": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#timelineTrackDurationTimecodeDropFrame'>;
    /**
     * All value of the EBU title status
     *             classification scheme
     *             (http://www.ebu.ch/metadata/cs/web/ebu_TitleStatusCodeCS_p.xml.htm) are candidates
     *             subproperties of the title property as implemented for an example with
     *             alternativeTitle.
     */
    "title": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#title'>;
    /**
     * A type subject for use in some contexts. This
     *             is provided as free text in an annotation label or as an identifier pointing to a term
     *             in a classification scheme.
     */
    "Topic": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Topic'>;
    /** To provide the total number of episodes in a Series or a Season. */
    "totalNumberOfEpisodes": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#totalNumberOfEpisodes'>;
    /** To provide the total number of members in a Group. */
    "totalNumberOfGroupMembers": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#totalNumberOfGroupMembers'>;
    /** To define a type of track. */
    "Track_Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Track_Type'>;
    /**
     * Audiovisual content can be composed of audio,
     *             video and data Tracks (including captioning and subtitling).
     */
    "Track": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Track'>;
    /**
     * To provide a definition associated to a
     *             Track.
     */
    "trackDefinition": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#trackDefinition'>;
    /** Range: Identifier, anyURI, string */
    "trackId": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#trackId'>;
    /**
     * To provide  name of a
     *             Track.
     */
    "trackName": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#trackName'>;
    /** To define the prupose of a track. */
    "TrackPurpose": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TrackPurpose'>;
    /** Range: string or Track_Type */
    "trackType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#trackType'>;
    /** A translated version of the title. */
    "translationTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#translationTitle'>;
    /**
     * A programme for distribution on television
     *             channels.
     */
    "TVProgramme": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#TVProgramme'>;
    /** An expression of type in textual form or as a term from a classification scheme. */
    "Type": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Type'>;
    /** To define a set of UsageRestrictions. */
    "UsageRestrictions": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#UsageRestrictions'>;
    /** Usage rights associated with content. */
    "UsageRights": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#UsageRights'>;
    /**
     * The username by which a Person is
     *             known e.g. when attributing a rating value.
     */
    "username": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#username'>;
    /** To provide information on the current version of an EditorialObject. */
    "version": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#version'>;
    /** To specifically identify a Version of an EditorialObject. */
    "Version": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#Version'>;
    /** An alternative title specific to a verison of content. */
    "versionTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#versionTitle'>;
    /**
     * The video bitrate. To provide the bitrate at which the MediaResource can be played
     *           in bits/second. Current bitrate if constant, and average bitrate if
     *           variable.
     */
    "videoBitRate": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#videoBitRate'>;
    /** The maximum video bitrate. */
    "videoBitRateMax": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#videoBitRateMax'>;
    /** The video bitrate mode. */
    "videoBitRateMode": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#videoBitRateMode'>;
    /** To provide information about a video codec. */
    "VideoCodec": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#VideoCodec'>;
    /** The encoding format of the video. */
    "VideoEncodingFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#VideoEncodingFormat'>;
    /** The encoding level as defined in specifications. */
    "videoEncodingLevel": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#videoEncodingLevel'>;
    /** The encoding level as defined in specifications. */
    "videoEncodingProfile": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#videoEncodingProfile'>;
    /** To define an VideoFormat. */
    "VideoFormat": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#VideoFormat'>;
    /** A decodable video stream of bits. */
    "VideoStream": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#VideoStream'>;
    /**
     * A specialisation of Track for Video to provide
     *             a link to specific data properties such as frameRate, etc. Signing is another possible
     *             example of video track. Specific VideoTracks such as Signing can be defined as sub
     *             VideoTracks.. In advanced systems, different VideoTracks can be used to provide e.g.
     *             different viewing angles.
     */
    "VideoTrack": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#VideoTrack'>;
    /**
     * The width of e.g. a video frame typically
     *             expressed as a number of pixels, or picture/image in millimeters.
     */
    "width": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#width'>;
    /**
     * The unit used to measure a width e.g. in pixels
     *             or number of lines or millimeters or else.
     */
    "widthUnit": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#widthUnit'>;
    /**
     * The number of words contained in a
     *             document.
     */
    "wordCount": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#wordCount'>;
    /** A title used while content is not complete. */
    "workingTitle": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#workingTitle'>;
    /** To define a type of wrapping. */
    "WrappingType": NamedNode<'http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#WrappingType'>;
}

const builder = namespace("http://www.ebu.ch/metadata/ontologies/ebucore/ebucore#") as any;
export const strict = builder as NamespaceBuilder<keyof Ebucore> & Ebucore;
export const loose = builder as NamespaceBuilder & Ebucore;
