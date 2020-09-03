import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Skosxl = NamespaceBuilder & {
    "Label": NamedNode<'http://www.w3.org/2008/05/skos-xl#Label'>;
    /*If C skosxl:altLabel L and L skosxl:literalForm V, then X skos:altLabel V.*/
    "altLabel": NamedNode<'http://www.w3.org/2008/05/skos-xl#altLabel'>;
    /*If C skosxl:hiddenLabel L and L skosxl:literalForm V, then C skos:hiddenLabel V.*/
    "hiddenLabel": NamedNode<'http://www.w3.org/2008/05/skos-xl#hiddenLabel'>;
    "labelRelation": NamedNode<'http://www.w3.org/2008/05/skos-xl#labelRelation'>;
    /*If two instances of the class skosxl:Label have the same literal form, they are not necessarily the same resource.*/
    "literalForm": NamedNode<'http://www.w3.org/2008/05/skos-xl#literalForm'>;
    /*If C skosxl:prefLabel L and L skosxl:literalForm V, then X skos:prefLabel V.*/
    "prefLabel": NamedNode<'http://www.w3.org/2008/05/skos-xl#prefLabel'>;
};
export const skosxl: Skosxl = (namespace("http://www.w3.org/2008/05/skos-xl#") as any);
