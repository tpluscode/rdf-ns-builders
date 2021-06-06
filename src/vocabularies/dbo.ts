import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Dbo {
    /** An abbey is a Catholic monastery or convent, under the authority of an Abbot or an Abbess, who serves as the spiritual father or mother of the community. */
    "Abbey": NamedNode<'http://dbpedia.org/ontology/Abbey'>;
    "AcademicConference": NamedNode<'http://dbpedia.org/ontology/AcademicConference'>;
    /** An academic journal is a mostly peer-reviewed periodical in which scholarship relating to a particular academic discipline is published. Academic journals serve as forums for the introduction and presentation for scrutiny of new research, and the critique of existing research. Content typically takes the form of articles presenting original research, review articles, and book reviews. */
    "AcademicJournal": NamedNode<'http://dbpedia.org/ontology/AcademicJournal'>;
    /** Genres of art, e.g. Mathematics, History, Philosophy, Medicine */
    "AcademicSubject": NamedNode<'http://dbpedia.org/ontology/AcademicSubject'>;
    "Activity": NamedNode<'http://dbpedia.org/ontology/Activity'>;
    /** An actor or actress is a person who acts in a dramatic production and who works in film, television, theatre, or radio in that capacity. */
    "Actor": NamedNode<'http://dbpedia.org/ontology/Actor'>;
    /** A PopulatedPlace under the jurisdiction of an administrative body. This body may administer either a whole region or one or more adjacent Settlements (town administration) */
    "AdministrativeRegion": NamedNode<'http://dbpedia.org/ontology/AdministrativeRegion'>;
    /** A pornographic actor or actress or a porn star is a person who performs sex acts in film, normally characterised as a pornographic film. */
    "AdultActor": NamedNode<'http://dbpedia.org/ontology/AdultActor'>;
    /** Analogous to a foaf:Agent, an agent is an entity that acts. This is intended to be the super class of Person and Organisation. */
    "Agent": NamedNode<'http://dbpedia.org/ontology/Agent'>;
    "Agglomeration": NamedNode<'http://dbpedia.org/ontology/Agglomeration'>;
    "Aircraft": NamedNode<'http://dbpedia.org/ontology/Aircraft'>;
    "Airline": NamedNode<'http://dbpedia.org/ontology/Airline'>;
    "Airport": NamedNode<'http://dbpedia.org/ontology/Airport'>;
    "Album": NamedNode<'http://dbpedia.org/ontology/Album'>;
    "Algorithm": NamedNode<'http://dbpedia.org/ontology/Algorithm'>;
    /** A altitude é a distancia vertical dun obxecto respecto dun punto de orixe dado, considerado como o nivel cero, para o que se adoita tomar o nivel absoluto do mar.&lt;ref&gt;https://gl.wikipedia.org/wiki/Altitude&lt;/ref&gt; */
    "Altitude": NamedNode<'http://dbpedia.org/ontology/Altitude'>;
    "AmateurBoxer": NamedNode<'http://dbpedia.org/ontology/AmateurBoxer'>;
    /** An ambassador is the highest ranking diplomat that represents a nation and is usually accredited to a foreign sovereign or government, or to an international organization. */
    "Ambassador": NamedNode<'http://dbpedia.org/ontology/Ambassador'>;
    "AmericanFootballCoach": NamedNode<'http://dbpedia.org/ontology/AmericanFootballCoach'>;
    /** A National Football League (en galego: Liga Nacional de Fútbol Americano), mellor coñecida polas súas siglas en inglés, NFL, é a maior liga de fútbol americano profesional dos Estados Unidos e está considerada como a máis grande e prestixiosa propiedade deportiva nese país.&lt;ref&gt;https://gl.wikipedia.org/wiki/National_Football_League&lt;/ref&gt; */
    "AmericanFootballLeague": NamedNode<'http://dbpedia.org/ontology/AmericanFootballLeague'>;
    "AmericanFootballPlayer": NamedNode<'http://dbpedia.org/ontology/AmericanFootballPlayer'>;
    "AmericanFootballTeam": NamedNode<'http://dbpedia.org/ontology/AmericanFootballTeam'>;
    "Amphibian": NamedNode<'http://dbpedia.org/ontology/Amphibian'>;
    "AmusementParkAttraction": NamedNode<'http://dbpedia.org/ontology/AmusementParkAttraction'>;
    "AnatomicalStructure": NamedNode<'http://dbpedia.org/ontology/AnatomicalStructure'>;
    "Animal": NamedNode<'http://dbpedia.org/ontology/Animal'>;
    /** Anime/Manga character */
    "AnimangaCharacter": NamedNode<'http://dbpedia.org/ontology/AnimangaCharacter'>;
    /** A style of animation originating in Japan */
    "Anime": NamedNode<'http://dbpedia.org/ontology/Anime'>;
    "Annotation": NamedNode<'http://dbpedia.org/ontology/Annotation'>;
    "Arachnid": NamedNode<'http://dbpedia.org/ontology/Arachnid'>;
    "Archaea": NamedNode<'http://dbpedia.org/ontology/Archaea'>;
    "Archbishop": NamedNode<'http://dbpedia.org/ontology/Archbishop'>;
    "Archeologist": NamedNode<'http://dbpedia.org/ontology/Archeologist'>;
    "ArcherPlayer": NamedNode<'http://dbpedia.org/ontology/ArcherPlayer'>;
    "Archipelago": NamedNode<'http://dbpedia.org/ontology/Archipelago'>;
    "Architect": NamedNode<'http://dbpedia.org/ontology/Architect'>;
    /** An architectural structure is a human-made, free-standing, immobile outdoor construction (http://en.wikipedia.org/wiki/Architectural_structure). */
    "ArchitecturalStructure": NamedNode<'http://dbpedia.org/ontology/ArchitecturalStructure'>;
    /** Collection of documents pertaining to a person or organisation. */
    "Archive": NamedNode<'http://dbpedia.org/ontology/Archive'>;
    /** Area of something. Use "value" for the value, "min" & "max" for a range (if uncertain) and "rank" (integer) for the rank of that thing amongst its siblings (eg regions ordered by area) */
    "Area": NamedNode<'http://dbpedia.org/ontology/Area'>;
    /** An arena is an enclosed area, often circular or oval-shaped, designed to showcase theater, musical performances, or sporting events. (http://en.wikipedia.org/wiki/Arena) */
    "Arena": NamedNode<'http://dbpedia.org/ontology/Arena'>;
    "Aristocrat": NamedNode<'http://dbpedia.org/ontology/Aristocrat'>;
    /** An administrative (France) or lawcourts (Netherlands) body governing a territorial unity on the intermediate level, between local and national level */
    "Arrondissement": NamedNode<'http://dbpedia.org/ontology/Arrondissement'>;
    "Artery": NamedNode<'http://dbpedia.org/ontology/Artery'>;
    "Article": NamedNode<'http://dbpedia.org/ontology/Article'>;
    /** In the context of spaceflight, an artificial satellite is an artificial object which has been intentionally placed into orbit. */
    "ArtificialSatellite": NamedNode<'http://dbpedia.org/ontology/ArtificialSatellite'>;
    "Artist": NamedNode<'http://dbpedia.org/ontology/Artist'>;
    "ArtistDiscography": NamedNode<'http://dbpedia.org/ontology/ArtistDiscography'>;
    /** Gattung nennt man in den Kunstwissenschaften die auf das künstlerische Ausdrucksmedium bezogenen Formen der Kunst. */
    "ArtisticGenre": NamedNode<'http://dbpedia.org/ontology/ArtisticGenre'>;
    /** A work of art, artwork, art piece, or art object is an aesthetic item or artistic creation. */
    "Artwork": NamedNode<'http://dbpedia.org/ontology/Artwork'>;
    "Asteroid": NamedNode<'http://dbpedia.org/ontology/Asteroid'>;
    "Astronaut/timeInSpace": NamedNode<'http://dbpedia.org/ontology/Astronaut/timeInSpace'>;
    "Astronaut": NamedNode<'http://dbpedia.org/ontology/Astronaut'>;
    "Athlete": NamedNode<'http://dbpedia.org/ontology/Athlete'>;
    "Athletics": NamedNode<'http://dbpedia.org/ontology/Athletics'>;
    "AthleticsPlayer": NamedNode<'http://dbpedia.org/ontology/AthleticsPlayer'>;
    "Atoll": NamedNode<'http://dbpedia.org/ontology/Atoll'>;
    /** An Attack is not necessarily part of a Military Conflict */
    "Attack": NamedNode<'http://dbpedia.org/ontology/Attack'>;
    /** A group of sports teams that compete against each other in australian football. */
    "AustralianFootballLeague": NamedNode<'http://dbpedia.org/ontology/AustralianFootballLeague'>;
    "AustralianFootballTeam": NamedNode<'http://dbpedia.org/ontology/AustralianFootballTeam'>;
    "AustralianRulesFootballPlayer": NamedNode<'http://dbpedia.org/ontology/AustralianRulesFootballPlayer'>;
    /** a group of sports teams or individual athletes that compete against each other in auto racing */
    "AutoRacingLeague": NamedNode<'http://dbpedia.org/ontology/AutoRacingLeague'>;
    "Automobile/fuelCapacity": NamedNode<'http://dbpedia.org/ontology/Automobile/fuelCapacity'>;
    "Automobile/wheelbase": NamedNode<'http://dbpedia.org/ontology/Automobile/wheelbase'>;
    "Automobile": NamedNode<'http://dbpedia.org/ontology/Automobile'>;
    "AutomobileEngine": NamedNode<'http://dbpedia.org/ontology/AutomobileEngine'>;
    "Award": NamedNode<'http://dbpedia.org/ontology/Award'>;
    "BackScene": NamedNode<'http://dbpedia.org/ontology/BackScene'>;
    "Bacteria": NamedNode<'http://dbpedia.org/ontology/Bacteria'>;
    "BadmintonPlayer": NamedNode<'http://dbpedia.org/ontology/BadmintonPlayer'>;
    "Band": NamedNode<'http://dbpedia.org/ontology/Band'>;
    /** a company which main services are banking or financial services. */
    "Bank": NamedNode<'http://dbpedia.org/ontology/Bank'>;
    "Baronet": NamedNode<'http://dbpedia.org/ontology/Baronet'>;
    /** a group of sports teams that compete against each other in Baseball. */
    "BaseballLeague": NamedNode<'http://dbpedia.org/ontology/BaseballLeague'>;
    /** Ο αθλητής (άνδρας ή γυναίκα) που συμμετέχει σε μία ομάδα μπέιζμπολ. */
    "BaseballPlayer": NamedNode<'http://dbpedia.org/ontology/BaseballPlayer'>;
    "BaseballSeason": NamedNode<'http://dbpedia.org/ontology/BaseballSeason'>;
    /** Ένας αριθμός από άνδρες ή γυναίκες που αποτελούν ένα διακριτό σύνολο με συγκεκριμένους στόχους σχετικά με το άθλημα του μπέιζμπολ. */
    "BaseballTeam": NamedNode<'http://dbpedia.org/ontology/BaseballTeam'>;
    /** a group of sports teams that compete against each other in Basketball */
    "BasketballLeague": NamedNode<'http://dbpedia.org/ontology/BasketballLeague'>;
    /** Ένας αθλητής (άνδρας ή γυναίκα) που ασχολείται με το άθλημα της καλαθοσφαίρισης. */
    "BasketballPlayer": NamedNode<'http://dbpedia.org/ontology/BasketballPlayer'>;
    "BasketballTeam": NamedNode<'http://dbpedia.org/ontology/BasketballTeam'>;
    "Battery": NamedNode<'http://dbpedia.org/ontology/Battery'>;
    "Bay": NamedNode<'http://dbpedia.org/ontology/Bay'>;
    /** Ribera del mar o de un río grande, formada de arenales en superficie casi plana. */
    "Beach": NamedNode<'http://dbpedia.org/ontology/Beach'>;
    /** Ένα άτομο (άνδρας ή γυναίκα) που ασχολείται με το άθλημα του μπίτς βόλλεϋ. */
    "BeachVolleyballPlayer": NamedNode<'http://dbpedia.org/ontology/BeachVolleyballPlayer'>;
    /** A beauty pageant titleholder */
    "BeautyQueen": NamedNode<'http://dbpedia.org/ontology/BeautyQueen'>;
    "Beer": NamedNode<'http://dbpedia.org/ontology/Beer'>;
    /** A drink, or beverage, is a liquid which is specifically prepared for human consumption. */
    "Beverage": NamedNode<'http://dbpedia.org/ontology/Beverage'>;
    "Biathlete": NamedNode<'http://dbpedia.org/ontology/Biathlete'>;
    /** Διάφορες βάσεις δεδομένων οι οποίες περιέχουν πληροφορίες που ταυτοποιούν τα βασικά βιολογικά χαρακτηριστικά των οργανισμών. Οι πληροφορίες αυτές συγκροτούνται σε σύνολα βιβλιοθηκών των βασικών δομών των κυττάρων των οργανισμών, όπως οι βιλβιοθήκες νουκλεϊνικών οξέων (genomics) και πρωτεϊνών (proteomics). */
    "BiologicalDatabase": NamedNode<'http://dbpedia.org/ontology/BiologicalDatabase'>;
    "Biologist": NamedNode<'http://dbpedia.org/ontology/Biologist'>;
    /** Een molecuul wat van nature voorkomt in een organisme en gevormd kan worden door organismen. */
    "Biomolecule": NamedNode<'http://dbpedia.org/ontology/Biomolecule'>;
    "Bird": NamedNode<'http://dbpedia.org/ontology/Bird'>;
    /** someone's birth as a type of personal event */
    "Birth": NamedNode<'http://dbpedia.org/ontology/Birth'>;
    "Blazon": NamedNode<'http://dbpedia.org/ontology/Blazon'>;
    "BloodVessel": NamedNode<'http://dbpedia.org/ontology/BloodVessel'>;
    /** Un gioco da tavolo è un gioco che richiede una ben definita superficie di gioco, che viene detta di solito tabellone o plancia. */
    "BoardGame": NamedNode<'http://dbpedia.org/ontology/BoardGame'>;
    "BobsleighAthlete": NamedNode<'http://dbpedia.org/ontology/BobsleighAthlete'>;
    /** Συγκεντρωμένες, συνήθως μεγάλες ποσότητες νερού (π.χ. ωκεανοί) που βρίσκονται στη Γη ή σε οποιονδήποτε άλλο πλανήτη. Ο όρος χρησιμοποιείται και για υδάτινους σχηματισμούς όπου υπάρχει κίνηση του νερού, όπως ποταμοί, ρεύματα ή κανάλια. */
    "BodyOfWater": NamedNode<'http://dbpedia.org/ontology/BodyOfWater'>;
    "Bodybuilder": NamedNode<'http://dbpedia.org/ontology/Bodybuilder'>;
    /** Η βασική μονάδα του συστήματος στήριξης των σπονδυλωτών οργανισμών. */
    "Bone": NamedNode<'http://dbpedia.org/ontology/Bone'>;
    "Book": NamedNode<'http://dbpedia.org/ontology/Book'>;
    /** a group of sports teams or players that compete against each other in Bowling */
    "BowlingLeague": NamedNode<'http://dbpedia.org/ontology/BowlingLeague'>;
    "Boxer": NamedNode<'http://dbpedia.org/ontology/Boxer'>;
    /** Η πυγμαχία είναι ένα αγώνισμα που στηρίζεται στην ικανότητα των αντιπάλων να αντικρούσουν μόνο με τις γροθιές τους ο ένας τον άλλο και να καταφέρουν, με εύστοχα και γερά κτυπήματα, να βγάλουν εκτός μάχης ο καθένας τον αντίπαλό του. */
    "Boxing": NamedNode<'http://dbpedia.org/ontology/Boxing'>;
    "BoxingCategory": NamedNode<'http://dbpedia.org/ontology/BoxingCategory'>;
    /** A group of sports teams or fighters that compete against each other in Boxing */
    "BoxingLeague": NamedNode<'http://dbpedia.org/ontology/BoxingLeague'>;
    "BoxingStyle": NamedNode<'http://dbpedia.org/ontology/BoxingStyle'>;
    /** Το βασικό όργανο του νευρικού συστήματος των ζώων, το οποίο καθορίζει ασυνείδητες και συνειδητές λειτουργίες. Ο όρος χρησιμοποιείται πλέον και για τον χαρακτηρισμό των καθοριστικότερων στοιχείων μίας μηχανής ή ενός συνόλου πραγμάτων. */
    "Brain": NamedNode<'http://dbpedia.org/ontology/Brain'>;
    /** Ζυθοποιία ονομάζεται η βιομηχανία παρασκευής μπύρας. */
    "Brewery": NamedNode<'http://dbpedia.org/ontology/Brewery'>;
    /** A bridge is a structure built to span physical obstacles such as a body of water, valley, or road, for the purpose of providing passage over the obstacle (http://en.wikipedia.org/wiki/Bridge). */
    "Bridge": NamedNode<'http://dbpedia.org/ontology/Bridge'>;
    "BritishRoyalty": NamedNode<'http://dbpedia.org/ontology/BritishRoyalty'>;
    /** A broadcast network is an organization, such as a corporation or other association, that provides live or recorded content, such as movies, newscasts, sports, and public affairs programs for broadcast over a group of radio or television stations. (http://en.wikipedia.org/wiki/Broadcast_network - 28/03/2011) */
    "BroadcastNetwork": NamedNode<'http://dbpedia.org/ontology/BroadcastNetwork'>;
    /** A broadcaster is an organisation responsible for the production of radio or television programs and/or their transmission. (http://en.wikipedia.org/wiki/Broadcaster - 28/03/2011) */
    "Broadcaster": NamedNode<'http://dbpedia.org/ontology/Broadcaster'>;
    "BrownDwarf": NamedNode<'http://dbpedia.org/ontology/BrownDwarf'>;
    "Browser": NamedNode<'http://dbpedia.org/ontology/Browser'>;
    "Building/floorArea": NamedNode<'http://dbpedia.org/ontology/Building/floorArea'>;
    /** Building is defined as a Civil Engineering structure such as a house, worship center, factory etc. that has a foundation, wall, roof etc. that protect human being and their properties from direct harsh effect of weather like rain, wind, sun etc. (http://en.wikipedia.org/wiki/Building). */
    "Building": NamedNode<'http://dbpedia.org/ontology/Building'>;
    "BullFighter": NamedNode<'http://dbpedia.org/ontology/BullFighter'>;
    "BusCompany": NamedNode<'http://dbpedia.org/ontology/BusCompany'>;
    /** Με τον όρο επιχειρηματίας νοείται κυρίως κάποιος που κατέχει μία ανώτερη θέση, όπως ένα στέλεχος. */
    "BusinessPerson": NamedNode<'http://dbpedia.org/ontology/BusinessPerson'>;
    /** Una fotocamera (in lingua italiana nota tradizionalmente come macchina fotografica) è uno strumento utilizzato per la ripresa fotografica e per ottenere immagini di oggetti reali stampabili su supporti materiali cartacei o archiviabili su supporti elettronici. */
    "Camera": NamedNode<'http://dbpedia.org/ontology/Camera'>;
    /** A group of sports teams that compete against each other in canadian football league. */
    "CanadianFootballLeague": NamedNode<'http://dbpedia.org/ontology/CanadianFootballLeague'>;
    "CanadianFootballPlayer": NamedNode<'http://dbpedia.org/ontology/CanadianFootballPlayer'>;
    "CanadianFootballTeam": NamedNode<'http://dbpedia.org/ontology/CanadianFootballTeam'>;
    "Canal/maximumBoatBeam": NamedNode<'http://dbpedia.org/ontology/Canal/maximumBoatBeam'>;
    "Canal/maximumBoatLength": NamedNode<'http://dbpedia.org/ontology/Canal/maximumBoatLength'>;
    "Canal/originalMaximumBoatBeam": NamedNode<'http://dbpedia.org/ontology/Canal/originalMaximumBoatBeam'>;
    "Canal/originalMaximumBoatLength": NamedNode<'http://dbpedia.org/ontology/Canal/originalMaximumBoatLength'>;
    /** a man-made channel for water */
    "Canal": NamedNode<'http://dbpedia.org/ontology/Canal'>;
    "Canoeist": NamedNode<'http://dbpedia.org/ontology/Canoeist'>;
    /** An administrative (France) or lawcourts (Netherlands) body governing a territorial unity on the municipal level or somewhat above */
    "Canton": NamedNode<'http://dbpedia.org/ontology/Canton'>;
    "Cape": NamedNode<'http://dbpedia.org/ontology/Cape'>;
    /** A municipality enjoying primary status in a state, country, province, or other region as its seat of government. */
    "Capital": NamedNode<'http://dbpedia.org/ontology/Capital'>;
    /** seat of a first order administration division. */
    "CapitalOfRegion": NamedNode<'http://dbpedia.org/ontology/CapitalOfRegion'>;
    /** come from http://en.wikipedia.org/wiki/Category:Card_games */
    "CardGame": NamedNode<'http://dbpedia.org/ontology/CardGame'>;
    "Cardinal": NamedNode<'http://dbpedia.org/ontology/Cardinal'>;
    /** One of the four main directions on a compass or any other system to determine a geographical position */
    "CardinalDirection": NamedNode<'http://dbpedia.org/ontology/CardinalDirection'>;
    /** this class marks a career step in the life of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a certain club */
    "CareerStation": NamedNode<'http://dbpedia.org/ontology/CareerStation'>;
    "Cartoon": NamedNode<'http://dbpedia.org/ontology/Cartoon'>;
    /** A case is the total of work done to prepare for an administrative or business decision. As a rule, a case is reflected in a set of documents. */
    "Case": NamedNode<'http://dbpedia.org/ontology/Case'>;
    /** In modern English, a casino is a facility which houses and accommodates certain types of gambling activities. */
    "Casino": NamedNode<'http://dbpedia.org/ontology/Casino'>;
    /** Castles often are, but need not be a military structure. They can serve for status, pleasure and hunt as well. */
    "Castle": NamedNode<'http://dbpedia.org/ontology/Castle'>;
    "Cat": NamedNode<'http://dbpedia.org/ontology/Cat'>;
    "Caterer": NamedNode<'http://dbpedia.org/ontology/Caterer'>;
    "Cave": NamedNode<'http://dbpedia.org/ontology/Cave'>;
    "Celebrity": NamedNode<'http://dbpedia.org/ontology/Celebrity'>;
    "CelestialBody": NamedNode<'http://dbpedia.org/ontology/CelestialBody'>;
    /** A burial place */
    "Cemetery": NamedNode<'http://dbpedia.org/ontology/Cemetery'>;
    "Chancellor": NamedNode<'http://dbpedia.org/ontology/Chancellor'>;
    "ChartsPlacements": NamedNode<'http://dbpedia.org/ontology/ChartsPlacements'>;
    /** A milk product prepared for human consumption */
    "Cheese": NamedNode<'http://dbpedia.org/ontology/Cheese'>;
    /** a person who cooks professionally for other people */
    "Chef": NamedNode<'http://dbpedia.org/ontology/Chef'>;
    "ChemicalCompound": NamedNode<'http://dbpedia.org/ontology/ChemicalCompound'>;
    "ChemicalElement": NamedNode<'http://dbpedia.org/ontology/ChemicalElement'>;
    "ChemicalSubstance/boilingPoint": NamedNode<'http://dbpedia.org/ontology/ChemicalSubstance/boilingPoint'>;
    "ChemicalSubstance/density": NamedNode<'http://dbpedia.org/ontology/ChemicalSubstance/density'>;
    "ChemicalSubstance/meltingPoint": NamedNode<'http://dbpedia.org/ontology/ChemicalSubstance/meltingPoint'>;
    "ChemicalSubstance": NamedNode<'http://dbpedia.org/ontology/ChemicalSubstance'>;
    "ChessPlayer": NamedNode<'http://dbpedia.org/ontology/ChessPlayer'>;
    "ChristianBishop": NamedNode<'http://dbpedia.org/ontology/ChristianBishop'>;
    /** Tenets of the Christian faith, e.g. Trinity, Nicene Creed */
    "ChristianDoctrine": NamedNode<'http://dbpedia.org/ontology/ChristianDoctrine'>;
    "ChristianPatriarch": NamedNode<'http://dbpedia.org/ontology/ChristianPatriarch'>;
    /** This is used for church buildings, not any other meaning of church. */
    "Church": NamedNode<'http://dbpedia.org/ontology/Church'>;
    "Cinema": NamedNode<'http://dbpedia.org/ontology/Cinema'>;
    "Cipher": NamedNode<'http://dbpedia.org/ontology/Cipher'>;
    /** Actualmente considérase como unha entidade urbana con alta densidade de poboación na que predominan fundamentalmente a industria e os servizos. */
    "City": NamedNode<'http://dbpedia.org/ontology/City'>;
    /** District, borough, area or neighbourhood in a city or town */
    "CityDistrict": NamedNode<'http://dbpedia.org/ontology/CityDistrict'>;
    /** Ο Λούντβιχ βαν Μπετόβεν,Γερμανός συνθέτης και πιανίστας,ήταν ένας σπουδαίος καλλιτέχνης της κλασικής μουσικής. */
    "ClassicalMusicArtist": NamedNode<'http://dbpedia.org/ontology/ClassicalMusicArtist'>;
    /** Η σύνθεση κλασικής μουσικής μπορεί να πραγματοποιηθεί και με τη βοήθεια ειδικών προγραμμάτων στον υπολογιστή που χρησιμοποιούν συγκεκριμένο αλγόριθμο. */
    "ClassicalMusicComposition": NamedNode<'http://dbpedia.org/ontology/ClassicalMusicComposition'>;
    "Cleric": NamedNode<'http://dbpedia.org/ontology/Cleric'>;
    /** An administrative body governing some territorial unity, in this case a clerical administrative body */
    "ClericalAdministrativeRegion": NamedNode<'http://dbpedia.org/ontology/ClericalAdministrativeRegion'>;
    /** Een kloosterorde is een orde van religieuzen, mannen of vrouwen, die zich verenigd hebben omtrent een gemeenschappelijke geloofsopvatting en kloosterregel waaraan zij gebonden zijn, en op een permanente wijze samenleven binnen één en dezelfde plaatselijke gemeenschap, een klooster of een tempel. Meerdere kloosters van gelijkgezinde religieuzen vormen samen een kloosterorde. */
    "ClericalOrder": NamedNode<'http://dbpedia.org/ontology/ClericalOrder'>;
    "ClubMoss": NamedNode<'http://dbpedia.org/ontology/ClubMoss'>;
    "Coach": NamedNode<'http://dbpedia.org/ontology/Coach'>;
    /** A coal pit is a place where charcoal is or was extracted */
    "CoalPit": NamedNode<'http://dbpedia.org/ontology/CoalPit'>;
    /** Collection of valuables is a collection considered to be a work in itself) */
    "CollectionOfValuables": NamedNode<'http://dbpedia.org/ontology/CollectionOfValuables'>;
    "College": NamedNode<'http://dbpedia.org/ontology/College'>;
    "CollegeCoach": NamedNode<'http://dbpedia.org/ontology/CollegeCoach'>;
    /** Color or colour is the visual perceptual property corresponding in humans to the categories called red, yellow, blue and others. Color derives from the spectrum of light (distribution of light energy versus wavelength) interacting in the eye with the spectral sensitivities of the light receptors. */
    "Colour": NamedNode<'http://dbpedia.org/ontology/Colour'>;
    "CombinationDrug": NamedNode<'http://dbpedia.org/ontology/CombinationDrug'>;
    "Comedian": NamedNode<'http://dbpedia.org/ontology/Comedian'>;
    "ComedyGroup": NamedNode<'http://dbpedia.org/ontology/ComedyGroup'>;
    "Comic": NamedNode<'http://dbpedia.org/ontology/Comic'>;
    "ComicStrip": NamedNode<'http://dbpedia.org/ontology/ComicStrip'>;
    "ComicsCharacter": NamedNode<'http://dbpedia.org/ontology/ComicsCharacter'>;
    "ComicsCreator": NamedNode<'http://dbpedia.org/ontology/ComicsCreator'>;
    /** Κοινότητα είναι μία ομάδα ζώντων οργανισμών, ανθρώπων, φυτών ή ζώων που ζουν σε ένα κοινό περιβάλλον. */
    "Community": NamedNode<'http://dbpedia.org/ontology/Community'>;
    "Company": NamedNode<'http://dbpedia.org/ontology/Company'>;
    "Competition": NamedNode<'http://dbpedia.org/ontology/Competition'>;
    /**
     * camp in which people are imprisoned or confined, commonly in large groups, without trial.
     * Includes concentration, extermination, transit, detention, internment, (forced) labor, prisoner-of-war, Gulag; Nazi camps related to the Holocaust
     */
    "ConcentrationCamp": NamedNode<'http://dbpedia.org/ontology/ConcentrationCamp'>;
    "Congressman": NamedNode<'http://dbpedia.org/ontology/Congressman'>;
    /** Las coníferas son plantas vasculares, con las semillas contenidas en un cono. Son plantas leñosas. */
    "Conifer": NamedNode<'http://dbpedia.org/ontology/Conifer'>;
    /** Una costellazione è ognuna delle 88 parti in cui la sfera celeste è convenzionalmente suddivisa allo scopo di mappare le stelle. */
    "Constellation": NamedNode<'http://dbpedia.org/ontology/Constellation'>;
    "Contest": NamedNode<'http://dbpedia.org/ontology/Contest'>;
    /** Un continente es una gran área de tierra emergida de la costra terrestre. */
    "Continent": NamedNode<'http://dbpedia.org/ontology/Continent'>;
    /** A quality assurance label for wines */
    "ControlledDesignationOfOriginWine": NamedNode<'http://dbpedia.org/ontology/ControlledDesignationOfOriginWine'>;
    "Convention": NamedNode<'http://dbpedia.org/ontology/Convention'>;
    "ConveyorSystem/diameter": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem/diameter'>;
    "ConveyorSystem/height": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem/height'>;
    "ConveyorSystem/length": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem/length'>;
    "ConveyorSystem/mass": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem/mass'>;
    "ConveyorSystem/weight": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem/weight'>;
    "ConveyorSystem/width": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem/width'>;
    "ConveyorSystem": NamedNode<'http://dbpedia.org/ontology/ConveyorSystem'>;
    "Country": NamedNode<'http://dbpedia.org/ontology/Country'>;
    /** A country seat is a rural patch of land owned by a land owner. */
    "CountrySeat": NamedNode<'http://dbpedia.org/ontology/CountrySeat'>;
    "Crater": NamedNode<'http://dbpedia.org/ontology/Crater'>;
    /** the portion of a stream that is affected by ebb and flow of ocean tides */
    "Creek": NamedNode<'http://dbpedia.org/ontology/Creek'>;
    "CricketGround": NamedNode<'http://dbpedia.org/ontology/CricketGround'>;
    /** a group of sports teams that compete against each other in Cricket */
    "CricketLeague": NamedNode<'http://dbpedia.org/ontology/CricketLeague'>;
    "CricketTeam": NamedNode<'http://dbpedia.org/ontology/CricketTeam'>;
    "Cricketer": NamedNode<'http://dbpedia.org/ontology/Cricketer'>;
    "Criminal": NamedNode<'http://dbpedia.org/ontology/Criminal'>;
    "CrossCountrySkier": NamedNode<'http://dbpedia.org/ontology/CrossCountrySkier'>;
    "Crustacean": NamedNode<'http://dbpedia.org/ontology/Crustacean'>;
    /** A cultivar is a plant or grouping of plants selected for desirable characteristics that can be maintained by propagation. A plant whose origin or selection is primarily due to intentional human activity. */
    "CultivatedVariety": NamedNode<'http://dbpedia.org/ontology/CultivatedVariety'>;
    "Curler": NamedNode<'http://dbpedia.org/ontology/Curler'>;
    /** a group of sports teams that compete against each other in Curling */
    "CurlingLeague": NamedNode<'http://dbpedia.org/ontology/CurlingLeague'>;
    "Currency": NamedNode<'http://dbpedia.org/ontology/Currency'>;
    "Cycad": NamedNode<'http://dbpedia.org/ontology/Cycad'>;
    "CyclingCompetition": NamedNode<'http://dbpedia.org/ontology/CyclingCompetition'>;
    /** a group of sports teams that compete against each other in Cycling */
    "CyclingLeague": NamedNode<'http://dbpedia.org/ontology/CyclingLeague'>;
    "CyclingRace": NamedNode<'http://dbpedia.org/ontology/CyclingRace'>;
    "CyclingTeam": NamedNode<'http://dbpedia.org/ontology/CyclingTeam'>;
    "Cyclist": NamedNode<'http://dbpedia.org/ontology/Cyclist'>;
    "DBpedian": NamedNode<'http://dbpedia.org/ontology/DBpedian'>;
    "DTMRacer": NamedNode<'http://dbpedia.org/ontology/DTMRacer'>;
    /** A dam is part of a landscape infrastructure, like waterworks (canals) or roads, much more than a building, though, of course, it has been built, too. */
    "Dam": NamedNode<'http://dbpedia.org/ontology/Dam'>;
    "Dancer": NamedNode<'http://dbpedia.org/ontology/Dancer'>;
    "DartsPlayer": NamedNode<'http://dbpedia.org/ontology/DartsPlayer'>;
    "Database": NamedNode<'http://dbpedia.org/ontology/Database'>;
    /** The intermediate level of a clerical administrative body between parish and diocese */
    "Deanery": NamedNode<'http://dbpedia.org/ontology/Deanery'>;
    /** someone's death as a type of personal event */
    "Death": NamedNode<'http://dbpedia.org/ontology/Death'>;
    /** An object, such as a medal or an order, that is awarded to honor the recipient ostentatiously. */
    "Decoration": NamedNode<'http://dbpedia.org/ontology/Decoration'>;
    "Deity": NamedNode<'http://dbpedia.org/ontology/Deity'>;
    /** Population of a place. Uses these properties: populationTotal, year (when measured, populationYear), rank (sortOrder of this place amongst its siblings at the same level), name (areal measured by the population, eg: "locality", "municipality" or "comitat") */
    "Demographics": NamedNode<'http://dbpedia.org/ontology/Demographics'>;
    "Department": NamedNode<'http://dbpedia.org/ontology/Department'>;
    "Depth": NamedNode<'http://dbpedia.org/ontology/Depth'>;
    "Deputy": NamedNode<'http://dbpedia.org/ontology/Deputy'>;
    /** A barren area of land where little precipitation occurs. */
    "Desert": NamedNode<'http://dbpedia.org/ontology/Desert'>;
    "Device": NamedNode<'http://dbpedia.org/ontology/Device'>;
    /** Η ψηφιακή φωτογραφική μηχανή είναι συσκευή η οποία καταγράφει εικόνες με ηλεκτρονικό τρόπο, σε αντίθεση με την συμβατική φωτογραφική μηχανή, η οποία καταγράφει εικόνες με χημικές και μηχανικές διαδικασίες. */
    "DigitalCamera": NamedNode<'http://dbpedia.org/ontology/DigitalCamera'>;
    /** A dike is an elongated naturally occurring ridge or artificially constructed fill or wall, which regulates water levels */
    "Dike": NamedNode<'http://dbpedia.org/ontology/Dike'>;
    /** District or see under the supervision of a bishop. */
    "Diocese": NamedNode<'http://dbpedia.org/ontology/Diocese'>;
    "Diploma": NamedNode<'http://dbpedia.org/ontology/Diploma'>;
    "Disease": NamedNode<'http://dbpedia.org/ontology/Disease'>;
    "DisneyCharacter": NamedNode<'http://dbpedia.org/ontology/DisneyCharacter'>;
    /** bagian wilayah administratif dibawah kabupaten */
    "District": NamedNode<'http://dbpedia.org/ontology/District'>;
    /** Conservancy, governmental agency dedicated to surface water management */
    "DistrictWaterBoard": NamedNode<'http://dbpedia.org/ontology/DistrictWaterBoard'>;
    /** two people's divorce as a type of personal event */
    "Divorce": NamedNode<'http://dbpedia.org/ontology/Divorce'>;
    /** Any document */
    "Document": NamedNode<'http://dbpedia.org/ontology/Document'>;
    /** documenttype */
    "DocumentType": NamedNode<'http://dbpedia.org/ontology/DocumentType'>;
    "Dog": NamedNode<'http://dbpedia.org/ontology/Dog'>;
    "Drama": NamedNode<'http://dbpedia.org/ontology/Drama'>;
    "Drug/boilingPoint": NamedNode<'http://dbpedia.org/ontology/Drug/boilingPoint'>;
    "Drug/meltingPoint": NamedNode<'http://dbpedia.org/ontology/Drug/meltingPoint'>;
    "Drug": NamedNode<'http://dbpedia.org/ontology/Drug'>;
    /** the result of a sudden release of energy in the Earth's crust that creates seismic waves */
    "Earthquake": NamedNode<'http://dbpedia.org/ontology/Earthquake'>;
    /** An economist is a professional in the social science discipline of economics. */
    "Economist": NamedNode<'http://dbpedia.org/ontology/Economist'>;
    "EducationalInstitution": NamedNode<'http://dbpedia.org/ontology/EducationalInstitution'>;
    "Egyptologist": NamedNode<'http://dbpedia.org/ontology/Egyptologist'>;
    "Election": NamedNode<'http://dbpedia.org/ontology/Election'>;
    "ElectionDiagram": NamedNode<'http://dbpedia.org/ontology/ElectionDiagram'>;
    "ElectricalSubstation": NamedNode<'http://dbpedia.org/ontology/ElectricalSubstation'>;
    "Embryology": NamedNode<'http://dbpedia.org/ontology/Embryology'>;
    /** Arbeitgeber ist, wer die Arbeitsleistung des Arbeitnehmers kraft Arbeitsvertrages fordern kann und das Arbeitsentgelt schuldet. */
    "Employer": NamedNode<'http://dbpedia.org/ontology/Employer'>;
    /** An employers' organisation is an organisation of entrepreneurs who work together to coordinate their actions in the field of labour relations */
    "EmployersOrganisation": NamedNode<'http://dbpedia.org/ontology/EmployersOrganisation'>;
    "Engine/acceleration": NamedNode<'http://dbpedia.org/ontology/Engine/acceleration'>;
    "Engine/co2Emission": NamedNode<'http://dbpedia.org/ontology/Engine/co2Emission'>;
    "Engine/cylinderBore": NamedNode<'http://dbpedia.org/ontology/Engine/cylinderBore'>;
    "Engine/diameter": NamedNode<'http://dbpedia.org/ontology/Engine/diameter'>;
    "Engine/displacement": NamedNode<'http://dbpedia.org/ontology/Engine/displacement'>;
    "Engine/height": NamedNode<'http://dbpedia.org/ontology/Engine/height'>;
    "Engine/length": NamedNode<'http://dbpedia.org/ontology/Engine/length'>;
    "Engine/pistonStroke": NamedNode<'http://dbpedia.org/ontology/Engine/pistonStroke'>;
    "Engine/powerOutput": NamedNode<'http://dbpedia.org/ontology/Engine/powerOutput'>;
    "Engine/topSpeed": NamedNode<'http://dbpedia.org/ontology/Engine/topSpeed'>;
    "Engine/torqueOutput": NamedNode<'http://dbpedia.org/ontology/Engine/torqueOutput'>;
    "Engine/weight": NamedNode<'http://dbpedia.org/ontology/Engine/weight'>;
    "Engine/width": NamedNode<'http://dbpedia.org/ontology/Engine/width'>;
    "Engine": NamedNode<'http://dbpedia.org/ontology/Engine'>;
    "Engineer": NamedNode<'http://dbpedia.org/ontology/Engineer'>;
    "Entomologist": NamedNode<'http://dbpedia.org/ontology/Entomologist'>;
    "Enzyme": NamedNode<'http://dbpedia.org/ontology/Enzyme'>;
    "Escalator/diameter": NamedNode<'http://dbpedia.org/ontology/Escalator/diameter'>;
    "Escalator/height": NamedNode<'http://dbpedia.org/ontology/Escalator/height'>;
    "Escalator/length": NamedNode<'http://dbpedia.org/ontology/Escalator/length'>;
    "Escalator/mass": NamedNode<'http://dbpedia.org/ontology/Escalator/mass'>;
    "Escalator/weight": NamedNode<'http://dbpedia.org/ontology/Escalator/weight'>;
    "Escalator/width": NamedNode<'http://dbpedia.org/ontology/Escalator/width'>;
    "Escalator": NamedNode<'http://dbpedia.org/ontology/Escalator'>;
    "EthnicGroup": NamedNode<'http://dbpedia.org/ontology/EthnicGroup'>;
    "Eukaryote": NamedNode<'http://dbpedia.org/ontology/Eukaryote'>;
    "EurovisionSongContestEntry": NamedNode<'http://dbpedia.org/ontology/EurovisionSongContestEntry'>;
    "Event": NamedNode<'http://dbpedia.org/ontology/Event'>;
    /** A factory (previously manufactory) or manufacturing plant is an industrial site, usually consisting of buildings and machinery, or more commonly a complex having several buildings, where workers manufacture goods or operate machines processing one product into another. */
    "Factory": NamedNode<'http://dbpedia.org/ontology/Factory'>;
    /** A group of people related by common descent, a lineage. */
    "Family": NamedNode<'http://dbpedia.org/ontology/Family'>;
    "Farmer": NamedNode<'http://dbpedia.org/ontology/Farmer'>;
    /** Een stijl of code voor kleding, bepaald door de voorkeursstijl van een tijdperk of door individuele ontwerpers. */
    "Fashion": NamedNode<'http://dbpedia.org/ontology/Fashion'>;
    "FashionDesigner": NamedNode<'http://dbpedia.org/ontology/FashionDesigner'>;
    "Fencer": NamedNode<'http://dbpedia.org/ontology/Fencer'>;
    "Fern": NamedNode<'http://dbpedia.org/ontology/Fern'>;
    "FictionalCharacter": NamedNode<'http://dbpedia.org/ontology/FictionalCharacter'>;
    /** The territory under the authority of a feudal lord */
    "Fiefdom": NamedNode<'http://dbpedia.org/ontology/Fiefdom'>;
    /** a group of sports teams that compete against each other in Field Hockey */
    "FieldHockeyLeague": NamedNode<'http://dbpedia.org/ontology/FieldHockeyLeague'>;
    "FigureSkater": NamedNode<'http://dbpedia.org/ontology/FigureSkater'>;
    /** A document with a filename */
    "File": NamedNode<'http://dbpedia.org/ontology/File'>;
    "FileSystem": NamedNode<'http://dbpedia.org/ontology/FileSystem'>;
    "FillingStation": NamedNode<'http://dbpedia.org/ontology/FillingStation'>;
    "Film": NamedNode<'http://dbpedia.org/ontology/Film'>;
    "FilmFestival": NamedNode<'http://dbpedia.org/ontology/FilmFestival'>;
    "Fish": NamedNode<'http://dbpedia.org/ontology/Fish'>;
    "Flag": NamedNode<'http://dbpedia.org/ontology/Flag'>;
    "FloweringPlant": NamedNode<'http://dbpedia.org/ontology/FloweringPlant'>;
    /** Food is any eatable or drinkable substance that is normally consumed by humans. */
    "Food": NamedNode<'http://dbpedia.org/ontology/Food'>;
    "FootballLeagueSeason": NamedNode<'http://dbpedia.org/ontology/FootballLeagueSeason'>;
    /** a competition between two football teams */
    "FootballMatch": NamedNode<'http://dbpedia.org/ontology/FootballMatch'>;
    /** A natural place more or less densely grown with trees */
    "Forest": NamedNode<'http://dbpedia.org/ontology/Forest'>;
    /** A municipality that has ceased to exist, and most of the time got incorporated (wholesale or partly) into another municipality */
    "FormerMunicipality": NamedNode<'http://dbpedia.org/ontology/FormerMunicipality'>;
    "FormulaOneRacer": NamedNode<'http://dbpedia.org/ontology/FormulaOneRacer'>;
    "FormulaOneRacing": NamedNode<'http://dbpedia.org/ontology/FormulaOneRacing'>;
    "FormulaOneTeam": NamedNode<'http://dbpedia.org/ontology/FormulaOneTeam'>;
    /** Fortified place, most of the time to protect traffic routes */
    "Fort": NamedNode<'http://dbpedia.org/ontology/Fort'>;
    "Fungus": NamedNode<'http://dbpedia.org/ontology/Fungus'>;
    "GaelicGamesPlayer": NamedNode<'http://dbpedia.org/ontology/GaelicGamesPlayer'>;
    "Galaxy/apoapsis": NamedNode<'http://dbpedia.org/ontology/Galaxy/apoapsis'>;
    /** The average speed of a thing. */
    "Galaxy/averageSpeed": NamedNode<'http://dbpedia.org/ontology/Galaxy/averageSpeed'>;
    "Galaxy/density": NamedNode<'http://dbpedia.org/ontology/Galaxy/density'>;
    "Galaxy/mass": NamedNode<'http://dbpedia.org/ontology/Galaxy/mass'>;
    "Galaxy/maximumTemperature": NamedNode<'http://dbpedia.org/ontology/Galaxy/maximumTemperature'>;
    "Galaxy/meanRadius": NamedNode<'http://dbpedia.org/ontology/Galaxy/meanRadius'>;
    "Galaxy/meanTemperature": NamedNode<'http://dbpedia.org/ontology/Galaxy/meanTemperature'>;
    "Galaxy/minimumTemperature": NamedNode<'http://dbpedia.org/ontology/Galaxy/minimumTemperature'>;
    "Galaxy/orbitalPeriod": NamedNode<'http://dbpedia.org/ontology/Galaxy/orbitalPeriod'>;
    "Galaxy/periapsis": NamedNode<'http://dbpedia.org/ontology/Galaxy/periapsis'>;
    "Galaxy/surfaceArea": NamedNode<'http://dbpedia.org/ontology/Galaxy/surfaceArea'>;
    "Galaxy/temperature": NamedNode<'http://dbpedia.org/ontology/Galaxy/temperature'>;
    "Galaxy/volume": NamedNode<'http://dbpedia.org/ontology/Galaxy/volume'>;
    "Galaxy": NamedNode<'http://dbpedia.org/ontology/Galaxy'>;
    /** a structured activity, usually undertaken for enjoyment and sometimes used as an educational tool */
    "Game": NamedNode<'http://dbpedia.org/ontology/Game'>;
    /** A garden is a planned space, usually outdoors, set aside for the display, cultivation, and enjoyment of plants and other forms of nature. (http://en.wikipedia.org/wiki/Garden) */
    "Garden": NamedNode<'http://dbpedia.org/ontology/Garden'>;
    /** Een bouwsel dat de toegang tot een gebouw of stuk grond verleent dan wel afsluit. */
    "Gate": NamedNode<'http://dbpedia.org/ontology/Gate'>;
    "GatedCommunity": NamedNode<'http://dbpedia.org/ontology/GatedCommunity'>;
    "Gene": NamedNode<'http://dbpedia.org/ontology/Gene'>;
    "GeneLocation": NamedNode<'http://dbpedia.org/ontology/GeneLocation'>;
    "Genre": NamedNode<'http://dbpedia.org/ontology/Genre'>;
    "GeologicalPeriod": NamedNode<'http://dbpedia.org/ontology/GeologicalPeriod'>;
    "GeopoliticalOrganisation/areaMetro": NamedNode<'http://dbpedia.org/ontology/GeopoliticalOrganisation/areaMetro'>;
    "GeopoliticalOrganisation/populationDensity": NamedNode<'http://dbpedia.org/ontology/GeopoliticalOrganisation/populationDensity'>;
    "GeopoliticalOrganisation": NamedNode<'http://dbpedia.org/ontology/GeopoliticalOrganisation'>;
    "Ginkgo": NamedNode<'http://dbpedia.org/ontology/Ginkgo'>;
    "GivenName": NamedNode<'http://dbpedia.org/ontology/GivenName'>;
    /** Παγετώνες ονομάζονται μεγάλες μάζες πάγου συνήθως κινούμενες λόγω συμπίεσης του χιονιού. */
    "Glacier": NamedNode<'http://dbpedia.org/ontology/Glacier'>;
    "Globularswarm": NamedNode<'http://dbpedia.org/ontology/Globularswarm'>;
    "Gnetophytes": NamedNode<'http://dbpedia.org/ontology/Gnetophytes'>;
    /** Σε ένα γήπεδο γκολφ οι τρύπες συχνά κρύβουν κινδύνους, που ορίζονται ως ειδικές περιοχές για τις οποίες ισχύουν επιπρόσθετοι κανόνες διεξαγωγής του παιχνιδιού. */
    "GolfCourse": NamedNode<'http://dbpedia.org/ontology/GolfCourse'>;
    /** Golfplayer that compete against each other in Golf */
    "GolfLeague": NamedNode<'http://dbpedia.org/ontology/GolfLeague'>;
    "GolfPlayer": NamedNode<'http://dbpedia.org/ontology/GolfPlayer'>;
    "GolfTournament": NamedNode<'http://dbpedia.org/ontology/GolfTournament'>;
    /** A government agency is a permanent or semi-permanent organization in the machinery of government that is responsible for the oversight and administration of specific functions, such as an intelligence agency. */
    "GovernmentAgency": NamedNode<'http://dbpedia.org/ontology/GovernmentAgency'>;
    /** A cabinet is a body of high-ranking state officials, typically consisting of the top leaders of the executive branch. */
    "GovernmentCabinet": NamedNode<'http://dbpedia.org/ontology/GovernmentCabinet'>;
    /** a form of government */
    "GovernmentType": NamedNode<'http://dbpedia.org/ontology/GovernmentType'>;
    /** An administrative body governing some territorial unity, in this case a governmental administrative body */
    "GovernmentalAdministrativeRegion": NamedNode<'http://dbpedia.org/ontology/GovernmentalAdministrativeRegion'>;
    "Governor": NamedNode<'http://dbpedia.org/ontology/Governor'>;
    "GrandPrix/course": NamedNode<'http://dbpedia.org/ontology/GrandPrix/course'>;
    "GrandPrix/distance": NamedNode<'http://dbpedia.org/ontology/GrandPrix/distance'>;
    "GrandPrix": NamedNode<'http://dbpedia.org/ontology/GrandPrix'>;
    "Grape": NamedNode<'http://dbpedia.org/ontology/Grape'>;
    /** A monument erected on a tomb, or a memorial stone. */
    "GraveMonument": NamedNode<'http://dbpedia.org/ontology/GraveMonument'>;
    "GreenAlga": NamedNode<'http://dbpedia.org/ontology/GreenAlga'>;
    "GridironFootballPlayer": NamedNode<'http://dbpedia.org/ontology/GridironFootballPlayer'>;
    "GrossDomesticProduct": NamedNode<'http://dbpedia.org/ontology/GrossDomesticProduct'>;
    "GrossDomesticProductPerCapita": NamedNode<'http://dbpedia.org/ontology/GrossDomesticProductPerCapita'>;
    /** An (informal) group of people. */
    "Group": NamedNode<'http://dbpedia.org/ontology/Group'>;
    /** Describe la guitarra */
    "Guitar": NamedNode<'http://dbpedia.org/ontology/Guitar'>;
    "Guitarist": NamedNode<'http://dbpedia.org/ontology/Guitarist'>;
    /** A gymnast is one who performs gymnastics */
    "Gymnast": NamedNode<'http://dbpedia.org/ontology/Gymnast'>;
    /** a group of sports teams that compete against each other in Handball */
    "HandballLeague": NamedNode<'http://dbpedia.org/ontology/HandballLeague'>;
    "HandballPlayer": NamedNode<'http://dbpedia.org/ontology/HandballPlayer'>;
    "HandballTeam": NamedNode<'http://dbpedia.org/ontology/HandballTeam'>;
    "HighDiver": NamedNode<'http://dbpedia.org/ontology/HighDiver'>;
    "Historian": NamedNode<'http://dbpedia.org/ontology/Historian'>;
    "HistoricBuilding": NamedNode<'http://dbpedia.org/ontology/HistoricBuilding'>;
    "HistoricPlace": NamedNode<'http://dbpedia.org/ontology/HistoricPlace'>;
    /** Mostly for feudal forms of authority, but can also serve for historical forms of centralised authority */
    "HistoricalAreaOfAuthority": NamedNode<'http://dbpedia.org/ontology/HistoricalAreaOfAuthority'>;
    /** A place which used to be a country. */
    "HistoricalCountry": NamedNode<'http://dbpedia.org/ontology/HistoricalCountry'>;
    /** a place which used to be a district. */
    "HistoricalDistrict": NamedNode<'http://dbpedia.org/ontology/HistoricalDistrict'>;
    "HistoricalEvent": NamedNode<'http://dbpedia.org/ontology/HistoricalEvent'>;
    /** A historical Period should be linked to a Place by way of the property dct:spatial (already defined) */
    "HistoricalPeriod": NamedNode<'http://dbpedia.org/ontology/HistoricalPeriod'>;
    /** A place which used to be a province. */
    "HistoricalProvince": NamedNode<'http://dbpedia.org/ontology/HistoricalProvince'>;
    /** a place which used to be a region. */
    "HistoricalRegion": NamedNode<'http://dbpedia.org/ontology/HistoricalRegion'>;
    /** A place which used to be a city or town or village. */
    "HistoricalSettlement": NamedNode<'http://dbpedia.org/ontology/HistoricalSettlement'>;
    "HockeyClub": NamedNode<'http://dbpedia.org/ontology/HockeyClub'>;
    "HockeyTeam": NamedNode<'http://dbpedia.org/ontology/HockeyTeam'>;
    /** Un jour férié est un jour de fête civile ou religieuse, ou commémorant un événement. */
    "Holiday": NamedNode<'http://dbpedia.org/ontology/Holiday'>;
    "HollywoodCartoon": NamedNode<'http://dbpedia.org/ontology/HollywoodCartoon'>;
    /** A hormone is any member of a class of signaling molecules produced by glands in multicellular organisms that are transported by the circulatory system to target distant organs to regulate physiology and behaviour. */
    "Hormone": NamedNode<'http://dbpedia.org/ontology/Hormone'>;
    "Horse": NamedNode<'http://dbpedia.org/ontology/Horse'>;
    "HorseRace": NamedNode<'http://dbpedia.org/ontology/HorseRace'>;
    "HorseRider": NamedNode<'http://dbpedia.org/ontology/HorseRider'>;
    "HorseRiding": NamedNode<'http://dbpedia.org/ontology/HorseRiding'>;
    "HorseTrainer": NamedNode<'http://dbpedia.org/ontology/HorseTrainer'>;
    "Hospital": NamedNode<'http://dbpedia.org/ontology/Hospital'>;
    /** Ο οικοδεσπότης χρησιμοποιείται συνήθως για να περιγράψει άνδρα παρουσιαστή γεγονότος. */
    "Host": NamedNode<'http://dbpedia.org/ontology/Host'>;
    "HotSpring": NamedNode<'http://dbpedia.org/ontology/HotSpring'>;
    "Hotel": NamedNode<'http://dbpedia.org/ontology/Hotel'>;
    "HumanDevelopmentIndex": NamedNode<'http://dbpedia.org/ontology/HumanDevelopmentIndex'>;
    "HumanGene": NamedNode<'http://dbpedia.org/ontology/HumanGene'>;
    "HumanGeneLocation": NamedNode<'http://dbpedia.org/ontology/HumanGeneLocation'>;
    "Humorist": NamedNode<'http://dbpedia.org/ontology/Humorist'>;
    /** a group of sports teams that compete against each other in Ice Hockey. */
    "IceHockeyLeague": NamedNode<'http://dbpedia.org/ontology/IceHockeyLeague'>;
    "IceHockeyPlayer": NamedNode<'http://dbpedia.org/ontology/IceHockeyPlayer'>;
    "Identifier": NamedNode<'http://dbpedia.org/ontology/Identifier'>;
    /** for example: Progressivism_in_the_United_States, Classical_liberalism */
    "Ideology": NamedNode<'http://dbpedia.org/ontology/Ideology'>;
    /** A document that contains a visual image */
    "Image": NamedNode<'http://dbpedia.org/ontology/Image'>;
    /** An information device such as PDAs or Video game consoles, etc. */
    "InformationAppliance": NamedNode<'http://dbpedia.org/ontology/InformationAppliance'>;
    "Infrastructure/length": NamedNode<'http://dbpedia.org/ontology/Infrastructure/length'>;
    "Infrastructure": NamedNode<'http://dbpedia.org/ontology/Infrastructure'>;
    /** group of sports teams that compete against each other in Inline Hockey. */
    "InlineHockeyLeague": NamedNode<'http://dbpedia.org/ontology/InlineHockeyLeague'>;
    "Insect": NamedNode<'http://dbpedia.org/ontology/Insect'>;
    /** Describes all musical instrument */
    "Instrument": NamedNode<'http://dbpedia.org/ontology/Instrument'>;
    /** Een instrumentalist is een musicus die een muziekinstrument bespeelt. (https://nl.wikipedia.org/wiki/Instrumentalist) */
    "Instrumentalist": NamedNode<'http://dbpedia.org/ontology/Instrumentalist'>;
    "Intercommunality": NamedNode<'http://dbpedia.org/ontology/Intercommunality'>;
    "InternationalFootballLeagueEvent": NamedNode<'http://dbpedia.org/ontology/InternationalFootballLeagueEvent'>;
    /** An international organisation is either a private or a public organisation seeking to accomplish goals across country borders */
    "InternationalOrganisation": NamedNode<'http://dbpedia.org/ontology/InternationalOrganisation'>;
    "Island": NamedNode<'http://dbpedia.org/ontology/Island'>;
    "Jockey": NamedNode<'http://dbpedia.org/ontology/Jockey'>;
    "Journalist": NamedNode<'http://dbpedia.org/ontology/Journalist'>;
    "Judge": NamedNode<'http://dbpedia.org/ontology/Judge'>;
    /** a group of sports teams that compete against each other in Lacrosse. */
    "LacrosseLeague": NamedNode<'http://dbpedia.org/ontology/LacrosseLeague'>;
    "LacrossePlayer": NamedNode<'http://dbpedia.org/ontology/LacrossePlayer'>;
    "Lake/areaOfCatchment": NamedNode<'http://dbpedia.org/ontology/Lake/areaOfCatchment'>;
    "Lake/shoreLength": NamedNode<'http://dbpedia.org/ontology/Lake/shoreLength'>;
    "Lake/volume": NamedNode<'http://dbpedia.org/ontology/Lake/volume'>;
    "Lake": NamedNode<'http://dbpedia.org/ontology/Lake'>;
    "Language": NamedNode<'http://dbpedia.org/ontology/Language'>;
    "LaunchPad": NamedNode<'http://dbpedia.org/ontology/LaunchPad'>;
    "Law": NamedNode<'http://dbpedia.org/ontology/Law'>;
    /** A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service provided by a law firm is to advise clients (individuals or corporations) about their legal rights and responsibilities, and to represent their clients in civil or criminal cases, business transactions, and other matters in which legal advice and other assistance are sought. */
    "LawFirm": NamedNode<'http://dbpedia.org/ontology/LawFirm'>;
    /** a person who is practicing law. */
    "Lawyer": NamedNode<'http://dbpedia.org/ontology/Lawyer'>;
    "LegalCase": NamedNode<'http://dbpedia.org/ontology/LegalCase'>;
    "Legislature": NamedNode<'http://dbpedia.org/ontology/Legislature'>;
    /** A letter from the alphabet. */
    "Letter": NamedNode<'http://dbpedia.org/ontology/Letter'>;
    "Library": NamedNode<'http://dbpedia.org/ontology/Library'>;
    "Lieutenant": NamedNode<'http://dbpedia.org/ontology/Lieutenant'>;
    "LifeCycleEvent": NamedNode<'http://dbpedia.org/ontology/LifeCycleEvent'>;
    "Ligament": NamedNode<'http://dbpedia.org/ontology/Ligament'>;
    /** A style of Japanese novel */
    "LightNovel": NamedNode<'http://dbpedia.org/ontology/LightNovel'>;
    "Lighthouse": NamedNode<'http://dbpedia.org/ontology/Lighthouse'>;
    /** A coherent type of clothing or dressing following a particular fashion */
    "LineOfFashion": NamedNode<'http://dbpedia.org/ontology/LineOfFashion'>;
    "Linguist": NamedNode<'http://dbpedia.org/ontology/Linguist'>;
    /** Zijn vetten en vetachtige stoffen die in de biochemie een belangrijke rol spelen */
    "Lipid": NamedNode<'http://dbpedia.org/ontology/Lipid'>;
    /** A general list of items. */
    "List": NamedNode<'http://dbpedia.org/ontology/List'>;
    /** Genres of literature, e.g. Satire, Gothic */
    "LiteraryGenre": NamedNode<'http://dbpedia.org/ontology/LiteraryGenre'>;
    "Locality": NamedNode<'http://dbpedia.org/ontology/Locality'>;
    "Lock": NamedNode<'http://dbpedia.org/ontology/Lock'>;
    "Locomotive": NamedNode<'http://dbpedia.org/ontology/Locomotive'>;
    "LunarCrater/diameter": NamedNode<'http://dbpedia.org/ontology/LunarCrater/diameter'>;
    "LunarCrater": NamedNode<'http://dbpedia.org/ontology/LunarCrater'>;
    "Lymph": NamedNode<'http://dbpedia.org/ontology/Lymph'>;
    /** Als Publikumszeitschrift (auch Magazin) bezeichnet man eine Gattung von Zeitschriften, die sich an eine sehr breite Zielgruppe wendet und keine fachlichen Prägungen oder andere spezifische Merkmale voraussetzt. Publikumszeitschriften dienen der Unterhaltung und Information, sie sollen unangestrengt gelesen werden können. */
    "Magazine": NamedNode<'http://dbpedia.org/ontology/Magazine'>;
    "Mammal": NamedNode<'http://dbpedia.org/ontology/Mammal'>;
    "Man": NamedNode<'http://dbpedia.org/ontology/Man'>;
    /** Manga are comics created in Japan */
    "Manga": NamedNode<'http://dbpedia.org/ontology/Manga'>;
    /** Außerhalb Chinas wird der Begriff für Comics aus China verwendet. */
    "Manhua": NamedNode<'http://dbpedia.org/ontology/Manhua'>;
    /** Korean term for comics and print cartoons */
    "Manhwa": NamedNode<'http://dbpedia.org/ontology/Manhwa'>;
    "Manor": NamedNode<'http://dbpedia.org/ontology/Manor'>;
    /** O γάμος είναι μια κοινωνική, θρησκευτική και νομική σύζευξη ή ένωση δύο ατόμων, διαφορετικού ή σε ορισμένες χώρες κατά τα τελευταία χρόνια και ίδιου φύλου. */
    "Marriage": NamedNode<'http://dbpedia.org/ontology/Marriage'>;
    "MartialArtist": NamedNode<'http://dbpedia.org/ontology/MartialArtist'>;
    /** Mathematical concepts, e.g. Fibonacci numbers, Imaginary numbers, Symmetry */
    "MathematicalConcept": NamedNode<'http://dbpedia.org/ontology/MathematicalConcept'>;
    "Mayor": NamedNode<'http://dbpedia.org/ontology/Mayor'>;
    "MeanOfTransportation/diameter": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation/diameter'>;
    "MeanOfTransportation/height": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation/height'>;
    "MeanOfTransportation/length": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation/length'>;
    "MeanOfTransportation/mass": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation/mass'>;
    "MeanOfTransportation/weight": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation/weight'>;
    "MeanOfTransportation/width": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation/width'>;
    "MeanOfTransportation": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation'>;
    /** storage and transmission channels or tools used to store and deliver information or data */
    "Media": NamedNode<'http://dbpedia.org/ontology/Media'>;
    "MedicalSpecialty": NamedNode<'http://dbpedia.org/ontology/MedicalSpecialty'>;
    "Medician": NamedNode<'http://dbpedia.org/ontology/Medician'>;
    /** The science and art of healing the human body and identifying the causes of disease */
    "Medicine": NamedNode<'http://dbpedia.org/ontology/Medicine'>;
    /** A regular or irregular meeting of people as an event to keep record of */
    "Meeting": NamedNode<'http://dbpedia.org/ontology/Meeting'>;
    "MemberOfParliament": NamedNode<'http://dbpedia.org/ontology/MemberOfParliament'>;
    "MemberResistanceMovement": NamedNode<'http://dbpedia.org/ontology/MemberResistanceMovement'>;
    /** A monument erected to commemorate a person, an event and/or group. In the case of a person, this might be a grave or tomb. */
    "Memorial": NamedNode<'http://dbpedia.org/ontology/Memorial'>;
    /** Η στάση μετρό χρησιμοποιείται συνήθως για μια τοποθεσία ή σημείο όπου σταματάει το μεταφορικό μέσο μετρό */
    "MetroStation": NamedNode<'http://dbpedia.org/ontology/MetroStation'>;
    /** A microregion is a - mainy statistical - region in Brazil, at an administrative level between a meso-region and a community */
    "MicroRegion": NamedNode<'http://dbpedia.org/ontology/MicroRegion'>;
    "MilitaryAircraft": NamedNode<'http://dbpedia.org/ontology/MilitaryAircraft'>;
    "MilitaryConflict": NamedNode<'http://dbpedia.org/ontology/MilitaryConflict'>;
    "MilitaryPerson": NamedNode<'http://dbpedia.org/ontology/MilitaryPerson'>;
    "MilitaryService": NamedNode<'http://dbpedia.org/ontology/MilitaryService'>;
    /** A military structure such as a Castle, Fortress, Wall, etc. */
    "MilitaryStructure": NamedNode<'http://dbpedia.org/ontology/MilitaryStructure'>;
    "MilitaryUnit": NamedNode<'http://dbpedia.org/ontology/MilitaryUnit'>;
    "MilitaryVehicle": NamedNode<'http://dbpedia.org/ontology/MilitaryVehicle'>;
    /** a unit operation designed to break a solid material into smaller pieces */
    "Mill": NamedNode<'http://dbpedia.org/ontology/Mill'>;
    /** A mine is a place where mineral resources are or were extracted */
    "Mine": NamedNode<'http://dbpedia.org/ontology/Mine'>;
    /** A naturally occurring solid chemical substance. */
    "Mineral": NamedNode<'http://dbpedia.org/ontology/Mineral'>;
    "Minister": NamedNode<'http://dbpedia.org/ontology/Minister'>;
    "MixedMartialArtsEvent": NamedNode<'http://dbpedia.org/ontology/MixedMartialArtsEvent'>;
    /** a group of sports teams that compete against each other in Mixed Martial Arts */
    "MixedMartialArtsLeague": NamedNode<'http://dbpedia.org/ontology/MixedMartialArtsLeague'>;
    "MobilePhone": NamedNode<'http://dbpedia.org/ontology/MobilePhone'>;
    "Model": NamedNode<'http://dbpedia.org/ontology/Model'>;
    /** Τα μαλάκια αποτελούν μια τεράστια συνομοταξία ζώων, την πολυπληθέστερη μετά τα αρθρόποδα, με πάνω από 100.000 είδη. */
    "Mollusca": NamedNode<'http://dbpedia.org/ontology/Mollusca'>;
    "Monarch": NamedNode<'http://dbpedia.org/ontology/Monarch'>;
    /** Een klooster (van het Latijnse claustrum, afgesloten ruimte) is een gebouw of een samenstel van gebouwen dat dient tot huisvesting van een groep of gemeenschap van mannen of vrouwen, vaak monniken of monialen genoemd, die zich uit de wereld heeft teruggetrokken om een godsdienstig leven te leiden. */
    "Monastery": NamedNode<'http://dbpedia.org/ontology/Monastery'>;
    "MonoclonalAntibody": NamedNode<'http://dbpedia.org/ontology/MonoclonalAntibody'>;
    /** A type of structure (a statue or an art object) created to commemorate a person or important event, not necessarily of a catastrophic nature. */
    "Monument": NamedNode<'http://dbpedia.org/ontology/Monument'>;
    /** A mosque, sometimes spelt mosk, is a place of worship for followers of Islam. */
    "Mosque": NamedNode<'http://dbpedia.org/ontology/Mosque'>;
    "Moss": NamedNode<'http://dbpedia.org/ontology/Moss'>;
    "MotocycleRacer": NamedNode<'http://dbpedia.org/ontology/MotocycleRacer'>;
    "MotorRace": NamedNode<'http://dbpedia.org/ontology/MotorRace'>;
    "Motorcycle": NamedNode<'http://dbpedia.org/ontology/Motorcycle'>;
    /** a group of sports teams or bikerider that compete against each other in Motorcycle Racing */
    "MotorcycleRacingLeague": NamedNode<'http://dbpedia.org/ontology/MotorcycleRacingLeague'>;
    "MotorcycleRider": NamedNode<'http://dbpedia.org/ontology/MotorcycleRider'>;
    "MotorsportRacer": NamedNode<'http://dbpedia.org/ontology/MotorsportRacer'>;
    "MotorsportSeason": NamedNode<'http://dbpedia.org/ontology/MotorsportSeason'>;
    "Mountain": NamedNode<'http://dbpedia.org/ontology/Mountain'>;
    /** a path that allows the crossing of a mountain chain. It is usually a saddle point in between two areas of higher elevation */
    "MountainPass": NamedNode<'http://dbpedia.org/ontology/MountainPass'>;
    /** a chain of mountains bordered by highlands or separated from other mountains by passes or valleys. */
    "MountainRange": NamedNode<'http://dbpedia.org/ontology/MountainRange'>;
    "MouseGene": NamedNode<'http://dbpedia.org/ontology/MouseGene'>;
    "MouseGeneLocation": NamedNode<'http://dbpedia.org/ontology/MouseGeneLocation'>;
    /** a person who oversees making of film. */
    "MovieDirector": NamedNode<'http://dbpedia.org/ontology/MovieDirector'>;
    "MovieGenre": NamedNode<'http://dbpedia.org/ontology/MovieGenre'>;
    /** A visual document that is intended to be animated; equivalent to http://purl.org/dc/dcmitype/MovingImage */
    "MovingImage": NamedNode<'http://dbpedia.org/ontology/MovingImage'>;
    "MovingWalkway/diameter": NamedNode<'http://dbpedia.org/ontology/MovingWalkway/diameter'>;
    "MovingWalkway/height": NamedNode<'http://dbpedia.org/ontology/MovingWalkway/height'>;
    "MovingWalkway/length": NamedNode<'http://dbpedia.org/ontology/MovingWalkway/length'>;
    "MovingWalkway/mass": NamedNode<'http://dbpedia.org/ontology/MovingWalkway/mass'>;
    "MovingWalkway/weight": NamedNode<'http://dbpedia.org/ontology/MovingWalkway/weight'>;
    "MovingWalkway/width": NamedNode<'http://dbpedia.org/ontology/MovingWalkway/width'>;
    "MovingWalkway": NamedNode<'http://dbpedia.org/ontology/MovingWalkway'>;
    "MultiVolumePublication": NamedNode<'http://dbpedia.org/ontology/MultiVolumePublication'>;
    /** An administrative body governing a territorial unity on the lower level, administering one or a few more settlements */
    "Municipality": NamedNode<'http://dbpedia.org/ontology/Municipality'>;
    "Murderer": NamedNode<'http://dbpedia.org/ontology/Murderer'>;
    "Muscle": NamedNode<'http://dbpedia.org/ontology/Muscle'>;
    "Museum": NamedNode<'http://dbpedia.org/ontology/Museum'>;
    /** a person who creates music. */
    "MusicComposer": NamedNode<'http://dbpedia.org/ontology/MusicComposer'>;
    /** A person who is the director of an orchestra or concert band. */
    "MusicDirector": NamedNode<'http://dbpedia.org/ontology/MusicDirector'>;
    "MusicFestival": NamedNode<'http://dbpedia.org/ontology/MusicFestival'>;
    "MusicGenre": NamedNode<'http://dbpedia.org/ontology/MusicGenre'>;
    "Musical": NamedNode<'http://dbpedia.org/ontology/Musical'>;
    "MusicalArtist": NamedNode<'http://dbpedia.org/ontology/MusicalArtist'>;
    "MusicalWork": NamedNode<'http://dbpedia.org/ontology/MusicalWork'>;
    "MythologicalFigure": NamedNode<'http://dbpedia.org/ontology/MythologicalFigure'>;
    "NCAATeamSeason": NamedNode<'http://dbpedia.org/ontology/NCAATeamSeason'>;
    "Name": NamedNode<'http://dbpedia.org/ontology/Name'>;
    "NarutoCharacter": NamedNode<'http://dbpedia.org/ontology/NarutoCharacter'>;
    "NascarDriver": NamedNode<'http://dbpedia.org/ontology/NascarDriver'>;
    /** Patriotic musical composition which is the offcial national song. */
    "NationalAnthem": NamedNode<'http://dbpedia.org/ontology/NationalAnthem'>;
    "NationalCollegiateAthleticAssociationAthlete": NamedNode<'http://dbpedia.org/ontology/NationalCollegiateAthleticAssociationAthlete'>;
    "NationalFootballLeagueEvent": NamedNode<'http://dbpedia.org/ontology/NationalFootballLeagueEvent'>;
    "NationalFootballLeagueSeason": NamedNode<'http://dbpedia.org/ontology/NationalFootballLeagueSeason'>;
    "NationalSoccerClub": NamedNode<'http://dbpedia.org/ontology/NationalSoccerClub'>;
    /** Το φυσικό γεγονός χρησιμοποιείται για να περιγράψει ένα συμβάν που πραγματοποιείται φυσικά */
    "NaturalEvent": NamedNode<'http://dbpedia.org/ontology/NaturalEvent'>;
    /** Der natürlicher Ort beinhaltet alle Orte die natürlicherweise im Universum existieren. */
    "NaturalPlace": NamedNode<'http://dbpedia.org/ontology/NaturalPlace'>;
    /** H φυσική περιοχή χρησιμοποιείται για να περιγράψει την έκταση μιας γεωγραφικής περιοχής στην οποία η ανθρωπογενής παρέμβαση είναι ανύπαρκτη μέχρι ελάχιστη */
    "NaturalRegion": NamedNode<'http://dbpedia.org/ontology/NaturalRegion'>;
    "Nebula": NamedNode<'http://dbpedia.org/ontology/Nebula'>;
    "Nerve": NamedNode<'http://dbpedia.org/ontology/Nerve'>;
    "NetballPlayer": NamedNode<'http://dbpedia.org/ontology/NetballPlayer'>;
    /** A newspaper is a regularly scheduled publication containing news of current events, informative articles, diverse features and advertising. It usually is printed on relatively inexpensive, low-grade paper such as newsprint. */
    "Newspaper": NamedNode<'http://dbpedia.org/ontology/Newspaper'>;
    "NobelPrize": NamedNode<'http://dbpedia.org/ontology/NobelPrize'>;
    "Noble": NamedNode<'http://dbpedia.org/ontology/Noble'>;
    /** Family deemed to be of noble descent */
    "NobleFamily": NamedNode<'http://dbpedia.org/ontology/NobleFamily'>;
    "Non-ProfitOrganisation": NamedNode<'http://dbpedia.org/ontology/Non-ProfitOrganisation'>;
    "NordicCombined": NamedNode<'http://dbpedia.org/ontology/NordicCombined'>;
    /** A book of long narrative in literary prose */
    "Novel": NamedNode<'http://dbpedia.org/ontology/Novel'>;
    "NuclearPowerStation": NamedNode<'http://dbpedia.org/ontology/NuclearPowerStation'>;
    /** A body of saline water that composes much of a planet's hydrosphere. */
    "Ocean": NamedNode<'http://dbpedia.org/ontology/Ocean'>;
    "OfficeHolder": NamedNode<'http://dbpedia.org/ontology/OfficeHolder'>;
    "OldTerritory": NamedNode<'http://dbpedia.org/ontology/OldTerritory'>;
    "OlympicEvent": NamedNode<'http://dbpedia.org/ontology/OlympicEvent'>;
    "OlympicResult": NamedNode<'http://dbpedia.org/ontology/OlympicResult'>;
    "Olympics": NamedNode<'http://dbpedia.org/ontology/Olympics'>;
    "On-SiteTransportation/diameter": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation/diameter'>;
    "On-SiteTransportation/height": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation/height'>;
    "On-SiteTransportation/length": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation/length'>;
    "On-SiteTransportation/mass": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation/mass'>;
    "On-SiteTransportation/weight": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation/weight'>;
    "On-SiteTransportation/width": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation/width'>;
    "On-SiteTransportation": NamedNode<'http://dbpedia.org/ontology/On-SiteTransportation'>;
    "Openswarm": NamedNode<'http://dbpedia.org/ontology/Openswarm'>;
    "Opera": NamedNode<'http://dbpedia.org/ontology/Opera'>;
    /** All types and sizes of organs */
    "Organ": NamedNode<'http://dbpedia.org/ontology/Organ'>;
    "Organisation": NamedNode<'http://dbpedia.org/ontology/Organisation'>;
    /** A member of an organisation. */
    "OrganisationMember": NamedNode<'http://dbpedia.org/ontology/OrganisationMember'>;
    "Orphan": NamedNode<'http://dbpedia.org/ontology/Orphan'>;
    "Outbreak": NamedNode<'http://dbpedia.org/ontology/Outbreak'>;
    "OverseasDepartment": NamedNode<'http://dbpedia.org/ontology/OverseasDepartment'>;
    /** a group of sports teams that compete against each other in Paintball */
    "PaintballLeague": NamedNode<'http://dbpedia.org/ontology/PaintballLeague'>;
    "Painter": NamedNode<'http://dbpedia.org/ontology/Painter'>;
    /** Describes a painting to assign picture entries in wikipedia to artists. */
    "Painting": NamedNode<'http://dbpedia.org/ontology/Painting'>;
    /** The smallest unit of a clerical administrative body */
    "Parish": NamedNode<'http://dbpedia.org/ontology/Parish'>;
    /** A park is an area of open space provided for recreational use. http://en.wikipedia.org/wiki/Park */
    "Park": NamedNode<'http://dbpedia.org/ontology/Park'>;
    "Parliament": NamedNode<'http://dbpedia.org/ontology/Parliament'>;
    "PenaltyShootOut": NamedNode<'http://dbpedia.org/ontology/PenaltyShootOut'>;
    "PeriodOfArtisticStyle": NamedNode<'http://dbpedia.org/ontology/PeriodOfArtisticStyle'>;
    /** Periodical literature (also called a periodical publication or simply a periodical) is a published work that appears in a new edition on a regular schedule. The most familiar examples are the newspaper, often published daily, or weekly; or the magazine, typically published weekly, monthly or as a quarterly. Other examples would be a newsletter, a literary journal or learned journal, or a yearbook. */
    "PeriodicalLiterature": NamedNode<'http://dbpedia.org/ontology/PeriodicalLiterature'>;
    "Person/height": NamedNode<'http://dbpedia.org/ontology/Person/height'>;
    "Person/weight": NamedNode<'http://dbpedia.org/ontology/Person/weight'>;
    "Person": NamedNode<'http://dbpedia.org/ontology/Person'>;
    "PersonFunction": NamedNode<'http://dbpedia.org/ontology/PersonFunction'>;
    /** an event that occurs in someone's personal life */
    "PersonalEvent": NamedNode<'http://dbpedia.org/ontology/PersonalEvent'>;
    "Philosopher": NamedNode<'http://dbpedia.org/ontology/Philosopher'>;
    /** Philosophical concepts, e.g. Existentialism, Cogito Ergo Sum */
    "PhilosophicalConcept": NamedNode<'http://dbpedia.org/ontology/PhilosophicalConcept'>;
    "Photographer": NamedNode<'http://dbpedia.org/ontology/Photographer'>;
    /** Immobile things or locations. */
    "Place": NamedNode<'http://dbpedia.org/ontology/Place'>;
    "Planet/apoapsis": NamedNode<'http://dbpedia.org/ontology/Planet/apoapsis'>;
    /** The average speed of a thing. */
    "Planet/averageSpeed": NamedNode<'http://dbpedia.org/ontology/Planet/averageSpeed'>;
    "Planet/density": NamedNode<'http://dbpedia.org/ontology/Planet/density'>;
    "Planet/mass": NamedNode<'http://dbpedia.org/ontology/Planet/mass'>;
    "Planet/maximumTemperature": NamedNode<'http://dbpedia.org/ontology/Planet/maximumTemperature'>;
    "Planet/meanRadius": NamedNode<'http://dbpedia.org/ontology/Planet/meanRadius'>;
    "Planet/meanTemperature": NamedNode<'http://dbpedia.org/ontology/Planet/meanTemperature'>;
    "Planet/minimumTemperature": NamedNode<'http://dbpedia.org/ontology/Planet/minimumTemperature'>;
    "Planet/orbitalPeriod": NamedNode<'http://dbpedia.org/ontology/Planet/orbitalPeriod'>;
    "Planet/periapsis": NamedNode<'http://dbpedia.org/ontology/Planet/periapsis'>;
    "Planet/surfaceArea": NamedNode<'http://dbpedia.org/ontology/Planet/surfaceArea'>;
    "Planet/temperature": NamedNode<'http://dbpedia.org/ontology/Planet/temperature'>;
    "Planet/volume": NamedNode<'http://dbpedia.org/ontology/Planet/volume'>;
    "Planet": NamedNode<'http://dbpedia.org/ontology/Planet'>;
    "Plant": NamedNode<'http://dbpedia.org/ontology/Plant'>;
    /** A play is a form of literature written by a playwright, usually consisting of scripted dialogue between characters, intended for theatrical performance rather than just reading. */
    "Play": NamedNode<'http://dbpedia.org/ontology/Play'>;
    /** A person who writes dramatic literature or drama. */
    "PlayWright": NamedNode<'http://dbpedia.org/ontology/PlayWright'>;
    "PlayboyPlaymate": NamedNode<'http://dbpedia.org/ontology/PlayboyPlaymate'>;
    "Poem": NamedNode<'http://dbpedia.org/ontology/Poem'>;
    "Poet": NamedNode<'http://dbpedia.org/ontology/Poet'>;
    "PokerPlayer": NamedNode<'http://dbpedia.org/ontology/PokerPlayer'>;
    /** Political concepts, e.g. Capitalism, Democracy */
    "PoliticalConcept": NamedNode<'http://dbpedia.org/ontology/PoliticalConcept'>;
    "PoliticalFunction": NamedNode<'http://dbpedia.org/ontology/PoliticalFunction'>;
    /** for example: Democratic_Party_(United_States) */
    "PoliticalParty": NamedNode<'http://dbpedia.org/ontology/PoliticalParty'>;
    "Politician": NamedNode<'http://dbpedia.org/ontology/Politician'>;
    "PoliticianSpouse": NamedNode<'http://dbpedia.org/ontology/PoliticianSpouse'>;
    /** A group of sports teams that compete against each other in Polo. */
    "PoloLeague": NamedNode<'http://dbpedia.org/ontology/PoloLeague'>;
    "Polyhedron": NamedNode<'http://dbpedia.org/ontology/Polyhedron'>;
    /** Zijn koolhydraten die zijn opgebouwd uit tien of meer monosacharide-eenheden */
    "Polysaccharide": NamedNode<'http://dbpedia.org/ontology/Polysaccharide'>;
    "Pope": NamedNode<'http://dbpedia.org/ontology/Pope'>;
    /** The area of the thing in square meters. */
    "PopulatedPlace/area": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/area'>;
    "PopulatedPlace/areaMetro": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/areaMetro'>;
    "PopulatedPlace/areaTotal": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/areaTotal'>;
    "PopulatedPlace/areaUrban": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/areaUrban'>;
    "PopulatedPlace/populationDensity": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/populationDensity'>;
    "PopulatedPlace/populationMetroDensity": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/populationMetroDensity'>;
    "PopulatedPlace/populationUrbanDensity": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace/populationUrbanDensity'>;
    /** As defined by the United States Geological Survey, a populated place is a place or area with clustered or scattered buildings and a permanent human population (city, settlement, town, or village) referenced with geographic coordinates (http://en.wikipedia.org/wiki/Populated_place). */
    "PopulatedPlace": NamedNode<'http://dbpedia.org/ontology/PopulatedPlace'>;
    "Population": NamedNode<'http://dbpedia.org/ontology/Population'>;
    /** a location on a coast or shore containing one or more harbors where ships can dock and transfer people or cargo to or from land. */
    "Port": NamedNode<'http://dbpedia.org/ontology/Port'>;
    "PowerStation": NamedNode<'http://dbpedia.org/ontology/PowerStation'>;
    "Prefecture": NamedNode<'http://dbpedia.org/ontology/Prefecture'>;
    "PrehistoricalPeriod": NamedNode<'http://dbpedia.org/ontology/PrehistoricalPeriod'>;
    /** TV or radio show presenter */
    "Presenter": NamedNode<'http://dbpedia.org/ontology/Presenter'>;
    "President": NamedNode<'http://dbpedia.org/ontology/President'>;
    "Priest": NamedNode<'http://dbpedia.org/ontology/Priest'>;
    "PrimeMinister": NamedNode<'http://dbpedia.org/ontology/PrimeMinister'>;
    "Prison": NamedNode<'http://dbpedia.org/ontology/Prison'>;
    /** a person who manages movies or music recordings. */
    "Producer": NamedNode<'http://dbpedia.org/ontology/Producer'>;
    "Profession": NamedNode<'http://dbpedia.org/ontology/Profession'>;
    "Professor": NamedNode<'http://dbpedia.org/ontology/Professor'>;
    "ProgrammingLanguage": NamedNode<'http://dbpedia.org/ontology/ProgrammingLanguage'>;
    /** A project is a temporary endeavor undertaken to achieve defined objectives. */
    "Project": NamedNode<'http://dbpedia.org/ontology/Project'>;
    /** Deze klasse duidt gebieden aan met de status 'beschermd'. Is dus eigenlijk ook geen klasse, maar zou een attribuut moeten zijn */
    "ProtectedArea": NamedNode<'http://dbpedia.org/ontology/ProtectedArea'>;
    "Protein": NamedNode<'http://dbpedia.org/ontology/Protein'>;
    "Protocol": NamedNode<'http://dbpedia.org/ontology/Protocol'>;
    "ProtohistoricalPeriod": NamedNode<'http://dbpedia.org/ontology/ProtohistoricalPeriod'>;
    /** An administrative body governing a territorial unity on the intermediate level, between local and national level */
    "Province": NamedNode<'http://dbpedia.org/ontology/Province'>;
    "Psychologist": NamedNode<'http://dbpedia.org/ontology/Psychologist'>;
    /** Είναι οι υπηρεσίες που προσφέρονται από δομές του κράτους */
    "PublicService": NamedNode<'http://dbpedia.org/ontology/PublicService'>;
    /** A public transit system is a shared passenger transportation service which is available for use by the general public. Public transport modes include buses, trolleybuses, trams and trains, 'rapid transit' (metro/subways/undergrounds etc) and ferries. Intercity public transport is dominated by airlines, coaches, and intercity rail. (http://en.wikipedia.org/wiki/Public_transit). */
    "PublicTransitSystem": NamedNode<'http://dbpedia.org/ontology/PublicTransitSystem'>;
    /** Publishing company */
    "Publisher": NamedNode<'http://dbpedia.org/ontology/Publisher'>;
    /** a structure whose shape is roughly that of a pyramid in the geometric sense. */
    "Pyramid": NamedNode<'http://dbpedia.org/ontology/Pyramid'>;
    "Quote": NamedNode<'http://dbpedia.org/ontology/Quote'>;
    "Race": NamedNode<'http://dbpedia.org/ontology/Race'>;
    "RaceHorse": NamedNode<'http://dbpedia.org/ontology/RaceHorse'>;
    "RaceTrack": NamedNode<'http://dbpedia.org/ontology/RaceTrack'>;
    /** A racecourse is an alternate term for a horse racing track, found in countries such as the United Kingdom, Australia, Hong Kong, and the United Arab Emirates. */
    "Racecourse": NamedNode<'http://dbpedia.org/ontology/Racecourse'>;
    "RacingDriver": NamedNode<'http://dbpedia.org/ontology/RacingDriver'>;
    /** A group of sports teams or person that compete against each other in radio-controlled racing. */
    "RadioControlledRacingLeague": NamedNode<'http://dbpedia.org/ontology/RadioControlledRacingLeague'>;
    "RadioHost": NamedNode<'http://dbpedia.org/ontology/RadioHost'>;
    "RadioProgram": NamedNode<'http://dbpedia.org/ontology/RadioProgram'>;
    /** A radio station has one line up. For instance the radio station BBC Radio 1. Not to be confused with the broadcasting network BBC, which has many radio stations. */
    "RadioStation": NamedNode<'http://dbpedia.org/ontology/RadioStation'>;
    /** A railway line is a transport service by trains that pull passengers or freight provided by an organization. Not to be mistaken for railway track, which is the structure consisting of the rails. Wikipedia do not clearly differentiate between both, so there is one infobox describing tracks and lines. */
    "RailwayLine": NamedNode<'http://dbpedia.org/ontology/RailwayLine'>;
    "RailwayStation": NamedNode<'http://dbpedia.org/ontology/RailwayStation'>;
    "RailwayTunnel": NamedNode<'http://dbpedia.org/ontology/RailwayTunnel'>;
    /** Ο οδηγός ράλι χρησιμοποιείται για να περιγράψει άνδρα που  λαμβάνει μέρος σε αγώνες αυτοκινήτων ειδικής κατηγορίας */
    "RallyDriver": NamedNode<'http://dbpedia.org/ontology/RallyDriver'>;
    "Ratio": NamedNode<'http://dbpedia.org/ontology/Ratio'>;
    "Rebellion": NamedNode<'http://dbpedia.org/ontology/Rebellion'>;
    "RecordLabel": NamedNode<'http://dbpedia.org/ontology/RecordLabel'>;
    "RecordOffice": NamedNode<'http://dbpedia.org/ontology/RecordOffice'>;
    /** An official who watches a game or match closely to ensure that the rules are adhered to. */
    "Referee": NamedNode<'http://dbpedia.org/ontology/Referee'>;
    /** Reference to a work (book, movie, website)  providing info about the subject */
    "Reference": NamedNode<'http://dbpedia.org/ontology/Reference'>;
    /** bagian wilayah administratif dibawah provinsi */
    "Regency": NamedNode<'http://dbpedia.org/ontology/Regency'>;
    "Region": NamedNode<'http://dbpedia.org/ontology/Region'>;
    "Reign": NamedNode<'http://dbpedia.org/ontology/Reign'>;
    "Relationship": NamedNode<'http://dbpedia.org/ontology/Relationship'>;
    "Religious": NamedNode<'http://dbpedia.org/ontology/Religious'>;
    "ReligiousBuilding": NamedNode<'http://dbpedia.org/ontology/ReligiousBuilding'>;
    "ReligiousOrganisation": NamedNode<'http://dbpedia.org/ontology/ReligiousOrganisation'>;
    "Reptile": NamedNode<'http://dbpedia.org/ontology/Reptile'>;
    /** A research project is a scientific investigation, usually using scientific methods, to achieve defined objectives. */
    "ResearchProject": NamedNode<'http://dbpedia.org/ontology/ResearchProject'>;
    /** A rest area is part of a Road, meant to stop and rest. More often than not, there is a filling station */
    "RestArea": NamedNode<'http://dbpedia.org/ontology/RestArea'>;
    "Restaurant": NamedNode<'http://dbpedia.org/ontology/Restaurant'>;
    /** A Resume describes a persons work experience and skill set. */
    "Resume": NamedNode<'http://dbpedia.org/ontology/Resume'>;
    /** a large natural stream */
    "River": NamedNode<'http://dbpedia.org/ontology/River'>;
    "Road": NamedNode<'http://dbpedia.org/ontology/Road'>;
    /** A road junction is a location where vehicular traffic going in different directions can proceed in a controlled manner designed to minimize accidents. In some cases, vehicles can change between different routes or directions of travel (http://en.wikipedia.org/wiki/Junction_%28road%29). */
    "RoadJunction": NamedNode<'http://dbpedia.org/ontology/RoadJunction'>;
    "RoadTunnel": NamedNode<'http://dbpedia.org/ontology/RoadTunnel'>;
    "Robot": NamedNode<'http://dbpedia.org/ontology/Robot'>;
    /** Payload mass in a typical Low Earth orbit */
    "Rocket/lowerEarthOrbitPayload": NamedNode<'http://dbpedia.org/ontology/Rocket/lowerEarthOrbitPayload'>;
    "Rocket/mass": NamedNode<'http://dbpedia.org/ontology/Rocket/mass'>;
    "Rocket": NamedNode<'http://dbpedia.org/ontology/Rocket'>;
    "RocketEngine": NamedNode<'http://dbpedia.org/ontology/RocketEngine'>;
    "RollerCoaster": NamedNode<'http://dbpedia.org/ontology/RollerCoaster'>;
    "RomanEmperor": NamedNode<'http://dbpedia.org/ontology/RomanEmperor'>;
    /** A route of transportation (thoroughfare) may refer to a public road, highway, path or trail or a route on water from one place to another for use by a variety of general traffic (http://en.wikipedia.org/wiki/Thoroughfare). */
    "RouteOfTransportation": NamedNode<'http://dbpedia.org/ontology/RouteOfTransportation'>;
    /** one stage or stop on a road. */
    "RouteStop": NamedNode<'http://dbpedia.org/ontology/RouteStop'>;
    "Rower": NamedNode<'http://dbpedia.org/ontology/Rower'>;
    "Royalty": NamedNode<'http://dbpedia.org/ontology/Royalty'>;
    "RugbyClub": NamedNode<'http://dbpedia.org/ontology/RugbyClub'>;
    /** A group of sports teams that compete against each other in rugby. */
    "RugbyLeague": NamedNode<'http://dbpedia.org/ontology/RugbyLeague'>;
    "RugbyPlayer": NamedNode<'http://dbpedia.org/ontology/RugbyPlayer'>;
    "Saint": NamedNode<'http://dbpedia.org/ontology/Saint'>;
    "Sales": NamedNode<'http://dbpedia.org/ontology/Sales'>;
    "SambaSchool": NamedNode<'http://dbpedia.org/ontology/SambaSchool'>;
    /** An astronomic object orbiting around a planet or star. Definition partly derived from http://www.ontotext.com/proton/protonext# (and thus WordNet 1.7). */
    "Satellite": NamedNode<'http://dbpedia.org/ontology/Satellite'>;
    "School/campusSize": NamedNode<'http://dbpedia.org/ontology/School/campusSize'>;
    "School": NamedNode<'http://dbpedia.org/ontology/School'>;
    /** Scientific concepts, e.g. Theory of relativity, Quantum gravity */
    "ScientificConcept": NamedNode<'http://dbpedia.org/ontology/ScientificConcept'>;
    "Scientist": NamedNode<'http://dbpedia.org/ontology/Scientist'>;
    /** Ο σεναριογράφος όχι μόνο γράφει την υπόθεση μιας σειράς άλλα είναι αυτός που επινοεί και τους πρωταγωνιστές του έργου. */
    "ScreenWriter": NamedNode<'http://dbpedia.org/ontology/ScreenWriter'>;
    "Sculptor": NamedNode<'http://dbpedia.org/ontology/Sculptor'>;
    /** Een beeldhouwwerk is een drie-dimensionaal kunstvoorwerp of plastiek, gemaakt van harde materialen zoals steen of metaal. Ook kunnen textiel of kunststoffen erin verwerkt zijn of het hoofdbestanddeel ervan uitmaken. */
    "Sculpture": NamedNode<'http://dbpedia.org/ontology/Sculpture'>;
    "Sea": NamedNode<'http://dbpedia.org/ontology/Sea'>;
    "Senator": NamedNode<'http://dbpedia.org/ontology/Senator'>;
    "SerialKiller": NamedNode<'http://dbpedia.org/ontology/SerialKiller'>;
    "Settlement": NamedNode<'http://dbpedia.org/ontology/Settlement'>;
    "Ship": NamedNode<'http://dbpedia.org/ontology/Ship'>;
    "ShoppingMall": NamedNode<'http://dbpedia.org/ontology/ShoppingMall'>;
    "Shrine": NamedNode<'http://dbpedia.org/ontology/Shrine'>;
    /** a person who sings. */
    "Singer": NamedNode<'http://dbpedia.org/ontology/Singer'>;
    /** In music, a single or record single is a type of release, typically a recording of fewer tracks than an LP or a CD. */
    "Single": NamedNode<'http://dbpedia.org/ontology/Single'>;
    /** A Site of Special Scientific Interest (SSSI) is a conservation designation denoting a protected area in the United Kingdom. SSSIs are the basic building block of site-based nature conservation legislation and most other legal nature/geological conservation designations in Great Britain are based upon them, including National Nature Reserves, Ramsar Sites, Special Protection Areas, and Special Areas of Conservation. */
    "SiteOfSpecialScientificInterest": NamedNode<'http://dbpedia.org/ontology/SiteOfSpecialScientificInterest'>;
    "Skater": NamedNode<'http://dbpedia.org/ontology/Skater'>;
    "SkiArea": NamedNode<'http://dbpedia.org/ontology/SkiArea'>;
    /** Το θέρετρο σκι χρησιμοποιείται για να περιγράψει έναν τόπο διακοπών με τις απαραίτητες εγκαταστάσεις διαμονής και εξάσκησης του χειμερινού αθλήματος της χιονοδρομίας */
    "SkiResort": NamedNode<'http://dbpedia.org/ontology/SkiResort'>;
    "Ski_jumper": NamedNode<'http://dbpedia.org/ontology/Ski_jumper'>;
    "Skier": NamedNode<'http://dbpedia.org/ontology/Skier'>;
    "Skyscraper": NamedNode<'http://dbpedia.org/ontology/Skyscraper'>;
    /** An athlete that plays snooker and won the world championship at least once */
    "SnookerChamp": NamedNode<'http://dbpedia.org/ontology/SnookerChamp'>;
    /** An athlete that plays snooker, which is a billard derivate */
    "SnookerPlayer": NamedNode<'http://dbpedia.org/ontology/SnookerPlayer'>;
    /** Die offizielle Weltrangliste im Snooker eines Jahres / einer Saison */
    "SnookerWorldRanking": NamedNode<'http://dbpedia.org/ontology/SnookerWorldRanking'>;
    "SoapCharacter": NamedNode<'http://dbpedia.org/ontology/SoapCharacter'>;
    /** A sports game in which the ball must be played by foot */
    "Soccer": NamedNode<'http://dbpedia.org/ontology/Soccer'>;
    "SoccerClub": NamedNode<'http://dbpedia.org/ontology/SoccerClub'>;
    "SoccerClubSeason": NamedNode<'http://dbpedia.org/ontology/SoccerClubSeason'>;
    /** A group of sports teams that compete against each other in soccer. */
    "SoccerLeague": NamedNode<'http://dbpedia.org/ontology/SoccerLeague'>;
    "SoccerLeagueSeason": NamedNode<'http://dbpedia.org/ontology/SoccerLeagueSeason'>;
    "SoccerManager": NamedNode<'http://dbpedia.org/ontology/SoccerManager'>;
    "SoccerPlayer": NamedNode<'http://dbpedia.org/ontology/SoccerPlayer'>;
    "SoccerTournament": NamedNode<'http://dbpedia.org/ontology/SoccerTournament'>;
    /** an event that is clearly different from strictly personal events */
    "SocietalEvent": NamedNode<'http://dbpedia.org/ontology/SocietalEvent'>;
    /** A group of sports teams that compete against each other in softball. */
    "SoftballLeague": NamedNode<'http://dbpedia.org/ontology/SoftballLeague'>;
    /** size of a file or software */
    "Software/fileSize": NamedNode<'http://dbpedia.org/ontology/Software/fileSize'>;
    "Software": NamedNode<'http://dbpedia.org/ontology/Software'>;
    /** Έκλειψη ηλίου ονομάζεται το φαινόμενο κατά το οποίο η Σελήνη παρεμβάλλεται ανάμεσα στον Ήλιο και τη Γη, με αποτέλεσμα ορισμένες περιοχές της Γης να δέχονται λιγότερο φως από ό,τι συνήθως. */
    "SolarEclipse": NamedNode<'http://dbpedia.org/ontology/SolarEclipse'>;
    "Song": NamedNode<'http://dbpedia.org/ontology/Song'>;
    /** a person who writes songs. */
    "SongWriter": NamedNode<'http://dbpedia.org/ontology/SongWriter'>;
    /** An audio document intended to be listened to; equivalent to http://purl.org/dc/dcmitype/Sound */
    "Sound": NamedNode<'http://dbpedia.org/ontology/Sound'>;
    "SpaceMission/cmpEvaDuration": NamedNode<'http://dbpedia.org/ontology/SpaceMission/cmpEvaDuration'>;
    "SpaceMission/distanceTraveled": NamedNode<'http://dbpedia.org/ontology/SpaceMission/distanceTraveled'>;
    "SpaceMission/lunarEvaTime": NamedNode<'http://dbpedia.org/ontology/SpaceMission/lunarEvaTime'>;
    "SpaceMission/lunarOrbitTime": NamedNode<'http://dbpedia.org/ontology/SpaceMission/lunarOrbitTime'>;
    "SpaceMission/lunarSampleMass": NamedNode<'http://dbpedia.org/ontology/SpaceMission/lunarSampleMass'>;
    "SpaceMission/lunarSurfaceTime": NamedNode<'http://dbpedia.org/ontology/SpaceMission/lunarSurfaceTime'>;
    "SpaceMission/mass": NamedNode<'http://dbpedia.org/ontology/SpaceMission/mass'>;
    "SpaceMission/missionDuration": NamedNode<'http://dbpedia.org/ontology/SpaceMission/missionDuration'>;
    "SpaceMission/stationEvaDuration": NamedNode<'http://dbpedia.org/ontology/SpaceMission/stationEvaDuration'>;
    "SpaceMission/stationVisitDuration": NamedNode<'http://dbpedia.org/ontology/SpaceMission/stationVisitDuration'>;
    "SpaceMission": NamedNode<'http://dbpedia.org/ontology/SpaceMission'>;
    "SpaceShuttle/distance": NamedNode<'http://dbpedia.org/ontology/SpaceShuttle/distance'>;
    "SpaceShuttle/timeInSpace": NamedNode<'http://dbpedia.org/ontology/SpaceShuttle/timeInSpace'>;
    "SpaceShuttle": NamedNode<'http://dbpedia.org/ontology/SpaceShuttle'>;
    "SpaceStation/volume": NamedNode<'http://dbpedia.org/ontology/SpaceStation/volume'>;
    "SpaceStation": NamedNode<'http://dbpedia.org/ontology/SpaceStation'>;
    "Spacecraft/apoapsis": NamedNode<'http://dbpedia.org/ontology/Spacecraft/apoapsis'>;
    "Spacecraft/cargoFuel": NamedNode<'http://dbpedia.org/ontology/Spacecraft/cargoFuel'>;
    "Spacecraft/cargoGas": NamedNode<'http://dbpedia.org/ontology/Spacecraft/cargoGas'>;
    "Spacecraft/cargoWater": NamedNode<'http://dbpedia.org/ontology/Spacecraft/cargoWater'>;
    "Spacecraft/dockedTime": NamedNode<'http://dbpedia.org/ontology/Spacecraft/dockedTime'>;
    "Spacecraft/dryCargo": NamedNode<'http://dbpedia.org/ontology/Spacecraft/dryCargo'>;
    "Spacecraft/freeFlightTime": NamedNode<'http://dbpedia.org/ontology/Spacecraft/freeFlightTime'>;
    "Spacecraft/periapsis": NamedNode<'http://dbpedia.org/ontology/Spacecraft/periapsis'>;
    "Spacecraft/totalCargo": NamedNode<'http://dbpedia.org/ontology/Spacecraft/totalCargo'>;
    "Spacecraft/totalMass": NamedNode<'http://dbpedia.org/ontology/Spacecraft/totalMass'>;
    "Spacecraft": NamedNode<'http://dbpedia.org/ontology/Spacecraft'>;
    "Species": NamedNode<'http://dbpedia.org/ontology/Species'>;
    "SpeedSkater": NamedNode<'http://dbpedia.org/ontology/SpeedSkater'>;
    /** A group of sports teams that compete against each other in motorcycle speedway racing. */
    "SpeedwayLeague": NamedNode<'http://dbpedia.org/ontology/SpeedwayLeague'>;
    "SpeedwayRider": NamedNode<'http://dbpedia.org/ontology/SpeedwayRider'>;
    "SpeedwayTeam": NamedNode<'http://dbpedia.org/ontology/SpeedwayTeam'>;
    /** A sport is commonly defined as an organized, competitive, and skillful physical activity. */
    "Sport": NamedNode<'http://dbpedia.org/ontology/Sport'>;
    "SportCompetitionResult": NamedNode<'http://dbpedia.org/ontology/SportCompetitionResult'>;
    "SportFacility": NamedNode<'http://dbpedia.org/ontology/SportFacility'>;
    "SportsClub": NamedNode<'http://dbpedia.org/ontology/SportsClub'>;
    /** a event of competitive physical activity */
    "SportsEvent": NamedNode<'http://dbpedia.org/ontology/SportsEvent'>;
    /** A group of sports teams or individual athletes that compete against each other in a specific sport. */
    "SportsLeague": NamedNode<'http://dbpedia.org/ontology/SportsLeague'>;
    /** According to the french label sub Soccer, trainership could be meant. However, here a Sportsmanager is interpreted as a member of the board of a sporting club. */
    "SportsManager": NamedNode<'http://dbpedia.org/ontology/SportsManager'>;
    "SportsSeason": NamedNode<'http://dbpedia.org/ontology/SportsSeason'>;
    "SportsTeam": NamedNode<'http://dbpedia.org/ontology/SportsTeam'>;
    /** A member of an athletic team. */
    "SportsTeamMember": NamedNode<'http://dbpedia.org/ontology/SportsTeamMember'>;
    /** A season for a particular sports team (as opposed to the season for the entire league that the team is in) */
    "SportsTeamSeason": NamedNode<'http://dbpedia.org/ontology/SportsTeamSeason'>;
    "Spreadsheet": NamedNode<'http://dbpedia.org/ontology/Spreadsheet'>;
    "Square": NamedNode<'http://dbpedia.org/ontology/Square'>;
    "SquashPlayer": NamedNode<'http://dbpedia.org/ontology/SquashPlayer'>;
    "Stadium": NamedNode<'http://dbpedia.org/ontology/Stadium'>;
    /** a common specification */
    "Standard": NamedNode<'http://dbpedia.org/ontology/Standard'>;
    "Star": NamedNode<'http://dbpedia.org/ontology/Star'>;
    "StarCluster": NamedNode<'http://dbpedia.org/ontology/StarCluster'>;
    "State": NamedNode<'http://dbpedia.org/ontology/State'>;
    /** A Resolution describes a formal statement adopted by a meeting or convention. */
    "StatedResolution": NamedNode<'http://dbpedia.org/ontology/StatedResolution'>;
    /** Public transport station (eg. railway station, metro station, bus station). */
    "Station": NamedNode<'http://dbpedia.org/ontology/Station'>;
    "Statistic": NamedNode<'http://dbpedia.org/ontology/Statistic'>;
    /** A visual document that is not intended to be animated; equivalent to http://purl.org/dc/dcmitype/StillImage */
    "StillImage": NamedNode<'http://dbpedia.org/ontology/StillImage'>;
    /** Een stormvloed is de grootschalige overstroming van een kustgebied onder invloed van de op elkaar inwerkende krachten van wind, getij en water */
    "StormSurge": NamedNode<'http://dbpedia.org/ontology/StormSurge'>;
    "Stream/discharge": NamedNode<'http://dbpedia.org/ontology/Stream/discharge'>;
    "Stream/dischargeAverage": NamedNode<'http://dbpedia.org/ontology/Stream/dischargeAverage'>;
    "Stream/maximumDischarge": NamedNode<'http://dbpedia.org/ontology/Stream/maximumDischarge'>;
    "Stream/minimumDischarge": NamedNode<'http://dbpedia.org/ontology/Stream/minimumDischarge'>;
    "Stream/watershed": NamedNode<'http://dbpedia.org/ontology/Stream/watershed'>;
    /** a flowing body of water with a current, confined within a bed and stream banks */
    "Stream": NamedNode<'http://dbpedia.org/ontology/Stream'>;
    /** A Street is different from a Road in as far as the infrastructure aspect is much less important here. A Street is a social and architectural ensemble much more than the connection between two geographic points. */
    "Street": NamedNode<'http://dbpedia.org/ontology/Street'>;
    /** An administrative body governing a territorial unity on the lowest level, administering part of a municipality */
    "SubMunicipality": NamedNode<'http://dbpedia.org/ontology/SubMunicipality'>;
    "SumoWrestler": NamedNode<'http://dbpedia.org/ontology/SumoWrestler'>;
    "SupremeCourtOfTheUnitedStatesCase": NamedNode<'http://dbpedia.org/ontology/SupremeCourtOfTheUnitedStatesCase'>;
    "Surfer": NamedNode<'http://dbpedia.org/ontology/Surfer'>;
    "Surname": NamedNode<'http://dbpedia.org/ontology/Surname'>;
    "Swarm": NamedNode<'http://dbpedia.org/ontology/Swarm'>;
    /** a trained athlete who participates in swimming meets */
    "Swimmer": NamedNode<'http://dbpedia.org/ontology/Swimmer'>;
    /** A synagogue, sometimes spelt synagog, is a Jewish or Samaritan house of prayer. */
    "Synagogue": NamedNode<'http://dbpedia.org/ontology/Synagogue'>;
    /** a system of legislation, either national or international */
    "SystemOfLaw": NamedNode<'http://dbpedia.org/ontology/SystemOfLaw'>;
    /** Athlete who plays table tennis */
    "TableTennisPlayer": NamedNode<'http://dbpedia.org/ontology/TableTennisPlayer'>;
    "Tank": NamedNode<'http://dbpedia.org/ontology/Tank'>;
    "Tax": NamedNode<'http://dbpedia.org/ontology/Tax'>;
    /** a category within a classification system for Species */
    "Taxon": NamedNode<'http://dbpedia.org/ontology/Taxon'>;
    /** A member of an athletic team. */
    "TeamMember": NamedNode<'http://dbpedia.org/ontology/TeamMember'>;
    /** A team sport is commonly defined as a sport that is being played by competing teams */
    "TeamSport": NamedNode<'http://dbpedia.org/ontology/TeamSport'>;
    /** a person who directs the activities involved in making a television program. */
    "TelevisionDirector": NamedNode<'http://dbpedia.org/ontology/TelevisionDirector'>;
    /** A television episode is a part of serial television program. */
    "TelevisionEpisode": NamedNode<'http://dbpedia.org/ontology/TelevisionEpisode'>;
    "TelevisionHost": NamedNode<'http://dbpedia.org/ontology/TelevisionHost'>;
    "TelevisionPersonality": NamedNode<'http://dbpedia.org/ontology/TelevisionPersonality'>;
    "TelevisionSeason": NamedNode<'http://dbpedia.org/ontology/TelevisionSeason'>;
    "TelevisionShow": NamedNode<'http://dbpedia.org/ontology/TelevisionShow'>;
    /** A television station has usually one line up. For instance the television station WABC-TV (or ABC 7, Channel 7). Not to be confused with the broadcasting network ABC, which has many television stations. */
    "TelevisionStation": NamedNode<'http://dbpedia.org/ontology/TelevisionStation'>;
    "Temple": NamedNode<'http://dbpedia.org/ontology/Temple'>;
    /** A group of sports teams or person that compete against each other in tennis. */
    "TennisLeague": NamedNode<'http://dbpedia.org/ontology/TennisLeague'>;
    "TennisPlayer": NamedNode<'http://dbpedia.org/ontology/TennisPlayer'>;
    "TennisTournament": NamedNode<'http://dbpedia.org/ontology/TennisTournament'>;
    "Tenure": NamedNode<'http://dbpedia.org/ontology/Tenure'>;
    "TermOfOffice": NamedNode<'http://dbpedia.org/ontology/TermOfOffice'>;
    /** A territory may refer to a country subdivision, a non-sovereign geographic region. */
    "Territory": NamedNode<'http://dbpedia.org/ontology/Territory'>;
    /** A theater or theatre (also a playhouse) is a structure where theatrical works or plays are performed or other performances such as musical concerts may be produced. */
    "Theatre": NamedNode<'http://dbpedia.org/ontology/Theatre'>;
    /** A director in the theatre field who oversees and orchestrates the mounting of a theatre production. */
    "TheatreDirector": NamedNode<'http://dbpedia.org/ontology/TheatreDirector'>;
    /** Theological concepts, e.g. The apocalypse, Trinty, Stoicism */
    "TheologicalConcept": NamedNode<'http://dbpedia.org/ontology/TheologicalConcept'>;
    "TimePeriod": NamedNode<'http://dbpedia.org/ontology/TimePeriod'>;
    "TopLevelDomain": NamedNode<'http://dbpedia.org/ontology/TopLevelDomain'>;
    "TopicalConcept": NamedNode<'http://dbpedia.org/ontology/TopicalConcept'>;
    "Tournament": NamedNode<'http://dbpedia.org/ontology/Tournament'>;
    /** A Tower is a kind of structure (not necessarily a building) that is higher than the rest */
    "Tower": NamedNode<'http://dbpedia.org/ontology/Tower'>;
    /** a settlement ranging from a few hundred to several thousand (occasionally hundreds of thousands). The precise meaning varies between countries and is not always a matter of legal definition. Usually, a town is thought of as larger than a village but smaller than a city, though there are exceptions to this rule. */
    "Town": NamedNode<'http://dbpedia.org/ontology/Town'>;
    /** A list of music tracks, like on a CD */
    "TrackList": NamedNode<'http://dbpedia.org/ontology/TrackList'>;
    /** A trade union or labor union is an organization of workers who have banded together to achieve common goals such as better working conditions. */
    "TradeUnion": NamedNode<'http://dbpedia.org/ontology/TradeUnion'>;
    "Train": NamedNode<'http://dbpedia.org/ontology/Train'>;
    "TrainCarriage": NamedNode<'http://dbpedia.org/ontology/TrainCarriage'>;
    "Tram": NamedNode<'http://dbpedia.org/ontology/Tram'>;
    "TramStation": NamedNode<'http://dbpedia.org/ontology/TramStation'>;
    /** A mill driven by the tractive power of horses, donkeys or even people */
    "Treadmill": NamedNode<'http://dbpedia.org/ontology/Treadmill'>;
    "Treaty": NamedNode<'http://dbpedia.org/ontology/Treaty'>;
    /** A tunnel may be for foot or vehicular road traffic, for rail traffic, or for a canal. Some tunnels are aqueducts to supply water for consumption or for hydroelectric stations or are sewers (http://en.wikipedia.org/wiki/Tunnel). */
    "Tunnel": NamedNode<'http://dbpedia.org/ontology/Tunnel'>;
    /** a category within a classification system */
    "Type": NamedNode<'http://dbpedia.org/ontology/Type'>;
    /** An underground journal is, although over time there have always been publications forbidden by law, a phenomenon typical of countries occupied by the Germans during the Second World War. The writing in the underground press aims at stiffening a spirit of resistance against Nazi occupation. The distribution of underground journals had to be very secretive and was, therefore, very much dependant on illegal distribution circuits and the hazards of persecution by the occupant. */
    "UndergroundJournal": NamedNode<'http://dbpedia.org/ontology/UndergroundJournal'>;
    /** This class is meant to convey the notion of an amount work to be done. It is different from Activity in that it has a definite end and is being measured. */
    "UnitOfWork": NamedNode<'http://dbpedia.org/ontology/UnitOfWork'>;
    "University": NamedNode<'http://dbpedia.org/ontology/University'>;
    "Unknown": NamedNode<'http://dbpedia.org/ontology/Unknown'>;
    "Vaccine": NamedNode<'http://dbpedia.org/ontology/Vaccine'>;
    /** a depression with predominant extent in one direction */
    "Valley": NamedNode<'http://dbpedia.org/ontology/Valley'>;
    "Vein": NamedNode<'http://dbpedia.org/ontology/Vein'>;
    "Venue": NamedNode<'http://dbpedia.org/ontology/Venue'>;
    "Vicar": NamedNode<'http://dbpedia.org/ontology/Vicar'>;
    "VicePresident": NamedNode<'http://dbpedia.org/ontology/VicePresident'>;
    "VicePrimeMinister": NamedNode<'http://dbpedia.org/ontology/VicePrimeMinister'>;
    /** A video game is an electronic game that involves interaction with a user interface to generate visual feedback on a video device. */
    "VideoGame": NamedNode<'http://dbpedia.org/ontology/VideoGame'>;
    /** A group of sports teams or person that compete against each other in videogames. */
    "VideogamesLeague": NamedNode<'http://dbpedia.org/ontology/VideogamesLeague'>;
    /** Núcleo pequeno de poboación en que se divide unha parroquia, con poucos veciños e de carácter rural. */
    "Village": NamedNode<'http://dbpedia.org/ontology/Village'>;
    "Vodka": NamedNode<'http://dbpedia.org/ontology/Vodka'>;
    "VoiceActor": NamedNode<'http://dbpedia.org/ontology/VoiceActor'>;
    /** A volcano is currently subclass of naturalplace, but it might also be considered a mountain. */
    "Volcano": NamedNode<'http://dbpedia.org/ontology/Volcano'>;
    "VolleyballCoach": NamedNode<'http://dbpedia.org/ontology/VolleyballCoach'>;
    /** A group of sports teams that compete against each other in volleyball. */
    "VolleyballLeague": NamedNode<'http://dbpedia.org/ontology/VolleyballLeague'>;
    "VolleyballPlayer": NamedNode<'http://dbpedia.org/ontology/VolleyballPlayer'>;
    "WaterPoloPlayer": NamedNode<'http://dbpedia.org/ontology/WaterPoloPlayer'>;
    "WaterRide": NamedNode<'http://dbpedia.org/ontology/WaterRide'>;
    /** a construction designed to store larger quantities of water at a place of some elevation in order to keep pressure on the water provision system */
    "WaterTower": NamedNode<'http://dbpedia.org/ontology/WaterTower'>;
    /** A watermill is a structure that uses a water wheel or turbine to drive a mechanical process such as flour, lumber or textile production, or metal shaping (rolling, grinding or wire drawing) */
    "Watermill": NamedNode<'http://dbpedia.org/ontology/Watermill'>;
    "WaterwayTunnel": NamedNode<'http://dbpedia.org/ontology/WaterwayTunnel'>;
    "Weapon/diameter": NamedNode<'http://dbpedia.org/ontology/Weapon/diameter'>;
    "Weapon/height": NamedNode<'http://dbpedia.org/ontology/Weapon/height'>;
    "Weapon/length": NamedNode<'http://dbpedia.org/ontology/Weapon/length'>;
    "Weapon/weight": NamedNode<'http://dbpedia.org/ontology/Weapon/weight'>;
    "Weapon/width": NamedNode<'http://dbpedia.org/ontology/Weapon/width'>;
    "Weapon": NamedNode<'http://dbpedia.org/ontology/Weapon'>;
    "Website": NamedNode<'http://dbpedia.org/ontology/Website'>;
    "WikimediaTemplate": NamedNode<'http://dbpedia.org/ontology/WikimediaTemplate'>;
    /** A wind-driven turbine that adapts itself to wind direction and to wind-force. Is considered to be a class in its own, despite the wind as common factor with Windmill. */
    "WindMotor": NamedNode<'http://dbpedia.org/ontology/WindMotor'>;
    /** A windmill is a machine that converts the energy of wind into rotational energy by means of vanes called sails */
    "Windmill": NamedNode<'http://dbpedia.org/ontology/Windmill'>;
    "Wine": NamedNode<'http://dbpedia.org/ontology/Wine'>;
    "WineRegion": NamedNode<'http://dbpedia.org/ontology/WineRegion'>;
    "Winery": NamedNode<'http://dbpedia.org/ontology/Winery'>;
    "WinterSportPlayer": NamedNode<'http://dbpedia.org/ontology/WinterSportPlayer'>;
    "Woman": NamedNode<'http://dbpedia.org/ontology/Woman'>;
    "WomensTennisAssociationTournament": NamedNode<'http://dbpedia.org/ontology/WomensTennisAssociationTournament'>;
    "Work/runtime": NamedNode<'http://dbpedia.org/ontology/Work/runtime'>;
    "Work": NamedNode<'http://dbpedia.org/ontology/Work'>;
    /** A UNESCO World Heritage Site is a site (such as a forest, mountain, lake, desert, monument, building, complex, or city) that is on the list that is maintained by the international World Heritage Programme administered by the UNESCO World Heritage Committee, composed of 21 state parties which are elected by their General Assembly for a four-year term. A World Heritage Site is a place of either cultural or physical significance. */
    "WorldHeritageSite": NamedNode<'http://dbpedia.org/ontology/WorldHeritageSite'>;
    "Wrestler": NamedNode<'http://dbpedia.org/ontology/Wrestler'>;
    "WrestlingEvent": NamedNode<'http://dbpedia.org/ontology/WrestlingEvent'>;
    "Writer": NamedNode<'http://dbpedia.org/ontology/Writer'>;
    /** Ein geschriebenes Erzeugnis ist jede Art von Text der geschrieben wurde um ihn zu lesen (z.B. Bücher, Zeitungen, Artikel). */
    "WrittenWork": NamedNode<'http://dbpedia.org/ontology/WrittenWork'>;
    "Year": NamedNode<'http://dbpedia.org/ontology/Year'>;
    "YearInSpaceflight": NamedNode<'http://dbpedia.org/ontology/YearInSpaceflight'>;
    "Zoo": NamedNode<'http://dbpedia.org/ontology/Zoo'>;
    "aSide": NamedNode<'http://dbpedia.org/ontology/aSide'>;
    "abbeychurchBlessing": NamedNode<'http://dbpedia.org/ontology/abbeychurchBlessing'>;
    "abbeychurchBlessingCharge": NamedNode<'http://dbpedia.org/ontology/abbeychurchBlessingCharge'>;
    "abbreviation": NamedNode<'http://dbpedia.org/ontology/abbreviation'>;
    "ableToGrind": NamedNode<'http://dbpedia.org/ontology/ableToGrind'>;
    "absoluteMagnitude": NamedNode<'http://dbpedia.org/ontology/absoluteMagnitude'>;
    /** Number of abstentions from the vote */
    "abstentions": NamedNode<'http://dbpedia.org/ontology/abstentions'>;
    /** Reserved for DBpedia. */
    "abstract": NamedNode<'http://dbpedia.org/ontology/abstract'>;
    "academicAdvisor": NamedNode<'http://dbpedia.org/ontology/academicAdvisor'>;
    /** An academic discipline, or field of study, is a branch of knowledge that is taught and researched at the college or university level. Disciplines are defined (in part), and recognized by the academic journals in which research is published, and the learned societies and academic departments or faculties to which their practitioners belong. */
    "academicDiscipline": NamedNode<'http://dbpedia.org/ontology/academicDiscipline'>;
    "academyAward": NamedNode<'http://dbpedia.org/ontology/academyAward'>;
    "acceleration": NamedNode<'http://dbpedia.org/ontology/acceleration'>;
    "access": NamedNode<'http://dbpedia.org/ontology/access'>;
    "accessDate": NamedNode<'http://dbpedia.org/ontology/accessDate'>;
    "achievement": NamedNode<'http://dbpedia.org/ontology/achievement'>;
    "acquirementDate": NamedNode<'http://dbpedia.org/ontology/acquirementDate'>;
    /** most recent average ACT scores */
    "actScore": NamedNode<'http://dbpedia.org/ontology/actScore'>;
    "actingHeadteacher": NamedNode<'http://dbpedia.org/ontology/actingHeadteacher'>;
    "activeCases": NamedNode<'http://dbpedia.org/ontology/activeCases'>;
    /** Also called "floruit". Use this if the active years are in one field that can't be split. Else use activeYearsStartYear and activeYearsEndYear */
    "activeYears": NamedNode<'http://dbpedia.org/ontology/activeYears'>;
    "activeYearsEndDate": NamedNode<'http://dbpedia.org/ontology/activeYearsEndDate'>;
    "activeYearsEndDateMgr": NamedNode<'http://dbpedia.org/ontology/activeYearsEndDateMgr'>;
    "activeYearsEndYear": NamedNode<'http://dbpedia.org/ontology/activeYearsEndYear'>;
    "activeYearsEndYearMgr": NamedNode<'http://dbpedia.org/ontology/activeYearsEndYearMgr'>;
    "activeYearsStartDate": NamedNode<'http://dbpedia.org/ontology/activeYearsStartDate'>;
    "activeYearsStartDateMgr": NamedNode<'http://dbpedia.org/ontology/activeYearsStartDateMgr'>;
    "activeYearsStartYear": NamedNode<'http://dbpedia.org/ontology/activeYearsStartYear'>;
    "activeYearsStartYearMgr": NamedNode<'http://dbpedia.org/ontology/activeYearsStartYearMgr'>;
    "activity": NamedNode<'http://dbpedia.org/ontology/activity'>;
    "added": NamedNode<'http://dbpedia.org/ontology/added'>;
    /** Address of something as literal. Usually Building, but we also use it for the address of a Region's or Settlement's government */
    "address": NamedNode<'http://dbpedia.org/ontology/address'>;
    /** A building, organisation or other thing that is located in the road. */
    "addressInRoad": NamedNode<'http://dbpedia.org/ontology/addressInRoad'>;
    "adjacentSettlement": NamedNode<'http://dbpedia.org/ontology/adjacentSettlement'>;
    "administrativeCenter": NamedNode<'http://dbpedia.org/ontology/administrativeCenter'>;
    "administrativeCollectivity": NamedNode<'http://dbpedia.org/ontology/administrativeCollectivity'>;
    "administrativeDistrict": NamedNode<'http://dbpedia.org/ontology/administrativeDistrict'>;
    /** city where stand the administrative power */
    "administrativeHeadCity": NamedNode<'http://dbpedia.org/ontology/administrativeHeadCity'>;
    "administrativeStatus": NamedNode<'http://dbpedia.org/ontology/administrativeStatus'>;
    "administrator": NamedNode<'http://dbpedia.org/ontology/administrator'>;
    "afdbId": NamedNode<'http://dbpedia.org/ontology/afdbId'>;
    "affair": NamedNode<'http://dbpedia.org/ontology/affair'>;
    "affiliate": NamedNode<'http://dbpedia.org/ontology/affiliate'>;
    "affiliation": NamedNode<'http://dbpedia.org/ontology/affiliation'>;
    "afiAward": NamedNode<'http://dbpedia.org/ontology/afiAward'>;
    "age": NamedNode<'http://dbpedia.org/ontology/age'>;
    /** Age range of students admitted in a School, MilitaryUnit, etc */
    "ageRange": NamedNode<'http://dbpedia.org/ontology/ageRange'>;
    "agency": NamedNode<'http://dbpedia.org/ontology/agency'>;
    /** Agency station code (used on tickets/reservations, etc.). */
    "agencyStationCode": NamedNode<'http://dbpedia.org/ontology/agencyStationCode'>;
    "agglomeration": NamedNode<'http://dbpedia.org/ontology/agglomeration'>;
    "agglomerationArea": NamedNode<'http://dbpedia.org/ontology/agglomerationArea'>;
    "agglomerationDemographics": NamedNode<'http://dbpedia.org/ontology/agglomerationDemographics'>;
    "agglomerationPopulation": NamedNode<'http://dbpedia.org/ontology/agglomerationPopulation'>;
    "agglomerationPopulationTotal": NamedNode<'http://dbpedia.org/ontology/agglomerationPopulationTotal'>;
    "agglomerationPopulationYear": NamedNode<'http://dbpedia.org/ontology/agglomerationPopulationYear'>;
    "aggregation": NamedNode<'http://dbpedia.org/ontology/aggregation'>;
    "airDate": NamedNode<'http://dbpedia.org/ontology/airDate'>;
    "aircraftAttack": NamedNode<'http://dbpedia.org/ontology/aircraftAttack'>;
    "aircraftBomber": NamedNode<'http://dbpedia.org/ontology/aircraftBomber'>;
    "aircraftElectronic": NamedNode<'http://dbpedia.org/ontology/aircraftElectronic'>;
    "aircraftFighter": NamedNode<'http://dbpedia.org/ontology/aircraftFighter'>;
    "aircraftHelicopter": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopter'>;
    "aircraftHelicopterAttack": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopterAttack'>;
    "aircraftHelicopterCargo": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopterCargo'>;
    "aircraftHelicopterMultirole": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopterMultirole'>;
    "aircraftHelicopterObservation": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopterObservation'>;
    "aircraftHelicopterTransport": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopterTransport'>;
    "aircraftHelicopterUtility": NamedNode<'http://dbpedia.org/ontology/aircraftHelicopterUtility'>;
    "aircraftInterceptor": NamedNode<'http://dbpedia.org/ontology/aircraftInterceptor'>;
    "aircraftPatrol": NamedNode<'http://dbpedia.org/ontology/aircraftPatrol'>;
    "aircraftRecon": NamedNode<'http://dbpedia.org/ontology/aircraftRecon'>;
    "aircraftTrainer": NamedNode<'http://dbpedia.org/ontology/aircraftTrainer'>;
    "aircraftTransport": NamedNode<'http://dbpedia.org/ontology/aircraftTransport'>;
    "aircraftType": NamedNode<'http://dbpedia.org/ontology/aircraftType'>;
    "aircraftUser": NamedNode<'http://dbpedia.org/ontology/aircraftUser'>;
    "airportUsing": NamedNode<'http://dbpedia.org/ontology/airportUsing'>;
    "aitaCode": NamedNode<'http://dbpedia.org/ontology/aitaCode'>;
    /** reflection coefficient */
    "albedo": NamedNode<'http://dbpedia.org/ontology/albedo'>;
    "album": NamedNode<'http://dbpedia.org/ontology/album'>;
    "albumRuntime": NamedNode<'http://dbpedia.org/ontology/albumRuntime'>;
    "alias": NamedNode<'http://dbpedia.org/ontology/alias'>;
    "allcinemaId": NamedNode<'http://dbpedia.org/ontology/allcinemaId'>;
    /** The country or other power the person served. Multiple countries may be indicated together with the corresponding dates. This field should not be used to indicate a particular service branch, which is better indicated by the branch field. */
    "allegiance": NamedNode<'http://dbpedia.org/ontology/allegiance'>;
    "alliance": NamedNode<'http://dbpedia.org/ontology/alliance'>;
    /** schools that they attended */
    "almaMater": NamedNode<'http://dbpedia.org/ontology/almaMater'>;
    "alongside": NamedNode<'http://dbpedia.org/ontology/alongside'>;
    /** the Alps group to which the mountain belongs, according to the SOIUSA classification */
    "alpsGroup": NamedNode<'http://dbpedia.org/ontology/alpsGroup'>;
    /** the Alps main part to which the mountain belongs, according to the SOIUSA classification */
    "alpsMainPart": NamedNode<'http://dbpedia.org/ontology/alpsMainPart'>;
    /** the Alps major sector to which the mountain belongs, according to the SOIUSA classification */
    "alpsMajorSector": NamedNode<'http://dbpedia.org/ontology/alpsMajorSector'>;
    /** the Alps section to which the mountain belongs, according to the SOIUSA classification */
    "alpsSection": NamedNode<'http://dbpedia.org/ontology/alpsSection'>;
    /** the Alps SOIUSA code corresponding to the mountain, according to the SOIUSA classification */
    "alpsSoiusaCode": NamedNode<'http://dbpedia.org/ontology/alpsSoiusaCode'>;
    /** the Alps subgroup to which the mountain belongs, according to the SOIUSA classification */
    "alpsSubgroup": NamedNode<'http://dbpedia.org/ontology/alpsSubgroup'>;
    /** the Alps subsection to which the mountain belongs, according to the SOIUSA classification */
    "alpsSubsection": NamedNode<'http://dbpedia.org/ontology/alpsSubsection'>;
    /** the Alps supergroup to which the mountain belongs, according to the SOIUSA classification */
    "alpsSupergroup": NamedNode<'http://dbpedia.org/ontology/alpsSupergroup'>;
    /** Alternative naming of anything not being a Person (for which case foaf:nick should be used). */
    "alternativeName": NamedNode<'http://dbpedia.org/ontology/alternativeName'>;
    /** The alternative title attributed to a work */
    "alternativeTitle": NamedNode<'http://dbpedia.org/ontology/alternativeTitle'>;
    "altitude": NamedNode<'http://dbpedia.org/ontology/altitude'>;
    "alumni": NamedNode<'http://dbpedia.org/ontology/alumni'>;
    "amateurDefeat": NamedNode<'http://dbpedia.org/ontology/amateurDefeat'>;
    "amateurFight": NamedNode<'http://dbpedia.org/ontology/amateurFight'>;
    "amateurKo": NamedNode<'http://dbpedia.org/ontology/amateurKo'>;
    "amateurNoContest": NamedNode<'http://dbpedia.org/ontology/amateurNoContest'>;
    "amateurTeam": NamedNode<'http://dbpedia.org/ontology/amateurTeam'>;
    "amateurTie": NamedNode<'http://dbpedia.org/ontology/amateurTie'>;
    "amateurTitle": NamedNode<'http://dbpedia.org/ontology/amateurTitle'>;
    "amateurVictory": NamedNode<'http://dbpedia.org/ontology/amateurVictory'>;
    "amateurYear": NamedNode<'http://dbpedia.org/ontology/amateurYear'>;
    "americanComedyAward": NamedNode<'http://dbpedia.org/ontology/americanComedyAward'>;
    "amgid": NamedNode<'http://dbpedia.org/ontology/amgid'>;
    "amsterdamCode": NamedNode<'http://dbpedia.org/ontology/amsterdamCode'>;
    "analogChannel": NamedNode<'http://dbpedia.org/ontology/analogChannel'>;
    "animal": NamedNode<'http://dbpedia.org/ontology/animal'>;
    "animator": NamedNode<'http://dbpedia.org/ontology/animator'>;
    "anniversary": NamedNode<'http://dbpedia.org/ontology/anniversary'>;
    "announcedFrom": NamedNode<'http://dbpedia.org/ontology/announcedFrom'>;
    "annualTemperature": NamedNode<'http://dbpedia.org/ontology/annualTemperature'>;
    /** Official song (anthem) of a PopulatedPlace, SportsTeam, School or other */
    "anthem": NamedNode<'http://dbpedia.org/ontology/anthem'>;
    "aoCloassification": NamedNode<'http://dbpedia.org/ontology/aoCloassification'>;
    "apcPresident": NamedNode<'http://dbpedia.org/ontology/apcPresident'>;
    "apoapsis": NamedNode<'http://dbpedia.org/ontology/apoapsis'>;
    "apofocus": NamedNode<'http://dbpedia.org/ontology/apofocus'>;
    "apparentMagnitude": NamedNode<'http://dbpedia.org/ontology/apparentMagnitude'>;
    "appearance": NamedNode<'http://dbpedia.org/ontology/appearance'>;
    "appearancesInLeague": NamedNode<'http://dbpedia.org/ontology/appearancesInLeague'>;
    "appearancesInNationalTeam": NamedNode<'http://dbpedia.org/ontology/appearancesInNationalTeam'>;
    "appointer": NamedNode<'http://dbpedia.org/ontology/appointer'>;
    "apprehended": NamedNode<'http://dbpedia.org/ontology/apprehended'>;
    "approach": NamedNode<'http://dbpedia.org/ontology/approach'>;
    /** Date of approval by lower parliament (House of Commons, Chambre des Députés, Bundestag, Tweede Kamer etc.). */
    "approvedByLowerParliament": NamedNode<'http://dbpedia.org/ontology/approvedByLowerParliament'>;
    /** Date of approval by upper parliament (House of Lords, Sénat, Eerste Kamer etc.). */
    "approvedByUpperParliament": NamedNode<'http://dbpedia.org/ontology/approvedByUpperParliament'>;
    /** Approximate calories per serving. */
    "approximateCalories": NamedNode<'http://dbpedia.org/ontology/approximateCalories'>;
    "apskritis": NamedNode<'http://dbpedia.org/ontology/apskritis'>;
    "archipelago": NamedNode<'http://dbpedia.org/ontology/archipelago'>;
    "architect": NamedNode<'http://dbpedia.org/ontology/architect'>;
    "architectualBureau": NamedNode<'http://dbpedia.org/ontology/architectualBureau'>;
    "architecturalMovement": NamedNode<'http://dbpedia.org/ontology/architecturalMovement'>;
    "architecturalStyle": NamedNode<'http://dbpedia.org/ontology/architecturalStyle'>;
    /** The area of the thing in square meters. */
    "area": NamedNode<'http://dbpedia.org/ontology/area'>;
    /** Area code for telephone numbers. Use this not phonePrefix */
    "areaCode": NamedNode<'http://dbpedia.org/ontology/areaCode'>;
    "areaDate": NamedNode<'http://dbpedia.org/ontology/areaDate'>;
    "areaLand": NamedNode<'http://dbpedia.org/ontology/areaLand'>;
    "areaMetro": NamedNode<'http://dbpedia.org/ontology/areaMetro'>;
    "areaOfCatchment": NamedNode<'http://dbpedia.org/ontology/areaOfCatchment'>;
    "areaOfCatchmentQuote": NamedNode<'http://dbpedia.org/ontology/areaOfCatchmentQuote'>;
    "areaOfSearch": NamedNode<'http://dbpedia.org/ontology/areaOfSearch'>;
    "areaQuote": NamedNode<'http://dbpedia.org/ontology/areaQuote'>;
    "areaRank": NamedNode<'http://dbpedia.org/ontology/areaRank'>;
    "areaRural": NamedNode<'http://dbpedia.org/ontology/areaRural'>;
    "areaTotal": NamedNode<'http://dbpedia.org/ontology/areaTotal'>;
    "areaTotalRanking": NamedNode<'http://dbpedia.org/ontology/areaTotalRanking'>;
    "areaUrban": NamedNode<'http://dbpedia.org/ontology/areaUrban'>;
    "areaWater": NamedNode<'http://dbpedia.org/ontology/areaWater'>;
    "argueDate": NamedNode<'http://dbpedia.org/ontology/argueDate'>;
    "arielAward": NamedNode<'http://dbpedia.org/ontology/arielAward'>;
    "arm": NamedNode<'http://dbpedia.org/ontology/arm'>;
    /** Ένας στρατός αποτελεί τις επίγειες ένοπλες δυνάμεις ενός έθνους */
    "army": NamedNode<'http://dbpedia.org/ontology/army'>;
    "arrestDate": NamedNode<'http://dbpedia.org/ontology/arrestDate'>;
    "arrondissement": NamedNode<'http://dbpedia.org/ontology/arrondissement'>;
    /** An influential, wealthy person who supported an artist, craftsman, a scholar or a noble.. See also */
    "artPatron": NamedNode<'http://dbpedia.org/ontology/artPatron'>;
    "artery": NamedNode<'http://dbpedia.org/ontology/artery'>;
    "artificialSnowArea": NamedNode<'http://dbpedia.org/ontology/artificialSnowArea'>;
    /** The performer or creator of the musical work. */
    "artist": NamedNode<'http://dbpedia.org/ontology/artist'>;
    "artisticFunction": NamedNode<'http://dbpedia.org/ontology/artisticFunction'>;
    "asWikiText": NamedNode<'http://dbpedia.org/ontology/asWikiText'>;
    /** Ascent of a celestial body, aircraft, etc. For person who ascended a mountain, use firstAscent */
    "ascent": NamedNode<'http://dbpedia.org/ontology/ascent'>;
    "asiaChampionship": NamedNode<'http://dbpedia.org/ontology/asiaChampionship'>;
    "aspectRatio": NamedNode<'http://dbpedia.org/ontology/aspectRatio'>;
    "assembly": NamedNode<'http://dbpedia.org/ontology/assembly'>;
    "assetUnderManagement": NamedNode<'http://dbpedia.org/ontology/assetUnderManagement'>;
    /** Assets and liabilities are part of a companis balance sheet. In financial accounting, assets are economic resources. Anything tangible or intangible that is capable of being owned or controlled to produce value and that is held to have positive economic value is considered an asset. */
    "assets": NamedNode<'http://dbpedia.org/ontology/assets'>;
    "assistantPrincipal": NamedNode<'http://dbpedia.org/ontology/assistantPrincipal'>;
    "associate": NamedNode<'http://dbpedia.org/ontology/associate'>;
    "associateEditor": NamedNode<'http://dbpedia.org/ontology/associateEditor'>;
    "associateStar": NamedNode<'http://dbpedia.org/ontology/associateStar'>;
    "associatedAct": NamedNode<'http://dbpedia.org/ontology/associatedAct'>;
    "associatedBand": NamedNode<'http://dbpedia.org/ontology/associatedBand'>;
    "associatedMusicalArtist": NamedNode<'http://dbpedia.org/ontology/associatedMusicalArtist'>;
    "associatedRocket": NamedNode<'http://dbpedia.org/ontology/associatedRocket'>;
    "associationOfLocalGovernment": NamedNode<'http://dbpedia.org/ontology/associationOfLocalGovernment'>;
    "astrologicalSign": NamedNode<'http://dbpedia.org/ontology/astrologicalSign'>;
    /** Page # where the referenced resource is to be found in the source document */
    "atPage": NamedNode<'http://dbpedia.org/ontology/atPage'>;
    /** Row # where the referenced resource is to be found in the source file */
    "atRowNumber": NamedNode<'http://dbpedia.org/ontology/atRowNumber'>;
    "atcCode": NamedNode<'http://dbpedia.org/ontology/atcCode'>;
    "atcPrefix": NamedNode<'http://dbpedia.org/ontology/atcPrefix'>;
    "atcSuffix": NamedNode<'http://dbpedia.org/ontology/atcSuffix'>;
    "atcSupplemental": NamedNode<'http://dbpedia.org/ontology/atcSupplemental'>;
    "athletics": NamedNode<'http://dbpedia.org/ontology/athletics'>;
    "athleticsDiscipline": NamedNode<'http://dbpedia.org/ontology/athleticsDiscipline'>;
    /** Is eard is uimhir adamhach (Z) adaimh ann ná líon na bprótón i núicléas an adaimh sin */
    "atomicNumber": NamedNode<'http://dbpedia.org/ontology/atomicNumber'>;
    /** Public attorney */
    "attorneyGeneral": NamedNode<'http://dbpedia.org/ontology/attorneyGeneral'>;
    "aunt": NamedNode<'http://dbpedia.org/ontology/aunt'>;
    "australiaOpenDouble": NamedNode<'http://dbpedia.org/ontology/australiaOpenDouble'>;
    "australiaOpenMixed": NamedNode<'http://dbpedia.org/ontology/australiaOpenMixed'>;
    "australiaOpenSingle": NamedNode<'http://dbpedia.org/ontology/australiaOpenSingle'>;
    "author": NamedNode<'http://dbpedia.org/ontology/author'>;
    "authority": NamedNode<'http://dbpedia.org/ontology/authority'>;
    "authorityMandate": NamedNode<'http://dbpedia.org/ontology/authorityMandate'>;
    "authorityTitle": NamedNode<'http://dbpedia.org/ontology/authorityTitle'>;
    "automobileModel": NamedNode<'http://dbpedia.org/ontology/automobileModel'>;
    "automobilePlatform": NamedNode<'http://dbpedia.org/ontology/automobilePlatform'>;
    "autonomy": NamedNode<'http://dbpedia.org/ontology/autonomy'>;
    /** Chipkarte für automatische Bezahlsysteme im Personenverkehr die an diesem Bahnhof benutzt werden kann. */
    "availableSmartCard": NamedNode<'http://dbpedia.org/ontology/availableSmartCard'>;
    "average": NamedNode<'http://dbpedia.org/ontology/average'>;
    "averageAnnualGeneration": NamedNode<'http://dbpedia.org/ontology/averageAnnualGeneration'>;
    "averageClassSize": NamedNode<'http://dbpedia.org/ontology/averageClassSize'>;
    /** Source of the value can be declare by . */
    "averageDepth": NamedNode<'http://dbpedia.org/ontology/averageDepth'>;
    /** Source of the  value. */
    "averageDepthQuote": NamedNode<'http://dbpedia.org/ontology/averageDepthQuote'>;
    /** The average speed of a thing. */
    "averageSpeed": NamedNode<'http://dbpedia.org/ontology/averageSpeed'>;
    "avifaunaPopulation": NamedNode<'http://dbpedia.org/ontology/avifaunaPopulation'>;
    /** Award won by a Person, Musical or other Work, RaceHorse, Building, etc */
    "award": NamedNode<'http://dbpedia.org/ontology/award'>;
    /** Award a person has received (literal). Compare to award (ObjectProperty) */
    "awardName": NamedNode<'http://dbpedia.org/ontology/awardName'>;
    /** A colour represented by its hex code (e.g.: #FF0000 or #40E0D0). */
    "awayColourHexCode": NamedNode<'http://dbpedia.org/ontology/awayColourHexCode'>;
    "bSide": NamedNode<'http://dbpedia.org/ontology/bSide'>;
    "background": NamedNode<'http://dbpedia.org/ontology/background'>;
    "backhand": NamedNode<'http://dbpedia.org/ontology/backhand'>;
    "badGuy": NamedNode<'http://dbpedia.org/ontology/badGuy'>;
    "baftaAward": NamedNode<'http://dbpedia.org/ontology/baftaAward'>;
    "band": NamedNode<'http://dbpedia.org/ontology/band'>;
    /** A member of the band. */
    "bandMember": NamedNode<'http://dbpedia.org/ontology/bandMember'>;
    "barPassRate": NamedNode<'http://dbpedia.org/ontology/barPassRate'>;
    "barangays": NamedNode<'http://dbpedia.org/ontology/barangays'>;
    "basedOn": NamedNode<'http://dbpedia.org/ontology/basedOn'>;
    "battery": NamedNode<'http://dbpedia.org/ontology/battery'>;
    "battingSide": NamedNode<'http://dbpedia.org/ontology/battingSide'>;
    "battle": NamedNode<'http://dbpedia.org/ontology/battle'>;
    "battleHonours": NamedNode<'http://dbpedia.org/ontology/battleHonours'>;
    "bbr": NamedNode<'http://dbpedia.org/ontology/bbr'>;
    "beatifiedBy": NamedNode<'http://dbpedia.org/ontology/beatifiedBy'>;
    "beatifiedDate": NamedNode<'http://dbpedia.org/ontology/beatifiedDate'>;
    "beatifiedPlace": NamedNode<'http://dbpedia.org/ontology/beatifiedPlace'>;
    "bedCount": NamedNode<'http://dbpedia.org/ontology/bedCount'>;
    "believers": NamedNode<'http://dbpedia.org/ontology/believers'>;
    "beltwayCity": NamedNode<'http://dbpedia.org/ontology/beltwayCity'>;
    "bestFinish": NamedNode<'http://dbpedia.org/ontology/bestFinish'>;
    "bestLap": NamedNode<'http://dbpedia.org/ontology/bestLap'>;
    "bestRankDouble": NamedNode<'http://dbpedia.org/ontology/bestRankDouble'>;
    "bestRankSingle": NamedNode<'http://dbpedia.org/ontology/bestRankSingle'>;
    "bestWsopRank": NamedNode<'http://dbpedia.org/ontology/bestWsopRank'>;
    "bestYearWsop": NamedNode<'http://dbpedia.org/ontology/bestYearWsop'>;
    "bgafdId": NamedNode<'http://dbpedia.org/ontology/bgafdId'>;
    /** BIBSYS is a supplier of library and information systems for all Norwegian university Libraries, the National Library of Norway, college libraries, and a number of research libraries and institutions. */
    "bibsysId": NamedNode<'http://dbpedia.org/ontology/bibsysId'>;
    /** Information on station's bicycle facilities. */
    "bicycleInformation": NamedNode<'http://dbpedia.org/ontology/bicycleInformation'>;
    "bigPoolRecord": NamedNode<'http://dbpedia.org/ontology/bigPoolRecord'>;
    "biggestCity": NamedNode<'http://dbpedia.org/ontology/biggestCity'>;
    "billed": NamedNode<'http://dbpedia.org/ontology/billed'>;
    "binomial": NamedNode<'http://dbpedia.org/ontology/binomial'>;
    "binomialAuthority": NamedNode<'http://dbpedia.org/ontology/binomialAuthority'>;
    /** "The rate and extent to which the active ingredient or active moiety is absorbed from a drug product and becomes available at the site of action. For drug products that are not intended to be absorbed into the bloodstream, bioavailability may be assessed by measurements intended to reflect the rate and extent to which the active ingredient or active moiety becomes available at the site of action (21CFR320.1)." */
    "bioavailability": NamedNode<'http://dbpedia.org/ontology/bioavailability'>;
    "bioclimate": NamedNode<'http://dbpedia.org/ontology/bioclimate'>;
    "biome": NamedNode<'http://dbpedia.org/ontology/biome'>;
    /** Τα πτηνά είναι ζώα ομοιόθερμα σπονδυλωτά, που στη συντριπτική πλειονότητα τους μπορούν να πετούν με τις πτέρυγες ή φτερούγες τους. */
    "bird": NamedNode<'http://dbpedia.org/ontology/bird'>;
    "birthDate": NamedNode<'http://dbpedia.org/ontology/birthDate'>;
    "birthName": NamedNode<'http://dbpedia.org/ontology/birthName'>;
    /** where the person was born */
    "birthPlace": NamedNode<'http://dbpedia.org/ontology/birthPlace'>;
    "birthSign": NamedNode<'http://dbpedia.org/ontology/birthSign'>;
    "birthYear": NamedNode<'http://dbpedia.org/ontology/birthYear'>;
    /** A bishopric (diocese or episcopal see) is a district under the supervision of a bishop. It is divided into parishes. Compare with eparchy */
    "bishopric": NamedNode<'http://dbpedia.org/ontology/bishopric'>;
    "blackLongDistancePisteNumber": NamedNode<'http://dbpedia.org/ontology/blackLongDistancePisteNumber'>;
    "blackSkiPisteNumber": NamedNode<'http://dbpedia.org/ontology/blackSkiPisteNumber'>;
    /** Coat of arms (heraldic image) or emblem */
    "blazon": NamedNode<'http://dbpedia.org/ontology/blazon'>;
    "blazonCaption": NamedNode<'http://dbpedia.org/ontology/blazonCaption'>;
    "blazonLink": NamedNode<'http://dbpedia.org/ontology/blazonLink'>;
    "blazonRatio": NamedNode<'http://dbpedia.org/ontology/blazonRatio'>;
    "block": NamedNode<'http://dbpedia.org/ontology/block'>;
    "blockAlloy": NamedNode<'http://dbpedia.org/ontology/blockAlloy'>;
    "bloodGroup": NamedNode<'http://dbpedia.org/ontology/bloodGroup'>;
    "bloodType": NamedNode<'http://dbpedia.org/ontology/bloodType'>;
    "blueLongDistancePisteNumber": NamedNode<'http://dbpedia.org/ontology/blueLongDistancePisteNumber'>;
    "blueSkiPisteNumber": NamedNode<'http://dbpedia.org/ontology/blueSkiPisteNumber'>;
    /** Authority data of people listed in the general catalogue of the National Library of France */
    "bnfId": NamedNode<'http://dbpedia.org/ontology/bnfId'>;
    "board": NamedNode<'http://dbpedia.org/ontology/board'>;
    "bodyDiscovered": NamedNode<'http://dbpedia.org/ontology/bodyDiscovered'>;
    "bodyStyle": NamedNode<'http://dbpedia.org/ontology/bodyStyle'>;
    "boiler": NamedNode<'http://dbpedia.org/ontology/boiler'>;
    "boilerPressure": NamedNode<'http://dbpedia.org/ontology/boilerPressure'>;
    "boilingPoint": NamedNode<'http://dbpedia.org/ontology/boilingPoint'>;
    "book": NamedNode<'http://dbpedia.org/ontology/book'>;
    "booster": NamedNode<'http://dbpedia.org/ontology/booster'>;
    "border": NamedNode<'http://dbpedia.org/ontology/border'>;
    "borough": NamedNode<'http://dbpedia.org/ontology/borough'>;
    "bourgmestre": NamedNode<'http://dbpedia.org/ontology/bourgmestre'>;
    "bowlRecord": NamedNode<'http://dbpedia.org/ontology/bowlRecord'>;
    "bowlingSide": NamedNode<'http://dbpedia.org/ontology/bowlingSide'>;
    "boxerCategory": NamedNode<'http://dbpedia.org/ontology/boxerCategory'>;
    "boxerStyle": NamedNode<'http://dbpedia.org/ontology/boxerStyle'>;
    /** Dutch project with material for 40,000 digitized biographies, including former colonies of the Netherlands. */
    "bpnId": NamedNode<'http://dbpedia.org/ontology/bpnId'>;
    "brainInfoNumber": NamedNode<'http://dbpedia.org/ontology/brainInfoNumber'>;
    "brainInfoType": NamedNode<'http://dbpedia.org/ontology/brainInfoType'>;
    "branchFrom": NamedNode<'http://dbpedia.org/ontology/branchFrom'>;
    "branchTo": NamedNode<'http://dbpedia.org/ontology/branchTo'>;
    "brand": NamedNode<'http://dbpedia.org/ontology/brand'>;
    "breeder": NamedNode<'http://dbpedia.org/ontology/breeder'>;
    /** Type of vehicles the bridge carries. */
    "bridgeCarries": NamedNode<'http://dbpedia.org/ontology/bridgeCarries'>;
    "brinCode": NamedNode<'http://dbpedia.org/ontology/brinCode'>;
    "britishComedyAwards": NamedNode<'http://dbpedia.org/ontology/britishComedyAwards'>;
    "britishOpen": NamedNode<'http://dbpedia.org/ontology/britishOpen'>;
    "britishWins": NamedNode<'http://dbpedia.org/ontology/britishWins'>;
    "broadcastArea": NamedNode<'http://dbpedia.org/ontology/broadcastArea'>;
    /** Die Sendergruppe zu dem der Rundfunkveranstalter gehört. */
    "broadcastNetwork": NamedNode<'http://dbpedia.org/ontology/broadcastNetwork'>;
    "broadcastRepeater": NamedNode<'http://dbpedia.org/ontology/broadcastRepeater'>;
    "broadcastStationClass": NamedNode<'http://dbpedia.org/ontology/broadcastStationClass'>;
    "broadcastTranslator": NamedNode<'http://dbpedia.org/ontology/broadcastTranslator'>;
    "bronzeMedalDouble": NamedNode<'http://dbpedia.org/ontology/bronzeMedalDouble'>;
    "bronzeMedalMixed": NamedNode<'http://dbpedia.org/ontology/bronzeMedalMixed'>;
    "bronzeMedalSingle": NamedNode<'http://dbpedia.org/ontology/bronzeMedalSingle'>;
    "bronzeMedalist": NamedNode<'http://dbpedia.org/ontology/bronzeMedalist'>;
    "brother": NamedNode<'http://dbpedia.org/ontology/brother'>;
    "budget": NamedNode<'http://dbpedia.org/ontology/budget'>;
    "budgetYear": NamedNode<'http://dbpedia.org/ontology/budgetYear'>;
    "builder": NamedNode<'http://dbpedia.org/ontology/builder'>;
    "building": NamedNode<'http://dbpedia.org/ontology/building'>;
    /** Building end date of an ArchitecturalStructure, man-made Lake, etc. For older structures this can be just a year or century, for newer structures an exact date is preferred */
    "buildingEndDate": NamedNode<'http://dbpedia.org/ontology/buildingEndDate'>;
    "buildingEndYear": NamedNode<'http://dbpedia.org/ontology/buildingEndYear'>;
    /** Building start date of an ArchitecturalStructure, man-made Lake, etc. For older structures this can be just a year or century, for newer structures an exact date is preferred */
    "buildingStartDate": NamedNode<'http://dbpedia.org/ontology/buildingStartDate'>;
    "buildingStartYear": NamedNode<'http://dbpedia.org/ontology/buildingStartYear'>;
    /** Type is te algemeen. We moeten soorten muziek van soorten gebouwen kunnen onderscheiden */
    "buildingType": NamedNode<'http://dbpedia.org/ontology/buildingType'>;
    "bustSize": NamedNode<'http://dbpedia.org/ontology/bustSize'>;
    /** Use this property if all 3 sizes are given together (DBpedia cannot currently extract 3 Lengths out of a field). Otherwise use separate fields bustSize, waistSize, hipSize */
    "bustWaistHipSize": NamedNode<'http://dbpedia.org/ontology/bustWaistHipSize'>;
    "cableCar": NamedNode<'http://dbpedia.org/ontology/cableCar'>;
    "calculationNeeds": NamedNode<'http://dbpedia.org/ontology/calculationNeeds'>;
    /** A call sign is not the name of a broadcaster! In broadcasting and radio communications, a call sign (also known as a call name or call letters, or abbreviated as a call) is a unique designation for a transmitting station. */
    "callSign": NamedNode<'http://dbpedia.org/ontology/callSign'>;
    /** The out written call sign. */
    "callsignMeaning": NamedNode<'http://dbpedia.org/ontology/callsignMeaning'>;
    /** Πανεπιστημιούπολη εννοείται κάθε πολεοδομικό συγκρότημα που προσφέρει οικιστικές, διδακτικές και ερευνητικές διευκολύνσεις στους φοιτητές ενός πανεπιστημίου. */
    "campus": NamedNode<'http://dbpedia.org/ontology/campus'>;
    "campusSize": NamedNode<'http://dbpedia.org/ontology/campusSize'>;
    "campusType": NamedNode<'http://dbpedia.org/ontology/campusType'>;
    /** Whether bags can be checked. */
    "canBaggageChecked": NamedNode<'http://dbpedia.org/ontology/canBaggageChecked'>;
    "cannonNumber": NamedNode<'http://dbpedia.org/ontology/cannonNumber'>;
    "canonizedBy": NamedNode<'http://dbpedia.org/ontology/canonizedBy'>;
    "canonizedDate": NamedNode<'http://dbpedia.org/ontology/canonizedDate'>;
    "canonizedPlace": NamedNode<'http://dbpedia.org/ontology/canonizedPlace'>;
    "canton": NamedNode<'http://dbpedia.org/ontology/canton'>;
    /** Number of people who can be served by a Train or other service; or participate in a SoccerClub, CricketTeam, etc */
    "capacity": NamedNode<'http://dbpedia.org/ontology/capacity'>;
    "capacityFactor": NamedNode<'http://dbpedia.org/ontology/capacityFactor'>;
    "capital": NamedNode<'http://dbpedia.org/ontology/capital'>;
    "capitalCoordinates": NamedNode<'http://dbpedia.org/ontology/capitalCoordinates'>;
    "capitalCountry": NamedNode<'http://dbpedia.org/ontology/capitalCountry'>;
    "capitalDistrict": NamedNode<'http://dbpedia.org/ontology/capitalDistrict'>;
    "capitalElevation": NamedNode<'http://dbpedia.org/ontology/capitalElevation'>;
    "capitalMountain": NamedNode<'http://dbpedia.org/ontology/capitalMountain'>;
    "capitalPlace": NamedNode<'http://dbpedia.org/ontology/capitalPlace'>;
    "capitalPosition": NamedNode<'http://dbpedia.org/ontology/capitalPosition'>;
    "capitalRegion": NamedNode<'http://dbpedia.org/ontology/capitalRegion'>;
    "captureDate": NamedNode<'http://dbpedia.org/ontology/captureDate'>;
    "carNumber": NamedNode<'http://dbpedia.org/ontology/carNumber'>;
    /** Amount of carbohydrates per servingSize of a Food */
    "carbohydrate": NamedNode<'http://dbpedia.org/ontology/carbohydrate'>;
    "carcinogen": NamedNode<'http://dbpedia.org/ontology/carcinogen'>;
    "careerPoints": NamedNode<'http://dbpedia.org/ontology/careerPoints'>;
    "careerPrizeMoney": NamedNode<'http://dbpedia.org/ontology/careerPrizeMoney'>;
    /** this property links to a step in the career of a person, e.g. a soccer player, holding information on the time span, matches and goals he or she achieved at a club. */
    "careerStation": NamedNode<'http://dbpedia.org/ontology/careerStation'>;
    "cargoFuel": NamedNode<'http://dbpedia.org/ontology/cargoFuel'>;
    "cargoGas": NamedNode<'http://dbpedia.org/ontology/cargoGas'>;
    "cargoWater": NamedNode<'http://dbpedia.org/ontology/cargoWater'>;
    /** Chemical Abstracts Service number. Applicable to ChemicalCompound or Biomolecule (eg Protein) */
    "casNumber": NamedNode<'http://dbpedia.org/ontology/casNumber'>;
    "casSupplemental": NamedNode<'http://dbpedia.org/ontology/casSupplemental'>;
    "case": NamedNode<'http://dbpedia.org/ontology/case'>;
    /** Number of casualties of a MilitaryConflict or natural disaster such as an Earthquake */
    "casualties": NamedNode<'http://dbpedia.org/ontology/casualties'>;
    "catch": NamedNode<'http://dbpedia.org/ontology/catch'>;
    "category": NamedNode<'http://dbpedia.org/ontology/category'>;
    "caterer": NamedNode<'http://dbpedia.org/ontology/caterer'>;
    "catholicPercentage": NamedNode<'http://dbpedia.org/ontology/catholicPercentage'>;
    "causalties": NamedNode<'http://dbpedia.org/ontology/causalties'>;
    "causeOfDeath": NamedNode<'http://dbpedia.org/ontology/causeOfDeath'>;
    "causedBy": NamedNode<'http://dbpedia.org/ontology/causedBy'>;
    "ccaState": NamedNode<'http://dbpedia.org/ontology/ccaState'>;
    "ceeb": NamedNode<'http://dbpedia.org/ontology/ceeb'>;
    /** Maximum distance to the earth surface, to be expressed in kilometers */
    "ceiling": NamedNode<'http://dbpedia.org/ontology/ceiling'>;
    "cemetery": NamedNode<'http://dbpedia.org/ontology/cemetery'>;
    "censusYear": NamedNode<'http://dbpedia.org/ontology/censusYear'>;
    "center": NamedNode<'http://dbpedia.org/ontology/center'>;
    /** Anzahl Breaks mit 100 Punkten oder mehr, wird nicht übersetzt */
    "centuryBreaks": NamedNode<'http://dbpedia.org/ontology/centuryBreaks'>;
    "ceo": NamedNode<'http://dbpedia.org/ontology/ceo'>;
    "ceremonialCounty": NamedNode<'http://dbpedia.org/ontology/ceremonialCounty'>;
    "certification": NamedNode<'http://dbpedia.org/ontology/certification'>;
    "certificationDate": NamedNode<'http://dbpedia.org/ontology/certificationDate'>;
    "cesarAward": NamedNode<'http://dbpedia.org/ontology/cesarAward'>;
    /** A unique identifier for the drug in the Chemical Entities of Biological Interest (ChEBI) ontology */
    "chEBI": NamedNode<'http://dbpedia.org/ontology/chEBI'>;
    "chEMBL": NamedNode<'http://dbpedia.org/ontology/chEMBL'>;
    /** The chain of Hotels this instance is associated with. */
    "chain": NamedNode<'http://dbpedia.org/ontology/chain'>;
    "chairLabel": NamedNode<'http://dbpedia.org/ontology/chairLabel'>;
    "chairman": NamedNode<'http://dbpedia.org/ontology/chairman'>;
    "chairmanTitle": NamedNode<'http://dbpedia.org/ontology/chairmanTitle'>;
    "chairperson": NamedNode<'http://dbpedia.org/ontology/chairperson'>;
    /** winner of a competition */
    "champion": NamedNode<'http://dbpedia.org/ontology/champion'>;
    /** winner of a competition in the double session (as in tennis) */
    "championInDouble": NamedNode<'http://dbpedia.org/ontology/championInDouble'>;
    /** winner of a competition in the female double session (as in tennis) */
    "championInDoubleFemale": NamedNode<'http://dbpedia.org/ontology/championInDoubleFemale'>;
    /** winner of a competition in the male double session (as in tennis) */
    "championInDoubleMale": NamedNode<'http://dbpedia.org/ontology/championInDoubleMale'>;
    /** winner of a competition in the mixed double session (as in tennis) */
    "championInMixedDouble": NamedNode<'http://dbpedia.org/ontology/championInMixedDouble'>;
    /** winner of a competition in the single session, to distinguish from the double session (as in tennis) */
    "championInSingle": NamedNode<'http://dbpedia.org/ontology/championInSingle'>;
    /** winner of a competition in the single female session, to distinguish from the double session (as in tennis) */
    "championInSingleFemale": NamedNode<'http://dbpedia.org/ontology/championInSingleFemale'>;
    /** winner of a competition in the single male session, to distinguish from the double session (as in tennis) */
    "championInSingleMale": NamedNode<'http://dbpedia.org/ontology/championInSingleMale'>;
    "championships": NamedNode<'http://dbpedia.org/ontology/championships'>;
    "chancellor": NamedNode<'http://dbpedia.org/ontology/chancellor'>;
    "channel": NamedNode<'http://dbpedia.org/ontology/channel'>;
    "chaplain": NamedNode<'http://dbpedia.org/ontology/chaplain'>;
    /** Name of a character in play. */
    "characterInPlay": NamedNode<'http://dbpedia.org/ontology/characterInPlay'>;
    "chef": NamedNode<'http://dbpedia.org/ontology/chef'>;
    "chemSpiderId": NamedNode<'http://dbpedia.org/ontology/chemSpiderId'>;
    "chemicalFormula": NamedNode<'http://dbpedia.org/ontology/chemicalFormula'>;
    "chiefEditor": NamedNode<'http://dbpedia.org/ontology/chiefEditor'>;
    "chiefPlace": NamedNode<'http://dbpedia.org/ontology/chiefPlace'>;
    "child": NamedNode<'http://dbpedia.org/ontology/child'>;
    "childOrganisation": NamedNode<'http://dbpedia.org/ontology/childOrganisation'>;
    "choreographer": NamedNode<'http://dbpedia.org/ontology/choreographer'>;
    /** The name of the (Greek) chorus character in play. */
    "chorusCharacterInPlay": NamedNode<'http://dbpedia.org/ontology/chorusCharacterInPlay'>;
    "christeningDate": NamedNode<'http://dbpedia.org/ontology/christeningDate'>;
    "chromosome": NamedNode<'http://dbpedia.org/ontology/chromosome'>;
    "cinematography": NamedNode<'http://dbpedia.org/ontology/cinematography'>;
    "circle": NamedNode<'http://dbpedia.org/ontology/circle'>;
    "circuitLength": NamedNode<'http://dbpedia.org/ontology/circuitLength'>;
    "circuitName": NamedNode<'http://dbpedia.org/ontology/circuitName'>;
    "circulation": NamedNode<'http://dbpedia.org/ontology/circulation'>;
    "circumcised": NamedNode<'http://dbpedia.org/ontology/circumcised'>;
    /** A document cited by this work. Like OntologyProperty:dct:references, but as a datatype property. */
    "cites": NamedNode<'http://dbpedia.org/ontology/cites'>;
    "citizenship": NamedNode<'http://dbpedia.org/ontology/citizenship'>;
    "city": NamedNode<'http://dbpedia.org/ontology/city'>;
    "cityLink": NamedNode<'http://dbpedia.org/ontology/cityLink'>;
    /** Der Platz des Gebäudes in der Liste der höchsten Gebäude der Stadt */
    "cityRank": NamedNode<'http://dbpedia.org/ontology/cityRank'>;
    "citySince": NamedNode<'http://dbpedia.org/ontology/citySince'>;
    "cityType": NamedNode<'http://dbpedia.org/ontology/cityType'>;
    "clade": NamedNode<'http://dbpedia.org/ontology/clade'>;
    "class": NamedNode<'http://dbpedia.org/ontology/class'>;
    "classes": NamedNode<'http://dbpedia.org/ontology/classes'>;
    "classification": NamedNode<'http://dbpedia.org/ontology/classification'>;
    /** Troisième niveau de la classification classique (c’est-à-dire n’utilisant pas la notion de distance génétique) des espèces vivantes (voir systématique). */
    "classis": NamedNode<'http://dbpedia.org/ontology/classis'>;
    "climate": NamedNode<'http://dbpedia.org/ontology/climate'>;
    "climbUpNumber": NamedNode<'http://dbpedia.org/ontology/climbUpNumber'>;
    /** lieu proche d'un autre. */
    "closeTo": NamedNode<'http://dbpedia.org/ontology/closeTo'>;
    "closed": NamedNode<'http://dbpedia.org/ontology/closed'>;
    "closingDate": NamedNode<'http://dbpedia.org/ontology/closingDate'>;
    "closingFilm": NamedNode<'http://dbpedia.org/ontology/closingFilm'>;
    "closingYear": NamedNode<'http://dbpedia.org/ontology/closingYear'>;
    "clothSize": NamedNode<'http://dbpedia.org/ontology/clothSize'>;
    "clothingSize": NamedNode<'http://dbpedia.org/ontology/clothingSize'>;
    "club": NamedNode<'http://dbpedia.org/ontology/club'>;
    "clubsRecordGoalscorer": NamedNode<'http://dbpedia.org/ontology/clubsRecordGoalscorer'>;
    "cluster": NamedNode<'http://dbpedia.org/ontology/cluster'>;
    "cmpEvaDuration": NamedNode<'http://dbpedia.org/ontology/cmpEvaDuration'>;
    "cmykCoordinateBlack": NamedNode<'http://dbpedia.org/ontology/cmykCoordinateBlack'>;
    "cmykCoordinateCyanic": NamedNode<'http://dbpedia.org/ontology/cmykCoordinateCyanic'>;
    "cmykCoordinateMagenta": NamedNode<'http://dbpedia.org/ontology/cmykCoordinateMagenta'>;
    "cmykCoordinateYellow": NamedNode<'http://dbpedia.org/ontology/cmykCoordinateYellow'>;
    "co2Emission": NamedNode<'http://dbpedia.org/ontology/co2Emission'>;
    "coExecutiveProducer": NamedNode<'http://dbpedia.org/ontology/coExecutiveProducer'>;
    "coProducer": NamedNode<'http://dbpedia.org/ontology/coProducer'>;
    "coach": NamedNode<'http://dbpedia.org/ontology/coach'>;
    "coachClub": NamedNode<'http://dbpedia.org/ontology/coachClub'>;
    "coachSeason": NamedNode<'http://dbpedia.org/ontology/coachSeason'>;
    "coachedTeam": NamedNode<'http://dbpedia.org/ontology/coachedTeam'>;
    "coachingRecord": NamedNode<'http://dbpedia.org/ontology/coachingRecord'>;
    /** Παλαιότερα ο συνασπισμός χρησιμοποιούνταν ως στρατιωτικός όρος που υποδήλωνε την όμορη παράταξη πολεμιστών κατά την οποία ο κάθε στρατιώτης προφύλασσε τον διπλανό του με την ασπίδα του. */
    "coalition": NamedNode<'http://dbpedia.org/ontology/coalition'>;
    "coastLength": NamedNode<'http://dbpedia.org/ontology/coastLength'>;
    "coastLine": NamedNode<'http://dbpedia.org/ontology/coastLine'>;
    /** image of the coat of arms (heraldic symbol) */
    "coatOfArms": NamedNode<'http://dbpedia.org/ontology/coatOfArms'>;
    "code": NamedNode<'http://dbpedia.org/ontology/code'>;
    /** code book or statute book referred to in this legal case */
    "codeBook": NamedNode<'http://dbpedia.org/ontology/codeBook'>;
    "codeDistrict": NamedNode<'http://dbpedia.org/ontology/codeDistrict'>;
    "codeIndex": NamedNode<'http://dbpedia.org/ontology/codeIndex'>;
    /** Kadastercode voor een perceel */
    "codeLandRegistry": NamedNode<'http://dbpedia.org/ontology/codeLandRegistry'>;
    "codeListOfHonour": NamedNode<'http://dbpedia.org/ontology/codeListOfHonour'>;
    /** Code oorlogsmonument of ander gedenkteken */
    "codeMemorial": NamedNode<'http://dbpedia.org/ontology/codeMemorial'>;
    /** Code assigned to (Dutch) monuments at the municipal level, deemed to be of local value */
    "codeMunicipalMonument": NamedNode<'http://dbpedia.org/ontology/codeMunicipalMonument'>;
    /** Code assigned to (Dutch) monuments at the national level, deemed to be of national value */
    "codeNationalMonument": NamedNode<'http://dbpedia.org/ontology/codeNationalMonument'>;
    /** Code assigned to (Dutch) monuments at the provincial level, mostly for monuments in the countryside, or for waterworks */
    "codeProvincialMonument": NamedNode<'http://dbpedia.org/ontology/codeProvincialMonument'>;
    "codeSettlement": NamedNode<'http://dbpedia.org/ontology/codeSettlement'>;
    "codeStockExchange": NamedNode<'http://dbpedia.org/ontology/codeStockExchange'>;
    /** CODEN is a six character, alphanumeric bibliographic code, that provides concise, unique and unambiguous identification of the titles of serials and non-serial publications from all subject areas. */
    "coden": NamedNode<'http://dbpedia.org/ontology/coden'>;
    "coemperor": NamedNode<'http://dbpedia.org/ontology/coemperor'>;
    "collaboration": NamedNode<'http://dbpedia.org/ontology/collaboration'>;
    /** Colleague of a Person or OfficeHolder (not PersonFunction nor CareerStation). Sub-properties include: president, vicePresident, chancellor, viceChancellor, governor, lieutenant. Points to a Person who may have a general "position" (resource) or "title" (literal). */
    "colleague": NamedNode<'http://dbpedia.org/ontology/colleague'>;
    "collection": NamedNode<'http://dbpedia.org/ontology/collection'>;
    "collectionSize": NamedNode<'http://dbpedia.org/ontology/collectionSize'>;
    "collectivityMinority": NamedNode<'http://dbpedia.org/ontology/collectivityMinority'>;
    "college": NamedNode<'http://dbpedia.org/ontology/college'>;
    "collegeHof": NamedNode<'http://dbpedia.org/ontology/collegeHof'>;
    "colonialName": NamedNode<'http://dbpedia.org/ontology/colonialName'>;
    "colorChart": NamedNode<'http://dbpedia.org/ontology/colorChart'>;
    /** A colour represented by its entity. */
    "colour": NamedNode<'http://dbpedia.org/ontology/colour'>;
    /** A colour represented by its hex code (e.g.: #FF0000 or #40E0D0). */
    "colourHexCode": NamedNode<'http://dbpedia.org/ontology/colourHexCode'>;
    /** A colour represented by a string holding its name (e.g.: red or green). */
    "colourName": NamedNode<'http://dbpedia.org/ontology/colourName'>;
    "combatant": NamedNode<'http://dbpedia.org/ontology/combatant'>;
    "comic": NamedNode<'http://dbpedia.org/ontology/comic'>;
    "comitat": NamedNode<'http://dbpedia.org/ontology/comitat'>;
    "command": NamedNode<'http://dbpedia.org/ontology/command'>;
    "commandModule": NamedNode<'http://dbpedia.org/ontology/commandModule'>;
    "commandStructure": NamedNode<'http://dbpedia.org/ontology/commandStructure'>;
    "commandant": NamedNode<'http://dbpedia.org/ontology/commandant'>;
    "commander": NamedNode<'http://dbpedia.org/ontology/commander'>;
    "comment": NamedNode<'http://dbpedia.org/ontology/comment'>;
    "commissioner": NamedNode<'http://dbpedia.org/ontology/commissioner'>;
    "commissionerDate": NamedNode<'http://dbpedia.org/ontology/commissionerDate'>;
    "commissioningDate": NamedNode<'http://dbpedia.org/ontology/commissioningDate'>;
    "committee": NamedNode<'http://dbpedia.org/ontology/committee'>;
    /** Committee in the legislature (eg.: Committee on Economic and Monetary Affairs of the European Parliament). */
    "committeeInLegislature": NamedNode<'http://dbpedia.org/ontology/committeeInLegislature'>;
    /** The common name of an entity. Frequently, foaf:name is used for all of the different names of a person; this property just defines the most commonly used name. */
    "commonName": NamedNode<'http://dbpedia.org/ontology/commonName'>;
    "commune": NamedNode<'http://dbpedia.org/ontology/commune'>;
    "communityIsoCode": NamedNode<'http://dbpedia.org/ontology/communityIsoCode'>;
    "company": NamedNode<'http://dbpedia.org/ontology/company'>;
    /** similar, unrelated rockets */
    "comparable": NamedNode<'http://dbpedia.org/ontology/comparable'>;
    "competition": NamedNode<'http://dbpedia.org/ontology/competition'>;
    "competitionTitle": NamedNode<'http://dbpedia.org/ontology/competitionTitle'>;
    /** For compilation albums: the person or entity responsible for selecting the album's track listing. */
    "compiler": NamedNode<'http://dbpedia.org/ontology/compiler'>;
    "completionDate": NamedNode<'http://dbpedia.org/ontology/completionDate'>;
    "complexion": NamedNode<'http://dbpedia.org/ontology/complexion'>;
    /** Complexity of preparing a Food (recipe) */
    "complexity": NamedNode<'http://dbpedia.org/ontology/complexity'>;
    "complications": NamedNode<'http://dbpedia.org/ontology/complications'>;
    "component": NamedNode<'http://dbpedia.org/ontology/component'>;
    "composer": NamedNode<'http://dbpedia.org/ontology/composer'>;
    "compressionRatio": NamedNode<'http://dbpedia.org/ontology/compressionRatio'>;
    "computingInput": NamedNode<'http://dbpedia.org/ontology/computingInput'>;
    "computingMedia": NamedNode<'http://dbpedia.org/ontology/computingMedia'>;
    /** some sort of hardware architecture or software framework, that allows this software to run */
    "computingPlatform": NamedNode<'http://dbpedia.org/ontology/computingPlatform'>;
    "configuration": NamedNode<'http://dbpedia.org/ontology/configuration'>;
    "confirmedCases": NamedNode<'http://dbpedia.org/ontology/confirmedCases'>;
    "conflict": NamedNode<'http://dbpedia.org/ontology/conflict'>;
    "congressionalDistrict": NamedNode<'http://dbpedia.org/ontology/congressionalDistrict'>;
    /** connects a referenced resource to another resource. This property is important to connect non-extracted resources to extracted ones */
    "connectsReferencedTo": NamedNode<'http://dbpedia.org/ontology/connectsReferencedTo'>;
    /** A meaning of a word or phrase that is suggested or implied, as opposed to a denotation, or literal meaning. */
    "connotation": NamedNode<'http://dbpedia.org/ontology/connotation'>;
    "consecration": NamedNode<'http://dbpedia.org/ontology/consecration'>;
    "conservationStatus": NamedNode<'http://dbpedia.org/ontology/conservationStatus'>;
    "conservationStatusSystem": NamedNode<'http://dbpedia.org/ontology/conservationStatusSystem'>;
    "constellation": NamedNode<'http://dbpedia.org/ontology/constellation'>;
    "constituencyDistrict": NamedNode<'http://dbpedia.org/ontology/constituencyDistrict'>;
    "construction": NamedNode<'http://dbpedia.org/ontology/construction'>;
    /** Construction material (eg. concrete, steel, iron, stone, brick, wood). */
    "constructionMaterial": NamedNode<'http://dbpedia.org/ontology/constructionMaterial'>;
    "contest": NamedNode<'http://dbpedia.org/ontology/contest'>;
    /** links a country to the continent it belongs */
    "continent": NamedNode<'http://dbpedia.org/ontology/continent'>;
    /** Der Platz des Gebäudes in der Liste der höchsten Gebäude des Kontinents */
    "continentRank": NamedNode<'http://dbpedia.org/ontology/continentRank'>;
    "continentalTournament": NamedNode<'http://dbpedia.org/ontology/continentalTournament'>;
    "continentalTournamentBronze": NamedNode<'http://dbpedia.org/ontology/continentalTournamentBronze'>;
    "continentalTournamentGold": NamedNode<'http://dbpedia.org/ontology/continentalTournamentGold'>;
    "continentalTournamentSilver": NamedNode<'http://dbpedia.org/ontology/continentalTournamentSilver'>;
    "contractAward": NamedNode<'http://dbpedia.org/ontology/contractAward'>;
    "contractor": NamedNode<'http://dbpedia.org/ontology/contractor'>;
    "convictionDate": NamedNode<'http://dbpedia.org/ontology/convictionDate'>;
    "convictionPenalty": NamedNode<'http://dbpedia.org/ontology/convictionPenalty'>;
    "coolingSystem": NamedNode<'http://dbpedia.org/ontology/coolingSystem'>;
    "copilote": NamedNode<'http://dbpedia.org/ontology/copilote'>;
    "coronationDate": NamedNode<'http://dbpedia.org/ontology/coronationDate'>;
    /** Described at http://en.wikipedia.org/wiki/International_Designator */
    "cosparId": NamedNode<'http://dbpedia.org/ontology/cosparId'>;
    /** Cost of building an ArchitecturalStructure, Ship, etc */
    "cost": NamedNode<'http://dbpedia.org/ontology/cost'>;
    /** the person who is responsible for the film costume design */
    "costumeDesigner": NamedNode<'http://dbpedia.org/ontology/costumeDesigner'>;
    "council": NamedNode<'http://dbpedia.org/ontology/council'>;
    "councilArea": NamedNode<'http://dbpedia.org/ontology/councilArea'>;
    /** The country where the thing is located. */
    "country": NamedNode<'http://dbpedia.org/ontology/country'>;
    "countryCode": NamedNode<'http://dbpedia.org/ontology/countryCode'>;
    "countryOrigin": NamedNode<'http://dbpedia.org/ontology/countryOrigin'>;
    /** Der Platz des Gebäudes in der Liste der höchsten Gebäude des Landes */
    "countryRank": NamedNode<'http://dbpedia.org/ontology/countryRank'>;
    "countryWithFirstAstronaut": NamedNode<'http://dbpedia.org/ontology/countryWithFirstAstronaut'>;
    "countryWithFirstSatellite": NamedNode<'http://dbpedia.org/ontology/countryWithFirstSatellite'>;
    "countryWithFirstSatelliteLaunched": NamedNode<'http://dbpedia.org/ontology/countryWithFirstSatelliteLaunched'>;
    "countryWithFirstSpaceflight": NamedNode<'http://dbpedia.org/ontology/countryWithFirstSpaceflight'>;
    /** The county where the thing is located. */
    "county": NamedNode<'http://dbpedia.org/ontology/county'>;
    "countySeat": NamedNode<'http://dbpedia.org/ontology/countySeat'>;
    "course": NamedNode<'http://dbpedia.org/ontology/course'>;
    "courseArea": NamedNode<'http://dbpedia.org/ontology/courseArea'>;
    "cousurper": NamedNode<'http://dbpedia.org/ontology/cousurper'>;
    /** Cover artist */
    "coverArtist": NamedNode<'http://dbpedia.org/ontology/coverArtist'>;
    /** CPU of an InformationAppliance or VideoGame (which unfortunately is currently under Software) */
    "cpu": NamedNode<'http://dbpedia.org/ontology/cpu'>;
    "created": NamedNode<'http://dbpedia.org/ontology/created'>;
    "creationChristianBishop": NamedNode<'http://dbpedia.org/ontology/creationChristianBishop'>;
    "creationYear": NamedNode<'http://dbpedia.org/ontology/creationYear'>;
    "creativeDirector": NamedNode<'http://dbpedia.org/ontology/creativeDirector'>;
    /** Creator/author of a work. For literal (string) use dc:creator; for object (URL) use creator */
    "creator": NamedNode<'http://dbpedia.org/ontology/creator'>;
    /** The person that creates (invents) the food (eg. Caesar Cardini is the creator of the Caesar salad). */
    "creatorOfDish": NamedNode<'http://dbpedia.org/ontology/creatorOfDish'>;
    "credit": NamedNode<'http://dbpedia.org/ontology/credit'>;
    "crest": NamedNode<'http://dbpedia.org/ontology/crest'>;
    "crew": NamedNode<'http://dbpedia.org/ontology/crew'>;
    "crewMember": NamedNode<'http://dbpedia.org/ontology/crewMember'>;
    "crewSize": NamedNode<'http://dbpedia.org/ontology/crewSize'>;
    "crews": NamedNode<'http://dbpedia.org/ontology/crews'>;
    "criminalCharge": NamedNode<'http://dbpedia.org/ontology/criminalCharge'>;
    "criteria": NamedNode<'http://dbpedia.org/ontology/criteria'>;
    "crosses": NamedNode<'http://dbpedia.org/ontology/crosses'>;
    "crownDependency": NamedNode<'http://dbpedia.org/ontology/crownDependency'>;
    /** National cuisine of a Food or Restaurant */
    "cuisine": NamedNode<'http://dbpedia.org/ontology/cuisine'>;
    /** Name of the cultivar (cultivated variety) */
    "cultivatedVariety": NamedNode<'http://dbpedia.org/ontology/cultivatedVariety'>;
    "curator": NamedNode<'http://dbpedia.org/ontology/curator'>;
    /** υπολογίζει ή εκφράζει οικονομικές αξίες */
    "currency": NamedNode<'http://dbpedia.org/ontology/currency'>;
    /** ISO 4217 currency designators. */
    "currencyCode": NamedNode<'http://dbpedia.org/ontology/currencyCode'>;
    "currentCity": NamedNode<'http://dbpedia.org/ontology/currentCity'>;
    "currentLeague": NamedNode<'http://dbpedia.org/ontology/currentLeague'>;
    "currentMember": NamedNode<'http://dbpedia.org/ontology/currentMember'>;
    "currentPartner": NamedNode<'http://dbpedia.org/ontology/currentPartner'>;
    /** The current production running in the theatre. */
    "currentProduction": NamedNode<'http://dbpedia.org/ontology/currentProduction'>;
    "currentRank": NamedNode<'http://dbpedia.org/ontology/currentRank'>;
    "currentRecord": NamedNode<'http://dbpedia.org/ontology/currentRecord'>;
    "currentSeason": NamedNode<'http://dbpedia.org/ontology/currentSeason'>;
    "currentStatus": NamedNode<'http://dbpedia.org/ontology/currentStatus'>;
    "currentTeam": NamedNode<'http://dbpedia.org/ontology/currentTeam'>;
    "currentTeamManager": NamedNode<'http://dbpedia.org/ontology/currentTeamManager'>;
    /** A current member of an athletic team. */
    "currentTeamMember": NamedNode<'http://dbpedia.org/ontology/currentTeamMember'>;
    "currentWorldChampion": NamedNode<'http://dbpedia.org/ontology/currentWorldChampion'>;
    /** Current use of the architectural structure, if it is currently being used as anything other than its original purpose. */
    "currentlyUsedFor": NamedNode<'http://dbpedia.org/ontology/currentlyUsedFor'>;
    "custodian": NamedNode<'http://dbpedia.org/ontology/custodian'>;
    "cyclistGenre": NamedNode<'http://dbpedia.org/ontology/cyclistGenre'>;
    "cylinderBore": NamedNode<'http://dbpedia.org/ontology/cylinderBore'>;
    "cylinderCount": NamedNode<'http://dbpedia.org/ontology/cylinderCount'>;
    "daira": NamedNode<'http://dbpedia.org/ontology/daira'>;
    "dam": NamedNode<'http://dbpedia.org/ontology/dam'>;
    "damage": NamedNode<'http://dbpedia.org/ontology/damage'>;
    "damsire": NamedNode<'http://dbpedia.org/ontology/damsire'>;
    "danseCompetition": NamedNode<'http://dbpedia.org/ontology/danseCompetition'>;
    "danseScore": NamedNode<'http://dbpedia.org/ontology/danseScore'>;
    "data/definitions.ttl": NamedNode<'http://dbpedia.org/ontology/data/definitions.ttl'>;
    "date": NamedNode<'http://dbpedia.org/ontology/date'>;
    "dateAct": NamedNode<'http://dbpedia.org/ontology/dateAct'>;
    "dateAgreement": NamedNode<'http://dbpedia.org/ontology/dateAgreement'>;
    "dateBudget": NamedNode<'http://dbpedia.org/ontology/dateBudget'>;
    "dateClosed": NamedNode<'http://dbpedia.org/ontology/dateClosed'>;
    "dateCompleted": NamedNode<'http://dbpedia.org/ontology/dateCompleted'>;
    "dateConstruction": NamedNode<'http://dbpedia.org/ontology/dateConstruction'>;
    "dateExtended": NamedNode<'http://dbpedia.org/ontology/dateExtended'>;
    "dateLastUpdated": NamedNode<'http://dbpedia.org/ontology/dateLastUpdated'>;
    "dateOfAbandonment": NamedNode<'http://dbpedia.org/ontology/dateOfAbandonment'>;
    "dateOfBurial": NamedNode<'http://dbpedia.org/ontology/dateOfBurial'>;
    /** Designates the unveiling date */
    "dateUnveiled": NamedNode<'http://dbpedia.org/ontology/dateUnveiled'>;
    "dateUse": NamedNode<'http://dbpedia.org/ontology/dateUse'>;
    "daughter": NamedNode<'http://dbpedia.org/ontology/daughter'>;
    "davisCup": NamedNode<'http://dbpedia.org/ontology/davisCup'>;
    "day": NamedNode<'http://dbpedia.org/ontology/day'>;
    "daylightSavingTimeZone": NamedNode<'http://dbpedia.org/ontology/daylightSavingTimeZone'>;
    /** ID in Digitale Bibliotheek voor de Nederlandse Letteren (dbnl) */
    "dbnlCodeDutch": NamedNode<'http://dbpedia.org/ontology/dbnlCodeDutch'>;
    /** The Dewey Decimal Classification is a proprietary system of library classification developed by Melvil Dewey in 1876. */
    "dcc": NamedNode<'http://dbpedia.org/ontology/dcc'>;
    "deFactoLanguage": NamedNode<'http://dbpedia.org/ontology/deFactoLanguage'>;
    "deadInFightDate": NamedNode<'http://dbpedia.org/ontology/deadInFightDate'>;
    "deadInFightPlace": NamedNode<'http://dbpedia.org/ontology/deadInFightPlace'>;
    "dean": NamedNode<'http://dbpedia.org/ontology/dean'>;
    /** Dioceses and parishes should know which deaneries there are */
    "deanery": NamedNode<'http://dbpedia.org/ontology/deanery'>;
    "deathAge": NamedNode<'http://dbpedia.org/ontology/deathAge'>;
    "deathCause": NamedNode<'http://dbpedia.org/ontology/deathCause'>;
    "deathDate": NamedNode<'http://dbpedia.org/ontology/deathDate'>;
    /** The place where the person died. */
    "deathPlace": NamedNode<'http://dbpedia.org/ontology/deathPlace'>;
    "deathYear": NamedNode<'http://dbpedia.org/ontology/deathYear'>;
    "debut": NamedNode<'http://dbpedia.org/ontology/debut'>;
    "debutTeam": NamedNode<'http://dbpedia.org/ontology/debutTeam'>;
    /** First work of a person (may be notableWork or not) */
    "debutWork": NamedNode<'http://dbpedia.org/ontology/debutWork'>;
    "dec": NamedNode<'http://dbpedia.org/ontology/dec'>;
    "decay": NamedNode<'http://dbpedia.org/ontology/decay'>;
    "decideDate": NamedNode<'http://dbpedia.org/ontology/decideDate'>;
    "declination": NamedNode<'http://dbpedia.org/ontology/declination'>;
    "decommissioningDate": NamedNode<'http://dbpedia.org/ontology/decommissioningDate'>;
    "decoration": NamedNode<'http://dbpedia.org/ontology/decoration'>;
    "defeat": NamedNode<'http://dbpedia.org/ontology/defeat'>;
    "defeatAsMgr": NamedNode<'http://dbpedia.org/ontology/defeatAsMgr'>;
    "definition": NamedNode<'http://dbpedia.org/ontology/definition'>;
    "defunct": NamedNode<'http://dbpedia.org/ontology/defunct'>;
    "delegateMayor": NamedNode<'http://dbpedia.org/ontology/delegateMayor'>;
    "delegation": NamedNode<'http://dbpedia.org/ontology/delegation'>;
    "deliveryDate": NamedNode<'http://dbpedia.org/ontology/deliveryDate'>;
    "deme": NamedNode<'http://dbpedia.org/ontology/deme'>;
    "demographics": NamedNode<'http://dbpedia.org/ontology/demographics'>;
    "demographicsAsOf": NamedNode<'http://dbpedia.org/ontology/demographicsAsOf'>;
    /** The date the building was demolished. */
    "demolitionDate": NamedNode<'http://dbpedia.org/ontology/demolitionDate'>;
    /** The year the building was demolished. */
    "demolitionYear": NamedNode<'http://dbpedia.org/ontology/demolitionYear'>;
    "demonym": NamedNode<'http://dbpedia.org/ontology/demonym'>;
    "denomination": NamedNode<'http://dbpedia.org/ontology/denomination'>;
    "density": NamedNode<'http://dbpedia.org/ontology/density'>;
    "department": NamedNode<'http://dbpedia.org/ontology/department'>;
    "departmentCode": NamedNode<'http://dbpedia.org/ontology/departmentCode'>;
    "departmentPosition": NamedNode<'http://dbpedia.org/ontology/departmentPosition'>;
    /** This property can be used to map image captions from Infoboxes */
    "depictionDescription": NamedNode<'http://dbpedia.org/ontology/depictionDescription'>;
    /** Is a measure of the distance between a reference height and a point underneath. The exact meaning for a place is unclear. If possible, use  or  to be unambiguous. */
    "depth": NamedNode<'http://dbpedia.org/ontology/depth'>;
    "depthQuote": NamedNode<'http://dbpedia.org/ontology/depthQuote'>;
    "depths": NamedNode<'http://dbpedia.org/ontology/depths'>;
    "deputy": NamedNode<'http://dbpedia.org/ontology/deputy'>;
    "derivative": NamedNode<'http://dbpedia.org/ontology/derivative'>;
    "derivedWord": NamedNode<'http://dbpedia.org/ontology/derivedWord'>;
    /** Short description of a person */
    "description": NamedNode<'http://dbpedia.org/ontology/description'>;
    "designCompany": NamedNode<'http://dbpedia.org/ontology/designCompany'>;
    "designer": NamedNode<'http://dbpedia.org/ontology/designer'>;
    "destination": NamedNode<'http://dbpedia.org/ontology/destination'>;
    "destructionDate": NamedNode<'http://dbpedia.org/ontology/destructionDate'>;
    "detectionMethod": NamedNode<'http://dbpedia.org/ontology/detectionMethod'>;
    "detractor": NamedNode<'http://dbpedia.org/ontology/detractor'>;
    /** Developer of a Work (Artwork, Book, Software) or Building (Hotel, Skyscraper) */
    "developer": NamedNode<'http://dbpedia.org/ontology/developer'>;
    /** Department for Education (UK) number of a school in England or Wales */
    "dfE": NamedNode<'http://dbpedia.org/ontology/dfE'>;
    "diameter": NamedNode<'http://dbpedia.org/ontology/diameter'>;
    "different": NamedNode<'http://dbpedia.org/ontology/different'>;
    "differentialDiagnosis": NamedNode<'http://dbpedia.org/ontology/differentialDiagnosis'>;
    /** Ένα ψηφιακό κανάλι επιτρέπει την μετάδοση δεδομένων σε ψηφιακή μορφή. */
    "digitalChannel": NamedNode<'http://dbpedia.org/ontology/digitalChannel'>;
    "digitalSubChannel": NamedNode<'http://dbpedia.org/ontology/digitalSubChannel'>;
    /** A religious administrative body above the parish level */
    "diocese": NamedNode<'http://dbpedia.org/ontology/diocese'>;
    "diploma": NamedNode<'http://dbpedia.org/ontology/diploma'>;
    /** A film director is a person who directs the making of a film. */
    "director": NamedNode<'http://dbpedia.org/ontology/director'>;
    "disappearanceDate": NamedNode<'http://dbpedia.org/ontology/disappearanceDate'>;
    "disbanded": NamedNode<'http://dbpedia.org/ontology/disbanded'>;
    "discharge": NamedNode<'http://dbpedia.org/ontology/discharge'>;
    "dischargeAverage": NamedNode<'http://dbpedia.org/ontology/dischargeAverage'>;
    /** A person who learns from another, especially one who then teaches others.. */
    "disciple": NamedNode<'http://dbpedia.org/ontology/disciple'>;
    "discipline": NamedNode<'http://dbpedia.org/ontology/discipline'>;
    "discontinued": NamedNode<'http://dbpedia.org/ontology/discontinued'>;
    "discovered": NamedNode<'http://dbpedia.org/ontology/discovered'>;
    "discoverer": NamedNode<'http://dbpedia.org/ontology/discoverer'>;
    "discovery": NamedNode<'http://dbpedia.org/ontology/discovery'>;
    "disease": NamedNode<'http://dbpedia.org/ontology/disease'>;
    "diseasesDB": NamedNode<'http://dbpedia.org/ontology/diseasesDB'>;
    "diseasesDb": NamedNode<'http://dbpedia.org/ontology/diseasesDb'>;
    "displacement": NamedNode<'http://dbpedia.org/ontology/displacement'>;
    "dissolutionDate": NamedNode<'http://dbpedia.org/ontology/dissolutionDate'>;
    "dissolutionYear": NamedNode<'http://dbpedia.org/ontology/dissolutionYear'>;
    "dissolved": NamedNode<'http://dbpedia.org/ontology/dissolved'>;
    "dist_ly": NamedNode<'http://dbpedia.org/ontology/dist_ly'>;
    "dist_pc": NamedNode<'http://dbpedia.org/ontology/dist_pc'>;
    "distance": NamedNode<'http://dbpedia.org/ontology/distance'>;
    "distanceLaps": NamedNode<'http://dbpedia.org/ontology/distanceLaps'>;
    "distanceToBelfast": NamedNode<'http://dbpedia.org/ontology/distanceToBelfast'>;
    "distanceToCapital": NamedNode<'http://dbpedia.org/ontology/distanceToCapital'>;
    "distanceToCardiff": NamedNode<'http://dbpedia.org/ontology/distanceToCardiff'>;
    "distanceToCharingCross": NamedNode<'http://dbpedia.org/ontology/distanceToCharingCross'>;
    "distanceToDouglas": NamedNode<'http://dbpedia.org/ontology/distanceToDouglas'>;
    "distanceToDublin": NamedNode<'http://dbpedia.org/ontology/distanceToDublin'>;
    "distanceToEdinburgh": NamedNode<'http://dbpedia.org/ontology/distanceToEdinburgh'>;
    "distanceToLondon": NamedNode<'http://dbpedia.org/ontology/distanceToLondon'>;
    "distanceToNearestCity": NamedNode<'http://dbpedia.org/ontology/distanceToNearestCity'>;
    "distanceTraveled": NamedNode<'http://dbpedia.org/ontology/distanceTraveled'>;
    "distributingCompany": NamedNode<'http://dbpedia.org/ontology/distributingCompany'>;
    "distributingLabel": NamedNode<'http://dbpedia.org/ontology/distributingLabel'>;
    "distributor": NamedNode<'http://dbpedia.org/ontology/distributor'>;
    "district": NamedNode<'http://dbpedia.org/ontology/district'>;
    "division": NamedNode<'http://dbpedia.org/ontology/division'>;
    "dockedTime": NamedNode<'http://dbpedia.org/ontology/dockedTime'>;
    "doctoralAdvisor": NamedNode<'http://dbpedia.org/ontology/doctoralAdvisor'>;
    "doctoralStudent": NamedNode<'http://dbpedia.org/ontology/doctoralStudent'>;
    "documentDesignation": NamedNode<'http://dbpedia.org/ontology/documentDesignation'>;
    /** Identification a document within a particular registry */
    "documentNumber": NamedNode<'http://dbpedia.org/ontology/documentNumber'>;
    "domain": NamedNode<'http://dbpedia.org/ontology/domain'>;
    "dorlandsId": NamedNode<'http://dbpedia.org/ontology/dorlandsId'>;
    "dorlandsPrefix": NamedNode<'http://dbpedia.org/ontology/dorlandsPrefix'>;
    "dorlandsSuffix": NamedNode<'http://dbpedia.org/ontology/dorlandsSuffix'>;
    "draft": NamedNode<'http://dbpedia.org/ontology/draft'>;
    "draftLeague": NamedNode<'http://dbpedia.org/ontology/draftLeague'>;
    "draftPick": NamedNode<'http://dbpedia.org/ontology/draftPick'>;
    "draftPosition": NamedNode<'http://dbpedia.org/ontology/draftPosition'>;
    "draftRound": NamedNode<'http://dbpedia.org/ontology/draftRound'>;
    "draftTeam": NamedNode<'http://dbpedia.org/ontology/draftTeam'>;
    "draftYear": NamedNode<'http://dbpedia.org/ontology/draftYear'>;
    "drainsFrom": NamedNode<'http://dbpedia.org/ontology/drainsFrom'>;
    "drainsTo": NamedNode<'http://dbpedia.org/ontology/drainsTo'>;
    "drama": NamedNode<'http://dbpedia.org/ontology/drama'>;
    /** The recommended dress code for an establishment or event. */
    "dressCode": NamedNode<'http://dbpedia.org/ontology/dressCode'>;
    "drugbank": NamedNode<'http://dbpedia.org/ontology/drugbank'>;
    "drugs.com": NamedNode<'http://dbpedia.org/ontology/drugs.com'>;
    "dryCargo": NamedNode<'http://dbpedia.org/ontology/dryCargo'>;
    /** the person who dubs another person e.g. an actor or a fictional character in movies */
    "dubber": NamedNode<'http://dbpedia.org/ontology/dubber'>;
    /** The duration of the item (movie, audio recording, event, etc.) in ISO 8601 date format */
    "duration": NamedNode<'http://dbpedia.org/ontology/duration'>;
    "dutchArtworkCode": NamedNode<'http://dbpedia.org/ontology/dutchArtworkCode'>;
    "dutchCOROPCode": NamedNode<'http://dbpedia.org/ontology/dutchCOROPCode'>;
    /** Code voor alle soorten monumenten gebezigd door het MI-project */
    "dutchMIPCode": NamedNode<'http://dbpedia.org/ontology/dutchMIPCode'>;
    "dutchNAIdentifier": NamedNode<'http://dbpedia.org/ontology/dutchNAIdentifier'>;
    /** Dutch PPN code is a library cataloguing code for collection items (books, journals and the like). */
    "dutchPPNCode": NamedNode<'http://dbpedia.org/ontology/dutchPPNCode'>;
    "dutchRKDCode": NamedNode<'http://dbpedia.org/ontology/dutchRKDCode'>;
    /** Dutch Winkel ID is a code for an underground publication, as attributed by Lydia Winkel's work on the underground WW II press in the Netherlands. */
    "dutchWinkelID": NamedNode<'http://dbpedia.org/ontology/dutchWinkelID'>;
    "dynasty": NamedNode<'http://dbpedia.org/ontology/dynasty'>;
    "eMedicineSubject": NamedNode<'http://dbpedia.org/ontology/eMedicineSubject'>;
    /** Different from eMedicineSubject, which see */
    "eMedicineTopic": NamedNode<'http://dbpedia.org/ontology/eMedicineTopic'>;
    "eTeatrId": NamedNode<'http://dbpedia.org/ontology/eTeatrId'>;
    /** indicates another place situated east. */
    "eastPlace": NamedNode<'http://dbpedia.org/ontology/eastPlace'>;
    "ecNumber": NamedNode<'http://dbpedia.org/ontology/ecNumber'>;
    "editing": NamedNode<'http://dbpedia.org/ontology/editing'>;
    "editor": NamedNode<'http://dbpedia.org/ontology/editor'>;
    "editorTitle": NamedNode<'http://dbpedia.org/ontology/editorTitle'>;
    "education": NamedNode<'http://dbpedia.org/ontology/education'>;
    "educationPlace": NamedNode<'http://dbpedia.org/ontology/educationPlace'>;
    "educationSystem": NamedNode<'http://dbpedia.org/ontology/educationSystem'>;
    "effectiveRadiatedPower": NamedNode<'http://dbpedia.org/ontology/effectiveRadiatedPower'>;
    "egafdId": NamedNode<'http://dbpedia.org/ontology/egafdId'>;
    "einecsNumber": NamedNode<'http://dbpedia.org/ontology/einecsNumber'>;
    /** Indexing code used by the Bulgarian National Statistical Institute to identify populated places */
    "ekatteCode": NamedNode<'http://dbpedia.org/ontology/ekatteCode'>;
    "electionDate": NamedNode<'http://dbpedia.org/ontology/electionDate'>;
    /** The date that leader was elected. */
    "electionDateLeader": NamedNode<'http://dbpedia.org/ontology/electionDateLeader'>;
    /** number of votes the office holder attained */
    "electionMajority": NamedNode<'http://dbpedia.org/ontology/electionMajority'>;
    /** element placed above current element in D.I.Mendeleev's table */
    "elementAbove": NamedNode<'http://dbpedia.org/ontology/elementAbove'>;
    /** A block of the periodic table of elements is a set of adjacent groups. */
    "elementBlock": NamedNode<'http://dbpedia.org/ontology/elementBlock'>;
    /** In chemistry, a group (also known as a family) is a column of elements in the periodic table of the chemical elements. */
    "elementGroup": NamedNode<'http://dbpedia.org/ontology/elementGroup'>;
    /** En la taula periòdica dels elements, un període és una filera de la taula */
    "elementPeriod": NamedNode<'http://dbpedia.org/ontology/elementPeriod'>;
    /** altitude média acima do nível do mar */
    "elevation": NamedNode<'http://dbpedia.org/ontology/elevation'>;
    "elevationQuote": NamedNode<'http://dbpedia.org/ontology/elevationQuote'>;
    "elevatorCount": NamedNode<'http://dbpedia.org/ontology/elevatorCount'>;
    "elo": NamedNode<'http://dbpedia.org/ontology/elo'>;
    "eloRecord": NamedNode<'http://dbpedia.org/ontology/eloRecord'>;
    "emblem": NamedNode<'http://dbpedia.org/ontology/emblem'>;
    "emmyAward": NamedNode<'http://dbpedia.org/ontology/emmyAward'>;
    "employer": NamedNode<'http://dbpedia.org/ontology/employer'>;
    "employersCelebration": NamedNode<'http://dbpedia.org/ontology/employersCelebration'>;
    "end": NamedNode<'http://dbpedia.org/ontology/end'>;
    "endCareer": NamedNode<'http://dbpedia.org/ontology/endCareer'>;
    /** The end date of the event. */
    "endDate": NamedNode<'http://dbpedia.org/ontology/endDate'>;
    /** The end date and time of the event. */
    "endDateTime": NamedNode<'http://dbpedia.org/ontology/endDateTime'>;
    "endOccupation": NamedNode<'http://dbpedia.org/ontology/endOccupation'>;
    "endPoint": NamedNode<'http://dbpedia.org/ontology/endPoint'>;
    "endReign": NamedNode<'http://dbpedia.org/ontology/endReign'>;
    "endYear": NamedNode<'http://dbpedia.org/ontology/endYear'>;
    "endYearOfInsertion": NamedNode<'http://dbpedia.org/ontology/endYearOfInsertion'>;
    "endYearOfSales": NamedNode<'http://dbpedia.org/ontology/endYearOfSales'>;
    "endangeredSince": NamedNode<'http://dbpedia.org/ontology/endangeredSince'>;
    "endingTheme": NamedNode<'http://dbpedia.org/ontology/endingTheme'>;
    "endowment": NamedNode<'http://dbpedia.org/ontology/endowment'>;
    "enemy": NamedNode<'http://dbpedia.org/ontology/enemy'>;
    "engine": NamedNode<'http://dbpedia.org/ontology/engine'>;
    /** Power to be expressed in Watts (kiloWatt, megaWatt) */
    "enginePower": NamedNode<'http://dbpedia.org/ontology/enginePower'>;
    "engineType": NamedNode<'http://dbpedia.org/ontology/engineType'>;
    "engineer": NamedNode<'http://dbpedia.org/ontology/engineer'>;
    "ensembl": NamedNode<'http://dbpedia.org/ontology/ensembl'>;
    "enshrinedDeity": NamedNode<'http://dbpedia.org/ontology/enshrinedDeity'>;
    "entourage": NamedNode<'http://dbpedia.org/ontology/entourage'>;
    "entrezgene": NamedNode<'http://dbpedia.org/ontology/entrezgene'>;
    /** Compare with bishopric */
    "eparchy": NamedNode<'http://dbpedia.org/ontology/eparchy'>;
    "episode": NamedNode<'http://dbpedia.org/ontology/episode'>;
    /** The episode number of the TelevisionEpisode. */
    "episodeNumber": NamedNode<'http://dbpedia.org/ontology/episodeNumber'>;
    /** moment in time used as a referrence point for some time-vaying astronomical quantity */
    "epoch": NamedNode<'http://dbpedia.org/ontology/epoch'>;
    "eptFinalTable": NamedNode<'http://dbpedia.org/ontology/eptFinalTable'>;
    "eptItm": NamedNode<'http://dbpedia.org/ontology/eptItm'>;
    "eptTitle": NamedNode<'http://dbpedia.org/ontology/eptTitle'>;
    "equipment": NamedNode<'http://dbpedia.org/ontology/equipment'>;
    "equity": NamedNode<'http://dbpedia.org/ontology/equity'>;
    "era": NamedNode<'http://dbpedia.org/ontology/era'>;
    "eruption": NamedNode<'http://dbpedia.org/ontology/eruption'>;
    "eruptionYear": NamedNode<'http://dbpedia.org/ontology/eruptionYear'>;
    "escalafon": NamedNode<'http://dbpedia.org/ontology/escalafon'>;
    "escapeVelocity": NamedNode<'http://dbpedia.org/ontology/escapeVelocity'>;
    "espnId": NamedNode<'http://dbpedia.org/ontology/espnId'>;
    "established": NamedNode<'http://dbpedia.org/ontology/established'>;
    "establishment": NamedNode<'http://dbpedia.org/ontology/establishment'>;
    "ethnicGroup": NamedNode<'http://dbpedia.org/ontology/ethnicGroup'>;
    "ethnicGroupsInYear": NamedNode<'http://dbpedia.org/ontology/ethnicGroupsInYear'>;
    /** Μία ορισμένη κοινωνική κατηγορία ανθρώπων που έχουν κοινή καταγωγή ή εμπειρίες. */
    "ethnicity": NamedNode<'http://dbpedia.org/ontology/ethnicity'>;
    "eurobabeIndexId": NamedNode<'http://dbpedia.org/ontology/eurobabeIndexId'>;
    "europeanAffiliation": NamedNode<'http://dbpedia.org/ontology/europeanAffiliation'>;
    "europeanChampionship": NamedNode<'http://dbpedia.org/ontology/europeanChampionship'>;
    "europeanParliamentGroup": NamedNode<'http://dbpedia.org/ontology/europeanParliamentGroup'>;
    "europeanUnionEntranceDate": NamedNode<'http://dbpedia.org/ontology/europeanUnionEntranceDate'>;
    "event": NamedNode<'http://dbpedia.org/ontology/event'>;
    "eventDate": NamedNode<'http://dbpedia.org/ontology/eventDate'>;
    "eventDescription": NamedNode<'http://dbpedia.org/ontology/eventDescription'>;
    "executiveHeadteacher": NamedNode<'http://dbpedia.org/ontology/executiveHeadteacher'>;
    "executiveProducer": NamedNode<'http://dbpedia.org/ontology/executiveProducer'>;
    /** Notes about an exhibition the object has been to */
    "exhibition": NamedNode<'http://dbpedia.org/ontology/exhibition'>;
    /** Το είναι αντικατοπτρίζει αυτό που υπάρχει. */
    "existence": NamedNode<'http://dbpedia.org/ontology/existence'>;
    "expedition": NamedNode<'http://dbpedia.org/ontology/expedition'>;
    "explorer": NamedNode<'http://dbpedia.org/ontology/explorer'>;
    "externalOrnament": NamedNode<'http://dbpedia.org/ontology/externalOrnament'>;
    /** Date when an Organization (eg PoliticalParty, Company) or Species ceased to exist */
    "extinctionDate": NamedNode<'http://dbpedia.org/ontology/extinctionDate'>;
    "extinctionYear": NamedNode<'http://dbpedia.org/ontology/extinctionYear'>;
    "eyeColor": NamedNode<'http://dbpedia.org/ontology/eyeColor'>;
    "eyeColour": NamedNode<'http://dbpedia.org/ontology/eyeColour'>;
    /** Μάτι ονομάζεται το αισθητήριο όργανο της όρασης των ζωντανών οργανισμών. */
    "eyes": NamedNode<'http://dbpedia.org/ontology/eyes'>;
    "faaLocationIdentifier": NamedNode<'http://dbpedia.org/ontology/faaLocationIdentifier'>;
    "facilityId": NamedNode<'http://dbpedia.org/ontology/facilityId'>;
    /** number of faculty members */
    "facultySize": NamedNode<'http://dbpedia.org/ontology/facultySize'>;
    "failedLaunches": NamedNode<'http://dbpedia.org/ontology/failedLaunches'>;
    "family": NamedNode<'http://dbpedia.org/ontology/family'>;
    "familyMember": NamedNode<'http://dbpedia.org/ontology/familyMember'>;
    "fansgroup": NamedNode<'http://dbpedia.org/ontology/fansgroup'>;
    /** Die Tarifzone zu der die Station gehört. */
    "fareZone": NamedNode<'http://dbpedia.org/ontology/fareZone'>;
    "fastestDriver": NamedNode<'http://dbpedia.org/ontology/fastestDriver'>;
    "fastestDriverCountry": NamedNode<'http://dbpedia.org/ontology/fastestDriverCountry'>;
    "fastestDriverTeam": NamedNode<'http://dbpedia.org/ontology/fastestDriverTeam'>;
    "fastestLap": NamedNode<'http://dbpedia.org/ontology/fastestLap'>;
    /** Amount of fat per servingSize of a Food */
    "fat": NamedNode<'http://dbpedia.org/ontology/fat'>;
    "fatalityRate": NamedNode<'http://dbpedia.org/ontology/fatalityRate'>;
    "fate": NamedNode<'http://dbpedia.org/ontology/fate'>;
    "father": NamedNode<'http://dbpedia.org/ontology/father'>;
    "fauna": NamedNode<'http://dbpedia.org/ontology/fauna'>;
    "fc": NamedNode<'http://dbpedia.org/ontology/fc'>;
    "fcRuns": NamedNode<'http://dbpedia.org/ontology/fcRuns'>;
    /** FDA Unique Ingredient Identifier (UNII) code for a DBpedia Drug */
    "fdaUniiCode": NamedNode<'http://dbpedia.org/ontology/fdaUniiCode'>;
    /** A day of celebration associated with the entity. Applies to Saint, School etc */
    "feastDay": NamedNode<'http://dbpedia.org/ontology/feastDay'>;
    "feat": NamedNode<'http://dbpedia.org/ontology/feat'>;
    "feature": NamedNode<'http://dbpedia.org/ontology/feature'>;
    "features": NamedNode<'http://dbpedia.org/ontology/features'>;
    "fedCup": NamedNode<'http://dbpedia.org/ontology/fedCup'>;
    "federalState": NamedNode<'http://dbpedia.org/ontology/federalState'>;
    "federation": NamedNode<'http://dbpedia.org/ontology/federation'>;
    "fees": NamedNode<'http://dbpedia.org/ontology/fees'>;
    "fibahof": NamedNode<'http://dbpedia.org/ontology/fibahof'>;
    "field": NamedNode<'http://dbpedia.org/ontology/field'>;
    "fight": NamedNode<'http://dbpedia.org/ontology/fight'>;
    "fighter": NamedNode<'http://dbpedia.org/ontology/fighter'>;
    "fileExtension": NamedNode<'http://dbpedia.org/ontology/fileExtension'>;
    /** size of a file or software */
    "fileSize": NamedNode<'http://dbpedia.org/ontology/fileSize'>;
    "fileURL": NamedNode<'http://dbpedia.org/ontology/fileURL'>;
    "filename": NamedNode<'http://dbpedia.org/ontology/filename'>;
    "fillingStation": NamedNode<'http://dbpedia.org/ontology/fillingStation'>;
    "film": NamedNode<'http://dbpedia.org/ontology/film'>;
    /** specifies the audio type of the film i.e. 'sound' or 'silent' */
    "filmAudioType": NamedNode<'http://dbpedia.org/ontology/filmAudioType'>;
    /** specifies the colour type of the film i.e. 'colour' or 'b/w' */
    "filmColourType": NamedNode<'http://dbpedia.org/ontology/filmColourType'>;
    "filmFareAward": NamedNode<'http://dbpedia.org/ontology/filmFareAward'>;
    "filmNumber": NamedNode<'http://dbpedia.org/ontology/filmNumber'>;
    "filmPolskiId": NamedNode<'http://dbpedia.org/ontology/filmPolskiId'>;
    "filmRuntime": NamedNode<'http://dbpedia.org/ontology/filmRuntime'>;
    "filmVersion": NamedNode<'http://dbpedia.org/ontology/filmVersion'>;
    /** date of final flight */
    "finalFlight": NamedNode<'http://dbpedia.org/ontology/finalFlight'>;
    "finalLost": NamedNode<'http://dbpedia.org/ontology/finalLost'>;
    "finalLostDouble": NamedNode<'http://dbpedia.org/ontology/finalLostDouble'>;
    "finalLostSingle": NamedNode<'http://dbpedia.org/ontology/finalLostSingle'>;
    "finalLostTeam": NamedNode<'http://dbpedia.org/ontology/finalLostTeam'>;
    /** Date of the final publication. */
    "finalPublicationDate": NamedNode<'http://dbpedia.org/ontology/finalPublicationDate'>;
    /** Jahr der allerletzten Veröffentlichung des Periodikums. */
    "finalPublicationYear": NamedNode<'http://dbpedia.org/ontology/finalPublicationYear'>;
    "fipsCode": NamedNode<'http://dbpedia.org/ontology/fipsCode'>;
    /** The date on which regular broadcasts began. */
    "firstAirDate": NamedNode<'http://dbpedia.org/ontology/firstAirDate'>;
    "firstAppearance": NamedNode<'http://dbpedia.org/ontology/firstAppearance'>;
    "firstAscent": NamedNode<'http://dbpedia.org/ontology/firstAscent'>;
    "firstAscentPerson": NamedNode<'http://dbpedia.org/ontology/firstAscentPerson'>;
    "firstAscentYear": NamedNode<'http://dbpedia.org/ontology/firstAscentYear'>;
    "firstBroadcast": NamedNode<'http://dbpedia.org/ontology/firstBroadcast'>;
    "firstDriver": NamedNode<'http://dbpedia.org/ontology/firstDriver'>;
    "firstDriverCountry": NamedNode<'http://dbpedia.org/ontology/firstDriverCountry'>;
    "firstDriverTeam": NamedNode<'http://dbpedia.org/ontology/firstDriverTeam'>;
    "firstFlight": NamedNode<'http://dbpedia.org/ontology/firstFlight'>;
    "firstFlightEndDate": NamedNode<'http://dbpedia.org/ontology/firstFlightEndDate'>;
    "firstFlightStartDate": NamedNode<'http://dbpedia.org/ontology/firstFlightStartDate'>;
    "firstGame": NamedNode<'http://dbpedia.org/ontology/firstGame'>;
    "firstLaunch": NamedNode<'http://dbpedia.org/ontology/firstLaunch'>;
    "firstLaunchDate": NamedNode<'http://dbpedia.org/ontology/firstLaunchDate'>;
    "firstLaunchRocket": NamedNode<'http://dbpedia.org/ontology/firstLaunchRocket'>;
    "firstLeader": NamedNode<'http://dbpedia.org/ontology/firstLeader'>;
    "firstMention": NamedNode<'http://dbpedia.org/ontology/firstMention'>;
    "firstOlympicEvent": NamedNode<'http://dbpedia.org/ontology/firstOlympicEvent'>;
    "firstOwner": NamedNode<'http://dbpedia.org/ontology/firstOwner'>;
    "firstPlace": NamedNode<'http://dbpedia.org/ontology/firstPlace'>;
    "firstPopularVote": NamedNode<'http://dbpedia.org/ontology/firstPopularVote'>;
    "firstProMatch": NamedNode<'http://dbpedia.org/ontology/firstProMatch'>;
    /** Date of the first publication. */
    "firstPublicationDate": NamedNode<'http://dbpedia.org/ontology/firstPublicationDate'>;
    /** Jahr der ersten Veröffentlichung des Periodikums. */
    "firstPublicationYear": NamedNode<'http://dbpedia.org/ontology/firstPublicationYear'>;
    "firstPublisher": NamedNode<'http://dbpedia.org/ontology/firstPublisher'>;
    "firstRace": NamedNode<'http://dbpedia.org/ontology/firstRace'>;
    "firstWin": NamedNode<'http://dbpedia.org/ontology/firstWin'>;
    "firstWinner": NamedNode<'http://dbpedia.org/ontology/firstWinner'>;
    /** Wikimedia Commons file name representing the subject's flag */
    "flag": NamedNode<'http://dbpedia.org/ontology/flag'>;
    "flagBearer": NamedNode<'http://dbpedia.org/ontology/flagBearer'>;
    "flagBorder": NamedNode<'http://dbpedia.org/ontology/flagBorder'>;
    "flagCaption": NamedNode<'http://dbpedia.org/ontology/flagCaption'>;
    "flagLink": NamedNode<'http://dbpedia.org/ontology/flagLink'>;
    "flagSize": NamedNode<'http://dbpedia.org/ontology/flagSize'>;
    /** lowest temperature at which a substance can vaporize and start burning */
    "flashPoint": NamedNode<'http://dbpedia.org/ontology/flashPoint'>;
    "floodingDate": NamedNode<'http://dbpedia.org/ontology/floodingDate'>;
    "floorArea": NamedNode<'http://dbpedia.org/ontology/floorArea'>;
    "floorCount": NamedNode<'http://dbpedia.org/ontology/floorCount'>;
    "flora": NamedNode<'http://dbpedia.org/ontology/flora'>;
    "flower": NamedNode<'http://dbpedia.org/ontology/flower'>;
    "flyingHours": NamedNode<'http://dbpedia.org/ontology/flyingHours'>;
    "foalDate": NamedNode<'http://dbpedia.org/ontology/foalDate'>;
    "focus": NamedNode<'http://dbpedia.org/ontology/focus'>;
    "followedBy": NamedNode<'http://dbpedia.org/ontology/followedBy'>;
    "followingEvent": NamedNode<'http://dbpedia.org/ontology/followingEvent'>;
    "follows": NamedNode<'http://dbpedia.org/ontology/follows'>;
    "foot": NamedNode<'http://dbpedia.org/ontology/foot'>;
    /** a preference to put one's left or right foot forward in surfing, wakeboarding, skateboarding, wakeskating, snowboarding and mountainboarding. The term is sometimes applied to the foot a footballer uses to kick. */
    "footedness": NamedNode<'http://dbpedia.org/ontology/footedness'>;
    "forces": NamedNode<'http://dbpedia.org/ontology/forces'>;
    "foresterDistrict": NamedNode<'http://dbpedia.org/ontology/foresterDistrict'>;
    /** Format of the resource (as object). Use dct:format for literal, format for object */
    "format": NamedNode<'http://dbpedia.org/ontology/format'>;
    "formationDate": NamedNode<'http://dbpedia.org/ontology/formationDate'>;
    "formationYear": NamedNode<'http://dbpedia.org/ontology/formationYear'>;
    /** A former member of the band. */
    "formerBandMember": NamedNode<'http://dbpedia.org/ontology/formerBandMember'>;
    /** A former parent broadcast network to which the broadcaster once belonged. */
    "formerBroadcastNetwork": NamedNode<'http://dbpedia.org/ontology/formerBroadcastNetwork'>;
    "formerCallsign": NamedNode<'http://dbpedia.org/ontology/formerCallsign'>;
    "formerChannel": NamedNode<'http://dbpedia.org/ontology/formerChannel'>;
    "formerChoreographer": NamedNode<'http://dbpedia.org/ontology/formerChoreographer'>;
    "formerCoach": NamedNode<'http://dbpedia.org/ontology/formerCoach'>;
    "formerHighschool": NamedNode<'http://dbpedia.org/ontology/formerHighschool'>;
    "formerName": NamedNode<'http://dbpedia.org/ontology/formerName'>;
    "formerPartner": NamedNode<'http://dbpedia.org/ontology/formerPartner'>;
    "formerTeam": NamedNode<'http://dbpedia.org/ontology/formerTeam'>;
    "formula": NamedNode<'http://dbpedia.org/ontology/formula'>;
    "fossil": NamedNode<'http://dbpedia.org/ontology/fossil'>;
    "foundation": NamedNode<'http://dbpedia.org/ontology/foundation'>;
    "foundationPlace": NamedNode<'http://dbpedia.org/ontology/foundationPlace'>;
    /** Identifies the founder of the described entity. This can be a person or a organisation for instance. */
    "foundedBy": NamedNode<'http://dbpedia.org/ontology/foundedBy'>;
    /** Ein Gründer oder Gründungsmitglied einer Organisation, Religion oder eines Ortes. */
    "founder": NamedNode<'http://dbpedia.org/ontology/founder'>;
    "foundingDate": NamedNode<'http://dbpedia.org/ontology/foundingDate'>;
    "foundingYear": NamedNode<'http://dbpedia.org/ontology/foundingYear'>;
    "fourthCommander": NamedNode<'http://dbpedia.org/ontology/fourthCommander'>;
    "frazioni": NamedNode<'http://dbpedia.org/ontology/frazioni'>;
    "free": NamedNode<'http://dbpedia.org/ontology/free'>;
    "freeDanseScore": NamedNode<'http://dbpedia.org/ontology/freeDanseScore'>;
    "freeFlightTime": NamedNode<'http://dbpedia.org/ontology/freeFlightTime'>;
    "freeLabel": NamedNode<'http://dbpedia.org/ontology/freeLabel'>;
    "freeProgCompetition": NamedNode<'http://dbpedia.org/ontology/freeProgCompetition'>;
    "freeProgScore": NamedNode<'http://dbpedia.org/ontology/freeProgScore'>;
    "freeScoreCompetition": NamedNode<'http://dbpedia.org/ontology/freeScoreCompetition'>;
    "frequency": NamedNode<'http://dbpedia.org/ontology/frequency'>;
    /** Die Häufigkeit der Erscheinungen des Periodikums (z.B. wöchentlich, monatlich). */
    "frequencyOfPublication": NamedNode<'http://dbpedia.org/ontology/frequencyOfPublication'>;
    "frequentlyUpdated": NamedNode<'http://dbpedia.org/ontology/frequentlyUpdated'>;
    "friend": NamedNode<'http://dbpedia.org/ontology/friend'>;
    "frontierLength": NamedNode<'http://dbpedia.org/ontology/frontierLength'>;
    "frozen": NamedNode<'http://dbpedia.org/ontology/frozen'>;
    "fuel": NamedNode<'http://dbpedia.org/ontology/fuel'>;
    "fuelCapacity": NamedNode<'http://dbpedia.org/ontology/fuelCapacity'>;
    "fuelConsumption": NamedNode<'http://dbpedia.org/ontology/fuelConsumption'>;
    "fuelSystem": NamedNode<'http://dbpedia.org/ontology/fuelSystem'>;
    "fuelType": NamedNode<'http://dbpedia.org/ontology/fuelType'>;
    "fuelTypeName": NamedNode<'http://dbpedia.org/ontology/fuelTypeName'>;
    "fullCompetition": NamedNode<'http://dbpedia.org/ontology/fullCompetition'>;
    "fullScore": NamedNode<'http://dbpedia.org/ontology/fullScore'>;
    "functionEndDate": NamedNode<'http://dbpedia.org/ontology/functionEndDate'>;
    "functionEndYear": NamedNode<'http://dbpedia.org/ontology/functionEndYear'>;
    "functionStartDate": NamedNode<'http://dbpedia.org/ontology/functionStartDate'>;
    "functionStartYear": NamedNode<'http://dbpedia.org/ontology/functionStartYear'>;
    /** A organisation financing the research project. */
    "fundedBy": NamedNode<'http://dbpedia.org/ontology/fundedBy'>;
    /** The last inquiry date about linguistics uses. */
    "galicianSpeakersDate": NamedNode<'http://dbpedia.org/ontology/galicianSpeakersDate'>;
    /** Percentage of Galician speakers. */
    "galicianSpeakersPercentage": NamedNode<'http://dbpedia.org/ontology/galicianSpeakersPercentage'>;
    /** A file contained in a gallery */
    "galleryItem": NamedNode<'http://dbpedia.org/ontology/galleryItem'>;
    /** A game artist is an artist who creates art for one or more types of games. Game artists are responsible for all of the aspects of game development that call for visual art. */
    "gameArtist": NamedNode<'http://dbpedia.org/ontology/gameArtist'>;
    "gameEngine": NamedNode<'http://dbpedia.org/ontology/gameEngine'>;
    "gameModus": NamedNode<'http://dbpedia.org/ontology/gameModus'>;
    "games": NamedNode<'http://dbpedia.org/ontology/games'>;
    "garrison": NamedNode<'http://dbpedia.org/ontology/garrison'>;
    /** Number or description of gas chambers of a ConcentrationCamp */
    "gasChambers": NamedNode<'http://dbpedia.org/ontology/gasChambers'>;
    /** Awards of the Catalan Academy of Cinema */
    "gaudiAward": NamedNode<'http://dbpedia.org/ontology/gaudiAward'>;
    "gdpPerCapita": NamedNode<'http://dbpedia.org/ontology/gdpPerCapita'>;
    "geminiAward": NamedNode<'http://dbpedia.org/ontology/geminiAward'>;
    "gender": NamedNode<'http://dbpedia.org/ontology/gender'>;
    "geneLocation": NamedNode<'http://dbpedia.org/ontology/geneLocation'>;
    /** the end of the gene */
    "geneLocationEnd": NamedNode<'http://dbpedia.org/ontology/geneLocationEnd'>;
    /** the start of the gene coordinates */
    "geneLocationStart": NamedNode<'http://dbpedia.org/ontology/geneLocationStart'>;
    "geneReviewsId": NamedNode<'http://dbpedia.org/ontology/geneReviewsId'>;
    "geneReviewsName": NamedNode<'http://dbpedia.org/ontology/geneReviewsName'>;
    "generalCouncil": NamedNode<'http://dbpedia.org/ontology/generalCouncil'>;
    "generalManager": NamedNode<'http://dbpedia.org/ontology/generalManager'>;
    "generationUnits": NamedNode<'http://dbpedia.org/ontology/generationUnits'>;
    /** the edition of the database used (i.e. hg19) */
    "genomeDB": NamedNode<'http://dbpedia.org/ontology/genomeDB'>;
    /** The genre of the thing (music group, film, etc.) */
    "genre": NamedNode<'http://dbpedia.org/ontology/genre'>;
    /** A rank in the classification of organisms, below family and above species; a taxon at that rank */
    "genus": NamedNode<'http://dbpedia.org/ontology/genus'>;
    "geolocDepartment": NamedNode<'http://dbpedia.org/ontology/geolocDepartment'>;
    "geolocDual": NamedNode<'http://dbpedia.org/ontology/geolocDual'>;
    "geologicPeriod": NamedNode<'http://dbpedia.org/ontology/geologicPeriod'>;
    "geology": NamedNode<'http://dbpedia.org/ontology/geology'>;
    /** is a measure of the inequality of a distribution. It is commonly used as a measure of inequality of income or wealth. */
    "giniCoefficient": NamedNode<'http://dbpedia.org/ontology/giniCoefficient'>;
    "giniCoefficientAsOf": NamedNode<'http://dbpedia.org/ontology/giniCoefficientAsOf'>;
    "giniCoefficientCategory": NamedNode<'http://dbpedia.org/ontology/giniCoefficientCategory'>;
    "giniCoefficientRanking": NamedNode<'http://dbpedia.org/ontology/giniCoefficientRanking'>;
    /** Indicates a Food's effect on a person's blood glucose (blood sugar) level. Typically ranges between 50 and 100, where 100 represents the standard, an equivalent amount of pure glucose */
    "glycemicIndex": NamedNode<'http://dbpedia.org/ontology/glycemicIndex'>;
    "gnisCode": NamedNode<'http://dbpedia.org/ontology/gnisCode'>;
    "gnl": NamedNode<'http://dbpedia.org/ontology/gnl'>;
    "goalsInLeague": NamedNode<'http://dbpedia.org/ontology/goalsInLeague'>;
    "goalsInNationalTeam": NamedNode<'http://dbpedia.org/ontology/goalsInNationalTeam'>;
    "goldMedalDouble": NamedNode<'http://dbpedia.org/ontology/goldMedalDouble'>;
    "goldMedalMixed": NamedNode<'http://dbpedia.org/ontology/goldMedalMixed'>;
    "goldMedalSingle": NamedNode<'http://dbpedia.org/ontology/goldMedalSingle'>;
    "goldMedalist": NamedNode<'http://dbpedia.org/ontology/goldMedalist'>;
    "goldenCalfAward": NamedNode<'http://dbpedia.org/ontology/goldenCalfAward'>;
    "goldenGlobeAward": NamedNode<'http://dbpedia.org/ontology/goldenGlobeAward'>;
    "goldenRaspberryAward": NamedNode<'http://dbpedia.org/ontology/goldenRaspberryAward'>;
    /** Body that owns/operates the Place. */
    "governingBody": NamedNode<'http://dbpedia.org/ontology/governingBody'>;
    "government": NamedNode<'http://dbpedia.org/ontology/government'>;
    "governmentCountry": NamedNode<'http://dbpedia.org/ontology/governmentCountry'>;
    "governmentElevation": NamedNode<'http://dbpedia.org/ontology/governmentElevation'>;
    "governmentMountain": NamedNode<'http://dbpedia.org/ontology/governmentMountain'>;
    "governmentPlace": NamedNode<'http://dbpedia.org/ontology/governmentPlace'>;
    "governmentPosition": NamedNode<'http://dbpedia.org/ontology/governmentPosition'>;
    "governmentRegion": NamedNode<'http://dbpedia.org/ontology/governmentRegion'>;
    /** broadly, the type of structure of its government */
    "governmentType": NamedNode<'http://dbpedia.org/ontology/governmentType'>;
    "governor": NamedNode<'http://dbpedia.org/ontology/governor'>;
    "governorGeneral": NamedNode<'http://dbpedia.org/ontology/governorGeneral'>;
    "governorate": NamedNode<'http://dbpedia.org/ontology/governorate'>;
    "goyaAward": NamedNode<'http://dbpedia.org/ontology/goyaAward'>;
    "gradName": NamedNode<'http://dbpedia.org/ontology/gradName'>;
    "gradNum": NamedNode<'http://dbpedia.org/ontology/gradNum'>;
    "grades": NamedNode<'http://dbpedia.org/ontology/grades'>;
    "grammyAward": NamedNode<'http://dbpedia.org/ontology/grammyAward'>;
    "grandsire": NamedNode<'http://dbpedia.org/ontology/grandsire'>;
    "grave": NamedNode<'http://dbpedia.org/ontology/grave'>;
    /** Refers to the famous 1918 edition of Gray's Anatomy. */
    "grayPage": NamedNode<'http://dbpedia.org/ontology/grayPage'>;
    /** Refers to the famous 1918 edition of Gray's Anatomy. */
    "graySubject": NamedNode<'http://dbpedia.org/ontology/graySubject'>;
    "greekName": NamedNode<'http://dbpedia.org/ontology/greekName'>;
    "greenLongDistancePisteNumber": NamedNode<'http://dbpedia.org/ontology/greenLongDistancePisteNumber'>;
    "greenSkiPisteNumber": NamedNode<'http://dbpedia.org/ontology/greenSkiPisteNumber'>;
    "gridReference": NamedNode<'http://dbpedia.org/ontology/gridReference'>;
    /** grinding capability for Mills */
    "grindingCapability": NamedNode<'http://dbpedia.org/ontology/grindingCapability'>;
    "gross": NamedNode<'http://dbpedia.org/ontology/gross'>;
    "grossDomesticProduct": NamedNode<'http://dbpedia.org/ontology/grossDomesticProduct'>;
    "grossDomesticProductAsOf": NamedNode<'http://dbpedia.org/ontology/grossDomesticProductAsOf'>;
    "grossDomesticProductNominalPerCapita": NamedNode<'http://dbpedia.org/ontology/grossDomesticProductNominalPerCapita'>;
    "grossDomesticProductPerPeople": NamedNode<'http://dbpedia.org/ontology/grossDomesticProductPerPeople'>;
    "grossDomesticProductPurchasingPowerParityPerCapita": NamedNode<'http://dbpedia.org/ontology/grossDomesticProductPurchasingPowerParityPerCapita'>;
    "grossDomesticProductRank": NamedNode<'http://dbpedia.org/ontology/grossDomesticProductRank'>;
    "ground": NamedNode<'http://dbpedia.org/ontology/ground'>;
    "groundsForLiquidation": NamedNode<'http://dbpedia.org/ontology/groundsForLiquidation'>;
    /** Aanduiding van de categorie mensen die door dit monument worden herdacht */
    "groupCommemorated": NamedNode<'http://dbpedia.org/ontology/groupCommemorated'>;
    "growingGrape": NamedNode<'http://dbpedia.org/ontology/growingGrape'>;
    "guest": NamedNode<'http://dbpedia.org/ontology/guest'>;
    "gun": NamedNode<'http://dbpedia.org/ontology/gun'>;
    "gymApparatus": NamedNode<'http://dbpedia.org/ontology/gymApparatus'>;
    "hairColor": NamedNode<'http://dbpedia.org/ontology/hairColor'>;
    "hairColour": NamedNode<'http://dbpedia.org/ontology/hairColour'>;
    "hairs": NamedNode<'http://dbpedia.org/ontology/hairs'>;
    "hallOfFame": NamedNode<'http://dbpedia.org/ontology/hallOfFame'>;
    "hand": NamedNode<'http://dbpedia.org/ontology/hand'>;
    /** an attribute of humans defined by their unequal distribution of fine motor skill between the left and right hands. */
    "handedness": NamedNode<'http://dbpedia.org/ontology/handedness'>;
    "handisport": NamedNode<'http://dbpedia.org/ontology/handisport'>;
    "hasAbsorbedMunicipality": NamedNode<'http://dbpedia.org/ontology/hasAbsorbedMunicipality'>;
    "hasAnnotation": NamedNode<'http://dbpedia.org/ontology/hasAnnotation'>;
    "hasChannel": NamedNode<'http://dbpedia.org/ontology/hasChannel'>;
    "hasInput": NamedNode<'http://dbpedia.org/ontology/hasInput'>;
    /** indicates another place situated inside. */
    "hasInsidePlace": NamedNode<'http://dbpedia.org/ontology/hasInsidePlace'>;
    "hasJunctionWith": NamedNode<'http://dbpedia.org/ontology/hasJunctionWith'>;
    "hasKMLData": NamedNode<'http://dbpedia.org/ontology/hasKMLData'>;
    "hasNaturalBust": NamedNode<'http://dbpedia.org/ontology/hasNaturalBust'>;
    /** indicates another place situated around outside. */
    "hasOutsidePlace": NamedNode<'http://dbpedia.org/ontology/hasOutsidePlace'>;
    /** Reserved for DBpedia. */
    "hasSurfaceForm": NamedNode<'http://dbpedia.org/ontology/hasSurfaceForm'>;
    /** variant or variation, for example all variations of a color */
    "hasVariant": NamedNode<'http://dbpedia.org/ontology/hasVariant'>;
    "head": NamedNode<'http://dbpedia.org/ontology/head'>;
    "headAlloy": NamedNode<'http://dbpedia.org/ontology/headAlloy'>;
    "headChef": NamedNode<'http://dbpedia.org/ontology/headChef'>;
    "headLabel": NamedNode<'http://dbpedia.org/ontology/headLabel'>;
    "headOfFamily": NamedNode<'http://dbpedia.org/ontology/headOfFamily'>;
    "headquarter": NamedNode<'http://dbpedia.org/ontology/headquarter'>;
    "headteacher": NamedNode<'http://dbpedia.org/ontology/headteacher'>;
    "height": NamedNode<'http://dbpedia.org/ontology/height'>;
    "heightAboveAverageTerrain": NamedNode<'http://dbpedia.org/ontology/heightAboveAverageTerrain'>;
    "heightAgainst": NamedNode<'http://dbpedia.org/ontology/heightAgainst'>;
    "heightAttack": NamedNode<'http://dbpedia.org/ontology/heightAttack'>;
    "heir": NamedNode<'http://dbpedia.org/ontology/heir'>;
    "heisman": NamedNode<'http://dbpedia.org/ontology/heisman'>;
    /** inscrit à un inventaires dédiés à la conservation du patrimoine, naturel ou culturel, existants dans le monde. */
    "heritageRegister": NamedNode<'http://dbpedia.org/ontology/heritageRegister'>;
    "hgncid": NamedNode<'http://dbpedia.org/ontology/hgncid'>;
    "highest": NamedNode<'http://dbpedia.org/ontology/highest'>;
    "highestAltitude": NamedNode<'http://dbpedia.org/ontology/highestAltitude'>;
    "highestBreak": NamedNode<'http://dbpedia.org/ontology/highestBreak'>;
    "highestBuildingInYear": NamedNode<'http://dbpedia.org/ontology/highestBuildingInYear'>;
    "highestMountain": NamedNode<'http://dbpedia.org/ontology/highestMountain'>;
    "highestPlace": NamedNode<'http://dbpedia.org/ontology/highestPlace'>;
    "highestPoint": NamedNode<'http://dbpedia.org/ontology/highestPoint'>;
    "highestPointIsland": NamedNode<'http://dbpedia.org/ontology/highestPointIsland'>;
    "highestPosition": NamedNode<'http://dbpedia.org/ontology/highestPosition'>;
    "highestRank": NamedNode<'http://dbpedia.org/ontology/highestRank'>;
    "highestRegion": NamedNode<'http://dbpedia.org/ontology/highestRegion'>;
    "highestState": NamedNode<'http://dbpedia.org/ontology/highestState'>;
    "highschool": NamedNode<'http://dbpedia.org/ontology/highschool'>;
    /** the highway system that a route is part of */
    "highwaySystem": NamedNode<'http://dbpedia.org/ontology/highwaySystem'>;
    "hipSize": NamedNode<'http://dbpedia.org/ontology/hipSize'>;
    "historicalMap": NamedNode<'http://dbpedia.org/ontology/historicalMap'>;
    "historicalName": NamedNode<'http://dbpedia.org/ontology/historicalName'>;
    "historicalRegion": NamedNode<'http://dbpedia.org/ontology/historicalRegion'>;
    "hof": NamedNode<'http://dbpedia.org/ontology/hof'>;
    "homage": NamedNode<'http://dbpedia.org/ontology/homage'>;
    "homeArena": NamedNode<'http://dbpedia.org/ontology/homeArena'>;
    /** A colour represented by its hex code (e.g.: #FF0000 or #40E0D0). */
    "homeColourHexCode": NamedNode<'http://dbpedia.org/ontology/homeColourHexCode'>;
    "homeStadium": NamedNode<'http://dbpedia.org/ontology/homeStadium'>;
    "homeport": NamedNode<'http://dbpedia.org/ontology/homeport'>;
    "hometown": NamedNode<'http://dbpedia.org/ontology/hometown'>;
    /** Honours bestowed upon a Person, Organization, RaceHorse, etc */
    "honours": NamedNode<'http://dbpedia.org/ontology/honours'>;
    "hopmanCup": NamedNode<'http://dbpedia.org/ontology/hopmanCup'>;
    "horseRidingDiscipline": NamedNode<'http://dbpedia.org/ontology/horseRidingDiscipline'>;
    "house": NamedNode<'http://dbpedia.org/ontology/house'>;
    "hraState": NamedNode<'http://dbpedia.org/ontology/hraState'>;
    "hsvCoordinateHue": NamedNode<'http://dbpedia.org/ontology/hsvCoordinateHue'>;
    "hsvCoordinateSaturation": NamedNode<'http://dbpedia.org/ontology/hsvCoordinateSaturation'>;
    "hsvCoordinateValue": NamedNode<'http://dbpedia.org/ontology/hsvCoordinateValue'>;
    "hubAirport": NamedNode<'http://dbpedia.org/ontology/hubAirport'>;
    /** a composite statistic used to rank countries by level of "human development" */
    "humanDevelopmentIndex": NamedNode<'http://dbpedia.org/ontology/humanDevelopmentIndex'>;
    "humanDevelopmentIndexAsOf": NamedNode<'http://dbpedia.org/ontology/humanDevelopmentIndexAsOf'>;
    "humanDevelopmentIndexRank": NamedNode<'http://dbpedia.org/ontology/humanDevelopmentIndexRank'>;
    "humanDevelopmentIndexRankingCategory": NamedNode<'http://dbpedia.org/ontology/humanDevelopmentIndexRankingCategory'>;
    /** Plants from which another plant (or cultivar) has been developed from */
    "hybrid": NamedNode<'http://dbpedia.org/ontology/hybrid'>;
    "iafdId": NamedNode<'http://dbpedia.org/ontology/iafdId'>;
    /** IATA designation for airline companies */
    "iataAirlineCode": NamedNode<'http://dbpedia.org/ontology/iataAirlineCode'>;
    "iataLocationIdentifier": NamedNode<'http://dbpedia.org/ontology/iataLocationIdentifier'>;
    /** The Internet Broadway Database ID (IBDB ID) from ibdb.com. */
    "ibdbId": NamedNode<'http://dbpedia.org/ontology/ibdbId'>;
    /** ICAO designation for airline companies */
    "icaoAirlineCode": NamedNode<'http://dbpedia.org/ontology/icaoAirlineCode'>;
    "icaoLocationIdentifier": NamedNode<'http://dbpedia.org/ontology/icaoLocationIdentifier'>;
    "icd10": NamedNode<'http://dbpedia.org/ontology/icd10'>;
    "icd1": NamedNode<'http://dbpedia.org/ontology/icd1'>;
    "icd9": NamedNode<'http://dbpedia.org/ontology/icd9'>;
    "icdo": NamedNode<'http://dbpedia.org/ontology/icdo'>;
    /** Standard iconographic elements used when depicting a Saint: pontifical, episcopal, insignia, martyrdom instruments */
    "iconographicAttributes": NamedNode<'http://dbpedia.org/ontology/iconographicAttributes'>;
    "id": NamedNode<'http://dbpedia.org/ontology/id'>;
    /** ID d'un film sur Allocine */
    "idAllocine": NamedNode<'http://dbpedia.org/ontology/idAllocine'>;
    "idNumber": NamedNode<'http://dbpedia.org/ontology/idNumber'>;
    "identificationSymbol": NamedNode<'http://dbpedia.org/ontology/identificationSymbol'>;
    "ideology": NamedNode<'http://dbpedia.org/ontology/ideology'>;
    "iftaAward": NamedNode<'http://dbpedia.org/ontology/iftaAward'>;
    "iihfHof": NamedNode<'http://dbpedia.org/ontology/iihfHof'>;
    "illiteracy": NamedNode<'http://dbpedia.org/ontology/illiteracy'>;
    /** Illustrator (where used throughout and a major feature) */
    "illustrator": NamedNode<'http://dbpedia.org/ontology/illustrator'>;
    /** the image size expressed in pixels */
    "imageSize": NamedNode<'http://dbpedia.org/ontology/imageSize'>;
    /** International Movie Database ID. Applies to Films, Actors, etc */
    "imdbId": NamedNode<'http://dbpedia.org/ontology/imdbId'>;
    /** Der Impact Factor oder genauer Journal Impact Factor (JIF) einer Fachzeitschrift soll messen, wie oft andere Zeitschriften einen Artikel aus ihr in Relation zur Gesamtzahl der dort veröffentlichten Artikel zitieren. Je höher der Impact Factor, desto angesehener ist eine Fachzeitschrift. */
    "impactFactor": NamedNode<'http://dbpedia.org/ontology/impactFactor'>;
    /** Census year of the imapct factor. */
    "impactFactorAsOf": NamedNode<'http://dbpedia.org/ontology/impactFactorAsOf'>;
    "importantStation": NamedNode<'http://dbpedia.org/ontology/importantStation'>;
    "imposedDanseCompetition": NamedNode<'http://dbpedia.org/ontology/imposedDanseCompetition'>;
    "imposedDanseScore": NamedNode<'http://dbpedia.org/ontology/imposedDanseScore'>;
    "inCemetery": NamedNode<'http://dbpedia.org/ontology/inCemetery'>;
    "inchi": NamedNode<'http://dbpedia.org/ontology/inchi'>;
    "inclination": NamedNode<'http://dbpedia.org/ontology/inclination'>;
    "income": NamedNode<'http://dbpedia.org/ontology/income'>;
    "incumbent": NamedNode<'http://dbpedia.org/ontology/incumbent'>;
    /** GND (Gemeinsame Normdatei) is an international authority file for the organisation of personal names, subject headings and corporate bodies from catalogues. It is used mainly for documentation in libraries and archives. The GND is managed by the German National Library in cooperation with various library networks. The GND falls under the Creative Commons Zero(CC0) license. */
    "individualisedGnd": NamedNode<'http://dbpedia.org/ontology/individualisedGnd'>;
    /** PND (Personennamendatei) data about a person. PND is published by the German National Library. For each person there is a record with her/his name, birth and occupation connected with a unique identifier, the PND number. */
    "individualisedPnd": NamedNode<'http://dbpedia.org/ontology/individualisedPnd'>;
    "industry": NamedNode<'http://dbpedia.org/ontology/industry'>;
    "infantMortality": NamedNode<'http://dbpedia.org/ontology/infantMortality'>;
    "inflow": NamedNode<'http://dbpedia.org/ontology/inflow'>;
    /** The subject influenced the object. inverseOf influencedBy. Subject and object can be Persons or Works (eg ProgrammingLanguage) */
    "influenced": NamedNode<'http://dbpedia.org/ontology/influenced'>;
    /** The subject was influenced by the object. inverseOf influenced. Subject and object can be Persons or Works (eg ProgrammingLanguage) */
    "influencedBy": NamedNode<'http://dbpedia.org/ontology/influencedBy'>;
    "information": NamedNode<'http://dbpedia.org/ontology/information'>;
    "informationName": NamedNode<'http://dbpedia.org/ontology/informationName'>;
    /** Main ingredient used to prepare a specific Food or Beverage. For strings use ingredientName, for objects use ingredient. */
    "ingredient": NamedNode<'http://dbpedia.org/ontology/ingredient'>;
    /** Main ingredient used to prepare a specific Food or Beverage. For strings use ingredientName, for objects use ingredient. */
    "ingredientName": NamedNode<'http://dbpedia.org/ontology/ingredientName'>;
    /** Initial use of the architectural structure. */
    "initiallyUsedFor": NamedNode<'http://dbpedia.org/ontology/initiallyUsedFor'>;
    /** International Nonproprietary Name given to a pharmaceutical substance */
    "inn": NamedNode<'http://dbpedia.org/ontology/inn'>;
    "innervates": NamedNode<'http://dbpedia.org/ontology/innervates'>;
    /** Text of an inscription on the object */
    "inscription": NamedNode<'http://dbpedia.org/ontology/inscription'>;
    /** numerical indexing code used by the French National Institute for Statistics and Economic Studies (INSEE) to identify various entities */
    "inseeCode": NamedNode<'http://dbpedia.org/ontology/inseeCode'>;
    "installedCapacity": NamedNode<'http://dbpedia.org/ontology/installedCapacity'>;
    "institution": NamedNode<'http://dbpedia.org/ontology/institution'>;
    "instrument": NamedNode<'http://dbpedia.org/ontology/instrument'>;
    "intercommunality": NamedNode<'http://dbpedia.org/ontology/intercommunality'>;
    "interest": NamedNode<'http://dbpedia.org/ontology/interest'>;
    "internationalAffiliation": NamedNode<'http://dbpedia.org/ontology/internationalAffiliation'>;
    "internationalPhonePrefix": NamedNode<'http://dbpedia.org/ontology/internationalPhonePrefix'>;
    "internationalPhonePrefixLabel": NamedNode<'http://dbpedia.org/ontology/internationalPhonePrefixLabel'>;
    "internationally": NamedNode<'http://dbpedia.org/ontology/internationally'>;
    "introduced": NamedNode<'http://dbpedia.org/ontology/introduced'>;
    "introductionDate": NamedNode<'http://dbpedia.org/ontology/introductionDate'>;
    /** Lortel Archives Internet Off-Broadway database "show id" from lortel.org. */
    "iobdbId": NamedNode<'http://dbpedia.org/ontology/iobdbId'>;
    "isCityState": NamedNode<'http://dbpedia.org/ontology/isCityState'>;
    /** True if the station is handicapped accessible. */
    "isHandicappedAccessible": NamedNode<'http://dbpedia.org/ontology/isHandicappedAccessible'>;
    "isPartOf": NamedNode<'http://dbpedia.org/ontology/isPartOf'>;
    "isPartOfAnatomicalStructure": NamedNode<'http://dbpedia.org/ontology/isPartOfAnatomicalStructure'>;
    "isPartOfMilitaryConflict": NamedNode<'http://dbpedia.org/ontology/isPartOfMilitaryConflict'>;
    /** Name of another thing that this thing is part of. Use for infobox "part of" properties given as text; for objects use isPartOf */
    "isPartOfName": NamedNode<'http://dbpedia.org/ontology/isPartOfName'>;
    "isPartOfWineRegion": NamedNode<'http://dbpedia.org/ontology/isPartOfWineRegion'>;
    /** In academia peer review is often used to determine an academic papers suitability for publication. */
    "isPeerReviewed": NamedNode<'http://dbpedia.org/ontology/isPeerReviewed'>;
    /** indicate a place is a stop on a road. */
    "isRouteStop": NamedNode<'http://dbpedia.org/ontology/isRouteStop'>;
    /** The International Standard Book Number (ISBN) is a unique numeric commercial book identifier based upon the 9-digit Standard Book Numbering (SBN) code. */
    "isbn": NamedNode<'http://dbpedia.org/ontology/isbn'>;
    "isil": NamedNode<'http://dbpedia.org/ontology/isil'>;
    "island": NamedNode<'http://dbpedia.org/ontology/island'>;
    /** ISNI is a method for uniquely identifying the public identities of contributors to media content such as books, TV programmes, and newspaper articles. */
    "isniId": NamedNode<'http://dbpedia.org/ontology/isniId'>;
    /** defines codes for the names of countries, dependent territories, and special areas of geographical interest */
    "iso31661Code": NamedNode<'http://dbpedia.org/ontology/iso31661Code'>;
    "iso6391Code": NamedNode<'http://dbpedia.org/ontology/iso6391Code'>;
    "iso6392Code": NamedNode<'http://dbpedia.org/ontology/iso6392Code'>;
    "iso6393Code": NamedNode<'http://dbpedia.org/ontology/iso6393Code'>;
    "isoCode": NamedNode<'http://dbpedia.org/ontology/isoCode'>;
    "isoCodeRegion": NamedNode<'http://dbpedia.org/ontology/isoCodeRegion'>;
    "issDockings": NamedNode<'http://dbpedia.org/ontology/issDockings'>;
    /** International Standard Serial Number (ISSN) */
    "issn": NamedNode<'http://dbpedia.org/ontology/issn'>;
    "ist": NamedNode<'http://dbpedia.org/ontology/ist'>;
    /** Indexing code used for Italian municipalities */
    "istat": NamedNode<'http://dbpedia.org/ontology/istat'>;
    "ithfDate": NamedNode<'http://dbpedia.org/ontology/ithfDate'>;
    "iucnCategory": NamedNode<'http://dbpedia.org/ontology/iucnCategory'>;
    "iupacName": NamedNode<'http://dbpedia.org/ontology/iupacName'>;
    "jockey": NamedNode<'http://dbpedia.org/ontology/jockey'>;
    "jointCommunity": NamedNode<'http://dbpedia.org/ontology/jointCommunity'>;
    /** JSTOR number (short for Journal Storage) is a United States-based online system number for archiving academic journals. */
    "jstor": NamedNode<'http://dbpedia.org/ontology/jstor'>;
    /** leading judge */
    "judge": NamedNode<'http://dbpedia.org/ontology/judge'>;
    "juniorSeason": NamedNode<'http://dbpedia.org/ontology/juniorSeason'>;
    "juniorTeam": NamedNode<'http://dbpedia.org/ontology/juniorTeam'>;
    "juniorYearsEndYear": NamedNode<'http://dbpedia.org/ontology/juniorYearsEndYear'>;
    "juniorYearsStartYear": NamedNode<'http://dbpedia.org/ontology/juniorYearsStartYear'>;
    "jureLanguage": NamedNode<'http://dbpedia.org/ontology/jureLanguage'>;
    /** Die Zuständigkeit oder Kompetenz legt im öffentlichen Recht fest, welche Behörde bzw. welches Gericht im Einzelfall rechtlich zu hoheitlichem Handeln ermächtigt und verpflichtet ist. */
    "jurisdiction": NamedNode<'http://dbpedia.org/ontology/jurisdiction'>;
    "jutsu": NamedNode<'http://dbpedia.org/ontology/jutsu'>;
    "kegg": NamedNode<'http://dbpedia.org/ontology/kegg'>;
    "keyPerson": NamedNode<'http://dbpedia.org/ontology/keyPerson'>;
    "khlDraft": NamedNode<'http://dbpedia.org/ontology/khlDraft'>;
    "khlDraftTeam": NamedNode<'http://dbpedia.org/ontology/khlDraftTeam'>;
    "khlDraftYear": NamedNode<'http://dbpedia.org/ontology/khlDraftYear'>;
    "killedBy": NamedNode<'http://dbpedia.org/ontology/killedBy'>;
    "kinOfLanguage": NamedNode<'http://dbpedia.org/ontology/kinOfLanguage'>;
    "kindOfCoordinate": NamedNode<'http://dbpedia.org/ontology/kindOfCoordinate'>;
    "kindOfCriminal": NamedNode<'http://dbpedia.org/ontology/kindOfCriminal'>;
    "kindOfCriminalAction": NamedNode<'http://dbpedia.org/ontology/kindOfCriminalAction'>;
    "kindOfRock": NamedNode<'http://dbpedia.org/ontology/kindOfRock'>;
    /** In biology, kingdom (Latin: regnum, pl. regna) is a taxonomic rank, which is either the highest rank or in the more recent three-domain system, the rank below domain. */
    "kingdom": NamedNode<'http://dbpedia.org/ontology/kingdom'>;
    /** Work, historic event, etc that the subject is known for. Applies to Person, Organization, ConcentrationCamp, etc */
    "knownFor": NamedNode<'http://dbpedia.org/ontology/knownFor'>;
    "ko": NamedNode<'http://dbpedia.org/ontology/ko'>;
    "lahHof": NamedNode<'http://dbpedia.org/ontology/lahHof'>;
    "lake": NamedNode<'http://dbpedia.org/ontology/lake'>;
    "land": NamedNode<'http://dbpedia.org/ontology/land'>;
    "landArea": NamedNode<'http://dbpedia.org/ontology/landArea'>;
    "landPercentage": NamedNode<'http://dbpedia.org/ontology/landPercentage'>;
    "landRegistryCode": NamedNode<'http://dbpedia.org/ontology/landRegistryCode'>;
    "landeshauptmann": NamedNode<'http://dbpedia.org/ontology/landeshauptmann'>;
    "landingDate": NamedNode<'http://dbpedia.org/ontology/landingDate'>;
    "landingSite": NamedNode<'http://dbpedia.org/ontology/landingSite'>;
    "landingVehicle": NamedNode<'http://dbpedia.org/ontology/landingVehicle'>;
    "landskap": NamedNode<'http://dbpedia.org/ontology/landskap'>;
    "landtag": NamedNode<'http://dbpedia.org/ontology/landtag'>;
    "landtagMandate": NamedNode<'http://dbpedia.org/ontology/landtagMandate'>;
    /** Use dc:language for literal, language for object */
    "language": NamedNode<'http://dbpedia.org/ontology/language'>;
    "languageCode": NamedNode<'http://dbpedia.org/ontology/languageCode'>;
    "languageFamily": NamedNode<'http://dbpedia.org/ontology/languageFamily'>;
    "languageRegulator": NamedNode<'http://dbpedia.org/ontology/languageRegulator'>;
    "largestCity": NamedNode<'http://dbpedia.org/ontology/largestCity'>;
    "largestMetro": NamedNode<'http://dbpedia.org/ontology/largestMetro'>;
    "largestSettlement": NamedNode<'http://dbpedia.org/ontology/largestSettlement'>;
    "largestWin": NamedNode<'http://dbpedia.org/ontology/largestWin'>;
    /** The date on which the broadcaster made its last broadcast. */
    "lastAirDate": NamedNode<'http://dbpedia.org/ontology/lastAirDate'>;
    "lastAppearance": NamedNode<'http://dbpedia.org/ontology/lastAppearance'>;
    /** The last election date for the house. */
    "lastElectionDate": NamedNode<'http://dbpedia.org/ontology/lastElectionDate'>;
    "lastFamilyMember": NamedNode<'http://dbpedia.org/ontology/lastFamilyMember'>;
    "lastFlight": NamedNode<'http://dbpedia.org/ontology/lastFlight'>;
    "lastFlightEndDate": NamedNode<'http://dbpedia.org/ontology/lastFlightEndDate'>;
    "lastFlightStartDate": NamedNode<'http://dbpedia.org/ontology/lastFlightStartDate'>;
    "lastLaunch": NamedNode<'http://dbpedia.org/ontology/lastLaunch'>;
    "lastLaunchDate": NamedNode<'http://dbpedia.org/ontology/lastLaunchDate'>;
    "lastLaunchRocket": NamedNode<'http://dbpedia.org/ontology/lastLaunchRocket'>;
    "lastPosition": NamedNode<'http://dbpedia.org/ontology/lastPosition'>;
    "lastProMatch": NamedNode<'http://dbpedia.org/ontology/lastProMatch'>;
    /** Date of the last publication. */
    "lastPublicationDate": NamedNode<'http://dbpedia.org/ontology/lastPublicationDate'>;
    "lastRace": NamedNode<'http://dbpedia.org/ontology/lastRace'>;
    "lastSeason": NamedNode<'http://dbpedia.org/ontology/lastSeason'>;
    "lastWin": NamedNode<'http://dbpedia.org/ontology/lastWin'>;
    "laterality": NamedNode<'http://dbpedia.org/ontology/laterality'>;
    "latestElection": NamedNode<'http://dbpedia.org/ontology/latestElection'>;
    "latestPreviewDate": NamedNode<'http://dbpedia.org/ontology/latestPreviewDate'>;
    "latestPreviewVersion": NamedNode<'http://dbpedia.org/ontology/latestPreviewVersion'>;
    "latestReleaseDate": NamedNode<'http://dbpedia.org/ontology/latestReleaseDate'>;
    "latestReleaseVersion": NamedNode<'http://dbpedia.org/ontology/latestReleaseVersion'>;
    "latinName": NamedNode<'http://dbpedia.org/ontology/latinName'>;
    "launch": NamedNode<'http://dbpedia.org/ontology/launch'>;
    "launchDate": NamedNode<'http://dbpedia.org/ontology/launchDate'>;
    "launchPad": NamedNode<'http://dbpedia.org/ontology/launchPad'>;
    "launchSite": NamedNode<'http://dbpedia.org/ontology/launchSite'>;
    "launchVehicle": NamedNode<'http://dbpedia.org/ontology/launchVehicle'>;
    "launches": NamedNode<'http://dbpedia.org/ontology/launches'>;
    "laurenceOlivierAward": NamedNode<'http://dbpedia.org/ontology/laurenceOlivierAward'>;
    "lawCountry": NamedNode<'http://dbpedia.org/ontology/lawCountry'>;
    "layingDown": NamedNode<'http://dbpedia.org/ontology/layingDown'>;
    "layout": NamedNode<'http://dbpedia.org/ontology/layout'>;
    /** The Library of Congress Classification (LCC) is a system of library classification developed by the Library of Congress. */
    "lcc": NamedNode<'http://dbpedia.org/ontology/lcc'>;
    /** The Library of Congress Control Number or LCCN is a serially based system of numbering cataloging records in the Library of Congress in the United States. It has nothing to do with the contents of any book, and should not be confused with Library of Congress Classification. */
    "lccn": NamedNode<'http://dbpedia.org/ontology/lccn'>;
    /** Library of Congress Control Number */
    "lccnId": NamedNode<'http://dbpedia.org/ontology/lccnId'>;
    "lchfDraft": NamedNode<'http://dbpedia.org/ontology/lchfDraft'>;
    "lchfDraftTeam": NamedNode<'http://dbpedia.org/ontology/lchfDraftTeam'>;
    "lchfDraftYear": NamedNode<'http://dbpedia.org/ontology/lchfDraftYear'>;
    "leadTeam": NamedNode<'http://dbpedia.org/ontology/leadTeam'>;
    "leadYear": NamedNode<'http://dbpedia.org/ontology/leadYear'>;
    "leader": NamedNode<'http://dbpedia.org/ontology/leader'>;
    "leaderFunction": NamedNode<'http://dbpedia.org/ontology/leaderFunction'>;
    "leaderName": NamedNode<'http://dbpedia.org/ontology/leaderName'>;
    "leaderParty": NamedNode<'http://dbpedia.org/ontology/leaderParty'>;
    "leaderTitle": NamedNode<'http://dbpedia.org/ontology/leaderTitle'>;
    "leadership": NamedNode<'http://dbpedia.org/ontology/leadership'>;
    "league": NamedNode<'http://dbpedia.org/ontology/league'>;
    "leagueManager": NamedNode<'http://dbpedia.org/ontology/leagueManager'>;
    "leftChild": NamedNode<'http://dbpedia.org/ontology/leftChild'>;
    "leftTributary": NamedNode<'http://dbpedia.org/ontology/leftTributary'>;
    "legalArrondissement": NamedNode<'http://dbpedia.org/ontology/legalArrondissement'>;
    /** article in code book or statute book referred to in this legal case */
    "legalArticle": NamedNode<'http://dbpedia.org/ontology/legalArticle'>;
    /** Die Rechtsform definiert die juristischen Rahmenbedingungen einer Organisation bzw. Unternehmens. */
    "legalForm": NamedNode<'http://dbpedia.org/ontology/legalForm'>;
    /** The term of the on-going session (e.g.: "40th Canadian Parliament"). */
    "legislativePeriodName": NamedNode<'http://dbpedia.org/ontology/legislativePeriodName'>;
    "legislature": NamedNode<'http://dbpedia.org/ontology/legislature'>;
    "length": NamedNode<'http://dbpedia.org/ontology/length'>;
    "lengthQuote": NamedNode<'http://dbpedia.org/ontology/lengthQuote'>;
    "lengthReference": NamedNode<'http://dbpedia.org/ontology/lengthReference'>;
    "lethalOnChickens": NamedNode<'http://dbpedia.org/ontology/lethalOnChickens'>;
    "lethalOnMice": NamedNode<'http://dbpedia.org/ontology/lethalOnMice'>;
    "lethalOnRabbits": NamedNode<'http://dbpedia.org/ontology/lethalOnRabbits'>;
    "lethalOnRats": NamedNode<'http://dbpedia.org/ontology/lethalOnRats'>;
    "liberationDate": NamedNode<'http://dbpedia.org/ontology/liberationDate'>;
    "libretto": NamedNode<'http://dbpedia.org/ontology/libretto'>;
    "licenceLetter": NamedNode<'http://dbpedia.org/ontology/licenceLetter'>;
    "licenceNumber": NamedNode<'http://dbpedia.org/ontology/licenceNumber'>;
    "licenceNumberLabel": NamedNode<'http://dbpedia.org/ontology/licenceNumberLabel'>;
    "license": NamedNode<'http://dbpedia.org/ontology/license'>;
    /** Identify which company or entity holds the licence (mostly string are used in Wikipedia, therefore range is xsd:sting). */
    "licensee": NamedNode<'http://dbpedia.org/ontology/licensee'>;
    "lieutenancy": NamedNode<'http://dbpedia.org/ontology/lieutenancy'>;
    "lieutenancyArea": NamedNode<'http://dbpedia.org/ontology/lieutenancyArea'>;
    "lieutenant": NamedNode<'http://dbpedia.org/ontology/lieutenant'>;
    "lifeExpectancy": NamedNode<'http://dbpedia.org/ontology/lifeExpectancy'>;
    "limit": NamedNode<'http://dbpedia.org/ontology/limit'>;
    /** Length of the line. Wikipedians usually do not differentiate between track length and line lenght. */
    "lineLength": NamedNode<'http://dbpedia.org/ontology/lineLength'>;
    "linguisticsTradition": NamedNode<'http://dbpedia.org/ontology/linguisticsTradition'>;
    "linkedSpace": NamedNode<'http://dbpedia.org/ontology/linkedSpace'>;
    "linkedTo": NamedNode<'http://dbpedia.org/ontology/linkedTo'>;
    "listItemOf": NamedNode<'http://dbpedia.org/ontology/listItemOf'>;
    /** A literary genre is a category of literary composition. Genres may be determined by literary technique, tone, content, or even (as in the case of fiction) length. */
    "literaryGenre": NamedNode<'http://dbpedia.org/ontology/literaryGenre'>;
    "littlePoolRecord": NamedNode<'http://dbpedia.org/ontology/littlePoolRecord'>;
    "livingPlace": NamedNode<'http://dbpedia.org/ontology/livingPlace'>;
    /** Load limit of the bridge. */
    "loadLimit": NamedNode<'http://dbpedia.org/ontology/loadLimit'>;
    "localAuthority": NamedNode<'http://dbpedia.org/ontology/localAuthority'>;
    "localPhonePrefix": NamedNode<'http://dbpedia.org/ontology/localPhonePrefix'>;
    "locality": NamedNode<'http://dbpedia.org/ontology/locality'>;
    "localization": NamedNode<'http://dbpedia.org/ontology/localization'>;
    "localizationThumbnail": NamedNode<'http://dbpedia.org/ontology/localizationThumbnail'>;
    "localizationThumbnailCaption": NamedNode<'http://dbpedia.org/ontology/localizationThumbnailCaption'>;
    "locatedInArea": NamedNode<'http://dbpedia.org/ontology/locatedInArea'>;
    /** The location of the thing. */
    "location": NamedNode<'http://dbpedia.org/ontology/location'>;
    /** City the thing is located. */
    "locationCity": NamedNode<'http://dbpedia.org/ontology/locationCity'>;
    /** Country the thing is located. */
    "locationCountry": NamedNode<'http://dbpedia.org/ontology/locationCountry'>;
    "locationIdentifier": NamedNode<'http://dbpedia.org/ontology/locationIdentifier'>;
    /** Location of the thing as string. Use "location" if the location is a resource */
    "locationName": NamedNode<'http://dbpedia.org/ontology/locationName'>;
    "locomotive": NamedNode<'http://dbpedia.org/ontology/locomotive'>;
    "locusSupplementaryData": NamedNode<'http://dbpedia.org/ontology/locusSupplementaryData'>;
    "logo": NamedNode<'http://dbpedia.org/ontology/logo'>;
    "longDistancePisteKilometre": NamedNode<'http://dbpedia.org/ontology/longDistancePisteKilometre'>;
    "longDistancePisteNumber": NamedNode<'http://dbpedia.org/ontology/longDistancePisteNumber'>;
    "longName": NamedNode<'http://dbpedia.org/ontology/longName'>;
    /** can be used to include more informations e.g. the name of the artist that a tribute album is in honor of */
    "longtype": NamedNode<'http://dbpedia.org/ontology/longtype'>;
    "lounge": NamedNode<'http://dbpedia.org/ontology/lounge'>;
    "lowerAge": NamedNode<'http://dbpedia.org/ontology/lowerAge'>;
    /** Payload mass in a typical Low Earth orbit */
    "lowerEarthOrbitPayload": NamedNode<'http://dbpedia.org/ontology/lowerEarthOrbitPayload'>;
    "lowest": NamedNode<'http://dbpedia.org/ontology/lowest'>;
    "lowestAltitude": NamedNode<'http://dbpedia.org/ontology/lowestAltitude'>;
    "lowestMountain": NamedNode<'http://dbpedia.org/ontology/lowestMountain'>;
    "lowestPlace": NamedNode<'http://dbpedia.org/ontology/lowestPlace'>;
    "lowestPoint": NamedNode<'http://dbpedia.org/ontology/lowestPoint'>;
    "lowestPosition": NamedNode<'http://dbpedia.org/ontology/lowestPosition'>;
    "lowestRegion": NamedNode<'http://dbpedia.org/ontology/lowestRegion'>;
    "lowestState": NamedNode<'http://dbpedia.org/ontology/lowestState'>;
    "lunarEvaTime": NamedNode<'http://dbpedia.org/ontology/lunarEvaTime'>;
    "lunarLandingSite": NamedNode<'http://dbpedia.org/ontology/lunarLandingSite'>;
    "lunarModule": NamedNode<'http://dbpedia.org/ontology/lunarModule'>;
    "lunarOrbitTime": NamedNode<'http://dbpedia.org/ontology/lunarOrbitTime'>;
    "lunarRover": NamedNode<'http://dbpedia.org/ontology/lunarRover'>;
    "lunarSampleMass": NamedNode<'http://dbpedia.org/ontology/lunarSampleMass'>;
    "lunarSurfaceTime": NamedNode<'http://dbpedia.org/ontology/lunarSurfaceTime'>;
    "lymph": NamedNode<'http://dbpedia.org/ontology/lymph'>;
    /** Creator of the text of a MusicalWork, eg Musical, Opera or Song */
    "lyrics": NamedNode<'http://dbpedia.org/ontology/lyrics'>;
    "magazine": NamedNode<'http://dbpedia.org/ontology/magazine'>;
    /** date of maiden flight */
    "maidenFlight": NamedNode<'http://dbpedia.org/ontology/maidenFlight'>;
    "maidenFlightRocket": NamedNode<'http://dbpedia.org/ontology/maidenFlightRocket'>;
    "maidenVoyage": NamedNode<'http://dbpedia.org/ontology/maidenVoyage'>;
    "mainBuilding": NamedNode<'http://dbpedia.org/ontology/mainBuilding'>;
    "mainCharacter": NamedNode<'http://dbpedia.org/ontology/mainCharacter'>;
    "mainDomain": NamedNode<'http://dbpedia.org/ontology/mainDomain'>;
    "mainFamilyBranch": NamedNode<'http://dbpedia.org/ontology/mainFamilyBranch'>;
    "mainInterest": NamedNode<'http://dbpedia.org/ontology/mainInterest'>;
    "mainIsland": NamedNode<'http://dbpedia.org/ontology/mainIsland'>;
    "mainIslands": NamedNode<'http://dbpedia.org/ontology/mainIslands'>;
    "mainOrgan": NamedNode<'http://dbpedia.org/ontology/mainOrgan'>;
    "mainspan": NamedNode<'http://dbpedia.org/ontology/mainspan'>;
    "maintainedBy": NamedNode<'http://dbpedia.org/ontology/maintainedBy'>;
    "majorIsland": NamedNode<'http://dbpedia.org/ontology/majorIsland'>;
    "majorShrine": NamedNode<'http://dbpedia.org/ontology/majorShrine'>;
    /** number of office holder */
    "majorityFloorLeader": NamedNode<'http://dbpedia.org/ontology/majorityFloorLeader'>;
    /** number of office holder */
    "majorityLeader": NamedNode<'http://dbpedia.org/ontology/majorityLeader'>;
    /** the person who is responsible for the actors makeup */
    "makeupArtist": NamedNode<'http://dbpedia.org/ontology/makeupArtist'>;
    "management": NamedNode<'http://dbpedia.org/ontology/management'>;
    "managementCountry": NamedNode<'http://dbpedia.org/ontology/managementCountry'>;
    "managementElevation": NamedNode<'http://dbpedia.org/ontology/managementElevation'>;
    "managementMountain": NamedNode<'http://dbpedia.org/ontology/managementMountain'>;
    "managementPlace": NamedNode<'http://dbpedia.org/ontology/managementPlace'>;
    "managementPosition": NamedNode<'http://dbpedia.org/ontology/managementPosition'>;
    "managementRegion": NamedNode<'http://dbpedia.org/ontology/managementRegion'>;
    "manager": NamedNode<'http://dbpedia.org/ontology/manager'>;
    "managerClub": NamedNode<'http://dbpedia.org/ontology/managerClub'>;
    "managerSeason": NamedNode<'http://dbpedia.org/ontology/managerSeason'>;
    "managerTitle": NamedNode<'http://dbpedia.org/ontology/managerTitle'>;
    "managerYears": NamedNode<'http://dbpedia.org/ontology/managerYears'>;
    "managerYearsEndYear": NamedNode<'http://dbpedia.org/ontology/managerYearsEndYear'>;
    "managerYearsStartYear": NamedNode<'http://dbpedia.org/ontology/managerYearsStartYear'>;
    "managingEditor": NamedNode<'http://dbpedia.org/ontology/managingEditor'>;
    "mandate": NamedNode<'http://dbpedia.org/ontology/mandate'>;
    "manufactory": NamedNode<'http://dbpedia.org/ontology/manufactory'>;
    "manufacturer": NamedNode<'http://dbpedia.org/ontology/manufacturer'>;
    /** A map of the place. */
    "map": NamedNode<'http://dbpedia.org/ontology/map'>;
    "mapCaption": NamedNode<'http://dbpedia.org/ontology/mapCaption'>;
    "mapDescription": NamedNode<'http://dbpedia.org/ontology/mapDescription'>;
    "march": NamedNode<'http://dbpedia.org/ontology/march'>;
    "marketCapitalisation": NamedNode<'http://dbpedia.org/ontology/marketCapitalisation'>;
    /** Animal, poupée, objets divers servant de porte-bonheur ou d’emblème. */
    "mascot": NamedNode<'http://dbpedia.org/ontology/mascot'>;
    "mass": NamedNode<'http://dbpedia.org/ontology/mass'>;
    "massif": NamedNode<'http://dbpedia.org/ontology/massif'>;
    "mastersWins": NamedNode<'http://dbpedia.org/ontology/mastersWins'>;
    "matchPoint": NamedNode<'http://dbpedia.org/ontology/matchPoint'>;
    "material": NamedNode<'http://dbpedia.org/ontology/material'>;
    "max": NamedNode<'http://dbpedia.org/ontology/max'>;
    "maxAbsoluteMagnitude": NamedNode<'http://dbpedia.org/ontology/maxAbsoluteMagnitude'>;
    "maxApparentMagnitude": NamedNode<'http://dbpedia.org/ontology/maxApparentMagnitude'>;
    /** Maximum preparation time of a recipe / Food */
    "maxTime": NamedNode<'http://dbpedia.org/ontology/maxTime'>;
    "maximumArea": NamedNode<'http://dbpedia.org/ontology/maximumArea'>;
    "maximumAreaQuote": NamedNode<'http://dbpedia.org/ontology/maximumAreaQuote'>;
    "maximumBoatBeam": NamedNode<'http://dbpedia.org/ontology/maximumBoatBeam'>;
    "maximumBoatLength": NamedNode<'http://dbpedia.org/ontology/maximumBoatLength'>;
    /** Source of the value can be declare by . */
    "maximumDepth": NamedNode<'http://dbpedia.org/ontology/maximumDepth'>;
    /** Source of the  value. */
    "maximumDepthQuote": NamedNode<'http://dbpedia.org/ontology/maximumDepthQuote'>;
    "maximumDischarge": NamedNode<'http://dbpedia.org/ontology/maximumDischarge'>;
    /** maximum elevation above the sea level */
    "maximumElevation": NamedNode<'http://dbpedia.org/ontology/maximumElevation'>;
    "maximumInclination": NamedNode<'http://dbpedia.org/ontology/maximumInclination'>;
    "maximumTemperature": NamedNode<'http://dbpedia.org/ontology/maximumTemperature'>;
    "mayor": NamedNode<'http://dbpedia.org/ontology/mayor'>;
    "mayorArticle": NamedNode<'http://dbpedia.org/ontology/mayorArticle'>;
    "mayorCouncillor": NamedNode<'http://dbpedia.org/ontology/mayorCouncillor'>;
    "mayorFunction": NamedNode<'http://dbpedia.org/ontology/mayorFunction'>;
    "mayorMandate": NamedNode<'http://dbpedia.org/ontology/mayorMandate'>;
    "mayorTitle": NamedNode<'http://dbpedia.org/ontology/mayorTitle'>;
    /** MusicBrainz is an open music encyclopedia that collects music metadata and makes it available to the public. */
    "mbaId": NamedNode<'http://dbpedia.org/ontology/mbaId'>;
    "meanRadius": NamedNode<'http://dbpedia.org/ontology/meanRadius'>;
    "meanTemperature": NamedNode<'http://dbpedia.org/ontology/meanTemperature'>;
    "meaning": NamedNode<'http://dbpedia.org/ontology/meaning'>;
    "measurements": NamedNode<'http://dbpedia.org/ontology/measurements'>;
    "medalist": NamedNode<'http://dbpedia.org/ontology/medalist'>;
    "media": NamedNode<'http://dbpedia.org/ontology/media'>;
    /** A media file (such as audio, video or images) associated with the subject */
    "mediaItem": NamedNode<'http://dbpedia.org/ontology/mediaItem'>;
    /** Print / On-line (then binding types etc. if relevant) */
    "mediaType": NamedNode<'http://dbpedia.org/ontology/mediaType'>;
    "medicalCause": NamedNode<'http://dbpedia.org/ontology/medicalCause'>;
    "medicalDiagnosis": NamedNode<'http://dbpedia.org/ontology/medicalDiagnosis'>;
    "medicalSpecialty": NamedNode<'http://dbpedia.org/ontology/medicalSpecialty'>;
    "medication": NamedNode<'http://dbpedia.org/ontology/medication'>;
    "medlinePlus": NamedNode<'http://dbpedia.org/ontology/medlinePlus'>;
    "meetingBuilding": NamedNode<'http://dbpedia.org/ontology/meetingBuilding'>;
    "meetingCity": NamedNode<'http://dbpedia.org/ontology/meetingCity'>;
    /** A road that crosses another road at the junction. */
    "meetingRoad": NamedNode<'http://dbpedia.org/ontology/meetingRoad'>;
    "meltingPoint": NamedNode<'http://dbpedia.org/ontology/meltingPoint'>;
    "member": NamedNode<'http://dbpedia.org/ontology/member'>;
    "memberOfParliament": NamedNode<'http://dbpedia.org/ontology/memberOfParliament'>;
    "membership": NamedNode<'http://dbpedia.org/ontology/membership'>;
    "membershipAsOf": NamedNode<'http://dbpedia.org/ontology/membershipAsOf'>;
    /** A wise and trusted counselor or teacher */
    "mentor": NamedNode<'http://dbpedia.org/ontology/mentor'>;
    "mergedIntoParty": NamedNode<'http://dbpedia.org/ontology/mergedIntoParty'>;
    "mergedSettlement": NamedNode<'http://dbpedia.org/ontology/mergedSettlement'>;
    "mergedWith": NamedNode<'http://dbpedia.org/ontology/mergedWith'>;
    "mergerDate": NamedNode<'http://dbpedia.org/ontology/mergerDate'>;
    "meshId": NamedNode<'http://dbpedia.org/ontology/meshId'>;
    "meshName": NamedNode<'http://dbpedia.org/ontology/meshName'>;
    "meshNumber": NamedNode<'http://dbpedia.org/ontology/meshNumber'>;
    /** Name for Messier objects */
    "messierName": NamedNode<'http://dbpedia.org/ontology/messierName'>;
    "metropolitanBorough": NamedNode<'http://dbpedia.org/ontology/metropolitanBorough'>;
    /** Mouse Genomic Informatics ID */
    "mgiid": NamedNode<'http://dbpedia.org/ontology/mgiid'>;
    /** The service branch (Army, Navy, etc.) a person is part of. */
    "militaryBranch": NamedNode<'http://dbpedia.org/ontology/militaryBranch'>;
    /** For persons who are notable as commanding officers, the units they commanded. Dates should be given if multiple notable commands were held. */
    "militaryCommand": NamedNode<'http://dbpedia.org/ontology/militaryCommand'>;
    "militaryFunction": NamedNode<'http://dbpedia.org/ontology/militaryFunction'>;
    "militaryGovernment": NamedNode<'http://dbpedia.org/ontology/militaryGovernment'>;
    /** The highest rank achieved by a person. */
    "militaryRank": NamedNode<'http://dbpedia.org/ontology/militaryRank'>;
    "militaryService": NamedNode<'http://dbpedia.org/ontology/militaryService'>;
    /** For persons who are not notable as commanding officers, the unit (company, battalion, regiment, etc.) in which they served. */
    "militaryUnit": NamedNode<'http://dbpedia.org/ontology/militaryUnit'>;
    /** the size of the military unit */
    "militaryUnitSize": NamedNode<'http://dbpedia.org/ontology/militaryUnitSize'>;
    "millSpan": NamedNode<'http://dbpedia.org/ontology/millSpan'>;
    "millType": NamedNode<'http://dbpedia.org/ontology/millType'>;
    /** mills code from the Belgian database on mills */
    "millsCodeBE": NamedNode<'http://dbpedia.org/ontology/millsCodeBE'>;
    "millsCodeDutch": NamedNode<'http://dbpedia.org/ontology/millsCodeDutch'>;
    /** mills code from the central Dutch database on mills */
    "millsCodeNL": NamedNode<'http://dbpedia.org/ontology/millsCodeNL'>;
    "millsCodeNLVerdwenen": NamedNode<'http://dbpedia.org/ontology/millsCodeNLVerdwenen'>;
    "millsCodeNLWindmotoren": NamedNode<'http://dbpedia.org/ontology/millsCodeNLWindmotoren'>;
    "min": NamedNode<'http://dbpedia.org/ontology/min'>;
    /** Minimum preparation time of a recipe / Food */
    "minTime": NamedNode<'http://dbpedia.org/ontology/minTime'>;
    "minimumArea": NamedNode<'http://dbpedia.org/ontology/minimumArea'>;
    "minimumAreaQuote": NamedNode<'http://dbpedia.org/ontology/minimumAreaQuote'>;
    "minimumDischarge": NamedNode<'http://dbpedia.org/ontology/minimumDischarge'>;
    /** minimum elevation above the sea level */
    "minimumElevation": NamedNode<'http://dbpedia.org/ontology/minimumElevation'>;
    "minimumInclination": NamedNode<'http://dbpedia.org/ontology/minimumInclination'>;
    "minimumTemperature": NamedNode<'http://dbpedia.org/ontology/minimumTemperature'>;
    "minister": NamedNode<'http://dbpedia.org/ontology/minister'>;
    "minority": NamedNode<'http://dbpedia.org/ontology/minority'>;
    /** number of office holder */
    "minorityFloorLeader": NamedNode<'http://dbpedia.org/ontology/minorityFloorLeader'>;
    /** number of office holder */
    "minorityLeader": NamedNode<'http://dbpedia.org/ontology/minorityLeader'>;
    "mirDockings": NamedNode<'http://dbpedia.org/ontology/mirDockings'>;
    "mission": NamedNode<'http://dbpedia.org/ontology/mission'>;
    "missionDuration": NamedNode<'http://dbpedia.org/ontology/missionDuration'>;
    "missions": NamedNode<'http://dbpedia.org/ontology/missions'>;
    "model": NamedNode<'http://dbpedia.org/ontology/model'>;
    "modelEndDate": NamedNode<'http://dbpedia.org/ontology/modelEndDate'>;
    "modelEndYear": NamedNode<'http://dbpedia.org/ontology/modelEndYear'>;
    "modelLineVehicle": NamedNode<'http://dbpedia.org/ontology/modelLineVehicle'>;
    "modelStartDate": NamedNode<'http://dbpedia.org/ontology/modelStartDate'>;
    "modelStartYear": NamedNode<'http://dbpedia.org/ontology/modelStartYear'>;
    "molarMass": NamedNode<'http://dbpedia.org/ontology/molarMass'>;
    "molecularWeight": NamedNode<'http://dbpedia.org/ontology/molecularWeight'>;
    "monarch": NamedNode<'http://dbpedia.org/ontology/monarch'>;
    "month": NamedNode<'http://dbpedia.org/ontology/month'>;
    "mood": NamedNode<'http://dbpedia.org/ontology/mood'>;
    "mostDownPoint": NamedNode<'http://dbpedia.org/ontology/mostDownPoint'>;
    "mostSuccessfulPlayer": NamedNode<'http://dbpedia.org/ontology/mostSuccessfulPlayer'>;
    "mostWins": NamedNode<'http://dbpedia.org/ontology/mostWins'>;
    "mother": NamedNode<'http://dbpedia.org/ontology/mother'>;
    "motive": NamedNode<'http://dbpedia.org/ontology/motive'>;
    "motto": NamedNode<'http://dbpedia.org/ontology/motto'>;
    "mount": NamedNode<'http://dbpedia.org/ontology/mount'>;
    "mountainRange": NamedNode<'http://dbpedia.org/ontology/mountainRange'>;
    "mouthCountry": NamedNode<'http://dbpedia.org/ontology/mouthCountry'>;
    "mouthDistrict": NamedNode<'http://dbpedia.org/ontology/mouthDistrict'>;
    "mouthElevation": NamedNode<'http://dbpedia.org/ontology/mouthElevation'>;
    "mouthMountain": NamedNode<'http://dbpedia.org/ontology/mouthMountain'>;
    "mouthPlace": NamedNode<'http://dbpedia.org/ontology/mouthPlace'>;
    "mouthPosition": NamedNode<'http://dbpedia.org/ontology/mouthPosition'>;
    "mouthRegion": NamedNode<'http://dbpedia.org/ontology/mouthRegion'>;
    "mouthState": NamedNode<'http://dbpedia.org/ontology/mouthState'>;
    /** artistic movement or school with which artist is associated */
    "movement": NamedNode<'http://dbpedia.org/ontology/movement'>;
    "movie": NamedNode<'http://dbpedia.org/ontology/movie'>;
    "mukhtar": NamedNode<'http://dbpedia.org/ontology/mukhtar'>;
    "municipality": NamedNode<'http://dbpedia.org/ontology/municipality'>;
    "municipalityAbsorbedBy": NamedNode<'http://dbpedia.org/ontology/municipalityAbsorbedBy'>;
    "municipalityCode": NamedNode<'http://dbpedia.org/ontology/municipalityCode'>;
    "municipalityRenamedTo": NamedNode<'http://dbpedia.org/ontology/municipalityRenamedTo'>;
    "municipalityType": NamedNode<'http://dbpedia.org/ontology/municipalityType'>;
    "museum": NamedNode<'http://dbpedia.org/ontology/museum'>;
    /** Nieuw type is nodig omdat Museum eigenlijk geen subklasse van Building is, maar meer te maken heeft met de functie van het gebouw. 'Museumtype' is dan ook meer thema- en collectiegerelateerd */
    "museumType": NamedNode<'http://dbpedia.org/ontology/museumType'>;
    "musicBand": NamedNode<'http://dbpedia.org/ontology/musicBand'>;
    "musicBrainzArtistId": NamedNode<'http://dbpedia.org/ontology/musicBrainzArtistId'>;
    "musicBy": NamedNode<'http://dbpedia.org/ontology/musicBy'>;
    "musicComposer": NamedNode<'http://dbpedia.org/ontology/musicComposer'>;
    /** The format of the album: EP, Single etc. */
    "musicFormat": NamedNode<'http://dbpedia.org/ontology/musicFormat'>;
    "musicFusionGenre": NamedNode<'http://dbpedia.org/ontology/musicFusionGenre'>;
    "musicSubgenre": NamedNode<'http://dbpedia.org/ontology/musicSubgenre'>;
    /** Type is te algemeen. We moeten soorten muziek van soorten gebouwen kunnen onderscheiden */
    "musicType": NamedNode<'http://dbpedia.org/ontology/musicType'>;
    "musicalArtist": NamedNode<'http://dbpedia.org/ontology/musicalArtist'>;
    "musicalBand": NamedNode<'http://dbpedia.org/ontology/musicalBand'>;
    "musicalKey": NamedNode<'http://dbpedia.org/ontology/musicalKey'>;
    "musicians": NamedNode<'http://dbpedia.org/ontology/musicians'>;
    /** Name of a mute character in play. */
    "muteCharacterInPlay": NamedNode<'http://dbpedia.org/ontology/muteCharacterInPlay'>;
    "mvp": NamedNode<'http://dbpedia.org/ontology/mvp'>;
    "mythology": NamedNode<'http://dbpedia.org/ontology/mythology'>;
    "naacpImageAward": NamedNode<'http://dbpedia.org/ontology/naacpImageAward'>;
    "name": NamedNode<'http://dbpedia.org/ontology/name'>;
    "nameAsOf": NamedNode<'http://dbpedia.org/ontology/nameAsOf'>;
    "nameDay": NamedNode<'http://dbpedia.org/ontology/nameDay'>;
    "nameInCantoneseChinese": NamedNode<'http://dbpedia.org/ontology/nameInCantoneseChinese'>;
    "nameInHangulKorean": NamedNode<'http://dbpedia.org/ontology/nameInHangulKorean'>;
    "nameInHanjaKorean": NamedNode<'http://dbpedia.org/ontology/nameInHanjaKorean'>;
    "nameInJapanese": NamedNode<'http://dbpedia.org/ontology/nameInJapanese'>;
    "nameInMindongyuChinese": NamedNode<'http://dbpedia.org/ontology/nameInMindongyuChinese'>;
    "nameInMinnanyuChinese": NamedNode<'http://dbpedia.org/ontology/nameInMinnanyuChinese'>;
    "nameInPinyinChinese": NamedNode<'http://dbpedia.org/ontology/nameInPinyinChinese'>;
    "nameInSimplifiedChinese": NamedNode<'http://dbpedia.org/ontology/nameInSimplifiedChinese'>;
    "nameInTraditionalChinese": NamedNode<'http://dbpedia.org/ontology/nameInTraditionalChinese'>;
    "nameInWadeGilesChinese": NamedNode<'http://dbpedia.org/ontology/nameInWadeGilesChinese'>;
    "namedAfter": NamedNode<'http://dbpedia.org/ontology/namedAfter'>;
    "namedByLanguage": NamedNode<'http://dbpedia.org/ontology/namedByLanguage'>;
    "names": NamedNode<'http://dbpedia.org/ontology/names'>;
    "narrator": NamedNode<'http://dbpedia.org/ontology/narrator'>;
    "nation": NamedNode<'http://dbpedia.org/ontology/nation'>;
    "nationalAffiliation": NamedNode<'http://dbpedia.org/ontology/nationalAffiliation'>;
    "nationalChampionship": NamedNode<'http://dbpedia.org/ontology/nationalChampionship'>;
    "nationalFilmAward": NamedNode<'http://dbpedia.org/ontology/nationalFilmAward'>;
    "nationalOlympicCommittee": NamedNode<'http://dbpedia.org/ontology/nationalOlympicCommittee'>;
    "nationalRanking": NamedNode<'http://dbpedia.org/ontology/nationalRanking'>;
    "nationalSelection": NamedNode<'http://dbpedia.org/ontology/nationalSelection'>;
    "nationalTeam": NamedNode<'http://dbpedia.org/ontology/nationalTeam'>;
    "nationalTeamMatchPoint": NamedNode<'http://dbpedia.org/ontology/nationalTeamMatchPoint'>;
    "nationalTeamYear": NamedNode<'http://dbpedia.org/ontology/nationalTeamYear'>;
    "nationalTopographicSystemMapNumber": NamedNode<'http://dbpedia.org/ontology/nationalTopographicSystemMapNumber'>;
    "nationalTournament": NamedNode<'http://dbpedia.org/ontology/nationalTournament'>;
    "nationalTournamentBronze": NamedNode<'http://dbpedia.org/ontology/nationalTournamentBronze'>;
    "nationalTournamentGold": NamedNode<'http://dbpedia.org/ontology/nationalTournamentGold'>;
    "nationalTournamentSilver": NamedNode<'http://dbpedia.org/ontology/nationalTournamentSilver'>;
    "nationalYears": NamedNode<'http://dbpedia.org/ontology/nationalYears'>;
    "nationality": NamedNode<'http://dbpedia.org/ontology/nationality'>;
    "ncaaSeason": NamedNode<'http://dbpedia.org/ontology/ncaaSeason'>;
    "ncaaTeam": NamedNode<'http://dbpedia.org/ontology/ncaaTeam'>;
    "ncbhof": NamedNode<'http://dbpedia.org/ontology/ncbhof'>;
    "nciId": NamedNode<'http://dbpedia.org/ontology/nciId'>;
    /** National Diet Library of Japan identificator. http://id.ndl.go.jp/auth/ndlna/$1 */
    "ndlId": NamedNode<'http://dbpedia.org/ontology/ndlId'>;
    "nearestCity": NamedNode<'http://dbpedia.org/ontology/nearestCity'>;
    "neighboringMunicipality": NamedNode<'http://dbpedia.org/ontology/neighboringMunicipality'>;
    "neighbourConstellations": NamedNode<'http://dbpedia.org/ontology/neighbourConstellations'>;
    "neighbourRegion": NamedNode<'http://dbpedia.org/ontology/neighbourRegion'>;
    "neighbourhood": NamedNode<'http://dbpedia.org/ontology/neighbourhood'>;
    "nerve": NamedNode<'http://dbpedia.org/ontology/nerve'>;
    "netIncome": NamedNode<'http://dbpedia.org/ontology/netIncome'>;
    "network": NamedNode<'http://dbpedia.org/ontology/network'>;
    "networth": NamedNode<'http://dbpedia.org/ontology/networth'>;
    "newspaper": NamedNode<'http://dbpedia.org/ontology/newspaper'>;
    "nextEntity": NamedNode<'http://dbpedia.org/ontology/nextEntity'>;
    "nextEvent": NamedNode<'http://dbpedia.org/ontology/nextEvent'>;
    "nextMission": NamedNode<'http://dbpedia.org/ontology/nextMission'>;
    "nflCode": NamedNode<'http://dbpedia.org/ontology/nflCode'>;
    "nflSeason": NamedNode<'http://dbpedia.org/ontology/nflSeason'>;
    "nflTeam": NamedNode<'http://dbpedia.org/ontology/nflTeam'>;
    /** Name for NGC objects */
    "ngcName": NamedNode<'http://dbpedia.org/ontology/ngcName'>;
    /** Indexing code used by the Belgium National Statistical Institute to identify populated places. */
    "nisCode": NamedNode<'http://dbpedia.org/ontology/nisCode'>;
    /** NLA Trove’s People and Organisation view allows the discovery of biographical and other contextual information about people and organisations. Search also available via VIAF. */
    "nlaId": NamedNode<'http://dbpedia.org/ontology/nlaId'>;
    "nndbId": NamedNode<'http://dbpedia.org/ontology/nndbId'>;
    "noContest": NamedNode<'http://dbpedia.org/ontology/noContest'>;
    "nobelLaureates": NamedNode<'http://dbpedia.org/ontology/nobelLaureates'>;
    "nominee": NamedNode<'http://dbpedia.org/ontology/nominee'>;
    /** The subject of a non-fiction book (e.g.: History, Biography, Cookbook, Climate change, ...). */
    "nonFictionSubject": NamedNode<'http://dbpedia.org/ontology/nonFictionSubject'>;
    "nonProfessionalCareer": NamedNode<'http://dbpedia.org/ontology/nonProfessionalCareer'>;
    "nord": NamedNode<'http://dbpedia.org/ontology/nord'>;
    /** indicates another place situated north-east. */
    "northEastPlace": NamedNode<'http://dbpedia.org/ontology/northEastPlace'>;
    /** indicates another place situated north. */
    "northPlace": NamedNode<'http://dbpedia.org/ontology/northPlace'>;
    /** indicates another place situated north-west. */
    "northWestPlace": NamedNode<'http://dbpedia.org/ontology/northWestPlace'>;
    "notSolubleIn": NamedNode<'http://dbpedia.org/ontology/notSolubleIn'>;
    "notableCommander": NamedNode<'http://dbpedia.org/ontology/notableCommander'>;
    "notableFeatures": NamedNode<'http://dbpedia.org/ontology/notableFeatures'>;
    "notableIdea": NamedNode<'http://dbpedia.org/ontology/notableIdea'>;
    "notableStudent": NamedNode<'http://dbpedia.org/ontology/notableStudent'>;
    "notableWine": NamedNode<'http://dbpedia.org/ontology/notableWine'>;
    /** Notable work created by the subject (eg Writer, Artist, Engineer) or about the subject (eg ConcentrationCamp) */
    "notableWork": NamedNode<'http://dbpedia.org/ontology/notableWork'>;
    "note": NamedNode<'http://dbpedia.org/ontology/note'>;
    "noteOnPlaceOfBurial": NamedNode<'http://dbpedia.org/ontology/noteOnPlaceOfBurial'>;
    "noteOnRestingPlace": NamedNode<'http://dbpedia.org/ontology/noteOnRestingPlace'>;
    /** additional notes that better describe the entity. */
    "notes": NamedNode<'http://dbpedia.org/ontology/notes'>;
    "notifyDate": NamedNode<'http://dbpedia.org/ontology/notifyDate'>;
    "novel": NamedNode<'http://dbpedia.org/ontology/novel'>;
    "nrhpReferenceNumber": NamedNode<'http://dbpedia.org/ontology/nrhpReferenceNumber'>;
    /** Type of historic place as defined by the US National Park Service. For instance National Historic Landmark, National Monument or National Battlefield. */
    "nrhpType": NamedNode<'http://dbpedia.org/ontology/nrhpType'>;
    "nssdcId": NamedNode<'http://dbpedia.org/ontology/nssdcId'>;
    /** Jersey number of an Athlete (sports player, eg "99") or sequential number of an Album (eg "Third studio album") */
    "number": NamedNode<'http://dbpedia.org/ontology/number'>;
    "numberBuilt": NamedNode<'http://dbpedia.org/ontology/numberBuilt'>;
    "numberOfAcademicStaff": NamedNode<'http://dbpedia.org/ontology/numberOfAcademicStaff'>;
    /** the total number of albums released by the musical artist */
    "numberOfAlbums": NamedNode<'http://dbpedia.org/ontology/numberOfAlbums'>;
    "numberOfArrondissement": NamedNode<'http://dbpedia.org/ontology/numberOfArrondissement'>;
    "numberOfBombs": NamedNode<'http://dbpedia.org/ontology/numberOfBombs'>;
    "numberOfBronzeMedalsWon": NamedNode<'http://dbpedia.org/ontology/numberOfBronzeMedalsWon'>;
    "numberOfCanton": NamedNode<'http://dbpedia.org/ontology/numberOfCanton'>;
    "numberOfCantons": NamedNode<'http://dbpedia.org/ontology/numberOfCantons'>;
    "numberOfCapitalDeputies": NamedNode<'http://dbpedia.org/ontology/numberOfCapitalDeputies'>;
    "numberOfCity": NamedNode<'http://dbpedia.org/ontology/numberOfCity'>;
    "numberOfClasses": NamedNode<'http://dbpedia.org/ontology/numberOfClasses'>;
    "numberOfClassesWithResource": NamedNode<'http://dbpedia.org/ontology/numberOfClassesWithResource'>;
    "numberOfClassrooms": NamedNode<'http://dbpedia.org/ontology/numberOfClassrooms'>;
    "numberOfClubs": NamedNode<'http://dbpedia.org/ontology/numberOfClubs'>;
    /** Aanduiding van omvang van de collectie van deze bibliotheek */
    "numberOfCollectionItems": NamedNode<'http://dbpedia.org/ontology/numberOfCollectionItems'>;
    "numberOfCompetitors": NamedNode<'http://dbpedia.org/ontology/numberOfCompetitors'>;
    "numberOfCounties": NamedNode<'http://dbpedia.org/ontology/numberOfCounties'>;
    "numberOfCountries": NamedNode<'http://dbpedia.org/ontology/numberOfCountries'>;
    "numberOfCrew": NamedNode<'http://dbpedia.org/ontology/numberOfCrew'>;
    "numberOfDeaths": NamedNode<'http://dbpedia.org/ontology/numberOfDeaths'>;
    "numberOfDependency": NamedNode<'http://dbpedia.org/ontology/numberOfDependency'>;
    "numberOfDisambiguates": NamedNode<'http://dbpedia.org/ontology/numberOfDisambiguates'>;
    "numberOfDistrict": NamedNode<'http://dbpedia.org/ontology/numberOfDistrict'>;
    "numberOfDistricts": NamedNode<'http://dbpedia.org/ontology/numberOfDistricts'>;
    "numberOfDoctoralStudents": NamedNode<'http://dbpedia.org/ontology/numberOfDoctoralStudents'>;
    "numberOfDoors": NamedNode<'http://dbpedia.org/ontology/numberOfDoors'>;
    "numberOfEmployees": NamedNode<'http://dbpedia.org/ontology/numberOfEmployees'>;
    "numberOfEntrances": NamedNode<'http://dbpedia.org/ontology/numberOfEntrances'>;
    "numberOfEpisodes": NamedNode<'http://dbpedia.org/ontology/numberOfEpisodes'>;
    "numberOfFederalDeputies": NamedNode<'http://dbpedia.org/ontology/numberOfFederalDeputies'>;
    "numberOfFilms": NamedNode<'http://dbpedia.org/ontology/numberOfFilms'>;
    "numberOfGoals": NamedNode<'http://dbpedia.org/ontology/numberOfGoals'>;
    "numberOfGoldMedalsWon": NamedNode<'http://dbpedia.org/ontology/numberOfGoldMedalsWon'>;
    "numberOfGraduateStudents": NamedNode<'http://dbpedia.org/ontology/numberOfGraduateStudents'>;
    "numberOfGraves": NamedNode<'http://dbpedia.org/ontology/numberOfGraves'>;
    "numberOfHoles": NamedNode<'http://dbpedia.org/ontology/numberOfHoles'>;
    /** Aantal huizen in afgegrensd gebied */
    "numberOfHouses": NamedNode<'http://dbpedia.org/ontology/numberOfHouses'>;
    "numberOfIndegree": NamedNode<'http://dbpedia.org/ontology/numberOfIndegree'>;
    "numberOfIntercommunality": NamedNode<'http://dbpedia.org/ontology/numberOfIntercommunality'>;
    "numberOfIsland": NamedNode<'http://dbpedia.org/ontology/numberOfIsland'>;
    "numberOfIslands": NamedNode<'http://dbpedia.org/ontology/numberOfIslands'>;
    "numberOfLanes": NamedNode<'http://dbpedia.org/ontology/numberOfLanes'>;
    "numberOfLaps": NamedNode<'http://dbpedia.org/ontology/numberOfLaps'>;
    "numberOfLaunches": NamedNode<'http://dbpedia.org/ontology/numberOfLaunches'>;
    /** Number of lawyers or attorneys in the company. */
    "numberOfLawyers": NamedNode<'http://dbpedia.org/ontology/numberOfLawyers'>;
    "numberOfLifts": NamedNode<'http://dbpedia.org/ontology/numberOfLifts'>;
    /** Number of lines in the transit system. */
    "numberOfLines": NamedNode<'http://dbpedia.org/ontology/numberOfLines'>;
    /** the number of live albums released by the musical artist */
    "numberOfLiveAlbums": NamedNode<'http://dbpedia.org/ontology/numberOfLiveAlbums'>;
    "numberOfLocations": NamedNode<'http://dbpedia.org/ontology/numberOfLocations'>;
    "numberOfMatches": NamedNode<'http://dbpedia.org/ontology/numberOfMatches'>;
    "numberOfMembers": NamedNode<'http://dbpedia.org/ontology/numberOfMembers'>;
    "numberOfMembersAsOf": NamedNode<'http://dbpedia.org/ontology/numberOfMembersAsOf'>;
    "numberOfMinistries": NamedNode<'http://dbpedia.org/ontology/numberOfMinistries'>;
    "numberOfMunicipalities": NamedNode<'http://dbpedia.org/ontology/numberOfMunicipalities'>;
    "numberOfMusicalArtistEntities": NamedNode<'http://dbpedia.org/ontology/numberOfMusicalArtistEntities'>;
    "numberOfMusicalArtistInstrument": NamedNode<'http://dbpedia.org/ontology/numberOfMusicalArtistInstrument'>;
    "numberOfMusicalArtistStyle": NamedNode<'http://dbpedia.org/ontology/numberOfMusicalArtistStyle'>;
    "numberOfNeighbourhood": NamedNode<'http://dbpedia.org/ontology/numberOfNeighbourhood'>;
    "numberOfNewlyIntroducedSports": NamedNode<'http://dbpedia.org/ontology/numberOfNewlyIntroducedSports'>;
    /** Number of the company's offices. */
    "numberOfOffices": NamedNode<'http://dbpedia.org/ontology/numberOfOffices'>;
    "numberOfOfficials": NamedNode<'http://dbpedia.org/ontology/numberOfOfficials'>;
    "numberOfOrbits": NamedNode<'http://dbpedia.org/ontology/numberOfOrbits'>;
    "numberOfOutdegree": NamedNode<'http://dbpedia.org/ontology/numberOfOutdegree'>;
    "numberOfPads": NamedNode<'http://dbpedia.org/ontology/numberOfPads'>;
    /** The books number of pages. */
    "numberOfPages": NamedNode<'http://dbpedia.org/ontology/numberOfPages'>;
    "numberOfParkingSpaces": NamedNode<'http://dbpedia.org/ontology/numberOfParkingSpaces'>;
    "numberOfParticipatingAthletes": NamedNode<'http://dbpedia.org/ontology/numberOfParticipatingAthletes'>;
    "numberOfParticipatingFemaleAthletes": NamedNode<'http://dbpedia.org/ontology/numberOfParticipatingFemaleAthletes'>;
    "numberOfParticipatingMaleAthletes": NamedNode<'http://dbpedia.org/ontology/numberOfParticipatingMaleAthletes'>;
    "numberOfParticipatingNations": NamedNode<'http://dbpedia.org/ontology/numberOfParticipatingNations'>;
    "numberOfPassengers": NamedNode<'http://dbpedia.org/ontology/numberOfPassengers'>;
    "numberOfPeopleAttending": NamedNode<'http://dbpedia.org/ontology/numberOfPeopleAttending'>;
    /** nombre de personnes ayant une license pour pratiquer cette activité */
    "numberOfPeopleLicensed": NamedNode<'http://dbpedia.org/ontology/numberOfPeopleLicensed'>;
    "numberOfPersonBornInPlace": NamedNode<'http://dbpedia.org/ontology/numberOfPersonBornInPlace'>;
    "numberOfPersonEntities": NamedNode<'http://dbpedia.org/ontology/numberOfPersonEntities'>;
    "numberOfPersonFromUniversity": NamedNode<'http://dbpedia.org/ontology/numberOfPersonFromUniversity'>;
    "numberOfPersonInOccupation": NamedNode<'http://dbpedia.org/ontology/numberOfPersonInOccupation'>;
    /** Number of piers standing in a river or other water in normal conditions. */
    "numberOfPiersInWater": NamedNode<'http://dbpedia.org/ontology/numberOfPiersInWater'>;
    "numberOfPixels": NamedNode<'http://dbpedia.org/ontology/numberOfPixels'>;
    /** Number of levels of platforms at the station. */
    "numberOfPlatformLevels": NamedNode<'http://dbpedia.org/ontology/numberOfPlatformLevels'>;
    "numberOfPlayers": NamedNode<'http://dbpedia.org/ontology/numberOfPlayers'>;
    "numberOfPostgraduateStudents": NamedNode<'http://dbpedia.org/ontology/numberOfPostgraduateStudents'>;
    "numberOfPredicates": NamedNode<'http://dbpedia.org/ontology/numberOfPredicates'>;
    /** number of people who earns his living from a specified activity. */
    "numberOfProfessionals": NamedNode<'http://dbpedia.org/ontology/numberOfProfessionals'>;
    "numberOfProperties": NamedNode<'http://dbpedia.org/ontology/numberOfProperties'>;
    "numberOfPropertiesUsed": NamedNode<'http://dbpedia.org/ontology/numberOfPropertiesUsed'>;
    "numberOfReactors": NamedNode<'http://dbpedia.org/ontology/numberOfReactors'>;
    "numberOfRedirectedResource": NamedNode<'http://dbpedia.org/ontology/numberOfRedirectedResource'>;
    "numberOfResource": NamedNode<'http://dbpedia.org/ontology/numberOfResource'>;
    "numberOfResourceOfClass": NamedNode<'http://dbpedia.org/ontology/numberOfResourceOfClass'>;
    "numberOfResourceOfType": NamedNode<'http://dbpedia.org/ontology/numberOfResourceOfType'>;
    "numberOfResourceWithType": NamedNode<'http://dbpedia.org/ontology/numberOfResourceWithType'>;
    "numberOfRestaurants": NamedNode<'http://dbpedia.org/ontology/numberOfRestaurants'>;
    "numberOfRockets": NamedNode<'http://dbpedia.org/ontology/numberOfRockets'>;
    "numberOfRooms": NamedNode<'http://dbpedia.org/ontology/numberOfRooms'>;
    "numberOfRun": NamedNode<'http://dbpedia.org/ontology/numberOfRun'>;
    "numberOfSeasons": NamedNode<'http://dbpedia.org/ontology/numberOfSeasons'>;
    "numberOfSeats": NamedNode<'http://dbpedia.org/ontology/numberOfSeats'>;
    /** aantal zetels in Tweede-Kamer-achtig parlement */
    "numberOfSeatsInParliament": NamedNode<'http://dbpedia.org/ontology/numberOfSeatsInParliament'>;
    "numberOfSettlement": NamedNode<'http://dbpedia.org/ontology/numberOfSettlement'>;
    "numberOfSettlementsInCountry": NamedNode<'http://dbpedia.org/ontology/numberOfSettlementsInCountry'>;
    "numberOfSilverMedalsWon": NamedNode<'http://dbpedia.org/ontology/numberOfSilverMedalsWon'>;
    "numberOfSoccerPlayerInCountryRepre": NamedNode<'http://dbpedia.org/ontology/numberOfSoccerPlayerInCountryRepre'>;
    "numberOfSoccerPlayersBornInPlace": NamedNode<'http://dbpedia.org/ontology/numberOfSoccerPlayersBornInPlace'>;
    "numberOfSoccerPlayersInTeam": NamedNode<'http://dbpedia.org/ontology/numberOfSoccerPlayersInTeam'>;
    /** Number of spans or arches. */
    "numberOfSpans": NamedNode<'http://dbpedia.org/ontology/numberOfSpans'>;
    "numberOfSpeakers": NamedNode<'http://dbpedia.org/ontology/numberOfSpeakers'>;
    "numberOfSports": NamedNode<'http://dbpedia.org/ontology/numberOfSports'>;
    "numberOfSportsEvents": NamedNode<'http://dbpedia.org/ontology/numberOfSportsEvents'>;
    "numberOfStaff": NamedNode<'http://dbpedia.org/ontology/numberOfStaff'>;
    "numberOfStars": NamedNode<'http://dbpedia.org/ontology/numberOfStars'>;
    "numberOfStateDeputies": NamedNode<'http://dbpedia.org/ontology/numberOfStateDeputies'>;
    /** Number of stations or stops. */
    "numberOfStations": NamedNode<'http://dbpedia.org/ontology/numberOfStations'>;
    "numberOfStores": NamedNode<'http://dbpedia.org/ontology/numberOfStores'>;
    "numberOfStudents": NamedNode<'http://dbpedia.org/ontology/numberOfStudents'>;
    /** the number of studio albums released by the musical artist */
    "numberOfStudioAlbums": NamedNode<'http://dbpedia.org/ontology/numberOfStudioAlbums'>;
    "numberOfSuites": NamedNode<'http://dbpedia.org/ontology/numberOfSuites'>;
    "numberOfTeams": NamedNode<'http://dbpedia.org/ontology/numberOfTeams'>;
    /** Number of tracks of a railway or railway station. */
    "numberOfTracks": NamedNode<'http://dbpedia.org/ontology/numberOfTracks'>;
    "numberOfTrails": NamedNode<'http://dbpedia.org/ontology/numberOfTrails'>;
    "numberOfTriples": NamedNode<'http://dbpedia.org/ontology/numberOfTriples'>;
    "numberOfTurns": NamedNode<'http://dbpedia.org/ontology/numberOfTurns'>;
    "numberOfUndergraduateStudents": NamedNode<'http://dbpedia.org/ontology/numberOfUndergraduateStudents'>;
    "numberOfUniqeResources": NamedNode<'http://dbpedia.org/ontology/numberOfUniqeResources'>;
    "numberOfUseOfProperty": NamedNode<'http://dbpedia.org/ontology/numberOfUseOfProperty'>;
    /** Number of vehicles used in the transit system. */
    "numberOfVehicles": NamedNode<'http://dbpedia.org/ontology/numberOfVehicles'>;
    "numberOfVillages": NamedNode<'http://dbpedia.org/ontology/numberOfVillages'>;
    "numberOfVineyards": NamedNode<'http://dbpedia.org/ontology/numberOfVineyards'>;
    "numberOfVisitors": NamedNode<'http://dbpedia.org/ontology/numberOfVisitors'>;
    /** The year in which number of visitors occurred. */
    "numberOfVisitorsAsOf": NamedNode<'http://dbpedia.org/ontology/numberOfVisitorsAsOf'>;
    "numberOfVolumes": NamedNode<'http://dbpedia.org/ontology/numberOfVolumes'>;
    "numberOfVolunteers": NamedNode<'http://dbpedia.org/ontology/numberOfVolunteers'>;
    "numberOfWineries": NamedNode<'http://dbpedia.org/ontology/numberOfWineries'>;
    /** Number of things (eg vehicles) sold */
    "numberSold": NamedNode<'http://dbpedia.org/ontology/numberSold'>;
    /** Nomenclature of Territorial Units for Statistics (NUTS) is a geocode  standard for referencing the subdivisions of countries  for statistical purposes. The standard is developed and regulated by the European Union, and thus only covers the member states of the EU in detail. */
    "nutsCode": NamedNode<'http://dbpedia.org/ontology/nutsCode'>;
    /** επιστημονικά ιδρύματα που παρατηρούν και μελετάνε ουράνια σώματα και φαινόμενα. */
    "observatory": NamedNode<'http://dbpedia.org/ontology/observatory'>;
    "occupation": NamedNode<'http://dbpedia.org/ontology/occupation'>;
    /** Online Computer Library Center number */
    "oclc": NamedNode<'http://dbpedia.org/ontology/oclc'>;
    "odor": NamedNode<'http://dbpedia.org/ontology/odor'>;
    "offeredClasses": NamedNode<'http://dbpedia.org/ontology/offeredClasses'>;
    "office": NamedNode<'http://dbpedia.org/ontology/office'>;
    "officerInCharge": NamedNode<'http://dbpedia.org/ontology/officerInCharge'>;
    "officialLanguage": NamedNode<'http://dbpedia.org/ontology/officialLanguage'>;
    "officialName": NamedNode<'http://dbpedia.org/ontology/officialName'>;
    "officialOpenedBy": NamedNode<'http://dbpedia.org/ontology/officialOpenedBy'>;
    /** The official colour of the EducationalInstitution represented by the colour name (e.g.: red or green). */
    "officialSchoolColour": NamedNode<'http://dbpedia.org/ontology/officialSchoolColour'>;
    /** Identifier used by the Swiss Federal Institute for Statistics */
    "ofsCode": NamedNode<'http://dbpedia.org/ontology/ofsCode'>;
    "oilSystem": NamedNode<'http://dbpedia.org/ontology/oilSystem'>;
    /** Code used to indentify populated places in Russia */
    "okatoCode": NamedNode<'http://dbpedia.org/ontology/okatoCode'>;
    "oldDistrict": NamedNode<'http://dbpedia.org/ontology/oldDistrict'>;
    "oldName": NamedNode<'http://dbpedia.org/ontology/oldName'>;
    "oldProvince": NamedNode<'http://dbpedia.org/ontology/oldProvince'>;
    "oldTeamCoached": NamedNode<'http://dbpedia.org/ontology/oldTeamCoached'>;
    "oldcode": NamedNode<'http://dbpedia.org/ontology/oldcode'>;
    "olivierAward": NamedNode<'http://dbpedia.org/ontology/olivierAward'>;
    "olympicGames": NamedNode<'http://dbpedia.org/ontology/olympicGames'>;
    "olympicGamesBronze": NamedNode<'http://dbpedia.org/ontology/olympicGamesBronze'>;
    "olympicGamesGold": NamedNode<'http://dbpedia.org/ontology/olympicGamesGold'>;
    "olympicGamesSilver": NamedNode<'http://dbpedia.org/ontology/olympicGamesSilver'>;
    "olympicGamesWins": NamedNode<'http://dbpedia.org/ontology/olympicGamesWins'>;
    "olympicOathSwornBy": NamedNode<'http://dbpedia.org/ontology/olympicOathSwornBy'>;
    "olympicOathSwornByAthlete": NamedNode<'http://dbpedia.org/ontology/olympicOathSwornByAthlete'>;
    "olympicOathSwornByJudge": NamedNode<'http://dbpedia.org/ontology/olympicOathSwornByJudge'>;
    "omim": NamedNode<'http://dbpedia.org/ontology/omim'>;
    /** the number corresponding to the chromosome on which the gene is located */
    "onChromosome": NamedNode<'http://dbpedia.org/ontology/onChromosome'>;
    "ons": NamedNode<'http://dbpedia.org/ontology/ons'>;
    /** Availability of open access content. */
    "openAccessContent": NamedNode<'http://dbpedia.org/ontology/openAccessContent'>;
    "openingDate": NamedNode<'http://dbpedia.org/ontology/openingDate'>;
    "openingFilm": NamedNode<'http://dbpedia.org/ontology/openingFilm'>;
    "openingTheme": NamedNode<'http://dbpedia.org/ontology/openingTheme'>;
    "openingYear": NamedNode<'http://dbpedia.org/ontology/openingYear'>;
    "operatingIncome": NamedNode<'http://dbpedia.org/ontology/operatingIncome'>;
    "operatingSystem": NamedNode<'http://dbpedia.org/ontology/operatingSystem'>;
    /**
     * Organisation or City who is the operator of an ArchitecturalStructure, PublicTransitSystem, ConcentrationCamp, etc. Not to confuse with builder, owner or maintainer.
     * Domain is unrestricted since Organization is Agent but City is Place. Range is unrestricted since anything can be operated.
     */
    "operator": NamedNode<'http://dbpedia.org/ontology/operator'>;
    "opponent": NamedNode<'http://dbpedia.org/ontology/opponent'>;
    /** "opponent in a military conflict, an organisation, country, or group of countries. " */
    "opponents": NamedNode<'http://dbpedia.org/ontology/opponents'>;
    "orbitalEccentricity": NamedNode<'http://dbpedia.org/ontology/orbitalEccentricity'>;
    "orbitalFlights": NamedNode<'http://dbpedia.org/ontology/orbitalFlights'>;
    "orbitalInclination": NamedNode<'http://dbpedia.org/ontology/orbitalInclination'>;
    "orbitalPeriod": NamedNode<'http://dbpedia.org/ontology/orbitalPeriod'>;
    "orbits": NamedNode<'http://dbpedia.org/ontology/orbits'>;
    /** Authority data on researchers, academics, etc. The ID range has been defined as a subset of the forthcoming ISNI range. */
    "orcidId": NamedNode<'http://dbpedia.org/ontology/orcidId'>;
    "order": NamedNode<'http://dbpedia.org/ontology/order'>;
    "orderDate": NamedNode<'http://dbpedia.org/ontology/orderDate'>;
    "orderInOffice": NamedNode<'http://dbpedia.org/ontology/orderInOffice'>;
    "ordination": NamedNode<'http://dbpedia.org/ontology/ordination'>;
    /** Naam en/of beschrijving van het orgel */
    "organ": NamedNode<'http://dbpedia.org/ontology/organ'>;
    /** the organ system that a anatomical structure belongs to */
    "organSystem": NamedNode<'http://dbpedia.org/ontology/organSystem'>;
    "organisation": NamedNode<'http://dbpedia.org/ontology/organisation'>;
    /** Identify the members of an organisation. */
    "organisationMember": NamedNode<'http://dbpedia.org/ontology/organisationMember'>;
    "orientation": NamedNode<'http://dbpedia.org/ontology/orientation'>;
    "origin": NamedNode<'http://dbpedia.org/ontology/origin'>;
    "originalDanseCompetition": NamedNode<'http://dbpedia.org/ontology/originalDanseCompetition'>;
    "originalDanseScore": NamedNode<'http://dbpedia.org/ontology/originalDanseScore'>;
    "originalEndPoint": NamedNode<'http://dbpedia.org/ontology/originalEndPoint'>;
    /** The original language of the work. */
    "originalLanguage": NamedNode<'http://dbpedia.org/ontology/originalLanguage'>;
    "originalMaximumBoatBeam": NamedNode<'http://dbpedia.org/ontology/originalMaximumBoatBeam'>;
    "originalMaximumBoatLength": NamedNode<'http://dbpedia.org/ontology/originalMaximumBoatLength'>;
    /** The original name of the entity, e.g. film, settlement, etc. */
    "originalName": NamedNode<'http://dbpedia.org/ontology/originalName'>;
    "originalStartPoint": NamedNode<'http://dbpedia.org/ontology/originalStartPoint'>;
    /** The original title of the work, most of the time in the original language as well */
    "originalTitle": NamedNode<'http://dbpedia.org/ontology/originalTitle'>;
    /** Original use of ArchitecturalStructure or ConcentrationCamp, if it is currently being used as anything other than its original purpose. */
    "originallyUsedFor": NamedNode<'http://dbpedia.org/ontology/originallyUsedFor'>;
    "origo": NamedNode<'http://dbpedia.org/ontology/origo'>;
    "orogeny": NamedNode<'http://dbpedia.org/ontology/orogeny'>;
    "orpha": NamedNode<'http://dbpedia.org/ontology/orpha'>;
    "orthologousGene": NamedNode<'http://dbpedia.org/ontology/orthologousGene'>;
    "other": NamedNode<'http://dbpedia.org/ontology/other'>;
    "otherActivity": NamedNode<'http://dbpedia.org/ontology/otherActivity'>;
    "otherAppearances": NamedNode<'http://dbpedia.org/ontology/otherAppearances'>;
    "otherChannel": NamedNode<'http://dbpedia.org/ontology/otherChannel'>;
    "otherFamilyBranch": NamedNode<'http://dbpedia.org/ontology/otherFamilyBranch'>;
    "otherFuelType": NamedNode<'http://dbpedia.org/ontology/otherFuelType'>;
    "otherFunction": NamedNode<'http://dbpedia.org/ontology/otherFunction'>;
    "otherInformation": NamedNode<'http://dbpedia.org/ontology/otherInformation'>;
    "otherLanguage": NamedNode<'http://dbpedia.org/ontology/otherLanguage'>;
    "otherMedia": NamedNode<'http://dbpedia.org/ontology/otherMedia'>;
    "otherName": NamedNode<'http://dbpedia.org/ontology/otherName'>;
    "otherOccupation": NamedNode<'http://dbpedia.org/ontology/otherOccupation'>;
    "otherParty": NamedNode<'http://dbpedia.org/ontology/otherParty'>;
    /** Connecting services that serve the station such as bus, etc. */
    "otherServingLines": NamedNode<'http://dbpedia.org/ontology/otherServingLines'>;
    "otherSportsExperience": NamedNode<'http://dbpedia.org/ontology/otherSportsExperience'>;
    "otherWins": NamedNode<'http://dbpedia.org/ontology/otherWins'>;
    "outflow": NamedNode<'http://dbpedia.org/ontology/outflow'>;
    "output": NamedNode<'http://dbpedia.org/ontology/output'>;
    "outskirts": NamedNode<'http://dbpedia.org/ontology/outskirts'>;
    "overallRecord": NamedNode<'http://dbpedia.org/ontology/overallRecord'>;
    "oversight": NamedNode<'http://dbpedia.org/ontology/oversight'>;
    /** Used as if meaning: owned by, has as its owner */
    "owner": NamedNode<'http://dbpedia.org/ontology/owner'>;
    "owningCompany": NamedNode<'http://dbpedia.org/ontology/owningCompany'>;
    "owningOrganisation": NamedNode<'http://dbpedia.org/ontology/owningOrganisation'>;
    /** Used as if meaning: has property rights over */
    "owns": NamedNode<'http://dbpedia.org/ontology/owns'>;
    "painter": NamedNode<'http://dbpedia.org/ontology/painter'>;
    "parent": NamedNode<'http://dbpedia.org/ontology/parent'>;
    "parentCompany": NamedNode<'http://dbpedia.org/ontology/parentCompany'>;
    "parentMountainPeak": NamedNode<'http://dbpedia.org/ontology/parentMountainPeak'>;
    "parentOrganisation": NamedNode<'http://dbpedia.org/ontology/parentOrganisation'>;
    "parentheses": NamedNode<'http://dbpedia.org/ontology/parentheses'>;
    "parish": NamedNode<'http://dbpedia.org/ontology/parish'>;
    /** Information on station's parking facilities. */
    "parkingInformation": NamedNode<'http://dbpedia.org/ontology/parkingInformation'>;
    "parkingLotsCars": NamedNode<'http://dbpedia.org/ontology/parkingLotsCars'>;
    "parkingLotsTrucks": NamedNode<'http://dbpedia.org/ontology/parkingLotsTrucks'>;
    "parliament": NamedNode<'http://dbpedia.org/ontology/parliament'>;
    "parliamentType": NamedNode<'http://dbpedia.org/ontology/parliamentType'>;
    "parliamentaryGroup": NamedNode<'http://dbpedia.org/ontology/parliamentaryGroup'>;
    "part": NamedNode<'http://dbpedia.org/ontology/part'>;
    /** total number of launches resulting in partial failure */
    "partialFailedLaunches": NamedNode<'http://dbpedia.org/ontology/partialFailedLaunches'>;
    "participant": NamedNode<'http://dbpedia.org/ontology/participant'>;
    "participatingIn": NamedNode<'http://dbpedia.org/ontology/participatingIn'>;
    "particularSign": NamedNode<'http://dbpedia.org/ontology/particularSign'>;
    "partitionCoefficient": NamedNode<'http://dbpedia.org/ontology/partitionCoefficient'>;
    "partner": NamedNode<'http://dbpedia.org/ontology/partner'>;
    "party": NamedNode<'http://dbpedia.org/ontology/party'>;
    "partyNumber": NamedNode<'http://dbpedia.org/ontology/partyNumber'>;
    /** Number of passengers per day. */
    "passengersPerDay": NamedNode<'http://dbpedia.org/ontology/passengersPerDay'>;
    /** Number of passengers per year. */
    "passengersPerYear": NamedNode<'http://dbpedia.org/ontology/passengersPerYear'>;
    /** System the passengers are using (from which the passenger statistics are). */
    "passengersUsedSystem": NamedNode<'http://dbpedia.org/ontology/passengersUsedSystem'>;
    "pastMember": NamedNode<'http://dbpedia.org/ontology/pastMember'>;
    "pastor": NamedNode<'http://dbpedia.org/ontology/pastor'>;
    "patent": NamedNode<'http://dbpedia.org/ontology/patent'>;
    "patron": NamedNode<'http://dbpedia.org/ontology/patron'>;
    "patronSaint": NamedNode<'http://dbpedia.org/ontology/patronSaint'>;
    "pccSecretary": NamedNode<'http://dbpedia.org/ontology/pccSecretary'>;
    /** gene entry for 3D structural data as per the PDB (Protein Data Bank) database */
    "pdb": NamedNode<'http://dbpedia.org/ontology/pdb'>;
    "peabodyAward": NamedNode<'http://dbpedia.org/ontology/peabodyAward'>;
    "penaltiesTeamA": NamedNode<'http://dbpedia.org/ontology/penaltiesTeamA'>;
    "penaltiesTeamB": NamedNode<'http://dbpedia.org/ontology/penaltiesTeamB'>;
    "penaltyScore": NamedNode<'http://dbpedia.org/ontology/penaltyScore'>;
    "pendamicDeaths": NamedNode<'http://dbpedia.org/ontology/pendamicDeaths'>;
    "penisLength": NamedNode<'http://dbpedia.org/ontology/penisLength'>;
    /** Name for the people inhabiting a place, eg Ankara->Ankariotes, Bulgaria->Bulgarians */
    "peopleName": NamedNode<'http://dbpedia.org/ontology/peopleName'>;
    "perCapitaIncome": NamedNode<'http://dbpedia.org/ontology/perCapitaIncome'>;
    "perCapitaIncomeAsOf": NamedNode<'http://dbpedia.org/ontology/perCapitaIncomeAsOf'>;
    "perCapitaIncomeRank": NamedNode<'http://dbpedia.org/ontology/perCapitaIncomeRank'>;
    "percentage": NamedNode<'http://dbpedia.org/ontology/percentage'>;
    /** percentage of alcohol present in a beverage */
    "percentageAlcohol": NamedNode<'http://dbpedia.org/ontology/percentageAlcohol'>;
    /** how much fat (as a percentage) does this food contain. Mostly applies to Cheese */
    "percentageFat": NamedNode<'http://dbpedia.org/ontology/percentageFat'>;
    "percentageLiteracyMen": NamedNode<'http://dbpedia.org/ontology/percentageLiteracyMen'>;
    "percentageLiteracyWomen": NamedNode<'http://dbpedia.org/ontology/percentageLiteracyWomen'>;
    "percentageLiterate": NamedNode<'http://dbpedia.org/ontology/percentageLiterate'>;
    "percentageOfAreaWater": NamedNode<'http://dbpedia.org/ontology/percentageOfAreaWater'>;
    "performer": NamedNode<'http://dbpedia.org/ontology/performer'>;
    "periapsis": NamedNode<'http://dbpedia.org/ontology/periapsis'>;
    "perifocus": NamedNode<'http://dbpedia.org/ontology/perifocus'>;
    "perimeter": NamedNode<'http://dbpedia.org/ontology/perimeter'>;
    "period": NamedNode<'http://dbpedia.org/ontology/period'>;
    "perpetrator": NamedNode<'http://dbpedia.org/ontology/perpetrator'>;
    "person": NamedNode<'http://dbpedia.org/ontology/person'>;
    "personFunction": NamedNode<'http://dbpedia.org/ontology/personFunction'>;
    "personName": NamedNode<'http://dbpedia.org/ontology/personName'>;
    "pgaWins": NamedNode<'http://dbpedia.org/ontology/pgaWins'>;
    "philosophicalSchool": NamedNode<'http://dbpedia.org/ontology/philosophicalSchool'>;
    /** Don't use this, use areaCode */
    "phonePrefix": NamedNode<'http://dbpedia.org/ontology/phonePrefix'>;
    "phonePrefixLabel": NamedNode<'http://dbpedia.org/ontology/phonePrefixLabel'>;
    "photographer": NamedNode<'http://dbpedia.org/ontology/photographer'>;
    /** A rank in the classification of organisms, below kingdom and above class; also called a division, especially in describing plants; a taxon at that rank. */
    "phylum": NamedNode<'http://dbpedia.org/ontology/phylum'>;
    /** A picture of a thing. */
    "picture": NamedNode<'http://dbpedia.org/ontology/picture'>;
    "pictureDescription": NamedNode<'http://dbpedia.org/ontology/pictureDescription'>;
    "pictureFormat": NamedNode<'http://dbpedia.org/ontology/pictureFormat'>;
    /** Wikimedia CommonsCategory for pictures of this resource */
    "picturesCommonsCategory": NamedNode<'http://dbpedia.org/ontology/picturesCommonsCategory'>;
    "piercing": NamedNode<'http://dbpedia.org/ontology/piercing'>;
    "pisciculturalPopulation": NamedNode<'http://dbpedia.org/ontology/pisciculturalPopulation'>;
    "pistonStroke": NamedNode<'http://dbpedia.org/ontology/pistonStroke'>;
    "place": NamedNode<'http://dbpedia.org/ontology/place'>;
    /** De plaats waar een persoon is begraven. */
    "placeOfBurial": NamedNode<'http://dbpedia.org/ontology/placeOfBurial'>;
    /** A religious administrative body needs to know which places of worship it */
    "placeOfWorship": NamedNode<'http://dbpedia.org/ontology/placeOfWorship'>;
    "plant": NamedNode<'http://dbpedia.org/ontology/plant'>;
    "playRole": NamedNode<'http://dbpedia.org/ontology/playRole'>;
    /** A person playing for a sports team. inverseOf team */
    "playerInTeam": NamedNode<'http://dbpedia.org/ontology/playerInTeam'>;
    "playerSeason": NamedNode<'http://dbpedia.org/ontology/playerSeason'>;
    "playerStatus": NamedNode<'http://dbpedia.org/ontology/playerStatus'>;
    "playingTime": NamedNode<'http://dbpedia.org/ontology/playingTime'>;
    "plays": NamedNode<'http://dbpedia.org/ontology/plays'>;
    "pluviometry": NamedNode<'http://dbpedia.org/ontology/pluviometry'>;
    "podium": NamedNode<'http://dbpedia.org/ontology/podium'>;
    "podiums": NamedNode<'http://dbpedia.org/ontology/podiums'>;
    "pole": NamedNode<'http://dbpedia.org/ontology/pole'>;
    "poleDriver": NamedNode<'http://dbpedia.org/ontology/poleDriver'>;
    "poleDriverCountry": NamedNode<'http://dbpedia.org/ontology/poleDriverCountry'>;
    "poleDriverTeam": NamedNode<'http://dbpedia.org/ontology/poleDriverTeam'>;
    "polePosition": NamedNode<'http://dbpedia.org/ontology/polePosition'>;
    "poles": NamedNode<'http://dbpedia.org/ontology/poles'>;
    /** The police detachment serving a UK place, eg Wakefield -> "West Yorkshire Police" */
    "policeName": NamedNode<'http://dbpedia.org/ontology/policeName'>;
    "polishFilmAward": NamedNode<'http://dbpedia.org/ontology/polishFilmAward'>;
    "politicGovernmentDepartment": NamedNode<'http://dbpedia.org/ontology/politicGovernmentDepartment'>;
    "politicalFunction": NamedNode<'http://dbpedia.org/ontology/politicalFunction'>;
    "politicalLeader": NamedNode<'http://dbpedia.org/ontology/politicalLeader'>;
    "politicalMajority": NamedNode<'http://dbpedia.org/ontology/politicalMajority'>;
    /** Political party in the legislature (eg.: European People's Party in the European Parliament). */
    "politicalPartyInLegislature": NamedNode<'http://dbpedia.org/ontology/politicalPartyInLegislature'>;
    /** The Political party of leader. */
    "politicalPartyOfLeader": NamedNode<'http://dbpedia.org/ontology/politicalPartyOfLeader'>;
    "politicalSeats": NamedNode<'http://dbpedia.org/ontology/politicalSeats'>;
    "politician": NamedNode<'http://dbpedia.org/ontology/politician'>;
    "popularVote": NamedNode<'http://dbpedia.org/ontology/popularVote'>;
    "population": NamedNode<'http://dbpedia.org/ontology/population'>;
    "populationAsOf": NamedNode<'http://dbpedia.org/ontology/populationAsOf'>;
    "populationDensity": NamedNode<'http://dbpedia.org/ontology/populationDensity'>;
    "populationMetro": NamedNode<'http://dbpedia.org/ontology/populationMetro'>;
    "populationMetroDensity": NamedNode<'http://dbpedia.org/ontology/populationMetroDensity'>;
    "populationPctChildren": NamedNode<'http://dbpedia.org/ontology/populationPctChildren'>;
    "populationPctMen": NamedNode<'http://dbpedia.org/ontology/populationPctMen'>;
    "populationPctWomen": NamedNode<'http://dbpedia.org/ontology/populationPctWomen'>;
    /** a place were members of an ethnic group are living */
    "populationPlace": NamedNode<'http://dbpedia.org/ontology/populationPlace'>;
    "populationQuote": NamedNode<'http://dbpedia.org/ontology/populationQuote'>;
    "populationRural": NamedNode<'http://dbpedia.org/ontology/populationRural'>;
    "populationRuralDensity": NamedNode<'http://dbpedia.org/ontology/populationRuralDensity'>;
    "populationTotal": NamedNode<'http://dbpedia.org/ontology/populationTotal'>;
    "populationTotalRanking": NamedNode<'http://dbpedia.org/ontology/populationTotalRanking'>;
    "populationTotalReference": NamedNode<'http://dbpedia.org/ontology/populationTotalReference'>;
    "populationUrban": NamedNode<'http://dbpedia.org/ontology/populationUrban'>;
    "populationUrbanDensity": NamedNode<'http://dbpedia.org/ontology/populationUrbanDensity'>;
    "populationYear": NamedNode<'http://dbpedia.org/ontology/populationYear'>;
    "portfolio": NamedNode<'http://dbpedia.org/ontology/portfolio'>;
    "portrayer": NamedNode<'http://dbpedia.org/ontology/portrayer'>;
    "position": NamedNode<'http://dbpedia.org/ontology/position'>;
    /** A postal code (known in various countries as a post code, postcode, or ZIP code) is a series of letters and/or digits appended to a postal address for the purpose of sorting mail. */
    "postalCode": NamedNode<'http://dbpedia.org/ontology/postalCode'>;
    "power": NamedNode<'http://dbpedia.org/ontology/power'>;
    "powerOutput": NamedNode<'http://dbpedia.org/ontology/powerOutput'>;
    "powerType": NamedNode<'http://dbpedia.org/ontology/powerType'>;
    "precursor": NamedNode<'http://dbpedia.org/ontology/precursor'>;
    "predecessor": NamedNode<'http://dbpedia.org/ontology/predecessor'>;
    "prefaceBy": NamedNode<'http://dbpedia.org/ontology/prefaceBy'>;
    "prefect": NamedNode<'http://dbpedia.org/ontology/prefect'>;
    "prefectMandate": NamedNode<'http://dbpedia.org/ontology/prefectMandate'>;
    "prefecture": NamedNode<'http://dbpedia.org/ontology/prefecture'>;
    "prefix": NamedNode<'http://dbpedia.org/ontology/prefix'>;
    /** Date the play was first performed. */
    "premiereDate": NamedNode<'http://dbpedia.org/ontology/premiereDate'>;
    /** The theatre and/or city the play was first performed in. */
    "premierePlace": NamedNode<'http://dbpedia.org/ontology/premierePlace'>;
    /** Year the play was first performed. */
    "premiereYear": NamedNode<'http://dbpedia.org/ontology/premiereYear'>;
    "presentMunicipality": NamedNode<'http://dbpedia.org/ontology/presentMunicipality'>;
    "presentName": NamedNode<'http://dbpedia.org/ontology/presentName'>;
    "presenter": NamedNode<'http://dbpedia.org/ontology/presenter'>;
    "president": NamedNode<'http://dbpedia.org/ontology/president'>;
    "presidentGeneralCouncil": NamedNode<'http://dbpedia.org/ontology/presidentGeneralCouncil'>;
    "presidentGeneralCouncilMandate": NamedNode<'http://dbpedia.org/ontology/presidentGeneralCouncilMandate'>;
    "presidentRegionalCouncil": NamedNode<'http://dbpedia.org/ontology/presidentRegionalCouncil'>;
    "presidentRegionalCouncilMandate": NamedNode<'http://dbpedia.org/ontology/presidentRegionalCouncilMandate'>;
    "previousDemographics": NamedNode<'http://dbpedia.org/ontology/previousDemographics'>;
    "previousEditor": NamedNode<'http://dbpedia.org/ontology/previousEditor'>;
    "previousEntity": NamedNode<'http://dbpedia.org/ontology/previousEntity'>;
    "previousEvent": NamedNode<'http://dbpedia.org/ontology/previousEvent'>;
    "previousInfrastructure": NamedNode<'http://dbpedia.org/ontology/previousInfrastructure'>;
    "previousMission": NamedNode<'http://dbpedia.org/ontology/previousMission'>;
    "previousName": NamedNode<'http://dbpedia.org/ontology/previousName'>;
    "previousPopulation": NamedNode<'http://dbpedia.org/ontology/previousPopulation'>;
    "previousPopulationTotal": NamedNode<'http://dbpedia.org/ontology/previousPopulationTotal'>;
    "previousWork": NamedNode<'http://dbpedia.org/ontology/previousWork'>;
    /** The price of something, eg a journal. For "total money earned by an Athlete" use gross */
    "price": NamedNode<'http://dbpedia.org/ontology/price'>;
    "primaryFuelType": NamedNode<'http://dbpedia.org/ontology/primaryFuelType'>;
    "primate": NamedNode<'http://dbpedia.org/ontology/primate'>;
    "primeMinister": NamedNode<'http://dbpedia.org/ontology/primeMinister'>;
    "primogenitor": NamedNode<'http://dbpedia.org/ontology/primogenitor'>;
    /** Principal of an educational institution (school) */
    "principal": NamedNode<'http://dbpedia.org/ontology/principal'>;
    "principalArea": NamedNode<'http://dbpedia.org/ontology/principalArea'>;
    "principalEngineer": NamedNode<'http://dbpedia.org/ontology/principalEngineer'>;
    "proPeriod": NamedNode<'http://dbpedia.org/ontology/proPeriod'>;
    "proSince": NamedNode<'http://dbpedia.org/ontology/proSince'>;
    "proTeam": NamedNode<'http://dbpedia.org/ontology/proTeam'>;
    "proYear": NamedNode<'http://dbpedia.org/ontology/proYear'>;
    "probowlPick": NamedNode<'http://dbpedia.org/ontology/probowlPick'>;
    /** De naam die verwijst naar de formele definitie van een verzameling stappen die in de juiste volgorde leiden tot de afronding van de zaak */
    "procedure": NamedNode<'http://dbpedia.org/ontology/procedure'>;
    "producedBy": NamedNode<'http://dbpedia.org/ontology/producedBy'>;
    /** The producer of the creative work. */
    "producer": NamedNode<'http://dbpedia.org/ontology/producer'>;
    "produces": NamedNode<'http://dbpedia.org/ontology/produces'>;
    "product": NamedNode<'http://dbpedia.org/ontology/product'>;
    "productShape": NamedNode<'http://dbpedia.org/ontology/productShape'>;
    "production": NamedNode<'http://dbpedia.org/ontology/production'>;
    /** the company that produced the work e.g. Film, MusicalWork, Software */
    "productionCompany": NamedNode<'http://dbpedia.org/ontology/productionCompany'>;
    "productionEndDate": NamedNode<'http://dbpedia.org/ontology/productionEndDate'>;
    "productionEndYear": NamedNode<'http://dbpedia.org/ontology/productionEndYear'>;
    "productionStartDate": NamedNode<'http://dbpedia.org/ontology/productionStartDate'>;
    "productionStartYear": NamedNode<'http://dbpedia.org/ontology/productionStartYear'>;
    "productionYears": NamedNode<'http://dbpedia.org/ontology/productionYears'>;
    "profession": NamedNode<'http://dbpedia.org/ontology/profession'>;
    "programCost": NamedNode<'http://dbpedia.org/ontology/programCost'>;
    /** The programming format describes the overall content broadcast on a radio or television station. */
    "programmeFormat": NamedNode<'http://dbpedia.org/ontology/programmeFormat'>;
    "programmingLanguage": NamedNode<'http://dbpedia.org/ontology/programmingLanguage'>;
    "project": NamedNode<'http://dbpedia.org/ontology/project'>;
    /** The part of the project budget that is funded by the Organistaions given in the "FundedBy" property. */
    "projectBudgetFunding": NamedNode<'http://dbpedia.org/ontology/projectBudgetFunding'>;
    /** The total budget of the research project. */
    "projectBudgetTotal": NamedNode<'http://dbpedia.org/ontology/projectBudgetTotal'>;
    /** The coordinating organisation of the project. */
    "projectCoordinator": NamedNode<'http://dbpedia.org/ontology/projectCoordinator'>;
    /** The end date of the project. */
    "projectEndDate": NamedNode<'http://dbpedia.org/ontology/projectEndDate'>;
    /** A key word of the project. */
    "projectKeyword": NamedNode<'http://dbpedia.org/ontology/projectKeyword'>;
    /** A defined objective of the project. */
    "projectObjective": NamedNode<'http://dbpedia.org/ontology/projectObjective'>;
    /** A participating organisation of the project. */
    "projectParticipant": NamedNode<'http://dbpedia.org/ontology/projectParticipant'>;
    /** The reference identification of the project. */
    "projectReferenceID": NamedNode<'http://dbpedia.org/ontology/projectReferenceID'>;
    /** The start date of the project. */
    "projectStartDate": NamedNode<'http://dbpedia.org/ontology/projectStartDate'>;
    /** The type of the research project. Mostly used for the funding schemes of the European Union, for instance: Specific Targeted Research Projects (STREP), Network of Excellence (NoE) or Integrated Project. */
    "projectType": NamedNode<'http://dbpedia.org/ontology/projectType'>;
    "prominence": NamedNode<'http://dbpedia.org/ontology/prominence'>;
    "promotion": NamedNode<'http://dbpedia.org/ontology/promotion'>;
    "pronunciation": NamedNode<'http://dbpedia.org/ontology/pronunciation'>;
    "prospectLeague": NamedNode<'http://dbpedia.org/ontology/prospectLeague'>;
    "prospectTeam": NamedNode<'http://dbpedia.org/ontology/prospectTeam'>;
    /** Aanduiding van het soort beschermingsregime. Bijv. 'rijksmonument' in Nederland of 'Monument Historique' in Belgie of Frankrijk */
    "protectionStatus": NamedNode<'http://dbpedia.org/ontology/protectionStatus'>;
    /** Amount of proteins per servingSize of a Food */
    "protein": NamedNode<'http://dbpedia.org/ontology/protein'>;
    "protestantPercentage": NamedNode<'http://dbpedia.org/ontology/protestantPercentage'>;
    "provCode": NamedNode<'http://dbpedia.org/ontology/provCode'>;
    "provides": NamedNode<'http://dbpedia.org/ontology/provides'>;
    "province": NamedNode<'http://dbpedia.org/ontology/province'>;
    "provinceIsoCode": NamedNode<'http://dbpedia.org/ontology/provinceIsoCode'>;
    "provinceLink": NamedNode<'http://dbpedia.org/ontology/provinceLink'>;
    "provost": NamedNode<'http://dbpedia.org/ontology/provost'>;
    "pseudonym": NamedNode<'http://dbpedia.org/ontology/pseudonym'>;
    "pubchem": NamedNode<'http://dbpedia.org/ontology/pubchem'>;
    "publication": NamedNode<'http://dbpedia.org/ontology/publication'>;
    "publicationDate": NamedNode<'http://dbpedia.org/ontology/publicationDate'>;
    /** describes in what way this site is accessible for public */
    "publiclyAccessible": NamedNode<'http://dbpedia.org/ontology/publiclyAccessible'>;
    /** Publisher of a work. For literal (string) use dc:publisher; for object (URL) use publisher */
    "publisher": NamedNode<'http://dbpedia.org/ontology/publisher'>;
    "purchasingPowerParity": NamedNode<'http://dbpedia.org/ontology/purchasingPowerParity'>;
    "purchasingPowerParityRank": NamedNode<'http://dbpedia.org/ontology/purchasingPowerParityRank'>;
    "purchasingPowerParityYear": NamedNode<'http://dbpedia.org/ontology/purchasingPowerParityYear'>;
    "purpose": NamedNode<'http://dbpedia.org/ontology/purpose'>;
    "qatarClassic": NamedNode<'http://dbpedia.org/ontology/qatarClassic'>;
    "quebecerTitle": NamedNode<'http://dbpedia.org/ontology/quebecerTitle'>;
    /** A quotation is the repetition of one expression as part of another one, particularly when the quoted expression is well-known or explicitly attributed by citation to its original source. */
    "quotation": NamedNode<'http://dbpedia.org/ontology/quotation'>;
    "quote": NamedNode<'http://dbpedia.org/ontology/quote'>;
    "ra": NamedNode<'http://dbpedia.org/ontology/ra'>;
    "race": NamedNode<'http://dbpedia.org/ontology/race'>;
    "raceHorse": NamedNode<'http://dbpedia.org/ontology/raceHorse'>;
    "raceLength": NamedNode<'http://dbpedia.org/ontology/raceLength'>;
    /** Result of one racer in a sport competition */
    "raceResult": NamedNode<'http://dbpedia.org/ontology/raceResult'>;
    "raceTrack": NamedNode<'http://dbpedia.org/ontology/raceTrack'>;
    "raceWins": NamedNode<'http://dbpedia.org/ontology/raceWins'>;
    "races": NamedNode<'http://dbpedia.org/ontology/races'>;
    "racketCatching": NamedNode<'http://dbpedia.org/ontology/racketCatching'>;
    /** To ραδιόφωνο είναι η συσκευή που λειτουργεί ως "ραδιοδέκτης - μετατροπέας" όπου λαμβάνοντας τις ραδιοφωνικές εκπομπές των ραδιοφωνικών σταθμών τις μετατρέπει σε ήχο. */
    "radio": NamedNode<'http://dbpedia.org/ontology/radio'>;
    "radioStation": NamedNode<'http://dbpedia.org/ontology/radioStation'>;
    "radius_ly": NamedNode<'http://dbpedia.org/ontology/radius_ly'>;
    "railGauge": NamedNode<'http://dbpedia.org/ontology/railGauge'>;
    /** Railway line that is using the tunnel. */
    "railwayLineUsingTunnel": NamedNode<'http://dbpedia.org/ontology/railwayLineUsingTunnel'>;
    /** Information on the type of platform(s) at the station. */
    "railwayPlatforms": NamedNode<'http://dbpedia.org/ontology/railwayPlatforms'>;
    "railwayRollingStock": NamedNode<'http://dbpedia.org/ontology/railwayRollingStock'>;
    /** Maximum distance without refueling */
    "range": NamedNode<'http://dbpedia.org/ontology/range'>;
    /** Rank of something among other things of the same kind, eg Constellations by Area; MusicalAlbums by popularity, etc */
    "rank": NamedNode<'http://dbpedia.org/ontology/rank'>;
    "rankAgreement": NamedNode<'http://dbpedia.org/ontology/rankAgreement'>;
    "rankArea": NamedNode<'http://dbpedia.org/ontology/rankArea'>;
    "rankInFinalMedalCount": NamedNode<'http://dbpedia.org/ontology/rankInFinalMedalCount'>;
    "rankPopulation": NamedNode<'http://dbpedia.org/ontology/rankPopulation'>;
    "ranking": NamedNode<'http://dbpedia.org/ontology/ranking'>;
    "rankingWins": NamedNode<'http://dbpedia.org/ontology/rankingWins'>;
    "rankingsDoubles": NamedNode<'http://dbpedia.org/ontology/rankingsDoubles'>;
    "rankingsSingles": NamedNode<'http://dbpedia.org/ontology/rankingsSingles'>;
    "rating": NamedNode<'http://dbpedia.org/ontology/rating'>;
    "ratio": NamedNode<'http://dbpedia.org/ontology/ratio'>;
    "rebuildDate": NamedNode<'http://dbpedia.org/ontology/rebuildDate'>;
    "rebuilder": NamedNode<'http://dbpedia.org/ontology/rebuilder'>;
    "rebuildingDate": NamedNode<'http://dbpedia.org/ontology/rebuildingDate'>;
    "rebuildingYear": NamedNode<'http://dbpedia.org/ontology/rebuildingYear'>;
    "recentWinner": NamedNode<'http://dbpedia.org/ontology/recentWinner'>;
    "recommissioningDate": NamedNode<'http://dbpedia.org/ontology/recommissioningDate'>;
    "recordDate": NamedNode<'http://dbpedia.org/ontology/recordDate'>;
    "recordLabel": NamedNode<'http://dbpedia.org/ontology/recordLabel'>;
    "recordedIn": NamedNode<'http://dbpedia.org/ontology/recordedIn'>;
    "recoveryCases": NamedNode<'http://dbpedia.org/ontology/recoveryCases'>;
    "rector": NamedNode<'http://dbpedia.org/ontology/rector'>;
    /** red list code for treatened species NL (different from IUCN) */
    "redListIdNL": NamedNode<'http://dbpedia.org/ontology/redListIdNL'>;
    "redLongDistancePisteNumber": NamedNode<'http://dbpedia.org/ontology/redLongDistancePisteNumber'>;
    "redSkiPisteNumber": NamedNode<'http://dbpedia.org/ontology/redSkiPisteNumber'>;
    "redline": NamedNode<'http://dbpedia.org/ontology/redline'>;
    "refcul": NamedNode<'http://dbpedia.org/ontology/refcul'>;
    /** Structured reference providing info about the subject */
    "reference": NamedNode<'http://dbpedia.org/ontology/reference'>;
    "reffBourgmestre": NamedNode<'http://dbpedia.org/ontology/reffBourgmestre'>;
    "refgen": NamedNode<'http://dbpedia.org/ontology/refgen'>;
    "refgeo": NamedNode<'http://dbpedia.org/ontology/refgeo'>;
    "refpol": NamedNode<'http://dbpedia.org/ontology/refpol'>;
    "refseq": NamedNode<'http://dbpedia.org/ontology/refseq'>;
    "refseqmrna": NamedNode<'http://dbpedia.org/ontology/refseqmrna'>;
    "refseqprotein": NamedNode<'http://dbpedia.org/ontology/refseqprotein'>;
    "regency": NamedNode<'http://dbpedia.org/ontology/regency'>;
    /** Subject has served as the regent of another monarch */
    "regentOf": NamedNode<'http://dbpedia.org/ontology/regentOf'>;
    "regime": NamedNode<'http://dbpedia.org/ontology/regime'>;
    /** The regin where the thing is located or is connected to. */
    "region": NamedNode<'http://dbpedia.org/ontology/region'>;
    "regionLink": NamedNode<'http://dbpedia.org/ontology/regionLink'>;
    "regionServed": NamedNode<'http://dbpedia.org/ontology/regionServed'>;
    "regionType": NamedNode<'http://dbpedia.org/ontology/regionType'>;
    "regionalCouncil": NamedNode<'http://dbpedia.org/ontology/regionalCouncil'>;
    "regionalLanguage": NamedNode<'http://dbpedia.org/ontology/regionalLanguage'>;
    "regionalPrefecture": NamedNode<'http://dbpedia.org/ontology/regionalPrefecture'>;
    "registration": NamedNode<'http://dbpedia.org/ontology/registration'>;
    "registry": NamedNode<'http://dbpedia.org/ontology/registry'>;
    /** Identification of the registry a document is in */
    "registryNumber": NamedNode<'http://dbpedia.org/ontology/registryNumber'>;
    "reign": NamedNode<'http://dbpedia.org/ontology/reign'>;
    "reignName": NamedNode<'http://dbpedia.org/ontology/reignName'>;
    "reigningPope": NamedNode<'http://dbpedia.org/ontology/reigningPope'>;
    "related": NamedNode<'http://dbpedia.org/ontology/related'>;
    /** Deze property is voor de lijst van persoonfuncties die een persoon (bv. een politicus) bekleedt of heeft bekleed */
    "relatedFunctions": NamedNode<'http://dbpedia.org/ontology/relatedFunctions'>;
    "relatedMeanOfTransportation": NamedNode<'http://dbpedia.org/ontology/relatedMeanOfTransportation'>;
    /** Deze property is voor de lijst van monumenten die horen bij het monument van de infobox */
    "relatedPlaces": NamedNode<'http://dbpedia.org/ontology/relatedPlaces'>;
    "relation": NamedNode<'http://dbpedia.org/ontology/relation'>;
    "relative": NamedNode<'http://dbpedia.org/ontology/relative'>;
    /** Maiseanna adamh, a chuirtear síos i dtéarmaí aonaid maise adamhaí u. */
    "relativeAtomicMass": NamedNode<'http://dbpedia.org/ontology/relativeAtomicMass'>;
    /** Release date of a Work or another product (eg Aircraft or other MeansOfTransportation */
    "releaseDate": NamedNode<'http://dbpedia.org/ontology/releaseDate'>;
    /** Usually used with releaseDate, particularly for Films. Often there can be several pairs so our modeling is not precise here... */
    "releaseLocation": NamedNode<'http://dbpedia.org/ontology/releaseLocation'>;
    /** Physical remains or personal effects of a saint or venerated person, preserved in a religious building */
    "relics": NamedNode<'http://dbpedia.org/ontology/relics'>;
    "relief": NamedNode<'http://dbpedia.org/ontology/relief'>;
    "religion": NamedNode<'http://dbpedia.org/ontology/religion'>;
    "religiousHead": NamedNode<'http://dbpedia.org/ontology/religiousHead'>;
    "religiousHeadLabel": NamedNode<'http://dbpedia.org/ontology/religiousHeadLabel'>;
    "religiousOrder": NamedNode<'http://dbpedia.org/ontology/religiousOrder'>;
    "reopened": NamedNode<'http://dbpedia.org/ontology/reopened'>;
    /** Date of reopening the architectural structure. */
    "reopeningDate": NamedNode<'http://dbpedia.org/ontology/reopeningDate'>;
    /** Year of reopening the architectural structure. */
    "reopeningYear": NamedNode<'http://dbpedia.org/ontology/reopeningYear'>;
    /** A reporting mark is a two-, three-, or four-letter alphabetic code used to identify owners or lessees of rolling stock and other equipment used on the North American railroad network. */
    "reportingMark": NamedNode<'http://dbpedia.org/ontology/reportingMark'>;
    "representative": NamedNode<'http://dbpedia.org/ontology/representative'>;
    "requirement": NamedNode<'http://dbpedia.org/ontology/requirement'>;
    /** Are reservations required for the establishment or event? */
    "reservations": NamedNode<'http://dbpedia.org/ontology/reservations'>;
    /** Place of residence of a person. */
    "residence": NamedNode<'http://dbpedia.org/ontology/residence'>;
    /** Native Resolution */
    "resolution": NamedNode<'http://dbpedia.org/ontology/resolution'>;
    "restingDate": NamedNode<'http://dbpedia.org/ontology/restingDate'>;
    "restingPlace": NamedNode<'http://dbpedia.org/ontology/restingPlace'>;
    "restingPlacePosition": NamedNode<'http://dbpedia.org/ontology/restingPlacePosition'>;
    "restoreDate": NamedNode<'http://dbpedia.org/ontology/restoreDate'>;
    "restriction": NamedNode<'http://dbpedia.org/ontology/restriction'>;
    "result": NamedNode<'http://dbpedia.org/ontology/result'>;
    "retentionTime": NamedNode<'http://dbpedia.org/ontology/retentionTime'>;
    "retired": NamedNode<'http://dbpedia.org/ontology/retired'>;
    "retiredRocket": NamedNode<'http://dbpedia.org/ontology/retiredRocket'>;
    "retirementDate": NamedNode<'http://dbpedia.org/ontology/retirementDate'>;
    "revenue": NamedNode<'http://dbpedia.org/ontology/revenue'>;
    "revenueYear": NamedNode<'http://dbpedia.org/ontology/revenueYear'>;
    "review": NamedNode<'http://dbpedia.org/ontology/review'>;
    "rgbCoordinateBlue": NamedNode<'http://dbpedia.org/ontology/rgbCoordinateBlue'>;
    "rgbCoordinateGreen": NamedNode<'http://dbpedia.org/ontology/rgbCoordinateGreen'>;
    "rgbCoordinateRed": NamedNode<'http://dbpedia.org/ontology/rgbCoordinateRed'>;
    /** An identifying system for scientific authors. The system was introduced in January 2008 by Thomson Reuters. The combined use of the Digital Object Identifier with the ResearcherID allows for a unique association of authors and scientific articles. */
    "ridId": NamedNode<'http://dbpedia.org/ontology/ridId'>;
    "rightAscension": NamedNode<'http://dbpedia.org/ontology/rightAscension'>;
    "rightChild": NamedNode<'http://dbpedia.org/ontology/rightChild'>;
    "rightTributary": NamedNode<'http://dbpedia.org/ontology/rightTributary'>;
    "rival": NamedNode<'http://dbpedia.org/ontology/rival'>;
    "rivalSchool": NamedNode<'http://dbpedia.org/ontology/rivalSchool'>;
    "river": NamedNode<'http://dbpedia.org/ontology/river'>;
    "riverBranch": NamedNode<'http://dbpedia.org/ontology/riverBranch'>;
    "riverBranchOf": NamedNode<'http://dbpedia.org/ontology/riverBranchOf'>;
    "riverMouth": NamedNode<'http://dbpedia.org/ontology/riverMouth'>;
    /**
     * Rijksbureau voor Kunsthistorische Documentatie (RKD) artists database id.
     * http://rkd.nl/explore/artists/$1
     */
    "rkdArtistsId": NamedNode<'http://dbpedia.org/ontology/rkdArtistsId'>;
    "road": NamedNode<'http://dbpedia.org/ontology/road'>;
    "rocket": NamedNode<'http://dbpedia.org/ontology/rocket'>;
    /** purpose of the rocket */
    "rocketFunction": NamedNode<'http://dbpedia.org/ontology/rocketFunction'>;
    /** number of stages, not including boosters */
    "rocketStages": NamedNode<'http://dbpedia.org/ontology/rocketStages'>;
    "rolandGarrosDouble": NamedNode<'http://dbpedia.org/ontology/rolandGarrosDouble'>;
    "rolandGarrosMixed": NamedNode<'http://dbpedia.org/ontology/rolandGarrosMixed'>;
    "rolandGarrosSingle": NamedNode<'http://dbpedia.org/ontology/rolandGarrosSingle'>;
    "role": NamedNode<'http://dbpedia.org/ontology/role'>;
    "roleInEvent": NamedNode<'http://dbpedia.org/ontology/roleInEvent'>;
    "roofHeight": NamedNode<'http://dbpedia.org/ontology/roofHeight'>;
    "rotationPeriod": NamedNode<'http://dbpedia.org/ontology/rotationPeriod'>;
    "route": NamedNode<'http://dbpedia.org/ontology/route'>;
    /** details of the activity for a road. */
    "routeActivity": NamedNode<'http://dbpedia.org/ontology/routeActivity'>;
    /** Himmelsrichtung des Verkehrsweges (z.B. North-South). */
    "routeDirection": NamedNode<'http://dbpedia.org/ontology/routeDirection'>;
    /** End of the route. This is where the route ends and, for U.S. roads, is either at the northern terminus or eastern terminus. */
    "routeEnd": NamedNode<'http://dbpedia.org/ontology/routeEnd'>;
    /** End of the route. The opposite of OntologyProperty:routeStartDirection. */
    "routeEndDirection": NamedNode<'http://dbpedia.org/ontology/routeEndDirection'>;
    /** End-Ort des Verkehrswegs. */
    "routeEndLocation": NamedNode<'http://dbpedia.org/ontology/routeEndLocation'>;
    /** A junction or cross to another route. */
    "routeJunction": NamedNode<'http://dbpedia.org/ontology/routeJunction'>;
    /** ligne d'un arrêt sur une route. */
    "routeLine": NamedNode<'http://dbpedia.org/ontology/routeLine'>;
    /** arrêt suivant sur une route. */
    "routeNext": NamedNode<'http://dbpedia.org/ontology/routeNext'>;
    /** The number of the route. */
    "routeNumber": NamedNode<'http://dbpedia.org/ontology/routeNumber'>;
    /** arrêt précédent sur une route. */
    "routePrevious": NamedNode<'http://dbpedia.org/ontology/routePrevious'>;
    /** Anfang des Verkehrswegs. */
    "routeStart": NamedNode<'http://dbpedia.org/ontology/routeStart'>;
    /** End of the route. For U.S. roads, this should be either "South" or "West" per the standards set by the U.S. Roads project. */
    "routeStartDirection": NamedNode<'http://dbpedia.org/ontology/routeStartDirection'>;
    /** Der Startort des Verkehrswegs. */
    "routeStartLocation": NamedNode<'http://dbpedia.org/ontology/routeStartLocation'>;
    /** The route type abbreviation (eg.: I for Interstate, M for Motorway or NJ for New Jersey Route). */
    "routeTypeAbbreviation": NamedNode<'http://dbpedia.org/ontology/routeTypeAbbreviation'>;
    "royalAnthem": NamedNode<'http://dbpedia.org/ontology/royalAnthem'>;
    /** Ruling referred to in this legal case */
    "ruling": NamedNode<'http://dbpedia.org/ontology/ruling'>;
    "runningMate": NamedNode<'http://dbpedia.org/ontology/runningMate'>;
    "runtime": NamedNode<'http://dbpedia.org/ontology/runtime'>;
    "runwayDesignation": NamedNode<'http://dbpedia.org/ontology/runwayDesignation'>;
    "runwayLength": NamedNode<'http://dbpedia.org/ontology/runwayLength'>;
    "runwaySurface": NamedNode<'http://dbpedia.org/ontology/runwaySurface'>;
    "runwayWidth": NamedNode<'http://dbpedia.org/ontology/runwayWidth'>;
    "ruralMunicipality": NamedNode<'http://dbpedia.org/ontology/ruralMunicipality'>;
    "saint": NamedNode<'http://dbpedia.org/ontology/saint'>;
    "salary": NamedNode<'http://dbpedia.org/ontology/salary'>;
    /** This property holds an intermediate node of the type Sales. */
    "sales": NamedNode<'http://dbpedia.org/ontology/sales'>;
    "sameName": NamedNode<'http://dbpedia.org/ontology/sameName'>;
    /** most recent average SAT scores */
    "satScore": NamedNode<'http://dbpedia.org/ontology/satScore'>;
    "satcat": NamedNode<'http://dbpedia.org/ontology/satcat'>;
    "satellite": NamedNode<'http://dbpedia.org/ontology/satellite'>;
    "satellitesDeployed": NamedNode<'http://dbpedia.org/ontology/satellitesDeployed'>;
    "scale": NamedNode<'http://dbpedia.org/ontology/scale'>;
    "scene": NamedNode<'http://dbpedia.org/ontology/scene'>;
    /** school a person goes or went to */
    "school": NamedNode<'http://dbpedia.org/ontology/school'>;
    "schoolBoard": NamedNode<'http://dbpedia.org/ontology/schoolBoard'>;
    "schoolCode": NamedNode<'http://dbpedia.org/ontology/schoolCode'>;
    "schoolNumber": NamedNode<'http://dbpedia.org/ontology/schoolNumber'>;
    "schoolPatron": NamedNode<'http://dbpedia.org/ontology/schoolPatron'>;
    "scientificName": NamedNode<'http://dbpedia.org/ontology/scientificName'>;
    /** Score or points of something (eg a SportCompetitionResult) */
    "score": NamedNode<'http://dbpedia.org/ontology/score'>;
    "screenActorsGuildAward": NamedNode<'http://dbpedia.org/ontology/screenActorsGuildAward'>;
    "sea": NamedNode<'http://dbpedia.org/ontology/sea'>;
    "season": NamedNode<'http://dbpedia.org/ontology/season'>;
    "seasonManager": NamedNode<'http://dbpedia.org/ontology/seasonManager'>;
    /** The season number to which the TelevisionEpisode belongs. */
    "seasonNumber": NamedNode<'http://dbpedia.org/ontology/seasonNumber'>;
    "seatNumber": NamedNode<'http://dbpedia.org/ontology/seatNumber'>;
    "seatingCapacity": NamedNode<'http://dbpedia.org/ontology/seatingCapacity'>;
    "second": NamedNode<'http://dbpedia.org/ontology/second'>;
    "secondCommander": NamedNode<'http://dbpedia.org/ontology/secondCommander'>;
    "secondDriver": NamedNode<'http://dbpedia.org/ontology/secondDriver'>;
    "secondDriverCountry": NamedNode<'http://dbpedia.org/ontology/secondDriverCountry'>;
    "secondLeader": NamedNode<'http://dbpedia.org/ontology/secondLeader'>;
    "secondPlace": NamedNode<'http://dbpedia.org/ontology/secondPlace'>;
    "secondPopularVote": NamedNode<'http://dbpedia.org/ontology/secondPopularVote'>;
    "secondTeam": NamedNode<'http://dbpedia.org/ontology/secondTeam'>;
    "secretaryGeneral": NamedNode<'http://dbpedia.org/ontology/secretaryGeneral'>;
    /** Safety precautions that are used in the building. */
    "security": NamedNode<'http://dbpedia.org/ontology/security'>;
    "seiyu": NamedNode<'http://dbpedia.org/ontology/seiyu'>;
    /** when (or in which project) the person was selected to train as an astronaut */
    "selection": NamedNode<'http://dbpedia.org/ontology/selection'>;
    "selectionPoint": NamedNode<'http://dbpedia.org/ontology/selectionPoint'>;
    "selectionYear": NamedNode<'http://dbpedia.org/ontology/selectionYear'>;
    /** Authority data from the National Library of Sweden */
    "selibrId": NamedNode<'http://dbpedia.org/ontology/selibrId'>;
    "senator": NamedNode<'http://dbpedia.org/ontology/senator'>;
    "senior": NamedNode<'http://dbpedia.org/ontology/senior'>;
    "seniority": NamedNode<'http://dbpedia.org/ontology/seniority'>;
    "seniunija": NamedNode<'http://dbpedia.org/ontology/seniunija'>;
    "sentence": NamedNode<'http://dbpedia.org/ontology/sentence'>;
    "series": NamedNode<'http://dbpedia.org/ontology/series'>;
    "service": NamedNode<'http://dbpedia.org/ontology/service'>;
    "serviceEndDate": NamedNode<'http://dbpedia.org/ontology/serviceEndDate'>;
    "serviceEndYear": NamedNode<'http://dbpedia.org/ontology/serviceEndYear'>;
    "serviceModule": NamedNode<'http://dbpedia.org/ontology/serviceModule'>;
    /** The service number held by the individual during military service. */
    "serviceNumber": NamedNode<'http://dbpedia.org/ontology/serviceNumber'>;
    "serviceStartDate": NamedNode<'http://dbpedia.org/ontology/serviceStartDate'>;
    "serviceStartYear": NamedNode<'http://dbpedia.org/ontology/serviceStartYear'>;
    /** Railway services that serve the station. */
    "servingRailwayLine": NamedNode<'http://dbpedia.org/ontology/servingRailwayLine'>;
    /** Default serving size (eg "100 g" for the standard 100 g serving size). approximateCalories apply to this serving size */
    "servingSize": NamedNode<'http://dbpedia.org/ontology/servingSize'>;
    /** Serving temperature for the food (e.g.: hot, cold, warm or room temperature). */
    "servingTemperature": NamedNode<'http://dbpedia.org/ontology/servingTemperature'>;
    "sessionNumber": NamedNode<'http://dbpedia.org/ontology/sessionNumber'>;
    /** the person who is responsible for the film set design */
    "setDesigner": NamedNode<'http://dbpedia.org/ontology/setDesigner'>;
    /** The places and time where the play takes place. */
    "settingOfPlay": NamedNode<'http://dbpedia.org/ontology/settingOfPlay'>;
    "settlement": NamedNode<'http://dbpedia.org/ontology/settlement'>;
    "settlementAttached": NamedNode<'http://dbpedia.org/ontology/settlementAttached'>;
    "setupTime": NamedNode<'http://dbpedia.org/ontology/setupTime'>;
    "severeCases": NamedNode<'http://dbpedia.org/ontology/severeCases'>;
    "sex": NamedNode<'http://dbpedia.org/ontology/sex'>;
    "sexualOrientation": NamedNode<'http://dbpedia.org/ontology/sexualOrientation'>;
    "shape": NamedNode<'http://dbpedia.org/ontology/shape'>;
    "shareDate": NamedNode<'http://dbpedia.org/ontology/shareDate'>;
    "shareOfAudience": NamedNode<'http://dbpedia.org/ontology/shareOfAudience'>;
    "shareSource": NamedNode<'http://dbpedia.org/ontology/shareSource'>;
    "sharingOutPopulation": NamedNode<'http://dbpedia.org/ontology/sharingOutPopulation'>;
    "sharingOutPopulationYear": NamedNode<'http://dbpedia.org/ontology/sharingOutPopulationYear'>;
    "sheading": NamedNode<'http://dbpedia.org/ontology/sheading'>;
    /** The beam of a ship is its width at the widest point. */
    "shipBeam": NamedNode<'http://dbpedia.org/ontology/shipBeam'>;
    "shipCrew": NamedNode<'http://dbpedia.org/ontology/shipCrew'>;
    /** A ship's displacement is its mass at any given time. */
    "shipDisplacement": NamedNode<'http://dbpedia.org/ontology/shipDisplacement'>;
    /** The draft (or draught) of a ship's hull is the vertical distance between the waterline and the bottom of the hull (keel), with the thickness of the hull included; in the case of not being included the draft outline would be obtained. */
    "shipDraft": NamedNode<'http://dbpedia.org/ontology/shipDraft'>;
    "shipLaunch": NamedNode<'http://dbpedia.org/ontology/shipLaunch'>;
    "shoeNumber": NamedNode<'http://dbpedia.org/ontology/shoeNumber'>;
    "shoeSize": NamedNode<'http://dbpedia.org/ontology/shoeSize'>;
    "shoot": NamedNode<'http://dbpedia.org/ontology/shoot'>;
    "shoots": NamedNode<'http://dbpedia.org/ontology/shoots'>;
    "shoreLength": NamedNode<'http://dbpedia.org/ontology/shoreLength'>;
    "shortProgCompetition": NamedNode<'http://dbpedia.org/ontology/shortProgCompetition'>;
    "shortProgScore": NamedNode<'http://dbpedia.org/ontology/shortProgScore'>;
    "show": NamedNode<'http://dbpedia.org/ontology/show'>;
    "showJudge": NamedNode<'http://dbpedia.org/ontology/showJudge'>;
    "shuttle": NamedNode<'http://dbpedia.org/ontology/shuttle'>;
    "sibling": NamedNode<'http://dbpedia.org/ontology/sibling'>;
    "signName": NamedNode<'http://dbpedia.org/ontology/signName'>;
    "signature": NamedNode<'http://dbpedia.org/ontology/signature'>;
    "significantBuilding": NamedNode<'http://dbpedia.org/ontology/significantBuilding'>;
    "significantDesign": NamedNode<'http://dbpedia.org/ontology/significantDesign'>;
    /** A siginificant artifact constructed by the person. */
    "significantProject": NamedNode<'http://dbpedia.org/ontology/significantProject'>;
    "silCode": NamedNode<'http://dbpedia.org/ontology/silCode'>;
    "silverMedalDouble": NamedNode<'http://dbpedia.org/ontology/silverMedalDouble'>;
    "silverMedalMixed": NamedNode<'http://dbpedia.org/ontology/silverMedalMixed'>;
    "silverMedalSingle": NamedNode<'http://dbpedia.org/ontology/silverMedalSingle'>;
    "silverMedalist": NamedNode<'http://dbpedia.org/ontology/silverMedalist'>;
    /** indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities */
    "simcCode": NamedNode<'http://dbpedia.org/ontology/simcCode'>;
    "similar": NamedNode<'http://dbpedia.org/ontology/similar'>;
    "sire": NamedNode<'http://dbpedia.org/ontology/sire'>;
    "siren": NamedNode<'http://dbpedia.org/ontology/siren'>;
    "sister": NamedNode<'http://dbpedia.org/ontology/sister'>;
    "sisterCollege": NamedNode<'http://dbpedia.org/ontology/sisterCollege'>;
    "sisterNewspaper": NamedNode<'http://dbpedia.org/ontology/sisterNewspaper'>;
    "sisterStation": NamedNode<'http://dbpedia.org/ontology/sisterStation'>;
    "sixthFormStudents": NamedNode<'http://dbpedia.org/ontology/sixthFormStudents'>;
    "sizeBlazon": NamedNode<'http://dbpedia.org/ontology/sizeBlazon'>;
    "sizeLogo": NamedNode<'http://dbpedia.org/ontology/sizeLogo'>;
    "sizeMap": NamedNode<'http://dbpedia.org/ontology/sizeMap'>;
    "sizeThumbnail": NamedNode<'http://dbpedia.org/ontology/sizeThumbnail'>;
    "size_v": NamedNode<'http://dbpedia.org/ontology/size_v'>;
    "skiLift": NamedNode<'http://dbpedia.org/ontology/skiLift'>;
    "skiPisteKilometre": NamedNode<'http://dbpedia.org/ontology/skiPisteKilometre'>;
    "skiPisteNumber": NamedNode<'http://dbpedia.org/ontology/skiPisteNumber'>;
    "skiTow": NamedNode<'http://dbpedia.org/ontology/skiTow'>;
    "skills": NamedNode<'http://dbpedia.org/ontology/skills'>;
    "skinColor": NamedNode<'http://dbpedia.org/ontology/skinColor'>;
    "slogan": NamedNode<'http://dbpedia.org/ontology/slogan'>;
    /** The Simplified Molecular-Input Line-Entry System or SMILES is a specification in form of a line notation for describing the structure of chemical molecules using short ASCII strings. */
    "smiles": NamedNode<'http://dbpedia.org/ontology/smiles'>;
    "snowParkNumber": NamedNode<'http://dbpedia.org/ontology/snowParkNumber'>;
    "soccerLeaguePromoted": NamedNode<'http://dbpedia.org/ontology/soccerLeaguePromoted'>;
    "soccerLeagueRelegated": NamedNode<'http://dbpedia.org/ontology/soccerLeagueRelegated'>;
    "soccerLeagueSeason": NamedNode<'http://dbpedia.org/ontology/soccerLeagueSeason'>;
    "soccerLeagueWinner": NamedNode<'http://dbpedia.org/ontology/soccerLeagueWinner'>;
    "soccerTournamentClosingSeason": NamedNode<'http://dbpedia.org/ontology/soccerTournamentClosingSeason'>;
    "soccerTournamentLastChampion": NamedNode<'http://dbpedia.org/ontology/soccerTournamentLastChampion'>;
    "soccerTournamentMostSteady": NamedNode<'http://dbpedia.org/ontology/soccerTournamentMostSteady'>;
    "soccerTournamentMostSuccesfull": NamedNode<'http://dbpedia.org/ontology/soccerTournamentMostSuccesfull'>;
    "soccerTournamentOpeningSeason": NamedNode<'http://dbpedia.org/ontology/soccerTournamentOpeningSeason'>;
    "soccerTournamentThisSeason": NamedNode<'http://dbpedia.org/ontology/soccerTournamentThisSeason'>;
    "soccerTournamentTopScorer": NamedNode<'http://dbpedia.org/ontology/soccerTournamentTopScorer'>;
    /** de advocaat-generaal */
    "solicitorGeneral": NamedNode<'http://dbpedia.org/ontology/solicitorGeneral'>;
    "solubility": NamedNode<'http://dbpedia.org/ontology/solubility'>;
    "solvent": NamedNode<'http://dbpedia.org/ontology/solvent'>;
    "solventWithBadSolubility": NamedNode<'http://dbpedia.org/ontology/solventWithBadSolubility'>;
    "solventWithGoodSolubility": NamedNode<'http://dbpedia.org/ontology/solventWithGoodSolubility'>;
    "solventWithMediocreSolubility": NamedNode<'http://dbpedia.org/ontology/solventWithMediocreSolubility'>;
    "son": NamedNode<'http://dbpedia.org/ontology/son'>;
    /** Sound recording somehow related to the subject */
    "soundRecording": NamedNode<'http://dbpedia.org/ontology/soundRecording'>;
    "source": NamedNode<'http://dbpedia.org/ontology/source'>;
    "sourceConfluence": NamedNode<'http://dbpedia.org/ontology/sourceConfluence'>;
    "sourceConfluenceCountry": NamedNode<'http://dbpedia.org/ontology/sourceConfluenceCountry'>;
    "sourceConfluenceElevation": NamedNode<'http://dbpedia.org/ontology/sourceConfluenceElevation'>;
    "sourceConfluenceMountain": NamedNode<'http://dbpedia.org/ontology/sourceConfluenceMountain'>;
    "sourceConfluencePlace": NamedNode<'http://dbpedia.org/ontology/sourceConfluencePlace'>;
    "sourceConfluencePosition": NamedNode<'http://dbpedia.org/ontology/sourceConfluencePosition'>;
    "sourceConfluenceRegion": NamedNode<'http://dbpedia.org/ontology/sourceConfluenceRegion'>;
    "sourceConfluenceState": NamedNode<'http://dbpedia.org/ontology/sourceConfluenceState'>;
    "sourceCountry": NamedNode<'http://dbpedia.org/ontology/sourceCountry'>;
    "sourceDistrict": NamedNode<'http://dbpedia.org/ontology/sourceDistrict'>;
    "sourceElevation": NamedNode<'http://dbpedia.org/ontology/sourceElevation'>;
    "sourceMountain": NamedNode<'http://dbpedia.org/ontology/sourceMountain'>;
    "sourcePlace": NamedNode<'http://dbpedia.org/ontology/sourcePlace'>;
    "sourcePosition": NamedNode<'http://dbpedia.org/ontology/sourcePosition'>;
    "sourceRegion": NamedNode<'http://dbpedia.org/ontology/sourceRegion'>;
    "sourceState": NamedNode<'http://dbpedia.org/ontology/sourceState'>;
    /** Source of something (eg an image) as text. Use dct:source if the source is described using a resource */
    "sourceText": NamedNode<'http://dbpedia.org/ontology/sourceText'>;
    /** indicates another place situated south-east. */
    "southEastPlace": NamedNode<'http://dbpedia.org/ontology/southEastPlace'>;
    /** indicates another place situated south. */
    "southPlace": NamedNode<'http://dbpedia.org/ontology/southPlace'>;
    /** indicates another place situated south-west. */
    "southWestPlace": NamedNode<'http://dbpedia.org/ontology/southWestPlace'>;
    "sovereignCountry": NamedNode<'http://dbpedia.org/ontology/sovereignCountry'>;
    "space": NamedNode<'http://dbpedia.org/ontology/space'>;
    "spacecraft": NamedNode<'http://dbpedia.org/ontology/spacecraft'>;
    /** Raumstation, die während einer Raummission besucht wurde */
    "spacestation": NamedNode<'http://dbpedia.org/ontology/spacestation'>;
    "spacewalkBegin": NamedNode<'http://dbpedia.org/ontology/spacewalkBegin'>;
    "spacewalkEnd": NamedNode<'http://dbpedia.org/ontology/spacewalkEnd'>;
    /** number of office holder */
    "speaker": NamedNode<'http://dbpedia.org/ontology/speaker'>;
    /** the person who is responsible for the film special effects */
    "specialEffects": NamedNode<'http://dbpedia.org/ontology/specialEffects'>;
    "specialTrial": NamedNode<'http://dbpedia.org/ontology/specialTrial'>;
    "specialist": NamedNode<'http://dbpedia.org/ontology/specialist'>;
    "speciality": NamedNode<'http://dbpedia.org/ontology/speciality'>;
    "specialization": NamedNode<'http://dbpedia.org/ontology/specialization'>;
    "species": NamedNode<'http://dbpedia.org/ontology/species'>;
    "speedLimit": NamedNode<'http://dbpedia.org/ontology/speedLimit'>;
    "spike": NamedNode<'http://dbpedia.org/ontology/spike'>;
    "splitFromParty": NamedNode<'http://dbpedia.org/ontology/splitFromParty'>;
    "spokenIn": NamedNode<'http://dbpedia.org/ontology/spokenIn'>;
    "spokesperson": NamedNode<'http://dbpedia.org/ontology/spokesperson'>;
    "sport": NamedNode<'http://dbpedia.org/ontology/sport'>;
    /** Das Land, für das der Sportler an Wettkämpfen teilnimmt */
    "sportCountry": NamedNode<'http://dbpedia.org/ontology/sportCountry'>;
    /** the sport discipline the athlete practices, e.g. Diving, or that a board member of a sporting club is focussing at */
    "sportDiscipline": NamedNode<'http://dbpedia.org/ontology/sportDiscipline'>;
    "sportGoverningBody": NamedNode<'http://dbpedia.org/ontology/sportGoverningBody'>;
    /** the sport specialty the athlete practices, e.g. 'Ring' for a men's artistic gymnastics athlete */
    "sportSpecialty": NamedNode<'http://dbpedia.org/ontology/sportSpecialty'>;
    "sportsFunction": NamedNode<'http://dbpedia.org/ontology/sportsFunction'>;
    /** the person they are married to */
    "spouse": NamedNode<'http://dbpedia.org/ontology/spouse'>;
    "spouseName": NamedNode<'http://dbpedia.org/ontology/spouseName'>;
    "spurOf": NamedNode<'http://dbpedia.org/ontology/spurOf'>;
    "spurType": NamedNode<'http://dbpedia.org/ontology/spurType'>;
    /** The number that an athlete wears in a team sport. */
    "squadNumber": NamedNode<'http://dbpedia.org/ontology/squadNumber'>;
    "stadium": NamedNode<'http://dbpedia.org/ontology/stadium'>;
    "staff": NamedNode<'http://dbpedia.org/ontology/staff'>;
    "starRating": NamedNode<'http://dbpedia.org/ontology/starRating'>;
    "starring": NamedNode<'http://dbpedia.org/ontology/starring'>;
    "start": NamedNode<'http://dbpedia.org/ontology/start'>;
    "startCareer": NamedNode<'http://dbpedia.org/ontology/startCareer'>;
    /** The start date of the event. */
    "startDate": NamedNode<'http://dbpedia.org/ontology/startDate'>;
    /** The start date and time of the event. */
    "startDateTime": NamedNode<'http://dbpedia.org/ontology/startDateTime'>;
    "startOccupation": NamedNode<'http://dbpedia.org/ontology/startOccupation'>;
    "startPoint": NamedNode<'http://dbpedia.org/ontology/startPoint'>;
    "startReign": NamedNode<'http://dbpedia.org/ontology/startReign'>;
    "startWct": NamedNode<'http://dbpedia.org/ontology/startWct'>;
    "startWqs": NamedNode<'http://dbpedia.org/ontology/startWqs'>;
    "startYear": NamedNode<'http://dbpedia.org/ontology/startYear'>;
    "startYearOfInsertion": NamedNode<'http://dbpedia.org/ontology/startYearOfInsertion'>;
    "startYearOfSales": NamedNode<'http://dbpedia.org/ontology/startYearOfSales'>;
    "statName": NamedNode<'http://dbpedia.org/ontology/statName'>;
    "statValue": NamedNode<'http://dbpedia.org/ontology/statValue'>;
    "state": NamedNode<'http://dbpedia.org/ontology/state'>;
    "stateDelegate": NamedNode<'http://dbpedia.org/ontology/stateDelegate'>;
    "stateOfOrigin": NamedNode<'http://dbpedia.org/ontology/stateOfOrigin'>;
    "stateOfOriginPoint": NamedNode<'http://dbpedia.org/ontology/stateOfOriginPoint'>;
    "stateOfOriginTeam": NamedNode<'http://dbpedia.org/ontology/stateOfOriginTeam'>;
    "stateOfOriginYear": NamedNode<'http://dbpedia.org/ontology/stateOfOriginYear'>;
    "stationEvaDuration": NamedNode<'http://dbpedia.org/ontology/stationEvaDuration'>;
    /** Type of station structure (underground, at-grade, or elevated). */
    "stationStructure": NamedNode<'http://dbpedia.org/ontology/stationStructure'>;
    "stationVisitDuration": NamedNode<'http://dbpedia.org/ontology/stationVisitDuration'>;
    "statistic": NamedNode<'http://dbpedia.org/ontology/statistic'>;
    "statisticLabel": NamedNode<'http://dbpedia.org/ontology/statisticLabel'>;
    "statisticValue": NamedNode<'http://dbpedia.org/ontology/statisticValue'>;
    "statisticYear": NamedNode<'http://dbpedia.org/ontology/statisticYear'>;
    "status": NamedNode<'http://dbpedia.org/ontology/status'>;
    "statusManager": NamedNode<'http://dbpedia.org/ontology/statusManager'>;
    "statusYear": NamedNode<'http://dbpedia.org/ontology/statusYear'>;
    "stellarClassification": NamedNode<'http://dbpedia.org/ontology/stellarClassification'>;
    "stockExchange": NamedNode<'http://dbpedia.org/ontology/stockExchange'>;
    "storyEditor": NamedNode<'http://dbpedia.org/ontology/storyEditor'>;
    "strength": NamedNode<'http://dbpedia.org/ontology/strength'>;
    "structuralSystem": NamedNode<'http://dbpedia.org/ontology/structuralSystem'>;
    "student": NamedNode<'http://dbpedia.org/ontology/student'>;
    "style": NamedNode<'http://dbpedia.org/ontology/style'>;
    "stylisticOrigin": NamedNode<'http://dbpedia.org/ontology/stylisticOrigin'>;
    /** a subdivision within a Species classis */
    "subClassis": NamedNode<'http://dbpedia.org/ontology/subClassis'>;
    "subFamily": NamedNode<'http://dbpedia.org/ontology/subFamily'>;
    /** A rank in the classification of organisms, below genus ; a taxon at that rank */
    "subGenus": NamedNode<'http://dbpedia.org/ontology/subGenus'>;
    "subMunicipalityType": NamedNode<'http://dbpedia.org/ontology/subMunicipalityType'>;
    "subOrder": NamedNode<'http://dbpedia.org/ontology/subOrder'>;
    "subPrefecture": NamedNode<'http://dbpedia.org/ontology/subPrefecture'>;
    "subTribus": NamedNode<'http://dbpedia.org/ontology/subTribus'>;
    "subdivision": NamedNode<'http://dbpedia.org/ontology/subdivision'>;
    "subdivisionLink": NamedNode<'http://dbpedia.org/ontology/subdivisionLink'>;
    "subdivisionName": NamedNode<'http://dbpedia.org/ontology/subdivisionName'>;
    "subdivisions": NamedNode<'http://dbpedia.org/ontology/subdivisions'>;
    /** The overall subject matter dealt with by the play. */
    "subjectOfPlay": NamedNode<'http://dbpedia.org/ontology/subjectOfPlay'>;
    /** The subject as a term, possibly a term from a formal classification */
    "subjectTerm": NamedNode<'http://dbpedia.org/ontology/subjectTerm'>;
    "sublimationPoint": NamedNode<'http://dbpedia.org/ontology/sublimationPoint'>;
    "suborbitalFlights": NamedNode<'http://dbpedia.org/ontology/suborbitalFlights'>;
    "subprefecture": NamedNode<'http://dbpedia.org/ontology/subprefecture'>;
    "subregion": NamedNode<'http://dbpedia.org/ontology/subregion'>;
    "subsequentInfrastructure": NamedNode<'http://dbpedia.org/ontology/subsequentInfrastructure'>;
    "subsequentWork": NamedNode<'http://dbpedia.org/ontology/subsequentWork'>;
    "subsidiary": NamedNode<'http://dbpedia.org/ontology/subsidiary'>;
    "subsystem": NamedNode<'http://dbpedia.org/ontology/subsystem'>;
    "subsystemLink": NamedNode<'http://dbpedia.org/ontology/subsystemLink'>;
    "subtitle": NamedNode<'http://dbpedia.org/ontology/subtitle'>;
    "successfulLaunches": NamedNode<'http://dbpedia.org/ontology/successfulLaunches'>;
    "successor": NamedNode<'http://dbpedia.org/ontology/successor'>;
    /**
     * Système universitaire de documentation id (French collaborative library catalog).
     * http://www.idref.fr/$1
     */
    "sudocId": NamedNode<'http://dbpedia.org/ontology/sudocId'>;
    "summerAppearances": NamedNode<'http://dbpedia.org/ontology/summerAppearances'>;
    "summerTemperature": NamedNode<'http://dbpedia.org/ontology/summerTemperature'>;
    "superFamily": NamedNode<'http://dbpedia.org/ontology/superFamily'>;
    "superOrder": NamedNode<'http://dbpedia.org/ontology/superOrder'>;
    "superTribus": NamedNode<'http://dbpedia.org/ontology/superTribus'>;
    "superbowlWin": NamedNode<'http://dbpedia.org/ontology/superbowlWin'>;
    "superintendent": NamedNode<'http://dbpedia.org/ontology/superintendent'>;
    "supplementalDraftRound": NamedNode<'http://dbpedia.org/ontology/supplementalDraftRound'>;
    "supplementalDraftYear": NamedNode<'http://dbpedia.org/ontology/supplementalDraftYear'>;
    "supplies": NamedNode<'http://dbpedia.org/ontology/supplies'>;
    "supply": NamedNode<'http://dbpedia.org/ontology/supply'>;
    /**
     * Date when the Church forbade the veneration of this saint. 
     * (I hope that's what it means, I don't know why the original author didn't document it)
     */
    "suppreddedDate": NamedNode<'http://dbpedia.org/ontology/suppreddedDate'>;
    "surfaceArea": NamedNode<'http://dbpedia.org/ontology/surfaceArea'>;
    "surfaceFormOccurrenceOffset": NamedNode<'http://dbpedia.org/ontology/surfaceFormOccurrenceOffset'>;
    "surfaceGravity": NamedNode<'http://dbpedia.org/ontology/surfaceGravity'>;
    "surfaceType": NamedNode<'http://dbpedia.org/ontology/surfaceType'>;
    "suspectedCases": NamedNode<'http://dbpedia.org/ontology/suspectedCases'>;
    "swimmingStyle": NamedNode<'http://dbpedia.org/ontology/swimmingStyle'>;
    /** HUGO Gene Symbol */
    "symbol": NamedNode<'http://dbpedia.org/ontology/symbol'>;
    "symptom": NamedNode<'http://dbpedia.org/ontology/symptom'>;
    "synonym": NamedNode<'http://dbpedia.org/ontology/synonym'>;
    /** A referral to the relevant system of law */
    "systemOfLaw": NamedNode<'http://dbpedia.org/ontology/systemOfLaw'>;
    "systemRequirements": NamedNode<'http://dbpedia.org/ontology/systemRequirements'>;
    "tag": NamedNode<'http://dbpedia.org/ontology/tag'>;
    /** head of government of Ireland */
    "taoiseach": NamedNode<'http://dbpedia.org/ontology/taoiseach'>;
    "targetAirport": NamedNode<'http://dbpedia.org/ontology/targetAirport'>;
    "targetSpaceStation": NamedNode<'http://dbpedia.org/ontology/targetSpaceStation'>;
    "taste": NamedNode<'http://dbpedia.org/ontology/taste'>;
    "tattoo": NamedNode<'http://dbpedia.org/ontology/tattoo'>;
    "taxon": NamedNode<'http://dbpedia.org/ontology/taxon'>;
    "teachingStaff": NamedNode<'http://dbpedia.org/ontology/teachingStaff'>;
    "team": NamedNode<'http://dbpedia.org/ontology/team'>;
    "teamCoached": NamedNode<'http://dbpedia.org/ontology/teamCoached'>;
    "teamManager": NamedNode<'http://dbpedia.org/ontology/teamManager'>;
    "teamName": NamedNode<'http://dbpedia.org/ontology/teamName'>;
    "teamPoint": NamedNode<'http://dbpedia.org/ontology/teamPoint'>;
    "teamSize": NamedNode<'http://dbpedia.org/ontology/teamSize'>;
    "teamTitle": NamedNode<'http://dbpedia.org/ontology/teamTitle'>;
    "technique": NamedNode<'http://dbpedia.org/ontology/technique'>;
    "televisionSeries": NamedNode<'http://dbpedia.org/ontology/televisionSeries'>;
    "tempPlace": NamedNode<'http://dbpedia.org/ontology/tempPlace'>;
    "temperature": NamedNode<'http://dbpedia.org/ontology/temperature'>;
    "templateName": NamedNode<'http://dbpedia.org/ontology/templateName'>;
    "temple": NamedNode<'http://dbpedia.org/ontology/temple'>;
    "templeYear": NamedNode<'http://dbpedia.org/ontology/templeYear'>;
    "tenant": NamedNode<'http://dbpedia.org/ontology/tenant'>;
    /** There are five types of court surface used in professional play. Each surface is different in the speed and height of the bounce of the ball. */
    "tennisSurfaceType": NamedNode<'http://dbpedia.org/ontology/tennisSurfaceType'>;
    "termOfOffice": NamedNode<'http://dbpedia.org/ontology/termOfOffice'>;
    "termPeriod": NamedNode<'http://dbpedia.org/ontology/termPeriod'>;
    "territory": NamedNode<'http://dbpedia.org/ontology/territory'>;
    /** indexing code used by the Polish National Official Register of the Territorial Division of the Country (TERYT) to identify various entities */
    "terytCode": NamedNode<'http://dbpedia.org/ontology/terytCode'>;
    "tessitura": NamedNode<'http://dbpedia.org/ontology/tessitura'>;
    "testaverage": NamedNode<'http://dbpedia.org/ontology/testaverage'>;
    "theology": NamedNode<'http://dbpedia.org/ontology/theology'>;
    "third": NamedNode<'http://dbpedia.org/ontology/third'>;
    "thirdCommander": NamedNode<'http://dbpedia.org/ontology/thirdCommander'>;
    "thirdDriver": NamedNode<'http://dbpedia.org/ontology/thirdDriver'>;
    "thirdDriverCountry": NamedNode<'http://dbpedia.org/ontology/thirdDriverCountry'>;
    "thirdPlace": NamedNode<'http://dbpedia.org/ontology/thirdPlace'>;
    "thirdTeam": NamedNode<'http://dbpedia.org/ontology/thirdTeam'>;
    "throwingSide": NamedNode<'http://dbpedia.org/ontology/throwingSide'>;
    /** Reserved for DBpedia. */
    "thumbnail": NamedNode<'http://dbpedia.org/ontology/thumbnail'>;
    "thumbnailCaption": NamedNode<'http://dbpedia.org/ontology/thumbnailCaption'>;
    "tie": NamedNode<'http://dbpedia.org/ontology/tie'>;
    /** Χρόνος χαρακτηρίζεται η ακριβής μέτρηση μιας διαδικασίας από το παρελθόν στο μέλλον. */
    "time": NamedNode<'http://dbpedia.org/ontology/time'>;
    "timeInSpace": NamedNode<'http://dbpedia.org/ontology/timeInSpace'>;
    "timeZone": NamedNode<'http://dbpedia.org/ontology/timeZone'>;
    "timeshiftChannel": NamedNode<'http://dbpedia.org/ontology/timeshiftChannel'>;
    "title": NamedNode<'http://dbpedia.org/ontology/title'>;
    "titleDate": NamedNode<'http://dbpedia.org/ontology/titleDate'>;
    "titleDouble": NamedNode<'http://dbpedia.org/ontology/titleDouble'>;
    "titleLanguage": NamedNode<'http://dbpedia.org/ontology/titleLanguage'>;
    "titleSingle": NamedNode<'http://dbpedia.org/ontology/titleSingle'>;
    "toll": NamedNode<'http://dbpedia.org/ontology/toll'>;
    "tonyAward": NamedNode<'http://dbpedia.org/ontology/tonyAward'>;
    "topFloorHeight": NamedNode<'http://dbpedia.org/ontology/topFloorHeight'>;
    "topLevelDomain": NamedNode<'http://dbpedia.org/ontology/topLevelDomain'>;
    "topSpeed": NamedNode<'http://dbpedia.org/ontology/topSpeed'>;
    "topic": NamedNode<'http://dbpedia.org/ontology/topic'>;
    "torchBearer": NamedNode<'http://dbpedia.org/ontology/torchBearer'>;
    "torqueOutput": NamedNode<'http://dbpedia.org/ontology/torqueOutput'>;
    "totalCargo": NamedNode<'http://dbpedia.org/ontology/totalCargo'>;
    /** the total number of discs contained in the album */
    "totalDiscs": NamedNode<'http://dbpedia.org/ontology/totalDiscs'>;
    "totalIliCases": NamedNode<'http://dbpedia.org/ontology/totalIliCases'>;
    "totalLaunches": NamedNode<'http://dbpedia.org/ontology/totalLaunches'>;
    "totalMass": NamedNode<'http://dbpedia.org/ontology/totalMass'>;
    "totalPopulation": NamedNode<'http://dbpedia.org/ontology/totalPopulation'>;
    /** the total number of tracks contained in the album */
    "totalTracks": NamedNode<'http://dbpedia.org/ontology/totalTracks'>;
    "totalTravellers": NamedNode<'http://dbpedia.org/ontology/totalTravellers'>;
    "touristicSite": NamedNode<'http://dbpedia.org/ontology/touristicSite'>;
    "tournamentOfChampions": NamedNode<'http://dbpedia.org/ontology/tournamentOfChampions'>;
    "tournamentRecord": NamedNode<'http://dbpedia.org/ontology/tournamentRecord'>;
    "towerHeight": NamedNode<'http://dbpedia.org/ontology/towerHeight'>;
    /** Length of the track. Wikipedians usually do not differentiate between track length and line lenght. */
    "trackLength": NamedNode<'http://dbpedia.org/ontology/trackLength'>;
    "trackNumber": NamedNode<'http://dbpedia.org/ontology/trackNumber'>;
    /** Width of the track, e.g., the track width differing in Russia from (Western and Middle) European track width */
    "trackWidth": NamedNode<'http://dbpedia.org/ontology/trackWidth'>;
    "tradeMark": NamedNode<'http://dbpedia.org/ontology/tradeMark'>;
    "tradingName": NamedNode<'http://dbpedia.org/ontology/tradingName'>;
    "trainer": NamedNode<'http://dbpedia.org/ontology/trainer'>;
    "trainerClub": NamedNode<'http://dbpedia.org/ontology/trainerClub'>;
    "trainerYears": NamedNode<'http://dbpedia.org/ontology/trainerYears'>;
    "training": NamedNode<'http://dbpedia.org/ontology/training'>;
    "translatedMotto": NamedNode<'http://dbpedia.org/ontology/translatedMotto'>;
    /** Translator(s), if original not in English */
    "translator": NamedNode<'http://dbpedia.org/ontology/translator'>;
    "transmission": NamedNode<'http://dbpedia.org/ontology/transmission'>;
    "treatment": NamedNode<'http://dbpedia.org/ontology/treatment'>;
    "tree": NamedNode<'http://dbpedia.org/ontology/tree'>;
    "tribus": NamedNode<'http://dbpedia.org/ontology/tribus'>;
    "trustee": NamedNode<'http://dbpedia.org/ontology/trustee'>;
    "tu": NamedNode<'http://dbpedia.org/ontology/tu'>;
    "tuition": NamedNode<'http://dbpedia.org/ontology/tuition'>;
    "tvComId": NamedNode<'http://dbpedia.org/ontology/tvComId'>;
    "tvShow": NamedNode<'http://dbpedia.org/ontology/tvShow'>;
    "twinCountry": NamedNode<'http://dbpedia.org/ontology/twinCountry'>;
    "twinTown": NamedNode<'http://dbpedia.org/ontology/twinTown'>;
    "type": NamedNode<'http://dbpedia.org/ontology/type'>;
    /** Scale parameters that can be understood by Geohack, eg "type:", "scale:", "region:" "altitude:". Use "_" for several (eg "type:landmark_scale:50000"). See https://fr.wikipedia.org/wiki/Modèle:Infobox_Subdivision_administrative for examples, and https://fr.wikipedia.org/wiki/Modèle:GeoTemplate/Utilisation#La_mention_Type:... for a complete list */
    "typeCoordinate": NamedNode<'http://dbpedia.org/ontology/typeCoordinate'>;
    /** Electrification system (e.g. Third rail, Overhead catenary). */
    "typeOfElectrification": NamedNode<'http://dbpedia.org/ontology/typeOfElectrification'>;
    "typeOfGrain": NamedNode<'http://dbpedia.org/ontology/typeOfGrain'>;
    "typeOfStorage": NamedNode<'http://dbpedia.org/ontology/typeOfStorage'>;
    "typeOfYeast": NamedNode<'http://dbpedia.org/ontology/typeOfYeast'>;
    /** DfE unique reference number of a school in England or Wales */
    "uRN": NamedNode<'http://dbpedia.org/ontology/uRN'>;
    /** Official UCI code for cycling teams */
    "uciCode": NamedNode<'http://dbpedia.org/ontology/uciCode'>;
    /**
     * Union List of Artist Names id (Getty Research Institute). ULAN has 293,000 names and other information about artists. Names in ULAN may include given names, pseudonyms, variant spellings, names in multiple languages, and names that have changed over time (e.g., married names).
     * http://vocab.getty.edu/ulan/$1
     */
    "ulanId": NamedNode<'http://dbpedia.org/ontology/ulanId'>;
    "umbrellaTitle": NamedNode<'http://dbpedia.org/ontology/umbrellaTitle'>;
    "unNumber": NamedNode<'http://dbpedia.org/ontology/unNumber'>;
    "uncle": NamedNode<'http://dbpedia.org/ontology/uncle'>;
    "undraftedYear": NamedNode<'http://dbpedia.org/ontology/undraftedYear'>;
    "unesco": NamedNode<'http://dbpedia.org/ontology/unesco'>;
    /** το διεθνές πρότυπο Unicode στοχεύει στην κωδικοποίηση όλων των συστημάτων γραφής που χρησιμοποιούνται στον πλανήτη. */
    "unicode": NamedNode<'http://dbpedia.org/ontology/unicode'>;
    "uniprot": NamedNode<'http://dbpedia.org/ontology/uniprot'>;
    "unitCost": NamedNode<'http://dbpedia.org/ontology/unitCost'>;
    "unitaryAuthority": NamedNode<'http://dbpedia.org/ontology/unitaryAuthority'>;
    "unitedStatesNationalBridgeId": NamedNode<'http://dbpedia.org/ontology/unitedStatesNationalBridgeId'>;
    /** To πανεπιστήμιο είναι εκπαιδευτικό ίδρυμα ανώτατης εκπαίδευσης και επιστημονικής έρευνας που παρέχει πτυχίο πιστοποίησης ακαδημαϊκής εκπαίδευσης. */
    "university": NamedNode<'http://dbpedia.org/ontology/university'>;
    /** number of launches with unknown outcomes (or in progress) */
    "unknownOutcomes": NamedNode<'http://dbpedia.org/ontology/unknownOutcomes'>;
    /** UN/LOCODE је код Уједињених нација за трговинске и транспортне локације. Као што су луке, железнички и путни терминали, аеродроми, поште и гранични прелази. */
    "unloCode": NamedNode<'http://dbpedia.org/ontology/unloCode'>;
    /** The last update date of a resource */
    "updated": NamedNode<'http://dbpedia.org/ontology/updated'>;
    "upperAge": NamedNode<'http://dbpedia.org/ontology/upperAge'>;
    "urbanArea": NamedNode<'http://dbpedia.org/ontology/urbanArea'>;
    "usOpenDouble": NamedNode<'http://dbpedia.org/ontology/usOpenDouble'>;
    "usOpenMixed": NamedNode<'http://dbpedia.org/ontology/usOpenMixed'>;
    "usOpenSingle": NamedNode<'http://dbpedia.org/ontology/usOpenSingle'>;
    /** Number of things (eg vehicles) sold in the US */
    "usSales": NamedNode<'http://dbpedia.org/ontology/usSales'>;
    /** wars that were typical for the usage of a weapon */
    "usedInWar": NamedNode<'http://dbpedia.org/ontology/usedInWar'>;
    "uses": NamedNode<'http://dbpedia.org/ontology/uses'>;
    "usingCountry": NamedNode<'http://dbpedia.org/ontology/usingCountry'>;
    "usk": NamedNode<'http://dbpedia.org/ontology/usk'>;
    "usopenWins": NamedNode<'http://dbpedia.org/ontology/usopenWins'>;
    "usurper": NamedNode<'http://dbpedia.org/ontology/usurper'>;
    "utcOffset": NamedNode<'http://dbpedia.org/ontology/utcOffset'>;
    "v_hb": NamedNode<'http://dbpedia.org/ontology/v_hb'>;
    "value": NamedNode<'http://dbpedia.org/ontology/value'>;
    "valvetrain": NamedNode<'http://dbpedia.org/ontology/valvetrain'>;
    "vaporPressure": NamedNode<'http://dbpedia.org/ontology/vaporPressure'>;
    /** variant or variation of something, for example the variant of a car */
    "variantOf": NamedNode<'http://dbpedia.org/ontology/variantOf'>;
    "varietals": NamedNode<'http://dbpedia.org/ontology/varietals'>;
    /** vehicle that uses a specific automobile platform */
    "vehicle": NamedNode<'http://dbpedia.org/ontology/vehicle'>;
    /** Region related vehicle code on the vehicle plates. */
    "vehicleCode": NamedNode<'http://dbpedia.org/ontology/vehicleCode'>;
    "vehiclesInFleet": NamedNode<'http://dbpedia.org/ontology/vehiclesInFleet'>;
    "vehiclesPerDay": NamedNode<'http://dbpedia.org/ontology/vehiclesPerDay'>;
    "vein": NamedNode<'http://dbpedia.org/ontology/vein'>;
    "veneratedIn": NamedNode<'http://dbpedia.org/ontology/veneratedIn'>;
    "version": NamedNode<'http://dbpedia.org/ontology/version'>;
    /** Virtual International Authority File ID (operated by Online Computer Library Center, OCLC). Property range set to Agent because of corporate authors */
    "viafId": NamedNode<'http://dbpedia.org/ontology/viafId'>;
    "viceChancellor": NamedNode<'http://dbpedia.org/ontology/viceChancellor'>;
    "viceLeader": NamedNode<'http://dbpedia.org/ontology/viceLeader'>;
    "viceLeaderParty": NamedNode<'http://dbpedia.org/ontology/viceLeaderParty'>;
    "vicePresident": NamedNode<'http://dbpedia.org/ontology/vicePresident'>;
    "vicePrimeMinister": NamedNode<'http://dbpedia.org/ontology/vicePrimeMinister'>;
    "vicePrincipal": NamedNode<'http://dbpedia.org/ontology/vicePrincipal'>;
    "vicePrincipalLabel": NamedNode<'http://dbpedia.org/ontology/vicePrincipalLabel'>;
    /** Specific (eg notable) person, or specific class of people (eg Romani) that are victim of a ConcentrationCamp, Criminal, SerialKiller, or some other atrocity */
    "victim": NamedNode<'http://dbpedia.org/ontology/victim'>;
    /** Type, description, or name(s) of victims of a ConcentrationCamp, Criminal, SerialKiller, or some other atrocity */
    "victims": NamedNode<'http://dbpedia.org/ontology/victims'>;
    "victory": NamedNode<'http://dbpedia.org/ontology/victory'>;
    "victoryAsMgr": NamedNode<'http://dbpedia.org/ontology/victoryAsMgr'>;
    "victoryPercentageAsMgr": NamedNode<'http://dbpedia.org/ontology/victoryPercentageAsMgr'>;
    "virtualChannel": NamedNode<'http://dbpedia.org/ontology/virtualChannel'>;
    /** Year visitor information was gathered. */
    "visitorStatisticsAsOf": NamedNode<'http://dbpedia.org/ontology/visitorStatisticsAsOf'>;
    "visitorsPerDay": NamedNode<'http://dbpedia.org/ontology/visitorsPerDay'>;
    "visitorsPerYear": NamedNode<'http://dbpedia.org/ontology/visitorsPerYear'>;
    /** Percentage increase or decrease. */
    "visitorsPercentageChange": NamedNode<'http://dbpedia.org/ontology/visitorsPercentageChange'>;
    "visitorsTotal": NamedNode<'http://dbpedia.org/ontology/visitorsTotal'>;
    /** Voice artist used in a TelevisionShow, Movie, or to sound the voice of a FictionalCharacter */
    "voice": NamedNode<'http://dbpedia.org/ontology/voice'>;
    /** voice type of a singer or an actor */
    "voiceType": NamedNode<'http://dbpedia.org/ontology/voiceType'>;
    "volcanicActivity": NamedNode<'http://dbpedia.org/ontology/volcanicActivity'>;
    "volcanicType": NamedNode<'http://dbpedia.org/ontology/volcanicType'>;
    "volcanoId": NamedNode<'http://dbpedia.org/ontology/volcanoId'>;
    /** Voltage of the electrification system. */
    "voltageOfElectrification": NamedNode<'http://dbpedia.org/ontology/voltageOfElectrification'>;
    "volume": NamedNode<'http://dbpedia.org/ontology/volume'>;
    "volumeQuote": NamedNode<'http://dbpedia.org/ontology/volumeQuote'>;
    "volumes": NamedNode<'http://dbpedia.org/ontology/volumes'>;
    "vonKlitzingConstant": NamedNode<'http://dbpedia.org/ontology/vonKlitzingConstant'>;
    "votesAgainst": NamedNode<'http://dbpedia.org/ontology/votesAgainst'>;
    "votesFor": NamedNode<'http://dbpedia.org/ontology/votesFor'>;
    "wagon": NamedNode<'http://dbpedia.org/ontology/wagon'>;
    "waistSize": NamedNode<'http://dbpedia.org/ontology/waistSize'>;
    "war": NamedNode<'http://dbpedia.org/ontology/war'>;
    "ward": NamedNode<'http://dbpedia.org/ontology/ward'>;
    "water": NamedNode<'http://dbpedia.org/ontology/water'>;
    "waterArea": NamedNode<'http://dbpedia.org/ontology/waterArea'>;
    "waterPercentage": NamedNode<'http://dbpedia.org/ontology/waterPercentage'>;
    "watercourse": NamedNode<'http://dbpedia.org/ontology/watercourse'>;
    "watershed": NamedNode<'http://dbpedia.org/ontology/watershed'>;
    /** Waterway that goes through the tunnel. */
    "waterwayThroughTunnel": NamedNode<'http://dbpedia.org/ontology/waterwayThroughTunnel'>;
    "wavelength": NamedNode<'http://dbpedia.org/ontology/wavelength'>;
    "weapon": NamedNode<'http://dbpedia.org/ontology/weapon'>;
    /** The URL to the webcast of the Thing. */
    "webcast": NamedNode<'http://dbpedia.org/ontology/webcast'>;
    "websiteLabel": NamedNode<'http://dbpedia.org/ontology/websiteLabel'>;
    "weddingParentsDate": NamedNode<'http://dbpedia.org/ontology/weddingParentsDate'>;
    "weight": NamedNode<'http://dbpedia.org/ontology/weight'>;
    /** indicates another place situated west. */
    "westPlace": NamedNode<'http://dbpedia.org/ontology/westPlace'>;
    "whaDraft": NamedNode<'http://dbpedia.org/ontology/whaDraft'>;
    "whaDraftTeam": NamedNode<'http://dbpedia.org/ontology/whaDraftTeam'>;
    "whaDraftYear": NamedNode<'http://dbpedia.org/ontology/whaDraftYear'>;
    "wheelbase": NamedNode<'http://dbpedia.org/ontology/wheelbase'>;
    "wholeArea": NamedNode<'http://dbpedia.org/ontology/wholeArea'>;
    "width": NamedNode<'http://dbpedia.org/ontology/width'>;
    "widthQuote": NamedNode<'http://dbpedia.org/ontology/widthQuote'>;
    /** Needs to be removed, left at the moment to not break DBpedia Live */
    "wikiPageCharacterSize": NamedNode<'http://dbpedia.org/ontology/wikiPageCharacterSize'>;
    /** Reserved for DBpedia. */
    "wikiPageDisambiguates": NamedNode<'http://dbpedia.org/ontology/wikiPageDisambiguates'>;
    /** Reserved for DBpedia. */
    "wikiPageEditLink": NamedNode<'http://dbpedia.org/ontology/wikiPageEditLink'>;
    /** Reserved for DBpedia. */
    "wikiPageExternalLink": NamedNode<'http://dbpedia.org/ontology/wikiPageExternalLink'>;
    /** Date a page was extracted '''''' */
    "wikiPageExtracted": NamedNode<'http://dbpedia.org/ontology/wikiPageExtracted'>;
    /** Reserved for DBpedia. */
    "wikiPageHistoryLink": NamedNode<'http://dbpedia.org/ontology/wikiPageHistoryLink'>;
    /** Reserved for DBpedia. */
    "wikiPageID": NamedNode<'http://dbpedia.org/ontology/wikiPageID'>;
    /** Reserved for DBpedia. */
    "wikiPageInDegree": NamedNode<'http://dbpedia.org/ontology/wikiPageInDegree'>;
    /** Reserved for DBpedia. */
    "wikiPageInterLanguageLink": NamedNode<'http://dbpedia.org/ontology/wikiPageInterLanguageLink'>;
    /** Reserved for DBpedia. */
    "wikiPageLength": NamedNode<'http://dbpedia.org/ontology/wikiPageLength'>;
    /** Reserved for DBpedia '''''' */
    "wikiPageModified": NamedNode<'http://dbpedia.org/ontology/wikiPageModified'>;
    /** Reserved for DBpedia. */
    "wikiPageOutDegree": NamedNode<'http://dbpedia.org/ontology/wikiPageOutDegree'>;
    /** Reserved for DBpedia. */
    "wikiPageRedirects": NamedNode<'http://dbpedia.org/ontology/wikiPageRedirects'>;
    /** Reserved for DBpedia. */
    "wikiPageRevisionID": NamedNode<'http://dbpedia.org/ontology/wikiPageRevisionID'>;
    /** Reserved for DBpedia. */
    "wikiPageRevisionLink": NamedNode<'http://dbpedia.org/ontology/wikiPageRevisionLink'>;
    "wikiPageUsesTemplate": NamedNode<'http://dbpedia.org/ontology/wikiPageUsesTemplate'>;
    /** Reserved for DBpedia. */
    "wikiPageWikiLink": NamedNode<'http://dbpedia.org/ontology/wikiPageWikiLink'>;
    /** Reserved for DBpedia. */
    "wikiPageWikiLinkText": NamedNode<'http://dbpedia.org/ontology/wikiPageWikiLinkText'>;
    /** is used to denote splitting of a Wikidata IRI to one or more IRIs */
    "wikidataSplitIri": NamedNode<'http://dbpedia.org/ontology/wikidataSplitIri'>;
    "wilaya": NamedNode<'http://dbpedia.org/ontology/wilaya'>;
    "wimbledonDouble": NamedNode<'http://dbpedia.org/ontology/wimbledonDouble'>;
    "wimbledonMixed": NamedNode<'http://dbpedia.org/ontology/wimbledonMixed'>;
    "wimbledonSingle": NamedNode<'http://dbpedia.org/ontology/wimbledonSingle'>;
    "wineProduced": NamedNode<'http://dbpedia.org/ontology/wineProduced'>;
    "wineRegion": NamedNode<'http://dbpedia.org/ontology/wineRegion'>;
    "wineYear": NamedNode<'http://dbpedia.org/ontology/wineYear'>;
    "wingArea": NamedNode<'http://dbpedia.org/ontology/wingArea'>;
    "wingspan": NamedNode<'http://dbpedia.org/ontology/wingspan'>;
    "wins": NamedNode<'http://dbpedia.org/ontology/wins'>;
    "winsAtAlpg": NamedNode<'http://dbpedia.org/ontology/winsAtAlpg'>;
    "winsAtAsia": NamedNode<'http://dbpedia.org/ontology/winsAtAsia'>;
    "winsAtAus": NamedNode<'http://dbpedia.org/ontology/winsAtAus'>;
    "winsAtChallenges": NamedNode<'http://dbpedia.org/ontology/winsAtChallenges'>;
    "winsAtChampionships": NamedNode<'http://dbpedia.org/ontology/winsAtChampionships'>;
    "winsAtJLPGA": NamedNode<'http://dbpedia.org/ontology/winsAtJLPGA'>;
    "winsAtJapan": NamedNode<'http://dbpedia.org/ontology/winsAtJapan'>;
    "winsAtKLPGA": NamedNode<'http://dbpedia.org/ontology/winsAtKLPGA'>;
    "winsAtLAGT": NamedNode<'http://dbpedia.org/ontology/winsAtLAGT'>;
    "winsAtLET": NamedNode<'http://dbpedia.org/ontology/winsAtLET'>;
    "winsAtLPGA": NamedNode<'http://dbpedia.org/ontology/winsAtLPGA'>;
    "winsAtMajors": NamedNode<'http://dbpedia.org/ontology/winsAtMajors'>;
    "winsAtNWIDE": NamedNode<'http://dbpedia.org/ontology/winsAtNWIDE'>;
    "winsAtOtherTournaments": NamedNode<'http://dbpedia.org/ontology/winsAtOtherTournaments'>;
    "winsAtPGA": NamedNode<'http://dbpedia.org/ontology/winsAtPGA'>;
    "winsAtProTournaments": NamedNode<'http://dbpedia.org/ontology/winsAtProTournaments'>;
    "winsAtSenEuro": NamedNode<'http://dbpedia.org/ontology/winsAtSenEuro'>;
    "winsAtSun": NamedNode<'http://dbpedia.org/ontology/winsAtSun'>;
    "winsInEurope": NamedNode<'http://dbpedia.org/ontology/winsInEurope'>;
    "winterAppearances": NamedNode<'http://dbpedia.org/ontology/winterAppearances'>;
    "winterTemperature": NamedNode<'http://dbpedia.org/ontology/winterTemperature'>;
    /** World Register of Marine Species */
    "woRMS": NamedNode<'http://dbpedia.org/ontology/woRMS'>;
    "wordBefore": NamedNode<'http://dbpedia.org/ontology/wordBefore'>;
    "work": NamedNode<'http://dbpedia.org/ontology/work'>;
    "workArea": NamedNode<'http://dbpedia.org/ontology/workArea'>;
    "world": NamedNode<'http://dbpedia.org/ontology/world'>;
    /** can be one or several years */
    "worldChampionTitleYear": NamedNode<'http://dbpedia.org/ontology/worldChampionTitleYear'>;
    "worldOpen": NamedNode<'http://dbpedia.org/ontology/worldOpen'>;
    "worldTeamCup": NamedNode<'http://dbpedia.org/ontology/worldTeamCup'>;
    "worldTournament": NamedNode<'http://dbpedia.org/ontology/worldTournament'>;
    "worldTournamentBronze": NamedNode<'http://dbpedia.org/ontology/worldTournamentBronze'>;
    "worldTournamentGold": NamedNode<'http://dbpedia.org/ontology/worldTournamentGold'>;
    "worldTournamentSilver": NamedNode<'http://dbpedia.org/ontology/worldTournamentSilver'>;
    "worstDefeat": NamedNode<'http://dbpedia.org/ontology/worstDefeat'>;
    "wptFinalTable": NamedNode<'http://dbpedia.org/ontology/wptFinalTable'>;
    "wptItm": NamedNode<'http://dbpedia.org/ontology/wptItm'>;
    "wptTitle": NamedNode<'http://dbpedia.org/ontology/wptTitle'>;
    "writer": NamedNode<'http://dbpedia.org/ontology/writer'>;
    "wsopItm": NamedNode<'http://dbpedia.org/ontology/wsopItm'>;
    "wsopWinYear": NamedNode<'http://dbpedia.org/ontology/wsopWinYear'>;
    /** Наруквица коју осваја шампион WSOP-a. */
    "wsopWristband": NamedNode<'http://dbpedia.org/ontology/wsopWristband'>;
    "year": NamedNode<'http://dbpedia.org/ontology/year'>;
    "yearElevationIntoNobility": NamedNode<'http://dbpedia.org/ontology/yearElevationIntoNobility'>;
    /** The year in which construction of the Place was finished. */
    "yearOfConstruction": NamedNode<'http://dbpedia.org/ontology/yearOfConstruction'>;
    /** Year station was electrified, if not previously at date of opening. */
    "yearOfElectrification": NamedNode<'http://dbpedia.org/ontology/yearOfElectrification'>;
    "years": NamedNode<'http://dbpedia.org/ontology/years'>;
    "youthClub": NamedNode<'http://dbpedia.org/ontology/youthClub'>;
    "youthWing": NamedNode<'http://dbpedia.org/ontology/youthWing'>;
    "youthYears": NamedNode<'http://dbpedia.org/ontology/youthYears'>;
    /** Identifier for serial titles. More precise than issn */
    "zdb": NamedNode<'http://dbpedia.org/ontology/zdb'>;
    "zipCode": NamedNode<'http://dbpedia.org/ontology/zipCode'>;
    /** Zodiac Sign. Applies to persons, planets, etc */
    "zodiacSign": NamedNode<'http://dbpedia.org/ontology/zodiacSign'>;
    "Wikidata:Q11424": NamedNode<'http://dbpedia.org/ontology/Wikidata:Q11424'>;
    "wgs84_pos:SpatialThing": NamedNode<'http://dbpedia.org/ontology/wgs84_pos:SpatialThing'>;
    "Location": NamedNode<'http://dbpedia.org/ontology/Location'>;
    "%3Chttp://vocab.org/transit/terms/stop%3E": NamedNode<'http://dbpedia.org/ontology/%3Chttp://vocab.org/transit/terms/stop%3E'>;
    "Athlete,_CareerStation": NamedNode<'http://dbpedia.org/ontology/Athlete,_CareerStation'>;
    "RomaniaSettlement": NamedNode<'http://dbpedia.org/ontology/RomaniaSettlement'>;
    "Medalist": NamedNode<'http://dbpedia.org/ontology/Medalist'>;
    "MilitaryConflict_,_NaturalEvent": NamedNode<'http://dbpedia.org/ontology/MilitaryConflict_,_NaturalEvent'>;
    "NorwaySettlement": NamedNode<'http://dbpedia.org/ontology/NorwaySettlement'>;
    "Code": NamedNode<'http://dbpedia.org/ontology/Code'>;
    "HungarySettlement": NamedNode<'http://dbpedia.org/ontology/HungarySettlement'>;
    "LiechtensteinSettlement": NamedNode<'http://dbpedia.org/ontology/LiechtensteinSettlement'>;
    "Bishop": NamedNode<'http://dbpedia.org/ontology/Bishop'>;
    "Diocese,_Parish": NamedNode<'http://dbpedia.org/ontology/Diocese,_Parish'>;
    "Parish,_Deanery": NamedNode<'http://dbpedia.org/ontology/Parish,_Deanery'>;
    "Organisation,_PopulatedPlace": NamedNode<'http://dbpedia.org/ontology/Organisation,_PopulatedPlace'>;
    "Distance": NamedNode<'http://dbpedia.org/ontology/Distance'>;
    "ArchitecturalStructure,_Monument": NamedNode<'http://dbpedia.org/ontology/ArchitecturalStructure,_Monument'>;
    "Mountain,Volcano": NamedNode<'http://dbpedia.org/ontology/Mountain,Volcano'>;
    "LanguageCode": NamedNode<'http://dbpedia.org/ontology/LanguageCode'>;
    "BelgiumSettlement": NamedNode<'http://dbpedia.org/ontology/BelgiumSettlement'>;
    "GermanSettlement": NamedNode<'http://dbpedia.org/ontology/GermanSettlement'>;
    "SwitzerlandSettlement": NamedNode<'http://dbpedia.org/ontology/SwitzerlandSettlement'>;
    "Organisation,_Parish": NamedNode<'http://dbpedia.org/ontology/Organisation,_Parish'>;
    "LebanonSettlement": NamedNode<'http://dbpedia.org/ontology/LebanonSettlement'>;
    "ColourName": NamedNode<'http://dbpedia.org/ontology/ColourName'>;
    "Wins": NamedNode<'http://dbpedia.org/ontology/Wins'>;
    "Thing": NamedNode<'http://dbpedia.org/ontology/Thing'>;
    "releaseYear": NamedNode<'http://dbpedia.org/ontology/releaseYear'>;
    "Status": NamedNode<'http://dbpedia.org/ontology/Status'>;
    "MeanOfTransportation_,_Instrument": NamedNode<'http://dbpedia.org/ontology/MeanOfTransportation_,_Instrument'>;
    "Monastry": NamedNode<'http://dbpedia.org/ontology/Monastry'>;
    "Tribus": NamedNode<'http://dbpedia.org/ontology/Tribus'>;
    "MilitaryConflict,_AdministrativeRegion": NamedNode<'http://dbpedia.org/ontology/MilitaryConflict,_AdministrativeRegion'>;
}

const builder = namespace("http://dbpedia.org/ontology/") as any;
export const strict = builder as NamespaceBuilder<keyof Dbo> & Dbo;
export const loose = builder as NamespaceBuilder & Dbo;
