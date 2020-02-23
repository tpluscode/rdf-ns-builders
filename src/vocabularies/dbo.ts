import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Dbo = NamespaceBuilder & {
    /*An abbey is a Catholic monastery or convent, under the authority of an Abbot or an Abbess, who serves as the spiritual father or mother of the community.*/
    "Abbey": NamedNode;
    "AcademicConference": NamedNode;
    /*An academic journal is a mostly peer-reviewed periodical in which scholarship relating to a particular academic discipline is published. Academic journals serve as forums for the introduction and presentation for scrutiny of new research, and the critique of existing research. Content typically takes the form of articles presenting original research, review articles, and book reviews.*/
    "AcademicJournal": NamedNode;
    /*Genres of art, e.g. Mathematics, History, Philosophy, Medicine*/
    "AcademicSubject": NamedNode;
    "Activity": NamedNode;
    /*An actor or actress is a person who acts in a dramatic production and who works in film, television, theatre, or radio in that capacity.*/
    "Actor": NamedNode;
    /*A PopulatedPlace under the jurisdiction of an administrative body. This body may administer either a whole region or one or more adjacent Settlements (town administration)*/
    "AdministrativeRegion": NamedNode;
    /*A pornographic actor or actress or a porn star is a person who performs sex acts in film, normally characterised as a pornographic film.*/
    "AdultActor": NamedNode;
    /*Analogous to a foaf:Agent, an agent is an entity that acts. This is intended to be the super class of Person and Organisation.*/
    "Agent": NamedNode;
    "Agglomeration": NamedNode;
    "Aircraft": NamedNode;
    "Airline": NamedNode;
    "Airport": NamedNode;
    "Album": NamedNode;
    /*A altitude é a distancia vertical dun obxecto respecto dun punto de orixe dado, considerado como o nivel cero, para o que se adoita tomar o nivel absoluto do mar.&lt;ref&gt;https://gl.wikipedia.org/wiki/Altitude&lt;/ref&gt;*/
    "Altitude": NamedNode;
    "AmateurBoxer": NamedNode;
    /*An ambassador is the highest ranking diplomat that represents a nation and is usually accredited to a foreign sovereign or government, or to an international organization.*/
    "Ambassador": NamedNode;
    "AmericanFootballCoach": NamedNode;
    /*A National Football League (en galego: Liga Nacional de Fútbol Americano), mellor coñecida polas súas siglas en inglés, NFL, é a maior liga de fútbol americano profesional dos Estados Unidos e está considerada como a máis grande e prestixiosa propiedade deportiva nese país.&lt;ref&gt;https://gl.wikipedia.org/wiki/National_Football_League&lt;/ref&gt;*/
    "AmericanFootballLeague": NamedNode;
    "AmericanFootballPlayer": NamedNode;
    "AmericanFootballTeam": NamedNode;
    "Amphibian": NamedNode;
    "AmusementParkAttraction": NamedNode;
    "AnatomicalStructure": NamedNode;
    "Animal": NamedNode;
    /*Anime/Manga character*/
    "AnimangaCharacter": NamedNode;
    /*A style of animation originating in Japan*/
    "Anime": NamedNode;
    "Annotation": NamedNode;
    "Arachnid": NamedNode;
    "Archaea": NamedNode;
    "Archeologist": NamedNode;
    "ArcherPlayer": NamedNode;
    "Archipelago": NamedNode;
    "Architect": NamedNode;
    /*An architectural structure is a human-made, free-standing, immobile outdoor construction (http://en.wikipedia.org/wiki/Architectural_structure).*/
    "ArchitecturalStructure": NamedNode;
    /*Collection of documents pertaining to a person or organisation.*/
    "Archive": NamedNode;
    /*Area of something. Use "value" for the value, "min" & "max" for a range (if uncertain) and "rank" (integer) for the rank of that thing amongst its siblings (eg regions ordered by area)*/
    "Area": NamedNode;
    /*An arena is an enclosed area, often circular or oval-shaped, designed to showcase theater, musical performances, or sporting events. (http://en.wikipedia.org/wiki/Arena)*/
    "Arena": NamedNode;
    "Aristocrat": NamedNode;
    /*An administrative (France) or lawcourts (Netherlands) body governing a territorial unity on the intermediate level, between local and national level*/
    "Arrondissement": NamedNode;
    "Artery": NamedNode;
    "Article": NamedNode;
    /*In the context of spaceflight, an artificial satellite is an artificial object which has been intentionally placed into orbit.*/
    "ArtificialSatellite": NamedNode;
    "Artist": NamedNode;
    "ArtistDiscography": NamedNode;
    /*Gattung nennt man in den Kunstwissenschaften die auf das künstlerische Ausdrucksmedium bezogenen Formen der Kunst.*/
    "ArtisticGenre": NamedNode;
    /*A work of art, artwork, art piece, or art object is an aesthetic item or artistic creation.*/
    "Artwork": NamedNode;
    "Asteroid": NamedNode;
    "Astronaut/timeInSpace": NamedNode;
    "Astronaut": NamedNode;
    "Athlete": NamedNode;
    "Athletics": NamedNode;
    "AthleticsPlayer": NamedNode;
    "Atoll": NamedNode;
    /*An Attack is not necessarily part of a Military Conflict*/
    "Attack": NamedNode;
    /*A group of sports teams that compete against each other in australian football.*/
    "AustralianFootballLeague": NamedNode;
    "AustralianFootballTeam": NamedNode;
    "AustralianRulesFootballPlayer": NamedNode;
    /*a group of sports teams or individual athletes that compete against each other in auto racing*/
    "AutoRacingLeague": NamedNode;
    "Automobile/fuelCapacity": NamedNode;
    "Automobile/wheelbase": NamedNode;
    "Automobile": NamedNode;
    "AutomobileEngine": NamedNode;
    "Award": NamedNode;
    "BackScene": NamedNode;
    "Bacteria": NamedNode;
    "BadmintonPlayer": NamedNode;
    "Band": NamedNode;
    /*a company which main services are banking or financial services.*/
    "Bank": NamedNode;
    "Baronet": NamedNode;
    /*a group of sports teams that compete against each other in Baseball.*/
    "BaseballLeague": NamedNode;
    /*Ο αθλητής (άνδρας ή γυναίκα) που συμμετέχει σε μία ομάδα μπέιζμπολ.*/
    "BaseballPlayer": NamedNode;
    "BaseballSeason": NamedNode;
    /*Ένας αριθμός από άνδρες ή γυναίκες που αποτελούν ένα διακριτό σύνολο με συγκεκριμένους στόχους σχετικά με το άθλημα του μπέιζμπολ.*/
    "BaseballTeam": NamedNode;
    /*a group of sports teams that compete against each other in Basketball*/
    "BasketballLeague": NamedNode;
    /*Ένας αθλητής (άνδρας ή γυναίκα) που ασχολείται με το άθλημα της καλαθοσφαίρισης.*/
    "BasketballPlayer": NamedNode;
    "BasketballTeam": NamedNode;
    "Bay": NamedNode;
    /*Ribera del mar o de un río grande, formada de arenales en superficie casi plana.*/
    "Beach": NamedNode;
    /*Ένα άτομο (άνδρας ή γυναίκα) που ασχολείται με το άθλημα του μπίτς βόλλεϋ.*/
    "BeachVolleyballPlayer": NamedNode;
    /*A beauty pageant titleholder*/
    "BeautyQueen": NamedNode;
    "Beer": NamedNode;
    /*A drink, or beverage, is a liquid which is specifically prepared for human consumption.*/
    "Beverage": NamedNode;
    "Biathlete": NamedNode;
    /*Διάφορες βάσεις δεδομένων οι οποίες περιέχουν πληροφορίες που ταυτοποιούν τα βασικά βιολογικά χαρακτηριστικά των οργανισμών. Οι πληροφορίες αυτές συγκροτούνται σε σύνολα βιβλιοθηκών των βασικών δομών των κυττάρων των οργανισμών, όπως οι βιλβιοθήκες νουκλεϊνικών οξέων (genomics) και πρωτεϊνών (proteomics).*/
    "BiologicalDatabase": NamedNode;
    "Biologist": NamedNode;
    /*Een molecuul wat van nature voorkomt in een organisme en gevormd kan worden door organismen.*/
    "Biomolecule": NamedNode;
    "Bird": NamedNode;
    /*someone's birth as a type of personal event*/
    "Birth": NamedNode;
    "Blazon": NamedNode;
    "BloodVessel": NamedNode;
    /*Un gioco da tavolo è un gioco che richiede una ben definita superficie di gioco, che viene detta di solito tabellone o plancia.*/
    "BoardGame": NamedNode;
    "BobsleighAthlete": NamedNode;
    /*Συγκεντρωμένες, συνήθως μεγάλες ποσότητες νερού (π.χ. ωκεανοί) που βρίσκονται στη Γη ή σε οποιονδήποτε άλλο πλανήτη. Ο όρος χρησιμοποιείται και για υδάτινους σχηματισμούς όπου υπάρχει κίνηση του νερού, όπως ποταμοί, ρεύματα ή κανάλια.*/
    "BodyOfWater": NamedNode;
    "Bodybuilder": NamedNode;
    /*Η βασική μονάδα του συστήματος στήριξης των σπονδυλωτών οργανισμών.*/
    "Bone": NamedNode;
    "Book": NamedNode;
    /*a group of sports teams or players that compete against each other in Bowling*/
    "BowlingLeague": NamedNode;
    "Boxer": NamedNode;
    /*Η πυγμαχία είναι ένα αγώνισμα που στηρίζεται στην ικανότητα των αντιπάλων να αντικρούσουν μόνο με τις γροθιές τους ο ένας τον άλλο και να καταφέρουν, με εύστοχα και γερά κτυπήματα, να βγάλουν εκτός μάχης ο καθένας τον αντίπαλό του.*/
    "Boxing": NamedNode;
    "BoxingCategory": NamedNode;
    /*A group of sports teams or fighters that compete against each other in Boxing*/
    "BoxingLeague": NamedNode;
    "BoxingStyle": NamedNode;
    /*Το βασικό όργανο του νευρικού συστήματος των ζώων, το οποίο καθορίζει ασυνείδητες και συνειδητές λειτουργίες. Ο όρος χρησιμοποιείται πλέον και για τον χαρακτηρισμό των καθοριστικότερων στοιχείων μίας μηχανής ή ενός συνόλου πραγμάτων.*/
    "Brain": NamedNode;
    /*Ζυθοποιία ονομάζεται η βιομηχανία παρασκευής μπύρας.*/
    "Brewery": NamedNode;
    /*A bridge is a structure built to span physical obstacles such as a body of water, valley, or road, for the purpose of providing passage over the obstacle (http://en.wikipedia.org/wiki/Bridge).*/
    "Bridge": NamedNode;
    "BritishRoyalty": NamedNode;
    /*A broadcast network is an organization, such as a corporation or other association, that provides live or recorded content, such as movies, newscasts, sports, and public affairs programs for broadcast over a group of radio or television stations. (http://en.wikipedia.org/wiki/Broadcast_network - 28/03/2011)*/
    "BroadcastNetwork": NamedNode;
    /*A broadcaster is an organisation responsible for the production of radio or television programs and/or their transmission. (http://en.wikipedia.org/wiki/Broadcaster - 28/03/2011)*/
    "Broadcaster": NamedNode;
    "BrownDwarf": NamedNode;
    "Building/floorArea": NamedNode;
    /*Building is defined as a Civil Engineering structure such as a house, worship center, factory etc. that has a foundation, wall, roof etc. that protect human being and their properties from direct harsh effect of weather like rain, wind, sun etc. (http://en.wikipedia.org/wiki/Building).*/
    "Building": NamedNode;
    "BullFighter": NamedNode;
    "BusCompany": NamedNode;
    /*Με τον όρο επιχειρηματίας νοείται κυρίως κάποιος που κατέχει μία ανώτερη θέση, όπως ένα στέλεχος.*/
    "BusinessPerson": NamedNode;
    /*Una fotocamera (in lingua italiana nota tradizionalmente come macchina fotografica) è uno strumento utilizzato per la ripresa fotografica e per ottenere immagini di oggetti reali stampabili su supporti materiali cartacei o archiviabili su supporti elettronici.*/
    "Camera": NamedNode;
    /*A group of sports teams that compete against each other in canadian football league.*/
    "CanadianFootballLeague": NamedNode;
    "CanadianFootballPlayer": NamedNode;
    "CanadianFootballTeam": NamedNode;
    "Canal/maximumBoatBeam": NamedNode;
    "Canal/maximumBoatLength": NamedNode;
    "Canal/originalMaximumBoatBeam": NamedNode;
    "Canal/originalMaximumBoatLength": NamedNode;
    /*a man-made channel for water*/
    "Canal": NamedNode;
    "Canoeist": NamedNode;
    /*An administrative (France) or lawcourts (Netherlands) body governing a territorial unity on the municipal level or somewhat above*/
    "Canton": NamedNode;
    "Cape": NamedNode;
    /*A municipality enjoying primary status in a state, country, province, or other region as its seat of government.*/
    "Capital": NamedNode;
    /*seat of a first order administration division.*/
    "CapitalOfRegion": NamedNode;
    /*come from http://en.wikipedia.org/wiki/Category:Card_games*/
    "CardGame": NamedNode;
    "Cardinal": NamedNode;
    /*One of the four main directions on a compass or any other system to determine a geographical position*/
    "CardinalDirection": NamedNode;
    /*this class marks a career step in the life of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a certain club*/
    "CareerStation": NamedNode;
    "Cartoon": NamedNode;
    /*A case is the total of work done to prepare for an administrative or business decision. As a rule, a case is reflected in a set of documents.*/
    "Case": NamedNode;
    /*In modern English, a casino is a facility which houses and accommodates certain types of gambling activities.*/
    "Casino": NamedNode;
    /*Castles often are, but need not be a military structure. They can serve for status, pleasure and hunt as well.*/
    "Castle": NamedNode;
    "Cat": NamedNode;
    "Caterer": NamedNode;
    "Cave": NamedNode;
    "Celebrity": NamedNode;
    "CelestialBody": NamedNode;
    /*A burial place*/
    "Cemetery": NamedNode;
    "Chancellor": NamedNode;
    "ChartsPlacements": NamedNode;
    /*A milk product prepared for human consumption*/
    "Cheese": NamedNode;
    /*a person who cooks professionally for other people*/
    "Chef": NamedNode;
    "ChemicalCompound": NamedNode;
    "ChemicalElement": NamedNode;
    "ChemicalSubstance/boilingPoint": NamedNode;
    "ChemicalSubstance/density": NamedNode;
    "ChemicalSubstance/meltingPoint": NamedNode;
    "ChemicalSubstance": NamedNode;
    "ChessPlayer": NamedNode;
    "ChristianBishop": NamedNode;
    /*Tenets of the Christian faith, e.g. Trinity, Nicene Creed*/
    "ChristianDoctrine": NamedNode;
    "ChristianPatriarch": NamedNode;
    /*This is used for church buildings, not any other meaning of church.*/
    "Church": NamedNode;
    /*Actualmente considérase como unha entidade urbana con alta densidade de poboación na que predominan fundamentalmente a industria e os servizos.*/
    "City": NamedNode;
    /*District, borough, area or neighbourhood in a city or town*/
    "CityDistrict": NamedNode;
    /*Ο Λούντβιχ βαν Μπετόβεν,Γερμανός συνθέτης και πιανίστας,ήταν ένας σπουδαίος καλλιτέχνης της κλασικής μουσικής.*/
    "ClassicalMusicArtist": NamedNode;
    /*Η σύνθεση κλασικής μουσικής μπορεί να πραγματοποιηθεί και με τη βοήθεια ειδικών προγραμμάτων στον υπολογιστή που χρησιμοποιούν συγκεκριμένο αλγόριθμο.*/
    "ClassicalMusicComposition": NamedNode;
    "Cleric": NamedNode;
    /*An administrative body governing some territorial unity, in this case a clerical administrative body*/
    "ClericalAdministrativeRegion": NamedNode;
    /*Een kloosterorde is een orde van religieuzen, mannen of vrouwen, die zich verenigd hebben omtrent een gemeenschappelijke geloofsopvatting en kloosterregel waaraan zij gebonden zijn, en op een permanente wijze samenleven binnen één en dezelfde plaatselijke gemeenschap, een klooster of een tempel. Meerdere kloosters van gelijkgezinde religieuzen vormen samen een kloosterorde.*/
    "ClericalOrder": NamedNode;
    "ClubMoss": NamedNode;
    "Coach": NamedNode;
    /*A coal pit is a place where charcoal is or was extracted*/
    "CoalPit": NamedNode;
    /*Collection of valuables is a collection considered to be a work in itself)*/
    "CollectionOfValuables": NamedNode;
    "College": NamedNode;
    "CollegeCoach": NamedNode;
    /*Color or colour is the visual perceptual property corresponding in humans to the categories called red, yellow, blue and others. Color derives from the spectrum of light (distribution of light energy versus wavelength) interacting in the eye with the spectral sensitivities of the light receptors.*/
    "Colour": NamedNode;
    "Comedian": NamedNode;
    "ComedyGroup": NamedNode;
    "Comic": NamedNode;
    "ComicStrip": NamedNode;
    "ComicsCharacter": NamedNode;
    "ComicsCreator": NamedNode;
    /*Κοινότητα είναι μία ομάδα ζώντων οργανισμών, ανθρώπων, φυτών ή ζώων που ζουν σε ένα κοινό περιβάλλον.*/
    "Community": NamedNode;
    "Company": NamedNode;
    "Competition": NamedNode;
    /*camp in which people are imprisoned or confined, commonly in large groups, without trial.
    Includes concentration, extermination, transit, detention, internment, (forced) labor, prisoner-of-war, Gulag; Nazi camps related to the Holocaust*/
    "ConcentrationCamp": NamedNode;
    "Congressman": NamedNode;
    /*Las coníferas son plantas vasculares, con las semillas contenidas en un cono. Son plantas leñosas.*/
    "Conifer": NamedNode;
    /*Una costellazione è ognuna delle 88 parti in cui la sfera celeste è convenzionalmente suddivisa allo scopo di mappare le stelle.*/
    "Constellation": NamedNode;
    "Contest": NamedNode;
    /*Un continente es una gran área de tierra emergida de la costra terrestre.*/
    "Continent": NamedNode;
    /*A quality assurance label for wines*/
    "ControlledDesignationOfOriginWine": NamedNode;
    "Convention": NamedNode;
    "ConveyorSystem/diameter": NamedNode;
    "ConveyorSystem/height": NamedNode;
    "ConveyorSystem/length": NamedNode;
    "ConveyorSystem/mass": NamedNode;
    "ConveyorSystem/weight": NamedNode;
    "ConveyorSystem/width": NamedNode;
    "ConveyorSystem": NamedNode;
    "Country": NamedNode;
    /*A country seat is a rural patch of land owned by a land owner.*/
    "CountrySeat": NamedNode;
    "Crater": NamedNode;
    /*the portion of a stream that is affected by ebb and flow of ocean tides*/
    "Creek": NamedNode;
    "CricketGround": NamedNode;
    /*a group of sports teams that compete against each other in Cricket*/
    "CricketLeague": NamedNode;
    "CricketTeam": NamedNode;
    "Cricketer": NamedNode;
    "Criminal": NamedNode;
    "CrossCountrySkier": NamedNode;
    "Crustacean": NamedNode;
    /*A cultivar is a plant or grouping of plants selected for desirable characteristics that can be maintained by propagation. A plant whose origin or selection is primarily due to intentional human activity.*/
    "CultivatedVariety": NamedNode;
    "Curler": NamedNode;
    /*a group of sports teams that compete against each other in Curling*/
    "CurlingLeague": NamedNode;
    "Currency": NamedNode;
    "Cycad": NamedNode;
    "CyclingCompetition": NamedNode;
    /*a group of sports teams that compete against each other in Cycling*/
    "CyclingLeague": NamedNode;
    "CyclingRace": NamedNode;
    "CyclingTeam": NamedNode;
    "Cyclist": NamedNode;
    "DTMRacer": NamedNode;
    /*A dam is part of a landscape infrastructure, like waterworks (canals) or roads, much more than a building, though, of course, it has been built, too.*/
    "Dam": NamedNode;
    "Dancer": NamedNode;
    "DartsPlayer": NamedNode;
    "Database": NamedNode;
    /*The intermediate level of a clerical administrative body between parish and diocese*/
    "Deanery": NamedNode;
    /*someone's death as a type of personal event*/
    "Death": NamedNode;
    /*An object, such as a medal or an order, that is awarded to honor the recipient ostentatiously.*/
    "Decoration": NamedNode;
    "Deity": NamedNode;
    /*Population of a place. Uses these properties: populationTotal, year (when measured, populationYear), rank (sortOrder of this place amongst its siblings at the same level), name (areal measured by the population, eg: "locality", "municipality" or "comitat")*/
    "Demographics": NamedNode;
    "Department": NamedNode;
    "Depth": NamedNode;
    "Deputy": NamedNode;
    /*A barren area of land where little precipitation occurs.*/
    "Desert": NamedNode;
    "Device": NamedNode;
    /*Η ψηφιακή φωτογραφική μηχανή είναι συσκευή η οποία καταγράφει εικόνες με ηλεκτρονικό τρόπο, σε αντίθεση με την συμβατική φωτογραφική μηχανή, η οποία καταγράφει εικόνες με χημικές και μηχανικές διαδικασίες.*/
    "DigitalCamera": NamedNode;
    /*A dike is an elongated naturally occurring ridge or artificially constructed fill or wall, which regulates water levels*/
    "Dike": NamedNode;
    /*District or see under the supervision of a bishop.*/
    "Diocese": NamedNode;
    "Diploma": NamedNode;
    "Disease": NamedNode;
    "DisneyCharacter": NamedNode;
    /*bagian wilayah administratif dibawah kabupaten*/
    "District": NamedNode;
    /*Conservancy, governmental agency dedicated to surface water management*/
    "DistrictWaterBoard": NamedNode;
    /*two people's divorce as a type of personal event*/
    "Divorce": NamedNode;
    /*Any document*/
    "Document": NamedNode;
    /*documenttype*/
    "DocumentType": NamedNode;
    "Dog": NamedNode;
    "Drama": NamedNode;
    "Drug/boilingPoint": NamedNode;
    "Drug/meltingPoint": NamedNode;
    "Drug": NamedNode;
    /*the result of a sudden release of energy in the Earth's crust that creates seismic waves*/
    "Earthquake": NamedNode;
    /*An economist is a professional in the social science discipline of economics.*/
    "Economist": NamedNode;
    "EducationalInstitution": NamedNode;
    "Egyptologist": NamedNode;
    "Election": NamedNode;
    "ElectionDiagram": NamedNode;
    "ElectricalSubstation": NamedNode;
    "Embryology": NamedNode;
    /*Arbeitgeber ist, wer die Arbeitsleistung des Arbeitnehmers kraft Arbeitsvertrages fordern kann und das Arbeitsentgelt schuldet.*/
    "Employer": NamedNode;
    /*An employers' organisation is an organisation of entrepreneurs who work together to coordinate their actions in the field of labour relations*/
    "EmployersOrganisation": NamedNode;
    "Engine/acceleration": NamedNode;
    "Engine/co2Emission": NamedNode;
    "Engine/cylinderBore": NamedNode;
    "Engine/diameter": NamedNode;
    "Engine/displacement": NamedNode;
    "Engine/height": NamedNode;
    "Engine/length": NamedNode;
    "Engine/pistonStroke": NamedNode;
    "Engine/powerOutput": NamedNode;
    "Engine/topSpeed": NamedNode;
    "Engine/torqueOutput": NamedNode;
    "Engine/weight": NamedNode;
    "Engine/width": NamedNode;
    "Engine": NamedNode;
    "Engineer": NamedNode;
    "Entomologist": NamedNode;
    "Enzyme": NamedNode;
    "Escalator/diameter": NamedNode;
    "Escalator/height": NamedNode;
    "Escalator/length": NamedNode;
    "Escalator/mass": NamedNode;
    "Escalator/weight": NamedNode;
    "Escalator/width": NamedNode;
    "Escalator": NamedNode;
    "EthnicGroup": NamedNode;
    "Eukaryote": NamedNode;
    "EurovisionSongContestEntry": NamedNode;
    "Event": NamedNode;
    /*A factory (previously manufactory) or manufacturing plant is an industrial site, usually consisting of buildings and machinery, or more commonly a complex having several buildings, where workers manufacture goods or operate machines processing one product into another.*/
    "Factory": NamedNode;
    /*A group of people related by common descent, a lineage.*/
    "Family": NamedNode;
    "Farmer": NamedNode;
    /*Een stijl of code voor kleding, bepaald door de voorkeursstijl van een tijdperk of door individuele ontwerpers.*/
    "Fashion": NamedNode;
    "FashionDesigner": NamedNode;
    "Fencer": NamedNode;
    "Fern": NamedNode;
    "FictionalCharacter": NamedNode;
    /*The territory under the authority of a feudal lord*/
    "Fiefdom": NamedNode;
    /*a group of sports teams that compete against each other in Field Hockey*/
    "FieldHockeyLeague": NamedNode;
    "FigureSkater": NamedNode;
    /*A document with a filename*/
    "File": NamedNode;
    "FillingStation": NamedNode;
    "Film": NamedNode;
    "FilmFestival": NamedNode;
    "Fish": NamedNode;
    "Flag": NamedNode;
    "FloweringPlant": NamedNode;
    /*Food is any eatable or drinkable substance that is normally consumed by humans.*/
    "Food": NamedNode;
    "FootballLeagueSeason": NamedNode;
    /*a competition between two football teams*/
    "FootballMatch": NamedNode;
    /*A natural place more or less densely grown with trees*/
    "Forest": NamedNode;
    /*A municipality that has ceased to exist, and most of the time got incorporated (wholesale or partly) into another municipality*/
    "FormerMunicipality": NamedNode;
    "FormulaOneRacer": NamedNode;
    "FormulaOneRacing": NamedNode;
    "FormulaOneTeam": NamedNode;
    /*Fortified place, most of the time to protect traffic routes*/
    "Fort": NamedNode;
    "Fungus": NamedNode;
    "GaelicGamesPlayer": NamedNode;
    "Galaxy/apoapsis": NamedNode;
    /*The average speed of a thing.*/
    "Galaxy/averageSpeed": NamedNode;
    "Galaxy/density": NamedNode;
    "Galaxy/mass": NamedNode;
    "Galaxy/maximumTemperature": NamedNode;
    "Galaxy/meanRadius": NamedNode;
    "Galaxy/meanTemperature": NamedNode;
    "Galaxy/minimumTemperature": NamedNode;
    "Galaxy/orbitalPeriod": NamedNode;
    "Galaxy/periapsis": NamedNode;
    "Galaxy/surfaceArea": NamedNode;
    "Galaxy/temperature": NamedNode;
    "Galaxy/volume": NamedNode;
    "Galaxy": NamedNode;
    /*a structured activity, usually undertaken for enjoyment and sometimes used as an educational tool*/
    "Game": NamedNode;
    /*A garden is a planned space, usually outdoors, set aside for the display, cultivation, and enjoyment of plants and other forms of nature. (http://en.wikipedia.org/wiki/Garden)*/
    "Garden": NamedNode;
    /*Een bouwsel dat de toegang tot een gebouw of stuk grond verleent dan wel afsluit.*/
    "Gate": NamedNode;
    "GatedCommunity": NamedNode;
    "Gene": NamedNode;
    "GeneLocation": NamedNode;
    "Genre": NamedNode;
    "GeologicalPeriod": NamedNode;
    "GeopoliticalOrganisation/areaMetro": NamedNode;
    "GeopoliticalOrganisation/populationDensity": NamedNode;
    "GeopoliticalOrganisation": NamedNode;
    "Ginkgo": NamedNode;
    "GivenName": NamedNode;
    /*Παγετώνες ονομάζονται μεγάλες μάζες πάγου συνήθως κινούμενες λόγω συμπίεσης του χιονιού.*/
    "Glacier": NamedNode;
    "Globularswarm": NamedNode;
    "Gnetophytes": NamedNode;
    /*Σε ένα γήπεδο γκολφ οι τρύπες συχνά κρύβουν κινδύνους, που ορίζονται ως ειδικές περιοχές για τις οποίες ισχύουν επιπρόσθετοι κανόνες διεξαγωγής του παιχνιδιού.*/
    "GolfCourse": NamedNode;
    /*Golfplayer that compete against each other in Golf*/
    "GolfLeague": NamedNode;
    "GolfPlayer": NamedNode;
    "GolfTournament": NamedNode;
    /*A government agency is a permanent or semi-permanent organization in the machinery of government that is responsible for the oversight and administration of specific functions, such as an intelligence agency.*/
    "GovernmentAgency": NamedNode;
    /*A cabinet is a body of high-ranking state officials, typically consisting of the top leaders of the executive branch.*/
    "GovernmentCabinet": NamedNode;
    /*a form of government*/
    "GovernmentType": NamedNode;
    /*An administrative body governing some territorial unity, in this case a governmental administrative body*/
    "GovernmentalAdministrativeRegion": NamedNode;
    "Governor": NamedNode;
    "GrandPrix/course": NamedNode;
    "GrandPrix/distance": NamedNode;
    "GrandPrix": NamedNode;
    "Grape": NamedNode;
    /*A monument erected on a tomb, or a memorial stone.*/
    "GraveMonument": NamedNode;
    "GreenAlga": NamedNode;
    "GridironFootballPlayer": NamedNode;
    "GrossDomesticProduct": NamedNode;
    "GrossDomesticProductPerCapita": NamedNode;
    /*An (informal) group of people.*/
    "Group": NamedNode;
    /*Describe la guitarra*/
    "Guitar": NamedNode;
    "Guitarist": NamedNode;
    /*A gymnast is one who performs gymnastics*/
    "Gymnast": NamedNode;
    /*a group of sports teams that compete against each other in Handball*/
    "HandballLeague": NamedNode;
    "HandballPlayer": NamedNode;
    "HandballTeam": NamedNode;
    "HighDiver": NamedNode;
    "Historian": NamedNode;
    "HistoricBuilding": NamedNode;
    "HistoricPlace": NamedNode;
    /*Mostly for feudal forms of authority, but can also serve for historical forms of centralised authority*/
    "HistoricalAreaOfAuthority": NamedNode;
    /*A place which used to be a country.*/
    "HistoricalCountry": NamedNode;
    /*a place which used to be a district.*/
    "HistoricalDistrict": NamedNode;
    /*A historical Period should be linked to a Place by way of the property dct:spatial (already defined)*/
    "HistoricalPeriod": NamedNode;
    /*A place which used to be a province.*/
    "HistoricalProvince": NamedNode;
    /*a place which used to be a region.*/
    "HistoricalRegion": NamedNode;
    /*A place which used to be a city or town or village.*/
    "HistoricalSettlement": NamedNode;
    "HockeyClub": NamedNode;
    "HockeyTeam": NamedNode;
    /*Un jour férié est un jour de fête civile ou religieuse, ou commémorant un événement.*/
    "Holiday": NamedNode;
    "HollywoodCartoon": NamedNode;
    /*A hormone is any member of a class of signaling molecules produced by glands in multicellular organisms that are transported by the circulatory system to target distant organs to regulate physiology and behaviour.*/
    "Hormone": NamedNode;
    "Horse": NamedNode;
    "HorseRace": NamedNode;
    "HorseRider": NamedNode;
    "HorseRiding": NamedNode;
    "HorseTrainer": NamedNode;
    "Hospital": NamedNode;
    /*Ο οικοδεσπότης χρησιμοποιείται συνήθως για να περιγράψει άνδρα παρουσιαστή γεγονότος.*/
    "Host": NamedNode;
    "HotSpring": NamedNode;
    "Hotel": NamedNode;
    "HumanDevelopmentIndex": NamedNode;
    "HumanGene": NamedNode;
    "HumanGeneLocation": NamedNode;
    "Humorist": NamedNode;
    /*a group of sports teams that compete against each other in Ice Hockey.*/
    "IceHockeyLeague": NamedNode;
    "IceHockeyPlayer": NamedNode;
    /*for example: Progressivism_in_the_United_States, Classical_liberalism*/
    "Ideology": NamedNode;
    /*A document that contains a visual image*/
    "Image": NamedNode;
    /*An information device such as PDAs or Video game consoles, etc.*/
    "InformationAppliance": NamedNode;
    "Infrastructure/length": NamedNode;
    "Infrastructure": NamedNode;
    /*group of sports teams that compete against each other in Inline Hockey.*/
    "InlineHockeyLeague": NamedNode;
    "Insect": NamedNode;
    /*Describes all musical instrument*/
    "Instrument": NamedNode;
    /*Een instrumentalist is een musicus die een muziekinstrument bespeelt. (https://nl.wikipedia.org/wiki/Instrumentalist)*/
    "Instrumentalist": NamedNode;
    "Intercommunality": NamedNode;
    "InternationalFootballLeagueEvent": NamedNode;
    /*An international organisation is either a private or a public organisation seeking to accomplish goals across country borders*/
    "InternationalOrganisation": NamedNode;
    "Island": NamedNode;
    "Jockey": NamedNode;
    "Journalist": NamedNode;
    "Judge": NamedNode;
    /*a group of sports teams that compete against each other in Lacrosse.*/
    "LacrosseLeague": NamedNode;
    "LacrossePlayer": NamedNode;
    "Lake/areaOfCatchment": NamedNode;
    "Lake/shoreLength": NamedNode;
    "Lake/volume": NamedNode;
    "Lake": NamedNode;
    "Language": NamedNode;
    "LaunchPad": NamedNode;
    "Law": NamedNode;
    /*A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service provided by a law firm is to advise clients (individuals or corporations) about their legal rights and responsibilities, and to represent their clients in civil or criminal cases, business transactions, and other matters in which legal advice and other assistance are sought.*/
    "LawFirm": NamedNode;
    /*a person who is practicing law.*/
    "Lawyer": NamedNode;
    "LegalCase": NamedNode;
    "Legislature": NamedNode;
    /*A letter from the alphabet.*/
    "Letter": NamedNode;
    "Library": NamedNode;
    "Lieutenant": NamedNode;
    "LifeCycleEvent": NamedNode;
    "Ligament": NamedNode;
    /*A style of Japanese novel*/
    "LightNovel": NamedNode;
    "Lighthouse": NamedNode;
    /*A coherent type of clothing or dressing following a particular fashion*/
    "LineOfFashion": NamedNode;
    "Linguist": NamedNode;
    /*Zijn vetten en vetachtige stoffen die in de biochemie een belangrijke rol spelen*/
    "Lipid": NamedNode;
    /*A general list of items.*/
    "List": NamedNode;
    /*Genres of literature, e.g. Satire, Gothic*/
    "LiteraryGenre": NamedNode;
    "Locality": NamedNode;
    "Lock": NamedNode;
    "Locomotive": NamedNode;
    "LunarCrater/diameter": NamedNode;
    "LunarCrater": NamedNode;
    "Lymph": NamedNode;
    /*Als Publikumszeitschrift (auch Magazin) bezeichnet man eine Gattung von Zeitschriften, die sich an eine sehr breite Zielgruppe wendet und keine fachlichen Prägungen oder andere spezifische Merkmale voraussetzt. Publikumszeitschriften dienen der Unterhaltung und Information, sie sollen unangestrengt gelesen werden können.*/
    "Magazine": NamedNode;
    "Mammal": NamedNode;
    /*Manga are comics created in Japan*/
    "Manga": NamedNode;
    /*Außerhalb Chinas wird der Begriff für Comics aus China verwendet.*/
    "Manhua": NamedNode;
    /*Korean term for comics and print cartoons*/
    "Manhwa": NamedNode;
    /*O γάμος είναι μια κοινωνική, θρησκευτική και νομική σύζευξη ή ένωση δύο ατόμων, διαφορετικού ή σε ορισμένες χώρες κατά τα τελευταία χρόνια και ίδιου φύλου.*/
    "Marriage": NamedNode;
    "MartialArtist": NamedNode;
    /*Mathematical concepts, e.g. Fibonacci numbers, Imaginary numbers, Symmetry*/
    "MathematicalConcept": NamedNode;
    "Mayor": NamedNode;
    "MeanOfTransportation/diameter": NamedNode;
    "MeanOfTransportation/height": NamedNode;
    "MeanOfTransportation/length": NamedNode;
    "MeanOfTransportation/mass": NamedNode;
    "MeanOfTransportation/weight": NamedNode;
    "MeanOfTransportation/width": NamedNode;
    "MeanOfTransportation": NamedNode;
    /*storage and transmission channels or tools used to store and deliver information or data*/
    "Media": NamedNode;
    "Medician": NamedNode;
    /*The science and art of healing the human body and identifying the causes of disease*/
    "Medicine": NamedNode;
    /*A regular or irregular meeting of people as an event to keep record of*/
    "Meeting": NamedNode;
    "MemberOfParliament": NamedNode;
    "MemberResistanceMovement": NamedNode;
    /*A monument erected to commemorate a person, an event and/or group. In the case of a person, this might be a grave or tomb.*/
    "Memorial": NamedNode;
    /*Η στάση μετρό χρησιμοποιείται συνήθως για μια τοποθεσία ή σημείο όπου σταματάει το μεταφορικό μέσο μετρό*/
    "MetroStation": NamedNode;
    /*A microregion is a - mainy statistical - region in Brazil, at an administrative level between a meso-region and a community*/
    "MicroRegion": NamedNode;
    "MilitaryAircraft": NamedNode;
    "MilitaryConflict": NamedNode;
    "MilitaryPerson": NamedNode;
    /*A military structure such as a Castle, Fortress, Wall, etc.*/
    "MilitaryStructure": NamedNode;
    "MilitaryUnit": NamedNode;
    "MilitaryVehicle": NamedNode;
    /*a unit operation designed to break a solid material into smaller pieces*/
    "Mill": NamedNode;
    /*A mine is a place where mineral resources are or were extracted*/
    "Mine": NamedNode;
    /*A naturally occurring solid chemical substance.*/
    "Mineral": NamedNode;
    "MixedMartialArtsEvent": NamedNode;
    /*a group of sports teams that compete against each other in Mixed Martial Arts*/
    "MixedMartialArtsLeague": NamedNode;
    "MobilePhone": NamedNode;
    "Model": NamedNode;
    /*Τα μαλάκια αποτελούν μια τεράστια συνομοταξία ζώων, την πολυπληθέστερη μετά τα αρθρόποδα, με πάνω από 100.000 είδη.*/
    "Mollusca": NamedNode;
    "Monarch": NamedNode;
    /*Een klooster (van het Latijnse claustrum, afgesloten ruimte) is een gebouw of een samenstel van gebouwen dat dient tot huisvesting van een groep of gemeenschap van mannen of vrouwen, vaak monniken of monialen genoemd, die zich uit de wereld heeft teruggetrokken om een godsdienstig leven te leiden.*/
    "Monastery": NamedNode;
    /*A type of structure (a statue or an art object) created to commemorate a person or important event, not necessarily of a catastrophic nature.*/
    "Monument": NamedNode;
    /*A mosque, sometimes spelt mosk, is a place of worship for followers of Islam.*/
    "Mosque": NamedNode;
    "Moss": NamedNode;
    "MotocycleRacer": NamedNode;
    "MotorRace": NamedNode;
    "Motorcycle": NamedNode;
    /*a group of sports teams or bikerider that compete against each other in Motorcycle Racing*/
    "MotorcycleRacingLeague": NamedNode;
    "MotorcycleRider": NamedNode;
    "MotorsportRacer": NamedNode;
    "MotorsportSeason": NamedNode;
    "Mountain": NamedNode;
    /*a path that allows the crossing of a mountain chain. It is usually a saddle point in between two areas of higher elevation*/
    "MountainPass": NamedNode;
    /*a chain of mountains bordered by highlands or separated from other mountains by passes or valleys.*/
    "MountainRange": NamedNode;
    "MouseGene": NamedNode;
    "MouseGeneLocation": NamedNode;
    /*a person who oversees making of film.*/
    "MovieDirector": NamedNode;
    "MovieGenre": NamedNode;
    /*A visual document that is intended to be animated; equivalent to http://purl.org/dc/dcmitype/MovingImage*/
    "MovingImage": NamedNode;
    "MovingWalkway/diameter": NamedNode;
    "MovingWalkway/height": NamedNode;
    "MovingWalkway/length": NamedNode;
    "MovingWalkway/mass": NamedNode;
    "MovingWalkway/weight": NamedNode;
    "MovingWalkway/width": NamedNode;
    "MovingWalkway": NamedNode;
    "MultiVolumePublication": NamedNode;
    /*An administrative body governing a territorial unity on the lower level, administering one or a few more settlements*/
    "Municipality": NamedNode;
    "Murderer": NamedNode;
    "Muscle": NamedNode;
    "Museum": NamedNode;
    /*a person who creates music.*/
    "MusicComposer": NamedNode;
    /*A person who is the director of an orchestra or concert band.*/
    "MusicDirector": NamedNode;
    "MusicFestival": NamedNode;
    "MusicGenre": NamedNode;
    "Musical": NamedNode;
    "MusicalArtist": NamedNode;
    "MusicalWork": NamedNode;
    "MythologicalFigure": NamedNode;
    "NCAATeamSeason": NamedNode;
    "Name": NamedNode;
    "NarutoCharacter": NamedNode;
    "NascarDriver": NamedNode;
    /*Patriotic musical composition which is the offcial national song.*/
    "NationalAnthem": NamedNode;
    "NationalCollegiateAthleticAssociationAthlete": NamedNode;
    "NationalFootballLeagueEvent": NamedNode;
    "NationalFootballLeagueSeason": NamedNode;
    "NationalSoccerClub": NamedNode;
    /*Το φυσικό γεγονός χρησιμοποιείται για να περιγράψει ένα συμβάν που πραγματοποιείται φυσικά*/
    "NaturalEvent": NamedNode;
    /*Der natürlicher Ort beinhaltet alle Orte die natürlicherweise im Universum existieren.*/
    "NaturalPlace": NamedNode;
    /*H φυσική περιοχή χρησιμοποιείται για να περιγράψει την έκταση μιας γεωγραφικής περιοχής στην οποία η ανθρωπογενής παρέμβαση είναι ανύπαρκτη μέχρι ελάχιστη*/
    "NaturalRegion": NamedNode;
    "Nerve": NamedNode;
    "NetballPlayer": NamedNode;
    /*A newspaper is a regularly scheduled publication containing news of current events, informative articles, diverse features and advertising. It usually is printed on relatively inexpensive, low-grade paper such as newsprint.*/
    "Newspaper": NamedNode;
    "NobelPrize": NamedNode;
    "Noble": NamedNode;
    /*Family deemed to be of noble descent*/
    "NobleFamily": NamedNode;
    "Non-ProfitOrganisation": NamedNode;
    "NordicCombined": NamedNode;
    /*A book of long narrative in literary prose*/
    "Novel": NamedNode;
    "NuclearPowerStation": NamedNode;
    /*A body of saline water that composes much of a planet's hydrosphere.*/
    "Ocean": NamedNode;
    "OfficeHolder": NamedNode;
    "OldTerritory": NamedNode;
    "OlympicEvent": NamedNode;
    "OlympicResult": NamedNode;
    "Olympics": NamedNode;
    "On-SiteTransportation/diameter": NamedNode;
    "On-SiteTransportation/height": NamedNode;
    "On-SiteTransportation/length": NamedNode;
    "On-SiteTransportation/mass": NamedNode;
    "On-SiteTransportation/weight": NamedNode;
    "On-SiteTransportation/width": NamedNode;
    "On-SiteTransportation": NamedNode;
    "Openswarm": NamedNode;
    "Opera": NamedNode;
    /*All types and sizes of organs*/
    "Organ": NamedNode;
    "Organisation": NamedNode;
    /*A member of an organisation.*/
    "OrganisationMember": NamedNode;
    "Orphan": NamedNode;
    "OverseasDepartment": NamedNode;
    /*a group of sports teams that compete against each other in Paintball*/
    "PaintballLeague": NamedNode;
    "Painter": NamedNode;
    /*Describes a painting to assign picture entries in wikipedia to artists.*/
    "Painting": NamedNode;
    /*The smallest unit of a clerical administrative body*/
    "Parish": NamedNode;
    /*A park is an area of open space provided for recreational use. http://en.wikipedia.org/wiki/Park*/
    "Park": NamedNode;
    "Parliament": NamedNode;
    "PenaltyShootOut": NamedNode;
    "PeriodOfArtisticStyle": NamedNode;
    /*Periodical literature (also called a periodical publication or simply a periodical) is a published work that appears in a new edition on a regular schedule. The most familiar examples are the newspaper, often published daily, or weekly; or the magazine, typically published weekly, monthly or as a quarterly. Other examples would be a newsletter, a literary journal or learned journal, or a yearbook.*/
    "PeriodicalLiterature": NamedNode;
    "Person/height": NamedNode;
    "Person/weight": NamedNode;
    "Person": NamedNode;
    "PersonFunction": NamedNode;
    /*an event that occurs in someone's personal life*/
    "PersonalEvent": NamedNode;
    "Philosopher": NamedNode;
    /*Philosophical concepts, e.g. Existentialism, Cogito Ergo Sum*/
    "PhilosophicalConcept": NamedNode;
    "Photographer": NamedNode;
    /*Immobile things or locations.*/
    "Place": NamedNode;
    "Planet/apoapsis": NamedNode;
    /*The average speed of a thing.*/
    "Planet/averageSpeed": NamedNode;
    "Planet/density": NamedNode;
    "Planet/mass": NamedNode;
    "Planet/maximumTemperature": NamedNode;
    "Planet/meanRadius": NamedNode;
    "Planet/meanTemperature": NamedNode;
    "Planet/minimumTemperature": NamedNode;
    "Planet/orbitalPeriod": NamedNode;
    "Planet/periapsis": NamedNode;
    "Planet/surfaceArea": NamedNode;
    "Planet/temperature": NamedNode;
    "Planet/volume": NamedNode;
    "Planet": NamedNode;
    "Plant": NamedNode;
    /*A play is a form of literature written by a playwright, usually consisting of scripted dialogue between characters, intended for theatrical performance rather than just reading.*/
    "Play": NamedNode;
    /*A person who writes dramatic literature or drama.*/
    "PlayWright": NamedNode;
    "PlayboyPlaymate": NamedNode;
    "Poem": NamedNode;
    "Poet": NamedNode;
    "PokerPlayer": NamedNode;
    /*Political concepts, e.g. Capitalism, Democracy*/
    "PoliticalConcept": NamedNode;
    "PoliticalFunction": NamedNode;
    /*for example: Democratic_Party_(United_States)*/
    "PoliticalParty": NamedNode;
    "Politician": NamedNode;
    "PoliticianSpouse": NamedNode;
    /*A group of sports teams that compete against each other in Polo.*/
    "PoloLeague": NamedNode;
    "Polyhedron": NamedNode;
    /*Zijn koolhydraten die zijn opgebouwd uit tien of meer monosacharide-eenheden*/
    "Polysaccharide": NamedNode;
    "Pope": NamedNode;
    /*The area of the thing in square meters.*/
    "PopulatedPlace/area": NamedNode;
    "PopulatedPlace/areaMetro": NamedNode;
    "PopulatedPlace/areaTotal": NamedNode;
    "PopulatedPlace/areaUrban": NamedNode;
    "PopulatedPlace/populationDensity": NamedNode;
    "PopulatedPlace/populationMetroDensity": NamedNode;
    "PopulatedPlace/populationUrbanDensity": NamedNode;
    /*As defined by the United States Geological Survey, a populated place is a place or area with clustered or scattered buildings and a permanent human population (city, settlement, town, or village) referenced with geographic coordinates (http://en.wikipedia.org/wiki/Populated_place).*/
    "PopulatedPlace": NamedNode;
    "Population": NamedNode;
    /*a location on a coast or shore containing one or more harbors where ships can dock and transfer people or cargo to or from land.*/
    "Port": NamedNode;
    "PowerStation": NamedNode;
    "Prefecture": NamedNode;
    "PrehistoricalPeriod": NamedNode;
    /*TV or radio show presenter*/
    "Presenter": NamedNode;
    "President": NamedNode;
    "Priest": NamedNode;
    "PrimeMinister": NamedNode;
    "Prison": NamedNode;
    /*a person who manages movies or music recordings.*/
    "Producer": NamedNode;
    "Profession": NamedNode;
    "Professor": NamedNode;
    "ProgrammingLanguage": NamedNode;
    /*A project is a temporary endeavor undertaken to achieve defined objectives.*/
    "Project": NamedNode;
    /*Deze klasse duidt gebieden aan met de status 'beschermd'. Is dus eigenlijk ook geen klasse, maar zou een attribuut moeten zijn*/
    "ProtectedArea": NamedNode;
    "Protein": NamedNode;
    "ProtohistoricalPeriod": NamedNode;
    /*An administrative body governing a territorial unity on the intermediate level, between local and national level*/
    "Province": NamedNode;
    "Psychologist": NamedNode;
    /*Είναι οι υπηρεσίες που προσφέρονται από δομές του κράτους*/
    "PublicService": NamedNode;
    /*A public transit system is a shared passenger transportation service which is available for use by the general public. Public transport modes include buses, trolleybuses, trams and trains, 'rapid transit' (metro/subways/undergrounds etc) and ferries. Intercity public transport is dominated by airlines, coaches, and intercity rail. (http://en.wikipedia.org/wiki/Public_transit).*/
    "PublicTransitSystem": NamedNode;
    /*Publishing company*/
    "Publisher": NamedNode;
    /*a structure whose shape is roughly that of a pyramid in the geometric sense.*/
    "Pyramid": NamedNode;
    "Quote": NamedNode;
    "Race": NamedNode;
    "RaceHorse": NamedNode;
    "RaceTrack": NamedNode;
    /*A racecourse is an alternate term for a horse racing track, found in countries such as the United Kingdom, Australia, Hong Kong, and the United Arab Emirates.*/
    "Racecourse": NamedNode;
    "RacingDriver": NamedNode;
    /*A group of sports teams or person that compete against each other in radio-controlled racing.*/
    "RadioControlledRacingLeague": NamedNode;
    "RadioHost": NamedNode;
    "RadioProgram": NamedNode;
    /*A radio station has one line up. For instance the radio station BBC Radio 1. Not to be confused with the broadcasting network BBC, which has many radio stations.*/
    "RadioStation": NamedNode;
    /*A railway line is a transport service by trains that pull passengers or freight provided by an organization. Not to be mistaken for railway track, which is the structure consisting of the rails. Wikipedia do not clearly differentiate between both, so there is one infobox describing tracks and lines.*/
    "RailwayLine": NamedNode;
    "RailwayStation": NamedNode;
    "RailwayTunnel": NamedNode;
    /*Ο οδηγός ράλι χρησιμοποιείται για να περιγράψει άνδρα που  λαμβάνει μέρος σε αγώνες αυτοκινήτων ειδικής κατηγορίας*/
    "RallyDriver": NamedNode;
    "Ratio": NamedNode;
    "Rebellion": NamedNode;
    "RecordLabel": NamedNode;
    "RecordOffice": NamedNode;
    /*An official who watches a game or match closely to ensure that the rules are adhered to.*/
    "Referee": NamedNode;
    /*Reference to a work (book, movie, website)  providing info about the subject*/
    "Reference": NamedNode;
    /*bagian wilayah administratif dibawah provinsi*/
    "Regency": NamedNode;
    "Region": NamedNode;
    "Relationship": NamedNode;
    "Religious": NamedNode;
    "ReligiousBuilding": NamedNode;
    "ReligiousOrganisation": NamedNode;
    "Reptile": NamedNode;
    /*A research project is a scientific investigation, usually using scientific methods, to achieve defined objectives.*/
    "ResearchProject": NamedNode;
    /*A rest area is part of a Road, meant to stop and rest. More often than not, there is a filling station*/
    "RestArea": NamedNode;
    "Restaurant": NamedNode;
    /*A Resume describes a persons work experience and skill set.*/
    "Resume": NamedNode;
    /*a large natural stream*/
    "River": NamedNode;
    "Road": NamedNode;
    /*A road junction is a location where vehicular traffic going in different directions can proceed in a controlled manner designed to minimize accidents. In some cases, vehicles can change between different routes or directions of travel (http://en.wikipedia.org/wiki/Junction_%28road%29).*/
    "RoadJunction": NamedNode;
    "RoadTunnel": NamedNode;
    /*Payload mass in a typical Low Earth orbit*/
    "Rocket/lowerEarthOrbitPayload": NamedNode;
    "Rocket/mass": NamedNode;
    "Rocket": NamedNode;
    "RocketEngine": NamedNode;
    "RollerCoaster": NamedNode;
    "RomanEmperor": NamedNode;
    /*A route of transportation (thoroughfare) may refer to a public road, highway, path or trail or a route on water from one place to another for use by a variety of general traffic (http://en.wikipedia.org/wiki/Thoroughfare).*/
    "RouteOfTransportation": NamedNode;
    /*one stage or stop on a road.*/
    "RouteStop": NamedNode;
    "Rower": NamedNode;
    "Royalty": NamedNode;
    "RugbyClub": NamedNode;
    /*A group of sports teams that compete against each other in rugby.*/
    "RugbyLeague": NamedNode;
    "RugbyPlayer": NamedNode;
    "Saint": NamedNode;
    "Sales": NamedNode;
    "SambaSchool": NamedNode;
    /*An astronomic object orbiting around a planet or star. Definition partly derived from http://www.ontotext.com/proton/protonext# (and thus WordNet 1.7).*/
    "Satellite": NamedNode;
    "School/campusSize": NamedNode;
    "School": NamedNode;
    /*Scientific concepts, e.g. Theory of relativity, Quantum gravity*/
    "ScientificConcept": NamedNode;
    "Scientist": NamedNode;
    /*Ο σεναριογράφος όχι μόνο γράφει την υπόθεση μιας σειράς άλλα είναι αυτός που επινοεί και τους πρωταγωνιστές του έργου.*/
    "ScreenWriter": NamedNode;
    "Sculptor": NamedNode;
    /*Een beeldhouwwerk is een drie-dimensionaal kunstvoorwerp of plastiek, gemaakt van harde materialen zoals steen of metaal. Ook kunnen textiel of kunststoffen erin verwerkt zijn of het hoofdbestanddeel ervan uitmaken.*/
    "Sculpture": NamedNode;
    "Sea": NamedNode;
    "Senator": NamedNode;
    "SerialKiller": NamedNode;
    "Settlement": NamedNode;
    "Ship": NamedNode;
    "ShoppingMall": NamedNode;
    "Shrine": NamedNode;
    /*a person who sings.*/
    "Singer": NamedNode;
    /*In music, a single or record single is a type of release, typically a recording of fewer tracks than an LP or a CD.*/
    "Single": NamedNode;
    /*A Site of Special Scientific Interest (SSSI) is a conservation designation denoting a protected area in the United Kingdom. SSSIs are the basic building block of site-based nature conservation legislation and most other legal nature/geological conservation designations in Great Britain are based upon them, including National Nature Reserves, Ramsar Sites, Special Protection Areas, and Special Areas of Conservation.*/
    "SiteOfSpecialScientificInterest": NamedNode;
    "Skater": NamedNode;
    "SkiArea": NamedNode;
    /*Το θέρετρο σκι χρησιμοποιείται για να περιγράψει έναν τόπο διακοπών με τις απαραίτητες εγκαταστάσεις διαμονής και εξάσκησης του χειμερινού αθλήματος της χιονοδρομίας*/
    "SkiResort": NamedNode;
    "Ski_jumper": NamedNode;
    "Skier": NamedNode;
    "Skyscraper": NamedNode;
    /*An athlete that plays snooker and won the world championship at least once*/
    "SnookerChamp": NamedNode;
    /*An athlete that plays snooker, which is a billard derivate*/
    "SnookerPlayer": NamedNode;
    /*Die offizielle Weltrangliste im Snooker eines Jahres / einer Saison*/
    "SnookerWorldRanking": NamedNode;
    "SoapCharacter": NamedNode;
    /*A sports game in which the ball must be played by foot*/
    "Soccer": NamedNode;
    "SoccerClub": NamedNode;
    "SoccerClubSeason": NamedNode;
    /*A group of sports teams that compete against each other in soccer.*/
    "SoccerLeague": NamedNode;
    "SoccerLeagueSeason": NamedNode;
    "SoccerManager": NamedNode;
    "SoccerPlayer": NamedNode;
    "SoccerTournament": NamedNode;
    /*an event that is clearly different from strictly personal events*/
    "SocietalEvent": NamedNode;
    /*A group of sports teams that compete against each other in softball.*/
    "SoftballLeague": NamedNode;
    /*size of a file or software*/
    "Software/fileSize": NamedNode;
    "Software": NamedNode;
    /*Έκλειψη ηλίου ονομάζεται το φαινόμενο κατά το οποίο η Σελήνη παρεμβάλλεται ανάμεσα στον Ήλιο και τη Γη, με αποτέλεσμα ορισμένες περιοχές της Γης να δέχονται λιγότερο φως από ό,τι συνήθως.*/
    "SolarEclipse": NamedNode;
    "Song": NamedNode;
    /*a person who writes songs.*/
    "SongWriter": NamedNode;
    /*An audio document intended to be listened to; equivalent to http://purl.org/dc/dcmitype/Sound*/
    "Sound": NamedNode;
    "SpaceMission/cmpEvaDuration": NamedNode;
    "SpaceMission/distanceTraveled": NamedNode;
    "SpaceMission/lunarEvaTime": NamedNode;
    "SpaceMission/lunarOrbitTime": NamedNode;
    "SpaceMission/lunarSampleMass": NamedNode;
    "SpaceMission/lunarSurfaceTime": NamedNode;
    "SpaceMission/mass": NamedNode;
    "SpaceMission/missionDuration": NamedNode;
    "SpaceMission/stationEvaDuration": NamedNode;
    "SpaceMission/stationVisitDuration": NamedNode;
    "SpaceMission": NamedNode;
    "SpaceShuttle/distance": NamedNode;
    "SpaceShuttle/timeInSpace": NamedNode;
    "SpaceShuttle": NamedNode;
    "SpaceStation/volume": NamedNode;
    "SpaceStation": NamedNode;
    "Spacecraft/apoapsis": NamedNode;
    "Spacecraft/cargoFuel": NamedNode;
    "Spacecraft/cargoGas": NamedNode;
    "Spacecraft/cargoWater": NamedNode;
    "Spacecraft/dockedTime": NamedNode;
    "Spacecraft/dryCargo": NamedNode;
    "Spacecraft/freeFlightTime": NamedNode;
    "Spacecraft/periapsis": NamedNode;
    "Spacecraft/totalCargo": NamedNode;
    "Spacecraft/totalMass": NamedNode;
    "Spacecraft": NamedNode;
    "Species": NamedNode;
    "SpeedSkater": NamedNode;
    /*A group of sports teams that compete against each other in motorcycle speedway racing.*/
    "SpeedwayLeague": NamedNode;
    "SpeedwayRider": NamedNode;
    "SpeedwayTeam": NamedNode;
    /*A sport is commonly defined as an organized, competitive, and skillful physical activity.*/
    "Sport": NamedNode;
    "SportCompetitionResult": NamedNode;
    "SportFacility": NamedNode;
    "SportsClub": NamedNode;
    /*a event of competitive physical activity*/
    "SportsEvent": NamedNode;
    /*A group of sports teams or individual athletes that compete against each other in a specific sport.*/
    "SportsLeague": NamedNode;
    /*According to the french label sub Soccer, trainership could be meant. However, here a Sportsmanager is interpreted as a member of the board of a sporting club.*/
    "SportsManager": NamedNode;
    "SportsSeason": NamedNode;
    "SportsTeam": NamedNode;
    /*A member of an athletic team.*/
    "SportsTeamMember": NamedNode;
    /*A season for a particular sports team (as opposed to the season for the entire league that the team is in)*/
    "SportsTeamSeason": NamedNode;
    "Square": NamedNode;
    "SquashPlayer": NamedNode;
    "Stadium": NamedNode;
    /*a common specification*/
    "Standard": NamedNode;
    "Star": NamedNode;
    "State": NamedNode;
    /*A Resolution describes a formal statement adopted by a meeting or convention.*/
    "StatedResolution": NamedNode;
    /*Public transport station (eg. railway station, metro station, bus station).*/
    "Station": NamedNode;
    "Statistic": NamedNode;
    /*A visual document that is not intended to be animated; equivalent to http://purl.org/dc/dcmitype/StillImage*/
    "StillImage": NamedNode;
    /*Een stormvloed is de grootschalige overstroming van een kustgebied onder invloed van de op elkaar inwerkende krachten van wind, getij en water*/
    "StormSurge": NamedNode;
    "Stream/discharge": NamedNode;
    "Stream/dischargeAverage": NamedNode;
    "Stream/maximumDischarge": NamedNode;
    "Stream/minimumDischarge": NamedNode;
    "Stream/watershed": NamedNode;
    /*a flowing body of water with a current, confined within a bed and stream banks*/
    "Stream": NamedNode;
    /*A Street is different from a Road in as far as the infrastructure aspect is much less important here. A Street is a social and architectural ensemble much more than the connection between two geographic points.*/
    "Street": NamedNode;
    /*An administrative body governing a territorial unity on the lowest level, administering part of a municipality*/
    "SubMunicipality": NamedNode;
    "SumoWrestler": NamedNode;
    "SupremeCourtOfTheUnitedStatesCase": NamedNode;
    "Surfer": NamedNode;
    "Surname": NamedNode;
    "Swarm": NamedNode;
    /*a trained athlete who participates in swimming meets*/
    "Swimmer": NamedNode;
    /*A synagogue, sometimes spelt synagog, is a Jewish or Samaritan house of prayer.*/
    "Synagogue": NamedNode;
    /*a system of legislation, either national or international*/
    "SystemOfLaw": NamedNode;
    /*Athlete who plays table tennis*/
    "TableTennisPlayer": NamedNode;
    "Tax": NamedNode;
    /*a category within a classification system for Species*/
    "Taxon": NamedNode;
    /*A member of an athletic team.*/
    "TeamMember": NamedNode;
    /*A team sport is commonly defined as a sport that is being played by competing teams*/
    "TeamSport": NamedNode;
    /*a person who directs the activities involved in making a television program.*/
    "TelevisionDirector": NamedNode;
    /*A television episode is a part of serial television program.*/
    "TelevisionEpisode": NamedNode;
    "TelevisionHost": NamedNode;
    "TelevisionPersonality": NamedNode;
    "TelevisionSeason": NamedNode;
    "TelevisionShow": NamedNode;
    /*A television station has usually one line up. For instance the television station WABC-TV (or ABC 7, Channel 7). Not to be confused with the broadcasting network ABC, which has many television stations.*/
    "TelevisionStation": NamedNode;
    "Temple": NamedNode;
    /*A group of sports teams or person that compete against each other in tennis.*/
    "TennisLeague": NamedNode;
    "TennisPlayer": NamedNode;
    "TennisTournament": NamedNode;
    "TermOfOffice": NamedNode;
    /*A territory may refer to a country subdivision, a non-sovereign geographic region.*/
    "Territory": NamedNode;
    /*A theater or theatre (also a playhouse) is a structure where theatrical works or plays are performed or other performances such as musical concerts may be produced.*/
    "Theatre": NamedNode;
    /*A director in the theatre field who oversees and orchestrates the mounting of a theatre production.*/
    "TheatreDirector": NamedNode;
    /*Theological concepts, e.g. The apocalypse, Trinty, Stoicism*/
    "TheologicalConcept": NamedNode;
    "TimePeriod": NamedNode;
    "TopicalConcept": NamedNode;
    "Tournament": NamedNode;
    /*A Tower is a kind of structure (not necessarily a building) that is higher than the rest*/
    "Tower": NamedNode;
    /*a settlement ranging from a few hundred to several thousand (occasionally hundreds of thousands). The precise meaning varies between countries and is not always a matter of legal definition. Usually, a town is thought of as larger than a village but smaller than a city, though there are exceptions to this rule.*/
    "Town": NamedNode;
    /*A list of music tracks, like on a CD*/
    "TrackList": NamedNode;
    /*A trade union or labor union is an organization of workers who have banded together to achieve common goals such as better working conditions.*/
    "TradeUnion": NamedNode;
    "Train": NamedNode;
    "TrainCarriage": NamedNode;
    "Tram": NamedNode;
    "TramStation": NamedNode;
    /*A mill driven by the tractive power of horses, donkeys or even people*/
    "Treadmill": NamedNode;
    "Treaty": NamedNode;
    /*A tunnel may be for foot or vehicular road traffic, for rail traffic, or for a canal. Some tunnels are aqueducts to supply water for consumption or for hydroelectric stations or are sewers (http://en.wikipedia.org/wiki/Tunnel).*/
    "Tunnel": NamedNode;
    /*a category within a classification system*/
    "Type": NamedNode;
    /*An underground journal is, although over time there have always been publications forbidden by law, a phenomenon typical of countries occupied by the Germans during the Second World War. The writing in the underground press aims at stiffening a spirit of resistance against Nazi occupation. The distribution of underground journals had to be very secretive and was, therefore, very much dependant on illegal distribution circuits and the hazards of persecution by the occupant.*/
    "UndergroundJournal": NamedNode;
    /*This class is meant to convey the notion of an amount work to be done. It is different from Activity in that it has a definite end and is being measured.*/
    "UnitOfWork": NamedNode;
    "University": NamedNode;
    "Unknown": NamedNode;
    /*a depression with predominant extent in one direction*/
    "Valley": NamedNode;
    "Vein": NamedNode;
    "Venue": NamedNode;
    "Vicar": NamedNode;
    "VicePresident": NamedNode;
    "VicePrimeMinister": NamedNode;
    /*A video game is an electronic game that involves interaction with a user interface to generate visual feedback on a video device.*/
    "VideoGame": NamedNode;
    /*A group of sports teams or person that compete against each other in videogames.*/
    "VideogamesLeague": NamedNode;
    /*Núcleo pequeno de poboación en que se divide unha parroquia, con poucos veciños e de carácter rural.*/
    "Village": NamedNode;
    "Vodka": NamedNode;
    "VoiceActor": NamedNode;
    /*A volcano is currently subclass of naturalplace, but it might also be considered a mountain.*/
    "Volcano": NamedNode;
    "VolleyballCoach": NamedNode;
    /*A group of sports teams that compete against each other in volleyball.*/
    "VolleyballLeague": NamedNode;
    "VolleyballPlayer": NamedNode;
    "WaterPoloPlayer": NamedNode;
    "WaterRide": NamedNode;
    /*a construction designed to store larger quantities of water at a place of some elevation in order to keep pressure on the water provision system*/
    "WaterTower": NamedNode;
    /*A watermill is a structure that uses a water wheel or turbine to drive a mechanical process such as flour, lumber or textile production, or metal shaping (rolling, grinding or wire drawing)*/
    "Watermill": NamedNode;
    "WaterwayTunnel": NamedNode;
    "Weapon/diameter": NamedNode;
    "Weapon/height": NamedNode;
    "Weapon/length": NamedNode;
    "Weapon/weight": NamedNode;
    "Weapon/width": NamedNode;
    "Weapon": NamedNode;
    "Website": NamedNode;
    /*A wind-driven turbine that adapts itself to wind direction and to wind-force. Is considered to be a class in its own, despite the wind as common factor with Windmill.*/
    "WindMotor": NamedNode;
    /*A windmill is a machine that converts the energy of wind into rotational energy by means of vanes called sails*/
    "Windmill": NamedNode;
    "Wine": NamedNode;
    "WineRegion": NamedNode;
    "Winery": NamedNode;
    "WinterSportPlayer": NamedNode;
    "WomensTennisAssociationTournament": NamedNode;
    "Work/runtime": NamedNode;
    "Work": NamedNode;
    /*A UNESCO World Heritage Site is a site (such as a forest, mountain, lake, desert, monument, building, complex, or city) that is on the list that is maintained by the international World Heritage Programme administered by the UNESCO World Heritage Committee, composed of 21 state parties which are elected by their General Assembly for a four-year term. A World Heritage Site is a place of either cultural or physical significance.*/
    "WorldHeritageSite": NamedNode;
    "Wrestler": NamedNode;
    "WrestlingEvent": NamedNode;
    "Writer": NamedNode;
    /*Ein geschriebenes Erzeugnis ist jede Art von Text der geschrieben wurde um ihn zu lesen (z.B. Bücher, Zeitungen, Artikel).*/
    "WrittenWork": NamedNode;
    "Year": NamedNode;
    "YearInSpaceflight": NamedNode;
    "Zoo": NamedNode;
    "aSide": NamedNode;
    "abbeychurchBlessing": NamedNode;
    "abbeychurchBlessingCharge": NamedNode;
    "abbreviation": NamedNode;
    "ableToGrind": NamedNode;
    "absoluteMagnitude": NamedNode;
    /*Number of abstentions from the vote*/
    "abstentions": NamedNode;
    /*Reserved for DBpedia.*/
    "abstract": NamedNode;
    "academicAdvisor": NamedNode;
    /*An academic discipline, or field of study, is a branch of knowledge that is taught and researched at the college or university level. Disciplines are defined (in part), and recognized by the academic journals in which research is published, and the learned societies and academic departments or faculties to which their practitioners belong.*/
    "academicDiscipline": NamedNode;
    "academyAward": NamedNode;
    "acceleration": NamedNode;
    "access": NamedNode;
    "accessDate": NamedNode;
    "achievement": NamedNode;
    "acquirementDate": NamedNode;
    /*most recent average ACT scores*/
    "actScore": NamedNode;
    "actingHeadteacher": NamedNode;
    /*Also called "floruit". Use this if the active years are in one field that can't be split. Else use activeYearsStartYear and activeYearsEndYear*/
    "activeYears": NamedNode;
    "activeYearsEndDate": NamedNode;
    "activeYearsEndDateMgr": NamedNode;
    "activeYearsEndYear": NamedNode;
    "activeYearsEndYearMgr": NamedNode;
    "activeYearsStartDate": NamedNode;
    "activeYearsStartDateMgr": NamedNode;
    "activeYearsStartYear": NamedNode;
    "activeYearsStartYearMgr": NamedNode;
    "activity": NamedNode;
    "added": NamedNode;
    /*Address of something as literal. Usually Building, but we also use it for the address of a Region's or Settlement's government*/
    "address": NamedNode;
    /*A building, organisation or other thing that is located in the road.*/
    "addressInRoad": NamedNode;
    "adjacentSettlement": NamedNode;
    "administrativeCenter": NamedNode;
    "administrativeCollectivity": NamedNode;
    "administrativeDistrict": NamedNode;
    /*city where stand the administrative power*/
    "administrativeHeadCity": NamedNode;
    "administrativeStatus": NamedNode;
    "administrator": NamedNode;
    "afdbId": NamedNode;
    "affair": NamedNode;
    "affiliate": NamedNode;
    "affiliation": NamedNode;
    "afiAward": NamedNode;
    "age": NamedNode;
    /*Age range of students admitted in a School, MilitaryUnit, etc*/
    "ageRange": NamedNode;
    "agency": NamedNode;
    /*Agency station code (used on tickets/reservations, etc.).*/
    "agencyStationCode": NamedNode;
    "agglomeration": NamedNode;
    "agglomerationArea": NamedNode;
    "agglomerationDemographics": NamedNode;
    "agglomerationPopulation": NamedNode;
    "agglomerationPopulationTotal": NamedNode;
    "agglomerationPopulationYear": NamedNode;
    "aggregation": NamedNode;
    "airDate": NamedNode;
    "aircraftAttack": NamedNode;
    "aircraftBomber": NamedNode;
    "aircraftElectronic": NamedNode;
    "aircraftFighter": NamedNode;
    "aircraftHelicopter": NamedNode;
    "aircraftHelicopterAttack": NamedNode;
    "aircraftHelicopterCargo": NamedNode;
    "aircraftHelicopterMultirole": NamedNode;
    "aircraftHelicopterObservation": NamedNode;
    "aircraftHelicopterTransport": NamedNode;
    "aircraftHelicopterUtility": NamedNode;
    "aircraftInterceptor": NamedNode;
    "aircraftPatrol": NamedNode;
    "aircraftRecon": NamedNode;
    "aircraftTrainer": NamedNode;
    "aircraftTransport": NamedNode;
    "aircraftType": NamedNode;
    "aircraftUser": NamedNode;
    "airportUsing": NamedNode;
    "aitaCode": NamedNode;
    /*reflection coefficient*/
    "albedo": NamedNode;
    "album": NamedNode;
    "albumRuntime": NamedNode;
    "alias": NamedNode;
    "allcinemaId": NamedNode;
    /*The country or other power the person served. Multiple countries may be indicated together with the corresponding dates. This field should not be used to indicate a particular service branch, which is better indicated by the branch field.*/
    "allegiance": NamedNode;
    "alliance": NamedNode;
    /*schools that they attended*/
    "almaMater": NamedNode;
    "alongside": NamedNode;
    /*the Alps group to which the mountain belongs, according to the SOIUSA classification*/
    "alpsGroup": NamedNode;
    /*the Alps main part to which the mountain belongs, according to the SOIUSA classification*/
    "alpsMainPart": NamedNode;
    /*the Alps major sector to which the mountain belongs, according to the SOIUSA classification*/
    "alpsMajorSector": NamedNode;
    /*the Alps section to which the mountain belongs, according to the SOIUSA classification*/
    "alpsSection": NamedNode;
    /*the Alps SOIUSA code corresponding to the mountain, according to the SOIUSA classification*/
    "alpsSoiusaCode": NamedNode;
    /*the Alps subgroup to which the mountain belongs, according to the SOIUSA classification*/
    "alpsSubgroup": NamedNode;
    /*the Alps subsection to which the mountain belongs, according to the SOIUSA classification*/
    "alpsSubsection": NamedNode;
    /*the Alps supergroup to which the mountain belongs, according to the SOIUSA classification*/
    "alpsSupergroup": NamedNode;
    /*Alternative naming of anything not being a Person (for which case foaf:nick should be used).*/
    "alternativeName": NamedNode;
    /*The alternative title attributed to a work*/
    "alternativeTitle": NamedNode;
    "altitude": NamedNode;
    "alumni": NamedNode;
    "amateurDefeat": NamedNode;
    "amateurFight": NamedNode;
    "amateurKo": NamedNode;
    "amateurNoContest": NamedNode;
    "amateurTeam": NamedNode;
    "amateurTie": NamedNode;
    "amateurTitle": NamedNode;
    "amateurVictory": NamedNode;
    "amateurYear": NamedNode;
    "americanComedyAward": NamedNode;
    "amgid": NamedNode;
    "amsterdamCode": NamedNode;
    "analogChannel": NamedNode;
    "animal": NamedNode;
    "animator": NamedNode;
    "anniversary": NamedNode;
    "announcedFrom": NamedNode;
    "annualTemperature": NamedNode;
    /*Official song (anthem) of a PopulatedPlace, SportsTeam, School or other*/
    "anthem": NamedNode;
    "apcPresident": NamedNode;
    "apoapsis": NamedNode;
    "apofocus": NamedNode;
    "apparentMagnitude": NamedNode;
    "appearancesInLeague": NamedNode;
    "appearancesInNationalTeam": NamedNode;
    "appointer": NamedNode;
    "approach": NamedNode;
    /*Date of approval by lower parliament (House of Commons, Chambre des Députés, Bundestag, Tweede Kamer etc.).*/
    "approvedByLowerParliament": NamedNode;
    /*Date of approval by upper parliament (House of Lords, Sénat, Eerste Kamer etc.).*/
    "approvedByUpperParliament": NamedNode;
    /*Approximate calories per serving.*/
    "approximateCalories": NamedNode;
    "apskritis": NamedNode;
    "archipelago": NamedNode;
    "architect": NamedNode;
    "architectualBureau": NamedNode;
    "architecturalMovement": NamedNode;
    "architecturalStyle": NamedNode;
    /*The area of the thing in square meters.*/
    "area": NamedNode;
    /*Area code for telephone numbers. Use this not phonePrefix*/
    "areaCode": NamedNode;
    "areaDate": NamedNode;
    "areaLand": NamedNode;
    "areaMetro": NamedNode;
    "areaOfCatchment": NamedNode;
    "areaOfCatchmentQuote": NamedNode;
    "areaOfSearch": NamedNode;
    "areaQuote": NamedNode;
    "areaRank": NamedNode;
    "areaRural": NamedNode;
    "areaTotal": NamedNode;
    "areaTotalRanking": NamedNode;
    "areaUrban": NamedNode;
    "areaWater": NamedNode;
    "argueDate": NamedNode;
    "arielAward": NamedNode;
    "arm": NamedNode;
    /*Ένας στρατός αποτελεί τις επίγειες ένοπλες δυνάμεις ενός έθνους*/
    "army": NamedNode;
    "arrestDate": NamedNode;
    "arrondissement": NamedNode;
    /*An influential, wealthy person who supported an artist, craftsman, a scholar or a noble.. See also*/
    "artPatron": NamedNode;
    "artery": NamedNode;
    "artificialSnowArea": NamedNode;
    /*The performer or creator of the musical work.*/
    "artist": NamedNode;
    "artisticFunction": NamedNode;
    "asWikiText": NamedNode;
    /*Ascent of a celestial body, aircraft, etc. For person who ascended a mountain, use firstAscent*/
    "ascent": NamedNode;
    "asiaChampionship": NamedNode;
    "aspectRatio": NamedNode;
    "assembly": NamedNode;
    "assetUnderManagement": NamedNode;
    /*Assets and liabilities are part of a companis balance sheet. In financial accounting, assets are economic resources. Anything tangible or intangible that is capable of being owned or controlled to produce value and that is held to have positive economic value is considered an asset.*/
    "assets": NamedNode;
    "assistantPrincipal": NamedNode;
    "associate": NamedNode;
    "associateEditor": NamedNode;
    "associateStar": NamedNode;
    "associatedAct": NamedNode;
    "associatedBand": NamedNode;
    "associatedMusicalArtist": NamedNode;
    "associatedRocket": NamedNode;
    "associationOfLocalGovernment": NamedNode;
    "astrologicalSign": NamedNode;
    /*Page # where the referenced resource is to be found in the source document*/
    "atPage": NamedNode;
    /*Row # where the referenced resource is to be found in the source file*/
    "atRowNumber": NamedNode;
    "atcPrefix": NamedNode;
    "atcSuffix": NamedNode;
    "atcSupplemental": NamedNode;
    "athletics": NamedNode;
    "athleticsDiscipline": NamedNode;
    /*Is eard is uimhir adamhach (Z) adaimh ann ná líon na bprótón i núicléas an adaimh sin*/
    "atomicNumber": NamedNode;
    /*Public attorney*/
    "attorneyGeneral": NamedNode;
    "australiaOpenDouble": NamedNode;
    "australiaOpenMixed": NamedNode;
    "australiaOpenSingle": NamedNode;
    "author": NamedNode;
    "authority": NamedNode;
    "authorityMandate": NamedNode;
    "authorityTitle": NamedNode;
    "automobileModel": NamedNode;
    "automobilePlatform": NamedNode;
    "autonomy": NamedNode;
    /*Chipkarte für automatische Bezahlsysteme im Personenverkehr die an diesem Bahnhof benutzt werden kann.*/
    "availableSmartCard": NamedNode;
    "average": NamedNode;
    "averageAnnualGeneration": NamedNode;
    "averageClassSize": NamedNode;
    /*Source of the value can be declare by .*/
    "averageDepth": NamedNode;
    /*Source of the  value.*/
    "averageDepthQuote": NamedNode;
    /*The average speed of a thing.*/
    "averageSpeed": NamedNode;
    "avifaunaPopulation": NamedNode;
    /*Award won by a Person, Musical or other Work, RaceHorse, Building, etc*/
    "award": NamedNode;
    /*Award a person has received (literal). Compare to award (ObjectProperty)*/
    "awardName": NamedNode;
    /*A colour represented by its hex code (e.g.: #FF0000 or #40E0D0).*/
    "awayColourHexCode": NamedNode;
    "bSide": NamedNode;
    "background": NamedNode;
    "backhand": NamedNode;
    "badGuy": NamedNode;
    "baftaAward": NamedNode;
    "band": NamedNode;
    /*A member of the band.*/
    "bandMember": NamedNode;
    "barPassRate": NamedNode;
    "barangays": NamedNode;
    "basedOn": NamedNode;
    "battingSide": NamedNode;
    "battle": NamedNode;
    "battleHonours": NamedNode;
    "beatifiedBy": NamedNode;
    "beatifiedDate": NamedNode;
    "beatifiedPlace": NamedNode;
    "bedCount": NamedNode;
    "believers": NamedNode;
    "beltwayCity": NamedNode;
    "bestFinish": NamedNode;
    "bestLap": NamedNode;
    "bestRankDouble": NamedNode;
    "bestRankSingle": NamedNode;
    "bestWsopRank": NamedNode;
    "bestYearWsop": NamedNode;
    "bgafdId": NamedNode;
    /*BIBSYS is a supplier of library and information systems for all Norwegian university Libraries, the National Library of Norway, college libraries, and a number of research libraries and institutions.*/
    "bibsysId": NamedNode;
    /*Information on station's bicycle facilities.*/
    "bicycleInformation": NamedNode;
    "bigPoolRecord": NamedNode;
    "biggestCity": NamedNode;
    "billed": NamedNode;
    "binomial": NamedNode;
    "binomialAuthority": NamedNode;
    /*"The rate and extent to which the active ingredient or active moiety is absorbed from a drug product and becomes available at the site of action. For drug products that are not intended to be absorbed into the bloodstream, bioavailability may be assessed by measurements intended to reflect the rate and extent to which the active ingredient or active moiety becomes available at the site of action (21CFR320.1)."*/
    "bioavailability": NamedNode;
    "bioclimate": NamedNode;
    "biome": NamedNode;
    /*Τα πτηνά είναι ζώα ομοιόθερμα σπονδυλωτά, που στη συντριπτική πλειονότητα τους μπορούν να πετούν με τις πτέρυγες ή φτερούγες τους.*/
    "bird": NamedNode;
    "birthDate": NamedNode;
    "birthName": NamedNode;
    /*where the person was born*/
    "birthPlace": NamedNode;
    "birthSign": NamedNode;
    "birthYear": NamedNode;
    /*A bishopric (diocese or episcopal see) is a district under the supervision of a bishop. It is divided into parishes. Compare with eparchy*/
    "bishopric": NamedNode;
    "blackLongDistancePisteNumber": NamedNode;
    "blackSkiPisteNumber": NamedNode;
    /*Coat of arms (heraldic image) or emblem*/
    "blazon": NamedNode;
    "blazonCaption": NamedNode;
    "blazonLink": NamedNode;
    "blazonRatio": NamedNode;
    "block": NamedNode;
    "blockAlloy": NamedNode;
    "bloodGroup": NamedNode;
    "bloodType": NamedNode;
    "blueLongDistancePisteNumber": NamedNode;
    "blueSkiPisteNumber": NamedNode;
    /*Authority data of people listed in the general catalogue of the National Library of France*/
    "bnfId": NamedNode;
    "board": NamedNode;
    "bodyDiscovered": NamedNode;
    "bodyStyle": NamedNode;
    "boiler": NamedNode;
    "boilerPressure": NamedNode;
    "boilingPoint": NamedNode;
    "book": NamedNode;
    "booster": NamedNode;
    "border": NamedNode;
    "borough": NamedNode;
    "bourgmestre": NamedNode;
    "bowlRecord": NamedNode;
    "boxerCategory": NamedNode;
    "boxerStyle": NamedNode;
    /*Dutch project with material for 40,000 digitized biographies, including former colonies of the Netherlands.*/
    "bpnId": NamedNode;
    "brainInfoNumber": NamedNode;
    "brainInfoType": NamedNode;
    "branchFrom": NamedNode;
    "branchTo": NamedNode;
    "brand": NamedNode;
    "breeder": NamedNode;
    /*Type of vehicles the bridge carries.*/
    "bridgeCarries": NamedNode;
    "britishComedyAwards": NamedNode;
    "britishOpen": NamedNode;
    "britishWins": NamedNode;
    "broadcastArea": NamedNode;
    /*Die Sendergruppe zu dem der Rundfunkveranstalter gehört.*/
    "broadcastNetwork": NamedNode;
    "broadcastRepeater": NamedNode;
    "broadcastStationClass": NamedNode;
    "broadcastTranslator": NamedNode;
    "bronzeMedalDouble": NamedNode;
    "bronzeMedalMixed": NamedNode;
    "bronzeMedalSingle": NamedNode;
    "bronzeMedalist": NamedNode;
    "budget": NamedNode;
    "budgetYear": NamedNode;
    "builder": NamedNode;
    "building": NamedNode;
    /*Building end date of an ArchitecturalStructure, man-made Lake, etc. For older structures this can be just a year or century, for newer structures an exact date is preferred*/
    "buildingEndDate": NamedNode;
    "buildingEndYear": NamedNode;
    /*Building start date of an ArchitecturalStructure, man-made Lake, etc. For older structures this can be just a year or century, for newer structures an exact date is preferred*/
    "buildingStartDate": NamedNode;
    "buildingStartYear": NamedNode;
    /*Type is te algemeen. We moeten soorten muziek van soorten gebouwen kunnen onderscheiden*/
    "buildingType": NamedNode;
    "bustSize": NamedNode;
    /*Use this property if all 3 sizes are given together (DBpedia cannot currently extract 3 Lengths out of a field). Otherwise use separate fields bustSize, waistSize, hipSize*/
    "bustWaistHipSize": NamedNode;
    "cableCar": NamedNode;
    "calculationNeeds": NamedNode;
    /*A call sign is not the name of a broadcaster! In broadcasting and radio communications, a call sign (also known as a call name or call letters, or abbreviated as a call) is a unique designation for a transmitting station.*/
    "callSign": NamedNode;
    /*The out written call sign.*/
    "callsignMeaning": NamedNode;
    /*Πανεπιστημιούπολη εννοείται κάθε πολεοδομικό συγκρότημα που προσφέρει οικιστικές, διδακτικές και ερευνητικές διευκολύνσεις στους φοιτητές ενός πανεπιστημίου.*/
    "campus": NamedNode;
    "campusSize": NamedNode;
    "campusType": NamedNode;
    /*Whether bags can be checked.*/
    "canBaggageChecked": NamedNode;
    "cannonNumber": NamedNode;
    "canonizedBy": NamedNode;
    "canonizedDate": NamedNode;
    "canonizedPlace": NamedNode;
    "canton": NamedNode;
    /*Number of people who can be served by a Train or other service; or participate in a SoccerClub, CricketTeam, etc*/
    "capacity": NamedNode;
    "capacityFactor": NamedNode;
    "capital": NamedNode;
    "capitalCoordinates": NamedNode;
    "capitalCountry": NamedNode;
    "capitalDistrict": NamedNode;
    "capitalElevation": NamedNode;
    "capitalMountain": NamedNode;
    "capitalPlace": NamedNode;
    "capitalPosition": NamedNode;
    "capitalRegion": NamedNode;
    "captureDate": NamedNode;
    "carNumber": NamedNode;
    /*Amount of carbohydrates per servingSize of a Food*/
    "carbohydrate": NamedNode;
    "carcinogen": NamedNode;
    "careerPoints": NamedNode;
    "careerPrizeMoney": NamedNode;
    /*this property links to a step in the career of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a club.*/
    "careerStation": NamedNode;
    "cargoFuel": NamedNode;
    "cargoGas": NamedNode;
    "cargoWater": NamedNode;
    /*Chemical Abstracts Service number. Applicable to ChemicalCompound or Biomolecule (eg Protein)*/
    "casNumber": NamedNode;
    "casSupplemental": NamedNode;
    "case": NamedNode;
    /*Number of casualties of a MilitaryConflict or natural disaster such as an Earthquake*/
    "casualties": NamedNode;
    "catch": NamedNode;
    "category": NamedNode;
    "caterer": NamedNode;
    "catholicPercentage": NamedNode;
    "causalties": NamedNode;
    "causeOfDeath": NamedNode;
    "causedBy": NamedNode;
    "ccaState": NamedNode;
    "ceeb": NamedNode;
    /*Maximum distance to the earth surface, to be expressed in kilometers*/
    "ceiling": NamedNode;
    "cemetery": NamedNode;
    "censusYear": NamedNode;
    "center": NamedNode;
    /*Anzahl Breaks mit 100 Punkten oder mehr, wird nicht übersetzt*/
    "centuryBreaks": NamedNode;
    "ceo": NamedNode;
    "ceremonialCounty": NamedNode;
    "certification": NamedNode;
    "certificationDate": NamedNode;
    "cesarAward": NamedNode;
    /*A unique identifier for the drug in the Chemical Entities of Biological Interest (ChEBI) ontology*/
    "chEBI": NamedNode;
    /*The chain of Hotels this instance is associated with.*/
    "chain": NamedNode;
    "chairLabel": NamedNode;
    "chairman": NamedNode;
    "chairmanTitle": NamedNode;
    "chairperson": NamedNode;
    /*winner of a competition*/
    "champion": NamedNode;
    /*winner of a competition in the double session (as in tennis)*/
    "championInDouble": NamedNode;
    /*winner of a competition in the female double session (as in tennis)*/
    "championInDoubleFemale": NamedNode;
    /*winner of a competition in the male double session (as in tennis)*/
    "championInDoubleMale": NamedNode;
    /*winner of a competition in the mixed double session (as in tennis)*/
    "championInMixedDouble": NamedNode;
    /*winner of a competition in the single session, to distinguish from the double session (as in tennis)*/
    "championInSingle": NamedNode;
    /*winner of a competition in the single female session, to distinguish from the double session (as in tennis)*/
    "championInSingleFemale": NamedNode;
    /*winner of a competition in the single male session, to distinguish from the double session (as in tennis)*/
    "championInSingleMale": NamedNode;
    "championships": NamedNode;
    "chancellor": NamedNode;
    "channel": NamedNode;
    "chaplain": NamedNode;
    /*Name of a character in play.*/
    "characterInPlay": NamedNode;
    "chef": NamedNode;
    "chiefEditor": NamedNode;
    "chiefPlace": NamedNode;
    "child": NamedNode;
    "childOrganisation": NamedNode;
    "choreographer": NamedNode;
    /*The name of the (Greek) chorus character in play.*/
    "chorusCharacterInPlay": NamedNode;
    "christeningDate": NamedNode;
    "chromosome": NamedNode;
    "cinematography": NamedNode;
    "circle": NamedNode;
    "circuitLength": NamedNode;
    "circuitName": NamedNode;
    "circulation": NamedNode;
    "circumcised": NamedNode;
    /*A document cited by this work. Like OntologyProperty:dct:references, but as a datatype property.*/
    "cites": NamedNode;
    "citizenship": NamedNode;
    "city": NamedNode;
    "cityLink": NamedNode;
    /*Der Platz des Gebäudes in der Liste der höchsten Gebäude der Stadt*/
    "cityRank": NamedNode;
    "citySince": NamedNode;
    "cityType": NamedNode;
    "class": NamedNode;
    "classes": NamedNode;
    "classification": NamedNode;
    /*Troisième niveau de la classification classique (c’est-à-dire n’utilisant pas la notion de distance génétique) des espèces vivantes (voir systématique).*/
    "classis": NamedNode;
    "climate": NamedNode;
    "climbUpNumber": NamedNode;
    /*lieu proche d'un autre.*/
    "closeTo": NamedNode;
    "closed": NamedNode;
    "closingDate": NamedNode;
    "closingFilm": NamedNode;
    "closingYear": NamedNode;
    "clothSize": NamedNode;
    "clothingSize": NamedNode;
    "club": NamedNode;
    "clubsRecordGoalscorer": NamedNode;
    "cluster": NamedNode;
    "cmpEvaDuration": NamedNode;
    "cmykCoordinateBlack": NamedNode;
    "cmykCoordinateCyanic": NamedNode;
    "cmykCoordinateMagenta": NamedNode;
    "cmykCoordinateYellow": NamedNode;
    "co2Emission": NamedNode;
    "coExecutiveProducer": NamedNode;
    "coProducer": NamedNode;
    "coach": NamedNode;
    "coachClub": NamedNode;
    "coachSeason": NamedNode;
    "coachedTeam": NamedNode;
    "coachingRecord": NamedNode;
    /*Παλαιότερα ο συνασπισμός χρησιμοποιούνταν ως στρατιωτικός όρος που υποδήλωνε την όμορη παράταξη πολεμιστών κατά την οποία ο κάθε στρατιώτης προφύλασσε τον διπλανό του με την ασπίδα του.*/
    "coalition": NamedNode;
    "coastLength": NamedNode;
    "coastLine": NamedNode;
    /*image of the coat of arms (heraldic symbol)*/
    "coatOfArms": NamedNode;
    "code": NamedNode;
    /*code book or statute book referred to in this legal case*/
    "codeBook": NamedNode;
    "codeDistrict": NamedNode;
    "codeIndex": NamedNode;
    /*Kadastercode voor een perceel*/
    "codeLandRegistry": NamedNode;
    "codeListOfHonour": NamedNode;
    /*Code oorlogsmonument of ander gedenkteken*/
    "codeMemorial": NamedNode;
    /*Code assigned to (Dutch) monuments at the municipal level, deemed to be of local value*/
    "codeMunicipalMonument": NamedNode;
    /*Code assigned to (Dutch) monuments at the national level, deemed to be of national value*/
    "codeNationalMonument": NamedNode;
    /*Code assigned to (Dutch) monuments at the provincial level, mostly for monuments in the countryside, or for waterworks*/
    "codeProvincialMonument": NamedNode;
    "codeSettlement": NamedNode;
    "codeStockExchange": NamedNode;
    /*CODEN is a six character, alphanumeric bibliographic code, that provides concise, unique and unambiguous identification of the titles of serials and non-serial publications from all subject areas.*/
    "coden": NamedNode;
    "coemperor": NamedNode;
    "collaboration": NamedNode;
    /*Colleague of a Person or OfficeHolder (not PersonFunction nor CareerStation). Sub-properties include: president, vicePresident, chancellor, viceChancellor, governor, lieutenant. Points to a Person who may have a general "position" (resource) or "title" (literal).*/
    "colleague": NamedNode;
    "collection": NamedNode;
    "collectionSize": NamedNode;
    "collectivityMinority": NamedNode;
    "college": NamedNode;
    "collegeHof": NamedNode;
    "colonialName": NamedNode;
    "colorChart": NamedNode;
    /*A colour represented by its entity.*/
    "colour": NamedNode;
    /*A colour represented by its hex code (e.g.: #FF0000 or #40E0D0).*/
    "colourHexCode": NamedNode;
    /*A colour represented by a string holding its name (e.g.: red or green).*/
    "colourName": NamedNode;
    "combatant": NamedNode;
    "comic": NamedNode;
    "comitat": NamedNode;
    "command": NamedNode;
    "commandModule": NamedNode;
    "commandStructure": NamedNode;
    "commandant": NamedNode;
    "commander": NamedNode;
    "comment": NamedNode;
    "commissioner": NamedNode;
    "commissionerDate": NamedNode;
    "commissioningDate": NamedNode;
    "committee": NamedNode;
    /*Committee in the legislature (eg.: Committee on Economic and Monetary Affairs of the European Parliament).*/
    "committeeInLegislature": NamedNode;
    /*The common name of an entity. Frequently, foaf:name is used for all of the different names of a person; this property just defines the most commonly used name.*/
    "commonName": NamedNode;
    "commune": NamedNode;
    "communityIsoCode": NamedNode;
    "company": NamedNode;
    /*similar, unrelated rockets*/
    "comparable": NamedNode;
    "competition": NamedNode;
    "competitionTitle": NamedNode;
    /*For compilation albums: the person or entity responsible for selecting the album's track listing.*/
    "compiler": NamedNode;
    "completionDate": NamedNode;
    "complexion": NamedNode;
    /*Complexity of preparing a Food (recipe)*/
    "complexity": NamedNode;
    "component": NamedNode;
    "composer": NamedNode;
    "compressionRatio": NamedNode;
    "computingInput": NamedNode;
    "computingMedia": NamedNode;
    /*some sort of hardware architecture or software framework, that allows this software to run*/
    "computingPlatform": NamedNode;
    "configuration": NamedNode;
    "conflict": NamedNode;
    "congressionalDistrict": NamedNode;
    /*connects a referenced resource to another resource. This property is important to connect non-extracted resources to extracted ones*/
    "connectsReferencedTo": NamedNode;
    /*A meaning of a word or phrase that is suggested or implied, as opposed to a denotation, or literal meaning.*/
    "connotation": NamedNode;
    "consecration": NamedNode;
    "conservationStatus": NamedNode;
    "conservationStatusSystem": NamedNode;
    "constellation": NamedNode;
    "construction": NamedNode;
    /*Construction material (eg. concrete, steel, iron, stone, brick, wood).*/
    "constructionMaterial": NamedNode;
    "contest": NamedNode;
    /*links a country to the continent it belongs*/
    "continent": NamedNode;
    /*Der Platz des Gebäudes in der Liste der höchsten Gebäude des Kontinents*/
    "continentRank": NamedNode;
    "continentalTournament": NamedNode;
    "continentalTournamentBronze": NamedNode;
    "continentalTournamentGold": NamedNode;
    "continentalTournamentSilver": NamedNode;
    "contractAward": NamedNode;
    "contractor": NamedNode;
    "convictionDate": NamedNode;
    "coolingSystem": NamedNode;
    "copilote": NamedNode;
    "coronationDate": NamedNode;
    /*Described at http://en.wikipedia.org/wiki/International_Designator*/
    "cosparId": NamedNode;
    /*Cost of building an ArchitecturalStructure, Ship, etc*/
    "cost": NamedNode;
    /*the person who is responsible for the film costume design*/
    "costumeDesigner": NamedNode;
    "council": NamedNode;
    "councilArea": NamedNode;
    /*The country where the thing is located.*/
    "country": NamedNode;
    "countryOrigin": NamedNode;
    /*Der Platz des Gebäudes in der Liste der höchsten Gebäude des Landes*/
    "countryRank": NamedNode;
    "countryWithFirstAstronaut": NamedNode;
    "countryWithFirstSatellite": NamedNode;
    "countryWithFirstSatelliteLaunched": NamedNode;
    "countryWithFirstSpaceflight": NamedNode;
    /*The county where the thing is located.*/
    "county": NamedNode;
    "countySeat": NamedNode;
    "course": NamedNode;
    "cousurper": NamedNode;
    /*Cover artist*/
    "coverArtist": NamedNode;
    /*CPU of an InformationAppliance or VideoGame (which unfortunately is currently under Software)*/
    "cpu": NamedNode;
    "created": NamedNode;
    "creationChristianBishop": NamedNode;
    "creationYear": NamedNode;
    "creativeDirector": NamedNode;
    /*Creator/author of a work. For literal (string) use dc:creator; for object (URL) use creator*/
    "creator": NamedNode;
    /*The person that creates (invents) the food (eg. Caesar Cardini is the creator of the Caesar salad).*/
    "creatorOfDish": NamedNode;
    "credit": NamedNode;
    "crest": NamedNode;
    "crew": NamedNode;
    "crewMember": NamedNode;
    "crewSize": NamedNode;
    "crews": NamedNode;
    "criteria": NamedNode;
    "crosses": NamedNode;
    "crownDependency": NamedNode;
    /*National cuisine of a Food or Restaurant*/
    "cuisine": NamedNode;
    /*Name of the cultivar (cultivated variety)*/
    "cultivatedVariety": NamedNode;
    "curator": NamedNode;
    /*υπολογίζει ή εκφράζει οικονομικές αξίες*/
    "currency": NamedNode;
    /*ISO 4217 currency designators.*/
    "currencyCode": NamedNode;
    "currentCity": NamedNode;
    "currentLeague": NamedNode;
    "currentMember": NamedNode;
    "currentPartner": NamedNode;
    /*The current production running in the theatre.*/
    "currentProduction": NamedNode;
    "currentRank": NamedNode;
    "currentRecord": NamedNode;
    "currentSeason": NamedNode;
    "currentStatus": NamedNode;
    "currentTeam": NamedNode;
    "currentTeamManager": NamedNode;
    /*A current member of an athletic team.*/
    "currentTeamMember": NamedNode;
    "currentWorldChampion": NamedNode;
    /*Current use of the architectural structure, if it is currently being used as anything other than its original purpose.*/
    "currentlyUsedFor": NamedNode;
    "custodian": NamedNode;
    "cyclistGenre": NamedNode;
    "cylinderBore": NamedNode;
    "cylinderCount": NamedNode;
    "daira": NamedNode;
    "dam": NamedNode;
    "damage": NamedNode;
    "damsire": NamedNode;
    "danseCompetition": NamedNode;
    "danseScore": NamedNode;
    "data/definitions.ttl": NamedNode;
    "date": NamedNode;
    "dateAct": NamedNode;
    "dateAgreement": NamedNode;
    "dateBudget": NamedNode;
    "dateClosed": NamedNode;
    "dateCompleted": NamedNode;
    "dateConstruction": NamedNode;
    "dateExtended": NamedNode;
    "dateLastUpdated": NamedNode;
    "dateOfAbandonment": NamedNode;
    "dateOfBurial": NamedNode;
    /*Designates the unveiling date*/
    "dateUnveiled": NamedNode;
    "dateUse": NamedNode;
    "davisCup": NamedNode;
    "day": NamedNode;
    "daylightSavingTimeZone": NamedNode;
    /*ID in Digitale Bibliotheek voor de Nederlandse Letteren (dbnl)*/
    "dbnlCodeDutch": NamedNode;
    /*The Dewey Decimal Classification is a proprietary system of library classification developed by Melvil Dewey in 1876.*/
    "dcc": NamedNode;
    "deFactoLanguage": NamedNode;
    "deadInFightDate": NamedNode;
    "deadInFightPlace": NamedNode;
    "dean": NamedNode;
    /*Dioceses and parishes should know which deaneries there are*/
    "deanery": NamedNode;
    "deathAge": NamedNode;
    "deathCause": NamedNode;
    "deathDate": NamedNode;
    /*The place where the person died.*/
    "deathPlace": NamedNode;
    "deathYear": NamedNode;
    "debut": NamedNode;
    "debutTeam": NamedNode;
    /*First work of a person (may be notableWork or not)*/
    "debutWork": NamedNode;
    "dec": NamedNode;
    "decay": NamedNode;
    "decideDate": NamedNode;
    "declination": NamedNode;
    "decommissioningDate": NamedNode;
    "decoration": NamedNode;
    "defeat": NamedNode;
    "defeatAsMgr": NamedNode;
    "definition": NamedNode;
    "delegateMayor": NamedNode;
    "delegation": NamedNode;
    "deliveryDate": NamedNode;
    "deme": NamedNode;
    "demographics": NamedNode;
    "demographicsAsOf": NamedNode;
    /*The date the building was demolished.*/
    "demolitionDate": NamedNode;
    /*The year the building was demolished.*/
    "demolitionYear": NamedNode;
    "demonym": NamedNode;
    "denomination": NamedNode;
    "density": NamedNode;
    "department": NamedNode;
    "departmentCode": NamedNode;
    "departmentPosition": NamedNode;
    /*This property can be used to map image captions from Infoboxes*/
    "depictionDescription": NamedNode;
    /*Is a measure of the distance between a reference height and a point underneath. The exact meaning for a place is unclear. If possible, use  or  to be unambiguous.*/
    "depth": NamedNode;
    "depthQuote": NamedNode;
    "depths": NamedNode;
    "deputy": NamedNode;
    "derivative": NamedNode;
    "derivedWord": NamedNode;
    /*Short description of a person*/
    "description": NamedNode;
    "designCompany": NamedNode;
    "designer": NamedNode;
    "destination": NamedNode;
    "destructionDate": NamedNode;
    "detectionMethod": NamedNode;
    "detractor": NamedNode;
    /*Developer of a Work (Artwork, Book, Software) or Building (Hotel, Skyscraper)*/
    "developer": NamedNode;
    /*Department for Education (UK) number of a school in England or Wales*/
    "dfE": NamedNode;
    "diameter": NamedNode;
    "different": NamedNode;
    /*Ένα ψηφιακό κανάλι επιτρέπει την μετάδοση δεδομένων σε ψηφιακή μορφή.*/
    "digitalChannel": NamedNode;
    "digitalSubChannel": NamedNode;
    /*A religious administrative body above the parish level*/
    "diocese": NamedNode;
    "diploma": NamedNode;
    /*A film director is a person who directs the making of a film.*/
    "director": NamedNode;
    "disappearanceDate": NamedNode;
    "disbanded": NamedNode;
    "discharge": NamedNode;
    "dischargeAverage": NamedNode;
    /*A person who learns from another, especially one who then teaches others..*/
    "disciple": NamedNode;
    "discipline": NamedNode;
    "discontinued": NamedNode;
    "discovered": NamedNode;
    "discoverer": NamedNode;
    "discovery": NamedNode;
    "diseasesDb": NamedNode;
    "displacement": NamedNode;
    "dissolutionDate": NamedNode;
    "dissolutionYear": NamedNode;
    "dissolved": NamedNode;
    "dist_ly": NamedNode;
    "dist_pc": NamedNode;
    "distance": NamedNode;
    "distanceLaps": NamedNode;
    "distanceToBelfast": NamedNode;
    "distanceToCapital": NamedNode;
    "distanceToCardiff": NamedNode;
    "distanceToCharingCross": NamedNode;
    "distanceToDouglas": NamedNode;
    "distanceToDublin": NamedNode;
    "distanceToEdinburgh": NamedNode;
    "distanceToLondon": NamedNode;
    "distanceToNearestCity": NamedNode;
    "distanceTraveled": NamedNode;
    "distributingCompany": NamedNode;
    "distributingLabel": NamedNode;
    "distributor": NamedNode;
    "district": NamedNode;
    "division": NamedNode;
    "dockedTime": NamedNode;
    "doctoralAdvisor": NamedNode;
    "doctoralStudent": NamedNode;
    "documentDesignation": NamedNode;
    /*Identification a document within a particular registry*/
    "documentNumber": NamedNode;
    "domain": NamedNode;
    "dorlandsPrefix": NamedNode;
    "dorlandsSuffix": NamedNode;
    "draft": NamedNode;
    "draftLeague": NamedNode;
    "draftPick": NamedNode;
    "draftPosition": NamedNode;
    "draftRound": NamedNode;
    "draftTeam": NamedNode;
    "draftYear": NamedNode;
    "drainsFrom": NamedNode;
    "drainsTo": NamedNode;
    "drama": NamedNode;
    /*The recommended dress code for an establishment or event.*/
    "dressCode": NamedNode;
    "drugbank": NamedNode;
    "dryCargo": NamedNode;
    /*the person who dubs another person e.g. an actor or a fictional character in movies*/
    "dubber": NamedNode;
    /*The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format*/
    "duration": NamedNode;
    "dutchArtworkCode": NamedNode;
    "dutchCOROPCode": NamedNode;
    /*Code voor alle soorten monumenten gebezigd door het MI-project*/
    "dutchMIPCode": NamedNode;
    "dutchNAIdentifier": NamedNode;
    /*Dutch PPN code is a library cataloguing code for collection items (books, journals and the like).*/
    "dutchPPNCode": NamedNode;
    "dutchRKDCode": NamedNode;
    /*Dutch Winkel ID is a code for an underground publication, as attributed by Lydia Winkel's work on the underground WW II press in the Netherlands.*/
    "dutchWinkelID": NamedNode;
    "dynasty": NamedNode;
    "eMedicineSubject": NamedNode;
    /*Different from eMedicineSubject, which see*/
    "eMedicineTopic": NamedNode;
    "eTeatrId": NamedNode;
    /*indicates another place situated east.*/
    "eastPlace": NamedNode;
    "ecNumber": NamedNode;
    "editing": NamedNode;
    "editor": NamedNode;
    "editorTitle": NamedNode;
    "education": NamedNode;
    "educationPlace": NamedNode;
    "educationSystem": NamedNode;
    "effectiveRadiatedPower": NamedNode;
    "egafdId": NamedNode;
    "einecsNumber": NamedNode;
    /*Indexing code used by the Bulgarian National Statistical Institute to identify populated places*/
    "ekatteCode": NamedNode;
    "electionDate": NamedNode;
    /*The date that leader was elected.*/
    "electionDateLeader": NamedNode;
    /*number of votes the office holder attained*/
    "electionMajority": NamedNode;
    /*element placed above current element in D.I.Mendeleev's table*/
    "elementAbove": NamedNode;
    /*A block of the periodic table of elements is a set of adjacent groups.*/
    "elementBlock": NamedNode;
    /*In chemistry, a group (also known as a family) is a column of elements in the periodic table of the chemical elements.*/
    "elementGroup": NamedNode;
    /*En la taula periòdica dels elements, un període és una filera de la taula*/
    "elementPeriod": NamedNode;
    /*altitude média acima do nível do mar*/
    "elevation": NamedNode;
    "elevationQuote": NamedNode;
    "elevatorCount": NamedNode;
    "elo": NamedNode;
    "eloRecord": NamedNode;
    "emblem": NamedNode;
    "emmyAward": NamedNode;
    "employer": NamedNode;
    "employersCelebration": NamedNode;
    "endCareer": NamedNode;
    /*The end date of the event.*/
    "endDate": NamedNode;
    /*The end date and time of the event.*/
    "endDateTime": NamedNode;
    "endOccupation": NamedNode;
    "endPoint": NamedNode;
    "endReign": NamedNode;
    "endYear": NamedNode;
    "endYearOfInsertion": NamedNode;
    "endYearOfSales": NamedNode;
    "endangeredSince": NamedNode;
    "endingTheme": NamedNode;
    "endowment": NamedNode;
    "enemy": NamedNode;
    "engine": NamedNode;
    /*Power to be expressed in Watts (kiloWatt, megaWatt)*/
    "enginePower": NamedNode;
    "engineType": NamedNode;
    "engineer": NamedNode;
    "ensembl": NamedNode;
    "enshrinedDeity": NamedNode;
    "entourage": NamedNode;
    "entrezgene": NamedNode;
    /*Compare with bishopric*/
    "eparchy": NamedNode;
    "episode": NamedNode;
    /*The episode number of the TelevisionEpisode.*/
    "episodeNumber": NamedNode;
    /*moment in time used as a referrence point for some time-vaying astronomical quantity*/
    "epoch": NamedNode;
    "eptFinalTable": NamedNode;
    "eptItm": NamedNode;
    "eptTitle": NamedNode;
    "equipment": NamedNode;
    "equity": NamedNode;
    "era": NamedNode;
    "eruption": NamedNode;
    "eruptionYear": NamedNode;
    "escalafon": NamedNode;
    "escapeVelocity": NamedNode;
    "espnId": NamedNode;
    "established": NamedNode;
    "establishment": NamedNode;
    "ethnicGroup": NamedNode;
    "ethnicGroupsInYear": NamedNode;
    /*Μία ορισμένη κοινωνική κατηγορία ανθρώπων που έχουν κοινή καταγωγή ή εμπειρίες.*/
    "ethnicity": NamedNode;
    "eurobabeIndexId": NamedNode;
    "europeanAffiliation": NamedNode;
    "europeanChampionship": NamedNode;
    "europeanParliamentGroup": NamedNode;
    "europeanUnionEntranceDate": NamedNode;
    "event": NamedNode;
    "eventDate": NamedNode;
    "eventDescription": NamedNode;
    "executiveHeadteacher": NamedNode;
    "executiveProducer": NamedNode;
    /*Notes about an exhibition the object has been to*/
    "exhibition": NamedNode;
    /*Το είναι αντικατοπτρίζει αυτό που υπάρχει.*/
    "existence": NamedNode;
    "expedition": NamedNode;
    "explorer": NamedNode;
    "externalOrnament": NamedNode;
    /*Date when an Organization (eg PoliticalParty, Company) or Species ceased to exist*/
    "extinctionDate": NamedNode;
    "extinctionYear": NamedNode;
    "eyeColor": NamedNode;
    "eyeColour": NamedNode;
    /*Μάτι ονομάζεται το αισθητήριο όργανο της όρασης των ζωντανών οργανισμών.*/
    "eyes": NamedNode;
    "faaLocationIdentifier": NamedNode;
    "facilityId": NamedNode;
    /*number of faculty members*/
    "facultySize": NamedNode;
    "failedLaunches": NamedNode;
    "family": NamedNode;
    "familyMember": NamedNode;
    "fansgroup": NamedNode;
    /*Die Tarifzone zu der die Station gehört.*/
    "fareZone": NamedNode;
    "fastestDriver": NamedNode;
    "fastestDriverCountry": NamedNode;
    "fastestDriverTeam": NamedNode;
    "fastestLap": NamedNode;
    /*Amount of fat per servingSize of a Food*/
    "fat": NamedNode;
    "fate": NamedNode;
    "father": NamedNode;
    "fauna": NamedNode;
    "fc": NamedNode;
    "fcRuns": NamedNode;
    /*FDA Unique Ingredient Identifier (UNII) code for a DBpedia Drug*/
    "fdaUniiCode": NamedNode;
    /*A day of celebration associated with the entity. Applies to Saint, School etc*/
    "feastDay": NamedNode;
    "feat": NamedNode;
    "feature": NamedNode;
    "features": NamedNode;
    "fedCup": NamedNode;
    "federalState": NamedNode;
    "federation": NamedNode;
    "fees": NamedNode;
    "fibahof": NamedNode;
    "field": NamedNode;
    "fight": NamedNode;
    "fighter": NamedNode;
    "fileExtension": NamedNode;
    /*size of a file or software*/
    "fileSize": NamedNode;
    "fileURL": NamedNode;
    "filename": NamedNode;
    "fillingStation": NamedNode;
    "film": NamedNode;
    /*specifies the audio type of the film i.e. 'sound' or 'silent'*/
    "filmAudioType": NamedNode;
    /*specifies the colour type of the film i.e. 'colour' or 'b/w'*/
    "filmColourType": NamedNode;
    "filmFareAward": NamedNode;
    "filmNumber": NamedNode;
    "filmPolskiId": NamedNode;
    "filmRuntime": NamedNode;
    "filmVersion": NamedNode;
    /*date of final flight*/
    "finalFlight": NamedNode;
    "finalLost": NamedNode;
    "finalLostDouble": NamedNode;
    "finalLostSingle": NamedNode;
    "finalLostTeam": NamedNode;
    /*Date of the final publication.*/
    "finalPublicationDate": NamedNode;
    /*Jahr der allerletzten Veröffentlichung des Periodikums.*/
    "finalPublicationYear": NamedNode;
    "fipsCode": NamedNode;
    /*The date on which regular broadcasts began.*/
    "firstAirDate": NamedNode;
    "firstAppearance": NamedNode;
    "firstAscent": NamedNode;
    "firstAscentPerson": NamedNode;
    "firstAscentYear": NamedNode;
    "firstBroadcast": NamedNode;
    "firstDriver": NamedNode;
    "firstDriverCountry": NamedNode;
    "firstDriverTeam": NamedNode;
    "firstFlight": NamedNode;
    "firstFlightEndDate": NamedNode;
    "firstFlightStartDate": NamedNode;
    "firstGame": NamedNode;
    "firstLaunch": NamedNode;
    "firstLaunchDate": NamedNode;
    "firstLaunchRocket": NamedNode;
    "firstLeader": NamedNode;
    "firstMention": NamedNode;
    "firstOlympicEvent": NamedNode;
    "firstOwner": NamedNode;
    "firstPlace": NamedNode;
    "firstPopularVote": NamedNode;
    "firstProMatch": NamedNode;
    /*Date of the first publication.*/
    "firstPublicationDate": NamedNode;
    /*Jahr der ersten Veröffentlichung des Periodikums.*/
    "firstPublicationYear": NamedNode;
    "firstPublisher": NamedNode;
    "firstRace": NamedNode;
    "firstWin": NamedNode;
    "firstWinner": NamedNode;
    /*Wikimedia Commons file name representing the subject's flag*/
    "flag": NamedNode;
    "flagBearer": NamedNode;
    "flagBorder": NamedNode;
    "flagCaption": NamedNode;
    "flagLink": NamedNode;
    "flagSize": NamedNode;
    /*lowest temperature at which a substance can vaporize and start burning*/
    "flashPoint": NamedNode;
    "floodingDate": NamedNode;
    "floorArea": NamedNode;
    "floorCount": NamedNode;
    "flora": NamedNode;
    "flower": NamedNode;
    "flyingHours": NamedNode;
    "foalDate": NamedNode;
    "followedBy": NamedNode;
    "followingEvent": NamedNode;
    "follows": NamedNode;
    "foot": NamedNode;
    /*a preference to put one's left or right foot forward in surfing, wakeboarding, skateboarding, wakeskating, snowboarding and mountainboarding. The term is sometimes applied to the foot a footballer uses to kick.*/
    "footedness": NamedNode;
    "forces": NamedNode;
    "foresterDistrict": NamedNode;
    /*Format of the resource (as object). Use dct:format for literal, format for object*/
    "format": NamedNode;
    "formationDate": NamedNode;
    "formationYear": NamedNode;
    /*A former member of the band.*/
    "formerBandMember": NamedNode;
    /*A former parent broadcast network to which the broadcaster once belonged.*/
    "formerBroadcastNetwork": NamedNode;
    "formerCallsign": NamedNode;
    "formerChannel": NamedNode;
    "formerChoreographer": NamedNode;
    "formerCoach": NamedNode;
    "formerHighschool": NamedNode;
    "formerName": NamedNode;
    "formerPartner": NamedNode;
    "formerTeam": NamedNode;
    "formula": NamedNode;
    "fossil": NamedNode;
    "foundation": NamedNode;
    "foundationPlace": NamedNode;
    /*Identifies the founder of the described entity. This can be a person or a organisation for instance.*/
    "foundedBy": NamedNode;
    /*Ein Gründer oder Gründungsmitglied einer Organisation, Religion oder eines Ortes.*/
    "founder": NamedNode;
    "foundingDate": NamedNode;
    "foundingYear": NamedNode;
    "fourthCommander": NamedNode;
    "frazioni": NamedNode;
    "free": NamedNode;
    "freeDanseScore": NamedNode;
    "freeFlightTime": NamedNode;
    "freeLabel": NamedNode;
    "freeProgCompetition": NamedNode;
    "freeProgScore": NamedNode;
    "freeScoreCompetition": NamedNode;
    "frequency": NamedNode;
    /*Die Häufigkeit der Erscheinungen des Periodikums (z.B. wöchentlich, monatlich).*/
    "frequencyOfPublication": NamedNode;
    "frequentlyUpdated": NamedNode;
    "friend": NamedNode;
    "frontierLength": NamedNode;
    "frozen": NamedNode;
    "fuel": NamedNode;
    "fuelCapacity": NamedNode;
    "fuelConsumption": NamedNode;
    "fuelSystem": NamedNode;
    "fuelType": NamedNode;
    "fuelTypeName": NamedNode;
    "fullCompetition": NamedNode;
    "fullScore": NamedNode;
    "functionEndDate": NamedNode;
    "functionEndYear": NamedNode;
    "functionStartDate": NamedNode;
    "functionStartYear": NamedNode;
    /*A organisation financing the research project.*/
    "fundedBy": NamedNode;
    /*The last inquiry date about linguistics uses.*/
    "galicianSpeakersDate": NamedNode;
    /*Percentage of Galician speakers.*/
    "galicianSpeakersPercentage": NamedNode;
    /*A file contained in a gallery*/
    "galleryItem": NamedNode;
    /*A game artist is an artist who creates art for one or more types of games. Game artists are responsible for all of the aspects of game development that call for visual art.*/
    "gameArtist": NamedNode;
    "gameEngine": NamedNode;
    "gameModus": NamedNode;
    "games": NamedNode;
    "garrison": NamedNode;
    /*Number or description of gas chambers of a ConcentrationCamp*/
    "gasChambers": NamedNode;
    /*Awards of the Catalan Academy of Cinema*/
    "gaudiAward": NamedNode;
    "geminiAward": NamedNode;
    "gender": NamedNode;
    "geneLocation": NamedNode;
    /*the end of the gene*/
    "geneLocationEnd": NamedNode;
    /*the start of the gene coordinates*/
    "geneLocationStart": NamedNode;
    "geneReviewsId": NamedNode;
    "geneReviewsName": NamedNode;
    "generalCouncil": NamedNode;
    "generalManager": NamedNode;
    "generationUnits": NamedNode;
    /*the edition of the database used (i.e. hg19)*/
    "genomeDB": NamedNode;
    /*The genre of the thing (music group, film, etc.)*/
    "genre": NamedNode;
    /*A rank in the classification of organisms, below family and above species; a taxon at that rank*/
    "genus": NamedNode;
    "geolocDepartment": NamedNode;
    "geolocDual": NamedNode;
    "geologicPeriod": NamedNode;
    "geology": NamedNode;
    /*is a measure of the inequality of a distribution. It is commonly used as a measure of inequality of income or wealth.*/
    "giniCoefficient": NamedNode;
    "giniCoefficientAsOf": NamedNode;
    "giniCoefficientCategory": NamedNode;
    "giniCoefficientRanking": NamedNode;
    /*Indicates a Food's effect on a person's blood glucose (blood sugar) level. Typically ranges between 50 and 100, where 100 represents the standard, an equivalent amount of pure glucose*/
    "glycemicIndex": NamedNode;
    "gnisCode": NamedNode;
    "gnl": NamedNode;
    "goalsInLeague": NamedNode;
    "goalsInNationalTeam": NamedNode;
    "goldMedalDouble": NamedNode;
    "goldMedalMixed": NamedNode;
    "goldMedalSingle": NamedNode;
    "goldMedalist": NamedNode;
    "goldenCalfAward": NamedNode;
    "goldenGlobeAward": NamedNode;
    "goldenRaspberryAward": NamedNode;
    /*Body that owns/operates the Place.*/
    "governingBody": NamedNode;
    "government": NamedNode;
    "governmentCountry": NamedNode;
    "governmentElevation": NamedNode;
    "governmentMountain": NamedNode;
    "governmentPlace": NamedNode;
    "governmentPosition": NamedNode;
    "governmentRegion": NamedNode;
    /*broadly, the type of structure of its government*/
    "governmentType": NamedNode;
    "governor": NamedNode;
    "governorGeneral": NamedNode;
    "governorate": NamedNode;
    "goyaAward": NamedNode;
    "grades": NamedNode;
    "grammyAward": NamedNode;
    "grandsire": NamedNode;
    "grave": NamedNode;
    /*Refers to the famous 1918 edition of Gray's Anatomy.*/
    "grayPage": NamedNode;
    /*Refers to the famous 1918 edition of Gray's Anatomy.*/
    "graySubject": NamedNode;
    "greekName": NamedNode;
    "greenLongDistancePisteNumber": NamedNode;
    "greenSkiPisteNumber": NamedNode;
    "gridReference": NamedNode;
    /*grinding capability for Mills*/
    "grindingCapability": NamedNode;
    "gross": NamedNode;
    "grossDomesticProduct": NamedNode;
    "grossDomesticProductAsOf": NamedNode;
    "grossDomesticProductNominalPerCapita": NamedNode;
    "grossDomesticProductPerPeople": NamedNode;
    "grossDomesticProductPurchasingPowerParityPerCapita": NamedNode;
    "grossDomesticProductRank": NamedNode;
    "ground": NamedNode;
    "groundsForLiquidation": NamedNode;
    /*Aanduiding van de categorie mensen die door dit monument worden herdacht*/
    "groupCommemorated": NamedNode;
    "growingGrape": NamedNode;
    "guest": NamedNode;
    "gun": NamedNode;
    "gymApparatus": NamedNode;
    "hairColor": NamedNode;
    "hairColour": NamedNode;
    "hairs": NamedNode;
    "hallOfFame": NamedNode;
    "hand": NamedNode;
    /*an attribute of humans defined by their unequal distribution of fine motor skill between the left and right hands.*/
    "handedness": NamedNode;
    "handisport": NamedNode;
    "hasAbsorbedMunicipality": NamedNode;
    "hasAnnotation": NamedNode;
    "hasChannel": NamedNode;
    "hasInput": NamedNode;
    /*indicates another place situated inside.*/
    "hasInsidePlace": NamedNode;
    "hasJunctionWith": NamedNode;
    "hasKMLData": NamedNode;
    "hasNaturalBust": NamedNode;
    /*indicates another place situated around outside.*/
    "hasOutsidePlace": NamedNode;
    /*Reserved for DBpedia.*/
    "hasSurfaceForm": NamedNode;
    /*variant or variation, for example all variations of a color*/
    "hasVariant": NamedNode;
    "head": NamedNode;
    "headAlloy": NamedNode;
    "headChef": NamedNode;
    "headLabel": NamedNode;
    "headOfFamily": NamedNode;
    "headquarter": NamedNode;
    "headteacher": NamedNode;
    "height": NamedNode;
    "heightAboveAverageTerrain": NamedNode;
    "heightAgainst": NamedNode;
    "heightAttack": NamedNode;
    "heir": NamedNode;
    "heisman": NamedNode;
    /*inscrit à un inventaires dédiés à la conservation du patrimoine, naturel ou culturel, existants dans le monde.*/
    "heritageRegister": NamedNode;
    "hgncid": NamedNode;
    "highestBreak": NamedNode;
    "highestBuildingInYear": NamedNode;
    "highestMountain": NamedNode;
    "highestPlace": NamedNode;
    "highestPoint": NamedNode;
    "highestPointIsland": NamedNode;
    "highestPosition": NamedNode;
    "highestRank": NamedNode;
    "highestRegion": NamedNode;
    "highestState": NamedNode;
    "highschool": NamedNode;
    /*the highway system that a route is part of*/
    "highwaySystem": NamedNode;
    "hipSize": NamedNode;
    "historicalMap": NamedNode;
    "historicalName": NamedNode;
    "historicalRegion": NamedNode;
    "hof": NamedNode;
    "homage": NamedNode;
    "homeArena": NamedNode;
    /*A colour represented by its hex code (e.g.: #FF0000 or #40E0D0).*/
    "homeColourHexCode": NamedNode;
    "homeStadium": NamedNode;
    "homeport": NamedNode;
    "hometown": NamedNode;
    /*Honours bestowed upon a Person, Organization, RaceHorse, etc*/
    "honours": NamedNode;
    "hopmanCup": NamedNode;
    "horseRidingDiscipline": NamedNode;
    "house": NamedNode;
    "hraState": NamedNode;
    "hsvCoordinateHue": NamedNode;
    "hsvCoordinateSaturation": NamedNode;
    "hsvCoordinateValue": NamedNode;
    "hubAirport": NamedNode;
    /*a composite statistic used to rank countries by level of "human development"*/
    "humanDevelopmentIndex": NamedNode;
    "humanDevelopmentIndexAsOf": NamedNode;
    "humanDevelopmentIndexRank": NamedNode;
    "humanDevelopmentIndexRankingCategory": NamedNode;
    /*Plants from which another plant (or cultivar) has been developed from*/
    "hybrid": NamedNode;
    "iafdId": NamedNode;
    /*IATA designation for airline companies*/
    "iataAirlineCode": NamedNode;
    "iataLocationIdentifier": NamedNode;
    /*The Internet Broadway Database ID (IBDB ID) from ibdb.com.*/
    "ibdbId": NamedNode;
    /*ICAO designation for airline companies*/
    "icaoAirlineCode": NamedNode;
    "icaoLocationIdentifier": NamedNode;
    "icd10": NamedNode;
    "icd1": NamedNode;
    "icd9": NamedNode;
    "icdo": NamedNode;
    /*Standard iconographic elements used when depicting a Saint: pontifical, episcopal, insignia, martyrdom instruments*/
    "iconographicAttributes": NamedNode;
    "id": NamedNode;
    /*ID d'un film sur Allocine*/
    "idAllocine": NamedNode;
    "idNumber": NamedNode;
    "identificationSymbol": NamedNode;
    "ideology": NamedNode;
    "iftaAward": NamedNode;
    "iihfHof": NamedNode;
    "illiteracy": NamedNode;
    /*Illustrator (where used throughout and a major feature)*/
    "illustrator": NamedNode;
    /*the image size expressed in pixels*/
    "imageSize": NamedNode;
    /*International Movie Database ID. Applies to Films, Actors, etc*/
    "imdbId": NamedNode;
    /*Der Impact Factor oder genauer Journal Impact Factor (JIF) einer Fachzeitschrift soll messen, wie oft andere Zeitschriften einen Artikel aus ihr in Relation zur Gesamtzahl der dort veröffentlichten Artikel zitieren. Je höher der Impact Factor, desto angesehener ist eine Fachzeitschrift.*/
    "impactFactor": NamedNode;
    /*Census year of the imapct factor.*/
    "impactFactorAsOf": NamedNode;
    "imposedDanseCompetition": NamedNode;
    "imposedDanseScore": NamedNode;
    "inCemetery": NamedNode;
    "inchi": NamedNode;
    "inclination": NamedNode;
    "income": NamedNode;
    "incumbent": NamedNode;
    /*GND (Gemeinsame Normdatei) is an international authority file for the organisation of personal names, subject headings and corporate bodies from catalogues. It is used mainly for documentation in libraries and archives. The GND is managed by the German National Library in cooperation with various library networks. The GND falls under the Creative Commons Zero(CC0) license.*/
    "individualisedGnd": NamedNode;
    /*PND (Personennamendatei) data about a person. PND is published by the German National Library. For each person there is a record with her/his name, birth and occupation connected with a unique identifier, the PND number.*/
    "individualisedPnd": NamedNode;
    "industry": NamedNode;
    "infantMortality": NamedNode;
    "inflow": NamedNode;
    /*The subject influenced the object. inverseOf influencedBy. Subject and object can be Persons or Works (eg ProgrammingLanguage)*/
    "influenced": NamedNode;
    /*The subject was influenced by the object. inverseOf influenced. Subject and object can be Persons or Works (eg ProgrammingLanguage)*/
    "influencedBy": NamedNode;
    "information": NamedNode;
    "informationName": NamedNode;
    /*Main ingredient used to prepare a specific Food or Beverage. For strings use ingredientName, for objects use ingredient.*/
    "ingredient": NamedNode;
    /*Main ingredient used to prepare a specific Food or Beverage. For strings use ingredientName, for objects use ingredient.*/
    "ingredientName": NamedNode;
    /*Initial use of the architectural structure.*/
    "initiallyUsedFor": NamedNode;
    /*International Nonproprietary Name given to a pharmaceutical substance*/
    "inn": NamedNode;
    "innervates": NamedNode;
    /*Text of an inscription on the object*/
    "inscription": NamedNode;
    /*numerical indexing code used by the French National Institute for Statistics and Economic Studies (INSEE) to identify various entities*/
    "inseeCode": NamedNode;
    "installedCapacity": NamedNode;
    "institution": NamedNode;
    "instrument": NamedNode;
    "intercommunality": NamedNode;
    "interest": NamedNode;
    "internationalAffiliation": NamedNode;
    "internationalPhonePrefix": NamedNode;
    "internationalPhonePrefixLabel": NamedNode;
    "internationally": NamedNode;
    "introduced": NamedNode;
    "introductionDate": NamedNode;
    /*Lortel Archives Internet Off-Broadway database "show id" from lortel.org.*/
    "iobdbId": NamedNode;
    "isCityState": NamedNode;
    /*True if the station is handicapped accessible.*/
    "isHandicappedAccessible": NamedNode;
    "isPartOf": NamedNode;
    "isPartOfAnatomicalStructure": NamedNode;
    "isPartOfMilitaryConflict": NamedNode;
    /*Name of another thing that this thing is part of. Use for infobox "part of" properties given as text; for objects use isPartOf*/
    "isPartOfName": NamedNode;
    "isPartOfWineRegion": NamedNode;
    /*In academia peer review is often used to determine an academic papers suitability for publication.*/
    "isPeerReviewed": NamedNode;
    /*indicate a place is a stop on a road.*/
    "isRouteStop": NamedNode;
    /*The International Standard Book Number (ISBN) is a unique numeric commercial book identifier based upon the 9-digit Standard Book Numbering (SBN) code.*/
    "isbn": NamedNode;
    "isil": NamedNode;
    "island": NamedNode;
    /*ISNI is a method for uniquely identifying the public identities of contributors to media content such as books, TV programmes, and newspaper articles.*/
    "isniId": NamedNode;
    /*defines codes for the names of countries, dependent territories, and special areas of geographical interest*/
    "iso31661Code": NamedNode;
    "iso6391Code": NamedNode;
    "iso6392Code": NamedNode;
    "iso6393Code": NamedNode;
    "isoCode": NamedNode;
    "isoCodeRegion": NamedNode;
    "issDockings": NamedNode;
    /*International Standard Serial Number (ISSN)*/
    "issn": NamedNode;
    "ist": NamedNode;
    /*Indexing code used for Italian municipalities*/
    "istat": NamedNode;
    "ithfDate": NamedNode;
    "iucnCategory": NamedNode;
    "iupacName": NamedNode;
    "jockey": NamedNode;
    "jointCommunity": NamedNode;
    /*JSTOR number (short for Journal Storage) is a United States-based online system number for archiving academic journals.*/
    "jstor": NamedNode;
    /*leading judge*/
    "judge": NamedNode;
    "juniorSeason": NamedNode;
    "juniorTeam": NamedNode;
    "juniorYearsEndYear": NamedNode;
    "juniorYearsStartYear": NamedNode;
    "jureLanguage": NamedNode;
    /*Die Zuständigkeit oder Kompetenz legt im öffentlichen Recht fest, welche Behörde bzw. welches Gericht im Einzelfall rechtlich zu hoheitlichem Handeln ermächtigt und verpflichtet ist.*/
    "jurisdiction": NamedNode;
    "jutsu": NamedNode;
    "keyPerson": NamedNode;
    "khlDraft": NamedNode;
    "khlDraftTeam": NamedNode;
    "khlDraftYear": NamedNode;
    "killedBy": NamedNode;
    "kinOfLanguage": NamedNode;
    "kindOfCoordinate": NamedNode;
    "kindOfCriminal": NamedNode;
    "kindOfCriminalAction": NamedNode;
    "kindOfRock": NamedNode;
    /*In biology, kingdom (Latin: regnum, pl. regna) is a taxonomic rank, which is either the highest rank or in the more recent three-domain system, the rank below domain.*/
    "kingdom": NamedNode;
    /*Work, historic event, etc that the subject is known for. Applies to Person, Organization, ConcentrationCamp, etc*/
    "knownFor": NamedNode;
    "ko": NamedNode;
    "lahHof": NamedNode;
    "lake": NamedNode;
    "land": NamedNode;
    "landArea": NamedNode;
    "landPercentage": NamedNode;
    "landRegistryCode": NamedNode;
    "landeshauptmann": NamedNode;
    "landingDate": NamedNode;
    "landingSite": NamedNode;
    "landingVehicle": NamedNode;
    "landskap": NamedNode;
    "landtag": NamedNode;
    "landtagMandate": NamedNode;
    /*Use dc:language for literal, language for object*/
    "language": NamedNode;
    "languageCode": NamedNode;
    "languageFamily": NamedNode;
    "languageRegulator": NamedNode;
    "largestCity": NamedNode;
    "largestMetro": NamedNode;
    "largestSettlement": NamedNode;
    "largestWin": NamedNode;
    /*The date on which the broadcaster made its last broadcast.*/
    "lastAirDate": NamedNode;
    "lastAppearance": NamedNode;
    /*The last election date for the house.*/
    "lastElectionDate": NamedNode;
    "lastFamilyMember": NamedNode;
    "lastFlight": NamedNode;
    "lastFlightEndDate": NamedNode;
    "lastFlightStartDate": NamedNode;
    "lastLaunch": NamedNode;
    "lastLaunchDate": NamedNode;
    "lastLaunchRocket": NamedNode;
    "lastPosition": NamedNode;
    "lastProMatch": NamedNode;
    /*Date of the last publication.*/
    "lastPublicationDate": NamedNode;
    "lastRace": NamedNode;
    "lastSeason": NamedNode;
    "lastWin": NamedNode;
    "laterality": NamedNode;
    "latestElection": NamedNode;
    "latestPreviewDate": NamedNode;
    "latestPreviewVersion": NamedNode;
    "latestReleaseDate": NamedNode;
    "latestReleaseVersion": NamedNode;
    "latinName": NamedNode;
    "launch": NamedNode;
    "launchDate": NamedNode;
    "launchPad": NamedNode;
    "launchSite": NamedNode;
    "launchVehicle": NamedNode;
    "launches": NamedNode;
    "laurenceOlivierAward": NamedNode;
    "lawCountry": NamedNode;
    "layingDown": NamedNode;
    "layout": NamedNode;
    /*The Library of Congress Classification (LCC) is a system of library classification developed by the Library of Congress.*/
    "lcc": NamedNode;
    /*The Library of Congress Control Number or LCCN is a serially based system of numbering cataloging records in the Library of Congress in the United States. It has nothing to do with the contents of any book, and should not be confused with Library of Congress Classification.*/
    "lccn": NamedNode;
    /*Library of Congress Control Number*/
    "lccnId": NamedNode;
    "lchfDraft": NamedNode;
    "lchfDraftTeam": NamedNode;
    "lchfDraftYear": NamedNode;
    "leadTeam": NamedNode;
    "leadYear": NamedNode;
    "leader": NamedNode;
    "leaderFunction": NamedNode;
    "leaderName": NamedNode;
    "leaderParty": NamedNode;
    "leaderTitle": NamedNode;
    "leadership": NamedNode;
    "league": NamedNode;
    "leagueManager": NamedNode;
    "leftChild": NamedNode;
    "leftTributary": NamedNode;
    "legalArrondissement": NamedNode;
    /*article in code book or statute book referred to in this legal case*/
    "legalArticle": NamedNode;
    /*Die Rechtsform definiert die juristischen Rahmenbedingungen einer Organisation bzw. Unternehmens.*/
    "legalForm": NamedNode;
    /*The term of the on-going session (e.g.: "40th Canadian Parliament").*/
    "legislativePeriodName": NamedNode;
    "length": NamedNode;
    "lengthQuote": NamedNode;
    "lengthReference": NamedNode;
    "lethalOnChickens": NamedNode;
    "lethalOnMice": NamedNode;
    "lethalOnRabbits": NamedNode;
    "lethalOnRats": NamedNode;
    "liberationDate": NamedNode;
    "libretto": NamedNode;
    "licenceLetter": NamedNode;
    "licenceNumber": NamedNode;
    "licenceNumberLabel": NamedNode;
    "license": NamedNode;
    /*Identify which company or entity holds the licence (mostly string are used in Wikipedia, therefore range is xsd:sting).*/
    "licensee": NamedNode;
    "lieutenancy": NamedNode;
    "lieutenancyArea": NamedNode;
    "lieutenant": NamedNode;
    "lifeExpectancy": NamedNode;
    "limit": NamedNode;
    /*Length of the line. Wikipedians usually do not differentiate between track length and line lenght.*/
    "lineLength": NamedNode;
    "linguisticsTradition": NamedNode;
    "linkedSpace": NamedNode;
    "linkedTo": NamedNode;
    "listItemOf": NamedNode;
    /*A literary genre is a category of literary composition. Genres may be determined by literary technique, tone, content, or even (as in the case of fiction) length.*/
    "literaryGenre": NamedNode;
    "littlePoolRecord": NamedNode;
    "livingPlace": NamedNode;
    /*Load limit of the bridge.*/
    "loadLimit": NamedNode;
    "localAuthority": NamedNode;
    "localPhonePrefix": NamedNode;
    "locality": NamedNode;
    "localization": NamedNode;
    "localizationThumbnail": NamedNode;
    "localizationThumbnailCaption": NamedNode;
    "locatedInArea": NamedNode;
    /*The location of the thing.*/
    "location": NamedNode;
    /*City the thing is located.*/
    "locationCity": NamedNode;
    /*Country the thing is located.*/
    "locationCountry": NamedNode;
    "locationIdentifier": NamedNode;
    /*Location of the thing as string. Use "location" if the location is a resource*/
    "locationName": NamedNode;
    "locomotive": NamedNode;
    "locusSupplementaryData": NamedNode;
    "logo": NamedNode;
    "longDistancePisteKilometre": NamedNode;
    "longDistancePisteNumber": NamedNode;
    "longName": NamedNode;
    /*can be used to include more informations e.g. the name of the artist that a tribute album is in honor of*/
    "longtype": NamedNode;
    "lounge": NamedNode;
    "lowerAge": NamedNode;
    /*Payload mass in a typical Low Earth orbit*/
    "lowerEarthOrbitPayload": NamedNode;
    "lowest": NamedNode;
    "lowestMountain": NamedNode;
    "lowestPlace": NamedNode;
    "lowestPoint": NamedNode;
    "lowestPosition": NamedNode;
    "lowestRegion": NamedNode;
    "lowestState": NamedNode;
    "lunarEvaTime": NamedNode;
    "lunarLandingSite": NamedNode;
    "lunarModule": NamedNode;
    "lunarOrbitTime": NamedNode;
    "lunarRover": NamedNode;
    "lunarSampleMass": NamedNode;
    "lunarSurfaceTime": NamedNode;
    "lymph": NamedNode;
    /*Creator of the text of a MusicalWork, eg Musical, Opera or Song*/
    "lyrics": NamedNode;
    "magazine": NamedNode;
    /*date of maiden flight*/
    "maidenFlight": NamedNode;
    "maidenFlightRocket": NamedNode;
    "maidenVoyage": NamedNode;
    "mainBuilding": NamedNode;
    "mainCharacter": NamedNode;
    "mainDomain": NamedNode;
    "mainFamilyBranch": NamedNode;
    "mainInterest": NamedNode;
    "mainIsland": NamedNode;
    "mainIslands": NamedNode;
    "mainOrgan": NamedNode;
    "mainspan": NamedNode;
    "maintainedBy": NamedNode;
    "majorIsland": NamedNode;
    "majorShrine": NamedNode;
    /*number of office holder*/
    "majorityFloorLeader": NamedNode;
    /*number of office holder*/
    "majorityLeader": NamedNode;
    /*the person who is responsible for the actors makeup*/
    "makeupArtist": NamedNode;
    "management": NamedNode;
    "managementCountry": NamedNode;
    "managementElevation": NamedNode;
    "managementMountain": NamedNode;
    "managementPlace": NamedNode;
    "managementPosition": NamedNode;
    "managementRegion": NamedNode;
    "manager": NamedNode;
    "managerClub": NamedNode;
    "managerSeason": NamedNode;
    "managerTitle": NamedNode;
    "managerYears": NamedNode;
    "managerYearsEndYear": NamedNode;
    "managerYearsStartYear": NamedNode;
    "managingEditor": NamedNode;
    "mandate": NamedNode;
    "manufacturer": NamedNode;
    /*A map of the place.*/
    "map": NamedNode;
    "mapCaption": NamedNode;
    "mapDescription": NamedNode;
    "march": NamedNode;
    "marketCapitalisation": NamedNode;
    /*Animal, poupée, objets divers servant de porte-bonheur ou d’emblème.*/
    "mascot": NamedNode;
    "mass": NamedNode;
    "massif": NamedNode;
    "mastersWins": NamedNode;
    "matchPoint": NamedNode;
    "material": NamedNode;
    "max": NamedNode;
    "maxAbsoluteMagnitude": NamedNode;
    "maxApparentMagnitude": NamedNode;
    /*Maximum preparation time of a recipe / Food*/
    "maxTime": NamedNode;
    "maximumArea": NamedNode;
    "maximumAreaQuote": NamedNode;
    "maximumBoatBeam": NamedNode;
    "maximumBoatLength": NamedNode;
    /*Source of the value can be declare by .*/
    "maximumDepth": NamedNode;
    /*Source of the  value.*/
    "maximumDepthQuote": NamedNode;
    "maximumDischarge": NamedNode;
    /*maximum elevation above the sea level*/
    "maximumElevation": NamedNode;
    "maximumInclination": NamedNode;
    "maximumTemperature": NamedNode;
    "mayor": NamedNode;
    "mayorArticle": NamedNode;
    "mayorCouncillor": NamedNode;
    "mayorFunction": NamedNode;
    "mayorMandate": NamedNode;
    "mayorTitle": NamedNode;
    /*MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public.*/
    "mbaId": NamedNode;
    "meanRadius": NamedNode;
    "meanTemperature": NamedNode;
    "meaning": NamedNode;
    "measurements": NamedNode;
    "medalist": NamedNode;
    "media": NamedNode;
    /*A media file (such as audio, video or images) associated with the subject*/
    "mediaItem": NamedNode;
    /*Print / On-line (then binding types etc. if relevant)*/
    "mediaType": NamedNode;
    "medlinePlus": NamedNode;
    "meetingBuilding": NamedNode;
    "meetingCity": NamedNode;
    /*A road that crosses another road at the junction.*/
    "meetingRoad": NamedNode;
    "meltingPoint": NamedNode;
    "member": NamedNode;
    "memberOfParliament": NamedNode;
    "membership": NamedNode;
    "membershipAsOf": NamedNode;
    /*A wise and trusted counselor or teacher*/
    "mentor": NamedNode;
    "mergedIntoParty": NamedNode;
    "mergedSettlement": NamedNode;
    "mergerDate": NamedNode;
    "meshId": NamedNode;
    "meshName": NamedNode;
    "meshNumber": NamedNode;
    /*Name for Messier objects*/
    "messierName": NamedNode;
    "metropolitanBorough": NamedNode;
    /*Mouse Genomic Informatics ID*/
    "mgiid": NamedNode;
    /*The service branch (Army, Navy, etc.) a person is part of.*/
    "militaryBranch": NamedNode;
    /*For persons who are notable as commanding officers, the units they commanded. Dates should be given if multiple notable commands were held.*/
    "militaryCommand": NamedNode;
    "militaryFunction": NamedNode;
    "militaryGovernment": NamedNode;
    /*The highest rank achieved by a person.*/
    "militaryRank": NamedNode;
    /*For persons who are not notable as commanding officers, the unit (company, battalion, regiment, etc.) in which they served.*/
    "militaryUnit": NamedNode;
    /*the size of the military unit*/
    "militaryUnitSize": NamedNode;
    "millSpan": NamedNode;
    "millType": NamedNode;
    /*mills code from the Belgian database on mills*/
    "millsCodeBE": NamedNode;
    "millsCodeDutch": NamedNode;
    /*mills code from the central Dutch database on mills*/
    "millsCodeNL": NamedNode;
    "millsCodeNLVerdwenen": NamedNode;
    "millsCodeNLWindmotoren": NamedNode;
    "min": NamedNode;
    /*Minimum preparation time of a recipe / Food*/
    "minTime": NamedNode;
    "minimumArea": NamedNode;
    "minimumAreaQuote": NamedNode;
    "minimumDischarge": NamedNode;
    /*minimum elevation above the sea level*/
    "minimumElevation": NamedNode;
    "minimumInclination": NamedNode;
    "minimumTemperature": NamedNode;
    "minority": NamedNode;
    /*number of office holder*/
    "minorityFloorLeader": NamedNode;
    /*number of office holder*/
    "minorityLeader": NamedNode;
    "mirDockings": NamedNode;
    "mission": NamedNode;
    "missionDuration": NamedNode;
    "missions": NamedNode;
    "model": NamedNode;
    "modelEndDate": NamedNode;
    "modelEndYear": NamedNode;
    "modelLineVehicle": NamedNode;
    "modelStartDate": NamedNode;
    "modelStartYear": NamedNode;
    "molecularWeight": NamedNode;
    "monarch": NamedNode;
    "month": NamedNode;
    "mood": NamedNode;
    "mostDownPoint": NamedNode;
    "mostWins": NamedNode;
    "mother": NamedNode;
    "motto": NamedNode;
    "mount": NamedNode;
    "mountainRange": NamedNode;
    "mouthCountry": NamedNode;
    "mouthDistrict": NamedNode;
    "mouthElevation": NamedNode;
    "mouthMountain": NamedNode;
    "mouthPlace": NamedNode;
    "mouthPosition": NamedNode;
    "mouthRegion": NamedNode;
    "mouthState": NamedNode;
    /*artistic movement or school with which artist is associated*/
    "movement": NamedNode;
    "movie": NamedNode;
    "mukhtar": NamedNode;
    "municipality": NamedNode;
    "municipalityAbsorbedBy": NamedNode;
    "municipalityCode": NamedNode;
    "municipalityRenamedTo": NamedNode;
    "municipalityType": NamedNode;
    "museum": NamedNode;
    /*Nieuw type is nodig omdat Museum eigenlijk geen subklasse van Building is, maar meer te maken heeft met de functie van het gebouw. 'Museumtype' is dan ook meer thema- en collectiegerelateerd*/
    "museumType": NamedNode;
    "musicBand": NamedNode;
    "musicBy": NamedNode;
    "musicComposer": NamedNode;
    /*The format of the album: EP, Single etc.*/
    "musicFormat": NamedNode;
    "musicFusionGenre": NamedNode;
    "musicSubgenre": NamedNode;
    /*Type is te algemeen. We moeten soorten muziek van soorten gebouwen kunnen onderscheiden*/
    "musicType": NamedNode;
    "musicalArtist": NamedNode;
    "musicalBand": NamedNode;
    "musicalKey": NamedNode;
    "musicians": NamedNode;
    /*Name of a mute character in play.*/
    "muteCharacterInPlay": NamedNode;
    "mvp": NamedNode;
    "mythology": NamedNode;
    "naacpImageAward": NamedNode;
    "name": NamedNode;
    "nameAsOf": NamedNode;
    "nameDay": NamedNode;
    "nameInCantoneseChinese": NamedNode;
    "nameInHangulKorean": NamedNode;
    "nameInHanjaKorean": NamedNode;
    "nameInJapanese": NamedNode;
    "nameInMindongyuChinese": NamedNode;
    "nameInMinnanyuChinese": NamedNode;
    "nameInPinyinChinese": NamedNode;
    "nameInSimplifiedChinese": NamedNode;
    "nameInTraditionalChinese": NamedNode;
    "nameInWadeGilesChinese": NamedNode;
    "namedAfter": NamedNode;
    "namedByLanguage": NamedNode;
    "names": NamedNode;
    "narrator": NamedNode;
    "nation": NamedNode;
    "nationalAffiliation": NamedNode;
    "nationalChampionship": NamedNode;
    "nationalFilmAward": NamedNode;
    "nationalOlympicCommittee": NamedNode;
    "nationalRanking": NamedNode;
    "nationalSelection": NamedNode;
    "nationalTeam": NamedNode;
    "nationalTeamMatchPoint": NamedNode;
    "nationalTeamYear": NamedNode;
    "nationalTopographicSystemMapNumber": NamedNode;
    "nationalTournament": NamedNode;
    "nationalTournamentBronze": NamedNode;
    "nationalTournamentGold": NamedNode;
    "nationalTournamentSilver": NamedNode;
    "nationalYears": NamedNode;
    "nationality": NamedNode;
    "ncaaSeason": NamedNode;
    "ncaaTeam": NamedNode;
    "ncbhof": NamedNode;
    /*National Diet Library of Japan identificator. http://id.ndl.go.jp/auth/ndlna/$1*/
    "ndlId": NamedNode;
    "nearestCity": NamedNode;
    "neighboringMunicipality": NamedNode;
    "neighbourConstellations": NamedNode;
    "neighbourRegion": NamedNode;
    "neighbourhood": NamedNode;
    "nerve": NamedNode;
    "netIncome": NamedNode;
    "network": NamedNode;
    "networth": NamedNode;
    "newspaper": NamedNode;
    "nextEntity": NamedNode;
    "nextEvent": NamedNode;
    "nextMission": NamedNode;
    "nflCode": NamedNode;
    "nflSeason": NamedNode;
    "nflTeam": NamedNode;
    /*Name for NGC objects*/
    "ngcName": NamedNode;
    /*Indexing code used by the Belgium National Statistical Institute to identify populated places.*/
    "nisCode": NamedNode;
    /*NLA Trove’s People and Organisation view allows the discovery of biographical and other contextual information about people and organisations. Search also available via VIAF.*/
    "nlaId": NamedNode;
    "nndbId": NamedNode;
    "noContest": NamedNode;
    "nobelLaureates": NamedNode;
    "nominee": NamedNode;
    /*The subject of a non-fiction book (e.g.: History, Biography, Cookbook, Climate change, ...).*/
    "nonFictionSubject": NamedNode;
    "nonProfessionalCareer": NamedNode;
    /*indicates another place situated north-east.*/
    "northEastPlace": NamedNode;
    /*indicates another place situated north.*/
    "northPlace": NamedNode;
    /*indicates another place situated north-west.*/
    "northWestPlace": NamedNode;
    "notSolubleIn": NamedNode;
    "notableCommander": NamedNode;
    "notableFeatures": NamedNode;
    "notableIdea": NamedNode;
    "notableStudent": NamedNode;
    "notableWine": NamedNode;
    /*Notable work created by the subject (eg Writer, Artist, Engineer) or about the subject (eg ConcentrationCamp)*/
    "notableWork": NamedNode;
    "note": NamedNode;
    "noteOnPlaceOfBurial": NamedNode;
    "noteOnRestingPlace": NamedNode;
    /*additional notes that better describe the entity.*/
    "notes": NamedNode;
    "notifyDate": NamedNode;
    "novel": NamedNode;
    "nrhpReferenceNumber": NamedNode;
    /*Type of historic place as defined by the US National Park Service. For instance National Historic Landmark, National Monument or National Battlefield.*/
    "nrhpType": NamedNode;
    "nssdcId": NamedNode;
    /*Jersey number of an Athlete (sports player, eg "99") or sequential number of an Album (eg "Third studio album")*/
    "number": NamedNode;
    "numberBuilt": NamedNode;
    "numberOfAcademicStaff": NamedNode;
    /*the total number of albums released by the musical artist*/
    "numberOfAlbums": NamedNode;
    "numberOfArrondissement": NamedNode;
    "numberOfBombs": NamedNode;
    "numberOfBronzeMedalsWon": NamedNode;
    "numberOfCanton": NamedNode;
    "numberOfCantons": NamedNode;
    "numberOfCapitalDeputies": NamedNode;
    "numberOfCity": NamedNode;
    "numberOfClassrooms": NamedNode;
    "numberOfClubs": NamedNode;
    /*Aanduiding van omvang van de collectie van deze bibliotheek*/
    "numberOfCollectionItems": NamedNode;
    "numberOfCompetitors": NamedNode;
    "numberOfCounties": NamedNode;
    "numberOfCountries": NamedNode;
    "numberOfCrew": NamedNode;
    "numberOfDeaths": NamedNode;
    "numberOfDependency": NamedNode;
    "numberOfDistrict": NamedNode;
    "numberOfDistricts": NamedNode;
    "numberOfDoctoralStudents": NamedNode;
    "numberOfEmployees": NamedNode;
    "numberOfEntrances": NamedNode;
    "numberOfEpisodes": NamedNode;
    "numberOfFederalDeputies": NamedNode;
    "numberOfFilms": NamedNode;
    "numberOfGoals": NamedNode;
    "numberOfGoldMedalsWon": NamedNode;
    "numberOfGraduateStudents": NamedNode;
    "numberOfGraves": NamedNode;
    "numberOfHoles": NamedNode;
    /*Aantal huizen in afgegrensd gebied*/
    "numberOfHouses": NamedNode;
    "numberOfIntercommunality": NamedNode;
    "numberOfIsland": NamedNode;
    "numberOfIslands": NamedNode;
    "numberOfLanes": NamedNode;
    "numberOfLaps": NamedNode;
    "numberOfLaunches": NamedNode;
    /*Number of lawyers or attorneys in the company.*/
    "numberOfLawyers": NamedNode;
    /*Number of lines in the transit system.*/
    "numberOfLines": NamedNode;
    /*the number of live albums released by the musical artist*/
    "numberOfLiveAlbums": NamedNode;
    "numberOfLocations": NamedNode;
    "numberOfMatches": NamedNode;
    "numberOfMembers": NamedNode;
    "numberOfMembersAsOf": NamedNode;
    "numberOfMinistries": NamedNode;
    "numberOfMunicipalities": NamedNode;
    "numberOfNeighbourhood": NamedNode;
    "numberOfNewlyIntroducedSports": NamedNode;
    /*Number of the company's offices.*/
    "numberOfOffices": NamedNode;
    "numberOfOfficials": NamedNode;
    "numberOfOrbits": NamedNode;
    "numberOfPads": NamedNode;
    /*The books number of pages.*/
    "numberOfPages": NamedNode;
    "numberOfParkingSpaces": NamedNode;
    "numberOfParticipatingAthletes": NamedNode;
    "numberOfParticipatingFemaleAthletes": NamedNode;
    "numberOfParticipatingMaleAthletes": NamedNode;
    "numberOfParticipatingNations": NamedNode;
    "numberOfPeopleAttending": NamedNode;
    /*nombre de personnes ayant une license pour pratiquer cette activité*/
    "numberOfPeopleLicensed": NamedNode;
    /*Number of piers standing in a river or other water in normal conditions.*/
    "numberOfPiersInWater": NamedNode;
    "numberOfPixels": NamedNode;
    /*Number of levels of platforms at the station.*/
    "numberOfPlatformLevels": NamedNode;
    "numberOfPlayers": NamedNode;
    "numberOfPostgraduateStudents": NamedNode;
    /*number of people who earns his living from a specified activity.*/
    "numberOfProfessionals": NamedNode;
    "numberOfReactors": NamedNode;
    "numberOfRestaurants": NamedNode;
    "numberOfRockets": NamedNode;
    "numberOfRooms": NamedNode;
    "numberOfRun": NamedNode;
    "numberOfSeasons": NamedNode;
    "numberOfSeats": NamedNode;
    /*aantal zetels in Tweede-Kamer-achtig parlement*/
    "numberOfSeatsInParliament": NamedNode;
    "numberOfSettlement": NamedNode;
    "numberOfSilverMedalsWon": NamedNode;
    /*Number of spans or arches.*/
    "numberOfSpans": NamedNode;
    "numberOfSpeakers": NamedNode;
    "numberOfSports": NamedNode;
    "numberOfSportsEvents": NamedNode;
    "numberOfStaff": NamedNode;
    "numberOfStars": NamedNode;
    "numberOfStateDeputies": NamedNode;
    /*Number of stations or stops.*/
    "numberOfStations": NamedNode;
    "numberOfStudents": NamedNode;
    /*the number of studio albums released by the musical artist*/
    "numberOfStudioAlbums": NamedNode;
    "numberOfSuites": NamedNode;
    "numberOfTeams": NamedNode;
    /*Number of tracks of a railway or railway station.*/
    "numberOfTracks": NamedNode;
    "numberOfTurns": NamedNode;
    "numberOfUndergraduateStudents": NamedNode;
    /*Number of vehicles used in the transit system.*/
    "numberOfVehicles": NamedNode;
    "numberOfVillages": NamedNode;
    "numberOfVineyards": NamedNode;
    "numberOfVisitors": NamedNode;
    /*The year in which number of visitors occurred.*/
    "numberOfVisitorsAsOf": NamedNode;
    "numberOfVolumes": NamedNode;
    "numberOfVolunteers": NamedNode;
    "numberOfWineries": NamedNode;
    /*Number of things (eg vehicles) sold*/
    "numberSold": NamedNode;
    /*Nomenclature of Territorial Units for Statistics (NUTS) is a geocode  standard for referencing the subdivisions of countries  for statistical purposes. The standard is developed and regulated by the European Union, and thus only covers the member states of the EU in detail.*/
    "nutsCode": NamedNode;
    /*επιστημονικά ιδρύματα που παρατηρούν και μελετάνε ουράνια σώματα και φαινόμενα.*/
    "observatory": NamedNode;
    "occupation": NamedNode;
    /*Online Computer Library Center number*/
    "oclc": NamedNode;
    "offeredClasses": NamedNode;
    "office": NamedNode;
    "officerInCharge": NamedNode;
    "officialLanguage": NamedNode;
    "officialName": NamedNode;
    "officialOpenedBy": NamedNode;
    /*The official colour of the EducationalInstitution represented by the colour name (e.g.: red or green).*/
    "officialSchoolColour": NamedNode;
    /*Identifier used by the Swiss Federal Institute for Statistics*/
    "ofsCode": NamedNode;
    "oilSystem": NamedNode;
    /*Code used to indentify populated places in Russia*/
    "okatoCode": NamedNode;
    "oldDistrict": NamedNode;
    "oldName": NamedNode;
    "oldProvince": NamedNode;
    "oldTeamCoached": NamedNode;
    "oldcode": NamedNode;
    "olivierAward": NamedNode;
    "olympicGames": NamedNode;
    "olympicGamesBronze": NamedNode;
    "olympicGamesGold": NamedNode;
    "olympicGamesSilver": NamedNode;
    "olympicGamesWins": NamedNode;
    "olympicOathSwornBy": NamedNode;
    "olympicOathSwornByAthlete": NamedNode;
    "olympicOathSwornByJudge": NamedNode;
    "omim": NamedNode;
    /*the number corresponding to the chromosome on which the gene is located*/
    "onChromosome": NamedNode;
    "ons": NamedNode;
    /*Availability of open access content.*/
    "openAccessContent": NamedNode;
    "openingDate": NamedNode;
    "openingFilm": NamedNode;
    "openingTheme": NamedNode;
    "openingYear": NamedNode;
    "operatingIncome": NamedNode;
    "operatingSystem": NamedNode;
    /*Organisation or City who is the operator of an ArchitecturalStructure, PublicTransitSystem, ConcentrationCamp, etc. Not to confuse with builder, owner or maintainer.
    Domain is unrestricted since Organization is Agent but City is Place. Range is unrestricted since anything can be operated.*/
    "operator": NamedNode;
    "opponent": NamedNode;
    /*"opponent in a military conflict, an organisation, country, or group of countries. "*/
    "opponents": NamedNode;
    "orbitalEccentricity": NamedNode;
    "orbitalFlights": NamedNode;
    "orbitalInclination": NamedNode;
    "orbitalPeriod": NamedNode;
    "orbits": NamedNode;
    /*Authority data on researchers, academics, etc. The ID range has been defined as a subset of the forthcoming ISNI range.*/
    "orcidId": NamedNode;
    "order": NamedNode;
    "orderDate": NamedNode;
    "orderInOffice": NamedNode;
    "ordination": NamedNode;
    /*Naam en/of beschrijving van het orgel*/
    "organ": NamedNode;
    /*the organ system that a anatomical structure belongs to*/
    "organSystem": NamedNode;
    "organisation": NamedNode;
    /*Identify the members of an organisation.*/
    "organisationMember": NamedNode;
    "orientation": NamedNode;
    "origin": NamedNode;
    "originalDanseCompetition": NamedNode;
    "originalDanseScore": NamedNode;
    "originalEndPoint": NamedNode;
    /*The original language of the work.*/
    "originalLanguage": NamedNode;
    "originalMaximumBoatBeam": NamedNode;
    "originalMaximumBoatLength": NamedNode;
    /*The original name of the entity, e.g. film, settlement, etc.*/
    "originalName": NamedNode;
    "originalStartPoint": NamedNode;
    /*The original title of the work, most of the time in the original language as well*/
    "originalTitle": NamedNode;
    /*Original use of ArchitecturalStructure or ConcentrationCamp, if it is currently being used as anything other than its original purpose.*/
    "originallyUsedFor": NamedNode;
    "origo": NamedNode;
    "orogeny": NamedNode;
    "orthologousGene": NamedNode;
    "other": NamedNode;
    "otherActivity": NamedNode;
    "otherAppearances": NamedNode;
    "otherChannel": NamedNode;
    "otherFamilyBranch": NamedNode;
    "otherFuelType": NamedNode;
    "otherFunction": NamedNode;
    "otherInformation": NamedNode;
    "otherLanguage": NamedNode;
    "otherMedia": NamedNode;
    "otherName": NamedNode;
    "otherOccupation": NamedNode;
    "otherParty": NamedNode;
    /*Connecting services that serve the station such as bus, etc.*/
    "otherServingLines": NamedNode;
    "otherSportsExperience": NamedNode;
    "otherWins": NamedNode;
    "outflow": NamedNode;
    "output": NamedNode;
    "outskirts": NamedNode;
    "overallRecord": NamedNode;
    "oversight": NamedNode;
    /*Used as if meaning: owned by, has as its owner*/
    "owner": NamedNode;
    "owningCompany": NamedNode;
    "owningOrganisation": NamedNode;
    /*Used as if meaning: has property rights over*/
    "owns": NamedNode;
    "painter": NamedNode;
    "parent": NamedNode;
    "parentCompany": NamedNode;
    "parentMountainPeak": NamedNode;
    "parentOrganisation": NamedNode;
    "parish": NamedNode;
    /*Information on station's parking facilities.*/
    "parkingInformation": NamedNode;
    "parkingLotsCars": NamedNode;
    "parkingLotsTrucks": NamedNode;
    "parliament": NamedNode;
    "parliamentType": NamedNode;
    "parliamentaryGroup": NamedNode;
    "part": NamedNode;
    /*total number of launches resulting in partial failure*/
    "partialFailedLaunches": NamedNode;
    "participant": NamedNode;
    "participatingIn": NamedNode;
    "particularSign": NamedNode;
    "partner": NamedNode;
    "party": NamedNode;
    "partyNumber": NamedNode;
    /*Number of passengers per day.*/
    "passengersPerDay": NamedNode;
    /*Number of passengers per year.*/
    "passengersPerYear": NamedNode;
    /*System the passengers are using (from which the passenger statistics are).*/
    "passengersUsedSystem": NamedNode;
    "pastMember": NamedNode;
    "pastor": NamedNode;
    "patent": NamedNode;
    "patron": NamedNode;
    "patronSaint": NamedNode;
    "pccSecretary": NamedNode;
    /*gene entry for 3D structural data as per the PDB (Protein Data Bank) database*/
    "pdb": NamedNode;
    "peabodyAward": NamedNode;
    "penaltiesTeamA": NamedNode;
    "penaltiesTeamB": NamedNode;
    "penaltyScore": NamedNode;
    "penisLength": NamedNode;
    /*Name for the people inhabiting a place, eg Ankara->Ankariotes, Bulgaria->Bulgarians*/
    "peopleName": NamedNode;
    "perCapitaIncome": NamedNode;
    "perCapitaIncomeAsOf": NamedNode;
    "perCapitaIncomeRank": NamedNode;
    "percentage": NamedNode;
    /*percentage of alcohol present in a beverage*/
    "percentageAlcohol": NamedNode;
    /*how much fat (as a percentage) does this food contain. Mostly applies to Cheese*/
    "percentageFat": NamedNode;
    "percentageLiteracyMen": NamedNode;
    "percentageLiteracyWomen": NamedNode;
    "percentageLiterate": NamedNode;
    "percentageOfAreaWater": NamedNode;
    "performer": NamedNode;
    "periapsis": NamedNode;
    "perifocus": NamedNode;
    "perimeter": NamedNode;
    "period": NamedNode;
    "person": NamedNode;
    "personFunction": NamedNode;
    "personName": NamedNode;
    "pgaWins": NamedNode;
    "philosophicalSchool": NamedNode;
    /*Don't use this, use areaCode*/
    "phonePrefix": NamedNode;
    "phonePrefixLabel": NamedNode;
    "photographer": NamedNode;
    /*A rank in the classification of organisms, below kingdom and above class; also called a division, especially in describing plants; a taxon at that rank.*/
    "phylum": NamedNode;
    /*A picture of a thing.*/
    "picture": NamedNode;
    "pictureDescription": NamedNode;
    "pictureFormat": NamedNode;
    /*Wikimedia CommonsCategory for pictures of this resource*/
    "picturesCommonsCategory": NamedNode;
    "piercing": NamedNode;
    "pisciculturalPopulation": NamedNode;
    "pistonStroke": NamedNode;
    "place": NamedNode;
    /*De plaats waar een persoon is begraven.*/
    "placeOfBurial": NamedNode;
    /*A religious administrative body needs to know which places of worship it*/
    "placeOfWorship": NamedNode;
    "plant": NamedNode;
    "playRole": NamedNode;
    /*A person playing for a sports team. inverseOf team*/
    "playerInTeam": NamedNode;
    "playerSeason": NamedNode;
    "playerStatus": NamedNode;
    "playingTime": NamedNode;
    "plays": NamedNode;
    "pluviometry": NamedNode;
    "podium": NamedNode;
    "podiums": NamedNode;
    "pole": NamedNode;
    "poleDriver": NamedNode;
    "poleDriverCountry": NamedNode;
    "poleDriverTeam": NamedNode;
    "polePosition": NamedNode;
    "poles": NamedNode;
    /*The police detachment serving a UK place, eg Wakefield -> "West Yorkshire Police"*/
    "policeName": NamedNode;
    "polishFilmAward": NamedNode;
    "politicGovernmentDepartment": NamedNode;
    "politicalFunction": NamedNode;
    "politicalLeader": NamedNode;
    "politicalMajority": NamedNode;
    /*Political party in the legislature (eg.: European People's Party in the European Parliament).*/
    "politicalPartyInLegislature": NamedNode;
    /*The Political party of leader.*/
    "politicalPartyOfLeader": NamedNode;
    "politicalSeats": NamedNode;
    "popularVote": NamedNode;
    "population": NamedNode;
    "populationAsOf": NamedNode;
    "populationDensity": NamedNode;
    "populationMetro": NamedNode;
    "populationMetroDensity": NamedNode;
    "populationPctChildren": NamedNode;
    "populationPctMen": NamedNode;
    "populationPctWomen": NamedNode;
    /*a place were members of an ethnic group are living*/
    "populationPlace": NamedNode;
    "populationQuote": NamedNode;
    "populationRural": NamedNode;
    "populationRuralDensity": NamedNode;
    "populationTotal": NamedNode;
    "populationTotalRanking": NamedNode;
    "populationTotalReference": NamedNode;
    "populationUrban": NamedNode;
    "populationUrbanDensity": NamedNode;
    "populationYear": NamedNode;
    "portfolio": NamedNode;
    "portrayer": NamedNode;
    "position": NamedNode;
    /*A postal code (known in various countries as a post code, postcode, or ZIP code) is a series of letters and/or digits appended to a postal address for the purpose of sorting mail.*/
    "postalCode": NamedNode;
    "power": NamedNode;
    "powerOutput": NamedNode;
    "powerType": NamedNode;
    "precursor": NamedNode;
    "predecessor": NamedNode;
    "prefaceBy": NamedNode;
    "prefect": NamedNode;
    "prefectMandate": NamedNode;
    "prefecture": NamedNode;
    "prefix": NamedNode;
    /*Date the play was first performed.*/
    "premiereDate": NamedNode;
    /*The theatre and/or city the play was first performed in.*/
    "premierePlace": NamedNode;
    /*Year the play was first performed.*/
    "premiereYear": NamedNode;
    "presentMunicipality": NamedNode;
    "presentName": NamedNode;
    "presenter": NamedNode;
    "president": NamedNode;
    "presidentGeneralCouncil": NamedNode;
    "presidentGeneralCouncilMandate": NamedNode;
    "presidentRegionalCouncil": NamedNode;
    "presidentRegionalCouncilMandate": NamedNode;
    "previousDemographics": NamedNode;
    "previousEditor": NamedNode;
    "previousEntity": NamedNode;
    "previousEvent": NamedNode;
    "previousInfrastructure": NamedNode;
    "previousMission": NamedNode;
    "previousName": NamedNode;
    "previousPopulation": NamedNode;
    "previousPopulationTotal": NamedNode;
    "previousWork": NamedNode;
    /*The price of something, eg a journal. For "total money earned by an Athlete" use gross*/
    "price": NamedNode;
    "primaryFuelType": NamedNode;
    "primate": NamedNode;
    "primeMinister": NamedNode;
    "primogenitor": NamedNode;
    /*Principal of an educational institution (school)*/
    "principal": NamedNode;
    "principalArea": NamedNode;
    "principalEngineer": NamedNode;
    "proPeriod": NamedNode;
    "proSince": NamedNode;
    "proTeam": NamedNode;
    "proYear": NamedNode;
    "probowlPick": NamedNode;
    /*De naam die verwijst naar de formele definitie van een verzameling stappen die in de juiste volgorde leiden tot de afronding van de zaak*/
    "procedure": NamedNode;
    "producedBy": NamedNode;
    /*The producer of the creative work.*/
    "producer": NamedNode;
    "produces": NamedNode;
    "product": NamedNode;
    "productShape": NamedNode;
    "production": NamedNode;
    /*the company that produced the work e.g. Film, MusicalWork, Software*/
    "productionCompany": NamedNode;
    "productionEndDate": NamedNode;
    "productionEndYear": NamedNode;
    "productionStartDate": NamedNode;
    "productionStartYear": NamedNode;
    "productionYears": NamedNode;
    "profession": NamedNode;
    "programCost": NamedNode;
    /*The programming format describes the overall content broadcast on a radio or television station.*/
    "programmeFormat": NamedNode;
    "programmingLanguage": NamedNode;
    "project": NamedNode;
    /*The part of the project budget that is funded by the Organistaions given in the "FundedBy" property.*/
    "projectBudgetFunding": NamedNode;
    /*The total budget of the research project.*/
    "projectBudgetTotal": NamedNode;
    /*The coordinating organisation of the project.*/
    "projectCoordinator": NamedNode;
    /*The end date of the project.*/
    "projectEndDate": NamedNode;
    /*A key word of the project.*/
    "projectKeyword": NamedNode;
    /*A defined objective of the project.*/
    "projectObjective": NamedNode;
    /*A participating organisation of the project.*/
    "projectParticipant": NamedNode;
    /*The reference identification of the project.*/
    "projectReferenceID": NamedNode;
    /*The start date of the project.*/
    "projectStartDate": NamedNode;
    /*The type of the research project. Mostly used for the funding schemes of the European Union, for instance: Specific Targeted Research Projects (STREP), Network of Excellence (NoE) or Integrated Project.*/
    "projectType": NamedNode;
    "prominence": NamedNode;
    "promotion": NamedNode;
    "pronunciation": NamedNode;
    "prospectLeague": NamedNode;
    "prospectTeam": NamedNode;
    /*Aanduiding van het soort beschermingsregime. Bijv. 'rijksmonument' in Nederland of 'Monument Historique' in Belgie of Frankrijk*/
    "protectionStatus": NamedNode;
    /*Amount of proteins per servingSize of a Food*/
    "protein": NamedNode;
    "protestantPercentage": NamedNode;
    "provCode": NamedNode;
    "provides": NamedNode;
    "province": NamedNode;
    "provinceIsoCode": NamedNode;
    "provinceLink": NamedNode;
    "provost": NamedNode;
    "pseudonym": NamedNode;
    "pubchem": NamedNode;
    "publication": NamedNode;
    "publicationDate": NamedNode;
    /*describes in what way this site is accessible for public*/
    "publiclyAccessible": NamedNode;
    /*Publisher of a work. For literal (string) use dc:publisher; for object (URL) use publisher*/
    "publisher": NamedNode;
    "purchasingPowerParity": NamedNode;
    "purchasingPowerParityRank": NamedNode;
    "purchasingPowerParityYear": NamedNode;
    "purpose": NamedNode;
    "qatarClassic": NamedNode;
    "quebecerTitle": NamedNode;
    /*A quotation is the repetition of one expression as part of another one, particularly when the quoted expression is well-known or explicitly attributed by citation to its original source.*/
    "quotation": NamedNode;
    "quote": NamedNode;
    "ra": NamedNode;
    "race": NamedNode;
    "raceHorse": NamedNode;
    "raceLength": NamedNode;
    /*Result of one racer in a sport competition*/
    "raceResult": NamedNode;
    "raceTrack": NamedNode;
    "raceWins": NamedNode;
    "races": NamedNode;
    "racketCatching": NamedNode;
    /*To ραδιόφωνο είναι η συσκευή που λειτουργεί ως "ραδιοδέκτης - μετατροπέας" όπου λαμβάνοντας τις ραδιοφωνικές εκπομπές των ραδιοφωνικών σταθμών τις μετατρέπει σε ήχο.*/
    "radio": NamedNode;
    "radioStation": NamedNode;
    "radius_ly": NamedNode;
    "railGauge": NamedNode;
    /*Railway line that is using the tunnel.*/
    "railwayLineUsingTunnel": NamedNode;
    /*Information on the type of platform(s) at the station.*/
    "railwayPlatforms": NamedNode;
    "railwayRollingStock": NamedNode;
    /*Maximum distance without refueling*/
    "range": NamedNode;
    /*Rank of something among other things of the same kind, eg Constellations by Area; MusicalAlbums by popularity, etc*/
    "rank": NamedNode;
    "rankAgreement": NamedNode;
    "rankArea": NamedNode;
    "rankInFinalMedalCount": NamedNode;
    "rankPopulation": NamedNode;
    "ranking": NamedNode;
    "rankingWins": NamedNode;
    "rankingsDoubles": NamedNode;
    "rankingsSingles": NamedNode;
    "rating": NamedNode;
    "ratio": NamedNode;
    "rebuildDate": NamedNode;
    "rebuilder": NamedNode;
    "rebuildingDate": NamedNode;
    "rebuildingYear": NamedNode;
    "recentWinner": NamedNode;
    "recommissioningDate": NamedNode;
    "recordDate": NamedNode;
    "recordLabel": NamedNode;
    "recordedIn": NamedNode;
    "rector": NamedNode;
    /*red list code for treatened species NL (different from IUCN)*/
    "redListIdNL": NamedNode;
    "redLongDistancePisteNumber": NamedNode;
    "redSkiPisteNumber": NamedNode;
    "redline": NamedNode;
    "refcul": NamedNode;
    /*Structured reference providing info about the subject*/
    "reference": NamedNode;
    "reffBourgmestre": NamedNode;
    "refgen": NamedNode;
    "refgeo": NamedNode;
    "refpol": NamedNode;
    "refseq": NamedNode;
    "refseqmrna": NamedNode;
    "refseqprotein": NamedNode;
    "regency": NamedNode;
    /*Subject has served as the regent of another monarch*/
    "regentOf": NamedNode;
    "regime": NamedNode;
    /*The regin where the thing is located or is connected to.*/
    "region": NamedNode;
    "regionLink": NamedNode;
    "regionServed": NamedNode;
    "regionType": NamedNode;
    "regionalCouncil": NamedNode;
    "regionalLanguage": NamedNode;
    "regionalPrefecture": NamedNode;
    "registration": NamedNode;
    /*Identification of the registry a document is in*/
    "registryNumber": NamedNode;
    "reign": NamedNode;
    "reignName": NamedNode;
    "reigningPope": NamedNode;
    "related": NamedNode;
    /*Deze property is voor de lijst van persoonfuncties die een persoon (bv. een politicus) bekleedt of heeft bekleed*/
    "relatedFunctions": NamedNode;
    "relatedMeanOfTransportation": NamedNode;
    /*Deze property is voor de lijst van monumenten die horen bij het monument van de infobox*/
    "relatedPlaces": NamedNode;
    "relation": NamedNode;
    "relative": NamedNode;
    /*Maiseanna adamh, a chuirtear síos i dtéarmaí aonaid maise adamhaí u.*/
    "relativeAtomicMass": NamedNode;
    /*Release date of a Work or another product (eg Aircraft or other MeansOfTransportation*/
    "releaseDate": NamedNode;
    /*Usually used with releaseDate, particularly for Films. Often there can be several pairs so our modeling is not precise here...*/
    "releaseLocation": NamedNode;
    /*Physical remains or personal effects of a saint or venerated person, preserved in a religious building*/
    "relics": NamedNode;
    "relief": NamedNode;
    "religion": NamedNode;
    "religiousHead": NamedNode;
    "religiousHeadLabel": NamedNode;
    "religiousOrder": NamedNode;
    "reopened": NamedNode;
    /*Date of reopening the architectural structure.*/
    "reopeningDate": NamedNode;
    /*Year of reopening the architectural structure.*/
    "reopeningYear": NamedNode;
    /*A reporting mark is a two-, three-, or four-letter alphabetic code used to identify owners or lessees of rolling stock and other equipment used on the North American railroad network.*/
    "reportingMark": NamedNode;
    "representative": NamedNode;
    "requirement": NamedNode;
    /*Are reservations required for the establishment or event?*/
    "reservations": NamedNode;
    /*Place of residence of a person.*/
    "residence": NamedNode;
    /*Native Resolution*/
    "resolution": NamedNode;
    "restingDate": NamedNode;
    "restingPlace": NamedNode;
    "restingPlacePosition": NamedNode;
    "restoreDate": NamedNode;
    "result": NamedNode;
    "retentionTime": NamedNode;
    "retired": NamedNode;
    "retiredRocket": NamedNode;
    "retirementDate": NamedNode;
    "revenue": NamedNode;
    "review": NamedNode;
    "rgbCoordinateBlue": NamedNode;
    "rgbCoordinateGreen": NamedNode;
    "rgbCoordinateRed": NamedNode;
    /*An identifying system for scientific authors. The system was introduced in January 2008 by Thomson Reuters. The combined use of the Digital Object Identifier with the ResearcherID allows for a unique association of authors and scientific articles.*/
    "ridId": NamedNode;
    "rightAscension": NamedNode;
    "rightChild": NamedNode;
    "rightTributary": NamedNode;
    "rival": NamedNode;
    "river": NamedNode;
    "riverBranch": NamedNode;
    "riverBranchOf": NamedNode;
    "riverMouth": NamedNode;
    /*Rijksbureau voor Kunsthistorische Documentatie (RKD) artists database id.
    http://rkd.nl/explore/artists/$1*/
    "rkdArtistsId": NamedNode;
    "road": NamedNode;
    "rocket": NamedNode;
    /*purpose of the rocket*/
    "rocketFunction": NamedNode;
    /*number of stages, not including boosters*/
    "rocketStages": NamedNode;
    "rolandGarrosDouble": NamedNode;
    "rolandGarrosMixed": NamedNode;
    "rolandGarrosSingle": NamedNode;
    "role": NamedNode;
    "roleInEvent": NamedNode;
    "roofHeight": NamedNode;
    "rotationPeriod": NamedNode;
    "route": NamedNode;
    /*details of the activity for a road.*/
    "routeActivity": NamedNode;
    /*Himmelsrichtung des Verkehrsweges (z.B. North-South).*/
    "routeDirection": NamedNode;
    /*End of the route. This is where the route ends and, for U.S. roads, is either at the northern terminus or eastern terminus.*/
    "routeEnd": NamedNode;
    /*End of the route. The opposite of OntologyProperty:routeStartDirection.*/
    "routeEndDirection": NamedNode;
    /*End-Ort des Verkehrswegs.*/
    "routeEndLocation": NamedNode;
    /*A junction or cross to another route.*/
    "routeJunction": NamedNode;
    /*ligne d'un arrêt sur une route.*/
    "routeLine": NamedNode;
    /*arrêt suivant sur une route.*/
    "routeNext": NamedNode;
    /*The number of the route.*/
    "routeNumber": NamedNode;
    /*arrêt précédent sur une route.*/
    "routePrevious": NamedNode;
    /*Anfang des Verkehrswegs.*/
    "routeStart": NamedNode;
    /*End of the route. For U.S. roads, this should be either "South" or "West" per the standards set by the U.S. Roads project.*/
    "routeStartDirection": NamedNode;
    /*Der Startort des Verkehrswegs.*/
    "routeStartLocation": NamedNode;
    /*The route type abbreviation (eg.: I for Interstate, M for Motorway or NJ for New Jersey Route).*/
    "routeTypeAbbreviation": NamedNode;
    "royalAnthem": NamedNode;
    /*Ruling referred to in this legal case*/
    "ruling": NamedNode;
    "runningMate": NamedNode;
    "runtime": NamedNode;
    "runwayDesignation": NamedNode;
    "runwayLength": NamedNode;
    "runwaySurface": NamedNode;
    "runwayWidth": NamedNode;
    "ruralMunicipality": NamedNode;
    "saint": NamedNode;
    "salary": NamedNode;
    /*This property holds an intermediate node of the type Sales.*/
    "sales": NamedNode;
    "sameName": NamedNode;
    /*most recent average SAT scores*/
    "satScore": NamedNode;
    "satellite": NamedNode;
    "satellitesDeployed": NamedNode;
    "scale": NamedNode;
    "scene": NamedNode;
    /*school a person goes or went to*/
    "school": NamedNode;
    "schoolBoard": NamedNode;
    "schoolCode": NamedNode;
    "schoolNumber": NamedNode;
    "schoolPatron": NamedNode;
    "scientificName": NamedNode;
    /*Score or points of something (eg a SportCompetitionResult)*/
    "score": NamedNode;
    "screenActorsGuildAward": NamedNode;
    "sea": NamedNode;
    "season": NamedNode;
    "seasonManager": NamedNode;
    /*The season number to which the TelevisionEpisode belongs.*/
    "seasonNumber": NamedNode;
    "seatNumber": NamedNode;
    "seatingCapacity": NamedNode;
    "second": NamedNode;
    "secondCommander": NamedNode;
    "secondDriver": NamedNode;
    "secondDriverCountry": NamedNode;
    "secondLeader": NamedNode;
    "secondPlace": NamedNode;
    "secondPopularVote": NamedNode;
    "secondTeam": NamedNode;
    "secretaryGeneral": NamedNode;
    /*Safety precautions that are used in the building.*/
    "security": NamedNode;
    "seiyu": NamedNode;
    /*when (or in which project) the person was selected to train as an astronaut*/
    "selection": NamedNode;
    "selectionPoint": NamedNode;
    "selectionYear": NamedNode;
    /*Authority data from the National Library of Sweden*/
    "selibrId": NamedNode;
    "senator": NamedNode;
    "senior": NamedNode;
    "seniority": NamedNode;
    "seniunija": NamedNode;
    "sentence": NamedNode;
    "series": NamedNode;
    "service": NamedNode;
    "serviceEndDate": NamedNode;
    "serviceEndYear": NamedNode;
    "serviceModule": NamedNode;
    /*The service number held by the individual during military service.*/
    "serviceNumber": NamedNode;
    "serviceStartDate": NamedNode;
    "serviceStartYear": NamedNode;
    /*Railway services that serve the station.*/
    "servingRailwayLine": NamedNode;
    /*Default serving size (eg "100 g" for the standard 100 g serving size). approximateCalories apply to this serving size*/
    "servingSize": NamedNode;
    /*Serving temperature for the food (e.g.: hot, cold, warm or room temperature).*/
    "servingTemperature": NamedNode;
    "sessionNumber": NamedNode;
    /*the person who is responsible for the film set design*/
    "setDesigner": NamedNode;
    /*The places and time where the play takes place.*/
    "settingOfPlay": NamedNode;
    "settlement": NamedNode;
    "settlementAttached": NamedNode;
    "setupTime": NamedNode;
    "sex": NamedNode;
    "sexualOrientation": NamedNode;
    "shape": NamedNode;
    "shareDate": NamedNode;
    "shareOfAudience": NamedNode;
    "shareSource": NamedNode;
    "sharingOutPopulation": NamedNode;
    "sharingOutPopulationYear": NamedNode;
    "sheading": NamedNode;
    /*The beam of a ship is its width at the widest point.*/
    "shipBeam": NamedNode;
    "shipCrew": NamedNode;
    /*A ship's displacement is its mass at any given time.*/
    "shipDisplacement": NamedNode;
    /*The draft (or draught) of a ship's hull is the vertical distance between the waterline and the bottom of the hull (keel), with the thickness of the hull included; in the case of not being included the draft outline would be obtained.*/
    "shipDraft": NamedNode;
    "shipLaunch": NamedNode;
    "shoeNumber": NamedNode;
    "shoeSize": NamedNode;
    "shoot": NamedNode;
    "shoots": NamedNode;
    "shoreLength": NamedNode;
    "shortProgCompetition": NamedNode;
    "shortProgScore": NamedNode;
    "show": NamedNode;
    "showJudge": NamedNode;
    "shuttle": NamedNode;
    "sibling": NamedNode;
    "signName": NamedNode;
    "signature": NamedNode;
    "significantBuilding": NamedNode;
    "significantDesign": NamedNode;
    /*A siginificant artifact constructed by the person.*/
    "significantProject": NamedNode;
    "silCode": NamedNode;
    "silverMedalDouble": NamedNode;
    "silverMedalMixed": NamedNode;
    "silverMedalSingle": NamedNode;
    "silverMedalist": NamedNode;
    /*indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities*/
    "simcCode": NamedNode;
    "similar": NamedNode;
    "sire": NamedNode;
    "siren": NamedNode;
    "sisterCollege": NamedNode;
    "sisterNewspaper": NamedNode;
    "sisterStation": NamedNode;
    "sixthFormStudents": NamedNode;
    "sizeBlazon": NamedNode;
    "sizeLogo": NamedNode;
    "sizeMap": NamedNode;
    "sizeThumbnail": NamedNode;
    "size_v": NamedNode;
    "skiLift": NamedNode;
    "skiPisteKilometre": NamedNode;
    "skiPisteNumber": NamedNode;
    "skiTow": NamedNode;
    "skills": NamedNode;
    "skinColor": NamedNode;
    "slogan": NamedNode;
    /*The Simplified Molecular-Input Line-Entry System or SMILES is a specification in form of a line notation for describing the structure of chemical molecules using short ASCII strings.*/
    "smiles": NamedNode;
    "snowParkNumber": NamedNode;
    "soccerLeaguePromoted": NamedNode;
    "soccerLeagueRelegated": NamedNode;
    "soccerLeagueSeason": NamedNode;
    "soccerLeagueWinner": NamedNode;
    "soccerTournamentClosingSeason": NamedNode;
    "soccerTournamentLastChampion": NamedNode;
    "soccerTournamentMostSteady": NamedNode;
    "soccerTournamentMostSuccesfull": NamedNode;
    "soccerTournamentOpeningSeason": NamedNode;
    "soccerTournamentThisSeason": NamedNode;
    "soccerTournamentTopScorer": NamedNode;
    /*de advocaat-generaal*/
    "solicitorGeneral": NamedNode;
    "solubility": NamedNode;
    "solventWithBadSolubility": NamedNode;
    "solventWithGoodSolubility": NamedNode;
    "solventWithMediocreSolubility": NamedNode;
    /*Sound recording somehow related to the subject*/
    "soundRecording": NamedNode;
    "source": NamedNode;
    "sourceConfluence": NamedNode;
    "sourceConfluenceCountry": NamedNode;
    "sourceConfluenceElevation": NamedNode;
    "sourceConfluenceMountain": NamedNode;
    "sourceConfluencePlace": NamedNode;
    "sourceConfluencePosition": NamedNode;
    "sourceConfluenceRegion": NamedNode;
    "sourceConfluenceState": NamedNode;
    "sourceCountry": NamedNode;
    "sourceDistrict": NamedNode;
    "sourceElevation": NamedNode;
    "sourceMountain": NamedNode;
    "sourcePlace": NamedNode;
    "sourcePosition": NamedNode;
    "sourceRegion": NamedNode;
    "sourceState": NamedNode;
    /*Source of something (eg an image) as text. Use dct:source if the source is described using a resource*/
    "sourceText": NamedNode;
    /*indicates another place situated south-east.*/
    "southEastPlace": NamedNode;
    /*indicates another place situated south.*/
    "southPlace": NamedNode;
    /*indicates another place situated south-west.*/
    "southWestPlace": NamedNode;
    "sovereignCountry": NamedNode;
    "space": NamedNode;
    "spacecraft": NamedNode;
    /*Raumstation, die während einer Raummission besucht wurde*/
    "spacestation": NamedNode;
    "spacewalkBegin": NamedNode;
    "spacewalkEnd": NamedNode;
    /*number of office holder*/
    "speaker": NamedNode;
    /*the person who is responsible for the film special effects*/
    "specialEffects": NamedNode;
    "specialTrial": NamedNode;
    "specialist": NamedNode;
    "speciality": NamedNode;
    "species": NamedNode;
    "speedLimit": NamedNode;
    "spike": NamedNode;
    "splitFromParty": NamedNode;
    "spokenIn": NamedNode;
    "spokesperson": NamedNode;
    "sport": NamedNode;
    /*Das Land, für das der Sportler an Wettkämpfen teilnimmt*/
    "sportCountry": NamedNode;
    /*the sport discipline the athlete practices, e.g. Diving, or that a board member of a sporting club is focussing at*/
    "sportDiscipline": NamedNode;
    "sportGoverningBody": NamedNode;
    /*the sport specialty the athlete practices, e.g. 'Ring' for a men's artistic gymnastics athlete*/
    "sportSpecialty": NamedNode;
    "sportsFunction": NamedNode;
    /*the person they are married to*/
    "spouse": NamedNode;
    "spouseName": NamedNode;
    "spurOf": NamedNode;
    "spurType": NamedNode;
    /*The number that an athlete wears in a team sport.*/
    "squadNumber": NamedNode;
    "stadium": NamedNode;
    "staff": NamedNode;
    "starRating": NamedNode;
    "starring": NamedNode;
    "start": NamedNode;
    "startCareer": NamedNode;
    /*The start date of the event.*/
    "startDate": NamedNode;
    /*The start date and time of the event.*/
    "startDateTime": NamedNode;
    "startOccupation": NamedNode;
    "startPoint": NamedNode;
    "startReign": NamedNode;
    "startWct": NamedNode;
    "startWqs": NamedNode;
    "startYear": NamedNode;
    "startYearOfInsertion": NamedNode;
    "startYearOfSales": NamedNode;
    "statName": NamedNode;
    "statValue": NamedNode;
    "state": NamedNode;
    "stateDelegate": NamedNode;
    "stateOfOrigin": NamedNode;
    "stateOfOriginPoint": NamedNode;
    "stateOfOriginTeam": NamedNode;
    "stateOfOriginYear": NamedNode;
    "stationEvaDuration": NamedNode;
    /*Type of station structure (underground, at-grade, or elevated).*/
    "stationStructure": NamedNode;
    "stationVisitDuration": NamedNode;
    "statistic": NamedNode;
    "statisticLabel": NamedNode;
    "statisticValue": NamedNode;
    "statisticYear": NamedNode;
    "status": NamedNode;
    "statusManager": NamedNode;
    "statusYear": NamedNode;
    "stellarClassification": NamedNode;
    "stockExchange": NamedNode;
    "storyEditor": NamedNode;
    "strength": NamedNode;
    "structuralSystem": NamedNode;
    "student": NamedNode;
    "style": NamedNode;
    "stylisticOrigin": NamedNode;
    /*a subdivision within a Species classis*/
    "subClassis": NamedNode;
    "subFamily": NamedNode;
    /*A rank in the classification of organisms, below genus ; a taxon at that rank*/
    "subGenus": NamedNode;
    "subMunicipalityType": NamedNode;
    "subOrder": NamedNode;
    "subPrefecture": NamedNode;
    "subTribus": NamedNode;
    "subdivision": NamedNode;
    "subdivisionLink": NamedNode;
    "subdivisionName": NamedNode;
    "subdivisions": NamedNode;
    /*The overall subject matter dealt with by the play.*/
    "subjectOfPlay": NamedNode;
    /*The subject as a term, possibly a term from a formal classification*/
    "subjectTerm": NamedNode;
    "sublimationPoint": NamedNode;
    "suborbitalFlights": NamedNode;
    "subprefecture": NamedNode;
    "subregion": NamedNode;
    "subsequentInfrastructure": NamedNode;
    "subsequentWork": NamedNode;
    "subsidiary": NamedNode;
    "subsystem": NamedNode;
    "subsystemLink": NamedNode;
    "subtitle": NamedNode;
    "successfulLaunches": NamedNode;
    "successor": NamedNode;
    /*Système universitaire de documentation id (French collaborative library catalog).
    http://www.idref.fr/$1*/
    "sudocId": NamedNode;
    "summerAppearances": NamedNode;
    "summerTemperature": NamedNode;
    "superFamily": NamedNode;
    "superOrder": NamedNode;
    "superTribus": NamedNode;
    "superbowlWin": NamedNode;
    "superintendent": NamedNode;
    "supplementalDraftRound": NamedNode;
    "supplementalDraftYear": NamedNode;
    "supplies": NamedNode;
    "supply": NamedNode;
    /*Date when the Church forbade the veneration of this saint.
    (I hope that's what it means, I don't know why the original author didn't document it)*/
    "suppreddedDate": NamedNode;
    "surfaceArea": NamedNode;
    "surfaceFormOccurrenceOffset": NamedNode;
    "surfaceGravity": NamedNode;
    "surfaceType": NamedNode;
    "swimmingStyle": NamedNode;
    /*HUGO Gene Symbol*/
    "symbol": NamedNode;
    "synonym": NamedNode;
    /*A referral to the relevant system of law*/
    "systemOfLaw": NamedNode;
    "systemRequirements": NamedNode;
    "tag": NamedNode;
    /*head of government of Ireland*/
    "taoiseach": NamedNode;
    "targetAirport": NamedNode;
    "targetSpaceStation": NamedNode;
    "taste": NamedNode;
    "tattoo": NamedNode;
    "taxon": NamedNode;
    "teachingStaff": NamedNode;
    "team": NamedNode;
    "teamCoached": NamedNode;
    "teamManager": NamedNode;
    "teamName": NamedNode;
    "teamPoint": NamedNode;
    "teamSize": NamedNode;
    "teamTitle": NamedNode;
    "technique": NamedNode;
    "televisionSeries": NamedNode;
    "tempPlace": NamedNode;
    "temperature": NamedNode;
    "temple": NamedNode;
    "templeYear": NamedNode;
    "tenant": NamedNode;
    /*There are five types of court surface used in professional play. Each surface is different in the speed and height of the bounce of the ball.*/
    "tennisSurfaceType": NamedNode;
    "termOfOffice": NamedNode;
    "termPeriod": NamedNode;
    "territory": NamedNode;
    /*indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities*/
    "terytCode": NamedNode;
    "tessitura": NamedNode;
    "testaverage": NamedNode;
    "theology": NamedNode;
    "third": NamedNode;
    "thirdCommander": NamedNode;
    "thirdDriver": NamedNode;
    "thirdDriverCountry": NamedNode;
    "thirdPlace": NamedNode;
    "thirdTeam": NamedNode;
    "throwingSide": NamedNode;
    /*Reserved for DBpedia.*/
    "thumbnail": NamedNode;
    "thumbnailCaption": NamedNode;
    "tie": NamedNode;
    /*Χρόνος χαρακτηρίζεται η ακριβής μέτρηση μιας διαδικασίας από το παρελθόν στο μέλλον.*/
    "time": NamedNode;
    "timeInSpace": NamedNode;
    "timeZone": NamedNode;
    "timeshiftChannel": NamedNode;
    "title": NamedNode;
    "titleDate": NamedNode;
    "titleDouble": NamedNode;
    "titleLanguage": NamedNode;
    "titleSingle": NamedNode;
    "toll": NamedNode;
    "tonyAward": NamedNode;
    "topFloorHeight": NamedNode;
    "topLevelDomain": NamedNode;
    "topSpeed": NamedNode;
    "topic": NamedNode;
    "torchBearer": NamedNode;
    "torqueOutput": NamedNode;
    "totalCargo": NamedNode;
    /*the total number of discs contained in the album*/
    "totalDiscs": NamedNode;
    "totalLaunches": NamedNode;
    "totalMass": NamedNode;
    "totalPopulation": NamedNode;
    /*the total number of tracks contained in the album*/
    "totalTracks": NamedNode;
    "totalTravellers": NamedNode;
    "touristicSite": NamedNode;
    "tournamentOfChampions": NamedNode;
    "tournamentRecord": NamedNode;
    "towerHeight": NamedNode;
    /*Length of the track. Wikipedians usually do not differentiate between track length and line lenght.*/
    "trackLength": NamedNode;
    "trackNumber": NamedNode;
    /*Width of the track, e.g., the track width differing in Russia from (Western and Middle) European track width*/
    "trackWidth": NamedNode;
    "tradeMark": NamedNode;
    "trainer": NamedNode;
    "trainerClub": NamedNode;
    "trainerYears": NamedNode;
    "training": NamedNode;
    "translatedMotto": NamedNode;
    /*Translator(s), if original not in English*/
    "translator": NamedNode;
    "transmission": NamedNode;
    "tree": NamedNode;
    "tribus": NamedNode;
    "trustee": NamedNode;
    "tu": NamedNode;
    "tuition": NamedNode;
    "tvComId": NamedNode;
    "tvShow": NamedNode;
    "twinCountry": NamedNode;
    "twinTown": NamedNode;
    "type": NamedNode;
    /*Scale parameters that can be understood by Geohack, eg "type:", "scale:", "region:" "altitude:". Use "_" for several (eg "type:landmark_scale:50000"). See https://fr.wikipedia.org/wiki/Modèle:Infobox_Subdivision_administrative for examples, and https://fr.wikipedia.org/wiki/Modèle:GeoTemplate/Utilisation#La_mention_Type:... for a complete list*/
    "typeCoordinate": NamedNode;
    /*Electrification system (e.g. Third rail, Overhead catenary).*/
    "typeOfElectrification": NamedNode;
    "typeOfGrain": NamedNode;
    "typeOfStorage": NamedNode;
    "typeOfYeast": NamedNode;
    /*DfE unique reference number of a school in England or Wales*/
    "uRN": NamedNode;
    /*Official UCI code for cycling teams*/
    "uciCode": NamedNode;
    /*Union List of Artist Names id (Getty Research Institute). ULAN has 293,000 names and other information about artists. Names in ULAN may include given names, pseudonyms, variant spellings, names in multiple languages, and names that have changed over time (e.g., married names).
    http://vocab.getty.edu/ulan/$1*/
    "ulanId": NamedNode;
    "umbrellaTitle": NamedNode;
    "undraftedYear": NamedNode;
    "unesco": NamedNode;
    /*το διεθνές πρότυπο Unicode στοχεύει στην κωδικοποίηση όλων των συστημάτων γραφής που χρησιμοποιούνται στον πλανήτη.*/
    "unicode": NamedNode;
    "uniprot": NamedNode;
    "unitCost": NamedNode;
    "unitaryAuthority": NamedNode;
    "unitedStatesNationalBridgeId": NamedNode;
    /*To πανεπιστήμιο είναι εκπαιδευτικό ίδρυμα ανώτατης εκπαίδευσης και επιστημονικής έρευνας που παρέχει πτυχίο πιστοποίησης ακαδημαϊκής εκπαίδευσης.*/
    "university": NamedNode;
    /*number of launches with unknown outcomes (or in progress)*/
    "unknownOutcomes": NamedNode;
    /*UN/LOCODE је код Уједињених нација за трговинске и транспортне локације. Као што су луке, железнички и путни терминали, аеродроми, поште и гранични прелази.*/
    "unloCode": NamedNode;
    /*The last update date of a resource*/
    "updated": NamedNode;
    "upperAge": NamedNode;
    "urbanArea": NamedNode;
    "usOpenDouble": NamedNode;
    "usOpenMixed": NamedNode;
    "usOpenSingle": NamedNode;
    /*Number of things (eg vehicles) sold in the US*/
    "usSales": NamedNode;
    /*wars that were typical for the usage of a weapon*/
    "usedInWar": NamedNode;
    "uses": NamedNode;
    "usingCountry": NamedNode;
    "usk": NamedNode;
    "usopenWins": NamedNode;
    "usurper": NamedNode;
    "utcOffset": NamedNode;
    "v_hb": NamedNode;
    "value": NamedNode;
    "valvetrain": NamedNode;
    /*variant or variation of something, for example the variant of a car*/
    "variantOf": NamedNode;
    "varietals": NamedNode;
    /*vehicle that uses a specific automobile platform*/
    "vehicle": NamedNode;
    /*Region related vehicle code on the vehicle plates.*/
    "vehicleCode": NamedNode;
    "vehiclesPerDay": NamedNode;
    "vein": NamedNode;
    "veneratedIn": NamedNode;
    "version": NamedNode;
    /*Virtual International Authority File ID (operated by Online Computer Library Center, OCLC). Property range set to Agent because of corporate authors*/
    "viafId": NamedNode;
    "viceChancellor": NamedNode;
    "viceLeader": NamedNode;
    "viceLeaderParty": NamedNode;
    "vicePresident": NamedNode;
    "vicePrimeMinister": NamedNode;
    "vicePrincipal": NamedNode;
    "vicePrincipalLabel": NamedNode;
    /*Specific (eg notable) person, or specific class of people (eg Romani) that are victim of a ConcentrationCamp, Criminal, SerialKiller, or some other atrocity*/
    "victim": NamedNode;
    /*Type, description, or name(s) of victims of a ConcentrationCamp, Criminal, SerialKiller, or some other atrocity*/
    "victims": NamedNode;
    "victory": NamedNode;
    "victoryAsMgr": NamedNode;
    "victoryPercentageAsMgr": NamedNode;
    "virtualChannel": NamedNode;
    /*Year visitor information was gathered.*/
    "visitorStatisticsAsOf": NamedNode;
    "visitorsPerDay": NamedNode;
    "visitorsPerYear": NamedNode;
    /*Percentage increase or decrease.*/
    "visitorsPercentageChange": NamedNode;
    "visitorsTotal": NamedNode;
    /*Voice artist used in a TelevisionShow, Movie, or to sound the voice of a FictionalCharacter*/
    "voice": NamedNode;
    /*voice type of a singer or an actor*/
    "voiceType": NamedNode;
    "volcanicActivity": NamedNode;
    "volcanicType": NamedNode;
    "volcanoId": NamedNode;
    /*Voltage of the electrification system.*/
    "voltageOfElectrification": NamedNode;
    "volume": NamedNode;
    "volumeQuote": NamedNode;
    "volumes": NamedNode;
    "vonKlitzingConstant": NamedNode;
    "votesAgainst": NamedNode;
    "votesFor": NamedNode;
    "wagon": NamedNode;
    "waistSize": NamedNode;
    "war": NamedNode;
    "ward": NamedNode;
    "water": NamedNode;
    "waterArea": NamedNode;
    "waterPercentage": NamedNode;
    "watercourse": NamedNode;
    "watershed": NamedNode;
    /*Waterway that goes through the tunnel.*/
    "waterwayThroughTunnel": NamedNode;
    "wavelength": NamedNode;
    "weapon": NamedNode;
    /*The URL to the webcast of the Thing.*/
    "webcast": NamedNode;
    "websiteLabel": NamedNode;
    "weddingParentsDate": NamedNode;
    "weight": NamedNode;
    /*indicates another place situated west.*/
    "westPlace": NamedNode;
    "whaDraft": NamedNode;
    "whaDraftTeam": NamedNode;
    "whaDraftYear": NamedNode;
    "wheelbase": NamedNode;
    "wholeArea": NamedNode;
    "width": NamedNode;
    "widthQuote": NamedNode;
    /*Needs to be removed, left at the moment to not break DBpedia Live*/
    "wikiPageCharacterSize": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageDisambiguates": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageEditLink": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageExternalLink": NamedNode;
    /*Date a page was extracted ''''''*/
    "wikiPageExtracted": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageHistoryLink": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageID": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageInDegree": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageInterLanguageLink": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageLength": NamedNode;
    /*Reserved for DBpedia ''''''*/
    "wikiPageModified": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageOutDegree": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageRedirects": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageRevisionID": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageRevisionLink": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageWikiLink": NamedNode;
    /*Reserved for DBpedia.*/
    "wikiPageWikiLinkText": NamedNode;
    /*is used to denote splitting of a Wikidata IRI to one or more IRIs*/
    "wikidataSplitIri": NamedNode;
    "wilaya": NamedNode;
    "wimbledonDouble": NamedNode;
    "wimbledonMixed": NamedNode;
    "wimbledonSingle": NamedNode;
    "wineProduced": NamedNode;
    "wineRegion": NamedNode;
    "wineYear": NamedNode;
    "wingArea": NamedNode;
    "wingspan": NamedNode;
    "wins": NamedNode;
    "winsAtAlpg": NamedNode;
    "winsAtAsia": NamedNode;
    "winsAtAus": NamedNode;
    "winsAtChallenges": NamedNode;
    "winsAtChampionships": NamedNode;
    "winsAtJLPGA": NamedNode;
    "winsAtJapan": NamedNode;
    "winsAtKLPGA": NamedNode;
    "winsAtLAGT": NamedNode;
    "winsAtLET": NamedNode;
    "winsAtLPGA": NamedNode;
    "winsAtMajors": NamedNode;
    "winsAtNWIDE": NamedNode;
    "winsAtOtherTournaments": NamedNode;
    "winsAtPGA": NamedNode;
    "winsAtProTournaments": NamedNode;
    "winsAtSenEuro": NamedNode;
    "winsAtSun": NamedNode;
    "winsInEurope": NamedNode;
    "winterAppearances": NamedNode;
    "winterTemperature": NamedNode;
    /*World Register of Marine Species*/
    "woRMS": NamedNode;
    "wordBefore": NamedNode;
    "work": NamedNode;
    "workArea": NamedNode;
    "world": NamedNode;
    /*can be one or several years*/
    "worldChampionTitleYear": NamedNode;
    "worldOpen": NamedNode;
    "worldTeamCup": NamedNode;
    "worldTournament": NamedNode;
    "worldTournamentBronze": NamedNode;
    "worldTournamentGold": NamedNode;
    "worldTournamentSilver": NamedNode;
    "worstDefeat": NamedNode;
    "wptFinalTable": NamedNode;
    "wptItm": NamedNode;
    "wptTitle": NamedNode;
    "writer": NamedNode;
    "wsopItm": NamedNode;
    "wsopWinYear": NamedNode;
    /*Наруквица коју осваја шампион WSOP-a.*/
    "wsopWristband": NamedNode;
    "year": NamedNode;
    "yearElevationIntoNobility": NamedNode;
    /*The year in which construction of the Place was finished.*/
    "yearOfConstruction": NamedNode;
    /*Year station was electrified, if not previously at date of opening.*/
    "yearOfElectrification": NamedNode;
    "years": NamedNode;
    "youthClub": NamedNode;
    "youthWing": NamedNode;
    "youthYears": NamedNode;
    /*Identifier for serial titles. More precise than issn*/
    "zdb": NamedNode;
    "zipCode": NamedNode;
    /*Zodiac Sign. Applies to persons, planets, etc*/
    "zodiacSign": NamedNode;
    "Wikidata:Q11424": NamedNode;
    "wgs84_pos:SpatialThing": NamedNode;
    "Location": NamedNode;
    "%3Chttp://vocab.org/transit/terms/stop%3E": NamedNode;
    "Athlete,_CareerStation": NamedNode;
    "RomaniaSettlement": NamedNode;
    "Medalist": NamedNode;
    "MilitaryConflict_,_NaturalEvent": NamedNode;
    "NorwaySettlement": NamedNode;
    "Code": NamedNode;
    "HungarySettlement": NamedNode;
    "LiechtensteinSettlement": NamedNode;
    "Bishop": NamedNode;
    "Diocese,_Parish": NamedNode;
    "Parish,_Deanery": NamedNode;
    "Organisation,_PopulatedPlace": NamedNode;
    "Distance": NamedNode;
    "ArchitecturalStructure,_Monument": NamedNode;
    "Mountain,Volcano": NamedNode;
    "LanguageCode": NamedNode;
    "BelgiumSettlement": NamedNode;
    "GermanSettlement": NamedNode;
    "SwitzerlandSettlement": NamedNode;
    "Organisation,_Parish": NamedNode;
    "LebanonSettlement": NamedNode;
    "ColourName": NamedNode;
    "Wins": NamedNode;
    "Thing": NamedNode;
    "releaseYear": NamedNode;
    "Status": NamedNode;
    "MeanOfTransportation_,_Instrument": NamedNode;
    "Monastry": NamedNode;
    "Tribus": NamedNode;
    "MilitaryConflict,_AdministrativeRegion": NamedNode;
};
export const dbo: Dbo = (namespace(prefixes.dbo) as any);
