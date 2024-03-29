import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Discipline {
    '': NamedNode<'http://qudt.org/vocab/discipline/'>;
    "Acoustics": NamedNode<'http://qudt.org/vocab/discipline/Acoustics'>;
    "Aerodynamics": NamedNode<'http://qudt.org/vocab/discipline/Aerodynamics'>;
    "AeroThermalDynamics": NamedNode<'http://qudt.org/vocab/discipline/AeroThermalDynamics'>;
    "Any": NamedNode<'http://qudt.org/vocab/discipline/Any'>;
    "ArtificalGravity": NamedNode<'http://qudt.org/vocab/discipline/ArtificalGravity'>;
    "Astrionics": NamedNode<'http://qudt.org/vocab/discipline/Astrionics'>;
    "Astrobiology": NamedNode<'http://qudt.org/vocab/discipline/Astrobiology'>;
    "Astrodynamics": NamedNode<'http://qudt.org/vocab/discipline/Astrodynamics'>;
    "AtmosphericChemistry": NamedNode<'http://qudt.org/vocab/discipline/AtmosphericChemistry'>;
    "AtmosphericPhysics": NamedNode<'http://qudt.org/vocab/discipline/AtmosphericPhysics'>;
    "AtmosphericScience": NamedNode<'http://qudt.org/vocab/discipline/AtmosphericScience'>;
    "AtomicPhysics": NamedNode<'http://qudt.org/vocab/discipline/AtomicPhysics'>;
    "AttitudeControl": NamedNode<'http://qudt.org/vocab/discipline/AttitudeControl'>;
    "Autonomy": NamedNode<'http://qudt.org/vocab/discipline/Autonomy'>;
    "Avionics": NamedNode<'http://qudt.org/vocab/discipline/Avionics'>;
    "BioChemistry": NamedNode<'http://qudt.org/vocab/discipline/BioChemistry'>;
    "BioInformatics": NamedNode<'http://qudt.org/vocab/discipline/BioInformatics'>;
    "Biology": NamedNode<'http://qudt.org/vocab/discipline/Biology'>;
    "Biomechanics": NamedNode<'http://qudt.org/vocab/discipline/Biomechanics'>;
    "CelestialMechanics": NamedNode<'http://qudt.org/vocab/discipline/CelestialMechanics'>;
    "CharacteristicNumber": NamedNode<'http://qudt.org/vocab/discipline/CharacteristicNumber'>;
    "ChemicalEngineering": NamedNode<'http://qudt.org/vocab/discipline/ChemicalEngineering'>;
    "ChemicalPropulsion": NamedNode<'http://qudt.org/vocab/discipline/ChemicalPropulsion'>;
    "Chemistry": NamedNode<'http://qudt.org/vocab/discipline/Chemistry'>;
    "ClassicalMechanics": NamedNode<'http://qudt.org/vocab/discipline/ClassicalMechanics'>;
    "Climatology": NamedNode<'http://qudt.org/vocab/discipline/Climatology'>;
    "Commerce": NamedNode<'http://qudt.org/vocab/discipline/Commerce'>;
    "Communications": NamedNode<'http://qudt.org/vocab/discipline/Communications'>;
    "ComputerScience": NamedNode<'http://qudt.org/vocab/discipline/ComputerScience'>;
    "ConfigurationManagement": NamedNode<'http://qudt.org/vocab/discipline/ConfigurationManagement'>;
    "ContinuumMechanics": NamedNode<'http://qudt.org/vocab/discipline/ContinuumMechanics'>;
    "ControlEngineering": NamedNode<'http://qudt.org/vocab/discipline/ControlEngineering'>;
    "CostEstimation": NamedNode<'http://qudt.org/vocab/discipline/CostEstimation'>;
    "Cryogenics": NamedNode<'http://qudt.org/vocab/discipline/Cryogenics'>;
    "Currency": NamedNode<'http://qudt.org/vocab/discipline/Currency'>;
    "Dimensionless": NamedNode<'http://qudt.org/vocab/discipline/Dimensionless'>;
    "Dynamics": NamedNode<'http://qudt.org/vocab/discipline/Dynamics'>;
    "Economics": NamedNode<'http://qudt.org/vocab/discipline/Economics'>;
    "ElectricalEngineering": NamedNode<'http://qudt.org/vocab/discipline/ElectricalEngineering'>;
    "ElectricityAndMagnetism": NamedNode<'http://qudt.org/vocab/discipline/ElectricityAndMagnetism'>;
    "ElectronicEngineering": NamedNode<'http://qudt.org/vocab/discipline/ElectronicEngineering'>;
    "Energy": NamedNode<'http://qudt.org/vocab/discipline/Energy'>;
    "Engineering": NamedNode<'http://qudt.org/vocab/discipline/Engineering'>;
    "EnvironmentControl": NamedNode<'http://qudt.org/vocab/discipline/EnvironmentControl'>;
    "Finance": NamedNode<'http://qudt.org/vocab/discipline/Finance'>;
    "FluidDynamics": NamedNode<'http://qudt.org/vocab/discipline/FluidDynamics'>;
    "FluidMechanics": NamedNode<'http://qudt.org/vocab/discipline/FluidMechanics'>;
    "GuidanceAndNavigation": NamedNode<'http://qudt.org/vocab/discipline/GuidanceAndNavigation'>;
    "HumanFactors": NamedNode<'http://qudt.org/vocab/discipline/HumanFactors'>;
    "Hydraulics": NamedNode<'http://qudt.org/vocab/discipline/Hydraulics'>;
    "HydraulicsEngineering": NamedNode<'http://qudt.org/vocab/discipline/HydraulicsEngineering'>;
    "Hydrodynamics": NamedNode<'http://qudt.org/vocab/discipline/Hydrodynamics'>;
    "HypersonicAerodynamics": NamedNode<'http://qudt.org/vocab/discipline/HypersonicAerodynamics'>;
    "Informatics": NamedNode<'http://qudt.org/vocab/discipline/Informatics'>;
    "InformationEngineering": NamedNode<'http://qudt.org/vocab/discipline/InformationEngineering'>;
    "InformationTheory": NamedNode<'http://qudt.org/vocab/discipline/InformationTheory'>;
    "IntegratedSystemHealthMonitoriing": NamedNode<'http://qudt.org/vocab/discipline/IntegratedSystemHealthMonitoriing'>;
    "IntegratedSystemHealthMonitoring": NamedNode<'http://qudt.org/vocab/discipline/IntegratedSystemHealthMonitoring'>;
    "IntegratedVehicleHealthManagement": NamedNode<'http://qudt.org/vocab/discipline/IntegratedVehicleHealthManagement'>;
    "Kinematics": NamedNode<'http://qudt.org/vocab/discipline/Kinematics'>;
    "KnowledgeEngineering": NamedNode<'http://qudt.org/vocab/discipline/KnowledgeEngineering'>;
    "LifeSciences": NamedNode<'http://qudt.org/vocab/discipline/LifeSciences'>;
    "Light": NamedNode<'http://qudt.org/vocab/discipline/Light'>;
    "Loads": NamedNode<'http://qudt.org/vocab/discipline/Loads'>;
    "LoadsAnalysis": NamedNode<'http://qudt.org/vocab/discipline/LoadsAnalysis'>;
    "LoadsAndMassProperties": NamedNode<'http://qudt.org/vocab/discipline/LoadsAndMassProperties'>;
    "Logistics": NamedNode<'http://qudt.org/vocab/discipline/Logistics'>;
    "Macroeconomics": NamedNode<'http://qudt.org/vocab/discipline/Macroeconomics'>;
    "Management": NamedNode<'http://qudt.org/vocab/discipline/Management'>;
    "Mass": NamedNode<'http://qudt.org/vocab/discipline/Mass'>;
    "MassProperties": NamedNode<'http://qudt.org/vocab/discipline/MassProperties'>;
    "MassProperty": NamedNode<'http://qudt.org/vocab/discipline/MassProperty'>;
    "Materials": NamedNode<'http://qudt.org/vocab/discipline/Materials'>;
    "MaterialsAndStructures": NamedNode<'http://qudt.org/vocab/discipline/MaterialsAndStructures'>;
    "MaterialsScience": NamedNode<'http://qudt.org/vocab/discipline/MaterialsScience'>;
    "MechanicalEngineering": NamedNode<'http://qudt.org/vocab/discipline/MechanicalEngineering'>;
    "Mechanics": NamedNode<'http://qudt.org/vocab/discipline/Mechanics'>;
    "Mechanisms": NamedNode<'http://qudt.org/vocab/discipline/Mechanisms'>;
    "MedicalInformatics": NamedNode<'http://qudt.org/vocab/discipline/MedicalInformatics'>;
    "Medicine": NamedNode<'http://qudt.org/vocab/discipline/Medicine'>;
    "Meteorology": NamedNode<'http://qudt.org/vocab/discipline/Meteorology'>;
    "MissionPlanning": NamedNode<'http://qudt.org/vocab/discipline/MissionPlanning'>;
    "ModelingAndSimulation": NamedNode<'http://qudt.org/vocab/discipline/ModelingAndSimulation'>;
    "NuclearPhysics": NamedNode<'http://qudt.org/vocab/discipline/NuclearPhysics'>;
    "NuclearPower": NamedNode<'http://qudt.org/vocab/discipline/NuclearPower'>;
    "NuclearPropulsion": NamedNode<'http://qudt.org/vocab/discipline/NuclearPropulsion'>;
    "Nutrition": NamedNode<'http://qudt.org/vocab/discipline/Nutrition'>;
    "Optics": NamedNode<'http://qudt.org/vocab/discipline/Optics'>;
    "OrbitalMechanics": NamedNode<'http://qudt.org/vocab/discipline/OrbitalMechanics'>;
    "ParticlePhysics": NamedNode<'http://qudt.org/vocab/discipline/ParticlePhysics'>;
    "Photometry": NamedNode<'http://qudt.org/vocab/discipline/Photometry'>;
    "PhysicalConstant": NamedNode<'http://qudt.org/vocab/discipline/PhysicalConstant'>;
    "PhysicalScience": NamedNode<'http://qudt.org/vocab/discipline/PhysicalScience'>;
    "Physics": NamedNode<'http://qudt.org/vocab/discipline/Physics'>;
    "PlasmaDynamics": NamedNode<'http://qudt.org/vocab/discipline/PlasmaDynamics'>;
    "PlasmaPhysics": NamedNode<'http://qudt.org/vocab/discipline/PlasmaPhysics'>;
    "PressurizedSystems": NamedNode<'http://qudt.org/vocab/discipline/PressurizedSystems'>;
    "Propulsion": NamedNode<'http://qudt.org/vocab/discipline/Propulsion'>;
    "PropulsionSystemsDesign": NamedNode<'http://qudt.org/vocab/discipline/PropulsionSystemsDesign'>;
    "QuantityValue": NamedNode<'http://qudt.org/vocab/discipline/QuantityValue'>;
    "QuantumMechanics": NamedNode<'http://qudt.org/vocab/discipline/QuantumMechanics'>;
    "Radiation": NamedNode<'http://qudt.org/vocab/discipline/Radiation'>;
    "Radiology": NamedNode<'http://qudt.org/vocab/discipline/Radiology'>;
    "Radiometry": NamedNode<'http://qudt.org/vocab/discipline/Radiometry'>;
    "RequirementsEngineering": NamedNode<'http://qudt.org/vocab/discipline/RequirementsEngineering'>;
    "RiskManagement": NamedNode<'http://qudt.org/vocab/discipline/RiskManagement'>;
    "Science": NamedNode<'http://qudt.org/vocab/discipline/Science'>;
    "SocialScience": NamedNode<'http://qudt.org/vocab/discipline/SocialScience'>;
    "SoftwareEngineering": NamedNode<'http://qudt.org/vocab/discipline/SoftwareEngineering'>;
    "SolidStatePhysics": NamedNode<'http://qudt.org/vocab/discipline/SolidStatePhysics'>;
    "SpaceAndTime": NamedNode<'http://qudt.org/vocab/discipline/SpaceAndTime'>;
    "SpaceSystemEngineering": NamedNode<'http://qudt.org/vocab/discipline/SpaceSystemEngineering'>;
    "Spectroscopy": NamedNode<'http://qudt.org/vocab/discipline/Spectroscopy'>;
    "StatisticalMechanics": NamedNode<'http://qudt.org/vocab/discipline/StatisticalMechanics'>;
    "Structures": NamedNode<'http://qudt.org/vocab/discipline/Structures'>;
    "StructuresAndMechanics": NamedNode<'http://qudt.org/vocab/discipline/StructuresAndMechanics'>;
    "SystemDesign": NamedNode<'http://qudt.org/vocab/discipline/SystemDesign'>;
    "SystemEngineering": NamedNode<'http://qudt.org/vocab/discipline/SystemEngineering'>;
    "SystemIntegration": NamedNode<'http://qudt.org/vocab/discipline/SystemIntegration'>;
    "Systems": NamedNode<'http://qudt.org/vocab/discipline/Systems'>;
    "SystemTesting": NamedNode<'http://qudt.org/vocab/discipline/SystemTesting'>;
    "Telebiometrics": NamedNode<'http://qudt.org/vocab/discipline/Telebiometrics'>;
    "Telemetry": NamedNode<'http://qudt.org/vocab/discipline/Telemetry'>;
    "ThermalControl": NamedNode<'http://qudt.org/vocab/discipline/ThermalControl'>;
    "ThermalEngineering": NamedNode<'http://qudt.org/vocab/discipline/ThermalEngineering'>;
    "ThermalProtection": NamedNode<'http://qudt.org/vocab/discipline/ThermalProtection'>;
    "Thermodynamics": NamedNode<'http://qudt.org/vocab/discipline/Thermodynamics'>;
    "TradeStudies": NamedNode<'http://qudt.org/vocab/discipline/TradeStudies'>;
    "Trajectory": NamedNode<'http://qudt.org/vocab/discipline/Trajectory'>;
    "TrajectoryAnalysis": NamedNode<'http://qudt.org/vocab/discipline/TrajectoryAnalysis'>;
    "TrajectoryAnalysisAndDesign": NamedNode<'http://qudt.org/vocab/discipline/TrajectoryAnalysisAndDesign'>;
    "TrajectoryDesign": NamedNode<'http://qudt.org/vocab/discipline/TrajectoryDesign'>;
    "VehicleSystemsDesign": NamedNode<'http://qudt.org/vocab/discipline/VehicleSystemsDesign'>;
    "Vibration": NamedNode<'http://qudt.org/vocab/discipline/Vibration'>;
    "VibrationAnalysis": NamedNode<'http://qudt.org/vocab/discipline/VibrationAnalysis'>;
}

const builder = namespace("http://qudt.org/vocab/discipline/") as any;
export const strict = builder as NamespaceBuilder<keyof Discipline> & Discipline;
export const loose = builder as NamespaceBuilder & Discipline;
