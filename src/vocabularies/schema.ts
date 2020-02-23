import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Schema = NamespaceBuilder & {
    /*A radio channel that uses AM.*/
    "AMRadioChannel": NamedNode;
    /*Reference documentation for application programming interfaces (APIs).*/
    "APIReference": NamedNode;
    /*Web page type: About page.*/
    "AboutPage": NamedNode;
    /*The act of committing to/adopting an object.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/RejectAction">RejectAction</a>: The antonym of AcceptAction.</li>
    </ul>
    */
    "AcceptAction": NamedNode;
    /*An accommodation is a place that can accommodate human beings, e.g. a hotel room, a camping pitch, or a meeting room. Many accommodations are for overnight stays, but this is not a mandatory requirement.
    For more specific types of accommodations not defined in schema.org, one can use additionalType with external vocabularies.
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Accommodation": NamedNode;
    /*Accountancy business.<br/><br/>
    
    As a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="http://schema.org/provider">provider</a> of one or more <a class="localLink" href="http://schema.org/Service">Service</a>(s).*/
    "AccountingService": NamedNode;
    /*The act of accomplishing something via previous efforts. It is an instantaneous action rather than an ongoing process.*/
    "AchieveAction": NamedNode;
    /*An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.<br/><br/>
    
    See also <a href="http://blog.schema.org/2014/04/announcing-schemaorg-actions.html">blog post</a> and <a href="http://schema.org/docs/actions.html">Actions overview document</a>.*/
    "Action": NamedNode;
    /*A set of requirements that a must be fulfilled in order to perform an Action.*/
    "ActionAccessSpecification": NamedNode;
    /*The status of an Action.*/
    "ActionStatusType": NamedNode;
    /*The act of starting or activating a device or application (e.g. starting a timer or turning on a flashlight).*/
    "ActivateAction": NamedNode;
    /*An in-progress action (e.g, while watching the movie, or driving to a location).*/
    "ActiveActionStatus": NamedNode;
    /*The act of editing by adding an object to a collection.*/
    "AddAction": NamedNode;
    /*A geographical region, typically under the jurisdiction of a particular government.*/
    "AdministrativeArea": NamedNode;
    /*An adult entertainment establishment.*/
    "AdultEntertainment": NamedNode;
    /*When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.<br/><br/>
    
    Note: AggregateOffers are normally expected to associate multiple offers that all share the same defined <a class="localLink" href="http://schema.org/businessFunction">businessFunction</a> value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.*/
    "AggregateOffer": NamedNode;
    /*The average rating based on multiple ratings or reviews.*/
    "AggregateRating": NamedNode;
    /*The act of expressing a consistency of opinion with the object. An agent agrees to/about an object (a proposition, topic or theme) with participants.*/
    "AgreeAction": NamedNode;
    /*An organization that provides flights for passengers.*/
    "Airline": NamedNode;
    /*An airport.*/
    "Airport": NamedNode;
    /*AlbumRelease.*/
    "AlbumRelease": NamedNode;
    /*An intangible item that describes an alignment between a learning resource and a node in an educational framework.*/
    "AlignmentObject": NamedNode;
    /*All-wheel Drive is a transmission layout where the engine drives all four wheels.*/
    "AllWheelDriveConfiguration": NamedNode;
    /*The act of organizing tasks/objects/events by associating resources to it.*/
    "AllocateAction": NamedNode;
    /*An amusement park.*/
    "AmusementPark": NamedNode;
    /*Animal shelter.*/
    "AnimalShelter": NamedNode;
    /*An answer offered to a question; perhaps correct, perhaps opinionated or wrong.*/
    "Answer": NamedNode;
    /*An apartment (in American English) or flat (in British English) is a self-contained housing unit (a type of residential real estate) that occupies only part of a building (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Apartment">http://en.wikipedia.org/wiki/Apartment</a>).*/
    "Apartment": NamedNode;
    /*Residence type: Apartment complex.*/
    "ApartmentComplex": NamedNode;
    /*The act of inserting at the end if an ordered collection.*/
    "AppendAction": NamedNode;
    /*The act of registering to an organization/service without the guarantee to receive it.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, ApplyAction has no guarantees that the application will be accepted.</li>
    </ul>
    */
    "ApplyAction": NamedNode;
    /*Aquarium.*/
    "Aquarium": NamedNode;
    /*The act of arriving at a place. An agent arrives at a destination from a fromLocation, optionally with participants.*/
    "ArriveAction": NamedNode;
    /*An art gallery.*/
    "ArtGallery": NamedNode;
    /*An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.<br/><br/>
    
    See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.*/
    "Article": NamedNode;
    /*The act of posing a question / favor to someone.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/ReplyAction">ReplyAction</a>: Appears generally as a response to AskAction.</li>
    </ul>
    */
    "AskAction": NamedNode;
    /*The act of forming one's opinion, reaction or sentiment.*/
    "AssessAction": NamedNode;
    /*The act of allocating an action/event/task to some destination (someone or something).*/
    "AssignAction": NamedNode;
    /*Professional service: Attorney. <br/><br/>
    
    This type is deprecated - <a class="localLink" href="http://schema.org/LegalService">LegalService</a> is more inclusive and less ambiguous.*/
    "Attorney": NamedNode;
    /*Intended audience for an item, i.e. the group for whom the item was created.*/
    "Audience": NamedNode;
    /*An audio file.*/
    "AudioObject": NamedNode;
    /*Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties.*/
    "AudiobookFormat": NamedNode;
    /*The act of granting permission to an object.*/
    "AuthorizeAction": NamedNode;
    /*Auto body shop.*/
    "AutoBodyShop": NamedNode;
    /*An car dealership.*/
    "AutoDealer": NamedNode;
    /*An auto parts store.*/
    "AutoPartsStore": NamedNode;
    /*A car rental business.*/
    "AutoRental": NamedNode;
    /*Car repair business.*/
    "AutoRepair": NamedNode;
    /*A car wash business.*/
    "AutoWash": NamedNode;
    /*ATM/cash machine.*/
    "AutomatedTeller": NamedNode;
    /*Car repair, sales, or parts.*/
    "AutomotiveBusiness": NamedNode;
    /*A bakery.*/
    "Bakery": NamedNode;
    /*A product or service offered by a bank whereby one may deposit, withdraw or transfer money and in some cases be paid interest.*/
    "BankAccount": NamedNode;
    /*Bank or credit union.*/
    "BankOrCreditUnion": NamedNode;
    /*A bar or pub.*/
    "BarOrPub": NamedNode;
    /*An image of a visual machine-readable code such as a barcode or QR code.*/
    "Barcode": NamedNode;
    /*Beach.*/
    "Beach": NamedNode;
    /*Beauty salon.*/
    "BeautySalon": NamedNode;
    /*Bed and breakfast.
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "BedAndBreakfast": NamedNode;
    /*An entity holding detailed information about the available bed types, e.g. the quantity of twin beds for a hotel room. For the single case of just one bed of a certain type, you can use bed directly with a text. See also <a class="localLink" href="http://schema.org/BedType">BedType</a> (under development).*/
    "BedDetails": NamedNode;
    /*A type of bed. This is used for indicating the bed or beds available in an accommodation.*/
    "BedType": NamedNode;
    /*The act of forming a personal connection with someone (object) mutually/bidirectionally/symmetrically.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, BefriendAction implies that the connection is reciprocal.</li>
    </ul>
    */
    "BefriendAction": NamedNode;
    /*A bike store.*/
    "BikeStore": NamedNode;
    /*A blog.*/
    "Blog": NamedNode;
    /*A blog post.*/
    "BlogPosting": NamedNode;
    /*A type of boarding policy used by an airline.*/
    "BoardingPolicyType": NamedNode;
    /*A body of water, such as a sea, ocean, or lake.*/
    "BodyOfWater": NamedNode;
    /*A book.*/
    "Book": NamedNode;
    /*The publication format of the book.*/
    "BookFormatType": NamedNode;
    /*A series of books. Included books can be indicated with the hasPart property.*/
    "BookSeries": NamedNode;
    /*A bookstore.*/
    "BookStore": NamedNode;
    /*An agent bookmarks/flags/labels/tags/marks an object.*/
    "BookmarkAction": NamedNode;
    /*Boolean: True or False.*/
    "Boolean": NamedNode;
    /*The act of obtaining an object under an agreement to return it at a later date. Reciprocal of LendAction.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/LendAction">LendAction</a>: Reciprocal of BorrowAction.</li>
    </ul>
    */
    "BorrowAction": NamedNode;
    /*A bowling alley.*/
    "BowlingAlley": NamedNode;
    /*A brand is a name used by an organization or business person for labeling a product, product group, or similar.*/
    "Brand": NamedNode;
    /*A BreadcrumbList is an ItemList consisting of a chain of linked Web pages, typically described using at least their URL and their name, and typically ending with the current page.<br/><br/>
    
    The <a class="localLink" href="http://schema.org/position">position</a> property is used to reconstruct the order of the items in a BreadcrumbList The convention is that a breadcrumb list has an <a class="localLink" href="http://schema.org/itemListOrder">itemListOrder</a> of <a class="localLink" href="http://schema.org/ItemListOrderAscending">ItemListOrderAscending</a> (lower values listed first), and that the first items in this list correspond to the "top" or beginning of the breadcrumb trail, e.g. with a site or section homepage. The specific values of 'position' are not assigned meaning for a BreadcrumbList, but they should be integers, e.g. beginning with '1' for the first item in the list.*/
    "BreadcrumbList": NamedNode;
    /*Brewery.*/
    "Brewery": NamedNode;
    /*A bridge.*/
    "Bridge": NamedNode;
    /*A unique instance of a BroadcastService on a CableOrSatelliteService lineup.*/
    "BroadcastChannel": NamedNode;
    /*An over the air or online broadcast event.*/
    "BroadcastEvent": NamedNode;
    /*The frequency in MHz and the modulation used for a particular BroadcastService.*/
    "BroadcastFrequencySpecification": NamedNode;
    /*BroadcastRelease.*/
    "BroadcastRelease": NamedNode;
    /*A delivery service through which content is provided via broadcast over the air or online.*/
    "BroadcastService": NamedNode;
    /*A Buddhist temple.*/
    "BuddhistTemple": NamedNode;
    /*A reservation for bus travel. <br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.*/
    "BusReservation": NamedNode;
    /*A bus station.*/
    "BusStation": NamedNode;
    /*A bus stop.*/
    "BusStop": NamedNode;
    /*A trip on a commercial bus line.*/
    "BusTrip": NamedNode;
    /*A set of characteristics belonging to businesses, e.g. who compose an item's target audience.*/
    "BusinessAudience": NamedNode;
    /*A business entity type is a conceptual entity representing the legal form, the size, the main line of business, the position in the value chain, or any combination thereof, of an organization or business person.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#Business</li>
    <li>http://purl.org/goodrelations/v1#Enduser</li>
    <li>http://purl.org/goodrelations/v1#PublicInstitution</li>
    <li>http://purl.org/goodrelations/v1#Reseller</li>
    </ul>
    */
    "BusinessEntityType": NamedNode;
    /*Event type: Business event.*/
    "BusinessEvent": NamedNode;
    /*The business function specifies the type of activity or access (i.e., the bundle of rights) offered by the organization or business person through the offer. Typical are sell, rental or lease, maintenance or repair, manufacture / produce, recycle / dispose, engineering / construction, or installation. Proprietary specifications of access rights are also instances of this class.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#ConstructionInstallation</li>
    <li>http://purl.org/goodrelations/v1#Dispose</li>
    <li>http://purl.org/goodrelations/v1#LeaseOut</li>
    <li>http://purl.org/goodrelations/v1#Maintain</li>
    <li>http://purl.org/goodrelations/v1#ProvideService</li>
    <li>http://purl.org/goodrelations/v1#Repair</li>
    <li>http://purl.org/goodrelations/v1#Sell</li>
    <li>http://purl.org/goodrelations/v1#Buy</li>
    </ul>
    */
    "BusinessFunction": NamedNode;
    /*The act of giving money to a seller in exchange for goods or services rendered. An agent buys an object, product, or service from a seller for a price. Reciprocal of SellAction.*/
    "BuyAction": NamedNode;
    /*CDFormat.*/
    "CDFormat": NamedNode;
    /*A service which provides access to media programming like TV or radio. Access may be via cable or satellite.*/
    "CableOrSatelliteService": NamedNode;
    /*A cafe or coffee shop.*/
    "CafeOrCoffeeShop": NamedNode;
    /*A camping site, campsite, or <a class="localLink" href="http://schema.org/Campground">Campground</a> is a place used for overnight stay in the outdoors, typically containing individual <a class="localLink" href="http://schema.org/CampingPitch">CampingPitch</a> locations. <br/><br/>
    
    In British English a campsite is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites (Source: Wikipedia see <a href="https://en.wikipedia.org/wiki/Campsite">https://en.wikipedia.org/wiki/Campsite</a>).<br/><br/>
    
    See also the dedicated <a href="/docs/hotels.html">document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Campground": NamedNode;
    /*A <a class="localLink" href="http://schema.org/CampingPitch">CampingPitch</a> is an individual place for overnight stay in the outdoors, typically being part of a larger camping site, or <a class="localLink" href="http://schema.org/Campground">Campground</a>.<br/><br/>
    
    In British English a campsite, or campground, is an area, usually divided into a number of pitches, where people can camp overnight using tents or camper vans or caravans; this British English use of the word is synonymous with the American English expression campground. In American English the term campsite generally means an area where an individual, family, group, or military unit can pitch a tent or park a camper; a campground may contain many campsites.
    (Source: Wikipedia see <a href="https://en.wikipedia.org/wiki/Campsite">https://en.wikipedia.org/wiki/Campsite</a>).<br/><br/>
    
    See also the dedicated <a href="/docs/hotels.html">document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "CampingPitch": NamedNode;
    /*A canal, like the Panama Canal.*/
    "Canal": NamedNode;
    /*The act of asserting that a future event/action is no longer going to happen.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/ConfirmAction">ConfirmAction</a>: The antonym of CancelAction.</li>
    </ul>
    */
    "CancelAction": NamedNode;
    /*A car is a wheeled, self-powered motor vehicle used for transportation.*/
    "Car": NamedNode;
    /*A casino.*/
    "Casino": NamedNode;
    /*CassetteFormat.*/
    "CassetteFormat": NamedNode;
    /*A Catholic church.*/
    "CatholicChurch": NamedNode;
    /*A graveyard.*/
    "Cemetery": NamedNode;
    /*An agent inspects, determines, investigates, inquires, or examines an object's accuracy, quality, condition, or state.*/
    "CheckAction": NamedNode;
    /*The act of an agent communicating (service provider, social media, etc) their arrival by registering/confirming for a previously reserved service (e.g. flight check in) or at a place (e.g. hotel), possibly resulting in a result (boarding pass, etc).<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/CheckOutAction">CheckOutAction</a>: The antonym of CheckInAction.</li>
    <li><a class="localLink" href="http://schema.org/ArriveAction">ArriveAction</a>: Unlike ArriveAction, CheckInAction implies that the agent is informing/confirming the start of a previously reserved service.</li>
    <li><a class="localLink" href="http://schema.org/ConfirmAction">ConfirmAction</a>: Unlike ConfirmAction, CheckInAction implies that the agent is informing/confirming the <em>start</em> of a previously reserved service rather than its validity/existence.</li>
    </ul>
    */
    "CheckInAction": NamedNode;
    /*The act of an agent communicating (service provider, social media, etc) their departure of a previously reserved service (e.g. flight check in) or place (e.g. hotel).<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/CheckInAction">CheckInAction</a>: The antonym of CheckOutAction.</li>
    <li><a class="localLink" href="http://schema.org/DepartAction">DepartAction</a>: Unlike DepartAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>
    <li><a class="localLink" href="http://schema.org/CancelAction">CancelAction</a>: Unlike CancelAction, CheckOutAction implies that the agent is informing/confirming the end of a previously reserved service.</li>
    </ul>
    */
    "CheckOutAction": NamedNode;
    /*Web page type: Checkout page.*/
    "CheckoutPage": NamedNode;
    /*A Childcare center.*/
    "ChildCare": NamedNode;
    /*Event type: Children's event.*/
    "ChildrensEvent": NamedNode;
    /*The act of expressing a preference from a set of options or a large or unbounded set of choices/options.*/
    "ChooseAction": NamedNode;
    /*A church.*/
    "Church": NamedNode;
    /*A city or town.*/
    "City": NamedNode;
    /*A city hall.*/
    "CityHall": NamedNode;
    /*A public structure, such as a town hall or concert hall.*/
    "CivicStructure": NamedNode;
    /*A fact-checking review of claims made (or reported) in some creative work (referenced via itemReviewed).*/
    "ClaimReview": NamedNode;
    /*A short TV or radio program or a segment/part of a program.*/
    "Clip": NamedNode;
    /*A clothing store.*/
    "ClothingStore": NamedNode;
    /*Play mode: CoOp. Co-operative games, where you play on the same team with friends.*/
    "CoOp": NamedNode;
    /*Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.*/
    "Code": NamedNode;
    /*Web page type: Collection page.*/
    "CollectionPage": NamedNode;
    /*A college, university, or other third-level educational institution.*/
    "CollegeOrUniversity": NamedNode;
    /*A comedy club.*/
    "ComedyClub": NamedNode;
    /*Event type: Comedy event.*/
    "ComedyEvent": NamedNode;
    /*A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the <a class="localLink" href="http://schema.org/text">text</a> property, and its topic via <a class="localLink" href="http://schema.org/about">about</a>, properties shared with all CreativeWorks.*/
    "Comment": NamedNode;
    /*The act of generating a comment about a subject.*/
    "CommentAction": NamedNode;
    /*Permission to add comments to the document.*/
    "CommentPermission": NamedNode;
    /*The act of conveying information to another person via a communication medium (instrument) such as speech, email, or telephone conversation.*/
    "CommunicateAction": NamedNode;
    /*CompilationAlbum.*/
    "CompilationAlbum": NamedNode;
    /*An action that has already taken place.*/
    "CompletedActionStatus": NamedNode;
    /*A compound price specification is one that bundles multiple prices that all apply in combination for different dimensions of consumption. Use the name property of the attached unit price specification for indicating the dimension of a price component (e.g. "electricity" or "final cleaning").*/
    "CompoundPriceSpecification": NamedNode;
    /*This type covers computer programming languages such as Scheme and Lisp, as well as other language-like computer representations. Natural languages are best represented with the <a class="localLink" href="http://schema.org/Language">Language</a> type.*/
    "ComputerLanguage": NamedNode;
    /*A computer store.*/
    "ComputerStore": NamedNode;
    /*The act of notifying someone that a future event/action is going to happen as expected.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/CancelAction">CancelAction</a>: The antonym of ConfirmAction.</li>
    </ul>
    */
    "ConfirmAction": NamedNode;
    /*The act of ingesting information/resources/food.*/
    "ConsumeAction": NamedNode;
    /*Web page type: Contact page.*/
    "ContactPage": NamedNode;
    /*A contact point&#x2014;for example, a Customer Complaints department.*/
    "ContactPoint": NamedNode;
    /*Enumerated options related to a ContactPoint.*/
    "ContactPointOption": NamedNode;
    /*One of the continents (for example, Europe or Africa).*/
    "Continent": NamedNode;
    /*An agent controls a device or application.*/
    "ControlAction": NamedNode;
    /*A convenience store.*/
    "ConvenienceStore": NamedNode;
    /*One or more messages between organizations or people on a particular topic. Individual messages can be linked to the conversation with isPartOf or hasPart properties.*/
    "Conversation": NamedNode;
    /*The act of producing/preparing food.*/
    "CookAction": NamedNode;
    /*Organization: A business corporation.*/
    "Corporation": NamedNode;
    /*A country.*/
    "Country": NamedNode;
    /*A description of an educational course which may be offered as distinct instances at which take place at different times or take place at different locations, or be offered through different media or modes of study. An educational course is a sequence of one or more educational events and/or creative works which aims to build knowledge, competence or ability of learners.*/
    "Course": NamedNode;
    /*An instance of a <a class="localLink" href="http://schema.org/Course">Course</a> which is distinct from other instances because it is offered at a different time or location or through different media or modes of study or to a specific section of students.*/
    "CourseInstance": NamedNode;
    /*A courthouse.*/
    "Courthouse": NamedNode;
    /*The act of deliberately creating/producing/generating/building a result out of the agent.*/
    "CreateAction": NamedNode;
    /*The most generic kind of creative work, including books, movies, photographs, software programs, etc.*/
    "CreativeWork": NamedNode;
    /*A media season e.g. tv, radio, video game etc.*/
    "CreativeWorkSeason": NamedNode;
    /*A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike <a class="localLink" href="http://schema.org/ItemList">ItemList</a> which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).<br/><br/>
    
    Specific subtypes are available for describing <a class="localLink" href="http://schema.org/TVSeries">TVSeries</a>, <a class="localLink" href="http://schema.org/RadioSeries">RadioSeries</a>, <a class="localLink" href="http://schema.org/MovieSeries">MovieSeries</a>, <a class="localLink" href="http://schema.org/BookSeries">BookSeries</a>, <a class="localLink" href="http://schema.org/Periodical">Periodical</a> and <a class="localLink" href="http://schema.org/VideoGameSeries">VideoGameSeries</a>. In each case, the <a class="localLink" href="http://schema.org/hasPart">hasPart</a> / <a class="localLink" href="http://schema.org/isPartOf">isPartOf</a> properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.<br/><br/>
    
    It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.*/
    "CreativeWorkSeries": NamedNode;
    /*A card payment method of a particular brand or name.  Used to mark up a particular payment method and/or the financial product/service that supplies the card account.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#AmericanExpress</li>
    <li>http://purl.org/goodrelations/v1#DinersClub</li>
    <li>http://purl.org/goodrelations/v1#Discover</li>
    <li>http://purl.org/goodrelations/v1#JCB</li>
    <li>http://purl.org/goodrelations/v1#MasterCard</li>
    <li>http://purl.org/goodrelations/v1#VISA</li>
    </ul>
    */
    "CreditCard": NamedNode;
    /*A crematorium.*/
    "Crematorium": NamedNode;
    /*A service to convert funds from one currency to another currency.*/
    "CurrencyConversionService": NamedNode;
    /*DJMixAlbum.*/
    "DJMixAlbum": NamedNode;
    /*DVDFormat.*/
    "DVDFormat": NamedNode;
    /*Indicates that the item is damaged.*/
    "DamagedCondition": NamedNode;
    /*Event type: A social dance.*/
    "DanceEvent": NamedNode;
    /*A dance group&#x2014;for example, the Alvin Ailey Dance Theater or Riverdance.*/
    "DanceGroup": NamedNode;
    /*A collection of datasets.*/
    "DataCatalog": NamedNode;
    /*A dataset in downloadable form.*/
    "DataDownload": NamedNode;
    /*A single feed providing structured information about one or more entities or topics.*/
    "DataFeed": NamedNode;
    /*A single item within a larger data feed.*/
    "DataFeedItem": NamedNode;
    /*The basic data types such as Integers, Strings, etc.*/
    "DataType": NamedNode;
    /*A body of structured information describing some topic(s) of interest.*/
    "Dataset": NamedNode;
    /*A date value in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>.*/
    "Date": NamedNode;
    /*A combination of date and time of day in the form [-]CCYY-MM-DDThh:mm:ss[Z|(+|-)hh:mm] (see Chapter 5.4 of ISO 8601).*/
    "DateTime": NamedNode;
    /*A DatedMoneySpecification represents monetary values with optional start and end dates. For example, this could represent an employee's salary over a specific period of time. <strong>Note:</strong> This type has been superseded by <a class="localLink" href="http://schema.org/MonetaryAmount">MonetaryAmount</a> use of that type is recommended*/
    "DatedMoneySpecification": NamedNode;
    /*The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.<br/><br/>
    
    Originally, URLs from <a href="http://purl.org/goodrelations/v1">GoodRelations</a> were used (for <a class="localLink" href="http://schema.org/Monday">Monday</a>, <a class="localLink" href="http://schema.org/Tuesday">Tuesday</a>, <a class="localLink" href="http://schema.org/Wednesday">Wednesday</a>, <a class="localLink" href="http://schema.org/Thursday">Thursday</a>, <a class="localLink" href="http://schema.org/Friday">Friday</a>, <a class="localLink" href="http://schema.org/Saturday">Saturday</a>, <a class="localLink" href="http://schema.org/Sunday">Sunday</a> plus a special entry for <a class="localLink" href="http://schema.org/PublicHolidays">PublicHolidays</a>); these have now been integrated directly into schema.org.*/
    "DayOfWeek": NamedNode;
    /*A day spa.*/
    "DaySpa": NamedNode;
    /*The act of stopping or deactivating a device or application (e.g. stopping a timer or turning off a flashlight).*/
    "DeactivateAction": NamedNode;
    /*A defence establishment, such as an army or navy base.*/
    "DefenceEstablishment": NamedNode;
    /*The act of editing a recipient by removing one of its objects.*/
    "DeleteAction": NamedNode;
    /*The price for the delivery of an offer using a particular delivery method.*/
    "DeliveryChargeSpecification": NamedNode;
    /*An event involving the delivery of an item.*/
    "DeliveryEvent": NamedNode;
    /*A delivery method is a standardized procedure for transferring the product or service to the destination of fulfillment chosen by the customer. Delivery methods are characterized by the means of transportation used, and by the organization or group that is the contracting party for the sending organization or person.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#DeliveryModeDirectDownload</li>
    <li>http://purl.org/goodrelations/v1#DeliveryModeFreight</li>
    <li>http://purl.org/goodrelations/v1#DeliveryModeMail</li>
    <li>http://purl.org/goodrelations/v1#DeliveryModeOwnFleet</li>
    <li>http://purl.org/goodrelations/v1#DeliveryModePickUp</li>
    <li>http://purl.org/goodrelations/v1#DHL</li>
    <li>http://purl.org/goodrelations/v1#FederalExpress</li>
    <li>http://purl.org/goodrelations/v1#UPS</li>
    </ul>
    */
    "DeliveryMethod": NamedNode;
    /*A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.*/
    "Demand": NamedNode;
    /*DemoAlbum.*/
    "DemoAlbum": NamedNode;
    /*A dentist.*/
    "Dentist": NamedNode;
    /*The act of  departing from a place. An agent departs from an fromLocation for a destination, optionally with participants.*/
    "DepartAction": NamedNode;
    /*A department store.*/
    "DepartmentStore": NamedNode;
    /*A type of Bank Account with a main purpose of depositing funds to gain interest or other benefits.*/
    "DepositAccount": NamedNode;
    /*A diet appropriate for people with diabetes.*/
    "DiabeticDiet": NamedNode;
    /*DigitalAudioTapeFormat.*/
    "DigitalAudioTapeFormat": NamedNode;
    /*An electronic file or document.*/
    "DigitalDocument": NamedNode;
    /*A permission for a particular person or group to access a particular file.*/
    "DigitalDocumentPermission": NamedNode;
    /*A type of permission which can be granted for accessing a digital document.*/
    "DigitalDocumentPermissionType": NamedNode;
    /*DigitalFormat.*/
    "DigitalFormat": NamedNode;
    /*The act of expressing a difference of opinion with the object. An agent disagrees to/about an object (a proposition, topic or theme) with participants.*/
    "DisagreeAction": NamedNode;
    /*Indicates that the item has been discontinued.*/
    "Discontinued": NamedNode;
    /*The act of discovering/finding an object.*/
    "DiscoverAction": NamedNode;
    /*A posting to a discussion forum.*/
    "DiscussionForumPosting": NamedNode;
    /*The act of expressing a negative sentiment about the object. An agent dislikes an object (a proposition, topic or theme) with participants.*/
    "DislikeAction": NamedNode;
    /*Properties that take Distances as values are of the form '&lt;Number&gt; &lt;Length unit of measure&gt;'. E.g., '7 ft'.*/
    "Distance": NamedNode;
    /*A distillery.*/
    "Distillery": NamedNode;
    /*The act of providing goods, services, or money without compensation, often for philanthropic reasons.*/
    "DonateAction": NamedNode;
    /*The act of downloading an object.*/
    "DownloadAction": NamedNode;
    /*The act of producing a visual/graphical representation of an object, typically with a pen/pencil and paper as instruments.*/
    "DrawAction": NamedNode;
    /*The act of swallowing liquids.*/
    "DrinkAction": NamedNode;
    /*A value indicating which roadwheels will receive torque.*/
    "DriveWheelConfigurationValue": NamedNode;
    /*A dry-cleaning business.*/
    "DryCleaningOrLaundry": NamedNode;
    /*Quantity: Duration (use <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>).*/
    "Duration": NamedNode;
    /*Book format: Ebook.*/
    "EBook": NamedNode;
    /*EPRelease.*/
    "EPRelease": NamedNode;
    /*The act of swallowing solid objects.*/
    "EatAction": NamedNode;
    /*Event type: Education event.*/
    "EducationEvent": NamedNode;
    /*An EducationalAudience.*/
    "EducationalAudience": NamedNode;
    /*An educational organization.*/
    "EducationalOrganization": NamedNode;
    /*An electrician.*/
    "Electrician": NamedNode;
    /*An electronics store.*/
    "ElectronicsStore": NamedNode;
    /*An elementary school.*/
    "ElementarySchool": NamedNode;
    /*An email message.*/
    "EmailMessage": NamedNode;
    /*An embassy.*/
    "Embassy": NamedNode;
    /*An emergency service, such as a fire station or ER.*/
    "EmergencyService": NamedNode;
    /*A subclass of OrganizationRole used to describe employee relationships.*/
    "EmployeeRole": NamedNode;
    /*An aggregate rating of an Organization related to its role as an employer.*/
    "EmployerAggregateRating": NamedNode;
    /*An employment agency.*/
    "EmploymentAgency": NamedNode;
    /*An agent approves/certifies/likes/supports/sanction an object.*/
    "EndorseAction": NamedNode;
    /*An EndorsementRating is a rating that expresses some level of endorsement, for example inclusion in a "critic's pick" blog, a
    "Like" or "+1" on a social network. It can be considered the <a class="localLink" href="http://schema.org/result">result</a> of an <a class="localLink" href="http://schema.org/EndorseAction">EndorseAction</a> in which the <a class="localLink" href="http://schema.org/object">object</a> of the action is rated positively by
    some <a class="localLink" href="http://schema.org/agent">agent</a>. As is common elsewhere in schema.org, it is sometimes more useful to describe the results of such an action without explicitly describing the <a class="localLink" href="http://schema.org/Action">Action</a>.<br/><br/>
    
    An <a class="localLink" href="http://schema.org/EndorsementRating">EndorsementRating</a> may be part of a numeric scale or organized system, but this is not required: having an explicit type for indicating a positive,
    endorsement rating is particularly useful in the absence of numeric scales as it helps consumers understand that the rating is broadly positive.*/
    "EndorsementRating": NamedNode;
    /*Properties that take Energy as values are of the form '&lt;Number&gt; &lt;Energy unit of measure&gt;'.*/
    "Energy": NamedNode;
    /*Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.*/
    "EngineSpecification": NamedNode;
    /*A business providing entertainment.*/
    "EntertainmentBusiness": NamedNode;
    /*An entry point, within some Web-based protocol.*/
    "EntryPoint": NamedNode;
    /*Lists or enumerations—for example, a list of cuisines or music genres, etc.*/
    "Enumeration": NamedNode;
    /*A media episode (e.g. TV, radio, video game) which can be part of a series or season.*/
    "Episode": NamedNode;
    /*An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the <a class="localLink" href="http://schema.org/offers">offers</a> property. Repeated events may be structured as separate Event objects.*/
    "Event": NamedNode;
    /*The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s).*/
    "EventCancelled": NamedNode;
    /*The event has been postponed and no new date has been set. The event's previousStartDate should be set.*/
    "EventPostponed": NamedNode;
    /*The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated).*/
    "EventRescheduled": NamedNode;
    /*A reservation for an event like a concert, sporting event, or lecture.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.*/
    "EventReservation": NamedNode;
    /*The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default.*/
    "EventScheduled": NamedNode;
    /*EventStatusType is an enumeration type whose instances represent several states that an Event may be in.*/
    "EventStatusType": NamedNode;
    /*An event venue.*/
    "EventVenue": NamedNode;
    /*The act of participating in exertive activity for the purposes of improving health and fitness.*/
    "ExerciseAction": NamedNode;
    /*A gym.*/
    "ExerciseGym": NamedNode;
    /*Event type: Exhibition event, e.g. at a museum, library, archive, tradeshow, ...*/
    "ExhibitionEvent": NamedNode;
    /*A <a class="localLink" href="http://schema.org/FAQPage">FAQPage</a> is a <a class="localLink" href="http://schema.org/WebPage">WebPage</a> presenting one or more "<a href="https://en.wikipedia.org/wiki/FAQ">Frequently asked questions</a>" (see also <a class="localLink" href="http://schema.org/QAPage">QAPage</a>).*/
    "FAQPage": NamedNode;
    /*A radio channel that uses FM.*/
    "FMRadioChannel": NamedNode;
    /*An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure.*/
    "FailedActionStatus": NamedNode;
    /*The boolean value false.*/
    "False": NamedNode;
    /*A fast-food restaurant.*/
    "FastFoodRestaurant": NamedNode;
    /*The female gender.*/
    "Female": NamedNode;
    /*Event type: Festival.*/
    "Festival": NamedNode;
    /*The act of capturing sound and moving images on film, video, or digitally.*/
    "FilmAction": NamedNode;
    /*A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.*/
    "FinancialProduct": NamedNode;
    /*Financial services business.*/
    "FinancialService": NamedNode;
    /*The act of finding an object.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/SearchAction">SearchAction</a>: FindAction is generally lead by a SearchAction, but not necessarily.</li>
    </ul>
    */
    "FindAction": NamedNode;
    /*A fire station. With firemen.*/
    "FireStation": NamedNode;
    /*An airline flight.*/
    "Flight": NamedNode;
    /*A reservation for air travel.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.*/
    "FlightReservation": NamedNode;
    /*Data type: Floating number.*/
    "Float": NamedNode;
    /*A florist.*/
    "Florist": NamedNode;
    /*The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates polled from.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/BefriendAction">BefriendAction</a>: Unlike BefriendAction, FollowAction implies that the connection is <em>not</em> necessarily reciprocal.</li>
    <li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, FollowAction implies that the follower acts as an active agent constantly/actively polling for updates.</li>
    <li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, FollowAction implies that the agent is interested in continuing receiving updates from the object.</li>
    <li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: Unlike JoinAction, FollowAction implies that the agent is interested in getting updates from the object.</li>
    <li><a class="localLink" href="http://schema.org/TrackAction">TrackAction</a>: Unlike TrackAction, FollowAction refers to the polling of updates of all aspects of animate objects rather than the location of inanimate objects (e.g. you track a package, but you don't follow it).</li>
    </ul>
    */
    "FollowAction": NamedNode;
    /*A food-related business.*/
    "FoodEstablishment": NamedNode;
    /*A reservation to dine at a food-related business.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.*/
    "FoodEstablishmentReservation": NamedNode;
    /*Event type: Food event.*/
    "FoodEvent": NamedNode;
    /*A food service, like breakfast, lunch, or dinner.*/
    "FoodService": NamedNode;
    /*Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability.*/
    "FourWheelDriveConfiguration": NamedNode;
    /*The day of the week between Thursday and Saturday.*/
    "Friday": NamedNode;
    /*Front-wheel drive is a transmission layout where the engine drives the front wheels.*/
    "FrontWheelDriveConfiguration": NamedNode;
    /*A furniture store.*/
    "FurnitureStore": NamedNode;
    /*The Game type represents things which are games. These are typically rule-governed recreational activities, e.g. role-playing games in which players assume the role of characters in a fictional setting.*/
    "Game": NamedNode;
    /*Indicates whether this game is multi-player, co-op or single-player.*/
    "GamePlayMode": NamedNode;
    /*Server that provides game interaction in a multiplayer game.*/
    "GameServer": NamedNode;
    /*Status of a game server.*/
    "GameServerStatus": NamedNode;
    /*A garden store.*/
    "GardenStore": NamedNode;
    /*A gas station.*/
    "GasStation": NamedNode;
    /*Residence type: Gated community.*/
    "GatedResidenceCommunity": NamedNode;
    /*An enumeration of genders.*/
    "GenderType": NamedNode;
    /*A general contractor.*/
    "GeneralContractor": NamedNode;
    /*A GeoCircle is a GeoShape representing a circular geographic area. As it is a GeoShape
              it provides the simple textual property 'circle', but also allows the combination of postalCode alongside geoRadius.
              The center of the circle can be indicated via the 'geoMidpoint' property, or more approximately using 'address', 'postalCode'.*/
    "GeoCircle": NamedNode;
    /*The geographic coordinates of a place or event.*/
    "GeoCoordinates": NamedNode;
    /*The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs. Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.*/
    "GeoShape": NamedNode;
    /*The act of transferring ownership of an object to a destination. Reciprocal of TakeAction.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/TakeAction">TakeAction</a>: Reciprocal of GiveAction.</li>
    <li><a class="localLink" href="http://schema.org/SendAction">SendAction</a>: Unlike SendAction, GiveAction implies that ownership is being transferred (e.g. I may send my laptop to you, but that doesn't mean I'm giving it to you).</li>
    </ul>
    */
    "GiveAction": NamedNode;
    /*A diet exclusive of gluten.*/
    "GlutenFreeDiet": NamedNode;
    /*A golf course.*/
    "GolfCourse": NamedNode;
    /*A government building.*/
    "GovernmentBuilding": NamedNode;
    /*A government office&#x2014;for example, an IRS or DMV office.*/
    "GovernmentOffice": NamedNode;
    /*A governmental organization or agency.*/
    "GovernmentOrganization": NamedNode;
    /*A permit issued by a government agency.*/
    "GovernmentPermit": NamedNode;
    /*A service provided by a government organization, e.g. food stamps, veterans benefits, etc.*/
    "GovernmentService": NamedNode;
    /*A grocery store.*/
    "GroceryStore": NamedNode;
    /*The airline boards by groups based on check-in time, priority, etc.*/
    "GroupBoardingPolicy": NamedNode;
    /*A business that provide Heating, Ventilation and Air Conditioning services.*/
    "HVACBusiness": NamedNode;
    /*A hair salon.*/
    "HairSalon": NamedNode;
    /*A diet conforming to Islamic dietary practices.*/
    "HalalDiet": NamedNode;
    /*Book format: Hardcover.*/
    "Hardcover": NamedNode;
    /*A hardware store.*/
    "HardwareStore": NamedNode;
    /*Health and beauty.*/
    "HealthAndBeautyBusiness": NamedNode;
    /*A health club.*/
    "HealthClub": NamedNode;
    /*Uses devices to support users with hearing impairments.*/
    "HearingImpairedSupported": NamedNode;
    /*A high school.*/
    "HighSchool": NamedNode;
    /*A diet conforming to Hindu dietary practices, in particular, beef-free.*/
    "HinduDiet": NamedNode;
    /*A Hindu temple.*/
    "HinduTemple": NamedNode;
    /*A store that sells materials useful or necessary for various hobbies.*/
    "HobbyShop": NamedNode;
    /*A construction business.<br/><br/>
    
    A HomeAndConstructionBusiness is a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> that provides services around homes and buildings.<br/><br/>
    
    As a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="http://schema.org/provider">provider</a> of one or more <a class="localLink" href="http://schema.org/Service">Service</a>(s).*/
    "HomeAndConstructionBusiness": NamedNode;
    /*A home goods store.*/
    "HomeGoodsStore": NamedNode;
    /*A hospital.*/
    "Hospital": NamedNode;
    /*A hostel - cheap accommodation, often in shared dormitories.
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Hostel": NamedNode;
    /*A hotel is an establishment that provides lodging paid on a short-term basis (Source: Wikipedia, the free encyclopedia, see http://en.wikipedia.org/wiki/Hotel).
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Hotel": NamedNode;
    /*A hotel room is a single room in a hotel.
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "HotelRoom": NamedNode;
    /*A house is a building or structure that has the ability to be occupied for habitation by humans or other creatures (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/House">http://en.wikipedia.org/wiki/House</a>).*/
    "House": NamedNode;
    /*A house painting service.*/
    "HousePainter": NamedNode;
    /*Instructions that explain how to achieve a result by performing a sequence of steps.*/
    "HowTo": NamedNode;
    /*A direction indicating a single action to do in the instructions for how to achieve a result.*/
    "HowToDirection": NamedNode;
    /*An item used as either a tool or supply when performing the instructions for how to to achieve a result.*/
    "HowToItem": NamedNode;
    /*A sub-grouping of steps in the instructions for how to achieve a result (e.g. steps for making a pie crust within a pie recipe).*/
    "HowToSection": NamedNode;
    /*A step in the instructions for how to achieve a result. It is an ordered list with HowToDirection and/or HowToTip items.*/
    "HowToStep": NamedNode;
    /*A supply consumed when performing the instructions for how to achieve a result.*/
    "HowToSupply": NamedNode;
    /*An explanation in the instructions for how to achieve a result. It provides supplementary information about a technique, supply, author's preference, etc. It can explain what could be done, or what should not be done, but doesn't specify what should be done (see HowToDirection).*/
    "HowToTip": NamedNode;
    /*A tool used (but not consumed) when performing instructions for how to achieve a result.*/
    "HowToTool": NamedNode;
    /*An ice cream shop.*/
    "IceCreamShop": NamedNode;
    /*The act of intentionally disregarding the object. An agent ignores an object.*/
    "IgnoreAction": NamedNode;
    /*Web page type: Image gallery page.*/
    "ImageGallery": NamedNode;
    /*An image file.*/
    "ImageObject": NamedNode;
    /*Indicates that the item is in stock.*/
    "InStock": NamedNode;
    /*Indicates that the item is available only at physical locations.*/
    "InStoreOnly": NamedNode;
    /*A single, identifiable product instance (e.g. a laptop with a particular serial number).*/
    "IndividualProduct": NamedNode;
    /*The act of notifying someone of information pertinent to them, with no expectation of a response.*/
    "InformAction": NamedNode;
    /*The act of adding at a specific location in an ordered collection.*/
    "InsertAction": NamedNode;
    /*The act of installing an application.*/
    "InstallAction": NamedNode;
    /*An Insurance agency.*/
    "InsuranceAgency": NamedNode;
    /*A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.*/
    "Intangible": NamedNode;
    /*Data type: Integer.*/
    "Integer": NamedNode;
    /*The act of interacting with another person or organization.*/
    "InteractAction": NamedNode;
    /*A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.*/
    "InteractionCounter": NamedNode;
    /*An internet cafe.*/
    "InternetCafe": NamedNode;
    /*A type of financial product that typically requires the client to transfer funds to a financial service in return for potential beneficial financial return.*/
    "InvestmentOrDeposit": NamedNode;
    /*The act of asking someone to attend an event. Reciprocal of RsvpAction.*/
    "InviteAction": NamedNode;
    /*A statement of the money due for goods or services; a bill.*/
    "Invoice": NamedNode;
    /*A list of possible product availability options.*/
    "ItemAvailability": NamedNode;
    /*A list of items of any sort&#x2014;for example, Top 10 Movies About Weathermen, or Top 100 Party Songs. Not to be confused with HTML lists, which are often used only for formatting.*/
    "ItemList": NamedNode;
    /*An ItemList ordered with lower values listed first.*/
    "ItemListOrderAscending": NamedNode;
    /*An ItemList ordered with higher values listed first.*/
    "ItemListOrderDescending": NamedNode;
    /*Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.*/
    "ItemListOrderType": NamedNode;
    /*An ItemList ordered with no explicit order.*/
    "ItemListUnordered": NamedNode;
    /*A page devoted to a single item, such as a particular product or hotel.*/
    "ItemPage": NamedNode;
    /*A jewelry store.*/
    "JewelryStore": NamedNode;
    /*A listing that describes a job opening in a certain organization.*/
    "JobPosting": NamedNode;
    /*An agent joins an event/group with participants/friends at a location.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, JoinAction refers to joining a group/team of people.</li>
    <li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, JoinAction does not imply that you'll be receiving updates.</li>
    <li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, JoinAction does not imply that you'll be polling for updates.</li>
    </ul>
    */
    "JoinAction": NamedNode;
    /*A diet conforming to Jewish dietary practices.*/
    "KosherDiet": NamedNode;
    /*A lake (for example, Lake Pontrachain).*/
    "LakeBodyOfWater": NamedNode;
    /*A landform or physical feature.  Landform elements include mountains, plains, lakes, rivers, seascape and oceanic waterbody interface features such as bays, peninsulas, seas and so forth, including sub-aqueous terrain features such as submersed mountain ranges, volcanoes, and the great ocean basins.*/
    "Landform": NamedNode;
    /*An historical landmark or building.*/
    "LandmarksOrHistoricalBuildings": NamedNode;
    /*Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in <a href="https://en.wikipedia.org/wiki/IETF_language_tag">BCP 47</a> can be used via the <a class="localLink" href="http://schema.org/alternateName">alternateName</a> property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using <a class="localLink" href="http://schema.org/ComputerLanguage">ComputerLanguage</a>.*/
    "Language": NamedNode;
    /*LaserDiscFormat.*/
    "LaserDiscFormat": NamedNode;
    /*An agent leaves an event / group with participants/friends at a location.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: The antonym of LeaveAction.</li>
    <li><a class="localLink" href="http://schema.org/UnRegisterAction">UnRegisterAction</a>: Unlike UnRegisterAction, LeaveAction implies leaving a group/team of people rather than a service.</li>
    </ul>
    */
    "LeaveAction": NamedNode;
    /*The steering position is on the left side of the vehicle (viewed from the main direction of driving).*/
    "LeftHandDriving": NamedNode;
    /*A LegalService is a business that provides legally-oriented services, advice and representation, e.g. law firms.<br/><br/>
    
    As a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a> it can be described as a <a class="localLink" href="http://schema.org/provider">provider</a> of one or more <a class="localLink" href="http://schema.org/Service">Service</a>(s).*/
    "LegalService": NamedNode;
    /*A legislative building&#x2014;for example, the state capitol.*/
    "LegislativeBuilding": NamedNode;
    /*The act of providing an object under an agreement that it will be returned at a later date. Reciprocal of BorrowAction.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/BorrowAction">BorrowAction</a>: Reciprocal of LendAction.</li>
    </ul>
    */
    "LendAction": NamedNode;
    /*A library.*/
    "Library": NamedNode;
    /*The act of expressing a positive sentiment about the object. An agent likes an object (a proposition, topic or theme) with participants.*/
    "LikeAction": NamedNode;
    /*Indicates that the item has limited availability.*/
    "LimitedAvailability": NamedNode;
    /*A shop that sells alcoholic drinks such as wine, beer, whisky and other spirits.*/
    "LiquorStore": NamedNode;
    /*An list item, e.g. a step in a checklist or how-to description.*/
    "ListItem": NamedNode;
    /*The act of consuming audio content.*/
    "ListenAction": NamedNode;
    /*Event type: Literary event.*/
    "LiteraryEvent": NamedNode;
    /*LiveAlbum.*/
    "LiveAlbum": NamedNode;
    /*A blog post intended to provide a rolling textual coverage of an ongoing event through continuous updates.*/
    "LiveBlogPosting": NamedNode;
    /*A financial product for the loaning of an amount of money under agreed terms and charges.*/
    "LoanOrCredit": NamedNode;
    /*A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.*/
    "LocalBusiness": NamedNode;
    /*Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.*/
    "LocationFeatureSpecification": NamedNode;
    /*A DeliveryMethod in which an item is made available via locker.*/
    "LockerDelivery": NamedNode;
    /*A locksmith.*/
    "Locksmith": NamedNode;
    /*A lodging business, such as a motel, hotel, or inn.*/
    "LodgingBusiness": NamedNode;
    /*A reservation for lodging at a hotel, motel, inn, etc.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.*/
    "LodgingReservation": NamedNode;
    /*The act of being defeated in a competitive activity.*/
    "LoseAction": NamedNode;
    /*A diet focused on reduced calorie intake.*/
    "LowCalorieDiet": NamedNode;
    /*A diet focused on reduced fat and cholesterol intake.*/
    "LowFatDiet": NamedNode;
    /*A diet appropriate for people with lactose intolerance.*/
    "LowLactoseDiet": NamedNode;
    /*A diet focused on reduced sodium intake.*/
    "LowSaltDiet": NamedNode;
    /*The male gender.*/
    "Male": NamedNode;
    /*A map.*/
    "Map": NamedNode;
    /*An enumeration of several kinds of Map.*/
    "MapCategoryType": NamedNode;
    /*The act of marrying a person.*/
    "MarryAction": NamedNode;
    /*Properties that take Mass as values are of the form '&lt;Number&gt; &lt;Mass unit of measure&gt;'. E.g., '7 kg'.*/
    "Mass": NamedNode;
    /*Web page type: Media gallery page. A mixed-media page that can contains media such as images, videos, and other multimedia.*/
    "MediaGallery": NamedNode;
    /*A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).*/
    "MediaObject": NamedNode;
    /*A subscription which allows a user to access media including audio, video, books, etc.*/
    "MediaSubscription": NamedNode;
    /*A medical organization (physical or not), such as hospital, institution or clinic.*/
    "MedicalOrganization": NamedNode;
    /*A meeting room, conference room, or conference hall is a room provided for singular events such as business conferences and meetings (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Conference_hall">http://en.wikipedia.org/wiki/Conference_hall</a>).
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "MeetingRoom": NamedNode;
    /*A men's clothing store.*/
    "MensClothingStore": NamedNode;
    /*A structured representation of food or drink items available from a FoodEstablishment.*/
    "Menu": NamedNode;
    /*A food or drink item listed in a menu or menu section.*/
    "MenuItem": NamedNode;
    /*A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.*/
    "MenuSection": NamedNode;
    /*A single message from a sender to one or more organizations or people.*/
    "Message": NamedNode;
    /*A middle school (typically for children aged around 11-14, although this varies somewhat).*/
    "MiddleSchool": NamedNode;
    /*MixtapeAlbum.*/
    "MixtapeAlbum": NamedNode;
    /*A software application designed specifically to work well on a mobile device such as a telephone.*/
    "MobileApplication": NamedNode;
    /*A store that sells mobile phones and related accessories.*/
    "MobilePhoneStore": NamedNode;
    /*The day of the week between Sunday and Tuesday.*/
    "Monday": NamedNode;
    /*A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use <a class="localLink" href="http://schema.org/PriceSpecification">PriceSpecification</a> Types to describe the price of an Offer, Invoice, etc.*/
    "MonetaryAmount": NamedNode;
    /*A statistical distribution of monetary amounts.*/
    "MonetaryAmountDistribution": NamedNode;
    /*A mosque.*/
    "Mosque": NamedNode;
    /*A motel.
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Motel": NamedNode;
    /*A motorcycle dealer.*/
    "MotorcycleDealer": NamedNode;
    /*A motorcycle repair shop.*/
    "MotorcycleRepair": NamedNode;
    /*A mountain, like Mount Whitney or Mount Everest.*/
    "Mountain": NamedNode;
    /*The act of an agent relocating to a place.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/TransferAction">TransferAction</a>: Unlike TransferAction, the subject of the move is a living Person or Organization rather than an inanimate object.</li>
    </ul>
    */
    "MoveAction": NamedNode;
    /*A movie.*/
    "Movie": NamedNode;
    /*A short segment/part of a movie.*/
    "MovieClip": NamedNode;
    /*A movie rental store.*/
    "MovieRentalStore": NamedNode;
    /*A series of movies. Included movies can be indicated with the hasPart property.*/
    "MovieSeries": NamedNode;
    /*A movie theater.*/
    "MovieTheater": NamedNode;
    /*A moving company.*/
    "MovingCompany": NamedNode;
    /*Play mode: MultiPlayer. Requiring or allowing multiple human players to play simultaneously.*/
    "MultiPlayer": NamedNode;
    /*A museum.*/
    "Museum": NamedNode;
    /*A collection of music tracks.*/
    "MusicAlbum": NamedNode;
    /*Classification of the album by it's type of content: soundtrack, live album, studio album, etc.*/
    "MusicAlbumProductionType": NamedNode;
    /*The kind of release which this album is: single, EP or album.*/
    "MusicAlbumReleaseType": NamedNode;
    /*A musical composition.*/
    "MusicComposition": NamedNode;
    /*Event type: Music event.*/
    "MusicEvent": NamedNode;
    /*A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.*/
    "MusicGroup": NamedNode;
    /*A collection of music tracks in playlist form.*/
    "MusicPlaylist": NamedNode;
    /*A music recording (track), usually a single song.*/
    "MusicRecording": NamedNode;
    /*A MusicRelease is a specific release of a music album.*/
    "MusicRelease": NamedNode;
    /*Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).*/
    "MusicReleaseFormatType": NamedNode;
    /*A music store.*/
    "MusicStore": NamedNode;
    /*A music venue.*/
    "MusicVenue": NamedNode;
    /*A music video file.*/
    "MusicVideoObject": NamedNode;
    /*Organization: Non-governmental Organization.*/
    "NGO": NamedNode;
    /*A nail salon.*/
    "NailSalon": NamedNode;
    /*Indicates that the item is new.*/
    "NewCondition": NamedNode;
    /*A NewsArticle is an article whose content reports news, or provides background context and supporting materials for understanding the news.<br/><br/>
    
    A more detailed overview of <a href="/docs/news.html">schema.org News markup</a> is also available.*/
    "NewsArticle": NamedNode;
    /*A nightclub or discotheque.*/
    "NightClub": NamedNode;
    /*A notary.*/
    "Notary": NamedNode;
    /*A file containing a note, primarily for the author.*/
    "NoteDigitalDocument": NamedNode;
    /*Data type: Number.<br/><br/>
    
    Usage guidelines:<br/><br/>
    
    <ul>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    </ul>
    */
    "Number": NamedNode;
    /*Nutritional information about the recipe.*/
    "NutritionInformation": NamedNode;
    /*A profession, may involve prolonged training and/or a formal qualification.*/
    "Occupation": NamedNode;
    /*An ocean (for example, the Pacific).*/
    "OceanBodyOfWater": NamedNode;
    /*An offer to transfer some rights to an item or to provide a service — for example, an offer to sell tickets to an event, to rent the DVD of a movie, to stream a TV show over the internet, to repair a motorcycle, or to loan a book.<br/><br/>
    
    Note: As the <a class="localLink" href="http://schema.org/businessFunction">businessFunction</a> property, which identifies the form of offer (e.g. sell, lease, repair, dispose), defaults to http://purl.org/goodrelations/v1#Sell; an Offer without a defined businessFunction value can be assumed to be an offer to sell.<br/><br/>
    
    For <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GTIN</a>-related fields, see <a href="http://www.gs1.org/barcodes/support/check_digit_calculator">Check Digit calculator</a> and <a href="http://www.gs1us.org/resources/standards/gtin-validation-guide">validation guide</a> from <a href="http://www.gs1.org/">GS1</a>.*/
    "Offer": NamedNode;
    /*An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.*/
    "OfferCatalog": NamedNode;
    /*A list of possible conditions for the item.*/
    "OfferItemCondition": NamedNode;
    /*An office equipment store.*/
    "OfficeEquipmentStore": NamedNode;
    /*Game server status: OfflinePermanently. Server is offline and not available.*/
    "OfflinePermanently": NamedNode;
    /*Game server status: OfflineTemporarily. Server is offline now but it can be online soon.*/
    "OfflineTemporarily": NamedNode;
    /*A publication event e.g. catch-up TV or radio podcast, during which a program is available on-demand.*/
    "OnDemandEvent": NamedNode;
    /*A DeliveryMethod in which an item is collected on site, e.g. in a store or at a box office.*/
    "OnSitePickup": NamedNode;
    /*Game server status: Online. Server is available.*/
    "Online": NamedNode;
    /*Game server status: OnlineFull. Server is online but unavailable. The maximum number of players has reached.*/
    "OnlineFull": NamedNode;
    /*Indicates that the item is available only online.*/
    "OnlineOnly": NamedNode;
    /*A structured value providing information about the opening hours of a place or a certain service inside a place.<br/><br/>
    
    The place is <strong>open</strong> if the <a class="localLink" href="http://schema.org/opens">opens</a> property is specified, and <strong>closed</strong> otherwise.<br/><br/>
    
    If the value for the <a class="localLink" href="http://schema.org/closes">closes</a> property is less than the value for the <a class="localLink" href="http://schema.org/opens">opens</a> property then the hour range is assumed to span over the next day.*/
    "OpeningHoursSpecification": NamedNode;
    /*An order is a confirmation of a transaction (a receipt), which can contain multiple line items, each represented by an Offer that has been accepted by the customer.*/
    "Order": NamedNode;
    /*An agent orders an object/product/service to be delivered/sent.*/
    "OrderAction": NamedNode;
    /*OrderStatus representing cancellation of an order.*/
    "OrderCancelled": NamedNode;
    /*OrderStatus representing successful delivery of an order.*/
    "OrderDelivered": NamedNode;
    /*OrderStatus representing that an order is in transit.*/
    "OrderInTransit": NamedNode;
    /*An order item is a line of an order. It includes the quantity and shipping details of a bought offer.*/
    "OrderItem": NamedNode;
    /*OrderStatus representing that payment is due on an order.*/
    "OrderPaymentDue": NamedNode;
    /*OrderStatus representing availability of an order for pickup.*/
    "OrderPickupAvailable": NamedNode;
    /*OrderStatus representing that there is a problem with the order.*/
    "OrderProblem": NamedNode;
    /*OrderStatus representing that an order is being processed.*/
    "OrderProcessing": NamedNode;
    /*OrderStatus representing that an order has been returned.*/
    "OrderReturned": NamedNode;
    /*Enumerated status values for Order.*/
    "OrderStatus": NamedNode;
    /*An organization such as a school, NGO, corporation, club, etc.*/
    "Organization": NamedNode;
    /*A subclass of Role used to describe roles within organizations.*/
    "OrganizationRole": NamedNode;
    /*The act of manipulating/administering/supervising/controlling one or more objects.*/
    "OrganizeAction": NamedNode;
    /*Indicates that the item is out of stock.*/
    "OutOfStock": NamedNode;
    /*An outlet store.*/
    "OutletStore": NamedNode;
    /*A structured value providing information about when a certain organization or person owned a certain product.*/
    "OwnershipInfo": NamedNode;
    /*The act of producing a painting, typically with paint and canvas as instruments.*/
    "PaintAction": NamedNode;
    /*A painting.*/
    "Painting": NamedNode;
    /*Book format: Paperback.*/
    "Paperback": NamedNode;
    /*The delivery of a parcel either via the postal service or a commercial service.*/
    "ParcelDelivery": NamedNode;
    /*A private parcel service as the delivery mode available for a certain offer.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#DHL</li>
    <li>http://purl.org/goodrelations/v1#FederalExpress</li>
    <li>http://purl.org/goodrelations/v1#UPS</li>
    </ul>
    */
    "ParcelService": NamedNode;
    /*A set of characteristics describing parents, who can be interested in viewing some content.*/
    "ParentAudience": NamedNode;
    /*A park.*/
    "Park": NamedNode;
    /*A parking lot or other parking facility.*/
    "ParkingFacility": NamedNode;
    /*A parking map.*/
    "ParkingMap": NamedNode;
    /*A shop that will buy, or lend money against the security of, personal possessions.*/
    "PawnShop": NamedNode;
    /*An agent pays a price to a participant.*/
    "PayAction": NamedNode;
    /*An automatic payment system is in place and will be used.*/
    "PaymentAutomaticallyApplied": NamedNode;
    /*A payment method using a credit, debit, store or other card to associate the payment with an account.*/
    "PaymentCard": NamedNode;
    /*The costs of settling the payment using a particular payment method.*/
    "PaymentChargeSpecification": NamedNode;
    /*The payment has been received and processed.*/
    "PaymentComplete": NamedNode;
    /*The payee received the payment, but it was declined for some reason.*/
    "PaymentDeclined": NamedNode;
    /*The payment is due, but still within an acceptable time to be received.*/
    "PaymentDue": NamedNode;
    /*A payment method is a standardized procedure for transferring the monetary amount for a purchase. Payment methods are characterized by the legal and technical structures used, and by the organization or group carrying out the transaction.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#ByBankTransferInAdvance</li>
    <li>http://purl.org/goodrelations/v1#ByInvoice</li>
    <li>http://purl.org/goodrelations/v1#Cash</li>
    <li>http://purl.org/goodrelations/v1#CheckInAdvance</li>
    <li>http://purl.org/goodrelations/v1#COD</li>
    <li>http://purl.org/goodrelations/v1#DirectDebit</li>
    <li>http://purl.org/goodrelations/v1#GoogleCheckout</li>
    <li>http://purl.org/goodrelations/v1#PayPal</li>
    <li>http://purl.org/goodrelations/v1#PaySwarm</li>
    </ul>
    */
    "PaymentMethod": NamedNode;
    /*The payment is due and considered late.*/
    "PaymentPastDue": NamedNode;
    /*A Service to transfer funds from a person or organization to a beneficiary person or organization.*/
    "PaymentService": NamedNode;
    /*A specific payment status. For example, PaymentDue, PaymentComplete, etc.*/
    "PaymentStatusType": NamedNode;
    /*A set of characteristics belonging to people, e.g. who compose an item's target audience.*/
    "PeopleAudience": NamedNode;
    /*The act of participating in performance arts.*/
    "PerformAction": NamedNode;
    /*A PerformanceRole is a Role that some entity places with regard to a theatrical performance, e.g. in a Movie, TVSeries etc.*/
    "PerformanceRole": NamedNode;
    /*A theater or other performing art center.*/
    "PerformingArtsTheater": NamedNode;
    /*A performance group, such as a band, an orchestra, or a circus.*/
    "PerformingGroup": NamedNode;
    /*A publication in any medium issued in successive parts bearing numerical or chronological designations and intended, such as a magazine, scholarly journal, or newspaper to continue indefinitely.<br/><br/>
    
    See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.*/
    "Periodical": NamedNode;
    /*A permit issued by an organization, e.g. a parking pass.*/
    "Permit": NamedNode;
    /*A person (alive, dead, undead, or fictional).*/
    "Person": NamedNode;
    /*A pet store.*/
    "PetStore": NamedNode;
    /*A pharmacy or drugstore.*/
    "Pharmacy": NamedNode;
    /*A photograph.*/
    "Photograph": NamedNode;
    /*The act of capturing still images of objects using a camera.*/
    "PhotographAction": NamedNode;
    /*A doctor's office.*/
    "Physician": NamedNode;
    /*Entities that have a somewhat fixed, physical extension.*/
    "Place": NamedNode;
    /*Place of worship, such as a church, synagogue, or mosque.*/
    "PlaceOfWorship": NamedNode;
    /*The act of planning the execution of an event/task/action/reservation/plan to a future date.*/
    "PlanAction": NamedNode;
    /*The act of playing/exercising/training/performing for enjoyment, leisure, recreation, Competition or exercise.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/ListenAction">ListenAction</a>: Unlike ListenAction (which is under ConsumeAction), PlayAction refers to performing for an audience or at an event, rather than consuming music.</li>
    <li><a class="localLink" href="http://schema.org/WatchAction">WatchAction</a>: Unlike WatchAction (which is under ConsumeAction), PlayAction refers to showing/displaying for an audience or at an event, rather than consuming visual content.</li>
    </ul>
    */
    "PlayAction": NamedNode;
    /*A playground.*/
    "Playground": NamedNode;
    /*A plumbing service.*/
    "Plumber": NamedNode;
    /*A police station.*/
    "PoliceStation": NamedNode;
    /*A pond.*/
    "Pond": NamedNode;
    /*A post office.*/
    "PostOffice": NamedNode;
    /*The mailing address.*/
    "PostalAddress": NamedNode;
    /*A description of an action that is supported.*/
    "PotentialActionStatus": NamedNode;
    /*Indicates that the item is available for pre-order.*/
    "PreOrder": NamedNode;
    /*An agent orders a (not yet released) object/product/service to be delivered/sent.*/
    "PreOrderAction": NamedNode;
    /*Indicates that the item is available for ordering and delivery before general availability.*/
    "PreSale": NamedNode;
    /*The act of inserting at the beginning if an ordered collection.*/
    "PrependAction": NamedNode;
    /*A preschool.*/
    "Preschool": NamedNode;
    /*A file containing slides or used for a presentation.*/
    "PresentationDigitalDocument": NamedNode;
    /*A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use <a class="localLink" href="http://schema.org/MonetaryAmount">MonetaryAmount</a> to describe independent amounts of money such as a salary, credit card limits, etc.*/
    "PriceSpecification": NamedNode;
    /*Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.*/
    "Product": NamedNode;
    /*A datasheet or vendor specification of a product (in the sense of a prototypical description).*/
    "ProductModel": NamedNode;
    /*Original definition: "provider of professional services."<br/><br/>
    
    The general <a class="localLink" href="http://schema.org/ProfessionalService">ProfessionalService</a> type for local businesses was deprecated due to confusion with <a class="localLink" href="http://schema.org/Service">Service</a>. For reference, the types that it included were: <a class="localLink" href="http://schema.org/Dentist">Dentist</a>,
            <a class="localLink" href="http://schema.org/AccountingService">AccountingService</a>, <a class="localLink" href="http://schema.org/Attorney">Attorney</a>, <a class="localLink" href="http://schema.org/Notary">Notary</a>, as well as types for several kinds of <a class="localLink" href="http://schema.org/HomeAndConstructionBusiness">HomeAndConstructionBusiness</a>: <a class="localLink" href="http://schema.org/Electrician">Electrician</a>, <a class="localLink" href="http://schema.org/GeneralContractor">GeneralContractor</a>,
            <a class="localLink" href="http://schema.org/HousePainter">HousePainter</a>, <a class="localLink" href="http://schema.org/Locksmith">Locksmith</a>, <a class="localLink" href="http://schema.org/Plumber">Plumber</a>, <a class="localLink" href="http://schema.org/RoofingContractor">RoofingContractor</a>. <a class="localLink" href="http://schema.org/LegalService">LegalService</a> was introduced as a more inclusive supertype of <a class="localLink" href="http://schema.org/Attorney">Attorney</a>.*/
    "ProfessionalService": NamedNode;
    /*Web page type: Profile page.*/
    "ProfilePage": NamedNode;
    /*Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.*/
    "ProgramMembership": NamedNode;
    /*A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.<br/><br/>
    
    Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.*/
    "PropertyValue": NamedNode;
    /*A Property value specification.*/
    "PropertyValueSpecification": NamedNode;
    /*This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a "day of the week", it can be used with <a class="localLink" href="http://schema.org/OpeningHoursSpecification">OpeningHoursSpecification</a>. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs.*/
    "PublicHolidays": NamedNode;
    /*A public swimming pool.*/
    "PublicSwimmingPool": NamedNode;
    /*A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.*/
    "PublicationEvent": NamedNode;
    /*A part of a successively published publication such as a periodical or publication volume, often numbered, usually containing a grouping of works such as articles.<br/><br/>
    
    See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.*/
    "PublicationIssue": NamedNode;
    /*A part of a successively published publication such as a periodical or multi-volume work, often numbered. It may represent a time span, such as a year.<br/><br/>
    
    See also <a href="http://blog.schema.org/2014/09/schemaorg-support-for-bibliographic_2.html">blog post</a>.*/
    "PublicationVolume": NamedNode;
    /*A QAPage is a WebPage focussed on a specific Question and its Answer(s), e.g. in a question answering site or documenting Frequently Asked Questions (FAQs).*/
    "QAPage": NamedNode;
    /*A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.*/
    "QualitativeValue": NamedNode;
    /*A point value or interval for product characteristics and other purposes.*/
    "QuantitativeValue": NamedNode;
    /*A statistical distribution of values.*/
    "QuantitativeValueDistribution": NamedNode;
    /*Quantities such as distance, time, mass, weight, etc. Particular instances of say Mass are entities like '3 Kg' or '4 milligrams'.*/
    "Quantity": NamedNode;
    /*A specific question - e.g. from a user seeking answers online, or collected in a Frequently Asked Questions (FAQ) document.*/
    "Question": NamedNode;
    /*An agent quotes/estimates/appraises an object/product/service with a price at a location/store.*/
    "QuoteAction": NamedNode;
    /*A place offering space for "Recreational Vehicles", Caravans, mobile homes and the like.*/
    "RVPark": NamedNode;
    /*A unique instance of a radio BroadcastService on a CableOrSatelliteService lineup.*/
    "RadioChannel": NamedNode;
    /*A short radio program or a segment/part of a radio program.*/
    "RadioClip": NamedNode;
    /*A radio episode which can be part of a series or season.*/
    "RadioEpisode": NamedNode;
    /*Season dedicated to radio broadcast and associated online delivery.*/
    "RadioSeason": NamedNode;
    /*CreativeWorkSeries dedicated to radio broadcast and associated online delivery.*/
    "RadioSeries": NamedNode;
    /*A radio station.*/
    "RadioStation": NamedNode;
    /*A rating is an evaluation on a numeric scale, such as 1 to 5 stars.*/
    "Rating": NamedNode;
    /*The act of responding instinctively and emotionally to an object, expressing a sentiment.*/
    "ReactAction": NamedNode;
    /*The act of consuming written content.*/
    "ReadAction": NamedNode;
    /*Permission to read or view the document.*/
    "ReadPermission": NamedNode;
    /*A real-estate agent.*/
    "RealEstateAgent": NamedNode;
    /*Real-wheel drive is a transmission layout where the engine drives the rear wheels.*/
    "RearWheelDriveConfiguration": NamedNode;
    /*The act of physically/electronically taking delivery of an object thathas been transferred from an origin to a destination. Reciprocal of SendAction.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/SendAction">SendAction</a>: The reciprocal of ReceiveAction.</li>
    <li><a class="localLink" href="http://schema.org/TakeAction">TakeAction</a>: Unlike TakeAction, ReceiveAction does not imply that the ownership has been transfered (e.g. I can receive a package, but it does not mean the package is now mine).</li>
    </ul>
    */
    "ReceiveAction": NamedNode;
    /*A recipe. For dietary restrictions covered by the recipe, a few common restrictions are enumerated via <a class="localLink" href="http://schema.org/suitableForDiet">suitableForDiet</a>. The <a class="localLink" href="http://schema.org/keywords">keywords</a> property can also be used to add more detail.*/
    "Recipe": NamedNode;
    /*A recycling center.*/
    "RecyclingCenter": NamedNode;
    /*Indicates that the item is refurbished.*/
    "RefurbishedCondition": NamedNode;
    /*The act of registering to be a user of a service, product or web page.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: Unlike JoinAction, RegisterAction implies you are registering to be a user of a service, <em>not</em> a group/team of people.</li>
    <li>[FollowAction]]: Unlike FollowAction, RegisterAction doesn't imply that the agent is expecting to poll for updates from the object.</li>
    <li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, RegisterAction doesn't imply that the agent is expecting updates from the object.</li>
    </ul>
    */
    "RegisterAction": NamedNode;
    /*The act of rejecting to/adopting an object.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/AcceptAction">AcceptAction</a>: The antonym of RejectAction.</li>
    </ul>
    */
    "RejectAction": NamedNode;
    /*RemixAlbum.*/
    "RemixAlbum": NamedNode;
    /*The act of giving money in return for temporary use, but not ownership, of an object such as a vehicle or property. For example, an agent rents a property from a landlord in exchange for a periodic payment.*/
    "RentAction": NamedNode;
    /*A reservation for a rental car.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations.*/
    "RentalCarReservation": NamedNode;
    /*The act of editing a recipient by replacing an old object with a new object.*/
    "ReplaceAction": NamedNode;
    /*The act of responding to a question/message asked/sent by the object. Related to <a class="localLink" href="http://schema.org/AskAction">AskAction</a><br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/AskAction">AskAction</a>: Appears generally as an origin of a ReplyAction.</li>
    </ul>
    */
    "ReplyAction": NamedNode;
    /*A Report generated by governmental or non-governmental organization.*/
    "Report": NamedNode;
    /*Researchers.*/
    "Researcher": NamedNode;
    /*Describes a reservation for travel, dining or an event. Some reservations require tickets. <br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, restaurant reservations, flights, or rental cars, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.*/
    "Reservation": NamedNode;
    /*The status for a previously confirmed reservation that is now cancelled.*/
    "ReservationCancelled": NamedNode;
    /*The status of a confirmed reservation.*/
    "ReservationConfirmed": NamedNode;
    /*The status of a reservation on hold pending an update like credit card number or flight changes.*/
    "ReservationHold": NamedNode;
    /*A group of multiple reservations with common values for all sub-reservations.*/
    "ReservationPackage": NamedNode;
    /*The status of a reservation when a request has been sent, but not confirmed.*/
    "ReservationPending": NamedNode;
    /*Enumerated status values for Reservation.*/
    "ReservationStatusType": NamedNode;
    /*Reserving a concrete object.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/ScheduleAction">ScheduleAction</a></a>: Unlike ScheduleAction, ReserveAction reserves concrete objects (e.g. a table, a hotel) towards a time slot / spatial allocation.</li>
    </ul>
    */
    "ReserveAction": NamedNode;
    /*A reservoir of water, typically an artificially created lake, like the Lake Kariba reservoir.*/
    "Reservoir": NamedNode;
    /*The place where a person lives.*/
    "Residence": NamedNode;
    /*A resort is a place used for relaxation or recreation, attracting visitors for holidays or vacations. Resorts are places, towns or sometimes commercial establishment operated by a single company (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Resort">http://en.wikipedia.org/wiki/Resort</a>).
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Resort": NamedNode;
    /*A restaurant.*/
    "Restaurant": NamedNode;
    /*A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.*/
    "RestrictedDiet": NamedNode;
    /*The act of resuming a device or application which was formerly paused (e.g. resume music playback or resume a timer).*/
    "ResumeAction": NamedNode;
    /*The act of returning to the origin that which was previously received (concrete objects) or taken (ownership).*/
    "ReturnAction": NamedNode;
    /*A review of an item - for example, of a restaurant, movie, or store.*/
    "Review": NamedNode;
    /*The act of producing a balanced opinion about the object for an audience. An agent reviews an object with participants resulting in a review.*/
    "ReviewAction": NamedNode;
    /*The steering position is on the right side of the vehicle (viewed from the main direction of driving).*/
    "RightHandDriving": NamedNode;
    /*A river (for example, the broad majestic Shannon).*/
    "RiverBodyOfWater": NamedNode;
    /*Represents additional information about a relationship or property. For example a Role can be used to say that a 'member' role linking some SportsTeam to a player occurred during a particular time period. Or that a Person's 'actor' role in a Movie was for some particular characterName. Such properties can be attached to a Role entity, which is then associated with the main entities using ordinary properties like 'member' or 'actor'.<br/><br/>
    
    See also <a href="http://blog.schema.org/2014/06/introducing-role.html">blog post</a>.*/
    "Role": NamedNode;
    /*A roofing contractor.*/
    "RoofingContractor": NamedNode;
    /*A room is a distinguishable space within a structure, usually separated from other spaces by interior walls. (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Room">http://en.wikipedia.org/wiki/Room</a>).
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Room": NamedNode;
    /*The act of notifying an event organizer as to whether you expect to attend the event.*/
    "RsvpAction": NamedNode;
    /*The invitee may or may not attend.*/
    "RsvpResponseMaybe": NamedNode;
    /*The invitee will not attend.*/
    "RsvpResponseNo": NamedNode;
    /*RsvpResponseType is an enumeration type whose instances represent responding to an RSVP request.*/
    "RsvpResponseType": NamedNode;
    /*The invitee will attend.*/
    "RsvpResponseYes": NamedNode;
    /*Event type: Sales event.*/
    "SaleEvent": NamedNode;
    /*The day of the week between Friday and Sunday.*/
    "Saturday": NamedNode;
    /*Scheduling future actions, events, or tasks.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/ReserveAction">ReserveAction</a>: Unlike ReserveAction, ScheduleAction allocates future actions (e.g. an event, a task, etc) towards a time slot / spatial allocation.</li>
    </ul>
    */
    "ScheduleAction": NamedNode;
    /*A scholarly article.*/
    "ScholarlyArticle": NamedNode;
    /*A school.*/
    "School": NamedNode;
    /*A screening of a movie or other video.*/
    "ScreeningEvent": NamedNode;
    /*A piece of sculpture.*/
    "Sculpture": NamedNode;
    /*A sea (for example, the Caspian sea).*/
    "SeaBodyOfWater": NamedNode;
    /*The act of searching for an object.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/FindAction">FindAction</a>: SearchAction generally leads to a FindAction, but not necessarily.</li>
    </ul>
    */
    "SearchAction": NamedNode;
    /*Web page type: Search results page.*/
    "SearchResultsPage": NamedNode;
    /*A media season e.g. tv, radio, video game etc.*/
    "Season": NamedNode;
    /*Used to describe a seat, such as a reserved seat in an event reservation.*/
    "Seat": NamedNode;
    /*A seating map.*/
    "SeatingMap": NamedNode;
    /*A self-storage facility.*/
    "SelfStorage": NamedNode;
    /*The act of taking money from a buyer in exchange for goods or services rendered. An agent sells an object, product, or service to a buyer for a price. Reciprocal of BuyAction.*/
    "SellAction": NamedNode;
    /*The act of physically/electronically dispatching an object for transfer from an origin to a destination.Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/ReceiveAction">ReceiveAction</a>: The reciprocal of SendAction.</li>
    <li><a class="localLink" href="http://schema.org/GiveAction">GiveAction</a>: Unlike GiveAction, SendAction does not imply the transfer of ownership (e.g. I can send you my laptop, but I'm not necessarily giving it to you).</li>
    </ul>
    */
    "SendAction": NamedNode;
    /*A Series in schema.org is a group of related items, typically but not necessarily of the same kind. See also <a class="localLink" href="http://schema.org/CreativeWorkSeries">CreativeWorkSeries</a>, <a class="localLink" href="http://schema.org/EventSeries">EventSeries</a>.*/
    "Series": NamedNode;
    /*A service provided by an organization, e.g. delivery service, print services, etc.*/
    "Service": NamedNode;
    /*A means for accessing a service, e.g. a government office location, web site, or phone number.*/
    "ServiceChannel": NamedNode;
    /*The act of distributing content to people for their amusement or edification.*/
    "ShareAction": NamedNode;
    /*A shoe store.*/
    "ShoeStore": NamedNode;
    /*A shopping center or mall.*/
    "ShoppingCenter": NamedNode;
    /*Residence type: Single-family home.*/
    "SingleFamilyResidence": NamedNode;
    /*Play mode: SinglePlayer. Which is played by a lone player.*/
    "SinglePlayer": NamedNode;
    /*SingleRelease.*/
    "SingleRelease": NamedNode;
    /*A navigation element of the page.*/
    "SiteNavigationElement": NamedNode;
    /*A ski resort.*/
    "SkiResort": NamedNode;
    /*Event type: Social event.*/
    "SocialEvent": NamedNode;
    /*A post to a social media platform, including blog posts, tweets, Facebook posts, etc.*/
    "SocialMediaPosting": NamedNode;
    /*A software application.*/
    "SoftwareApplication": NamedNode;
    /*Computer programming source code. Example: Full (compile ready) solutions, code snippet samples, scripts, templates.*/
    "SoftwareSourceCode": NamedNode;
    /*Indicates that the item has sold out.*/
    "SoldOut": NamedNode;
    /*A placeholder for multiple similar products of the same kind.*/
    "SomeProducts": NamedNode;
    /*SoundtrackAlbum.*/
    "SoundtrackAlbum": NamedNode;
    /*A SpeakableSpecification indicates (typically via <a class="localLink" href="http://schema.org/xpath">xpath</a> or <a class="localLink" href="http://schema.org/cssSelector">cssSelector</a>) sections of a document that are highlighted as particularly <a class="localLink" href="http://schema.org/speakable">speakable</a>. Instances of this type are expected to be used primarily as values of the <a class="localLink" href="http://schema.org/speakable">speakable</a> property.*/
    "SpeakableSpecification": NamedNode;
    /*Any branch of a field in which people typically develop specific expertise, usually after significant study, time, and effort.*/
    "Specialty": NamedNode;
    /*SpokenWordAlbum.*/
    "SpokenWordAlbum": NamedNode;
    /*A sporting goods store.*/
    "SportingGoodsStore": NamedNode;
    /*A sports location, such as a playing field.*/
    "SportsActivityLocation": NamedNode;
    /*A sports club.*/
    "SportsClub": NamedNode;
    /*Event type: Sports event.*/
    "SportsEvent": NamedNode;
    /*Represents the collection of all sports organizations, including sports teams, governing bodies, and sports associations.*/
    "SportsOrganization": NamedNode;
    /*Organization: Sports team.*/
    "SportsTeam": NamedNode;
    /*A spreadsheet file.*/
    "SpreadsheetDigitalDocument": NamedNode;
    /*A stadium.*/
    "StadiumOrArena": NamedNode;
    /*A state or province of a country.*/
    "State": NamedNode;
    /*A value indicating a steering position.*/
    "SteeringPositionValue": NamedNode;
    /*A retail good store.*/
    "Store": NamedNode;
    /*Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.*/
    "StructuredValue": NamedNode;
    /*StudioAlbum.*/
    "StudioAlbum": NamedNode;
    /*The act of forming a personal connection with someone/something (object) unidirectionally/asymmetrically to get updates pushed to.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, SubscribeAction implies that the subscriber acts as a passive agent being constantly/actively pushed for updates.</li>
    <li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: Unlike RegisterAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>
    <li><a class="localLink" href="http://schema.org/JoinAction">JoinAction</a>: Unlike JoinAction, SubscribeAction implies that the agent is interested in continuing receiving updates from the object.</li>
    </ul>
    */
    "SubscribeAction": NamedNode;
    /*A subway station.*/
    "SubwayStation": NamedNode;
    /*A suite in a hotel or other public accommodation, denotes a class of luxury accommodations, the key feature of which is multiple rooms (Source: Wikipedia, the free encyclopedia, see <a href="http://en.wikipedia.org/wiki/Suite_(hotel)">http://en.wikipedia.org/wiki/Suite_(hotel)</a>).
    <br /><br />
    See also the <a href="/docs/hotels.html">dedicated document on the use of schema.org for marking up hotels and other forms of accommodations</a>.*/
    "Suite": NamedNode;
    /*The day of the week between Saturday and Monday.*/
    "Sunday": NamedNode;
    /*The act of momentarily pausing a device or application (e.g. pause music playback or pause a timer).*/
    "SuspendAction": NamedNode;
    /*A synagogue.*/
    "Synagogue": NamedNode;
    /*A short TV program or a segment/part of a TV program.*/
    "TVClip": NamedNode;
    /*A TV episode which can be part of a series or season.*/
    "TVEpisode": NamedNode;
    /*Season dedicated to TV broadcast and associated online delivery.*/
    "TVSeason": NamedNode;
    /*CreativeWorkSeries dedicated to TV broadcast and associated online delivery.*/
    "TVSeries": NamedNode;
    /*A table on a Web page.*/
    "Table": NamedNode;
    /*The act of gaining ownership of an object from an origin. Reciprocal of GiveAction.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/GiveAction">GiveAction</a>: The reciprocal of TakeAction.</li>
    <li><a class="localLink" href="http://schema.org/ReceiveAction">ReceiveAction</a>: Unlike ReceiveAction, TakeAction implies that ownership has been transfered.</li>
    </ul>
    */
    "TakeAction": NamedNode;
    /*A tattoo parlor.*/
    "TattooParlor": NamedNode;
    /*A taxi.*/
    "Taxi": NamedNode;
    /*A reservation for a taxi.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.*/
    "TaxiReservation": NamedNode;
    /*A service for a vehicle for hire with a driver for local travel. Fares are usually calculated based on distance traveled.*/
    "TaxiService": NamedNode;
    /*A taxi stand.*/
    "TaxiStand": NamedNode;
    /*A technical article - Example: How-to (task) topics, step-by-step, procedural troubleshooting, specifications, etc.*/
    "TechArticle": NamedNode;
    /*A unique instance of a television BroadcastService on a CableOrSatelliteService lineup.*/
    "TelevisionChannel": NamedNode;
    /*A television station.*/
    "TelevisionStation": NamedNode;
    /*A tennis complex.*/
    "TennisComplex": NamedNode;
    /*Data type: Text.*/
    "Text": NamedNode;
    /*A file composed primarily of text.*/
    "TextDigitalDocument": NamedNode;
    /*Event type: Theater performance.*/
    "TheaterEvent": NamedNode;
    /*A theater group or company, for example, the Royal Shakespeare Company or Druid Theatre.*/
    "TheaterGroup": NamedNode;
    /*The most generic type of item.*/
    "Thing": NamedNode;
    /*The day of the week between Wednesday and Friday.*/
    "Thursday": NamedNode;
    /*Used to describe a ticket to an event, a flight, a bus ride, etc.*/
    "Ticket": NamedNode;
    /*The act of reaching a draw in a competitive activity.*/
    "TieAction": NamedNode;
    /*A point in time recurring on multiple days in the form hh:mm:ss[Z|(+|-)hh:mm] (see <a href="http://www.w3.org/TR/xmlschema-2/#time">XML schema for details</a>).*/
    "Time": NamedNode;
    /*The act of giving money voluntarily to a beneficiary in recognition of services rendered.*/
    "TipAction": NamedNode;
    /*A tire shop.*/
    "TireShop": NamedNode;
    /*The associated telephone number is toll free.*/
    "TollFree": NamedNode;
    /*A tourist attraction.  In principle any Thing can be a <a class="localLink" href="http://schema.org/TouristAttraction">TouristAttraction</a>, from a <a class="localLink" href="http://schema.org/Mountain">Mountain</a> and <a class="localLink" href="http://schema.org/LandmarksOrHistoricalBuildings">LandmarksOrHistoricalBuildings</a> to a <a class="localLink" href="http://schema.org/LocalBusiness">LocalBusiness</a>.  This Type can be used on its own to describe a general <a class="localLink" href="http://schema.org/TouristAttraction">TouristAttraction</a>, or be used as an <a class="localLink" href="http://schema.org/additionalType">additionalType</a> to add tourist attraction properties to any other type.  (See examples below)*/
    "TouristAttraction": NamedNode;
    /*A tourist information center.*/
    "TouristInformationCenter": NamedNode;
    /*A toy store.*/
    "ToyStore": NamedNode;
    /*An agent tracks an object for updates.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/FollowAction">FollowAction</a>: Unlike FollowAction, TrackAction refers to the interest on the location of innanimates objects.</li>
    <li><a class="localLink" href="http://schema.org/SubscribeAction">SubscribeAction</a>: Unlike SubscribeAction, TrackAction refers to  the interest on the location of innanimate objects.</li>
    </ul>
    */
    "TrackAction": NamedNode;
    /*The act of participating in an exchange of goods and services for monetary compensation. An agent trades an object, product or service with a participant in exchange for a one time or periodic payment.*/
    "TradeAction": NamedNode;
    /*A reservation for train travel.<br/><br/>
    
    Note: This type is for information about actual reservations, e.g. in confirmation emails or HTML pages with individual confirmations of reservations. For offers of tickets, use <a class="localLink" href="http://schema.org/Offer">Offer</a>.*/
    "TrainReservation": NamedNode;
    /*A train station.*/
    "TrainStation": NamedNode;
    /*A trip on a commercial train line.*/
    "TrainTrip": NamedNode;
    /*The act of transferring/moving (abstract or concrete) animate or inanimate objects from one place to another.*/
    "TransferAction": NamedNode;
    /*A transit map.*/
    "TransitMap": NamedNode;
    /*The act of traveling from an fromLocation to a destination by a specified mode of transport, optionally with participants.*/
    "TravelAction": NamedNode;
    /*A travel agency.*/
    "TravelAgency": NamedNode;
    /*A trip or journey. An itinerary of visits to one or more places.*/
    "Trip": NamedNode;
    /*The boolean value true.*/
    "True": NamedNode;
    /*The day of the week between Monday and Wednesday.*/
    "Tuesday": NamedNode;
    /*A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.*/
    "TypeAndQuantityNode": NamedNode;
    /*Data type: URL.*/
    "URL": NamedNode;
    /*The act of un-registering from a service.<br/><br/>
    
    Related actions:<br/><br/>
    
    <ul>
    <li><a class="localLink" href="http://schema.org/RegisterAction">RegisterAction</a>: antonym of UnRegisterAction.</li>
    <li><a class="localLink" href="http://schema.org/LeaveAction">LeaveAction</a>: Unlike LeaveAction, UnRegisterAction implies that you are unregistering from a service you werer previously registered, rather than leaving a team/group of people.</li>
    </ul>
    */
    "UnRegisterAction": NamedNode;
    /*The price asked for a given offer by the respective organization or person.*/
    "UnitPriceSpecification": NamedNode;
    /*The act of managing by changing/editing the state of the object.*/
    "UpdateAction": NamedNode;
    /*The act of applying an object to its intended purpose.*/
    "UseAction": NamedNode;
    /*Indicates that the item is used.*/
    "UsedCondition": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserBlocks": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserCheckins": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserComments": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserDownloads": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserInteraction": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserLikes": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserPageVisits": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserPlays": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserPlusOnes": NamedNode;
    /*UserInteraction and its subtypes is an old way of talking about users interacting with pages. It is generally better to use <a class="localLink" href="http://schema.org/Action">Action</a>-based vocabulary, alongside types such as <a class="localLink" href="http://schema.org/Comment">Comment</a>.*/
    "UserTweets": NamedNode;
    /*A diet exclusive of all animal products.*/
    "VeganDiet": NamedNode;
    /*A diet exclusive of animal meat.*/
    "VegetarianDiet": NamedNode;
    /*A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.*/
    "Vehicle": NamedNode;
    /*A venue map (e.g. for malls, auditoriums, museums, etc.).*/
    "VenueMap": NamedNode;
    /*Web page type: Video gallery page.*/
    "VideoGallery": NamedNode;
    /*A video game is an electronic game that involves human interaction with a user interface to generate visual feedback on a video device.*/
    "VideoGame": NamedNode;
    /*A short segment/part of a video game.*/
    "VideoGameClip": NamedNode;
    /*A video game series.*/
    "VideoGameSeries": NamedNode;
    /*A video file.*/
    "VideoObject": NamedNode;
    /*The act of consuming static visual content.*/
    "ViewAction": NamedNode;
    /*VinylFormat.*/
    "VinylFormat": NamedNode;
    /*Event type: Visual arts event.*/
    "VisualArtsEvent": NamedNode;
    /*A work of art that is primarily visual in character.*/
    "VisualArtwork": NamedNode;
    /*A volcano, like Fuji san.*/
    "Volcano": NamedNode;
    /*The act of expressing a preference from a fixed/finite/structured set of choices/options.*/
    "VoteAction": NamedNode;
    /*An advertising section of the page.*/
    "WPAdBlock": NamedNode;
    /*The footer section of the page.*/
    "WPFooter": NamedNode;
    /*The header section of the page.*/
    "WPHeader": NamedNode;
    /*A sidebar section of the page.*/
    "WPSideBar": NamedNode;
    /*The act of expressing a desire about the object. An agent wants an object.*/
    "WantAction": NamedNode;
    /*A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.*/
    "WarrantyPromise": NamedNode;
    /*A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.<br/><br/>
    
    Commonly used values:<br/><br/>
    
    <ul>
    <li>http://purl.org/goodrelations/v1#Labor-BringIn</li>
    <li>http://purl.org/goodrelations/v1#PartsAndLabor-BringIn</li>
    <li>http://purl.org/goodrelations/v1#PartsAndLabor-PickUp</li>
    </ul>
    */
    "WarrantyScope": NamedNode;
    /*The act of consuming dynamic/moving visual content.*/
    "WatchAction": NamedNode;
    /*A waterfall, like Niagara.*/
    "Waterfall": NamedNode;
    /*The act of dressing oneself in clothing.*/
    "WearAction": NamedNode;
    /*Web applications.*/
    "WebApplication": NamedNode;
    /*A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as <code>breadcrumb</code> may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.*/
    "WebPage": NamedNode;
    /*A web page element, like a table or an image.*/
    "WebPageElement": NamedNode;
    /*A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.*/
    "WebSite": NamedNode;
    /*The day of the week between Tuesday and Thursday.*/
    "Wednesday": NamedNode;
    /*A wholesale store.*/
    "WholesaleStore": NamedNode;
    /*The act of achieving victory in a competitive activity.*/
    "WinAction": NamedNode;
    /*A winery.*/
    "Winery": NamedNode;
    /*A Workers Union (also known as a Labor Union, Labour Union, or Trade Union) is an organization that promotes the interests of its worker members by collectively bargaining with management, organizing, and political lobbying.*/
    "WorkersUnion": NamedNode;
    /*The act of authoring written creative content.*/
    "WriteAction": NamedNode;
    /*Permission to write or edit the document.*/
    "WritePermission": NamedNode;
    /*The airline boards by zones of the plane.*/
    "ZoneBoardingPolicy": NamedNode;
    /*A zoo.*/
    "Zoo": NamedNode;
    /*The subject matter of the content.*/
    "about": NamedNode;
    /*The answer(s) that has been accepted as best, typically on a Question/Answer site. Sites vary in their selection mechanisms, e.g. drawing on community opinion and/or the view of the Question author.*/
    "acceptedAnswer": NamedNode;
    /*The offer(s) -- e.g., product, quantity and price combinations -- included in the order.*/
    "acceptedOffer": NamedNode;
    /*The payment method(s) accepted by seller for this offer.*/
    "acceptedPaymentMethod": NamedNode;
    /*Indicates whether a FoodEstablishment accepts reservations. Values can be Boolean, an URL at which reservations can be made or (for backwards compatibility) the strings <code>Yes</code> or <code>No</code>.*/
    "acceptsReservations": NamedNode;
    /*Password, PIN, or access code needed for delivery (e.g. from a locker).*/
    "accessCode": NamedNode;
    /*The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Expected values include: auditory, tactile, textual, visual, colorDependent, chartOnVisual, chemOnVisual, diagramOnVisual, mathOnVisual, musicOnVisual, textOnVisual.*/
    "accessMode": NamedNode;
    /*A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Expected values include:  auditory, tactile, textual, visual.*/
    "accessModeSufficient": NamedNode;
    /*Indicates that the resource is compatible with the referenced accessibility API (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).*/
    "accessibilityAPI": NamedNode;
    /*Identifies input methods that are sufficient to fully control the described resource (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).*/
    "accessibilityControl": NamedNode;
    /*Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).*/
    "accessibilityFeature": NamedNode;
    /*A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3 (<a href="http://www.w3.org/wiki/WebSchemas/Accessibility">WebSchemas wiki lists possible values</a>).*/
    "accessibilityHazard": NamedNode;
    /*A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."*/
    "accessibilitySummary": NamedNode;
    /*The identifier for the account the payment will be applied to.*/
    "accountId": NamedNode;
    /*Specifies the Person that is legally accountable for the CreativeWork.*/
    "accountablePerson": NamedNode;
    /*The organization or person from which the product was acquired.*/
    "acquiredFrom": NamedNode;
    /*A set of requirements that a must be fulfilled in order to perform an Action. If more than one value is specied, fulfilling one set of requirements will allow the Action to be performed.*/
    "actionAccessibilityRequirement": NamedNode;
    /*An application that can complete the request.*/
    "actionApplication": NamedNode;
    /*A sub property of object. The options subject to this action.*/
    "actionOption": NamedNode;
    /*The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.*/
    "actionPlatform": NamedNode;
    /*Indicates the current disposition of the Action.*/
    "actionStatus": NamedNode;
    /*An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.*/
    "actor": NamedNode;
    /*An actor, e.g. in tv, radio, movie, video games etc. Actors can be associated with individual items or with a series, episode, clip.*/
    "actors": NamedNode;
    /*An additional offer that can only be obtained in combination with the first base offer (e.g. supplements and extensions that are available for a surcharge).*/
    "addOn": NamedNode;
    /*An additional name for a Person, can be used for a middle name.*/
    "additionalName": NamedNode;
    /*If responding yes, the number of guests who will attend in addition to the invitee.*/
    "additionalNumberOfGuests": NamedNode;
    /*A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.<br/><br/>
    
    Note: Publishers should be aware that applications designed to use specific schema.org properties (e.g. http://schema.org/width, http://schema.org/color, http://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.*/
    "additionalProperty": NamedNode;
    /*An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.*/
    "additionalType": NamedNode;
    /*Physical address of the item.*/
    "address": NamedNode;
    /*The country. For example, USA. You can also provide the two-letter <a href="http://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166-1 alpha-2 country code</a>.*/
    "addressCountry": NamedNode;
    /*The locality in which the street address is, and which is in the region. For example, Mountain View.*/
    "addressLocality": NamedNode;
    /*The region in which the locality is, and which is in the country. For example, California or another appropriate first-level <a href="https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country">Administrative division</a>*/
    "addressRegion": NamedNode;
    /*The amount of time that is required between accepting the offer and the actual usage of the resource or service.*/
    "advanceBookingRequirement": NamedNode;
    /*An organization that this person is affiliated with. For example, a school/university, a club, or a team.*/
    "affiliation": NamedNode;
    /*A media object representing the circumstances after performing this direction.*/
    "afterMedia": NamedNode;
    /*The direct performer or driver of the action (animate or inanimate). e.g. <em>John</em> wrote a book.*/
    "agent": NamedNode;
    /*The overall rating, based on a collection of reviews or ratings, of the item.*/
    "aggregateRating": NamedNode;
    /*The kind of aircraft (e.g., "Boeing 747").*/
    "aircraft": NamedNode;
    /*A music album.*/
    "album": NamedNode;
    /*Classification of the album by it's type of content: soundtrack, live album, studio album, etc.*/
    "albumProductionType": NamedNode;
    /*A release of this album.*/
    "albumRelease": NamedNode;
    /*The kind of release which this album is: single, EP or album.*/
    "albumReleaseType": NamedNode;
    /*A collection of music albums.*/
    "albums": NamedNode;
    /*A category of alignment between the learning resource and the framework node. Recommended values include: 'assesses', 'teaches', 'requires', 'textComplexity', 'readingLevel', 'educationalSubject', and 'educationalLevel'.*/
    "alignmentType": NamedNode;
    /*An alias for the item.*/
    "alternateName": NamedNode;
    /*A secondary title of the CreativeWork.*/
    "alternativeHeadline": NamedNode;
    /*Alumni of an organization.*/
    "alumni": NamedNode;
    /*An organization that the person is an alumni of.*/
    "alumniOf": NamedNode;
    /*An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.*/
    "amenityFeature": NamedNode;
    /*The amount of money.*/
    "amount": NamedNode;
    /*The quantity of the goods included in the offer.*/
    "amountOfThisGood": NamedNode;
    /*The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.*/
    "annualPercentageRate": NamedNode;
    /*The number of answers this question has received.*/
    "answerCount": NamedNode;
    /*An application that can complete the request.*/
    "application": NamedNode;
    /*Type of software application, e.g. 'Game, Multimedia'.*/
    "applicationCategory": NamedNode;
    /*Subcategory of the application, e.g. 'Arcade Game'.*/
    "applicationSubCategory": NamedNode;
    /*The name of the application suite to which the application belongs (e.g. Excel belongs to Office).*/
    "applicationSuite": NamedNode;
    /*The delivery method(s) to which the delivery charge or payment charge specification applies.*/
    "appliesToDeliveryMethod": NamedNode;
    /*The payment method(s) to which the payment charge specification applies.*/
    "appliesToPaymentMethod": NamedNode;
    /*The area within which users can expect to reach the broadcast service.*/
    "area": NamedNode;
    /*The geographic area where a service or offered item is provided.*/
    "areaServed": NamedNode;
    /*The airport where the flight terminates.*/
    "arrivalAirport": NamedNode;
    /*The stop or station from which the bus arrives.*/
    "arrivalBusStop": NamedNode;
    /*Identifier of the flight's arrival gate.*/
    "arrivalGate": NamedNode;
    /*The platform where the train arrives.*/
    "arrivalPlatform": NamedNode;
    /*The station where the train trip ends.*/
    "arrivalStation": NamedNode;
    /*Identifier of the flight's arrival terminal.*/
    "arrivalTerminal": NamedNode;
    /*The expected arrival time.*/
    "arrivalTime": NamedNode;
    /*The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example "20").*/
    "artEdition": NamedNode;
    /*The material used. (e.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)*/
    "artMedium": NamedNode;
    /*e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.*/
    "artform": NamedNode;
    /*The actual body of the article.*/
    "articleBody": NamedNode;
    /*Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.*/
    "articleSection": NamedNode;
    /*The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc.*/
    "artworkSurface": NamedNode;
    /*Library file name e.g., mscorlib.dll, system.web.dll.*/
    "assembly": NamedNode;
    /*Associated product/technology version. e.g., .NET Framework 4.5.*/
    "assemblyVersion": NamedNode;
    /*A NewsArticle associated with the Media Object.*/
    "associatedArticle": NamedNode;
    /*A media object that encodes this CreativeWork. This property is a synonym for encoding.*/
    "associatedMedia": NamedNode;
    /*A person that acts as performing member of a sports team; a player as opposed to a coach.*/
    "athlete": NamedNode;
    /*A person or organization attending the event.*/
    "attendee": NamedNode;
    /*A person attending the event.*/
    "attendees": NamedNode;
    /*An intended audience, i.e. a group for whom something was created.*/
    "audience": NamedNode;
    /*The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).*/
    "audienceType": NamedNode;
    /*An embedded audio object.*/
    "audio": NamedNode;
    /*The Organization responsible for authenticating the user's subscription. For example, many media apps require a cable/satellite provider to authenticate your subscription before playing media.*/
    "authenticator": NamedNode;
    /*The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.*/
    "author": NamedNode;
    /*The availability of this item&#x2014;for example In stock, Out of stock, Pre-order, etc.*/
    "availability": NamedNode;
    /*The end of the availability of the product or service included in the offer.*/
    "availabilityEnds": NamedNode;
    /*The beginning of the availability of the product or service included in the offer.*/
    "availabilityStarts": NamedNode;
    /*The place(s) from which the offer can be obtained (e.g. store locations).*/
    "availableAtOrFrom": NamedNode;
    /*A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).*/
    "availableChannel": NamedNode;
    /*The delivery method(s) available for this offer.*/
    "availableDeliveryMethod": NamedNode;
    /*When the item is available for pickup from the store, locker, etc.*/
    "availableFrom": NamedNode;
    /*A language someone may use with or at the item, service or place. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="http://schema.org/inLanguage">inLanguage</a>*/
    "availableLanguage": NamedNode;
    /*Device required to run the application. Used in cases where a specific make/model is required to run the application.*/
    "availableOnDevice": NamedNode;
    /*After this date, the item will no longer be available for pickup.*/
    "availableThrough": NamedNode;
    /*An award won by or for this item.*/
    "award": NamedNode;
    /*Awards won by or for this item.*/
    "awards": NamedNode;
    /*The away team in a sports event.*/
    "awayTeam": NamedNode;
    /*The base salary of the job or of an employee in an EmployeeRole.*/
    "baseSalary": NamedNode;
    /*A sub property of recipient. The recipient blind copied on a message.*/
    "bccRecipient": NamedNode;
    /*The type of bed or beds included in the accommodation. For the single case of just one bed of a certain type, you use bed directly with a text.
          If you want to indicate the quantity of a certain kind of bed, use an instance of BedDetails. For more detailed information, use the amenityFeature property.*/
    "bed": NamedNode;
    /*A media object representing the circumstances before performing this direction.*/
    "beforeMedia": NamedNode;
    /*Description of benefits associated with the job.*/
    "benefits": NamedNode;
    /*The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.*/
    "bestRating": NamedNode;
    /*The billing address for the order.*/
    "billingAddress": NamedNode;
    /*This property specifies the minimal quantity and rounding increment that will be the basis for the billing. The unit of measurement is specified by the unitCode property.*/
    "billingIncrement": NamedNode;
    /*The time interval used to compute the invoice.*/
    "billingPeriod": NamedNode;
    /*Date of birth.*/
    "birthDate": NamedNode;
    /*The place where the person was born.*/
    "birthPlace": NamedNode;
    /*The bitrate of the media object.*/
    "bitrate": NamedNode;
    /*A posting that is part of this blog.*/
    "blogPost": NamedNode;
    /*The postings that are part of this blog.*/
    "blogPosts": NamedNode;
    /*The airline-specific indicator of boarding order / preference.*/
    "boardingGroup": NamedNode;
    /*The type of boarding policy used by the airline (e.g. zone-based or group-based).*/
    "boardingPolicy": NamedNode;
    /*The edition of the book.*/
    "bookEdition": NamedNode;
    /*The format of the book.*/
    "bookFormat": NamedNode;
    /*'bookingAgent' is an out-dated term indicating a 'broker' that serves as a booking agent.*/
    "bookingAgent": NamedNode;
    /*The date and time the reservation was booked.*/
    "bookingTime": NamedNode;
    /*A sub property of participant. The person that borrows the object being lent.*/
    "borrower": NamedNode;
    /*A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.*/
    "box": NamedNode;
    /*A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.<br/><br/>
    
    For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.*/
    "branchCode": NamedNode;
    /*The larger organization that this local business is a branch of, if any. Not to be confused with (anatomical)<a class="localLink" href="http://schema.org/branch">branch</a>.*/
    "branchOf": NamedNode;
    /*The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.*/
    "brand": NamedNode;
    /*A set of links that can help a user understand and navigate a website hierarchy.*/
    "breadcrumb": NamedNode;
    /*The media network(s) whose content is broadcast on this station.*/
    "broadcastAffiliateOf": NamedNode;
    /*The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.*/
    "broadcastChannelId": NamedNode;
    /*The name displayed in the channel guide. For many US affiliates, it is the network name.*/
    "broadcastDisplayName": NamedNode;
    /*The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".*/
    "broadcastFrequency": NamedNode;
    /*The frequency in MHz for a particular broadcast.*/
    "broadcastFrequencyValue": NamedNode;
    /*The event being broadcast such as a sporting event or awards ceremony.*/
    "broadcastOfEvent": NamedNode;
    /*The type of service required to have access to the channel (e.g. Standard or Premium).*/
    "broadcastServiceTier": NamedNode;
    /*The timezone in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a> for which the service bases its broadcasts*/
    "broadcastTimezone": NamedNode;
    /*The organization owning or operating the broadcast service.*/
    "broadcaster": NamedNode;
    /*An entity that arranges for an exchange between a buyer and a seller.  In most cases a broker never acquires or releases ownership of a product or service involved in an exchange.  If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.*/
    "broker": NamedNode;
    /*Specifies browser requirements in human-readable text. For example, 'requires HTML5 support'.*/
    "browserRequirements": NamedNode;
    /*The name of the bus (e.g. Bolt Express).*/
    "busName": NamedNode;
    /*The unique identifier for the bus.*/
    "busNumber": NamedNode;
    /*The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.*/
    "businessFunction": NamedNode;
    /*A sub property of participant. The participant/person/organization that bought the object.*/
    "buyer": NamedNode;
    /*The artist that performed this album or recording.*/
    "byArtist": NamedNode;
    /*The number of calories.*/
    "calories": NamedNode;
    /*A sub property of object. The candidate subject of this action.*/
    "candidate": NamedNode;
    /*The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the <a class="localLink" href="http://schema.org/encodingFormat">encodingFormat</a>.*/
    "caption": NamedNode;
    /*The number of grams of carbohydrates.*/
    "carbohydrateContent": NamedNode;
    /*The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.<br/><br/>
    
    Typical unit code(s): LTR for liters, FTQ for cubic foot/feet<br/><br/>
    
    Note: You can use <a class="localLink" href="http://schema.org/minValue">minValue</a> and <a class="localLink" href="http://schema.org/maxValue">maxValue</a> to indicate ranges.*/
    "cargoVolume": NamedNode;
    /*'carrier' is an out-dated term indicating the 'provider' for parcel delivery and flights.*/
    "carrier": NamedNode;
    /*Specifies specific carrier(s) requirements for the application (e.g. an application may only work on a specific carrier network).*/
    "carrierRequirements": NamedNode;
    /*A data catalog which contains this dataset.*/
    "catalog": NamedNode;
    /*The catalog number for the release.*/
    "catalogNumber": NamedNode;
    /*A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.*/
    "category": NamedNode;
    /*A sub property of recipient. The recipient copied on a message.*/
    "ccRecipient": NamedNode;
    /*Fictional person connected with a creative work.*/
    "character": NamedNode;
    /*A piece of data that represents a particular aspect of a fictional character (skill, power, character points, advantage, disadvantage).*/
    "characterAttribute": NamedNode;
    /*The name of a character played in some acting or performing role, i.e. in a PerformanceRole.*/
    "characterName": NamedNode;
    /*Cheat codes to the game.*/
    "cheatCode": NamedNode;
    /*The earliest someone may check into a lodging establishment.*/
    "checkinTime": NamedNode;
    /*The latest someone may check out of a lodging establishment.*/
    "checkoutTime": NamedNode;
    /*Maximal age of the child.*/
    "childMaxAge": NamedNode;
    /*Minimal age of the child.*/
    "childMinAge": NamedNode;
    /*A child of the person.*/
    "children": NamedNode;
    /*The number of milligrams of cholesterol.*/
    "cholesterolContent": NamedNode;
    /*A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.*/
    "circle": NamedNode;
    /*A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.*/
    "citation": NamedNode;
    /*A short summary of the specific claims reviewed in a ClaimReview.*/
    "claimReviewed": NamedNode;
    /*Position of the clip within an ordered group of clips.*/
    "clipNumber": NamedNode;
    /*The closing hour of the place or service on the given day(s) of the week.*/
    "closes": NamedNode;
    /*A person that acts in a coaching role for a sports team.*/
    "coach": NamedNode;
    /*Link to the repository where the un-compiled, human readable code and related code is located (SVN, github, CodePlex).*/
    "codeRepository": NamedNode;
    /*What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.*/
    "codeSampleType": NamedNode;
    /*A colleague of the person.*/
    "colleague": NamedNode;
    /*A colleague of the person.*/
    "colleagues": NamedNode;
    /*A sub property of object. The collection target of the action.*/
    "collection": NamedNode;
    /*The color of the product.*/
    "color": NamedNode;
    /*Comments, typically from users.*/
    "comment": NamedNode;
    /*The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.*/
    "commentCount": NamedNode;
    /*The text of the UserComment.*/
    "commentText": NamedNode;
    /*The time at which the UserComment was made.*/
    "commentTime": NamedNode;
    /*A competitor in a sports event.*/
    "competitor": NamedNode;
    /*The person or organization who wrote a composition, or who is the composer of a work performed at some event.*/
    "composer": NamedNode;
    /*A number that confirms the given order or payment has been received.*/
    "confirmationNumber": NamedNode;
    /*An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).*/
    "contactOption": NamedNode;
    /*A contact point for a person or organization.*/
    "contactPoint": NamedNode;
    /*A contact point for a person or organization.*/
    "contactPoints": NamedNode;
    /*A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.*/
    "contactType": NamedNode;
    /*The basic containment relation between a place and one that contains it.*/
    "containedIn": NamedNode;
    /*The basic containment relation between a place and one that contains it.*/
    "containedInPlace": NamedNode;
    /*The basic containment relation between a place and another that it contains.*/
    "containsPlace": NamedNode;
    /*A season that is part of the media series.*/
    "containsSeason": NamedNode;
    /*The location depicted or described in the content. For example, the location in a photograph or painting.*/
    "contentLocation": NamedNode;
    /*Official rating of a piece of content&#x2014;for example,'MPAA PG-13'.*/
    "contentRating": NamedNode;
    /*File size in (mega/kilo) bytes.*/
    "contentSize": NamedNode;
    /*The supported content type(s) for an EntryPoint response.*/
    "contentType": NamedNode;
    /*Actual bytes of the media object, for example the image file or video file.*/
    "contentUrl": NamedNode;
    /*A secondary contributor to the CreativeWork or Event.*/
    "contributor": NamedNode;
    /*The time it takes to actually cook the dish, in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.*/
    "cookTime": NamedNode;
    /*The method of cooking, such as Frying, Steaming, ...*/
    "cookingMethod": NamedNode;
    /*The party holding the legal copyright to the CreativeWork.*/
    "copyrightHolder": NamedNode;
    /*The year during which the claimed copyright for the CreativeWork was first asserted.*/
    "copyrightYear": NamedNode;
    /*Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.*/
    "countriesNotSupported": NamedNode;
    /*Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.*/
    "countriesSupported": NamedNode;
    /*The country of the principal offices of the production company or individual responsible for the movie or program.*/
    "countryOfOrigin": NamedNode;
    /*A sub property of location. The course where this action was taken.*/
    "course": NamedNode;
    /*The identifier for the <a class="localLink" href="http://schema.org/Course">Course</a> used by the course <a class="localLink" href="http://schema.org/provider">provider</a> (e.g. CS101 or 6.001).*/
    "courseCode": NamedNode;
    /*The medium or means of delivery of the course instance or the mode of study, either as a text label (e.g. "online", "onsite" or "blended"; "synchronous" or "asynchronous"; "full-time" or "part-time") or as a URL reference to a term from a controlled vocabulary (e.g. https://ceds.ed.gov/element/001311#Asynchronous ).*/
    "courseMode": NamedNode;
    /*Requirements for taking the Course. May be completion of another <a class="localLink" href="http://schema.org/Course">Course</a> or a textual description like "permission of instructor". Requirements may be a pre-requisite competency, referenced using <a class="localLink" href="http://schema.org/AlignmentObject">AlignmentObject</a>.*/
    "coursePrerequisites": NamedNode;
    /*The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.*/
    "coverageEndTime": NamedNode;
    /*The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.*/
    "coverageStartTime": NamedNode;
    /*The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.*/
    "creator": NamedNode;
    /*The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.*/
    "creditedTo": NamedNode;
    /*A CSS selector, e.g. of a <a class="localLink" href="http://schema.org/SpeakableSpecification">SpeakableSpecification</a> or <a class="localLink" href="http://schema.org/WebPageElement">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".*/
    "cssSelector": NamedNode;
    /*The currency accepted.<br/><br/>
    
    Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".*/
    "currenciesAccepted": NamedNode;
    /*The currency in which the monetary amount is expressed.<br/><br/>
    
    Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".*/
    "currency": NamedNode;
    /*Party placing the order or paying the invoice.*/
    "customer": NamedNode;
    /*An item within in a data feed. Data feeds may have many elements.*/
    "dataFeedElement": NamedNode;
    /*A dataset contained in this catalog.*/
    "dataset": NamedNode;
    /*The range of temporal applicability of a dataset, e.g. for a 2011 census dataset, the year 2011 (in ISO 8601 time interval format).*/
    "datasetTimeInterval": NamedNode;
    /*The date on which the CreativeWork was created or the item was added to a DataFeed.*/
    "dateCreated": NamedNode;
    /*The datetime the item was removed from the DataFeed.*/
    "dateDeleted": NamedNode;
    /*The date the ticket was issued.*/
    "dateIssued": NamedNode;
    /*The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.*/
    "dateModified": NamedNode;
    /*Publication date of an online listing.*/
    "datePosted": NamedNode;
    /*Date of first broadcast/publication.*/
    "datePublished": NamedNode;
    /*The date/time at which the message has been read by the recipient if a single recipient exists.*/
    "dateRead": NamedNode;
    /*The date/time the message was received if a single recipient exists.*/
    "dateReceived": NamedNode;
    /*The date/time at which the message was sent.*/
    "dateSent": NamedNode;
    /*The date of the first registration of the vehicle with the respective public authorities.*/
    "dateVehicleFirstRegistered": NamedNode;
    /*A <a href="https://en.wikipedia.org/wiki/Dateline">dateline</a> is a brief piece of text included in news articles that describes where and when the story was written or filed though the date is often omitted. Sometimes only a placename is provided.<br/><br/>
    
    Structured representations of dateline-related information can also be expressed more explicitly using <a class="localLink" href="http://schema.org/locationCreated">locationCreated</a> (which represents where a work was created e.g. where a news report was written).  For location depicted or described in the content, use <a class="localLink" href="http://schema.org/contentLocation">contentLocation</a>.<br/><br/>
    
    Dateline summaries are oriented more towards human readers than towards automated processing, and can vary substantially. Some examples: "BEIRUT, Lebanon, June 2.", "Paris, France", "December 19, 2017 11:43AM Reporting from Washington", "Beijing/Moscow", "QUEZON CITY, Philippines".*/
    "dateline": NamedNode;
    /*The day of the week for which these opening hours are valid.*/
    "dayOfWeek": NamedNode;
    /*Date of death.*/
    "deathDate": NamedNode;
    /*The place where the person died.*/
    "deathPlace": NamedNode;
    /*The default value of the input.  For properties that expect a literal, the default is a literal value, for properties that expect an object, it's an ID reference to one of the current values.*/
    "defaultValue": NamedNode;
    /*Destination address.*/
    "deliveryAddress": NamedNode;
    /*The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.*/
    "deliveryLeadTime": NamedNode;
    /*A sub property of instrument. The method of delivery.*/
    "deliveryMethod": NamedNode;
    /*New entry added as the package passes through each leg of its journey (from shipment to final delivery).*/
    "deliveryStatus": NamedNode;
    /*A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.*/
    "department": NamedNode;
    /*The airport where the flight originates.*/
    "departureAirport": NamedNode;
    /*The stop or station from which the bus departs.*/
    "departureBusStop": NamedNode;
    /*Identifier of the flight's departure gate.*/
    "departureGate": NamedNode;
    /*The platform from which the train departs.*/
    "departurePlatform": NamedNode;
    /*The station from which the train departs.*/
    "departureStation": NamedNode;
    /*Identifier of the flight's departure terminal.*/
    "departureTerminal": NamedNode;
    /*The expected departure time.*/
    "departureTime": NamedNode;
    /*Prerequisites needed to fulfill steps in article.*/
    "dependencies": NamedNode;
    /*The depth of the item.*/
    "depth": NamedNode;
    /*A description of the item.*/
    "description": NamedNode;
    /*Device required to run the application. Used in cases where a specific make/model is required to run the application.*/
    "device": NamedNode;
    /*A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.*/
    "director": NamedNode;
    /*A director of e.g. tv, radio, movie, video games etc. content. Directors can be associated with individual items or with a series, episode, clip.*/
    "directors": NamedNode;
    /*A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.*/
    "disambiguatingDescription": NamedNode;
    /*Any discount applied (to an Order).*/
    "discount": NamedNode;
    /*Code used to redeem a discount.*/
    "discountCode": NamedNode;
    /*The currency of the discount.<br/><br/>
    
    Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".*/
    "discountCurrency": NamedNode;
    /*Specifies the CreativeWork associated with the UserComment.*/
    "discusses": NamedNode;
    /*A link to the page containing the comments of the CreativeWork.*/
    "discussionUrl": NamedNode;
    /*The date that this organization was dissolved.*/
    "dissolutionDate": NamedNode;
    /*The distance travelled, e.g. exercising or travelling.*/
    "distance": NamedNode;
    /*A downloadable form of this dataset, at a specific location, in a specific format.*/
    "distribution": NamedNode;
    /*The time admission will commence.*/
    "doorTime": NamedNode;
    /*If the file can be downloaded, URL to download the binary.*/
    "downloadUrl": NamedNode;
    /*The number of downvotes this question, answer or comment has received from the community.*/
    "downvoteCount": NamedNode;
    /*The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.*/
    "driveWheelConfiguration": NamedNode;
    /*Where a rental car can be dropped off.*/
    "dropoffLocation": NamedNode;
    /*When a rental car can be dropped off.*/
    "dropoffTime": NamedNode;
    /*The Dun &amp; Bradstreet DUNS number for identifying an organization or business person.*/
    "duns": NamedNode;
    /*The duration of the item (movie, audio recording, event, etc.) in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>.*/
    "duration": NamedNode;
    /*The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.*/
    "durationOfWarranty": NamedNode;
    /*A media object representing the circumstances while performing this direction.*/
    "duringMedia": NamedNode;
    /*Specifies the Person who edited the CreativeWork.*/
    "editor": NamedNode;
    /*An alignment to an established educational framework.*/
    "educationalAlignment": NamedNode;
    /*A description of the qualification, award, certificate, diploma or other educational credential awarded as a consequence of successful completion of this course or program.*/
    "educationalCredentialAwarded": NamedNode;
    /*The framework to which the resource being described is aligned.*/
    "educationalFramework": NamedNode;
    /*An educationalRole of an EducationalAudience.*/
    "educationalRole": NamedNode;
    /*The purpose of a work in the context of education; for example, 'assignment', 'group work'.*/
    "educationalUse": NamedNode;
    /*The elevation of a location (<a href="https://en.wikipedia.org/wiki/World_Geodetic_System">WGS 84</a>). Values may be of the form 'NUMBER UNIT<em>OF</em>MEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.*/
    "elevation": NamedNode;
    /*The type(s) of customers for which the given offer is valid.*/
    "eligibleCustomerType": NamedNode;
    /*The duration for which the given offer is valid.*/
    "eligibleDuration": NamedNode;
    /*The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.*/
    "eligibleQuantity": NamedNode;
    /*The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.<br/><br/>
    
    See also <a class="localLink" href="http://schema.org/ineligibleRegion">ineligibleRegion</a>.*/
    "eligibleRegion": NamedNode;
    /*The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.*/
    "eligibleTransactionVolume": NamedNode;
    /*Email address.*/
    "email": NamedNode;
    /*A URL pointing to a player for a specific video. In general, this is the information in the <code>src</code> element of an <code>embed</code> tag and should not be the same as the content of the <code>loc</code> tag.*/
    "embedUrl": NamedNode;
    /*Someone working for this organization.*/
    "employee": NamedNode;
    /*People working for this organization.*/
    "employees": NamedNode;
    /*Type of employment (e.g. full-time, part-time, contract, temporary, seasonal, internship).*/
    "employmentType": NamedNode;
    /*The CreativeWork encoded by this media object.*/
    "encodesCreativeWork": NamedNode;
    /*A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.*/
    "encoding": NamedNode;
    /*Media type typically expressed using a MIME format (see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">IANA site</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types">MDN reference</a>) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).<br/><br/>
    
    In cases where a <a class="localLink" href="http://schema.org/CreativeWork">CreativeWork</a> has several media type representations, <a class="localLink" href="http://schema.org/encoding">encoding</a> can be used to indicate each <a class="localLink" href="http://schema.org/MediaObject">MediaObject</a> alongside particular <a class="localLink" href="http://schema.org/encodingFormat">encodingFormat</a> information.<br/><br/>
    
    Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.*/
    "encodingFormat": NamedNode;
    /*The supported encoding type(s) for an EntryPoint request.*/
    "encodingType": NamedNode;
    /*A media object that encodes this CreativeWork.*/
    "encodings": NamedNode;
    /*The end date and time of the item (in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>).*/
    "endDate": NamedNode;
    /*The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to <em>December</em>. For media, including audio and video, it's the time offset of the end of a clip within a larger file.<br/><br/>
    
    Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.*/
    "endTime": NamedNode;
    /*A sub property of participant. The person/organization being supported.*/
    "endorsee": NamedNode;
    /*A sub property of location. The entertainment business where the action occurred.*/
    "entertainmentBusiness": NamedNode;
    /*An episode of a tv, radio or game media within a series or season.*/
    "episode": NamedNode;
    /*Position of the episode within an ordered group of episodes.*/
    "episodeNumber": NamedNode;
    /*An episode of a TV/radio series or season.*/
    "episodes": NamedNode;
    /*This ordering relation for qualitative values indicates that the subject is equal to the object.*/
    "equal": NamedNode;
    /*For failed actions, more information on the cause of the failure.*/
    "error": NamedNode;
    /*The estimated cost of the supply or supplies consumed when performing instructions.*/
    "estimatedCost": NamedNode;
    /*The estimated time the flight will take.*/
    "estimatedFlightDuration": NamedNode;
    /*An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries  are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.*/
    "estimatedSalary": NamedNode;
    /*Upcoming or past event associated with this place, organization, or action.*/
    "event": NamedNode;
    /*An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.*/
    "eventStatus": NamedNode;
    /*Upcoming or past events associated with this place or organization.*/
    "events": NamedNode;
    /*A creative work that this work is an example/instance/realization/derivation of.*/
    "exampleOfWork": NamedNode;
    /*Library file name e.g., mscorlib.dll, system.web.dll.*/
    "executableLibraryName": NamedNode;
    /*A sub property of location. The course where this action was taken.*/
    "exerciseCourse": NamedNode;
    /*exif data for this object.*/
    "exifData": NamedNode;
    /*The earliest date the package may arrive.*/
    "expectedArrivalFrom": NamedNode;
    /*The latest date the package may arrive.*/
    "expectedArrivalUntil": NamedNode;
    /*An Offer which must be accepted before the user can perform the Action. For example, the user may need to buy a movie before being able to watch it.*/
    "expectsAcceptanceOf": NamedNode;
    /*Description of skills and experience needed for the position or Occupation.*/
    "experienceRequirements": NamedNode;
    /*Date the content expires and is no longer useful or available. For example a <a class="localLink" href="http://schema.org/VideoObject">VideoObject</a> or <a class="localLink" href="http://schema.org/NewsArticle">NewsArticle</a> whose availability or relevance is time-limited, or a <a class="localLink" href="http://schema.org/ClaimReview">ClaimReview</a> fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.*/
    "expires": NamedNode;
    /*Family name. In the U.S., the last name of an Person. This can be used along with givenName instead of the name property.*/
    "familyName": NamedNode;
    /*The number of grams of fat.*/
    "fatContent": NamedNode;
    /*The fax number.*/
    "faxNumber": NamedNode;
    /*Features or modules provided by this application (and possibly required by other applications).*/
    "featureList": NamedNode;
    /*Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.*/
    "feesAndCommissionsSpecification": NamedNode;
    /*The number of grams of fiber.*/
    "fiberContent": NamedNode;
    /*Media type, typically MIME format (see <a href="http://www.iana.org/assignments/media-types/media-types.xhtml">IANA site</a>) of the content e.g. application/zip of a SoftwareApplication binary. In cases where a CreativeWork has several media type representations, 'encoding' can be used to indicate each MediaObject alongside particular fileFormat information. Unregistered or niche file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia entry.*/
    "fileFormat": NamedNode;
    /*Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.*/
    "fileSize": NamedNode;
    /*The date and place the work was first performed.*/
    "firstPerformance": NamedNode;
    /*The distance of the flight.*/
    "flightDistance": NamedNode;
    /*The unique identifier for a flight including the airline IATA code. For example, if describing United flight 110, where the IATA code for United is 'UA', the flightNumber is 'UA110'.*/
    "flightNumber": NamedNode;
    /*The size of the accommodation, e.g. in square meter or squarefoot.
    Typical unit code(s): MTK for square meter, FTK for square foot, or YDK for square yard*/
    "floorSize": NamedNode;
    /*A sub property of object. The person or organization being followed.*/
    "followee": NamedNode;
    /*The most generic uni-directional social relation.*/
    "follows": NamedNode;
    /*A sub property of location. The specific food establishment where the action occurred.*/
    "foodEstablishment": NamedNode;
    /*A sub property of location. The specific food event where the action occurred.*/
    "foodEvent": NamedNode;
    /*A person who founded this organization.*/
    "founder": NamedNode;
    /*A person who founded this organization.*/
    "founders": NamedNode;
    /*The date that this organization was founded.*/
    "foundingDate": NamedNode;
    /*The place where the Organization was founded.*/
    "foundingLocation": NamedNode;
    /*A flag to signal that the item, event, or place is accessible for free.*/
    "free": NamedNode;
    /*A sub property of location. The original location of the object or the agent before the action.*/
    "fromLocation": NamedNode;
    /*The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).<br/><br/>
    
    <ul>
    <li>Note 1: There are unfortunately no standard unit codes for liters per 100 km.  Use <a class="localLink" href="http://schema.org/unitText">unitText</a> to indicate the unit of measurement, e.g. L/100 km.</li>
    <li>Note 2: There are two ways of indicating the fuel consumption, <a class="localLink" href="http://schema.org/fuelConsumption">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class="localLink" href="http://schema.org/fuelEfficiency">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>
    <li>Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use <a class="localLink" href="http://schema.org/valueReference">valueReference</a> to link the value for the fuel consumption to another value.</li>
    </ul>
    */
    "fuelConsumption": NamedNode;
    /*The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).<br/><br/>
    
    <ul>
    <li>Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use <a class="localLink" href="http://schema.org/unitText">unitText</a> to indicate the unit of measurement, e.g. mpg or km/L.</li>
    <li>Note 2: There are two ways of indicating the fuel consumption, <a class="localLink" href="http://schema.org/fuelConsumption">fuelConsumption</a> (e.g. 8 liters per 100 km) and <a class="localLink" href="http://schema.org/fuelEfficiency">fuelEfficiency</a> (e.g. 30 miles per gallon). They are reciprocal.</li>
    <li>Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use <a class="localLink" href="http://schema.org/valueReference">valueReference</a> to link the value for the fuel economy to another value.</li>
    </ul>
    */
    "fuelEfficiency": NamedNode;
    /*The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.*/
    "fuelType": NamedNode;
    /*A person or organization that supports (sponsors) something through some kind of financial contribution.*/
    "funder": NamedNode;
    /*Video game which is played on this server.*/
    "game": NamedNode;
    /*An item is an object within the game world that can be collected by a player or, occasionally, a non-player character.*/
    "gameItem": NamedNode;
    /*Real or fictional location of the game (or part of game).*/
    "gameLocation": NamedNode;
    /*The electronic systems used to play <a href="http://en.wikipedia.org/wiki/Category:Video_game_platforms">video games</a>.*/
    "gamePlatform": NamedNode;
    /*The server on which  it is possible to play the game.*/
    "gameServer": NamedNode;
    /*Links to tips, tactics, etc.*/
    "gameTip": NamedNode;
    /*Genre of the creative work, broadcast channel or group.*/
    "genre": NamedNode;
    /*The geo coordinates of the place.*/
    "geo": NamedNode;
    /*Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoContains": NamedNode;
    /*Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoCoveredBy": NamedNode;
    /*Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoCovers": NamedNode;
    /*Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoCrosses": NamedNode;
    /*Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>)*/
    "geoDisjoint": NamedNode;
    /*Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)*/
    "geoEquals": NamedNode;
    /*Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoIntersects": NamedNode;
    /*Indicates the GeoCoordinates at the centre of a GeoShape e.g. GeoCircle.*/
    "geoMidpoint": NamedNode;
    /*Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoOverlaps": NamedNode;
    /*Indicates the approximate radius of a GeoCircle (metres unless indicated otherwise via Distance notation).*/
    "geoRadius": NamedNode;
    /*Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a> )*/
    "geoTouches": NamedNode;
    /*Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in <a href="https://en.wikipedia.org/wiki/DE-9IM">DE-9IM</a>.*/
    "geoWithin": NamedNode;
    /*The geographic area associated with the audience.*/
    "geographicArea": NamedNode;
    /*Given name. In the U.S., the first name of a Person. This can be used along with familyName instead of the name property.*/
    "givenName": NamedNode;
    /*The <a href="http://www.gs1.org/gln">Global Location Number</a> (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.*/
    "globalLocationNumber": NamedNode;
    /*The person, organization, contact point, or audience that has been granted this permission.*/
    "grantee": NamedNode;
    /*This ordering relation for qualitative values indicates that the subject is greater than the object.*/
    "greater": NamedNode;
    /*This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.*/
    "greaterOrEqual": NamedNode;
    /*The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.*/
    "gtin12": NamedNode;
    /*The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceeding zero. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.*/
    "gtin13": NamedNode;
    /*The GTIN-14 code of the product, or the product to which the offer refers. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.*/
    "gtin14": NamedNode;
    /*The <a href="http://apps.gs1.org/GDD/glossary/Pages/GTIN-8.aspx">GTIN-8</a> code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See <a href="http://www.gs1.org/barcodes/technical/idkeys/gtin">GS1 GTIN Summary</a> for more details.*/
    "gtin8": NamedNode;
    /*A broadcast channel of a broadcast service.*/
    "hasBroadcastChannel": NamedNode;
    /*An offering of the course at a specific time and place or through specific media or mode of study or to a specific section of students.*/
    "hasCourseInstance": NamedNode;
    /*Method used for delivery or shipping.*/
    "hasDeliveryMethod": NamedNode;
    /*A permission related to the access to this document (e.g. permission to read or write an electronic document). For a public document, specify a grantee with an Audience with audienceType equal to "public".*/
    "hasDigitalDocumentPermission": NamedNode;
    /*A URL to a map of the place.*/
    "hasMap": NamedNode;
    /*Either the actual menu as a structured representation, as text, or a URL of the menu.*/
    "hasMenu": NamedNode;
    /*A food or drink item contained in a menu or menu section.*/
    "hasMenuItem": NamedNode;
    /*A subgrouping of the menu (by dishes, course, serving time period, etc.).*/
    "hasMenuSection": NamedNode;
    /*The Person's occupation. For past professions, use Role for expressing dates.*/
    "hasOccupation": NamedNode;
    /*Indicates an OfferCatalog listing for this Organization, Person, or Service.*/
    "hasOfferCatalog": NamedNode;
    /*Points-of-Sales operated by the organization or person.*/
    "hasPOS": NamedNode;
    /*Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).*/
    "hasPart": NamedNode;
    /*Headline of the article.*/
    "headline": NamedNode;
    /*The height of the item.*/
    "height": NamedNode;
    /*The highest price of all offers available.<br/><br/>
    
    Usage guidelines:<br/><br/>
    
    <ul>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    </ul>
    */
    "highPrice": NamedNode;
    /*Organization offering the job position.*/
    "hiringOrganization": NamedNode;
    /*A contact location for a person's residence.*/
    "homeLocation": NamedNode;
    /*The home team in a sports event.*/
    "homeTeam": NamedNode;
    /*An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.*/
    "honorificPrefix": NamedNode;
    /*An honorific suffix preceding a Person's name such as M.D. /PhD/MSCSW.*/
    "honorificSuffix": NamedNode;
    /*The organization (airline, travelers' club, etc.) the membership is made with.*/
    "hostingOrganization": NamedNode;
    /*The hours during which this service or contact is available.*/
    "hoursAvailable": NamedNode;
    /*An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.*/
    "httpMethod": NamedNode;
    /*IATA identifier for an airline or airport.*/
    "iataCode": NamedNode;
    /*ICAO identifier for an airport.*/
    "icaoCode": NamedNode;
    /*The identifier property represents any kind of identifier for any kind of <a class="localLink" href="http://schema.org/Thing">Thing</a>, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links. See <a href="/docs/datamodel.html#identifierBg">background notes</a> for more details.*/
    "identifier": NamedNode;
    /*The illustrator of the book.*/
    "illustrator": NamedNode;
    /*An image of the item. This can be a <a class="localLink" href="http://schema.org/URL">URL</a> or a fully described <a class="localLink" href="http://schema.org/ImageObject">ImageObject</a>.*/
    "image": NamedNode;
    /*The album to which this recording belongs.*/
    "inAlbum": NamedNode;
    /*The CableOrSatelliteService offering the channel.*/
    "inBroadcastLineup": NamedNode;
    /*The language of the content or performance or used in an action. Please use one of the language codes from the <a href="http://tools.ietf.org/html/bcp47">IETF BCP 47 standard</a>. See also <a class="localLink" href="http://schema.org/availableLanguage">availableLanguage</a>.*/
    "inLanguage": NamedNode;
    /*The playlist to which this recording belongs.*/
    "inPlaylist": NamedNode;
    /*Description of bonus and commission compensation aspects of the job.*/
    "incentiveCompensation": NamedNode;
    /*Description of bonus and commission compensation aspects of the job.*/
    "incentives": NamedNode;
    /*Smaller compositions included in this work (e.g. a movement in a symphony).*/
    "includedComposition": NamedNode;
    /*A data catalog which contains this dataset (this property was previously 'catalog', preferred name is now 'includedInDataCatalog').*/
    "includedDataCatalog": NamedNode;
    /*A data catalog which contains this dataset.*/
    "includedInDataCatalog": NamedNode;
    /*This links to a node or nodes indicating the exact quantity of the products included in the offer.*/
    "includesObject": NamedNode;
    /*The industry associated with the job position.*/
    "industry": NamedNode;
    /*A single ingredient used in the recipe, e.g. sugar, flour or garlic.*/
    "ingredients": NamedNode;
    /*URL at which the app may be installed, if different from the URL of the item.*/
    "installUrl": NamedNode;
    /*A person assigned to instruct or provide instructional assistance for the <a class="localLink" href="http://schema.org/CourseInstance">CourseInstance</a>.*/
    "instructor": NamedNode;
    /*The object that helped the agent perform the action. e.g. John wrote a book with <em>a pen</em>.*/
    "instrument": NamedNode;
    /*This property is deprecated, alongside the UserInteraction types on which it depended.*/
    "interactionCount": NamedNode;
    /*The WebSite or SoftwareApplication where the interactions took place.*/
    "interactionService": NamedNode;
    /*The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.*/
    "interactionStatistic": NamedNode;
    /*The Action representing the type of interaction. For up votes, +1s, etc. use <a class="localLink" href="http://schema.org/LikeAction">LikeAction</a>. For down votes use <a class="localLink" href="http://schema.org/DislikeAction">DislikeAction</a>. Otherwise, use the most specific Action.*/
    "interactionType": NamedNode;
    /*The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.*/
    "interactivityType": NamedNode;
    /*The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.*/
    "interestRate": NamedNode;
    /*The current approximate inventory level for the item or items.*/
    "inventoryLevel": NamedNode;
    /*A flag to signal that the item, event, or place is accessible for free.*/
    "isAccessibleForFree": NamedNode;
    /*A pointer to another product (or multiple products) for which this product is an accessory or spare part.*/
    "isAccessoryOrSparePartFor": NamedNode;
    /*A resource from which this work is derived or from which it is a modification or adaption.*/
    "isBasedOn": NamedNode;
    /*A resource that was used in the creation of this resource. This term can be repeated for multiple sources. For example, http://example.com/great-multiplication-intro.html.*/
    "isBasedOnUrl": NamedNode;
    /*A pointer to another product (or multiple products) for which this product is a consumable.*/
    "isConsumableFor": NamedNode;
    /*Indicates whether this content is family friendly.*/
    "isFamilyFriendly": NamedNode;
    /*Was the offer accepted as a gift for someone other than the buyer.*/
    "isGift": NamedNode;
    /*True is the broadcast is of a live event.*/
    "isLiveBroadcast": NamedNode;
    /*Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.*/
    "isPartOf": NamedNode;
    /*A pointer to another, somehow related product (or multiple products).*/
    "isRelatedTo": NamedNode;
    /*A pointer to another, functionally similar product (or multiple products).*/
    "isSimilarTo": NamedNode;
    /*A pointer to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive.*/
    "isVariantOf": NamedNode;
    /*The ISBN of the book.*/
    "isbn": NamedNode;
    /*The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.*/
    "isicV4": NamedNode;
    /*The International Standard Recording Code for the recording.*/
    "isrcCode": NamedNode;
    /*The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.*/
    "issn": NamedNode;
    /*Identifies the issue of publication; for example, "iii" or "2".*/
    "issueNumber": NamedNode;
    /*The organization issuing the ticket or permit.*/
    "issuedBy": NamedNode;
    /*The service through with the permit was granted.*/
    "issuedThrough": NamedNode;
    /*The International Standard Musical Work Code for the composition.*/
    "iswcCode": NamedNode;
    /*An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.*/
    "item": NamedNode;
    /*A predefined value from OfferItemCondition or a textual description of the condition of the product or service, or the products or services included in the offer.*/
    "itemCondition": NamedNode;
    /*For itemListElement values, you can use simple strings (e.g. "Peter", "Paul", "Mary"), existing entities, or use ListItem.<br/><br/>
    
    Text values are best if the elements in the list are plain strings. Existing entities are best for a simple, unordered list of existing things in your data. ListItem is used with ordered lists when you want to provide additional context about the element in that list or when the same item might be in different places in different lists.<br/><br/>
    
    Note: The order of elements in your mark-up is not sufficient for indicating the order or elements.  Use ListItem with a 'position' property in such cases.*/
    "itemListElement": NamedNode;
    /*Type of ordering (e.g. Ascending, Descending, Unordered).*/
    "itemListOrder": NamedNode;
    /*An item being offered (or demanded). The transactional nature of the offer or demand is documented using <a class="localLink" href="http://schema.org/businessFunction">businessFunction</a>, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.*/
    "itemOffered": NamedNode;
    /*The item that is being reviewed/rated.*/
    "itemReviewed": NamedNode;
    /*Item(s) being shipped.*/
    "itemShipped": NamedNode;
    /*Description of benefits associated with the job.*/
    "jobBenefits": NamedNode;
    /*A (typically single) geographic location associated with the job position.*/
    "jobLocation": NamedNode;
    /*Keywords or tags used to describe this content. Multiple entries in a keywords list are typically delimited by commas.*/
    "keywords": NamedNode;
    /*A textual description of known damages, both repaired and unrepaired.*/
    "knownVehicleDamages": NamedNode;
    /*The most generic bi-directional social/work relation.*/
    "knows": NamedNode;
    /*A sub property of participant. The owner of the real estate property.*/
    "landlord": NamedNode;
    /*A sub property of instrument. The language used on this action.*/
    "language": NamedNode;
    /*Date on which the content on this web page was last reviewed for accuracy and/or completeness.*/
    "lastReviewed": NamedNode;
    /*The latitude of a location. For example <code>37.42242</code> (<a href="https://en.wikipedia.org/wiki/World_Geodetic_System">WGS 84</a>).*/
    "latitude": NamedNode;
    /*The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.*/
    "learningResourceType": NamedNode;
    /*The official name of the organization, e.g. the registered company name.*/
    "legalName": NamedNode;
    /*An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.*/
    "leiCode": NamedNode;
    /*A sub property of participant. The person that lends the object being borrowed.*/
    "lender": NamedNode;
    /*This ordering relation for qualitative values indicates that the subject is lesser than the object.*/
    "lesser": NamedNode;
    /*This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.*/
    "lesserOrEqual": NamedNode;
    /*A license document that applies to this content, typically indicated by URL.*/
    "license": NamedNode;
    /*A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.*/
    "line": NamedNode;
    /*An update to the LiveBlog.*/
    "liveBlogUpdate": NamedNode;
    /*The duration of the loan or credit agreement.*/
    "loanTerm": NamedNode;
    /*The location of for example where the event is happening, an organization is located, or where an action takes place.*/
    "location": NamedNode;
    /*The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.*/
    "locationCreated": NamedNode;
    /*A full description of the lodging unit.*/
    "lodgingUnitDescription": NamedNode;
    /*Textual description of the unit type (including suite vs. room, size of bed, etc.).*/
    "lodgingUnitType": NamedNode;
    /*An associated logo.*/
    "logo": NamedNode;
    /*The longitude of a location. For example <code>-122.08585</code> (<a href="https://en.wikipedia.org/wiki/World_Geodetic_System">WGS 84</a>).*/
    "longitude": NamedNode;
    /*A sub property of participant. The loser of the action.*/
    "loser": NamedNode;
    /*The lowest price of all offers available.<br/><br/>
    
    Usage guidelines:<br/><br/>
    
    <ul>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    </ul>
    */
    "lowPrice": NamedNode;
    /*The person who wrote the words.*/
    "lyricist": NamedNode;
    /*The words in the song.*/
    "lyrics": NamedNode;
    /*Indicates if this web page element is the main subject of the page.*/
    "mainContentOfPage": NamedNode;
    /*Indicates the primary entity described in some page or other CreativeWork.*/
    "mainEntity": NamedNode;
    /*Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See <a href="/docs/datamodel.html#mainEntityBackground">background notes</a> for details.*/
    "mainEntityOfPage": NamedNode;
    /*A pointer to products or services offered by the organization or person.*/
    "makesOffer": NamedNode;
    /*The manufacturer of the product.*/
    "manufacturer": NamedNode;
    /*A URL to a map of the place.*/
    "map": NamedNode;
    /*Indicates the kind of Map, from the MapCategoryType Enumeration.*/
    "mapType": NamedNode;
    /*A URL to a map of the place.*/
    "maps": NamedNode;
    /*A material that something is made from, e.g. leather, wool, cotton, paper.*/
    "material": NamedNode;
    /*The highest price if the price is a range.*/
    "maxPrice": NamedNode;
    /*The upper value of some characteristic or property.*/
    "maxValue": NamedNode;
    /*The total number of individuals that may attend an event or venue.*/
    "maximumAttendeeCapacity": NamedNode;
    /*Description of the meals that will be provided or available for purchase.*/
    "mealService": NamedNode;
    /*The median value.*/
    "median": NamedNode;
    /*A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.*/
    "member": NamedNode;
    /*An Organization (or ProgramMembership) to which this Person or Organization belongs.*/
    "memberOf": NamedNode;
    /*A member of this organization.*/
    "members": NamedNode;
    /*A unique identifier for the membership.*/
    "membershipNumber": NamedNode;
    /*Minimum memory requirements.*/
    "memoryRequirements": NamedNode;
    /*Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.*/
    "mentions": NamedNode;
    /*Either the actual menu as a structured representation, as text, or a URL of the menu.*/
    "menu": NamedNode;
    /*Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.*/
    "menuAddOn": NamedNode;
    /*'merchant' is an out-dated term for 'seller'.*/
    "merchant": NamedNode;
    /*A CreativeWork attached to the message.*/
    "messageAttachment": NamedNode;
    /*The total distance travelled by the particular vehicle since its initial production, as read from its odometer.<br/><br/>
    
    Typical unit code(s): KMT for kilometers, SMI for statute miles*/
    "mileageFromOdometer": NamedNode;
    /*The lowest price if the price is a range.*/
    "minPrice": NamedNode;
    /*The lower value of some characteristic or property.*/
    "minValue": NamedNode;
    /*The minimum payment required at this time.*/
    "minimumPaymentDue": NamedNode;
    /*The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.*/
    "model": NamedNode;
    /*The date and time the reservation was modified.*/
    "modifiedTime": NamedNode;
    /*The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.*/
    "mpn": NamedNode;
    /*Whether multiple values are allowed for the property.  Default is false.*/
    "multipleValues": NamedNode;
    /*An arrangement derived from the composition.*/
    "musicArrangement": NamedNode;
    /*The composer of the soundtrack.*/
    "musicBy": NamedNode;
    /*The type of composition (e.g. overture, sonata, symphony, etc.).*/
    "musicCompositionForm": NamedNode;
    /*A member of a music group&#x2014;for example, John, Paul, George, or Ringo.*/
    "musicGroupMember": NamedNode;
    /*Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).*/
    "musicReleaseFormat": NamedNode;
    /*The key, mode, or scale this composition uses.*/
    "musicalKey": NamedNode;
    /*The North American Industry Classification System (NAICS) code for a particular organization or business person.*/
    "naics": NamedNode;
    /*The name of the item.*/
    "name": NamedNode;
    /*A position played, performed or filled by a person or organization, as part of an organization. For example, an athlete in a SportsTeam might play in the position named 'Quarterback'.*/
    "namedPosition": NamedNode;
    /*Nationality of the person.*/
    "nationality": NamedNode;
    /*The total financial value of the person as calculated by subtracting assets from liabilities.*/
    "netWorth": NamedNode;
    /*A link to the ListItem that follows the current one.*/
    "nextItem": NamedNode;
    /*This ordering relation for qualitative values indicates that the subject is not equal to the object.*/
    "nonEqual": NamedNode;
    /*The number of adults staying in the unit.*/
    "numAdults": NamedNode;
    /*The number of children staying in the unit.*/
    "numChildren": NamedNode;
    /*The number of tracks in this album or playlist.*/
    "numTracks": NamedNode;
    /*The number or type of airbags in the vehicle.*/
    "numberOfAirbags": NamedNode;
    /*The number of axles.<br/><br/>
    
    Typical unit code(s): C62*/
    "numberOfAxles": NamedNode;
    /*The quantity of the given bed type available in the HotelRoom, Suite, House, or Apartment.*/
    "numberOfBeds": NamedNode;
    /*The number of doors.<br/><br/>
    
    Typical unit code(s): C62*/
    "numberOfDoors": NamedNode;
    /*The number of employees in an organization e.g. business.*/
    "numberOfEmployees": NamedNode;
    /*The number of episodes in this season or series.*/
    "numberOfEpisodes": NamedNode;
    /*The total number of forward gears available for the transmission system of the vehicle.<br/><br/>
    
    Typical unit code(s): C62*/
    "numberOfForwardGears": NamedNode;
    /*The number of items in an ItemList. Note that some descriptions might not fully describe all items in a list (e.g., multi-page pagination); in such cases, the numberOfItems would be for the entire list.*/
    "numberOfItems": NamedNode;
    /*The number of pages in the book.*/
    "numberOfPages": NamedNode;
    /*Indicate how many people can play this game (minimum, maximum, or range).*/
    "numberOfPlayers": NamedNode;
    /*The number of owners of the vehicle, including the current one.<br/><br/>
    
    Typical unit code(s): C62*/
    "numberOfPreviousOwners": NamedNode;
    /*The number of rooms (excluding bathrooms and closets) of the accommodation or lodging business.
    Typical unit code(s): ROM for room or C62 for no unit. The type of room can be put in the unitText property of the QuantitativeValue.*/
    "numberOfRooms": NamedNode;
    /*The number of seasons in this series.*/
    "numberOfSeasons": NamedNode;
    /*A number associated with a role in an organization, for example, the number on an athlete's jersey.*/
    "numberedPosition": NamedNode;
    /*Nutrition information about the recipe or menu item.*/
    "nutrition": NamedNode;
    /*The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read <em>a book</em>.*/
    "object": NamedNode;
    /*The allowed total occupancy for the accommodation in persons (including infants etc). For individual accommodations, this is not necessarily the legal maximum but defines the permitted usage as per the contractual agreement (e.g. a double room used by a single person).
    Typical unit code(s): C62 for person*/
    "occupancy": NamedNode;
    /*The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.*/
    "occupationLocation": NamedNode;
    /*A category describing the job, preferably using a term from a taxonomy such as <a href="http://www.onetcenter.org/taxonomy.html">BLS O*NET-SOC</a>, <a href="https://www.ilo.org/public/english/bureau/stat/isco/isco08/">ISCO-08</a> or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.<br/><br/>
    
    Note: for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.*/
    "occupationalCategory": NamedNode;
    /*The number of offers for the product.*/
    "offerCount": NamedNode;
    /*A pointer to the organization or person making the offer.*/
    "offeredBy": NamedNode;
    /*An offer to provide this item&#x2014;for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use <a class="localLink" href="http://schema.org/businessFunction">businessFunction</a> to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a <a class="localLink" href="http://schema.org/Demand">Demand</a>. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.*/
    "offers": NamedNode;
    /*The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.<br/><br/>
    
    <ul>
    <li>Days are specified using the following two-letter combinations: <code>Mo</code>, <code>Tu</code>, <code>We</code>, <code>Th</code>, <code>Fr</code>, <code>Sa</code>, <code>Su</code>.</li>
    <li>Times are specified using 24:00 time. For example, 3pm is specified as <code>15:00</code>. </li>
    <li>Here is an example: <code>&lt;time itemprop="openingHours" datetime=&quot;Tu,Th 16:00-20:00&quot;&gt;Tuesdays and Thursdays 4-8pm&lt;/time&gt;</code>.</li>
    <li>If a business is open 7 days a week, then it can be specified as <code>&lt;time itemprop=&quot;openingHours&quot; datetime=&quot;Mo-Su&quot;&gt;Monday through Sunday, all day&lt;/time&gt;</code>.</li>
    </ul>
    */
    "openingHours": NamedNode;
    /*The opening hours of a certain place.*/
    "openingHoursSpecification": NamedNode;
    /*The opening hour of the place or service on the given day(s) of the week.*/
    "opens": NamedNode;
    /*Operating systems supported (Windows 7, OSX 10.6, Android 1.6).*/
    "operatingSystem": NamedNode;
    /*A sub property of participant. The opponent on this action.*/
    "opponent": NamedNode;
    /*A sub property of object. The options subject to this action.*/
    "option": NamedNode;
    /*Date order was placed.*/
    "orderDate": NamedNode;
    /*The delivery of the parcel related to this order or order item.*/
    "orderDelivery": NamedNode;
    /*The identifier of the order item.*/
    "orderItemNumber": NamedNode;
    /*The current status of the order item.*/
    "orderItemStatus": NamedNode;
    /*The identifier of the transaction.*/
    "orderNumber": NamedNode;
    /*The number of the item ordered. If the property is not set, assume the quantity is one.*/
    "orderQuantity": NamedNode;
    /*The current status of the order.*/
    "orderStatus": NamedNode;
    /*The item ordered.*/
    "orderedItem": NamedNode;
    /*An organizer of an Event.*/
    "organizer": NamedNode;
    /*Shipper's address.*/
    "originAddress": NamedNode;
    /*The date and time of obtaining the product.*/
    "ownedFrom": NamedNode;
    /*The date and time of giving up ownership on the product.*/
    "ownedThrough": NamedNode;
    /*Products owned by the organization or person.*/
    "owns": NamedNode;
    /*The page on which the work ends; for example "138" or "xvi".*/
    "pageEnd": NamedNode;
    /*The page on which the work starts; for example "135" or "xiii".*/
    "pageStart": NamedNode;
    /*Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".*/
    "pagination": NamedNode;
    /*A parent of this person.*/
    "parent": NamedNode;
    /*The parent of a question, answer or item in general.*/
    "parentItem": NamedNode;
    /*The larger organization that this organization is a <a class="localLink" href="http://schema.org/subOrganization">subOrganization</a> of, if any.*/
    "parentOrganization": NamedNode;
    /*A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.*/
    "parentService": NamedNode;
    /*A parents of the person.*/
    "parents": NamedNode;
    /*The episode to which this clip belongs.*/
    "partOfEpisode": NamedNode;
    /*The order is being paid as part of the referenced Invoice.*/
    "partOfInvoice": NamedNode;
    /*The overall order the items in this delivery were included in.*/
    "partOfOrder": NamedNode;
    /*The season to which this episode belongs.*/
    "partOfSeason": NamedNode;
    /*The series to which this episode or season belongs.*/
    "partOfSeries": NamedNode;
    /*The TV series to which this episode or season belongs.*/
    "partOfTVSeries": NamedNode;
    /*Other co-agents that participated in the action indirectly. e.g. John wrote a book with <em>Steve</em>.*/
    "participant": NamedNode;
    /*Number of people the reservation should accommodate.*/
    "partySize": NamedNode;
    /*The priority status assigned to a passenger for security or boarding (e.g. FastTrack or Priority).*/
    "passengerPriorityStatus": NamedNode;
    /*The passenger's sequence number as assigned by the airline.*/
    "passengerSequenceNumber": NamedNode;
    /*Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.*/
    "paymentAccepted": NamedNode;
    /*The date that payment is due.*/
    "paymentDue": NamedNode;
    /*The date that payment is due.*/
    "paymentDueDate": NamedNode;
    /*The name of the credit card or other method of payment for the order.*/
    "paymentMethod": NamedNode;
    /*An identifier for the method of payment used (e.g. the last 4 digits of the credit card).*/
    "paymentMethodId": NamedNode;
    /*The status of payment; whether the invoice has been paid or not.*/
    "paymentStatus": NamedNode;
    /*The URL for sending a payment.*/
    "paymentUrl": NamedNode;
    /*The 10th percentile value.*/
    "percentile10": NamedNode;
    /*The 25th percentile value.*/
    "percentile25": NamedNode;
    /*The 75th percentile value.*/
    "percentile75": NamedNode;
    /*The 90th percentile value.*/
    "percentile90": NamedNode;
    /*The length of time it takes to perform instructions or a direction (not including time to prepare the supplies), in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.*/
    "performTime": NamedNode;
    /*A performer at the event&#x2014;for example, a presenter, musician, musical group or actor.*/
    "performer": NamedNode;
    /*Event that this person is a performer or participant in.*/
    "performerIn": NamedNode;
    /*The main performer or performers of the event&#x2014;for example, a presenter, musician, or actor.*/
    "performers": NamedNode;
    /*The type of permission granted the person, organization, or audience.*/
    "permissionType": NamedNode;
    /*Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).*/
    "permissions": NamedNode;
    /*The target audience for this permit.*/
    "permitAudience": NamedNode;
    /*Indications regarding the permitted usage of the accommodation.*/
    "permittedUsage": NamedNode;
    /*Indicates whether pets are allowed to enter the accommodation or lodging business. More detailed information can be put in a text value.*/
    "petsAllowed": NamedNode;
    /*A photograph of this place.*/
    "photo": NamedNode;
    /*Photographs of this place.*/
    "photos": NamedNode;
    /*Where a taxi will pick up a passenger or a rental car can be picked up.*/
    "pickupLocation": NamedNode;
    /*When a taxi will pickup a passenger or a rental car can be picked up.*/
    "pickupTime": NamedNode;
    /*Indicates whether this game is multi-player, co-op or single-player.  The game can be marked as multi-player, co-op and single-player at the same time.*/
    "playMode": NamedNode;
    /*Player type required&#x2014;for example, Flash or Silverlight.*/
    "playerType": NamedNode;
    /*Number of players on the server.*/
    "playersOnline": NamedNode;
    /*A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.*/
    "polygon": NamedNode;
    /*The position of an item in a series or sequence of items.*/
    "position": NamedNode;
    /*The post office box number for PO box addresses.*/
    "postOfficeBoxNumber": NamedNode;
    /*The postal code. For example, 94043.*/
    "postalCode": NamedNode;
    /*Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.*/
    "potentialAction": NamedNode;
    /*A pointer from a previous, often discontinued variant of the product to its newer variant.*/
    "predecessorOf": NamedNode;
    /*The length of time it takes to prepare the items to be used in instructions or a direction, in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.*/
    "prepTime": NamedNode;
    /*A link to the ListItem that preceeds the current one.*/
    "previousItem": NamedNode;
    /*Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.*/
    "previousStartDate": NamedNode;
    /*The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.<br/><br/>
    
    Usage guidelines:<br/><br/>
    
    <ul>
    <li>Use the <a class="localLink" href="http://schema.org/priceCurrency">priceCurrency</a> property (with standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR") instead of including <a href="http://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign">ambiguous symbols</a> such as '$' in the value.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    <li>Note that both <a href="http://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute">RDFa</a> and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.</li>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    </ul>
    */
    "price": NamedNode;
    /*This property links to all <a class="localLink" href="http://schema.org/UnitPriceSpecification">UnitPriceSpecification</a> nodes that apply in parallel for the <a class="localLink" href="http://schema.org/CompoundPriceSpecification">CompoundPriceSpecification</a> node.*/
    "priceComponent": NamedNode;
    /*The currency of the price, or a price component when attached to <a class="localLink" href="http://schema.org/PriceSpecification">PriceSpecification</a> and its subtypes.<br/><br/>
    
    Use standard formats: <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217 currency format</a> e.g. "USD"; <a href="https://en.wikipedia.org/wiki/List_of_cryptocurrencies">Ticker symbol</a> for cryptocurrencies e.g. "BTC"; well known names for <a href="https://en.wikipedia.org/wiki/Local_exchange_trading_system">Local Exchange Tradings Systems</a> (LETS) and other currency types e.g. "Ithaca HOUR".*/
    "priceCurrency": NamedNode;
    /*The price range of the business, for example <code>$$$</code>.*/
    "priceRange": NamedNode;
    /*One or more detailed price specifications, indicating the unit price and delivery or payment charges.*/
    "priceSpecification": NamedNode;
    /*A short text or acronym indicating multiple price specifications for the same offer, e.g. SRP for the suggested retail price or INVOICE for the invoice price, mostly used in the car industry.*/
    "priceType": NamedNode;
    /*The date after which the price is no longer available.*/
    "priceValidUntil": NamedNode;
    /*Indicates the main image on the page.*/
    "primaryImageOfPage": NamedNode;
    /*The number of the column in which the NewsArticle appears in the print edition.*/
    "printColumn": NamedNode;
    /*The edition of the print product in which the NewsArticle appears.*/
    "printEdition": NamedNode;
    /*If this NewsArticle appears in print, this field indicates the name of the page on which the article is found. Please note that this field is intended for the exact page name (e.g. A5, B18).*/
    "printPage": NamedNode;
    /*If this NewsArticle appears in print, this field indicates the print section in which the article appeared.*/
    "printSection": NamedNode;
    /*Estimated processing time for the service using this channel.*/
    "processingTime": NamedNode;
    /*Processor architecture required to run the application (e.g. IA64).*/
    "processorRequirements": NamedNode;
    /*The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).*/
    "producer": NamedNode;
    /*The tangible thing generated by the service, e.g. a passport, permit, etc.*/
    "produces": NamedNode;
    /*The product identifier, such as ISBN. For example: <code>meta itemprop="productID" content="isbn:123-456-789"</code>.*/
    "productID": NamedNode;
    /*The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").*/
    "productSupported": NamedNode;
    /*The production company or studio responsible for the item e.g. series, video game, episode etc.*/
    "productionCompany": NamedNode;
    /*The date of production of the item, e.g. vehicle.*/
    "productionDate": NamedNode;
    /*Proficiency needed for this content; expected values: 'Beginner', 'Expert'.*/
    "proficiencyLevel": NamedNode;
    /*Any membership in a frequent flyer, hotel loyalty program, etc. being applied to the reservation.*/
    "programMembershipUsed": NamedNode;
    /*The program providing the membership.*/
    "programName": NamedNode;
    /*The computer programming language.*/
    "programmingLanguage": NamedNode;
    /*Indicates whether API is managed or unmanaged.*/
    "programmingModel": NamedNode;
    /*A commonly used identifier for the characteristic represented by the property, e.g. a manufacturer or a standard code for a property. propertyID can be
    (1) a prefixed string, mainly meant to be used with standards for product properties; (2) a site-specific, non-prefixed string (e.g. the primary key of the property or the vendor-specific id of the property), or (3)
    a URL indicating the type of the property, either pointing to an external vocabulary, or a Web resource that describes the property (e.g. a glossary entry).
    Standards bodies should promote a standard prefix for the identifiers of properties from their standards.*/
    "propertyID": NamedNode;
    /*The number of grams of protein.*/
    "proteinContent": NamedNode;
    /*The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.*/
    "provider": NamedNode;
    /*Indicates the mobility of a provided service (e.g. 'static', 'dynamic').*/
    "providerMobility": NamedNode;
    /*The BroadcastService offered on this channel.*/
    "providesBroadcastService": NamedNode;
    /*The service provided by this channel.*/
    "providesService": NamedNode;
    /*A flag to signal that the <a class="localLink" href="http://schema.org/Place">Place</a> is open to public visitors.  If this property is omitted there is no assumed default boolean value*/
    "publicAccess": NamedNode;
    /*A publication event associated with the item.*/
    "publication": NamedNode;
    /*A broadcast service associated with the publication event.*/
    "publishedOn": NamedNode;
    /*The publisher of the creative work.*/
    "publisher": NamedNode;
    /*The publishingPrinciples property indicates (typically via <a class="localLink" href="http://schema.org/URL">URL</a>) a document describing the editorial principles of an <a class="localLink" href="http://schema.org/Organization">Organization</a> (or individual e.g. a <a class="localLink" href="http://schema.org/Person">Person</a> writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a <a class="localLink" href="http://schema.org/CreativeWork">CreativeWork</a> (e.g. <a class="localLink" href="http://schema.org/NewsArticle">NewsArticle</a>) the principles are those of the party primarily responsible for the creation of the <a class="localLink" href="http://schema.org/CreativeWork">CreativeWork</a>.<br/><br/>
    
    While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a <a class="localLink" href="http://schema.org/funder">funder</a>) can be expressed using schema.org terminology.*/
    "publishingPrinciples": NamedNode;
    /*The date the item e.g. vehicle was purchased by the current owner.*/
    "purchaseDate": NamedNode;
    /*A sub property of instrument. The query used on this action.*/
    "query": NamedNode;
    /*The task that a player-controlled character, or group of characters may complete in order to gain a reward.*/
    "quest": NamedNode;
    /*A sub property of object. A question.*/
    "question": NamedNode;
    /*The count of total number of ratings.*/
    "ratingCount": NamedNode;
    /*The rating for the content.<br/><br/>
    
    Usage guidelines:<br/><br/>
    
    <ul>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    </ul>
    */
    "ratingValue": NamedNode;
    /*Whether or not a property is mutable.  Default is false. Specifying this for a property that also has a value makes it act similar to a "hidden" input in an HTML form.*/
    "readonlyValue": NamedNode;
    /*A sub property of participant. The real estate agent involved in the action.*/
    "realEstateAgent": NamedNode;
    /*A sub property of instrument. The recipe/instructions used to perform the action.*/
    "recipe": NamedNode;
    /*The category of the recipe—for example, appetizer, entree, etc.*/
    "recipeCategory": NamedNode;
    /*The cuisine of the recipe (for example, French or Ethiopian).*/
    "recipeCuisine": NamedNode;
    /*A single ingredient used in the recipe, e.g. sugar, flour or garlic.*/
    "recipeIngredient": NamedNode;
    /*A step in making the recipe, in the form of a single item (document, video, etc.) or an ordered list with HowToStep and/or HowToSection items.*/
    "recipeInstructions": NamedNode;
    /*The quantity produced by the recipe (for example, number of people served, number of servings, etc).*/
    "recipeYield": NamedNode;
    /*A sub property of participant. The participant who is at the receiving end of the action.*/
    "recipient": NamedNode;
    /*The label that issued the release.*/
    "recordLabel": NamedNode;
    /*An audio recording of the work.*/
    "recordedAs": NamedNode;
    /*The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.*/
    "recordedAt": NamedNode;
    /*The CreativeWork that captured all or part of this Event.*/
    "recordedIn": NamedNode;
    /*The composition this track is a recording of.*/
    "recordingOf": NamedNode;
    /*The reference quantity for which a certain price applies, e.g. 1 EUR per 4 kWh of electricity. This property is a replacement for unitOfMeasurement for the advanced cases where the price does not relate to a standard unit.*/
    "referenceQuantity": NamedNode;
    /*The Order(s) related to this Invoice. One or more Orders may be combined into a single Invoice.*/
    "referencesOrder": NamedNode;
    /*The regions where the media is allowed. If not specified, then it's assumed to be allowed everywhere. Specify the countries in <a href="http://en.wikipedia.org/wiki/ISO_3166">ISO 3166 format</a>.*/
    "regionsAllowed": NamedNode;
    /*A link related to this web page, for example to other related web pages.*/
    "relatedLink": NamedNode;
    /*The most generic familial relation.*/
    "relatedTo": NamedNode;
    /*The release date of a product or product model. This can be used to distinguish the exact variant of a product.*/
    "releaseDate": NamedNode;
    /*Description of what changed in this version.*/
    "releaseNotes": NamedNode;
    /*The album this is a release of.*/
    "releaseOf": NamedNode;
    /*The place and time the release was issued, expressed as a PublicationEvent.*/
    "releasedEvent": NamedNode;
    /*The Occupation for the JobPosting.*/
    "relevantOccupation": NamedNode;
    /*The number of attendee places for an event that remain unallocated.*/
    "remainingAttendeeCapacity": NamedNode;
    /*A sub property of object. The object that is being replaced.*/
    "replacee": NamedNode;
    /*A sub property of object. The object that replaces.*/
    "replacer": NamedNode;
    /*The URL at which a reply may be posted to the specified UserComment.*/
    "replyToUrl": NamedNode;
    /*The number or other unique designator assigned to a Report by the publishing organization.*/
    "reportNumber": NamedNode;
    /*Indicates whether this image is representative of the content of the page.*/
    "representativeOfPage": NamedNode;
    /*Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)*/
    "requiredCollateral": NamedNode;
    /*Audiences defined by a person's gender.*/
    "requiredGender": NamedNode;
    /*Audiences defined by a person's maximum age.*/
    "requiredMaxAge": NamedNode;
    /*Audiences defined by a person's minimum age.*/
    "requiredMinAge": NamedNode;
    /*The required quantity of the item(s).*/
    "requiredQuantity": NamedNode;
    /*Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).*/
    "requirements": NamedNode;
    /*Indicates if use of the media require a subscription  (either paid or free). Allowed values are <code>true</code> or <code>false</code> (note that an earlier version had 'yes', 'no').*/
    "requiresSubscription": NamedNode;
    /*The thing -- flight, event, restaurant,etc. being reserved.*/
    "reservationFor": NamedNode;
    /*A unique identifier for the reservation.*/
    "reservationId": NamedNode;
    /*The current status of the reservation.*/
    "reservationStatus": NamedNode;
    /*A ticket associated with the reservation.*/
    "reservedTicket": NamedNode;
    /*Responsibilities associated with this role or Occupation.*/
    "responsibilities": NamedNode;
    /*The result produced in the action. e.g. John wrote <em>a book</em>.*/
    "result": NamedNode;
    /*A sub property of result. The Comment created or sent as a result of this action.*/
    "resultComment": NamedNode;
    /*A sub property of result. The review that resulted in the performing of the action.*/
    "resultReview": NamedNode;
    /*A review of the item.*/
    "review": NamedNode;
    /*This Review or Rating is relevant to this part or facet of the itemReviewed.*/
    "reviewAspect": NamedNode;
    /*The actual body of the review.*/
    "reviewBody": NamedNode;
    /*The count of total number of reviews.*/
    "reviewCount": NamedNode;
    /*The rating given in this review. Note that reviews can themselves be rated. The <code>reviewRating</code> applies to rating given by the review. The <a class="localLink" href="http://schema.org/aggregateRating">aggregateRating</a> property applies to the review itself, as a creative work.*/
    "reviewRating": NamedNode;
    /*People or organizations that have reviewed the content on this web page for accuracy and/or completeness.*/
    "reviewedBy": NamedNode;
    /*Review of the item.*/
    "reviews": NamedNode;
    /*A role played, performed or filled by a person or organization. For example, the team of creators for a comic book might fill the roles named 'inker', 'penciller', and 'letterer'; or an athlete in a SportsTeam might play in the position named 'Quarterback'.*/
    "roleName": NamedNode;
    /*The response (yes, no, maybe) to the RSVP.*/
    "rsvpResponse": NamedNode;
    /*Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).*/
    "runtime": NamedNode;
    /*Runtime platform or script interpreter dependencies (Example - Java v1, Python2.3, .Net Framework 3.0).*/
    "runtimePlatform": NamedNode;
    /*The currency (coded using <a href="http://en.wikipedia.org/wiki/ISO_4217">ISO 4217</a> ) used for the main salary information in this job posting or for this employee.*/
    "salaryCurrency": NamedNode;
    /*URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.*/
    "sameAs": NamedNode;
    /*What type of code sample: full (compile ready) solution, code snippet, inline code, scripts, template.*/
    "sampleType": NamedNode;
    /*The number of grams of saturated fat.*/
    "saturatedFatContent": NamedNode;
    /*The date the invoice is scheduled to be paid.*/
    "scheduledPaymentDate": NamedNode;
    /*The time the object is scheduled to.*/
    "scheduledTime": NamedNode;
    /*Indicates (by URL or string) a particular version of a schema used in some CreativeWork. For example, a document could declare a schemaVersion using an URL such as http://schema.org/version/2.0/ if precise indication of schema version was required by some application.*/
    "schemaVersion": NamedNode;
    /*The number of screens in the movie theater.*/
    "screenCount": NamedNode;
    /*A link to a screenshot image of the app.*/
    "screenshot": NamedNode;
    /*A season in a media series.*/
    "season": NamedNode;
    /*Position of the season within an ordered group of seasons.*/
    "seasonNumber": NamedNode;
    /*A season in a media series.*/
    "seasons": NamedNode;
    /*The location of the reserved seat (e.g., 27).*/
    "seatNumber": NamedNode;
    /*The row location of the reserved seat (e.g., B).*/
    "seatRow": NamedNode;
    /*The section location of the reserved seat (e.g. Orchestra).*/
    "seatSection": NamedNode;
    /*The type/class of the seat.*/
    "seatingType": NamedNode;
    /*The type of security screening the passenger is subject to.*/
    "securityScreening": NamedNode;
    /*A pointer to products or services sought by the organization or person (demand).*/
    "seeks": NamedNode;
    /*An entity which offers (sells / leases / lends / loans) the services / goods.  A seller may also be a provider.*/
    "seller": NamedNode;
    /*A sub property of participant. The participant who is at the sending end of the action.*/
    "sender": NamedNode;
    /*The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.*/
    "serialNumber": NamedNode;
    /*Status of a game server.*/
    "serverStatus": NamedNode;
    /*The cuisine of the restaurant.*/
    "servesCuisine": NamedNode;
    /*The geographic area where the service is provided.*/
    "serviceArea": NamedNode;
    /*The audience eligible for this service.*/
    "serviceAudience": NamedNode;
    /*The location (e.g. civic structure, local business, etc.) where a person can go to access the service.*/
    "serviceLocation": NamedNode;
    /*The operating organization, if different from the provider.  This enables the representation of services that are provided by an organization, but operated by another organization like a subcontractor.*/
    "serviceOperator": NamedNode;
    /*The tangible thing generated by the service, e.g. a passport, permit, etc.*/
    "serviceOutput": NamedNode;
    /*The phone number to use to access the service.*/
    "servicePhone": NamedNode;
    /*The address for accessing the service by mail.*/
    "servicePostalAddress": NamedNode;
    /*The number to access the service by text message.*/
    "serviceSmsNumber": NamedNode;
    /*The type of service being offered, e.g. veterans' benefits, emergency relief, etc.*/
    "serviceType": NamedNode;
    /*The website to access the service.*/
    "serviceUrl": NamedNode;
    /*The serving size, in terms of the number of volume or mass.*/
    "servingSize": NamedNode;
    /*A CreativeWork such as an image, video, or audio clip shared as part of this posting.*/
    "sharedContent": NamedNode;
    /*A sibling of the person.*/
    "sibling": NamedNode;
    /*A sibling of the person.*/
    "siblings": NamedNode;
    /*One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.*/
    "significantLink": NamedNode;
    /*The most significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.*/
    "significantLinks": NamedNode;
    /*A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.*/
    "skills": NamedNode;
    /*The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.*/
    "sku": NamedNode;
    /*A slogan or motto associated with the item.*/
    "slogan": NamedNode;
    /*Indicates whether it is allowed to smoke in the place, e.g. in the restaurant, hotel or hotel room.*/
    "smokingAllowed": NamedNode;
    /*The number of milligrams of sodium.*/
    "sodiumContent": NamedNode;
    /*Additional content for a software application.*/
    "softwareAddOn": NamedNode;
    /*Software application help.*/
    "softwareHelp": NamedNode;
    /*Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).*/
    "softwareRequirements": NamedNode;
    /*Version of the software instance.*/
    "softwareVersion": NamedNode;
    /*The Organization on whose behalf the creator was working.*/
    "sourceOrganization": NamedNode;
    /*The "spatial" property can be used in cases when more specific properties
    (e.g. <a class="localLink" href="http://schema.org/locationCreated">locationCreated</a>, <a class="localLink" href="http://schema.org/spatialCoverage">spatialCoverage</a>, <a class="localLink" href="http://schema.org/contentLocation">contentLocation</a>) are not known to be appropriate.*/
    "spatial": NamedNode;
    /*The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of
          contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates
          areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.*/
    "spatialCoverage": NamedNode;
    /*Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.<br/><br/>
    
    The <em>speakable</em> property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:<br/><br/>
    
    1.) <em>id-value</em> URL references - uses <em>id-value</em> of an element in the page being annotated. The simplest use of <em>speakable</em> has (potentially relative) URL values, referencing identified sections of the document concerned.<br/><br/>
    
    2.) CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the <a class="localLink" href="http://schema.org/cssSelector">cssSelector</a> property.<br/><br/>
    
    3.)  XPaths - addresses content via XPaths (assuming an XML view of the content). Use the <a class="localLink" href="http://schema.org/xpath">xpath</a> property.<br/><br/>
    
    For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this
    we define a supporting type, <a class="localLink" href="http://schema.org/SpeakableSpecification">SpeakableSpecification</a>  which is defined to be a possible value of the <em>speakable</em> property.*/
    "speakable": NamedNode;
    /*Any special commitments associated with this job posting. Valid entries include VeteranCommit, MilitarySpouseCommit, etc.*/
    "specialCommitments": NamedNode;
    /*The special opening hours of a certain place.<br/><br/>
    
    Use this to explicitly override general opening hours brought in scope by <a class="localLink" href="http://schema.org/openingHoursSpecification">openingHoursSpecification</a> or <a class="localLink" href="http://schema.org/openingHours">openingHours</a>.*/
    "specialOpeningHoursSpecification": NamedNode;
    /*One of the domain specialities to which this web page's content applies.*/
    "specialty": NamedNode;
    /*A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.*/
    "sponsor": NamedNode;
    /*A sub property of location. The sports activity location where this action occurred.*/
    "sportsActivityLocation": NamedNode;
    /*A sub property of location. The sports event where this action occurred.*/
    "sportsEvent": NamedNode;
    /*A sub property of participant. The sports team that participated on this action.*/
    "sportsTeam": NamedNode;
    /*The person's spouse.*/
    "spouse": NamedNode;
    /*An official rating for a lodging business or food establishment, e.g. from national associations or standards bodies. Use the author property to indicate the rating organization, e.g. as an Organization with name such as (e.g. HOTREC, DEHOGA, WHR, or Hotelstars).*/
    "starRating": NamedNode;
    /*The start date and time of the item (in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 date format</a>).*/
    "startDate": NamedNode;
    /*The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from <em>January</em> to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.<br/><br/>
    
    Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.*/
    "startTime": NamedNode;
    /*The position of the steering wheel or similar device (mostly for cars).*/
    "steeringPosition": NamedNode;
    /*A single step item (as HowToStep, text, document, video, etc.) or a HowToSection.*/
    "step": NamedNode;
    /*The stepValue attribute indicates the granularity that is expected (and required) of the value in a PropertyValueSpecification.*/
    "stepValue": NamedNode;
    /*A single step item (as HowToStep, text, document, video, etc.) or a HowToSection (originally misnamed 'steps'; 'step' is preferred).*/
    "steps": NamedNode;
    /*Storage requirements (free space required).*/
    "storageRequirements": NamedNode;
    /*The street address. For example, 1600 Amphitheatre Pkwy.*/
    "streetAddress": NamedNode;
    /*An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.*/
    "subEvent": NamedNode;
    /*Events that are a part of this event. For example, a conference event includes many presentations, each subEvents of the conference.*/
    "subEvents": NamedNode;
    /*A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.*/
    "subOrganization": NamedNode;
    /*The individual reservations included in the package. Typically a repeated property.*/
    "subReservation": NamedNode;
    /*A CreativeWork or Event about this Thing.*/
    "subjectOf": NamedNode;
    /*A pointer from a newer variant of a product  to its previous, often discontinued predecessor.*/
    "successorOf": NamedNode;
    /*The number of grams of sugar.*/
    "sugarContent": NamedNode;
    /*An answer (possibly one of several, possibly incorrect) to a Question, e.g. on a Question/Answer site.*/
    "suggestedAnswer": NamedNode;
    /*The gender of the person or audience.*/
    "suggestedGender": NamedNode;
    /*Maximal age recommended for viewing content.*/
    "suggestedMaxAge": NamedNode;
    /*Minimal age recommended for viewing content.*/
    "suggestedMinAge": NamedNode;
    /*Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.*/
    "suitableForDiet": NamedNode;
    /*An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.*/
    "superEvent": NamedNode;
    /*A sub-property of instrument. A supply consumed when performing instructions or a direction.*/
    "supply": NamedNode;
    /*Supporting data for a SoftwareApplication.*/
    "supportingData": NamedNode;
    /*A material used as a surface in some artwork, e.g. Canvas, Paper, Wood, Board, etc.*/
    "surface": NamedNode;
    /*Indicates a target EntryPoint for an Action.*/
    "target": NamedNode;
    /*A sub property of object. The collection target of the action.*/
    "targetCollection": NamedNode;
    /*The description of a node in an established educational framework.*/
    "targetDescription": NamedNode;
    /*The name of a node in an established educational framework.*/
    "targetName": NamedNode;
    /*Type of app development: phone, Metro style, desktop, XBox, etc.*/
    "targetPlatform": NamedNode;
    /*Target Operating System / Product to which the code applies.  If applies to several versions, just the product name can be used.*/
    "targetProduct": NamedNode;
    /*The URL of a node in an established educational framework.*/
    "targetUrl": NamedNode;
    /*The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.*/
    "taxID": NamedNode;
    /*The telephone number.*/
    "telephone": NamedNode;
    /*The "temporal" property can be used in cases where more specific properties
    (e.g. <a class="localLink" href="http://schema.org/temporalCoverage">temporalCoverage</a>, <a class="localLink" href="http://schema.org/dateCreated">dateCreated</a>, <a class="localLink" href="http://schema.org/dateModified">dateModified</a>, <a class="localLink" href="http://schema.org/datePublished">datePublished</a>) are not known to be appropriate.*/
    "temporal": NamedNode;
    /*The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in <a href="https://en.wikipedia.org/wiki/ISO_8601#Time_intervals">ISO 8601 time interval format</a>. In
          the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL.
          Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".<br/><br/>
    
    Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.*/
    "temporalCoverage": NamedNode;
    /*The textual content of this CreativeWork.*/
    "text": NamedNode;
    /*Thumbnail image for an image or video.*/
    "thumbnail": NamedNode;
    /*A thumbnail image relevant to the Thing.*/
    "thumbnailUrl": NamedNode;
    /*The exchange traded instrument associated with a Corporation object. The tickerSymbol is expressed as an exchange and an instrument name separated by a space character. For the exchange component of the tickerSymbol attribute, we recommend using the controlled vocabulary of Market Identifier Codes (MIC) specified in ISO15022.*/
    "tickerSymbol": NamedNode;
    /*The unique identifier for the ticket.*/
    "ticketNumber": NamedNode;
    /*Reference to an asset (e.g., Barcode, QR code image or PDF) usable for entrance.*/
    "ticketToken": NamedNode;
    /*The seat associated with the ticket.*/
    "ticketedSeat": NamedNode;
    /*Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.*/
    "timeRequired": NamedNode;
    /*The title of the job.*/
    "title": NamedNode;
    /*A sub property of location. The final location of the object or the agent after the action.*/
    "toLocation": NamedNode;
    /*A sub property of recipient. The recipient who was directly sent the message.*/
    "toRecipient": NamedNode;
    /*A sub property of instrument. An object used (but not consumed) when performing instructions or a direction.*/
    "tool": NamedNode;
    /*The total amount due.*/
    "totalPaymentDue": NamedNode;
    /*The total price for the reservation or ticket, including applicable taxes, shipping, etc.<br/><br/>
    
    Usage guidelines:<br/><br/>
    
    <ul>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    </ul>
    */
    "totalPrice": NamedNode;
    /*The total time required to perform instructions or a direction (including time to prepare the supplies), in <a href="http://en.wikipedia.org/wiki/ISO_8601">ISO 8601 duration format</a>.*/
    "totalTime": NamedNode;
    /*Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc.*/
    "touristType": NamedNode;
    /*A music recording (track)&#x2014;usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.*/
    "track": NamedNode;
    /*Shipper tracking number.*/
    "trackingNumber": NamedNode;
    /*Tracking url for the parcel delivery.*/
    "trackingUrl": NamedNode;
    /*A music recording (track)&#x2014;usually a single song.*/
    "tracks": NamedNode;
    /*The trailer of a movie or tv/radio series, season, episode, etc.*/
    "trailer": NamedNode;
    /*The name of the train (e.g. The Orient Express).*/
    "trainName": NamedNode;
    /*The unique identifier for the train.*/
    "trainNumber": NamedNode;
    /*The number of grams of trans fat.*/
    "transFatContent": NamedNode;
    /*If this MediaObject is an AudioObject or VideoObject, the transcript of that object.*/
    "transcript": NamedNode;
    /*Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.*/
    "translator": NamedNode;
    /*The type of bed to which the BedDetail refers, i.e. the type of bed available in the quantity indicated by quantity.*/
    "typeOfBed": NamedNode;
    /*The product that this structured value is referring to.*/
    "typeOfGood": NamedNode;
    /*The typical expected age range, e.g. '7-9', '11-'.*/
    "typicalAgeRange": NamedNode;
    /*The person or organization the reservation or ticket is for.*/
    "underName": NamedNode;
    /*The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.*/
    "unitCode": NamedNode;
    /*A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for
    <a href='unitCode'>unitCode</a>.*/
    "unitText": NamedNode;
    /*The number of grams of unsaturated fat.*/
    "unsaturatedFatContent": NamedNode;
    /*Date when this media object was uploaded to this site.*/
    "uploadDate": NamedNode;
    /*The number of upvotes this question, answer or comment has received from the community.*/
    "upvoteCount": NamedNode;
    /*URL of the item.*/
    "url": NamedNode;
    /*An url template (RFC6570) that will be used to construct the target of the execution of the action.*/
    "urlTemplate": NamedNode;
    /*The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.*/
    "userInteractionCount": NamedNode;
    /*The duration of validity of a permit or similar thing.*/
    "validFor": NamedNode;
    /*The date when the item becomes valid.*/
    "validFrom": NamedNode;
    /*The geographic area where a permit or similar thing is valid.*/
    "validIn": NamedNode;
    /*The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.*/
    "validThrough": NamedNode;
    /*The date when the item is no longer valid.*/
    "validUntil": NamedNode;
    /*The value of the quantitative value or property value node.<br/><br/>
    
    <ul>
    <li>For <a class="localLink" href="http://schema.org/QuantitativeValue">QuantitativeValue</a> and <a class="localLink" href="http://schema.org/MonetaryAmount">MonetaryAmount</a>, the recommended type for values is 'Number'.</li>
    <li>For <a class="localLink" href="http://schema.org/PropertyValue">PropertyValue</a>, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.</li>
    <li>Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.</li>
    <li>Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.</li>
    </ul>
    */
    "value": NamedNode;
    /*Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.*/
    "valueAddedTaxIncluded": NamedNode;
    /*Specifies the allowed range for number of characters in a literal value.*/
    "valueMaxLength": NamedNode;
    /*Specifies the minimum allowed range for number of characters in a literal value.*/
    "valueMinLength": NamedNode;
    /*Indicates the name of the PropertyValueSpecification to be used in URL templates and form encoding in a manner analogous to HTML's input@name.*/
    "valueName": NamedNode;
    /*Specifies a regular expression for testing literal values according to the HTML spec.*/
    "valuePattern": NamedNode;
    /*A pointer to a secondary value that provides additional information on the original value, e.g. a reference temperature.*/
    "valueReference": NamedNode;
    /*Whether the property must be filled in to complete the action.  Default is false.*/
    "valueRequired": NamedNode;
    /*The Value-added Tax ID of the organization or person.*/
    "vatID": NamedNode;
    /*A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.*/
    "vehicleConfiguration": NamedNode;
    /*Information about the engine or engines of the vehicle.*/
    "vehicleEngine": NamedNode;
    /*The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.*/
    "vehicleIdentificationNumber": NamedNode;
    /*The color or color combination of the interior of the vehicle.*/
    "vehicleInteriorColor": NamedNode;
    /*The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.*/
    "vehicleInteriorType": NamedNode;
    /*The release date of a vehicle model (often used to differentiate versions of the same make and model).*/
    "vehicleModelDate": NamedNode;
    /*The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.<br/><br/>
    
    Typical unit code(s): C62 for persons.*/
    "vehicleSeatingCapacity": NamedNode;
    /*The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).*/
    "vehicleTransmission": NamedNode;
    /*'vendor' is an earlier term for 'seller'.*/
    "vendor": NamedNode;
    /*The version of the CreativeWork embodied by a specified resource.*/
    "version": NamedNode;
    /*An embedded video object.*/
    "video": NamedNode;
    /*The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).*/
    "videoFormat": NamedNode;
    /*The frame size of the video.*/
    "videoFrameSize": NamedNode;
    /*The quality of the video.*/
    "videoQuality": NamedNode;
    /*Identifies the volume of publication or multi-part work; for example, "iii" or "2".*/
    "volumeNumber": NamedNode;
    /*The warranty promise(s) included in the offer.*/
    "warranty": NamedNode;
    /*The warranty promise(s) included in the offer.*/
    "warrantyPromise": NamedNode;
    /*The scope of the warranty promise.*/
    "warrantyScope": NamedNode;
    /*The time when a passenger can check into the flight online.*/
    "webCheckinTime": NamedNode;
    /*The weight of the product or person.*/
    "weight": NamedNode;
    /*The width of the item.*/
    "width": NamedNode;
    /*A sub property of participant. The winner of the action.*/
    "winner": NamedNode;
    /*The number of words in the text of the Article.*/
    "wordCount": NamedNode;
    /*Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.*/
    "workExample": NamedNode;
    /*A work featured in some event, e.g. exhibited in an ExhibitionEvent.
           Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).*/
    "workFeatured": NamedNode;
    /*The typical working hours for this job (e.g. 1st shift, night shift, 8am-5pm).*/
    "workHours": NamedNode;
    /*A contact location for a person's place of work.*/
    "workLocation": NamedNode;
    /*A work performed in some event, for example a play performed in a TheaterEvent.*/
    "workPerformed": NamedNode;
    /*The movie presented during this event.*/
    "workPresented": NamedNode;
    /*Organizations that the person works for.*/
    "worksFor": NamedNode;
    /*The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.*/
    "worstRating": NamedNode;
    /*An XPath, e.g. of a <a class="localLink" href="http://schema.org/SpeakableSpecification">SpeakableSpecification</a> or <a class="localLink" href="http://schema.org/WebPageElement">WebPageElement</a>. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".*/
    "xpath": NamedNode;
    /*The size of the business in annual revenue.*/
    "yearlyRevenue": NamedNode;
    /*The age of the business.*/
    "yearsInOperation": NamedNode;
    /*The quantity that results by performing instructions. For example, a paper airplane, 10 personalized candles.*/
    "yield": NamedNode;
    "MedicalBusiness": NamedNode;
    "MonetaryGrant": NamedNode;
    "MoneyTransfer": NamedNode;
    "PhysicalActivity": NamedNode;
    "Recommendation": NamedNode;
    "PhysicalActivityCategory": NamedNode;
    "HealthInsurancePlan": NamedNode;
    "CssSelectorType": NamedNode;
    "ExchangeRateSpecification": NamedNode;
    "RealEstateListing": NamedNode;
    "EducationalOccupationalProgram": NamedNode;
    "Audiobook": NamedNode;
    "Schedule": NamedNode;
    "EducationalOccupationalCredential": NamedNode;
    "GeospatialGeometry": NamedNode;
    "gtin": NamedNode;
    "LinkRole": NamedNode;
    "PronounceableText": NamedNode;
    "DefinedTerm": NamedNode;
    "DietarySupplement": NamedNode;
    "Drug": NamedNode;
    "FloorPlan": NamedNode;
    "WorkBasedProgram": NamedNode;
    "CategoryCode": NamedNode;
    "Chapter": NamedNode;
    "Guide": NamedNode;
    "Grant": NamedNode;
    "MedicalStudy": NamedNode;
    "TouristDestination": NamedNode;
    "TouristTrip": NamedNode;
    "XPathType": NamedNode;
};
export const schema: Schema = (namespace(prefixes.schema) as any);
