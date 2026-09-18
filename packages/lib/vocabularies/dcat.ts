import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Dcat {
    '': NamedNode<'http://www.w3.org/ns/dcat#'>;
    /** A site or end-point that gives access to the distribution of the dataset. */
    "accessService": NamedNode<'http://www.w3.org/ns/dcat#accessService'>;
    /** A URL of a resource that gives access to a distribution of the dataset. E.g. landing page, feed, SPARQL endpoint. Use for all cases except a simple download link, in which case downloadURL is preferred. */
    "accessURL": NamedNode<'http://www.w3.org/ns/dcat#accessURL'>;
    /** Den geografiske omskrevne firkant af en ressource. */
    "bbox": NamedNode<'http://www.w3.org/ns/dcat#bbox'>;
    /** El tamaño de una distribución en bytes. */
    "byteSize": NamedNode<'http://www.w3.org/ns/dcat#byteSize'>;
    /** A catalog that is listed in the catalog. */
    "catalog": NamedNode<'http://www.w3.org/ns/dcat#catalog'>;
    /** A curated collection of metadata about resources (e.g., datasets and data services in the context of a data catalog). */
    "Catalog": NamedNode<'http://www.w3.org/ns/dcat#Catalog'>;
    /** 1つのデータセットを記述したデータ・カタログ内のレコード。 */
    "CatalogRecord": NamedNode<'http://www.w3.org/ns/dcat#CatalogRecord'>;
    /** Det geometrisk tyngdepunkt (centroid) for en ressource. */
    "centroid": NamedNode<'http://www.w3.org/ns/dcat#centroid'>;
    /** El formato de la distribución en el que los datos están en forma comprimida, e.g. para reducir el tamaño del archivo a bajar. */
    "compressFormat": NamedNode<'http://www.w3.org/ns/dcat#compressFormat'>;
    /** Información relevante de contacto para el recurso catalogado. Se recomienda el uso de vCard. */
    "contactPoint": NamedNode<'http://www.w3.org/ns/dcat#contactPoint'>;
    /** A site or end-point providing operations related to the discovery of, access to, or processing functions on, data or related resources. */
    "DataService": NamedNode<'http://www.w3.org/ns/dcat#DataService'>;
    /** A dataset that is listed in the catalog. */
    "dataset": NamedNode<'http://www.w3.org/ns/dcat#dataset'>;
    /** 1つのエージェントによって公開またはキュレートされ、1つ以上の形式でアクセスまたはダウンロードできるデータの集合。 */
    "Dataset": NamedNode<'http://www.w3.org/ns/dcat#Dataset'>;
    /** A collection of datasets that are published separately, but share some characteristics that group them. */
    "DatasetSeries": NamedNode<'http://www.w3.org/ns/dcat#DatasetSeries'>;
    /** An available distribution of the dataset. */
    "distribution": NamedNode<'http://www.w3.org/ns/dcat#distribution'>;
    /** A specific representation of a dataset. A dataset might be available in multiple serializations that may differ in various ways, including natural language, media-type or format, schematic organization, temporal and spatial resolution, level of detail or profiles (which might specify any or all of the above). */
    "Distribution": NamedNode<'http://www.w3.org/ns/dcat#Distribution'>;
    /** Ceci est un lien direct à un fichier téléchargeable en un format donnée. Exple fichier CSV ou RDF. Le format est décrit par les propriétés de distribution dcterms:format et/ou dcat:mediaType. */
    "downloadURL": NamedNode<'http://www.w3.org/ns/dcat#downloadURL'>;
    /** El fin del período. */
    "endDate": NamedNode<'http://www.w3.org/ns/dcat#endDate'>;
    /** A description of the service end-point, including its operations, parameters etc. */
    "endpointDescription": NamedNode<'http://www.w3.org/ns/dcat#endpointDescription'>;
    /** Kořenové umístění nebo hlavní přístupový bod služby (IRI přístupné přes Web). */
    "endpointURL": NamedNode<'http://www.w3.org/ns/dcat#endpointURL'>;
    /** El primer recurso en una colección ordenada o serie de recursos, al que el recurso pertenece. */
    "first": NamedNode<'http://www.w3.org/ns/dcat#first'>;
    /** Den funktion en entitet eller aktør har i forhold til en anden ressource. */
    "hadRole": NamedNode<'http://www.w3.org/ns/dcat#hadRole'>;
    /** Este recurso es más específico y versionado con contenido equivalente [PAV]. */
    "hasCurrentVersion": NamedNode<'http://www.w3.org/ns/dcat#hasCurrentVersion'>;
    /** Este recurso tiene una versión específica. */
    "hasVersion": NamedNode<'http://www.w3.org/ns/dcat#hasVersion'>;
    "inCatalog": NamedNode<'http://www.w3.org/ns/dcat#inCatalog'>;
    /** A dataset series of which the dataset is part. */
    "inSeries": NamedNode<'http://www.w3.org/ns/dcat#inSeries'>;
    "isDistributionOf": NamedNode<'http://www.w3.org/ns/dcat#isDistributionOf'>;
    "isVersionOf": NamedNode<'http://www.w3.org/ns/dcat#isVersionOf'>;
    /** A keyword or tag describing a resource. */
    "keyword": NamedNode<'http://www.w3.org/ns/dcat#keyword'>;
    /** A Web page that can be navigated to in a Web browser to gain access to the catalog, a dataset, its distributions and/or additional information. */
    "landingPage": NamedNode<'http://www.w3.org/ns/dcat#landingPage'>;
    /** El último recurso en una colección ordenada o serie de recursos, al que el recurso pertenece. */
    "last": NamedNode<'http://www.w3.org/ns/dcat#last'>;
    /** Cette propriété doit être utilisée quand c'est définit le type de média de la distribution en IANA, sinon dcterms:format DOIT être utilisé avec différentes valeurs. */
    "mediaType": NamedNode<'http://www.w3.org/ns/dcat#mediaType'>;
    "next": NamedNode<'http://www.w3.org/ns/dcat#next'>;
    "nextVersion": NamedNode<'http://www.w3.org/ns/dcat#nextVersion'>;
    /** Balíčkový formát souboru, ve kterém je jeden či více souborů seskupeno dohromady, např. aby bylo možné stáhnout sadu souvisejících souborů naráz. */
    "packageFormat": NamedNode<'http://www.w3.org/ns/dcat#packageFormat'>;
    /** La risorsa precedente a quella attuale in una collezione ordinata o in una serie di risorse. */
    "prev": NamedNode<'http://www.w3.org/ns/dcat#prev'>;
    /** La versione precedente di una risorsa. */
    "previousVersion": NamedNode<'http://www.w3.org/ns/dcat#previousVersion'>;
    /** Enlace a una descripción de la relación con otro recurso. */
    "qualifiedRelation": NamedNode<'http://www.w3.org/ns/dcat#qualifiedRelation'>;
    /** A record describing the registration of a single dataset or data service that is part of the catalog. */
    "record": NamedNode<'http://www.w3.org/ns/dcat#record'>;
    /** An association class for attaching additional information to a relationship between DCAT Resources. */
    "Relationship": NamedNode<'http://www.w3.org/ns/dcat#Relationship'>;
    /** A resource that is listed in the catalog. */
    "resource": NamedNode<'http://www.w3.org/ns/dcat#resource'>;
    /** Recurso publicado o curado por un agente único. */
    "Resource": NamedNode<'http://www.w3.org/ns/dcat#Resource'>;
    /** A role is the function of a resource or agent with respect to another resource, in the context of resource attribution or resource relationships. */
    "Role": NamedNode<'http://www.w3.org/ns/dcat#Role'>;
    "seriesMember": NamedNode<'http://www.w3.org/ns/dcat#seriesMember'>;
    /** A collection of data that this DataService can distribute. */
    "servesDataset": NamedNode<'http://www.w3.org/ns/dcat#servesDataset'>;
    /** A service that is listed in the catalog. */
    "service": NamedNode<'http://www.w3.org/ns/dcat#service'>;
    /** mindste geografiske afstand som kan erkendes i et datasæt, målt i meter. */
    "spatialResolutionInMeters": NamedNode<'http://www.w3.org/ns/dcat#spatialResolutionInMeters'>;
    "startDate": NamedNode<'http://www.w3.org/ns/dcat#startDate'>;
    /** mindste tidsperiode der kan resolveres i datasættet. */
    "temporalResolution": NamedNode<'http://www.w3.org/ns/dcat#temporalResolution'>;
    /** A main category of the resource. A resource can have multiple themes. */
    "theme": NamedNode<'http://www.w3.org/ns/dcat#theme'>;
    /** El sistema de organización del conocimiento utilizado para clasificar conjuntos de datos de catálogos. */
    "themeTaxonomy": NamedNode<'http://www.w3.org/ns/dcat#themeTaxonomy'>;
    /** El indicador de versión (nombre o identificador) del recurso. */
    "version": NamedNode<'http://www.w3.org/ns/dcat#version'>;
}

const builder = namespace("http://www.w3.org/ns/dcat#") as any;
export const strict = builder as NamespaceBuilder<keyof Dcat> & Dcat;
export const loose = builder as NamespaceBuilder & Dcat;
