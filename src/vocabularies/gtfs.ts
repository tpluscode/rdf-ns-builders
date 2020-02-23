import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
interface Gtfs {
    /*An agency operates a certain schedule based transport mode*/
    "Agency": NamedNode;
    /*La tarifa se debe pagar antes de subir a bordo*/
    "BeforeBoarding": NamedNode;
    /*Used for short- and long-distance bus routes.*/
    "Bus": NamedNode;
    /*Used for street-level cable cars where the cable runs beneath the car.*/
    "CableCar": NamedNode;
    /*Defines service availability for a specific date*/
    "CalendarDateRule": NamedNode;
    /*Define en qué días de la semana el servicio está disponible para un periodo concreto.*/
    "CalendarRule": NamedNode;
    /*Check the (parent) station for accessibility information.*/
    "CheckParentStation": NamedNode;
    /*Instances of this class can be used by gtfs:dropOffType*/
    "DropOffType": NamedNode;
    /*Este es un punto de transbordo sincronizado entre dos rutas. El vehículo que sale espera al que llega, dejando tiempo suficiente para que un pasajero haga transbordo entre rutas.*/
    "EnsuredTransfer": NamedNode;
    /*A class describing how the fare is calculated.*/
    "FareClass": NamedNode;
    /*A rule which binds a gtfs:FareClass to a part of the network.*/
    "FareRule": NamedNode;
    /*An instance of a gtfs:Feed is a linked GTFS feed that complies to this specification.*/
    "Feed": NamedNode;
    /*Used for short- and long-distance boat service.*/
    "Ferry": NamedNode;
    /*An alternative to defining departures and arrivals as StopTimes: define frequencies for transit vehicle*/
    "Frequency": NamedNode;
    /*Any rail system designed for steep inclines.*/
    "Funicular": NamedNode;
    /*Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable.*/
    "Gondola": NamedNode;
    /*Any light rail or street level system within a metropolitan area.*/
    "LightRail": NamedNode;
    /*Este transbordo requiere una cantidad mínima de tiempo entre la llegada y la salida para garantizar la conexión. El tiempo necesario para el transbordo se especifica mediante min_transfer_time*/
    "MinimumTimeTransfer": NamedNode;
    "MustCoordinateWithDriver": NamedNode;
    "MustPhone": NamedNode;
    /*No es posible realizar transbordos entre rutas en esta ubicación.*/
    "NoTransfer": NamedNode;
    /*Indica que el pasajero debe comprar un nuevo billete para realizar un transbordo*/
    "NoTransfersAllowed": NamedNode;
    "NotAvailable": NamedNode;
    /*No riders in wheelchairs can be accommodated on this trip or wheelchair boarding is not possible at this stop and/or there exists no accessible path from outside the station to the specific stop.*/
    "NotWheelchairAccessible": NamedNode;
    /*Fare should be bought on board*/
    "OnBoard": NamedNode;
    /*Indica que el pasajero puede hacer un transbordo con su billete*/
    "OneTransfersAllowed": NamedNode;
    /*Method to pay for the public transit service*/
    "PaymentMethod": NamedNode;
    /*Instances of this class can be used by gtfs:pickupType*/
    "PickupType": NamedNode;
    /*Used for intercity or long-distance travel.*/
    "Rail": NamedNode;
    /*Este es un punto de transbordo recomendado entre dos rutas*/
    "RecommendedTransfer": NamedNode;
    "Regular": NamedNode;
    /*A gtfs:Route is a commercial route followed entirely or partly by gtfs:Trips*/
    "Route": NamedNode;
    /*Describe el tipo de transporte usado en una ruta*/
    "RouteType": NamedNode;
    /*A gtfs:Service identifies a set of dates when a service is available for one or more routes*/
    "Service": NamedNode;
    /*One or more service rules define a set of dates*/
    "ServiceRule": NamedNode;
    /*A polygon formed by gtfs:ShapePoints*/
    "Shape": NamedNode;
    /*A geographic point within a gtfs:Shape*/
    "ShapePoint": NamedNode;
    /*A physical structure or area that contains one or more stop.*/
    "Station": NamedNode;
    /*A location where passengers board or disembark from a transit vehicle.*/
    "Stop": NamedNode;
    /*Describe una hora de parada como parte de un viaje*/
    "StopTime": NamedNode;
    /*Any underground rail system within a metropolitan area.*/
    "Subway": NamedNode;
    /*Define additional rules for making connections between routes.*/
    "TransferRule": NamedNode;
    /*Instances of this class can be used to describe how to handle a transfer rule*/
    "TransferType": NamedNode;
    /*Instances of this class describe whether tickets remain valid when transferring*/
    "TransfersAllowedType": NamedNode;
    /*A collection of gtfs:StopTimes followed by a transit vehicle*/
    "Trip": NamedNode;
    /*Indica que el pasajero puede hacer dos transbordos con su billete*/
    "TwoTransfersAllowed": NamedNode;
    /*Indica que el billete permite una cantidad de transbordos ilimitada*/
    "UnlimitedTransfersAllowed": NamedNode;
    /*Indica que el vehículo usado en este viaje es accesible para, al menos, un pasajero en silla de ruedas, o indica que la parada específica está habilitada para sillas de ruedas, que algunos viajes desde esta parada son accesibles para silla de ruedas y si esta parada tiene una estación matriz, que hay alguna ruta accesible desde el exterior de la estación hasta la parada.*/
    "WheelchairAccessible": NamedNode;
    /*A class whom's instances indicate how accessible a gtfs:Trip, gtfs:Stop or gtfs:Station is.*/
    "WheelchairBoardingStatus": NamedNode;
    /*Las zonas son necesarias si quiere proporcionar información de tarifas usando gtfs:FareClass*/
    "Zone": NamedNode;
    /*Enlaza a una agencia de la que este concepto es parte.*/
    "agency": NamedNode;
    /*Check the original specification for special cases*/
    "arrivalTime": NamedNode;
    "bikesAllowed": NamedNode;
    /*Identifica el bloque al que pertenece el viaje. Un bloque consta de dos o más viajes secuenciales realizados en el mismo vehículo, en los que un pasajero puede cambiar de viaje si simplemente permanece en el vehículo.*/
    "block": NamedNode;
    /*A gtfs:code predicate defines the stop code for a stop.*/
    "code": NamedNode;
    /*A 6 character hexidecimal color (without #)*/
    "color": NamedNode;
    /*A comment on the relation between the RDFS ontology and the CSV specification.*/
    "comment": NamedNode;
    /*A boolean whether to add (true) or remove (false) a date*/
    "dateAddition": NamedNode;
    /*Check the original specification for special cases*/
    "departureTime": NamedNode;
    /*Enlace al gtfs:Stop hacia el que va el viaje*/
    "destinationStop": NamedNode;
    /*La zona de destino donde una clase tarifaria se aplica*/
    "destinationZone": NamedNode;
    /*A binary property to indicate the direction the trip is going (e.g., outbound/inbound, center/airport)*/
    "direction": NamedNode;
    /*Indica la distancia a una parada desde el primer punto del recorrido. Representa una distancia de viaje real durante la ruta en unidades expresadas como pies o kilómetros. Esta información permite que quien planifica el viaje determine la porción de la forma que se debe trazar al mostrar parte de un viaje en el mapa. Los valores utilizados para gtfs:distanceTraveled se deben incrementar junto con los de gtfs:stopSequence, es decir, no se pueden usar para mostrar el recorrido inverso a lo largo de una ruta.*/
    "distanceTraveled": NamedNode;
    /*Indica si los pasajeros se bajan en una parada como parte del horario normal o si no pueden bajar en esa parada.*/
    "dropOffType": NamedNode;
    /*Define la hora a la que el servicio cambia de frecuencia (o bien finaliza) en la primera parada del viaje.*/
    "endTime": NamedNode;
    /*La URL de una página web que permite a un usuario comprar online billetes u otros productos de transporte de esa empresa*/
    "fareUrl": NamedNode;
    /*Service is available on Friday*/
    "friday": NamedNode;
    /*Esta propiedad apunta al texto que indica el destino del viaje a los pasajeros.*/
    "headsign": NamedNode;
    /*Indica el período de tiempo (en segundos) entre salidas desde la misma parada (tiempo entre viajes) para este tipo de viaje, durante el intervalo de tiempo especificado mediante start_time y end_time.*/
    "headwaySeconds": NamedNode;
    /*Long name given to a route*/
    "longName": NamedNode;
    /*El tiempo mínimo de transbordo cuando gtfs:transferType es gtfs:MinimumTimeTransfer.*/
    "minimumTransferTime": NamedNode;
    /*Service is available on Monday*/
    "monday": NamedNode;
    /*Enlace al gtfs:Stop desde el que empieza el viaje*/
    "originStop": NamedNode;
    /*La zona de origen donde una clase tarifaria se aplica*/
    "originZone": NamedNode;
    /*gtfs:parentStation identifica la estación asociada a la parada*/
    "parentStation": NamedNode;
    /*The payment method*/
    "paymentMethod": NamedNode;
    /*Indica si se recogen los pasajeros en una parada como parte del horario normal o si su recogida en dicha parada no se encuentra disponible.*/
    "pickupType": NamedNode;
    /*El campo shape_pt_sequence asocia la latitud y longitud de un punto de recorrido con su orden de secuencia en el recorrido. Los valores para shape_pt_sequence deben ser números enteros positivos y crecientes conforme avanza el viaje.*/
    "pointSequence": NamedNode;
    /*Este viaje forma parte de esta gtfs:Route*/
    "route": NamedNode;
    /*Enlaza al tipo de vehículo que opera en esta ruta*/
    "routeType": NamedNode;
    /*Service is available on Saturday*/
    "saturday": NamedNode;
    /*Cumple este gtfs:Service.*/
    "service": NamedNode;
    /*Reglas de servicio que definen un conjunto de fechas*/
    "serviceRule": NamedNode;
    /*Un enlace al recorrido que sigue el viaje.*/
    "shape": NamedNode;
    /*Enlaza a gtfs:ShapePoint*/
    "shapePoint": NamedNode;
    /*Nombre corto dado a una ruta o viaje*/
    "shortName": NamedNode;
    /*Define la hora a la que empieza el servicio con la frecuencia especificada*/
    "startTime": NamedNode;
    /*Indica que este concepto tiene cierta parada.*/
    "stop": NamedNode;
    /*Indica el orden de paradas para un viaje concreto. Los valores de gtfs:stopSequence deben ser enteros no negativos, deben aumentar durante el viaje referenciado por la propiedad gtfs:trip.*/
    "stopSequence": NamedNode;
    /*Service is available on Sunday*/
    "sunday": NamedNode;
    /*A 6 character hexidecimal color (without #) asigned to a text label.*/
    "textColor": NamedNode;
    /*Service is available on Thursday*/
    "thursday": NamedNode;
    /*La zona horaria donde una persona u organización está situada.*/
    "timeZone": NamedNode;
    /*El tiempo que el billete es válido desde que se abandona el vehículo para hacer un transbordo*/
    "transferExpiryTime": NamedNode;
    "transferType": NamedNode;
    /*The validity of the ticket when transferring*/
    "transfers": NamedNode;
    /*Indica que este concepto es parte de cierto gtfs:Trip*/
    "trip": NamedNode;
    /*Service is available on Tuesday*/
    "tuesday": NamedNode;
    "usesExactTimes": NamedNode;
    /*Service is available on Wednesday*/
    "wednesday": NamedNode;
    /*La parada o estación específica es accesible para silla de ruedas. Si esta parada es parte de una estación, hay también una ruta accesible desde el exterior de la estación hasta la parada.*/
    "wheelchairAccessible": NamedNode;
    /*A gtfs:Stop defines the fare zone. Zones are required if you want to provide fare information using gtfs:FareClass.*/
    "zone": NamedNode;
    "Transfer": NamedNode;
}
export const gtfs: Gtfs = (namespace(prefixes.gtfs) as any);
