import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Org = NamespaceBuilder & {
    /*Evento que da como resultado un cambio sustancial en la organización, por ejemplo, una fusión o una reestructuración total. Está pensado para situaciones en las que la organización resultante es lo suficientemente distinta de las organizaciones originales, tiene una identidad distinta y una URI también distinta. Se deberían definir subtipos de eventos mediante vocabularios específicos (Extension vocabularies) para referirse a categorías de eventos específicos. El momento o periodo en el que el evento ocurre se debería expresar mediante las propiedades `prov:startAtTime` y `prov:endedAtTime`, y una descripción del mismo se debería incluir mediante el uso de la propiedad `dct:description`.*/
    "ChangeEvent": NamedNode;
    /*An Organization which is recognized in the world at large, in particular in legal jurisdictions, with associated rights and responsibilities. Examples include a Corporation, Charity, Government or Church. Note that this is a super class of `gr:BusinessEntity` and it is recommended to use the GoodRelations vocabulary to denote Business classifications such as DUNS or NAICS.*/
    "FormalOrganization": NamedNode;
    /*A role corresponding to the `org:headOf` property*/
    "Head": NamedNode;
    /*Indica la natura della relazione di appartenenza di un Agent in un'organizzazione. Rappresenta una relazione n-aria tra un'Agent, un Organization e un Role. È possibile indicare direttamente la membership, indipendentemente dallo specifico Role, attraverso l'uso della proprietà `org:memberOf`*/
    "Membership": NamedNode;
    /*Grupo de personas que se organiza en una comunidad u otro tipo de estructura social, comercial o política. Dicho grupo tiene un objetivo o motivo común para su existencia que va más allá del conjunto de personas que lo forman y que puede actuar como “agente”. A menudo las organizaciones se pueden agrupar en estructuras jerárquicas. Se recomienda el uso de etiquetas de SKOS para denominar a cada “organización”. En concreto, `skos:prefLabel` para la denominación principal o recomendada (aquella reconocida legalmente, siempre que sea posible), `skos:altLabel` para denominaciones alternativas (nombre comercial, sigla, denominación por la que se conoce a la organización coloquialmente) y `skos:notation` para referirse al código que identifique a la organización en una lista de códigos. Denominaciones alternativas: _colectivo_ _corporación_ _grupo_*/
    "Organization": NamedNode;
    /*A collaboration between two or more Organizations such as a project. It meets the criteria for being an Organization in that it has an identity and defining purpose independent of its particular members but is neither a formally recognized legal entity nor a sub-unit within some larger organization. Might typically have a shorter lifetime than the Organizations within it, but not necessarily. All members are `org:Organization`s rather than individuals and those Organizations can play particular roles within the venture. Alternative names: _Project_ _Venture_  _Endeavour_ _Consortium_ _Endeavour_*/
    "OrganizationalCollaboration": NamedNode;
    /*An Organization such as a University Support Unit which is part of some larger FormalOrganization and only has full recognition within the context of that FormalOrganization, it is not a Legal Entity in its own right. Units can be large and complex containing other Units and even FormalOrganizations. Alternative names: _OU_ _Unit_ _Department_*/
    "OrganizationalUnit": NamedNode;
    /*A Post represents some position within an organization that exists independently of the person or persons filling it. Posts may be used to represent situations where a person is a member of an organization ex officio (for example the Secretary of State for Scotland is part of UK Cabinet by virtue of being Secretary of State for Scotland, not as an individual person). A post can be held by multiple people and hence can be treated as a organization in its own right.*/
    "Post": NamedNode;
    /*Denotes a role that a Person or other Agent can take in an organization. Instances of this class describe the abstract role; to denote a specific instance of a person playing that role in a specific organization use an instance of `org:Membership`. It is common for roles to be arranged in some taxonomic structure and we use SKOS to represent that. The normal SKOS lexical properties should be used when labelling the Role. Additional descriptive properties for the Role, such as a Salary band, may be added by extension vocabularies.*/
    "Role": NamedNode;
    /*An office or other premise at which the organization is located. Many organizations are spread across multiple sites and many sites will host multiple locations. In most cases a Site will be a physical location. However, we don't exclude the possibility of non-physical sites such as a virtual office with an associated post box and phone reception service. Extensions may provide subclasses to denote particular types of site.*/
    "Site": NamedNode;
    /*Indica la sede in cui una è stabilita una persona. Non esclude la possibilità che una persona sia allocata su più sedi.*/
    "basedAt": NamedNode;
    /*Evento de cambio que resulta en una modificación en la organización. Dependiendo del evento, la organización puede dejar de existir tras el cambio. Es la relación inversa de `org:originalOrganization`.*/
    "changedBy": NamedNode;
    /*Indica una classificazione per questa Organization all'interno di un qualche schema di classificazione. Alcuni vocabolari potrebbero voler specializzare questa proprietà per avere un codominio corrispondente a uno specifico `skos:ConceptScheme`. Si noti che la presenza di questa proprietà è ancora in fase di discussione e potrebbe  essere revisionata o rimossa.*/
    "classification": NamedNode;
    /*Indica una persona che è membro della data Organization. È l'inverso di `org:memberOf` ed è fornita per  compatibilità con `foaf:member`.*/
    "hasMember": NamedNode;
    /*Indica una relazione di appartenenza che coinvolge un Agent. È l'inverso di `org:member`.*/
    "hasMembership": NamedNode;
    /*Indica il Post che è presente in una Organization.*/
    "hasPost": NamedNode;
    /*Indica la sede principale per l'Organization. È da considerarsi come la sede di default in cui l'Organization deve essere contattata pur non essendo necessariamente il quartier generale.*/
    "hasPrimarySite": NamedNode;
    /*Indica la sede legale per l'Organization. In molte giurisdizioni è richiesto che una FormalOrganization abbia una sede di questo tipo.*/
    "hasRegisteredSite": NamedNode;
    /*Indica la sede in cui l'Organization ha una qualche presenza anche in modo indiretto (ad esempio un ufficio virtuale). È l'inverso di `org:siteOf`.*/
    "hasSite": NamedNode;
    /*Indique le statut de dépendance hiérarchique pour des Organisations ou des Unités Opérationnelles; indique une Organisation qui est une sous-partie ou une branche d'une Organisation plus large. C'est la propriété inverse de `org:subOrganizationOf`.*/
    "hasSubOrganization": NamedNode;
    /*Indica un'unità che è parte di questa Organization, come ad esempio un dipartimento facente parte di una più ampia FormalOrganization. È l'inverso di `org:unitOf`.*/
    "hasUnit": NamedNode;
    /*Indica che una persona è leader o responsabile formale di una Organization. Questo significa che la persona è alla radice del grafo (aciclico) creato dalle `org:reportsTo`, sebbene un'organizzazione possa avere più di un responsabile.*/
    "headOf": NamedNode;
    /*Agente que ocupa un puesto.*/
    "heldBy": NamedNode;
    /*Indica un Impiego ricoperto da un Agent.*/
    "holds": NamedNode;
    /*Código o identificador, como por ejemplo el CIF de una empresa, que permite identificar de forma inequívoca a una organización. Existen muchos códigos de identificación tanto nacionales como internacionales. Esta ontología no obliga al uso de ningún esquema en concreto. Los códigos de identificación utilizados en cada caso se deberían indicar mediante el uso de la propiedad “datatype” del valor del identificador. El uso de la propiedad “datatype” para especificar el esquema de notación utilizado está en consonancia con las buenas prácticas recomendadas para el uso de la propiedad `skos:notation`, de la que esta propiedad es una especialización.*/
    "identifier": NamedNode;
    /*2つの組織の任意の関係を示します。*/
    "linkedTo": NamedNode;
    /*Gives a location description for a person within the organization, for example a _Mail Stop_ for internal posting purposes.*/
    "location": NamedNode;
    /*Indica la Person (o un altro Agent) coinvolto in una relazione di Membership. È l'inverso di `org:hasMembership`.*/
    "member": NamedNode;
    /*Optional property to indicate the interval for which the membership is/was valid.*/
    "memberDuring": NamedNode;
    /*Indica che una persona è membro di una Organization senza una precisa indicazione sulla natura di questa appartenenza e sul suo ruolo. Si noti che la scelta del nome di questa proprietà non intende limitarla alla sola  rappresentazione formalmente di un'appartenenza. La proprietà può coprire anche altri coinvolgimenti nell'organizzazione. Questa proprietà può essere specializzata per indicare ruoli all'interno organizzazione o relazioni di diverse tipologie. Ha `org:hasmember` come proprietà inversa opzionale.*/
    "memberOf": NamedNode;
    /*Indica l'Organization in cui l'Agent è un membro.*/
    "organization": NamedNode;
    /*Indica una o più organizzazioni pregresse rispetto a un evento di cambiamento. A seconda dell'evento, queste organizzazioni potrebbero essere esistenti dopo l'evento o  aver cessato la loro esistenza. È l'inverso di `org:changedBy`.*/
    "originalOrganization": NamedNode;
    /*Indica l'Organization in cui il Post è presente.*/
    "postIn": NamedNode;
    /*Finalidad u objetivo de la organización. La organización puede tener muchos objetivos a diferentes niveles de abstracción, pero en la naturaleza de las organizaciones está el tener una razón para existir, y la finalidad de esta propiedad es documentar dicha razón. La organización podrá tener más de un objetivo. Se recomienda el uso de vocabularios controlados o listas de códigos para indicar el objetivo, preferentemente mediante el uso de un `skos:Concept`. Sin embargo, el rango no está predeterminado, de forma que otros tipos de esquemas descriptivos tiene cabida. Se espera que ciertas especializaciones de este vocabulario o ciertos perfiles de aplicaciones restrinjan el rango del objetivo. Denominaciones alternativas: área_ _jurisdicción_ _ responsabilidad _ (especialmente cuando se aplica a unidades tales como ministerios o divisiones administrativas de los gobiernos)*/
    "purpose": NamedNode;
    /*Indica il salario o altra forma di remunerazione associata al ruolo. In genere, questo si denota usando uno schema di rappresentazione esistente come il `gr:PriceSpecification` ma il codominio è lasciato libero di essere specializzato a seconda delle applicazioni.*/
    "remuneration": NamedNode;
    /*Indica una relazione di subordinazione all'interno dell'organigramma. La semantica precisa può variare a seconda dell'organizzazione, per esempio può essere usata per rappresentare la proprietà di supervisione oppure per le relazioni di rendicontazione.*/
    "reportsTo": NamedNode;
    /*Evento que tiene como resultado la creación de una organización.*/
    "resultedFrom": NamedNode;
    /*Indica l'organizzazione che è stata creata o mutata a seguito dell'evento. È l'inverso di `org:resultedFrom`.*/
    "resultingOrganization": NamedNode;
    /*Actividad que el agente desempeña en una relación de pertenencia a una organización.*/
    "role": NamedNode;
    /*Ceci est une méta-propriété utilisée pour annoter une instance de `org:Role` ayant une sous-propriété `org:memberOf` qui peut être utilisée pour indiquer directement le rôle et pouvoir faire des requêtes plus facilement. La sémantique visée est un Engagement impliquant l'existence d'une relation de propriété directe à travers d'une règle d'inférence de la forme:  `{ [] org:member ?p; org:organization ?o; org:role [org:roleProperty ?r] } -> {?p ?r ?o}`.*/
    "roleProperty": NamedNode;
    /*Dirección de la sede según una codificación adecuada. Se recomienda el uso de vCard (que utiliza el vocabulario en http://www.w3.org/TR/vcard-rdf/), pero el rango no se restringe únicamente al uso de este vocabulario sino que se permite el uso de otros códigos. La dirección puede constar de una dirección de correo electrónico, un número de teléfono o información de geo-localización, y no se limita a una dirección postal física.*/
    "siteAddress": NamedNode;
    /*Indica un'Organization che ha una qualche presenza nella data sede. È l'inverso di `org:hasSite`.*/
    "siteOf": NamedNode;
    /*Distribución jerárquica de organizaciones o unidades. Indica que una organización contiene a otra organización. Es la relación inversa de `org:hasSubOrganization`*/
    "subOrganizationOf": NamedNode;
    /*La version transitive de la propriété subOrganizationOf, renvoie une représentation de toutes les organisations qui contiennent celle-ci. Notez que ceci est une super-propriété de la relation transitive donc elle pourrait contenir des assertions additionnelles mais cet usage n'est pas recommandé.*/
    "transitiveSubOrganizationOf": NamedNode;
    /*Indica un Organization di cui questa Unit fa parte, come ad esempio un dipartimento all'interno di una più vasta FormalOrganization. È l'inverso di `org:hasUnit`.*/
    "unitOf": NamedNode;
};
export const org: Org = (namespace(prefixes.org) as any);
