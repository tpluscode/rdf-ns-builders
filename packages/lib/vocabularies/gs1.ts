import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Gs1 {
    '': NamedNode<'https://gs1.org/voc/'>;
    /** The ratio of the mass of water vapour in a sample of moist air to the volume of the sample.  SI Units: kilogram per cubic metre */
    "AbsoluteHumidity": NamedNode<'https://gs1.org/voc/AbsoluteHumidity'>;
    /** The energy absorbed per unit mass of the patient from the decay of a radionuclide given to a patient for diagnostic or therapeutic purposes.  SI Units: gray */
    "AbsorbedDose": NamedNode<'https://gs1.org/voc/AbsorbedDose'>;
    /** The energy absorbed per unit time per unit mass of the patient from the decay of a radionuclide given to a patient for diagnostic or therapeutic purposes.  SI Units: gray per second */
    "AbsorbedDoseRate": NamedNode<'https://gs1.org/voc/AbsorbedDoseRate'>;
    /** The rate of change of velocity, a vector quantity with magnitude and direction.  SI Units: metre per second per second */
    "Acceleration": NamedNode<'https://gs1.org/voc/Acceleration'>;
    /** Code indicating a means of payment, for example, BANK_CHEQUE, CASH, etc. */
    "acceptedPaymentMethod": NamedNode<'https://gs1.org/voc/acceptedPaymentMethod'>;
    /** A link to ideas for using a product or engaging in other forms of entertainment, particularly with children. */
    "activityIdeas": NamedNode<'https://gs1.org/voc/activityIdeas'>;
    /** Location identifiers assigned and managed by government bodies, trade organisations, and other entities. */
    "additionalLocationID": NamedNode<'https://gs1.org/voc/additionalLocationID'>;
    /** Party/organisation identifiers assigned and managed by government bodies, trade organisations, and other entities. */
    "additionalOrganizationID": NamedNode<'https://gs1.org/voc/additionalOrganizationID'>;
    /** The value associated with the Additional Organization Identification Type Value. */
    "additionalOrganizationIdentificationTypeValue": NamedNode<'https://gs1.org/voc/additionalOrganizationIdentificationTypeValue'>;
    /** Relates to a set of additional product classification details */
    "additionalProductClassification": NamedNode<'https://gs1.org/voc/additionalProductClassification'>;
    /** Code specifying the applied additional product classification scheme. */
    "additionalProductClassificationCode": NamedNode<'https://gs1.org/voc/additionalProductClassificationCode'>;
    /** A description related to  the additional product classification code value. */
    "additionalProductClassificationCodeDescription": NamedNode<'https://gs1.org/voc/additionalProductClassificationCodeDescription'>;
    /** A product classification for the product other than the Global Product Classification(GPC brick value). */
    "AdditionalProductClassificationDetails": NamedNode<'https://gs1.org/voc/AdditionalProductClassificationDetails'>;
    /** Code specifying an additional product classification other than the GS1 Global Product Classification. The applied classification scheme is specified as additional information together with the classification value. */
    "additionalProductClassificationValue": NamedNode<'https://gs1.org/voc/additionalProductClassificationValue'>;
    /** Additional variants necessary to communicate to the industry to help define the product. Multiple variants can be established for each GTIN for e.g. Style, Colour, and Fragrance . */
    "additionalProductDescription": NamedNode<'https://gs1.org/voc/additionalProductDescription'>;
    /** Relates to details about any additives that a product may contain. */
    "additive": NamedNode<'https://gs1.org/voc/additive'>;
    /** A set of details about one of the additives within the product. */
    "AdditiveDetails": NamedNode<'https://gs1.org/voc/AdditiveDetails'>;
    /** Code indicating the level of presence of the additive. */
    "additiveLevelOfContainment": NamedNode<'https://gs1.org/voc/additiveLevelOfContainment'>;
    /** The name of any additive or genetic modification contained or not contained in the product . */
    "additiveName": NamedNode<'https://gs1.org/voc/additiveName'>;
    /** The postal address for an organization or place. */
    "address": NamedNode<'https://gs1.org/voc/address'>;
    /** Code specifying the country (and country subdivision) for the address using ISO 3166-1. */
    "addressCountry": NamedNode<'https://gs1.org/voc/addressCountry'>;
    /** Text specifying the name of the locality, for example a city. */
    "addressLocality": NamedNode<'https://gs1.org/voc/addressLocality'>;
    /** Text specifying a province or state in abbreviated format for example NJ. */
    "addressRegion": NamedNode<'https://gs1.org/voc/addressRegion'>;
    /** A suburb within a town or city. */
    "addressSuburb": NamedNode<'https://gs1.org/voc/addressSuburb'>;
    /** Links to after-hours contact information. For general contact details, gs1:contactPoint SHALL be used. */
    "afterHoursContact": NamedNode<'https://gs1.org/voc/afterHoursContact'>;
    /** A Data Type that corresponds to GS1 Application Identifiers defined in the GS1 General Specifications */
    "AI": NamedNode<'https://gs1.org/voc/AI'>;
    /** Indicates the reporting of an alarm condition detected by a sensor device */
    "ALARM_CONDITION": NamedNode<'https://gs1.org/voc/ALARM_CONDITION'>;
    /** A legally defined geographical region where the grapes for a wine were grown also known as an appellation. It is recommended to populate this property with an ISO 3166-2 code to indicate country and subdivision. */
    "alcoholicBeverageSubregion": NamedNode<'https://gs1.org/voc/alcoholicBeverageSubregion'>;
    /** Details of an allergen for a product. */
    "AllergenDetails": NamedNode<'https://gs1.org/voc/AllergenDetails'>;
    /** A link to a description of the allergen information. */
    "allergenInfo": NamedNode<'https://gs1.org/voc/allergenInfo'>;
    /** Code specifying the level of presence of the allergen. */
    "allergenLevelOfContainmentCode": NamedNode<'https://gs1.org/voc/allergenLevelOfContainmentCode'>;
    /** The agency or other organization that defines or manages the criteria for allergen containment. */
    "allergenSpecificationAgency": NamedNode<'https://gs1.org/voc/allergenSpecificationAgency'>;
    /** Free text field containing the name and version of the regulation or standard that defines the criteria of allergen containment. */
    "allergenSpecificationName": NamedNode<'https://gs1.org/voc/allergenSpecificationName'>;
    /** Textual description of the presence or absence of allergens as governed by local rules and regulations, specified as one string. */
    "allergenStatement": NamedNode<'https://gs1.org/voc/allergenStatement'>;
    /** Code specifying the type of allergen. */
    "allergenType": NamedNode<'https://gs1.org/voc/allergenType'>;
    /** Refers to the presence of 1-Naphthol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-1-NAPHTHOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-1-NAPHTHOL'>;
    /** Refers to the presence of 2-Hydroxyethyl-picramic acid as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-2-HYDROXYETHYL-PICRAMIC_ACID": NamedNode<'https://gs1.org/voc/AllergenTypeCode-2-HYDROXYETHYL-PICRAMIC_ACID'>;
    /** Refers to the presence of 2-Methyl-5-hydroxyethylaminophenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-2-METHYL-5-HYDROXYETHYLAMINOPHENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-2-METHYL-5-HYDROXYETHYLAMINOPHENOL'>;
    /** Refers to the presence of 3-Aminophenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-3-AMINOPHENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-3-AMINOPHENOL'>;
    /** Refers to the presence of 4-Amino-3-nitrophenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-4-AMINO-3-NITROPHENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-4-AMINO-3-NITROPHENOL'>;
    /** Refers to the presence of 4-Hydroxy-propylamino-3-nitrophenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-4-HYDROXY-PROPYLAMINO-3-NITROPHENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-4-HYDROXY-PROPYLAMINO-3-NITROPHENOL'>;
    /** Refers to the presence of Abalone and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ABALONE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ABALONE'>;
    /** Refers to the presence of almond and almond products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ALMONDS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ALMONDS'>;
    /** Refers to the presence of Alpha-Isomethyl Ionone as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ALPHA_ISOMETHYL_IONONE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ALPHA_ISOMETHYL_IONONE'>;
    /** Refers to the presence of Amyl Cinnamal as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-AMYL_CINNAMAL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-AMYL_CINNAMAL'>;
    /** Refers to the presence of Amylcinnamyl Alcohol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-AMYLCINNAMYL_ALCOHOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-AMYLCINNAMYL_ALCOHOL'>;
    /** Refers to the presence of anchovies and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ANCHOVY": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ANCHOVY'>;
    /** Refers to the presence of Anise Alcohol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ANISE_ALCOHOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ANISE_ALCOHOL'>;
    /** Refers to the presence of Barley and barley products (glutencontaining grain) as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BARLEY": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BARLEY'>;
    /** Refers to the presence of Barnacles and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BARNACLE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BARNACLE'>;
    /** Refers to the presence of Basa and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BASA": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BASA'>;
    /** Refers to the presence of bass and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BASS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BASS'>;
    /** Refers to the presence of Beech nuts [Fagus spp. (Fagaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BEECH_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BEECH_NUTS'>;
    /** Refers to the presence of beef and its derivative in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BEEF": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BEEF'>;
    /** Refers to the presence of Benzyl Alcohol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BENZYL_ALCOHOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BENZYL_ALCOHOL'>;
    /** Refers to the presence of Benzyl Benzoate as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BENZYL_BENZOATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BENZYL_BENZOATE'>;
    /** Refers to the presence of Benzyl Cinnamate as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BENZYL_CINNAMATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BENZYL_CINNAMATE'>;
    /** Refers to the presence of Benzyl Salicylate as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BENZYL_SALICYLATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BENZYL_SALICYLATE'>;
    /** Refers to the presence of Bluefish and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BLUEFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BLUEFISH'>;
    /** Refers to the presence of brazil nut and brazil nut products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BRAZIL_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BRAZIL_NUTS'>;
    /** Refers to the presence of Bream and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BREAM": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BREAM'>;
    /** Refers to the presence of Butternuts [Juglans cinerea (Juglandaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BUTTERNUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BUTTERNUTS'>;
    /** Refers to the presence of Butylphenyl Methylpropionate as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-BUTYLPHENYL_METHYLPROPIONATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-BUTYLPHENYL_METHYLPROPIONATE'>;
    /** Refers to the presence of Carp and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CARP": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CARP'>;
    /** Refers to the presence of carrot and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-CARROTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CARROTS'>;
    /** Refers to the presence of cashew and cashew products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CASHEW_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CASHEW_NUTS'>;
    /** Refers to the presence of catfish and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CATFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CATFISH'>;
    /** Refers to the presence of celery or their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-CELERY": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CELERY'>;
    /** Refers to the presence of Cereals containing gluten and their derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-CEREALS_CONTAINING_GLUTEN": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CEREALS_CONTAINING_GLUTEN'>;
    /** Refers to the presence of Char and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CHAR": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CHAR'>;
    /** Refers to the presence of Chestnuts [Castanea spp. (Fagaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CHESTNUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CHESTNUTS'>;
    /** Refers to the presence of chicken meat and its derivative in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CHICKEN_MEAT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CHICKEN_MEAT'>;
    /** Refers to the presence of Chinquapins [Castanea pumila (Fagaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CHINQUAPINS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CHINQUAPINS'>;
    /** Refers to the presence of Chub and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CHUB": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CHUB'>;
    /** Refers to the presence of Cinnamal as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CINNAMAL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CINNAMAL'>;
    /** Refers to the presence of Cinnamyl Alcohol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CINNAMYL_ALCOHOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CINNAMYL_ALCOHOL'>;
    /** Refers to the presence of Cisco and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CISCO": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CISCO'>;
    /** Refers to the presence of Citral as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CITRAL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CITRAL'>;
    /** Refers to the presence of Citronellol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CITRONELLOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CITRONELLOL'>;
    /** Refers to the presence of Clam and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CLAM": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CLAM'>;
    /** Refers to the presence of Cockle and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-COCKLE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-COCKLE'>;
    /** Refers to the presence of cocoa and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-COCOA": NamedNode<'https://gs1.org/voc/AllergenTypeCode-COCOA'>;
    /** Refers to the presence of Coconuts [Cocos (Arecaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-COCONUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-COCONUTS'>;
    /** Refers to the presence of Cod and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-COD": NamedNode<'https://gs1.org/voc/AllergenTypeCode-COD'>;
    /** Refers to the presence of Conch and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CONCH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CONCH'>;
    /** Refers to the presence of coriander and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-CORIANDER": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CORIANDER'>;
    /** Refers to the presence of corn and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-CORN": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CORN'>;
    /** Refers to the presence of Cotton Seeds or their derivatives in the product as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-COTTON_SEEDS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-COTTON_SEEDS'>;
    /** Refers to the presence of Coumarin as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-COUMARIN": NamedNode<'https://gs1.org/voc/AllergenTypeCode-COUMARIN'>;
    /** Refers to the presence of Crab and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CRAB": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CRAB'>;
    /** Refers to the presence of Crawfish and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-CRAWFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CRAWFISH'>;
    /** Refers to the presence of Crustaceans and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-CRUSTACEANS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-CRUSTACEANS'>;
    /** Refers to the presence of d-Limonene as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-D-LIMONENE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-D-LIMONENE'>;
    /** Refers to the presence of Diaminophenols as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-DIAMINOPHENOLS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-DIAMINOPHENOLS'>;
    /** Refers to the presence of Eel and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-EEL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-EEL'>;
    /** Refers to the presence of eggs and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-EGGS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-EGGS'>;
    /** Refers to the presence of Eugenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-EUGENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-EUGENOL'>;
    /** Refers to the presence of Evernia Furfuracea as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-EVERNIA_FURFURACEA": NamedNode<'https://gs1.org/voc/AllergenTypeCode-EVERNIA_FURFURACEA'>;
    /** Refers to the presence of Evernia Prunastri as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-EVERNIA_PRUNASTRI": NamedNode<'https://gs1.org/voc/AllergenTypeCode-EVERNIA_PRUNASTRI'>;
    /** Refers to the presence of Farnesol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-FARNESOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-FARNESOL'>;
    /** Refers to the presence of Fish and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-FISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-FISH'>;
    /** Refers to the presence of Flounder and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-FLOUNDER": NamedNode<'https://gs1.org/voc/AllergenTypeCode-FLOUNDER'>;
    /** Refers to the presence of Geraniol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-GERANIOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-GERANIOL'>;
    /** Refers to the presence of Ginkgo nuts [Ginkgo biloba L. (Ginkgoaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-GINKGO_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-GINKGO_NUTS'>;
    /** Refers to the presence of glutamate and its derivative in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-GLUTAMATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-GLUTAMATE'>;
    /** Refers to the presense of other gluten containing grain and gluten containing grain products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-GLUTEN": NamedNode<'https://gs1.org/voc/AllergenTypeCode-GLUTEN'>;
    /** Refers to the presence of Grouper and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-GROUPER": NamedNode<'https://gs1.org/voc/AllergenTypeCode-GROUPER'>;
    /** Refers to the presence of Haddock and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HADDOCK": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HADDOCK'>;
    /** Refers to the presence of Hake and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HAKE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HAKE'>;
    /** Refers to the presence of Halibut and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HALIBUT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HALIBUT'>;
    /** Refers to the presence of hazelnut and hazelnut products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HAZELNUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HAZELNUTS'>;
    /** Refers to the presence of HC Blue No 11 as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HC_BLUE_NO_11": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HC_BLUE_NO_11'>;
    /** Refers to the presence of HC Blue No 12 as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HC_BLUE_NO_12": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HC_BLUE_NO_12'>;
    /** Refers to the presence of Herring and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HERRING": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HERRING'>;
    /** Refers to the presence of Hexyl Cinnamal as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HEXYL_CINNAMAL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HEXYL_CINNAMAL'>;
    /** Refers to the presence of hickory nuts [Carya spp. (Junglandacease)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HICKORY_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HICKORY_NUTS'>;
    /** Refers to the presence of Hydroxybenzomorpholine as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HYDROXYBENZOMORPHOLINE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HYDROXYBENZOMORPHOLINE'>;
    /** Refers to the presence of Hydroxycitronellal as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HYDROXYCITRONELLAL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HYDROXYCITRONELLAL'>;
    /** Refers to the presence of Hydroxyethyl-2-nitro-p-toluidine as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-HYDROXYETHYL-2-NITRO-P-TOLUIDINE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HYDROXYETHYL-2-NITRO-P-TOLUIDINE'>;
    /** Refers to the presence of Hydroxyisohexyl 3-Cyclohexene Carboxaldehyde Isoeugenol Limonene Linal as listed in the regulations specified in AllergenSpecificationAgency and llergenSpecificationName. */
    "AllergenTypeCode-HYDROXYISOHEXYL_3-CYCLOHEXENE_CARBOXALDEHYDE_ISOEUGENOL_LIMONENE_LINAL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-HYDROXYISOHEXYL_3-CYCLOHEXENE_CARBOXALDEHYDE_ISOEUGENOL_LIMONENE_LINAL'>;
    /** Refers to the presence of Isoeugenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-ISOEUGENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ISOEUGENOL'>;
    /** Refers to the presence of kamut and kamut products (glutencontaining grain) as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-KAMUT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-KAMUT'>;
    /** Refers to the presence of Krill and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-KRILL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-KRILL'>;
    /** Refers to the presence of lactose as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-LACTOSE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LACTOSE'>;
    /** Refers to the presence of Land and sea snails (Escargot) and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-LAND": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LAND'>;
    /** Refers to the presence of Lichee nuts [Litchi chinensis Sonn. (Sapindaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-LICHEE_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LICHEE_NUTS'>;
    /** Refers to the presence of Limpets and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-LIMPETS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LIMPETS'>;
    /** Refers to the presence of Linalool as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-LINALOOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LINALOOL'>;
    /** Refers to the presence of Lobster and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-LOBSTER": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LOBSTER'>;
    /** Refers to the presence of Lupine and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-LUPINE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-LUPINE'>;
    /** Refers to the presence of macadamia nut and macadamia nut products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-MACADAMIA_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MACADAMIA_NUTS'>;
    /** Refers to the presence of Mackerel and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-MACKEREL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MACKEREL'>;
    /** Refers to the presence of Mahi Mahi and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-MAHI_MAHI": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MAHI_MAHI'>;
    /** Refers to the presence of Marlin and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-MARLIN": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MARLIN'>;
    /** Refers to the presence of Melatonin, a hormone secreted by the pineal gland that inhibits melanin formation and is thought to be concerned with regulating the reproductive cycle. */
    "AllergenTypeCode-MELATONIN": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MELATONIN'>;
    /** Refers to the presence of Methyl 2-Octynoate as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-METHYL_2_OCTYNOATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-METHYL_2_OCTYNOATE'>;
    /** Refers to the presence of Methyl heptin carbonate as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-METHYL_HEPTIN_CARBONATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-METHYL_HEPTIN_CARBONATE'>;
    /** Refers to the presence of milk and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-MILK": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MILK'>;
    /** Refers to the presence of molluscs and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-MOLLUSCS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MOLLUSCS'>;
    /** Refers to the presence of Mussels and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-MUSSELS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MUSSELS'>;
    /** Refers to the presence of mustard or their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-MUSTARD": NamedNode<'https://gs1.org/voc/AllergenTypeCode-MUSTARD'>;
    /** Does not contain declaration obligatory allergens as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-NO_DECLARED_ALLERGENS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-NO_DECLARED_ALLERGENS'>;
    /** Refers to the presence of oat and oat products (gluten containing grain) as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-OAT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-OAT'>;
    /** Refers to the presence of Octopus and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-OCTOPUS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-OCTOPUS'>;
    /** Refers to the presence of Orange roughy and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ORANGE_ROUGHY": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ORANGE_ROUGHY'>;
    /** Refers to the presence Oysters and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-OYSTERS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-OYSTERS'>;
    /** Refers to the presence of p-Methylaminophenol as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-P-METHYLAMINOPHENOL": NamedNode<'https://gs1.org/voc/AllergenTypeCode-P-METHYLAMINOPHENOL'>;
    /** Refers to the presence of p-Phenylenediamine in the product as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-P-PHENYLENEDIAMINE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-P-PHENYLENEDIAMINE'>;
    /** Refers to the presence of peanuts and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-PEANUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PEANUTS'>;
    /** Refers to the presence of peas and pea products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PEAS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PEAS'>;
    /** Refers to the presence of pecan nut and pecan nut products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PECAN_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PECAN_NUTS'>;
    /** Refers to the presence of Perch and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PERCH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PERCH'>;
    /** Refers to the presence of Periwinkle and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PERIWINKLE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PERIWINKLE'>;
    /** Refers to the presence of Pike and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PIKE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PIKE'>;
    /** Refers to the presence of Pili nuts [Canarium ovatum (Burseraceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PILI_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PILI_NUTS'>;
    /** Refers to the presence of Pine Nuts and their derivatives as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PINE_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PINE_NUTS'>;
    /** Refers to the presence of pistachio and pistachio products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PISTACHIOS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PISTACHIOS'>;
    /** Refers to the presence of Plaice and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PLAICE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PLAICE'>;
    /** Refers to the presence of pod fruits and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-POD_FRUITS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-POD_FRUITS'>;
    /** Refers to the presence of Pollock and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-POLLOCK": NamedNode<'https://gs1.org/voc/AllergenTypeCode-POLLOCK'>;
    /** Refers to the presence of Pompano and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-POMPANO": NamedNode<'https://gs1.org/voc/AllergenTypeCode-POMPANO'>;
    /** Refers to the presence of Poppy Seeds or their derivatives in the product as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-POPPY_SEEDS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-POPPY_SEEDS'>;
    /** Refers to the presence of Porgy and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PORGY": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PORGY'>;
    /** Refers to the presence of pork and its derivative in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PORK": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PORK'>;
    /** Refers to the presence of Prawns and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-PRAWNS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PRAWNS'>;
    /** Refers to the presence of pulses. An annual leguminous crop yielding from one to twelve seeds of variable size, shape, and colour within a pod. Pulses are used for food and animal feed. The term 'pulse', as used by the Food and Agricultural Organization (FAO), is reserved for crops harvested solely for the dry seed. This excludes green beans and green peas, which are considered vegetable crops. Also excluded are crops that are mainly grown for oil extraction */
    "AllergenTypeCode-PULSES": NamedNode<'https://gs1.org/voc/AllergenTypeCode-PULSES'>;
    /** Refers to the presence of Quahaugs and its derivatives in the product, listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-QUAHAUGS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-QUAHAUGS'>;
    /** Refers to the presence of queensland nut and queensland nut products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-QUEENSLAND_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-QUEENSLAND_NUTS'>;
    /** Refers to the presence of Rockfish and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-ROCKFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-ROCKFISH'>;
    /** Refers to the presence of rye and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-RYE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-RYE'>;
    /** Refers to the presence of Salicylate, a salt or ester of salicylic acid. */
    "AllergenTypeCode-SALICYLATE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SALICYLATE'>;
    /** Refers to the presence of Salmon and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SALMON": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SALMON'>;
    /** Refers to the presence of Sardine and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SARDINE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SARDINE'>;
    /** Refers to the presence of Scallops and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SCALLOPS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SCALLOPS'>;
    /** Refers to the presence of seed products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-SEED_PRODUCTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SEED_PRODUCTS'>;
    /** Refers to the presence of sesame seeds or their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-SESAME_SEEDS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SESAME_SEEDS'>;
    /** Refers to the presence of Shark and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SHARK": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SHARK'>;
    /** Refers to the presence of Shea nuts [Vitellaria paradoxa C.F. Gaertn. (Sapotaceae)] and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SHEA_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SHEA_NUTS'>;
    /** Refers to the presence of shellfish and its derivatives as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SHELLFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SHELLFISH'>;
    /** Refers to the presence of Shrimp and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SHRIMP": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SHRIMP'>;
    /** Refers to the presence of Smelt and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SMELT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SMELT'>;
    /** Refers to the presence of Snapper and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SNAPPER": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SNAPPER'>;
    /** Refers to the presence of Sole and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SOLE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SOLE'>;
    /** Refers to the presence of soybeans and their derivatives in the product, as listed in as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-SOYBEANS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SOYBEANS'>;
    /** Refers to the presence of spelt and spelt products (gluten containing grain) as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SPELT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SPELT'>;
    /** Refers to the presence of Sturgeon and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-STURGEON": NamedNode<'https://gs1.org/voc/AllergenTypeCode-STURGEON'>;
    /** Refers to the presence of sulphur dioxide and sulphites as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SULPHUR_DIOXIDE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SULPHUR_DIOXIDE'>;
    /** Refers to the presence of Sunflower Seeds or their derivatives in the product as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SUNFLOWER_SEEDS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SUNFLOWER_SEEDS'>;
    /** Refers to the presence of Swordfish and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-SWORDFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-SWORDFISH'>;
    /** Refers to the presence of Tilapia and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-TILAPIA": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TILAPIA'>;
    /** Contains Traces of Tree Nuts, i.e. almonds, various kinds of tree nuts. */
    "AllergenTypeCode-TREE_NUT_TRACES": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TREE_NUT_TRACES'>;
    /** Refers to the presence of tree nuts and their derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. Tree nuts can include almonds, hazelnut, walnut, cashews, etc. */
    "AllergenTypeCode-TREE_NUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TREE_NUTS'>;
    /** Refers to the presence of Triticale and their derivatives as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-TRITICALE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TRITICALE'>;
    /** Refers to the presence of Trout and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-TROUT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TROUT'>;
    /** Refers to the presence of Tuna and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-TUNA": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TUNA'>;
    /** Refers to the presence of Turbot and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-TURBOT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-TURBOT'>;
    /** Refers to the presence of Walleye and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-WALLEYE": NamedNode<'https://gs1.org/voc/AllergenTypeCode-WALLEYE'>;
    /** Refers to the presence of walnut and walnut products as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-WALNUTS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-WALNUTS'>;
    /** Refers to the presence of wheat and their derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName */
    "AllergenTypeCode-WHEAT": NamedNode<'https://gs1.org/voc/AllergenTypeCode-WHEAT'>;
    /** Refers to the presence of Whelks and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-WHELKS": NamedNode<'https://gs1.org/voc/AllergenTypeCode-WHELKS'>;
    /** Refers to the presence of Whitefish and their derivatives in the product, as listed as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-WHITEFISH": NamedNode<'https://gs1.org/voc/AllergenTypeCode-WHITEFISH'>;
    /** Refers to the presence of Whiting and its derivatives in the product, as listed in the regulations specified in AllergenSpecificationAgency and AllergenSpecificationName. */
    "AllergenTypeCode-WHITING": NamedNode<'https://gs1.org/voc/AllergenTypeCode-WHITING'>;
    "AllergenTypeCode": NamedNode<'https://gs1.org/voc/AllergenTypeCode'>;
    /** The height above the surface of a defined geoid, typically the World Geodetic System (WGS 84) geoid for measurements from location sensors using satellite technology (e.g. GPS, Glonass, Galileo) , which approximates to the surface of the earth at sea level.  Positive values indicate height above the geoid surface. Negative values indicate depth below the geoid surface.  SI Units: metres */
    "Altitude": NamedNode<'https://gs1.org/voc/Altitude'>;
    /** The amount of substance that contains a number of atoms, molecules etc. that is equal to the Avogadro constant.  SI Units: mole */
    "AmountOfSubstance": NamedNode<'https://gs1.org/voc/AmountOfSubstance'>;
    /** The concentration of a solution expressed as the number of moles of dissolved substance per unit volume of solution.  SI Units: mole per cubic metre */
    "AmountOfSubstancePerUnitVolume": NamedNode<'https://gs1.org/voc/AmountOfSubstancePerUnitVolume'>;
    /** Describes the meat product in terms of whether it is the whole animal or part of the animal which has been cut such as the muscle, bone, organ, or fat. */
    "anatomicalForm": NamedNode<'https://gs1.org/voc/anatomicalForm'>;
    "AnatomicalFormCode-BELLY": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-BELLY'>;
    "AnatomicalFormCode-BLOOD": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-BLOOD'>;
    "AnatomicalFormCode-BONE": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-BONE'>;
    "AnatomicalFormCode-BRAIN": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-BRAIN'>;
    "AnatomicalFormCode-CARCASS_NONPOULTRY": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-CARCASS_NONPOULTRY'>;
    "AnatomicalFormCode-DIAPHRAM": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-DIAPHRAM'>;
    "AnatomicalFormCode-ESOPHAGUS": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-ESOPHAGUS'>;
    "AnatomicalFormCode-FAT": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-FAT'>;
    "AnatomicalFormCode-FEET": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-FEET'>;
    "AnatomicalFormCode-FOREQUARTER": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-FOREQUARTER'>;
    "AnatomicalFormCode-GIZZARD": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-GIZZARD'>;
    "AnatomicalFormCode-HEAD": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-HEAD'>;
    "AnatomicalFormCode-HEADMEAT_CHEEKMEAT": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-HEADMEAT_CHEEKMEAT'>;
    "AnatomicalFormCode-HEART": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-HEART'>;
    "AnatomicalFormCode-HINDQUARTER": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-HINDQUARTER'>;
    "AnatomicalFormCode-HORN": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-HORN'>;
    "AnatomicalFormCode-INTESTINE_LARGE": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-INTESTINE_LARGE'>;
    "AnatomicalFormCode-INTESTINE_SMALL": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-INTESTINE_SMALL'>;
    "AnatomicalFormCode-KIDNEY": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-KIDNEY'>;
    "AnatomicalFormCode-LIPS": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-LIPS'>;
    "AnatomicalFormCode-LIVER": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-LIVER'>;
    "AnatomicalFormCode-LUNGS": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-LUNGS'>;
    "AnatomicalFormCode-MIXED_OFFAL": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-MIXED_OFFAL'>;
    "AnatomicalFormCode-MIXED_PARTS_FOR_GROUNDING_MINCING": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-MIXED_PARTS_FOR_GROUNDING_MINCING'>;
    "AnatomicalFormCode-NECK": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-NECK'>;
    "AnatomicalFormCode-PANCREAS": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-PANCREAS'>;
    "AnatomicalFormCode-SKIN": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-SKIN'>;
    "AnatomicalFormCode-STOMACH": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-STOMACH'>;
    "AnatomicalFormCode-TAIL": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-TAIL'>;
    "AnatomicalFormCode-TENDONS": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-TENDONS'>;
    "AnatomicalFormCode-TESTICLES": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-TESTICLES'>;
    "AnatomicalFormCode-THYMUS": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-THYMUS'>;
    "AnatomicalFormCode-TONGUE": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-TONGUE'>;
    "AnatomicalFormCode-TRIPE": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-TRIPE'>;
    "AnatomicalFormCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-UNCLASSIFIED'>;
    "AnatomicalFormCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-UNIDENTIFIED'>;
    "AnatomicalFormCode-WHOLE_BIRD": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_BIRD'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_NONPOULTRY_MEATPART_PIECE": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_NONPOULTRY_MEATPART_PIECE'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_POULTRY_PART": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_POULTRY_PART'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_PRIMAL": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_PRIMAL'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_RIBCUT": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_RIBCUT'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_ROASTCUT": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_ROASTCUT'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_SLICE_CHOPCUT": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_SLICE_CHOPCUT'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_SLICE_CUTLET": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_SLICE_CUTLET'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_STEAK_CHOPCUT": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_STEAK_CHOPCUT'>;
    "AnatomicalFormCode-WHOLE_MUSCLE_SUBPRIMAL": NamedNode<'https://gs1.org/voc/AnatomicalFormCode-WHOLE_MUSCLE_SUBPRIMAL'>;
    "AnatomicalFormCode": NamedNode<'https://gs1.org/voc/AnatomicalFormCode'>;
    /** The inclination of one line or plane to another.  Units: degrees, radians, etc. */
    "Angle": NamedNode<'https://gs1.org/voc/Angle'>;
    /** The rate of change of angular velocity with respect to time.  SI Units: radian per second per second */
    "AngularAcceleration": NamedNode<'https://gs1.org/voc/AngularAcceleration'>;
    /** The integral over time of the torque acting on a body that is free to rotate, resulting in a corresponding change in its angular momentum.  SI Units: newton metre second, kilogram metre squared per second */
    "AngularMomentum": NamedNode<'https://gs1.org/voc/AngularMomentum'>;
    /** The rate of change of angle with respect to time; a measure of the number of revolutions per unit time.  SI Units: radian per second */
    "AngularVelocity": NamedNode<'https://gs1.org/voc/AngularVelocity'>;
    /** A property linking a gs1:linkType to the primary GS1 key(s) for which it can be used. Similar to rdfs:Domain but the value space is a GS1 Application Identifier, not a class. */
    "applicableTo": NamedNode<'https://gs1.org/voc/applicableTo'>;
    /** The amount of two-dimensional space occupied, measured in units of length squared.  SI Units: square metre */
    "Area": NamedNode<'https://gs1.org/voc/Area'>;
    /** Link to a file containing an audio clip which is relevant to the product. Examples are commercials, or instructional/ how to use audio files. */
    "audioFile": NamedNode<'https://gs1.org/voc/audioFile'>;
    /** Links to details of covert/overt security markings that may be used to check authenticity of a product instance. */
    "authenticity": NamedNode<'https://gs1.org/voc/authenticity'>;
    /** A set of details about covert or overt security features that may contribute to checking the authenticity of a product or product instance. */
    "AuthenticityDetails": NamedNode<'https://gs1.org/voc/AuthenticityDetails'>;
    /** Provides human-readable instructions about how to locate a physical security marking and read a value from it. */
    "authenticitySecurityFeatureInstructions": NamedNode<'https://gs1.org/voc/authenticitySecurityFeatureInstructions'>;
    /** Links to online instructions about how to locate a physical security marking and read a value from it. */
    "authenticitySecurityFeatureInstructionsURL": NamedNode<'https://gs1.org/voc/authenticitySecurityFeatureInstructionsURL'>;
    /** Links to a regular expression to be used to perform syntax validation (plausibility checking) of a string value read from a physical security marking. */
    "authenticitySecurityFeatureRegularExpression": NamedNode<'https://gs1.org/voc/authenticitySecurityFeatureRegularExpression'>;
    /** Links to a URI code value indicating a particular type of physical security marking. */
    "authenticitySecurityFeatureType": NamedNode<'https://gs1.org/voc/authenticitySecurityFeatureType'>;
    /** Links to a string value read from a physical security marking. */
    "authenticitySecurityFeatureValue": NamedNode<'https://gs1.org/voc/authenticitySecurityFeatureValue'>;
    /** The date from which the product is no longer available from the information provider, including seasonal or temporary product and services . */
    "availabilityEnds": NamedNode<'https://gs1.org/voc/availabilityEnds'>;
    /** The date from which the product is available from the information provider, including seasonal or temporary product and services. */
    "availabilityStarts": NamedNode<'https://gs1.org/voc/availabilityStarts'>;
    /** The location the offered product or service is available from. */
    "availableAtOrFrom": NamedNode<'https://gs1.org/voc/availableAtOrFrom'>;
    /** ISO 639-1 code specifying the language of a specified contact point. */
    "availableLanguage": NamedNode<'https://gs1.org/voc/availableLanguage'>;
    /** An award or prize given to the product. */
    "awardPrize": NamedNode<'https://gs1.org/voc/awardPrize'>;
    /** Indicates the achievement of the product in relation to a prize or award, e.g. winner, runner-up, shortlisted. */
    "awardPrizeCode": NamedNode<'https://gs1.org/voc/awardPrizeCode'>;
    /** An ISO standard code identifying the country in which a prize or award is given. It is recommended to populate this property with an ISO 3166-1 country code. */
    "awardPrizeCountryCode": NamedNode<'https://gs1.org/voc/awardPrizeCountryCode'>;
    /** Text that describes the awards won. */
    "awardPrizeDescription": NamedNode<'https://gs1.org/voc/awardPrizeDescription'>;
    /** Describes a prize or award won by a product or organization. */
    "AwardPrizeDetails": NamedNode<'https://gs1.org/voc/AwardPrizeDetails'>;
    /** Free text listing members of the jury that awarded the prize. */
    "awardPrizeJury": NamedNode<'https://gs1.org/voc/awardPrizeJury'>;
    /** The name of a prize or award which the product has received. */
    "awardPrizeName": NamedNode<'https://gs1.org/voc/awardPrizeName'>;
    /** The year in which a prize or award was given. */
    "awardPrizeYear": NamedNode<'https://gs1.org/voc/awardPrizeYear'>;
    /** A fixed physical location where a mobile location most commonly resides. If gs1:glnType is present, gs1:baseLocationGLN SHALL only be used when gs1:glnType is gs1:GLN_TypeCode-MOBILE_PHYSICAL_LOCATION */
    "baseLocation": NamedNode<'https://gs1.org/voc/baseLocation'>;
    /** Best before date on the label or package signifies the end of the period under which the product will retain specific quality attributes or claims even though the product may continue to retain positive quality attributes after this date. Best before date is primarily used for consumer information and may be a regulatory requirement. */
    "bestBeforeDate": NamedNode<'https://gs1.org/voc/bestBeforeDate'>;
    /** Any potable liquid. */
    "Beverage": NamedNode<'https://gs1.org/voc/Beverage'>;
    /** The year in which the majority of ingredients are harvested and/or the alcoholic beverage is produced. Determination as to whether the vintage year is the harvest date or production date is according to requirements in the Target Market. */
    "beverageVintage": NamedNode<'https://gs1.org/voc/beverageVintage'>;
    /** Biotin Acid per specified nutrient basis quantity. */
    "biotinPerNutrientBasis": NamedNode<'https://gs1.org/voc/biotinPerNutrientBasis'>;
    /** The descriptive term that is used by the product manufacturer to identify whether the product makes a specific claim to contain no bones. */
    "bonelessClaim": NamedNode<'https://gs1.org/voc/bonelessClaim'>;
    /** The brand of the product that appears on the consumer package. */
    "brand": NamedNode<'https://gs1.org/voc/brand'>;
    /** Information on brands and sub-brands for a product. */
    "Brand": NamedNode<'https://gs1.org/voc/Brand'>;
    /** A link to a brand presence aimed at clinical professionals. */
    "brandHomepageClinical": NamedNode<'https://gs1.org/voc/brandHomepageClinical'>;
    /** A link to a brand presence aimed at patients. */
    "brandHomepagePatient": NamedNode<'https://gs1.org/voc/brandHomepagePatient'>;
    /** The brand name of the product that appears on the consumer package. */
    "brandName": NamedNode<'https://gs1.org/voc/brandName'>;
    /** The brand owner of the product. The organization that is responsible for allocating the GTIN to the product. */
    "brandOwner": NamedNode<'https://gs1.org/voc/brandOwner'>;
    /** Calcium per specified nutrient basis quantity. */
    "calciumPerNutrientBasis": NamedNode<'https://gs1.org/voc/calciumPerNutrientBasis'>;
    /** The capacitance of an isolated conductor is defined as the ratio of the total charge on it to its electric potential.  SI Units: farad */
    "Capacitance": NamedNode<'https://gs1.org/voc/Capacitance'>;
    /** Carbohydrates per specified nutrient basis quantity. */
    "carbohydratesPerNutrientBasis": NamedNode<'https://gs1.org/voc/carbohydratesPerNutrientBasis'>;
    /** A link to information about jobs, careers, or other employment opportunities associated to an organisation or location. */
    "careersInfo": NamedNode<'https://gs1.org/voc/careersInfo'>;
    /** Free text field describing the sea zone from which the product was caught in. */
    "catchZone": NamedNode<'https://gs1.org/voc/catchZone'>;
    /** Certification information about a product, organisation or location. */
    "certification": NamedNode<'https://gs1.org/voc/certification'>;
    /** Name of the organisation issuing the certification standard or other requirement being met . */
    "certificationAgency": NamedNode<'https://gs1.org/voc/certificationAgency'>;
    /** URL of the organisation issuing the certification standard or other requirement being met. e.g. https://www.msc.org , https://www.fsc.org */
    "certificationAgencyURL": NamedNode<'https://gs1.org/voc/certificationAgencyURL'>;
    /** Date of completion of the auditing needed for certification */
    "certificationAuditDate": NamedNode<'https://gs1.org/voc/certificationAuditDate'>;
    /** Certification issued by a certifying body to a certification subject (Organization, Place, Product). */
    "CertificationDetails": NamedNode<'https://gs1.org/voc/CertificationDetails'>;
    /** Last date of validity for the certification. (After this date the certification lapses and would need to be renewed/replaced) */
    "certificationEndDate": NamedNode<'https://gs1.org/voc/certificationEndDate'>;
    /** A reference (i.e, to a certificate instance) issued to confirm that a product, party or location has passed certification. e.g. 'XSC-C-12345' */
    "certificationIdentification": NamedNode<'https://gs1.org/voc/certificationIdentification'>;
    /** A link to certification information. */
    "certificationInfo": NamedNode<'https://gs1.org/voc/certificationInfo'>;
    /** Name of the certification standard. Free text. Example: 'Egg classification' . */
    "certificationStandard": NamedNode<'https://gs1.org/voc/certificationStandard'>;
    /** First date of validity for the certification */
    "certificationStartDate": NamedNode<'https://gs1.org/voc/certificationStartDate'>;
    /** Certification scope statement of the individual certification instance. The same certificationStandard can be issued with different values of certificationStatement in different instances. */
    "certificationStatement": NamedNode<'https://gs1.org/voc/certificationStatement'>;
    /** This certification instance is declared to be in effect for the certified subject. */
    "CertificationStatus-ACTIVE": NamedNode<'https://gs1.org/voc/CertificationStatus-ACTIVE'>;
    /** This certification instance is declared to be no longer in effect. */
    "CertificationStatus-INACTIVE": NamedNode<'https://gs1.org/voc/CertificationStatus-INACTIVE'>;
    /** Indicates the current status of the certification, e.g. active or inactive. */
    "certificationStatus": NamedNode<'https://gs1.org/voc/certificationStatus'>;
    /** A set of codes for the status of a certification instance */
    "CertificationStatus": NamedNode<'https://gs1.org/voc/CertificationStatus'>;
    /** References the object (e.g. product, asset, container), party or location being certified. If multiple values are specified, the certification details apply to the logical conjunction (AND) of groups of different types, while a logical disjunction (OR) applies within each group of the same type. For example, two sibling organisations O1 and O2 can process products P1 and P2 at locations L1 and L2: meaning that either organisation can process either product at either location (OR); but the certificate holds for the combinations of organisation (either O1 OR O2) AND product (either P1 OR P2) AND location (either L1 OR L2) */
    "certificationSubject": NamedNode<'https://gs1.org/voc/certificationSubject'>;
    /** Indicates the type of certification */
    "certificationType": NamedNode<'https://gs1.org/voc/certificationType'>;
    /** If gs1:certificationURI is present, it should point to data about this individual certificate within a repository maintained by the certification agency. */
    "certificationURI": NamedNode<'https://gs1.org/voc/certificationURI'>;
    /** The certification's standard value. Example: '4'. */
    "certificationValue": NamedNode<'https://gs1.org/voc/certificationValue'>;
    /** The firmness of the cheese product for example EXTRA_HARD. */
    "cheeseFirmness": NamedNode<'https://gs1.org/voc/cheeseFirmness'>;
    "CheeseFirmnessCode-EXTRA_HARD": NamedNode<'https://gs1.org/voc/CheeseFirmnessCode-EXTRA_HARD'>;
    "CheeseFirmnessCode-FIRM_SEMIHARD": NamedNode<'https://gs1.org/voc/CheeseFirmnessCode-FIRM_SEMIHARD'>;
    "CheeseFirmnessCode-HARD": NamedNode<'https://gs1.org/voc/CheeseFirmnessCode-HARD'>;
    "CheeseFirmnessCode-SOFT": NamedNode<'https://gs1.org/voc/CheeseFirmnessCode-SOFT'>;
    "CheeseFirmnessCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/CheeseFirmnessCode-UNIDENTIFIED'>;
    "CheeseFirmnessCode": NamedNode<'https://gs1.org/voc/CheeseFirmnessCode'>;
    /** A descriptive way to specify a date range as some cheeses are matured over a period of time, but not an exact period. For example 3 to 4 weeks, over 1 year etc. The term maturation is also known in other markets as Aged. */
    "cheeseMaturationPeriodDescription": NamedNode<'https://gs1.org/voc/cheeseMaturationPeriodDescription'>;
    /** Chloride per specified nutrient basis quantity. */
    "chloridePerNutrientBasis": NamedNode<'https://gs1.org/voc/chloridePerNutrientBasis'>;
    /** Cholesterol per specified nutrient basis quantity. */
    "cholesterolPerNutrientBasis": NamedNode<'https://gs1.org/voc/cholesterolPerNutrientBasis'>;
    /** Chromium per specified nutrient basis quantity. */
    "chromiumPerNutrientBasis": NamedNode<'https://gs1.org/voc/chromiumPerNutrientBasis'>;
    /** A circle is the circular region of a specified radius centred at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters. */
    "circle": NamedNode<'https://gs1.org/voc/circle'>;
    /**  A product that is worn on the body. */
    "Clothing": NamedNode<'https://gs1.org/voc/Clothing'>;
    /** Supplemental information to indicate the clothing cut or silhouette make of the garment. For example, silhouette details for a pair of jeans such as boot cut, or loose fit, comfort fit. */
    "clothingCut": NamedNode<'https://gs1.org/voc/clothingCut'>;
    /** A free text description of the type of collar on the garment. */
    "collarType": NamedNode<'https://gs1.org/voc/collarType'>;
    /** Relates to a set of details about the colour code for a product */
    "colourCode": NamedNode<'https://gs1.org/voc/colourCode'>;
    /** A set of colour code details (colour code, party controlling the code list) for the product. */
    "ColourCodeDetails": NamedNode<'https://gs1.org/voc/ColourCodeDetails'>;
    /** Assigned by buyer. */
    "ColourCodeList-BUYER": NamedNode<'https://gs1.org/voc/ColourCodeList-BUYER'>;
    /** International Federation for Produce Standards. */
    "ColourCodeList-IFPS": NamedNode<'https://gs1.org/voc/ColourCodeList-IFPS'>;
    /** Natural Colour System. */
    "ColourCodeList-NCS": NamedNode<'https://gs1.org/voc/ColourCodeList-NCS'>;
    /** National Retail Federation. */
    "ColourCodeList-NRF": NamedNode<'https://gs1.org/voc/ColourCodeList-NRF'>;
    /** Pantone Hexachrome. */
    "ColourCodeList-PANTONE_HEXACHROME": NamedNode<'https://gs1.org/voc/ColourCodeList-PANTONE_HEXACHROME'>;
    /** Pantone Matching System. */
    "ColourCodeList-PANTONE_MATCHING": NamedNode<'https://gs1.org/voc/ColourCodeList-PANTONE_MATCHING'>;
    /** Pantone Process Colour System. */
    "ColourCodeList-PANTONE_PROCESS_COLOUR": NamedNode<'https://gs1.org/voc/ColourCodeList-PANTONE_PROCESS_COLOUR'>;
    /** Pantone Textile. Same as GS1 ColourCodeList Code 5 */
    "ColourCodeList-PANTONE_TEXTILE": NamedNode<'https://gs1.org/voc/ColourCodeList-PANTONE_TEXTILE'>;
    /** Farbsystem RAL Colour System. */
    "ColourCodeList-RAL": NamedNode<'https://gs1.org/voc/ColourCodeList-RAL'>;
    /** Assigned by seller. */
    "ColourCodeList-SELLER": NamedNode<'https://gs1.org/voc/ColourCodeList-SELLER'>;
    /** Waren Wirtschafts System. */
    "ColourCodeList-WWS": NamedNode<'https://gs1.org/voc/ColourCodeList-WWS'>;
    /** The parties controlling the colour code lists. Dependent on colour code value. */
    "colourCodeList": NamedNode<'https://gs1.org/voc/colourCodeList'>;
    "ColourCodeListCode": NamedNode<'https://gs1.org/voc/ColourCodeListCode'>;
    /** A code indicating the colour of an object according to a specific code list. The applied code list is specified as additional information together with the colour code. */
    "colourCodeValue": NamedNode<'https://gs1.org/voc/colourCodeValue'>;
    /** A description of the colour of an object. */
    "colourDescription": NamedNode<'https://gs1.org/voc/colourDescription'>;
    /** The ratio of the current in the conductor to the potential difference between its ends; reciprocal of resistance.  SI Units: siemen */
    "Conductance": NamedNode<'https://gs1.org/voc/Conductance'>;
    /** A measure of how strongly a material conducts electric current. The ratio of the current density to the electric field that causes the current to flow.  SI Units: siemen per metre */
    "Conductivity": NamedNode<'https://gs1.org/voc/Conductivity'>;
    /** The first date/time that the buyer is allowed to sell the product to consumers. Usually related to a specific geography. ISO 8601 date format CCYY-MM-DDTHH:MM:SS. */
    "consumerFirstAvailabilityDateTime": NamedNode<'https://gs1.org/voc/consumerFirstAvailabilityDateTime'>;
    /** Link to a website, file, or image containing the manufacturer's recommendations for how the consumer or end user should store and handle the product. */
    "consumerHandlingStorage": NamedNode<'https://gs1.org/voc/consumerHandlingStorage'>;
    /** A link to information about safe handling and storage for consumer use. */
    "consumerHandlingStorageInfo": NamedNode<'https://gs1.org/voc/consumerHandlingStorageInfo'>;
    /** Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify the period or stage in the consumer's life during which the product is considered to be suitable. */
    "consumerLifestage": NamedNode<'https://gs1.org/voc/consumerLifestage'>;
    "ConsumerLifestageCode-ADULT": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-ADULT'>;
    "ConsumerLifestageCode-ALL_AGES": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-ALL_AGES'>;
    "ConsumerLifestageCode-BABY_INFANT": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-BABY_INFANT'>;
    "ConsumerLifestageCode-CHILD_1_To_2_YEARS": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-CHILD_1_To_2_YEARS'>;
    "ConsumerLifestageCode-CHILD_2_YEARS_ONWARDS": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-CHILD_2_YEARS_ONWARDS'>;
    "ConsumerLifestageCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-UNCLASSIFIED'>;
    "ConsumerLifestageCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode-UNIDENTIFIED'>;
    "ConsumerLifestageCode": NamedNode<'https://gs1.org/voc/ConsumerLifestageCode'>;
    /** Additional information that should be used in advertising and in displaying. */
    "consumerPackageDisclaimer": NamedNode<'https://gs1.org/voc/consumerPackageDisclaimer'>;
    /** The consumer product variant may be used to distinguish one variant of a retail consumer trade item from another if the change does not require the allocation of a different Global Trade Item Number (per the GTIN Management Standard), but communication between trading partners is required to support consumers. The brand owner is responsible for assigning the consumer product variant. */
    "consumerProductVariant": NamedNode<'https://gs1.org/voc/consumerProductVariant'>;
    /** Information on consumer safety regarding the product. */
    "consumerSafetyInformation": NamedNode<'https://gs1.org/voc/consumerSafetyInformation'>;
    /** A code indicating restrictions imposed on the product regarding how it can be sold to the consumer for example Prescription Required. */
    "consumerSalesCondition": NamedNode<'https://gs1.org/voc/consumerSalesCondition'>;
    /** Products that are sold without a prescription but must be distributed through a pharmacy. */
    "ConsumerSalesConditionsCode-BTC": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode-BTC'>;
    /** Products that may be sold without a prescription. These products are generally available without restrictions. */
    "ConsumerSalesConditionsCode-OTC": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode-OTC'>;
    /** Product may only be sold or dispensed under the direction of a prescription. */
    "ConsumerSalesConditionsCode-PRESCRIPTION_REQUIRED": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode-PRESCRIPTION_REQUIRED'>;
    /** Based upon legal regulatory restrictions it is illegal to sell the product to anyone under the age of 16 years old. */
    "ConsumerSalesConditionsCode-RESTRICTED_TO_SELL_16": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode-RESTRICTED_TO_SELL_16'>;
    /** Based upon legal regulatory restrictions it is illegal to sell the product to anyone under the age of 18 years old. */
    "ConsumerSalesConditionsCode-RESTRICTED_TO_SELL_18": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode-RESTRICTED_TO_SELL_18'>;
    /** Based upon legal regulatory restrictions it is illegal to sell the product to anyone under the age of 21 years old. */
    "ConsumerSalesConditionsCode-RESTRICTED_TO_SELL_21": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode-RESTRICTED_TO_SELL_21'>;
    "ConsumerSalesConditionsCode": NamedNode<'https://gs1.org/voc/ConsumerSalesConditionsCode'>;
    /** Expresses in text the consumer storage instructions of a product which are normally held on the label or accompanying the product. This information may or may not be labelled on the pack. */
    "consumerStorageInstructions": NamedNode<'https://gs1.org/voc/consumerStorageInstructions'>;
    /** Free text containing the usage instructions of a product, which are normally held on the label or accompanying the product. This information may or may not be labelled on the pack. */
    "consumerUsageInstructions": NamedNode<'https://gs1.org/voc/consumerUsageInstructions'>;
    /** Contact information. To specify a contact specifically designated for after-hours support, see gs1:afterHoursContact */
    "contactPoint": NamedNode<'https://gs1.org/voc/contactPoint'>;
    /** Information on an individual or department acting as point of contact for an organiation. */
    "ContactPoint": NamedNode<'https://gs1.org/voc/ContactPoint'>;
    /** The job title of the person that can be contacted for example Manager. */
    "contactTitle": NamedNode<'https://gs1.org/voc/contactTitle'>;
    /** The function or role of a contact for example Customer Support. */
    "contactType": NamedNode<'https://gs1.org/voc/contactType'>;
    /** Designates the larger physical location a sub-location is located within. To specify sub-locations of a physical location, see gs1:containsPlace. */
    "containedInPlace": NamedNode<'https://gs1.org/voc/containedInPlace'>;
    /** Designates a sub-location (e.g., floor, room, shelf) within the physical location being identified. There may be multiple sub-locations associated to a single, physical location. To specify the larger physical location the sub-location is located within, see gs1:containedInPlace */
    "containsPlace": NamedNode<'https://gs1.org/voc/containsPlace'>;
    /** An indication of the ease of preparation for semi-prepared products. The convenience level indicates the level of preparation in percentage required to prepare and helps the consumer to assess how long it will take to prepare the meal. */
    "convenienceLevelPercent": NamedNode<'https://gs1.org/voc/convenienceLevelPercent'>;
    /** Open standard spatial reference systems or coordinate reference systems that provide coordinate-based local, regional or global system used to locate geographical entities.  Values should be URIs already defined by the IOPG Geomatics Committee (https://epsg.org/), such as https://epsg.io/4326 (WGS84); https://epsg.io/4267 (NAD27); https://epsg.io/4230 (ED50); https://epsg.io/4618 (SAD69); https://epsg.io/4269 (NAD83).  For elevation values, gs1:elevation SHALL be used. */
    "coordinateReferenceSystem": NamedNode<'https://gs1.org/voc/coordinateReferenceSystem'>;
    /** Copper per specified nutrient basis quantity. */
    "copperPerNutrientBasis": NamedNode<'https://gs1.org/voc/copperPerNutrientBasis'>;
    /** A measure of the total quantity of something; the number of individual units present.  Typically dimensionless (no units) */
    "Count": NamedNode<'https://gs1.org/voc/Count'>;
    /** Country is a complex data type that indicates a country and a country subdivision. */
    "Country": NamedNode<'https://gs1.org/voc/Country'>;
    /** A short text string code (see values defined in ISO 3166) specifying the country in which a processing or other activity is performed, for example processing, bottling, manufacturing. */
    "countryCode": NamedNode<'https://gs1.org/voc/countryCode'>;
    /** The place where product is assembled. */
    "countryOfAssembly": NamedNode<'https://gs1.org/voc/countryOfAssembly'>;
    /** The place where the product or ingredient was last processed and tested before importation. */
    "countryOfLastProcessing": NamedNode<'https://gs1.org/voc/countryOfLastProcessing'>;
    /** Code indicating the country of origin of the product. */
    "countryOfOrigin": NamedNode<'https://gs1.org/voc/countryOfOrigin'>;
    /** A description of the geographic area the item may have originated from or has been processed. */
    "countryOfOriginStatement": NamedNode<'https://gs1.org/voc/countryOfOriginStatement'>;
    /** A short text string code (see values defined in ISO 3166_2) specifying the country subdivision in which an activity is performed, for example processing, bottling, manufacturing. */
    "countrySubdivisionCode": NamedNode<'https://gs1.org/voc/countrySubdivisionCode'>;
    /** A code that identifies a county. A county is a territorial division in some countries, forming the chief unit of local administration. In the US, a county is a political and administrative division of a state. */
    "countyCode": NamedNode<'https://gs1.org/voc/countyCode'>;
    /** A street intersecting a main street (usually at right angles) and continuing on both sides of it. */
    "crossStreet": NamedNode<'https://gs1.org/voc/crossStreet'>;
    /** The organization which provides product support to the trading partner organization to which merchandise is sold. */
    "customerSupportCentre": NamedNode<'https://gs1.org/voc/customerSupportCentre'>;
    /** The percentage of the recommended daily intake of a nutrient as recommended by authorities of the target market. Is expressed relative to the serving size and base daily value intake. */
    "dailyValueIntakePercent": NamedNode<'https://gs1.org/voc/dailyValueIntakePercent'>;
    /** The default link for a given identified item to which a resolver will redirect unless there is information in the request that is a better match. */
    "defaultLink": NamedNode<'https://gs1.org/voc/defaultLink'>;
    /** A set of 'default links' that may be differentiated by information in the HTTP request headers sent to a resolver to enable a better match than the single default link. */
    "defaultLinkMulti": NamedNode<'https://gs1.org/voc/defaultLinkMulti'>;
    /** The mass per unit volume of a substance.  SI Units: kilogram per cubic metre */
    "Density": NamedNode<'https://gs1.org/voc/Density'>;
    /** The name of a division of an organization dealing with a specific activity */
    "department": NamedNode<'https://gs1.org/voc/department'>;
    /** Dependent products are products which are required to make the current product functional. */
    "dependentProprietaryProduct": NamedNode<'https://gs1.org/voc/dependentProprietaryProduct'>;
    /** An alphanumeric size factor the brand owner wishes to communicate to the consumer. IE Jumbo, Capri, Full Length, Maxi. */
    "descriptiveSize": NamedNode<'https://gs1.org/voc/descriptiveSize'>;
    /** Links to multiple pairs of gs1:DietTypeCode and diet type sub code (free-form text string). */
    "dietCode": NamedNode<'https://gs1.org/voc/dietCode'>;
    /** Code indicating the diet the product is suitable for example Kosher. */
    "dietType": NamedNode<'https://gs1.org/voc/dietType'>;
    /** Denotes a product that can be safely consumed by a person with coeliac disease. Coeliac disease is caused by a reaction to gladin (a gluten protein found in wheat) and similar proteins found in other crops. */
    "DietTypeCode-COELIAC": NamedNode<'https://gs1.org/voc/DietTypeCode-COELIAC'>;
    /** Denotes a product that is specially prepared or processed for people on restrictive diets. */
    "DietTypeCode-DIETETIC": NamedNode<'https://gs1.org/voc/DietTypeCode-DIETETIC'>;
    /** Denotes a product that can be used in a gluten free diet, as specified by the appropriate authority within a target market. */
    "DietTypeCode-FREE_FROM_GLUTEN": NamedNode<'https://gs1.org/voc/DietTypeCode-FREE_FROM_GLUTEN'>;
    /** Denotes selling or serving food ritually fit according to Islamic dietary laws. */
    "DietTypeCode-HALAL": NamedNode<'https://gs1.org/voc/DietTypeCode-HALAL'>;
    /** Denotes selling or serving food ritually fit according to Jewish dietary laws. */
    "DietTypeCode-KOSHER": NamedNode<'https://gs1.org/voc/DietTypeCode-KOSHER'>;
    /** Denotes a food product that was produced with the use of feed or fertiliser of plant or animal origin, without employment of chemically formulated fertilisers, growth stimulants, antibiotics or pesticides. */
    "DietTypeCode-ORGANIC": NamedNode<'https://gs1.org/voc/DietTypeCode-ORGANIC'>;
    /** Denotes a food product which contains no animal food or dairy products. */
    "DietTypeCode-VEGAN": NamedNode<'https://gs1.org/voc/DietTypeCode-VEGAN'>;
    /** Denotes a product that contains no meat, fish or other animal products. */
    "DietTypeCode-VEGETARIAN": NamedNode<'https://gs1.org/voc/DietTypeCode-VEGETARIAN'>;
    /** Denotes a product that contains no beef or beef-products. Beef is considered to be a taboo food product by some religions most notable Hinduism, Buddhism and Jainism. */
    "DietTypeCode-WITHOUT_BEEF": NamedNode<'https://gs1.org/voc/DietTypeCode-WITHOUT_BEEF'>;
    /** Denotes a product that contains no pork meat. */
    "DietTypeCode-WITHOUT_PORK": NamedNode<'https://gs1.org/voc/DietTypeCode-WITHOUT_PORK'>;
    "DietTypeCode": NamedNode<'https://gs1.org/voc/DietTypeCode'>;
    /** A set of diet type code details (diet type code and diet type sub code) for the product. */
    "DietTypeCodeDetails": NamedNode<'https://gs1.org/voc/DietTypeCodeDetails'>;
    /** Free text for indication of diet not stated in the list of diets. */
    "dietTypeDescription": NamedNode<'https://gs1.org/voc/dietTypeDescription'>;
    /** Indicates a set of agreements or a certificate name that guarantees the product is permitted in a particular diet. A diet type subcode is a subclassification of a specific diet type. For example, Pareve is a diet type subcode of Kosher. */
    "dietTypeSubcode": NamedNode<'https://gs1.org/voc/dietTypeSubcode'>;
    /** The location reference associated to a digital place. If gs1:glnType is present, SHALL only be associated if the value of gs1:glnType is gs1:GLN_TypeCode-DIGITAL_LOCATION. */
    "digitalAddress": NamedNode<'https://gs1.org/voc/digitalAddress'>;
    /** The name of a digital place. To specify the name of a physical location, see gs1:physicalLocationName. */
    "digitalLocationName": NamedNode<'https://gs1.org/voc/digitalLocationName'>;
    /** A measurement whose units are dimensionless.  gs1:Count or gs1:VolumeFraction or gs1:RelativeHumidity should be used in preference if appropriate. */
    "Dimensionless": NamedNode<'https://gs1.org/voc/Dimensionless'>;
    /** Provides information on a discount applicable to an offer for example 2 percent. */
    "Discount": NamedNode<'https://gs1.org/voc/Discount'>;
    /** If specified and set to true, the discount is available for each time the minimum qualifying criteria are met.  This can be used to express '$10 off each $50 spend', which is distinct from a 20% discount because it is quantized in units of spending. */
    "discountRepeatsPerMultipleMinimum": NamedNode<'https://gs1.org/voc/discountRepeatsPerMultipleMinimum'>;
    /** A code that specifies the type of payment discount applicable to an offer, for example BOGO. */
    "discountType": NamedNode<'https://gs1.org/voc/discountType'>;
    /** Buy one item and get the second item free of charge */
    "DiscountTypeCode-BOGO": NamedNode<'https://gs1.org/voc/DiscountTypeCode-BOGO'>;
    /** A discount on the item expressed as an amount (value and currency) */
    "DiscountTypeCode-DISCOUNTED_ITEM": NamedNode<'https://gs1.org/voc/DiscountTypeCode-DISCOUNTED_ITEM'>;
    /** A gift given to a consumer as part of a promotional contingent on the consumer making a purchase of another item or items. */
    "DiscountTypeCode-FREE_GIFT": NamedNode<'https://gs1.org/voc/DiscountTypeCode-FREE_GIFT'>;
    /** No charge for shipping. */
    "DiscountTypeCode-FREE_SHIPPING": NamedNode<'https://gs1.org/voc/DiscountTypeCode-FREE_SHIPPING'>;
    /** A discount other than the ones on this list. */
    "DiscountTypeCode-OTHER": NamedNode<'https://gs1.org/voc/DiscountTypeCode-OTHER'>;
    /** A percentage off the product price. */
    "DiscountTypeCode-PERCENTAGE_OFF": NamedNode<'https://gs1.org/voc/DiscountTypeCode-PERCENTAGE_OFF'>;
    "DiscountTypeCode": NamedNode<'https://gs1.org/voc/DiscountTypeCode'>;
    /** The product of the absorbed dose multiplied by a Q factor (relating to the type of radiation) and a factor relating to all relevant aspects of the body being irradiated, multiplied by the exposure time.  SI Units: sievert */
    "DoseEquivalent": NamedNode<'https://gs1.org/voc/DoseEquivalent'>;
    /** The product of the absorbed dose rate multiplied by a Q factor (relating to the type of radiation) and a factor relating to all relevant aspects of the body being irradiated.  SI Units: sievert per second */
    "DoseEquivalentRate": NamedNode<'https://gs1.org/voc/DoseEquivalentRate'>;
    /** The weight of the product when drained of its liquid. For example 225 GRM, Jar of pickles in vinegar. */
    "drainedWeight": NamedNode<'https://gs1.org/voc/drainedWeight'>;
    /** The date by which an invoice should be paid. This data element represents an attribute of a payment slip reference number, AI (8020), and a Global Location Number (GLN) of the invoicing party. */
    "dueDate": NamedNode<'https://gs1.org/voc/dueDate'>;
    /** The time period that the warranty is valid within. */
    "durationOfWarranty": NamedNode<'https://gs1.org/voc/durationOfWarranty'>;
    /** The current tax or duty or fee amount applicable to the product, expressed as a floating-point numeric value that is qualified by the corresponding currency. See also gs1:priceCurrency. */
    "dutyFeeTaxAmount": NamedNode<'https://gs1.org/voc/dutyFeeTaxAmount'>;
    /** A description of tax type for example Taxes sure les supports audio. */
    "dutyFeeTaxDescription": NamedNode<'https://gs1.org/voc/dutyFeeTaxDescription'>;
    /** The current tax or duty rate percentage applicable to the product. */
    "dutyFeeTaxRate": NamedNode<'https://gs1.org/voc/dutyFeeTaxRate'>;
    /** The value of the tangential force per unit area which is necessary to maintain unit relative velocty between two parallel planes unit distance apart in a fluid.  SI Units: pascal */
    "DynamicViscosity": NamedNode<'https://gs1.org/voc/DynamicViscosity'>;
    /** Quantity of unbalanced electricity in an object, i.e. excess or deficiency of electrons, resulting in negative or positive electrification, respectively.  SI Units: coulomb */
    "ElectricCharge": NamedNode<'https://gs1.org/voc/ElectricCharge'>;
    /** Rate of flow of charge in a substance, whether solid, liquid or gas.  SI Units: ampere */
    "ElectricCurrent": NamedNode<'https://gs1.org/voc/ElectricCurrent'>;
    /** Rate of flow of charge in a substance per unit area perpendicular to the current.  SI Units: ampere per square metre */
    "ElectricCurrentDensity": NamedNode<'https://gs1.org/voc/ElectricCurrentDensity'>;
    /** The electric force acting on a unit charge. The linear gradient of the electrostatic potential.  SI Units: volt per metre = newton / coulomb */
    "ElectricFieldStrength": NamedNode<'https://gs1.org/voc/ElectricFieldStrength'>;
    /** The elevation of a location (WGS 84). Values may be of the form 'NUMBER UNITOFMEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone SHALL be a value in meters. */
    "elevation": NamedNode<'https://gs1.org/voc/elevation'>;
    /** The quantity including unit of measure for which the offer for good or service is valid.  If this is not specified, an eligible quantity of 1 should be assumed. */
    "eligibleQuantity": NamedNode<'https://gs1.org/voc/eligibleQuantity'>;
    /** The maximum quantity including unit of measure for which the offer for good or service is valid. */
    "eligibleQuantityMaximum": NamedNode<'https://gs1.org/voc/eligibleQuantityMaximum'>;
    /** The minimum quantity including unit of measure for which the offer for good or service is valid. */
    "eligibleQuantityMinimum": NamedNode<'https://gs1.org/voc/eligibleQuantityMinimum'>;
    /** A code determining the location where a user can redeem the offer, for example ONLINE_ONLY. */
    "eligibleTradeChannel": NamedNode<'https://gs1.org/voc/eligibleTradeChannel'>;
    /** Creating/sending/receiving of unstructured free text messages or documents using computer network, a mini-computer or an attached modem and regular telephone line or other electronic transmission media. */
    "email": NamedNode<'https://gs1.org/voc/email'>;
    /** A measure of a the capacity of a system or body to do work.  SI Units: joule */
    "Energy": NamedNode<'https://gs1.org/voc/Energy'>;
    /** Energy from Fat per specified nutrient basis quantity. */
    "energyFromFatPerNutrientBasis": NamedNode<'https://gs1.org/voc/energyFromFatPerNutrientBasis'>;
    /** Energy Per specified nutrient basis quantity. */
    "energyPerNutrientBasis": NamedNode<'https://gs1.org/voc/energyPerNutrientBasis'>;
    /** A link to an EPCIS repository of visibility event data. */
    "epcis": NamedNode<'https://gs1.org/voc/epcis'>;
    /** A link to an electronic patient information leaflet. */
    "epil": NamedNode<'https://gs1.org/voc/epil'>;
    /** A product which can be substituted for the product based on supplier-defined functional equivalence to the product. */
    "equivalentProduct": NamedNode<'https://gs1.org/voc/equivalentProduct'>;
    /** Indicates the reporting of an error condition detected by a sensor device */
    "ERROR_CONDITION": NamedNode<'https://gs1.org/voc/ERROR_CONDITION'>;
    /** A link to event details.  For a page specifically for scheduling a reservation or booking an appointment, see gs1:scheduleTime. */
    "eventsInfo": NamedNode<'https://gs1.org/voc/eventsInfo'>;
    /** Links to a gs1:PriceSpecification that indicates in terms of an amount and specified currency, the exact discount on the sales price associated with a particular gs1:Discount. This property can be used to express '$10 off'. */
    "exactDiscountAmount": NamedNode<'https://gs1.org/voc/exactDiscountAmount'>;
    /** A floating-point value indicating an exact percentage discount on the sales price associated with a particular gs1:Discount.  This property can be used to express '15% discount'. */
    "exactDiscountPercentage": NamedNode<'https://gs1.org/voc/exactDiscountPercentage'>;
    /**  A text description of any products, brands, or categories that cannot be used with the offer */
    "exclusionDescription": NamedNode<'https://gs1.org/voc/exclusionDescription'>;
    /** The expiration date is the date that determines the limit of consumption or use of a product/coupon. Its meaning is determined based on the trade item context (e.g., for food, the date will indicate the possibility of a direct health risk resulting from use of the product after the date, for pharmaceutical products, it will indicate the possibility of an indirect health risk resulting from the ineffectiveness of the product after the date). It is often referred to as 'use by date' or 'maximum durability date'. */
    "expirationDate": NamedNode<'https://gs1.org/voc/expirationDate'>;
    /** The manufacturer determines the expiration date and time, which is relevant only for short duration and for items that will not be sent on long distances and not outside of the time zone. A typical application of AI (7003) is in hospitals or public pharmacies for special, customised, products which may have a 'life duration' shorter than one single day. The life duration varies according the pharmaceutical substances used in the treatment. The precise expiration date and time is defined at the end of the manufacturing process, and can be barcoded on the product label as an attribute to the item's GTIN. Where there is no business requirement to express the expiration date to the nearest hour (or less), AI (17) Expiration date should be used. */
    "expirationDateTime": NamedNode<'https://gs1.org/voc/expirationDateTime'>;
    /** The product of light intensity and time duration of the exposure.  SI Units: lux second */
    "Exposure": NamedNode<'https://gs1.org/voc/Exposure'>;
    /** A link to a set of frequently asked questions. */
    "faqs": NamedNode<'https://gs1.org/voc/faqs'>;
    /** The percentage of fat contained in milk content of the product. */
    "fatInMilkContent": NamedNode<'https://gs1.org/voc/fatInMilkContent'>;
    /** The amount of fat contained in the base product expressed in percentage. */
    "fatpercentageInDryMatter": NamedNode<'https://gs1.org/voc/fatpercentageInDryMatter'>;
    /** Fat per specified nutrient basis quantity. */
    "fatPerNutrientBasis": NamedNode<'https://gs1.org/voc/fatPerNutrientBasis'>;
    /** A fax number used for transmitting and reproducing fixed graphic material over telephone lines or other electronic transmission media. */
    "faxNumber": NamedNode<'https://gs1.org/voc/faxNumber'>;
    /** Fibre per specified nutrient basis quantity. */
    "fibrePerNutrientBasis": NamedNode<'https://gs1.org/voc/fibrePerNutrientBasis'>;
    /** The specified language to which the digital asset is targeted. It is recommended to use the ISO 639-1 language code. */
    "fileLanguageCode": NamedNode<'https://gs1.org/voc/fileLanguageCode'>;
    /** The number of pixels along the vertical axis of the image. */
    "filePixelHeight": NamedNode<'https://gs1.org/voc/filePixelHeight'>;
    /** The number of pixels along the horizontal axis of the image. */
    "filePixelWidth": NamedNode<'https://gs1.org/voc/filePixelWidth'>;
    /** The first freeze date is applicable to products that are frozen directly after slaughtering, harvesting, catching or after initial processing of the product. Examples include fresh meat, meat products or fishery products. The first freeze date is determined by the organisation conducting the freezing. */
    "firstFreezeDate": NamedNode<'https://gs1.org/voc/firstFreezeDate'>;
    /** The type of fish for example Sea bass. */
    "fishType": NamedNode<'https://gs1.org/voc/fishType'>;
    /** Fluoride per specified nutrient basis quantity. */
    "fluoridePerNutrientBasis": NamedNode<'https://gs1.org/voc/fluoridePerNutrientBasis'>;
    /** Folic Acid per specified nutrient basis quantity. */
    "folicAcidPerNutrientBasis": NamedNode<'https://gs1.org/voc/folicAcidPerNutrientBasis'>;
    /** Food and Beverage Preparation Information is a complex data type that indicates a preparation state code and preparation instructions. */
    "FoodAndBeveragePreparationInformation": NamedNode<'https://gs1.org/voc/FoodAndBeveragePreparationInformation'>;
    /** Identifies whether or not the product requires refrigeration. */
    "foodBeverageRefrigerationClaim": NamedNode<'https://gs1.org/voc/foodBeverageRefrigerationClaim'>;
    "FoodBeverageRefrigerationClaimCode-CAN_BE_REFRIGERATED": NamedNode<'https://gs1.org/voc/FoodBeverageRefrigerationClaimCode-CAN_BE_REFRIGERATED'>;
    "FoodBeverageRefrigerationClaimCode-MUST_BE_REFRIGERATED": NamedNode<'https://gs1.org/voc/FoodBeverageRefrigerationClaimCode-MUST_BE_REFRIGERATED'>;
    "FoodBeverageRefrigerationClaimCode-SHELF_STABLE": NamedNode<'https://gs1.org/voc/FoodBeverageRefrigerationClaimCode-SHELF_STABLE'>;
    "FoodBeverageRefrigerationClaimCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/FoodBeverageRefrigerationClaimCode-UNIDENTIFIED'>;
    "FoodBeverageRefrigerationClaimCode": NamedNode<'https://gs1.org/voc/FoodBeverageRefrigerationClaimCode'>;
    /** The type of meal the food or beverage product is targeted to for example Breakfast. */
    "foodBeverageTargetUse": NamedNode<'https://gs1.org/voc/foodBeverageTargetUse'>;
    "FoodBeverageTargetUseCode-ANY_MEAL": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode-ANY_MEAL'>;
    "FoodBeverageTargetUseCode-BREAKFAST": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode-BREAKFAST'>;
    "FoodBeverageTargetUseCode-MAIN_MEAL": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode-MAIN_MEAL'>;
    "FoodBeverageTargetUseCode-PORTABLE_MEAL": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode-PORTABLE_MEAL'>;
    "FoodBeverageTargetUseCode-SNACK": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode-SNACK'>;
    "FoodBeverageTargetUseCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode-UNCLASSIFIED'>;
    "FoodBeverageTargetUseCode": NamedNode<'https://gs1.org/voc/FoodBeverageTargetUseCode'>;
    /** Food Beverage Tobacco Ingredient is a complex data type that includes an ingredient statement and details. */
    "FoodBeverageTobaccoIngredientDetails": NamedNode<'https://gs1.org/voc/FoodBeverageTobaccoIngredientDetails'>;
    /** A food, beverage or tobacco product. */
    "FoodBeverageTobaccoProduct": NamedNode<'https://gs1.org/voc/FoodBeverageTobaccoProduct'>;
    /**  Outerwear that is worn on the feet such as shoes or boots. */
    "Footwear": NamedNode<'https://gs1.org/voc/Footwear'>;
    /** Something that mechanically joins or affixes two or more parts together in a footwear product for example a shoe lace. */
    "footwearFasteningType": NamedNode<'https://gs1.org/voc/footwearFasteningType'>;
    "FootwearFasteningTypeCode-MULTIPLE_FASTENING": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-MULTIPLE_FASTENING'>;
    "FootwearFasteningTypeCode-SHOE_LACE": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-SHOE_LACE'>;
    "FootwearFasteningTypeCode-SLIP_ON_WITH_ELASTIC": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-SLIP_ON_WITH_ELASTIC'>;
    "FootwearFasteningTypeCode-SLIP_ON_WITHOUT_ELASTIC": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-SLIP_ON_WITHOUT_ELASTIC'>;
    "FootwearFasteningTypeCode-STRAP": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-STRAP'>;
    "FootwearFasteningTypeCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-UNCLASSIFIED'>;
    "FootwearFasteningTypeCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-UNIDENTIFIED'>;
    "FootwearFasteningTypeCode-VELCRO": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode-VELCRO'>;
    "FootwearFasteningTypeCode": NamedNode<'https://gs1.org/voc/FootwearFasteningTypeCode'>;
    /** The descriptive term that is used by the product manufacturer to identify whether the footwear upper is open or closed. Otherwise known as Open or Closed Upper. */
    "footwearUpperType": NamedNode<'https://gs1.org/voc/footwearUpperType'>;
    /** The rate of change of linear momentum of a body on which a force acts. A force acting on a body which is free to move produces an acceleration in the motion of the body.  SI Units: newton */
    "Force": NamedNode<'https://gs1.org/voc/Force'>;
    /** The rate of repetition of a periodic oscillation or disturbance; the number of cycles per unit time.  SI Units: hertz */
    "Frequency": NamedNode<'https://gs1.org/voc/Frequency'>;
    /** A code determining whether the fish originated from the sea or was farmed. */
    "freshOrSeawaterFarmed": NamedNode<'https://gs1.org/voc/freshOrSeawaterFarmed'>;
    "FreshOrSeawaterFarmedCode-FRESHWATER_FARMED": NamedNode<'https://gs1.org/voc/FreshOrSeawaterFarmedCode-FRESHWATER_FARMED'>;
    "FreshOrSeawaterFarmedCode-SEAWATER_FARMED": NamedNode<'https://gs1.org/voc/FreshOrSeawaterFarmedCode-SEAWATER_FARMED'>;
    "FreshOrSeawaterFarmedCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/FreshOrSeawaterFarmedCode-UNCLASSIFIED'>;
    "FreshOrSeawaterFarmedCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/FreshOrSeawaterFarmedCode-UNIDENTIFIED'>;
    "FreshOrSeawaterFarmedCode": NamedNode<'https://gs1.org/voc/FreshOrSeawaterFarmedCode'>;
    /** Contains properties related specifically to fruit and vegetable products. */
    "FruitsVegetables": NamedNode<'https://gs1.org/voc/FruitsVegetables'>;
    /** Describes use of the product or service by the consumer. Should help clarify the product classification associated with the GTIN. */
    "functionalName": NamedNode<'https://gs1.org/voc/functionalName'>;
    /** A statement of the presence or absence of genetically modified protein or DNA. */
    "geneticallyModifiedDeclaration": NamedNode<'https://gs1.org/voc/geneticallyModifiedDeclaration'>;
    /** Links to information about geocoordinates or geoshapes for a place. */
    "geo": NamedNode<'https://gs1.org/voc/geo'>;
    /** The geographic coordinates of a place or event. */
    "GeoCoordinates": NamedNode<'https://gs1.org/voc/GeoCoordinates'>;
    /** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points. */
    "GeoShape": NamedNode<'https://gs1.org/voc/GeoShape'>;
    /** An electronic (non-physical) address that is used for communication between computer systems. */
    "GLN_TypeCode-DIGITAL_LOCATION": NamedNode<'https://gs1.org/voc/GLN_TypeCode-DIGITAL_LOCATION'>;
    /** Fixed physical location - a tangible place that does not change locations and may be represented by an address, coordinates, or other means. */
    "GLN_TypeCode-FIXED_PHYSICAL_LOCATION": NamedNode<'https://gs1.org/voc/GLN_TypeCode-FIXED_PHYSICAL_LOCATION'>;
    /** An organisational subdivision or department. */
    "GLN_TypeCode-FUNCTION": NamedNode<'https://gs1.org/voc/GLN_TypeCode-FUNCTION'>;
    /** Any business, government body, department, charity, individual, or institution that has standing in the eyes of the law and has the capacity to enter into agreements or contracts. */
    "GLN_TypeCode-LEGAL_ENTITY": NamedNode<'https://gs1.org/voc/GLN_TypeCode-LEGAL_ENTITY'>;
    /** Mobile physical location â€“ a tangible place that is expected to change locations and may be represented by an address, coordinates, or other means. */
    "GLN_TypeCode-MOBILE_PHYSICAL_LOCATION": NamedNode<'https://gs1.org/voc/GLN_TypeCode-MOBILE_PHYSICAL_LOCATION'>;
    /** GLN Type Code indicates what type of thing is being identified by a GLN. gs1:GLN_TypeCode value selections SHALL NOT contain both gs1:GLN_TypeCode-FIXED_PHYSICAL_LOCATION and gs1:GLN_TypeCode-MOBILE_PHYSICAL_LOCATION. */
    "GLN_TypeCode": NamedNode<'https://gs1.org/voc/GLN_TypeCode'>;
    /** Indicates what type of thing is being identified by a GLN. */
    "glnType": NamedNode<'https://gs1.org/voc/glnType'>;
    /** A Global Location Number (GLN) is the GS1 Identification Key used to identify physical locations or parties. The key comprises a GS1 Company Prefix, Location Reference and Check Digit. For more information see https://www.gs1.org/gln. */
    "globalLocationNumber": NamedNode<'https://gs1.org/voc/globalLocationNumber'>;
    /** 8-digit code (GPC Brick Value) specifying a product category according to the GS1 Global Product Classification (GPC) standard. For more information see https://www.gs1.org/gpc */
    "gpcCategoryCode": NamedNode<'https://gs1.org/voc/gpcCategoryCode'>;
    /** A description of the code specifying a product category according to the GS1 Global Product Classification (GPC) standard. */
    "gpcCategoryDescription": NamedNode<'https://gs1.org/voc/gpcCategoryDescription'>;
    /** The overall area of the item including packaging. This can be given using a number of different AI ranges that depend on the units in which the area is measured. */
    "grossArea": NamedNode<'https://gs1.org/voc/grossArea'>;
    /** The overall volume of the item including packaging. This can be given using a number of different AI ranges that depend on the units in which the volume is measured. */
    "grossVolume": NamedNode<'https://gs1.org/voc/grossVolume'>;
    /** Used to identify the gross weight of the product. The gross weight includes all packaging materials of the product. At pallet level the productGrossWeight includes the weight of the pallet itself. For example, 200 GRM, value - total pounds, total grams, etc. */
    "grossWeight": NamedNode<'https://gs1.org/voc/grossWeight'>;
    /** The process through which fresh produce is grown and cultivated. */
    "growingMethod": NamedNode<'https://gs1.org/voc/growingMethod'>;
    /** Animal is not confined to a cage. */
    "GrowingMethodCode-CAGE_FREE": NamedNode<'https://gs1.org/voc/GrowingMethodCode-CAGE_FREE'>;
    /** Product is a result of genetic engineering. */
    "GrowingMethodCode-CLONED_FOODS": NamedNode<'https://gs1.org/voc/GrowingMethodCode-CLONED_FOODS'>;
    /** Foods grown non-organically, either indoors or outdoors without any special processes. */
    "GrowingMethodCode-CONVENTIONAL": NamedNode<'https://gs1.org/voc/GrowingMethodCode-CONVENTIONAL'>;
    /** Animal is raised on a farm. */
    "GrowingMethodCode-FARM_RAISED": NamedNode<'https://gs1.org/voc/GrowingMethodCode-FARM_RAISED'>;
    /** Plants Grown Outdoors */
    "GrowingMethodCode-FIELD_GROWN": NamedNode<'https://gs1.org/voc/GrowingMethodCode-FIELD_GROWN'>;
    /** Citrus Grown in an area certified to be free of all Caribbean Fruit Flies based on trappings */
    "GrowingMethodCode-FLY_FREE": NamedNode<'https://gs1.org/voc/GrowingMethodCode-FLY_FREE'>;
    /** A method that animals are allowed to roam with little restriction to their movements. */
    "GrowingMethodCode-FREE_RANGE": NamedNode<'https://gs1.org/voc/GrowingMethodCode-FREE_RANGE'>;
    /** Animal is predominately fed grass or forage. */
    "GrowingMethodCode-GRASS_FED": NamedNode<'https://gs1.org/voc/GrowingMethodCode-GRASS_FED'>;
    /** Plants that are grown and cultivated in an indoor covered place. */
    "GrowingMethodCode-GREENHOUSE": NamedNode<'https://gs1.org/voc/GrowingMethodCode-GREENHOUSE'>;
    /** A process where animals are raised such that the welfare of the animal is a foremost concern. */
    "GrowingMethodCode-HUMANELY_RAISED": NamedNode<'https://gs1.org/voc/GrowingMethodCode-HUMANELY_RAISED'>;
    /** Plants grown using mineral nutrient solutions instead of soil. */
    "GrowingMethodCode-HYDROPONIC": NamedNode<'https://gs1.org/voc/GrowingMethodCode-HYDROPONIC'>;
    /** (IPM) Plants grown using a pest control strategy that uses an array of complimentary methods: mechanical devices, physical devices, genetic, biological, legal, cultural management and chemical management. These methods are done in three stages: prevention, observation, and intervention. It is an ecological approach with a main goal of significantly reducing or eliminating the use of pesticides. */
    "GrowingMethodCode-INTEGRATED_PEST_MANAGEMENT": NamedNode<'https://gs1.org/voc/GrowingMethodCode-INTEGRATED_PEST_MANAGEMENT'>;
    /** Foods grown organically, either indoors or outdoors. */
    "GrowingMethodCode-ORGANIC": NamedNode<'https://gs1.org/voc/GrowingMethodCode-ORGANIC'>;
    /** Produce which has been grown under shade or grown under cloth. */
    "GrowingMethodCode-SHADE_GROWN": NamedNode<'https://gs1.org/voc/GrowingMethodCode-SHADE_GROWN'>;
    "GrowingMethodCode-SUSTAINABLE": NamedNode<'https://gs1.org/voc/GrowingMethodCode-SUSTAINABLE'>;
    /** The animal or plant was not inhibited or prohibited from roving, wandering, and not tamed or domesticated. */
    "GrowingMethodCode-WILD": NamedNode<'https://gs1.org/voc/GrowingMethodCode-WILD'>;
    "GrowingMethodCode": NamedNode<'https://gs1.org/voc/GrowingMethodCode'>;
    /** A Global Trade Item Number (GTIN) is the 14 digit GS1 Identification Key used to identify products. The key comprises a GS1 Company Prefix followed by an Item Reference Number and a Check Digit. See https://www.gs1.org/gtin  for more details. */
    "gtin": NamedNode<'https://gs1.org/voc/gtin'>;
    /** Used when one resolver redirects all request URIs that match a given pattern without further processing, such as from GS1 to a brand-operated service. See section 7.7.1 of the Digital Link standard, version 1.1. */
    "handledBy": NamedNode<'https://gs1.org/voc/handledBy'>;
    /** The harvest date. For example, the harvest date can be the date when an animal was slaughtered or killed, a fish has been harvested, or a crop was harvested. This date  is determined by the organisation conducting the harvesting. Different organisations may use more specific terminology when referring to their specific needs and use terms such as: Date of catch or slaughter date. */
    "harvestDate": NamedNode<'https://gs1.org/voc/harvestDate'>;
    /** The harvest end date. For example, the harvest end date can be the date when an animal was slaughtered or killed, a fish has been harvested, or a crop was harvested. This end date is determined by the organisation conducting the harvesting. Different organisations may use more specific terminology when referring to their specific needs and use terms such as: Date of catch or slaughter date. When referring to animals the date range refers to the whole animal and all meat or fish cuts derived from this animal. */
    "harvestDateEnd": NamedNode<'https://gs1.org/voc/harvestDateEnd'>;
    /** The harvest start date. For example, the harvest start date can be the date when an animal was slaughtered or killed, a fish has been harvested, or a crop was harvested. This start date is determined by the organisation conducting the harvesting. Different organisations may use more specific terminology when referring to their specific needs and use terms such as: Date of catch or slaughter date. When referring to animals the date range refers to the whole animal and all meat or fish cuts derived from this animal. */
    "harvestDateStart": NamedNode<'https://gs1.org/voc/harvestDateStart'>;
    /** Relates to details about allergens */
    "hasAllergen": NamedNode<'https://gs1.org/voc/hasAllergen'>;
    /** The batch or lot number associates an item with information the manufacturer considers relevant for traceability of the trade item to which the element string is applied. The data may refer to the trade item itself or to items contained. The number may be, for example, a production lot number, a shift number, a machine number, a time, or an internal production code. In cases where the same product is manufactured in different locations the brand owner and the manufacturer are responsible for ensuring the non-duplication of batch/lot numbers for a GTIN. For the re-use of batch/lot numbers with a GTIN, sector-specific constraints need to be considered. */
    "hasBatchLotNumber": NamedNode<'https://gs1.org/voc/hasBatchLotNumber'>;
    /** Links to the place(s) that this organisation designates as their primary location(s). */
    "hasPrimaryLocation": NamedNode<'https://gs1.org/voc/hasPrimaryLocation'>;
    /** A link to a list of retailers. */
    "hasRetailers": NamedNode<'https://gs1.org/voc/hasRetailers'>;
    /** links to details of amounts refunded for returnable package in a specified region. */
    "hasReturnablePackageDeposit": NamedNode<'https://gs1.org/voc/hasReturnablePackageDeposit'>;
    /** A serial number is assigned to an entity for its lifetime. When combined with a GTIN, a serial number uniquely identifies an individual item. The serial number field is alphanumeric and may include all characters contained in figure 7.11-1. The brand owner and the manufacturer are responsible for ensuring the non-duplication of serial numbers for a GTIN. For the re-use of serial numbers with a GTIN, sector-specific constraints need to be considered. */
    "hasSerialNumber": NamedNode<'https://gs1.org/voc/hasSerialNumber'>;
    /** This identifier is assigned to an entity for its lifetime. When combined with a GTIN, a TPX uniquely identifies an individual item and forms a unit pack Unique Identifier (upUI) for tobacco traceability per EU 2018/574. The serial number field is alphanumeric and may include all characters contained in figure 7.11-1. The Third Party determines the TPX, but the TPX shall begin with the ID Issuer Unique Identification Code (UIC), followed by GS1 UIC Extension 1, and GS1 UIC Extension 2. */
    "hasThirdPartyControlledSerialNumber": NamedNode<'https://gs1.org/voc/hasThirdPartyControlledSerialNumber'>;
    /** A description of health claims according to regulations of the target market. */
    "healthClaimDescription": NamedNode<'https://gs1.org/voc/healthClaimDescription'>;
    /** A link to general information about an organisation or brand. Typically the homepage of an organisation's website. It may include links to further information such as certifications, careers, payments, reservations, etc. */
    "homepage": NamedNode<'https://gs1.org/voc/homepage'>;
    /** The energy in the form of visible radiation reaching a surface per unit area in unit time; the amount of luminous flux per unit area.  SI Units: lux = 1 lumen per square metre */
    "Illuminance": NamedNode<'https://gs1.org/voc/Illuminance'>;
    /** Link to a file containing a visual representation of the product. */
    "image": NamedNode<'https://gs1.org/voc/image'>;
    /** Any included object or device not part of the core product itself but which adds to its functionality or use. */
    "includedAccessories": NamedNode<'https://gs1.org/voc/includedAccessories'>;
    /** The magnitude of the property of an element or circuit to form a magnetic field and store magnetic energy when carrying a current. The property of an electric circuit or component that causes an electromotive force to be generated in it as a result of a change in the current flowing through the circuit (self inductance) or of a change in the current flowing through a neighbouring circuit with which it is magnetically linked (mutual inductance).  SI Units: henry */
    "Inductance": NamedNode<'https://gs1.org/voc/Inductance'>;
    /** Links to information about ingredients of a specific Food/Beverage/Tobacco product. */
    "ingredient": NamedNode<'https://gs1.org/voc/ingredient'>;
    /** Quantity of the ingredient contained in the product as a percentage of the total product ingredients. This is used in conjunction with ingredientName. */
    "ingredientContentPercentage": NamedNode<'https://gs1.org/voc/ingredientContentPercentage'>;
    /** Free text field describing an ingredient or ingredient group. Ingredients include any additives (colourings, preservatives, e-numbers, etc.) that are encompassed. */
    "ingredientName": NamedNode<'https://gs1.org/voc/ingredientName'>;
    /** Indicates a claim to an ingredient, considered to be a concern for regulatory or other reasons, and which is 'contained' within the product but may not need to specify the amount whether approximate, or an accurate measurement be given. */
    "ingredientOfConcern": NamedNode<'https://gs1.org/voc/ingredientOfConcern'>;
    /** Integer (1, 2, 3...) indicating the ingredient order by content percentage of the product. (major ingredient = 1, second ingredient = 2) etc. */
    "ingredientSequence": NamedNode<'https://gs1.org/voc/ingredientSequence'>;
    /** A link to facts about ingredients. */
    "ingredientsInfo": NamedNode<'https://gs1.org/voc/ingredientsInfo'>;
    /** Information on the constituent ingredient make up of the product specified as one string. */
    "ingredientStatement": NamedNode<'https://gs1.org/voc/ingredientStatement'>;
    /** The date when the certification was originally issued. May differ from the certificationStartDate of the current recertification cycle. */
    "initialCertificationDate": NamedNode<'https://gs1.org/voc/initialCertificationDate'>;
    /** The depth of the product in its packaging, as measured according to the GS1 Package Measurement Rules. See https://www.gs1.org/package-measurement-rules-implementation-guide for more details. */
    "inPackageDepth": NamedNode<'https://gs1.org/voc/inPackageDepth'>;
    /** The measurement of the diameter of the product in its package at its largest point. For example, 165 MMT. */
    "inPackageDiameter": NamedNode<'https://gs1.org/voc/inPackageDiameter'>;
    /** The height of the product in the package, as measured according to the GS1 Package Measurement Rules. See https://www.gs1.org/package-measurement-rules-implementation-guide for more details. */
    "inPackageHeight": NamedNode<'https://gs1.org/voc/inPackageHeight'>;
    /** The width of the product in the package, as measured according to the GS1 Package Measurement Rules. See https://www.gs1.org/package-measurement-rules-implementation-guide for more details. */
    "inPackageWidth": NamedNode<'https://gs1.org/voc/inPackageWidth'>;
    /** A link to instructions, such as assembly instructions, usage tips etc. */
    "instructions": NamedNode<'https://gs1.org/voc/instructions'>;
    /** Link to a file containing the Instructions For Use. */
    "instructionsForUse": NamedNode<'https://gs1.org/voc/instructionsForUse'>;
    /** Iodine per specified nutrient basis quantity. */
    "iodinePerNutrientBasis": NamedNode<'https://gs1.org/voc/iodinePerNutrientBasis'>;
    /** Iron per specified nutrient basis quantity. */
    "ironPerNutrientBasis": NamedNode<'https://gs1.org/voc/ironPerNutrientBasis'>;
    /** The flux of radiant energy per unit area, especially an area perpendicular to the direction of travel through a medium. A measure of the radiant power per unit area that flows across a surface.  SI Units: watt per square metre */
    "Irradiance": NamedNode<'https://gs1.org/voc/Irradiance'>;
    /** Indicates if radiation has been applied to the product. */
    "irradiatedCode": NamedNode<'https://gs1.org/voc/irradiatedCode'>;
    /** Used to identify whether or not a beverage product is naturally effervescent or has been made effervescent by the addition of carbon dioxide gas. */
    "isCarbonated": NamedNode<'https://gs1.org/voc/isCarbonated'>;
    /** The descriptive term that is used by the product manufacturer to identify whether or not the product contains caffeine. */
    "isDecaffeinated": NamedNode<'https://gs1.org/voc/isDecaffeinated'>;
    /** Used to identify whether or not the product claims to be made from a concentrated formulation. */
    "isFromConcentrate": NamedNode<'https://gs1.org/voc/isFromConcentrate'>;
    /** A The indication whether or not the milk used was actively homogenised. The homogenisation of milk is a technical process in the dairy. The milk fat is milled to such an extent that further creaming is prevented. */
    "isHomogenised": NamedNode<'https://gs1.org/voc/isHomogenised'>;
    /** Determines whether the product is instant. */
    "isInstant": NamedNode<'https://gs1.org/voc/isInstant'>;
    /** Indicates, with reference to the product branding, labelling or packaging, the descriptive term that is used by the product manufacturer to identify if the product is intended as maternity wear. */
    "isMaternity": NamedNode<'https://gs1.org/voc/isMaternity'>;
    /** If specified and set to true, the discount is only available through the retailer making the offer. */
    "isOnlyAvailableThroughRetailer": NamedNode<'https://gs1.org/voc/isOnlyAvailableThroughRetailer'>;
    /** If specified and set to true, the discount is only available for customers who have signed up to the retailer's mailing list. */
    "isOnlyWithMailingListSignup": NamedNode<'https://gs1.org/voc/isOnlyWithMailingListSignup'>;
    /** If specified, the discount is only available when purchasing using one of the specified payment card types. */
    "isOnlyWithPaymentCard": NamedNode<'https://gs1.org/voc/isOnlyWithPaymentCard'>;
    /** If specified and set to true, the discount is only available for holders of the retailer's own loyalty card. */
    "isOnlyWithRetailerLoyaltyCard": NamedNode<'https://gs1.org/voc/isOnlyWithRetailerLoyaltyCard'>;
    /** If specified and set to true, the discount is only available for holders of the retailer's own store payment card. */
    "isOnlyWithRetailerPaymentCard": NamedNode<'https://gs1.org/voc/isOnlyWithRetailerPaymentCard'>;
    /** The descriptive term that is used by the product manufacturer to identify whether or not the product has a patterned design. */
    "isPatterned": NamedNode<'https://gs1.org/voc/isPatterned'>;
    /** The descriptive term that is used by the product manufacturer to identify whether or not a fruit or vegetable product has been de-stoned or pitted prior to being offered for sale. */
    "isPittedStoned": NamedNode<'https://gs1.org/voc/isPittedStoned'>;
    /** An indicator for the product to determine if the Manufacturer or Supplier has recalled the product. */
    "isProductRecalled": NamedNode<'https://gs1.org/voc/isProductRecalled'>;
    /** Determines whether the offer is only provided by the promoter */
    "isPromoterExclusiveOffer": NamedNode<'https://gs1.org/voc/isPromoterExclusiveOffer'>;
    /** An indicator whether or not the cheese rind is edible. Some cheeses are coated in plastic or their surface is treated with other traditional substances to increase their shelf life. This can result in the rind no longer being edible. */
    "isRindEdible": NamedNode<'https://gs1.org/voc/isRindEdible'>;
    /** Determines whether the product is seedless as grown. */
    "isSeedless": NamedNode<'https://gs1.org/voc/isSeedless'>;
    /** The descriptive term that is used by the product manufacturer to identify whether or not the product or its contents have been shelled/peeled prior to being offered for sale. */
    "isShelledPeeled": NamedNode<'https://gs1.org/voc/isShelledPeeled'>;
    /** Determines whether the product comes pre-sliced. */
    "isSliced": NamedNode<'https://gs1.org/voc/isSliced'>;
    /** The descriptive term that is used to identify whether the product is thermal. */
    "isThermal": NamedNode<'https://gs1.org/voc/isThermal'>;
    /** Identifies whether the product makes claim to being vintage. */
    "isVintage": NamedNode<'https://gs1.org/voc/isVintage'>;
    /** Determines whether product has been prewashed and is ready to eat. */
    "isWashedReadyToEat": NamedNode<'https://gs1.org/voc/isWashedReadyToEat'>;
    /** The descriptive term that is used to identify whether or not the product claims to provide waterproofing to the applied surface. */
    "isWaterproof": NamedNode<'https://gs1.org/voc/isWaterproof'>;
    /** Identifies whether or not the product is intended to be disposed of after single use or a limited period of use. */
    "isWearableItemDisposable": NamedNode<'https://gs1.org/voc/isWearableItemDisposable'>;
    /** The product included in the offer. */
    "itemOffered": NamedNode<'https://gs1.org/voc/itemOffered'>;
    /** The fruit juice content of the product expressed as a percentage. */
    "juiceContentPercent": NamedNode<'https://gs1.org/voc/juiceContentPercent'>;
    /** A link to a JSON Web Signature */
    "jws": NamedNode<'https://gs1.org/voc/jws'>;
    /** The ratio of the viscosity of a liquid to its density.  SI Units: square metres per second */
    "KinematicViscosity": NamedNode<'https://gs1.org/voc/KinematicViscosity'>;
    /** Angular distance North or South from the earth's equator measured through 90 degrees. */
    "latitude": NamedNode<'https://gs1.org/voc/latitude'>;
    /** Links to the organisation (lessor) from which this place is leased. */
    "leasedFrom": NamedNode<'https://gs1.org/voc/leasedFrom'>;
    /** Links to the organisation(s) (lessee(s)) to which this place is leased. Property SHOULD be applied to a specific sub-location, rather than a main location, wherever possible. */
    "leasedTo": NamedNode<'https://gs1.org/voc/leasedTo'>;
    /** A link through which a review can be added. */
    "leaveReview": NamedNode<'https://gs1.org/voc/leaveReview'>;
    /** The linear magnitude of any thing, as measured end to end.  Length, width, depth, height, diameter are all measured in units of length.  SI Units: metre */
    "Length": NamedNode<'https://gs1.org/voc/Length'>;
    /** Links to the place(s) for which this organisation is the lessee (i.e., this organisation leases those places from another organisation, the lessor). */
    "lesseeOf": NamedNode<'https://gs1.org/voc/lesseeOf'>;
    /** Links to the place(s) for which this organisation is the lessor (i.e., this organisation leases those places to others). */
    "lessorFor": NamedNode<'https://gs1.org/voc/lessorFor'>;
    /** Intentionally included in the product. */
    "LevelOfContainmentCode-CONTAINS": NamedNode<'https://gs1.org/voc/LevelOfContainmentCode-CONTAINS'>;
    /** The product is free from the indicated substance. */
    "LevelOfContainmentCode-FREE_FROM": NamedNode<'https://gs1.org/voc/LevelOfContainmentCode-FREE_FROM'>;
    /** The substance is not intentionally included, but due to shared production facilities or other reasons, the product may contain the substance. */
    "LevelOfContainmentCode-MAY_CONTAIN": NamedNode<'https://gs1.org/voc/LevelOfContainmentCode-MAY_CONTAIN'>;
    "LevelOfContainmentCode": NamedNode<'https://gs1.org/voc/LevelOfContainmentCode'>;
    /** A line is a point-to-point path consisting of two or more point objects separated by a space. A single line segment (i.e., straight line) is expressed as two points.  A multi-line path (i.e., open polygon) is expressed as a series of three or more points. For a closed shape, gs1:polygon SHALL be used. */
    "line": NamedNode<'https://gs1.org/voc/line'>;
    /** The impulse is the integral over time of the force acting between two colliding bodies. Linear momentum of a body is the product of its mass and its velocity.  SI Units: newton seconds */
    "LinearMomentum": NamedNode<'https://gs1.org/voc/LinearMomentum'>;
    /** Provides a URL for related information or services. This is not expected to be used directly but provides a super property for all other link types in the GS1 ecosystem. */
    "linkType": NamedNode<'https://gs1.org/voc/linkType'>;
    /** The place(s) associated with an organization. */
    "location": NamedNode<'https://gs1.org/voc/location'>;
    /** 13-digit GLN that is being used to identify a physical or digital location. If gs1:glnType is present, gs1:locationGLN SHALL only be used when gs1:GLN_TypeCode includes FIXED_PHYSICAL_LOCATION, MOBILE_PHYSICAL_LOCATION, or DIGITAL_LOCATION */
    "locationGLN": NamedNode<'https://gs1.org/voc/locationGLN'>;
    /** Provides details on if and when a location is active or inactive. */
    "locationHistory": NamedNode<'https://gs1.org/voc/locationHistory'>;
    /** Government bodies, trade organisations, and other parties issue identifiers that are associated to locations. Linking these identifiers to GLN and one another supports consolidating records, mapping related, collaborative identifiers, enhances search ability and enables more efficient transitions between identifiers.  This class provides a mechanism for connecting and sharing location identifiers. */
    "LocationID_Details": NamedNode<'https://gs1.org/voc/LocationID_Details'>;
    /** Secondary qualifier to supplement gs1:LocationID_Type meaning. May be used with proprietary ID code values to define identifier administrator. */
    "locationID_Qualifier": NamedNode<'https://gs1.org/voc/locationID_Qualifier'>;
    /** The BIC Facility Code (BFC) began life in the 1980s as the â€œLoCodeâ€ identifier under ISO 9897. Now a â€œchild codeâ€ of the UN/Locode, the BIC Facility Code is used to identify container facilities such as depots, container yards, container freight stations, M&R vendors and other facilities in the container supply chain. The BIC Facility Code is complementary to the SMDG Ocean Terminal Code, which is also a child code of the UN/Locode. The BIC Facility Code covers container facility types other than ocean terminals. */
    "LocationID_Type-BIC_FACILITY": NamedNode<'https://gs1.org/voc/LocationID_Type-BIC_FACILITY'>;
    /** The Central Reference File Database (CRD) (formerly known as Central Repository Domain) is a centralised database that stores Location Codes and Company Codes required by European regulation, and makes them available to users. CRD contains the following reference files: - List of Countries (ISO 3166) - The Location Reference File which uniquely identifies physical rail points (e.g. stations, customer sidings, loading places) containing the Location Code (which includes the Country Code) - The Partner Reference File uniquely identifies all rail actors who exchange information (Company Codes); Each company actor must have a unique Company Code assigned by UIC */
    "LocationID_Type-CRD_LOCATION_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-CRD_LOCATION_CODE'>;
    /** An ENI number (European Number of Identification or European Vessel Identification Number) is a registration for ships capable of navigating on inland European waters. It is a unique, eight-digit identifier that is attached to a hull for its entire lifetime, independent of the vessel's current name or flag. ENI was introduced by the Inland Transport Committee of the United Nations Economic Commission for Europe in their meeting on 11â€“13 October 2006 in Geneva. It is based on the Rhine Vessel certification system previously used for ships navigating the Rhine, and is comparable to the IMO ship identification number. */
    "LocationID_Type-ENI_NUMBER": NamedNode<'https://gs1.org/voc/LocationID_Type-ENI_NUMBER'>;
    /** The SIRET number, issued by Insee (the National Institute of Statistics and Economic Studies) identifies each establishment that is part of a company in France. There are as many SIRET numbers as there are establishments in the company. An establishment is a geographically located operating or production unit, separated but legally dependent on a company. It is the place where the company's activity is carried out. It is composed of 14 digits: the 9 digits of the SIREN number + the 5 digits of the NIC (internal classification number specific to each establishment). */
    "LocationID_Type-FR_SIRET": NamedNode<'https://gs1.org/voc/LocationID_Type-FR_SIRET'>;
    /** Three-letter geocode designating many airports and metropolitan areas around the world, defined by theÂ International Air Transport AssociationÂ (IATA). The IATA three-letter codes are a subset of the UN/LOCODE codelist. */
    "LocationID_Type-IATA_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-IATA_CODE'>;
    /** IMO number is an important identifier given to oil/gas vessels, shipping vessels, and fishing vessels that is painted visibly across the vessel and bolted to the hull */
    "LocationID_Type-IMO_NUMBER": NamedNode<'https://gs1.org/voc/LocationID_Type-IMO_NUMBER'>;
    /** The International Ship and Port Facility Security Code (ISPS Code) is an International code that was conceived following the September 11th 2001 terrorists attacks in the USA.Â It's primary purpose is to identify and counter any terrorist threat to the Maritime Industry particularly against ships and ports.Â The codeÂ also serves to improve security against armed robbery, theft and piracy. The code came into force inÂ 2004Â andÂ prescribes responsibilities to: 1) Governments 2) Shipping companies 3) Shipboard personnel 4) Port/facility personnel */
    "LocationID_Type-ISPS_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-ISPS_CODE'>;
    /** The International Ship Reporting Standard (ISRS) location code is a 20 character alphanumeric code consisting of: - UN country code (2 characters) e.g., NL = Netherlands, - UN location code (3 characters) e.g., RTM = Rotterdam, - Fairway section code (5 characters) e.g., 00102 = Nieuwe Maas, - Object reference code (5 characters) e.g., 66666 = ID administration or terminal code, - Fairway section hectometre e.g., 00050 = hectometres from zero point of Fairway section 00102.  The ISRS Location Code is created once and shall not be changed throughout the lifetime of the object. The Standard / Commission Regulation for Electronic Ship Reporting requires the ISRS Location Code of all objects relevant for reporting of voyages, e.g. ports, terminals, passage points, etc. */
    "LocationID_Type-ISRS_LOCATION_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-ISRS_LOCATION_CODE'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_1": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_1'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_10": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_10'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_2": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_2'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_3": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_3'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_4": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_4'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_5": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_5'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_6": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_6'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_7": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_7'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_8": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_8'>;
    /** Identification used for internal mapping purposes. */
    "LocationID_Type-LOCATION_FOR_INTERNAL_USE_9": NamedNode<'https://gs1.org/voc/LocationID_Type-LOCATION_FOR_INTERNAL_USE_9'>;
    /** Maritime Mobile Service Identities (MMSIs) are nine-digit numbers used by maritime digital selective calling (DSC), automatic identification systems (AIS), and certain other equipment to uniquely identify a ship or a coast radio station. */
    "LocationID_Type-MMSI_NUMBER": NamedNode<'https://gs1.org/voc/LocationID_Type-MMSI_NUMBER'>;
    /** Open Apparel Registry ID. A sixteen-digit numbering system which uniquely identities global apparel facilities. The ID consists of a Country code, Origin date (the date the facility first appeared in the registry), a General ID and Check ID. OAR IDs are allocated by the Open Apparel Registry to all facilities contributed to the database for the purposes of enabling industry collaboration and improved identification of factories, as well as powering interoperability between industry databases. */
    "LocationID_Type-OAR_ID": NamedNode<'https://gs1.org/voc/LocationID_Type-OAR_ID'>;
    /** The Open Location Code is a geocode system for identifying an area anywhere on the Earth. It was developed at Google's ZÃ¼rich engineering office, and released late October 2014. Location codes created by the OLC system are referred to as 'plus codes'. */
    "LocationID_Type-OPEN_LOCATION_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-OPEN_LOCATION_CODE'>;
    /** The SMDG Terminal Code List (TCL) contains codes for container handling terminal facilities that are called by seagoing cargo vessels in maritime transport. */
    "LocationID_Type-SMDG_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-SMDG_CODE'>;
    /** UN/LOCODE, the United Nations Code for Trade and Transport Locations, is a geographic coding scheme developed and maintained by United Nations Economic Commission for Europe.Â  */
    "LocationID_Type-UN_LOCODE": NamedNode<'https://gs1.org/voc/LocationID_Type-UN_LOCODE'>;
    /** The Customer Identification File (CIF) is an industry reference file (for the USA), managed by Railinc, that contains the name, physical mailing and billing address, corporate parent information and a unique 13-character identification code for each location and sub-location of a transportation-carrier customer. Railroads use the identification code to accurately identify customers and their locations, ensuring each party in the transaction is referencing the same physical customer location. */
    "LocationID_Type-US_CIF_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-US_CIF_CODE'>;
    /** All containers of meat, poultry, and egg products must be labeled with a USDA mark of inspection and establishment (EST number), which is assigned to the plant where the product was produced. */
    "LocationID_Type-US_EST_NUMBER": NamedNode<'https://gs1.org/voc/LocationID_Type-US_EST_NUMBER'>;
    /** An FDA Establishment Identification (FEI) number isÂ a unique identifier issued by FDA to track inspections of the regulated establishment or facility. FEI numbers are also used to track GDUFA facility fee payments. */
    "LocationID_Type-US_FEI": NamedNode<'https://gs1.org/voc/LocationID_Type-US_FEI'>;
    /** The HIN is a unique combination of letters and/or numbers permanently affixed to the vessel. All boats must be registered with the USCG (United States Coast Guard ) in order to track accidents and history of boats. Information about a boatâ€™s records may be found by using a vessel documentation search by Hull ID Number (HIN). */
    "LocationID_Type-US_HIN_IDENTIFICATION": NamedNode<'https://gs1.org/voc/LocationID_Type-US_HIN_IDENTIFICATION'>;
    /** All mines are required to apply for an MSHAÂ mineÂ identification number. An MSHAÂ IDÂ is required for eachÂ mineÂ site and must be issued before any operations may begin. AÂ mine IDÂ may be requested by completing the online form or by contacting U.S. district office. */
    "LocationID_Type-US_MINE_ID": NamedNode<'https://gs1.org/voc/LocationID_Type-US_MINE_ID'>;
    /** The Terminal Control Locations Directory lists all approved terminals registered as part of the taxable fuel bulk delivery system. Terminals are listed by the terminal number. */
    "LocationID_Type-US_TCN_CODE": NamedNode<'https://gs1.org/voc/LocationID_Type-US_TCN_CODE'>;
    /** Organisation that administers the gs1:locationID or the name of the ID itself.  Value from gs1:LocationID_Type code list. */
    "locationID_Type": NamedNode<'https://gs1.org/voc/locationID_Type'>;
    "LocationID_Type": NamedNode<'https://gs1.org/voc/LocationID_Type'>;
    /** A URI that links to information about the gs1:locationID. */
    "locationID_URI": NamedNode<'https://gs1.org/voc/locationID_URI'>;
    /** Identifier value associated to a location. This value SHALL follow rules set forth by the administrating organisation designated in gs1:LocationID_Type. */
    "locationID": NamedNode<'https://gs1.org/voc/locationID'>;
    /** A link to a map, directions, or other location-related information.  For B2B location  information, see gs1:logisticsInfo.  For details specific to hours of operation, see gs1:openingHoursInfo */
    "locationInfo": NamedNode<'https://gs1.org/voc/locationInfo'>;
    /** A location classification based on the purpose, type of site and/or what occurs there. Repeatable value from gs1:LocationRoleType code list. */
    "locationRole": NamedNode<'https://gs1.org/voc/locationRole'>;
    "LocationRoleType": NamedNode<'https://gs1.org/voc/LocationRoleType'>;
    /** Designation of active/inactive status of a location. */
    "locationStatus": NamedNode<'https://gs1.org/voc/locationStatus'>;
    /** Over the lifetime of a location, it may go through periods of being active and inactive. gs1:LocationStatusHistory allows changes in status to be communicated in advance and tracked over time. */
    "LocationStatusHistory": NamedNode<'https://gs1.org/voc/LocationStatusHistory'>;
    /** A link to B2B logistics information related to a physical location. */
    "logisticsInfo": NamedNode<'https://gs1.org/voc/logisticsInfo'>;
    /** The arc or portion of the earth's equator intersected between the meridian of a given place and the prime meridian and expressed in degrees */
    "longitude": NamedNode<'https://gs1.org/voc/longitude'>;
    /** A measure of the light-emitting intensity of a light source, in a specific direction per unit area of the emitting surface. For a very narrow cone containing the direction, it is the ratio of the luminous flux emitted within that cone to the solid angle of the cone per unit area of the emitting surface.  SI Units: candela per square metre */
    "Luminance": NamedNode<'https://gs1.org/voc/Luminance'>;
    /** A measure of the perceived power of light emitted by a source or received by a surface and irrespective of direction, taking into account the sensitivity of the human eye to different wavelengths of light.  SI Units: lumen = 1 candela per steradian */
    "LuminousFlux": NamedNode<'https://gs1.org/voc/LuminousFlux'>;
    /** A measure of the light-emitting intensity of a light source, in a specific direction. For a very narrow cone containing the direction, it is the ratio of the luminous flex emitted within that cone to the solid angle of the cone.  SI Units: candela */
    "LuminousIntensity": NamedNode<'https://gs1.org/voc/LuminousIntensity'>;
    /** Magnesium per specified nutrient basis quantity. */
    "magnesiumPerNutrientBasis": NamedNode<'https://gs1.org/voc/magnesiumPerNutrientBasis'>;
    /** A measure of the total magnetic field that passes through a specific area. The surface integral of the product of the permeability of the medium and the magnetic field intensity perpendicular to the surface.  SI Units: weber */
    "MagneticFlux": NamedNode<'https://gs1.org/voc/MagneticFlux'>;
    /** The product of the magnetic field strength and the permeability of a material.  SI Units: tesla = weber per square metre */
    "MagneticFluxDensity": NamedNode<'https://gs1.org/voc/MagneticFluxDensity'>;
    /** The potential energy per unit element of current (current multiplied by length).    SI Units: weber per metre  (Joules per ampere metre) */
    "MagneticVectorPotential": NamedNode<'https://gs1.org/voc/MagneticVectorPotential'>;
    /** An offer made by an organization. */
    "makesOffer": NamedNode<'https://gs1.org/voc/makesOffer'>;
    /** Links to the organisation that manages this place or organisation, as designated by the owner or another organisation. */
    "managedBy": NamedNode<'https://gs1.org/voc/managedBy'>;
    /** Links to the organisation(s) for whom this place is managed. Property SHOULD be applied to a specific sub-location, rather than a main location, wherever possible. */
    "managedFor": NamedNode<'https://gs1.org/voc/managedFor'>;
    /** Links to the place(s) or organisation(s) that this organisation manages, on behalf of the owner or another organisation. */
    "manages": NamedNode<'https://gs1.org/voc/manages'>;
    /** Manganese per specified nutrient basis quantity. */
    "manganesePerNutrientBasis": NamedNode<'https://gs1.org/voc/manganesePerNutrientBasis'>;
    /** The organization that produces the item. */
    "manufacturer": NamedNode<'https://gs1.org/voc/manufacturer'>;
    /** Code indicating the preparation methods that a manufacturer has used in the manufacturing of a product for example DEEP_FRY. */
    "manufacturerPreparationCode": NamedNode<'https://gs1.org/voc/manufacturerPreparationCode'>;
    /** The warranty associated with the product. */
    "manufacturersWarranty": NamedNode<'https://gs1.org/voc/manufacturersWarranty'>;
    /** A physical location consisting of one or more buildings with facilities for manufacturing. */
    "manufacturingPlant": NamedNode<'https://gs1.org/voc/manufacturingPlant'>;
    /** The quantity of matter in a body. Inertial mass is the measure of the inertia of a body; its resistance to acceleration.  SI Units: kilogram */
    "Mass": NamedNode<'https://gs1.org/voc/Mass'>;
    /** The mass of the consistutent (or solute) divided by the volume of the mixture (or solvent).  SI Units: kilogram per cubic metre */
    "MassConcentration": NamedNode<'https://gs1.org/voc/MassConcentration'>;
    /** The mass of fluid that passes per unit of time.  SI Units: kilogram per second */
    "MassFlowRate": NamedNode<'https://gs1.org/voc/MassFlowRate'>;
    /** The mass of fluid that passes per unit of time per unit area perpendicular to the flow direction.  SI Units: kilogram per second per square metre */
    "MassPerAreaTime": NamedNode<'https://gs1.org/voc/MassPerAreaTime'>;
    /** The mass per unit area of the item. This can be given using a number of different AI ranges that depend on the units in which the mass and area are measured. */
    "massPerUnitArea": NamedNode<'https://gs1.org/voc/massPerUnitArea'>;
    /** A link to a source of structured master data for the entity. This is typically for B2B applications. */
    "masterData": NamedNode<'https://gs1.org/voc/masterData'>;
    /** The method of maturity for the item for example tree ripened or jet fresh. */
    "maturationMethod": NamedNode<'https://gs1.org/voc/maturationMethod'>;
    /** Freshly picked and immediately packed and shipped at mature stage and flown to destination for adequate distribution (i.e. imports from South America, Africa or Europe). Flown by jet to market; the carton will be labelled Jet Fresh, when applicable, stickered Jet Fresh. For the produce industry, most common with berries, stone fruits and pineapples. */
    "MaturationMethodCode-JET_FRESH": NamedNode<'https://gs1.org/voc/MaturationMethodCode-JET_FRESH'>;
    /** Product stored at proper temperature prior to shipment to allow ripening and/or colouring, adequate for distribution and/or consumption. Pre-conditioned product is matured to a specific maturity level as a result of ripening through either temperature, gas treatment, humidity or any combination thereof. */
    "MaturationMethodCode-PRECONDITIONED": NamedNode<'https://gs1.org/voc/MaturationMethodCode-PRECONDITIONED'>;
    /** Product that is picked at optimum maturity or just shy of. It is almost ripe or ready to eat. This fruit will be shipped immediately (imported = flown) from the pack-house and stickered as Tree or Vine Ripe. */
    "MaturationMethodCode-TREE_VINE_RIPE": NamedNode<'https://gs1.org/voc/MaturationMethodCode-TREE_VINE_RIPE'>;
    "MaturationMethodCode": NamedNode<'https://gs1.org/voc/MaturationMethodCode'>;
    /** Links to a gs1:PriceSpecification that indicates in terms of an amount and specified currency, the maximum discount on the sales price associated with a particular gs1:Discount. This property can be used to express 'up to $10 off'. */
    "maximumDiscountAmount": NamedNode<'https://gs1.org/voc/maximumDiscountAmount'>;
    /** A floating-point value indicating a maximum percentage discount on the sales price associated with a particular gs1:Discount.  This property can be used to express 'up to 15% discount'. */
    "maximumDiscountPercentage": NamedNode<'https://gs1.org/voc/maximumDiscountPercentage'>;
    /** The upper limit drinking temperature of the optimum range of the drinking temperature. The optimum range of the drinking temperature is a recommendation and is based on the experience of the individual producer. Allows for the representation of the same value in different units of measure but not multiple values. */
    "maximumOptimumConsumptionTemperature": NamedNode<'https://gs1.org/voc/maximumOptimumConsumptionTemperature'>;
    /** Specifies the maximum number of items that qualify for a particular gs1:Discount. This property can be used to express 'maximum N items per customer'. */
    "maximumQualifyingItems": NamedNode<'https://gs1.org/voc/maximumQualifyingItems'>;
    /** Links to a gs1:PriceSpecification that indicates in terms of an amount and specified currency, the maximum spend that qualifies for a particular gs1:Discount. This property can be used to express 'for purchases of up to $100'. */
    "maximumQualifyingSpend": NamedNode<'https://gs1.org/voc/maximumQualifyingSpend'>;
    /** Provides a maximum price value as a floating-point numeric value that is qualified by the corresponding currency. See also gs1:priceCurrency */
    "maxPrice": NamedNode<'https://gs1.org/voc/maxPrice'>;
    /** The method used to analyse the products resulted in approximate value of the nutritional content. */
    "MeasurementPrecisionCode-APPROXIMATELY": NamedNode<'https://gs1.org/voc/MeasurementPrecisionCode-APPROXIMATELY'>;
    /** The method used to analyse the products resulted in exact value of the nutritional content. */
    "MeasurementPrecisionCode-EXACT": NamedNode<'https://gs1.org/voc/MeasurementPrecisionCode-EXACT'>;
    /** To indicate presence when the measurement value is too small to be measured precisely (rule states less than 0.5). */
    "MeasurementPrecisionCode-LESS_THAN": NamedNode<'https://gs1.org/voc/MeasurementPrecisionCode-LESS_THAN'>;
    "MeasurementPrecisionCode": NamedNode<'https://gs1.org/voc/MeasurementPrecisionCode'>;
    /** A set of measurement types for properties that can be measured or sensed by appropriate measuring devices or sensors */
    "MeasurementType": NamedNode<'https://gs1.org/voc/MeasurementType'>;
    /** Meat and poultry products. */
    "MeatPoultry": NamedNode<'https://gs1.org/voc/MeatPoultry'>;
    /** The fish, meat, or poultry type for this food and beverage item. */
    "meatPoultryType": NamedNode<'https://gs1.org/voc/meatPoultryType'>;
    /** A measure of the size of a data structure or capacity of a data carrier, typically measured in bits (binary digits), bytes or octets (8 bits) or multiples thereof.  Units: byte */
    "MemoryCapacity": NamedNode<'https://gs1.org/voc/MemoryCapacity'>;
    /** A link to menu details. This may include food menus, services, or other offerings provided by an organisation or at a location.  For details specific to allergens only, see gs1:allergenInfo .  For details specific to nutrition information only, see gs1:nutritionalInfo .  For details specific to ingredients only, see gs1:ingredientsInfo . */
    "menuInfo": NamedNode<'https://gs1.org/voc/menuInfo'>;
    /** Milk butter cream yogurts cheese eggs and any substitutes for these products. */
    "MilkButterCreamYogurtCheeseEggsSubstitutes": NamedNode<'https://gs1.org/voc/MilkButterCreamYogurtCheeseEggsSubstitutes'>;
    /** Links to a gs1:PriceSpecification that indicates in terms of an amount and specified currency, the minimum discount on the sales price associated with a particular gs1:Discount. This property can be used to express 'at least $10 off'. */
    "minimumDiscountAmount": NamedNode<'https://gs1.org/voc/minimumDiscountAmount'>;
    /** A floating-point value indicating a minimum percentage discount on the sales price associated with a particular gs1:Discount.  This property can be used to express 'at least 15% discount'. */
    "minimumDiscountPercentage": NamedNode<'https://gs1.org/voc/minimumDiscountPercentage'>;
    /** The minimum amount of fish contained in a food and beverage product expressed as a measurement. */
    "minimumFishContent": NamedNode<'https://gs1.org/voc/minimumFishContent'>;
    /** The minimum amount of fish, meat or poultry contained in a food and beverage product expressed as a measurement. */
    "minimumMeatPoultryContent": NamedNode<'https://gs1.org/voc/minimumMeatPoultryContent'>;
    /** The lower limit drinking temperature of the optimum range of the drinking temperature. The optimum range of the drinking temperature is a recommendation and is based on the experience of the individual producer. Allows for the representation of the same value in different units of measure but not multiple values. */
    "minimumOptimumConsumptionTemperature": NamedNode<'https://gs1.org/voc/minimumOptimumConsumptionTemperature'>;
    /** Specifies the minimum number of items that must be purchased to qualify for a particular gs1:Discount. This property can be used to express 'if you buy at least N items'. */
    "minimumQualifyingItems": NamedNode<'https://gs1.org/voc/minimumQualifyingItems'>;
    /** Links to a gs1:PriceSpecification that indicates in terms of an amount and specified currency, the minimum spend required to qualify for a particular gs1:Discount. This property can be used to express 'if you spend at least $100'. */
    "minimumQualifyingSpend": NamedNode<'https://gs1.org/voc/minimumQualifyingSpend'>;
    /** Provides a minimum price value as a floating-point numeric value that is qualified by the corresponding currency. See also gs1:priceCurrency */
    "minPrice": NamedNode<'https://gs1.org/voc/minPrice'>;
    /** The concentration of a solution expressed as the number of moles of dissolved substance per unit mass of solvent.  SI Units: mole per kg */
    "MolalityOfSolute": NamedNode<'https://gs1.org/voc/MolalityOfSolute'>;
    /** The ratio of the thermodynamic energy of a chemical compound to the amount of substance (atoms or molecules) contained within it, the amount of substance being measured in moles.  SI Units: joule per mole */
    "MolarEnergy": NamedNode<'https://gs1.org/voc/MolarEnergy'>;
    /** The ratio of the mass of a chemical compound to the amount of substance (atoms or molecules) contained within it, the amount of substance being measured in moles.  SI Units: kilogram per mole */
    "MolarMass": NamedNode<'https://gs1.org/voc/MolarMass'>;
    /** The volume occupied by a substance per unit amount of substance at a specified temperature and pressure.  SI Units: cubic metre per mole */
    "MolarVolume": NamedNode<'https://gs1.org/voc/MolarVolume'>;
    /** Molybdenum per specified nutrient basis quantity. */
    "molybdenumPerNutrientBasis": NamedNode<'https://gs1.org/voc/molybdenumPerNutrientBasis'>;
    /** Monounsaturated fat per specified nutrient basis quantity. */
    "monounsaturatedFatPerNutrientBasis": NamedNode<'https://gs1.org/voc/monounsaturatedFatPerNutrientBasis'>;
    /** The net area of the item. This can be given using a number of different AI ranges that depend on the units in which the area is measured. */
    "netArea": NamedNode<'https://gs1.org/voc/netArea'>;
    /** The quantity of the product contained by a package, usually as claimed on the label. Indicates the net content of the total product. For fixed value products use the value claimed on the package, to avoid variable fill rate issue that arises with some product which are sold by volume or weight, and whose actual content may vary slightly from batch to batch. */
    "netContent": NamedNode<'https://gs1.org/voc/netContent'>;
    /** Used to identify the net weight of the product. Net Weight excludes all packaging material, including the packaging material of all lower-level GTINs. Example:11.5 kgm. */
    "netWeight": NamedNode<'https://gs1.org/voc/netWeight'>;
    /** Niacin per specified nutrient basis quantity. */
    "niacinPerNutrientBasis": NamedNode<'https://gs1.org/voc/niacinPerNutrientBasis'>;
    "NonbinaryLogicCode-FALSE": NamedNode<'https://gs1.org/voc/NonbinaryLogicCode-FALSE'>;
    "NonbinaryLogicCode-NOT_APPLICABLE": NamedNode<'https://gs1.org/voc/NonbinaryLogicCode-NOT_APPLICABLE'>;
    "NonbinaryLogicCode-TRUE": NamedNode<'https://gs1.org/voc/NonbinaryLogicCode-TRUE'>;
    "NonbinaryLogicCode-UNSPECIFIED": NamedNode<'https://gs1.org/voc/NonbinaryLogicCode-UNSPECIFIED'>;
    "NonbinaryLogicCode": NamedNode<'https://gs1.org/voc/NonbinaryLogicCode'>;
    /** The total number of servings contained in the package. */
    "numberOfServingsPerPackage": NamedNode<'https://gs1.org/voc/numberOfServingsPerPackage'>;
    /** Code indicating whether the number of servings per package is exact or approximate. */
    "numberOfServingsPerPackageMeasurementPrecision": NamedNode<'https://gs1.org/voc/numberOfServingsPerPackageMeasurementPrecision'>;
    /** A free text field specifying a range for the number of servings contained in the package. */
    "numberOfServingsRangeDescription": NamedNode<'https://gs1.org/voc/numberOfServingsRangeDescription'>;
    /** Quantity on which the nutrient information has been based; for example, per 100 grams. When specified, nutrientBasisQuantity establishes the basis for all contained nutrient records. */
    "nutrientBasisQuantity": NamedNode<'https://gs1.org/voc/nutrientBasisQuantity'>;
    /** Nutrient measurement is based on a measurement value for example grams or ounces. */
    "NutrientBasisQuantityCode-BY_MEASURE": NamedNode<'https://gs1.org/voc/NutrientBasisQuantityCode-BY_MEASURE'>;
    /** Nutrient measurement is based on a specified serving amount. */
    "NutrientBasisQuantityCode-BY_SERVING": NamedNode<'https://gs1.org/voc/NutrientBasisQuantityCode-BY_SERVING'>;
    "NutrientBasisQuantityCode": NamedNode<'https://gs1.org/voc/NutrientBasisQuantityCode'>;
    /** The type of quantity specified in the nutrientBasisQuantity for example measurement, serving size, or container. This is used in conjunction with the nutrientBasisQuantity. */
    "nutrientBasisQuantityType": NamedNode<'https://gs1.org/voc/nutrientBasisQuantityType'>;
    /** The Code indicating whether the specified nutrient content is exact or approximate. */
    "nutrientMeasurementPrecision": NamedNode<'https://gs1.org/voc/nutrientMeasurementPrecision'>;
    /** Code indicating a nutritional claim applicable to the product, for example FAT_FREE. */
    "nutritionalClaim": NamedNode<'https://gs1.org/voc/nutritionalClaim'>;
    /** Free text field for any additional nutritional claims. */
    "nutritionalClaimStatement": NamedNode<'https://gs1.org/voc/nutritionalClaimStatement'>;
    /** A claim that a food is free from additives. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-ADDITIVE_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-ADDITIVE_FREE'>;
    /** A claim that a food contains artificial sweeteners. Artificial sweeteners are sugar substitutes that are synthetic. */
    "NutritionalClaimTypeCode-ARTIFICIALLY_SWEETENED": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-ARTIFICIALLY_SWEETENED'>;
    /** A claim that a food is free from Cholesterol. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-CHOLESTEROL_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-CHOLESTEROL_FREE'>;
    /** A claim that a food is free from colouring agents. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-COLOURING_AGENT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-COLOURING_AGENT_FREE'>;
    /** A claim that a food contains glyzyrrhizin. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-CONTAINS_GLYZYRRHIZIN": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-CONTAINS_GLYZYRRHIZIN'>;
    /** A claim that a food is contains liquorice. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-CONTAINS_LIQUORICE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-CONTAINS_LIQUORICE'>;
    /** A claim that a food contains soy. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-CONTAINS_SOY": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-CONTAINS_SOY'>;
    /** A claim that a food is free from egg. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-EGG_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-EGG_FREE'>;
    /** A claim that a food is energy-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains less than 4kcal (17kj)/100ml. In the case of energy-free foods, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-ENERGY_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-ENERGY_FREE'>;
    /** A claim that a food is energy-reduced, and any claim likely to have the same meaning for the consumer, may only be made where the energy value is reduced by at least 30%, with an indication of the characteristic(s), which make(s) the food reduced in its total energy value. */
    "NutritionalClaimTypeCode-ENERGY_REDUCED": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-ENERGY_REDUCED'>;
    /** A claim that a food is enriched or fortified in vitamins and/or minerals, and any claim likely to have the same meaning for the consumer, may only be made where the product contains the vitamins and/or minerals in at least a significant amount as defined in the Annex of Directive 90/496/EEC. */
    "NutritionalClaimTypeCode-ENRICHED_OR_FORTIFIED_IN_VITAMINS_AND_OR_MINERALS": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-ENRICHED_OR_FORTIFIED_IN_VITAMINS_AND_OR_MINERALS'>;
    /** A claim that a food is fat-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0.5g of fat per 100g or 100ml. However, claims expressed as X% fat-free shall be prohibited. In the case of foods naturally fat-free, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-FAT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-FAT_FREE'>;
    /** A claim that a food is free from Gluten. Any claim likely to have the same meaning for the consumer, may only be made where the product contains an amount less than or equal to 20 mg/kg gluten according to the Commission Regulation (EC) No 41/2009 */
    "NutritionalClaimTypeCode-FREE_FROM_GLUTEN": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-FREE_FROM_GLUTEN'>;
    /** A claim that a food is regularly analysed to guarantee that the product is free from lactose. */
    "NutritionalClaimTypeCode-GUARANTEED_LACTOSE_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-GUARANTEED_LACTOSE_FREE'>;
    /** A claim that a food is high in fibre, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least 6g of fibre per 100g or at least 3g of fibre per 100 kcal. In the case of foods naturally high in fibre, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-HIGH_FIBRE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-HIGH_FIBRE'>;
    /** A claim that a food is high in protein, and any claim likely to have the same meaning for the consumer, may only be made where at least 20% of the energy value of the food is provided by protein. In the case of foods naturally high in protein, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-HIGH_PROTEIN": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-HIGH_PROTEIN'>;
    /** A claim that a food is high in vitamins and or minerals, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least twice the value of source of vitamins and minerals. In case of foods naturally high in vitamins and/or minerals, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-HIGH_VITAMINS_AND_OR_MINERALS": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-HIGH_VITAMINS_AND_OR_MINERALS'>;
    /** A claim that a food is free of lactose. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-LACTOSE_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LACTOSE_FREE'>;
    /** A claim stating that a product is light or lite, and any claim likely to have the same meaning for the consumer, shall follow the same conditions as those set for the term reduced; the claim shall also be accompanied by an indication of the characteristic(s) which make the food light or lite. */
    "NutritionalClaimTypeCode-LIGHT_LITE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LIGHT_LITE'>;
    /** A claim that a food is low in energy, and any claim likely to have the same meaning for the consumer, may only be made where the product contains less than 40 kcal (170 kj)/100g and less than 20kcal (80kj)/100ml. In the case of foods naturally low in energy, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-LOW_ENERGY": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_ENERGY'>;
    /** A claim that a food is low in fat, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 3g of fat per 100g or 1.5g of fat per 100ml. In the case of foods naturally low in fat, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-LOW_FAT": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_FAT'>;
    /** A claim that a food is low in lactose. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-LOW_LACTOSE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_LACTOSE'>;
    /** A claim that a food contains low levels of protein. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-LOW_PROTEIN": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_PROTEIN'>;
    /** A claim that a food is low in saturated fat, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 1.5g of saturates per 100g for solids or, 0.75g of saturates per 100ml for liquids and in either case saturated fat must not provide more than 10% of energy. In the case of foods naturally low in saturated fat, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-LOW_SATURATED_FAT": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_SATURATED_FAT'>;
    /** A claim that a food is low in sodium, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0.12g of sodium, or the equivalent value for salt, per 100g or per 100ml. In the case of foods naturally low in sodium, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-LOW_SODIUM_SALT": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_SODIUM_SALT'>;
    /** A claim that a food is low in sugars, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 5g of sugars per 100g or 100ml. In the case of foods naturally low in sugars, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-LOW_SUGARS": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-LOW_SUGARS'>;
    /** A claim that a food is free from milk. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-MILK_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-MILK_FREE'>;
    /** A claim that a food is free from milk proteins. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-MILK_PROTEIN_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-MILK_PROTEIN_FREE'>;
    /** A claim that a food is a natural source of vitamins and/or minerals, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least 15% of the recommended daily allowance specified in the Annex of Council Directive 90/496/EEC per 100 g or 100 ml. */
    "NutritionalClaimTypeCode-NATURAL_SOURCE_OF_VITAMINS_AND_OR_MINERALS": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-NATURAL_SOURCE_OF_VITAMINS_AND_OR_MINERALS'>;
    /** A claim that a food contains no alcohol. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-NON_ALCOHOLIC": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-NON_ALCOHOLIC'>;
    /** A claim that a food is free from nuts. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-NUT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-NUT_FREE'>;
    /** A claim that a food is free from peanuts. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-PEANUT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-PEANUT_FREE'>;
    /** A claim that a food is free from preservatives. A preservative is a natural or synthetic substance or chemical that is added to products to prevent decomposition by microbial growth or by undesirable chemical changes. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-PRESERVATIVE_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-PRESERVATIVE_FREE'>;
    /** A claim that a food does not contain saturated fat, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0.1g of saturated fat per 100g or 100ml. In the case of foods naturally saturated fat-free, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-SATURATED_FAT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SATURATED_FAT_FREE'>;
    /** A claim that a food is sodium-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0.005g of sodium, or the equivalent value for salt, per 100g. In the case of foods naturally sodium-free, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-SODIUM_FREE_OR_SALT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SODIUM_FREE_OR_SALT_FREE'>;
    /** A claim that a food is a source of fibre, and any claim likely to have the same meaning for the consumer, may only be made where the product contains at least 3g of fibre per 100g or at least 1.5g of fibre per 100kcal. In the case of foods that are naturally sources of fibre, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-SOURCE_OF_FIBRE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SOURCE_OF_FIBRE'>;
    /** A claim that a food is a source of protein, and any claim likely to have the same meaning for the consumer, may only be made where at least 12% of the energy value of the food is provided by protein. In the case of foods that are naturally sources of protein, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-SOURCE_OF_PROTEIN": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SOURCE_OF_PROTEIN'>;
    /** A claim that a food is free from Soy. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-SOY_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SOY_FREE'>;
    /** A claim that a food has a high sodium content. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-STRONGLY_SALTED": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-STRONGLY_SALTED'>;
    /** A claim that a food is sugars-free, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0.5g of sugars per 100g or 100ml. In the case of foods naturally sugars-free, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-SUGARS_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SUGARS_FREE'>;
    /** A claim that a food is sweetened with syrup from the Agave plant. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_AGAVE_SYRUP": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_AGAVE_SYRUP'>;
    /** A claim that a food is sweetened with sugar from sugar cane. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_CANE_SUGAR": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_CANE_SUGAR'>;
    /** A claim that a food is sweetened with corn syrup. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_CORN_SYRUP": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_CORN_SYRUP'>;
    /** A claim that a food is sweetened with fructose. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_FRUCTOSE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_FRUCTOSE'>;
    /** A claim that a food is sweetened with fruit juice. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_FRUIT_JUICE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_FRUIT_JUICE'>;
    /** A claim that a food is sweetened with fruit syrup. Fruit syrup is made from fruit and other ingredients such as sugar, corn syrup and water. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_FRUIT_SYRUP": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_FRUIT_SYRUP'>;
    /** A claim that a food is sweetened with honey. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_HONEY": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_HONEY'>;
    /** A claim that a food is sweetened with malt. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_MALT": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_MALT'>;
    /** A claim that a food is sweetened with raw sugar derived from the sugar beet. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_RAW_BEET_SUGAR": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_RAW_BEET_SUGAR'>;
    /** A claim that a food is sweetened with white sugar. White or granulated sugar is refined sugar (pure white crystalline sucrose) ground to granules or grains. */
    "NutritionalClaimTypeCode-SWEETENED_WITH_WHITE_SUGAR": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-SWEETENED_WITH_WHITE_SUGAR'>;
    /** A claim that a food contains a low level of gluten which is defined as 21 - 100 mg/kg gluten according to the Commission Regulation (EC) No 41/2009 */
    "NutritionalClaimTypeCode-VERY_LOW_GLUTEN": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-VERY_LOW_GLUTEN'>;
    /** A claim that a food is very low in sodium, and any claim likely to have the same meaning for the consumer, may only be made where the product contains no more than 0.04g of sodium, or the equivalent value for salt, per 100g or per 100 ml. In the case of foods naturally very low in sodium, the term naturally may be used as a prefix to this claim. */
    "NutritionalClaimTypeCode-VERY_LOW_SODIUM_SALT": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-VERY_LOW_SODIUM_SALT'>;
    /** A claim that a food is free from wheat. Note the amount that determines containment or lack of containment is based on target market regulations. */
    "NutritionalClaimTypeCode-WHEAT_FREE": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-WHEAT_FREE'>;
    /** A claim stating that sugar has not been added to a food, and any claim likely to have the same meaning for the consumer, may only be made where the product does not contain any added mono- or disaccharides or any other food used for its sweetening properties. */
    "NutritionalClaimTypeCode-WITH_NO_ADDED_SUGARS": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode-WITH_NO_ADDED_SUGARS'>;
    "NutritionalClaimTypeCode": NamedNode<'https://gs1.org/voc/NutritionalClaimTypeCode'>;
    /** A link to nutritional facts. */
    "nutritionalInfo": NamedNode<'https://gs1.org/voc/nutritionalInfo'>;
    /** A class providing nutritional value and intake percent. */
    "NutritionMeasurementType": NamedNode<'https://gs1.org/voc/NutritionMeasurementType'>;
    /** Links to the organisation(s) that occupy this place. Property SHOULD be applied to a specific sub-location, rather than a main location, wherever possible. */
    "occupiedBy": NamedNode<'https://gs1.org/voc/occupiedBy'>;
    /** Links to the place(s) that this organisation occupies. */
    "occupies": NamedNode<'https://gs1.org/voc/occupies'>;
    /** An offer to transfer some rights to an item or to provide a service,for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book. */
    "Offer": NamedNode<'https://gs1.org/voc/Offer'>;
    /** A description of the offer including goods or services offered for sale or use. */
    "offerDescription": NamedNode<'https://gs1.org/voc/offerDescription'>;
    /** A discount associated with an offer. */
    "offerDiscount": NamedNode<'https://gs1.org/voc/offerDiscount'>;
    /** A code indicating the type of redemptions that apply to the offer, for example single use. */
    "offerRedemptionType": NamedNode<'https://gs1.org/voc/offerRedemptionType'>;
    /** Offer available as a code that can be entered to redeem the coupon or voucher. */
    "OfferRedemptionTypeCode-COUPON_CODE": NamedNode<'https://gs1.org/voc/OfferRedemptionTypeCode-COUPON_CODE'>;
    /** A prepaid stored-value money card. */
    "OfferRedemptionTypeCode-GIFT_CARD": NamedNode<'https://gs1.org/voc/OfferRedemptionTypeCode-GIFT_CARD'>;
    /** A partial refund upon purchase of a product. */
    "OfferRedemptionTypeCode-REBATE": NamedNode<'https://gs1.org/voc/OfferRedemptionTypeCode-REBATE'>;
    /** Offer available as a reduced sales price on a product. */
    "OfferRedemptionTypeCode-SALE": NamedNode<'https://gs1.org/voc/OfferRedemptionTypeCode-SALE'>;
    /** Offer available as a code that can be entered once to redeem the coupon. */
    "OfferRedemptionTypeCode-SINGLE_USE_CODE": NamedNode<'https://gs1.org/voc/OfferRedemptionTypeCode-SINGLE_USE_CODE'>;
    "OfferRedemptionTypeCode": NamedNode<'https://gs1.org/voc/OfferRedemptionTypeCode'>;
    /** The URL where the offer seeker will need to go in order to redeem the offer for an online redemption. */
    "offerRedemptionURL": NamedNode<'https://gs1.org/voc/offerRedemptionURL'>;
    /** A description of what the offer is restricted to, relative to all other offerings by the issuer, for example payment restrictions, subscription required, new customers only. */
    "offerRestrictionDescription": NamedNode<'https://gs1.org/voc/offerRestrictionDescription'>;
    /** A link to details on hours of operation. */
    "openingHoursInfo": NamedNode<'https://gs1.org/voc/openingHoursInfo'>;
    /** Relates to an organic claim about the product */
    "organicClaim": NamedNode<'https://gs1.org/voc/organicClaim'>;
    /** A governing body that creates and maintains standards related to organic products. */
    "organicClaimAgency": NamedNode<'https://gs1.org/voc/organicClaimAgency'>;
    /** Biological Farmers of Australia */
    "OrganicClaimAgencyCode-BFA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-BFA'>;
    /** Bioland: The leading organic farmers' association in Germany for the economy of organic-based businesses without synthetic pesticides and synthetic chemical nitrogen fertilizer. The animals are kept humanely and processed food carefully. This provides an environmentally sound and sustainable food production. http://www.bioland.de. */
    "OrganicClaimAgencyCode-BIOLAND": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-BIOLAND'>;
    /** The Demeter movement as an entrepreneurial network promotes the development of bio-dynamic economy, to secure the livelihoods of the world and to strengthen the positive people in his ministry. In cooperation contribute producers, processors, traders and consumers in partnership to shape the market. */
    "OrganicClaimAgencyCode-DEMETER_BUND": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-DEMETER_BUND'>;
    /** Demeter International Demeter-International e. V. is a non profit organisation and its member organisations work together in the spirit of an international confederation with democratic principles. Membership requires a functioning Demeter certification programme. Same as GS1 Code 16 */
    "OrganicClaimAgencyCode-DEMETER_INTERNATIONAL": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-DEMETER_INTERNATIONAL'>;
    /** Ecoland is a membership organisation whose members elect a governing Board which is responsible for the design and implementation of the organic certification system. */
    "OrganicClaimAgencyCode-ECOLAND": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-ECOLAND'>;
    /** ECOVIN Federation Organic Viticulture Association: ECOVIN largest merger in 1985 as ecologically-working wine estates in Germany was founded. Approximately 220 member companies currently manage 1,600 hectares of vineyards in 11 German wine-growing areas. Same as GS1 code 14 */
    "OrganicClaimAgencyCode-ECOVIN": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-ECOVIN'>;
    /** US Environmental Protection Agency. Same as GS1 Code 1 */
    "OrganicClaimAgencyCode-EPA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-EPA'>;
    /** FDA US Food and Drug Agency */
    "OrganicClaimAgencyCode-FDA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-FDA'>;
    /** UK Food Standards Agency */
    "OrganicClaimAgencyCode-FSA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-FSA'>;
    /** GAA is a diverse farming association for farmers, processors and traders inside.Focal point is Germany. GAA is a special design for the structure of the organic farming. Biokreis- The Biokreis is an association for organic farming. Currently more than 800 farms, 80 and 200 processors, consumers are members of Biokreis, committed to working together on more than 33,000 for organic and sustainable farming. */
    "OrganicClaimAgencyCode-GAA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-GAA'>;
    /** International Foundation for Organic Agriculture */
    "OrganicClaimAgencyCode-IFOA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-IFOA'>;
    /** The International Federation of Organic Agriculture Movements (IFOAM) is a grassroots and democratic organization that currently unites 750 member organizations in 116 countries. Same as GS1 code 15 */
    "OrganicClaimAgencyCode-IFOAM": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-IFOAM'>;
    /** Naturland - Naturland is active the world over in promoting organic agriculture. Its members are farmers who produce a wide range of valuable products: coffee from Mexico and Peru, olive oil from Greece, tea from the slopes of India's mountains, pineapple and other tropical fruit from Uganda, spices from Sri Lanka. Organic agriculture safeguards the existence of smallholders and helps with the sustainable management of what are often fragile ecosystems. On a global scale, over 50,000 Naturland farmers are cultivating an area of over 142,000 hectares.Same as GS1 Code 12 */
    "OrganicClaimAgencyCode-NATURLAND": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-NATURLAND'>;
    /** Quality Assurance International. QAI is a leading USDA-accredited organic product certifying agency. */
    "OrganicClaimAgencyCode-QAI": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-QAI'>;
    /** Bioland Association of South Tyrol The Association of South Tyrol is the largest organic association for organic farmers having to farmers in South Tyrol and the only active in association with a national association office Terlan. */
    "OrganicClaimAgencyCode-SUDITIROL": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-SUDITIROL'>;
    /** US Department of Agriculture. */
    "OrganicClaimAgencyCode-USDA": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode-USDA'>;
    "OrganicClaimAgencyCode": NamedNode<'https://gs1.org/voc/OrganicClaimAgencyCode'>;
    /** A set of organic claim details for the product. */
    "OrganicClaimDetails": NamedNode<'https://gs1.org/voc/OrganicClaimDetails'>;
    /** The percent of actual organic materials per weight of the product. This is usually claimed on the product. */
    "organicPercentClaim": NamedNode<'https://gs1.org/voc/organicPercentClaim'>;
    /** An Organization is any legal or physical entity involved at any point in any supply chain and upon which there is a need to retrieve predefined information. An Organization is uniquely identified by a Global Location Number (GLN). */
    "Organization": NamedNode<'https://gs1.org/voc/Organization'>;
    /** Provides details on if and when an organisation/party is active or inactive. */
    "organizationHistory": NamedNode<'https://gs1.org/voc/organizationHistory'>;
    /** Government bodies, trade organisations, and other parties issue identifiers that are associated to legal entities and/or functions. Linking these identifiers to GLN and one another supports consolidating records, mapping related, collaborative identifiers, enhances search ability and enables more efficient transitions between identifiers.  This class provides a mechanism for connecting and sharing party identifiers. */
    "OrganizationID_Details": NamedNode<'https://gs1.org/voc/OrganizationID_Details'>;
    /** Secondary qualifier to supplement gs1:organizationID_Type meaning. May be used with proprietary ID code values to define identifier administrator. */
    "organizationID_Qualifier": NamedNode<'https://gs1.org/voc/organizationID_Qualifier'>;
    /** The Australian Business Number is a unique 11-digit identifier issued by the Australian Business Register which is operated by the Australian Taxation Office. */
    "OrganizationID_Type-AU_ABN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-AU_ABN'>;
    /** An Australian Company Number is a unique identifier required by every company registered under Australiaâ€™s Corporations Act 2001. The ACN is a nine-digit number issued by the Australian Securities & Investments Commission to every Australian company. */
    "OrganizationID_Type-AU_ACN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-AU_ACN'>;
    /** The Central Reference File Database (CRD), formerly known as Central Repository Domain is a centralised database that stores Location Codes and Company Codes required by European regulation, and makes them available to users. CRD contains the following reference files: - List of Countries (ISO 3166) - The Location Reference File which uniquely identifies physical rail points (e.g. stations, customer sidings, loading places) containing the Location Code (which includes the Country Code) - The Partner Reference File uniquely identifies all rail actors who exchange information (Company Codes); Each company actor must have a unique Company Code assigned by UIC */
    "OrganizationID_Type-CRD_PARTNER_CODE": NamedNode<'https://gs1.org/voc/OrganizationID_Type-CRD_PARTNER_CODE'>;
    /** A company registration number is a unique combination of numbers and/or letters. The company registration number (also known as the company number, registration number or simply in its abbreviated form) is used to identify a company and verify that it is an entity registered within the national registry for companies or enterprises. This value is generic and is not associated to any specific region. */
    "OrganizationID_Type-CRN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-CRN'>;
    /** A globally unique persistent identifier that does not require a centralized registration authority because it is generated and/or registered cryptographically. The generic format of a DID is defined in the DID Core specification [DID-CORE]. A specific DID scheme is defined in a DID method specification. Manyâ€”but not allâ€”DID methods make use of distributed ledger technology (DLT) or some other form of decentralized network. */
    "OrganizationID_Type-DID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-DID'>;
    /** The DUNS+4 refers to the DUNS number assigned by Dun and Bradstreet, plus a 4-character suffix that is assigned by the vendor to establish additional Central Contractor Registration (CCR) database records for identifying alternative electronic funds transfer (EFT) accounts for the same vendor located at the same physical address. Dun and Bradstreet has no affiliation with the 4-character suffix. */
    "OrganizationID_Type-DUNS_PLUS_FOUR": NamedNode<'https://gs1.org/voc/OrganizationID_Type-DUNS_PLUS_FOUR'>;
    /** Data Universal Numbering System. It is a nine-digit numbering system which uniquely identifies an individual business. The DUNS number is a nine-digit number issued by Dun & Bradstreet assigned to each business location in the D&B database having a unique, separate, and distinct operation for the purpose of identifying them. A DUNS number is also a way in which separate corporate entities, having no official relationship, can be branded as one by sharing one DUNS number among the affiliated comp */
    "OrganizationID_Type-DUNS": NamedNode<'https://gs1.org/voc/OrganizationID_Type-DUNS'>;
    /** A type of identifier in the format of the invariant set of ISO646:1991 used in accordance with the EU Implementing Regulation 2018/574 to identify an economic operator. */
    "OrganizationID_Type-EO_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-EO_ID'>;
    /** Businesses and people wishing to trade with the EU must, use the EORI number as an identification number in all customs procedures when exchanging information with Customs - https://ec.europa.eu/taxation_customs/dds2/eos/eori_home.jsp?Lang=en */
    "OrganizationID_Type-EORI": NamedNode<'https://gs1.org/voc/OrganizationID_Type-EORI'>;
    /** An identifier used to identify companies for value added tax purposes in the European Union. Link: https://ec.europa.eu/taxation_customs/vies/faqvies.do#item_11 */
    "OrganizationID_Type-EU_VAT_IDENTIFICATION_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-EU_VAT_IDENTIFICATION_NUMBER'>;
    /** The RCS (Registre du commerce et des sociÃ©tÃ©s), otherwise known as the Greffe, is the registry for the company accounts and by-laws of all companies in France. */
    "OrganizationID_Type-FR_RCS": NamedNode<'https://gs1.org/voc/OrganizationID_Type-FR_RCS'>;
    /** The SIREN number, issued by Insee (the National Institute of Statistics and Economic Studies) is the unique identification number of each company. It is a number that allows each company to be identified by the administrations in France. The SIREN number also constitutes the first 9 digits of the SIRET number. */
    "OrganizationID_Type-FR_SIREN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-FR_SIREN'>;
    /** IMO registers all vessels subject to the SOLAS convention. IMO also records the Owner, Operator, Manager and Group Beneficial Owner. For that purpose they also record the Companies acting in these roles using the IMO Company Number */
    "OrganizationID_Type-IMO_COMPANY_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-IMO_COMPANY_NUMBER'>;
    /** The Legal Entity Identifier (LEI) is a 20-character, alpha-numeric code based on the ISO 17442 standard developed by the International Organization for Standardization (ISO). It connects to key reference information that enables clear and unique identification of legal entities participating in financial transactions */
    "OrganizationID_Type-LEI": NamedNode<'https://gs1.org/voc/OrganizationID_Type-LEI'>;
    /** When registering with the Netherlands Chamber of Commerce KVK, a business is listed in the Dutch Commercial Register or Handelsregister (HR) as it is called in the Netherlands. The businesses are then given a 8-digit KVK number. This number serves to prove an organisation is a registered business. */
    "OrganizationID_Type-NL_KVK_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-NL_KVK_NUMBER'>;
    /** The Organization Identification Number (OIN) is a unique number assigned to organizations by Logius, the digital government service of the Netherlands Ministry of the Interior and Kingdom Relations, to identify, authenticate and/or authorise themselves in digital messaging within and with the government. */
    "OrganizationID_Type-NL_OIN_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-NL_OIN_NUMBER'>;
    /** An identifier used to identify companies for goods and services tax purposes in New Zealand. */
    "OrganizationID_Type-NZ_GST_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-NZ_GST_NUMBER'>;
    /** An identifier used to identify companies for tax purposes in New Zealand. */
    "OrganizationID_Type-NZ_IRD_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-NZ_IRD_NUMBER'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_1": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_1'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_10": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_10'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_2": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_2'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_3": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_3'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_4": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_4'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_5": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_5'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_6": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_6'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_7": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_7'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_8": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_8'>;
    /** Identification used for internal mapping purposes. */
    "OrganizationID_Type-ORG_FOR_INTERNAL_USE_9": NamedNode<'https://gs1.org/voc/OrganizationID_Type-ORG_FOR_INTERNAL_USE_9'>;
    /** Within the European Union, the phytosanitary registration number identifies an organisation responsible for introducing, or moving plants, plant products and other objects, for which a phytosanitary certificate or a plant passport is required to comply with EU regulation. A phytosanitary registration number is not the same as a phytosanitary certificate number, which identifies the certificate issued to the organisation exporting items subject to phytosanitary processes. */
    "OrganizationID_Type-PHYTOSANITARY_REGISTRATION_NUMBER": NamedNode<'https://gs1.org/voc/OrganizationID_Type-PHYTOSANITARY_REGISTRATION_NUMBER'>;
    /** The taxpayer identification number (TIN) is an identifying number used for tax purposes in the United States and in other countries under the Common Reporting Standard. The unique identifier is assigned to the Account Holder by the tax administration in the Account Holderâ€™s jurisdiction of tax residence. It is a unique combination of letters and/or numbers used to identify an individual or entity for the purposes of administering the tax laws of that jurisdiction.  In some countries where the TIN is not used a national identification number, national identity number, or national insurance number is used by the governments of countries as a means of tracking their citizens, permanent residents, and temporary residents for the purposes of work, taxation, government benefits, health care, and other governmentally related functions. */
    "OrganizationID_Type-TIN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-TIN'>;
    /** A company registration number is a unique combination of numbers and, in some cases, letters. The company registration number (also known as the company number, registration number or simply abbreviated to CRN) is used to identify a company and verify that it is an entity registered with Companies House (the executive agency of the British Government reponsible for providing registered company information to the public). */
    "OrganizationID_Type-UK_CRN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-UK_CRN'>;
    /** A Service Provider Identification Number (SPIN) isÂ a unique nine-digit number assigned to service providers by USAC when an FCCÂ Form 498 is filed. This number is also known as the service provider's 498 ID. */
    "OrganizationID_Type-US_498_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_498_ID'>;
    /** The FCC FormÂ 499 FilerÂ Database is an identification system for all interstate telecommunications carriers, all interconnected VoIP providers, and certain other providers of interstate telecommunications.  The Universal Service Fund helps communities across the country afford telecommunications and advanced services. */
    "OrganizationID_Type-US_499_FILER_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_499_FILER_ID'>;
    /** The BEA foreign direct investment identification number isÂ assigned to a new U.S. affiliateÂ after their initial report has been accepted by the BEA. Filed by mail or facsimile, initial reports are due within 30 days of the end of the quarter in which the U.S. entity became foreign owned. */
    "OrganizationID_Type-US_BEA_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_BEA_ID'>;
    /** The Defense Logistics Agency (DLA) Commercial and Government Entity. A CAGE code is a five character alpha-numeric identifier assigned to entities located IN the United States and its territories */
    "OrganizationID_Type-US_CAGE": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_CAGE'>;
    /** AÂ companyÂ identification number, orÂ CID, is given to aÂ companyÂ when it is formed and the articles of organization or incorporation are approved by the U.S. Secretary of State. TheÂ CIDÂ is an important step when establishing a newÂ companyÂ as it acts as a way to track importantÂ companyÂ information. */
    "OrganizationID_Type-US_CID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_CID'>;
    /** Every stockbroker (â€œregistered representativeâ€) licensed to sell securities in the U.S. must have a CRD number, which is administered by the Financial Industry Regulatory Authority (FINRA). */
    "OrganizationID_Type-US_CRD": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_CRD'>;
    /** AÂ DEA numberÂ (DEA Registration Number) is an identifier assigned to a health care provider (such as aÂ physician,Â physician assistant,Â nurse practitioner,Â optometrist,Â podiatrist,Â dentist, orÂ veterinarian) by the United StatesÂ Drug Enforcement AdministrationÂ allowing them to write prescriptions forÂ controlled substances. */
    "OrganizationID_Type-US_DEA": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_DEA'>;
    /** Is a six position code that uniquely identifies a Department of Defense unit, activity, or organization that has the authority to requisition, contract for, receive, have custody of, issue, or ship DoD assets, or fund/pay bills for materials and/or services. */
    "OrganizationID_Type-US_DODAAC": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_DODAAC'>;
    /** The U.S. Employer Identification Number, also known as the Federal Employer Identification Number or the Federal Tax Identification Number, is a unique nine-digit number assigned by the Internal Revenue Service to business entities operating in the United States for the purposes of identification. */
    "OrganizationID_Type-US_EIN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_EIN'>;
    /** ThisÂ number, issued either by the U. S.Â Environmental Protection AgencyÂ (U.S.Â EPA ID Number), or by DTSC (CaliforniaÂ ID Number), identifies each handler of hazardous waste on hazardous waste manifests and other paperwork. */
    "OrganizationID_Type-US_EPA_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_EPA_ID'>;
    /** AnÂ FRN, orÂ FCCÂ registrationÂ number, is a 10-digitÂ numberÂ that is assigned to a business or individual registering with theÂ FCC. ... TheÂ FCCÂ will use theÂ FRNÂ to determine if all of a registrant's fees have been paid. */
    "OrganizationID_Type-US_FCC_FRN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_FCC_FRN'>;
    /** TheÂ FDIC CertificateÂ ID is a uniqueÂ numberÂ assigned to each depository institution by the Federal Deposit Insurance Corporation (FDIC). */
    "OrganizationID_Type-US_FDIC": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_FDIC'>;
    /** FHFA ID numberÂ is the number assigned to a member by FHFA and used by FHFA and the Banks to identify a particular member. */
    "OrganizationID_Type-US_FHFA_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_FHFA_ID'>;
    /** The Federal Maritime Commission (FMC) is a USA federal agency. The FMC is responsible for regulating USA ocean transportation to and from the USA. To buy or sell sea freight services to or from the USA, a company must be licensed or registered with the FMC. */
    "OrganizationID_Type-US_FMC_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_FMC_ID'>;
    /** GIIN is an abbreviation of Global Intermediary Identification Number. The FATCA Registration System approves foreign financial institutions (FFI), financial institution (FI) branches, direct reporting non-financial foreign entities (NFFE), sponsoring entities, sponsored entities, and sponsored subsidiary branches. */
    "OrganizationID_Type-US_GIIN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_GIIN'>;
    /** Code to identify CPSC-Accepted Testing Laboratories. Section 14(a)(3)(E) of the Consumer Product Safety (CPSC) Act, as amended, requires the Commission to maintain on its website an up-to-date list of entities that have been accredited to assess conformity with children's product safety rules. */
    "OrganizationID_Type-US_LAB_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_LAB_ID'>;
    /** The assignedÂ LICÂ identifies the registered company, not an individual product or device; it can be used across multiple product lines. */
    "OrganizationID_Type-US_LIC": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_LIC'>;
    /** The United States Customs use theÂ Manufacturer's Identification NumberÂ (MID) in the electronic data processing and monitoring ofÂ manufacturers. MID is anÂ identifyingÂ referenceÂ numberÂ given toÂ manufacturersÂ that import products into the United States. */
    "OrganizationID_Type-US_MFG_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_MFG_ID'>;
    /** Domestic boat manufacturers are required by U.S. federal law to obtain a unique Manufacturer's Identification Code (MIC). The same applies to domestic importers of foreign built vessels. This code must be incorporated asÂ the first three characters of allÂ hull identification numbers assigned to boats of their production. */
    "OrganizationID_Type-US_MIC": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_MIC'>;
    /** TheÂ National Provider IdentifierÂ (NPI) is a Health Insurance Portability and Accountability Act (HIPAA) Administrative Simplification Standard. TheÂ NPIÂ is a uniqueÂ identification numberÂ for covered health careÂ providers. TheÂ NPIÂ is a 10-position, intelligence-free numericÂ identifierÂ (10-digitÂ number). */
    "OrganizationID_Type-US_NPI": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_NPI'>;
    /** RN stands for Registered Identification Number. It isÂ a number issued by the FTC to U.S. businessesÂ that manufacture, import, distribute, or sell products covered by the Textile, Wool, and Fur Acts. Businesses can use this number on product labels instead of the company name. */
    "OrganizationID_Type-US_RN": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_RN'>;
    /** TheÂ RSSD IDÂ is a uniqueÂ identifierÂ assigned to financial institutions by the U.S. Federal Reserve. */
    "OrganizationID_Type-US_RSSD_ID": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_RSSD_ID'>;
    /** The Standard Carrier Alpha Code (SCAC) isÂ a unique two-to-four-letter code used to identify transportation companies. SCAC codes can be obtained from the National Motor Freight Traffic Association (NMFTA), located in Alexandria, VA. */
    "OrganizationID_Type-US_SCAC": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_SCAC'>;
    /** Uniquely identify entities registered in the U.S. government  System for Award Management (SAM) */
    "OrganizationID_Type-US_UEI": NamedNode<'https://gs1.org/voc/OrganizationID_Type-US_UEI'>;
    /** Organisation that administers the gs1:organizationID or the name of the ID itself.  Value from gs1:OrganizationID_Type code list. */
    "organizationID_Type": NamedNode<'https://gs1.org/voc/organizationID_Type'>;
    "OrganizationID_Type": NamedNode<'https://gs1.org/voc/OrganizationID_Type'>;
    /** A URI that links to information about the gs1:organizationID. */
    "organizationID_URI": NamedNode<'https://gs1.org/voc/organizationID_URI'>;
    /** Identifier value associated to an organisation/party. This value SHALL follow rules set forth by the administrating organisation designated in gs1:OrganizationID_Type. */
    "organizationID": NamedNode<'https://gs1.org/voc/organizationID'>;
    /** The name of the organization expressed in text. */
    "organizationName": NamedNode<'https://gs1.org/voc/organizationName'>;
    /** The role and/or purpose of a party (i.e. legal entity or function).  Multiple values from gs1:OrganizationRoleType code list may be associated to a single organisation/party. */
    "organizationRole": NamedNode<'https://gs1.org/voc/organizationRole'>;
    /** Organization accepting goods, products, services etc. */
    "OrganizationRoleType-ACCEPTING_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-ACCEPTING_PARTY'>;
    /** Organization to receive Bill of Lading. */
    "OrganizationRoleType-BILL_OF_LADING_RECIPIENT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BILL_OF_LADING_RECIPIENT'>;
    /** Organization which receives goods and invoice. */
    "OrganizationRoleType-BILL_TO": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BILL_TO'>;
    /** The organisation that owns the specifications of the Organization regardless of where and by whom it is manufactured is normally responsible for the allocation of the Global Trade Item Number (GTIN). */
    "OrganizationRoleType-BRAND_OWNER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BRAND_OWNER'>;
    /** The organization which breeds the animal. */
    "OrganizationRoleType-BREEDER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BREEDER'>;
    /** A person who buys or sells for another entity without having title to the property. */
    "OrganizationRoleType-BROKER_AGENT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BROKER_AGENT'>;
    /** Organization to which merchandise are sold. */
    "OrganizationRoleType-BUYER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BUYER'>;
    /** Third party who arranged the purchase of merchandise on behalf of the actual buyer. */
    "OrganizationRoleType-BUYERS_AGENT_REPRESENTATIVE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-BUYERS_AGENT_REPRESENTATIVE'>;
    /** A company, which physically transports goods from one place to another. */
    "OrganizationRoleType-CARRIER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CARRIER'>;
    /** Master of the conveyance. An organization providing central (or consolidated payment) services. */
    "OrganizationRoleType-CENTRAL_PAYMENT_SERVICE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CENTRAL_PAYMENT_SERVICE'>;
    /** Organization or contact designated on behalf of carrier or his agent to establish the actual figures for quantities, weight, volume and/or (cube) measurements of goods or containers which are to appear in the transport contract and on which charges will be based */
    "OrganizationRoleType-CHECKING_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CHECKING_PARTY'>;
    /** Organization to which the cheque will be ordered, when different from the beneficiary. */
    "OrganizationRoleType-CHEQUE_ORDER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CHEQUE_ORDER'>;
    /** Organization to which goods are consigned. */
    "OrganizationRoleType-CONSIGNEE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CONSIGNEE'>;
    /** Organization consolidating various consignments, payments etc. */
    "OrganizationRoleType-CONSOLIDATOR": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CONSOLIDATOR'>;
    /** The end user of a product or a service. */
    "OrganizationRoleType-CONSUMER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CONSUMER'>;
    /** Identity of the organization to whom all other parties of the same commercial organization are linked. */
    "OrganizationRoleType-CORPORATE_IDENTITY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CORPORATE_IDENTITY'>;
    /** Organization responsible for the preparation of documents and/or electronic submissions, the calculation on behalf of the client of taxes, duties and excises, and facilitating communication between the importer/exporter and governmental authorities. */
    "OrganizationRoleType-CUSTOMS_BROKER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CUSTOMS_BROKER'>;
    /** Identification of customs authority relevant to the transaction or shipment. */
    "OrganizationRoleType-CUSTOMS": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CUSTOMS'>;
    /** One engaged in carving meat (In EANCOM as Meat Cutter). */
    "OrganizationRoleType-CUTTER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-CUTTER'>;
    /** Any natural or legal person who makes a declaration to an official body on behalf of another natural or legal person, where legally permitted (CCC). */
    "OrganizationRoleType-DECLARANTS_AGENT_REPRESENTATIVE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-DECLARANTS_AGENT_REPRESENTATIVE'>;
    /** Organization to which goods are delivered. */
    "OrganizationRoleType-DELIVERY_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-DELIVERY_PARTY'>;
    /** A Organization who designs. */
    "OrganizationRoleType-DESIGNER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-DESIGNER'>;
    /** Organization where goods are collected or taken over by the carrier. */
    "OrganizationRoleType-DESPATCH_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-DESPATCH_PARTY'>;
    /** Organization distributing goods, financial payments or documents. */
    "OrganizationRoleType-DISTRIBUTOR": NamedNode<'https://gs1.org/voc/OrganizationRoleType-DISTRIBUTOR'>;
    /** A door or collection of doors where trucks or rail cars are loaded (shipping) or unloaded (receiving). Used to load or unload products for logistics. */
    "OrganizationRoleType-DOCK_DOOR": NamedNode<'https://gs1.org/voc/OrganizationRoleType-DOCK_DOOR'>;
    /** Organization from whose premises empty equipment will be or has been despatched. */
    "OrganizationRoleType-EMPTY_EQUIPMENT_DESPATCH_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-EMPTY_EQUIPMENT_DESPATCH_PARTY'>;
    /** Organization from whose premises empty equipment will be or has been returned. */
    "OrganizationRoleType-EMPTY_EQUIPMENT_RETURN_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-EMPTY_EQUIPMENT_RETURN_PARTY'>;
    /** Owner of equipment (container, etc.). */
    "OrganizationRoleType-EQUIPMENT_OWNER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-EQUIPMENT_OWNER'>;
    /** Organization who makes - or on whose behalf a Customs clearing agent or other authorized person makes - an export declaration. This may include a manufacturer, seller or other person. Within a Customs union, consignor may have the same meaning as exporter */
    "OrganizationRoleType-EXPORTER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-EXPORTER'>;
    /** An organization that purchases financial receiving instruments e.g. invoices */
    "OrganizationRoleType-FACTOR": NamedNode<'https://gs1.org/voc/OrganizationRoleType-FACTOR'>;
    /** The Organization which fattens the animal. */
    "OrganizationRoleType-FATTENER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-FATTENER'>;
    /** A person or firm that arranges for a pick up or deliver goods by a carrier on instructions of a shipper or consignee from or to a point by various necessary conveyances and common carriers. */
    "OrganizationRoleType-FREIGHT_FORWARDER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-FREIGHT_FORWARDER'>;
    /** The organization which owns the goods. */
    "OrganizationRoleType-GOODS_OWNER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-GOODS_OWNER'>;
    /** An organization which is responsible for the growth or production of the unit specifically refers to vegetation. This organization may or may not be a producer or packer. */
    "OrganizationRoleType-GROWER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-GROWER'>;
    /** The executive or main office of an enterprise. */
    "OrganizationRoleType-HEAD_OFFICE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-HEAD_OFFICE'>;
    /** Organization who makes - or on whose behalf a Customs clearing agent or other authorized person makes - an import declaration. This may include a person who has possession of the goods or to whom the goods are consigned. */
    "OrganizationRoleType-IMPORTER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-IMPORTER'>;
    /** The Organization providing the information contained in the document. */
    "OrganizationRoleType-INFORMATION_PROVIDER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INFORMATION_PROVIDER'>;
    /** A person or company offering insurance policies for premiums. */
    "OrganizationRoleType-INSURER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INSURER'>;
    /** A financial institution between the ordered bank and the beneficiary's bank. */
    "OrganizationRoleType-INTERMEDIARY_BANK_1": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INTERMEDIARY_BANK_1'>;
    /** A financial institution between the ordered bank and the beneficiary's bank. */
    "OrganizationRoleType-INTERMEDIARY_BANK_2": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INTERMEDIARY_BANK_2'>;
    /** To specifically identify the organisation in charge of inventory control. */
    "OrganizationRoleType-INVENTORY_CONTROLLER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INVENTORY_CONTROLLER'>;
    /** Organization reporting inventory information. */
    "OrganizationRoleType-INVENTORY_REPORTING_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INVENTORY_REPORTING_PARTY'>;
    /** Organization issuing an invoice. */
    "OrganizationRoleType-INVOICEE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-INVOICEE'>;
    /** Organization which issues an invoice. */
    "OrganizationRoleType-ISSUER_OF_INVOICE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-ISSUER_OF_INVOICE'>;
    /** An umbrella term for an entity, which provides a combination of many different logistics services for another entity. */
    "OrganizationRoleType-LOGISTICS_SERVICE_PROVIDER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-LOGISTICS_SERVICE_PROVIDER'>;
    /** Organization who manufactures the goods. */
    "OrganizationRoleType-MANUFACTURER_OF_GOODS": NamedNode<'https://gs1.org/voc/OrganizationRoleType-MANUFACTURER_OF_GOODS'>;
    /** A physical location consisting of one or more buildings with facilities for manufacturing. */
    "OrganizationRoleType-MANUFACTURING_PLANT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-MANUFACTURING_PLANT'>;
    /** The ultimate destination of a unit load or transport package of goods where the Ship-To is a different location. */
    "OrganizationRoleType-MARK_FOR": NamedNode<'https://gs1.org/voc/OrganizationRoleType-MARK_FOR'>;
    /** Organization where the message comes from. */
    "OrganizationRoleType-MESSAGE_FROM": NamedNode<'https://gs1.org/voc/OrganizationRoleType-MESSAGE_FROM'>;
    /** Organization receiving the message. */
    "OrganizationRoleType-MESSAGE_RECIPIENT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-MESSAGE_RECIPIENT'>;
    /** One engaged in the cutting or chopping of meat into very small pieces */
    "OrganizationRoleType-MINCER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-MINCER'>;
    /** An entity that is part of another entity. For example, a Regional Marketing Office. Operating Divisions may have multiple days and times of operation. */
    "OrganizationRoleType-OPERATING_DIVISION": NamedNode<'https://gs1.org/voc/OrganizationRoleType-OPERATING_DIVISION'>;
    /** A person or persons who own or operate a business establishment, which services consumers directly. For example a restaurant owner as part of a chain or an independent operation. */
    "OrganizationRoleType-OPERATOR": NamedNode<'https://gs1.org/voc/OrganizationRoleType-OPERATOR'>;
    /** To be used only if ordering organization and buyer are not identical. */
    "OrganizationRoleType-ORDERING_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-ORDERING_PARTY'>;
    /** Organization who owns equipment. */
    "OrganizationRoleType-OWNER_OF_EQUIPMENT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-OWNER_OF_EQUIPMENT'>;
    /** Organization owning the means of transport. Not a synonym of carrier */
    "OrganizationRoleType-OWNER_OF_MEANS_OF_TRANSPORT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-OWNER_OF_MEANS_OF_TRANSPORT'>;
    /** A code to identify the organization who is responsible for declaring the Value Added Tax (VAT) on the sale of goods or services. */
    "OrganizationRoleType-PARTY_DECLARING_THE_VALUE_ADDED_TAX": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_DECLARING_THE_VALUE_ADDED_TAX'>;
    "OrganizationRoleType-PARTY_FOR_WHOM_ITEM_IS_ULTIMATELY_INTENDED": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_FOR_WHOM_ITEM_IS_ULTIMATELY_INTENDED'>;
    /** The organization who is allowed access to master data information by the data owner when the data is viewed as private. */
    "OrganizationRoleType-PARTY_RECEIVING_PRIVATE_DATA": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_RECEIVING_PRIVATE_DATA'>;
    /** A code to identify the organization who is eligible to recover the Value Added Tax (VAT) on the sale of goods or services. */
    "OrganizationRoleType-PARTY_RECOVERING_THE_VALUE_ADDED_TAX": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_RECOVERING_THE_VALUE_ADDED_TAX'>;
    /** An organization which is named to be the recipient of all documents. */
    "OrganizationRoleType-PARTY_TO_RECEIVE_ALL_DOCUMENTS": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_TO_RECEIVE_ALL_DOCUMENTS'>;
    /** Organization to whom payment for a commercial invoice or bill should be remitted. */
    "OrganizationRoleType-PARTY_TO_RECEIVE_COMMERCIAL_INVOICE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_TO_RECEIVE_COMMERCIAL_INVOICE'>;
    /** Organization being informed about invoice issue (via EDI). */
    "OrganizationRoleType-PARTY_TO_RECEIVE_ELECTRONIC_MEMO_OF_INVOICE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_TO_RECEIVE_ELECTRONIC_MEMO_OF_INVOICE'>;
    /** Organization to whom the freight bill should be sent. */
    "OrganizationRoleType-PARTY_TO_RECEIVE_FREIGHT_BILL": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_TO_RECEIVE_FREIGHT_BILL'>;
    /** Organization to whom a refund is given. */
    "OrganizationRoleType-PARTY_TO_RECEIVE_REFUND": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PARTY_TO_RECEIVE_REFUND'>;
    /** Organization, which receives payment. */
    "OrganizationRoleType-PAYEE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PAYEE'>;
    /** Organization which initiates payment. */
    "OrganizationRoleType-PAYER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PAYER'>;
    /** Refers to the retail type checkout where bar code symbols are normally scanned. */
    "OrganizationRoleType-POINT_OF_SALE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-POINT_OF_SALE'>;
    /** An organization to which a price for a product is applicable. Within the context of GDSN Price Synchronization, it is also known as the 'Price Location' which is a GLN. */
    "OrganizationRoleType-PRICE_LOCATION_PARTY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PRICE_LOCATION_PARTY'>;
    /** A company that is selected by the Brand Owner to maintain their baseline attributes and Administrative Records in the GDSN. */
    "OrganizationRoleType-PROXY": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PROXY'>;
    /** A building, or a part of one, where storage space is offered to other companies for compensation (fee), for the storage of their goods, merchandise, etc. */
    "OrganizationRoleType-PUBLIC_WAREHOUSE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PUBLIC_WAREHOUSE'>;
    /** The organization that receives the purchase order for the goods or services. */
    "OrganizationRoleType-PURCHASE_ORDER_RECEIVER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-PURCHASE_ORDER_RECEIVER'>;
    /** The organization having legal responsibility for the product in the target market for example a company to which market authorization has been issued. */
    "OrganizationRoleType-REGISTERED_AGENT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-REGISTERED_AGENT'>;
    /** Organization to whom funds are directed for payment of a commercial invoice. */
    "OrganizationRoleType-REMIT_TO": NamedNode<'https://gs1.org/voc/OrganizationRoleType-REMIT_TO'>;
    /** The location where a returnable asset is serviced. */
    "OrganizationRoleType-RETURNABLE_ASSET_SERVICE_CENTRE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-RETURNABLE_ASSET_SERVICE_CENTRE'>;
    /** Organization which sells products or services to a buyer. */
    "OrganizationRoleType-SELLER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SELLER'>;
    /** An organization providing services for another organization (e.g. re-packing supplier's products). */
    "OrganizationRoleType-SERVICE_PROVIDER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SERVICE_PROVIDER'>;
    /** Organization from where goods will be or have been shipped. */
    "OrganizationRoleType-SHIP_FROM": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SHIP_FROM'>;
    /** Organization which receives goods and invoices. */
    "OrganizationRoleType-SHIP_TO": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SHIP_TO'>;
    /** The Organization who has undertaken or will undertake a slaughter. */
    "OrganizationRoleType-SLAUGHTERER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SLAUGHTERER'>;
    /** A physical entity that sells products to a consumer. */
    "OrganizationRoleType-STORE": NamedNode<'https://gs1.org/voc/OrganizationRoleType-STORE'>;
    /** Organization which may be in a position to supply products or services should the main usual supplier be unable to do so. */
    "OrganizationRoleType-SUBSTITUTE_SUPPLIER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SUBSTITUTE_SUPPLIER'>;
    /** An organization that provides goods or services. */
    "OrganizationRoleType-SUPPLIER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-SUPPLIER'>;
    /** Organization undertaking or arranging transport of goods between named points. */
    "OrganizationRoleType-TRANSPORTATION_CARRIER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-TRANSPORTATION_CARRIER'>;
    /** An enterprise's physical location where guests are received during set working hours */
    "OrganizationRoleType-VISITING_ADDRESS": NamedNode<'https://gs1.org/voc/OrganizationRoleType-VISITING_ADDRESS'>;
    /** Industrial department of a company equipped with appropriate equipment and fittings in which goods are stored in appropriate conditions. */
    "OrganizationRoleType-WAREHOUSE_AND_OR_DEPOT": NamedNode<'https://gs1.org/voc/OrganizationRoleType-WAREHOUSE_AND_OR_DEPOT'>;
    /** Organization taking responsibility for goods entered into a warehouse. */
    "OrganizationRoleType-WAREHOUSE_KEEPER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-WAREHOUSE_KEEPER'>;
    /** Seller of articles, often in large quantities, to be retailed by others. */
    "OrganizationRoleType-WHOLESALER": NamedNode<'https://gs1.org/voc/OrganizationRoleType-WHOLESALER'>;
    "OrganizationRoleType": NamedNode<'https://gs1.org/voc/OrganizationRoleType'>;
    /** Designation of active/inactive status of an organisation/party. */
    "organizationStatus": NamedNode<'https://gs1.org/voc/organizationStatus'>;
    /** Over the lifetime of an organisation, it may go through periods of being active and inactive. gs1:OrganizationStatusHistory allows changes in status to be communicated in advance and tracked over time. */
    "OrganizationStatusHistory": NamedNode<'https://gs1.org/voc/OrganizationStatusHistory'>;
    /** Links to the alphanumeric code value defined elsewhere in GS1 or the GS1 Global Data Dictionary */
    "originalCodeValue": NamedNode<'https://gs1.org/voc/originalCodeValue'>;
    /** The depth of the product out of its packaging, as measured according to the GS1 Package Measurement Rules. See https://www.gs1.org/package-measurement-rules-implementation-guide for more details. */
    "outOfPackageDepth": NamedNode<'https://gs1.org/voc/outOfPackageDepth'>;
    /** The measurement of the diameter of the product out of its package at its largest point. For example, 165 MMT. */
    "outOfPackageDiameter": NamedNode<'https://gs1.org/voc/outOfPackageDiameter'>;
    /** The height of the product out of the package, as measured according to the GS1 Package Measurement Rules. See https://www.gs1.org/package-measurement-rules-implementation-guide for more details. */
    "outOfPackageHeight": NamedNode<'https://gs1.org/voc/outOfPackageHeight'>;
    /** The width of the product out of the package, as measured according to the GS1 Package Measurement Rules. See https://www.gs1.org/package-measurement-rules-implementation-guide for more details. */
    "outOfPackageWidth": NamedNode<'https://gs1.org/voc/outOfPackageWidth'>;
    /** Links to the organisation(s) that own this place, in full or in part. This includes joint ventures. For leased locations, see gs1:lessorFor and gs1:isLeasedFrom. */
    "ownedBy": NamedNode<'https://gs1.org/voc/ownedBy'>;
    /** Links to the place(s) or organisation(s) that this organisation owns. */
    "owns": NamedNode<'https://gs1.org/voc/owns'>;
    /** Details on the packaging for a product including type, weight and materials. */
    "packaging": NamedNode<'https://gs1.org/voc/packaging'>;
    /** The packaging date is the date when the goods were packed as determined by the packager. The date may refer to the trade item itself or to items contained. */
    "packagingDate": NamedNode<'https://gs1.org/voc/packagingDate'>;
    /** Details on packaging for a product for example packaging type (bottle), materials, features, recycling, etc.. */
    "PackagingDetails": NamedNode<'https://gs1.org/voc/PackagingDetails'>;
    /** Code indicating a feature that facilitates the usage of the product by the consumer, for example a handle. Packaging features do not affect the core composition of the packaging type nor modify its usage. */
    "packagingFeature": NamedNode<'https://gs1.org/voc/packagingFeature'>;
    /** A general term applied to the support or pedestal of an object. */
    "PackagingFeatureCode-BASE": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-BASE'>;
    /** Long sturdy piece of squared timber or metal used in house-building etc. */
    "PackagingFeatureCode-BEAM": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-BEAM'>;
    /** A bung is an apparatus used to seal a container, such as a bottle, barrel or tubes. A bung is partially inserted inside the container to act as a seal. The most common every-day example of a bung is the stopper of a wine bottle. */
    "PackagingFeatureCode-BUNG_SEAL": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-BUNG_SEAL'>;
    /** A cap that seals a bottle or other form of packaging. */
    "PackagingFeatureCode-CAP": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-CAP'>;
    /** A device of various types attached to or hung from trolleys to support the load. */
    "PackagingFeatureCode-CARRIER": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-CARRIER'>;
    /** An item which allows the user to extract and/or consume the content of a container. */
    "PackagingFeatureCode-CONSUMPTION_UTENSIL": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-CONSUMPTION_UTENSIL'>;
    /** A tubular shape around which flexible material such as plastic film or paper are wound for purposes of transport and handling. */
    "PackagingFeatureCode-CORE": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-CORE'>;
    /** A creel is a device for holding the required number of roving spools or other supply packages of reinforcement fibers for Fiber Reinforced Plastics manufacturing. This device holds the rovings in the desired position for unwinding in continuous processes like Pultrusion and Filament Winding. */
    "PackagingFeatureCode-CREEL": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-CREEL'>;
    /** A right-angle piece placed over the outermost perimeter edges of a container to distribute pressure and prevent collapse or cutting from banding, strapping, or handling. */
    "PackagingFeatureCode-EDGE_PROTECTION": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-EDGE_PROTECTION'>;
    /** A grip attached to an object for using or moving the object, usually with the hands. */
    "PackagingFeatureCode-HANDLE": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-HANDLE'>;
    /** Inner Container */
    "PackagingFeatureCode-INNER_CONTAINER": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-INNER_CONTAINER'>;
    /** An internal divider is an object, either flat or custom-shaped, used to separate the content of a container or to prevent the content from mixing. */
    "PackagingFeatureCode-INTERNAL_DIVIDER": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-INTERNAL_DIVIDER'>;
    /** A label is a piece of paper, polymer, cloth, metal, or other material affixed to a container or article (or printed directly upon it), which usually carries information about the article to.which it has been attached. */
    "PackagingFeatureCode-LABEL": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-LABEL'>;
    /** In packaging, the top or bottom of a container, usually the part that closes the opening; may also be known as cap, over, or top */
    "PackagingFeatureCode-LID": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-LID'>;
    /** An internal chamber within a container which separates the content of the container from the walls. Inner liners provide additional isolation and protection to the content of a container. Sometimes coatings of certain materials may be applied as an alternative to inner liners. */
    "PackagingFeatureCode-LINER": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-LINER'>;
    /** A small indentation or raised portion on the surface of a bottle, provided as an indexing means for operations such as multi-pass decoration or labeling. */
    "PackagingFeatureCode-LUG": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-LUG'>;
    /** Edges which allow items of the same size to be partially stacked within one another in any direction thus reducing the space required in order to stack them. */
    "PackagingFeatureCode-NESTING_EDGE": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-NESTING_EDGE'>;
    /** A fastener which allows a product to be hanged. */
    "PackagingFeatureCode-PEG": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-PEG'>;
    /** A flexible cover which can be easily removed in order to open a container. */
    "PackagingFeatureCode-PULL_OFF_TAB": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-PULL_OFF_TAB'>;
    /** A hollow circular band of material wound around itself. */
    "PackagingFeatureCode-RING_HOLDER": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-RING_HOLDER'>;
    /** A permanent fastener which consists of a cylindrical shaft with a head on one end and tail which is deformed to fixate the rivet in place. */
    "PackagingFeatureCode-RIVET": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-RIVET'>;
    /** A tubular form, open at both ends, that is slipped over an item or package. */
    "PackagingFeatureCode-SLEEVE": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-SLEEVE'>;
    /** A spout is a protruding edge which allows the lifting and pouring of liquids contained within a container. */
    "PackagingFeatureCode-SPOUT": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-SPOUT'>;
    /** A hanging card made of any material which is used to identify or provide additional information of a product. */
    "PackagingFeatureCode-TAG": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-TAG'>;
    /** An outer container made of wicker which is fitted to the bottle usually a little less than half way up from the bottom of the bottle and is used to hold, hang or support the bottle. */
    "PackagingFeatureCode-WICKER_OUTER_CONTAINER": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-WICKER_OUTER_CONTAINER'>;
    /** A layer of any material which completely enclose a product. A wrap can have many purposes, from providing additional protection to an item to serving as a gift-wrap. */
    "PackagingFeatureCode-WRAP": NamedNode<'https://gs1.org/voc/PackagingFeatureCode-WRAP'>;
    "PackagingFeatureCode": NamedNode<'https://gs1.org/voc/PackagingFeatureCode'>;
    /** Code indicating specific functionality for packaging resulting from specific processes or features present in the packaging type,for example, ANTI_TAMPERING. */
    "packagingFunction": NamedNode<'https://gs1.org/voc/packagingFunction'>;
    /** A methodology used to hinder, or deter unauthorized access to a device. */
    "PackagingFunctionCode-ANTI_TAMPERING": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-ANTI_TAMPERING'>;
    /** The process by which a sterile (aseptic) product (typically food or pharmaceutical) is packaged in a sterile container in a way which maintains sterility. */
    "PackagingFunctionCode-ANTISEPTIC": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-ANTISEPTIC'>;
    /** Covered with a material (paraffin, wax) that protects the product or packaging. */
    "PackagingFunctionCode-COATED": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-COATED'>;
    /** Content has been pressed together to the maximum possible way. */
    "PackagingFunctionCode-COMPRESSED": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-COMPRESSED'>;
    /** A device or mechanism to supply or extract contents. */
    "PackagingFunctionCode-DISPENSER": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-DISPENSER'>;
    /** Packaging is wrapped in a decorative way for the purposes of the consumer giving it as a gift. */
    "PackagingFunctionCode-GIFT_WRAPPED": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-GIFT_WRAPPED'>;
    /** Thermal carry container designed for the carriage of temperature controlled goods such as vaccines, pharmaceuticals, and medicines. */
    "PackagingFunctionCode-ISOTHERMIC": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-ISOTHERMIC'>;
    /** The practice of modifying the composition of the internal atmosphere of a package, (commonly food packages, and drugs) in order to improve the shelf life. */
    "PackagingFunctionCode-MODIFIED_ATMOSPHERE": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-MODIFIED_ATMOSPHERE'>;
    /** A barrier packaging material for an infusion solution, i.e., oxygen. */
    "PackagingFunctionCode-OXYGEN_INFUSED": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-OXYGEN_INFUSED'>;
    /** A section of the packaging can be detached with ease in order to have access to the content or product, e.g. peel-off Lids used for packing Milk, Coffee and Cacao Powder. */
    "PackagingFunctionCode-PEEL_OFF": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-PEEL_OFF'>;
    /** The package is equipped to be hung up on a hook. */
    "PackagingFunctionCode-PINPACK": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-PINPACK'>;
    /** Functionality to keep from being damaged, attacked, stolen, or injured; guard. */
    "PackagingFunctionCode-PROTECTED": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-PROTECTED'>;
    /** A component is added to a container for a particular application to lend additional support under severe applications. */
    "PackagingFunctionCode-REINFORCED": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-REINFORCED'>;
    /** Packaging is designed to prevent leaking of the content specially when it is on powdered or liquid state. */
    "PackagingFunctionCode-SIFT_PROOF": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-SIFT_PROOF'>;
    /** The packaging is designed to show when there has been some interference with the original sealing or configuration of the packaging. */
    "PackagingFunctionCode-TAMPER_EVIDENT": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-TAMPER_EVIDENT'>;
    /** Coated with materials that make the packaging impervious to the effects of water. */
    "PackagingFunctionCode-WATER_RESISTANT": NamedNode<'https://gs1.org/voc/PackagingFunctionCode-WATER_RESISTANT'>;
    "PackagingFunctionCode": NamedNode<'https://gs1.org/voc/PackagingFunctionCode'>;
    /** Definitions made by the asthma and allergist association. */
    "PackagingMarkedDietAllergenCode-APPROVED_BY_ASTHMA_AND_ALLERGY_ASSOC": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-APPROVED_BY_ASTHMA_AND_ALLERGY_ASSOC'>;
    /** The item is physically marked that it is approved for tube feeding by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-APPROVED_FOR_TUBE_FEEDING": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-APPROVED_FOR_TUBE_FEEDING'>;
    /** Indicates the product has been marked as a biological item which indicates a food product that was produced with the use of feed or fertilizer of plant or animal origin, without employment of chemically formulated fertilizers, growth stimulants, antibiotics or pesticides. */
    "PackagingMarkedDietAllergenCode-BIOLOGICAL": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-BIOLOGICAL'>;
    /** Indicates the product has a marking with the calories per portion contained in the product. */
    "PackagingMarkedDietAllergenCode-CALORIES_PER_PORTION": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-CALORIES_PER_PORTION'>;
    /** The item is physically marked as containing Latex (rubber). */
    "PackagingMarkedDietAllergenCode-CONTAINS_LATEX": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-CONTAINS_LATEX'>;
    /** The item is physically marked as containing PVC (Polyvinyl chloride) with phthalates. */
    "PackagingMarkedDietAllergenCode-CONTAINS_PVC_WITH_PHTHALATES": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-CONTAINS_PVC_WITH_PHTHALATES'>;
    /** The item is physically marked as containing PVC (Polyvinyl chloride) without phthalates. */
    "PackagingMarkedDietAllergenCode-CONTAINS_PVC_WITHOUT_PHTHALATES": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-CONTAINS_PVC_WITHOUT_PHTHALATES'>;
    /** The item is physically marked as containing PVC (Polyvinyl chloride). Phthalate content is unspecified. */
    "PackagingMarkedDietAllergenCode-CONTAINS_PVC": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-CONTAINS_PVC'>;
    /** The item is physically marked that it is approved for a 450-800 kilocalorie/day diet by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-DIET_PRODUCT_450_800_KCAL_PER_DAY": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-DIET_PRODUCT_450_800_KCAL_PER_DAY'>;
    /** The item is physically marked that it is approved for a 800-1200 kilocalorie/day diet by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-DIET_PRODUCT_800_1200_KCAL_PER_DAY": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-DIET_PRODUCT_800_1200_KCAL_PER_DAY'>;
    /** Health symbol used in the Netherlands Target Market which indicates that the item is a cholesterol-reducing product. */
    "PackagingMarkedDietAllergenCode-GEZONDE_KEUZE_KLAVERTJE": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-GEZONDE_KEUZE_KLAVERTJE'>;
    /** Indicates the product has been marked as Halal which denotes selling or serving food ritually fit according to Islamic dietary laws. */
    "PackagingMarkedDietAllergenCode-HALAL": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-HALAL'>;
    /** Conscious choice symbol used in the Netherlands Target Market which may be used for products low in saturated fat, trans fatty acids, sugar and salt. */
    "PackagingMarkedDietAllergenCode-IK_KIES_BEWUST": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-IK_KIES_BEWUST'>;
    /** Indicates the product has been marked as Kosher which denotes selling or serving food ritually fit according to Jewish dietary laws. */
    "PackagingMarkedDietAllergenCode-KOSHER": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-KOSHER'>;
    /** The item is physically marked that it is approved as lactase enzyme by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-LACTASE_ENZYME": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-LACTASE_ENZYME'>;
    /** The item is physically marked as containing a low level of phenylalanine as approved by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-LOW_ON_PHENYLALANINE": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-LOW_ON_PHENYLALANINE'>;
    /** The item is physically marked as containing a low level of sugar as approved by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-LOW_ON_SUGAR": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-LOW_ON_SUGAR'>;
    /** The item is physically marked that it is approved as substitute mother's milk the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-MOTHERS_MILK_SUBSTITUTE": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-MOTHERS_MILK_SUBSTITUTE'>;
    /** The item is physically marked that it is approved as nutrition supplement by the appropriate authority of the target market. */
    "PackagingMarkedDietAllergenCode-NUTRITION_SUPPLEMENT": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-NUTRITION_SUPPLEMENT'>;
    /** Lean product. */
    "PackagingMarkedDietAllergenCode-NYCKELHAL_MARK": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-NYCKELHAL_MARK'>;
    /** Indicates the product has been marked as vegetarian which denotes a product that contains no meat, fish or other animal products. */
    "PackagingMarkedDietAllergenCode-VEGETARIAN": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode-VEGETARIAN'>;
    "PackagingMarkedDietAllergenCode": NamedNode<'https://gs1.org/voc/PackagingMarkedDietAllergenCode'>;
    /** Indication of which dietary or allergen marks are on the package. */
    "packagingMarkedDietAllergenType": NamedNode<'https://gs1.org/voc/packagingMarkedDietAllergenType'>;
    /** Indication of the food ingredients that the package is marked free from. */
    "packagingMarkedFreeFrom": NamedNode<'https://gs1.org/voc/packagingMarkedFreeFrom'>;
    /** The item is physically marked as having no artificial colouring. */
    "PackagingMarkedFreeFromCode-FREE_FROM_ARTIFICIAL_COLOURING": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_ARTIFICIAL_COLOURING'>;
    /** The item is physically marked as having no artificial flavouring. */
    "PackagingMarkedFreeFromCode-FREE_FROM_ARTIFICIAL_FLAVOURING": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_ARTIFICIAL_FLAVOURING'>;
    /** The item is physically marked as having no artificial preservatives. */
    "PackagingMarkedFreeFromCode-FREE_FROM_ARTIFICIAL_PRESERVATIVES": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_ARTIFICIAL_PRESERVATIVES'>;
    /** The item is physically marked as having no Cholesterol. */
    "PackagingMarkedFreeFromCode-FREE_FROM_CHOLESTEROL": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_CHOLESTEROL'>;
    /** The item is physically marked as being free from cloned food. */
    "PackagingMarkedFreeFromCode-FREE_FROM_CLONED_FOOD": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_CLONED_FOOD'>;
    /** The item is physically marked as being free from dairy and dairy products, as approved by the appropriate authority of the target market. */
    "PackagingMarkedFreeFromCode-FREE_FROM_DAIRY": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_DAIRY'>;
    /** The item is physically marked as free from egg. */
    "PackagingMarkedFreeFromCode-FREE_FROM_EGG": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_EGG'>;
    /** The item is physically marked as being free from fish. */
    "PackagingMarkedFreeFromCode-FREE_FROM_FISH": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_FISH'>;
    /** The item is physically marked as free from gluten. This level of containment is frequently determined through regulation. */
    "PackagingMarkedFreeFromCode-FREE_FROM_GLUTEN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_GLUTEN'>;
    /** The item is physically marked as being free of lactose. */
    "PackagingMarkedFreeFromCode-FREE_FROM_LACTOSE": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_LACTOSE'>;
    /** The item is physically marked being free from Latex (rubber). */
    "PackagingMarkedFreeFromCode-FREE_FROM_LATEX": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_LATEX'>;
    /** The item is physically marked as being free from legume protein. */
    "PackagingMarkedFreeFromCode-FREE_FROM_LEGUME_PROTEIN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_LEGUME_PROTEIN'>;
    /** The item is physically marked as being free from milk protein. */
    "PackagingMarkedFreeFromCode-FREE_FROM_MILK_PROTEIN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_MILK_PROTEIN'>;
    /** The item is physically marked as being free from milk and any of its derivatives. */
    "PackagingMarkedFreeFromCode-FREE_FROM_MILK": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_MILK'>;
    /** The item is physically marked as being naturally free from gluten and not extracted as part of the manufacturing process. */
    "PackagingMarkedFreeFromCode-FREE_FROM_NATURAL_GLUTEN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_NATURAL_GLUTEN'>;
    /** The item is physically marked as being free from peanuts. */
    "PackagingMarkedFreeFromCode-FREE_FROM_PEANUTS": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_PEANUTS'>;
    /** The item is physically marked as being free from protein. */
    "PackagingMarkedFreeFromCode-FREE_FROM_PROTEIN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_PROTEIN'>;
    /** The item is physically marked as being free from PVC (Polyvinyl chloride). */
    "PackagingMarkedFreeFromCode-FREE_FROM_PVC": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_PVC'>;
    /** The item is physically marked as being free from soya. */
    "PackagingMarkedFreeFromCode-FREE_FROM_SOYA": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_SOYA'>;
    /** The item is physically marked as being free from sugar. */
    "PackagingMarkedFreeFromCode-FREE_FROM_SUGAR": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_SUGAR'>;
    /** The item is physically marked being free from Trans Fatty Acids (Trans Fat) */
    "PackagingMarkedFreeFromCode-FREE_FROM_TRANSFAT": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-FREE_FROM_TRANSFAT'>;
    /** The item is physically marked as having a reduced amount of lactose */
    "PackagingMarkedFreeFromCode-REDUCED_LACTOSE": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-REDUCED_LACTOSE'>;
    /** The item is physically marked as containing a low level of protein. */
    "PackagingMarkedFreeFromCode-REDUCED_PROTEIN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-REDUCED_PROTEIN'>;
    /** The item is physically marked as having a reduced amount of transfats (unsaturated). */
    "PackagingMarkedFreeFromCode-REDUCED_TRANSFAT": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-REDUCED_TRANSFAT'>;
    /** The item is physically marked as a very low amount of gluten. Very low is frequently determined through regulation for example, per EU Regulation (EC) No 41/2009 [of 20 January 2009], this is defined as containing between 20 and 100 mg/kg). */
    "PackagingMarkedFreeFromCode-VERY_LOW_GLUTEN": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-VERY_LOW_GLUTEN'>;
    /** The item is physically marked that no salt has been added when manufacturing the product but it still can contain salt that is naturally part of the ingredients, as approved by the appropriate authority of the target market. */
    "PackagingMarkedFreeFromCode-WITHOUT_ADDED_SALT": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-WITHOUT_ADDED_SALT'>;
    /** The item is physically marked that no sugar has been added when manufacturing the product but it still can contain sugars that are naturally part of the ingredients, as approved by the appropriate authority of the target market. */
    "PackagingMarkedFreeFromCode-WITHOUT_ADDED_SUGAR": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-WITHOUT_ADDED_SUGAR'>;
    /** The item is physically marked that no sweetener has been added when manufacturing the product. */
    "PackagingMarkedFreeFromCode-WITHOUT_ADDED_SWEETENER": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode-WITHOUT_ADDED_SWEETENER'>;
    "PackagingMarkedFreeFromCode": NamedNode<'https://gs1.org/voc/PackagingMarkedFreeFromCode'>;
    /** A marking that the product received recognition, endorsement, certification by following guidelines by the label issuing agency. This does not represent claims for regulatory purposes on products such as free from markings. */
    "packagingMarkedLabelAccreditation": NamedNode<'https://gs1.org/voc/packagingMarkedLabelAccreditation'>;
    /** Austria Ministry of Agriculture Organic Label, AMA Marketing licenses the AMA organic logo. Red, white and black indicates the majority of ingredients are of Austrian origin. */
    "PackagingMarkedLabelAccreditationCode-AMA_ORGANIC_SEAL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-AMA_ORGANIC_SEAL'>;
    /** Used to specify Estonia Meat in their product. */
    "PackagingMarkedLabelAccreditationCode-AUS_KAUP_ESTONIA": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-AUS_KAUP_ESTONIA'>;
    "PackagingMarkedLabelAccreditationCode-BDIH_LOGO": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BDIH_LOGO'>;
    /** The one-star Beter Leven (better life) mark indicates that the product comes from a company that cares that animals are kept according to the minimal requirements for sanitation and well-being for the cattle industry. */
    "PackagingMarkedLabelAccreditationCode-BETER_LEVEN_1_STER": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BETER_LEVEN_1_STER'>;
    /** The two-star Beter Leven (better life) mark indicates that the product comes from a company that provides for a higher well-being of animals than that established by the minimal requirements for sanitation and well-being for the cattle industry, yet the conditions are inferior to those of Biological-class products. */
    "PackagingMarkedLabelAccreditationCode-BETER_LEVEN_2_STER": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BETER_LEVEN_2_STER'>;
    /** The three-star Beter Leven (better life) mark is awarded to products that come from companies that excel in keeping animals according to top guidelines for Biological-class products. In some cases this mark is accompanied by an EKO indication. */
    "PackagingMarkedLabelAccreditationCode-BETER_LEVEN_3_STER": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BETER_LEVEN_3_STER'>;
    "PackagingMarkedLabelAccreditationCode-BIO_AUSTRIA_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BIO_AUSTRIA_LABEL'>;
    "PackagingMarkedLabelAccreditationCode-BIO_LABEL_GERMAN": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BIO_LABEL_GERMAN'>;
    "PackagingMarkedLabelAccreditationCode-BIO_SUISSE_BUD_SEAL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BIO_SUISSE_BUD_SEAL'>;
    /** The Blue Angel is awarded to companies as kind of a reward for their commitment to environmental protection. They use it to professionally promote their eco-friendly products in the market. The Blue Angel is an ecological beacon showing the consumer the way to the ecologically superior product and promotes environmentally conscious consumption. */
    "PackagingMarkedLabelAccreditationCode-BLUE_ANGEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BLUE_ANGEL'>;
    /** Bord Bia Approved - Meat Content Only applies to companies where only the meat content satisfies certain conditions detailed in the Bord Bia requirements document. */
    "PackagingMarkedLabelAccreditationCode-BORD_BIA_APPROVED_MEAT": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BORD_BIA_APPROVED_MEAT'>;
    /** The Bord Bia Approved logo is awarded to a company which has been audited by Bord Bia to verify that processes, from farm to fork, comply with the highest Quality Assurance Standards. These standards include animal welfare, traceability, environment, safety, feed, water, testing, inspection, hygiene and good manufacturing practice. Bord Bia Approved is awarded to a company where all the ingredients including meat content satisfy the Bord Bia requirements. */
    "PackagingMarkedLabelAccreditationCode-BORD_BIA_APPROVED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BORD_BIA_APPROVED'>;
    /** Bra Miljoval Bra is the ecolabel of SSNC. It is referred to as Good Environmental Choice in English. SSNC started ecolabelling. */
    "PackagingMarkedLabelAccreditationCode-BRA_MILJOVAL_LABEL_SWEDISH": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-BRA_MILJOVAL_LABEL_SWEDISH'>;
    /** Crossed grain logo is a trademark owned and administered by Coeliac. It is a worldwide symbol for safe gluten-free foods. Each country has their own Coeliac */
    "PackagingMarkedLabelAccreditationCode-CROSSED_GRAIN_SYMBOL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-CROSSED_GRAIN_SYMBOL'>;
    /** Demeter International trademark for products of certified biodynamic production. */
    "PackagingMarkedLabelAccreditationCode-DEMETER_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-DEMETER_LABEL'>;
    /** The package is physically marked with EC National Health Mark. The EC National Health Mark is the health mark for specific hygiene regulations for food of animal origin. The regulation (EC) Nr. 853/2004 of 29. April 2004 of the European Parliament on hygiene rules for food of animal origin demands that companies handling products of animal origin are authorised according to this regulation. The official body responsible for this authorisation assigns a health mark to the food producing company */
    "PackagingMarkedLabelAccreditationCode-EC_NATIONAL_HEALTH_MARK": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-EC_NATIONAL_HEALTH_MARK'>;
    /** This is a Finnish label used by the Organic union, which represents the entire Finnish organic industry, consumers and producers in a common interest group. They work as a neutral voice in various working groups and consultations, and prepare position papers and presentations. The Federation also organizes training events and professional seminars. The Organic Federation also publishes the magazine Organic. */
    "PackagingMarkedLabelAccreditationCode-ECO_LABEL_LADYBUG": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-ECO_LABEL_LADYBUG'>;
    /** ECOCERT is a certification body for sustainable development. */
    "PackagingMarkedLabelAccreditationCode-ECOCERT_CERTIFICATE": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-ECOCERT_CERTIFICATE'>;
    /** Estonian Eco Label: Ministry of Agriculture Okomark (Label of Organic Food). */
    "PackagingMarkedLabelAccreditationCode-EESTI_OKOMARK": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-EESTI_OKOMARK'>;
    /** Best Food Association of Estonia Food Industry http://www.toiduliit.ee/. An organisation that supports and promote Estonian food industry and economy, and contribute to a balanced and appropriate ethics to members of a favourable business environment for development. */
    "PackagingMarkedLabelAccreditationCode-EESTI_PARIM_TOIDUAINE": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-EESTI_PARIM_TOIDUAINE'>;
    /** This symbol stands for organic production certified by Skal that meets the requirements of the EU-regulation for organic production. Skal is the inspection body for the organic production in the Netherlands. */
    "PackagingMarkedLabelAccreditationCode-EKO": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-EKO'>;
    /** The item is physically marked with the European Union Eco label a European environmental initiative supported by the European Commission. */
    "PackagingMarkedLabelAccreditationCode-EU_ECO_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-EU_ECO_LABEL'>;
    /** New EU organic logo the EU introduced a new organic logo to ensure consumer protection and common standards. */
    "PackagingMarkedLabelAccreditationCode-EU_ORGANIC_FARMING": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-EU_ORGANIC_FARMING'>;
    /** The Fair Trade Mark certifies that products meet the social, economic and environmental International Fair trade Standards. The Fair Trade Mark is usually supported by a local Fair Trade Labelling Organization and certifies products not companies. It does not cover the companies or organizations selling the product */
    "PackagingMarkedLabelAccreditationCode-FAIR_TRADE_MARK": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-FAIR_TRADE_MARK'>;
    "PackagingMarkedLabelAccreditationCode-FALKEN": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-FALKEN'>;
    /** The heart symbol to inform the consumer at one glance that the product marked with this symbol is a preferred choice in its product group with regard to fat and sodium. Finnish Heart Association. */
    "PackagingMarkedLabelAccreditationCode-FINNISH_HEART_SYMBOL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-FINNISH_HEART_SYMBOL'>;
    /** The item is physically marked with the Forest Stewardship Council label. */
    "PackagingMarkedLabelAccreditationCode-FOREST_STEWARDSHIP_COUNCIL_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-FOREST_STEWARDSHIP_COUNCIL_LABEL'>;
    /** The item is physically marked as of genetically modified origin. */
    "PackagingMarkedLabelAccreditationCode-GMO_MARKED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-GMO_MARKED'>;
    "PackagingMarkedLabelAccreditationCode-GOODS_FROM_FINLAND_BLUE_SWAN": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-GOODS_FROM_FINLAND_BLUE_SWAN'>;
    "PackagingMarkedLabelAccreditationCode-GREEN_DOT": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-GREEN_DOT'>;
    /** The item is physically marked with the Green Restaurant Association Endorsed symbol. */
    "PackagingMarkedLabelAccreditationCode-GREEN_RESTAURANT_ASSOCIATION_ENDORSED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-GREEN_RESTAURANT_ASSOCIATION_ENDORSED'>;
    /** The item is physically marked with the Green Seal Certified symbol. */
    "PackagingMarkedLabelAccreditationCode-GREEN_SEAL_CERTIFIED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-GREEN_SEAL_CERTIFIED'>;
    /** Ireland: The Guaranteed Irish symbol makes shopping for Irish products and services a lot easier. Shoppers know that when they buy a product or service featuring the guaranteed Irish logo they are supporting Irish companies and safeguarding Irish jobs. */
    "PackagingMarkedLabelAccreditationCode-GUARANTEED_IRISH": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-GUARANTEED_IRISH'>;
    "PackagingMarkedLabelAccreditationCode-KRAV_MARK": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-KRAV_MARK'>;
    /** Allergy and Asthma Federation is a non-profit public health organisation. Our aim is to improve quality of life of the allergy and asthma patients. */
    "PackagingMarkedLabelAccreditationCode-LABEL_OF_THE_ALLERGY_AND_ASTHMA_FEDERATION": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-LABEL_OF_THE_ALLERGY_AND_ASTHMA_FEDERATION'>;
    /** The Coalition for Consumer Information on Cosmetics (CCIC) Leaping Bunny Program administers a cruelty-free standard and the internationally recognized Leaping Bunny Logo for companies producing cosmetic, personal care, and household products. The Leaping Bunny Program provides the best assurance that no new animal testing is used in any phase of product development by the company, its laboratories, or suppliers. */
    "PackagingMarkedLabelAccreditationCode-LEAPING_BUNNY": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-LEAPING_BUNNY'>;
    /** Eco-friendly product The sign eco-friendly product is designed to make environmentally friendly products on store shelves more as significant. When it comes to food shall be used for agriculture, natural farming methods. No use of mineral fertilizers, insect control and plant poisons. */
    "PackagingMarkedLabelAccreditationCode-LOODUSSOBRALIK_TOODE_ESTONIA": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-LOODUSSOBRALIK_TOODE_ESTONIA'>;
    /** Love Irish Food - a promotional label printed on the product packaging to indicate to the consumer that the food is manufactured in Ireland using Irish ingredients. */
    "PackagingMarkedLabelAccreditationCode-LOVE_IRISH_FOOD": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-LOVE_IRISH_FOOD'>;
    /** Made in Finland Products that are made in Finland Avainlippu (Key Flag) Suomalaisen Tyon */
    "PackagingMarkedLabelAccreditationCode-MADE_IN_FINLAND_FLAG_WITH_KEY": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-MADE_IN_FINLAND_FLAG_WITH_KEY'>;
    "PackagingMarkedLabelAccreditationCode-MARINE_STEWARDSHIP_COUNCIL_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-MARINE_STEWARDSHIP_COUNCIL_LABEL'>;
    /** Fair trade symbol used in the Netherlands Target Market awarded to manufacturers which contribute to improving the living and working conditions of small farmers and agricultural workers in disadvantaged regions. */
    "PackagingMarkedLabelAccreditationCode-MAX_HAVELAAR": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-MAX_HAVELAAR'>;
    /** The NATRUE Label guarantees that the products that carry it are made only with natural and organic ingredients, through soft manufacturing processes and environmentally friendly practices. The NATRUE Label is awarded by NATRUE, a non-profit organisation committed to promote and protect high standards of quality and environmental integrity. */
    "PackagingMarkedLabelAccreditationCode-NATRUE_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-NATRUE_LABEL'>;
    /** The green key hole is to be put on the healthy foods in Sweden, Denmark, and Norway within certain product groups in order to make it easier for the customers to make a healthy choice. http://www.norden.org/ */
    "PackagingMarkedLabelAccreditationCode-NYCKELHALET": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-NYCKELHALET'>;
    /** Confidence in textiles. This has been the motto of the independent test institutes of the International Oeko-Tex Association since 1992, with their tests for harmful substances according to Oeko-Tex Standard 100 for textile products of all types which pose no risk whatsoever to health. */
    "PackagingMarkedLabelAccreditationCode-OEKO_TEX_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-OEKO_TEX_LABEL'>;
    /** Luomo Sun Sign Denotes controlled organic production. The official label of the Finnish inspection authorities; owned by the Ministry of Agriculture and Forestry. */
    "PackagingMarkedLabelAccreditationCode-OFFICIAL_ECO_LABEL_SUN": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-OFFICIAL_ECO_LABEL_SUN'>;
    /** Programme for Endorsement of Forest Certification (PEFCC_ is an international non-profit, non-governmental organisation dedicated to promoting Sustainable Forest Management (SFM) through independent third-party certification */
    "PackagingMarkedLabelAccreditationCode-PEFC": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-PEFC'>;
    /** The Protected designation of origin is the name of an area, a specific place or, in exceptional cases, the name of a country, used as a designation for an agricultural product or a foodstuff, the entire product must be traditionally and ENTIRELY manufactured (prepared, processed AND produced) within the specific region and thus acquire unique properties. Protected Geographical Status (PGS) is a legal framework defined in European Union law to protect the names of regional foods. */
    "PackagingMarkedLabelAccreditationCode-PROTECTED_DESIGNATION_OF_ORIGIN": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-PROTECTED_DESIGNATION_OF_ORIGIN'>;
    /** The Protected geographical indication is the name of an area, a specific place or, in exceptional cases, the name of a country, used as a description of an agricultural product or a foodstuff, the entire product must be traditionally and at least PARTIALLY manufactured (prepared, processed OR produced) within the specific region and thus acquire unique properties. Protected Geographical Status (PGS) is a legal framework[1] defined in European Union law to protect the names of regional foods. */
    "PackagingMarkedLabelAccreditationCode-PROTECTED_GEOGRAPHICAL_INDICATION": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-PROTECTED_GEOGRAPHICAL_INDICATION'>;
    /** The item is physically marked with the Protected Harvest Certified symbol. */
    "PackagingMarkedLabelAccreditationCode-PROTECTED_HARVEST_CERTIFIED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-PROTECTED_HARVEST_CERTIFIED'>;
    /** Control IMO Organic farming is an alternative, environmentally friendly method of food production. It forbids the use of chemicals and requires production methods that respect animal welfare and do not damage the environment. The term organic can only be used on food labels in Ireland if the food product meets strict Irish and EU organic standards and is licensed by an approved certification body. */
    "PackagingMarkedLabelAccreditationCode-QUALITY_MARK_IRELAND": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-QUALITY_MARK_IRELAND'>;
    /** The item is physically marked with the Rainforest Alliance Certified symbol. */
    "PackagingMarkedLabelAccreditationCode-RAINFOREST_ALLIANCE": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-RAINFOREST_ALLIANCE'>;
    /** A symbol used in the Netherlands Target Market intended for meat based products which guarantees that the animals has been growth without the use of antibiotics. */
    "PackagingMarkedLabelAccreditationCode-SCHARRELVLEES": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-SCHARRELVLEES'>;
    /** The Soil Association Organic Symbol is a symbol used in the UK to show that products meet a strict set of organic standards that protect health, sustainability and the environment. */
    "PackagingMarkedLabelAccreditationCode-SOIL_ASSOCIATION_ORGANIC_SYMBOL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-SOIL_ASSOCIATION_ORGANIC_SYMBOL'>;
    /** In response to the urgent and pressing global call for sustainably produced palm oil, the Roundtable on Sustainable Palm Oil (RSPO) was formed in 2004 with the objective of promoting the growth and use of sustainable oil palm products through credible global standards and engagement of stakeholders. */
    "PackagingMarkedLabelAccreditationCode-SUSTAINABLE_PALM_OIL_RSPO": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-SUSTAINABLE_PALM_OIL_RSPO'>;
    /** The Swan is the Nordic environmental label. It was established by the Nordic Council of Ministers in 1989 and Denmark joined in 1997. The Swan is used in all Nordic countries, i.e. Denmark, Norway, Sweden, Finland and Iceland. */
    "PackagingMarkedLabelAccreditationCode-SVANEN": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-SVANEN'>;
    /** The item is physically marked with the Swedish Seal of Quality label which intends to guarantee the responsibility for the environment of the product. */
    "PackagingMarkedLabelAccreditationCode-SWEDISH_SEAL_OF_QUALITY": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-SWEDISH_SEAL_OF_QUALITY'>;
    /** The Traditional specialty guaranteed is a trademark for an agricultural product or a foodstuff, which has a certain feature or a set of features, setting it clearly apart from other similar products or foodstuffs belonging to the same category. The product or foodstuff must be manufactured using traditional ingredients or must be characteristic for its traditional composition, production process, or processing reflecting a traditional type of manufacturing or processing. */
    "PackagingMarkedLabelAccreditationCode-TRADITIONAL_SPECIALTY_GUARANTEED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-TRADITIONAL_SPECIALTY_GUARANTEED'>;
    /** Approved Estonian Taste - Quality/Tradition/Origin/Traceability for Estonian products. All raw materials must be 100% Estonian. Estonian Chamber of Agriculture and Commerce. */
    "PackagingMarkedLabelAccreditationCode-TUNNUSTATUD_EESTI_MAITSE": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-TUNNUSTATUD_EESTI_MAITSE'>;
    /** Approved Taste label (designed as a barn swallow) denoting Estonian origin and high quality was introduced. This label has been given to products for Food quality and safety. Estonian Chamber of Agriculture and Commerce (ECAC). */
    "PackagingMarkedLabelAccreditationCode-TUNNUSTATUD_MAITSE": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-TUNNUSTATUD_MAITSE'>;
    /** Uniquely Finnish http://www.maakuntienparhaat.fi/en/ The Uniquely Finnish label is a national quality label for small entrepreneurs. ProAgria Association of Rural Advisory Centres grants the label to qualified foodstuff, handicraft and rural tourism companies based on applications. */
    "PackagingMarkedLabelAccreditationCode-UNIQUELY_FINNISH": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-UNIQUELY_FINNISH'>;
    "PackagingMarkedLabelAccreditationCode-USDA": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-USDA'>;
    /** A certification which is intended to assure the social and environmental quality in coffee production. Coffee based products may be marked with this certification. */
    "PackagingMarkedLabelAccreditationCode-UTZ_CERTIFIED": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-UTZ_CERTIFIED'>;
    /** Grain based foods (bread, breakfast products, baking articles etc.) which have got a high content of whole grain will be puffed with a nutritional puff from the beginning of 2009: Please choose whole grain first. */
    "PackagingMarkedLabelAccreditationCode-VAELG_FULDKORN_FORST": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-VAELG_FULDKORN_FORST'>;
    /** Products that support the World Wildlife Federation. */
    "PackagingMarkedLabelAccreditationCode-WWF_PANDA_LABEL": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode-WWF_PANDA_LABEL'>;
    "PackagingMarkedLabelAccreditationCode": NamedNode<'https://gs1.org/voc/PackagingMarkedLabelAccreditationCode'>;
    /** links to details about packaging material type, quantity and thickness */
    "packagingMaterial": NamedNode<'https://gs1.org/voc/packagingMaterial'>;
    /** The quantity of the packaging material of the product. Can be weight, volume or surface, can vary by country. */
    "packagingMaterialCompositionQuantity": NamedNode<'https://gs1.org/voc/packagingMaterialCompositionQuantity'>;
    /** Information on any material used for packaging. */
    "PackagingMaterialDetails": NamedNode<'https://gs1.org/voc/PackagingMaterialDetails'>;
    /** The thickness of a packaging material. */
    "packagingMaterialThickness": NamedNode<'https://gs1.org/voc/packagingMaterialThickness'>;
    /** The materials used for the packaging of the product for example glass or plastic. */
    "packagingMaterialType": NamedNode<'https://gs1.org/voc/packagingMaterialType'>;
    "PackagingMaterialTypeCode-CERAMIC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-CERAMIC'>;
    "PackagingMaterialTypeCode-CLOTH_OR_FABRIC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-CLOTH_OR_FABRIC'>;
    "PackagingMaterialTypeCode-COMPOSITE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-COMPOSITE'>;
    "PackagingMaterialTypeCode-CORRUGATED_BOARD_DOUBLE_WALL": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-CORRUGATED_BOARD_DOUBLE_WALL'>;
    "PackagingMaterialTypeCode-CORRUGATED_BOARD_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-CORRUGATED_BOARD_OTHER'>;
    "PackagingMaterialTypeCode-CORRUGATED_BOARD_SINGLE_WALL": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-CORRUGATED_BOARD_SINGLE_WALL'>;
    "PackagingMaterialTypeCode-CORRUGATED_BOARD_TRIPLE_WALL": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-CORRUGATED_BOARD_TRIPLE_WALL'>;
    "PackagingMaterialTypeCode-FIBRE_BURLAP": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FIBRE_BURLAP'>;
    "PackagingMaterialTypeCode-FIBRE_COTTON": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FIBRE_COTTON'>;
    "PackagingMaterialTypeCode-FIBRE_FLAX": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FIBRE_FLAX'>;
    "PackagingMaterialTypeCode-FIBRE_HEMP": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FIBRE_HEMP'>;
    "PackagingMaterialTypeCode-FIBRE_JUTE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FIBRE_JUTE'>;
    "PackagingMaterialTypeCode-FIBRE_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FIBRE_OTHER'>;
    "PackagingMaterialTypeCode-FOAM": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-FOAM'>;
    "PackagingMaterialTypeCode-GLASS_COLOURED": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-GLASS_COLOURED'>;
    "PackagingMaterialTypeCode-GLASS": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-GLASS'>;
    "PackagingMaterialTypeCode-LAMINATED_CARTON": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-LAMINATED_CARTON'>;
    "PackagingMaterialTypeCode-METAL_ALUMINUM": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_ALUMINUM'>;
    "PackagingMaterialTypeCode-METAL_BRASS": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_BRASS'>;
    "PackagingMaterialTypeCode-METAL_IRON": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_IRON'>;
    "PackagingMaterialTypeCode-METAL_LEAD": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_LEAD'>;
    "PackagingMaterialTypeCode-METAL_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_OTHER'>;
    "PackagingMaterialTypeCode-METAL_STAINLESS_STEEL": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_STAINLESS_STEEL'>;
    "PackagingMaterialTypeCode-METAL_STEEL": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_STEEL'>;
    "PackagingMaterialTypeCode-METAL_TIN": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-METAL_TIN'>;
    "PackagingMaterialTypeCode-MINERAL_CALCIUM_CARBONATE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-MINERAL_CALCIUM_CARBONATE'>;
    "PackagingMaterialTypeCode-MINERAL_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-MINERAL_OTHER'>;
    "PackagingMaterialTypeCode-MINERAL_TALC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-MINERAL_TALC'>;
    "PackagingMaterialTypeCode-NATURAL_RUBBER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-NATURAL_RUBBER'>;
    "PackagingMaterialTypeCode-OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-OTHER'>;
    "PackagingMaterialTypeCode-PAPER_CORRUGATED": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PAPER_CORRUGATED'>;
    "PackagingMaterialTypeCode-PAPER_MOLDED_PULP": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PAPER_MOLDED_PULP'>;
    "PackagingMaterialTypeCode-PAPER_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PAPER_OTHER'>;
    "PackagingMaterialTypeCode-PAPER_PAPER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PAPER_PAPER'>;
    "PackagingMaterialTypeCode-PAPER_PAPERBOARD": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PAPER_PAPERBOARD'>;
    "PackagingMaterialTypeCode-PAPER_RAYON": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PAPER_RAYON'>;
    "PackagingMaterialTypeCode-PLASTIC_BIOPLASTIC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PLASTIC_BIOPLASTIC'>;
    "PackagingMaterialTypeCode-PLASTIC_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PLASTIC_OTHER'>;
    "PackagingMaterialTypeCode-PLASTIC_THERMOPLASTICS": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-PLASTIC_THERMOPLASTICS'>;
    "PackagingMaterialTypeCode-POLYMER_CELLULOSE_ACETATE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_CELLULOSE_ACETATE'>;
    "PackagingMaterialTypeCode-POLYMER_EPOXY": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_EPOXY'>;
    "PackagingMaterialTypeCode-POLYMER_EVA": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_EVA'>;
    "PackagingMaterialTypeCode-POLYMER_EVOH": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_EVOH'>;
    "PackagingMaterialTypeCode-POLYMER_HDPE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_HDPE'>;
    "PackagingMaterialTypeCode-POLYMER_LDPE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_LDPE'>;
    "PackagingMaterialTypeCode-POLYMER_LLDPE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_LLDPE'>;
    "PackagingMaterialTypeCode-POLYMER_MDPE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_MDPE'>;
    "PackagingMaterialTypeCode-POLYMER_NYLON": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_NYLON'>;
    "PackagingMaterialTypeCode-POLYMER_OTHER": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_OTHER'>;
    "PackagingMaterialTypeCode-POLYMER_PAN": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PAN'>;
    "PackagingMaterialTypeCode-POLYMER_PC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PC'>;
    "PackagingMaterialTypeCode-POLYMER_PCL": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PCL'>;
    "PackagingMaterialTypeCode-POLYMER_PE": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PE'>;
    "PackagingMaterialTypeCode-POLYMER_PEN": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PEN'>;
    "PackagingMaterialTypeCode-POLYMER_PET": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PET'>;
    "PackagingMaterialTypeCode-POLYMER_PHA": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PHA'>;
    "PackagingMaterialTypeCode-POLYMER_PLA": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PLA'>;
    "PackagingMaterialTypeCode-POLYMER_PP": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PP'>;
    "PackagingMaterialTypeCode-POLYMER_PS": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PS'>;
    "PackagingMaterialTypeCode-POLYMER_PU": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PU'>;
    "PackagingMaterialTypeCode-POLYMER_PVA": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PVA'>;
    "PackagingMaterialTypeCode-POLYMER_PVC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PVC'>;
    "PackagingMaterialTypeCode-POLYMER_PVDC": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_PVDC'>;
    "PackagingMaterialTypeCode-POLYMER_TPS": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode-POLYMER_TPS'>;
    "PackagingMaterialTypeCode": NamedNode<'https://gs1.org/voc/PackagingMaterialTypeCode'>;
    /** The process the packaging could undertake for recyclable & sustainability programs. Examples COMPOSTABLE, ENERGY_RECOVERABLE, REUSABLE. */
    "packagingRecyclingProcessType": NamedNode<'https://gs1.org/voc/packagingRecyclingProcessType'>;
    /** Packaging that can biodegrade generating a relatively homogeneous and stable humus-like substance. */
    "PackagingRecyclingProcessTypeCode-COMPOSTABLE": NamedNode<'https://gs1.org/voc/PackagingRecyclingProcessTypeCode-COMPOSTABLE'>;
    /** Packaging which allows for a net calorific gain in energy recovery operations. */
    "PackagingRecyclingProcessTypeCode-ENERGY_RECOVERABLE": NamedNode<'https://gs1.org/voc/PackagingRecyclingProcessTypeCode-ENERGY_RECOVERABLE'>;
    /** Packaging material and format which can be diverted from the waste stream through available processes and programmes and can be collected, processed and returned to use in the form of raw materials or products. */
    "PackagingRecyclingProcessTypeCode-RECYCLABLE": NamedNode<'https://gs1.org/voc/PackagingRecyclingProcessTypeCode-RECYCLABLE'>;
    /** Packaging that has been conceived and designed to accomplished within its life cycle a certain number of trips, rotations or uses for the same purpose for which it was conceived. */
    "PackagingRecyclingProcessTypeCode-REUSABLE": NamedNode<'https://gs1.org/voc/PackagingRecyclingProcessTypeCode-REUSABLE'>;
    "PackagingRecyclingProcessTypeCode": NamedNode<'https://gs1.org/voc/PackagingRecyclingProcessTypeCode'>;
    /** A code indicating the recycling scheme the packaging of this product will fall within when recycled. Applies to recyclable packaging with or without deposit. */
    "packagingRecyclingScheme": NamedNode<'https://gs1.org/voc/packagingRecyclingScheme'>;
    /** PALPA stands for Suomen Palautuspakkaus Oy. PALPA administers the recycling of beverage containers and promotes recycling in Finland. A-pullo is one of the recycling systems. PALPA is the administrator. This is a recycling system used in Finland. */
    "PackagingRecyclingSchemeCode-A_PULLO": NamedNode<'https://gs1.org/voc/PackagingRecyclingSchemeCode-A_PULLO'>;
    /** Alko inc. is an independent, entirely State-owned company. Alko is administered and supervised by the Ministry of Social Affairs and Health. They have own recycling system for alcohol products bottles called Alko. This is a recycling system used in Finland */
    "PackagingRecyclingSchemeCode-ALKO": NamedNode<'https://gs1.org/voc/PackagingRecyclingSchemeCode-ALKO'>;
    /** PALPA Standas for Suomen Palautuspakkaus Oy. PALPA administers the recycling of beverage containers and promotes recycling in Finland. EKO-pullo is one of the recycling systems PALPA is administer. This is a recycling system used in Finland. */
    "PackagingRecyclingSchemeCode-EKO_PULLO": NamedNode<'https://gs1.org/voc/PackagingRecyclingSchemeCode-EKO_PULLO'>;
    /** PALPA stands for Suomen Palautuspakkaus Oy. PALPA administers the recycling of beverage containers and promotes recycling in Finland. PALPA is on of the recycling systems PALPA is administer. This is a recycling system used in Finland. */
    "PackagingRecyclingSchemeCode-PALPA": NamedNode<'https://gs1.org/voc/PackagingRecyclingSchemeCode-PALPA'>;
    "PackagingRecyclingSchemeCode": NamedNode<'https://gs1.org/voc/PackagingRecyclingSchemeCode'>;
    /** A code depicting the shape of a package for example CONE. */
    "packagingShape": NamedNode<'https://gs1.org/voc/packagingShape'>;
    /** A relatively long, evenly shaped piece of some solid substance */
    "PackagingShapeCode-BAR": NamedNode<'https://gs1.org/voc/PackagingShapeCode-BAR'>;
    /** A spiral structure made by winding a material into a series of loops. A coil may or may not have a spindle around which the loops are formed. */
    "PackagingShapeCode-COIL": NamedNode<'https://gs1.org/voc/PackagingShapeCode-COIL'>;
    /** A cone is a three-dimensional geometric shape that tapers smoothly from a flat, round base to a point. */
    "PackagingShapeCode-CONE": NamedNode<'https://gs1.org/voc/PackagingShapeCode-CONE'>;
    /** A long shape that has a circular base and an equally-sized circular top. */
    "PackagingShapeCode-CYLINDRICAL": NamedNode<'https://gs1.org/voc/PackagingShapeCode-CYLINDRICAL'>;
    /** A plane figure that is bounded by a closed path or circuit composed of a finite sequence of equally-sized straight line segments. A polygon may have a varying number of segments or faces resulting in different configurations, for example a 5-faced polygon: pentagon, 6-faced: hexagon, 8-faced: octagon, 12-faced: dodecahedron, etc. */
    "PackagingShapeCode-POLYGON": NamedNode<'https://gs1.org/voc/PackagingShapeCode-POLYGON'>;
    /** A closed planar quadrilateral with four right angles. */
    "PackagingShapeCode-RECTANGULAR": NamedNode<'https://gs1.org/voc/PackagingShapeCode-RECTANGULAR'>;
    /** A perfectly round geometrical object in three-dimensional space, such as the shape of a round ball. Like a circle in two dimensions, a perfect sphere is completely symmetrical around its centre, with all points on the surface lying the same distance from the centre point. */
    "PackagingShapeCode-SPHERICAL": NamedNode<'https://gs1.org/voc/PackagingShapeCode-SPHERICAL'>;
    /** The result of different materials being compressed into a solid block usually of small dimensions. */
    "PackagingShapeCode-TABLET": NamedNode<'https://gs1.org/voc/PackagingShapeCode-TABLET'>;
    /** Shape is not currently specified in the list. To be used as a temporary means until a specific missing value is added to the list. */
    "PackagingShapeCode-UNSPECIFIED": NamedNode<'https://gs1.org/voc/PackagingShapeCode-UNSPECIFIED'>;
    "PackagingShapeCode": NamedNode<'https://gs1.org/voc/PackagingShapeCode'>;
    /** The dominant means used to transport, store, handle or display the product as defined by the data source. This packaging is not used to describe any manufacturing process.Recommend to use UNECE Rec 21 codes. */
    "packagingType": NamedNode<'https://gs1.org/voc/packagingType'>;
    /** Pantothenic Acid per specified nutrient basis quantity. */
    "pantothenicAcidPerNutrientBasis": NamedNode<'https://gs1.org/voc/pantothenicAcidPerNutrientBasis'>;
    /** Designates the legal entity or function directly above the organisation/party being identified in a hierarchy. This is not defaulted to the highest-level entity in the hierarchy. Only one parent organisation SHALL be associated to a single GLN. To specify other affiliated organisations, see gs1:affiliatedTo, gs1:managedBy, gs1:franchiseeOf, gs1:ownedBy. To specify an organisation/party lower in the hierarchy, see gs1:subOrganization. */
    "parentOrganization": NamedNode<'https://gs1.org/voc/parentOrganization'>;
    /** 13-digit GLN that is being used to identify a legal entity or function. If gs1:glnType is present, gs1:partyGLN SHALL only be used when gs1:GLN_TypeCode includes LEGAL_ENTITY and/or FUNCTION */
    "partyGLN": NamedNode<'https://gs1.org/voc/partyGLN'>;
    /** A link to a place where payments details are provided and/or payments can be made by the user. */
    "paymentLink": NamedNode<'https://gs1.org/voc/paymentLink'>;
    /** Payment by a pre-printed form, which has been completed by a financial institution, on which instructions are given to an account holder (a bank or building society) to pay a stated sum to a named recipient. */
    "PaymentMethod-BANK_CHEQUE": NamedNode<'https://gs1.org/voc/PaymentMethod-BANK_CHEQUE'>;
    /** The payment was originally made by bankgiro. */
    "PaymentMethod-BANK_GIRO": NamedNode<'https://gs1.org/voc/PaymentMethod-BANK_GIRO'>;
    /** Issue of a banker's draft in payment of the funds. */
    "PaymentMethod-BANKERS_DRAFT": NamedNode<'https://gs1.org/voc/PaymentMethod-BANKERS_DRAFT'>;
    /** House Credit. */
    "PaymentMethod-BOOKENTRY_CREDIT": NamedNode<'https://gs1.org/voc/PaymentMethod-BOOKENTRY_CREDIT'>;
    /** House Debit. */
    "PaymentMethod-BOOKENTRY_DEBIT": NamedNode<'https://gs1.org/voc/PaymentMethod-BOOKENTRY_DEBIT'>;
    "PaymentMethod-BOP": NamedNode<'https://gs1.org/voc/PaymentMethod-BOP'>;
    /** Payment by currency (including bills and coins) in circulation, including checking account deposits. */
    "PaymentMethod-CASH": NamedNode<'https://gs1.org/voc/PaymentMethod-CASH'>;
    /** Payment by a pre-printed form stamped with the paying bank's certification on which instructions are given to an account holder (a bank or building society) to pay a stated sum to a named recipient . */
    "PaymentMethod-CERTIFIED_CHEQUE": NamedNode<'https://gs1.org/voc/PaymentMethod-CERTIFIED_CHEQUE'>;
    /** Payment by a pre-printed form on which instructions are given to an account holder (a bank or building society) to pay a stated sum to a named recipient. */
    "PaymentMethod-CHEQUE": NamedNode<'https://gs1.org/voc/PaymentMethod-CHEQUE'>;
    /** Payment by American Express credit card */
    "PaymentMethod-CREDIT_CARD_AMEX": NamedNode<'https://gs1.org/voc/PaymentMethod-CREDIT_CARD_AMEX'>;
    /** Payment by Diners Club credit card */
    "PaymentMethod-CREDIT_CARD_DINERS_CLUB": NamedNode<'https://gs1.org/voc/PaymentMethod-CREDIT_CARD_DINERS_CLUB'>;
    /** Payment by Discover credit card */
    "PaymentMethod-CREDIT_CARD_DISCOVER": NamedNode<'https://gs1.org/voc/PaymentMethod-CREDIT_CARD_DISCOVER'>;
    /** Payment by Mastercard credit card */
    "PaymentMethod-CREDIT_CARD_MASTERCARD": NamedNode<'https://gs1.org/voc/PaymentMethod-CREDIT_CARD_MASTERCARD'>;
    /** Payment by Visa credit card */
    "PaymentMethod-CREDIT_CARD_VISA": NamedNode<'https://gs1.org/voc/PaymentMethod-CREDIT_CARD_VISA'>;
    /** Payment by means of a card issued by a bank or other financial institution. */
    "PaymentMethod-CREDIT_CARD": NamedNode<'https://gs1.org/voc/PaymentMethod-CREDIT_CARD'>;
    /** Payment by Maestro debit card */
    "PaymentMethod-DEBIT_CARD_MAESTRO": NamedNode<'https://gs1.org/voc/PaymentMethod-DEBIT_CARD_MAESTRO'>;
    /** Payment by Mastercard debit card */
    "PaymentMethod-DEBIT_CARD_MASTERCARD": NamedNode<'https://gs1.org/voc/PaymentMethod-DEBIT_CARD_MASTERCARD'>;
    /** Payment by Visa Electron debit card */
    "PaymentMethod-DEBIT_CARD_VISA_ELECTRON": NamedNode<'https://gs1.org/voc/PaymentMethod-DEBIT_CARD_VISA_ELECTRON'>;
    /** Payment by Visa debit card */
    "PaymentMethod-DEBIT_CARD_VISA": NamedNode<'https://gs1.org/voc/PaymentMethod-DEBIT_CARD_VISA'>;
    /** The amount is to be, or has been, directly debited to the customer's bank account through a bank card. */
    "PaymentMethod-DEBIT_CARD": NamedNode<'https://gs1.org/voc/PaymentMethod-DEBIT_CARD'>;
    /** A credit transaction made through the automated clearing house system */
    "PaymentMethod-ELECTRONIC_CREDIT_ACH": NamedNode<'https://gs1.org/voc/PaymentMethod-ELECTRONIC_CREDIT_ACH'>;
    /** A debit transaction made through the automated clearing house system. */
    "PaymentMethod-ELECTRONIC_DEBIT_ACH": NamedNode<'https://gs1.org/voc/PaymentMethod-ELECTRONIC_DEBIT_ACH'>;
    /** Fedwire is a real time gross settlement funds transfer system operated by the Federal Reserve Banks that enables financial institutions to electronically transfer funds between its participants. */
    "PaymentMethod-FED_WIRE_NON_REPETITIVE": NamedNode<'https://gs1.org/voc/PaymentMethod-FED_WIRE_NON_REPETITIVE'>;
    /** Repetitive Fedwire is a real time gross settlement funds transfer system operated by the Federal Reserve Banks that enables financial institutions to electronically transfer funds between its participants. Repetitive wire transfers are sent by the same party to the same recipient through the same financial institution with the same wiring instructions */
    "PaymentMethod-FED_WIRE_REPETITIVE": NamedNode<'https://gs1.org/voc/PaymentMethod-FED_WIRE_REPETITIVE'>;
    /** Payment by international wire transfer */
    "PaymentMethod-INTERNATIONAL_WIRE": NamedNode<'https://gs1.org/voc/PaymentMethod-INTERNATIONAL_WIRE'>;
    /** The financial operation is a letter of credit. */
    "PaymentMethod-LETTER_OF_CREDIT": NamedNode<'https://gs1.org/voc/PaymentMethod-LETTER_OF_CREDIT'>;
    /** Online payment via Apple Pay */
    "PaymentMethod-ONLINE_PAYMENT_APPLE_PAY": NamedNode<'https://gs1.org/voc/PaymentMethod-ONLINE_PAYMENT_APPLE_PAY'>;
    /** Online payment via Google Wallet */
    "PaymentMethod-ONLINE_PAYMENT_GOOGLE_WALLET": NamedNode<'https://gs1.org/voc/PaymentMethod-ONLINE_PAYMENT_GOOGLE_WALLET'>;
    /** Online payment via PayPal */
    "PaymentMethod-ONLINE_PAYMENT_PAYPAL": NamedNode<'https://gs1.org/voc/PaymentMethod-ONLINE_PAYMENT_PAYPAL'>;
    /** Payment by online payment mechanisms */
    "PaymentMethod-ONLINE_PAYMENT": NamedNode<'https://gs1.org/voc/PaymentMethod-ONLINE_PAYMENT'>;
    /** The financial operation has been done by postgiro. */
    "PaymentMethod-POSTGIRO": NamedNode<'https://gs1.org/voc/PaymentMethod-POSTGIRO'>;
    /** Payment by wire transfer credit */
    "PaymentMethod-WIRE_TRANSFER_CREDIT": NamedNode<'https://gs1.org/voc/PaymentMethod-WIRE_TRANSFER_CREDIT'>;
    /** Payment by wire transfer debit */
    "PaymentMethod-WIRE_TRANSFER_DEBIT": NamedNode<'https://gs1.org/voc/PaymentMethod-WIRE_TRANSFER_DEBIT'>;
    /** A code indicating an accepted method of payment */
    "PaymentMethod": NamedNode<'https://gs1.org/voc/PaymentMethod'>;
    /** The type of payment term expressed as a code, for example Discount. */
    "paymentTerms": NamedNode<'https://gs1.org/voc/paymentTerms'>;
    /** The percentage of alcohol contained in product. */
    "percentageOfAlcoholByVolume": NamedNode<'https://gs1.org/voc/percentageOfAlcoholByVolume'>;
    /** Phosphorus per specified nutrient basis quantity. */
    "phosphorusPerNutrientBasis": NamedNode<'https://gs1.org/voc/phosphorusPerNutrientBasis'>;
    /** The name of a physical place. To specify the name of a digital location, see gs1:digitalLocationName. */
    "physicalLocationName": NamedNode<'https://gs1.org/voc/physicalLocationName'>;
    /** A link to information specifically about the identified item, typically operated by the brand owner or a retailer of the product and aimed at consumers. It may include links to further information, product description, specifications etc. */
    "pip": NamedNode<'https://gs1.org/voc/pip'>;
    /** Entities that have a somewhat fixed, physical location. */
    "Place": NamedNode<'https://gs1.org/voc/Place'>;
    /** A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical. */
    "polygon": NamedNode<'https://gs1.org/voc/polygon'>;
    /** Polyols per specified nutrient basis quantity. */
    "polyolsPerNutrientBasis": NamedNode<'https://gs1.org/voc/polyolsPerNutrientBasis'>;
    /** Polyunsaturated fat per specified nutrient basis quantity. */
    "polyunsaturatedFatPerNutrientBasis": NamedNode<'https://gs1.org/voc/polyunsaturatedFatPerNutrientBasis'>;
    /** The location at which a particular organization or person may be found or reached. */
    "PostalAddress": NamedNode<'https://gs1.org/voc/PostalAddress'>;
    /** Text specifying the postal code for an address. */
    "postalCode": NamedNode<'https://gs1.org/voc/postalCode'>;
    /** The name of the recipient expressed in text. Note that this may be different than gs1:OrganizationName. */
    "postalName": NamedNode<'https://gs1.org/voc/postalName'>;
    /** The number that identifies a PO box. A PO box is a box in a post office or other postal service location assigned to an organization where postal items may be kept. */
    "postOfficeBoxNumber": NamedNode<'https://gs1.org/voc/postOfficeBoxNumber'>;
    /** Potassium per specified nutrient basis quantity. */
    "potassiumPerNutrientBasis": NamedNode<'https://gs1.org/voc/potassiumPerNutrientBasis'>;
    /** The rate of doing work or rate of production, transfer or consumption of energy; the amount of energy transferred or converted per unit time.  SI Units: watt */
    "Power": NamedNode<'https://gs1.org/voc/Power'>;
    /** Code specifying the preparation state of the product for which the nutrient information is valid. PREPARED, UNPREPARED. */
    "preparationCode": NamedNode<'https://gs1.org/voc/preparationCode'>;
    /** Specifies additional precautions to be taken before preparation or consumption of the product. */
    "preparationConsumptionPrecautions": NamedNode<'https://gs1.org/voc/preparationConsumptionPrecautions'>;
    /** Links to information about how to prepare a specific Food/Beverage/Tobacco product. */
    "preparationInformation": NamedNode<'https://gs1.org/voc/preparationInformation'>;
    /** Free text providing instructions on how to prepare the product before serving. */
    "preparationInstructions": NamedNode<'https://gs1.org/voc/preparationInstructions'>;
    /** The state of the product after it has been separated from any liquid within the package. For example, a can of apricots in syrup would have a different nutritional composition if the apricots are consumed with the syrup rather than if the syrup is drained before consuming the apricots (because of the high sugar and energy content of the syrup). */
    "PreparationTypeCode-AS_DRAINED": NamedNode<'https://gs1.org/voc/PreparationTypeCode-AS_DRAINED'>;
    /** Cooking food in an oven by dry heat applied evenly throughout the oven */
    "PreparationTypeCode-BAKE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BAKE'>;
    /** Method of cooking meat with the heat and hot gasses of a fire */
    "PreparationTypeCode-BARBECUE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BARBECUE'>;
    /** Food preparation wherein the food substance is rapidly plunged into boiling water and then removed after a brief, timed interval and then plunged into iced water or placed under cold running water */
    "PreparationTypeCode-BLANCH": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BLANCH'>;
    /** Baking a pie crust or other pastry without the filling */
    "PreparationTypeCode-BLIND_BAKE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BLIND_BAKE'>;
    /** Cooking food in boiling water, or other water-based liquid such as stock or milk */
    "PreparationTypeCode-BOIL": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BOIL'>;
    /** Cooking with moist heat, typically in a covered pot with a small amount of liquid */
    "PreparationTypeCode-BRAISE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BRAISE'>;
    /** Cooking food with high heat with the heat applied directly to the food, most commonly from above. Heat transfer to the food is primarily via radiant heat */
    "PreparationTypeCode-BROIL": NamedNode<'https://gs1.org/voc/PreparationTypeCode-BROIL'>;
    /** Cooking method whereby food is submerged in hot oil or fat. */
    "PreparationTypeCode-DEEP_FRY": NamedNode<'https://gs1.org/voc/PreparationTypeCode-DEEP_FRY'>;
    /** Cooking technique to prepare delicate food such as bird nests, shark fins etc. The food is covered with water and put in a covered ceramic jar */
    "PreparationTypeCode-DOUBLE_STEAM": NamedNode<'https://gs1.org/voc/PreparationTypeCode-DOUBLE_STEAM'>;
    /** Convert the product from room temperature to a frozen state.Simple */
    "PreparationTypeCode-FREEZE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-FREEZE'>;
    /** Cooking of food in fat. */
    "PreparationTypeCode-FRY": NamedNode<'https://gs1.org/voc/PreparationTypeCode-FRY'>;
    /** Form of cooking where the food is fried with its own fat. */
    "PreparationTypeCode-GRIDDLE_FRY": NamedNode<'https://gs1.org/voc/PreparationTypeCode-GRIDDLE_FRY'>;
    /** Form of cooking that involves direct heat. The definition varies widely by region and culture */
    "PreparationTypeCode-GRILL": NamedNode<'https://gs1.org/voc/PreparationTypeCode-GRILL'>;
    /** Prepare the item by simply heating or warming to a desired temperature or visual state prior to serving */
    "PreparationTypeCode-HEAT_AND_SERVE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-HEAT_AND_SERVE'>;
    /** Cooking food by employing microwave radiation */
    "PreparationTypeCode-MICROWAVE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-MICROWAVE'>;
    /** Form of frying characterised by the use of less cooking oil than deep frying */
    "PreparationTypeCode-PAN_FRY": NamedNode<'https://gs1.org/voc/PreparationTypeCode-PAN_FRY'>;
    /** Cooking food by gently simmering food in liquid, generally water, stock or wine */
    "PreparationTypeCode-POACH": NamedNode<'https://gs1.org/voc/PreparationTypeCode-POACH'>;
    /** The state of the product after preparation (e.g. after adding milk or water). */
    "PreparationTypeCode-PREPARED": NamedNode<'https://gs1.org/voc/PreparationTypeCode-PREPARED'>;
    /** Method of cooking in a sealed vessel that does not permit air or liquids to escape below a preset pressure */
    "PreparationTypeCode-PRESSURE_COOK": NamedNode<'https://gs1.org/voc/PreparationTypeCode-PRESSURE_COOK'>;
    /** Meat and cooking oil are brought to high temperatures while pressure is held high enough that the water within is prevented from boiling off */
    "PreparationTypeCode-PRESSURE_FRY": NamedNode<'https://gs1.org/voc/PreparationTypeCode-PRESSURE_FRY'>;
    /** No Preparation. The product is ready for use after being taken out of the packaging (if packaging exists) without the need of any further action prior to consumption or use */
    "PreparationTypeCode-READY_TO_DRINK": NamedNode<'https://gs1.org/voc/PreparationTypeCode-READY_TO_DRINK'>;
    /** Besides unpacking no additional preparation required. */
    "PreparationTypeCode-READY_TO_EAT": NamedNode<'https://gs1.org/voc/PreparationTypeCode-READY_TO_EAT'>;
    /** Restore a dry or concentrated food to its original strength or consistency by adding water. */
    "PreparationTypeCode-RECONSTITUTE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-RECONSTITUTE'>;
    /** Convert the product from room temperature to a chilled state. */
    "PreparationTypeCode-REFRIGERATE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-REFRIGERATE'>;
    /** Cooking method that uses dry heat, whether an open flame, oven, or other heat source. */
    "PreparationTypeCode-ROAST": NamedNode<'https://gs1.org/voc/PreparationTypeCode-ROAST'>;
    /** Style of roasting where meat is skewered on a spit and revolves over a flame */
    "PreparationTypeCode-ROTISSERIE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-ROTISSERIE'>;
    /** Cooking food using a small amount of fat in a shallow pan over relatively high heat */
    "PreparationTypeCode-SAUTE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-SAUTE'>;
    /** Technique used in grilling, roasting, braising, sauteing, etc. That cooks the surface of the food (usually meat, poultry or fish) at high temperature so that a caramelised crust forms */
    "PreparationTypeCode-SEAR": NamedNode<'https://gs1.org/voc/PreparationTypeCode-SEAR'>;
    /** Cook food by heating it in water kept just below the boiling point (same as coddling) */
    "PreparationTypeCode-SIMMER": NamedNode<'https://gs1.org/voc/PreparationTypeCode-SIMMER'>;
    /** Process of curing, cooking, or seasoning food by exposing it for long periods of time to the smoke from a wood fire */
    "PreparationTypeCode-SMOKE": NamedNode<'https://gs1.org/voc/PreparationTypeCode-SMOKE'>;
    /** Cooking by first boiling the water so it will evaporate into steam, then the steam will carry heat to the food, thus achieving heating the food */
    "PreparationTypeCode-STEAM": NamedNode<'https://gs1.org/voc/PreparationTypeCode-STEAM'>;
    /** Preparing meat cut into smaller pieces or cubes by simmering it in liquid, usually together with vegetables */
    "PreparationTypeCode-STEW": NamedNode<'https://gs1.org/voc/PreparationTypeCode-STEW'>;
    /** Chinese cooking technique used because of its fast cooking speed */
    "PreparationTypeCode-STIR_FRY": NamedNode<'https://gs1.org/voc/PreparationTypeCode-STIR_FRY'>;
    /** Convert the product from a frozen state to a chilled or room temperature state. */
    "PreparationTypeCode-THAW": NamedNode<'https://gs1.org/voc/PreparationTypeCode-THAW'>;
    /** The initial state of the product. */
    "PreparationTypeCode-UNPREPARED": NamedNode<'https://gs1.org/voc/PreparationTypeCode-UNPREPARED'>;
    /** Unknown, not applicable */
    "PreparationTypeCode-UNSPECIFIED": NamedNode<'https://gs1.org/voc/PreparationTypeCode-UNSPECIFIED'>;
    /** A code indicating a method of preparation of a food or beverage product */
    "PreparationTypeCode": NamedNode<'https://gs1.org/voc/PreparationTypeCode'>;
    /** Code indicating the preservation technique used to preserve the product from deterioration, for example, BRINING. */
    "preservationTechnique": NamedNode<'https://gs1.org/voc/preservationTechnique'>;
    /** Dropping pH of food */
    "PreservationTechniqueCode-ACIDIFICATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-ACIDIFICATION'>;
    /** Treatment of food by adding alcohol in order to preserve the product */
    "PreservationTechniqueCode-ALCOHOL_CURING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-ALCOHOL_CURING'>;
    /** Raw Milk (without heat treatment) */
    "PreservationTechniqueCode-ATTESTED_MILK": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-ATTESTED_MILK'>;
    /** Cooking */
    "PreservationTechniqueCode-BOILING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-BOILING'>;
    /** Water saturating or strongly impregnating with salt */
    "PreservationTechniqueCode-BRINING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-BRINING'>;
    /** Preserved in a sealed airtight container, usually made of tin-coated iron */
    "PreservationTechniqueCode-CANNING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-CANNING'>;
    /** To smoke the food at between 70 degrees to 90 degrees F. */
    "PreservationTechniqueCode-COLD_SMOKE_CURING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-COLD_SMOKE_CURING'>;
    /** Keep from harm or damage */
    "PreservationTechniqueCode-CONSERVE": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-CONSERVE'>;
    /** To remove water from food */
    "PreservationTechniqueCode-DEHYDRATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-DEHYDRATION'>;
    /** Making with moisture having evaporated, drained away */
    "PreservationTechniqueCode-DRYING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-DRYING'>;
    /** Any of a group of chemical reactions induced by living or nonliving ferments that split complex organic compounds into relatively simple substance */
    "PreservationTechniqueCode-FERMENTATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-FERMENTATION'>;
    /** Preserving food by freezing and then drying in a vacuum */
    "PreservationTechniqueCode-FREEZE_DRYING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-FREEZE_DRYING'>;
    /** Turning into ice or another solid by cold */
    "PreservationTechniqueCode-FREEZING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-FREEZING'>;
    /** Legally also pasteurisation, MHD for longer (about 2 to 3 weeks), ESL-milk */
    "PreservationTechniqueCode-HIGH_TEMPERATURE_TREATED_MILK": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-HIGH_TEMPERATURE_TREATED_MILK'>;
    /** Hot-smoking partially or totally cooks the food by treating it at temperatures ranging from 100 degrees to 190 degrees F. */
    "PreservationTechniqueCode-HOT_SMOKE_CURING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-HOT_SMOKE_CURING'>;
    /** To convert into an ion or ions */
    "PreservationTechniqueCode-IONISATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-IONISATION'>;
    /** Food irradiation is the process of exposing food to ionising radiation in order to disinfest, sterilise, or preserve food. */
    "PreservationTechniqueCode-IRRADIATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-IRRADIATION'>;
    /** Partially sterilisation by heating */
    "PreservationTechniqueCode-PASTEURISATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-PASTEURISATION'>;
    /** Freezing (food) rapidly so as to preserve its qualities */
    "PreservationTechniqueCode-QUICK_FREEZING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-QUICK_FREEZING'>;
    /** Preserving by using a salt brine */
    "PreservationTechniqueCode-SALT_CURING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-SALT_CURING'>;
    /** Low temperature long time cooking under vacuum */
    "PreservationTechniqueCode-SOUS_VIDE": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-SOUS_VIDE'>;
    /** A process that effectively kills or eliminates transmissibleagents (such as fungi, bacteria, viruses, spore forms, etc.). */
    "PreservationTechniqueCode-STERILISATION": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-STERILISATION'>;
    /** Treatment of food by adding sugar in order to preserve the product */
    "PreservationTechniqueCode-SUGAR_CURING": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-SUGAR_CURING'>;
    /** Ultra heat treated (especially for milk) */
    "PreservationTechniqueCode-ULTRA_HIGH_TEMPERATURE": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-ULTRA_HIGH_TEMPERATURE'>;
    /** Packed with a gas with protective proprieties */
    "PreservationTechniqueCode-UNDER_MODIFIED_ATMOSPHERE": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-UNDER_MODIFIED_ATMOSPHERE'>;
    /** Sealed after the partial removal of air */
    "PreservationTechniqueCode-VACUUM_PACKED": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode-VACUUM_PACKED'>;
    "PreservationTechniqueCode": NamedNode<'https://gs1.org/voc/PreservationTechniqueCode'>;
    /** The perpendicular force per unit area acting on a material and tending to change its dimensions.  SI Units: pascal, newton per square metre */
    "Pressure": NamedNode<'https://gs1.org/voc/Pressure'>;
    /** Provides a price value as a floating-point numeric value that is qualified by the corresponding currency. See also gs1:priceCurrency. The price value indicates the unit price unless the property gs1:eligibleQuantity is specified and indicates multiple units */
    "price": NamedNode<'https://gs1.org/voc/price'>;
    /** A string value indicating a currency from ISO 4217 for example USD . */
    "priceCurrency": NamedNode<'https://gs1.org/voc/priceCurrency'>;
    /** The price related to an offer. If the offer is a multi-buy offer for a quantity of product greater than one unit, this should be indicated using the property gs1:eligibleQuantity */
    "priceSpecification": NamedNode<'https://gs1.org/voc/priceSpecification'>;
    /** A structured value representing a monetary amount, consisting of a value and currency code. */
    "PriceSpecification": NamedNode<'https://gs1.org/voc/PriceSpecification'>;
    /** A product that is similar to the current product but is not exact match. Same form fit function, e.g. same product different colour, different package size, better quality. */
    "primaryAlternateProduct": NamedNode<'https://gs1.org/voc/primaryAlternateProduct'>;
    /** Links to the organisation(s) that designate this place as its/their primary location. Property SHOULD be applied to a specific sub-location, rather than a main location, wherever possible. */
    "primaryLocationOf": NamedNode<'https://gs1.org/voc/primaryLocationOf'>;
    /** Any item (product or service) upon which there is a need to retrieve pre-defined information and that may be priced, or ordered, or invoiced at any point in any supply chain. */
    "Product": NamedNode<'https://gs1.org/voc/Product'>;
    /** An understandable and useable description of a product using brand and other descriptors. This attribute is filled with as little abbreviation as possible, while keeping to a reasonable length.  This should be a meaningful description of the product with full spelling to facilitate message processing. Retailers can use this description as the base to fully understand the brand, flavour, scent etc. of the specific product, in order to accurately create a product description as needed for their internal systems. Examples: XYZ Brand Base Invisible Solid Deodorant AP Stick Spring Breeze. */
    "productDescription": NamedNode<'https://gs1.org/voc/productDescription'>;
    /** Element for consumer facing marketing content to describe the key features or benefits of the style suitable for display purposes. */
    "productFeatureBenefit": NamedNode<'https://gs1.org/voc/productFeatureBenefit'>;
    /** The physical form or shape of the product. Used, for example, in pharmaceutical industry to indicate the formulation of the product. Defines the form the product takes and is distinct from the form of the packaging. */
    "productFormDescription": NamedNode<'https://gs1.org/voc/productFormDescription'>;
    /** Additional means to the Global Trade Item Number to identify a product. */
    "productID": NamedNode<'https://gs1.org/voc/productID'>;
    /** The production date is the production or assembly date determined by the manufacturer. The date may refer to the trade item itself or to items contained. */
    "productionDate": NamedNode<'https://gs1.org/voc/productionDate'>;
    /** The date and time of production (or assembly). The date and time of production is determined by the manufacturer. The date and time may refer to the trade item itself or to the items contained. */
    "productionDateTime": NamedNode<'https://gs1.org/voc/productionDateTime'>;
    /** Free text assigned by the manufacturer to describe the production variant. Examples are: package series X, package series Y. */
    "productionVariantDescription": NamedNode<'https://gs1.org/voc/productionVariantDescription'>;
    /** The start date of a production variant. The variant applies to products having a date mark (a best before date or expiration date) on the package that comes on or after the effective date. */
    "productionVariantEffectiveDateTime": NamedNode<'https://gs1.org/voc/productionVariantEffectiveDateTime'>;
    /** Marketing message associated with the product. Consumer-friendly marketing detailed description of the product. */
    "productMarketingMessage": NamedNode<'https://gs1.org/voc/productMarketingMessage'>;
    /** Consumer friendly short description of the product suitable for compact presentation. */
    "productName": NamedNode<'https://gs1.org/voc/productName'>;
    /** A name, used by a Brand Owner, that span multiple consumer categories or uses. E.g. (Waist Watchers). */
    "productRange": NamedNode<'https://gs1.org/voc/productRange'>;
    /** This term has been deprecated. Please use gs1:sustainabilityInfo instead. */
    "productSustainabilityInfo": NamedNode<'https://gs1.org/voc/productSustainabilityInfo'>;
    /** Product quantity after preparation. This can differ based on productYieldType */
    "productYield": NamedNode<'https://gs1.org/voc/productYield'>;
    /** A grouping of properties related to the yield of a food or beverage product according to a specified type of preparation. */
    "ProductYieldDetails": NamedNode<'https://gs1.org/voc/ProductYieldDetails'>;
    /** Code indicating the type of yield measurement specified in productYield. Examples: AFTER_DILUTION, DRAINED_WEIGHT. */
    "productYieldType": NamedNode<'https://gs1.org/voc/productYieldType'>;
    /** Weight or volume of food product after it has been prepared. */
    "ProductYieldTypeCode-AFTER_COOKING": NamedNode<'https://gs1.org/voc/ProductYieldTypeCode-AFTER_COOKING'>;
    /** Volume of food product after a fluid has been added. */
    "ProductYieldTypeCode-AFTER_DILUTION": NamedNode<'https://gs1.org/voc/ProductYieldTypeCode-AFTER_DILUTION'>;
    /** Weight of food product after the fluid in which the food product was preserved has been removed. */
    "ProductYieldTypeCode-DRAINED_WEIGHT": NamedNode<'https://gs1.org/voc/ProductYieldTypeCode-DRAINED_WEIGHT'>;
    /** Product yield type is unknown or irrelevant */
    "ProductYieldTypeCode-UNSPECIFIED": NamedNode<'https://gs1.org/voc/ProductYieldTypeCode-UNSPECIFIED'>;
    "ProductYieldTypeCode": NamedNode<'https://gs1.org/voc/ProductYieldTypeCode'>;
    /** Indication of range in percent of the given cooking / roasting loss. Percentage that the actual weight of the product differs upward or downward from the average or estimated product yield. */
    "productYieldVariationPercentage": NamedNode<'https://gs1.org/voc/productYieldVariationPercentage'>;
    /** A link to a promotion. */
    "promotion": NamedNode<'https://gs1.org/voc/promotion'>;
    /** Protein per specified nutrient basis quantity. */
    "proteinPerNutrientBasis": NamedNode<'https://gs1.org/voc/proteinPerNutrientBasis'>;
    /** Free text description of the region or place the product originates from. This is to be specifically used to specify areas such as cities, mountain ranges, regions. Examples: Made in the Thuringen Mountains, Made in Paris, From the Napa Valley. */
    "provenanceStatement": NamedNode<'https://gs1.org/voc/provenanceStatement'>;
    /** A link to information about where supplies or accessories for the item can be purchased or ordered. */
    "purchaseSuppliesOrAccessories": NamedNode<'https://gs1.org/voc/purchaseSuppliesOrAccessories'>;
    /** If specified, the discount is only available when purchasing a product from one of the brand names specified via this property. */
    "qualifyingBrandName": NamedNode<'https://gs1.org/voc/qualifyingBrandName'>;
    /** If specified, the discount is only available when purchasing a product whose Global Product Classification (GPC) brick value appears in the list specified via this property. */
    "qualifyingGPCs": NamedNode<'https://gs1.org/voc/qualifyingGPCs'>;
    /** If specified, the discount is only available when purchasing a product from categories specified in this free-form text field. */
    "qualifyingProductCategoryDescription": NamedNode<'https://gs1.org/voc/qualifyingProductCategoryDescription'>;
    /** If specified, the discount is only available when purchasing a product whose product classification (other than GPC) appears in the list specified via this property. This property specifies a product classification other than GPC. */
    "qualifyingProductClassificationCode": NamedNode<'https://gs1.org/voc/qualifyingProductClassificationCode'>;
    /** If specified, the discount is only available when purchasing a product whose GTIN appears in the list specified via this property. */
    "qualifyingProductGTINs": NamedNode<'https://gs1.org/voc/qualifyingProductGTINs'>;
    /** If specified, the discount is only available when purchasing a product from one of the sub-brand names (specified product ranges for a given brand) specified via this property. */
    "qualifyingSubBrandName": NamedNode<'https://gs1.org/voc/qualifyingSubBrandName'>;
    /** A point value or interval for product characteristics and other purposes. A unit of measurement is also specified. */
    "QuantitativeValue": NamedNode<'https://gs1.org/voc/QuantitativeValue'>;
    /** A link to a description of the key features needed to be understood to begin using the item or interacting with something new. */
    "quickStartGuide": NamedNode<'https://gs1.org/voc/quickStartGuide'>;
    /** The total power emitted, received or passing in the form of electromagnetic radiation; a measure of electromagnetic energy per unit time.  SI Units: watt */
    "RadiantFlux": NamedNode<'https://gs1.org/voc/RadiantFlux'>;
    /** The radiant flux per unit solid angle emitted by a point source.  SI Units: watt / steradian */
    "RadiantIntensity": NamedNode<'https://gs1.org/voc/RadiantIntensity'>;
    /** The rate of spontaneous disintegration or decay of certain natural heavy elements, accompanied by alpha-rays, beta-rays or gamma-rays.  SI Units: becquerel */
    "Radioactivity": NamedNode<'https://gs1.org/voc/Radioactivity'>;
    /** A link to information about whether the product has been recalled or not, typically an API. */
    "recallStatus": NamedNode<'https://gs1.org/voc/recallStatus'>;
    /** A link to a recipe website. */
    "recipeInfo": NamedNode<'https://gs1.org/voc/recipeInfo'>;
    /** Link to a file or website containing additional information on product. */
    "referencedFile": NamedNode<'https://gs1.org/voc/referencedFile'>;
    /** Provides URL and other information on a referenced electronic file. */
    "ReferencedFileDetails": NamedNode<'https://gs1.org/voc/ReferencedFileDetails'>;
    /** The date upon which the target of this external link ceases to be effective for use. */
    "referencedFileEffectiveEndDateTime": NamedNode<'https://gs1.org/voc/referencedFileEffectiveEndDateTime'>;
    /** The date upon which the target of this external link begins to be effective for use. */
    "referencedFileEffectiveStartDateTime": NamedNode<'https://gs1.org/voc/referencedFileEffectiveStartDateTime'>;
    /** The size of the file as it is stored in an uncompressed format. */
    "referencedFileSize": NamedNode<'https://gs1.org/voc/referencedFileSize'>;
    /** A code indicating the purpose or role of file (not a MIME type) that is being referenced, for example PRODUCT_LABEL_IMAGE. This code is used when the purpose of a file is not specified in the property. */
    "referencedFileType": NamedNode<'https://gs1.org/voc/referencedFileType'>;
    /** Link to a website or file containing a diet certificate granted to the product. */
    "ReferencedFileTypeCode-DIET_CERTIFICATE": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-DIET_CERTIFICATE'>;
    /** Link to a document or text file containing product information. Examples of this type could be an instruction manual, assembly guide, or warranty document. */
    "ReferencedFileTypeCode-DOCUMENT": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-DOCUMENT'>;
    "ReferencedFileTypeCode-GROUP_CHARACTERISTIC_SHEET": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-GROUP_CHARACTERISTIC_SHEET'>;
    /** Link to a file containing the Manufacturer or Brand Logo(s) associated with the product. */
    "ReferencedFileTypeCode-LOGO": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-LOGO'>;
    /** Link to a file with product information associated with selling a product or service. */
    "ReferencedFileTypeCode-MARKETING_INFORMATION": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-MARKETING_INFORMATION'>;
    /** Link to an image of an item out of its packaging and, if necessary, assembled ready for use by the end user. This type of file is subject the current version of the GDSN Product Image Specification Standard. */
    "ReferencedFileTypeCode-OUT_OF_PACKAGE_IMAGE": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-OUT_OF_PACKAGE_IMAGE'>;
    /** Link to a file illustrating how and where retail products should be displayed. */
    "ReferencedFileTypeCode-PLANOGRAM": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-PLANOGRAM'>;
    /** Link to a file containing a visual representation of the product label. */
    "ReferencedFileTypeCode-PRODUCT_LABEL_IMAGE": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-PRODUCT_LABEL_IMAGE'>;
    /** Link to a file containing the product's Safety Data Sheet (SDS). This file can be either an image or a document */
    "ReferencedFileTypeCode-SAFETY_DATA_SHEET": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-SAFETY_DATA_SHEET'>;
    /** A link to a summary sheet document that is available to workers to understand how to deal with chemicals in an emergency situation. */
    "ReferencedFileTypeCode-SAFETY_SUMMARY_SHEET": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-SAFETY_SUMMARY_SHEET'>;
    /** Identifies the reference to an external description of a product. The link (e.g. URL) to the external description. will be in the appropriate attribute */
    "ReferencedFileTypeCode-TRADE_ITEM_DESCRIPTION": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-TRADE_ITEM_DESCRIPTION'>;
    /** Link to a file containing a video clip which is relevant to the product. Examples are commercials, trailers, or instructional/ how to use video files. */
    "ReferencedFileTypeCode-VIDEO": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-VIDEO'>;
    /** Link to a file with information associated with any guarantee given by a company stating that a product is reliable and free from known defects and that the seller will, without charge, repair or replace defective parts within a given time limit and under certain conditions. */
    "ReferencedFileTypeCode-WARRANTY_INFORMATION": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-WARRANTY_INFORMATION'>;
    /** Link to a website containing product or manufacturer information. */
    "ReferencedFileTypeCode-WEBSITE": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode-WEBSITE'>;
    "ReferencedFileTypeCode": NamedNode<'https://gs1.org/voc/ReferencedFileTypeCode'>;
    /** Simple text string that refers to a resource on the internet, URLs may refer to documents, resources, people, etc. */
    "referencedFileURL": NamedNode<'https://gs1.org/voc/referencedFileURL'>;
    /** A link to an entry point for registering ownership of a product including for warranty purposes. */
    "registerProduct": NamedNode<'https://gs1.org/voc/registerProduct'>;
    /** A link to an entry in a register, such as a business register or register of locations. Such registers may act as alternative identifiers, such as official company numbers, LEIs, other location identifiers etc. */
    "registryEntry": NamedNode<'https://gs1.org/voc/registryEntry'>;
    /** The prescribed, regulated or generic product name or denomination that describes the true nature of the product. For example for a food product in order to distinguish it from other foods according to country specific regulations. */
    "regulatedProductName": NamedNode<'https://gs1.org/voc/regulatedProductName'>;
    /** Indicates, with reference to the product branding, labelling or packaging whether a food product which is ready to eat can be reheated if required prior to consumption. */
    "reheatingClaim": NamedNode<'https://gs1.org/voc/reheatingClaim'>;
    /** The organisation(s) associated with a place. */
    "relatedOrganization": NamedNode<'https://gs1.org/voc/relatedOrganization'>;
    /** A link to any video, or document that has an embedded video, that describes or relates to the identified item, organisation, or location in some way. */
    "relatedVideo": NamedNode<'https://gs1.org/voc/relatedVideo'>;
    /** The ratio of the partial pressure of water vapour in an an air-water mixture to the saturated vapour pressure of water at a prescribed temperature.  Typically expressed as a percentage. */
    "RelativeHumidity": NamedNode<'https://gs1.org/voc/RelativeHumidity'>;
    /** Links to the successor organisation that is used in place of a previous organisation */
    "replacedByOrganization": NamedNode<'https://gs1.org/voc/replacedByOrganization'>;
    /** Links to the successor location that is used in place of a previous location */
    "replacedByPlace": NamedNode<'https://gs1.org/voc/replacedByPlace'>;
    /** The product which permanently replaces the current product. This product is sent in the record for the original item that is being replaced. */
    "replacedByProduct": NamedNode<'https://gs1.org/voc/replacedByProduct'>;
    /** Links to the previous organisation that this organisation replaces */
    "replacedOrganization": NamedNode<'https://gs1.org/voc/replacedOrganization'>;
    /** Links to the previous location that this location replaces */
    "replacedPlace": NamedNode<'https://gs1.org/voc/replacedPlace'>;
    /** Indicates the product identification of an item that is being permanently replaced by this product. */
    "replacedProduct": NamedNode<'https://gs1.org/voc/replacedProduct'>;
    /** The ratio of the potential difference across an electrical component to the current passing through it. It is a measure of the opposition to the flow of electric charge. The real part of the impedance, characterised by the dissipation of energy as opposed to its storage.  SI Units: ohm */
    "Resistance": NamedNode<'https://gs1.org/voc/Resistance'>;
    /** A measure of how strongly a material resists the flow of electric current. The electric field required to achieve unit current density flowing through the material.  SI Units: ohm metre */
    "Resistivity": NamedNode<'https://gs1.org/voc/Resistivity'>;
    /** Text further specifying the area of responsibility of the trade contact. */
    "responsibility": NamedNode<'https://gs1.org/voc/responsibility'>;
    /** Links to the place(s) for which this organisation is responsible. */
    "responsibleForLocation": NamedNode<'https://gs1.org/voc/responsibleForLocation'>;
    /** Links to the organisation that is directly responsible for this place. */
    "responsibleOrganization": NamedNode<'https://gs1.org/voc/responsibleOrganization'>;
    /** The monetary amount for the individual returnable package. */
    "returnablePackageDepositAmount": NamedNode<'https://gs1.org/voc/returnablePackageDepositAmount'>;
    /** Details of the deposit for returnable packaging for a product. */
    "ReturnablePackageDepositDetails": NamedNode<'https://gs1.org/voc/ReturnablePackageDepositDetails'>;
    /** The geographic region associated with the returnable package deposit amount. */
    "returnablePackageDepositRegion": NamedNode<'https://gs1.org/voc/returnablePackageDepositRegion'>;
    /** A link to reviews. */
    "review": NamedNode<'https://gs1.org/voc/review'>;
    /** Riboflavin per specified nutrient basis quantity. */
    "riboflavinPerNutrientBasis": NamedNode<'https://gs1.org/voc/riboflavinPerNutrientBasis'>;
    /** A link to safety information. */
    "safetyInfo": NamedNode<'https://gs1.org/voc/safetyInfo'>;
    /** Salt per specified nutrient basis quantity. */
    "saltPerNutrientBasis": NamedNode<'https://gs1.org/voc/saltPerNutrientBasis'>;
    /** Saturated fat per specified nutrient basis quantity. */
    "saturatedFatPerNutrientBasis": NamedNode<'https://gs1.org/voc/saturatedFatPerNutrientBasis'>;
    /** A link to a site that offers information on scheduling, appointments, or reservations. This may or may not allow the user to book the reservation. */
    "scheduleTime": NamedNode<'https://gs1.org/voc/scheduleTime'>;
    /** Seafood Products including fish and shellfish. */
    "Seafood": NamedNode<'https://gs1.org/voc/Seafood'>;
    /** The calendar year in which the product is seasonally available. */
    "seasonCalendarYear": NamedNode<'https://gs1.org/voc/seasonCalendarYear'>;
    /** Element defines the season applicable to the item for example Winter. */
    "seasonName": NamedNode<'https://gs1.org/voc/seasonName'>;
    /** Code indicating the season in which the product is available, e.g. SPRING, WINTER */
    "seasonParameter": NamedNode<'https://gs1.org/voc/seasonParameter'>;
    /** All Year */
    "SeasonParameterCode-ALL_YEAR": NamedNode<'https://gs1.org/voc/SeasonParameterCode-ALL_YEAR'>;
    /** For products that are seasonal in nature and apply to both the Autumn and Winter selling seasons */
    "SeasonParameterCode-AUTUMN_WINTER": NamedNode<'https://gs1.org/voc/SeasonParameterCode-AUTUMN_WINTER'>;
    /** For products that are seasonal in nature and apply to the Autumn selling season only */
    "SeasonParameterCode-AUTUMN": NamedNode<'https://gs1.org/voc/SeasonParameterCode-AUTUMN'>;
    /** For products that are seasonal in nature and apply to both the Spring and Summer selling seasons */
    "SeasonParameterCode-SPRING_SUMMER": NamedNode<'https://gs1.org/voc/SeasonParameterCode-SPRING_SUMMER'>;
    /** For products that are seasonal in nature and apply to the Spring selling season only */
    "SeasonParameterCode-SPRING": NamedNode<'https://gs1.org/voc/SeasonParameterCode-SPRING'>;
    /** For products that are seasonal in nature and apply to the Summer selling season only */
    "SeasonParameterCode-SUMMER": NamedNode<'https://gs1.org/voc/SeasonParameterCode-SUMMER'>;
    /** For products that are seasonal in nature and apply to the Winter selling season only */
    "SeasonParameterCode-WINTER": NamedNode<'https://gs1.org/voc/SeasonParameterCode-WINTER'>;
    "SeasonParameterCode": NamedNode<'https://gs1.org/voc/SeasonParameterCode'>;
    /** A holographic image formed using light diffraction and interference of light waves, capable of representing a three-dimensional object or multiple images, depending on the angle of observation. */
    "SecurityMarking-HOLOGRAM": NamedNode<'https://gs1.org/voc/SecurityMarking-HOLOGRAM'>;
    /** A hidden pattern that is too small to read easily without means of optical magnification such as a microscope */
    "SecurityMarking-MICROPRINTING": NamedNode<'https://gs1.org/voc/SecurityMarking-MICROPRINTING'>;
    /** A hidden pattern or marking that is invisible when observed under normal visible light but which fluoresces when observed using ultra-violet light */
    "SecurityMarking-UVINK": NamedNode<'https://gs1.org/voc/SecurityMarking-UVINK'>;
    /** A conventional watermark in which a pattern within a translucent sheet becomes visible when observed via transmitted light (typically due to reduced opacity of the pattern), whereas the pattern remains hidden when observed via light reflected off the surface */
    "SecurityMarking-WATERMARK": NamedNode<'https://gs1.org/voc/SecurityMarking-WATERMARK'>;
    "SecurityMarking": NamedNode<'https://gs1.org/voc/SecurityMarking'>;
    /** The organization seeking an offer. */
    "seeker": NamedNode<'https://gs1.org/voc/seeker'>;
    /** If specified and set to true, the discount only applies to specific products selected by the retailer or offer promoter - not to all items in that product category.  This property should be asserted and set to true for offers that say 'on selected products'. */
    "selectedProductsOnly": NamedNode<'https://gs1.org/voc/selectedProductsOnly'>;
    /** Selenium per specified nutrient basis quantity. */
    "seleniumPerNutrientBasis": NamedNode<'https://gs1.org/voc/seleniumPerNutrientBasis'>;
    /** The date specified by the manufacturer as the last date the retailer is to offer the product for sale to the consumer. The product should not be merchandised after this date. */
    "sellByDate": NamedNode<'https://gs1.org/voc/sellByDate'>;
    /** The organization seeking to sell a product or service. */
    "seller": NamedNode<'https://gs1.org/voc/seller'>;
    /** A code list for reasons for generating a sensor alert, including an alarm condition or an error condition */
    "SensorAlertType": NamedNode<'https://gs1.org/voc/SensorAlertType'>;
    /** A link to service or maintenance instructions. */
    "serviceInfo": NamedNode<'https://gs1.org/voc/serviceInfo'>;
    /** Measurement value specifying the serving size in which the information per nutrient has been stated. Example: Per 100 GRM. */
    "servingSize": NamedNode<'https://gs1.org/voc/servingSize'>;
    /** A free text field specifying the serving size for which the nutrient information has been stated for example: per 1/3 cup (42 g). */
    "servingSizeDescription": NamedNode<'https://gs1.org/voc/servingSizeDescription'>;
    /** Free text field for serving suggestion. */
    "servingSuggestion": NamedNode<'https://gs1.org/voc/servingSuggestion'>;
    /** The descriptive term that is used by the product manufacturer to identify the sharpness of the taste of the product for example EXTRA_SHARP. Usually the longer the aging of the product, the sharper the taste. */
    "sharpnessOfCheese": NamedNode<'https://gs1.org/voc/sharpnessOfCheese'>;
    "SharpnessOfCheeseCode-EXTRA_EXTRA_SHARP": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode-EXTRA_EXTRA_SHARP'>;
    "SharpnessOfCheeseCode-EXTRA_SHARP": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode-EXTRA_SHARP'>;
    "SharpnessOfCheeseCode-MILD": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode-MILD'>;
    "SharpnessOfCheeseCode-REGULAR": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode-REGULAR'>;
    "SharpnessOfCheeseCode-SHARP": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode-SHARP'>;
    "SharpnessOfCheeseCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode-UNCLASSIFIED'>;
    "SharpnessOfCheeseCode": NamedNode<'https://gs1.org/voc/SharpnessOfCheeseCode'>;
    /** Links a wearable product to one or more groupings of gs1:SizeDetails representing size systems, size groups, size type and size dimensions. */
    "size": NamedNode<'https://gs1.org/voc/size'>;
    /** Links a product to one or more groupings of gs1:SizeCodeDetails representing the size value from a specified code list. */
    "sizeCode": NamedNode<'https://gs1.org/voc/sizeCode'>;
    /** A grouping of properties related to the representing the size of a product, by specifying a value from a specified code list. */
    "SizeCodeDetails": NamedNode<'https://gs1.org/voc/SizeCodeDetails'>;
    /** Code specifying a size code list. Allowed code values are specified in GS1 Code List SizeCodeListCode . */
    "sizeCodeListCode": NamedNode<'https://gs1.org/voc/sizeCodeListCode'>;
    /** A code indicating the size of an object according to a specific code list. The applied code list is specified as additional information together with the size code. */
    "sizeCodeValue": NamedNode<'https://gs1.org/voc/sizeCodeValue'>;
    /** A grouping of properties related to the size of a wearable product */
    "SizeDetails": NamedNode<'https://gs1.org/voc/SizeDetails'>;
    /** The numerical size measurement relating to the size type. */
    "sizeDimension": NamedNode<'https://gs1.org/voc/sizeDimension'>;
    /** Code indicating the type of size that is necessary to uniquely specify the size of the item, for example, BOYS. */
    "sizeGroup": NamedNode<'https://gs1.org/voc/sizeGroup'>;
    "SizeGroupCode-BOYS": NamedNode<'https://gs1.org/voc/SizeGroupCode-BOYS'>;
    "SizeGroupCode-GIRLS": NamedNode<'https://gs1.org/voc/SizeGroupCode-GIRLS'>;
    "SizeGroupCode-INFANTS": NamedNode<'https://gs1.org/voc/SizeGroupCode-INFANTS'>;
    "SizeGroupCode-JUNIORS": NamedNode<'https://gs1.org/voc/SizeGroupCode-JUNIORS'>;
    "SizeGroupCode-MATERNITY": NamedNode<'https://gs1.org/voc/SizeGroupCode-MATERNITY'>;
    "SizeGroupCode-MENS_TALL": NamedNode<'https://gs1.org/voc/SizeGroupCode-MENS_TALL'>;
    "SizeGroupCode-MENS": NamedNode<'https://gs1.org/voc/SizeGroupCode-MENS'>;
    "SizeGroupCode-MISSES": NamedNode<'https://gs1.org/voc/SizeGroupCode-MISSES'>;
    "SizeGroupCode-PETITE": NamedNode<'https://gs1.org/voc/SizeGroupCode-PETITE'>;
    "SizeGroupCode-WOMENS_TALL": NamedNode<'https://gs1.org/voc/SizeGroupCode-WOMENS_TALL'>;
    "SizeGroupCode-WOMENS": NamedNode<'https://gs1.org/voc/SizeGroupCode-WOMENS'>;
    "SizeGroupCode": NamedNode<'https://gs1.org/voc/SizeGroupCode'>;
    /** The system that is being used to define the size for example EUROPE. Size system is used in conjunction with size group to define the size dimension. */
    "sizeSystem": NamedNode<'https://gs1.org/voc/sizeSystem'>;
    "SizeSystemCode-AUSTRALIA": NamedNode<'https://gs1.org/voc/SizeSystemCode-AUSTRALIA'>;
    "SizeSystemCode-CONTINENTAL": NamedNode<'https://gs1.org/voc/SizeSystemCode-CONTINENTAL'>;
    "SizeSystemCode-EUROPE": NamedNode<'https://gs1.org/voc/SizeSystemCode-EUROPE'>;
    "SizeSystemCode-JAPAN": NamedNode<'https://gs1.org/voc/SizeSystemCode-JAPAN'>;
    "SizeSystemCode-MEXICO": NamedNode<'https://gs1.org/voc/SizeSystemCode-MEXICO'>;
    "SizeSystemCode-UK": NamedNode<'https://gs1.org/voc/SizeSystemCode-UK'>;
    "SizeSystemCode-US": NamedNode<'https://gs1.org/voc/SizeSystemCode-US'>;
    "SizeSystemCode": NamedNode<'https://gs1.org/voc/SizeSystemCode'>;
    /** The type of size dimension being specified for example SLEEVE. */
    "sizeType": NamedNode<'https://gs1.org/voc/sizeType'>;
    "SizeTypeCode-BACK": NamedNode<'https://gs1.org/voc/SizeTypeCode-BACK'>;
    /** The measurement around the widest part of the chest/bust. */
    "SizeTypeCode-CHEST_BUST": NamedNode<'https://gs1.org/voc/SizeTypeCode-CHEST_BUST'>;
    "SizeTypeCode-COLLAR": NamedNode<'https://gs1.org/voc/SizeTypeCode-COLLAR'>;
    "SizeTypeCode-CUP": NamedNode<'https://gs1.org/voc/SizeTypeCode-CUP'>;
    /** The measurement around the fullest part of the hips. */
    "SizeTypeCode-HIPS": NamedNode<'https://gs1.org/voc/SizeTypeCode-HIPS'>;
    "SizeTypeCode-INSEAM": NamedNode<'https://gs1.org/voc/SizeTypeCode-INSEAM'>;
    "SizeTypeCode-LENGTH": NamedNode<'https://gs1.org/voc/SizeTypeCode-LENGTH'>;
    "SizeTypeCode-ONE_DIMENSION": NamedNode<'https://gs1.org/voc/SizeTypeCode-ONE_DIMENSION'>;
    /** The measurement of the outside leg seam. This is the distance from the waist to the bottom of the trousers. */
    "SizeTypeCode-OUTSIDE_LEG": NamedNode<'https://gs1.org/voc/SizeTypeCode-OUTSIDE_LEG'>;
    "SizeTypeCode-SLEEVE": NamedNode<'https://gs1.org/voc/SizeTypeCode-SLEEVE'>;
    "SizeTypeCode-WAIST": NamedNode<'https://gs1.org/voc/SizeTypeCode-WAIST'>;
    "SizeTypeCode-WIDTH": NamedNode<'https://gs1.org/voc/SizeTypeCode-WIDTH'>;
    "SizeTypeCode": NamedNode<'https://gs1.org/voc/SizeTypeCode'>;
    /** A link to the product's SmartLabel page. */
    "smartLabel": NamedNode<'https://gs1.org/voc/smartLabel'>;
    /** A link to Summary Product Characteristics. To be used specifically when linking to information for healthcare professionals. */
    "smpc": NamedNode<'https://gs1.org/voc/smpc'>;
    /** A link to a social media channel. The title will typically be replaced by the name of the channel. */
    "socialMedia": NamedNode<'https://gs1.org/voc/socialMedia'>;
    /** Sodium per specified nutrient basis quantity. */
    "sodiumPerNutrientBasis": NamedNode<'https://gs1.org/voc/sodiumPerNutrientBasis'>;
    /** A three-dimensional equivalent to planar angle, indicating a measure of the field of view subtended by an object when viewed from a specified point, the apex.  The solid angle is the surface area subtended at radius r from the apex divided by the square of that radius r.    SI Units: steradian etc. */
    "SolidAngle": NamedNode<'https://gs1.org/voc/SolidAngle'>;
    /** Code indicating the source of raw material used to produce the food product, for example a GOAT for milk. */
    "sourceAnimal": NamedNode<'https://gs1.org/voc/sourceAnimal'>;
    /** A crocodilian in the genus Alligator of the family Alligatoridae. */
    "SourceAnimalCode-ALLIGATOR": NamedNode<'https://gs1.org/voc/SourceAnimalCode-ALLIGATOR'>;
    /** A domesticated member of the horse family. */
    "SourceAnimalCode-ASS": NamedNode<'https://gs1.org/voc/SourceAnimalCode-ASS'>;
    /** Mammals of the family Ursidae. */
    "SourceAnimalCode-BEAR": NamedNode<'https://gs1.org/voc/SourceAnimalCode-BEAR'>;
    /** Cattle raised principally for meat production, other uses include leather and products used in shampoo and cosmetics. */
    "SourceAnimalCode-BEEF_COW": NamedNode<'https://gs1.org/voc/SourceAnimalCode-BEEF_COW'>;
    /** A wild relative of the domestic pig. */
    "SourceAnimalCode-BOAR": NamedNode<'https://gs1.org/voc/SourceAnimalCode-BOAR'>;
    /** A large bovine animal, frequently used as livestock. */
    "SourceAnimalCode-BUFFALO": NamedNode<'https://gs1.org/voc/SourceAnimalCode-BUFFALO'>;
    /** A general term for a juvenile member of any species of domestic cattle which is intentionally raised to be processed at a young age. */
    "SourceAnimalCode-CALF": NamedNode<'https://gs1.org/voc/SourceAnimalCode-CALF'>;
    /** Even-toed ungulates within the genus Camelus. */
    "SourceAnimalCode-CAMEL": NamedNode<'https://gs1.org/voc/SourceAnimalCode-CAMEL'>;
    /** A domesticated fowl. */
    "SourceAnimalCode-CHICKEN": NamedNode<'https://gs1.org/voc/SourceAnimalCode-CHICKEN'>;
    /** A male chicken. */
    "SourceAnimalCode-COCKEREL": NamedNode<'https://gs1.org/voc/SourceAnimalCode-COCKEREL'>;
    /** A domesticated member of the subfamily Bovinae. */
    "SourceAnimalCode-COW": NamedNode<'https://gs1.org/voc/SourceAnimalCode-COW'>;
    /** Any species belonging to the family Crocodylidae. */
    "SourceAnimalCode-CROCODILE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-CROCODILE'>;
    /** Ruminant mammals forming the family Cervidae. */
    "SourceAnimalCode-DEER": NamedNode<'https://gs1.org/voc/SourceAnimalCode-DEER'>;
    /** A domesticated form of the Wolf, a member of the Canidae family of the order Carnivora. */
    "SourceAnimalCode-DOG": NamedNode<'https://gs1.org/voc/SourceAnimalCode-DOG'>;
    /** Aquatic birds, mostly smaller than the swans and geese, and may be found in both fresh water and sea water. */
    "SourceAnimalCode-DUCK": NamedNode<'https://gs1.org/voc/SourceAnimalCode-DUCK'>;
    /** A young duck. */
    "SourceAnimalCode-DUCKLING": NamedNode<'https://gs1.org/voc/SourceAnimalCode-DUCKLING'>;
    /** Fresh or sea water fish. */
    "SourceAnimalCode-FISH": NamedNode<'https://gs1.org/voc/SourceAnimalCode-FISH'>;
    /** Non-domesticated birds in general but usually refers to birds belonging to one of two biological orders, namely the gamefowl or landfowl and the waterfowl. */
    "SourceAnimalCode-FOWL": NamedNode<'https://gs1.org/voc/SourceAnimalCode-FOWL'>;
    /** Amphibians in the order Anura. */
    "SourceAnimalCode-FROG": NamedNode<'https://gs1.org/voc/SourceAnimalCode-FROG'>;
    /** A member of the Bovidae family and is closely related to the sheep. */
    "SourceAnimalCode-GOAT": NamedNode<'https://gs1.org/voc/SourceAnimalCode-GOAT'>;
    /** A bird belonging to the family Anatidae */
    "SourceAnimalCode-GOOSE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-GOOSE'>;
    /** A group of birds from the order Galliformes. */
    "SourceAnimalCode-GROUSE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-GROUSE'>;
    /** A family of birds in the Galliformes order */
    "SourceAnimalCode-GUINEAFOWL": NamedNode<'https://gs1.org/voc/SourceAnimalCode-GUINEAFOWL'>;
    /** Leporidaes belonging to the genus Lepus. */
    "SourceAnimalCode-HARE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-HARE'>;
    /** a hoofed (ungulate) mammal, a subspecies of one of seven extant species of the family Equidae. */
    "SourceAnimalCode-HORSE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-HORSE'>;
    /** Fresh or sea water invertebrate. */
    "SourceAnimalCode-INVERTEBRATE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-INVERTEBRATE'>;
    /** A young domestic sheep. */
    "SourceAnimalCode-LAMB": NamedNode<'https://gs1.org/voc/SourceAnimalCode-LAMB'>;
    /** A member of the molluscan class Gastropoda that have coiled shells in the adult stage and live on land. */
    "SourceAnimalCode-LAND_SNAIL": NamedNode<'https://gs1.org/voc/SourceAnimalCode-LAND_SNAIL'>;
    /** Also referred to Milk Cattle, this cow is bred to produce large quantities of Milk, from which dairy products are made. */
    "SourceAnimalCode-MILK_COW": NamedNode<'https://gs1.org/voc/SourceAnimalCode-MILK_COW'>;
    /** The largest extant species in the deer family. */
    "SourceAnimalCode-MOOSE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-MOOSE'>;
    /** Large flightless bird native to Africa. */
    "SourceAnimalCode-OSTRICH": NamedNode<'https://gs1.org/voc/SourceAnimalCode-OSTRICH'>;
    /** Other animal not specified on this list. */
    "SourceAnimalCode-OTHER": NamedNode<'https://gs1.org/voc/SourceAnimalCode-OTHER'>;
    /** Medium-sized birds, intermediate between the larger pheasants and the smaller quails. */
    "SourceAnimalCode-PARTRIDGE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-PARTRIDGE'>;
    /** A bird in the subfamily of Phasianidae in the order Galliformes. */
    "SourceAnimalCode-PHEASANT": NamedNode<'https://gs1.org/voc/SourceAnimalCode-PHEASANT'>;
    /** A bird in the family Columbidae. */
    "SourceAnimalCode-PIGEON": NamedNode<'https://gs1.org/voc/SourceAnimalCode-PIGEON'>;
    /** Meat from the domestic pig */
    "SourceAnimalCode-PORK": NamedNode<'https://gs1.org/voc/SourceAnimalCode-PORK'>;
    /** A young chicken, less than 28 days old at slaughter */
    "SourceAnimalCode-POUSSIN": NamedNode<'https://gs1.org/voc/SourceAnimalCode-POUSSIN'>;
    /** Several genus of mid-sized birds in the pheasant family. */
    "SourceAnimalCode-QUAIL": NamedNode<'https://gs1.org/voc/SourceAnimalCode-QUAIL'>;
    /** Small mammals in the family Leporidae of the order Lagomorpha */
    "SourceAnimalCode-RABBIT": NamedNode<'https://gs1.org/voc/SourceAnimalCode-RABBIT'>;
    /** Rats are various medium-sized, long-tailed rodents of the superfamily Muroidea. */
    "SourceAnimalCode-RAT": NamedNode<'https://gs1.org/voc/SourceAnimalCode-RAT'>;
    /** An Arctic and Subarctic-dwelling deer, widespread and numerous across the Arctic and Subarctic. */
    "SourceAnimalCode-REINDEER": NamedNode<'https://gs1.org/voc/SourceAnimalCode-REINDEER'>;
    /** A deer species of Europe, Asia Minor, and Caspian coastal regions. */
    "SourceAnimalCode-ROE_DEER": NamedNode<'https://gs1.org/voc/SourceAnimalCode-ROE_DEER'>;
    /** Small ruminants, usually with a crimped hair called wool and often with horns forming a lateral spiral. */
    "SourceAnimalCode-SHEEP": NamedNode<'https://gs1.org/voc/SourceAnimalCode-SHEEP'>;
    /** A fresh or sea water animal, such as a mollusk or crustacean, that has a shell or shell-like exoskeleton. */
    "SourceAnimalCode-SHELLFISH": NamedNode<'https://gs1.org/voc/SourceAnimalCode-SHELLFISH'>;
    /** Elongate legless carnivorous reptiles of the suborder Serpentes. */
    "SourceAnimalCode-SNAKE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-SNAKE'>;
    /** Any of nearly 20 wading bird species in three genera in the family Scolopacidae. */
    "SourceAnimalCode-SNIPE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-SNIPE'>;
    /** Small passerine birds in the family Passeridae. */
    "SourceAnimalCode-SPARROW": NamedNode<'https://gs1.org/voc/SourceAnimalCode-SPARROW'>;
    /** Plump, soft-plumaged, small to medium-sized passerine birds. */
    "SourceAnimalCode-THRUSH": NamedNode<'https://gs1.org/voc/SourceAnimalCode-THRUSH'>;
    /** A large bird in the genus Meleagris. */
    "SourceAnimalCode-TURKEY": NamedNode<'https://gs1.org/voc/SourceAnimalCode-TURKEY'>;
    /** Reptiles characterised by a special bony or cartilaginous shell developed from their ribs that acts as a shield. */
    "SourceAnimalCode-TURTLE": NamedNode<'https://gs1.org/voc/SourceAnimalCode-TURTLE'>;
    /** The woodcocks are a group of seven or eight very similar living species of wading birds in the genus Scolopax. */
    "SourceAnimalCode-WOODCOCK": NamedNode<'https://gs1.org/voc/SourceAnimalCode-WOODCOCK'>;
    /** A long-haired bovine found throughout the Himalayan region of south Central Asia, the Tibetan Plateau and as far north as Mongolia. */
    "SourceAnimalCode-YAK": NamedNode<'https://gs1.org/voc/SourceAnimalCode-YAK'>;
    "SourceAnimalCode": NamedNode<'https://gs1.org/voc/SourceAnimalCode'>;
    /** The volume of a substance per unit mass. The reciprocal of density.  SI Units: cubic metres per kilogram */
    "SpecificVolume": NamedNode<'https://gs1.org/voc/SpecificVolume'>;
    /** The ratio of the linear distance travelled by a body to the time taken. Speed is a scalar quantity. Velocity is a vector with magnitude and direction.  SI Units: metre per second */
    "Speed": NamedNode<'https://gs1.org/voc/Speed'>;
    /** Code indicating the type of sporting activity for which the product is intended to be worn, for example FOOTBALL. */
    "sportingActivityType": NamedNode<'https://gs1.org/voc/sportingActivityType'>;
    "SportingActivityTypeCode-AMERICAN_FOOTBALL": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-AMERICAN_FOOTBALL'>;
    "SportingActivityTypeCode-ARCHERY": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-ARCHERY'>;
    "SportingActivityTypeCode-BADMINTON": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-BADMINTON'>;
    "SportingActivityTypeCode-BASEBALL": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-BASEBALL'>;
    "SportingActivityTypeCode-BASKETBALL": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-BASKETBALL'>;
    "SportingActivityTypeCode-BOXING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-BOXING'>;
    "SportingActivityTypeCode-CLIMBING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-CLIMBING'>;
    "SportingActivityTypeCode-CRICKET": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-CRICKET'>;
    "SportingActivityTypeCode-CYCLING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-CYCLING'>;
    "SportingActivityTypeCode-DIVING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-DIVING'>;
    "SportingActivityTypeCode-EQUESTRIAN": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-EQUESTRIAN'>;
    "SportingActivityTypeCode-FENCING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-FENCING'>;
    "SportingActivityTypeCode-FISHING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-FISHING'>;
    "SportingActivityTypeCode-FOOTBALL": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-FOOTBALL'>;
    "SportingActivityTypeCode-GOLF": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-GOLF'>;
    "SportingActivityTypeCode-GYMNASTICS": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-GYMNASTICS'>;
    "SportingActivityTypeCode-HOCKEY": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-HOCKEY'>;
    "SportingActivityTypeCode-ICE_HOCKEY": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-ICE_HOCKEY'>;
    "SportingActivityTypeCode-ICE_SKATING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-ICE_SKATING'>;
    "SportingActivityTypeCode-MOTOR_CYCLING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-MOTOR_CYCLING'>;
    "SportingActivityTypeCode-RUGBY": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-RUGBY'>;
    "SportingActivityTypeCode-RUNNING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-RUNNING'>;
    "SportingActivityTypeCode-SKIING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-SKIING'>;
    "SportingActivityTypeCode-SQUASH": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-SQUASH'>;
    "SportingActivityTypeCode-SURFING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-SURFING'>;
    "SportingActivityTypeCode-SWIMMING": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-SWIMMING'>;
    "SportingActivityTypeCode-TENNIS": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-TENNIS'>;
    "SportingActivityTypeCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-UNCLASSIFIED'>;
    "SportingActivityTypeCode-UNIDENTIFIED": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode-UNIDENTIFIED'>;
    "SportingActivityTypeCode": NamedNode<'https://gs1.org/voc/SportingActivityTypeCode'>;
    /** Starch per specified nutrient basis quantity. */
    "starchPerNutrientBasis": NamedNode<'https://gs1.org/voc/starchPerNutrientBasis'>;
    /** A link to information about statistics regarding an organisation, location, or other entity. */
    "statisticInfo": NamedNode<'https://gs1.org/voc/statisticInfo'>;
    /** Date and time (including optional timezone) associated to status designations. Timestamps may be future dated to provide advance notice of status changes. For further information about the required lexical representation of date, time, and timezone please see https://www.w3.org/TR/xmlschema-2/#dateTime */
    "statusTimestamp": NamedNode<'https://gs1.org/voc/statusTimestamp'>;
    /** Designation stating that an organisation/party or location is operating. Note that this is independent of whether or not the GLN is active. */
    "StatusType-ACTIVE": NamedNode<'https://gs1.org/voc/StatusType-ACTIVE'>;
    /** Designation stating that an organisation/party or location is not operating. Note that this is independent of whether or not the GLN is inactive. */
    "StatusType-INACTIVE": NamedNode<'https://gs1.org/voc/StatusType-INACTIVE'>;
    "StatusType": NamedNode<'https://gs1.org/voc/StatusType'>;
    /** The street address expressed as free form text. The street address is printed on paper as the first lines below the name. For example, the name of the street and the number in the street or the name of a building. A total of four street address lines are available. gs1:streetAddress SHOULD be used before populating lines two through four. For a PO Box gs1:postOfficeBoxNumber SHOULD be used instead. */
    "streetAddress": NamedNode<'https://gs1.org/voc/streetAddress'>;
    /** The second line of the street address, expressed as free form text. The street address is printed on paper as the first lines below the name. For example, the name of the street and the number in the street or the name of a building. A total of four street address lines are available. gs1:streetAddress SHOULD be used before populating lines two through four. These SHALL NOT be used as alternatives to the dedicated address properties gs1:addressSuburb, gs1:addressLocality and gs1:addressRegion. */
    "streetAddressLine2": NamedNode<'https://gs1.org/voc/streetAddressLine2'>;
    /** The third line of the street address, expressed as free form text. The street address is printed on paper as the first lines below the name. For example, the name of the street and the number in the street or the name of a building. A total of four street address lines are available. gs1:streetAddress and gs1:streetaddressLine2 SHOULD be used before populating lines three and four. These SHALL NOT be used as alternatives to the dedicated address properties gs1:addressSuburb, gs1:addressLocality and gs1:addressRegion. */
    "streetAddressLine3": NamedNode<'https://gs1.org/voc/streetAddressLine3'>;
    /** The fourth line of the street address, expressed as free form text. The street address is printed on paper as the first lines below the name. For example, the name of the street and the number in the street or the name of a building. gs1:streetAddress, gs1:streetaddressLine2 and gs1:streetaddressLine3 SHOULD be used before populating line four. These SHALL NOT be used as alternatives to the dedicated address properties gs1:addressSuburb, gs1:addressLocality and gs1:addressRegion. */
    "streetAddressLine4": NamedNode<'https://gs1.org/voc/streetAddressLine4'>;
    /** An attribute that classifies products that share many of the same characteristics (attribute values) that does NOT vary by GTIN, and are presented by the supplier as a single merchandise selection for the buyer. */
    "styleDescription": NamedNode<'https://gs1.org/voc/styleDescription'>;
    /** Second level of brand. Can be a trademark. It is the primary differentiating factor that a brand owner wants to communicate to the consumer or buyer. E.g. Yummy-Cola Classic. In this example Yummy-Cola is the brand and Classic is the sub-brand. */
    "subBrandName": NamedNode<'https://gs1.org/voc/subBrandName'>;
    /** Designates a legal entity or function directly below the organisation/party being identified in a hierarchy. There may be multiple sub-organisations associated to a single GLN. To specify other affiliated organisations, see gs1:manages, gs1:franchisorOf, gs1:owns. To specify a parent organisation, see gs1:parentOrganization. */
    "subOrganization": NamedNode<'https://gs1.org/voc/subOrganization'>;
    /** Sugars per specified nutrient basis quantity. */
    "sugarsPerNutrientBasis": NamedNode<'https://gs1.org/voc/sugarsPerNutrientBasis'>;
    /** Represents the number of days between a product's sell by date and its use by date. */
    "supplierSpecifiedMinimumConsumerStorageDays": NamedNode<'https://gs1.org/voc/supplierSpecifiedMinimumConsumerStorageDays'>;
    /** A link to a source of support such as a helpdesk, chat support, email etc. */
    "support": NamedNode<'https://gs1.org/voc/support'>;
    /** The mass per unit area distributed over a surface.  SI Units: kilogram per square metre */
    "SurfaceDensity": NamedNode<'https://gs1.org/voc/SurfaceDensity'>;
    /** The attractive force exerted upon the surface molecules of a liquid by the molecules beneath that tends to draw the surface molecules into the bulk of the liquid and makes the liquid assume the shape having the minimum surface area.  SI Units: newton per metre */
    "SurfaceTension": NamedNode<'https://gs1.org/voc/SurfaceTension'>;
    /** A link to information relating to sustainability and recycling requirements or processes. */
    "sustainabilityInfo": NamedNode<'https://gs1.org/voc/sustainabilityInfo'>;
    /** Identifies the target consumer age range for which a product has been designed. */
    "targetConsumerAge": NamedNode<'https://gs1.org/voc/targetConsumerAge'>;
    /** Identifies the target consumer gender for which a product has been designed for example MALE */
    "targetConsumerGender": NamedNode<'https://gs1.org/voc/targetConsumerGender'>;
    "TargetConsumerGenderCode-FEMALE": NamedNode<'https://gs1.org/voc/TargetConsumerGenderCode-FEMALE'>;
    "TargetConsumerGenderCode-MALE": NamedNode<'https://gs1.org/voc/TargetConsumerGenderCode-MALE'>;
    "TargetConsumerGenderCode-UNISEX": NamedNode<'https://gs1.org/voc/TargetConsumerGenderCode-UNISEX'>;
    "TargetConsumerGenderCode": NamedNode<'https://gs1.org/voc/TargetConsumerGenderCode'>;
    /** Relates to a set of target market details (product release date and associated countries) */
    "targetMarket": NamedNode<'https://gs1.org/voc/targetMarket'>;
    /** List of countries representing the target market for a particular release date indicated by gs1:consumerFirstAvailabilityDateTime */
    "targetMarketCountries": NamedNode<'https://gs1.org/voc/targetMarketCountries'>;
    /** A set of target market details (product release date and associated countries) for the product. */
    "TargetMarketDetails": NamedNode<'https://gs1.org/voc/TargetMarketDetails'>;
    /** A telephone number for example +44 217 992 9999. */
    "telephone": NamedNode<'https://gs1.org/voc/telephone'>;
    /** A measure of whether two systems are relatively hot or cold with respect to one another; two systems brought into contact will eventually reach thermal equilibrium and reach the same temperature as thermal energy (heat) flows from the system with higher temperature to the system with lower temperature.  SI Units: kelvin */
    "Temperature": NamedNode<'https://gs1.org/voc/Temperature'>;
    /** One or more links to information about the materials used in a wearable product. */
    "textileMaterial": NamedNode<'https://gs1.org/voc/textileMaterial'>;
    /** A description of the material composition used in conjunction with the material percentage. */
    "textileMaterialContent": NamedNode<'https://gs1.org/voc/textileMaterialContent'>;
    /** This provides a name or brief description of one material contained within the product, for example Rayon. */
    "textileMaterialDescription": NamedNode<'https://gs1.org/voc/textileMaterialDescription'>;
    /** Details on the composition of any materials used to make a product using textiles. */
    "TextileMaterialDetails": NamedNode<'https://gs1.org/voc/TextileMaterialDetails'>;
    /** Corresponding net weight percentage of the product material specified via gs1:textileMaterialDescription, e.g. 70. */
    "textileMaterialPercentage": NamedNode<'https://gs1.org/voc/textileMaterialPercentage'>;
    /** The quality of material (fabric) of a product based on the total number of vertical and horizontal threads in one square inch. */
    "textileMaterialThreadCount": NamedNode<'https://gs1.org/voc/textileMaterialThreadCount'>;
    /** The measured weight of the material expressed in ounces per square yard or grams per square meter. */
    "textileMaterialWeight": NamedNode<'https://gs1.org/voc/textileMaterialWeight'>;
    /** Thiamin per specified nutrient basis quantity. */
    "thiaminPerNutrientBasis": NamedNode<'https://gs1.org/voc/thiaminPerNutrientBasis'>;
    /** A dimension that enables distinction between two otherwise identical events that occur at the same point in space. The interval between such events is the basis of time measurement.  SI Units: second */
    "Time": NamedNode<'https://gs1.org/voc/Time'>;
    /** The product of a force and its perpendicular distance from a point about which it causes rotation or torsion.  SI Units: newton metre */
    "Torque": NamedNode<'https://gs1.org/voc/Torque'>;
    /** A link to traceability information (includes track and trace).  Traceability information may be provided for consumption by humans or computers. If the target is an EPCIS repository, use gs1:epcis instead. */
    "traceability": NamedNode<'https://gs1.org/voc/traceability'>;
    /** Offer avalilable only in stores. */
    "TradeChannelCode-INSTORE_ONLY": NamedNode<'https://gs1.org/voc/TradeChannelCode-INSTORE_ONLY'>;
    /** Offer avalilable both in stores and online. */
    "TradeChannelCode-OMNICHANNEL": NamedNode<'https://gs1.org/voc/TradeChannelCode-OMNICHANNEL'>;
    /** Offer avalilable online only. */
    "TradeChannelCode-ONLINE_ONLY": NamedNode<'https://gs1.org/voc/TradeChannelCode-ONLINE_ONLY'>;
    "TradeChannelCode": NamedNode<'https://gs1.org/voc/TradeChannelCode'>;
    /** Trans Fat per specified nutrient basis quantity. */
    "transFatPerNutrientBasis": NamedNode<'https://gs1.org/voc/transFatPerNutrientBasis'>;
    /** A link to a tutorial or set of tutorials, such as online classes, how-to videos etc. */
    "tutorial": NamedNode<'https://gs1.org/voc/tutorial'>;
    /** A code list. */
    "TypeCode": NamedNode<'https://gs1.org/voc/TypeCode'>;
    /** A string value indicating a Measurement Unit from UN/ECE Recommendation 20, Units of Measure used in International Trade e.g. GRM = gram - see http://www.unece.org/fileadmin/DAM/cefact/recommendations/rec20/rec20_rev3_Annex3e.pdf */
    "unitCode": NamedNode<'https://gs1.org/voc/unitCode'>;
    /** The material(s) used for the upper part of the footwear product. The upper is the part of a shoe, boot, slipper or other item of footwear that is above the sole. */
    "upperMaterialType": NamedNode<'https://gs1.org/voc/upperMaterialType'>;
    "UpperTypeCode-CLOSED_TOE_CLOSED_BACK_OPEN_INSTEP": NamedNode<'https://gs1.org/voc/UpperTypeCode-CLOSED_TOE_CLOSED_BACK_OPEN_INSTEP'>;
    "UpperTypeCode-CLOSED_TOE_OPEN_BACK": NamedNode<'https://gs1.org/voc/UpperTypeCode-CLOSED_TOE_OPEN_BACK'>;
    "UpperTypeCode-CLOSED_TOE_STRAP_BACK": NamedNode<'https://gs1.org/voc/UpperTypeCode-CLOSED_TOE_STRAP_BACK'>;
    "UpperTypeCode-FULLY_CLOSED": NamedNode<'https://gs1.org/voc/UpperTypeCode-FULLY_CLOSED'>;
    "UpperTypeCode-OPEN_TOE_FULLY_CLOSED_BACK": NamedNode<'https://gs1.org/voc/UpperTypeCode-OPEN_TOE_FULLY_CLOSED_BACK'>;
    "UpperTypeCode-OPEN_TOE_OPEN_BACK": NamedNode<'https://gs1.org/voc/UpperTypeCode-OPEN_TOE_OPEN_BACK'>;
    "UpperTypeCode-OPEN_TOE_STRAP_BACK": NamedNode<'https://gs1.org/voc/UpperTypeCode-OPEN_TOE_STRAP_BACK'>;
    "UpperTypeCode-UNCLASSIFIED": NamedNode<'https://gs1.org/voc/UpperTypeCode-UNCLASSIFIED'>;
    "UpperTypeCode": NamedNode<'https://gs1.org/voc/UpperTypeCode'>;
    /** A link to an agreement or waiver. */
    "userAgreement": NamedNode<'https://gs1.org/voc/userAgreement'>;
    /** Links to the place(s) that this organisation uses as a managed space. */
    "usesManagedLocation": NamedNode<'https://gs1.org/voc/usesManagedLocation'>;
    /** The effective start date of the price . */
    "validFrom": NamedNode<'https://gs1.org/voc/validFrom'>;
    /** The effective end date of the price . */
    "validThrough": NamedNode<'https://gs1.org/voc/validThrough'>;
    /** A floating-point numeric value that is qualified by the corresponding measurement unit code - see gs1:unitCode */
    "value": NamedNode<'https://gs1.org/voc/value'>;
    /** Free text field used to identify the variant of the product. Variants are the distinguishing characteristics that differentiate products with the same brand and size including such things as the particular flavour, fragrance, taste. */
    "variantDescription": NamedNode<'https://gs1.org/voc/variantDescription'>;
    /** A link to a GS1 Lightweight Messaging Service for verifying the status of a product, organisation, or location and its identifier. */
    "verificationService": NamedNode<'https://gs1.org/voc/verificationService'>;
    /** The person hired by a winery or wine company who is responsible for many of the processes in the preparation, taste and quality of the wine produced. The science of wine making is referred to as oenology. The vintner is the oenologist. */
    "vintner": NamedNode<'https://gs1.org/voc/vintner'>;
    /** Vitamin A per specified nutrient basis quantity. */
    "vitaminAPerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminAPerNutrientBasis'>;
    /** Vitamin B12 per specified nutrient basis quantity. */
    "vitaminB12PerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminB12PerNutrientBasis'>;
    /** Vitamin B6 per specified nutrient basis quantity. */
    "vitaminB6PerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminB6PerNutrientBasis'>;
    /** Vitamin C per specified nutrient basis quantity. */
    "vitaminCPerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminCPerNutrientBasis'>;
    /** Vitamin D per specified nutrient basis quantity. */
    "vitaminDPerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminDPerNutrientBasis'>;
    /** Vitamin E per specified nutrient basis quantity. */
    "vitaminEPerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminEPerNutrientBasis'>;
    /** Vitamin K per specified nutrient basis quantity. */
    "vitaminKPerNutrientBasis": NamedNode<'https://gs1.org/voc/vitaminKPerNutrientBasis'>;
    /** The value of an electromotive force or electrostatic potential difference, expressed in volts.  SI Units: volt */
    "Voltage": NamedNode<'https://gs1.org/voc/Voltage'>;
    /** The amount of three-dimensional space occupied by a body, measured in cubic length units.  SI Units: cubic metre */
    "Volume": NamedNode<'https://gs1.org/voc/Volume'>;
    /** The volume of fluid that passes per unit of time.  SI Units: cubic metre per second */
    "VolumeFlowRate": NamedNode<'https://gs1.org/voc/VolumeFlowRate'>;
    /** The dimensionless ratio of a volume of one substance to the volume of solid, liquid or gas in which it is contained.  Typical units: parts per million, parts per billion, etc. */
    "VolumeFraction": NamedNode<'https://gs1.org/voc/VolumeFraction'>;
    /** The volume of fluid that passes per unit of time per unit area perpendicular to the flow direction.  SI Units: cubic metre per second per square metre */
    "VolumetricFlux": NamedNode<'https://gs1.org/voc/VolumetricFlux'>;
    /** Warning information is additional information that outlines special requirements, warning and caution information printed on the package. */
    "warningCopyDescription": NamedNode<'https://gs1.org/voc/warningCopyDescription'>;
    /** The warranty associated with the product, as provided by the manufacturer. */
    "warranty": NamedNode<'https://gs1.org/voc/warranty'>;
    /** An assurance that the product is reliable and that repairs or replacement will be done free of charge within a given time limit and under certain conditions in the event of a defect. */
    "WarrantyPromise": NamedNode<'https://gs1.org/voc/WarrantyPromise'>;
    /** The description of warranty available for the product. Allows for the representation of the same value in different languages but not for multiple values. */
    "warrantyScopeDescription": NamedNode<'https://gs1.org/voc/warrantyScopeDescription'>;
    /** The number of waves per unit length.  SI Units: reciprocal metre */
    "Wavenumber": NamedNode<'https://gs1.org/voc/Wavenumber'>;
    /** Products that are worn on the body. */
    "WearableProduct": NamedNode<'https://gs1.org/voc/WearableProduct'>;
    /** A link to a description of all the individual items in a packaged item. */
    "whatsInTheBox": NamedNode<'https://gs1.org/voc/whatsInTheBox'>;
    /** Product quantity after preparation. */
    "yield": NamedNode<'https://gs1.org/voc/yield'>;
    /** Zinc per specified nutrient basis quantity. */
    "zincPerNutrientBasis": NamedNode<'https://gs1.org/voc/zincPerNutrientBasis'>;
}

const builder = namespace("https://gs1.org/voc/") as any;
export const strict = builder as NamespaceBuilder<keyof Gs1> & Gs1;
export const loose = builder as NamespaceBuilder & Gs1;
