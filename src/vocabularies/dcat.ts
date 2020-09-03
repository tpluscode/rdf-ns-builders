import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Dcat = NamespaceBuilder & {
    /*A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog).*/
    "Catalog": NamedNode<'http://www.w3.org/ns/dcat#Catalog'>;
    /*1つのデータセットを記述したデータ・カタログ内のレコード。*/
    "CatalogRecord": NamedNode<'http://www.w3.org/ns/dcat#CatalogRecord'>;
    /*A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources.*/
    "DataService": NamedNode<'http://www.w3.org/ns/dcat#DataService'>;
    /*1つのエージェントによって公開またはキュレートされ、1つ以上の形式でアクセスまたはダウンロードできるデータの集合。*/
    "Dataset": NamedNode<'http://www.w3.org/ns/dcat#Dataset'>;
    /*A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above).*/
    "Distribution": NamedNode<'http://www.w3.org/ns/dcat#Distribution'>;
    /*An association class for attaching additional information to a relationship between DCAT Resources.*/
    "Relationship": NamedNode<'http://www.w3.org/ns/dcat#Relationship'>;
    /*Recurso publicado o curado por un agente único.*/
    "Resource": NamedNode<'http://www.w3.org/ns/dcat#Resource'>;
    /*A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships.*/
    "Role": NamedNode<'http://www.w3.org/ns/dcat#Role'>;
    /*A site or end-point that gives access to the distribution of the dataset.*/
    "accessService": NamedNode<'http://www.w3.org/ns/dcat#accessService'>;
    /*A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred.*/
    "accessURL": NamedNode<'http://www.w3.org/ns/dcat#accessURL'>;
    "bbox": NamedNode<'http://www.w3.org/ns/dcat#bbox'>;
    /*El tamaño de una distribución en bytes.*/
    "byteSize": NamedNode<'http://www.w3.org/ns/dcat#byteSize'>;
    /*A catalog whose contents are of interest in the context of this catalog.*/
    "catalog": NamedNode<'http://www.w3.org/ns/dcat#catalog'>;
    "centroid": NamedNode<'http://www.w3.org/ns/dcat#centroid'>;
    /*El formato de la distribución en el que los datos están en forma comprimida, e.g. para reducir el tamaño del archivo a bajar.*/
    "compressFormat": NamedNode<'http://www.w3.org/ns/dcat#compressFormat'>;
    /*Información relevante de contacto para el recurso catalogado. Se recomienda el uso de vCard.*/
    "contactPoint": NamedNode<'http://www.w3.org/ns/dcat#contactPoint'>;
    /*A collection of data that is listed in the catalog.*/
    "dataset": NamedNode<'http://www.w3.org/ns/dcat#dataset'>;
    /*An available distribution of the dataset.*/
    "distribution": NamedNode<'http://www.w3.org/ns/dcat#distribution'>;
    /*Ceci est un lien direct à un fichier téléchargeable en un format donnée. Exple fichier CSV ou RDF. Le format est décrit par les propriétés de distribution dct:format et/ou dcat:mediaType.*/
    "downloadURL": NamedNode<'http://www.w3.org/ns/dcat#downloadURL'>;
    "endDate": NamedNode<'http://www.w3.org/ns/dcat#endDate'>;
    /*A description of the service end-point, including its operations, parameters etc.*/
    "endpointDescription": NamedNode<'http://www.w3.org/ns/dcat#endpointDescription'>;
    /*Kořenové umístění nebo hlavní přístupový bod služby (IRI přístupné přes Web).*/
    "endpointURL": NamedNode<'http://www.w3.org/ns/dcat#endpointURL'>;
    /*Funkce entity či agenta ve vztahu k jiné entitě či zdroji.*/
    "hadRole": NamedNode<'http://www.w3.org/ns/dcat#hadRole'>;
    /*A keyword or tag describing a resource.*/
    "keyword": NamedNode<'http://www.w3.org/ns/dcat#keyword'>;
    /*A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information.*/
    "landingPage": NamedNode<'http://www.w3.org/ns/dcat#landingPage'>;
    /*Cette propriété doit être utilisée quand c'est définit le type de média de la distribution en IANA, sinon dct:format DOIT être utilisé avec différentes valeurs.*/
    "mediaType": NamedNode<'http://www.w3.org/ns/dcat#mediaType'>;
    /*Balíčkový formát souboru, ve kterém je jeden či více souborů seskupeno dohromady, např. aby bylo možné stáhnout sadu souvisejících souborů naráz.*/
    "packageFormat": NamedNode<'http://www.w3.org/ns/dcat#packageFormat'>;
    /*Enlace a una descripción de la relación con otro recurso.*/
    "qualifiedRelation": NamedNode<'http://www.w3.org/ns/dcat#qualifiedRelation'>;
    /*A record describing the registration of a single dataset or data service that is part of the catalog.*/
    "record": NamedNode<'http://www.w3.org/ns/dcat#record'>;
    /*A collection of data that this DataService can distribute.*/
    "servesDataset": NamedNode<'http://www.w3.org/ns/dcat#servesDataset'>;
    /*A site or endpoint that is listed in the catalog.*/
    "service": NamedNode<'http://www.w3.org/ns/dcat#service'>;
    /*minimum spatial separation resolvable in a dataset, measured in meters.*/
    "spatialResolutionInMeters": NamedNode<'http://www.w3.org/ns/dcat#spatialResolutionInMeters'>;
    "startDate": NamedNode<'http://www.w3.org/ns/dcat#startDate'>;
    /*minimum time period resolvable in a dataset.*/
    "temporalResolution": NamedNode<'http://www.w3.org/ns/dcat#temporalResolution'>;
    /*A main category of the resource. A resource can have multiple themes.*/
    "theme": NamedNode<'http://www.w3.org/ns/dcat#theme'>;
    /*El sistema de organización del conocimiento utilizado para clasificar conjuntos de datos de catálogos.*/
    "themeTaxonomy": NamedNode<'http://www.w3.org/ns/dcat#themeTaxonomy'>;
};
export const dcat: Dcat = (namespace("http://www.w3.org/ns/dcat#") as any);
