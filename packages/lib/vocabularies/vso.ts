import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Vso {
    '': NamedNode<'http://purl.org/vso/ns#'>;
    /** The speed interval from 0 to 100 km/h */
    "0to100KMH": NamedNode<'http://purl.org/vso/ns#0to100KMH'>;
    /** The speed interval from 0 to 60 mph */
    "0to60MPH": NamedNode<'http://purl.org/vso/ns#0to60MPH'>;
    /** The fuel quantity of 1 British (imperial) gallon */
    "1GLI": NamedNode<'http://purl.org/vso/ns#1GLI'>;
    /** The fuel quantity of 1 US gallon */
    "1GLL": NamedNode<'http://purl.org/vso/ns#1GLL'>;
    /** The fuel quantity of 1 liter */
    "1LTR": NamedNode<'http://purl.org/vso/ns#1LTR'>;
    /** Four-wheel Drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability. */
    "4WD": NamedNode<'http://purl.org/vso/ns#4WD'>;
    /**
     * The time needed to accelerate the vehicle from a given start velocity to a given target velocity
     * Typical unit code(s): SEC for seconds
     *
     * Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the rdfs:label of the gr:QuantitativeValueFloat, or use vso:referenceSpeeds with vso:0to60MPH (0..60 mph) or vso:0to100KMH (0..100 km/h) to specify the reference speeds.
     */
    "acceleration": NamedNode<'http://purl.org/vso/ns#acceleration'>;
    /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards. */
    "ACRISSCode": NamedNode<'http://purl.org/vso/ns#ACRISSCode'>;
    /** An automobile, motor car, or car is a wheeled motor vehicle used for transporting passengers, which also carries its own engine or motor. */
    "Automobile": NamedNode<'http://purl.org/vso/ns#Automobile'>;
    /** All-wheel Drive is a transmission layout where the engine drives all four wheels. */
    "AWD": NamedNode<'http://purl.org/vso/ns#AWD'>;
    /**
     * The number of axles 
     * Typical unit code(s): C62
     */
    "axles": NamedNode<'http://purl.org/vso/ns#axles'>;
    /** A bicycle or bike is a pedal-driven, human-powered, single-track vehicle, having two wheels attached to a frame, one behind the other. Some bicycles have a small combustion or electric engine that assists with the pedaling. */
    "Bicycle": NamedNode<'http://purl.org/vso/ns#Bicycle'>;
    /** A boat is a watercraft of modest size designed to float or plane, to provide passage across water. */
    "Boat": NamedNode<'http://purl.org/vso/ns#Boat'>;
    /**
     * Indicates the design and body style of the vehicle. 
     *
     * Use DBPedia resources to indicate the features, if possible. Popular identifiers are
     *   http://dbpedia.org/resource/Convertible
     *   http://dbpedia.org/resource/Hatchback
     *   http://dbpedia.org/resource/Station_wagon
     *   http://dbpedia.org/resource/Sport_utility_vehicle
     *   http://dbpedia.org/resource/Roadster
     *
     * See also http://en.wikipedia.org/wiki/Car_body_styles.
     *
     * If you cannot find a suitable identifier in DBPedia, define your own as an instance of vso:BodyStyleValue.
     */
    "bodyStyle": NamedNode<'http://purl.org/vso/ns#bodyStyle'>;
    /**
     * A value indicating the body style of a vehicle.
     *
     * You can safely use any reasonable DBPedia URI, e.g. 
     *   http://dbpedia.org/resource/Convertible
     *   http://dbpedia.org/resource/Hatchback
     *   http://dbpedia.org/resource/Station_wagon
     *   http://dbpedia.org/resource/Sport_utility_vehicle
     *   http://dbpedia.org/resource/Roadster
     */
    "BodyStyleValue": NamedNode<'http://purl.org/vso/ns#BodyStyleValue'>;
    /**
     * A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Buses have a capacity as high as 300 passengers and are widely used for public transportation. 
     * Coaches are luxury busses, usually in service for long distance travel.
     */
    "BusOrCoach": NamedNode<'http://purl.org/vso/ns#BusOrCoach'>;
    /** A canoe (American English) or Canadian canoe (British English) is a small narrow boat, typically human-powered, though it may also be powered by sails or small electric or gas motors. */
    "Canoe": NamedNode<'http://purl.org/vso/ns#Canoe'>;
    /**
     * The available volume for cargo or luggage. For automobiles, this is usually the trunk space.
     * Typical unit code(s): LTR for liters, FTQ for cubic foot/feet
     * 	
     * Note: You can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "cargoVolume": NamedNode<'http://purl.org/vso/ns#cargoVolume'>;
    /** The color of the vehicle */
    "color": NamedNode<'http://purl.org/vso/ns#color'>;
    /** A textual description of the condition of the vehicle. This property should be mainly used with gr:ActualProductOrServiceInstance. */
    "condition": NamedNode<'http://purl.org/vso/ns#condition'>;
    /**
     * A textual description of known damages, both repaired and unrepaired.
     *
     * Note: This property should be used with gr:ActualProductOrServiceInstance (when offering a vehicle) or gr:ProductOrServicesSomeInstancesPlaceholder (when seeking a vehicle using gr:seeks) only.
     */
    "damages": NamedNode<'http://purl.org/vso/ns#damages'>;
    /**
     * The number of doors
     * Typical unit code(s): C62
     */
    "doors": NamedNode<'http://purl.org/vso/ns#doors'>;
    /** The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain */
    "driveWheelConfiguration": NamedNode<'http://purl.org/vso/ns#driveWheelConfiguration'>;
    /** A value indicating which roadwheels will receive torque */
    "DriveWheelConfigurationValue": NamedNode<'http://purl.org/vso/ns#DriveWheelConfigurationValue'>;
    /**
     * A value indicating the an emission standard.
     *
     * You can safely use any reasonable DBPedia URI, e.g. 
     *   http://dbpedia.org/resource/Super_Ultra_Low_Emission_Vehicle
     *   http://dbpedia.org/resource/Partial_zero-emissions_vehicle
     *
     * See also http://en.wikipedia.org/wiki/Emissions_standard.
     *
     * Unfortunately, there are no DBPedia identifiers for the popular Euro 1 - Euro 5 standards available.
     * If you cannot find a suitable identifier in DBPedia, define your own as an instance of vso:EmissionStandardValue.
     */
    "EmissionStandardValue": NamedNode<'http://purl.org/vso/ns#EmissionStandardValue'>;
    /**
     * The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement. If there are multiple engines, simply attach this property multiple times.
     * Typical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches
     * 	
     * Note 1: You can link to information about how the given value has been determined using the gr:valueReference property.
     * Note 2: You can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "engineDisplacement": NamedNode<'http://purl.org/vso/ns#engineDisplacement'>;
    /** A short text indicating the engine(s) of the vehicle */
    "engineName": NamedNode<'http://purl.org/vso/ns#engineName'>;
    /**
     * The power of the vehicle's engine. If there are multiple engines, simply attach this property multiple times.
     * Typical unit code(s): KWT for kilowatt 
     * 	
     * Note 1: There are many different ways of measuring an engine's power. For an overview, see  http://en.wikipedia.org/wiki/Horsepower#Engine_power_test_codes.
     * Note 2: You can link to information about how the given value has been determined using the gr:valueReference property.
     * Note 3: You can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "enginePower": NamedNode<'http://purl.org/vso/ns#enginePower'>;
    /**
     * The type of engine or engines powering the vehicle. If there are multiple engines, simply attach this property multiple times.
     *
     * Use DBPedia resources to indicate the engine type. Popular identifiers are
     *   http://dbpedia.org/resource/Two-stroke_engine
     *   http://dbpedia.org/resource/Four-stroke_engine
     *   http://dbpedia.org/resource/Wankel_engine
     *   http://dbpedia.org/resource/Electric_motor
     *
     * If you cannot find a suitable identifier in DBPedia, define your own as an instance of vso:EngineTypeValue.
     */
    "engineType": NamedNode<'http://purl.org/vso/ns#engineType'>;
    /**
     * A value indicating an engine type.
     *
     * You can safely use any reasonable DBPedia URI, e.g. 
     *   http://dbpedia.org/resource/Two-stroke_engine
     *   http://dbpedia.org/resource/Four-stroke_engine
     *   http://dbpedia.org/resource/Wankel_engine
     *   http://dbpedia.org/resource/Electric_motor
     */
    "EngineTypeValue": NamedNode<'http://purl.org/vso/ns#EngineTypeValue'>;
    /**
     * Indicates a built-in feature, accessory, or component of the vehicle.
     *
     * Use DBPedia resources to indicate the features, if possible. Popular identifiers are
     *   http://dbpedia.org/resource/Anti-lock_braking_system
     *   http://dbpedia.org/resource/Electronic_stability_control
     *   http://dbpedia.org/resource/Armrest
     *   http://dbpedia.org/resource/Spoiler_%28automotive%29
     *   http://dbpedia.org/resource/CD_Changer
     *   http://dbpedia.org/resource/Cup_holder
     *   http://dbpedia.org/resource/Tow_hitch
     *   http://dbpedia.org/resource/Power_window
     *   http://dbpedia.org/resource/Power_steering
     *   http://dbpedia.org/resource/Air_conditioner
     *   http://dbpedia.org/resource/Child_safety_lock
     *   http://dbpedia.org/resource/Parking_sensors
     *
     * See also http://en.wikipedia.org/wiki/Category:Automotive_accessories.
     *
     * If you cannot find a suitable identifier in DBPedia, define your own as an instance of vso:FeatureValue.
     */
    "feature": NamedNode<'http://purl.org/vso/ns#feature'>;
    /**
     * A value indicating the features or accessories that are attached to or belong to a vehicle.
     *
     * You can safely use any reasonable DBPedia URI, e.g. 
     *   http://dbpedia.org/resource/Anti-lock_braking_system
     *   http://dbpedia.org/resource/Electronic_stability_control
     *   http://dbpedia.org/resource/Armrest
     *   http://dbpedia.org/resource/Spoiler_%28automotive%29
     *   http://dbpedia.org/resource/CD_Changer
     *   http://dbpedia.org/resource/Cup_holder
     *   http://dbpedia.org/resource/Tow_hitch
     *   http://dbpedia.org/resource/Power_window
     *   http://dbpedia.org/resource/Power_steering
     *   http://dbpedia.org/resource/Air_conditioner
     *   http://dbpedia.org/resource/Child_safety_lock
     *   http://dbpedia.org/resource/Parking_sensors
     */
    "FeatureValue": NamedNode<'http://purl.org/vso/ns#FeatureValue'>;
    /** The date of the first registration of the vehicle with the respective public authorities. This property should be used mainly with gr:ActualProductOrServiceInstance. */
    "firstRegistration": NamedNode<'http://purl.org/vso/ns#firstRegistration'>;
    /**
     * The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km)
     * Typical unit code(s): LTR for liters, GLL of US Gallons, GLI for UK / Imperial Gallons
     * 		
     * Note 1: There are unfortunately no standard unit codes for "liters per 100 km". Simply use "LTR" for liters, "GLL" of US Gallons, or "GLI" for UK / Imperial Gallons, and indicate the distance in the rdfs:label of the gr:QuantitativeValueFloat or use vso:referenceDistance to model the reference distance (e.g. 100 km). 
     * Note 2: There are two ways of indicating the fuel consumption, vso:fuelConsumption (e.g. 8 liters per 100 km) and vso:fuelEconomy (e.g. 30 miles per gallon). They are reciprocal.
     * Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use gr:valueReference to link the value for the fuel consumption to another value.
     */
    "fuelConsumption": NamedNode<'http://purl.org/vso/ns#fuelConsumption'>;
    /**
     * The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L)
     * Typical unit code(s): KMT for kilometers, SMI for statute miles
     * 	
     * Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. 
     * Simply use "SMI" for statute miles (common miles in the US and UK) or "KMT" for kilometers, and indicate 
     * the fuel amount of reference in the rdfs:label of the gr:QuantitativeValueFloat, or use vso:referenceFuelQuantity with vso:1LTR (1 liter), vso:1GLL (1 US Gallon), or vso:1GLI (1 British Gallon). 
     * Note 2: In the absence of a vso:referenceFuelQuantity one may assume that the quantity of reference is 1 gallon for distances given in miles and 1 liter for distances given in kilometers. However, note that the original unit may be obscured by unit conversion services, so this heuristic is far from perfect.
     * Note 3: There are two ways of indicating the fuel consumption, vso:fuelConsumption (e.g. 8 liters per 100 km) and vso:fuelEconomy (e.g. 30 miles per gallon). They are reciprocal.
     * Note 4: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use gr:valueReference to link the value for the fuel economy to another value.
     */
    "fuelEconomy": NamedNode<'http://purl.org/vso/ns#fuelEconomy'>;
    /** A value indicating an amount of fuel */
    "FuelQuantity": NamedNode<'http://purl.org/vso/ns#FuelQuantity'>;
    /**
     * The volume of the fuel tank. If there are multiple tanks, this should indicate the total of all tanks.
     * Typical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons
     */
    "fuelTankVolume": NamedNode<'http://purl.org/vso/ns#fuelTankVolume'>;
    /**
     * The type of fuel suitable for the engine or engines of the vehicle.
     *
     * Use DBPedia resources to indicate the fuel type. Popular identifiers are
     *   http://dbpedia.org/resource/Gasoline
     *   http://dbpedia.org/resource/Diesel
     *   http://dbpedia.org/resource/Biodiesel
     *   http://dbpedia.org/resource/Kerosene
     *
     * For two-stroke mixtures, use vso:TwoStrokeMixture. 
     */
    "fuelType": NamedNode<'http://purl.org/vso/ns#fuelType'>;
    /**
     * A value indicating a type of fuel.
     *  
     * You can safely use any reasonable DBPedia URI, e.g. 
     *   http://dbpedia.org/resource/Gasoline
     *   http://dbpedia.org/resource/Diesel
     *   http://dbpedia.org/resource/Biodiesel
     *   http://dbpedia.org/resource/Kerosene
     */
    "FuelTypeValue": NamedNode<'http://purl.org/vso/ns#FuelTypeValue'>;
    /** Front-wheel drive is a transmission layout where the engine drives the front wheels. */
    "FWD": NamedNode<'http://purl.org/vso/ns#FWD'>;
    /**
     * The total number of forward and reverse gears available for the transmission system of the vehicle
     * Typical unit code(s): C62
     */
    "gearsTotal": NamedNode<'http://purl.org/vso/ns#gearsTotal'>;
    /**
     * The outer height of the vehicle. Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
     */
    "height": NamedNode<'http://purl.org/vso/ns#height'>;
    /** A kayak is a small human-powered watercraft that traditionally has a covered deck, and one or more cockpits, each seating one paddler who strokes a double-bladed paddle. In this ontology, kayaks are considered watercrafts of their own kind, not a subtype of vso:Boat. */
    "Kayak": NamedNode<'http://purl.org/vso/ns#Kayak'>;
    /** The steering position is on the left side of the vehicle (viewed from the main direction of driving). For cars this means that you drive on the right side of the road. */
    "Left": NamedNode<'http://purl.org/vso/ns#Left'>;
    /**
     * The outer length of the vehicle. Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
     */
    "length": NamedNode<'http://purl.org/vso/ns#length'>;
    /**
     * Indicates that the vehicle meets the respective emission standard. 
     *
     * Use DBPedia resources to indicate the standard, if possible. Popular identifiers are
     *   http://dbpedia.org/resource/Super_Ultra_Low_Emission_Vehicle
     *   http://dbpedia.org/resource/Partial_zero-emissions_vehicle
     *
     * See also http://en.wikipedia.org/wiki/Emissions_standard.
     *
     * Unfortunately, there are no DBPedia identifiers for the popular Euro 1 - Euro 5 standards available.
     * If you cannot find a suitable identifier in DBPedia, define your own as an instance of vso:EmissionStandardValue.
     */
    "meetsEmissionStandard": NamedNode<'http://purl.org/vso/ns#meetsEmissionStandard'>;
    /**
     * The total distance travelled by the particular vehicle since its initial production, as read from its odometer
     * Typical unit code(s): KMT for kilometers, SMI for statute miles
     * 	
     * Note: This property should be used with gr:ActualProductOrServiceInstance (when offering a vehicle) or gr:ProductOrServicesSomeInstancesPlaceholder (when seeking a vehicle using gr:seeks) only.
     */
    "mileageFromOdometer": NamedNode<'http://purl.org/vso/ns#mileageFromOdometer'>;
    /** The release date of a vehicle model (often used to differentiate versions of the same make and model) */
    "modelDate": NamedNode<'http://purl.org/vso/ns#modelDate'>;
    /** A motorboat is a boat which is powered by an engine. */
    "MotorBoat": NamedNode<'http://purl.org/vso/ns#MotorBoat'>;
    /** A motorcycle or motorbike is a single-track, two-wheeled motor vehicle. */
    "Motorcycle": NamedNode<'http://purl.org/vso/ns#Motorcycle'>;
    /** A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling. */
    "MotorizedBicycle": NamedNode<'http://purl.org/vso/ns#MotorizedBicycle'>;
    /** A motorized road vehicle is a wheeled land vehicle whose main propulsion is provided by an engine or motor. */
    "MotorizedRoadVehicle": NamedNode<'http://purl.org/vso/ns#MotorizedRoadVehicle'>;
    /**
     * The permited weight of passengers and cargo, EXCLUDING the weight of the empty vehicle
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * 	
     * Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of vso:weight and vso:payload.
     * Note 2: You can indicate additional information in the rdfs:label of the gr:QuantitativeValueFloat node.
     * Note 3: You may also link to a gr:QualitativeValue node that provides additional information using gr:valueReference.
     * Note 4: Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "payload": NamedNode<'http://purl.org/vso/ns#payload'>;
    /**
     * The number of previous owners of the vehicle, including the current one
     * Typical unit code(s): C62
     * 	
     * Note: This property should be used with gr:ActualProductOrServiceInstance (when offering a vehicle) or gr:ProductOrServicesSomeInstancesPlaceholder (when seeking a vehicle using gr:seeks) only.
     */
    "previousOwners": NamedNode<'http://purl.org/vso/ns#previousOwners'>;
    /** The date of production of the vehicle. This property should be used mainly with gr:ActualProductOrServiceInstance. */
    "productionDate": NamedNode<'http://purl.org/vso/ns#productionDate'>;
    /** A quadracycle is a four-wheeled human-powered vehicle. It is also referred to as a quadricycle, quadcycle pedal car or four-wheeled bicycle. */
    "Quadracycle": NamedNode<'http://purl.org/vso/ns#Quadracycle'>;
    /** The distance to which a vso:fuelConsumption value refers */
    "referenceDistance": NamedNode<'http://purl.org/vso/ns#referenceDistance'>;
    /** The quantity of fuel to which a vso:fuelEconomy value refers */
    "referenceFuelQuantity": NamedNode<'http://purl.org/vso/ns#referenceFuelQuantity'>;
    /** The interval of initial and target speed to which a vso:acceleration value refers */
    "referenceSpeeds": NamedNode<'http://purl.org/vso/ns#referenceSpeeds'>;
    /**
     * Indicates whether the vehicle has been used for commercial rental. The legislation in many countries requires this information to be revealed when offering a car for sale. 
     *
     * Note 1: This property should be used with gr:ActualProductOrServiceInstance (when offering a vehicle) or gr:ProductOrServicesSomeInstancesPlaceholder (when seeking a vehicle using gr:seeks) only.
     * Note 2: This property is relevant mainly for offers to SELL the vehicle (gr:hasBusinessFunction gr:Sell).
     */
    "rentalUsage": NamedNode<'http://purl.org/vso/ns#rentalUsage'>;
    /** A rickshaw (or ricksha) is a two-wheeled cart which seats one or two persons and is being drawn by a runner. */
    "Rickshaw": NamedNode<'http://purl.org/vso/ns#Rickshaw'>;
    /** The steering position is on the right side of the vehicle (viewed from the main direction of driving). For cars this means that you drive on the left side of the road. */
    "Right": NamedNode<'http://purl.org/vso/ns#Right'>;
    /**
     * The permited total weight of cargo and installations (e.g. a roof rack) on top of the vehicle
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * 	
     * Note 1: You can indicate additional information in the rdfs:label of the gr:QuantitativeValueFloat node.
     * Note 2: You may also link to a gr:QualitativeValue node that provides additional information using gr:valueReference.
     * Note 3: Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "roofLoad": NamedNode<'http://purl.org/vso/ns#roofLoad'>;
    /** Rear-wheel drive is a transmission layout where the engine drives the rear wheels. */
    "RWD": NamedNode<'http://purl.org/vso/ns#RWD'>;
    /** A sailboat or sailing boat is a boat propelled partly or entirely by sails. */
    "SailingBoat": NamedNode<'http://purl.org/vso/ns#SailingBoat'>;
    /**
     * The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law
     * Typical unit code(s): C62 for persons 
     */
    "seatingCapacity": NamedNode<'http://purl.org/vso/ns#seatingCapacity'>;
    /** A ship is a large watercraft that floats on water. */
    "Ship": NamedNode<'http://purl.org/vso/ns#Ship'>;
    /**
     * The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by gr:hasMaxValueFloat) should be the maximum speed achievable under regular conditions.
     * Typical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot
     * 	
     * Note 1: Use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate the range. Typically, the minimal value is zero.
     * Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the gr:valueReference property.
     */
    "speed": NamedNode<'http://purl.org/vso/ns#speed'>;
    /** A value indicating a speed interval, mostly for explaining vso:acceleration data */
    "SpeedInterval": NamedNode<'http://purl.org/vso/ns#SpeedInterval'>;
    /** The position of the steering wheel or similar device (mostly for cars) */
    "steeringPosition": NamedNode<'http://purl.org/vso/ns#steeringPosition'>;
    /** A value indicating a steering position */
    "SteeringPositionValue": NamedNode<'http://purl.org/vso/ns#SteeringPositionValue'>;
    /**
     * The permited vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR).
     * 	Typical unit code(s): KGM for kilogram, LBR for pound
     *
     * Note 1: You can indicate additional information in the rdfs:label of the gr:QuantitativeValueFloat node.
     * Note 2: You may also link to a gr:QualitativeValue node that provides additional information using gr:valueReference.
     * Note 3: Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "tongueWeight": NamedNode<'http://purl.org/vso/ns#tongueWeight'>;
    /**
     * The permited weight of a trailer attached to the vehicle.
     * Typical unit code(s): KGM for kilogram, LBR for pound
     *
     * Note 1: You can indicate additional information in the rdfs:label of the gr:QuantitativeValueFloat node.
     * Note 2: You may also link to a gr:QualitativeValue node that provides additional information using gr:valueReference.
     * Note 3: Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "trailerWeight": NamedNode<'http://purl.org/vso/ns#trailerWeight'>;
    /**
     * The type of component used for transmitting the power from a rotating power source to the wheels or propeller(s) ("gearbox" for cars).
     *
     * Use DBPedia resources to indicate the transmission type, if possible. Popular identifiers are
     *   http://dbpedia.org/resource/Manual_transmission
     *   http://dbpedia.org/resource/Automatic_transmission
     *
     * If you cannot find a suitable identifier in DBPedia, define your own as an instance of vso:TransmissionTypeValue.
     */
    "transmission": NamedNode<'http://purl.org/vso/ns#transmission'>;
    /**
     * A value indicating a type of transmission.
     *
     * You can safely use any reasonable DBPedia URI, e.g. 
     *   http://dbpedia.org/resource/Manual_transmission
     *   http://dbpedia.org/resource/Automatic_transmission
     */
    "TransmissionTypeValue": NamedNode<'http://purl.org/vso/ns#TransmissionTypeValue'>;
    /** A lorry (British English) or truck (American English) is a motor vehicle designed to transport cargo. */
    "Truck": NamedNode<'http://purl.org/vso/ns#Truck'>;
    /** A pre-mixed fuel-oil mixture */
    "TwoStrokeMixture": NamedNode<'http://purl.org/vso/ns#TwoStrokeMixture'>;
    /**
     * A van is a kind of vehicle used for transporting  goods or groups of people. It is usually a box-shaped vehicle on four wheels, about the same width and length as a large automobile, 
     * but taller and usually higher off the ground, also referred to as a light commercial vehicle or LCV.
     */
    "Van": NamedNode<'http://purl.org/vso/ns#Van'>;
    /** A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space. */
    "Vehicle": NamedNode<'http://purl.org/vso/ns#Vehicle'>;
    /** A unique serial number used by the automotive industry to identify individual motor vehicles */
    "VIN": NamedNode<'http://purl.org/vso/ns#VIN'>;
    /** A watercraft is a vehicle, vessel or craft designed to move across or through water. */
    "Watercraft": NamedNode<'http://purl.org/vso/ns#Watercraft'>;
    /**
     * The weight of the empty vehicle ("curb weight" for cars), i.e. with standard equipment, all necessary operating consumables (e.g. motor oil and coolant), a full tank of fuel, while not loaded with either passengers or cargo
     * Typical unit code(s): KGM for kilogram, LBR for pound
     *
     * Note 1: There are many varying definitions in place for specifying the weight of a vehicle. E.g., the many European Union car manufacturers include the weight of a 75 kilogram driver to follow European Directive 95/48/EC. Make sure to subtract those 75 kg when converting respective data.
     * Note 2: You can indicate additional information in the rdfs:label of the gr:QuantitativeValueFloat node.
     * Note 3: You may also link to a gr:QualitativeValue node that provides additional information using gr:valueReference.
     * Note 4: Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "weight": NamedNode<'http://purl.org/vso/ns#weight'>;
    /**
     * The permited total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle
     * Typical unit code(s): KGM for kilogram, LBR for pound
     * 	
     * Note 1: You can indicate additional information in the rdfs:label of the gr:QuantitativeValueFloat node.
     * Note 2: You may also link to a gr:QualitativeValue node that provides additional information using gr:valueReference.
     * Note 3: Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     */
    "weightTotal": NamedNode<'http://purl.org/vso/ns#weightTotal'>;
    /**
     * The distance between the centers of the front and rear wheels
     * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
     */
    "wheelbase": NamedNode<'http://purl.org/vso/ns#wheelbase'>;
    /**
     * The outer width of the vehicle. Note that you can use gr:hasMinValueFloat and gr:hasMaxValueFloat to indicate ranges.
     * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
     */
    "width": NamedNode<'http://purl.org/vso/ns#width'>;
}

const builder = namespace("http://purl.org/vso/ns#") as any;
export const strict = builder as NamespaceBuilder<keyof Vso> & Vso;
export const loose = builder as NamespaceBuilder & Vso;
