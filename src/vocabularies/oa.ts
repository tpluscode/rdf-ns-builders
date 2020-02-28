import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Oa = NamespaceBuilder & {
    /*The class for Web Annotations.*/
    "Annotation": NamedNode;
    /*A subClass of  as:OrderedCollection  that conveys to a consuming application that it should select one of the resources in the  as:items  list to use, rather than all of them.  This is typically used to provide a choice of resources to render to the user, based on further supplied properties.  If the consuming application cannot determine the user's preference, then it should use the first in the list.*/
    "Choice": NamedNode;
    /*A CssSelector describes a Segment of interest in a representation that conforms to the Document Object Model through the use of the CSS selector specification.*/
    "CssSelector": NamedNode;
    /*A resource which describes styles for resources participating in the Annotation using CSS.*/
    "CssStyle": NamedNode;
    /*DataPositionSelector describes a range of data by recording the start and end positions of the selection in the stream. Position 0 would be immediately before the first byte, position 1 would be immediately before the second byte, and so on. The start byte is thus included in the list, but the end byte is not.*/
    "DataPositionSelector": NamedNode;
    /*A class to encapsulate the different text directions that a textual resource might take.  It is not used directly in the Annotation Model, only its three instances.*/
    "Direction": NamedNode;
    /*The FragmentSelector class is used to record the segment of a representation using the IRI fragment specification defined by the representation's media type.*/
    "FragmentSelector": NamedNode;
    /*The HttpRequestState class is used to record the HTTP request headers that a client SHOULD use to request the correct representation from the resource. */
    "HttpRequestState": NamedNode;
    /*The Motivation class is used to record the user's intent or motivation for the creation of the Annotation, or the inclusion of the body or target, that it is associated with.*/
    "Motivation": NamedNode;
    /*An IRI to signal the client prefers to receive full descriptions of the Annotations from a container, not just their IRIs.*/
    "PreferContainedDescriptions": NamedNode;
    /*An IRI to signal that the client prefers to receive only the IRIs of the Annotations from a container, not their full descriptions.*/
    "PreferContainedIRIs": NamedNode;
    /*A Range Selector can be used to identify the beginning and the end of the selection by using other Selectors. The selection consists of everything from the beginning of the starting selector through to the beginning of the ending selector, but not including it.*/
    "RangeSelector": NamedNode;
    /*Instances of the ResourceSelection class identify part (described by an oa:Selector) of another resource (referenced with oa:hasSource), possibly from a particular representation of a resource (described by an oa:State). Please note that ResourceSelection is not used directly in the Web Annotation model, but is provided as a separate class for further application profiles to use, separate from oa:SpecificResource which has many Annotation specific features.*/
    "ResourceSelection": NamedNode;
    /*A resource which describes the segment of interest in a representation of a Source resource, indicated with oa:hasSelector from the Specific Resource. This class is not used directly in the Annotation model, only its subclasses.*/
    "Selector": NamedNode;
    /*Instances of the SpecificResource class identify part of another resource (referenced with oa:hasSource), a particular representation of a resource, a resource with styling hints for renders, or any combination of these, as used within an Annotation.*/
    "SpecificResource": NamedNode;
    /*A State describes the intended state of a resource as applied to the particular Annotation, and thus provides the information needed to retrieve the correct representation of that resource.*/
    "State": NamedNode;
    /*A Style describes the intended styling of a resource as applied to the particular Annotation, and thus provides the information to ensure that rendering is consistent across implementations.*/
    "Style": NamedNode;
    /*An SvgSelector defines an area through the use of the Scalable Vector Graphics [SVG] standard. This allows the user to select a non-rectangular area of the content, such as a circle or polygon by describing the region using SVG. The SVG may be either embedded within the Annotation or referenced as an External Resource.*/
    "SvgSelector": NamedNode;
    /*The TextPositionSelector describes a range of text by recording the start and end positions of the selection in the stream. Position 0 would be immediately before the first character, position 1 would be immediately before the second character, and so on.*/
    "TextPositionSelector": NamedNode;
    /*The TextQuoteSelector describes a range of text by copying it, and including some of the text immediately before (a prefix) and after (a suffix) it to distinguish between multiple copies of the same sequence of characters.*/
    "TextQuoteSelector": NamedNode;
    "TextualBody": NamedNode;
    /*A TimeState records the time at which the resource's state is appropriate for the Annotation, typically the time that the Annotation was created and/or a link to a persistent copy of the current version.*/
    "TimeState": NamedNode;
    /* An XPathSelector is used to select elements and content within a resource that supports the Document Object Model via a specified XPath value.*/
    "XPathSelector": NamedNode;
    /*The object of the relationship is the end point of a service that conforms to the annotation-protocol, and it may be associated with any resource.  The expectation of asserting the relationship is that the object is the preferred service for maintaining annotations about the subject resource, according to the publisher of the relationship.
    
      This relationship is intended to be used both within Linked Data descriptions and as the  rel  type of a Link, via HTTP Link Headers rfc5988 for binary resources and in HTML <link> elements.  For more information about these, please see the Annotation Protocol specification annotation-protocol.
      */
    "annotationService": NamedNode;
    /*The motivation for when the user intends to provide an assessment about the Target resource.*/
    "assessing": NamedNode;
    /*The object of the predicate is a plain text string to be used as the content of the body of the Annotation.  The value MUST be an  xsd:string  and that data type MUST NOT be expressed in the serialization. Note that language MUST NOT be associated with the value either as a language tag, as that is only available for  rdf:langString .
      */
    "bodyValue": NamedNode;
    /*The motivation for when the user intends to create a bookmark to the Target or part thereof.*/
    "bookmarking": NamedNode;
    /*A object of the relationship is a copy of the Source resource's representation, appropriate for the Annotation.*/
    "cachedSource": NamedNode;
    /*A object of the relationship is the canonical IRI that can always be used to deduplicate the Annotation, regardless of the current IRI used to access the representation.*/
    "canonical": NamedNode;
    /*The motivation for when the user intends to that classify the Target as something.*/
    "classifying": NamedNode;
    /*The motivation for when the user intends to comment about the Target.*/
    "commenting": NamedNode;
    /*The motivation for when the user intends to describe the Target, as opposed to a comment about them.*/
    "describing": NamedNode;
    /*The motivation for when the user intends to request a change or edit to the Target resource.*/
    "editing": NamedNode;
    /*The end property is used to convey the 0-based index of the end position of a range of content.*/
    "end": NamedNode;
    /*The object of the predicate is a copy of the text which is being selected, after normalization.*/
    "exact": NamedNode;
    /*The object of the relationship is a resource that is a body of the Annotation.*/
    "hasBody": NamedNode;
    /*The relationship between a RangeSelector and the Selector that describes the end position of the range. */
    "hasEndSelector": NamedNode;
    /*The purpose served by the resource in the Annotation.*/
    "hasPurpose": NamedNode;
    /*The scope or context in which the resource is used within the Annotation.*/
    "hasScope": NamedNode;
    /*The object of the relationship is a Selector that describes the segment or region of interest within the source resource.  Please note that the domain ( oa:ResourceSelection ) is not used directly in the Web Annotation model.*/
    "hasSelector": NamedNode;
    /*The resource that the ResourceSelection, or its subclass SpecificResource, is refined from, or more specific than. Please note that the domain ( oa:ResourceSelection ) is not used directly in the Web Annotation model.*/
    "hasSource": NamedNode;
    /*The relationship between a RangeSelector and the Selector that describes the start position of the range. */
    "hasStartSelector": NamedNode;
    /*The relationship between the ResourceSelection, or its subclass SpecificResource, and a State resource. Please note that the domain ( oa:ResourceSelection ) is not used directly in the Web Annotation model.*/
    "hasState": NamedNode;
    /*The relationship between an Annotation and its Target.*/
    "hasTarget": NamedNode;
    /*The motivation for when the user intends to highlight the Target resource or segment of it.*/
    "highlighting": NamedNode;
    /*The motivation for when the user intends to assign an identity to the Target or identify what is being depicted or described in the Target.*/
    "identifying": NamedNode;
    /*The motivation for when the user intends to link to a resource related to the Target.*/
    "linking": NamedNode;
    /*The direction of text that is read from left to right.*/
    "ltrDirection": NamedNode;
    /*The motivation for when the user intends to assign some value or quality to the Target.*/
    "moderating": NamedNode;
    /*The relationship between an Annotation and a Motivation that describes the reason for the Annotation's creation.*/
    "motivatedBy": NamedNode;
    /*The object of the property is a snippet of content that occurs immediately before the content which is being selected by the Selector.*/
    "prefix": NamedNode;
    /*The object of the property is the language that should be used for textual processing algorithms when dealing with the content of the resource, including hyphenation, line breaking, which font to use for rendering and so forth.  The value must follow the recommendations of BCP47.*/
    "processingLanguage": NamedNode;
    /*The motivation for when the user intends to ask a question about the Target.*/
    "questioning": NamedNode;
    /*The relationship between a Selector and another Selector or a State and a Selector or State that should be applied to the results of the first to refine the processing of the source resource. */
    "refinedBy": NamedNode;
    /*A system that was used by the application that created the Annotation to render the resource.*/
    "renderedVia": NamedNode;
    /*The motivation for when the user intends to reply to a previous statement, either an Annotation or another resource.*/
    "replying": NamedNode;
    /*The direction of text that is read from right to left.*/
    "rtlDirection": NamedNode;
    /*The timestamp at which the Source resource should be interpreted as being applicable to the Annotation.*/
    "sourceDate": NamedNode;
    /*The end timestamp of the interval over which the Source resource should be interpreted as being applicable to the Annotation.*/
    "sourceDateEnd": NamedNode;
    /*The start timestamp of the interval over which the Source resource should be interpreted as being applicable to the Annotation.*/
    "sourceDateStart": NamedNode;
    /*The start position in a 0-based index at which a range of content is selected from the data in the source resource.*/
    "start": NamedNode;
    /*The name of the class used in the CSS description referenced from the Annotation that should be applied to the Specific Resource.*/
    "styleClass": NamedNode;
    /*A reference to a Stylesheet that should be used to apply styles to the Annotation rendering.*/
    "styledBy": NamedNode;
    /*The snippet of text that occurs immediately after the text which is being selected.*/
    "suffix": NamedNode;
    /*The motivation for when the user intends to associate a tag with the Target.*/
    "tagging": NamedNode;
    /*The direction of the text of the subject resource. There MUST only be one text direction associated with any given resource.*/
    "textDirection": NamedNode;
    /*A object of the relationship is a resource from which the source resource was retrieved by the providing system.*/
    "via": NamedNode;
};
export const oa: Oa = (namespace("http://www.w3.org/ns/oa#") as any);
