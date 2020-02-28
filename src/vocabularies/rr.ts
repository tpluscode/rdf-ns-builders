import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Rr = NamespaceBuilder & {
    "BaseTableOrView": NamedNode;
    /*Denotes a blank node, used with termType*/
    "BlankNode": NamedNode;
    /*Represents a graph map.*/
    "GraphMap": NamedNode;
    /*Denotes an IRI, used with termpType.*/
    "IRI": NamedNode;
    /*Represents a join condition.*/
    "Join": NamedNode;
    /*Denotes a Literal, used with termType.*/
    "Literal": NamedNode;
    /*Represents a logical table.*/
    "LogicalTable": NamedNode;
    /*Represents an object map.*/
    "ObjectMap": NamedNode;
    /*Represents a predicate map.*/
    "PredicateMap": NamedNode;
    /*Represents a predicate-object map.*/
    "PredicateObjectMap": NamedNode;
    "R2RMLView": NamedNode;
    /*Denotes a reference to an object map.*/
    "RefObjectMap": NamedNode;
    /*Core SQL 2008*/
    "SQL2008": NamedNode;
    /*Represents a subject map.*/
    "SubjectMap": NamedNode;
    /*A function that generates an RDF term from a logical table row.*/
    "TermMap": NamedNode;
    /*Represents a triples map.*/
    "TriplesMap": NamedNode;
    /*Names a column in the child table of a join.*/
    "child": NamedNode;
    /*The subject value generated for a logical table row will be asserted as an instance of this RDFS class.*/
    "class": NamedNode;
    /*Name of a column in the logical table. When generating RDF triples from a logical table row, value from the specified column is used as the subject, predicate, or object (based upon the specific domain).*/
    "column": NamedNode;
    "constant": NamedNode;
    /*Specifies the datatype of the object component for the generated triple from a logical table row.*/
    "datatype": NamedNode;
    /*Denotes a default graph*/
    "defaultGraph": NamedNode;
    /*An IRI reference for use as the graph name of all triples generated with the GraphMap.*/
    "graph": NamedNode;
    /*Specifies a GraphMap. When used with a SubjectMap element, all the RDF triples generated from a logical row will be stored in the specified named graph. Otherwise, the RDF triple generated using the (predicate, object) pair will be stored in the specified named graph.*/
    "graphMap": NamedNode;
    /*An expression that allows, at query processing time, use of index-based access to the the (underlying) relational tables, instead of simply retrieving the table rows first and then applying a filter. This property is useful for retrieval based on conditions involving subject, predicate, or object generated from logical table column(s) and involves some transformation.*/
    "inverseExpression": NamedNode;
    /*Specifies the join condition for joining the child logical table with the parent logical table of the foreign key constraint.*/
    "joinCondition": NamedNode;
    /*Specified the language for the object component for the generated triple from a logical table row.*/
    "language": NamedNode;
    /*Definition of logical table to be mapped.*/
    "logicalTable": NamedNode;
    /*Specifies the object for the generated triple from the logical table row.*/
    "object": NamedNode;
    /*An ObjectMap element to generate the object component of the (predicate, object) pair from a logical table row.*/
    "objectMap": NamedNode;
    /*Names a column in the parent table of a join.*/
    "parent": NamedNode;
    /*Specifies the TriplesMap element corresponding to the parent logical table of the foreign key constraint.*/
    "parentTriplesMap": NamedNode;
    /*Specifies the predicate for the generated triple from the logical table row.*/
    "predicate": NamedNode;
    /*A PredicateMap element to generate the predicate component of the (predicate, object) pair from a logical table row.*/
    "predicateMap": NamedNode;
    /*A PredicateObjectMap element to generate (predicate, object) pair from a logical table row.*/
    "predicateObjectMap": NamedNode;
    /*A valid SQL query.*/
    "sqlQuery": NamedNode;
    /*An identifier for a SQL version.*/
    "sqlVersion": NamedNode;
    /*An IRI reference for use as subject for all the RDF triples generated from a logical table row.*/
    "subject": NamedNode;
    /*A SubjectMap element to generate a subject from a logical table row.*/
    "subjectMap": NamedNode;
    /*Schema-qualified name of a table or view.*/
    "tableName": NamedNode;
    /*A template (format string) to specify how to generate a value for a subject, predicate, or object, using one or more columns from a logical table row.*/
    "template": NamedNode;
    /*A string indicating whether subject or object generated using the value from column name specified for rr:column should be an IRI reference, blank node, or a literal.*/
    "termType": NamedNode;
};
export const rr: Rr = (namespace("http://www.w3.org/ns/r2rml#") as any);
