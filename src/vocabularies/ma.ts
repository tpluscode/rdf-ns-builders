import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Ma = NamespaceBuilder & {
    /*A person or organisation contributing to the media resource.*/
    "Agent": NamedNode;
    /*A specialisation of Track for Audio to provide a link to specific data properties such as sampleRate, etc. Specialisation is defined through object properties.*/
    "AudioTrack": NamedNode;
    /*Any group of media resource e.g. a series.*/
    "Collection": NamedNode;
    /*Ancillary data track e.g. captioning  in addition to video and audio tracks. Specialisation is made through the use of appropriate object properties.*/
    "DataTrack": NamedNode;
    /*A still image / thumbnail / key frame related to the media resource or being the media resource itself.*/
    "Image": NamedNode;
    /*A location related to the media resource, e.g. depicted in the resource (possibly fictional) or where the resource was created (shooting location), etc.*/
    "Location": NamedNode;
    /*A media fragment (spatial, temporal, track...) composing a media resource. In other ontologies fragment is sometimes referred to as a 'part' or 'segment'.*/
    "MediaFragment": NamedNode;
    /*An image or an audiovisual media resource, which can be composed of one or more fragment / track.*/
    "MediaResource": NamedNode;
    /*An organisation or moral agent.*/
    "Organisation": NamedNode;
    /*A physical person.*/
    "Person": NamedNode;
    /*Information about the rating given to a media resource.*/
    "Rating": NamedNode;
    /*Information about The target audience (target region, target audience category but also parental guidance recommendation) for which a media resource is intended.*/
    "TargetAudience": NamedNode;
    /*A specialisation of MediaFragment for audiovisual content.*/
    "Track": NamedNode;
    /*A specialisation of Track for Video to provide a link to specific data properties such as frameRate, etc. Signing is another possible example of video track. Specialisation is defined through object properties.*/
    "VideoTrack": NamedNode;
    /*Corresponds to 'title.title' in the Ontology for Media Resources with a 'title.type' meaning "alternative".*/
    "alternativeTitle": NamedNode;
    /*Corresponds to 'averageBitRate' in the Ontology for Media Resources, expressed in kilobits/second.*/
    "averageBitRate": NamedNode;
    /*The name by which a collection (e.g. series) is known.*/
    "collectionName": NamedNode;
    /*Corresponds to 'copyright.copyright' in the Ontology for Media Resources.*/
    "copyright": NamedNode;
    /*A subproperty of 'hasRelatedLocation" used to specify where material shooting took place.*/
    "createdIn": NamedNode;
    /*Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "creationDate".*/
    "creationDate": NamedNode;
    /*Corresponds to date.date in the ontology for Media Resources. Subproperties can be used to distinguish different values of 'date.type'. The recommended range is 'xsd:dateTime' (for compliance with OWL2-QL and OWL2-RL) but other time-related datatypes may be used (e.g. 'xsd:gYear', 'xsd:date'...).*/
    "date": NamedNode;
    /*A subproperty of 'hasRelatedLocation' used to specify where the action depicted in the media is supposed to take place, as opposed to the location where shooting actually took place (see 'createdIn').*/
    "depictsFictionalLocation": NamedNode;
    /*Corresponds to 'description' in the Ontology for Media Resources. This can be specialised by using sub-properties e.g. 'summary' or 'script'.*/
    "description": NamedNode;
    /*Corresponds to 'duration' in the Ontology for Media Resources.*/
    "duration": NamedNode;
    /*Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "editDate".*/
    "editDate": NamedNode;
    /*Corresponds to 'contributor.contributor' in the Ontology for Media Resources with a 'contributor.role' meaning "actor".*/
    "features": NamedNode;
    /*Corresponds to 'namedFragment.label' in the Ontology for Media Resources.*/
    "fragmentName": NamedNode;
    /*Corresponds to 'frameSize.height' in the Ontology for Media Resources, measured in frameSizeUnit.*/
    "frameHeight": NamedNode;
    /*Corresponds to 'frameRate' in the Ontology for Media Resources, in frame per second.*/
    "frameRate": NamedNode;
    /*Corresponds to 'frameSize.unit' in the Ontology for Media Resources.*/
    "frameSizeUnit": NamedNode;
    /*Corresponds to 'frameSize.width' in the Ontology for Media Resources measured in frameSizeUnit.*/
    "frameWidth": NamedNode;
    /*Corresponds to 'policy' in the Ontology for Media Resources with a 'policy.type' "access conditions".*/
    "hasAccessConditions": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "audio-description".*/
    "hasAudioDescription": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "captioning". This property can for example point to a spatial fragment, a VideoTrack or a DataTrack. The language of the captioning track can be expressed by attaching a 'hasLanguage' property to the specific track.*/
    "hasCaptioning": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "chapter".*/
    "hasChapter": NamedNode;
    /*Corresponds to 'targetAudience.classification' in the Ontology for Media Resources. This property is used to provide a value characterising the target audience.*/
    "hasClassification": NamedNode;
    /*Corresponds to 'targetAudience.identifier' in the Ontology for Media Resources. This is used to identify the reference sheme against which the target audience has been characterised.*/
    "hasClassificationSystem": NamedNode;
    /*Corresponds to 'compression' in the Ontology for Media Resources.*/
    "hasCompression": NamedNode;
    "hasContributedTo": NamedNode;
    /*Corresponds to 'contributor.contributor' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'contributor.role'.*/
    "hasContributor": NamedNode;
    "hasCopyrightOver": NamedNode;
    "hasCreated": NamedNode;
    /*Corresponds to 'creator.creator' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'creator.role'. Note that this property is semantically a subproperty of 'hasContributor'.*/
    "hasCreator": NamedNode;
    /*Corresponds to 'format' in the Ontology for Media Resources.*/
    "hasFormat": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'fragment.role'.*/
    "hasFragment": NamedNode;
    /*Corresponds to 'genre' in the Ontology for Media Resources.*/
    "hasGenre": NamedNode;
    /*Corresponds to 'keyword' in the Ontology for Media Resources.*/
    "hasKeyword": NamedNode;
    /*Corresponds to 'language' in the Ontology for Media Resources. The language used in the resource. A controlled vocabulary such as defined in BCP 47 SHOULD be used. This property can also be used to identify the presence of sign language (RFC 5646). By inheritance, the hasLanguage property applies indifferently at the media resource / fragment / track levels.  Best practice recommends to use to best possible level of granularity fo describe the usage of language within a media resource including at fragment and track levels.*/
    "hasLanguage": NamedNode;
    /*Corresponds to 'location.coordinateSystem' in the Ontology for Media Resources.*/
    "hasLocationCoordinateSystem": NamedNode;
    "hasMember": NamedNode;
    /*Corresponds to 'namedFragment' in the Ontology for Media Resources.*/
    "hasNamedFragment": NamedNode;
    /*Corresponds to 'policy' in the Ontology for Media Resources with a  'policy.type' meaning "permissions".*/
    "hasPermissions": NamedNode;
    /*Corresponds to 'policy' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'policy.type'.*/
    "hasPolicy": NamedNode;
    "hasPublished": NamedNode;
    /*Corresponds to 'publisher' in the Ontology for Media Resources.*/
    "hasPublisher": NamedNode;
    /*Corresponds to 'rating' in the Ontology for Media Resources.*/
    "hasRating": NamedNode;
    /*Corresponds to 'rating.type' in the Ontology for Media Resources.*/
    "hasRatingSystem": NamedNode;
    /*Corresponds to 'relation' and in the Ontology for Media Resources with a 'relation.type' meaning "related image".*/
    "hasRelatedImage": NamedNode;
    /*Corresponds to 'location' in the Ontology for Media Resources. Subproperties are provided to specify, when possible, the relation between the media resource and the location.*/
    "hasRelatedLocation": NamedNode;
    /*Corresponds to 'relation' and in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'relation.type'.*/
    "hasRelatedResource": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "signing". This property can for example point to a spatial fragment or a VideoTrack. The sign language of the captioning track can be expressed by attaching a 'hasLanguage' property to the specific track.*/
    "hasSigning": NamedNode;
    /*Corresponds to 'relation' and in the Ontology for Media Resources with a 'relation.type' meaning "source".*/
    "hasSource": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "subtitling".*/
    "hasSubtitling": NamedNode;
    /*Corresponds to 'targetAudience' in the Ontology for Media Resources.*/
    "hasTargetAudience": NamedNode;
    /*Corresponds to 'fragment' in the Ontology for Media Resources with a 'fragment.role' meaning "track".*/
    "hasTrack": NamedNode;
    "isCaptioningOf": NamedNode;
    "isChapterOf": NamedNode;
    /*Corresponds to 'copyright.identifier' in the Ontology for Media Resources.*/
    "isCopyrightedBy": NamedNode;
    "isCreationLocationOf": NamedNode;
    "isFictionalLocationDepictedIn": NamedNode;
    "isFragmentOf": NamedNode;
    "isImageRelatedTo": NamedNode;
    "isLocationRelatedTo": NamedNode;
    /*Corresponds to 'collection' in the Ontology for Media Resources.*/
    "isMemberOf": NamedNode;
    "isNamedFragmentOf": NamedNode;
    /*Corresponds to 'rating.identifier' in the Ontology for Media Resources.*/
    "isProvidedBy": NamedNode;
    "isRatingOf": NamedNode;
    "isRelatedTo": NamedNode;
    "isSigningOf": NamedNode;
    "isSourceOf": NamedNode;
    "isTargetAudienceOf": NamedNode;
    "isTrackOf": NamedNode;
    /*Corresponds to 'location.altitude' in the Ontology for Media Resources.*/
    "locationAltitude": NamedNode;
    /*Corresponds to 'location.latitude' in the Ontology for Media Resources.*/
    "locationLatitude": NamedNode;
    /*Corresponds to 'location.longitude' in the Ontology for Media Resources.*/
    "locationLongitude": NamedNode;
    /*Corresponds to 'location.name' in the Ontology for Media Resources.*/
    "locationName": NamedNode;
    /*Corresponds to 'locator' in the Ontology for Media Resources.*/
    "locator": NamedNode;
    /*Corresponds to 'title.title' in the Ontology for Media Resources with a 'title.type' meaning "original".*/
    "mainOriginalTitle": NamedNode;
    /*Corresponds to 'numTracks.number' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'numTracks.type'.*/
    "numberOfTracks": NamedNode;
    "playsIn": NamedNode;
    "provides": NamedNode;
    /*Corresponds to 'rating.max' in the Ontology for Media Resources.*/
    "ratingScaleMax": NamedNode;
    /*Corresponds to 'rating.min' in the Ontology for Media Resources.*/
    "ratingScaleMin": NamedNode;
    /*Corresponds to 'rating.value' in the Ontology for Media Resources.*/
    "ratingValue": NamedNode;
    /*Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "recordDate".*/
    "recordDate": NamedNode;
    /*Corresponds to 'date.date' in the Ontology for Media Resources with a 'date.type' meaning "releaseDate".*/
    "releaseDate": NamedNode;
    /*Corresponds to 'samplingRate' in the Ontology for Media Resources, in samples per second.*/
    "samplingRate": NamedNode;
    /*Corresponds to 'title.title' in the Ontology for Media Resources. Subproperties can be used to distinguish different values of 'title.type'.*/
    "title": NamedNode;
    /*Corresponds to 'fragment.name' in the Ontology for Media Resources, for Track fragments.*/
    "trackName": NamedNode;
};
export const ma: Ma = (namespace("http://www.w3.org/ns/ma-ont#") as any);
