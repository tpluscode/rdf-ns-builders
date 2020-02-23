import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Skosxl = NamespaceBuilder & {
    "Label": NamedNode;
    /*If C skosxl:altLabel L and L skosxl:literalForm V, then X skos:altLabel V.*/
    "altLabel": NamedNode;
    /*If C skosxl:hiddenLabel L and L skosxl:literalForm V, then C skos:hiddenLabel V.*/
    "hiddenLabel": NamedNode;
    "labelRelation": NamedNode;
    /*If two instances of the class skosxl:Label have the same literal form, they are not necessarily the same resource.*/
    "literalForm": NamedNode;
    /*If C skosxl:prefLabel L and L skosxl:literalForm V, then X skos:prefLabel V.*/
    "prefLabel": NamedNode;
};
export const skosxl: Skosxl = (namespace(prefixes.skosxl) as any);
