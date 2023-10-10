import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Grddl {
    '': NamedNode<'http://www.w3.org/2003/g/data-view#'>;
    /** A resource which has the property that all of its essential characteristics can be conveyed in a message */
    "InformationResource": NamedNode<'http://www.w3.org/2003/g/data-view#InformationResource'>;
    /**
     * a
     *     set of RDF triples
     */
    "RDFGraph": NamedNode<'http://www.w3.org/2003/g/data-view#RDFGraph'>;
    /**
     * the root of the tree in the XPath data
     *     model
     */
    "RootNode": NamedNode<'http://www.w3.org/2003/g/data-view#RootNode'>;
    /**
     * an InformationResource that specifies
     *     a transformation from a set of XML documents to RDF graphs
     */
    "Transformation": NamedNode<'http://www.w3.org/2003/g/data-view#Transformation'>;
    /**
     * relates a transformation to the algorithm
     *     specified by the property that computes an RDF graph from an XML
     *     document node
     */
    "transformationProperty": NamedNode<'http://www.w3.org/2003/g/data-view#transformationProperty'>;
    /**
     * a FunctionalProperty that relates
     *     XML document root nodes to
     *     RDF graphs
     */
    "TransformationProperty": NamedNode<'http://www.w3.org/2003/g/data-view#TransformationProperty'>;
    "danc": NamedNode<'http://www.w3.org/2003/g/data-view#danc'>;
    "grddl-wg": NamedNode<'http://www.w3.org/2003/g/data-view#grddl-wg'>;
    "grddlProject": NamedNode<'http://www.w3.org/2003/g/data-view#grddlProject'>;
    /**
     * relates a namespace to a transformation for
     *     all documents in that namespace
     */
    "namespaceTransformation": NamedNode<'http://www.w3.org/2003/g/data-view#namespaceTransformation'>;
    /**
     * relates a profile document to a
     *     transformation for all documents bearing that profile
     */
    "profileTransformation": NamedNode<'http://www.w3.org/2003/g/data-view#profileTransformation'>;
    /**
     * an
     *     RDF graph obtained from an information resource by directly
     *     parsing a representation in the standard RDF/XML syntax or
     *     indirectly by parsing some other dialect using a transformation
     *     nominated by the document
     */
    "result": NamedNode<'http://www.w3.org/2003/g/data-view#result'>;
    /**
     * relates a source document to a
     *     transformation, usually represented in XSLT, that relates the source document syntax
     *     to the RDF graph syntax
     */
    "transformation": NamedNode<'http://www.w3.org/2003/g/data-view#transformation'>;
}

const builder = namespace("http://www.w3.org/2003/g/data-view#") as any;
export const strict = builder as NamespaceBuilder<keyof Grddl> & Grddl;
export const loose = builder as NamespaceBuilder & Grddl;
