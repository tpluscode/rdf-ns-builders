import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Ma {
    '': NamedNode<'http://www.w3.org/ns/ma-ont#'>;
    /** A person or organisation contributing to the media resource. */
    "Agent": NamedNode<'http://www.w3.org/ns/ma-ont#Agent'>;
    /** Any group of media resource e.g. a series. */
    "Collection": NamedNode<'http://www.w3.org/ns/ma-ont#Collection'>;
    /** A location related to the media resource, e.g. depicted in the resource (possibly fictional) or where the resource was created (shooting location), etc. */
    "Location": NamedNode<'http://www.w3.org/ns/ma-ont#Location'>;
    /** An image or an audiovisual media resource, which can be composed of one or more fragment / track. */
    "MediaResource": NamedNode<'http://www.w3.org/ns/ma-ont#MediaResource'>;
    /** Information about the rating given to a media resource. */
    "Rating": NamedNode<'http://www.w3.org/ns/ma-ont#Rating'>;
    /** Information about The target audience (target region, target audience category but also parental guidance recommendation) for which a media resource is intended. */
    "TargetAudience": NamedNode<'http://www.w3.org/ns/ma-ont#TargetAudience'>;
    /** A specialisation of Track for Audio to provide a link to specific data properties such as sampleRate, etc. Specialisation is defined through object properties. */
    "AudioTrack": NamedNode<'http://www.w3.org/ns/ma-ont#AudioTrack'>;
    /** A specialisation of MediaFragment for audiovisual content. */
    "Track": NamedNode<'http://www.w3.org/ns/ma-ont#Track'>;
    /** Ancillary data track e.g. captioning  in addition to video and audio tracks. Specialisation is made through the use of appropriate object properties. */
    "DataTrack": NamedNode<'http://www.w3.org/ns/ma-ont#DataTrack'>;
    /** A specialisation of Track for Video to provide a link to specific data properties such as frameRate, etc. Signing is another possible example of video track. Specialisation is defined through object properties. */
    "VideoTrack": NamedNode<'http://www.w3.org/ns/ma-ont#VideoTrack'>;
    /** A still image / thumbnail / key frame related to the media resource or being the media resource itself. */
    "Image": NamedNode<'http://www.w3.org/ns/ma-ont#Image'>;
    /** A media fragment (spatial, temporal, track...) composing a media resource. In other ontologies fragment is sometimes referred to as a 'part' or 'segment'. */
    "MediaFragment": NamedNode<'http://www.w3.org/ns/ma-ont#MediaFragment'>;
    /** An organisation or moral agent. */
    "Organisation": NamedNode<'http://www.w3.org/ns/ma-ont#Organisation'>;
    /** A physical person. */
    "Person": NamedNode<'http://www.w3.org/ns/ma-ont#Person'>;
    /** Corresponds to 'title.title' in the Ontology for Media Resources with a 'title.type' meaning "alternative". */
    "alternativeTitle": NamedNode<'http://www.w3.org/ns/ma-ont#alternativeTitle'>;
    /** Corresponds to 'title.title' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'title.type'. */
    "title": NamedNode<'http://www.w3.org/ns/ma-ont#title'>;
    /** Corresponds to 'averageBitRate' in the Ontology for Media Resources, expressed in kilobits/second. */
    "averageBitRate": NamedNode<'http://www.w3.org/ns/ma-ont#averageBitRate'>;
    /** The name by which a collection (e.g. series) is known. */
    "collectionName": NamedNode<'http://www.w3.org/ns/ma-ont#collectionName'>;
    /** Corresponds to 'copyright.copyright' in the Ontology for Media Resources. */
    "copyright": NamedNode<'http://www.w3.org/ns/ma-ont#copyright'>;
    /** A subproperty of 'hasRelatedLocation" used to specify where material shooting took place. */
    "createdIn": NamedNode<'http://www.w3.org/ns/ma-ont#createdIn'>;
    /** Corresponds to 'location' in the Ontology for Media Resources. Subproperties are provided to specify, when possible, the relation between the media resource and the location. */
    "hasRelatedLocation": NamedNode<'http://www.w3.org/ns/ma-ont#hasRelatedLocation'>;
    "isCreationLocationOf": NamedNode<'http://www.w3.org/ns/ma-ont#isCreationLocationOf'>;
    /** Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "creationDate". */
    "creationDate": NamedNode<'http://www.w3.org/ns/ma-ont#creationDate'>;
    /** Corresponds to date.date in the ontology for Media Resources. Subproperties can be used to distinguish different values of 'date.type'. The recommended range is 'xsd:dateTime' (for compliance with OWL2-QL and OWL2-RL) but other time-related datatypes may be used (e.g. 'xsd:gYear', 'xsd:date'...). */
    "date": NamedNode<'http://www.w3.org/ns/ma-ont#date'>;
    /** A subproperty of 'hasRelatedLocation' used to specify where the action depicted in the media is supposed to take place, as opposed to the location where shooting actually took place (see 'createdIn'). */
    "depictsFictionalLocation": NamedNode<'http://www.w3.org/ns/ma-ont#depictsFictionalLocation'>;
    "isFictionalLocationDepictedIn": NamedNode<'http://www.w3.org/ns/ma-ont#isFictionalLocationDepictedIn'>;
    /** Corresponds to 'description' in the Ontology for Media Resources. This can be specialised by using sub-properties e.g. 'summary' or 'script'. */
    "description": NamedNode<'http://www.w3.org/ns/ma-ont#description'>;
    /** Corresponds to 'duration' in the Ontology for Media Resources. */
    "duration": NamedNode<'http://www.w3.org/ns/ma-ont#duration'>;
    /** Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "editDate". */
    "editDate": NamedNode<'http://www.w3.org/ns/ma-ont#editDate'>;
    /** Corresponds to 'contributor.contributor' in the Ontology for Media Resources with a 'contributor.role' meaning "actor". */
    "features": NamedNode<'http://www.w3.org/ns/ma-ont#features'>;
    /** Corresponds to 'contributor.contributor' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'contributor.role'. */
    "hasContributor": NamedNode<'http://www.w3.org/ns/ma-ont#hasContributor'>;
    "playsIn": NamedNode<'http://www.w3.org/ns/ma-ont#playsIn'>;
    /** Corresponds to 'namedFragment.label' in the Ontology for Media Resources. */
    "fragmentName": NamedNode<'http://www.w3.org/ns/ma-ont#fragmentName'>;
    /** Corresponds to 'frameSize.height' in the Ontology for Media Resources, measured in frameSizeUnit. */
    "frameHeight": NamedNode<'http://www.w3.org/ns/ma-ont#frameHeight'>;
    /** Corresponds to 'frameRate' in the Ontology for Media Resources, in frame per second. */
    "frameRate": NamedNode<'http://www.w3.org/ns/ma-ont#frameRate'>;
    /** Corresponds to 'frameSize.unit' in the Ontology for Media Resources. */
    "frameSizeUnit": NamedNode<'http://www.w3.org/ns/ma-ont#frameSizeUnit'>;
    /** Corresponds to 'frameSize.width' in the Ontology for Media Resources measured in frameSizeUnit. */
    "frameWidth": NamedNode<'http://www.w3.org/ns/ma-ont#frameWidth'>;
    /** Corresponds to 'policy' in the Ontology for Media Resources with a 'policy.type' "access conditions". */
    "hasAccessConditions": NamedNode<'http://www.w3.org/ns/ma-ont#hasAccessConditions'>;
    /** Corresponds to 'policy' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'policy.type'. */
    "hasPolicy": NamedNode<'http://www.w3.org/ns/ma-ont#hasPolicy'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "audio-description". */
    "hasAudioDescription": NamedNode<'http://www.w3.org/ns/ma-ont#hasAudioDescription'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "captioning". This property can for example point to a spatial fragment, a VideoTrack or a DataTrack. The language of the captioning track can be expressed by attaching a 'hasLanguage' property to the specific track. */
    "hasCaptioning": NamedNode<'http://www.w3.org/ns/ma-ont#hasCaptioning'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'fragment.role'. */
    "hasFragment": NamedNode<'http://www.w3.org/ns/ma-ont#hasFragment'>;
    "isCaptioningOf": NamedNode<'http://www.w3.org/ns/ma-ont#isCaptioningOf'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "chapter". */
    "hasChapter": NamedNode<'http://www.w3.org/ns/ma-ont#hasChapter'>;
    "isChapterOf": NamedNode<'http://www.w3.org/ns/ma-ont#isChapterOf'>;
    /** Corresponds to 'targetAudience.classification' in the Ontology for Media Resources. This property is used to provide a value characterising the target audience. */
    "hasClassification": NamedNode<'http://www.w3.org/ns/ma-ont#hasClassification'>;
    /** Corresponds to 'targetAudience.identifier' in the Ontology for Media Resources. This is used to identify the reference sheme against which the target audience has been characterised. */
    "hasClassificationSystem": NamedNode<'http://www.w3.org/ns/ma-ont#hasClassificationSystem'>;
    /** Corresponds to 'compression' in the Ontology for Media Resources. */
    "hasCompression": NamedNode<'http://www.w3.org/ns/ma-ont#hasCompression'>;
    "hasContributedTo": NamedNode<'http://www.w3.org/ns/ma-ont#hasContributedTo'>;
    "hasCopyrightOver": NamedNode<'http://www.w3.org/ns/ma-ont#hasCopyrightOver'>;
    "hasCreated": NamedNode<'http://www.w3.org/ns/ma-ont#hasCreated'>;
    /** Corresponds to 'creator.creator' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'creator.role'. Note that this property is semantically a subproperty of 'hasContributor'. */
    "hasCreator": NamedNode<'http://www.w3.org/ns/ma-ont#hasCreator'>;
    /** Corresponds to 'format' in the Ontology for Media Resources. */
    "hasFormat": NamedNode<'http://www.w3.org/ns/ma-ont#hasFormat'>;
    "isFragmentOf": NamedNode<'http://www.w3.org/ns/ma-ont#isFragmentOf'>;
    /** Corresponds to 'genre' in the Ontology for Media Resources. */
    "hasGenre": NamedNode<'http://www.w3.org/ns/ma-ont#hasGenre'>;
    /** Corresponds to 'keyword' in the Ontology for Media Resources. */
    "hasKeyword": NamedNode<'http://www.w3.org/ns/ma-ont#hasKeyword'>;
    /** Corresponds to 'language' in the Ontology for Media Resources. The language used in the resource. A controlled vocabulary such as defined in BCP 47 SHOULD be used. This property can also be used to identify the presence of sign language (RFC 5646). By inheritance, the hasLanguage property applies indifferently at the media resource / fragment / track levels.  Best practice recommends to use to best possible level of granularity fo describe the usage of language within a media resource including at fragment and track levels. */
    "hasLanguage": NamedNode<'http://www.w3.org/ns/ma-ont#hasLanguage'>;
    /** Corresponds to 'location.coordinateSystem' in the Ontology for Media Resources. */
    "hasLocationCoordinateSystem": NamedNode<'http://www.w3.org/ns/ma-ont#hasLocationCoordinateSystem'>;
    "hasMember": NamedNode<'http://www.w3.org/ns/ma-ont#hasMember'>;
    /** Corresponds to 'namedFragment' in the Ontology for Media Resources. */
    "hasNamedFragment": NamedNode<'http://www.w3.org/ns/ma-ont#hasNamedFragment'>;
    "isNamedFragmentOf": NamedNode<'http://www.w3.org/ns/ma-ont#isNamedFragmentOf'>;
    /** Corresponds to 'policy' in the Ontology for Media Resources with a  'policy.type' meaning "permissions". */
    "hasPermissions": NamedNode<'http://www.w3.org/ns/ma-ont#hasPermissions'>;
    "hasPublished": NamedNode<'http://www.w3.org/ns/ma-ont#hasPublished'>;
    /** Corresponds to 'publisher' in the Ontology for Media Resources. */
    "hasPublisher": NamedNode<'http://www.w3.org/ns/ma-ont#hasPublisher'>;
    /** Corresponds to 'rating' in the Ontology for Media Resources. */
    "hasRating": NamedNode<'http://www.w3.org/ns/ma-ont#hasRating'>;
    "isRatingOf": NamedNode<'http://www.w3.org/ns/ma-ont#isRatingOf'>;
    /** Corresponds to 'rating.type' in the Ontology for Media Resources. */
    "hasRatingSystem": NamedNode<'http://www.w3.org/ns/ma-ont#hasRatingSystem'>;
    /** Corresponds to 'relation' and in the Ontology for Media Resources with a 'relation.type' meaning "related image". */
    "hasRelatedImage": NamedNode<'http://www.w3.org/ns/ma-ont#hasRelatedImage'>;
    /** Corresponds to 'relation' and in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'relation.type'. */
    "hasRelatedResource": NamedNode<'http://www.w3.org/ns/ma-ont#hasRelatedResource'>;
    "isImageRelatedTo": NamedNode<'http://www.w3.org/ns/ma-ont#isImageRelatedTo'>;
    "isLocationRelatedTo": NamedNode<'http://www.w3.org/ns/ma-ont#isLocationRelatedTo'>;
    "isRelatedTo": NamedNode<'http://www.w3.org/ns/ma-ont#isRelatedTo'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "signing". This property can for example point to a spatial fragment or a VideoTrack. The sign language of the captioning track can be expressed by attaching a 'hasLanguage' property to the specific track. */
    "hasSigning": NamedNode<'http://www.w3.org/ns/ma-ont#hasSigning'>;
    "isSigningOf": NamedNode<'http://www.w3.org/ns/ma-ont#isSigningOf'>;
    /** Corresponds to 'relation' and in the Ontology for Media Resources with a 'relation.type' meaning "source". */
    "hasSource": NamedNode<'http://www.w3.org/ns/ma-ont#hasSource'>;
    "isSourceOf": NamedNode<'http://www.w3.org/ns/ma-ont#isSourceOf'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "subtitling". */
    "hasSubtitling": NamedNode<'http://www.w3.org/ns/ma-ont#hasSubtitling'>;
    /** Corresponds to 'targetAudience' in the Ontology for Media Resources. */
    "hasTargetAudience": NamedNode<'http://www.w3.org/ns/ma-ont#hasTargetAudience'>;
    "isTargetAudienceOf": NamedNode<'http://www.w3.org/ns/ma-ont#isTargetAudienceOf'>;
    /** Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "track". */
    "hasTrack": NamedNode<'http://www.w3.org/ns/ma-ont#hasTrack'>;
    "isTrackOf": NamedNode<'http://www.w3.org/ns/ma-ont#isTrackOf'>;
    /** Corresponds to 'copyright.identifier' in the Ontology for Media Resources. */
    "isCopyrightedBy": NamedNode<'http://www.w3.org/ns/ma-ont#isCopyrightedBy'>;
    /** Corresponds to 'collection' in the Ontology for Media Resources. */
    "isMemberOf": NamedNode<'http://www.w3.org/ns/ma-ont#isMemberOf'>;
    /** Corresponds to 'rating.identifier' in the Ontology for Media Resources. */
    "isProvidedBy": NamedNode<'http://www.w3.org/ns/ma-ont#isProvidedBy'>;
    "provides": NamedNode<'http://www.w3.org/ns/ma-ont#provides'>;
    /** Corresponds to 'location.altitude' in the Ontology for Media Resources. */
    "locationAltitude": NamedNode<'http://www.w3.org/ns/ma-ont#locationAltitude'>;
    /** Corresponds to 'location.latitude' in the Ontology for Media Resources. */
    "locationLatitude": NamedNode<'http://www.w3.org/ns/ma-ont#locationLatitude'>;
    /** Corresponds to 'location.longitude' in the Ontology for Media Resources. */
    "locationLongitude": NamedNode<'http://www.w3.org/ns/ma-ont#locationLongitude'>;
    /** Corresponds to 'location.name' in the Ontology for Media Resources. */
    "locationName": NamedNode<'http://www.w3.org/ns/ma-ont#locationName'>;
    /** Corresponds to 'locator' in the Ontology for Media Resources. */
    "locator": NamedNode<'http://www.w3.org/ns/ma-ont#locator'>;
    /** Corresponds to 'title.title' in the Ontology for Media Resources with a 'title.type' meaning "original". */
    "mainOriginalTitle": NamedNode<'http://www.w3.org/ns/ma-ont#mainOriginalTitle'>;
    /** Corresponds to 'numTracks.number' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'numTracks.type'. */
    "numberOfTracks": NamedNode<'http://www.w3.org/ns/ma-ont#numberOfTracks'>;
    /** Corresponds to 'rating.max' in the Ontology for Media Resources. */
    "ratingScaleMax": NamedNode<'http://www.w3.org/ns/ma-ont#ratingScaleMax'>;
    /** Corresponds to 'rating.min' in the Ontology for Media Resources. */
    "ratingScaleMin": NamedNode<'http://www.w3.org/ns/ma-ont#ratingScaleMin'>;
    /** Corresponds to 'rating.value' in the Ontology for Media Resources. */
    "ratingValue": NamedNode<'http://www.w3.org/ns/ma-ont#ratingValue'>;
    /** Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "recordDate". */
    "recordDate": NamedNode<'http://www.w3.org/ns/ma-ont#recordDate'>;
    /** Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "releaseDate". */
    "releaseDate": NamedNode<'http://www.w3.org/ns/ma-ont#releaseDate'>;
    /** Corresponds to 'samplingRate' in the Ontology for Media Resources, in samples per second. */
    "samplingRate": NamedNode<'http://www.w3.org/ns/ma-ont#samplingRate'>;
    /** Corresponds to 'fragment.name' in the Ontology for Media Resources, for Track fragments. */
    "trackName": NamedNode<'http://www.w3.org/ns/ma-ont#trackName'>;
}

const builder = namespace("http://www.w3.org/ns/ma-ont#") as any;
export const strict = builder as NamespaceBuilder<keyof Ma> & Ma;
export const loose = builder as NamespaceBuilder & Ma;
