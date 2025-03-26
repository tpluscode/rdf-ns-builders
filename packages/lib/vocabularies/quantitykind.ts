import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Quantitykind {
    '': NamedNode<'http://qudt.org/vocab/quantitykind/'>;
    /** Applicable units are those of quantitykind:AbsoluteActivity */
    "AbsoluteActivity": NamedNode<'http://qudt.org/vocab/quantitykind/AbsoluteActivity'>;
    /** Applicable units are those of quantitykind:Density */
    "AbsoluteHumidity": NamedNode<'http://qudt.org/vocab/quantitykind/AbsoluteHumidity'>;
    /** Applicable units are those of quantitykind:Length */
    "AbsoluteTypographicMeasurement": NamedNode<'http://qudt.org/vocab/quantitykind/AbsoluteTypographicMeasurement'>;
    /** Applicable units are those of quantitykind:AbsorbedDose */
    "AbsorbedDose": NamedNode<'http://qudt.org/vocab/quantitykind/AbsorbedDose'>;
    /** Applicable units are those of quantitykind:AbsorbedDoseRate */
    "AbsorbedDoseRate": NamedNode<'http://qudt.org/vocab/quantitykind/AbsorbedDoseRate'>;
    /** Applicable units are those of quantitykind:Absorptance */
    "Absorptance": NamedNode<'http://qudt.org/vocab/quantitykind/Absorptance'>;
    /** Applicable units are those of quantitykind:Acceleration */
    "Acceleration": NamedNode<'http://qudt.org/vocab/quantitykind/Acceleration'>;
    /** Applicable units are those of quantitykind:Acceleration */
    "AccelerationOfGravity": NamedNode<'http://qudt.org/vocab/quantitykind/AccelerationOfGravity'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "AcceptorDensity": NamedNode<'http://qudt.org/vocab/quantitykind/AcceptorDensity'>;
    /** Applicable units are those of quantitykind:Energy */
    "AcceptorIonizationEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/AcceptorIonizationEnergy'>;
    /** Applicable units are those of quantitykind:Acidity */
    "Acidity": NamedNode<'http://qudt.org/vocab/quantitykind/Acidity'>;
    /** Applicable units are those of quantitykind:AcousticImpedance */
    "AcousticImpedance": NamedNode<'http://qudt.org/vocab/quantitykind/AcousticImpedance'>;
    /** Applicable units are those of quantitykind:Action */
    "Action": NamedNode<'http://qudt.org/vocab/quantitykind/Action'>;
    /** Action Time (sec) */
    "ActionTime": NamedNode<'http://qudt.org/vocab/quantitykind/ActionTime'>;
    /** Applicable units are those of quantitykind:Energy */
    "ActiveEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ActiveEnergy'>;
    /** Applicable units are those of quantitykind:ActivePower */
    "ActivePower": NamedNode<'http://qudt.org/vocab/quantitykind/ActivePower'>;
    /** Applicable units are those of quantitykind:Activity */
    "Activity": NamedNode<'http://qudt.org/vocab/quantitykind/Activity'>;
    /** Applicable units are those of quantitykind:ActivityCoefficient */
    "ActivityCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/ActivityCoefficient'>;
    /** Applicable units are those of quantitykind:ActivityConcentration */
    "ActivityConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/ActivityConcentration'>;
    /** Applicable units are those of quantitykind:MassicActivity */
    "ActivityRelatedByMass": NamedNode<'http://qudt.org/vocab/quantitykind/ActivityRelatedByMass'>;
    "ActivityThresholds": NamedNode<'http://qudt.org/vocab/quantitykind/ActivityThresholds'>;
    /** Applicable units are those of quantitykind:Time */
    "Adaptation": NamedNode<'http://qudt.org/vocab/quantitykind/Adaptation'>;
    /** Applicable units are those of quantitykind:Admittance */
    "Admittance": NamedNode<'http://qudt.org/vocab/quantitykind/Admittance'>;
    /** Applicable units are those of quantitykind:Energy */
    "AlphaDisintegrationEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/AlphaDisintegrationEnergy'>;
    /** Applicable units are those of quantitykind:Length */
    "Altitude": NamedNode<'http://qudt.org/vocab/quantitykind/Altitude'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "AmbientPressure": NamedNode<'http://qudt.org/vocab/quantitykind/AmbientPressure'>;
    "AmountOfBiologicallyActiveSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfBiologicallyActiveSubstance'>;
    /** Applicable units are those of quantitykind:AmountOfCloudCover */
    "AmountOfCloudCover": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfCloudCover'>;
    /** Applicable units are those of quantitykind:AmountOfSubstance */
    "AmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstance'>;
    /** Applicable units are those of quantitykind:Concentration */
    "AmountOfSubstanceConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstanceConcentration'>;
    /** Applicable units are those of quantitykind:AmountOfSubstanceFraction */
    "AmountOfSubstanceFraction": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstanceFraction'>;
    /** Applicable units are those of quantitykind:Concentration */
    "AmountOfSubstanceIonConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstanceIonConcentration'>;
    /** Applicable units are those of quantitykind:AmountOfSubstancePerMass */
    "AmountOfSubstancePerMass": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstancePerMass'>;
    /** Applicable units are those of quantitykind:AmountOfSubstancePerMassPressure */
    "AmountOfSubstancePerMassPressure": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstancePerMassPressure'>;
    /** Applicable units are those of quantitykind:Concentration */
    "AmountOfSubstancePerVolume": NamedNode<'http://qudt.org/vocab/quantitykind/AmountOfSubstancePerVolume'>;
    /** Applicable units are those of quantitykind:Angle */
    "Angle": NamedNode<'http://qudt.org/vocab/quantitykind/Angle'>;
    /** Applicable units are those of quantitykind:Angle */
    "AngleOfAttack": NamedNode<'http://qudt.org/vocab/quantitykind/AngleOfAttack'>;
    /** Applicable units are those of quantitykind:Angle */
    "AngleOfOpticalRotation": NamedNode<'http://qudt.org/vocab/quantitykind/AngleOfOpticalRotation'>;
    /** Applicable units are those of quantitykind:AngularAcceleration */
    "AngularAcceleration": NamedNode<'http://qudt.org/vocab/quantitykind/AngularAcceleration'>;
    /** Applicable units are those of quantitykind:AngularCrossSection */
    "AngularCrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/AngularCrossSection'>;
    /** Applicable units are those of quantitykind:Angle */
    "AngularDistance": NamedNode<'http://qudt.org/vocab/quantitykind/AngularDistance'>;
    /** Applicable units are those of quantitykind:AngularFrequency */
    "AngularFrequency": NamedNode<'http://qudt.org/vocab/quantitykind/AngularFrequency'>;
    /** Applicable units are those of quantitykind:AngularImpulse */
    "AngularImpulse": NamedNode<'http://qudt.org/vocab/quantitykind/AngularImpulse'>;
    /** Applicable units are those of quantitykind:AngularMomentum */
    "AngularMomentum": NamedNode<'http://qudt.org/vocab/quantitykind/AngularMomentum'>;
    /** Applicable units are those of quantitykind:AngularMomentumPerAngle */
    "AngularMomentumPerAngle": NamedNode<'http://qudt.org/vocab/quantitykind/AngularMomentumPerAngle'>;
    /** Applicable units are those of quantitykind:AngularReciprocalLatticeVector */
    "AngularReciprocalLatticeVector": NamedNode<'http://qudt.org/vocab/quantitykind/AngularReciprocalLatticeVector'>;
    /** Applicable units are those of quantitykind:AngularVelocity */
    "AngularVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/AngularVelocity'>;
    /** Applicable units are those of quantitykind:AngularWavenumber */
    "AngularWavenumber": NamedNode<'http://qudt.org/vocab/quantitykind/AngularWavenumber'>;
    /** Applicable units are those of quantitykind:Length */
    "ApogeeRadius": NamedNode<'http://qudt.org/vocab/quantitykind/ApogeeRadius'>;
    /** Applicable units are those of quantitykind:ComplexPower */
    "ApparentPower": NamedNode<'http://qudt.org/vocab/quantitykind/ApparentPower'>;
    /** Applicable units are those of quantitykind:Area */
    "Area": NamedNode<'http://qudt.org/vocab/quantitykind/Area'>;
    /** Applicable units are those of quantitykind:AreaAngle */
    "AreaAngle": NamedNode<'http://qudt.org/vocab/quantitykind/AreaAngle'>;
    /** Applicable units are those of quantitykind:AreaBitDensity */
    "AreaBitDensity": NamedNode<'http://qudt.org/vocab/quantitykind/AreaBitDensity'>;
    /** Applicable units are those of quantitykind:ElectricChargePerArea */
    "AreaChargeDensity": NamedNode<'http://qudt.org/vocab/quantitykind/AreaChargeDensity'>;
    /** Applicable units are those of quantitykind:MassPerArea */
    "AreaMass": NamedNode<'http://qudt.org/vocab/quantitykind/AreaMass'>;
    /** Applicable units are those of quantitykind:AreaPerLength */
    "AreaPerLength": NamedNode<'http://qudt.org/vocab/quantitykind/AreaPerLength'>;
    /** Applicable units are those of quantitykind:AreaPerPower */
    "AreaPerPower": NamedNode<'http://qudt.org/vocab/quantitykind/AreaPerPower'>;
    /** Applicable units are those of quantitykind:AreaPerTime */
    "AreaPerTime": NamedNode<'http://qudt.org/vocab/quantitykind/AreaPerTime'>;
    /** Applicable units are those of quantitykind:AreaRatio */
    "AreaRatio": NamedNode<'http://qudt.org/vocab/quantitykind/AreaRatio'>;
    /** Applicable units are those of quantitykind:AreaTemperature */
    "AreaTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/AreaTemperature'>;
    /** Applicable units are those of quantitykind:AreaThermalExpansion */
    "AreaThermalExpansion": NamedNode<'http://qudt.org/vocab/quantitykind/AreaThermalExpansion'>;
    /** Applicable units are those of quantitykind:AreaTime */
    "AreaTime": NamedNode<'http://qudt.org/vocab/quantitykind/AreaTime'>;
    /** Applicable units are those of quantitykind:AreaTimeTemperature */
    "AreaTimeTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/AreaTimeTemperature'>;
    "AreicChargeDensityOrElectricFluxDensityOrElectricPolarization": NamedNode<'http://qudt.org/vocab/quantitykind/AreicChargeDensityOrElectricFluxDensityOrElectricPolarization'>;
    "AreicDataVolume": NamedNode<'http://qudt.org/vocab/quantitykind/AreicDataVolume'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "AreicEnergyFlow": NamedNode<'http://qudt.org/vocab/quantitykind/AreicEnergyFlow'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "AreicHeatFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/AreicHeatFlowRate'>;
    /** Applicable units are those of quantitykind:MassPerArea */
    "AreicMass": NamedNode<'http://qudt.org/vocab/quantitykind/AreicMass'>;
    "AreicTorque": NamedNode<'http://qudt.org/vocab/quantitykind/AreicTorque'>;
    "Asset": NamedNode<'http://qudt.org/vocab/quantitykind/Asset'>;
    /** Applicable units are those of quantitykind:AtmosphericHydroxylationRate */
    "AtmosphericHydroxylationRate": NamedNode<'http://qudt.org/vocab/quantitykind/AtmosphericHydroxylationRate'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "AtmosphericPressure": NamedNode<'http://qudt.org/vocab/quantitykind/AtmosphericPressure'>;
    /** Applicable units are those of quantitykind:Area */
    "AtomicAttenuationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/AtomicAttenuationCoefficient'>;
    /** Applicable units are those of quantitykind:ElectricCharge */
    "AtomicCharge": NamedNode<'http://qudt.org/vocab/quantitykind/AtomicCharge'>;
    /** Applicable units are those of quantitykind:Energy */
    "AtomicEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/AtomicEnergy'>;
    /** Applicable units are those of quantitykind:Mass */
    "AtomicMass": NamedNode<'http://qudt.org/vocab/quantitykind/AtomicMass'>;
    /** Applicable units are those of quantitykind:AtomicNumber */
    "AtomicNumber": NamedNode<'http://qudt.org/vocab/quantitykind/AtomicNumber'>;
    "AtomicStoppingPower": NamedNode<'http://qudt.org/vocab/quantitykind/AtomicStoppingPower'>;
    /** Applicable units are those of quantitykind:AtomScatteringFactor */
    "AtomScatteringFactor": NamedNode<'http://qudt.org/vocab/quantitykind/AtomScatteringFactor'>;
    /** Applicable units are those of quantitykind:AttenuationCoefficient */
    "AttenuationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/AttenuationCoefficient'>;
    /** Applicable units are those of quantitykind:SoundPowerLevel */
    "AuditoryThresholds": NamedNode<'http://qudt.org/vocab/quantitykind/AuditoryThresholds'>;
    /** Applicable units are those of quantitykind:MagneticFieldStrength_H */
    "AuxillaryMagneticField": NamedNode<'http://qudt.org/vocab/quantitykind/AuxillaryMagneticField'>;
    /** Applicable units are those of quantitykind:Energy */
    "AverageEnergyLossPerElementaryChargeProduced": NamedNode<'http://qudt.org/vocab/quantitykind/AverageEnergyLossPerElementaryChargeProduced'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "AverageHeadEndPressure": NamedNode<'http://qudt.org/vocab/quantitykind/AverageHeadEndPressure'>;
    /** Applicable units are those of quantitykind:AverageLogarithmicEnergyDecrement */
    "AverageLogarithmicEnergyDecrement": NamedNode<'http://qudt.org/vocab/quantitykind/AverageLogarithmicEnergyDecrement'>;
    /** Avg Specific Impulse (lbf-sec/lbm) */
    "AverageSpecificImpulse": NamedNode<'http://qudt.org/vocab/quantitykind/AverageSpecificImpulse'>;
    /** Applicable units are those of quantitykind:Force */
    "AverageVacuumThrust": NamedNode<'http://qudt.org/vocab/quantitykind/AverageVacuumThrust'>;
    /** Applicable units are those of quantitykind:Angle */
    "Azimuth": NamedNode<'http://qudt.org/vocab/quantitykind/Azimuth'>;
    "BandwidthDistanceProduct": NamedNode<'http://qudt.org/vocab/quantitykind/BandwidthDistanceProduct'>;
    "BandwidthLengthProduct": NamedNode<'http://qudt.org/vocab/quantitykind/BandwidthLengthProduct'>;
    /** Applicable units are those of quantitykind:Basicity */
    "Basicity": NamedNode<'http://qudt.org/vocab/quantitykind/Basicity'>;
    /** Applicable units are those of quantitykind:BatteryCapacity */
    "BatteryCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/BatteryCapacity'>;
    /** Applicable units are those of quantitykind:Torque */
    "BendingMomentOfForce": NamedNode<'http://qudt.org/vocab/quantitykind/BendingMomentOfForce'>;
    /** Applicable units are those of quantitykind:Energy */
    "BetaDisintegrationEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/BetaDisintegrationEnergy'>;
    /** Applicable units are those of quantitykind:Angle */
    "BevelGearPitchAngle": NamedNode<'http://qudt.org/vocab/quantitykind/BevelGearPitchAngle'>;
    /** Applicable units are those of quantitykind:BindingFraction */
    "BindingFraction": NamedNode<'http://qudt.org/vocab/quantitykind/BindingFraction'>;
    /** Applicable units are those of quantitykind:BioconcentrationFactor */
    "BioconcentrationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/BioconcentrationFactor'>;
    /** Applicable units are those of quantitykind:BiodegredationHalfLife */
    "BiodegredationHalfLife": NamedNode<'http://qudt.org/vocab/quantitykind/BiodegredationHalfLife'>;
    "BiogeochemicalRate": NamedNode<'http://qudt.org/vocab/quantitykind/BiogeochemicalRate'>;
    "BitDataVolume": NamedNode<'http://qudt.org/vocab/quantitykind/BitDataVolume'>;
    /** Applicable units are those of quantitykind:BitRate */
    "BitRate": NamedNode<'http://qudt.org/vocab/quantitykind/BitRate'>;
    /** Applicable units are those of quantitykind:BitRate */
    "BitTransmissionRate": NamedNode<'http://qudt.org/vocab/quantitykind/BitTransmissionRate'>;
    /** citation: https://en.wikipedia.org/wiki/Blood_sugar_level */
    "BloodGlucoseLevel_Mass": NamedNode<'http://qudt.org/vocab/quantitykind/BloodGlucoseLevel_Mass'>;
    /** Applicable units are those of quantitykind:BloodGlucoseLevel */
    "BloodGlucoseLevel": NamedNode<'http://qudt.org/vocab/quantitykind/BloodGlucoseLevel'>;
    /** Applicable units are those of quantitykind:BodyMassIndex */
    "BodyMassIndex": NamedNode<'http://qudt.org/vocab/quantitykind/BodyMassIndex'>;
    /** Applicable units are those of quantitykind:BoilingPoint */
    "BoilingPoint": NamedNode<'http://qudt.org/vocab/quantitykind/BoilingPoint'>;
    /** Applicable units are those of quantitykind:Angle */
    "BraggAngle": NamedNode<'http://qudt.org/vocab/quantitykind/BraggAngle'>;
    /** Applicable units are those of quantitykind:Length */
    "Breadth": NamedNode<'http://qudt.org/vocab/quantitykind/Breadth'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "BucklingFactor": NamedNode<'http://qudt.org/vocab/quantitykind/BucklingFactor'>;
    /** Applicable units are those of quantitykind:BulkModulus */
    "BulkModulus": NamedNode<'http://qudt.org/vocab/quantitykind/BulkModulus'>;
    /** Applicable units are those of quantitykind:Length */
    "BurgersVector": NamedNode<'http://qudt.org/vocab/quantitykind/BurgersVector'>;
    /** Applicable units are those of quantitykind:Velocity */
    "BurnRate": NamedNode<'http://qudt.org/vocab/quantitykind/BurnRate'>;
    /** Applicable units are those of quantitykind:Time */
    "BurnTime": NamedNode<'http://qudt.org/vocab/quantitykind/BurnTime'>;
    /** Applicable units are those of quantitykind:BurstFactor */
    "BurstFactor": NamedNode<'http://qudt.org/vocab/quantitykind/BurstFactor'>;
    /** Applicable units are those of quantitykind:Count */
    "ByteDataVolume": NamedNode<'http://qudt.org/vocab/quantitykind/ByteDataVolume'>;
    /** Applicable units are those of quantitykind:ByteRate */
    "ByteRate": NamedNode<'http://qudt.org/vocab/quantitykind/ByteRate'>;
    /** Applicable units are those of quantitykind:ByteRate */
    "ByteTransmissionRate": NamedNode<'http://qudt.org/vocab/quantitykind/ByteTransmissionRate'>;
    /** Applicable units are those of quantitykind:CanonicalPartitionFunction */
    "CanonicalPartitionFunction": NamedNode<'http://qudt.org/vocab/quantitykind/CanonicalPartitionFunction'>;
    /** Applicable units are those of quantitykind:Capacitance */
    "Capacitance": NamedNode<'http://qudt.org/vocab/quantitykind/Capacitance'>;
    "Capacity": NamedNode<'http://qudt.org/vocab/quantitykind/Capacity'>;
    /** Applicable units are those of quantitykind:Time */
    "CarrierLifetime": NamedNode<'http://qudt.org/vocab/quantitykind/CarrierLifetime'>;
    /** Applicable units are those of quantitykind:Area */
    "CartesianArea": NamedNode<'http://qudt.org/vocab/quantitykind/CartesianArea'>;
    /** Applicable units are those of quantitykind:Length */
    "CartesianCoordinates": NamedNode<'http://qudt.org/vocab/quantitykind/CartesianCoordinates'>;
    /** Applicable units are those of quantitykind:Volume */
    "CartesianVolume": NamedNode<'http://qudt.org/vocab/quantitykind/CartesianVolume'>;
    /** Applicable units are those of quantitykind:CatalyticActivity */
    "CatalyticActivity": NamedNode<'http://qudt.org/vocab/quantitykind/CatalyticActivity'>;
    /** Applicable units are those of quantitykind:CatalyticActivityConcentration */
    "CatalyticActivityConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/CatalyticActivityConcentration'>;
    /** Applicable units are those of quantitykind:ThermodynamicTemperature */
    "CelsiusTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/CelsiusTemperature'>;
    /** Applicable units are those of quantitykind:Length */
    "CENTER-OF-GRAVITY_X": NamedNode<'http://qudt.org/vocab/quantitykind/CENTER-OF-GRAVITY_X'>;
    /** Applicable units are those of quantitykind:Length */
    "CENTER-OF-GRAVITY_Y": NamedNode<'http://qudt.org/vocab/quantitykind/CENTER-OF-GRAVITY_Y'>;
    /** Applicable units are those of quantitykind:Length */
    "CENTER-OF-GRAVITY_Z": NamedNode<'http://qudt.org/vocab/quantitykind/CENTER-OF-GRAVITY_Z'>;
    /** Applicable units are those of quantitykind:Length */
    "CENTER-OF-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/CENTER-OF-MASS'>;
    /** Applicable units are those of quantitykind:Length */
    "CenterOfGravity_X": NamedNode<'http://qudt.org/vocab/quantitykind/CenterOfGravity_X'>;
    /** Applicable units are those of quantitykind:Length */
    "CenterOfGravity_Y": NamedNode<'http://qudt.org/vocab/quantitykind/CenterOfGravity_Y'>;
    /** Applicable units are those of quantitykind:Length */
    "CenterOfGravity_Z": NamedNode<'http://qudt.org/vocab/quantitykind/CenterOfGravity_Z'>;
    /** Applicable units are those of quantitykind:AcousticImpedance */
    "CharacteristicAcousticImpedance": NamedNode<'http://qudt.org/vocab/quantitykind/CharacteristicAcousticImpedance'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "CharacteristicNumber": NamedNode<'http://qudt.org/vocab/quantitykind/CharacteristicNumber'>;
    /** Applicable units are those of quantitykind:Velocity */
    "CharacteristicVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/CharacteristicVelocity'>;
    /** Applicable units are those of quantitykind:ChargeNumber */
    "ChargeNumber": NamedNode<'http://qudt.org/vocab/quantitykind/ChargeNumber'>;
    /** Applicable units are those of quantitykind:ChemicalAffinity */
    "ChemicalAffinity": NamedNode<'http://qudt.org/vocab/quantitykind/ChemicalAffinity'>;
    /** Applicable units are those of quantitykind:SpecificVolume */
    "ChemicalConsumptionPerMass": NamedNode<'http://qudt.org/vocab/quantitykind/ChemicalConsumptionPerMass'>;
    /** Applicable units are those of quantitykind:MolarEnergy */
    "ChemicalPotential": NamedNode<'http://qudt.org/vocab/quantitykind/ChemicalPotential'>;
    /** Applicable units are those of quantitykind:Chromaticity */
    "Chromaticity": NamedNode<'http://qudt.org/vocab/quantitykind/Chromaticity'>;
    /** Applicable units are those of quantitykind:AreaPerTime */
    "Circulation": NamedNode<'http://qudt.org/vocab/quantitykind/Circulation'>;
    /** Applicable units are those of quantitykind:Length */
    "ClosestApproachRadius": NamedNode<'http://qudt.org/vocab/quantitykind/ClosestApproachRadius'>;
    /** Applicable units are those of quantitykind:CO2Equivalent */
    "CO2Equivalent": NamedNode<'http://qudt.org/vocab/quantitykind/CO2Equivalent'>;
    /** Applicable units are those of quantitykind:CoefficientOfHeatTransfer */
    "CoefficientOfHeatTransfer": NamedNode<'http://qudt.org/vocab/quantitykind/CoefficientOfHeatTransfer'>;
    /** Applicable units are those of quantitykind:CoefficientOfPerformance */
    "CoefficientOfPerformance": NamedNode<'http://qudt.org/vocab/quantitykind/CoefficientOfPerformance'>;
    /** Applicable units are those of quantitykind:Coercivity */
    "Coercivity": NamedNode<'http://qudt.org/vocab/quantitykind/Coercivity'>;
    /** Applicable units are those of quantitykind:Length */
    "CoherenceLength": NamedNode<'http://qudt.org/vocab/quantitykind/CoherenceLength'>;
    /** Applicable units are those of quantitykind:Temperature */
    "ColdReceptorThreshold": NamedNode<'http://qudt.org/vocab/quantitykind/ColdReceptorThreshold'>;
    /** Applicable units are those of quantitykind:CombinedNonEvaporativeHeatTransferCoefficient */
    "CombinedNonEvaporativeHeatTransferCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/CombinedNonEvaporativeHeatTransferCoefficient'>;
    /** Applicable units are those of quantitykind:ThermodynamicTemperature */
    "CombustionChamberTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/CombustionChamberTemperature'>;
    /** Applicable units are those of quantitykind:Frequency */
    "ComplexFrequency_Real": NamedNode<'http://qudt.org/vocab/quantitykind/ComplexFrequency_Real'>;
    /** Applicable units are those of quantitykind:ComplexPower */
    "ComplexPower": NamedNode<'http://qudt.org/vocab/quantitykind/ComplexPower'>;
    /** Applicable units are those of quantitykind:PlaneAngle */
    "CompoundPlaneAngle": NamedNode<'http://qudt.org/vocab/quantitykind/CompoundPlaneAngle'>;
    /** Applicable units are those of quantitykind:Compressibility */
    "Compressibility": NamedNode<'http://qudt.org/vocab/quantitykind/Compressibility'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "CompressibilityFactor": NamedNode<'http://qudt.org/vocab/quantitykind/CompressibilityFactor'>;
    /** Applicable units are those of quantitykind:Concentration */
    "Concentration": NamedNode<'http://qudt.org/vocab/quantitykind/Concentration'>;
    /** Applicable units are those of quantitykind:Conductance */
    "Conductance": NamedNode<'http://qudt.org/vocab/quantitykind/Conductance'>;
    /** Applicable units are those of quantitykind:ConductionSpeed */
    "ConductionSpeed": NamedNode<'http://qudt.org/vocab/quantitykind/ConductionSpeed'>;
    /** Applicable units are those of quantitykind:HeatFlowRate */
    "ConductiveHeatTransferRate": NamedNode<'http://qudt.org/vocab/quantitykind/ConductiveHeatTransferRate'>;
    /** Applicable units are those of quantitykind:Conductivity */
    "Conductivity": NamedNode<'http://qudt.org/vocab/quantitykind/Conductivity'>;
    /** Applicable units are those of quantitykind:ConductivityVariance_NEON */
    "ConductivityVariance_NEON": NamedNode<'http://qudt.org/vocab/quantitykind/ConductivityVariance_NEON'>;
    /** Applicable units are those of quantitykind:Constringence */
    "Constringence": NamedNode<'http://qudt.org/vocab/quantitykind/Constringence'>;
    /** Applicable units are those of quantitykind:Mass */
    "CONTRACT-END-ITEM-SPECIFICATION-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/CONTRACT-END-ITEM-SPECIFICATION-MASS'>;
    /** Applicable units are those of quantitykind:Mass */
    "CONTROL-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/CONTROL-MASS'>;
    /** Applicable units are those of quantitykind:HeatFlowRate */
    "ConvectiveHeatTransfer": NamedNode<'http://qudt.org/vocab/quantitykind/ConvectiveHeatTransfer'>;
    /** Applicable units are those of quantitykind:CorrelatedColorTemperature */
    "CorrelatedColorTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/CorrelatedColorTemperature'>;
    /** Applicable units are those of quantitykind:CostPerArea */
    "CostPerArea": NamedNode<'http://qudt.org/vocab/quantitykind/CostPerArea'>;
    /** Applicable units are those of quantitykind:CostPerEnergy */
    "CostPerEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/CostPerEnergy'>;
    /** Applicable units are those of quantitykind:CostPerMass */
    "CostPerMass": NamedNode<'http://qudt.org/vocab/quantitykind/CostPerMass'>;
    /** Applicable units are those of quantitykind:CostPerPower */
    "CostPerPower": NamedNode<'http://qudt.org/vocab/quantitykind/CostPerPower'>;
    /** Applicable units are those of quantitykind:Count */
    "Count": NamedNode<'http://qudt.org/vocab/quantitykind/Count'>;
    /** Applicable units are those of quantitykind:CountRate */
    "CountRate": NamedNode<'http://qudt.org/vocab/quantitykind/CountRate'>;
    /** Applicable units are those of quantitykind:CouplingFactor */
    "CouplingFactor": NamedNode<'http://qudt.org/vocab/quantitykind/CouplingFactor'>;
    /** Applicable units are those of quantitykind:Area */
    "CrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/CrossSection'>;
    /** Applicable units are those of quantitykind:Area */
    "CrossSectionalArea": NamedNode<'http://qudt.org/vocab/quantitykind/CrossSectionalArea'>;
    /** Applicable units are those of quantitykind:ExpansionRatio */
    "CubicExpansionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/CubicExpansionCoefficient'>;
    /** Applicable units are those of quantitykind:Temperature */
    "CurieTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/CurieTemperature'>;
    /** Applicable units are those of quantitykind:Currency */
    "Currency": NamedNode<'http://qudt.org/vocab/quantitykind/Currency'>;
    /** Applicable units are those of quantitykind:CurrencyPerFlight */
    "CurrencyPerFlight": NamedNode<'http://qudt.org/vocab/quantitykind/CurrencyPerFlight'>;
    /** Applicable units are those of quantitykind:CurrentLinkage */
    "CurrentLinkage": NamedNode<'http://qudt.org/vocab/quantitykind/CurrentLinkage'>;
    "CurrentOfTheAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/CurrentOfTheAmountOfSubstance'>;
    /** Applicable units are those of quantitykind:Curvature */
    "Curvature": NamedNode<'http://qudt.org/vocab/quantitykind/Curvature'>;
    /** Applicable units are those of quantitykind:CurvatureFromRadius */
    "CurvatureFromRadius": NamedNode<'http://qudt.org/vocab/quantitykind/CurvatureFromRadius'>;
    "CutoffCurrentRating": NamedNode<'http://qudt.org/vocab/quantitykind/CutoffCurrentRating'>;
    /** Applicable units are those of quantitykind:AngularFrequency */
    "CyclotronAngularFrequency": NamedNode<'http://qudt.org/vocab/quantitykind/CyclotronAngularFrequency'>;
    /** Applicable units are those of quantitykind:DataRate */
    "DataRate": NamedNode<'http://qudt.org/vocab/quantitykind/DataRate'>;
    /** Applicable units are those of quantitykind:DatasetOfBits */
    "DatasetOfBits": NamedNode<'http://qudt.org/vocab/quantitykind/DatasetOfBits'>;
    "DatasetOfBytes": NamedNode<'http://qudt.org/vocab/quantitykind/DatasetOfBytes'>;
    "DataTransmissionRate": NamedNode<'http://qudt.org/vocab/quantitykind/DataTransmissionRate'>;
    /** Applicable units are those of quantitykind:Debye-WallerFactor */
    "Debye-WallerFactor": NamedNode<'http://qudt.org/vocab/quantitykind/Debye-WallerFactor'>;
    /** Applicable units are those of quantitykind:AngularFrequency */
    "DebyeAngularFrequency": NamedNode<'http://qudt.org/vocab/quantitykind/DebyeAngularFrequency'>;
    /** Applicable units are those of quantitykind:DebyeAngularWavenumber */
    "DebyeAngularWavenumber": NamedNode<'http://qudt.org/vocab/quantitykind/DebyeAngularWavenumber'>;
    /** Applicable units are those of quantitykind:Temperature */
    "DebyeTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/DebyeTemperature'>;
    /** Applicable units are those of quantitykind:DecayConstant */
    "DecayConstant": NamedNode<'http://qudt.org/vocab/quantitykind/DecayConstant'>;
    /** Applicable units are those of quantitykind:DegreeOfDissociation */
    "DegreeOfDissociation": NamedNode<'http://qudt.org/vocab/quantitykind/DegreeOfDissociation'>;
    /** Applicable units are those of quantitykind:Velocity */
    "DELTA-V": NamedNode<'http://qudt.org/vocab/quantitykind/DELTA-V'>;
    /** Applicable units are those of quantitykind:Density */
    "Density": NamedNode<'http://qudt.org/vocab/quantitykind/Density'>;
    /** Applicable units are those of quantitykind:MassDensity */
    "DensityInCombustionChamber": NamedNode<'http://qudt.org/vocab/quantitykind/DensityInCombustionChamber'>;
    /** Applicable units are those of quantitykind:DensityOfStates */
    "DensityOfStates": NamedNode<'http://qudt.org/vocab/quantitykind/DensityOfStates'>;
    /** Applicable units are those of quantitykind:Density */
    "DensityOfTheExhaustGases": NamedNode<'http://qudt.org/vocab/quantitykind/DensityOfTheExhaustGases'>;
    /** Applicable units are those of quantitykind:Length */
    "Depth": NamedNode<'http://qudt.org/vocab/quantitykind/Depth'>;
    /** Applicable units are those of quantitykind:Temperature */
    "DewPointTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/DewPointTemperature'>;
    /** Applicable units are those of quantitykind:Length */
    "Diameter": NamedNode<'http://qudt.org/vocab/quantitykind/Diameter'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "DiastolicBloodPressure": NamedNode<'http://qudt.org/vocab/quantitykind/DiastolicBloodPressure'>;
    /** Applicable units are those of quantitykind:Area */
    "DiffusionArea": NamedNode<'http://qudt.org/vocab/quantitykind/DiffusionArea'>;
    /** Applicable units are those of quantitykind:DiffusionCoefficient */
    "DiffusionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/DiffusionCoefficient'>;
    /** Applicable units are those of quantitykind:Length */
    "DiffusionCoefficientForFluenceRate": NamedNode<'http://qudt.org/vocab/quantitykind/DiffusionCoefficientForFluenceRate'>;
    /** Applicable units are those of quantitykind:Length */
    "DiffusionLength": NamedNode<'http://qudt.org/vocab/quantitykind/DiffusionLength'>;
    /** Applicable units are those of quantitykind:DigitRate */
    "DigitRate": NamedNode<'http://qudt.org/vocab/quantitykind/DigitRate'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "Dimensionless": NamedNode<'http://qudt.org/vocab/quantitykind/Dimensionless'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "DimensionlessRatio": NamedNode<'http://qudt.org/vocab/quantitykind/DimensionlessRatio'>;
    /** Applicable units are those of quantitykind:Length */
    "Displacement": NamedNode<'http://qudt.org/vocab/quantitykind/Displacement'>;
    /** Applicable units are those of quantitykind:DisplacementCurrent */
    "DisplacementCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/DisplacementCurrent'>;
    /** Applicable units are those of quantitykind:DisplacementCurrentDensity */
    "DisplacementCurrentDensity": NamedNode<'http://qudt.org/vocab/quantitykind/DisplacementCurrentDensity'>;
    /** Applicable units are those of quantitykind:Length */
    "DisplacementVectorOfIon": NamedNode<'http://qudt.org/vocab/quantitykind/DisplacementVectorOfIon'>;
    /** Applicable units are those of quantitykind:Dissipance */
    "Dissipance": NamedNode<'http://qudt.org/vocab/quantitykind/Dissipance'>;
    /** Applicable units are those of quantitykind:Distance */
    "Distance": NamedNode<'http://qudt.org/vocab/quantitykind/Distance'>;
    /** Applicable units are those of quantitykind:Distance */
    "DistanceTraveledDuringBurn": NamedNode<'http://qudt.org/vocab/quantitykind/DistanceTraveledDuringBurn'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "DonorDensity": NamedNode<'http://qudt.org/vocab/quantitykind/DonorDensity'>;
    /** Applicable units are those of quantitykind:Energy */
    "DonorIonizationEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/DonorIonizationEnergy'>;
    /** Applicable units are those of quantitykind:DoseEquivalent */
    "DoseEquivalent": NamedNode<'http://qudt.org/vocab/quantitykind/DoseEquivalent'>;
    /** Applicable units are those of quantitykind:DoseEquivalentQualityFactor */
    "DoseEquivalentQualityFactor": NamedNode<'http://qudt.org/vocab/quantitykind/DoseEquivalentQualityFactor'>;
    "DoseEquivalentRate": NamedNode<'http://qudt.org/vocab/quantitykind/DoseEquivalentRate'>;
    /** Applicable units are those of quantitykind:DotsPerInch */
    "DotsPerInch": NamedNode<'http://qudt.org/vocab/quantitykind/DotsPerInch'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "DragCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/DragCoefficient'>;
    /** Applicable units are those of quantitykind:Force */
    "DragForce": NamedNode<'http://qudt.org/vocab/quantitykind/DragForce'>;
    /** Applicable units are those of quantitykind:Mass */
    "DRY-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/DRY-MASS'>;
    /** Applicable units are those of quantitykind:Temperature */
    "DryBulbTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/DryBulbTemperature'>;
    /** Applicable units are those of quantitykind:DryVolume */
    "DryVolume": NamedNode<'http://qudt.org/vocab/quantitykind/DryVolume'>;
    /** Applicable units are those of quantitykind:DutyCycle */
    "DutyCycle": NamedNode<'http://qudt.org/vocab/quantitykind/DutyCycle'>;
    /** Applicable units are those of quantitykind:Duv */
    "Duv": NamedNode<'http://qudt.org/vocab/quantitykind/Duv'>;
    /** Applicable units are those of quantitykind:Force */
    "DynamicFriction": NamedNode<'http://qudt.org/vocab/quantitykind/DynamicFriction'>;
    /** Applicable units are those of quantitykind:FrictionCoefficient */
    "DynamicFrictionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/DynamicFrictionCoefficient'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "DynamicPressure": NamedNode<'http://qudt.org/vocab/quantitykind/DynamicPressure'>;
    /** Applicable units are those of quantitykind:DynamicViscosity */
    "DynamicViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/DynamicViscosity'>;
    /** Applicable units are those of quantitykind:Velocity */
    "EarthClosestApproachVehicleVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/EarthClosestApproachVehicleVelocity'>;
    /** Applicable units are those of quantitykind:EarthquakeMagnitude */
    "EarthquakeMagnitude": NamedNode<'http://qudt.org/vocab/quantitykind/EarthquakeMagnitude'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "EccentricityOfOrbit": NamedNode<'http://qudt.org/vocab/quantitykind/EccentricityOfOrbit'>;
    /** Applicable units are those of quantitykind:Velocity */
    "EffectiveExhaustVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/EffectiveExhaustVelocity'>;
    /** Applicable units are those of quantitykind:Mass */
    "EffectiveMass": NamedNode<'http://qudt.org/vocab/quantitykind/EffectiveMass'>;
    /** Applicable units are those of quantitykind:MultiplicationFactor */
    "EffectiveMultiplicationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/EffectiveMultiplicationFactor'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "Efficiency": NamedNode<'http://qudt.org/vocab/quantitykind/Efficiency'>;
    /** Applicable units are those of quantitykind:EinsteinCoefficients */
    "EinsteinCoefficients": NamedNode<'http://qudt.org/vocab/quantitykind/EinsteinCoefficients'>;
    /** Applicable units are those of quantitykind:EinsteinTransitionProbability */
    "EinsteinTransitionProbability": NamedNode<'http://qudt.org/vocab/quantitykind/EinsteinTransitionProbability'>;
    "EinsteinTransitionProbabilityForSpontaneousOrInducedEmissionAndAbsorption": NamedNode<'http://qudt.org/vocab/quantitykind/EinsteinTransitionProbabilityForSpontaneousOrInducedEmissionAndAbsorption'>;
    /** Applicable units are those of quantitykind:ElectricalConductance */
    "ElectricalConductance": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricalConductance'>;
    /** Applicable units are those of quantitykind:SpecificPower */
    "ElectricalPowerToMassRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricalPowerToMassRatio'>;
    /** Applicable units are those of quantitykind:ElectricalResistance */
    "ElectricalResistance": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricalResistance'>;
    /** Applicable units are those of quantitykind:ElectricCharge */
    "ElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCharge'>;
    /** Applicable units are those of quantitykind:ElectricChargeDensity */
    "ElectricChargeDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargeDensity'>;
    /** Applicable units are those of quantitykind:ElectricChargeLinearDensity */
    "ElectricChargeLinearDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargeLinearDensity'>;
    /** Applicable units are those of quantitykind:ElectricChargeLineDensity */
    "ElectricChargeLineDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargeLineDensity'>;
    /** Applicable units are those of quantitykind:ElectricChargePerAmountOfSubstance */
    "ElectricChargePerAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargePerAmountOfSubstance'>;
    /** Applicable units are those of quantitykind:ElectricChargePerArea */
    "ElectricChargePerArea": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargePerArea'>;
    /** Applicable units are those of quantitykind:ElectricChargePerMass */
    "ElectricChargePerMass": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargePerMass'>;
    /** Applicable units are those of quantitykind:ElectricChargeSurfaceDensity */
    "ElectricChargeSurfaceDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargeSurfaceDensity'>;
    /** Applicable units are those of quantitykind:ElectricChargeVolumeDensity */
    "ElectricChargeVolumeDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricChargeVolumeDensity'>;
    /** Applicable units are those of quantitykind:ElectricConductivity */
    "ElectricConductivity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricConductivity'>;
    /** Applicable units are those of quantitykind:ElectricCurrent */
    "ElectricCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrent'>;
    /** Applicable units are those of quantitykind:ElectricCurrentDensity */
    "ElectricCurrentDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrentDensity'>;
    /** Applicable units are those of quantitykind:ElectricCurrentPerAngle */
    "ElectricCurrentPerAngle": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrentPerAngle'>;
    /** Applicable units are those of quantitykind:ElectricCurrentPerEnergy */
    "ElectricCurrentPerEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrentPerEnergy'>;
    /** Applicable units are those of quantitykind:LinearElectricCurrentDensity */
    "ElectricCurrentPerLength": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrentPerLength'>;
    /** Applicable units are those of quantitykind:ElectricCurrentPerTemperature */
    "ElectricCurrentPerTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrentPerTemperature'>;
    /** Applicable units are those of quantitykind:ElectricCurrentPhasor */
    "ElectricCurrentPhasor": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricCurrentPhasor'>;
    /** Applicable units are those of quantitykind:ElectricDipoleMoment_CubicPerEnergy_Squared */
    "ElectricDipoleMoment_CubicPerEnergy_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricDipoleMoment_CubicPerEnergy_Squared'>;
    /** Applicable units are those of quantitykind:ElectricDipoleMoment_QuarticPerEnergy_Cubic */
    "ElectricDipoleMoment_QuarticPerEnergy_Cubic": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricDipoleMoment_QuarticPerEnergy_Cubic'>;
    /** Applicable units are those of quantitykind:ElectricDipoleMoment */
    "ElectricDipoleMoment": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricDipoleMoment'>;
    /** Applicable units are those of quantitykind:ElectricChargePerArea */
    "ElectricDisplacement": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricDisplacement'>;
    /** Applicable units are those of quantitykind:ElectricChargePerArea */
    "ElectricDisplacementField": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricDisplacementField'>;
    /** Applicable units are those of quantitykind:ElectricField */
    "ElectricField": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricField'>;
    /** Applicable units are those of quantitykind:ElectricFieldStrength */
    "ElectricFieldStrength": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricFieldStrength'>;
    /** Applicable units are those of quantitykind:ElectricFlux */
    "ElectricFlux": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricFlux'>;
    /** Applicable units are those of quantitykind:ElectricChargePerArea */
    "ElectricFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricFluxDensity'>;
    /** Applicable units are those of quantitykind:ElectricPolarizability */
    "ElectricPolarizability": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricPolarizability'>;
    /** Applicable units are those of quantitykind:ElectricPolarization */
    "ElectricPolarization": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricPolarization'>;
    /** Applicable units are those of quantitykind:ElectricPotential */
    "ElectricPotential": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricPotential'>;
    /** Applicable units are those of quantitykind:ElectricPotentialDifference */
    "ElectricPotentialDifference": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricPotentialDifference'>;
    /** Applicable units are those of quantitykind:Power */
    "ElectricPower": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricPower'>;
    /** Applicable units are those of quantitykind:Mass */
    "ElectricPropulsionPropellantMass": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricPropulsionPropellantMass'>;
    /** Applicable units are those of quantitykind:ElectricQuadrupoleMoment */
    "ElectricQuadrupoleMoment": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricQuadrupoleMoment'>;
    /** Applicable units are those of quantitykind:ElectricSusceptibility */
    "ElectricSusceptibility": NamedNode<'http://qudt.org/vocab/quantitykind/ElectricSusceptibility'>;
    /** Applicable units are those of quantitykind:ElectrolyticConductivity */
    "ElectrolyticConductivity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectrolyticConductivity'>;
    /** Applicable units are those of quantitykind:ElectromagneticEnergyDensity */
    "ElectromagneticEnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectromagneticEnergyDensity'>;
    /** Applicable units are those of quantitykind:ElectromagneticPermeability */
    "ElectromagneticPermeability": NamedNode<'http://qudt.org/vocab/quantitykind/ElectromagneticPermeability'>;
    /** Applicable units are those of quantitykind:ElectromagneticPermeabilityRatio */
    "ElectromagneticPermeabilityRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ElectromagneticPermeabilityRatio'>;
    /** Applicable units are those of quantitykind:ElectromagneticWavePhaseSpeed */
    "ElectromagneticWavePhaseSpeed": NamedNode<'http://qudt.org/vocab/quantitykind/ElectromagneticWavePhaseSpeed'>;
    /** Applicable units are those of quantitykind:EnergyPerElectricCharge */
    "ElectromotiveForce": NamedNode<'http://qudt.org/vocab/quantitykind/ElectromotiveForce'>;
    /** Applicable units are those of quantitykind:Energy */
    "ElectronAffinity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectronAffinity'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "ElectronDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ElectronDensity'>;
    /** Applicable units are those of quantitykind:Length */
    "ElectronMeanFreePath": NamedNode<'http://qudt.org/vocab/quantitykind/ElectronMeanFreePath'>;
    /** Applicable units are those of quantitykind:Mobility */
    "ElectronMobility": NamedNode<'http://qudt.org/vocab/quantitykind/ElectronMobility'>;
    /** Applicable units are those of quantitykind:Length */
    "ElectronRadius": NamedNode<'http://qudt.org/vocab/quantitykind/ElectronRadius'>;
    /** Height measurement relative to the Normaal Amsterdams Peil (NAP) (en: Amsterdam Ordnance System). Being a form of gravity related height */
    "ElevationRelativeToNAP": NamedNode<'http://qudt.org/vocab/quantitykind/ElevationRelativeToNAP'>;
    /** Applicable units are those of quantitykind:Velocity */
    "EllipticalOrbitApogeeVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/EllipticalOrbitApogeeVelocity'>;
    /** Applicable units are those of quantitykind:Velocity */
    "EllipticalOrbitPerigeeVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/EllipticalOrbitPerigeeVelocity'>;
    /** Applicable units are those of quantitykind:Emissivity */
    "Emissivity": NamedNode<'http://qudt.org/vocab/quantitykind/Emissivity'>;
    "Energy_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/Energy_Squared'>;
    /** Applicable units are those of quantitykind:Energy */
    "Energy": NamedNode<'http://qudt.org/vocab/quantitykind/Energy'>;
    /** Applicable units are those of quantitykind:Energy */
    "EnergyContent": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyContent'>;
    /** Applicable units are those of quantitykind:EnergyDensity */
    "EnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyDensity'>;
    /** Applicable units are those of quantitykind:EnergyDensityOfStates */
    "EnergyDensityOfStates": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyDensityOfStates'>;
    "EnergyExpenditure": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyExpenditure'>;
    /** Applicable units are those of quantitykind:EnergyFluence */
    "EnergyFluence": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyFluence'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "EnergyFluenceRate": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyFluenceRate'>;
    /** Applicable units are those of quantitykind:Energy */
    "EnergyImparted": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyImparted'>;
    /** Applicable units are those of quantitykind:Energy */
    "EnergyInternal": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyInternal'>;
    /** Applicable units are those of quantitykind:Energy */
    "EnergyKinetic": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyKinetic'>;
    /** Applicable units are those of quantitykind:Energy */
    "EnergyLevel": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyLevel'>;
    /** Applicable units are those of quantitykind:EnergyPerArea */
    "EnergyPerArea": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyPerArea'>;
    /** Applicable units are those of quantitykind:EnergyPerAreaElectricCharge */
    "EnergyPerAreaElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyPerAreaElectricCharge'>;
    /** Applicable units are those of quantitykind:EnergyPerElectricCharge */
    "EnergyPerElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyPerElectricCharge'>;
    /** Applicable units are those of quantitykind:EnergyPerMagneticFluxDensity_Squared */
    "EnergyPerMagneticFluxDensity_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyPerMagneticFluxDensity_Squared'>;
    /** Applicable units are those of quantitykind:EnergyPerMassAmountOfSubstance */
    "EnergyPerMassAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyPerMassAmountOfSubstance'>;
    /** Applicable units are those of quantitykind:EnergyPerTemperature */
    "EnergyPerTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/EnergyPerTemperature'>;
    /** Applicable units are those of quantitykind:Energy */
    "Enthalpy": NamedNode<'http://qudt.org/vocab/quantitykind/Enthalpy'>;
    /** Applicable units are those of quantitykind:Entropy */
    "Entropy": NamedNode<'http://qudt.org/vocab/quantitykind/Entropy'>;
    /** Applicable units are those of quantitykind:EquilibriumConstant */
    "EquilibriumConstant": NamedNode<'http://qudt.org/vocab/quantitykind/EquilibriumConstant'>;
    "EquilibriumConstantBasedOnConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/EquilibriumConstantBasedOnConcentration'>;
    "EquilibriumConstantBasedOnPressure": NamedNode<'http://qudt.org/vocab/quantitykind/EquilibriumConstantBasedOnPressure'>;
    /** Applicable units are those of quantitykind:EquilibriumConstant */
    "EquilibriumConstantOnConcentrationBasis": NamedNode<'http://qudt.org/vocab/quantitykind/EquilibriumConstantOnConcentrationBasis'>;
    /** Applicable units are those of quantitykind:EquilibriumConstant */
    "EquilibriumConstantOnPressureBasis": NamedNode<'http://qudt.org/vocab/quantitykind/EquilibriumConstantOnPressureBasis'>;
    /** Applicable units are those of quantitykind:Length */
    "EquilibriumPositionVectorOfIon": NamedNode<'http://qudt.org/vocab/quantitykind/EquilibriumPositionVectorOfIon'>;
    "EquivalenceDoseOutput": NamedNode<'http://qudt.org/vocab/quantitykind/EquivalenceDoseOutput'>;
    /** Applicable units are those of quantitykind:Mass */
    "Equivalent_Mass": NamedNode<'http://qudt.org/vocab/quantitykind/Equivalent_Mass'>;
    /** Applicable units are those of quantitykind:AmountOfSubstance */
    "Equivalent_Molar": NamedNode<'http://qudt.org/vocab/quantitykind/Equivalent_Molar'>;
    /** Applicable units are those of quantitykind:Area */
    "EquivalentAbsorptionArea": NamedNode<'http://qudt.org/vocab/quantitykind/EquivalentAbsorptionArea'>;
    /** Applicable units are those of quantitykind:Concentration */
    "EquivalentConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/EquivalentConcentration'>;
    /** Applicable units are those of quantitykind:Density */
    "EquivalentDensity": NamedNode<'http://qudt.org/vocab/quantitykind/EquivalentDensity'>;
    "EvaporativeHeatTransfer": NamedNode<'http://qudt.org/vocab/quantitykind/EvaporativeHeatTransfer'>;
    /** Applicable units are those of quantitykind:EvaporativeHeatTransferCoefficient */
    "EvaporativeHeatTransferCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/EvaporativeHeatTransferCoefficient'>;
    /** Applicable units are those of quantitykind:ExchangeIntegral */
    "ExchangeIntegral": NamedNode<'http://qudt.org/vocab/quantitykind/ExchangeIntegral'>;
    /** Applicable units are those of quantitykind:SpecificHeatCapacity */
    "ExhaustGasesSpecificHeat": NamedNode<'http://qudt.org/vocab/quantitykind/ExhaustGasesSpecificHeat'>;
    "ExhaustGasMeanMolecularWeight": NamedNode<'http://qudt.org/vocab/quantitykind/ExhaustGasMeanMolecularWeight'>;
    /** Applicable units are those of quantitykind:Power */
    "ExhaustStreamPower": NamedNode<'http://qudt.org/vocab/quantitykind/ExhaustStreamPower'>;
    /** Applicable units are those of quantitykind:Area */
    "ExitPlaneCrossSectionalArea": NamedNode<'http://qudt.org/vocab/quantitykind/ExitPlaneCrossSectionalArea'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "ExitPlanePressure": NamedNode<'http://qudt.org/vocab/quantitykind/ExitPlanePressure'>;
    /** Applicable units are those of quantitykind:Temperature */
    "ExitPlaneTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/ExitPlaneTemperature'>;
    /** Applicable units are those of quantitykind:ExpansionRatio */
    "ExpansionRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ExpansionRatio'>;
    /** Applicable units are those of quantitykind:ElectricChargePerMass */
    "Exposure": NamedNode<'http://qudt.org/vocab/quantitykind/Exposure'>;
    "ExposureOfIonizingRadiation": NamedNode<'http://qudt.org/vocab/quantitykind/ExposureOfIonizingRadiation'>;
    /** Applicable units are those of quantitykind:ExposureRate */
    "ExposureRate": NamedNode<'http://qudt.org/vocab/quantitykind/ExposureRate'>;
    "ExposureRateOfIonizingRadiation": NamedNode<'http://qudt.org/vocab/quantitykind/ExposureRateOfIonizingRadiation'>;
    /** Applicable units are those of quantitykind:ExtentOfReaction */
    "ExtentOfReaction": NamedNode<'http://qudt.org/vocab/quantitykind/ExtentOfReaction'>;
    /** Applicable units are those of quantitykind:Temperature */
    "FahrenheitTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/FahrenheitTemperature'>;
    /** Applicable units are those of quantitykind:Frequency */
    "FailureRate": NamedNode<'http://qudt.org/vocab/quantitykind/FailureRate'>;
    /** Applicable units are those of quantitykind:FastFissionFactor */
    "FastFissionFactor": NamedNode<'http://qudt.org/vocab/quantitykind/FastFissionFactor'>;
    /** Applicable units are those of quantitykind:FermiAngularWavenumber */
    "FermiAngularWavenumber": NamedNode<'http://qudt.org/vocab/quantitykind/FermiAngularWavenumber'>;
    /** Applicable units are those of quantitykind:Energy */
    "FermiEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/FermiEnergy'>;
    /** Applicable units are those of quantitykind:Temperature */
    "FermiTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/FermiTemperature'>;
    /** Applicable units are those of quantitykind:Mass */
    "FinalOrCurrentVehicleMass": NamedNode<'http://qudt.org/vocab/quantitykind/FinalOrCurrentVehicleMass'>;
    /** Applicable units are those of quantitykind:Volume */
    "FirstMomentOfArea": NamedNode<'http://qudt.org/vocab/quantitykind/FirstMomentOfArea'>;
    /** Applicable units are those of quantitykind:MassRatio */
    "FirstStageMassRatio": NamedNode<'http://qudt.org/vocab/quantitykind/FirstStageMassRatio'>;
    /** Applicable units are those of quantitykind:FishBiotransformationHalfLife */
    "FishBiotransformationHalfLife": NamedNode<'http://qudt.org/vocab/quantitykind/FishBiotransformationHalfLife'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "FissionCoreRadiusToHeightRatio": NamedNode<'http://qudt.org/vocab/quantitykind/FissionCoreRadiusToHeightRatio'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "FissionFuelUtilizationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/FissionFuelUtilizationFactor'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "FissionMultiplicationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/FissionMultiplicationFactor'>;
    /** Applicable units are those of quantitykind:FlashPoint */
    "FlashPoint": NamedNode<'http://qudt.org/vocab/quantitykind/FlashPoint'>;
    /** Applicable units are those of quantitykind:Mass */
    "FLIGHT-PERFORMANCE-RESERVE-PROPELLANT-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/FLIGHT-PERFORMANCE-RESERVE-PROPELLANT-MASS'>;
    /** Applicable units are those of quantitykind:Angle */
    "FlightPathAngle": NamedNode<'http://qudt.org/vocab/quantitykind/FlightPathAngle'>;
    /** Applicable units are those of quantitykind:FloatingPointCalculationCapability */
    "FloatingPointCalculationCapability": NamedNode<'http://qudt.org/vocab/quantitykind/FloatingPointCalculationCapability'>;
    /** Applicable units are those of quantitykind:Fluidity */
    "Fluidity": NamedNode<'http://qudt.org/vocab/quantitykind/Fluidity'>;
    /** Applicable units are those of quantitykind:Flux */
    "Flux": NamedNode<'http://qudt.org/vocab/quantitykind/Flux'>;
    /** Applicable units are those of quantitykind:Force */
    "Force": NamedNode<'http://qudt.org/vocab/quantitykind/Force'>;
    "ForceConstant": NamedNode<'http://qudt.org/vocab/quantitykind/ForceConstant'>;
    /** Applicable units are those of quantitykind:Force */
    "ForceMagnitude": NamedNode<'http://qudt.org/vocab/quantitykind/ForceMagnitude'>;
    /** Applicable units are those of quantitykind:ForcePerAngle */
    "ForcePerAngle": NamedNode<'http://qudt.org/vocab/quantitykind/ForcePerAngle'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "ForcePerArea": NamedNode<'http://qudt.org/vocab/quantitykind/ForcePerArea'>;
    /** Applicable units are those of quantitykind:ForcePerAreaTime */
    "ForcePerAreaTime": NamedNode<'http://qudt.org/vocab/quantitykind/ForcePerAreaTime'>;
    /** Applicable units are those of quantitykind:ForcePerElectricCharge */
    "ForcePerElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/ForcePerElectricCharge'>;
    /** Applicable units are those of quantitykind:ForcePerLength */
    "ForcePerLength": NamedNode<'http://qudt.org/vocab/quantitykind/ForcePerLength'>;
    /** Applicable units are those of quantitykind:Frequency */
    "Frequency": NamedNode<'http://qudt.org/vocab/quantitykind/Frequency'>;
    /** Applicable units are those of quantitykind:Force */
    "Friction": NamedNode<'http://qudt.org/vocab/quantitykind/Friction'>;
    /** Applicable units are those of quantitykind:FrictionCoefficient */
    "FrictionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/FrictionCoefficient'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "FUEL-BIAS": NamedNode<'http://qudt.org/vocab/quantitykind/FUEL-BIAS'>;
    /** Applicable units are those of quantitykind:Fugacity */
    "Fugacity": NamedNode<'http://qudt.org/vocab/quantitykind/Fugacity'>;
    /** Applicable units are those of quantitykind:Length */
    "FundamentalLatticeVector": NamedNode<'http://qudt.org/vocab/quantitykind/FundamentalLatticeVector'>;
    /** Applicable units are those of quantitykind:AngularReciprocalLatticeVector */
    "FundamentalReciprocalLatticeVector": NamedNode<'http://qudt.org/vocab/quantitykind/FundamentalReciprocalLatticeVector'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "Gain": NamedNode<'http://qudt.org/vocab/quantitykind/Gain'>;
    /** Applicable units are those of quantitykind:Energy */
    "GapEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/GapEnergy'>;
    "GasLeakRate": NamedNode<'http://qudt.org/vocab/quantitykind/GasLeakRate'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "GaugePressure": NamedNode<'http://qudt.org/vocab/quantitykind/GaugePressure'>;
    /** Applicable units are those of quantitykind:GeneFamilyAbundance */
    "GeneFamilyAbundance": NamedNode<'http://qudt.org/vocab/quantitykind/GeneFamilyAbundance'>;
    /** Applicable units are those of quantitykind:GeneralizedCoordinate */
    "GeneralizedCoordinate": NamedNode<'http://qudt.org/vocab/quantitykind/GeneralizedCoordinate'>;
    /** Applicable units are those of quantitykind:GeneralizedForce */
    "GeneralizedForce": NamedNode<'http://qudt.org/vocab/quantitykind/GeneralizedForce'>;
    /** Applicable units are those of quantitykind:GeneralizedMomentum */
    "GeneralizedMomentum": NamedNode<'http://qudt.org/vocab/quantitykind/GeneralizedMomentum'>;
    /** Applicable units are those of quantitykind:GeneralizedVelocity */
    "GeneralizedVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/GeneralizedVelocity'>;
    /** Applicable units are those of quantitykind:GFactorOfNucleus */
    "GFactorOfNucleus": NamedNode<'http://qudt.org/vocab/quantitykind/GFactorOfNucleus'>;
    /** Applicable units are those of quantitykind:Energy */
    "GibbsEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/GibbsEnergy'>;
    /** Applicable units are those of quantitykind:Gradient */
    "Gradient": NamedNode<'http://qudt.org/vocab/quantitykind/Gradient'>;
    /** Applicable units are those of quantitykind:CanonicalPartitionFunction */
    "GrandCanonicalPartitionFunction": NamedNode<'http://qudt.org/vocab/quantitykind/GrandCanonicalPartitionFunction'>;
    /** Applicable units are those of quantitykind:Force */
    "GravitationalAttraction": NamedNode<'http://qudt.org/vocab/quantitykind/GravitationalAttraction'>;
    /** Applicable units are those of quantitykind:Gravity_API */
    "Gravity_API": NamedNode<'http://qudt.org/vocab/quantitykind/Gravity_API'>;
    /** Applicable units are those of quantitykind:Mass */
    "GROSS-LIFT-OFF-WEIGHT": NamedNode<'http://qudt.org/vocab/quantitykind/GROSS-LIFT-OFF-WEIGHT'>;
    /** Applicable units are those of quantitykind:GroupSpeedOfSound */
    "GroupSpeedOfSound": NamedNode<'http://qudt.org/vocab/quantitykind/GroupSpeedOfSound'>;
    /** Applicable units are those of quantitykind:GrowingDegreeDay_Cereal */
    "GrowingDegreeDay_Cereal": NamedNode<'http://qudt.org/vocab/quantitykind/GrowingDegreeDay_Cereal'>;
    /** Applicable units are those of quantitykind:GruneisenParameter */
    "GruneisenParameter": NamedNode<'http://qudt.org/vocab/quantitykind/GruneisenParameter'>;
    "GustatoryThreshold": NamedNode<'http://qudt.org/vocab/quantitykind/GustatoryThreshold'>;
    "GyromagneticRatio": NamedNode<'http://qudt.org/vocab/quantitykind/GyromagneticRatio'>;
    /** Applicable units are those of quantitykind:Time */
    "Half-Life": NamedNode<'http://qudt.org/vocab/quantitykind/Half-Life'>;
    /** Applicable units are those of quantitykind:Length */
    "Half-ValueThickness": NamedNode<'http://qudt.org/vocab/quantitykind/Half-ValueThickness'>;
    /** Applicable units are those of quantitykind:HallCoefficient */
    "HallCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/HallCoefficient'>;
    /** Applicable units are those of quantitykind:HamiltonFunction */
    "HamiltonFunction": NamedNode<'http://qudt.org/vocab/quantitykind/HamiltonFunction'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "HeadEndPressure": NamedNode<'http://qudt.org/vocab/quantitykind/HeadEndPressure'>;
    /** Applicable units are those of quantitykind:HeartRate */
    "HeartRate": NamedNode<'http://qudt.org/vocab/quantitykind/HeartRate'>;
    /** Applicable units are those of quantitykind:ThermalEnergy */
    "Heat": NamedNode<'http://qudt.org/vocab/quantitykind/Heat'>;
    /** Applicable units are those of quantitykind:HeatCapacity */
    "HeatCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/HeatCapacity'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "HeatCapacityRatio": NamedNode<'http://qudt.org/vocab/quantitykind/HeatCapacityRatio'>;
    /** Applicable units are those of quantitykind:HeatFlowRate */
    "HeatFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/HeatFlowRate'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "HeatFlowRatePerArea": NamedNode<'http://qudt.org/vocab/quantitykind/HeatFlowRatePerArea'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "HeatFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/HeatFluxDensity'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "HeatingValue": NamedNode<'http://qudt.org/vocab/quantitykind/HeatingValue'>;
    /** Applicable units are those of quantitykind:Length */
    "Height": NamedNode<'http://qudt.org/vocab/quantitykind/Height'>;
    /** Applicable units are those of quantitykind:Energy */
    "HelmholtzEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/HelmholtzEnergy'>;
    /** Applicable units are those of quantitykind:HenrysLawVolatilityConstant */
    "HenrysLawVolatilityConstant": NamedNode<'http://qudt.org/vocab/quantitykind/HenrysLawVolatilityConstant'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "HoleDensity": NamedNode<'http://qudt.org/vocab/quantitykind/HoleDensity'>;
    /** Applicable units are those of quantitykind:Velocity */
    "HorizontalVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/HorizontalVelocity'>;
    /** Applicable units are those of quantitykind:HydraulicPermeability */
    "HydraulicPermeability": NamedNode<'http://qudt.org/vocab/quantitykind/HydraulicPermeability'>;
    /** Applicable units are those of quantitykind:HyperfineStructureQuantumNumber */
    "HyperfineStructureQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/HyperfineStructureQuantumNumber'>;
    /** Applicable units are those of quantitykind:Time */
    "IgnitionIntervalTime": NamedNode<'http://qudt.org/vocab/quantitykind/IgnitionIntervalTime'>;
    /** Applicable units are those of quantitykind:LuminousFluxPerArea */
    "Illuminance": NamedNode<'http://qudt.org/vocab/quantitykind/Illuminance'>;
    /** Applicable units are those of quantitykind:Impedance */
    "Impedance": NamedNode<'http://qudt.org/vocab/quantitykind/Impedance'>;
    /** Applicable units are those of quantitykind:Impulse */
    "Impulse": NamedNode<'http://qudt.org/vocab/quantitykind/Impulse'>;
    /** Applicable units are those of quantitykind:Frequency */
    "Incidence": NamedNode<'http://qudt.org/vocab/quantitykind/Incidence'>;
    /** Applicable units are those of quantitykind:Frequency */
    "IncidenceProportion": NamedNode<'http://qudt.org/vocab/quantitykind/IncidenceProportion'>;
    /** Applicable units are those of quantitykind:Frequency */
    "IncidenceRate": NamedNode<'http://qudt.org/vocab/quantitykind/IncidenceRate'>;
    /** Applicable units are those of quantitykind:Inductance */
    "Inductance": NamedNode<'http://qudt.org/vocab/quantitykind/Inductance'>;
    /** Applicable units are those of quantitykind:Mass */
    "INERT-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/INERT-MASS'>;
    /** Applicable units are those of quantitykind:MultiplicationFactor */
    "InfiniteMultiplicationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/InfiniteMultiplicationFactor'>;
    "InformationContent": NamedNode<'http://qudt.org/vocab/quantitykind/InformationContent'>;
    "InformationContentExpressedAsALogarithmToBase10": NamedNode<'http://qudt.org/vocab/quantitykind/InformationContentExpressedAsALogarithmToBase10'>;
    "InformationContentExpressedAsALogarithmToBase2": NamedNode<'http://qudt.org/vocab/quantitykind/InformationContentExpressedAsALogarithmToBase2'>;
    "InformationContentExpressedAsALogarithmToBaseE": NamedNode<'http://qudt.org/vocab/quantitykind/InformationContentExpressedAsALogarithmToBaseE'>;
    /** Applicable units are those of quantitykind:InformationEntropy */
    "InformationEntropy": NamedNode<'http://qudt.org/vocab/quantitykind/InformationEntropy'>;
    /** Applicable units are those of quantitykind:InformationFlowRate */
    "InformationFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/InformationFlowRate'>;
    /** Applicable units are those of quantitykind:ExpansionRatio */
    "InitialExpansionRatio": NamedNode<'http://qudt.org/vocab/quantitykind/InitialExpansionRatio'>;
    /** Applicable units are those of quantitykind:Length */
    "InitialNozzleThroatDiameter": NamedNode<'http://qudt.org/vocab/quantitykind/InitialNozzleThroatDiameter'>;
    /** Applicable units are those of quantitykind:Mass */
    "InitialVehicleMass": NamedNode<'http://qudt.org/vocab/quantitykind/InitialVehicleMass'>;
    /** Applicable units are those of quantitykind:Velocity */
    "InitialVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/InitialVelocity'>;
    /** Applicable units are those of quantitykind:Power */
    "InstantaneousPower": NamedNode<'http://qudt.org/vocab/quantitykind/InstantaneousPower'>;
    /** Applicable units are those of quantitykind:InternalConversionFactor */
    "InternalConversionFactor": NamedNode<'http://qudt.org/vocab/quantitykind/InternalConversionFactor'>;
    /** Applicable units are those of quantitykind:Energy */
    "InternalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/InternalEnergy'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "IntinsicCarrierDensity": NamedNode<'http://qudt.org/vocab/quantitykind/IntinsicCarrierDensity'>;
    /** Applicable units are those of quantitykind:InverseAmountOfSubstance */
    "InverseAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/InverseAmountOfSubstance'>;
    /** Applicable units are those of quantitykind:InverseEnergy_Squared */
    "InverseEnergy_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/InverseEnergy_Squared'>;
    /** Applicable units are those of quantitykind:InverseEnergy */
    "InverseEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/InverseEnergy'>;
    /** Applicable units are those of quantitykind:InverseLength */
    "InverseLength": NamedNode<'http://qudt.org/vocab/quantitykind/InverseLength'>;
    /** Applicable units are those of quantitykind:InverseLengthTemperature */
    "InverseLengthTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/InverseLengthTemperature'>;
    /** Applicable units are those of quantitykind:InverseMagneticFlux */
    "InverseMagneticFlux": NamedNode<'http://qudt.org/vocab/quantitykind/InverseMagneticFlux'>;
    /** Applicable units are those of quantitykind:InverseMass_Squared */
    "InverseMass_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/InverseMass_Squared'>;
    /** Applicable units are those of quantitykind:InverseMass */
    "InverseMass": NamedNode<'http://qudt.org/vocab/quantitykind/InverseMass'>;
    /** Applicable units are those of quantitykind:InversePermittivity */
    "InversePermittivity": NamedNode<'http://qudt.org/vocab/quantitykind/InversePermittivity'>;
    /** Applicable units are those of quantitykind:InversePressure */
    "InversePressure": NamedNode<'http://qudt.org/vocab/quantitykind/InversePressure'>;
    /** Applicable units are those of quantitykind:InverseTemperature */
    "InverseTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/InverseTemperature'>;
    /** Applicable units are those of quantitykind:InverseTime_Squared */
    "InverseTime_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/InverseTime_Squared'>;
    "InverseTime": NamedNode<'http://qudt.org/vocab/quantitykind/InverseTime'>;
    /** Applicable units are those of quantitykind:InverseTimeTemperature */
    "InverseTimeTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/InverseTimeTemperature'>;
    /** Applicable units are those of quantitykind:InverseVolume */
    "InverseVolume": NamedNode<'http://qudt.org/vocab/quantitykind/InverseVolume'>;
    /** Applicable units are those of quantitykind:InverseVolume */
    "IonConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/IonConcentration'>;
    /** Applicable units are those of quantitykind:ElectricCurrent */
    "IonCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/IonCurrent'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "IonDensity": NamedNode<'http://qudt.org/vocab/quantitykind/IonDensity'>;
    /** Applicable units are those of quantitykind:ElectricCharge */
    "IonicCharge": NamedNode<'http://qudt.org/vocab/quantitykind/IonicCharge'>;
    /** Applicable units are those of quantitykind:IonicStrength */
    "IonicStrength": NamedNode<'http://qudt.org/vocab/quantitykind/IonicStrength'>;
    /** Applicable units are those of quantitykind:Energy */
    "IonizationEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/IonizationEnergy'>;
    /** Applicable units are those of quantitykind:IonTransportNumber */
    "IonTransportNumber": NamedNode<'http://qudt.org/vocab/quantitykind/IonTransportNumber'>;
    /** Applicable units are those of quantitykind:Irradiance */
    "Irradiance": NamedNode<'http://qudt.org/vocab/quantitykind/Irradiance'>;
    /** Applicable units are those of quantitykind:IsentropicCompressibility */
    "IsentropicCompressibility": NamedNode<'http://qudt.org/vocab/quantitykind/IsentropicCompressibility'>;
    /** Applicable units are those of quantitykind:IsentropicExponent */
    "IsentropicExponent": NamedNode<'http://qudt.org/vocab/quantitykind/IsentropicExponent'>;
    /** Applicable units are those of quantitykind:IsothermalCompressibility */
    "IsothermalCompressibility": NamedNode<'http://qudt.org/vocab/quantitykind/IsothermalCompressibility'>;
    /** Applicable units are those of quantitykind:SpecificVolume */
    "IsothermalMoistureCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/IsothermalMoistureCapacity'>;
    /** Applicable units are those of quantitykind:Kerma */
    "Kerma": NamedNode<'http://qudt.org/vocab/quantitykind/Kerma'>;
    /** Applicable units are those of quantitykind:KermaRate */
    "KermaRate": NamedNode<'http://qudt.org/vocab/quantitykind/KermaRate'>;
    /** Applicable units are those of quantitykind:KinematicViscosity */
    "KinematicViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/KinematicViscosity'>;
    "KinematicViscosityOrDiffusionConstantOrThermalDiffusivity": NamedNode<'http://qudt.org/vocab/quantitykind/KinematicViscosityOrDiffusionConstantOrThermalDiffusivity'>;
    /** Applicable units are those of quantitykind:Energy */
    "KineticEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/KineticEnergy'>;
    /** Applicable units are those of quantitykind:Energy */
    "KineticOrThermalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/KineticOrThermalEnergy'>;
    /** Applicable units are those of quantitykind:LagrangeFunction */
    "LagrangeFunction": NamedNode<'http://qudt.org/vocab/quantitykind/LagrangeFunction'>;
    /** Applicable units are those of quantitykind:Landau-GinzburgNumber */
    "Landau-GinzburgNumber": NamedNode<'http://qudt.org/vocab/quantitykind/Landau-GinzburgNumber'>;
    /** Applicable units are those of quantitykind:LandeGFactor */
    "LandeGFactor": NamedNode<'http://qudt.org/vocab/quantitykind/LandeGFactor'>;
    /** Applicable units are those of quantitykind:AngularFrequency */
    "LarmorAngularFrequency": NamedNode<'http://qudt.org/vocab/quantitykind/LarmorAngularFrequency'>;
    /** Applicable units are those of quantitykind:Length */
    "LatticePlaneSpacing": NamedNode<'http://qudt.org/vocab/quantitykind/LatticePlaneSpacing'>;
    /** Applicable units are those of quantitykind:Length */
    "LatticeVector": NamedNode<'http://qudt.org/vocab/quantitykind/LatticeVector'>;
    /** Applicable units are those of quantitykind:LeakageFactor */
    "LeakageFactor": NamedNode<'http://qudt.org/vocab/quantitykind/LeakageFactor'>;
    /** Applicable units are those of quantitykind:Length */
    "Length": NamedNode<'http://qudt.org/vocab/quantitykind/Length'>;
    /** Applicable units are those of quantitykind:Energy */
    "LengthByForce": NamedNode<'http://qudt.org/vocab/quantitykind/LengthByForce'>;
    /** Applicable units are those of quantitykind:LengthEnergy */
    "LengthEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/LengthEnergy'>;
    /** Applicable units are those of quantitykind:LengthMass */
    "LengthMass": NamedNode<'http://qudt.org/vocab/quantitykind/LengthMass'>;
    /** Applicable units are those of quantitykind:LengthMolarEnergy */
    "LengthMolarEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/LengthMolarEnergy'>;
    "LengthPerElectricCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/LengthPerElectricCurrent'>;
    /** Applicable units are those of quantitykind:LengthRatio */
    "LengthRatio": NamedNode<'http://qudt.org/vocab/quantitykind/LengthRatio'>;
    /** Applicable units are those of quantitykind:LengthTemperature */
    "LengthTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/LengthTemperature'>;
    /** Applicable units are those of quantitykind:LengthTemperatureTime */
    "LengthTemperatureTime": NamedNode<'http://qudt.org/vocab/quantitykind/LengthTemperatureTime'>;
    /** Applicable units are those of quantitykind:Lethargy */
    "Lethargy": NamedNode<'http://qudt.org/vocab/quantitykind/Lethargy'>;
    /** Applicable units are those of quantitykind:LevelWidth */
    "LevelWidth": NamedNode<'http://qudt.org/vocab/quantitykind/LevelWidth'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "LiftCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LiftCoefficient'>;
    /** Applicable units are those of quantitykind:Force */
    "LiftForce": NamedNode<'http://qudt.org/vocab/quantitykind/LiftForce'>;
    /** Applicable units are those of quantitykind:LinearAbsorptionCoefficient */
    "LinearAbsorptionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LinearAbsorptionCoefficient'>;
    /** Applicable units are those of quantitykind:LinearAcceleration */
    "LinearAcceleration": NamedNode<'http://qudt.org/vocab/quantitykind/LinearAcceleration'>;
    /** Applicable units are those of quantitykind:LinearAttenuationCoefficient */
    "LinearAttenuationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LinearAttenuationCoefficient'>;
    /** Applicable units are those of quantitykind:LinearBitDensity */
    "LinearBitDensity": NamedNode<'http://qudt.org/vocab/quantitykind/LinearBitDensity'>;
    /** Applicable units are those of quantitykind:LinearCompressibility */
    "LinearCompressibility": NamedNode<'http://qudt.org/vocab/quantitykind/LinearCompressibility'>;
    /** Applicable units are those of quantitykind:LinearDensity */
    "LinearDensity": NamedNode<'http://qudt.org/vocab/quantitykind/LinearDensity'>;
    "LinearElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/LinearElectricCharge'>;
    /** Applicable units are those of quantitykind:LinearElectricCurrentDensity */
    "LinearElectricCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/LinearElectricCurrent'>;
    /** Applicable units are those of quantitykind:LinearElectricCurrentDensity */
    "LinearElectricCurrentDensity": NamedNode<'http://qudt.org/vocab/quantitykind/LinearElectricCurrentDensity'>;
    /** Applicable units are those of quantitykind:LinearEnergyTransfer */
    "LinearEnergyTransfer": NamedNode<'http://qudt.org/vocab/quantitykind/LinearEnergyTransfer'>;
    /** Applicable units are those of quantitykind:LinearExpansionCoefficient */
    "LinearExpansionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LinearExpansionCoefficient'>;
    /** Applicable units are those of quantitykind:ForcePerLength */
    "LinearForce": NamedNode<'http://qudt.org/vocab/quantitykind/LinearForce'>;
    /** Applicable units are those of quantitykind:LinearIonization */
    "LinearIonization": NamedNode<'http://qudt.org/vocab/quantitykind/LinearIonization'>;
    /** Applicable units are those of quantitykind:LinearLogarithmicRatio */
    "LinearLogarithmicRatio": NamedNode<'http://qudt.org/vocab/quantitykind/LinearLogarithmicRatio'>;
    /** Applicable units are those of quantitykind:LinearMass */
    "LinearMass": NamedNode<'http://qudt.org/vocab/quantitykind/LinearMass'>;
    /** Applicable units are those of quantitykind:LinearMomentum */
    "LinearMomentum": NamedNode<'http://qudt.org/vocab/quantitykind/LinearMomentum'>;
    "LinearPower": NamedNode<'http://qudt.org/vocab/quantitykind/LinearPower'>;
    /** Applicable units are those of quantitykind:LinearResistance */
    "LinearResistance": NamedNode<'http://qudt.org/vocab/quantitykind/LinearResistance'>;
    /** Applicable units are those of quantitykind:ForcePerLength */
    "LinearStiffness": NamedNode<'http://qudt.org/vocab/quantitykind/LinearStiffness'>;
    /** Applicable units are those of quantitykind:LengthRatio */
    "LinearStrain": NamedNode<'http://qudt.org/vocab/quantitykind/LinearStrain'>;
    /** Applicable units are those of quantitykind:LinearThermalExpansion */
    "LinearThermalExpansion": NamedNode<'http://qudt.org/vocab/quantitykind/LinearThermalExpansion'>;
    /** Applicable units are those of quantitykind:LinearTorque */
    "LinearTorque": NamedNode<'http://qudt.org/vocab/quantitykind/LinearTorque'>;
    /** Applicable units are those of quantitykind:LinearVelocity */
    "LinearVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/LinearVelocity'>;
    "LinearVoltageCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LinearVoltageCoefficient'>;
    "LineicCharge": NamedNode<'http://qudt.org/vocab/quantitykind/LineicCharge'>;
    "LineicDataVolume": NamedNode<'http://qudt.org/vocab/quantitykind/LineicDataVolume'>;
    "LineicLogarithmicRatio": NamedNode<'http://qudt.org/vocab/quantitykind/LineicLogarithmicRatio'>;
    "LineicMass": NamedNode<'http://qudt.org/vocab/quantitykind/LineicMass'>;
    /** Applicable units are those of quantitykind:LineicPower */
    "LineicPower": NamedNode<'http://qudt.org/vocab/quantitykind/LineicPower'>;
    "LineicQuantity": NamedNode<'http://qudt.org/vocab/quantitykind/LineicQuantity'>;
    "LineicResistance": NamedNode<'http://qudt.org/vocab/quantitykind/LineicResistance'>;
    /** Applicable units are those of quantitykind:LineicResolution */
    "LineicResolution": NamedNode<'http://qudt.org/vocab/quantitykind/LineicResolution'>;
    "LineicTorque": NamedNode<'http://qudt.org/vocab/quantitykind/LineicTorque'>;
    /** Applicable units are those of quantitykind:MagneticFlux */
    "LinkedFlux": NamedNode<'http://qudt.org/vocab/quantitykind/LinkedFlux'>;
    /** Applicable units are those of quantitykind:LiquidVolume */
    "LiquidVolume": NamedNode<'http://qudt.org/vocab/quantitykind/LiquidVolume'>;
    "Log10FrequencyInterval": NamedNode<'http://qudt.org/vocab/quantitykind/Log10FrequencyInterval'>;
    "Log10Ratio": NamedNode<'http://qudt.org/vocab/quantitykind/Log10Ratio'>;
    /** Applicable units are those of quantitykind:LogarithmicFrequencyInterval */
    "LogarithmicFrequencyInterval": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmicFrequencyInterval'>;
    "LogarithmicFrequencyIntervalToBase10": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmicFrequencyIntervalToBase10'>;
    "LogarithmicMedianInformationFlow_SourceToBase10": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmicMedianInformationFlow_SourceToBase10'>;
    "LogarithmicMedianInformationFlow_SourceToBase2": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmicMedianInformationFlow_SourceToBase2'>;
    "LogarithmicMedianInformationFlow_SourceToBaseE": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmicMedianInformationFlow_SourceToBaseE'>;
    "LogarithmRatioToBase10": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmRatioToBase10'>;
    "LogarithmRatioToBaseE": NamedNode<'http://qudt.org/vocab/quantitykind/LogarithmRatioToBaseE'>;
    "LogERatio": NamedNode<'http://qudt.org/vocab/quantitykind/LogERatio'>;
    /** Applicable units are those of quantitykind:LogOctanolAirPartitionCoefficient */
    "LogOctanolAirPartitionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LogOctanolAirPartitionCoefficient'>;
    /** Applicable units are those of quantitykind:LogOctanolWaterPartitionCoefficient */
    "LogOctanolWaterPartitionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LogOctanolWaterPartitionCoefficient'>;
    /** Applicable units are those of quantitykind:Length */
    "LondonPenetrationDepth": NamedNode<'http://qudt.org/vocab/quantitykind/LondonPenetrationDepth'>;
    /** Applicable units are those of quantitykind:Long-RangeOrderParameter */
    "Long-RangeOrderParameter": NamedNode<'http://qudt.org/vocab/quantitykind/Long-RangeOrderParameter'>;
    /** Applicable units are those of quantitykind:LorenzCoefficient */
    "LorenzCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/LorenzCoefficient'>;
    /** Applicable units are those of quantitykind:Angle */
    "LossAngle": NamedNode<'http://qudt.org/vocab/quantitykind/LossAngle'>;
    /** Applicable units are those of quantitykind:LossFactor */
    "LossFactor": NamedNode<'http://qudt.org/vocab/quantitykind/LossFactor'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "Loudness": NamedNode<'http://qudt.org/vocab/quantitykind/Loudness'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "LoudnessLevel": NamedNode<'http://qudt.org/vocab/quantitykind/LoudnessLevel'>;
    /** Applicable units are those of quantitykind:MagneticFluxDensity */
    "LowerCriticalMagneticFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/LowerCriticalMagneticFluxDensity'>;
    /** Applicable units are those of quantitykind:Luminance */
    "Luminance": NamedNode<'http://qudt.org/vocab/quantitykind/Luminance'>;
    /** Applicable units are those of quantitykind:LuminousEfficacy */
    "LuminousEfficacy": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousEfficacy'>;
    /** Applicable units are those of quantitykind:LuminousFluxPerArea */
    "LuminousEmittance": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousEmittance'>;
    /** Applicable units are those of quantitykind:LuminousEnergy */
    "LuminousEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousEnergy'>;
    /** Applicable units are those of quantitykind:LuminousFluxPerArea */
    "LuminousExitance": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousExitance'>;
    /** Applicable units are those of quantitykind:LuminousExposure */
    "LuminousExposure": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousExposure'>;
    /** Applicable units are those of quantitykind:LuminousFlux */
    "LuminousFlux": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousFlux'>;
    /** Applicable units are those of quantitykind:LuminousFluxPerArea */
    "LuminousFluxPerArea": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousFluxPerArea'>;
    /** Applicable units are those of quantitykind:LuminousFluxRatio */
    "LuminousFluxRatio": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousFluxRatio'>;
    /** Applicable units are those of quantitykind:LuminousIntensity */
    "LuminousIntensity": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousIntensity'>;
    /** Applicable units are those of quantitykind:LuminousIntensityDistribution */
    "LuminousIntensityDistribution": NamedNode<'http://qudt.org/vocab/quantitykind/LuminousIntensityDistribution'>;
    /** Applicable units are those of quantitykind:MachNumber */
    "MachNumber": NamedNode<'http://qudt.org/vocab/quantitykind/MachNumber'>;
    /** Applicable units are those of quantitykind:Area */
    "MacroscopicCrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/MacroscopicCrossSection'>;
    /** Applicable units are those of quantitykind:Area */
    "MacroscopicTotalCrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/MacroscopicTotalCrossSection'>;
    /** Applicable units are those of quantitykind:MadelungConstant */
    "MadelungConstant": NamedNode<'http://qudt.org/vocab/quantitykind/MadelungConstant'>;
    /** Applicable units are those of quantitykind:MagneticAreaMoment */
    "MagneticAreaMoment": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticAreaMoment'>;
    /** Applicable units are those of quantitykind:MagneticDipoleMoment */
    "MagneticDipoleMoment": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticDipoleMoment'>;
    "MagneticDipoleMomentOfAMolecule": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticDipoleMomentOfAMolecule'>;
    /** Applicable units are those of quantitykind:MagneticField */
    "MagneticField": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticField'>;
    /** Applicable units are those of quantitykind:MagneticFieldStrength_H */
    "MagneticFieldStrength_H": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticFieldStrength_H'>;
    /** Applicable units are those of quantitykind:MagneticFlux */
    "MagneticFlux": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticFlux'>;
    /** Applicable units are those of quantitykind:MagneticFluxDensity */
    "MagneticFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticFluxDensity'>;
    "MagneticFluxDensityOrMagneticPolarization": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticFluxDensityOrMagneticPolarization'>;
    /** Applicable units are those of quantitykind:MagneticFluxPerLength */
    "MagneticFluxPerLength": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticFluxPerLength'>;
    /** Applicable units are those of quantitykind:MagneticMoment */
    "MagneticMoment": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticMoment'>;
    "MagneticPolarization": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticPolarization'>;
    /** Applicable units are those of quantitykind:MagneticQuantumNumber */
    "MagneticQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticQuantumNumber'>;
    /** Applicable units are those of quantitykind:MagneticReluctivity */
    "MagneticReluctivity": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticReluctivity'>;
    /** Applicable units are those of quantitykind:MagneticSusceptability */
    "MagneticSusceptability": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticSusceptability'>;
    /** Applicable units are those of quantitykind:MagneticTension */
    "MagneticTension": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticTension'>;
    /** Applicable units are those of quantitykind:MagneticVectorPotential */
    "MagneticVectorPotential": NamedNode<'http://qudt.org/vocab/quantitykind/MagneticVectorPotential'>;
    /** Applicable units are those of quantitykind:LinearElectricCurrentDensity */
    "Magnetization": NamedNode<'http://qudt.org/vocab/quantitykind/Magnetization'>;
    /** Applicable units are those of quantitykind:LinearElectricCurrentDensity */
    "MagnetizationField": NamedNode<'http://qudt.org/vocab/quantitykind/MagnetizationField'>;
    /** Applicable units are those of quantitykind:MagnetomotiveForce */
    "MagnetomotiveForce": NamedNode<'http://qudt.org/vocab/quantitykind/MagnetomotiveForce'>;
    /** Applicable units are those of quantitykind:Mass */
    "MASS-DELIVERED": NamedNode<'http://qudt.org/vocab/quantitykind/MASS-DELIVERED'>;
    /** Applicable units are those of quantitykind:Mass */
    "MASS-GROWTH-ALLOWANCE": NamedNode<'http://qudt.org/vocab/quantitykind/MASS-GROWTH-ALLOWANCE'>;
    /** Applicable units are those of quantitykind:Mass */
    "MASS-MARGIN": NamedNode<'http://qudt.org/vocab/quantitykind/MASS-MARGIN'>;
    /** Applicable units are those of quantitykind:Mass */
    "MASS-PROPERTY-UNCERTAINTY": NamedNode<'http://qudt.org/vocab/quantitykind/MASS-PROPERTY-UNCERTAINTY'>;
    /** Applicable units are those of quantitykind:Mass */
    "Mass": NamedNode<'http://qudt.org/vocab/quantitykind/Mass'>;
    /** Applicable units are those of quantitykind:MassAbsorptionCoefficient */
    "MassAbsorptionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/MassAbsorptionCoefficient'>;
    "MassAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/MassAmountOfSubstance'>;
    /** Applicable units are those of quantitykind:MassAmountOfSubstanceTemperature */
    "MassAmountOfSubstanceTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/MassAmountOfSubstanceTemperature'>;
    /** Applicable units are those of quantitykind:MassAttenuationCoefficient */
    "MassAttenuationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/MassAttenuationCoefficient'>;
    /** Applicable units are those of quantitykind:MassConcentration */
    "MassConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/MassConcentration'>;
    /** Applicable units are those of quantitykind:MassConcentrationOfWater */
    "MassConcentrationOfWater": NamedNode<'http://qudt.org/vocab/quantitykind/MassConcentrationOfWater'>;
    /** Applicable units are those of quantitykind:MassConcentrationOfWaterVapour */
    "MassConcentrationOfWaterVapour": NamedNode<'http://qudt.org/vocab/quantitykind/MassConcentrationOfWaterVapour'>;
    /** Applicable units are those of quantitykind:MassConcentrationRateOfChange */
    "MassConcentrationRateOfChange": NamedNode<'http://qudt.org/vocab/quantitykind/MassConcentrationRateOfChange'>;
    /** Applicable units are those of quantitykind:Mass */
    "MassDefect": NamedNode<'http://qudt.org/vocab/quantitykind/MassDefect'>;
    /** Applicable units are those of quantitykind:MassDensity */
    "MassDensity": NamedNode<'http://qudt.org/vocab/quantitykind/MassDensity'>;
    /** Applicable units are those of quantitykind:MassEnergyTransferCoefficient */
    "MassEnergyTransferCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/MassEnergyTransferCoefficient'>;
    /** Applicable units are those of quantitykind:Mass */
    "MassExcess": NamedNode<'http://qudt.org/vocab/quantitykind/MassExcess'>;
    /** Applicable units are those of quantitykind:MassFlowRate */
    "MassFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/MassFlowRate'>;
    /** Applicable units are those of quantitykind:MassPerAreaTime */
    "MassFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/MassFluxDensity'>;
    /** Applicable units are those of quantitykind:MassFraction */
    "MassFraction": NamedNode<'http://qudt.org/vocab/quantitykind/MassFraction'>;
    /** Applicable units are those of quantitykind:MassFractionOfDryMatter */
    "MassFractionOfDryMatter": NamedNode<'http://qudt.org/vocab/quantitykind/MassFractionOfDryMatter'>;
    /** Applicable units are those of quantitykind:MassFractionOfWater */
    "MassFractionOfWater": NamedNode<'http://qudt.org/vocab/quantitykind/MassFractionOfWater'>;
    /** Applicable units are those of quantitykind:MassicActivity */
    "MassicActivity": NamedNode<'http://qudt.org/vocab/quantitykind/MassicActivity'>;
    /** Applicable units are those of quantitykind:MassicElectricCurrent */
    "MassicElectricCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/MassicElectricCurrent'>;
    /** Applicable units are those of quantitykind:MassicHeatCapacity */
    "MassicHeatCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/MassicHeatCapacity'>;
    /** Applicable units are those of quantitykind:SpecificPower */
    "MassicPower": NamedNode<'http://qudt.org/vocab/quantitykind/MassicPower'>;
    "MassicTorque": NamedNode<'http://qudt.org/vocab/quantitykind/MassicTorque'>;
    "MassieuFunction": NamedNode<'http://qudt.org/vocab/quantitykind/MassieuFunction'>;
    /** Applicable units are those of quantitykind:MassNumber */
    "MassNumber": NamedNode<'http://qudt.org/vocab/quantitykind/MassNumber'>;
    /** Applicable units are those of quantitykind:Mass */
    "MassOfElectricalPowerSupply": NamedNode<'http://qudt.org/vocab/quantitykind/MassOfElectricalPowerSupply'>;
    /** Applicable units are those of quantitykind:Mass */
    "MassOfSolidBooster": NamedNode<'http://qudt.org/vocab/quantitykind/MassOfSolidBooster'>;
    /** Applicable units are those of quantitykind:Mass */
    "MassOfTheEarth": NamedNode<'http://qudt.org/vocab/quantitykind/MassOfTheEarth'>;
    /** Applicable units are those of quantitykind:MassPerArea */
    "MassPerArea": NamedNode<'http://qudt.org/vocab/quantitykind/MassPerArea'>;
    /** Applicable units are those of quantitykind:MassPerAreaTime */
    "MassPerAreaTime": NamedNode<'http://qudt.org/vocab/quantitykind/MassPerAreaTime'>;
    /** Applicable units are those of quantitykind:MassPerElectricCharge */
    "MassPerElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/MassPerElectricCharge'>;
    /** Applicable units are those of quantitykind:MassPerEnergy */
    "MassPerEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/MassPerEnergy'>;
    /** Applicable units are those of quantitykind:MassPerLength */
    "MassPerLength": NamedNode<'http://qudt.org/vocab/quantitykind/MassPerLength'>;
    /** Applicable units are those of quantitykind:MassPerTime */
    "MassPerTime": NamedNode<'http://qudt.org/vocab/quantitykind/MassPerTime'>;
    /** Applicable units are those of quantitykind:MassRatio */
    "MassRatio": NamedNode<'http://qudt.org/vocab/quantitykind/MassRatio'>;
    /** Applicable units are those of quantitykind:MassRatioOfWaterToDryMatter */
    "MassRatioOfWaterToDryMatter": NamedNode<'http://qudt.org/vocab/quantitykind/MassRatioOfWaterToDryMatter'>;
    /** Applicable units are those of quantitykind:MassRatioOfWaterVapourToDryGas */
    "MassRatioOfWaterVapourToDryGas": NamedNode<'http://qudt.org/vocab/quantitykind/MassRatioOfWaterVapourToDryGas'>;
    "MassRelatedElectricalCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/MassRelatedElectricalCurrent'>;
    /** Applicable units are those of quantitykind:MassSpecificBiogeochemicalRate */
    "MassSpecificBiogeochemicalRate": NamedNode<'http://qudt.org/vocab/quantitykind/MassSpecificBiogeochemicalRate'>;
    /** Applicable units are those of quantitykind:MassStoppingPower */
    "MassStoppingPower": NamedNode<'http://qudt.org/vocab/quantitykind/MassStoppingPower'>;
    /** Applicable units are those of quantitykind:MassTemperature */
    "MassTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/MassTemperature'>;
    /** Applicable units are those of quantitykind:Force */
    "MaxExpectedOperatingThrust": NamedNode<'http://qudt.org/vocab/quantitykind/MaxExpectedOperatingThrust'>;
    /** Applicable units are those of quantitykind:Energy */
    "MaximumBeta-ParticleEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/MaximumBeta-ParticleEnergy'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "MaximumExpectedOperatingPressure": NamedNode<'http://qudt.org/vocab/quantitykind/MaximumExpectedOperatingPressure'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "MaximumOperatingPressure": NamedNode<'http://qudt.org/vocab/quantitykind/MaximumOperatingPressure'>;
    /** Applicable units are those of quantitykind:Force */
    "MaxOperatingThrust": NamedNode<'http://qudt.org/vocab/quantitykind/MaxOperatingThrust'>;
    /** Applicable units are those of quantitykind:Force */
    "MaxSeaLevelThrust": NamedNode<'http://qudt.org/vocab/quantitykind/MaxSeaLevelThrust'>;
    /** Applicable units are those of quantitykind:Energy */
    "MeanEnergyImparted": NamedNode<'http://qudt.org/vocab/quantitykind/MeanEnergyImparted'>;
    /** Applicable units are those of quantitykind:Length */
    "MeanFreePath": NamedNode<'http://qudt.org/vocab/quantitykind/MeanFreePath'>;
    /** Applicable units are those of quantitykind:Time */
    "MeanLifetime": NamedNode<'http://qudt.org/vocab/quantitykind/MeanLifetime'>;
    /** Applicable units are those of quantitykind:Length */
    "MeanLinearRange": NamedNode<'http://qudt.org/vocab/quantitykind/MeanLinearRange'>;
    /** Applicable units are those of quantitykind:MeanMassRange */
    "MeanMassRange": NamedNode<'http://qudt.org/vocab/quantitykind/MeanMassRange'>;
    /** Applicable units are those of quantitykind:Energy */
    "MechanicalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/MechanicalEnergy'>;
    "MechanicalImpedance": NamedNode<'http://qudt.org/vocab/quantitykind/MechanicalImpedance'>;
    /** Applicable units are those of quantitykind:MechanicalMobility */
    "MechanicalMobility": NamedNode<'http://qudt.org/vocab/quantitykind/MechanicalMobility'>;
    /** There are various interpretations of MechanicalSurfaceImpedance: Pressure/Velocity - https://apps.dtic.mil/sti/pdfs/ADA315595.pdf, Force / Speed - https://www.wikidata.org/wiki/Q6421317, and (Pressure / Velocity)**0.5 - https://www.sciencedirect.com/topics/engineering/mechanical-impedance. We are seeking a resolution to these differences. */
    "MechanicalSurfaceImpedance": NamedNode<'http://qudt.org/vocab/quantitykind/MechanicalSurfaceImpedance'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "MechanicalTension": NamedNode<'http://qudt.org/vocab/quantitykind/MechanicalTension'>;
    /** Applicable units are those of quantitykind:MeltingPoint */
    "MeltingPoint": NamedNode<'http://qudt.org/vocab/quantitykind/MeltingPoint'>;
    "MicrobialFormation": NamedNode<'http://qudt.org/vocab/quantitykind/MicrobialFormation'>;
    /** Applicable units are those of quantitykind:CanonicalPartitionFunction */
    "MicroCanonicalPartitionFunction": NamedNode<'http://qudt.org/vocab/quantitykind/MicroCanonicalPartitionFunction'>;
    /** Applicable units are those of quantitykind:Area */
    "MigrationArea": NamedNode<'http://qudt.org/vocab/quantitykind/MigrationArea'>;
    /** Applicable units are those of quantitykind:Length */
    "MigrationLength": NamedNode<'http://qudt.org/vocab/quantitykind/MigrationLength'>;
    /** Applicable units are those of quantitykind:Mobility */
    "Mobility": NamedNode<'http://qudt.org/vocab/quantitykind/Mobility'>;
    /** Applicable units are those of quantitykind:MobilityRatio */
    "MobilityRatio": NamedNode<'http://qudt.org/vocab/quantitykind/MobilityRatio'>;
    "ModulusOfAdmittance": NamedNode<'http://qudt.org/vocab/quantitykind/ModulusOfAdmittance'>;
    /** Applicable units are those of quantitykind:ModulusOfElasticity */
    "ModulusOfElasticity": NamedNode<'http://qudt.org/vocab/quantitykind/ModulusOfElasticity'>;
    /** Applicable units are those of quantitykind:ModulusOfImpedance */
    "ModulusOfImpedance": NamedNode<'http://qudt.org/vocab/quantitykind/ModulusOfImpedance'>;
    /** Applicable units are those of quantitykind:ModulusOfLinearSubgradeReaction */
    "ModulusOfLinearSubgradeReaction": NamedNode<'http://qudt.org/vocab/quantitykind/ModulusOfLinearSubgradeReaction'>;
    /** Applicable units are those of quantitykind:ModulusOfRotationalSubgradeReaction */
    "ModulusOfRotationalSubgradeReaction": NamedNode<'http://qudt.org/vocab/quantitykind/ModulusOfRotationalSubgradeReaction'>;
    /** Applicable units are those of quantitykind:ModulusOfSubgradeReaction */
    "ModulusOfSubgradeReaction": NamedNode<'http://qudt.org/vocab/quantitykind/ModulusOfSubgradeReaction'>;
    /** Applicable units are those of quantitykind:VolumeFlowRate */
    "MoistureDiffusivity": NamedNode<'http://qudt.org/vocab/quantitykind/MoistureDiffusivity'>;
    /** Applicable units are those of quantitykind:MolalityOfSolute */
    "MolalityOfSolute": NamedNode<'http://qudt.org/vocab/quantitykind/MolalityOfSolute'>;
    /** Applicable units are those of quantitykind:MolarAbsorptionCoefficient */
    "MolarAbsorptionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/MolarAbsorptionCoefficient'>;
    /** Applicable units are those of quantitykind:MolarAngularMomentum */
    "MolarAngularMomentum": NamedNode<'http://qudt.org/vocab/quantitykind/MolarAngularMomentum'>;
    /** Applicable units are those of quantitykind:MolarAttenuationCoefficient */
    "MolarAttenuationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/MolarAttenuationCoefficient'>;
    /** Applicable units are those of quantitykind:MolarConductivity */
    "MolarConductivity": NamedNode<'http://qudt.org/vocab/quantitykind/MolarConductivity'>;
    "MolarDensity": NamedNode<'http://qudt.org/vocab/quantitykind/MolarDensity'>;
    /** Applicable units are those of quantitykind:MolarEnergy */
    "MolarEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/MolarEnergy'>;
    /** Applicable units are those of quantitykind:MolarEntropy */
    "MolarEntropy": NamedNode<'http://qudt.org/vocab/quantitykind/MolarEntropy'>;
    /** Applicable units are those of quantitykind:MolarFlowRate */
    "MolarFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/MolarFlowRate'>;
    /** Applicable units are those of quantitykind:MolarFluxDensity */
    "MolarFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/MolarFluxDensity'>;
    /** Applicable units are those of quantitykind:MolarFluxDensityVariance_NEON */
    "MolarFluxDensityVariance_NEON": NamedNode<'http://qudt.org/vocab/quantitykind/MolarFluxDensityVariance_NEON'>;
    /** Applicable units are those of quantitykind:MolarHeatCapacity */
    "MolarHeatCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/MolarHeatCapacity'>;
    /** Applicable units are those of quantitykind:MolarEnergy */
    "MolarInternalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/MolarInternalEnergy'>;
    /** Applicable units are those of quantitykind:MolarMass */
    "MolarMass": NamedNode<'http://qudt.org/vocab/quantitykind/MolarMass'>;
    "MolarOpticalRotationalAbility": NamedNode<'http://qudt.org/vocab/quantitykind/MolarOpticalRotationalAbility'>;
    /** Applicable units are those of quantitykind:MolarOpticalRotatoryPower */
    "MolarOpticalRotatoryPower": NamedNode<'http://qudt.org/vocab/quantitykind/MolarOpticalRotatoryPower'>;
    /** Applicable units are those of quantitykind:MolarRefractivity */
    "MolarRefractivity": NamedNode<'http://qudt.org/vocab/quantitykind/MolarRefractivity'>;
    "MolarThermalCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/MolarThermalCapacity'>;
    /** Applicable units are those of quantitykind:MolarEnergy */
    "MolarThermodynamicEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/MolarThermodynamicEnergy'>;
    /** Applicable units are those of quantitykind:MolarVolume */
    "MolarVolume": NamedNode<'http://qudt.org/vocab/quantitykind/MolarVolume'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "MolecularConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/MolecularConcentration'>;
    /** Applicable units are those of quantitykind:MolecularMass */
    "MolecularMass": NamedNode<'http://qudt.org/vocab/quantitykind/MolecularMass'>;
    "MolecularViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/MolecularViscosity'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "MoleFraction": NamedNode<'http://qudt.org/vocab/quantitykind/MoleFraction'>;
    /** Applicable units are those of quantitykind:MomentOfInertia */
    "MOMENT-OF-INERTIA_Y": NamedNode<'http://qudt.org/vocab/quantitykind/MOMENT-OF-INERTIA_Y'>;
    /** Applicable units are those of quantitykind:MomentOfInertia */
    "MOMENT-OF-INERTIA_Z": NamedNode<'http://qudt.org/vocab/quantitykind/MOMENT-OF-INERTIA_Z'>;
    /** Applicable units are those of quantitykind:MomentOfForce */
    "MomentOfForce": NamedNode<'http://qudt.org/vocab/quantitykind/MomentOfForce'>;
    /** Applicable units are those of quantitykind:MomentOfInertia */
    "MomentOfInertia": NamedNode<'http://qudt.org/vocab/quantitykind/MomentOfInertia'>;
    /** Applicable units are those of quantitykind:Momentum */
    "Momentum": NamedNode<'http://qudt.org/vocab/quantitykind/Momentum'>;
    /** Applicable units are those of quantitykind:MomentumPerAngle */
    "MomentumPerAngle": NamedNode<'http://qudt.org/vocab/quantitykind/MomentumPerAngle'>;
    /** Applicable units are those of quantitykind:MorbidityRate */
    "MorbidityRate": NamedNode<'http://qudt.org/vocab/quantitykind/MorbidityRate'>;
    /** Applicable units are those of quantitykind:MortalityRate */
    "MortalityRate": NamedNode<'http://qudt.org/vocab/quantitykind/MortalityRate'>;
    "MotorConstant": NamedNode<'http://qudt.org/vocab/quantitykind/MotorConstant'>;
    /** Applicable units are those of quantitykind:MultiplicationFactor */
    "MultiplicationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/MultiplicationFactor'>;
    /** Applicable units are those of quantitykind:Inductance */
    "MutualInductance": NamedNode<'http://qudt.org/vocab/quantitykind/MutualInductance'>;
    /** Applicable units are those of quantitykind:NapierianAbsorbance */
    "NapierianAbsorbance": NamedNode<'http://qudt.org/vocab/quantitykind/NapierianAbsorbance'>;
    /** Applicable units are those of quantitykind:Temperature */
    "NeelTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/NeelTemperature'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "NeutralRatio": NamedNode<'http://qudt.org/vocab/quantitykind/NeutralRatio'>;
    /** Applicable units are those of quantitykind:NeutronDiffusionCoefficient */
    "NeutronDiffusionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/NeutronDiffusionCoefficient'>;
    /** Applicable units are those of quantitykind:Length */
    "NeutronDiffusionLength": NamedNode<'http://qudt.org/vocab/quantitykind/NeutronDiffusionLength'>;
    /** Applicable units are those of quantitykind:NeutronNumber */
    "NeutronNumber": NamedNode<'http://qudt.org/vocab/quantitykind/NeutronNumber'>;
    /** Applicable units are those of quantitykind:NeutronYieldPerAbsorption */
    "NeutronYieldPerAbsorption": NamedNode<'http://qudt.org/vocab/quantitykind/NeutronYieldPerAbsorption'>;
    /** Applicable units are those of quantitykind:NeutronYieldPerFission */
    "NeutronYieldPerFission": NamedNode<'http://qudt.org/vocab/quantitykind/NeutronYieldPerFission'>;
    /** Applicable units are those of quantitykind:Mass */
    "NOMINAL-ASCENT-PROPELLANT-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/NOMINAL-ASCENT-PROPELLANT-MASS'>;
    /** Applicable units are those of quantitykind:Non-LeakageProbability */
    "Non-LeakageProbability": NamedNode<'http://qudt.org/vocab/quantitykind/Non-LeakageProbability'>;
    /** Applicable units are those of quantitykind:NonActivePower */
    "NonActivePower": NamedNode<'http://qudt.org/vocab/quantitykind/NonActivePower'>;
    /** Applicable units are those of quantitykind:Length */
    "NonNegativeLength": NamedNode<'http://qudt.org/vocab/quantitykind/NonNegativeLength'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "NormalizedDimensionlessRatio": NamedNode<'http://qudt.org/vocab/quantitykind/NormalizedDimensionlessRatio'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "NormalStress": NamedNode<'http://qudt.org/vocab/quantitykind/NormalStress'>;
    /** Applicable units are those of quantitykind:Area */
    "NozzleThroatCrossSectionalArea": NamedNode<'http://qudt.org/vocab/quantitykind/NozzleThroatCrossSectionalArea'>;
    /** Applicable units are those of quantitykind:Length */
    "NozzleThroatDiameter": NamedNode<'http://qudt.org/vocab/quantitykind/NozzleThroatDiameter'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "NozzleThroatPressure": NamedNode<'http://qudt.org/vocab/quantitykind/NozzleThroatPressure'>;
    /** Applicable units are those of quantitykind:Force */
    "NozzleWallsThrustReaction": NamedNode<'http://qudt.org/vocab/quantitykind/NozzleWallsThrustReaction'>;
    /** Applicable units are those of quantitykind:Energy */
    "NuclearEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/NuclearEnergy'>;
    /** Applicable units are those of quantitykind:NuclearQuadrupoleMoment */
    "NuclearQuadrupoleMoment": NamedNode<'http://qudt.org/vocab/quantitykind/NuclearQuadrupoleMoment'>;
    /** Applicable units are those of quantitykind:Length */
    "NuclearRadius": NamedNode<'http://qudt.org/vocab/quantitykind/NuclearRadius'>;
    /** Applicable units are those of quantitykind:NuclearSpinQuantumNumber */
    "NuclearSpinQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/NuclearSpinQuantumNumber'>;
    /** Applicable units are those of quantitykind:NucleonNumber */
    "NucleonNumber": NamedNode<'http://qudt.org/vocab/quantitykind/NucleonNumber'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "NumberDensity": NamedNode<'http://qudt.org/vocab/quantitykind/NumberDensity'>;
    /** Applicable units are those of quantitykind:NumberOfParticles */
    "NumberOfParticles": NamedNode<'http://qudt.org/vocab/quantitykind/NumberOfParticles'>;
    /** Applicable units are those of quantitykind:Concentration */
    "OlfactoryThreshold": NamedNode<'http://qudt.org/vocab/quantitykind/OlfactoryThreshold'>;
    /** Applicable units are those of quantitykind:OpeningRatio */
    "OpeningRatio": NamedNode<'http://qudt.org/vocab/quantitykind/OpeningRatio'>;
    "OrbitalAngularMomentumPerMass": NamedNode<'http://qudt.org/vocab/quantitykind/OrbitalAngularMomentumPerMass'>;
    /** Applicable units are those of quantitykind:OrbitalAngularMomentumQuantumNumber */
    "OrbitalAngularMomentumQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/OrbitalAngularMomentumQuantumNumber'>;
    /** Applicable units are those of quantitykind:Length */
    "OrbitalRadialDistance": NamedNode<'http://qudt.org/vocab/quantitykind/OrbitalRadialDistance'>;
    /** Applicable units are those of quantitykind:OrderOfReflection */
    "OrderOfReflection": NamedNode<'http://qudt.org/vocab/quantitykind/OrderOfReflection'>;
    /** Applicable units are those of quantitykind:OsmoticCoefficient */
    "OsmoticCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/OsmoticCoefficient'>;
    "OsmoticConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/OsmoticConcentration'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "OsmoticPressure": NamedNode<'http://qudt.org/vocab/quantitykind/OsmoticPressure'>;
    /** Applicable units are those of quantitykind:Length */
    "OverRangeDistance": NamedNode<'http://qudt.org/vocab/quantitykind/OverRangeDistance'>;
    /** Applicable units are those of quantitykind:PackingFraction */
    "PackingFraction": NamedNode<'http://qudt.org/vocab/quantitykind/PackingFraction'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "PartialPressure": NamedNode<'http://qudt.org/vocab/quantitykind/PartialPressure'>;
    /** Applicable units are those of quantitykind:Frequency */
    "ParticleCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/ParticleCurrent'>;
    "ParticleCurrentDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ParticleCurrentDensity'>;
    /** Applicable units are those of quantitykind:ParticleFluence */
    "ParticleFluence": NamedNode<'http://qudt.org/vocab/quantitykind/ParticleFluence'>;
    /** Applicable units are those of quantitykind:ParticleFluenceRate */
    "ParticleFluenceRate": NamedNode<'http://qudt.org/vocab/quantitykind/ParticleFluenceRate'>;
    /** Applicable units are those of quantitykind:NumberDensity */
    "ParticleNumberDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ParticleNumberDensity'>;
    /** Applicable units are those of quantitykind:Length */
    "ParticlePositionVector": NamedNode<'http://qudt.org/vocab/quantitykind/ParticlePositionVector'>;
    /** Applicable units are those of quantitykind:ParticleSourceDensity */
    "ParticleSourceDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ParticleSourceDensity'>;
    /** Applicable units are those of quantitykind:Length */
    "PathLength": NamedNode<'http://qudt.org/vocab/quantitykind/PathLength'>;
    /** Applicable units are those of quantitykind:Mass */
    "PayloadMass": NamedNode<'http://qudt.org/vocab/quantitykind/PayloadMass'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "PayloadRatio": NamedNode<'http://qudt.org/vocab/quantitykind/PayloadRatio'>;
    "PeltierCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/PeltierCoefficient'>;
    /** Applicable units are those of quantitykind:Period */
    "Period": NamedNode<'http://qudt.org/vocab/quantitykind/Period'>;
    /** Applicable units are those of quantitykind:Permeability */
    "Permeability": NamedNode<'http://qudt.org/vocab/quantitykind/Permeability'>;
    /** Applicable units are those of quantitykind:PermeabilityRatio */
    "PermeabilityRatio": NamedNode<'http://qudt.org/vocab/quantitykind/PermeabilityRatio'>;
    /** Applicable units are those of quantitykind:Permeance */
    "Permeance": NamedNode<'http://qudt.org/vocab/quantitykind/Permeance'>;
    /** Applicable units are those of quantitykind:Permittivity */
    "Permittivity": NamedNode<'http://qudt.org/vocab/quantitykind/Permittivity'>;
    /** Applicable units are those of quantitykind:PermittivityRatio */
    "PermittivityRatio": NamedNode<'http://qudt.org/vocab/quantitykind/PermittivityRatio'>;
    /** Applicable units are those of quantitykind:PhaseCoefficient */
    "PhaseCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/PhaseCoefficient'>;
    /** Applicable units are those of quantitykind:Angle */
    "PhaseDifference": NamedNode<'http://qudt.org/vocab/quantitykind/PhaseDifference'>;
    /** Applicable units are those of quantitykind:PhaseSpeedOfSound */
    "PhaseSpeedOfSound": NamedNode<'http://qudt.org/vocab/quantitykind/PhaseSpeedOfSound'>;
    /** Applicable units are those of quantitykind:Length */
    "PhononMeanFreePath": NamedNode<'http://qudt.org/vocab/quantitykind/PhononMeanFreePath'>;
    /** Applicable units are those of quantitykind:PhotonIntensity */
    "PhotonIntensity": NamedNode<'http://qudt.org/vocab/quantitykind/PhotonIntensity'>;
    "PhotonLuminance": NamedNode<'http://qudt.org/vocab/quantitykind/PhotonLuminance'>;
    /** Applicable units are those of quantitykind:PhotonRadiance */
    "PhotonRadiance": NamedNode<'http://qudt.org/vocab/quantitykind/PhotonRadiance'>;
    /** Applicable units are those of quantitykind:PhotosyntheticPhotonFlux */
    "PhotosyntheticPhotonFlux": NamedNode<'http://qudt.org/vocab/quantitykind/PhotosyntheticPhotonFlux'>;
    /** Applicable units are those of quantitykind:PhotosyntheticPhotonFluxDensity */
    "PhotosyntheticPhotonFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/PhotosyntheticPhotonFluxDensity'>;
    "PhotoThresholdOfAwarenessFunction": NamedNode<'http://qudt.org/vocab/quantitykind/PhotoThresholdOfAwarenessFunction'>;
    /** Applicable units are those of quantitykind:PictureElement */
    "PictureElement": NamedNode<'http://qudt.org/vocab/quantitykind/PictureElement'>;
    /** Applicable units are those of quantitykind:Count */
    "Piece": NamedNode<'http://qudt.org/vocab/quantitykind/Piece'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "PlanarForce": NamedNode<'http://qudt.org/vocab/quantitykind/PlanarForce'>;
    "PlanckFunction": NamedNode<'http://qudt.org/vocab/quantitykind/PlanckFunction'>;
    /** Applicable units are those of quantitykind:PlaneAngle */
    "PlaneAngle": NamedNode<'http://qudt.org/vocab/quantitykind/PlaneAngle'>;
    /** Applicable units are those of quantitykind:PoissonRatio */
    "PoissonRatio": NamedNode<'http://qudt.org/vocab/quantitykind/PoissonRatio'>;
    /** Applicable units are those of quantitykind:Polarizability */
    "Polarizability": NamedNode<'http://qudt.org/vocab/quantitykind/Polarizability'>;
    /** Applicable units are those of quantitykind:ElectricChargePerArea */
    "PolarizationField": NamedNode<'http://qudt.org/vocab/quantitykind/PolarizationField'>;
    /** Applicable units are those of quantitykind:MomentOfInertia */
    "PolarMomentOfInertia": NamedNode<'http://qudt.org/vocab/quantitykind/PolarMomentOfInertia'>;
    /** Applicable units are those of quantitykind:Population */
    "Population": NamedNode<'http://qudt.org/vocab/quantitykind/Population'>;
    /** Applicable units are those of quantitykind:Length */
    "PositionVector": NamedNode<'http://qudt.org/vocab/quantitykind/PositionVector'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "PositiveDimensionlessRatio": NamedNode<'http://qudt.org/vocab/quantitykind/PositiveDimensionlessRatio'>;
    /** Applicable units are those of quantitykind:Length */
    "PositiveLength": NamedNode<'http://qudt.org/vocab/quantitykind/PositiveLength'>;
    /** Applicable units are those of quantitykind:PlaneAngle */
    "PositivePlaneAngle": NamedNode<'http://qudt.org/vocab/quantitykind/PositivePlaneAngle'>;
    /** Applicable units are those of quantitykind:Energy */
    "PotentialEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/PotentialEnergy'>;
    /** Applicable units are those of quantitykind:Power */
    "Power": NamedNode<'http://qudt.org/vocab/quantitykind/Power'>;
    /** Applicable units are those of quantitykind:PowerArea */
    "PowerArea": NamedNode<'http://qudt.org/vocab/quantitykind/PowerArea'>;
    /** Applicable units are those of quantitykind:PowerAreaPerSolidAngle */
    "PowerAreaPerSolidAngle": NamedNode<'http://qudt.org/vocab/quantitykind/PowerAreaPerSolidAngle'>;
    "PowerConstant": NamedNode<'http://qudt.org/vocab/quantitykind/PowerConstant'>;
    /** Applicable units are those of quantitykind:PowerFactor */
    "PowerFactor": NamedNode<'http://qudt.org/vocab/quantitykind/PowerFactor'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "PowerPerArea": NamedNode<'http://qudt.org/vocab/quantitykind/PowerPerArea'>;
    "PowerPerAreaAngle": NamedNode<'http://qudt.org/vocab/quantitykind/PowerPerAreaAngle'>;
    /** Applicable units are those of quantitykind:PowerPerAreaQuarticTemperature */
    "PowerPerAreaQuarticTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/PowerPerAreaQuarticTemperature'>;
    /** Applicable units are those of quantitykind:PowerPerElectricCharge */
    "PowerPerElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/PowerPerElectricCharge'>;
    /** Applicable units are those of quantitykind:PoyntingVector */
    "PoyntingVector": NamedNode<'http://qudt.org/vocab/quantitykind/PoyntingVector'>;
    /** Applicable units are those of quantitykind:Mass */
    "PREDICTED-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/PREDICTED-MASS'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "Pressure": NamedNode<'http://qudt.org/vocab/quantitykind/Pressure'>;
    "PressureBasedAmountOfSubstanceConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedAmountOfSubstanceConcentration'>;
    "PressureBasedDensity": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedDensity'>;
    "PressureBasedDynamicViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedDynamicViscosity'>;
    "PressureBasedElectricCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedElectricCurrent'>;
    "PressureBasedElectricVoltage": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedElectricVoltage'>;
    "PressureBasedKinematicViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedKinematicViscosity'>;
    "PressureBasedLength": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedLength'>;
    "PressureBasedMass": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedMass'>;
    "PressureBasedMassFlow": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedMassFlow'>;
    "PressureBasedMolality": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedMolality'>;
    "PressureBasedQuantity": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedQuantity'>;
    "PressureBasedTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedTemperature'>;
    "PressureBasedVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedVelocity'>;
    "PressureBasedVolume": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedVolume'>;
    "PressureBasedVolumeFlow": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBasedVolumeFlow'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "PressureBurningRateConstant": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBurningRateConstant'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "PressureBurningRateIndex": NamedNode<'http://qudt.org/vocab/quantitykind/PressureBurningRateIndex'>;
    /** Applicable units are those of quantitykind:PressureCoefficient */
    "PressureCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/PressureCoefficient'>;
    /** Applicable units are those of quantitykind:PressureGradient */
    "PressureGradient": NamedNode<'http://qudt.org/vocab/quantitykind/PressureGradient'>;
    "PressureInRelationToVolumeFlow": NamedNode<'http://qudt.org/vocab/quantitykind/PressureInRelationToVolumeFlow'>;
    /** Applicable units are those of quantitykind:PressureInRelationToVolumeFlowRate */
    "PressureInRelationToVolumeFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/PressureInRelationToVolumeFlowRate'>;
    /** Applicable units are those of quantitykind:PressureLossPerLength */
    "PressureLossPerLength": NamedNode<'http://qudt.org/vocab/quantitykind/PressureLossPerLength'>;
    /** Applicable units are those of quantitykind:PressureRatio */
    "PressureRatio": NamedNode<'http://qudt.org/vocab/quantitykind/PressureRatio'>;
    /** Applicable units are those of quantitykind:Prevalence */
    "Prevalence": NamedNode<'http://qudt.org/vocab/quantitykind/Prevalence'>;
    /** Applicable units are those of quantitykind:PrincipalQuantumNumber */
    "PrincipalQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/PrincipalQuantumNumber'>;
    "PRODUCT-OF-INERTIA_X": NamedNode<'http://qudt.org/vocab/quantitykind/PRODUCT-OF-INERTIA_X'>;
    "PRODUCT-OF-INERTIA_Y": NamedNode<'http://qudt.org/vocab/quantitykind/PRODUCT-OF-INERTIA_Y'>;
    "PRODUCT-OF-INERTIA_Z": NamedNode<'http://qudt.org/vocab/quantitykind/PRODUCT-OF-INERTIA_Z'>;
    "PRODUCT-OF-INERTIA": NamedNode<'http://qudt.org/vocab/quantitykind/PRODUCT-OF-INERTIA'>;
    /** Applicable units are those of quantitykind:PropagationCoefficient */
    "PropagationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/PropagationCoefficient'>;
    /** Applicable units are those of quantitykind:PropellantBurnRate */
    "PropellantBurnRate": NamedNode<'http://qudt.org/vocab/quantitykind/PropellantBurnRate'>;
    /** Applicable units are those of quantitykind:Mass */
    "PropellantMass": NamedNode<'http://qudt.org/vocab/quantitykind/PropellantMass'>;
    /** Applicable units are those of quantitykind:Temperature */
    "PropellantMeanBulkTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/PropellantMeanBulkTemperature'>;
    /** Applicable units are those of quantitykind:Temperature */
    "PropellantTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/PropellantTemperature'>;
    /** Applicable units are those of quantitykind:QualityFactor */
    "QualityFactor": NamedNode<'http://qudt.org/vocab/quantitykind/QualityFactor'>;
    "QuantityOfLight": NamedNode<'http://qudt.org/vocab/quantitykind/QuantityOfLight'>;
    /** Applicable units are those of quantitykind:QuantumNumber */
    "QuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/QuantumNumber'>;
    /** Applicable units are those of quantitykind:Length */
    "RadialDistance": NamedNode<'http://qudt.org/vocab/quantitykind/RadialDistance'>;
    /** Applicable units are those of quantitykind:Radiance */
    "Radiance": NamedNode<'http://qudt.org/vocab/quantitykind/Radiance'>;
    /** Applicable units are those of quantitykind:RadianceFactor */
    "RadianceFactor": NamedNode<'http://qudt.org/vocab/quantitykind/RadianceFactor'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "RadiantEmmitance": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantEmmitance'>;
    /** Applicable units are those of quantitykind:Energy */
    "RadiantEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantEnergy'>;
    /** Applicable units are those of quantitykind:RadiantEnergyDensity */
    "RadiantEnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantEnergyDensity'>;
    "RadiantEnergyExposure": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantEnergyExposure'>;
    /** Applicable units are those of quantitykind:EnergyPerArea */
    "RadiantExposure": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantExposure'>;
    /** Applicable units are those of quantitykind:RadiantFluence */
    "RadiantFluence": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantFluence'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "RadiantFluenceRate": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantFluenceRate'>;
    /** Applicable units are those of quantitykind:Power */
    "RadiantFlux": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantFlux'>;
    /** Applicable units are those of quantitykind:RadiantIntensity */
    "RadiantIntensity": NamedNode<'http://qudt.org/vocab/quantitykind/RadiantIntensity'>;
    /** Applicable units are those of quantitykind:HeatFlowRate */
    "RadiativeHeatTransfer": NamedNode<'http://qudt.org/vocab/quantitykind/RadiativeHeatTransfer'>;
    "RadioactiveDecay": NamedNode<'http://qudt.org/vocab/quantitykind/RadioactiveDecay'>;
    "Radioactivity": NamedNode<'http://qudt.org/vocab/quantitykind/Radioactivity'>;
    /** Applicable units are those of quantitykind:Radiosity */
    "Radiosity": NamedNode<'http://qudt.org/vocab/quantitykind/Radiosity'>;
    /** Applicable units are those of quantitykind:Length */
    "Radius": NamedNode<'http://qudt.org/vocab/quantitykind/Radius'>;
    /** Applicable units are those of quantitykind:Length */
    "RadiusOfCurvature": NamedNode<'http://qudt.org/vocab/quantitykind/RadiusOfCurvature'>;
    /** Applicable units are those of quantitykind:ThermodynamicTemperature */
    "RankineTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/RankineTemperature'>;
    "RateOfRiseOfVoltage": NamedNode<'http://qudt.org/vocab/quantitykind/RateOfRiseOfVoltage'>;
    /** Applicable units are those of quantitykind:Ratio */
    "Ratio": NamedNode<'http://qudt.org/vocab/quantitykind/Ratio'>;
    /** Applicable units are those of quantitykind:RatioOfSpecificHeatCapacities */
    "RatioOfSpecificHeatCapacities": NamedNode<'http://qudt.org/vocab/quantitykind/RatioOfSpecificHeatCapacities'>;
    /** Applicable units are those of quantitykind:Reactance */
    "Reactance": NamedNode<'http://qudt.org/vocab/quantitykind/Reactance'>;
    /** Applicable units are those of quantitykind:Energy */
    "ReactionEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ReactionEnergy'>;
    /** Applicable units are those of quantitykind:ReactivePower */
    "ReactivePower": NamedNode<'http://qudt.org/vocab/quantitykind/ReactivePower'>;
    /** Applicable units are those of quantitykind:Reactivity */
    "Reactivity": NamedNode<'http://qudt.org/vocab/quantitykind/Reactivity'>;
    /** Applicable units are those of quantitykind:Time */
    "ReactorTimeConstant": NamedNode<'http://qudt.org/vocab/quantitykind/ReactorTimeConstant'>;
    "ReciprocalElectricResistance": NamedNode<'http://qudt.org/vocab/quantitykind/ReciprocalElectricResistance'>;
    "ReciprocalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ReciprocalEnergy'>;
    "ReciprocalPlaneAngle": NamedNode<'http://qudt.org/vocab/quantitykind/ReciprocalPlaneAngle'>;
    /** Applicable units are those of quantitykind:ReciprocalVoltage */
    "ReciprocalVoltage": NamedNode<'http://qudt.org/vocab/quantitykind/ReciprocalVoltage'>;
    /** Applicable units are those of quantitykind:RecombinationCoefficient */
    "RecombinationCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/RecombinationCoefficient'>;
    /** Applicable units are those of quantitykind:Reflectance */
    "Reflectance": NamedNode<'http://qudt.org/vocab/quantitykind/Reflectance'>;
    /** Applicable units are those of quantitykind:ReflectanceFactor */
    "ReflectanceFactor": NamedNode<'http://qudt.org/vocab/quantitykind/ReflectanceFactor'>;
    /** Applicable units are those of quantitykind:Reflectance */
    "Reflectivity": NamedNode<'http://qudt.org/vocab/quantitykind/Reflectivity'>;
    /** Applicable units are those of quantitykind:RefractiveIndex */
    "RefractiveIndex": NamedNode<'http://qudt.org/vocab/quantitykind/RefractiveIndex'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "RelativeAtomicMass": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeAtomicMass'>;
    /** Applicable units are those of quantitykind:RelativeHumidity */
    "RelativeHumidity": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeHumidity'>;
    /** Applicable units are those of quantitykind:RelativeMassConcentrationOfVapour */
    "RelativeMassConcentrationOfVapour": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeMassConcentrationOfVapour'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "RelativeMassDefect": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeMassDefect'>;
    /** Applicable units are those of quantitykind:RelativeMassDensity */
    "RelativeMassDensity": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeMassDensity'>;
    /** Applicable units are those of quantitykind:RelativeMassExcess */
    "RelativeMassExcess": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeMassExcess'>;
    /** Applicable units are those of quantitykind:RelativeMassRatioOfVapour */
    "RelativeMassRatioOfVapour": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeMassRatioOfVapour'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "RelativeMolecularMass": NamedNode<'http://qudt.org/vocab/quantitykind/RelativeMolecularMass'>;
    /** Applicable units are those of quantitykind:RelativePartialPressure */
    "RelativePartialPressure": NamedNode<'http://qudt.org/vocab/quantitykind/RelativePartialPressure'>;
    /** Applicable units are those of quantitykind:RelativePressureCoefficient */
    "RelativePressureCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/RelativePressureCoefficient'>;
    /** Applicable units are those of quantitykind:Time */
    "RelaxationTIme": NamedNode<'http://qudt.org/vocab/quantitykind/RelaxationTIme'>;
    /** Applicable units are those of quantitykind:Reluctance */
    "Reluctance": NamedNode<'http://qudt.org/vocab/quantitykind/Reluctance'>;
    /** Applicable units are those of quantitykind:Repetency */
    "Repetency": NamedNode<'http://qudt.org/vocab/quantitykind/Repetency'>;
    /** Applicable units are those of quantitykind:Mass */
    "RESERVE-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/RESERVE-MASS'>;
    /** Applicable units are those of quantitykind:ResidualResistivity */
    "ResidualResistivity": NamedNode<'http://qudt.org/vocab/quantitykind/ResidualResistivity'>;
    /** Applicable units are those of quantitykind:Resistance */
    "Resistance": NamedNode<'http://qudt.org/vocab/quantitykind/Resistance'>;
    "ResistanceBasedInductance": NamedNode<'http://qudt.org/vocab/quantitykind/ResistanceBasedInductance'>;
    /** Applicable units are those of quantitykind:ResistanceRatio */
    "ResistanceRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ResistanceRatio'>;
    /** Applicable units are those of quantitykind:Resistivity */
    "Resistivity": NamedNode<'http://qudt.org/vocab/quantitykind/Resistivity'>;
    /** Applicable units are those of quantitykind:Energy */
    "ResonanceEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ResonanceEnergy'>;
    /** Applicable units are those of quantitykind:ResonanceEscapeProbability */
    "ResonanceEscapeProbability": NamedNode<'http://qudt.org/vocab/quantitykind/ResonanceEscapeProbability'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "ResonanceEscapeProbabilityForFission": NamedNode<'http://qudt.org/vocab/quantitykind/ResonanceEscapeProbabilityForFission'>;
    /** Applicable units are those of quantitykind:RespiratoryRate */
    "RespiratoryRate": NamedNode<'http://qudt.org/vocab/quantitykind/RespiratoryRate'>;
    /** Applicable units are those of quantitykind:Energy */
    "RestEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/RestEnergy'>;
    /** Applicable units are those of quantitykind:Mass */
    "RestMass": NamedNode<'http://qudt.org/vocab/quantitykind/RestMass'>;
    /** Applicable units are those of quantitykind:Time */
    "ReverberationTime": NamedNode<'http://qudt.org/vocab/quantitykind/ReverberationTime'>;
    /** Applicable units are those of quantitykind:ReynoldsNumber */
    "ReynoldsNumber": NamedNode<'http://qudt.org/vocab/quantitykind/ReynoldsNumber'>;
    /** Applicable units are those of quantitykind:ElectricField */
    "RF-Power": NamedNode<'http://qudt.org/vocab/quantitykind/RF-Power'>;
    /** Applicable units are those of quantitykind:RichardsonConstant */
    "RichardsonConstant": NamedNode<'http://qudt.org/vocab/quantitykind/RichardsonConstant'>;
    "RiseOfOffStateVoltage": NamedNode<'http://qudt.org/vocab/quantitykind/RiseOfOffStateVoltage'>;
    /** Applicable units are those of quantitykind:Force */
    "RocketAtmosphericTransverseForce": NamedNode<'http://qudt.org/vocab/quantitykind/RocketAtmosphericTransverseForce'>;
    /** Applicable units are those of quantitykind:Rotary-TranslatoryMotionConversion */
    "Rotary-TranslatoryMotionConversion": NamedNode<'http://qudt.org/vocab/quantitykind/Rotary-TranslatoryMotionConversion'>;
    "RotaryShock": NamedNode<'http://qudt.org/vocab/quantitykind/RotaryShock'>;
    /** Applicable units are those of quantitykind:RotationalFrequency */
    "RotationalFrequency": NamedNode<'http://qudt.org/vocab/quantitykind/RotationalFrequency'>;
    /** Applicable units are those of quantitykind:RotationalMass */
    "RotationalMass": NamedNode<'http://qudt.org/vocab/quantitykind/RotationalMass'>;
    /** Applicable units are those of quantitykind:TorquePerAngle */
    "RotationalStiffness": NamedNode<'http://qudt.org/vocab/quantitykind/RotationalStiffness'>;
    /** Applicable units are those of quantitykind:RotationalVelocity */
    "RotationalVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/RotationalVelocity'>;
    /** Applicable units are those of quantitykind:ScalarMagneticPotential */
    "ScalarMagneticPotential": NamedNode<'http://qudt.org/vocab/quantitykind/ScalarMagneticPotential'>;
    /** Applicable units are those of quantitykind:SecondAxialMomentOfArea */
    "SecondAxialMomentOfArea": NamedNode<'http://qudt.org/vocab/quantitykind/SecondAxialMomentOfArea'>;
    /** Applicable units are those of quantitykind:SecondMomentOfArea */
    "SecondMomentOfArea": NamedNode<'http://qudt.org/vocab/quantitykind/SecondMomentOfArea'>;
    /** Applicable units are those of quantitykind:SecondOrderReactionRateConstant */
    "SecondOrderReactionRateConstant": NamedNode<'http://qudt.org/vocab/quantitykind/SecondOrderReactionRateConstant'>;
    /** Applicable units are those of quantitykind:SecondPolarMomentOfArea */
    "SecondPolarMomentOfArea": NamedNode<'http://qudt.org/vocab/quantitykind/SecondPolarMomentOfArea'>;
    "SecondRadiationConstant": NamedNode<'http://qudt.org/vocab/quantitykind/SecondRadiationConstant'>;
    /** Applicable units are those of quantitykind:MassRatio */
    "SecondStageMassRatio": NamedNode<'http://qudt.org/vocab/quantitykind/SecondStageMassRatio'>;
    /** Applicable units are those of quantitykind:SectionAreaIntegral */
    "SectionAreaIntegral": NamedNode<'http://qudt.org/vocab/quantitykind/SectionAreaIntegral'>;
    /** Applicable units are those of quantitykind:SectionModulus */
    "SectionModulus": NamedNode<'http://qudt.org/vocab/quantitykind/SectionModulus'>;
    /** Applicable units are those of quantitykind:SeebeckCoefficient */
    "SeebeckCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/SeebeckCoefficient'>;
    /** Applicable units are those of quantitykind:SerumOrPlasmaLevel */
    "SerumOrPlasmaLevel": NamedNode<'http://qudt.org/vocab/quantitykind/SerumOrPlasmaLevel'>;
    /** Applicable units are those of quantitykind:ServiceFactor */
    "ServiceFactor": NamedNode<'http://qudt.org/vocab/quantitykind/ServiceFactor'>;
    /** Applicable units are those of quantitykind:InformationEntropy */
    "ShannonDiversityIndex": NamedNode<'http://qudt.org/vocab/quantitykind/ShannonDiversityIndex'>;
    /** Applicable units are those of quantitykind:ShearModulus */
    "ShearModulus": NamedNode<'http://qudt.org/vocab/quantitykind/ShearModulus'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "ShearStrain": NamedNode<'http://qudt.org/vocab/quantitykind/ShearStrain'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "ShearStress": NamedNode<'http://qudt.org/vocab/quantitykind/ShearStress'>;
    /** Applicable units are those of quantitykind:Short-RangeOrderParameter */
    "Short-RangeOrderParameter": NamedNode<'http://qudt.org/vocab/quantitykind/Short-RangeOrderParameter'>;
    /** Applicable units are those of quantitykind:SignalDetectionThreshold */
    "SignalDetectionThreshold": NamedNode<'http://qudt.org/vocab/quantitykind/SignalDetectionThreshold'>;
    /** Applicable units are those of quantitykind:ElectricField */
    "SignalStrength": NamedNode<'http://qudt.org/vocab/quantitykind/SignalStrength'>;
    /** Applicable units are those of quantitykind:MassRatio */
    "SingleStageLauncherMassRatio": NamedNode<'http://qudt.org/vocab/quantitykind/SingleStageLauncherMassRatio'>;
    /** Applicable units are those of quantitykind:Area */
    "Slowing-DownArea": NamedNode<'http://qudt.org/vocab/quantitykind/Slowing-DownArea'>;
    /** Applicable units are those of quantitykind:Slowing-DownDensity */
    "Slowing-DownDensity": NamedNode<'http://qudt.org/vocab/quantitykind/Slowing-DownDensity'>;
    /** Applicable units are those of quantitykind:Length */
    "Slowing-DownLength": NamedNode<'http://qudt.org/vocab/quantitykind/Slowing-DownLength'>;
    /** Applicable units are those of quantitykind:SoilAdsorptionCoefficient */
    "SoilAdsorptionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/SoilAdsorptionCoefficient'>;
    /** Applicable units are those of quantitykind:SolidAngle */
    "SolidAngle": NamedNode<'http://qudt.org/vocab/quantitykind/SolidAngle'>;
    /** Applicable units are those of quantitykind:Length */
    "SolidStateDiffusionLength": NamedNode<'http://qudt.org/vocab/quantitykind/SolidStateDiffusionLength'>;
    /** Applicable units are those of quantitykind:Solubility_Water */
    "Solubility_Water": NamedNode<'http://qudt.org/vocab/quantitykind/Solubility_Water'>;
    /** Applicable units are those of quantitykind:EnergyDensity */
    "SoundEnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/SoundEnergyDensity'>;
    /** Applicable units are those of quantitykind:SoundExposure */
    "SoundExposure": NamedNode<'http://qudt.org/vocab/quantitykind/SoundExposure'>;
    /** Applicable units are those of quantitykind:SoundExposureLevel */
    "SoundExposureLevel": NamedNode<'http://qudt.org/vocab/quantitykind/SoundExposureLevel'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "SoundIntensity": NamedNode<'http://qudt.org/vocab/quantitykind/SoundIntensity'>;
    /** Applicable units are those of quantitykind:Acceleration */
    "SoundParticleAcceleration": NamedNode<'http://qudt.org/vocab/quantitykind/SoundParticleAcceleration'>;
    /** Applicable units are those of quantitykind:Length */
    "SoundParticleDisplacement": NamedNode<'http://qudt.org/vocab/quantitykind/SoundParticleDisplacement'>;
    /** Applicable units are those of quantitykind:SoundParticleVelocity */
    "SoundParticleVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/SoundParticleVelocity'>;
    /** Applicable units are those of quantitykind:Power */
    "SoundPower": NamedNode<'http://qudt.org/vocab/quantitykind/SoundPower'>;
    /** Applicable units are those of quantitykind:SoundPowerLevel */
    "SoundPowerLevel": NamedNode<'http://qudt.org/vocab/quantitykind/SoundPowerLevel'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "SoundPressure": NamedNode<'http://qudt.org/vocab/quantitykind/SoundPressure'>;
    /** Applicable units are those of quantitykind:SoundPressureLevel */
    "SoundPressureLevel": NamedNode<'http://qudt.org/vocab/quantitykind/SoundPressureLevel'>;
    /** Applicable units are those of quantitykind:SoundReductionIndex */
    "SoundReductionIndex": NamedNode<'http://qudt.org/vocab/quantitykind/SoundReductionIndex'>;
    /** Applicable units are those of quantitykind:SoundVolumeVelocity */
    "SoundVolumeVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/SoundVolumeVelocity'>;
    /** Applicable units are those of quantitykind:Voltage */
    "SourceVoltage": NamedNode<'http://qudt.org/vocab/quantitykind/SourceVoltage'>;
    /** Applicable units are those of quantitykind:Voltage */
    "SourceVoltageBetweenSubstances": NamedNode<'http://qudt.org/vocab/quantitykind/SourceVoltageBetweenSubstances'>;
    /** Applicable units are those of quantitykind:Length */
    "SpatialSummationFunction": NamedNode<'http://qudt.org/vocab/quantitykind/SpatialSummationFunction'>;
    /** Applicable units are those of quantitykind:SpecificAcousticImpedance */
    "SpecificAcousticImpedance": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificAcousticImpedance'>;
    /** Applicable units are those of quantitykind:SpecificActivity */
    "SpecificActivity": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificActivity'>;
    /** Applicable units are those of quantitykind:SpecificElectricCharge */
    "SpecificElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificElectricCharge'>;
    /** Applicable units are those of quantitykind:SpecificElectricCurrent */
    "SpecificElectricCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificElectricCurrent'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "SpecificEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificEnergy'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "SpecificEnergyImparted": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificEnergyImparted'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "SpecificEnthalpy": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificEnthalpy'>;
    /** Applicable units are those of quantitykind:SpecificEntropy */
    "SpecificEntropy": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificEntropy'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "SpecificGibbsEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificGibbsEnergy'>;
    /** Applicable units are those of quantitykind:SpecificHeatCapacity */
    "SpecificHeatCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatCapacity'>;
    /** Applicable units are those of quantitykind:SpecificHeatCapacityAtConstantPressure */
    "SpecificHeatCapacityAtConstantPressure": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatCapacityAtConstantPressure'>;
    /** Applicable units are those of quantitykind:SpecificHeatCapacityAtConstantVolume */
    "SpecificHeatCapacityAtConstantVolume": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatCapacityAtConstantVolume'>;
    /** Applicable units are those of quantitykind:SpecificHeatCapacityAtSaturation */
    "SpecificHeatCapacityAtSaturation": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatCapacityAtSaturation'>;
    /** Applicable units are those of quantitykind:SpecificHeatPressure */
    "SpecificHeatPressure": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatPressure'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "SpecificHeatsRatio": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatsRatio'>;
    /** Applicable units are those of quantitykind:SpecificHeatVolume */
    "SpecificHeatVolume": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHeatVolume'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "SpecificHelmholtzEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificHelmholtzEnergy'>;
    "SpecificImpulse": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificImpulse'>;
    /** Applicable units are those of quantitykind:Velocity */
    "SpecificImpulseByMass": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificImpulseByMass'>;
    /** Applicable units are those of quantitykind:Time */
    "SpecificImpulseByWeight": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificImpulseByWeight'>;
    /** Applicable units are those of quantitykind:SpecificEnergy */
    "SpecificInternalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificInternalEnergy'>;
    /** Applicable units are those of quantitykind:SpecificModulus */
    "SpecificModulus": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificModulus'>;
    "SpecificOpticalRotationalAbility": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificOpticalRotationalAbility'>;
    /** Applicable units are those of quantitykind:SpecificOpticalRotatoryPower */
    "SpecificOpticalRotatoryPower": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificOpticalRotatoryPower'>;
    /** Applicable units are those of quantitykind:SpecificPower */
    "SpecificPower": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificPower'>;
    /** Applicable units are those of quantitykind:SpecificSurfaceArea */
    "SpecificSurfaceArea": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificSurfaceArea'>;
    "SpecificThrust": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificThrust'>;
    /** Applicable units are those of quantitykind:SpecificVolume */
    "SpecificVolume": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificVolume'>;
    /** Applicable units are those of quantitykind:SpecificWeight */
    "SpecificWeight": NamedNode<'http://qudt.org/vocab/quantitykind/SpecificWeight'>;
    /** Applicable units are those of quantitykind:SpectralAngularCrossSection */
    "SpectralAngularCrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralAngularCrossSection'>;
    "SpectralConcentrationOfRadiantEnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralConcentrationOfRadiantEnergyDensity'>;
    "SpectralConcentrationOfVibrationalModes": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralConcentrationOfVibrationalModes'>;
    /** Applicable units are those of quantitykind:SpectralCrossSection */
    "SpectralCrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralCrossSection'>;
    /** Applicable units are those of quantitykind:SpectralDensityOfVibrationalModes */
    "SpectralDensityOfVibrationalModes": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralDensityOfVibrationalModes'>;
    "SpectralLuminousEfficiency": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralLuminousEfficiency'>;
    /** Applicable units are those of quantitykind:SpectralRadiantEnergyDensity */
    "SpectralRadiantEnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralRadiantEnergyDensity'>;
    "SpectralRadiantEnergyDensityInTermsOfWavelength": NamedNode<'http://qudt.org/vocab/quantitykind/SpectralRadiantEnergyDensityInTermsOfWavelength'>;
    /** Applicable units are those of quantitykind:Speed */
    "Speed": NamedNode<'http://qudt.org/vocab/quantitykind/Speed'>;
    /** Applicable units are those of quantitykind:Speed */
    "SpeedOfLight": NamedNode<'http://qudt.org/vocab/quantitykind/SpeedOfLight'>;
    /** Applicable units are those of quantitykind:Speed */
    "SpeedOfSound": NamedNode<'http://qudt.org/vocab/quantitykind/SpeedOfSound'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "SpeedRatio": NamedNode<'http://qudt.org/vocab/quantitykind/SpeedRatio'>;
    /** Applicable units are those of quantitykind:LuminousFluxPerArea */
    "SphericalIlluminance": NamedNode<'http://qudt.org/vocab/quantitykind/SphericalIlluminance'>;
    /** Applicable units are those of quantitykind:AngularMomentum */
    "Spin": NamedNode<'http://qudt.org/vocab/quantitykind/Spin'>;
    /** Applicable units are those of quantitykind:SpinQuantumNumber */
    "SpinQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/SpinQuantumNumber'>;
    /** Applicable units are those of quantitykind:Mass */
    "StagePropellantMass": NamedNode<'http://qudt.org/vocab/quantitykind/StagePropellantMass'>;
    /** Applicable units are those of quantitykind:Mass */
    "StageStructuralMass": NamedNode<'http://qudt.org/vocab/quantitykind/StageStructuralMass'>;
    /** Applicable units are those of quantitykind:StandardAbsoluteActivity */
    "StandardAbsoluteActivity": NamedNode<'http://qudt.org/vocab/quantitykind/StandardAbsoluteActivity'>;
    /** Applicable units are those of quantitykind:MolarEnergy */
    "StandardChemicalPotential": NamedNode<'http://qudt.org/vocab/quantitykind/StandardChemicalPotential'>;
    /** Applicable units are those of quantitykind:StandardGravitationalParameter */
    "StandardGravitationalParameter": NamedNode<'http://qudt.org/vocab/quantitykind/StandardGravitationalParameter'>;
    "StateDensity": NamedNode<'http://qudt.org/vocab/quantitykind/StateDensity'>;
    "StateDensityAsExpressionOfAngularFrequency": NamedNode<'http://qudt.org/vocab/quantitykind/StateDensityAsExpressionOfAngularFrequency'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "StateOfCharge": NamedNode<'http://qudt.org/vocab/quantitykind/StateOfCharge'>;
    /** Applicable units are those of quantitykind:Force */
    "StaticFriction": NamedNode<'http://qudt.org/vocab/quantitykind/StaticFriction'>;
    /** Applicable units are those of quantitykind:FrictionCoefficient */
    "StaticFrictionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/StaticFrictionCoefficient'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "StaticPressure": NamedNode<'http://qudt.org/vocab/quantitykind/StaticPressure'>;
    /** Applicable units are those of quantitykind:StatisticalWeight */
    "StatisticalWeight": NamedNode<'http://qudt.org/vocab/quantitykind/StatisticalWeight'>;
    /** Applicable units are those of quantitykind:Frequency */
    "StochasticProcess": NamedNode<'http://qudt.org/vocab/quantitykind/StochasticProcess'>;
    /** Applicable units are those of quantitykind:StoichiometricNumber */
    "StoichiometricNumber": NamedNode<'http://qudt.org/vocab/quantitykind/StoichiometricNumber'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "Strain": NamedNode<'http://qudt.org/vocab/quantitykind/Strain'>;
    /** Applicable units are those of quantitykind:EnergyDensity */
    "StrainEnergyDensity": NamedNode<'http://qudt.org/vocab/quantitykind/StrainEnergyDensity'>;
    /** Applicable units are those of quantitykind:StrainEnergyReleaseRate */
    "StrainEnergyReleaseRate": NamedNode<'http://qudt.org/vocab/quantitykind/StrainEnergyReleaseRate'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "Stress": NamedNode<'http://qudt.org/vocab/quantitykind/Stress'>;
    /** Applicable units are those of quantitykind:StressIntensityFactor */
    "StressIntensityFactor": NamedNode<'http://qudt.org/vocab/quantitykind/StressIntensityFactor'>;
    /** Applicable units are those of quantitykind:StressOpticCoefficient */
    "StressOpticCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/StressOpticCoefficient'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "StructuralEfficiency": NamedNode<'http://qudt.org/vocab/quantitykind/StructuralEfficiency'>;
    /** Applicable units are those of quantitykind:StructureFactor */
    "StructureFactor": NamedNode<'http://qudt.org/vocab/quantitykind/StructureFactor'>;
    /** Applicable units are those of quantitykind:SunProtectionFactorOfAProduct */
    "SunProtectionFactorOfAProduct": NamedNode<'http://qudt.org/vocab/quantitykind/SunProtectionFactorOfAProduct'>;
    /** Applicable units are those of quantitykind:Temperature */
    "SuperconductionTransitionTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/SuperconductionTransitionTemperature'>;
    /** Applicable units are those of quantitykind:Energy */
    "SuperconductorEnergyGap": NamedNode<'http://qudt.org/vocab/quantitykind/SuperconductorEnergyGap'>;
    /** Applicable units are those of quantitykind:SurfaceActivityDensity */
    "SurfaceActivityDensity": NamedNode<'http://qudt.org/vocab/quantitykind/SurfaceActivityDensity'>;
    /** Applicable units are those of quantitykind:SurfaceCoefficientOfHeatTransfer */
    "SurfaceCoefficientOfHeatTransfer": NamedNode<'http://qudt.org/vocab/quantitykind/SurfaceCoefficientOfHeatTransfer'>;
    /** Applicable units are those of quantitykind:SurfaceDensity */
    "SurfaceDensity": NamedNode<'http://qudt.org/vocab/quantitykind/SurfaceDensity'>;
    /** Applicable units are those of quantitykind:SurfaceRelatedVolumeFlow */
    "SurfaceRelatedVolumeFlow": NamedNode<'http://qudt.org/vocab/quantitykind/SurfaceRelatedVolumeFlow'>;
    /** Applicable units are those of quantitykind:EnergyPerArea */
    "SurfaceTension": NamedNode<'http://qudt.org/vocab/quantitykind/SurfaceTension'>;
    "SurgeImpedanceOfTheMedium": NamedNode<'http://qudt.org/vocab/quantitykind/SurgeImpedanceOfTheMedium'>;
    "Susceptance": NamedNode<'http://qudt.org/vocab/quantitykind/Susceptance'>;
    "SymbolTransmissionRate": NamedNode<'http://qudt.org/vocab/quantitykind/SymbolTransmissionRate'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "SystolicBloodPressure": NamedNode<'http://qudt.org/vocab/quantitykind/SystolicBloodPressure'>;
    /** Applicable units are those of quantitykind:Mass */
    "TARGET-BOGIE-MASS": NamedNode<'http://qudt.org/vocab/quantitykind/TARGET-BOGIE-MASS'>;
    /** Applicable units are those of quantitykind:Temperature */
    "Temperature": NamedNode<'http://qudt.org/vocab/quantitykind/Temperature'>;
    /** Applicable units are those of quantitykind:TemperatureAmountOfSubstance */
    "TemperatureAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureAmountOfSubstance'>;
    "TemperatureBasedAmountOfSubstanceConcentration": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedAmountOfSubstanceConcentration'>;
    "TemperatureBasedDensity": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedDensity'>;
    "TemperatureBasedDynamicViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedDynamicViscosity'>;
    "TemperatureBasedKinematicViscosity": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedKinematicViscosity'>;
    "TemperatureBasedLength": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedLength'>;
    "TemperatureBasedMass": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedMass'>;
    "TemperatureBasedMassFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedMassFlowRate'>;
    "TemperatureBasedQuantity": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedQuantity'>;
    "TemperatureBasedVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedVelocity'>;
    "TemperatureBasedVolumeFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureBasedVolumeFlowRate'>;
    /** Applicable units are those of quantitykind:Temperature */
    "TemperatureDifference": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureDifference'>;
    /** Applicable units are those of quantitykind:TemperatureGradient */
    "TemperatureGradient": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureGradient'>;
    /** Applicable units are those of quantitykind:TemperaturePerMagneticFluxDensity */
    "TemperaturePerMagneticFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/TemperaturePerMagneticFluxDensity'>;
    /** Applicable units are those of quantitykind:TemperaturePerTime_Squared */
    "TemperaturePerTime_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/TemperaturePerTime_Squared'>;
    /** Applicable units are those of quantitykind:TemperaturePerTime */
    "TemperaturePerTime": NamedNode<'http://qudt.org/vocab/quantitykind/TemperaturePerTime'>;
    /** Applicable units are those of quantitykind:TemperaturePerTime */
    "TemperatureRateOfChange": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureRateOfChange'>;
    /** Applicable units are those of quantitykind:TemperatureRatio */
    "TemperatureRatio": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureRatio'>;
    "TemperatureRelatedMolarMass": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureRelatedMolarMass'>;
    "TemperatureRelatedVolume": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureRelatedVolume'>;
    /** Applicable units are those of quantitykind:TemperatureVariance_NEON */
    "TemperatureVariance_NEON": NamedNode<'http://qudt.org/vocab/quantitykind/TemperatureVariance_NEON'>;
    /** Applicable units are those of quantitykind:TemporalSummationFunction */
    "TemporalSummationFunction": NamedNode<'http://qudt.org/vocab/quantitykind/TemporalSummationFunction'>;
    /** Applicable units are those of quantitykind:Force */
    "Tension": NamedNode<'http://qudt.org/vocab/quantitykind/Tension'>;
    /** Applicable units are those of quantitykind:CoefficientOfHeatTransfer */
    "ThermalAdmittance": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalAdmittance'>;
    /** Applicable units are those of quantitykind:ThermalCapacitance */
    "ThermalCapacitance": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalCapacitance'>;
    "ThermalCoefficientOfLinearExpansion": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalCoefficientOfLinearExpansion'>;
    /** Applicable units are those of quantitykind:ThermalConductance */
    "ThermalConductance": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalConductance'>;
    /** Applicable units are those of quantitykind:ThermalConductivity */
    "ThermalConductivity": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalConductivity'>;
    /** Applicable units are those of quantitykind:ThermalDiffusionFactor */
    "ThermalDiffusionFactor": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalDiffusionFactor'>;
    /** Applicable units are those of quantitykind:ThermalDiffusionRatio */
    "ThermalDiffusionRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalDiffusionRatio'>;
    /** Applicable units are those of quantitykind:ThermalDiffusionRatioCoefficient */
    "ThermalDiffusionRatioCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalDiffusionRatioCoefficient'>;
    /** Applicable units are those of quantitykind:AreaPerTime */
    "ThermalDiffusivity": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalDiffusivity'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "ThermalEfficiency": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalEfficiency'>;
    /** Applicable units are those of quantitykind:ThermalEnergy */
    "ThermalEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalEnergy'>;
    /** Applicable units are those of quantitykind:ThermalEnergyLength */
    "ThermalEnergyLength": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalEnergyLength'>;
    /** Applicable units are those of quantitykind:ThermalExpansionCoefficient */
    "ThermalExpansionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalExpansionCoefficient'>;
    /** Applicable units are those of quantitykind:ThermalInsulance */
    "ThermalInsulance": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalInsulance'>;
    "ThermalInsulation": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalInsulation'>;
    /** Applicable units are those of quantitykind:ThermalResistance */
    "ThermalResistance": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalResistance'>;
    /** Applicable units are those of quantitykind:ThermalResistivity */
    "ThermalResistivity": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalResistivity'>;
    /** Applicable units are those of quantitykind:CoefficientOfHeatTransfer */
    "ThermalTransmittance": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalTransmittance'>;
    /** Applicable units are those of quantitykind:ThermalUtilizationFactor */
    "ThermalUtilizationFactor": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalUtilizationFactor'>;
    /** Applicable units are those of quantitykind:Dimensionless */
    "ThermalUtilizationFactorForFission": NamedNode<'http://qudt.org/vocab/quantitykind/ThermalUtilizationFactorForFission'>;
    /** Applicable units are those of quantitykind:MagneticFluxDensity */
    "ThermodynamicCriticalMagneticFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/ThermodynamicCriticalMagneticFluxDensity'>;
    /** Applicable units are those of quantitykind:Energy */
    "ThermodynamicEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/ThermodynamicEnergy'>;
    /** Applicable units are those of quantitykind:EnergyPerTemperature */
    "ThermodynamicEntropy": NamedNode<'http://qudt.org/vocab/quantitykind/ThermodynamicEntropy'>;
    /** Applicable units are those of quantitykind:ThermodynamicTemperature */
    "ThermodynamicTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/ThermodynamicTemperature'>;
    /** Applicable units are those of quantitykind:Length */
    "Thickness": NamedNode<'http://qudt.org/vocab/quantitykind/Thickness'>;
    /** Applicable units are those of quantitykind:ThomsonCoefficient */
    "ThomsonCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/ThomsonCoefficient'>;
    /** Applicable units are those of quantitykind:Force */
    "Thrust": NamedNode<'http://qudt.org/vocab/quantitykind/Thrust'>;
    "ThrustCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/ThrustCoefficient'>;
    /** Applicable units are those of quantitykind:ThrusterPowerToThrustEfficiency */
    "ThrusterPowerToThrustEfficiency": NamedNode<'http://qudt.org/vocab/quantitykind/ThrusterPowerToThrustEfficiency'>;
    /** Applicable units are those of quantitykind:ThrustToMassRatio */
    "ThrustToMassRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ThrustToMassRatio'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "ThrustToWeightRatio": NamedNode<'http://qudt.org/vocab/quantitykind/ThrustToWeightRatio'>;
    /** Applicable units are those of quantitykind:Angle */
    "Tilt": NamedNode<'http://qudt.org/vocab/quantitykind/Tilt'>;
    /** Applicable units are those of quantitykind:Time_Squared */
    "Time_Squared": NamedNode<'http://qudt.org/vocab/quantitykind/Time_Squared'>;
    /** Applicable units are those of quantitykind:Time */
    "Time": NamedNode<'http://qudt.org/vocab/quantitykind/Time'>;
    /** Applicable units are those of quantitykind:PowerPerArea */
    "TimeAveragedSoundIntensity": NamedNode<'http://qudt.org/vocab/quantitykind/TimeAveragedSoundIntensity'>;
    "TimeConstant_Inductance": NamedNode<'http://qudt.org/vocab/quantitykind/TimeConstant_Inductance'>;
    /** Applicable units are those of quantitykind:TimeRatio */
    "TimeRatio": NamedNode<'http://qudt.org/vocab/quantitykind/TimeRatio'>;
    "TimeRelatedLogarithmicRatio": NamedNode<'http://qudt.org/vocab/quantitykind/TimeRelatedLogarithmicRatio'>;
    /** Applicable units are those of quantitykind:TimeTemperature */
    "TimeTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/TimeTemperature'>;
    /** Applicable units are those of quantitykind:Torque */
    "Torque": NamedNode<'http://qudt.org/vocab/quantitykind/Torque'>;
    "TorqueConstant": NamedNode<'http://qudt.org/vocab/quantitykind/TorqueConstant'>;
    /** Applicable units are those of quantitykind:TorquePerAngle */
    "TorquePerAngle": NamedNode<'http://qudt.org/vocab/quantitykind/TorquePerAngle'>;
    /** Applicable units are those of quantitykind:TorquePerLength */
    "TorquePerLength": NamedNode<'http://qudt.org/vocab/quantitykind/TorquePerLength'>;
    "TorsionalRigidity": NamedNode<'http://qudt.org/vocab/quantitykind/TorsionalRigidity'>;
    /** Applicable units are those of quantitykind:TorsionalSpringConstant */
    "TorsionalSpringConstant": NamedNode<'http://qudt.org/vocab/quantitykind/TorsionalSpringConstant'>;
    /** Applicable units are those of quantitykind:AngularMomentum */
    "TotalAngularMomentum": NamedNode<'http://qudt.org/vocab/quantitykind/TotalAngularMomentum'>;
    /** Applicable units are those of quantitykind:TotalAngularMomentumQuantumNumber */
    "TotalAngularMomentumQuantumNumber": NamedNode<'http://qudt.org/vocab/quantitykind/TotalAngularMomentumQuantumNumber'>;
    /** Applicable units are those of quantitykind:TotalAtomicStoppingPower */
    "TotalAtomicStoppingPower": NamedNode<'http://qudt.org/vocab/quantitykind/TotalAtomicStoppingPower'>;
    /** Applicable units are those of quantitykind:Area */
    "TotalCrossSection": NamedNode<'http://qudt.org/vocab/quantitykind/TotalCrossSection'>;
    /** Applicable units are those of quantitykind:TotalCurrent */
    "TotalCurrent": NamedNode<'http://qudt.org/vocab/quantitykind/TotalCurrent'>;
    /** Applicable units are those of quantitykind:TotalCurrentDensity */
    "TotalCurrentDensity": NamedNode<'http://qudt.org/vocab/quantitykind/TotalCurrentDensity'>;
    /** Applicable units are those of quantitykind:TotalIonization */
    "TotalIonization": NamedNode<'http://qudt.org/vocab/quantitykind/TotalIonization'>;
    /** Applicable units are those of quantitykind:TotalLinearStoppingPower */
    "TotalLinearStoppingPower": NamedNode<'http://qudt.org/vocab/quantitykind/TotalLinearStoppingPower'>;
    /** Applicable units are those of quantitykind:TotalMassStoppingPower */
    "TotalMassStoppingPower": NamedNode<'http://qudt.org/vocab/quantitykind/TotalMassStoppingPower'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "TotalPressure": NamedNode<'http://qudt.org/vocab/quantitykind/TotalPressure'>;
    "TotalRadiance": NamedNode<'http://qudt.org/vocab/quantitykind/TotalRadiance'>;
    "TouchThresholds": NamedNode<'http://qudt.org/vocab/quantitykind/TouchThresholds'>;
    "TrafficIntensity": NamedNode<'http://qudt.org/vocab/quantitykind/TrafficIntensity'>;
    "TransmissionRatioBetweenRotationAndTranslation": NamedNode<'http://qudt.org/vocab/quantitykind/TransmissionRatioBetweenRotationAndTranslation'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "Transmittance": NamedNode<'http://qudt.org/vocab/quantitykind/Transmittance'>;
    /** Applicable units are those of quantitykind:TransmittanceDensity */
    "TransmittanceDensity": NamedNode<'http://qudt.org/vocab/quantitykind/TransmittanceDensity'>;
    /** Applicable units are those of quantitykind:Velocity */
    "TrueExhaustVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/TrueExhaustVelocity'>;
    /** Applicable units are those of quantitykind:Turbidity */
    "Turbidity": NamedNode<'http://qudt.org/vocab/quantitykind/Turbidity'>;
    /** Applicable units are those of quantitykind:Turns */
    "Turns": NamedNode<'http://qudt.org/vocab/quantitykind/Turns'>;
    /** Applicable units are those of quantitykind:Unbalance */
    "Unbalance": NamedNode<'http://qudt.org/vocab/quantitykind/Unbalance'>;
    /** Applicable units are those of quantitykind:Unknown */
    "Unknown": NamedNode<'http://qudt.org/vocab/quantitykind/Unknown'>;
    /** Applicable units are those of quantitykind:MagneticFluxDensity */
    "UpperCriticalMagneticFluxDensity": NamedNode<'http://qudt.org/vocab/quantitykind/UpperCriticalMagneticFluxDensity'>;
    /** Applicable units are those of quantitykind:Force */
    "VacuumThrust": NamedNode<'http://qudt.org/vocab/quantitykind/VacuumThrust'>;
    /** Applicable units are those of quantitykind:VaporPermeability */
    "VaporPermeability": NamedNode<'http://qudt.org/vocab/quantitykind/VaporPermeability'>;
    /** Applicable units are those of quantitykind:VaporPermeance */
    "VaporPermeance": NamedNode<'http://qudt.org/vocab/quantitykind/VaporPermeance'>;
    /** Applicable units are those of quantitykind:VaporPressure */
    "VaporPressure": NamedNode<'http://qudt.org/vocab/quantitykind/VaporPressure'>;
    /** Applicable units are those of quantitykind:Velocity */
    "VehicleVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/VehicleVelocity'>;
    /** Applicable units are those of quantitykind:Velocity */
    "Velocity": NamedNode<'http://qudt.org/vocab/quantitykind/Velocity'>;
    /** Applicable units are those of quantitykind:VentilationRatePerFloorArea */
    "VentilationRatePerFloorArea": NamedNode<'http://qudt.org/vocab/quantitykind/VentilationRatePerFloorArea'>;
    /** Applicable units are those of quantitykind:Velocity */
    "VerticalVelocity": NamedNode<'http://qudt.org/vocab/quantitykind/VerticalVelocity'>;
    /** Applicable units are those of quantitykind:VideoFrameRate */
    "VideoFrameRate": NamedNode<'http://qudt.org/vocab/quantitykind/VideoFrameRate'>;
    /** Applicable units are those of quantitykind:Viscosity */
    "Viscosity": NamedNode<'http://qudt.org/vocab/quantitykind/Viscosity'>;
    /** Applicable units are those of quantitykind:Energy */
    "VisibleRadiantEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/VisibleRadiantEnergy'>;
    "VisionThresholds": NamedNode<'http://qudt.org/vocab/quantitykind/VisionThresholds'>;
    /** Applicable units are those of quantitykind:Voltage */
    "Voltage": NamedNode<'http://qudt.org/vocab/quantitykind/Voltage'>;
    "VoltagePhasor": NamedNode<'http://qudt.org/vocab/quantitykind/VoltagePhasor'>;
    /** Applicable units are those of quantitykind:VoltageRatio */
    "VoltageRatio": NamedNode<'http://qudt.org/vocab/quantitykind/VoltageRatio'>;
    /** Applicable units are those of quantitykind:Volume */
    "Volume": NamedNode<'http://qudt.org/vocab/quantitykind/Volume'>;
    "VolumeDensityOfCharge": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeDensityOfCharge'>;
    /** Applicable units are those of quantitykind:VolumeFlowRate_SurfaceRelated */
    "VolumeFlowRate_SurfaceRelated": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeFlowRate_SurfaceRelated'>;
    /** Applicable units are those of quantitykind:VolumeFlowRate */
    "VolumeFlowRate": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeFlowRate'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "VolumeFlowRatio": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeFlowRatio'>;
    /** Applicable units are those of quantitykind:VolumeFraction */
    "VolumeFraction": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeFraction'>;
    "VolumeOrSectionModulus": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeOrSectionModulus'>;
    /** Applicable units are those of quantitykind:VolumePerArea */
    "VolumePerArea": NamedNode<'http://qudt.org/vocab/quantitykind/VolumePerArea'>;
    /** Applicable units are those of quantitykind:VolumePerTime */
    "VolumePerTime": NamedNode<'http://qudt.org/vocab/quantitykind/VolumePerTime'>;
    /** Applicable units are those of quantitykind:DimensionlessRatio */
    "VolumeStrain": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeStrain'>;
    /** Applicable units are those of quantitykind:VolumeThermalExpansion */
    "VolumeThermalExpansion": NamedNode<'http://qudt.org/vocab/quantitykind/VolumeThermalExpansion'>;
    /** Applicable units are those of quantitykind:VolumetricBitDensity */
    "VolumetricBitDensity": NamedNode<'http://qudt.org/vocab/quantitykind/VolumetricBitDensity'>;
    "VolumetricElectricCharge": NamedNode<'http://qudt.org/vocab/quantitykind/VolumetricElectricCharge'>;
    "VolumetricEntityDensity": NamedNode<'http://qudt.org/vocab/quantitykind/VolumetricEntityDensity'>;
    /** Applicable units are those of quantitykind:VolumetricFlux */
    "VolumetricFlux": NamedNode<'http://qudt.org/vocab/quantitykind/VolumetricFlux'>;
    /** Applicable units are those of quantitykind:VolumetricHeatCapacity */
    "VolumetricHeatCapacity": NamedNode<'http://qudt.org/vocab/quantitykind/VolumetricHeatCapacity'>;
    "VolumetricOutputPower": NamedNode<'http://qudt.org/vocab/quantitykind/VolumetricOutputPower'>;
    "VolumicAmountOfSubstance": NamedNode<'http://qudt.org/vocab/quantitykind/VolumicAmountOfSubstance'>;
    "VolumicDataQuantity": NamedNode<'http://qudt.org/vocab/quantitykind/VolumicDataQuantity'>;
    /** Applicable units are those of quantitykind:VolumicElectromagneticEnergy */
    "VolumicElectromagneticEnergy": NamedNode<'http://qudt.org/vocab/quantitykind/VolumicElectromagneticEnergy'>;
    "VolumicOutput": NamedNode<'http://qudt.org/vocab/quantitykind/VolumicOutput'>;
    /** Applicable units are those of quantitykind:AngularVelocity */
    "Vorticity": NamedNode<'http://qudt.org/vocab/quantitykind/Vorticity'>;
    "WarmReceptorThreshold": NamedNode<'http://qudt.org/vocab/quantitykind/WarmReceptorThreshold'>;
    /** Applicable units are those of quantitykind:WarpingConstant */
    "WarpingConstant": NamedNode<'http://qudt.org/vocab/quantitykind/WarpingConstant'>;
    /** Applicable units are those of quantitykind:WarpingMoment */
    "WarpingMoment": NamedNode<'http://qudt.org/vocab/quantitykind/WarpingMoment'>;
    /** Applicable units are those of quantitykind:Power */
    "WaterHorsepower": NamedNode<'http://qudt.org/vocab/quantitykind/WaterHorsepower'>;
    /** Applicable units are those of quantitykind:WaterVaporDiffusionCoefficient */
    "WaterVaporDiffusionCoefficient": NamedNode<'http://qudt.org/vocab/quantitykind/WaterVaporDiffusionCoefficient'>;
    /** Applicable units are those of quantitykind:WaterVapourPermeability */
    "WaterVapourPermeability": NamedNode<'http://qudt.org/vocab/quantitykind/WaterVapourPermeability'>;
    /** Applicable units are those of quantitykind:Length */
    "Wavelength": NamedNode<'http://qudt.org/vocab/quantitykind/Wavelength'>;
    /** Applicable units are those of quantitykind:InverseLength */
    "Wavenumber": NamedNode<'http://qudt.org/vocab/quantitykind/Wavenumber'>;
    /** Applicable units are those of quantitykind:Time */
    "WebTime": NamedNode<'http://qudt.org/vocab/quantitykind/WebTime'>;
    /** Applicable units are those of quantitykind:ForcePerArea */
    "WebTimeAveragePressure": NamedNode<'http://qudt.org/vocab/quantitykind/WebTimeAveragePressure'>;
    /** Applicable units are those of quantitykind:Force */
    "WebTimeAverageThrust": NamedNode<'http://qudt.org/vocab/quantitykind/WebTimeAverageThrust'>;
    /** Applicable units are those of quantitykind:Force */
    "Weight": NamedNode<'http://qudt.org/vocab/quantitykind/Weight'>;
    /** Applicable units are those of quantitykind:Temperature */
    "WetBulbTemperature": NamedNode<'http://qudt.org/vocab/quantitykind/WetBulbTemperature'>;
    /** Applicable units are those of quantitykind:Length */
    "Width": NamedNode<'http://qudt.org/vocab/quantitykind/Width'>;
    /** Applicable units are those of quantitykind:Energy */
    "Work": NamedNode<'http://qudt.org/vocab/quantitykind/Work'>;
    /** Applicable units are those of quantitykind:Energy */
    "WorkFunction": NamedNode<'http://qudt.org/vocab/quantitykind/WorkFunction'>;
}

const builder = namespace("http://qudt.org/vocab/quantitykind/") as any;
export const strict = builder as NamespaceBuilder<keyof Quantitykind> & Quantitykind;
export const loose = builder as NamespaceBuilder & Quantitykind;
