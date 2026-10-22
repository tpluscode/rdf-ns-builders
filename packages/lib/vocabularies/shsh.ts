import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Shsh {
    '': NamedNode<'http://www.w3.org/ns/shacl-shacl#'>;
    "1.2": NamedNode<'http://www.w3.org/ns/shacl-shacl#1.2'>;
    "DataGraphImportsShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#DataGraphImportsShape'>;
    "EntailmentShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#EntailmentShape'>;
    /** A shape that raises warnings on unsatisfiable lists.  If some use case requires a length-0 list on 'sh:in', this graph should be supplemented with 'shsh:inSubjectsShape sh:deactivated true .'. */
    "inSubjectsShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#inSubjectsShape'>;
    "inSubjectsShapeInPropertyShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#inSubjectsShapeInPropertyShape'>;
    /** Defines constraints on what it means for a node to be a node within a well-formed RDF list. Note that this does not check whether the rdf:rest items are also well-formed lists as this would lead to unsupported recursion. */
    "ListNodeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ListNodeShape'>;
    /** A shape describing well-formed RDF lists. Currently does not check for non-recursion (this could be expressed using SHACL-SPARQL). */
    "ListShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ListShape'>;
    "NodeShapeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#NodeShapeShape'>;
    "PathNodeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#PathNodeShape'>;
    /** A shape that can be used to validate the syntax rules of well-formed SHACL paths. */
    "PathShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#PathShape'>;
    "PropertyShapeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#PropertyShapeShape'>;
    "ShapesGraphShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ShapesGraphShape'>;
    /** A shape that can be used to validate syntax rules for other shapes. */
    "ShapeShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ShapeShape'>;
    "ShapesListShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#ShapesListShape'>;
    /** A shape that raises warnings on unsatisfiable lists.  If some use case requires a length-0 list on 'sh:xone', this graph should be supplemented with 'shsh:xoneSubjectsShape sh:deactivated true .'. */
    "xoneSubjectsShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#xoneSubjectsShape'>;
    "xoneSubjectsShapeXonePropertyShape": NamedNode<'http://www.w3.org/ns/shacl-shacl#xoneSubjectsShapeXonePropertyShape'>;
}

const builder = namespace("http://www.w3.org/ns/shacl-shacl#") as any;
export const strict = builder as NamespaceBuilder<keyof Shsh> & Shsh;
export const loose = builder as NamespaceBuilder & Shsh;
