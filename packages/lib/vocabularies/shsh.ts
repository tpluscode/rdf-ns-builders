import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Shsh {
    '': NamedNode<'http://www.w3.org/ns/shacl-shacl#'>;
    "EntailmentShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#EntailmentShape'>;
    /** Defines constraints on what it means for a node to be a node within a well-formed RDF list. Note that this does not check whether the rdf:rest items are also well-formed lists as this would lead to unsupported recursion. */
    "ListNodeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ListNodeShape'>;
    /** A shape describing well-formed RDF lists. Currently does not check for non-recursion. This could be expressed using SHACL-SPARQL. */
    "ListShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ListShape'>;
    "NodeShapeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#NodeShapeShape'>;
    "PathListWithAtLeast2Members": NamedNode<'http://www.w3.org/ns/shacl-shacl#PathListWithAtLeast2Members'>;
    "PathNodeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#PathNodeShape'>;
    /** A shape that can be used to validate the syntax rules of well-formed SHACL paths. */
    "PathShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#PathShape'>;
    "PropertyShapeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#PropertyShapeShape'>;
    "ShapesGraphShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ShapesGraphShape'>;
    /** A shape that can be used to validate syntax rules for other shapes. */
    "ShapeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ShapeShape'>;
    "ShapesListShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ShapesListShape'>;
}

const builder = namespace("http://www.w3.org/ns/shacl-shacl#") as any;
export const strict = builder as NamespaceBuilder<keyof Shsh> & Shsh;
export const loose = builder as NamespaceBuilder & Shsh;
