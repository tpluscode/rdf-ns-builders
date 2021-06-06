import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Gtfs {
    /** An agency operates a certain schedule based transport mode */
    "Agency": NamedNode<'http://vocab.gtfs.org/terms#Agency'>;
    /** La tarifa se debe pagar antes de subir a bordo */
    "BeforeBoarding": NamedNode<'http://vocab.gtfs.org/terms#BeforeBoarding'>;
    /** Used for short- and long-distance bus routes. */
    "Bus": NamedNode<'http://vocab.gtfs.org/terms#Bus'>;
    /** Used for street-level cable cars where the cable runs beneath the car. */
    "CableCar": NamedNode<'http://vocab.gtfs.org/terms#CableCar'>;
    /** Defines service availability for a specific date */
    "CalendarDateRule": NamedNode<'http://vocab.gtfs.org/terms#CalendarDateRule'>;
    /** Define en qué días de la semana el servicio está disponible para un periodo concreto. */
    "CalendarRule": NamedNode<'http://vocab.gtfs.org/terms#CalendarRule'>;
    /** Check the (parent) station for accessibility information. */
    "CheckParentStation": NamedNode<'http://vocab.gtfs.org/terms#CheckParentStation'>;
    /** Instances of this class can be used by gtfs:dropOffType */
    "DropOffType": NamedNode<'http://vocab.gtfs.org/terms#DropOffType'>;
    /** Este es un punto de transbordo sincronizado entre dos rutas. El vehículo que sale espera al que llega, dejando tiempo suficiente para que un pasajero haga transbordo entre rutas. */
    "EnsuredTransfer": NamedNode<'http://vocab.gtfs.org/terms#EnsuredTransfer'>;
    /** A class describing how the fare is calculated. */
    "FareClass": NamedNode<'http://vocab.gtfs.org/terms#FareClass'>;
    /** A rule which binds a gtfs:FareClass to a part of the network. */
    "FareRule": NamedNode<'http://vocab.gtfs.org/terms#FareRule'>;
    /** An instance of a gtfs:Feed is a linked GTFS feed that complies to this specification. */
    "Feed": NamedNode<'http://vocab.gtfs.org/terms#Feed'>;
    /** Used for short- and long-distance boat service. */
    "Ferry": NamedNode<'http://vocab.gtfs.org/terms#Ferry'>;
    /** An alternative to defining departures and arrivals as StopTimes: define frequencies for transit vehicle */
    "Frequency": NamedNode<'http://vocab.gtfs.org/terms#Frequency'>;
    /** Any rail system designed for steep inclines. */
    "Funicular": NamedNode<'http://vocab.gtfs.org/terms#Funicular'>;
    /** Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable. */
    "Gondola": NamedNode<'http://vocab.gtfs.org/terms#Gondola'>;
    /** Any light rail or street level system within a metropolitan area. */
    "LightRail": NamedNode<'http://vocab.gtfs.org/terms#LightRail'>;
    /** Este transbordo requiere una cantidad mínima de tiempo entre la llegada y la salida para garantizar la conexión. El tiempo necesario para el transbordo se especifica mediante min_transfer_time */
    "MinimumTimeTransfer": NamedNode<'http://vocab.gtfs.org/terms#MinimumTimeTransfer'>;
    "MustCoordinateWithDriver": NamedNode<'http://vocab.gtfs.org/terms#MustCoordinateWithDriver'>;
    "MustPhone": NamedNode<'http://vocab.gtfs.org/terms#MustPhone'>;
    /** No es posible realizar transbordos entre rutas en esta ubicación. */
    "NoTransfer": NamedNode<'http://vocab.gtfs.org/terms#NoTransfer'>;
    /** Indica que el pasajero debe comprar un nuevo billete para realizar un transbordo */
    "NoTransfersAllowed": NamedNode<'http://vocab.gtfs.org/terms#NoTransfersAllowed'>;
    "NotAvailable": NamedNode<'http://vocab.gtfs.org/terms#NotAvailable'>;
    /** No riders in wheelchairs can be accommodated on this trip or wheelchair boarding is not possible at this stop and/or there exists no accessible path from outside the station to the specific stop. */
    "NotWheelchairAccessible": NamedNode<'http://vocab.gtfs.org/terms#NotWheelchairAccessible'>;
    /** Fare should be bought on board */
    "OnBoard": NamedNode<'http://vocab.gtfs.org/terms#OnBoard'>;
    /** Indica que el pasajero puede hacer un transbordo con su billete */
    "OneTransfersAllowed": NamedNode<'http://vocab.gtfs.org/terms#OneTransfersAllowed'>;
    /** Method to pay for the public transit service */
    "PaymentMethod": NamedNode<'http://vocab.gtfs.org/terms#PaymentMethod'>;
    /** Instances of this class can be used by gtfs:pickupType */
    "PickupType": NamedNode<'http://vocab.gtfs.org/terms#PickupType'>;
    /** Used for intercity or long-distance travel. */
    "Rail": NamedNode<'http://vocab.gtfs.org/terms#Rail'>;
    /** Este es un punto de transbordo recomendado entre dos rutas */
    "RecommendedTransfer": NamedNode<'http://vocab.gtfs.org/terms#RecommendedTransfer'>;
    "Regular": NamedNode<'http://vocab.gtfs.org/terms#Regular'>;
    /** A gtfs:Route is a commercial route followed entirely or partly by gtfs:Trips */
    "Route": NamedNode<'http://vocab.gtfs.org/terms#Route'>;
    /** Describe el tipo de transporte usado en una ruta */
    "RouteType": NamedNode<'http://vocab.gtfs.org/terms#RouteType'>;
    /** A gtfs:Service identifies a set of dates when a service is available for one or more routes */
    "Service": NamedNode<'http://vocab.gtfs.org/terms#Service'>;
    /** One or more service rules define a set of dates */
    "ServiceRule": NamedNode<'http://vocab.gtfs.org/terms#ServiceRule'>;
    /** A polygon formed by gtfs:ShapePoints */
    "Shape": NamedNode<'http://vocab.gtfs.org/terms#Shape'>;
    /** A geographic point within a gtfs:Shape */
    "ShapePoint": NamedNode<'http://vocab.gtfs.org/terms#ShapePoint'>;
    /** A physical structure or area that contains one or more stop. */
    "Station": NamedNode<'http://vocab.gtfs.org/terms#Station'>;
    /** A location where passengers board or disembark from a transit vehicle. */
    "Stop": NamedNode<'http://vocab.gtfs.org/terms#Stop'>;
    /** Describe una hora de parada como parte de un viaje */
    "StopTime": NamedNode<'http://vocab.gtfs.org/terms#StopTime'>;
    /** Any underground rail system within a metropolitan area. */
    "Subway": NamedNode<'http://vocab.gtfs.org/terms#Subway'>;
    /** Define additional rules for making connections between routes. */
    "TransferRule": NamedNode<'http://vocab.gtfs.org/terms#TransferRule'>;
    /** Instances of this class can be used to describe how to handle a transfer rule */
    "TransferType": NamedNode<'http://vocab.gtfs.org/terms#TransferType'>;
    /** Instances of this class describe whether tickets remain valid when transferring */
    "TransfersAllowedType": NamedNode<'http://vocab.gtfs.org/terms#TransfersAllowedType'>;
    /** A collection of gtfs:StopTimes followed by a transit vehicle */
    "Trip": NamedNode<'http://vocab.gtfs.org/terms#Trip'>;
    /** Indica que el pasajero puede hacer dos transbordos con su billete */
    "TwoTransfersAllowed": NamedNode<'http://vocab.gtfs.org/terms#TwoTransfersAllowed'>;
    /** Indica que el billete permite una cantidad de transbordos ilimitada */
    "UnlimitedTransfersAllowed": NamedNode<'http://vocab.gtfs.org/terms#UnlimitedTransfersAllowed'>;
    /** Indica que el vehículo usado en este viaje es accesible para, al menos, un pasajero en silla de ruedas, o indica que la parada específica está habilitada para sillas de ruedas, que algunos viajes desde esta parada son accesibles para silla de ruedas y si esta parada tiene una estación matriz, que hay alguna ruta accesible desde el exterior de la estación hasta la parada. */
    "WheelchairAccessible": NamedNode<'http://vocab.gtfs.org/terms#WheelchairAccessible'>;
    /** A class whom's instances indicate how accessible a gtfs:Trip, gtfs:Stop or gtfs:Station is. */
    "WheelchairBoardingStatus": NamedNode<'http://vocab.gtfs.org/terms#WheelchairBoardingStatus'>;
    /** Las zonas son necesarias si quiere proporcionar información de tarifas usando gtfs:FareClass */
    "Zone": NamedNode<'http://vocab.gtfs.org/terms#Zone'>;
    /** Enlaza a una agencia de la que este concepto es parte. */
    "agency": NamedNode<'http://vocab.gtfs.org/terms#agency'>;
    /** Check the original specification for special cases */
    "arrivalTime": NamedNode<'http://vocab.gtfs.org/terms#arrivalTime'>;
    "bikesAllowed": NamedNode<'http://vocab.gtfs.org/terms#bikesAllowed'>;
    /** Identifica el bloque al que pertenece el viaje. Un bloque consta de dos o más viajes secuenciales realizados en el mismo vehículo, en los que un pasajero puede cambiar de viaje si simplemente permanece en el vehículo. */
    "block": NamedNode<'http://vocab.gtfs.org/terms#block'>;
    /** A gtfs:code predicate defines the stop code for a stop. */
    "code": NamedNode<'http://vocab.gtfs.org/terms#code'>;
    /** A 6 character hexidecimal color (without #) */
    "color": NamedNode<'http://vocab.gtfs.org/terms#color'>;
    /** A comment on the relation between the RDFS ontology and the CSV specification. */
    "comment": NamedNode<'http://vocab.gtfs.org/terms#comment'>;
    /** A boolean whether to add (true) or remove (false) a date */
    "dateAddition": NamedNode<'http://vocab.gtfs.org/terms#dateAddition'>;
    /** Check the original specification for special cases */
    "departureTime": NamedNode<'http://vocab.gtfs.org/terms#departureTime'>;
    /** Enlace al gtfs:Stop hacia el que va el viaje */
    "destinationStop": NamedNode<'http://vocab.gtfs.org/terms#destinationStop'>;
    /** La zona de destino donde una clase tarifaria se aplica */
    "destinationZone": NamedNode<'http://vocab.gtfs.org/terms#destinationZone'>;
    /** A binary property to indicate the direction the trip is going (e.g., outbound/inbound, center/airport) */
    "direction": NamedNode<'http://vocab.gtfs.org/terms#direction'>;
    /** Indica la distancia a una parada desde el primer punto del recorrido. Representa una distancia de viaje real durante la ruta en unidades expresadas como pies o kilómetros. Esta información permite que quien planifica el viaje determine la porción de la forma que se debe trazar al mostrar parte de un viaje en el mapa. Los valores utilizados para gtfs:distanceTraveled se deben incrementar junto con los de gtfs:stopSequence, es decir, no se pueden usar para mostrar el recorrido inverso a lo largo de una ruta. */
    "distanceTraveled": NamedNode<'http://vocab.gtfs.org/terms#distanceTraveled'>;
    /** Indica si los pasajeros se bajan en una parada como parte del horario normal o si no pueden bajar en esa parada. */
    "dropOffType": NamedNode<'http://vocab.gtfs.org/terms#dropOffType'>;
    /** Define la hora a la que el servicio cambia de frecuencia (o bien finaliza) en la primera parada del viaje. */
    "endTime": NamedNode<'http://vocab.gtfs.org/terms#endTime'>;
    /** La URL de una página web que permite a un usuario comprar online billetes u otros productos de transporte de esa empresa */
    "fareUrl": NamedNode<'http://vocab.gtfs.org/terms#fareUrl'>;
    /** Service is available on Friday */
    "friday": NamedNode<'http://vocab.gtfs.org/terms#friday'>;
    /** Esta propiedad apunta al texto que indica el destino del viaje a los pasajeros. */
    "headsign": NamedNode<'http://vocab.gtfs.org/terms#headsign'>;
    /** Indica el período de tiempo (en segundos) entre salidas desde la misma parada (tiempo entre viajes) para este tipo de viaje, durante el intervalo de tiempo especificado mediante start_time y end_time. */
    "headwaySeconds": NamedNode<'http://vocab.gtfs.org/terms#headwaySeconds'>;
    /** Long name given to a route */
    "longName": NamedNode<'http://vocab.gtfs.org/terms#longName'>;
    /** El tiempo mínimo de transbordo cuando gtfs:transferType es gtfs:MinimumTimeTransfer. */
    "minimumTransferTime": NamedNode<'http://vocab.gtfs.org/terms#minimumTransferTime'>;
    /** Service is available on Monday */
    "monday": NamedNode<'http://vocab.gtfs.org/terms#monday'>;
    /** Enlace al gtfs:Stop desde el que empieza el viaje */
    "originStop": NamedNode<'http://vocab.gtfs.org/terms#originStop'>;
    /** La zona de origen donde una clase tarifaria se aplica */
    "originZone": NamedNode<'http://vocab.gtfs.org/terms#originZone'>;
    /** gtfs:parentStation identifica la estación asociada a la parada */
    "parentStation": NamedNode<'http://vocab.gtfs.org/terms#parentStation'>;
    /** The payment method */
    "paymentMethod": NamedNode<'http://vocab.gtfs.org/terms#paymentMethod'>;
    /** Indica si se recogen los pasajeros en una parada como parte del horario normal o si su recogida en dicha parada no se encuentra disponible. */
    "pickupType": NamedNode<'http://vocab.gtfs.org/terms#pickupType'>;
    /** El campo shape_pt_sequence asocia la latitud y longitud de un punto de recorrido con su orden de secuencia en el recorrido. Los valores para shape_pt_sequence deben ser números enteros positivos y crecientes conforme avanza el viaje. */
    "pointSequence": NamedNode<'http://vocab.gtfs.org/terms#pointSequence'>;
    /** Este viaje forma parte de esta gtfs:Route */
    "route": NamedNode<'http://vocab.gtfs.org/terms#route'>;
    /** Enlaza al tipo de vehículo que opera en esta ruta */
    "routeType": NamedNode<'http://vocab.gtfs.org/terms#routeType'>;
    /** Service is available on Saturday */
    "saturday": NamedNode<'http://vocab.gtfs.org/terms#saturday'>;
    /** Cumple este gtfs:Service. */
    "service": NamedNode<'http://vocab.gtfs.org/terms#service'>;
    /** Reglas de servicio que definen un conjunto de fechas */
    "serviceRule": NamedNode<'http://vocab.gtfs.org/terms#serviceRule'>;
    /** Un enlace al recorrido que sigue el viaje. */
    "shape": NamedNode<'http://vocab.gtfs.org/terms#shape'>;
    /** Enlaza a gtfs:ShapePoint */
    "shapePoint": NamedNode<'http://vocab.gtfs.org/terms#shapePoint'>;
    /** Nombre corto dado a una ruta o viaje */
    "shortName": NamedNode<'http://vocab.gtfs.org/terms#shortName'>;
    /** Define la hora a la que empieza el servicio con la frecuencia especificada */
    "startTime": NamedNode<'http://vocab.gtfs.org/terms#startTime'>;
    /** Indica que este concepto tiene cierta parada. */
    "stop": NamedNode<'http://vocab.gtfs.org/terms#stop'>;
    /** Indica el orden de paradas para un viaje concreto. Los valores de gtfs:stopSequence deben ser enteros no negativos, deben aumentar durante el viaje referenciado por la propiedad gtfs:trip. */
    "stopSequence": NamedNode<'http://vocab.gtfs.org/terms#stopSequence'>;
    /** Service is available on Sunday */
    "sunday": NamedNode<'http://vocab.gtfs.org/terms#sunday'>;
    /** A 6 character hexidecimal color (without #) asigned to a text label. */
    "textColor": NamedNode<'http://vocab.gtfs.org/terms#textColor'>;
    /** Service is available on Thursday */
    "thursday": NamedNode<'http://vocab.gtfs.org/terms#thursday'>;
    /** La zona horaria donde una persona u organización está situada. */
    "timeZone": NamedNode<'http://vocab.gtfs.org/terms#timeZone'>;
    /** El tiempo que el billete es válido desde que se abandona el vehículo para hacer un transbordo */
    "transferExpiryTime": NamedNode<'http://vocab.gtfs.org/terms#transferExpiryTime'>;
    "transferType": NamedNode<'http://vocab.gtfs.org/terms#transferType'>;
    /** The validity of the ticket when transferring */
    "transfers": NamedNode<'http://vocab.gtfs.org/terms#transfers'>;
    /** Indica que este concepto es parte de cierto gtfs:Trip */
    "trip": NamedNode<'http://vocab.gtfs.org/terms#trip'>;
    /** Service is available on Tuesday */
    "tuesday": NamedNode<'http://vocab.gtfs.org/terms#tuesday'>;
    "usesExactTimes": NamedNode<'http://vocab.gtfs.org/terms#usesExactTimes'>;
    /** Service is available on Wednesday */
    "wednesday": NamedNode<'http://vocab.gtfs.org/terms#wednesday'>;
    /** La parada o estación específica es accesible para silla de ruedas. Si esta parada es parte de una estación, hay también una ruta accesible desde el exterior de la estación hasta la parada. */
    "wheelchairAccessible": NamedNode<'http://vocab.gtfs.org/terms#wheelchairAccessible'>;
    /** A gtfs:Stop defines the fare zone. Zones are required if you want to provide fare information using gtfs:FareClass. */
    "zone": NamedNode<'http://vocab.gtfs.org/terms#zone'>;
    "Transfer": NamedNode<'http://vocab.gtfs.org/terms#Transfer'>;
}

const builder = namespace("http://vocab.gtfs.org/terms#") as any;
export const strict = builder as NamespaceBuilder<keyof Gtfs> & Gtfs;
export const loose = builder as NamespaceBuilder & Gtfs;
