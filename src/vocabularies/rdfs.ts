import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Rdfs = NamespaceBuilder & {
    /*The class of classes.*/
    "Class": NamedNode;
    /*The class of RDF containers.*/
    "Container": NamedNode;
    /*The class of container membership properties, rdf:_1, rdf:_2, ...,
                        all of which are sub-properties of 'member'.*/
    "ContainerMembershipProperty": NamedNode;
    /*The class of RDF datatypes.*/
    "Datatype": NamedNode;
    /*The class of literal values, eg. textual strings and integers.*/
    "Literal": NamedNode;
    /*The class resource, everything.*/
    "Resource": NamedNode;
    /*A description of the subject resource.*/
    "comment": NamedNode;
    /*A domain of the subject property.*/
    "domain": NamedNode;
    /*The defininition of the subject resource.*/
    "isDefinedBy": NamedNode;
    /*A human-readable name for the subject.*/
    "label": NamedNode;
    /*A member of the subject resource.*/
    "member": NamedNode;
    /*A range of the subject property.*/
    "range": NamedNode;
    /*Further information about the subject resource.*/
    "seeAlso": NamedNode;
    /*The subject is a subclass of a class.*/
    "subClassOf": NamedNode;
    /*The subject is a subproperty of a property.*/
    "subPropertyOf": NamedNode;
};
export const rdfs: Rdfs = (namespace("http://www.w3.org/2000/01/rdf-schema#") as any);
