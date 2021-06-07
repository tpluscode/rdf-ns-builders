import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Rr {
    "BaseTableOrView": NamedNode<'http://www.w3.org/ns/r2rml#BaseTableOrView'>;
    /** Denotes a blank node, used with termType */
    "BlankNode": NamedNode<'http://www.w3.org/ns/r2rml#BlankNode'>;
    /** Represents a graph map. */
    "GraphMap": NamedNode<'http://www.w3.org/ns/r2rml#GraphMap'>;
    /** Denotes an IRI, used with termpType. */
    "IRI": NamedNode<'http://www.w3.org/ns/r2rml#IRI'>;
    /** Represents a join condition. */
    "Join": NamedNode<'http://www.w3.org/ns/r2rml#Join'>;
    /** Denotes a Literal, used with termType. */
    "Literal": NamedNode<'http://www.w3.org/ns/r2rml#Literal'>;
    /** Represents a logical table. */
    "LogicalTable": NamedNode<'http://www.w3.org/ns/r2rml#LogicalTable'>;
    /** Represents an object map. */
    "ObjectMap": NamedNode<'http://www.w3.org/ns/r2rml#ObjectMap'>;
    /** Represents a predicate map. */
    "PredicateMap": NamedNode<'http://www.w3.org/ns/r2rml#PredicateMap'>;
    /** Represents a predicate-object map. */
    "PredicateObjectMap": NamedNode<'http://www.w3.org/ns/r2rml#PredicateObjectMap'>;
    "R2RMLView": NamedNode<'http://www.w3.org/ns/r2rml#R2RMLView'>;
    /** Denotes a reference to an object map. */
    "RefObjectMap": NamedNode<'http://www.w3.org/ns/r2rml#RefObjectMap'>;
    /** Core SQL 2008 */
    "SQL2008": NamedNode<'http://www.w3.org/ns/r2rml#SQL2008'>;
    /** Represents a subject map. */
    "SubjectMap": NamedNode<'http://www.w3.org/ns/r2rml#SubjectMap'>;
    /** A function that generates an RDF term from a logical table row. */
    "TermMap": NamedNode<'http://www.w3.org/ns/r2rml#TermMap'>;
    /** Represents a triples map. */
    "TriplesMap": NamedNode<'http://www.w3.org/ns/r2rml#TriplesMap'>;
    /** Names a column in the child table of a join. */
    "child": NamedNode<'http://www.w3.org/ns/r2rml#child'>;
    /** The subject value generated for a logical table row will be asserted as an instance of this RDFS class. */
    "class": NamedNode<'http://www.w3.org/ns/r2rml#class'>;
    /** Name of a column in the logical table. When generating RDF triples from a logical table row, value from the specified column is used as the subject, predicate, or object (based upon the specific domain). */
    "column": NamedNode<'http://www.w3.org/ns/r2rml#column'>;
    "constant": NamedNode<'http://www.w3.org/ns/r2rml#constant'>;
    /** Specifies the datatype of the object component for the generated triple from a logical table row. */
    "datatype": NamedNode<'http://www.w3.org/ns/r2rml#datatype'>;
    /** Denotes a default graph */
    "defaultGraph": NamedNode<'http://www.w3.org/ns/r2rml#defaultGraph'>;
    /** An IRI reference for use as the graph name of all triples generated with the GraphMap. */
    "graph": NamedNode<'http://www.w3.org/ns/r2rml#graph'>;
    /** Specifies a GraphMap. When used with a SubjectMap element, all the RDF triples generated from a logical row will be stored in the specified named graph. Otherwise, the RDF triple generated using the (predicate, object) pair will be stored in the specified named graph. */
    "graphMap": NamedNode<'http://www.w3.org/ns/r2rml#graphMap'>;
    /** An expression that allows, at query processing time, use of index-based access to the the (underlying) relational tables, instead of simply retrieving the table rows first and then applying a filter. This property is useful for retrieval based on conditions involving subject, predicate, or object generated from logical table column(s) and involves some transformation. */
    "inverseExpression": NamedNode<'http://www.w3.org/ns/r2rml#inverseExpression'>;
    /** Specifies the join condition for joining the child logical table with the parent logical table of the foreign key constraint. */
    "joinCondition": NamedNode<'http://www.w3.org/ns/r2rml#joinCondition'>;
    /** Specified the language for the object component for the generated triple from a logical table row. */
    "language": NamedNode<'http://www.w3.org/ns/r2rml#language'>;
    /** Definition of logical table to be mapped. */
    "logicalTable": NamedNode<'http://www.w3.org/ns/r2rml#logicalTable'>;
    /** Specifies the object for the generated triple from the logical table row. */
    "object": NamedNode<'http://www.w3.org/ns/r2rml#object'>;
    /** An ObjectMap element to generate the object component of the (predicate, object) pair from a logical table row. */
    "objectMap": NamedNode<'http://www.w3.org/ns/r2rml#objectMap'>;
    /** Names a column in the parent table of a join. */
    "parent": NamedNode<'http://www.w3.org/ns/r2rml#parent'>;
    /** Specifies the TriplesMap element corresponding to the parent logical table of the foreign key constraint. */
    "parentTriplesMap": NamedNode<'http://www.w3.org/ns/r2rml#parentTriplesMap'>;
    /** Specifies the predicate for the generated triple from the logical table row. */
    "predicate": NamedNode<'http://www.w3.org/ns/r2rml#predicate'>;
    /** A PredicateMap element to generate the predicate component of the (predicate, object) pair from a logical table row. */
    "predicateMap": NamedNode<'http://www.w3.org/ns/r2rml#predicateMap'>;
    /** A PredicateObjectMap element to generate (predicate, object) pair from a logical table row. */
    "predicateObjectMap": NamedNode<'http://www.w3.org/ns/r2rml#predicateObjectMap'>;
    /** A valid SQL query. */
    "sqlQuery": NamedNode<'http://www.w3.org/ns/r2rml#sqlQuery'>;
    /** An identifier for a SQL version. */
    "sqlVersion": NamedNode<'http://www.w3.org/ns/r2rml#sqlVersion'>;
    /** An IRI reference for use as subject for all the RDF triples generated from a logical table row. */
    "subject": NamedNode<'http://www.w3.org/ns/r2rml#subject'>;
    /** A SubjectMap element to generate a subject from a logical table row. */
    "subjectMap": NamedNode<'http://www.w3.org/ns/r2rml#subjectMap'>;
    /** Schema-qualified name of a table or view. */
    "tableName": NamedNode<'http://www.w3.org/ns/r2rml#tableName'>;
    /** A template (format string) to specify how to generate a value for a subject, predicate, or object, using one or more columns from a logical table row. */
    "template": NamedNode<'http://www.w3.org/ns/r2rml#template'>;
    /** A string indicating whether subject or object generated using the value from column name specified for rr:column should be an IRI reference, blank node, or a literal. */
    "termType": NamedNode<'http://www.w3.org/ns/r2rml#termType'>;
}

const builder = namespace("http://www.w3.org/ns/r2rml#") as any;
export const strict = builder as NamespaceBuilder<keyof Rr> & Rr;
export const loose = builder as NamespaceBuilder & Rr;
