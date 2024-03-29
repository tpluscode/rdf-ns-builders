import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Qudt {
    '': NamedNode<'http://qudt.org/schema/qudt/'>;
    "abbreviation": NamedNode<'http://qudt.org/schema/qudt/abbreviation'>;
    "AbstractDatatype": NamedNode<'http://qudt.org/schema/qudt/AbstractDatatype'>;
    "AbstractQuantityKind": NamedNode<'http://qudt.org/schema/qudt/AbstractQuantityKind'>;
    "accuracy": NamedNode<'http://qudt.org/schema/qudt/accuracy'>;
    "acronym": NamedNode<'http://qudt.org/schema/qudt/acronym'>;
    "AerospaceCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/AerospaceCoordinateSystem'>;
    /**
     * <p>An "Algebraic Datatype" is a datatype each of whose values are data from other data types wrapped in one of the constructors of the data type. Any wrapped datum is an argument to the constructor. In contrast to other data types, the constructor is not executed and the only way to operate on the data is to unwrap the constructor using pattern matching.</p>
     *
     * <p>The most common algebraic data type is a list with two constructors: Nil or [] for an empty list, and Cons (an abbreviation of constructor), ::, or : for the combination of a new element with a shorter list (for example (Cons 1 '(2 3 4)) or 1:[2,3,4]).</p>
     *
     * <p>Special cases of algebraic types are product types i.e. records (only one constructor) and enumerated types (many constructors with no arguments). Algebraic types are one kind of composite type (i.e. a type formed by combining other types).</p>
     *
     * <p>An algebraic data type may also be an abstract data type (ADT) if it is exported from a module without its constructors. Values of such a type can only be manipulated using functions defined in the same module as the type itself.</p>
     */
    "AlgebraicDatatype": NamedNode<'http://qudt.org/schema/qudt/AlgebraicDatatype'>;
    "alignment": NamedNode<'http://qudt.org/schema/qudt/alignment'>;
    "AlignmentType": NamedNode<'http://qudt.org/schema/qudt/AlignmentType'>;
    "allowedPattern": NamedNode<'http://qudt.org/schema/qudt/allowedPattern'>;
    "allowedUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/allowedUnitOfSystem'>;
    "AngleUnit": NamedNode<'http://qudt.org/schema/qudt/AngleUnit'>;
    "ansiSQLName": NamedNode<'http://qudt.org/schema/qudt/ansiSQLName'>;
    "applicableCGSUnit": NamedNode<'http://qudt.org/schema/qudt/applicableCGSUnit'>;
    "applicableImperialUnit": NamedNode<'http://qudt.org/schema/qudt/applicableImperialUnit'>;
    "applicableISOUnit": NamedNode<'http://qudt.org/schema/qudt/applicableISOUnit'>;
    "applicablePhysicalConstant": NamedNode<'http://qudt.org/schema/qudt/applicablePhysicalConstant'>;
    "applicablePlanckUnit": NamedNode<'http://qudt.org/schema/qudt/applicablePlanckUnit'>;
    "applicableSIUnit": NamedNode<'http://qudt.org/schema/qudt/applicableSIUnit'>;
    "applicableUnit": NamedNode<'http://qudt.org/schema/qudt/applicableUnit'>;
    "applicableUSCustomaryUnit": NamedNode<'http://qudt.org/schema/qudt/applicableUSCustomaryUnit'>;
    "arg1Type": NamedNode<'http://qudt.org/schema/qudt/arg1Type'>;
    "arg2Type": NamedNode<'http://qudt.org/schema/qudt/arg2Type'>;
    "arg3Type": NamedNode<'http://qudt.org/schema/qudt/arg3Type'>;
    "argType": NamedNode<'http://qudt.org/schema/qudt/argType'>;
    "Array": NamedNode<'http://qudt.org/schema/qudt/Array'>;
    "ArrayDataOrderType": NamedNode<'http://qudt.org/schema/qudt/ArrayDataOrderType'>;
    "ArrayIndex-elementType": NamedNode<'http://qudt.org/schema/qudt/ArrayIndex-elementType'>;
    "ArrayIndex": NamedNode<'http://qudt.org/schema/qudt/ArrayIndex'>;
    "ArrayIndexType": NamedNode<'http://qudt.org/schema/qudt/ArrayIndexType'>;
    "ArrayType-byRow": NamedNode<'http://qudt.org/schema/qudt/ArrayType-byRow'>;
    "ArrayType-dataOrder": NamedNode<'http://qudt.org/schema/qudt/ArrayType-dataOrder'>;
    "ArrayType-dimensionality": NamedNode<'http://qudt.org/schema/qudt/ArrayType-dimensionality'>;
    "ArrayType-dimensionVector": NamedNode<'http://qudt.org/schema/qudt/ArrayType-dimensionVector'>;
    "ArrayType-typeMatrix": NamedNode<'http://qudt.org/schema/qudt/ArrayType-typeMatrix'>;
    /**
     * <p>An <em>array type</em> is a type specification for ordered entries of values arranged according to the dimensions given. The dimensions are given as a list of integers where each integer is the cardinality of each dimension. The number of dimensions is specified in the attribute 'dimensionality'.</p>
     *
     * <p>Optionally a reference can be made to a variable, whose values are the array entries. The data type of the array entries is an optional field, 'elementType', which points to a data type definition. If the data type is given, then it applies to all elements.  If it is not given then the elements can be of different types for each position in the array.</p>
     *
     * <p>The property <em>qudt:typeMatrix</em> must refer to a matrix of types.  If a default value is given this can be used to place the appropriate value in a cell when an entry value is not known. If no dimensionality or dimension vector is specified the array is under-specified but still legitimate as a place-holder for a data type.</p>
     */
    "ArrayType": NamedNode<'http://qudt.org/schema/qudt/ArrayType'>;
    "Article": NamedNode<'http://qudt.org/schema/qudt/Article'>;
    /** An aspect is an abstract type class that defines properties that can be reused. */
    "Aspect": NamedNode<'http://qudt.org/schema/qudt/Aspect'>;
    "AspectClass": NamedNode<'http://qudt.org/schema/qudt/AspectClass'>;
    "AssociativeArray": NamedNode<'http://qudt.org/schema/qudt/AssociativeArray'>;
    "AssociativeArrayType": NamedNode<'http://qudt.org/schema/qudt/AssociativeArrayType'>;
    "AuralCue-sound": NamedNode<'http://qudt.org/schema/qudt/AuralCue-sound'>;
    "auralCue": NamedNode<'http://qudt.org/schema/qudt/auralCue'>;
    /** An aural cue is a sound produced by a device or a system that is used to alert personnel of of an advisory, cautionary, warning, or emergency state. */
    "AuralCue": NamedNode<'http://qudt.org/schema/qudt/AuralCue'>;
    "AuralCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/AuralCueEnumeration-defaultValue'>;
    "auralCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/auralCueEnumeration'>;
    "AxialOrientationType": NamedNode<'http://qudt.org/schema/qudt/AxialOrientationType'>;
    "BalancedTree-maxDepth": NamedNode<'http://qudt.org/schema/qudt/BalancedTree-maxDepth'>;
    "BalancedTree": NamedNode<'http://qudt.org/schema/qudt/BalancedTree'>;
    "BalancedTreeType": NamedNode<'http://qudt.org/schema/qudt/BalancedTreeType'>;
    "base": NamedNode<'http://qudt.org/schema/qudt/base'>;
    "baseCGSUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseCGSUnitDimensions'>;
    "baseDimensionEnumeration": NamedNode<'http://qudt.org/schema/qudt/baseDimensionEnumeration'>;
    /**
     * <p class="lm-para">A <em>Dimension</em> expresses a magnitude for a base quantiy kind such as mass, length and time.</p>
     * <p class="lm-para">DEPRECATED - each exponent is expressed as a property. Keep until a validaiton of this has been done.</p>
     */
    "BaseDimensionMagnitude": NamedNode<'http://qudt.org/schema/qudt/BaseDimensionMagnitude'>;
    "baseImperialUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseImperialUnitDimensions'>;
    "baseISOUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseISOUnitDimensions'>;
    "baseSIUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseSIUnitDimensions'>;
    "baseUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/baseUnitOfSystem'>;
    "baseUSCustomaryUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseUSCustomaryUnitDimensions'>;
    "basis": NamedNode<'http://qudt.org/schema/qudt/basis'>;
    "belongsToSystemOfQuantities": NamedNode<'http://qudt.org/schema/qudt/belongsToSystemOfQuantities'>;
    "BigEndian": NamedNode<'http://qudt.org/schema/qudt/BigEndian'>;
    "BigIntegerType-octets": NamedNode<'http://qudt.org/schema/qudt/BigIntegerType-octets'>;
    "BigIntegerType": NamedNode<'http://qudt.org/schema/qudt/BigIntegerType'>;
    /** A <em>Binary Prefix</em> is a prefix for multiples of units in data processing, data transmission, and digital information, notably the bit and the byte, to indicate multiplication by a power of 2. */
    "BinaryPrefix": NamedNode<'http://qudt.org/schema/qudt/BinaryPrefix'>;
    "BinaryTree": NamedNode<'http://qudt.org/schema/qudt/BinaryTree'>;
    "BinaryTreeType": NamedNode<'http://qudt.org/schema/qudt/BinaryTreeType'>;
    "BitAligned": NamedNode<'http://qudt.org/schema/qudt/BitAligned'>;
    "BitEncoding": NamedNode<'http://qudt.org/schema/qudt/BitEncoding'>;
    "BitEncodingType": NamedNode<'http://qudt.org/schema/qudt/BitEncodingType'>;
    "BitField": NamedNode<'http://qudt.org/schema/qudt/BitField'>;
    "BitField01": NamedNode<'http://qudt.org/schema/qudt/BitField01'>;
    "BitField02": NamedNode<'http://qudt.org/schema/qudt/BitField02'>;
    "BitField03": NamedNode<'http://qudt.org/schema/qudt/BitField03'>;
    "BitField04": NamedNode<'http://qudt.org/schema/qudt/BitField04'>;
    "BitField05": NamedNode<'http://qudt.org/schema/qudt/BitField05'>;
    "BitField06": NamedNode<'http://qudt.org/schema/qudt/BitField06'>;
    "BitField07": NamedNode<'http://qudt.org/schema/qudt/BitField07'>;
    "BitField08": NamedNode<'http://qudt.org/schema/qudt/BitField08'>;
    "BitField09": NamedNode<'http://qudt.org/schema/qudt/BitField09'>;
    "BitField10": NamedNode<'http://qudt.org/schema/qudt/BitField10'>;
    "BitField11": NamedNode<'http://qudt.org/schema/qudt/BitField11'>;
    "BitField12": NamedNode<'http://qudt.org/schema/qudt/BitField12'>;
    "BitFieldType-encodedValue": NamedNode<'http://qudt.org/schema/qudt/BitFieldType-encodedValue'>;
    "BitFieldType": NamedNode<'http://qudt.org/schema/qudt/BitFieldType'>;
    "bitOrder": NamedNode<'http://qudt.org/schema/qudt/bitOrder'>;
    "bits": NamedNode<'http://qudt.org/schema/qudt/bits'>;
    "Book": NamedNode<'http://qudt.org/schema/qudt/Book'>;
    "Booklet": NamedNode<'http://qudt.org/schema/qudt/Booklet'>;
    "BOOLEAN": NamedNode<'http://qudt.org/schema/qudt/BOOLEAN'>;
    "BooleanEncoding": NamedNode<'http://qudt.org/schema/qudt/BooleanEncoding'>;
    "BooleanEncodingType": NamedNode<'http://qudt.org/schema/qudt/BooleanEncodingType'>;
    "BooleanStateType": NamedNode<'http://qudt.org/schema/qudt/BooleanStateType'>;
    "BooleanType-encoding": NamedNode<'http://qudt.org/schema/qudt/BooleanType-encoding'>;
    "BooleanType": NamedNode<'http://qudt.org/schema/qudt/BooleanType'>;
    "BooleanTypeEnumeratedValue": NamedNode<'http://qudt.org/schema/qudt/BooleanTypeEnumeratedValue'>;
    "bounded": NamedNode<'http://qudt.org/schema/qudt/bounded'>;
    "ByColumn": NamedNode<'http://qudt.org/schema/qudt/ByColumn'>;
    "ByLeftMostIndex": NamedNode<'http://qudt.org/schema/qudt/ByLeftMostIndex'>;
    "byRow": NamedNode<'http://qudt.org/schema/qudt/byRow'>;
    "ByRow": NamedNode<'http://qudt.org/schema/qudt/ByRow'>;
    "BYTE": NamedNode<'http://qudt.org/schema/qudt/BYTE'>;
    "ByteAligned": NamedNode<'http://qudt.org/schema/qudt/ByteAligned'>;
    "ByteEncodingType": NamedNode<'http://qudt.org/schema/qudt/ByteEncodingType'>;
    "byteOrder": NamedNode<'http://qudt.org/schema/qudt/byteOrder'>;
    "bytes": NamedNode<'http://qudt.org/schema/qudt/bytes'>;
    "cardinality": NamedNode<'http://qudt.org/schema/qudt/cardinality'>;
    "CardinalityType": NamedNode<'http://qudt.org/schema/qudt/CardinalityType'>;
    "CartesianCoordinates": NamedNode<'http://qudt.org/schema/qudt/CartesianCoordinates'>;
    "CartesianCoordinatesType": NamedNode<'http://qudt.org/schema/qudt/CartesianCoordinatesType'>;
    "categorizedAs": NamedNode<'http://qudt.org/schema/qudt/categorizedAs'>;
    "CCT_EarthCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_EarthCentered'>;
    "CCT_MarsCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_MarsCentered'>;
    "CCT_MoonCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_MoonCentered'>;
    "CCT_SunCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_SunCentered'>;
    "CCT_VehicleCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_VehicleCentered'>;
    "CFN_ConcatenateMatrixRows": NamedNode<'http://qudt.org/schema/qudt/CFN_ConcatenateMatrixRows'>;
    "CharacterType": NamedNode<'http://qudt.org/schema/qudt/CharacterType'>;
    "CharEncoding": NamedNode<'http://qudt.org/schema/qudt/CharEncoding'>;
    "CharEncodingType": NamedNode<'http://qudt.org/schema/qudt/CharEncodingType'>;
    "citation": NamedNode<'http://qudt.org/schema/qudt/citation'>;
    /** Provides a simple way of making citations. */
    "Citation": NamedNode<'http://qudt.org/schema/qudt/Citation'>;
    /** Datatype name in the C programming language */
    "cName": NamedNode<'http://qudt.org/schema/qudt/cName'>;
    "code": NamedNode<'http://qudt.org/schema/qudt/code'>;
    "coherentUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/coherentUnitOfSystem'>;
    "coherentUnitSystem": NamedNode<'http://qudt.org/schema/qudt/coherentUnitSystem'>;
    "Collection": NamedNode<'http://qudt.org/schema/qudt/Collection'>;
    "CollectionType": NamedNode<'http://qudt.org/schema/qudt/CollectionType'>;
    "COLOR_AMBER": NamedNode<'http://qudt.org/schema/qudt/COLOR_AMBER'>;
    "COLOR_GREEN": NamedNode<'http://qudt.org/schema/qudt/COLOR_GREEN'>;
    "COLOR_ORANGE": NamedNode<'http://qudt.org/schema/qudt/COLOR_ORANGE'>;
    "COLOR_RED": NamedNode<'http://qudt.org/schema/qudt/COLOR_RED'>;
    "COLOR_YELLOW": NamedNode<'http://qudt.org/schema/qudt/COLOR_YELLOW'>;
    "ColorCue-rgbCode": NamedNode<'http://qudt.org/schema/qudt/ColorCue-rgbCode'>;
    /** A visual cue that uses color to distinguish it from other cues. Each color cue has exactly one corresponding coordinate point in the RGB space. */
    "ColorCue": NamedNode<'http://qudt.org/schema/qudt/ColorCue'>;
    "columns": NamedNode<'http://qudt.org/schema/qudt/columns'>;
    "Comment": NamedNode<'http://qudt.org/schema/qudt/Comment'>;
    "CompositeDataStructure-dataElement": NamedNode<'http://qudt.org/schema/qudt/CompositeDataStructure-dataElement'>;
    /** 'Composite Data Structure', also referred to as 'Data Record' is a datatype that aggregates element of possibly different types. The aggregated items are called fields or members and are usually identified or indexed by field labels. */
    "CompositeDataStructure": NamedNode<'http://qudt.org/schema/qudt/CompositeDataStructure'>;
    "CompositeDatatype-alignment": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype-alignment'>;
    "CompositeDatatype-elementType": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype-elementType'>;
    "CompositeDatatype-padding": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype-padding'>;
    "CompositeDatatype": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype'>;
    "CompositeTable": NamedNode<'http://qudt.org/schema/qudt/CompositeTable'>;
    "CompositionFunction": NamedNode<'http://qudt.org/schema/qudt/CompositionFunction'>;
    "CompositionTreeType-compositionFunction": NamedNode<'http://qudt.org/schema/qudt/CompositionTreeType-compositionFunction'>;
    "CompositionTreeType": NamedNode<'http://qudt.org/schema/qudt/CompositionTreeType'>;
    /** The root class for all QUDT concepts. */
    "Concept": NamedNode<'http://qudt.org/schema/qudt/Concept'>;
    "Conference": NamedNode<'http://qudt.org/schema/qudt/Conference'>;
    /** Used to specify the values of a constant. */
    "ConstantValue": NamedNode<'http://qudt.org/schema/qudt/ConstantValue'>;
    "Container-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Container-elementTypeCount'>;
    "Container": NamedNode<'http://qudt.org/schema/qudt/Container'>;
    "conversionCoefficient": NamedNode<'http://qudt.org/schema/qudt/conversionCoefficient'>;
    "conversionMultiplier": NamedNode<'http://qudt.org/schema/qudt/conversionMultiplier'>;
    "conversionOffset": NamedNode<'http://qudt.org/schema/qudt/conversionOffset'>;
    "coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/coordinateCenter'>;
    "CoordinateCenterType": NamedNode<'http://qudt.org/schema/qudt/CoordinateCenterType'>;
    "CoordinateMember": NamedNode<'http://qudt.org/schema/qudt/CoordinateMember'>;
    "Coordinates-2D-DoublePrecision-Double_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-DoublePrecision-Double_X'>;
    "Coordinates-2D-DoublePrecision-Double_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-DoublePrecision-Double_Y'>;
    "Coordinates-2D-DoublePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-DoublePrecision'>;
    "Coordinates-2D-SinglePrecision-float_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-SinglePrecision-float_X'>;
    "Coordinates-2D-SinglePrecision-float_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-SinglePrecision-float_Y'>;
    "Coordinates-2D-SinglePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-SinglePrecision'>;
    "Coordinates-2D-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-Type'>;
    "Coordinates-2D": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D'>;
    "Coordinates-3D-DoublePrecision-Double_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Double_X'>;
    "Coordinates-3D-DoublePrecision-Double_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Double_Y'>;
    "Coordinates-3D-DoublePrecision-Double_Z": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Double_Z'>;
    "Coordinates-3D-DoublePrecision-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Type'>;
    "Coordinates-3D-DoublePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision'>;
    "Coordinates-3D-SinglePrecision-float_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-float_X'>;
    "Coordinates-3D-SinglePrecision-float_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-float_Y'>;
    "Coordinates-3D-SinglePrecision-float_Z": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-float_Z'>;
    "Coordinates-3D-SinglePrecision-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-Type'>;
    "Coordinates-3D-SinglePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision'>;
    "Coordinates-3D-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-Type'>;
    "Coordinates-3D": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D'>;
    "Coordinates-elementType": NamedNode<'http://qudt.org/schema/qudt/Coordinates-elementType'>;
    "Coordinates": NamedNode<'http://qudt.org/schema/qudt/Coordinates'>;
    "CoordinateSystem-abbreviation": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-abbreviation'>;
    "CoordinateSystem-acronym": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-acronym'>;
    "CoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-coordinateCenter'>;
    "CoordinateSystem-referenceFrame": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-referenceFrame'>;
    "coordinateSystem": NamedNode<'http://qudt.org/schema/qudt/coordinateSystem'>;
    "CoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem'>;
    "coordinateSystemFrame": NamedNode<'http://qudt.org/schema/qudt/coordinateSystemFrame'>;
    "CoordinateSystemFrame": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystemFrame'>;
    "CoordinateSystemType-originDefinition": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystemType-originDefinition'>;
    /**
     * <p>A coordinate system is a mathematical structure for assigning a unique n-tuple of numbers or scalars to each point in an n-dimensional space. A Coordinate System Type is a data type that defines the properties of data structures that represent coordinate systems.</p>
     *
     * <p>The primary attributes of any coordinate system are the coordinate frame or orientation of the axes of the coordinate system and the coordinate center or origin of the coordinate system. The coordinate center is the easier of the two attributes to define and in trajectory-related coordinate systems is often taken to be the center of mass of natural solar system bodies such as the Earth, the Moon, or Mars. Precise definition of the coordinate frame, however, usually takes much more effort. As a result, the primary purpose of this section is to provide a detailed description of a number of different coordinate frames commonly used in lunar and Mars mission analysis. </p>
     */
    "CoordinateSystemType": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystemType'>;
    /** Used for all units that express counts. Examples are Atomic Number, Number, Number per Year, Percent and Sample per Second. */
    "CountingUnit": NamedNode<'http://qudt.org/schema/qudt/CountingUnit'>;
    "CRC32": NamedNode<'http://qudt.org/schema/qudt/CRC32'>;
    "CT_COUNTABLY-INFINITE": NamedNode<'http://qudt.org/schema/qudt/CT_COUNTABLY-INFINITE'>;
    "CT_FINITE": NamedNode<'http://qudt.org/schema/qudt/CT_FINITE'>;
    "CT_UNCOUNTABLE": NamedNode<'http://qudt.org/schema/qudt/CT_UNCOUNTABLE'>;
    "currencyCode": NamedNode<'http://qudt.org/schema/qudt/currencyCode'>;
    "currencyExponent": NamedNode<'http://qudt.org/schema/qudt/currencyExponent'>;
    "currencyNumber": NamedNode<'http://qudt.org/schema/qudt/currencyNumber'>;
    /** Currency Units have their own subclass of unit because: (a) they have additonal properites such as 'country' and (b) their URIs do not conform to the same rules as other units. */
    "CurrencyUnit": NamedNode<'http://qudt.org/schema/qudt/CurrencyUnit'>;
    "DataElement-type": NamedNode<'http://qudt.org/schema/qudt/DataElement-type'>;
    "DataElement": NamedNode<'http://qudt.org/schema/qudt/DataElement'>;
    "dataEncoding": NamedNode<'http://qudt.org/schema/qudt/dataEncoding'>;
    /** <p><em>Data Encoding</em> expresses the properties that specify how data is represented at the bit and byte level. These properties are applicable to describing raw data.</p> */
    "DataEncoding": NamedNode<'http://qudt.org/schema/qudt/DataEncoding'>;
    "dataOrder": NamedNode<'http://qudt.org/schema/qudt/dataOrder'>;
    "DataSetElement-elementLabel": NamedNode<'http://qudt.org/schema/qudt/DataSetElement-elementLabel'>;
    "DataSetElement-optional": NamedNode<'http://qudt.org/schema/qudt/DataSetElement-optional'>;
    "DataSetElement-quantityKind": NamedNode<'http://qudt.org/schema/qudt/DataSetElement-quantityKind'>;
    /** A field is a tuple that carries a name, a type and optionally other properties that characterize a member element of a composite data strucuture. */
    "DataSetElement": NamedNode<'http://qudt.org/schema/qudt/DataSetElement'>;
    "dataStructure": NamedNode<'http://qudt.org/schema/qudt/dataStructure'>;
    "Datatype-ansiSQLName": NamedNode<'http://qudt.org/schema/qudt/Datatype-ansiSQLName'>;
    "Datatype-basis": NamedNode<'http://qudt.org/schema/qudt/Datatype-basis'>;
    "Datatype-bounded": NamedNode<'http://qudt.org/schema/qudt/Datatype-bounded'>;
    "Datatype-cardinality": NamedNode<'http://qudt.org/schema/qudt/Datatype-cardinality'>;
    "Datatype-cName": NamedNode<'http://qudt.org/schema/qudt/Datatype-cName'>;
    "Datatype-description": NamedNode<'http://qudt.org/schema/qudt/Datatype-description'>;
    "Datatype-id": NamedNode<'http://qudt.org/schema/qudt/Datatype-id'>;
    "Datatype-javaName": NamedNode<'http://qudt.org/schema/qudt/Datatype-javaName'>;
    "Datatype-jsName": NamedNode<'http://qudt.org/schema/qudt/Datatype-jsName'>;
    "Datatype-matlabName": NamedNode<'http://qudt.org/schema/qudt/Datatype-matlabName'>;
    "Datatype-microsoftSQLServerName": NamedNode<'http://qudt.org/schema/qudt/Datatype-microsoftSQLServerName'>;
    "Datatype-mySQLName": NamedNode<'http://qudt.org/schema/qudt/Datatype-mySQLName'>;
    "Datatype-odbcName": NamedNode<'http://qudt.org/schema/qudt/Datatype-odbcName'>;
    "Datatype-oleDBName": NamedNode<'http://qudt.org/schema/qudt/Datatype-oleDBName'>;
    "Datatype-oracleSQLName": NamedNode<'http://qudt.org/schema/qudt/Datatype-oracleSQLName'>;
    "Datatype-protocolBuffersName": NamedNode<'http://qudt.org/schema/qudt/Datatype-protocolBuffersName'>;
    "Datatype-pythonName": NamedNode<'http://qudt.org/schema/qudt/Datatype-pythonName'>;
    "Datatype-vbName": NamedNode<'http://qudt.org/schema/qudt/Datatype-vbName'>;
    "dataType": NamedNode<'http://qudt.org/schema/qudt/dataType'>;
    "Datatype": NamedNode<'http://qudt.org/schema/qudt/Datatype'>;
    "DatatypeStructuredData": NamedNode<'http://qudt.org/schema/qudt/DatatypeStructuredData'>;
    "DATE": NamedNode<'http://qudt.org/schema/qudt/DATE'>;
    "DateStringType": NamedNode<'http://qudt.org/schema/qudt/DateStringType'>;
    "DATETIME": NamedNode<'http://qudt.org/schema/qudt/DATETIME'>;
    "DateTimeStringEncodingType-allowedPattern": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringEncodingType-allowedPattern'>;
    "DateTimeStringEncodingType": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringEncodingType'>;
    "DateTimeStringType-encoding": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringType-encoding'>;
    "DateTimeStringType": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringType'>;
    "dbpediaMatch": NamedNode<'http://qudt.org/schema/qudt/dbpediaMatch'>;
    "DECIMAL": NamedNode<'http://qudt.org/schema/qudt/DECIMAL'>;
    /** A <em>Decimal Prefix</em> is a prefix for multiples of units that are powers of 10. */
    "DecimalPrefix": NamedNode<'http://qudt.org/schema/qudt/DecimalPrefix'>;
    "DecimalScaledUnit": NamedNode<'http://qudt.org/schema/qudt/DecimalScaledUnit'>;
    "default": NamedNode<'http://qudt.org/schema/qudt/default'>;
    "defaultValue": NamedNode<'http://qudt.org/schema/qudt/defaultValue'>;
    "definedUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/definedUnitOfSystem'>;
    "denominatorDimensionVector": NamedNode<'http://qudt.org/schema/qudt/denominatorDimensionVector'>;
    "DerivedCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/DerivedCoherentUnit'>;
    "derivedCoherentUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedCoherentUnitOfSystem'>;
    "DerivedNonCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/DerivedNonCoherentUnit'>;
    "derivedNonCoherentUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedNonCoherentUnitOfSystem'>;
    "derivedQuantityKindOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedQuantityKindOfSystem'>;
    /** A DerivedUnit is a type specification for units that are derived from other units. */
    "DerivedUnit": NamedNode<'http://qudt.org/schema/qudt/DerivedUnit'>;
    "derivedUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedUnitOfSystem'>;
    "descriptor": NamedNode<'http://qudt.org/schema/qudt/descriptor'>;
    "Dictionary": NamedNode<'http://qudt.org/schema/qudt/Dictionary'>;
    "DictionaryType": NamedNode<'http://qudt.org/schema/qudt/DictionaryType'>;
    "dimension": NamedNode<'http://qudt.org/schema/qudt/dimension'>;
    "DimensionalDatatype": NamedNode<'http://qudt.org/schema/qudt/DimensionalDatatype'>;
    "dimensionality": NamedNode<'http://qudt.org/schema/qudt/dimensionality'>;
    "dimensionExponent": NamedNode<'http://qudt.org/schema/qudt/dimensionExponent'>;
    "dimensionExponentForAmountOfSubstance": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForAmountOfSubstance'>;
    "dimensionExponentForElectricCurrent": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForElectricCurrent'>;
    "dimensionExponentForLength": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForLength'>;
    "dimensionExponentForLuminousIntensity": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForLuminousIntensity'>;
    "dimensionExponentForMass": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForMass'>;
    "dimensionExponentForThermodynamicTemperature": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForThermodynamicTemperature'>;
    "dimensionExponentForTime": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForTime'>;
    "dimensionInverse": NamedNode<'http://qudt.org/schema/qudt/dimensionInverse'>;
    "dimensionlessExponent": NamedNode<'http://qudt.org/schema/qudt/dimensionlessExponent'>;
    /** A Dimensionless Unit is a quantity for which all the exponents of the factors corresponding to the base quantities in its quantity dimension are zero. */
    "DimensionlessUnit": NamedNode<'http://qudt.org/schema/qudt/DimensionlessUnit'>;
    "dimensionVector": NamedNode<'http://qudt.org/schema/qudt/dimensionVector'>;
    "DimensionVector": NamedNode<'http://qudt.org/schema/qudt/DimensionVector'>;
    "dimensionVectorForSI": NamedNode<'http://qudt.org/schema/qudt/dimensionVectorForSI'>;
    "Discipline": NamedNode<'http://qudt.org/schema/qudt/Discipline'>;
    "DiscreteState": NamedNode<'http://qudt.org/schema/qudt/DiscreteState'>;
    "Double_X": NamedNode<'http://qudt.org/schema/qudt/Double_X'>;
    "Double_Y": NamedNode<'http://qudt.org/schema/qudt/Double_Y'>;
    "Double_Z": NamedNode<'http://qudt.org/schema/qudt/Double_Z'>;
    "DoublePrecisionEncoding": NamedNode<'http://qudt.org/schema/qudt/DoublePrecisionEncoding'>;
    "DoublePrecisionType": NamedNode<'http://qudt.org/schema/qudt/DoublePrecisionType'>;
    "duration": NamedNode<'http://qudt.org/schema/qudt/duration'>;
    "DV_2x4": NamedNode<'http://qudt.org/schema/qudt/DV_2x4'>;
    "DV_4x4": NamedNode<'http://qudt.org/schema/qudt/DV_4x4'>;
    "EarthCoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/EarthCoordinateSystem-coordinateCenter'>;
    "EarthCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/EarthCoordinateSystem'>;
    "element": NamedNode<'http://qudt.org/schema/qudt/element'>;
    "elementKind": NamedNode<'http://qudt.org/schema/qudt/elementKind'>;
    "elementLabel": NamedNode<'http://qudt.org/schema/qudt/elementLabel'>;
    "elementName": NamedNode<'http://qudt.org/schema/qudt/elementName'>;
    /** This property is used to relate a structured data type with the data type of the structured type's elements. It is used for homogeneous structured data types, that is, those whose elements that are all of the same type. */
    "elementType": NamedNode<'http://qudt.org/schema/qudt/elementType'>;
    "elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/elementTypeCount'>;
    "elementTypeList": NamedNode<'http://qudt.org/schema/qudt/elementTypeList'>;
    "elementUnit": NamedNode<'http://qudt.org/schema/qudt/elementUnit'>;
    "encodedValue": NamedNode<'http://qudt.org/schema/qudt/encodedValue'>;
    "Encoding-bits": NamedNode<'http://qudt.org/schema/qudt/Encoding-bits'>;
    "Encoding-bytes": NamedNode<'http://qudt.org/schema/qudt/Encoding-bytes'>;
    "encoding": NamedNode<'http://qudt.org/schema/qudt/encoding'>;
    "Encoding": NamedNode<'http://qudt.org/schema/qudt/Encoding'>;
    "encodingDescription": NamedNode<'http://qudt.org/schema/qudt/encodingDescription'>;
    "EndianType": NamedNode<'http://qudt.org/schema/qudt/EndianType'>;
    "EngineeringValueTupleMember-elementType": NamedNode<'http://qudt.org/schema/qudt/EngineeringValueTupleMember-elementType'>;
    "EngineeringValueTupleMember": NamedNode<'http://qudt.org/schema/qudt/EngineeringValueTupleMember'>;
    "EnumeratedQuantity": NamedNode<'http://qudt.org/schema/qudt/EnumeratedQuantity'>;
    "enumeratedValue": NamedNode<'http://qudt.org/schema/qudt/enumeratedValue'>;
    "EnumeratedValue": NamedNode<'http://qudt.org/schema/qudt/EnumeratedValue'>;
    "Enumeration-bits": NamedNode<'http://qudt.org/schema/qudt/Enumeration-bits'>;
    "Enumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/Enumeration-defaultValue'>;
    "Enumeration-encoding": NamedNode<'http://qudt.org/schema/qudt/Enumeration-encoding'>;
    "Enumeration-value": NamedNode<'http://qudt.org/schema/qudt/Enumeration-value'>;
    "enumeration": NamedNode<'http://qudt.org/schema/qudt/enumeration'>;
    /**
     * <p>An enumeration is a set of literals from which a single value is selected. Each literal can have a tag as an integer within a standard encoding appropriate to the range of integer values. Consistency of enumeration types will allow them, and the enumerated values, to be referred to unambiguously either through symbolic name or encoding. Enumerated values are also controlled vocabularies and as such need to be standardized. Without this consistency enumeration literals can be stated differently and result in  data conflicts and misinterpretations.</p>
     *
     * <p>The tags are a set of positive whole numbers, not necessarily contiguous and having no numerical significance, each corresponding to the associated literal identifier. An order attribute can also be given on the enumeration elements. An enumeration can itself be a member of an enumeration. This allows enumerations to be enumerated in a selection. Enumerations are also subclasses of <em>Scalar Datatype</em>. This allows them to be used as the reference of a datatype specification.</p>
     */
    "Enumeration": NamedNode<'http://qudt.org/schema/qudt/Enumeration'>;
    "EnumerationScale": NamedNode<'http://qudt.org/schema/qudt/EnumerationScale'>;
    "exactConstant": NamedNode<'http://qudt.org/schema/qudt/exactConstant'>;
    "exactMatch": NamedNode<'http://qudt.org/schema/qudt/exactMatch'>;
    /** The 'qudt:example' property is used to annotate an instance of a class with a reference to a concept that is an example. The type of this property is 'rdf:Property'. This allows both scalar and object ranges. */
    "example": NamedNode<'http://qudt.org/schema/qudt/example'>;
    "exponent": NamedNode<'http://qudt.org/schema/qudt/exponent'>;
    "expression": NamedNode<'http://qudt.org/schema/qudt/expression'>;
    "FALSE": NamedNode<'http://qudt.org/schema/qudt/FALSE'>;
    "field": NamedNode<'http://qudt.org/schema/qudt/field'>;
    "fieldCode": NamedNode<'http://qudt.org/schema/qudt/fieldCode'>;
    "fieldLabel": NamedNode<'http://qudt.org/schema/qudt/fieldLabel'>;
    "fieldLabels": NamedNode<'http://qudt.org/schema/qudt/fieldLabels'>;
    "fieldName": NamedNode<'http://qudt.org/schema/qudt/fieldName'>;
    "FieldType-elementName": NamedNode<'http://qudt.org/schema/qudt/FieldType-elementName'>;
    "FieldType-elementType": NamedNode<'http://qudt.org/schema/qudt/FieldType-elementType'>;
    "FieldType-fieldLabel": NamedNode<'http://qudt.org/schema/qudt/FieldType-fieldLabel'>;
    "FieldType-fieldType": NamedNode<'http://qudt.org/schema/qudt/FieldType-fieldType'>;
    "FieldType-optional": NamedNode<'http://qudt.org/schema/qudt/FieldType-optional'>;
    "fieldType": NamedNode<'http://qudt.org/schema/qudt/fieldType'>;
    "FieldType": NamedNode<'http://qudt.org/schema/qudt/FieldType'>;
    "figure": NamedNode<'http://qudt.org/schema/qudt/figure'>;
    "Figure": NamedNode<'http://qudt.org/schema/qudt/Figure'>;
    "figureCaption": NamedNode<'http://qudt.org/schema/qudt/figureCaption'>;
    "figureLabel": NamedNode<'http://qudt.org/schema/qudt/figureLabel'>;
    "FileFormat": NamedNode<'http://qudt.org/schema/qudt/FileFormat'>;
    "FixedIntervalTimeSeriesArray": NamedNode<'http://qudt.org/schema/qudt/FixedIntervalTimeSeriesArray'>;
    "FixedIntervalTimeSeriesArrayType": NamedNode<'http://qudt.org/schema/qudt/FixedIntervalTimeSeriesArrayType'>;
    "FLAG": NamedNode<'http://qudt.org/schema/qudt/FLAG'>;
    "float_X": NamedNode<'http://qudt.org/schema/qudt/float_X'>;
    "float_Y": NamedNode<'http://qudt.org/schema/qudt/float_Y'>;
    "float_Z": NamedNode<'http://qudt.org/schema/qudt/float_Z'>;
    "FLOAT-DP": NamedNode<'http://qudt.org/schema/qudt/FLOAT-DP'>;
    "FloatingPointEncodingType": NamedNode<'http://qudt.org/schema/qudt/FloatingPointEncodingType'>;
    "floatPercentage": NamedNode<'http://qudt.org/schema/qudt/floatPercentage'>;
    "frameType": NamedNode<'http://qudt.org/schema/qudt/frameType'>;
    "FrameType": NamedNode<'http://qudt.org/schema/qudt/FrameType'>;
    "FT_INERTIAL": NamedNode<'http://qudt.org/schema/qudt/FT_INERTIAL'>;
    "FT_NON-ROTATING": NamedNode<'http://qudt.org/schema/qudt/FT_NON-ROTATING'>;
    "FT_ROTATING": NamedNode<'http://qudt.org/schema/qudt/FT_ROTATING'>;
    "function": NamedNode<'http://qudt.org/schema/qudt/function'>;
    "Function": NamedNode<'http://qudt.org/schema/qudt/Function'>;
    "functionArity": NamedNode<'http://qudt.org/schema/qudt/functionArity'>;
    "FunctionDatatype-argType": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype-argType'>;
    "FunctionDatatype-functionArity": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype-functionArity'>;
    "FunctionDatatype-returnType": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype-returnType'>;
    "FunctionDatatype": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype'>;
    "generalization": NamedNode<'http://qudt.org/schema/qudt/generalization'>;
    "Graph": NamedNode<'http://qudt.org/schema/qudt/Graph'>;
    "GraphType": NamedNode<'http://qudt.org/schema/qudt/GraphType'>;
    "GreekCharacter": NamedNode<'http://qudt.org/schema/qudt/GreekCharacter'>;
    "GroundCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/GroundCoordinateSystem'>;
    "guidance": NamedNode<'http://qudt.org/schema/qudt/guidance'>;
    "hasAllowedUnit": NamedNode<'http://qudt.org/schema/qudt/hasAllowedUnit'>;
    "hasBaseQuantityKind": NamedNode<'http://qudt.org/schema/qudt/hasBaseQuantityKind'>;
    "hasBaseUnit": NamedNode<'http://qudt.org/schema/qudt/hasBaseUnit'>;
    "hasCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasCoherentUnit'>;
    "hasDefinedUnit": NamedNode<'http://qudt.org/schema/qudt/hasDefinedUnit'>;
    "hasDenominatorPart": NamedNode<'http://qudt.org/schema/qudt/hasDenominatorPart'>;
    "hasDerivedCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasDerivedCoherentUnit'>;
    "hasDerivedNonCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasDerivedNonCoherentUnit'>;
    "hasDerivedUnit": NamedNode<'http://qudt.org/schema/qudt/hasDerivedUnit'>;
    "hasDimension": NamedNode<'http://qudt.org/schema/qudt/hasDimension'>;
    "hasDimensionExpression": NamedNode<'http://qudt.org/schema/qudt/hasDimensionExpression'>;
    "hasDimensionVector": NamedNode<'http://qudt.org/schema/qudt/hasDimensionVector'>;
    "HashTable": NamedNode<'http://qudt.org/schema/qudt/HashTable'>;
    "HashTableType": NamedNode<'http://qudt.org/schema/qudt/HashTableType'>;
    "hasNonCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasNonCoherentUnit'>;
    "hasNumeratorPart": NamedNode<'http://qudt.org/schema/qudt/hasNumeratorPart'>;
    "hasPrefixUnit": NamedNode<'http://qudt.org/schema/qudt/hasPrefixUnit'>;
    "hasQuantity": NamedNode<'http://qudt.org/schema/qudt/hasQuantity'>;
    "hasQuantityKind": NamedNode<'http://qudt.org/schema/qudt/hasQuantityKind'>;
    "hasReferenceQuantityKind": NamedNode<'http://qudt.org/schema/qudt/hasReferenceQuantityKind'>;
    "hasRule": NamedNode<'http://qudt.org/schema/qudt/hasRule'>;
    "hasUnit": NamedNode<'http://qudt.org/schema/qudt/hasUnit'>;
    "hasUnitSystem": NamedNode<'http://qudt.org/schema/qudt/hasUnitSystem'>;
    "hasVocabulary": NamedNode<'http://qudt.org/schema/qudt/hasVocabulary'>;
    "Heap": NamedNode<'http://qudt.org/schema/qudt/Heap'>;
    "HEAP": NamedNode<'http://qudt.org/schema/qudt/HEAP'>;
    /** A heap is a specialized tree-based data structure that satisfies the condition: if B is a child node of A, then <em>key(A) &gt; key(B)</em>. This implies that an element with the greatest key is always in the root node, and so such a heap is sometimes called a max heap. Alternatively, if the comparison is reversed, the smallest element is always in the root node, which results in a min heap. The function or method that implements the key() operator is specified by the heap type. */
    "HeapType": NamedNode<'http://qudt.org/schema/qudt/HeapType'>;
    "height": NamedNode<'http://qudt.org/schema/qudt/height'>;
    "hexbinary": NamedNode<'http://qudt.org/schema/qudt/hexbinary'>;
    "HEXBINARY": NamedNode<'http://qudt.org/schema/qudt/HEXBINARY'>;
    "HexBinaryType-length": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-length'>;
    "HexBinaryType-maxLength": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-maxLength'>;
    "HexBinaryType-minLength": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-minLength'>;
    "HexBinaryType-pattern": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-pattern'>;
    "HexBinaryType": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType'>;
    "HighToLow": NamedNode<'http://qudt.org/schema/qudt/HighToLow'>;
    "IconicCue-image": NamedNode<'http://qudt.org/schema/qudt/IconicCue-image'>;
    "iconicCue": NamedNode<'http://qudt.org/schema/qudt/iconicCue'>;
    "IconicCue": NamedNode<'http://qudt.org/schema/qudt/IconicCue'>;
    "IconicCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/IconicCueEnumeration-defaultValue'>;
    "iconicCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/iconicCueEnumeration'>;
    "id": NamedNode<'http://qudt.org/schema/qudt/id'>;
    "iec61360Code": NamedNode<'http://qudt.org/schema/qudt/iec61360Code'>;
    "IEEE754_1985RealEncoding": NamedNode<'http://qudt.org/schema/qudt/IEEE754_1985RealEncoding'>;
    "IERS-TN-32-2004": NamedNode<'http://qudt.org/schema/qudt/IERS-TN-32-2004'>;
    "image": NamedNode<'http://qudt.org/schema/qudt/image'>;
    "imageLocation": NamedNode<'http://qudt.org/schema/qudt/imageLocation'>;
    "IMPERIAL-DimensionVector": NamedNode<'http://qudt.org/schema/qudt/IMPERIAL-DimensionVector'>;
    "ImperialUnit": NamedNode<'http://qudt.org/schema/qudt/ImperialUnit'>;
    "InBook": NamedNode<'http://qudt.org/schema/qudt/InBook'>;
    "InCollection": NamedNode<'http://qudt.org/schema/qudt/InCollection'>;
    "incrementDatatype": NamedNode<'http://qudt.org/schema/qudt/incrementDatatype'>;
    "IndexedCollectionMember": NamedNode<'http://qudt.org/schema/qudt/IndexedCollectionMember'>;
    "IndexedList": NamedNode<'http://qudt.org/schema/qudt/IndexedList'>;
    "InertialCoordinateFrame-frameType": NamedNode<'http://qudt.org/schema/qudt/InertialCoordinateFrame-frameType'>;
    "InertialCoordinateFrame": NamedNode<'http://qudt.org/schema/qudt/InertialCoordinateFrame'>;
    "InertialReferenceFrame": NamedNode<'http://qudt.org/schema/qudt/InertialReferenceFrame'>;
    "informativeReference": NamedNode<'http://qudt.org/schema/qudt/informativeReference'>;
    "InProceedings": NamedNode<'http://qudt.org/schema/qudt/InProceedings'>;
    "integer1to12": NamedNode<'http://qudt.org/schema/qudt/integer1to12'>;
    "integer1to31": NamedNode<'http://qudt.org/schema/qudt/integer1to31'>;
    "IntegerDatatype": NamedNode<'http://qudt.org/schema/qudt/IntegerDatatype'>;
    "IntegerEncodingType": NamedNode<'http://qudt.org/schema/qudt/IntegerEncodingType'>;
    "IntegerList-first": NamedNode<'http://qudt.org/schema/qudt/IntegerList-first'>;
    "IntegerList-rest": NamedNode<'http://qudt.org/schema/qudt/IntegerList-rest'>;
    "IntegerList": NamedNode<'http://qudt.org/schema/qudt/IntegerList'>;
    "integerPercentage": NamedNode<'http://qudt.org/schema/qudt/integerPercentage'>;
    "IntegerUnionList": NamedNode<'http://qudt.org/schema/qudt/IntegerUnionList'>;
    "IntegerVector": NamedNode<'http://qudt.org/schema/qudt/IntegerVector'>;
    "InterpolatedTable": NamedNode<'http://qudt.org/schema/qudt/InterpolatedTable'>;
    /**
     * <p>The interval type allows for the degree of difference between items, but not the ratio between them. Examples include temperature with the Celsius scale, which has two defined points (the freezing and boiling point of water at specific conditions) and then separated into 100 intervals, date when measured from an arbitrary epoch (such as AD), percentage such as a percentage return on a stock,[16] location in Cartesian coordinates, and direction measured in degrees from true or magnetic north. Ratios are not meaningful since 20 °C cannot be said to be "twice as hot" as 10 °C, nor can multiplication/division be carried out between any two dates directly. However, ratios of differences can be expressed; for example, one difference can be twice another. Interval type variables are sometimes also called "scaled variables", but the formal mathematical term is an affine space (in this case an affine line).</p>
     * <p>Characteristics: median, percentile &amp; Monotonic increasing (order (&lt;) &amp; totally ordered set</p>
     */
    "IntervalScale": NamedNode<'http://qudt.org/schema/qudt/IntervalScale'>;
    "inverted": NamedNode<'http://qudt.org/schema/qudt/inverted'>;
    "isBaseQuantityKindOfSystem": NamedNode<'http://qudt.org/schema/qudt/isBaseQuantityKindOfSystem'>;
    "isByteString": NamedNode<'http://qudt.org/schema/qudt/isByteString'>;
    "isComprisedOf": NamedNode<'http://qudt.org/schema/qudt/isComprisedOf'>;
    /** This property is used to identify a Quantity instance that is a measure of a change, or interval, of some property, rather than a measure of its absolute value. This is important for measurements such as temperature differences where the conversion among units would be calculated differently because of offsets. */
    "isDeltaQuantity": NamedNode<'http://qudt.org/schema/qudt/isDeltaQuantity'>;
    "isDimensionInSystem": NamedNode<'http://qudt.org/schema/qudt/isDimensionInSystem'>;
    "isMetricUnit": NamedNode<'http://qudt.org/schema/qudt/isMetricUnit'>;
    "ISO-DimensionVector": NamedNode<'http://qudt.org/schema/qudt/ISO-DimensionVector'>;
    "ISO8601-UTCDateTime-BasicFormat": NamedNode<'http://qudt.org/schema/qudt/ISO8601-UTCDateTime-BasicFormat'>;
    "isoNormativeReference": NamedNode<'http://qudt.org/schema/qudt/isoNormativeReference'>;
    "isQuantityKindOf": NamedNode<'http://qudt.org/schema/qudt/isQuantityKindOf'>;
    "javaName": NamedNode<'http://qudt.org/schema/qudt/javaName'>;
    "jsName": NamedNode<'http://qudt.org/schema/qudt/jsName'>;
    "KinestheticCue-code": NamedNode<'http://qudt.org/schema/qudt/KinestheticCue-code'>;
    "kinestheticCue": NamedNode<'http://qudt.org/schema/qudt/kinestheticCue'>;
    "KinestheticCue": NamedNode<'http://qudt.org/schema/qudt/KinestheticCue'>;
    "KinestheticCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/KinestheticCueEnumeration-defaultValue'>;
    "kinestheticCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/kinestheticCueEnumeration'>;
    "landscape": NamedNode<'http://qudt.org/schema/qudt/landscape'>;
    "LargeObject": NamedNode<'http://qudt.org/schema/qudt/LargeObject'>;
    "LargeObjectType": NamedNode<'http://qudt.org/schema/qudt/LargeObjectType'>;
    "latexDefinition": NamedNode<'http://qudt.org/schema/qudt/latexDefinition'>;
    /** A type of string in which some characters may be wrapped with '\(' and '\) characters for LaTeX rendering. */
    "LatexString": NamedNode<'http://qudt.org/schema/qudt/LatexString'>;
    "latexSymbol": NamedNode<'http://qudt.org/schema/qudt/latexSymbol'>;
    "length": NamedNode<'http://qudt.org/schema/qudt/length'>;
    "LimitType": NamedNode<'http://qudt.org/schema/qudt/LimitType'>;
    "List-first": NamedNode<'http://qudt.org/schema/qudt/List-first'>;
    "List-rest": NamedNode<'http://qudt.org/schema/qudt/List-rest'>;
    "List": NamedNode<'http://qudt.org/schema/qudt/List'>;
    "LIST": NamedNode<'http://qudt.org/schema/qudt/LIST'>;
    "ListType": NamedNode<'http://qudt.org/schema/qudt/ListType'>;
    "literal": NamedNode<'http://qudt.org/schema/qudt/literal'>;
    "LittleEndian": NamedNode<'http://qudt.org/schema/qudt/LittleEndian'>;
    "LocalCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/LocalCoordinateSystem'>;
    /** Logarithmic units are abstract mathematical units that can be used to express any quantities (physical or mathematical) that are defined on a logarithmic scale, that is, as being proportional to the value of a logarithm function. Examples of logarithmic units include common units of information and entropy, such as the bit, and the byte, as well as units of relative signal strength magnitude such as the decibel. */
    "LogarithmicUnit": NamedNode<'http://qudt.org/schema/qudt/LogarithmicUnit'>;
    "LongIntegerType-octets": NamedNode<'http://qudt.org/schema/qudt/LongIntegerType-octets'>;
    "LongIntegerType": NamedNode<'http://qudt.org/schema/qudt/LongIntegerType'>;
    "LongUnsignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/LongUnsignedIntegerEncoding'>;
    "lowerBound": NamedNode<'http://qudt.org/schema/qudt/lowerBound'>;
    "LowToHigh": NamedNode<'http://qudt.org/schema/qudt/LowToHigh'>;
    "LunarCoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-coordinateCenter'>;
    "LunarCoordinateSystem-realization": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-realization'>;
    "LunarCoordinateSystem-xAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-xAxisDefinition'>;
    "LunarCoordinateSystem-yAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-yAxisDefinition'>;
    "LunarCoordinateSystem-zAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-zAxisDefinition'>;
    "LunarCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem'>;
    "MajorMinorType": NamedNode<'http://qudt.org/schema/qudt/MajorMinorType'>;
    /** In scientific notation, the mantissa of a real number is the integer coefficient preceding the base raised to the exponent. */
    "mantissa": NamedNode<'http://qudt.org/schema/qudt/mantissa'>;
    "Manual": NamedNode<'http://qudt.org/schema/qudt/Manual'>;
    "Map": NamedNode<'http://qudt.org/schema/qudt/Map'>;
    "MapType": NamedNode<'http://qudt.org/schema/qudt/MapType'>;
    "MarsCoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/MarsCoordinateSystem-coordinateCenter'>;
    "MarsCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/MarsCoordinateSystem'>;
    "MASS-PROPERTIES-ARRAY": NamedNode<'http://qudt.org/schema/qudt/MASS-PROPERTIES-ARRAY'>;
    "MassPropertiesArray": NamedNode<'http://qudt.org/schema/qudt/MassPropertiesArray'>;
    "MassPropertiesArrayType": NamedNode<'http://qudt.org/schema/qudt/MassPropertiesArrayType'>;
    "mathDefinition": NamedNode<'http://qudt.org/schema/qudt/mathDefinition'>;
    "mathMLdefinition": NamedNode<'http://qudt.org/schema/qudt/mathMLdefinition'>;
    "MathsFunctionType": NamedNode<'http://qudt.org/schema/qudt/MathsFunctionType'>;
    "matlabName": NamedNode<'http://qudt.org/schema/qudt/matlabName'>;
    "MATRIX-TYPE_2x4": NamedNode<'http://qudt.org/schema/qudt/MATRIX-TYPE_2x4'>;
    "Matrix": NamedNode<'http://qudt.org/schema/qudt/Matrix'>;
    "MATRIX": NamedNode<'http://qudt.org/schema/qudt/MATRIX'>;
    "MatrixType": NamedNode<'http://qudt.org/schema/qudt/MatrixType'>;
    "maxBits": NamedNode<'http://qudt.org/schema/qudt/maxBits'>;
    "maxDepth": NamedNode<'http://qudt.org/schema/qudt/maxDepth'>;
    "maxExclusive": NamedNode<'http://qudt.org/schema/qudt/maxExclusive'>;
    "maxExponent": NamedNode<'http://qudt.org/schema/qudt/maxExponent'>;
    "maxInclusive": NamedNode<'http://qudt.org/schema/qudt/maxInclusive'>;
    "maxLength": NamedNode<'http://qudt.org/schema/qudt/maxLength'>;
    "maxMantissa": NamedNode<'http://qudt.org/schema/qudt/maxMantissa'>;
    "MemoryOrderType": NamedNode<'http://qudt.org/schema/qudt/MemoryOrderType'>;
    "microsoftSQLServerName": NamedNode<'http://qudt.org/schema/qudt/microsoftSQLServerName'>;
    "minBits": NamedNode<'http://qudt.org/schema/qudt/minBits'>;
    "minExclusive": NamedNode<'http://qudt.org/schema/qudt/minExclusive'>;
    "minInclusive": NamedNode<'http://qudt.org/schema/qudt/minInclusive'>;
    "minLength": NamedNode<'http://qudt.org/schema/qudt/minLength'>;
    "minMantissa": NamedNode<'http://qudt.org/schema/qudt/minMantissa'>;
    "minValue": NamedNode<'http://qudt.org/schema/qudt/minValue'>;
    "Misc": NamedNode<'http://qudt.org/schema/qudt/Misc'>;
    "MKS-Unit": NamedNode<'http://qudt.org/schema/qudt/MKS-Unit'>;
    "ModalCue-duration": NamedNode<'http://qudt.org/schema/qudt/ModalCue-duration'>;
    "modalCue": NamedNode<'http://qudt.org/schema/qudt/modalCue'>;
    "ModalCue": NamedNode<'http://qudt.org/schema/qudt/ModalCue'>;
    "modalCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/modalCueEnumeration'>;
    "ModalEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/ModalEnumeration-defaultValue'>;
    "ModalEnumeration": NamedNode<'http://qudt.org/schema/qudt/ModalEnumeration'>;
    /** Reference to one in a list of enumerated elements that indicates whether data (e.g. variable or parameter) can be changed. */
    "modifiability": NamedNode<'http://qudt.org/schema/qudt/modifiability'>;
    "MULTi-DIMENSIONAL-ARRAY": NamedNode<'http://qudt.org/schema/qudt/MULTi-DIMENSIONAL-ARRAY'>;
    "MultiDimensionalArray": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalArray'>;
    "MultiDimensionalArrayType": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalArrayType'>;
    "MultiDimensionalDataFormat-descriptor": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalDataFormat-descriptor'>;
    "MultiDimensionalDataFormat": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalDataFormat'>;
    "MultiDimensionalDataFormatType": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalDataFormatType'>;
    "MultiModalEnumeration-auralCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-auralCueEnumeration'>;
    "MultiModalEnumeration-iconicCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-iconicCueEnumeration'>;
    "MultiModalEnumeration-kinestheticCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-kinestheticCueEnumeration'>;
    "MultiModalEnumeration-modalCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-modalCueEnumeration'>;
    "MultiModalEnumeration-visualCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-visualCueEnumeration'>;
    "MultiModalEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration'>;
    "MultiModalType-auralCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-auralCue'>;
    "MultiModalType-iconicCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-iconicCue'>;
    "MultiModalType-kinestheticCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-kinestheticCue'>;
    "MultiModalType-modalCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-modalCue'>;
    "MultiModalType-visualCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-visualCue'>;
    "MultiModalType": NamedNode<'http://qudt.org/schema/qudt/MultiModalType'>;
    /** A bag is a set in which elements may be repeated. */
    "MultiSet": NamedNode<'http://qudt.org/schema/qudt/MultiSet'>;
    "mySQLName": NamedNode<'http://qudt.org/schema/qudt/mySQLName'>;
    "N-Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/N-Tuple-elementType'>;
    "N-Tuple": NamedNode<'http://qudt.org/schema/qudt/N-Tuple'>;
    "N-TupleType": NamedNode<'http://qudt.org/schema/qudt/N-TupleType'>;
    "negative": NamedNode<'http://qudt.org/schema/qudt/negative'>;
    "negativeDeltaLimit": NamedNode<'http://qudt.org/schema/qudt/negativeDeltaLimit'>;
    "NIST_SP811_Comment": NamedNode<'http://qudt.org/schema/qudt/NIST_SP811_Comment'>;
    "No": NamedNode<'http://qudt.org/schema/qudt/No'>;
    /** A nominal scale differentiates between items or subjects based only on their names or (meta-)categories and other qualitative classifications they belong to; thus dichotomous data involves the construction of classifications as well as the classification of items. Discovery of an exception to a classification can be viewed as progress. Numbers may be used to represent the variables but the numbers do not have numerical value or relationship: For example, a Globally unique identifier. Examples of these classifications include gender, nationality, ethnicity, language, genre, style, biological species, and form. In a university one could also use hall of affiliation as an example. */
    "NominalScale": NamedNode<'http://qudt.org/schema/qudt/NominalScale'>;
    /** Parameter is fixed, not modifiable. */
    "NonModifiableParameter": NamedNode<'http://qudt.org/schema/qudt/NonModifiableParameter'>;
    "NonNegativeIntegerUnionList": NamedNode<'http://qudt.org/schema/qudt/NonNegativeIntegerUnionList'>;
    "NonRotatingInertialFrame-frameType": NamedNode<'http://qudt.org/schema/qudt/NonRotatingInertialFrame-frameType'>;
    "NonRotatingInertialFrame": NamedNode<'http://qudt.org/schema/qudt/NonRotatingInertialFrame'>;
    "normativeReference": NamedNode<'http://qudt.org/schema/qudt/normativeReference'>;
    "numeratorDimensionVector": NamedNode<'http://qudt.org/schema/qudt/numeratorDimensionVector'>;
    "NUMERIC": NamedNode<'http://qudt.org/schema/qudt/NUMERIC'>;
    "NumericType-accuracy": NamedNode<'http://qudt.org/schema/qudt/NumericType-accuracy'>;
    "NumericType-signedness": NamedNode<'http://qudt.org/schema/qudt/NumericType-signedness'>;
    "NumericType": NamedNode<'http://qudt.org/schema/qudt/NumericType'>;
    "NumericUnion": NamedNode<'http://qudt.org/schema/qudt/NumericUnion'>;
    "NumericUnionList": NamedNode<'http://qudt.org/schema/qudt/NumericUnionList'>;
    "numericValue": NamedNode<'http://qudt.org/schema/qudt/numericValue'>;
    "objectValue": NamedNode<'http://qudt.org/schema/qudt/objectValue'>;
    "OctetEncoding": NamedNode<'http://qudt.org/schema/qudt/OctetEncoding'>;
    "octets": NamedNode<'http://qudt.org/schema/qudt/octets'>;
    "OctetType": NamedNode<'http://qudt.org/schema/qudt/OctetType'>;
    "odbcName": NamedNode<'http://qudt.org/schema/qudt/odbcName'>;
    /** A discrete state enumeration whose values are 'off' and 'on'. The 'off' value is encoded as a zero (0) and the 'on' value as a one (1). */
    "OffOnStateTypeEnumeration": NamedNode<'http://qudt.org/schema/qudt/OffOnStateTypeEnumeration'>;
    "oleDBName": NamedNode<'http://qudt.org/schema/qudt/oleDBName'>;
    "omUnit": NamedNode<'http://qudt.org/schema/qudt/omUnit'>;
    "On": NamedNode<'http://qudt.org/schema/qudt/On'>;
    "OneMeansOff": NamedNode<'http://qudt.org/schema/qudt/OneMeansOff'>;
    "onlineReference": NamedNode<'http://qudt.org/schema/qudt/onlineReference'>;
    "OnOffStateType": NamedNode<'http://qudt.org/schema/qudt/OnOffStateType'>;
    /** A discrete state enumeration whose values are 'off' and 'on'. The 'on' value is encoded as a zero (0) and the 'off' value as a one (1). */
    "OnOffStateTypeEnumeration": NamedNode<'http://qudt.org/schema/qudt/OnOffStateTypeEnumeration'>;
    "OOST_OFF": NamedNode<'http://qudt.org/schema/qudt/OOST_OFF'>;
    "OOST_ON": NamedNode<'http://qudt.org/schema/qudt/OOST_ON'>;
    "OOST_ZERO-MEANS-OFF": NamedNode<'http://qudt.org/schema/qudt/OOST_ZERO-MEANS-OFF'>;
    "OOST_ZERO-MEANS-ON": NamedNode<'http://qudt.org/schema/qudt/OOST_ZERO-MEANS-ON'>;
    "Open": NamedNode<'http://qudt.org/schema/qudt/Open'>;
    "OpenCloseStateType": NamedNode<'http://qudt.org/schema/qudt/OpenCloseStateType'>;
    "optional": NamedNode<'http://qudt.org/schema/qudt/optional'>;
    "oracleSQLName": NamedNode<'http://qudt.org/schema/qudt/oracleSQLName'>;
    "order": NamedNode<'http://qudt.org/schema/qudt/order'>;
    "OrderedCollection-first": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection-first'>;
    "OrderedCollection-orderingRelation": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection-orderingRelation'>;
    "OrderedCollection-rest": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection-rest'>;
    "OrderedCollection": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection'>;
    "OrderedCollectionType": NamedNode<'http://qudt.org/schema/qudt/OrderedCollectionType'>;
    "OrderedTree": NamedNode<'http://qudt.org/schema/qudt/OrderedTree'>;
    "OrderedTreeType": NamedNode<'http://qudt.org/schema/qudt/OrderedTreeType'>;
    "orderedType": NamedNode<'http://qudt.org/schema/qudt/orderedType'>;
    "OrderedType": NamedNode<'http://qudt.org/schema/qudt/OrderedType'>;
    "orderingRelation": NamedNode<'http://qudt.org/schema/qudt/orderingRelation'>;
    "orderInStructure": NamedNode<'http://qudt.org/schema/qudt/orderInStructure'>;
    /** The ordinal type allows for rank order (1st, 2nd, 3rd, etc.) by which data can be sorted, but still does not allow for relative degree of difference between them. Examples include, on one hand, dichotomous data with dichotomous (or dichotomized) values such as 'sick' vs. 'healthy' when measuring health, 'guilty' vs. 'innocent' when making judgments in courts, 'wrong/false' vs. 'right/true' when measuring truth value, and, on the other hand, non-dichotomous data consisting of a spectrum of values, such as 'completely agree', 'mostly agree', 'mostly disagree', 'completely disagree' when measuring opinion. */
    "OrdinalScale": NamedNode<'http://qudt.org/schema/qudt/OrdinalScale'>;
    "OrdinalType": NamedNode<'http://qudt.org/schema/qudt/OrdinalType'>;
    "Organization": NamedNode<'http://qudt.org/schema/qudt/Organization'>;
    "originDefinition": NamedNode<'http://qudt.org/schema/qudt/originDefinition'>;
    "outOfScope": NamedNode<'http://qudt.org/schema/qudt/outOfScope'>;
    "padding": NamedNode<'http://qudt.org/schema/qudt/padding'>;
    "PaddingType": NamedNode<'http://qudt.org/schema/qudt/PaddingType'>;
    "Parameter": NamedNode<'http://qudt.org/schema/qudt/Parameter'>;
    /** An enumeration of literals that signify whether a parameter is modifiable and if so, by whom. */
    "ParameterModifiabilityType": NamedNode<'http://qudt.org/schema/qudt/ParameterModifiabilityType'>;
    "PARTIAL-ARRAY": NamedNode<'http://qudt.org/schema/qudt/PARTIAL-ARRAY'>;
    "PartiallyOrdered": NamedNode<'http://qudt.org/schema/qudt/PartiallyOrdered'>;
    "pattern": NamedNode<'http://qudt.org/schema/qudt/pattern'>;
    "Percentage": NamedNode<'http://qudt.org/schema/qudt/Percentage'>;
    "permissibleMaths": NamedNode<'http://qudt.org/schema/qudt/permissibleMaths'>;
    "permissibleTransformation": NamedNode<'http://qudt.org/schema/qudt/permissibleTransformation'>;
    "PhysicalAddress": NamedNode<'http://qudt.org/schema/qudt/PhysicalAddress'>;
    /** A physical constant is a physical quantity that is generally believed to be both universal in nature and constant in time. It can be contrasted with a mathematical constant, which is a fixed numerical value but does not directly involve any physical measurement. There are many physical constants in science, some of the most widely recognized being the speed of light in vacuum c, Newton's gravitational constant G, Planck's constant h, the electric permittivity of free space ε0, and the elementary charge e. Physical constants can take many dimensional forms, or may be dimensionless depending on the system of quantities and units used. */
    "PhysicalConstant": NamedNode<'http://qudt.org/schema/qudt/PhysicalConstant'>;
    "pitchRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/pitchRotationDefinition'>;
    "plainTextDescription": NamedNode<'http://qudt.org/schema/qudt/plainTextDescription'>;
    "PlaneAngleUnit": NamedNode<'http://qudt.org/schema/qudt/PlaneAngleUnit'>;
    "PolarCoordinates": NamedNode<'http://qudt.org/schema/qudt/PolarCoordinates'>;
    "PolarCoordinatesType": NamedNode<'http://qudt.org/schema/qudt/PolarCoordinatesType'>;
    /** A "Tagged Enumeration" with the following instance(s): "negative", "positive". */
    "Polarity": NamedNode<'http://qudt.org/schema/qudt/Polarity'>;
    "positive": NamedNode<'http://qudt.org/schema/qudt/positive'>;
    "positiveDeltaLimit": NamedNode<'http://qudt.org/schema/qudt/positiveDeltaLimit'>;
    "PositiveIntegerType": NamedNode<'http://qudt.org/schema/qudt/PositiveIntegerType'>;
    "precision": NamedNode<'http://qudt.org/schema/qudt/precision'>;
    /** Associates a unit with the appropriate prefix, if any. */
    "prefix": NamedNode<'http://qudt.org/schema/qudt/prefix'>;
    "Prefix": NamedNode<'http://qudt.org/schema/qudt/Prefix'>;
    "prefixMultiplier": NamedNode<'http://qudt.org/schema/qudt/prefixMultiplier'>;
    "PrefixUnit": NamedNode<'http://qudt.org/schema/qudt/PrefixUnit'>;
    "Proceedings": NamedNode<'http://qudt.org/schema/qudt/Proceedings'>;
    "protocolBuffersName": NamedNode<'http://qudt.org/schema/qudt/protocolBuffersName'>;
    "PubEnumeratedType": NamedNode<'http://qudt.org/schema/qudt/PubEnumeratedType'>;
    "pythonName": NamedNode<'http://qudt.org/schema/qudt/pythonName'>;
    "qkdvDenominator": NamedNode<'http://qudt.org/schema/qudt/qkdvDenominator'>;
    "qkdvNumerator": NamedNode<'http://qudt.org/schema/qudt/qkdvNumerator'>;
    /** <p><em>Quantifiable</em> ascribes to some thing the capability of being measured, observed, or counted.</p> */
    "Quantifiable": NamedNode<'http://qudt.org/schema/qudt/Quantifiable'>;
    "quantity": NamedNode<'http://qudt.org/schema/qudt/quantity'>;
    /**
     * <p class="lm-para">A <b>quantity</b> is the measurement of an observable property of a particular object, event, or physical system. A quantity is always associated with the context of measurement (i.e. the thing measured, the measured value, the accuracy of measurement, etc.) whereas the underlying <b>quantity kind</b> is independent of any particular measurement. Thus, length is a quantity kind while the height of a rocket is a specific quantity of length; its magnitude that may be expressed in meters, feet, inches, etc. Examples of physical quantities include physical constants, such as the speed of light in a vacuum, Planck's constant, the electric permittivity of free space, and the fine structure constant. </p>
     *
     * <p class="lm-para">In other words, quantities are quantifiable aspects of the world, such as the duration of a movie, the distance between two points, velocity of a car, the pressure of the atmosphere, and a person's weight; and units are used to describe their numerical measure. 
     *
     * <p class="lm-para">Many <b>quantity kinds</b> are related to each other by various physical laws, and as a result, the associated units of some quantity kinds can be expressed as products (or ratios) of powers of other quantity kinds (e.g., momentum is mass times velocity and velocity is defined as distance divided by time). In this way, some quantities can be calculated from other measured quantities using their associations to the quantity kinds in these expressions. These quantity kind relationships are also discussed in dimensional analysis. Those that cannot be so expressed can be regarded as "fundamental" in this sense.</p>
     * <p class="lm-para">A quantity is distinguished from a "quantity kind" in that the former carries a value and the latter is a type specifier.</p>
     */
    "Quantity": NamedNode<'http://qudt.org/schema/qudt/Quantity'>;
    /** A <b>Quantity Kind</b> is any observable property that can be  measured and quantified numerically. Familiar examples include physical properties such as length, mass, time, force, energy, power, electric charge, etc. Less familiar examples include currency, interest rate, price to earning ratio, and information capacity. */
    "QuantityKind": NamedNode<'http://qudt.org/schema/qudt/QuantityKind'>;
    /** A <em>CGS EMU Dimension Vector</em> is used to specify the dimensions for EMU C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-EMU": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-EMU'>;
    /** A <em>CGS ESU Dimension Vector</em> is used to specify the dimensions for ESU C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-ESU": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-ESU'>;
    /** A <em>CGS GAUSS Dimension Vector</em> is used to specify the dimensions for Gaussioan C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-GAUSS": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-GAUSS'>;
    /** A <em>CGS LH Dimension Vector</em> is used to specify the dimensions for Lorentz-Heaviside C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-LH": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-LH'>;
    /** A <em>CGS Dimension Vector</em> is used to specify the dimensions for a C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS'>;
    "QuantityKindDimensionVector_Imperial": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_Imperial'>;
    "QuantityKindDimensionVector_ISO": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_ISO'>;
    "QuantityKindDimensionVector_SI": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_SI'>;
    /**
     * <p class="lm-para">A  <em>Quantity Kind Dimension Vector</em> describes the dimensionality of a quantity kind in the context of a system of units. In the SI system of units, the dimensions of a quantity kind are expressed as a product of the basic physical dimensions mass (\(M\)), length (\(L\)), time (\(T\)) current (\(I\)), amount of substance (\(N\)), luminous intensity (\(J\)) and absolute temperature (\(\theta\)) as \(dim \, Q = L^{\alpha} \, M^{\beta} \, T^{\gamma} \, I ^{\delta} \, \theta ^{\epsilon} \, N^{\eta} \, J ^{\nu}\).</p>
     *
     * <p class="lm-para">The rational powers of the dimensional exponents, \(\alpha, \, \beta, \, \gamma, \, \delta, \, \epsilon, \, \eta, \, \nu\), are positive, negative, or zero.</p>
     *
     * <p class="lm-para">For example, the dimension of the physical quantity kind \(\it{speed}\) is \(\boxed{length/time}\), \(L/T\) or \(LT^{-1}\), and the dimension of the physical quantity kind force is \(\boxed{mass \times acceleration}\) or \(\boxed{mass \times (length/time)/time}\), \(ML/T^2\) or \(MLT^{-2}\) respectively.</p>
     */
    "QuantityKindDimensionVector": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector'>;
    "QuantityType": NamedNode<'http://qudt.org/schema/qudt/QuantityType'>;
    "quantityValue": NamedNode<'http://qudt.org/schema/qudt/quantityValue'>;
    /** A <i>Quantity Value</i> expresses the magnitude and kind of a quantity and is given by the product of a numerical value <code>n</code> and a unit of measure <code>U</code>. The number multiplying the unit is referred to as the numerical value of the quantity expressed in that unit. Refer to <a href="http://physics.nist.gov/Pubs/SP811/sec07.html">NIST SP 811 section 7</a> for more on quantity values. */
    "QuantityValue": NamedNode<'http://qudt.org/schema/qudt/QuantityValue'>;
    "QuantityValueType-basis": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType-basis'>;
    "QuantityValueType-elementType": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType-elementType'>;
    "QuantityValueType-elementUnit": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType-elementUnit'>;
    "QuantityValueType": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType'>;
    "rationale": NamedNode<'http://qudt.org/schema/qudt/rationale'>;
    /** The ratio type takes its name from the fact that measurement is the estimation of the ratio between a magnitude of a continuous quantity and a unit magnitude of the same kind (Michell, 1997, 1999). A ratio scale possesses a meaningful (unique and non-arbitrary) zero value. Most measurement in the physical sciences and engineering is done on ratio scales. Examples include mass, length, duration, plane angle, energy and electric charge. In contrast to interval scales, ratios are now meaningful because having a non-arbitrary zero point makes it meaningful to say, for example, that one object has "twice the length" of another (= is "twice as long"). Very informally, many ratio scales can be described as specifying "how much" of something (i.e. an amount or magnitude) or "how many" (a count). The Kelvin temperature scale is a ratio scale because it has a unique, non-arbitrary zero point called absolute zero. */
    "RatioScale": NamedNode<'http://qudt.org/schema/qudt/RatioScale'>;
    "RawValueTupleMember-elementType": NamedNode<'http://qudt.org/schema/qudt/RawValueTupleMember-elementType'>;
    "RawValueTupleMember": NamedNode<'http://qudt.org/schema/qudt/RawValueTupleMember'>;
    "RawValueTupleMemberType": NamedNode<'http://qudt.org/schema/qudt/RawValueTupleMemberType'>;
    "rdfsDatatype": NamedNode<'http://qudt.org/schema/qudt/rdfsDatatype'>;
    "RealDatatype-base": NamedNode<'http://qudt.org/schema/qudt/RealDatatype-base'>;
    "RealDatatype-maxExponent": NamedNode<'http://qudt.org/schema/qudt/RealDatatype-maxExponent'>;
    "RealDatatype-precision": NamedNode<'http://qudt.org/schema/qudt/RealDatatype-precision'>;
    "RealDatatype": NamedNode<'http://qudt.org/schema/qudt/RealDatatype'>;
    "RealDoublePrecisionType": NamedNode<'http://qudt.org/schema/qudt/RealDoublePrecisionType'>;
    "realization": NamedNode<'http://qudt.org/schema/qudt/realization'>;
    /** This is the class of data values that approximate real numbers in finite precision. Often, such values are expressed in "mantissa, base, exponent" form. Any rational number can be expressed in the form m*b^e, where m (the mantissa), b (the base), and e (the exponent) are integers. Typically, b is chosen to be either 2 or 10, and then the values of m and e are determined given the choice of base. */
    "RealNumberType": NamedNode<'http://qudt.org/schema/qudt/RealNumberType'>;
    "RealSinglePrecisionType": NamedNode<'http://qudt.org/schema/qudt/RealSinglePrecisionType'>;
    "Record": NamedNode<'http://qudt.org/schema/qudt/Record'>;
    "reference": NamedNode<'http://qudt.org/schema/qudt/reference'>;
    "ReferenceDatatype": NamedNode<'http://qudt.org/schema/qudt/ReferenceDatatype'>;
    "ReferenceFrame-comment": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-comment'>;
    "ReferenceFrame-description": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-description'>;
    "ReferenceFrame-frameType": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-frameType'>;
    "ReferenceFrame-realization": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-realization'>;
    "ReferenceFrame-xAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-xAxisDefinition'>;
    "ReferenceFrame-xCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-xCoordinateDefinition'>;
    "ReferenceFrame-yAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-yAxisDefinition'>;
    "ReferenceFrame-yCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-yCoordinateDefinition'>;
    "ReferenceFrame-zAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-zAxisDefinition'>;
    "ReferenceFrame-zCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-zCoordinateDefinition'>;
    "referenceFrame": NamedNode<'http://qudt.org/schema/qudt/referenceFrame'>;
    "ReferenceFrame": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame'>;
    "referenceFrameType": NamedNode<'http://qudt.org/schema/qudt/referenceFrameType'>;
    "referenceUnit": NamedNode<'http://qudt.org/schema/qudt/referenceUnit'>;
    "RELATIVE-DATETIME": NamedNode<'http://qudt.org/schema/qudt/RELATIVE-DATETIME'>;
    "relativeStandardUncertainty": NamedNode<'http://qudt.org/schema/qudt/relativeStandardUncertainty'>;
    "relevantQuantityKind": NamedNode<'http://qudt.org/schema/qudt/relevantQuantityKind'>;
    /** This property is used for qudt:Discipline instances to identify the Unit instances that are used within a given discipline. */
    "relevantUnit": NamedNode<'http://qudt.org/schema/qudt/relevantUnit'>;
    "returnType": NamedNode<'http://qudt.org/schema/qudt/returnType'>;
    "rgbCode": NamedNode<'http://qudt.org/schema/qudt/rgbCode'>;
    /** A rational number can be expressed in the form m*b^e, where m (the mantissa), b (the base), and e (the exponent) are integers. In this case b is chosen to be 2, and then the values of m and e are determined given this choice of base. */
    "RN_BINARY-BASE": NamedNode<'http://qudt.org/schema/qudt/RN_BINARY-BASE'>;
    /** A rational number can be expressed in the form m*b^e, where m (the mantissa), b (the base), and e (the exponent) are integers. In this case b is chosen to be 10, and then the values of m and e are determined given this choice of base. */
    "RN_DECIMAL-BASE": NamedNode<'http://qudt.org/schema/qudt/RN_DECIMAL-BASE'>;
    "rollRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/rollRotationDefinition'>;
    "RotatingReferenceFrame": NamedNode<'http://qudt.org/schema/qudt/RotatingReferenceFrame'>;
    "rotationDefinition": NamedNode<'http://qudt.org/schema/qudt/rotationDefinition'>;
    "rows": NamedNode<'http://qudt.org/schema/qudt/rows'>;
    "Rule": NamedNode<'http://qudt.org/schema/qudt/Rule'>;
    "ruleType": NamedNode<'http://qudt.org/schema/qudt/ruleType'>;
    "RuleType": NamedNode<'http://qudt.org/schema/qudt/RuleType'>;
    "Scalar": NamedNode<'http://qudt.org/schema/qudt/Scalar'>;
    "ScalarDatatype-bitOrder": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-bitOrder'>;
    "ScalarDatatype-bits": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-bits'>;
    "ScalarDatatype-byteOrder": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-byteOrder'>;
    "ScalarDatatype-bytes": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-bytes'>;
    "ScalarDatatype-encoding": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-encoding'>;
    "ScalarDatatype-length": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-length'>;
    "ScalarDatatype-maxExclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-maxExclusive'>;
    "ScalarDatatype-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-maxInclusive'>;
    "ScalarDatatype-minExclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-minExclusive'>;
    "ScalarDatatype-minInclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-minInclusive'>;
    "ScalarDatatype-rdfsDatatype": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-rdfsDatatype'>;
    "ScalarDatatype": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype'>;
    "scalarValue": NamedNode<'http://qudt.org/schema/qudt/scalarValue'>;
    /** Scales (also called "scales of measurement" or "levels of measurement")  are expressions that typically refer to the theory of scale types. */
    "Scale": NamedNode<'http://qudt.org/schema/qudt/Scale'>;
    "ScaledUnit": NamedNode<'http://qudt.org/schema/qudt/ScaledUnit'>;
    "scaleType": NamedNode<'http://qudt.org/schema/qudt/scaleType'>;
    "ScaleType": NamedNode<'http://qudt.org/schema/qudt/ScaleType'>;
    "Sequence-first": NamedNode<'http://qudt.org/schema/qudt/Sequence-first'>;
    "Sequence-rest": NamedNode<'http://qudt.org/schema/qudt/Sequence-rest'>;
    "Sequence": NamedNode<'http://qudt.org/schema/qudt/Sequence'>;
    "SequenceType": NamedNode<'http://qudt.org/schema/qudt/SequenceType'>;
    "Set": NamedNode<'http://qudt.org/schema/qudt/Set'>;
    "SetType": NamedNode<'http://qudt.org/schema/qudt/SetType'>;
    "ShortIntegerType": NamedNode<'http://qudt.org/schema/qudt/ShortIntegerType'>;
    "ShortSignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/ShortSignedIntegerEncoding'>;
    "ShortUnsignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/ShortUnsignedIntegerEncoding'>;
    "SIGNED": NamedNode<'http://qudt.org/schema/qudt/SIGNED'>;
    "SignedBigIntegerType-literal": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType-literal'>;
    "SignedBigIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType-maxInclusive'>;
    "SignedBigIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType-minInclusive'>;
    "SignedBigIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType'>;
    "SignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/SignedIntegerEncoding'>;
    "SignedIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedIntegerType'>;
    "SignedLongIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType-abbreviation'>;
    "SignedLongIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType-maxInclusive'>;
    "SignedLongIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType-minInclusive'>;
    "SignedLongIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType'>;
    "SignedMediumIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedMediumIntegerType'>;
    "signedness": NamedNode<'http://qudt.org/schema/qudt/signedness'>;
    "SignednessType": NamedNode<'http://qudt.org/schema/qudt/SignednessType'>;
    "SignedShortIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/SignedShortIntegerType-abbreviation'>;
    "SignedShortIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedShortIntegerType'>;
    "SignedType-signedness": NamedNode<'http://qudt.org/schema/qudt/SignedType-signedness'>;
    "SignedType": NamedNode<'http://qudt.org/schema/qudt/SignedType'>;
    "SignedVariableLengthIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedVariableLengthIntegerType'>;
    "significantDigits": NamedNode<'http://qudt.org/schema/qudt/significantDigits'>;
    "SinglePrecisionRealEncoding": NamedNode<'http://qudt.org/schema/qudt/SinglePrecisionRealEncoding'>;
    "SinglePrecisionType": NamedNode<'http://qudt.org/schema/qudt/SinglePrecisionType'>;
    "siUnitsExpression": NamedNode<'http://qudt.org/schema/qudt/siUnitsExpression'>;
    "SolidAngleUnit": NamedNode<'http://qudt.org/schema/qudt/SolidAngleUnit'>;
    /** The intended use of the sound property is to be associated with modal enumerations */
    "sound": NamedNode<'http://qudt.org/schema/qudt/sound'>;
    "specialization": NamedNode<'http://qudt.org/schema/qudt/specialization'>;
    "SplineCalibrator": NamedNode<'http://qudt.org/schema/qudt/SplineCalibrator'>;
    "SplineCalibratorType": NamedNode<'http://qudt.org/schema/qudt/SplineCalibratorType'>;
    "SplinePoint": NamedNode<'http://qudt.org/schema/qudt/SplinePoint'>;
    "SplinePointType": NamedNode<'http://qudt.org/schema/qudt/SplinePointType'>;
    "StandardsUnit": NamedNode<'http://qudt.org/schema/qudt/StandardsUnit'>;
    "standardUncertainty": NamedNode<'http://qudt.org/schema/qudt/standardUncertainty'>;
    "STATE-SPACE-MATRIX": NamedNode<'http://qudt.org/schema/qudt/STATE-SPACE-MATRIX'>;
    "STATE-VECTOR_MASS-PROPERTIES": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR_MASS-PROPERTIES'>;
    "STATE-VECTOR-TYPE-LIST_MASS-PROPERTIES": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST_MASS-PROPERTIES'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-1": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-1'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-2": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-2'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-3": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-3'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-4": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-4'>;
    "Statement": NamedNode<'http://qudt.org/schema/qudt/Statement'>;
    "StateSpaceMatrix": NamedNode<'http://qudt.org/schema/qudt/StateSpaceMatrix'>;
    "StateSpaceMatrixType": NamedNode<'http://qudt.org/schema/qudt/StateSpaceMatrixType'>;
    "StateSpaceVector-coordinateSystem": NamedNode<'http://qudt.org/schema/qudt/StateSpaceVector-coordinateSystem'>;
    "StateSpaceVector": NamedNode<'http://qudt.org/schema/qudt/StateSpaceVector'>;
    "StateSpaceVectorType": NamedNode<'http://qudt.org/schema/qudt/StateSpaceVectorType'>;
    "StateVectorType": NamedNode<'http://qudt.org/schema/qudt/StateVectorType'>;
    "STRING": NamedNode<'http://qudt.org/schema/qudt/STRING'>;
    "StringEncodingType": NamedNode<'http://qudt.org/schema/qudt/StringEncodingType'>;
    "StringList-first": NamedNode<'http://qudt.org/schema/qudt/StringList-first'>;
    "StringList-rest": NamedNode<'http://qudt.org/schema/qudt/StringList-rest'>;
    "StringList": NamedNode<'http://qudt.org/schema/qudt/StringList'>;
    "StringType-dimensionality": NamedNode<'http://qudt.org/schema/qudt/StringType-dimensionality'>;
    "StringType-elementType": NamedNode<'http://qudt.org/schema/qudt/StringType-elementType'>;
    "StringType-isByteString": NamedNode<'http://qudt.org/schema/qudt/StringType-isByteString'>;
    "StringType-maxLength": NamedNode<'http://qudt.org/schema/qudt/StringType-maxLength'>;
    "StringType-typeMatrix": NamedNode<'http://qudt.org/schema/qudt/StringType-typeMatrix'>;
    "StringType": NamedNode<'http://qudt.org/schema/qudt/StringType'>;
    "StringUTF16-elementType": NamedNode<'http://qudt.org/schema/qudt/StringUTF16-elementType'>;
    "StringUTF16": NamedNode<'http://qudt.org/schema/qudt/StringUTF16'>;
    "StringUTF8-elementType": NamedNode<'http://qudt.org/schema/qudt/StringUTF8-elementType'>;
    "StringUTF8": NamedNode<'http://qudt.org/schema/qudt/StringUTF8'>;
    "stringValue": NamedNode<'http://qudt.org/schema/qudt/stringValue'>;
    "StructuredDatatype-elementType": NamedNode<'http://qudt.org/schema/qudt/StructuredDatatype-elementType'>;
    "StructuredDatatype": NamedNode<'http://qudt.org/schema/qudt/StructuredDatatype'>;
    /** A "Enumeration Literal". */
    "SubjectArea": NamedNode<'http://qudt.org/schema/qudt/SubjectArea'>;
    "supercededBy": NamedNode<'http://qudt.org/schema/qudt/supercededBy'>;
    "symbol": NamedNode<'http://qudt.org/schema/qudt/symbol'>;
    "Symbol": NamedNode<'http://qudt.org/schema/qudt/Symbol'>;
    "systemDefinition": NamedNode<'http://qudt.org/schema/qudt/systemDefinition'>;
    "systemDerivedQuantityKind": NamedNode<'http://qudt.org/schema/qudt/systemDerivedQuantityKind'>;
    "systemDimension": NamedNode<'http://qudt.org/schema/qudt/systemDimension'>;
    /** Parameter is modifiable by a (computer) system. */
    "SystemModifiableParameter": NamedNode<'http://qudt.org/schema/qudt/SystemModifiableParameter'>;
    /** A system of quantity kinds is a set of one or more quantity kinds together with a set of zero or more algebraic equations that define relationships between quantity kinds in the set. In the physical sciences, the equations relating quantity kinds are typically physical laws and definitional relations, and constants of proportionality. Examples include Newton’s First Law of Motion, Coulomb’s Law, and the definition of velocity as the instantaneous change in position.  In almost all cases, the system identifies a subset of base quantity kinds. The base set is chosen so that all other quantity kinds of interest can be derived from the base quantity kinds and the algebraic equations. If the unit system is explicitly associated with a quantity kind system, then the unit system must define at least one unit for each quantity kind.  From a scientific point of view, the division of quantities into base quantities and derived quantities is a matter of convention. */
    "SystemOfQuantityKinds": NamedNode<'http://qudt.org/schema/qudt/SystemOfQuantityKinds'>;
    /** A system of units is a set of units which are chosen as the reference scales for some set of quantity kinds together with the definitions of each unit. Units may be defined by experimental observation or by proportion to another unit not included in the system. If the unit system is explicitly associated with a quantity kind system, then the unit system must define at least one unit for each quantity kind. */
    "SystemOfUnits": NamedNode<'http://qudt.org/schema/qudt/SystemOfUnits'>;
    "Table-byRow": NamedNode<'http://qudt.org/schema/qudt/Table-byRow'>;
    "Table-columns": NamedNode<'http://qudt.org/schema/qudt/Table-columns'>;
    "TABLE-COMPOSITION-EXAMPLE-SUBTREE_1": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-EXAMPLE-SUBTREE_1'>;
    "TABLE-COMPOSITION-EXAMPLE-SUBTREE_2": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-EXAMPLE-SUBTREE_2'>;
    "TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_1": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_1'>;
    "TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_2": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_2'>;
    "TABLE-COMPOSTION-SUBTREE-LIST-EXAMPLE_1": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSTION-SUBTREE-LIST-EXAMPLE_1'>;
    "Table-dimensionality": NamedNode<'http://qudt.org/schema/qudt/Table-dimensionality'>;
    "Table-rows": NamedNode<'http://qudt.org/schema/qudt/Table-rows'>;
    "TABLE-TYPE_2x4": NamedNode<'http://qudt.org/schema/qudt/TABLE-TYPE_2x4'>;
    "Table": NamedNode<'http://qudt.org/schema/qudt/Table'>;
    /** A Table Type is a data type that specifies the properties of table data structures. A table is both a mode of visual communication and a means of arranging data. The use of tables is pervasive throughout NASA The precise conventions and terminology for describing tables varies depending on the context. Moreover, tables differ significantly in variety, structure, flexibility, notation, representation and use. */
    "TableType": NamedNode<'http://qudt.org/schema/qudt/TableType'>;
    "TaggedEnumeration-code": NamedNode<'http://qudt.org/schema/qudt/TaggedEnumeration-code'>;
    "TaggedEnumeration": NamedNode<'http://qudt.org/schema/qudt/TaggedEnumeration'>;
    "TechReport": NamedNode<'http://qudt.org/schema/qudt/TechReport'>;
    "Term": NamedNode<'http://qudt.org/schema/qudt/Term'>;
    "TextStringType": NamedNode<'http://qudt.org/schema/qudt/TextStringType'>;
    "Three-Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/Three-Tuple-elementType'>;
    "Three-Tuple-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Three-Tuple-elementTypeCount'>;
    "Three-Tuple": NamedNode<'http://qudt.org/schema/qudt/Three-Tuple'>;
    "ThreeBodyRotatingCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/ThreeBodyRotatingCoordinateSystem'>;
    "ThreeTupleType": NamedNode<'http://qudt.org/schema/qudt/ThreeTupleType'>;
    "TIME-SERIES-TABLE-A-2x4": NamedNode<'http://qudt.org/schema/qudt/TIME-SERIES-TABLE-A-2x4'>;
    "TIME-SERIES-TABLE-B-2x4": NamedNode<'http://qudt.org/schema/qudt/TIME-SERIES-TABLE-B-2x4'>;
    "Time-type": NamedNode<'http://qudt.org/schema/qudt/Time-type'>;
    /** The class of data values that denote a point in time. Time values may be encoded in a 12-hour clock or a 24-hour clock, such as 1:35 AM, or 13:35. */
    "Time": NamedNode<'http://qudt.org/schema/qudt/Time'>;
    "TIME": NamedNode<'http://qudt.org/schema/qudt/TIME'>;
    "timeDatatype": NamedNode<'http://qudt.org/schema/qudt/timeDatatype'>;
    "TimeDataType": NamedNode<'http://qudt.org/schema/qudt/TimeDataType'>;
    "TimeInterval-type": NamedNode<'http://qudt.org/schema/qudt/TimeInterval-type'>;
    /** A relative interval that is an increment in time. For example, this is used in time series arrays to express the time point of a vector of values. */
    "TimeInterval": NamedNode<'http://qudt.org/schema/qudt/TimeInterval'>;
    "TimeSeriesArray-dimensionVector": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray-dimensionVector'>;
    "TimeSeriesArray-incrementDatatype": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray-incrementDatatype'>;
    "TimeSeriesArray-vector": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray-vector'>;
    "TimeSeriesArray": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray'>;
    "TimeSeriesArrayType": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArrayType'>;
    "TimeStringType": NamedNode<'http://qudt.org/schema/qudt/TimeStringType'>;
    "totalDigits": NamedNode<'http://qudt.org/schema/qudt/totalDigits'>;
    "TotallyOrdered": NamedNode<'http://qudt.org/schema/qudt/TotallyOrdered'>;
    "TrajectoryCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/TrajectoryCoordinateSystem'>;
    "TransformType": NamedNode<'http://qudt.org/schema/qudt/TransformType'>;
    "Tree": NamedNode<'http://qudt.org/schema/qudt/Tree'>;
    "TreeListMember": NamedNode<'http://qudt.org/schema/qudt/TreeListMember'>;
    "TreeType": NamedNode<'http://qudt.org/schema/qudt/TreeType'>;
    "Triplet": NamedNode<'http://qudt.org/schema/qudt/Triplet'>;
    "True": NamedNode<'http://qudt.org/schema/qudt/True'>;
    "TRUE": NamedNode<'http://qudt.org/schema/qudt/TRUE'>;
    "Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/Tuple-elementType'>;
    "Tuple-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Tuple-elementTypeCount'>;
    "Tuple-length": NamedNode<'http://qudt.org/schema/qudt/Tuple-length'>;
    "Tuple": NamedNode<'http://qudt.org/schema/qudt/Tuple'>;
    "TupleMember-elementType": NamedNode<'http://qudt.org/schema/qudt/TupleMember-elementType'>;
    "TupleMember-orderInStructure": NamedNode<'http://qudt.org/schema/qudt/TupleMember-orderInStructure'>;
    "TupleMember": NamedNode<'http://qudt.org/schema/qudt/TupleMember'>;
    "TupleMemberType": NamedNode<'http://qudt.org/schema/qudt/TupleMemberType'>;
    "TupleType": NamedNode<'http://qudt.org/schema/qudt/TupleType'>;
    "Two-Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/Two-Tuple-elementType'>;
    "Two-Tuple-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Two-Tuple-elementTypeCount'>;
    "Two-Tuple": NamedNode<'http://qudt.org/schema/qudt/Two-Tuple'>;
    "TwoTupleType": NamedNode<'http://qudt.org/schema/qudt/TwoTupleType'>;
    /** A reference to the specification of the data type of a variable or constant. */
    "type": NamedNode<'http://qudt.org/schema/qudt/type'>;
    "TypeList": NamedNode<'http://qudt.org/schema/qudt/TypeList'>;
    "typeMatrix": NamedNode<'http://qudt.org/schema/qudt/typeMatrix'>;
    /** Members of this class are matrix data structures that describe the datatypes of a class of matrices. That is, the members of this class are matrices with cells that contain datatypes (c.f. type:Datatype) and are used to describe the datatype structure of other matrices. */
    "TypeMatrix": NamedNode<'http://qudt.org/schema/qudt/TypeMatrix'>;
    "TypeVector-objectValue": NamedNode<'http://qudt.org/schema/qudt/TypeVector-objectValue'>;
    "TypeVector-type": NamedNode<'http://qudt.org/schema/qudt/TypeVector-type'>;
    "TypeVector-typeVector": NamedNode<'http://qudt.org/schema/qudt/TypeVector-typeVector'>;
    "typeVector": NamedNode<'http://qudt.org/schema/qudt/typeVector'>;
    /** A Type Vector is a vector whose elements are data types. They are used, for instance, to specify the type of each component of a vector or class of vectors. A <em>Type Vector Type</em> is a further abstraction that specifies the structure of Type Vectors. */
    "TypeVector": NamedNode<'http://qudt.org/schema/qudt/TypeVector'>;
    "ucumCaseInsensitiveCode": NamedNode<'http://qudt.org/schema/qudt/ucumCaseInsensitiveCode'>;
    "ucumCaseSensitiveCode": NamedNode<'http://qudt.org/schema/qudt/ucumCaseSensitiveCode'>;
    /** Lexical pattern for the terminal symbols in the case-insensitive version of UCUM code */
    "UCUMci-term": NamedNode<'http://qudt.org/schema/qudt/UCUMci-term'>;
    /** Lexical pattern for the case-insensitive version of UCUM code */
    "UCUMci": NamedNode<'http://qudt.org/schema/qudt/UCUMci'>;
    "ucumCode": NamedNode<'http://qudt.org/schema/qudt/ucumCode'>;
    /** Lexical pattern for the terminal symbols in the case-sensitive version of UCUM code */
    "UCUMcs-term": NamedNode<'http://qudt.org/schema/qudt/UCUMcs-term'>;
    /** Lexical pattern for the case-sensitive version of UCUM code */
    "UCUMcs": NamedNode<'http://qudt.org/schema/qudt/UCUMcs'>;
    "udunitsCode": NamedNode<'http://qudt.org/schema/qudt/udunitsCode'>;
    "UNARY-FUNCTION": NamedNode<'http://qudt.org/schema/qudt/UNARY-FUNCTION'>;
    "uneceCommonCode": NamedNode<'http://qudt.org/schema/qudt/uneceCommonCode'>;
    "unit": NamedNode<'http://qudt.org/schema/qudt/unit'>;
    "Unit": NamedNode<'http://qudt.org/schema/qudt/Unit'>;
    "unitFor": NamedNode<'http://qudt.org/schema/qudt/unitFor'>;
    "unitOfSystem": NamedNode<'http://qudt.org/schema/qudt/unitOfSystem'>;
    "Unordered": NamedNode<'http://qudt.org/schema/qudt/Unordered'>;
    "Unpublished": NamedNode<'http://qudt.org/schema/qudt/Unpublished'>;
    "UNSIGNED-INTEGER": NamedNode<'http://qudt.org/schema/qudt/UNSIGNED-INTEGER'>;
    "UNSIGNED": NamedNode<'http://qudt.org/schema/qudt/UNSIGNED'>;
    "UnsignedBigIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType-abbreviation'>;
    "UnsignedBigIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType-maxInclusive'>;
    "UnsignedBigIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType-minInclusive'>;
    "UnsignedBigIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType'>;
    "UnsignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/UnsignedIntegerEncoding'>;
    "UnsignedIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedIntegerType'>;
    "UnsignedLongIntegerType-literal": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType-literal'>;
    "UnsignedLongIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType-maxInclusive'>;
    "UnsignedLongIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType-minInclusive'>;
    "UnsignedLongIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType'>;
    "UnsignedMediumIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedMediumIntegerType'>;
    "UnsignedShortIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType-abbreviation'>;
    "UnsignedShortIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType-maxInclusive'>;
    "UnsignedShortIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType-minInclusive'>;
    "UnsignedShortIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType'>;
    "UnsignedType-signedness": NamedNode<'http://qudt.org/schema/qudt/UnsignedType-signedness'>;
    "UnsignedType": NamedNode<'http://qudt.org/schema/qudt/UnsignedType'>;
    "UnsignedVariableLengthIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedVariableLengthIntegerType'>;
    "upperBound": NamedNode<'http://qudt.org/schema/qudt/upperBound'>;
    "url": NamedNode<'http://qudt.org/schema/qudt/url'>;
    /** Parameter is modifiable by a user. */
    "UserModifiableParameter": NamedNode<'http://qudt.org/schema/qudt/UserModifiableParameter'>;
    "UserQuantityKind": NamedNode<'http://qudt.org/schema/qudt/UserQuantityKind'>;
    "UTC-DATETIME": NamedNode<'http://qudt.org/schema/qudt/UTC-DATETIME'>;
    "UTC-DayTime": NamedNode<'http://qudt.org/schema/qudt/UTC-DayTime'>;
    "UTC-DAYTIME": NamedNode<'http://qudt.org/schema/qudt/UTC-DAYTIME'>;
    "UTF16-CHAR": NamedNode<'http://qudt.org/schema/qudt/UTF16-CHAR'>;
    "UTF16-STRING": NamedNode<'http://qudt.org/schema/qudt/UTF16-STRING'>;
    "UTF16-StringEncoding": NamedNode<'http://qudt.org/schema/qudt/UTF16-StringEncoding'>;
    "UTF8-CHAR": NamedNode<'http://qudt.org/schema/qudt/UTF8-CHAR'>;
    "UTF8-STRING": NamedNode<'http://qudt.org/schema/qudt/UTF8-STRING'>;
    "UTF8-StringEncoding": NamedNode<'http://qudt.org/schema/qudt/UTF8-StringEncoding'>;
    /** This property identifies the value associated with a data structure. The value may be a scalar or a reference to another object. The disjoint sub-properties of this data:value distinguish between scalar values and object references. */
    "value": NamedNode<'http://qudt.org/schema/qudt/value'>;
    "valueQuantity": NamedNode<'http://qudt.org/schema/qudt/valueQuantity'>;
    "valueRange": NamedNode<'http://qudt.org/schema/qudt/valueRange'>;
    "valueType": NamedNode<'http://qudt.org/schema/qudt/valueType'>;
    "valueUnion": NamedNode<'http://qudt.org/schema/qudt/valueUnion'>;
    /** A list of the values of elements in a Partial Array. */
    "valueVector": NamedNode<'http://qudt.org/schema/qudt/valueVector'>;
    "VariableIntervalTimeSeriesArray": NamedNode<'http://qudt.org/schema/qudt/VariableIntervalTimeSeriesArray'>;
    /** A Variable Interval Time Series Array Type is a data type that specifies the properties of arrays that hold time series data that has been sampled over non-uniformly spaced time intervals. A time series is a sequence of data points, measured typically at successive times, spaced at uniform or non-uniform time intervals. For variable interval time series, the successive time intervals may follow a repeating pattern, or may be completely random. */
    "VariableIntervalTimeSeriesArrayType": NamedNode<'http://qudt.org/schema/qudt/VariableIntervalTimeSeriesArrayType'>;
    "VariableLengthIntegerType-maxBits": NamedNode<'http://qudt.org/schema/qudt/VariableLengthIntegerType-maxBits'>;
    "VariableLengthIntegerType-minBits": NamedNode<'http://qudt.org/schema/qudt/VariableLengthIntegerType-minBits'>;
    "VariableLengthIntegerType": NamedNode<'http://qudt.org/schema/qudt/VariableLengthIntegerType'>;
    "vbName": NamedNode<'http://qudt.org/schema/qudt/vbName'>;
    "VECTOR_3D": NamedNode<'http://qudt.org/schema/qudt/VECTOR_3D'>;
    "Vector-dimension": NamedNode<'http://qudt.org/schema/qudt/Vector-dimension'>;
    "Vector-dimensionality": NamedNode<'http://qudt.org/schema/qudt/Vector-dimensionality'>;
    "Vector-referenceFrame": NamedNode<'http://qudt.org/schema/qudt/Vector-referenceFrame'>;
    "vector": NamedNode<'http://qudt.org/schema/qudt/vector'>;
    "Vector": NamedNode<'http://qudt.org/schema/qudt/Vector'>;
    "VECTOR": NamedNode<'http://qudt.org/schema/qudt/VECTOR'>;
    "VectorArray-vector": NamedNode<'http://qudt.org/schema/qudt/VectorArray-vector'>;
    "VectorArray": NamedNode<'http://qudt.org/schema/qudt/VectorArray'>;
    "VectorArrayType": NamedNode<'http://qudt.org/schema/qudt/VectorArrayType'>;
    "vectorMagnitude": NamedNode<'http://qudt.org/schema/qudt/vectorMagnitude'>;
    "VectorType": NamedNode<'http://qudt.org/schema/qudt/VectorType'>;
    "VehicleCoordinateSystem-pitchRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem-pitchRotationDefinition'>;
    "VehicleCoordinateSystem-rollRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem-rollRotationDefinition'>;
    "VehicleCoordinateSystem-yawRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem-yawRotationDefinition'>;
    "VehicleCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem'>;
    /** An aspect class that holds properties that provide external knowledge and specifications of a given resource. */
    "Verifiable": NamedNode<'http://qudt.org/schema/qudt/Verifiable'>;
    "visualCue": NamedNode<'http://qudt.org/schema/qudt/visualCue'>;
    "VisualCue": NamedNode<'http://qudt.org/schema/qudt/VisualCue'>;
    "VisualCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/VisualCueEnumeration-defaultValue'>;
    "visualCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/visualCueEnumeration'>;
    "WDST_DRY": NamedNode<'http://qudt.org/schema/qudt/WDST_DRY'>;
    "WDST_WET": NamedNode<'http://qudt.org/schema/qudt/WDST_WET'>;
    "WetDryStateType": NamedNode<'http://qudt.org/schema/qudt/WetDryStateType'>;
    "width": NamedNode<'http://qudt.org/schema/qudt/width'>;
    "Wikipedia": NamedNode<'http://qudt.org/schema/qudt/Wikipedia'>;
    "WordAligned": NamedNode<'http://qudt.org/schema/qudt/WordAligned'>;
    "xAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/xAxisDefinition'>;
    "xCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/xCoordinateDefinition'>;
    "yawRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/yawRotationDefinition'>;
    "yAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/yAxisDefinition'>;
    "yCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/yCoordinateDefinition'>;
    "YDT": NamedNode<'http://qudt.org/schema/qudt/YDT'>;
    "Yes": NamedNode<'http://qudt.org/schema/qudt/Yes'>;
    "YesNoType": NamedNode<'http://qudt.org/schema/qudt/YesNoType'>;
    "zAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/zAxisDefinition'>;
    "zCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/zCoordinateDefinition'>;
}

const builder = namespace("http://qudt.org/schema/qudt/") as any;
export const strict = builder as NamespaceBuilder<keyof Qudt> & Qudt;
export const loose = builder as NamespaceBuilder & Qudt;
