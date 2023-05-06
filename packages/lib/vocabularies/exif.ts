import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

interface Exif {
    '': NamedNode<'http://www.w3.org/2003/12/exif/ns#'>;
    /** An Image File Directory */
    "IFD": NamedNode<'http://www.w3.org/2003/12/exif/ns#IFD'>;
    /** An Exif tag whose meaning is not known */
    "_unknown": NamedNode<'http://www.w3.org/2003/12/exif/ns#_unknown'>;
    /** The lens aperture. The unit is the APEX value. */
    "apertureValue": NamedNode<'http://www.w3.org/2003/12/exif/ns#apertureValue'>;
    /** An attribute relating to Picture-Taking Conditions */
    "pictTaking": NamedNode<'http://www.w3.org/2003/12/exif/ns#pictTaking'>;
    /** Person who created the image */
    "artist": NamedNode<'http://www.w3.org/2003/12/exif/ns#artist'>;
    /** A property that connects an IFD to one of its entries. Super property which integrates all Exif tags. */
    "exifAttribute": NamedNode<'http://www.w3.org/2003/12/exif/ns#exifAttribute'>;
    /** The number of bits per image component. In this standard each component of the image is 8 bits, so the value for this tag is 8. See also SamplesPerPixel. In JPEG compressed data a JPEG marker is used instead of this tag. */
    "bitsPerSample": NamedNode<'http://www.w3.org/2003/12/exif/ns#bitsPerSample'>;
    /** An attribute relating to image data structure */
    "imageDataStruct": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageDataStruct'>;
    /** a rational number representing a resolution. Could be a subProperty of other general schema. */
    "resolution": NamedNode<'http://www.w3.org/2003/12/exif/ns#resolution'>;
    /** The value of brightness. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99. Note that if the numerator of the recorded value is FFFFFFFF.H, Unknown shall be indicated. */
    "brightnessValue": NamedNode<'http://www.w3.org/2003/12/exif/ns#brightnessValue'>;
    /** CCDに付いているColor filter array(CFA)のパターン。例えば普通のRGBフィルターだと、CFAPatternのデータは 02 02 00 01 01 02 */
    "cfaPattern": NamedNode<'http://www.w3.org/2003/12/exif/ns#cfaPattern'>;
    /** The color space information tag (ColorSpace) is always recorded as the color space specifier. Normally sRGB (=1) is used to define the color space based on the PC monitor conditions and environment. */
    "colorSpace": NamedNode<'http://www.w3.org/2003/12/exif/ns#colorSpace'>;
    /** An attribute relating to image data characteristics */
    "imageDataCharacter": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageDataCharacter'>;
    /** Information specific to compressed data. The channels of each component are arranged in order from the 1st component to the 4th. For uncompressed data the data arrangement is given in the PhotometricInterpretation tag. However, since PhotometricInterpretation can only express the order of Y,Cb and Cr, this tag is provided for cases when compressed data uses components other than Y, Cb, and Cr and to enable support of other sequences. */
    "componentsConfiguration": NamedNode<'http://www.w3.org/2003/12/exif/ns#componentsConfiguration'>;
    /** An attribute relating to Image Configuration */
    "imageConfig": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageConfig'>;
    /** Information specific to compressed data. The compression mode used for a compressed image is indicated in unit bits per pixel. */
    "compressedBitsPerPixel": NamedNode<'http://www.w3.org/2003/12/exif/ns#compressedBitsPerPixel'>;
    /** The compression scheme used for the image data. When a primary image is JPEG compressed, this designation is not necessary and is omitted. When thumbnails use JPEG compression, this tag value is set to 6. */
    "compression": NamedNode<'http://www.w3.org/2003/12/exif/ns#compression'>;
    /** The direction of contrast processing applied by the camera when the image was shot. */
    "contrast": NamedNode<'http://www.w3.org/2003/12/exif/ns#contrast'>;
    /** Copyright information. In this standard the tag is used to indicate both the photographer and editor copyrights. It is the copyright notice of the person or organization claiming rights to the image. */
    "copyright": NamedNode<'http://www.w3.org/2003/12/exif/ns#copyright'>;
    /** The use of special processing on image data, such as rendering geared to output. When special processing is performed, the reader is expected to disable or minimize any further processing. */
    "customRendered": NamedNode<'http://www.w3.org/2003/12/exif/ns#customRendered'>;
    /** The Exif field data type, such as ascii, byte, short etc. */
    "datatype": NamedNode<'http://www.w3.org/2003/12/exif/ns#datatype'>;
    /** a date information. Usually saved as YYYY:MM:DD (HH:MM:SS) format in Exif data, but represented here as W3C-DTF format */
    "date": NamedNode<'http://www.w3.org/2003/12/exif/ns#date'>;
    /** An attribute relating to Date and/or Time */
    "dateAndOrTime": NamedNode<'http://www.w3.org/2003/12/exif/ns#dateAndOrTime'>;
    /** The date and time of image creation. In this standard it is the date and time the file was changed. */
    "dateTime": NamedNode<'http://www.w3.org/2003/12/exif/ns#dateTime'>;
    /** The date and time when the image was stored as digital data. If, for example, an image was captured by DSC and at the same time the file was recorded, then the DateTimeOriginal and DateTimeDigitized will have the same contents. */
    "dateTimeDigitized": NamedNode<'http://www.w3.org/2003/12/exif/ns#dateTimeDigitized'>;
    /** The date and time when the original image data was generated. For a DSC the date and time the picture was taken are recorded. */
    "dateTimeOriginal": NamedNode<'http://www.w3.org/2003/12/exif/ns#dateTimeOriginal'>;
    /** Information on the picture-taking conditions of a particular camera model. The tag is used only to indicate the picture-taking conditions in the reader. */
    "deviceSettingDescription": NamedNode<'http://www.w3.org/2003/12/exif/ns#deviceSettingDescription'>;
    /** The digital zoom ratio when the image was shot. If the numerator of the recorded value is 0, this indicates that digital zoom was not used. */
    "digitalZoomRatio": NamedNode<'http://www.w3.org/2003/12/exif/ns#digitalZoomRatio'>;
    /** Exif Version */
    "exifVersion": NamedNode<'http://www.w3.org/2003/12/exif/ns#exifVersion'>;
    /** An attribute relating to Version */
    "versionInfo": NamedNode<'http://www.w3.org/2003/12/exif/ns#versionInfo'>;
    /** A pointer to the Exif IFD, which is a set of tags for recording Exif-specific attribute information. */
    "exif_IFD_Pointer": NamedNode<'http://www.w3.org/2003/12/exif/ns#exif_IFD_Pointer'>;
    /** A tag that refers a child IFD */
    "ifdPointer": NamedNode<'http://www.w3.org/2003/12/exif/ns#ifdPointer'>;
    /** An Exif IFD data entry */
    "exifdata": NamedNode<'http://www.w3.org/2003/12/exif/ns#exifdata'>;
    /** The exposure bias. The unit is the APEX value. Ordinarily it is given in the range of -99.99 to 99.99. */
    "exposureBiasValue": NamedNode<'http://www.w3.org/2003/12/exif/ns#exposureBiasValue'>;
    /** CCD感度。データ形式が符号なし分数である事を除き、ISOSpeedRatingsと同じ */
    "exposureIndex": NamedNode<'http://www.w3.org/2003/12/exif/ns#exposureIndex'>;
    /** the exposure mode set when the image was shot. In auto-bracketing mode, the camera shoots a series of frames of the same scene at different exposure settings. */
    "exposureMode": NamedNode<'http://www.w3.org/2003/12/exif/ns#exposureMode'>;
    /** The class of the program used by the camera to set exposure when the picture is taken. */
    "exposureProgram": NamedNode<'http://www.w3.org/2003/12/exif/ns#exposureProgram'>;
    /** Exposure time, given in seconds (sec). */
    "exposureTime": NamedNode<'http://www.w3.org/2003/12/exif/ns#exposureTime'>;
    /** a mesurement of time length with unit of second */
    "seconds": NamedNode<'http://www.w3.org/2003/12/exif/ns#seconds'>;
    /** F number */
    "fNumber": NamedNode<'http://www.w3.org/2003/12/exif/ns#fNumber'>;
    /** The image source. If a DSC recorded the image, this tag value of this tag always be set to 3, indicating that the image was recorded on a DSC. */
    "fileSource": NamedNode<'http://www.w3.org/2003/12/exif/ns#fileSource'>;
    /** The status of flash when the image was shot. */
    "flash": NamedNode<'http://www.w3.org/2003/12/exif/ns#flash'>;
    /** BCPSによるストロボの強度 */
    "flashEnergy": NamedNode<'http://www.w3.org/2003/12/exif/ns#flashEnergy'>;
    /** The Flashpix format version supported by a FPXR file. If the FPXR function supports Flashpix format Ver. 1.0, this is indicated similarly to ExifVersion by recording "0100" as 4-byte ASCII. */
    "flashpixVersion": NamedNode<'http://www.w3.org/2003/12/exif/ns#flashpixVersion'>;
    /** The actual focal length of the lens, in mm. Conversion is not made to the focal length of a 35 mm film camera. */
    "focalLength": NamedNode<'http://www.w3.org/2003/12/exif/ns#focalLength'>;
    /** A length with unit of mm */
    "mm": NamedNode<'http://www.w3.org/2003/12/exif/ns#mm'>;
    /** 35mm換算した焦点距離 */
    "focalLengthIn35mmFilm": NamedNode<'http://www.w3.org/2003/12/exif/ns#focalLengthIn35mmFilm'>;
    /** Length of an object. Could be a subProperty of other general schema. */
    "length": NamedNode<'http://www.w3.org/2003/12/exif/ns#length'>;
    /** CCD画素密度の単位 */
    "focalPlaneResolutionUnit": NamedNode<'http://www.w3.org/2003/12/exif/ns#focalPlaneResolutionUnit'>;
    /** The number of pixels in the image width (X) direction per FocalPlaneResolutionUnit on the camera focal plane. */
    "focalPlaneXResolution": NamedNode<'http://www.w3.org/2003/12/exif/ns#focalPlaneXResolution'>;
    /** The number of pixels in the image height (Y) direction per FocalPlaneResolutionUnit on the camera focal plane. */
    "focalPlaneYResolution": NamedNode<'http://www.w3.org/2003/12/exif/ns#focalPlaneYResolution'>;
    /** The degree of overall image gain adjustment. */
    "gainControl": NamedNode<'http://www.w3.org/2003/12/exif/ns#gainControl'>;
    /** Geometric data such as latitude, longitude and altitude. Usually saved as rational number. */
    "geo": NamedNode<'http://www.w3.org/2003/12/exif/ns#geo'>;
    /** The altitude based on the reference in GPSAltitudeRef. Altitude is expressed as one RATIONAL value. The reference unit is meters. */
    "gpsAltitude": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsAltitude'>;
    /** An attribute relating to GPS information */
    "gpsInfo": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsInfo'>;
    /** Indicates the altitude used as the reference altitude. If the reference is sea level and the altitude is above sea level, 0 is given. If the altitude is below sea level, a value of 1 is given and the altitude is indicated as an absolute value in the GPSAltitude tag. The reference unit is meters. */
    "gpsAltitudeRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsAltitudeRef'>;
    /** A character string recording the name of the GPS area. The first byte indicates the character code used, and this is followed by the name of the GPS area. */
    "gpsAreaInformation": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsAreaInformation'>;
    /** The GPS DOP (data degree of precision). An HDOP value is written during two-dimensional measurement, and PDOP during three-dimensional measurement. */
    "gpsDOP": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDOP'>;
    /** date and time information relative to UTC (Coordinated Universal Time). The record format is "YYYY:MM:DD" while converted to W3C-DTF to use in RDF */
    "gpsDateStamp": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDateStamp'>;
    /** The bearing to the destination point. The range of values is from 0.00 to 359.99. */
    "gpsDestBearing": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestBearing'>;
    /** Indicates the reference used for giving the bearing to the destination point. 'T' denotes true direction and 'M' is magnetic direction. */
    "gpsDestBearingRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestBearingRef'>;
    /** The distance to the destination point. */
    "gpsDestDistance": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestDistance'>;
    /** Indicates the unit used to express the distance to the destination point. 'K', 'M' and 'N' represent kilometers, miles and knots. */
    "gpsDestDistanceRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestDistanceRef'>;
    /** Latitude of destination, expressed as three values giving the degrees, minutes, and seconds, respectively. */
    "gpsDestLatitude": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestLatitude'>;
    /** Reference for latitude of destination */
    "gpsDestLatitudeRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestLatitudeRef'>;
    /** Longitude of destination, expressed as three values giving the degrees, minutes, and seconds, respectively. */
    "gpsDestLongitude": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestLongitude'>;
    /** Reference for longitude of destination */
    "gpsDestLongitudeRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDestLongitudeRef'>;
    /** Indicates whether differential correction is applied to the GPS receiver. */
    "gpsDifferential": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsDifferential'>;
    /** The direction of the image when it was captured. The range of values is from 0.00 to 359.99. */
    "gpsImgDirection": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsImgDirection'>;
    /** The reference for giving the direction of the image when it is captured. 'T' denotes true direction and 'M' is magnetic direction. */
    "gpsImgDirectionRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsImgDirectionRef'>;
    /** A pointer to the GPS IFD, which is a set of tags for recording GPS information. */
    "gpsInfo_IFD_Pointer": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsInfo_IFD_Pointer'>;
    /** The latitude, expressed as three values giving the degrees, minutes, and seconds, respectively. */
    "gpsLatitude": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsLatitude'>;
    /** Indicates whether the latitude is north or south latitude. The ASCII value 'N' indicates north latitude, and 'S' is south latitude. */
    "gpsLatitudeRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsLatitudeRef'>;
    /** The longitude, expressed as three values giving the degrees, minutes, and seconds, respectively. */
    "gpsLongitude": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsLongitude'>;
    /** Indicates whether the longitude is east or west longitude. ASCII 'E' indicates east longitude, and 'W' is west longitude. */
    "gpsLongitudeRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsLongitudeRef'>;
    /** The geodetic survey data used by the GPS receiver. If the survey data is restricted to Japan, the value of this tag is 'TOKYO' or 'WGS-84'. If a GPS Info tag is recorded, it is strongly recommended that this tag be recorded. */
    "gpsMapDatum": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsMapDatum'>;
    /** The GPS measurement mode. '2' means two-dimensional measurement and '3' means three-dimensional measurement is in progress. */
    "gpsMeasureMode": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsMeasureMode'>;
    /** A character string recording the name of the method used for location finding. The first byte indicates the character code used, and this is followed by the name of the method. */
    "gpsProcessingMethod": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsProcessingMethod'>;
    /** The GPS satellites used for measurements. This tag can be used to describe the number of satellites, their ID number, angle of elevation, azimuth, SNR and other information in ASCII notation. The format is not specified. If the GPS receiver is incapable of taking measurements, value of the tag shall be set to NULL. */
    "gpsSatellites": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsSatellites'>;
    /** The speed of GPS receiver movement. */
    "gpsSpeed": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsSpeed'>;
    /** The unit used to express the GPS receiver speed of movement. 'K' 'M' and 'N' represents kilometers per hour, miles per hour, and knots. */
    "gpsSpeedRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsSpeedRef'>;
    /** The status of the GPS receiver when the image is recorded. 'A' means measurement is in progress, and 'V' means the measurement is Interoperability. */
    "gpsStatus": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsStatus'>;
    /** The time as UTC (Coordinated Universal Time). TimeStamp is expressed as three RATIONAL values giving the hour, minute, and second. */
    "gpsTimeStamp": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsTimeStamp'>;
    /** The direction of GPS receiver movement. The range of values is from 0.00 to 359.99. */
    "gpsTrack": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsTrack'>;
    /** The reference for giving the direction of GPS receiver movement. 'T' denotes true direction and 'M' is magnetic direction. */
    "gpsTrackRef": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsTrackRef'>;
    /** The version of GPSInfoIFD. The version is given as 2.2.0.0. This tag is mandatory when GPSInfo tag is present. */
    "gpsVersionID": NamedNode<'http://www.w3.org/2003/12/exif/ns#gpsVersionID'>;
    /** Height of an object */
    "height": NamedNode<'http://www.w3.org/2003/12/exif/ns#height'>;
    /** A character string giving the title of the image. It may be a comment such as "1988 company picnic" or the like. Two-byte character codes cannot be used. When a 2-byte code is necessary, the Exif Private tag UserComment is to be used. */
    "imageDescription": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageDescription'>;
    /** Image height. The number of rows of image data. In JPEG compressed data a JPEG marker is used. */
    "imageLength": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageLength'>;
    /** An identifier assigned uniquely to each image. It is recorded as an ASCII string equivalent to hexadecimal notation and 128-bit fixed length. */
    "imageUniqueID": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageUniqueID'>;
    /** Image width. The number of columns of image data, equal to the number of pixels per row. In JPEG compressed data a JPEG marker is used instead of this tag. */
    "imageWidth": NamedNode<'http://www.w3.org/2003/12/exif/ns#imageWidth'>;
    /** Width of an object */
    "width": NamedNode<'http://www.w3.org/2003/12/exif/ns#width'>;
    /**
     * An attribute relating to Interoperability. Tags stored in
     * Interoperability IFD may be defined dependently to each Interoperability rule.
     */
    "interopInfo": NamedNode<'http://www.w3.org/2003/12/exif/ns#interopInfo'>;
    /** Indicates the identification of the Interoperability rule. 'R98' = conforming to R98 file specification of Recommended Exif Interoperability Rules (ExifR98) or to DCF basic file stipulated by Design Rule for Camera File System. 'THM' = conforming to DCF thumbnail file stipulated by Design rule for Camera File System. */
    "interoperabilityIndex": NamedNode<'http://www.w3.org/2003/12/exif/ns#interoperabilityIndex'>;
    /** Interoperability Version */
    "interoperabilityVersion": NamedNode<'http://www.w3.org/2003/12/exif/ns#interoperabilityVersion'>;
    /** A pointer to the Interoperability IFD, which is composed of tags storing the information to ensure the Interoperability */
    "interoperability_IFD_Pointer": NamedNode<'http://www.w3.org/2003/12/exif/ns#interoperability_IFD_Pointer'>;
    /** CCD感度の銀塩フィルム換算値 */
    "isoSpeedRatings": NamedNode<'http://www.w3.org/2003/12/exif/ns#isoSpeedRatings'>;
    /** The offset to the start byte (SOI) of JPEG compressed thumbnail data. This is not used for primary image JPEG data. */
    "jpegInterchangeFormat": NamedNode<'http://www.w3.org/2003/12/exif/ns#jpegInterchangeFormat'>;
    /** An attribute relating to recording offset */
    "recOffset": NamedNode<'http://www.w3.org/2003/12/exif/ns#recOffset'>;
    /** The number of bytes of JPEG compressed thumbnail data. This is not used for primary image JPEG data. */
    "jpegInterchangeFormatLength": NamedNode<'http://www.w3.org/2003/12/exif/ns#jpegInterchangeFormatLength'>;
    /** Light source such as Daylight, Tungsten, Flash etc. */
    "lightSource": NamedNode<'http://www.w3.org/2003/12/exif/ns#lightSource'>;
    /** Manufacturer of image input equipment */
    "make": NamedNode<'http://www.w3.org/2003/12/exif/ns#make'>;
    /** Manufacturer notes */
    "makerNote": NamedNode<'http://www.w3.org/2003/12/exif/ns#makerNote'>;
    /** An attribute relating to User Information */
    "userInfo": NamedNode<'http://www.w3.org/2003/12/exif/ns#userInfo'>;
    /** The smallest F number of the lens. The unit is the APEX value. Ordinarily it is given in the range of 00.00 to 99.99, but it is not limited to this range. */
    "maxApertureValue": NamedNode<'http://www.w3.org/2003/12/exif/ns#maxApertureValue'>;
    /** A length with unit of meter */
    "meter": NamedNode<'http://www.w3.org/2003/12/exif/ns#meter'>;
    /** Metering mode, such as CenterWeightedAverage, Spot, MultiSpot,Pattern, Partial etc. */
    "meteringMode": NamedNode<'http://www.w3.org/2003/12/exif/ns#meteringMode'>;
    /** Model of image input equipment */
    "model": NamedNode<'http://www.w3.org/2003/12/exif/ns#model'>;
    /** Indicates the Opto-Electric Conversion Function (OECF) specified in ISO 14524. OECF is the relationship between the camera optical input and the image values. */
    "oecf": NamedNode<'http://www.w3.org/2003/12/exif/ns#oecf'>;
    /** The image orientation viewed in terms of rows and columns. */
    "orientation": NamedNode<'http://www.w3.org/2003/12/exif/ns#orientation'>;
    /** Pixel composition. In JPEG compressed data a JPEG marker is used instead of this tag. */
    "photometricInterpretation": NamedNode<'http://www.w3.org/2003/12/exif/ns#photometricInterpretation'>;
    /** Brightness info for print image matching */
    "pimBrightness": NamedNode<'http://www.w3.org/2003/12/exif/ns#pimBrightness'>;
    /** An attribute relating to print image matching */
    "pimInfo": NamedNode<'http://www.w3.org/2003/12/exif/ns#pimInfo'>;
    /** ColorBalance info for print image matching */
    "pimColorBalance": NamedNode<'http://www.w3.org/2003/12/exif/ns#pimColorBalance'>;
    /** Contrast info for print image matching */
    "pimContrast": NamedNode<'http://www.w3.org/2003/12/exif/ns#pimContrast'>;
    /** Saturation info for print image matching */
    "pimSaturation": NamedNode<'http://www.w3.org/2003/12/exif/ns#pimSaturation'>;
    /** Sharpness info for print image matching */
    "pimSharpness": NamedNode<'http://www.w3.org/2003/12/exif/ns#pimSharpness'>;
    /** Information specific to compressed data. When a compressed file is recorded, the valid width of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag should not exist in an uncompressed file. */
    "pixelXDimension": NamedNode<'http://www.w3.org/2003/12/exif/ns#pixelXDimension'>;
    /** Information specific to compressed data. When a compressed file is recorded, the valid height of the meaningful image shall be recorded in this tag, whether or not there is padding data or a restart marker. This tag should not exist in an uncompressed file. Since data padding is unnecessary in the vertical direction, the number of lines recorded in this valid image height tag will in fact be the same as that recorded in the SOF. */
    "pixelYDimension": NamedNode<'http://www.w3.org/2003/12/exif/ns#pixelYDimension'>;
    /** Indicates whether pixel components are recorded in chunky or planar format. In JPEG compressed files a JPEG marker is used instead of this tag. If this field does not exist, the TIFF default of 1 (chunky) is assumed. */
    "planarConfiguration": NamedNode<'http://www.w3.org/2003/12/exif/ns#planarConfiguration'>;
    /** The chromaticity of the three primary colors of the image. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace). */
    "primaryChromaticities": NamedNode<'http://www.w3.org/2003/12/exif/ns#primaryChromaticities'>;
    /** A pointer to the print image matching IFD */
    "printImageMatching_IFD_Pointer": NamedNode<'http://www.w3.org/2003/12/exif/ns#printImageMatching_IFD_Pointer'>;
    /** The reference black point value and reference white point value. The color space is declared in a color space information tag, with the default being the value that gives the optimal image characteristics Interoperability these conditions. */
    "referenceBlackWhite": NamedNode<'http://www.w3.org/2003/12/exif/ns#referenceBlackWhite'>;
    /** Tag Relating to Related File Information */
    "relatedFile": NamedNode<'http://www.w3.org/2003/12/exif/ns#relatedFile'>;
    /** Related image file format */
    "relatedImageFileFormat": NamedNode<'http://www.w3.org/2003/12/exif/ns#relatedImageFileFormat'>;
    /** Related image length */
    "relatedImageLength": NamedNode<'http://www.w3.org/2003/12/exif/ns#relatedImageLength'>;
    /** Related image width */
    "relatedImageWidth": NamedNode<'http://www.w3.org/2003/12/exif/ns#relatedImageWidth'>;
    /** Related audio file */
    "relatedSoundFile": NamedNode<'http://www.w3.org/2003/12/exif/ns#relatedSoundFile'>;
    /** The unit for measuring XResolution and YResolution. The same unit is used for both XResolution and YResolution. If the image resolution in unknown, 2 (inches) is designated. */
    "resolutionUnit": NamedNode<'http://www.w3.org/2003/12/exif/ns#resolutionUnit'>;
    /** The number of rows per strip. This is the number of rows in the image of one strip when an image is divided into strips. With JPEG compressed data this designation is not needed and is omitted. */
    "rowsPerStrip": NamedNode<'http://www.w3.org/2003/12/exif/ns#rowsPerStrip'>;
    /** The number of components per pixel. Since this standard applies to RGB and YCbCr images, the value set for this tag is 3. In JPEG compressed data a JPEG marker is used instead of this tag. */
    "samplesPerPixel": NamedNode<'http://www.w3.org/2003/12/exif/ns#samplesPerPixel'>;
    /** The direction of saturation processing applied by the camera when the image was shot. */
    "saturation": NamedNode<'http://www.w3.org/2003/12/exif/ns#saturation'>;
    /** The type of scene that was shot. It can also be used to record the mode in which the image was shot, such as Landscape, Portrait etc. Note that this differs from the scene type (SceneType) tag. */
    "sceneCaptureType": NamedNode<'http://www.w3.org/2003/12/exif/ns#sceneCaptureType'>;
    /** The type of scene. If a DSC recorded the image, this tag value shall always be set to 1, indicating that the image was directly photographed. */
    "sceneType": NamedNode<'http://www.w3.org/2003/12/exif/ns#sceneType'>;
    /** The image sensor type on the camera or input device, such as One-chip color area sensor etc. */
    "sensingMethod": NamedNode<'http://www.w3.org/2003/12/exif/ns#sensingMethod'>;
    /** The direction of sharpness processing applied by the camera when the image was shot. */
    "sharpness": NamedNode<'http://www.w3.org/2003/12/exif/ns#sharpness'>;
    /** Shutter speed. The unit is the APEX (Additive System of Photographic Exposure) setting */
    "shutterSpeedValue": NamedNode<'http://www.w3.org/2003/12/exif/ns#shutterSpeedValue'>;
    /** The name and version of the software or firmware of the camera or image input device used to generate the image. */
    "software": NamedNode<'http://www.w3.org/2003/12/exif/ns#software'>;
    /** This tag records the camera or input device spatial frequency table and SFR values in the direction of image width, image height, and diagonal direction, as specified in ISO 12233. */
    "spatialFrequencyResponse": NamedNode<'http://www.w3.org/2003/12/exif/ns#spatialFrequencyResponse'>;
    /** Indicates the spectral sensitivity of each channel of the camera used. The tag value is an ASCII string compatible with the standard developed by the ASTM Technical committee. */
    "spectralSensitivity": NamedNode<'http://www.w3.org/2003/12/exif/ns#spectralSensitivity'>;
    /** The total number of bytes in each strip. With JPEG compressed data this designation is not needed and is omitted. */
    "stripByteCounts": NamedNode<'http://www.w3.org/2003/12/exif/ns#stripByteCounts'>;
    /** For each strip, the byte offset of that strip. With JPEG compressed data this designation is not needed and is omitted. */
    "stripOffsets": NamedNode<'http://www.w3.org/2003/12/exif/ns#stripOffsets'>;
    /** DateTime subseconds */
    "subSecTime": NamedNode<'http://www.w3.org/2003/12/exif/ns#subSecTime'>;
    /** DateTimeDigitized subseconds */
    "subSecTimeDigitized": NamedNode<'http://www.w3.org/2003/12/exif/ns#subSecTimeDigitized'>;
    /** DateTimeOriginal subseconds */
    "subSecTimeOriginal": NamedNode<'http://www.w3.org/2003/12/exif/ns#subSecTimeOriginal'>;
    /** The location and area of the main subject in the overall scene. */
    "subjectArea": NamedNode<'http://www.w3.org/2003/12/exif/ns#subjectArea'>;
    /** The distance to the subject, given in meters. Note that if the numerator of the recorded value is FFFFFFFF.H, Infinity shall be indicated; and if the numerator is 0, Distance unknown shall be indicated. */
    "subjectDistance": NamedNode<'http://www.w3.org/2003/12/exif/ns#subjectDistance'>;
    /** The distance to the subject, such as Macro, Close View or Distant View. */
    "subjectDistanceRange": NamedNode<'http://www.w3.org/2003/12/exif/ns#subjectDistanceRange'>;
    /** The location of the main subject in the scene. The value of this tag represents the pixel at the center of the main subject relative to the left edge, prior to rotation processing as per the Rotation tag. The first value indicates the X column number and second indicates the Y row number. */
    "subjectLocation": NamedNode<'http://www.w3.org/2003/12/exif/ns#subjectLocation'>;
    /** A tag used to record fractions of seconds for a date property */
    "subseconds": NamedNode<'http://www.w3.org/2003/12/exif/ns#subseconds'>;
    /** The Exif tag number */
    "tag_number": NamedNode<'http://www.w3.org/2003/12/exif/ns#tag_number'>;
    /** The Exif tag number with context prefix, such as IFD type or maker name */
    "tagid": NamedNode<'http://www.w3.org/2003/12/exif/ns#tagid'>;
    /** A transfer function for the image, described in tabular style. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace). */
    "transferFunction": NamedNode<'http://www.w3.org/2003/12/exif/ns#transferFunction'>;
    /** A tag for Exif users to write keywords or comments on the image besides those in ImageDescription, and without the character code limitations of the ImageDescription tag. The character code used in the UserComment tag is identified based on an ID code in a fixed 8-byte area at the start of the tag data area. */
    "userComment": NamedNode<'http://www.w3.org/2003/12/exif/ns#userComment'>;
    /** The white balance mode set when the image was shot. */
    "whiteBalance": NamedNode<'http://www.w3.org/2003/12/exif/ns#whiteBalance'>;
    /** The chromaticity of the white point of the image. Normally this tag is not necessary, since color space is specified in the color space information tag (ColorSpace). */
    "whitePoint": NamedNode<'http://www.w3.org/2003/12/exif/ns#whitePoint'>;
    /** The number of pixels per ResolutionUnit in the ImageWidth direction. When the image resolution is unknown, 72 [dpi] is designated. */
    "xResolution": NamedNode<'http://www.w3.org/2003/12/exif/ns#xResolution'>;
    /** RGB形式からYCbCr形式に変換するための3つの係数。通常は0.299、0.587、0.114という値 */
    "yCbCrCoefficients": NamedNode<'http://www.w3.org/2003/12/exif/ns#yCbCrCoefficients'>;
    /** The position of chrominance components in relation to the luminance component. This field is designated only for JPEG compressed data or uncompressed YCbCr data. */
    "yCbCrPositioning": NamedNode<'http://www.w3.org/2003/12/exif/ns#yCbCrPositioning'>;
    /** The sampling ratio of chrominance components in relation to the luminance component. In JPEG compressed data a JPEG marker is used instead of this tag. */
    "yCbCrSubSampling": NamedNode<'http://www.w3.org/2003/12/exif/ns#yCbCrSubSampling'>;
    /** The number of pixels per ResolutionUnit in the ImageLength direction. The same value as XResolution is designated. */
    "yResolution": NamedNode<'http://www.w3.org/2003/12/exif/ns#yResolution'>;
    "subsecond": NamedNode<'http://www.w3.org/2003/12/exif/ns#subsecond'>;
}

const builder = namespace("http://www.w3.org/2003/12/exif/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Exif> & Exif;
export const loose = builder as NamespaceBuilder & Exif;
