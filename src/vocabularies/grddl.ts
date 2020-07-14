import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Grddl = NamespaceBuilder & {
    /*A resource which has the property that all of its essential characteristics can be conveyed in a message*/
    "InformationResource": NamedNode;
    /*a
        set of RDF triples*/
    "RDFGraph": NamedNode;
    /*the root of the tree in the XPath data
        model*/
    "RootNode": NamedNode;
    /*an InformationResource that specifies
        a transformation from a set of XML documents to RDF graphs*/
    "Transformation": NamedNode;
    /*a FunctionalProperty that relates
        XML document root nodes to
        RDF graphs*/
    "TransformationProperty": NamedNode;
    "danc": NamedNode;
    "grddl-wg": NamedNode;
    "grddlProject": NamedNode;
    /*relates a namespace to a transformation for
        all documents in that namespace*/
    "namespaceTransformation": NamedNode;
    /*relates a profile document to a
        transformation for all documents bearing that profile*/
    "profileTransformation": NamedNode;
    /*an
        RDF graph obtained from an information resource by directly
        parsing a representation in the standard RDF/XML syntax or
        indirectly by parsing some other dialect using a transformation
        nominated by the document*/
    "result": NamedNode;
    /*relates a source document to a
        transformation, usually represented in XSLT, that relates the source document syntax
        to the RDF graph syntax*/
    "transformation": NamedNode;
    /*relates a transformation to the algorithm
        specified by the property that computes an RDF graph from an XML
        document node*/
    "transformationProperty": NamedNode;
};
export const grddl: Grddl = (namespace("http://www.w3.org/2003/g/data-view#") as any);
