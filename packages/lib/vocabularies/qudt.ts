import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Qudt {
    '': NamedNode<'http://qudt.org/schema/qudt/'>;
    "AbstractDatatype": NamedNode<'http://qudt.org/schema/qudt/AbstractDatatype'>;
    "StructuredDatatype": NamedNode<'http://qudt.org/schema/qudt/StructuredDatatype'>;
    "AbstractQuantityKind": NamedNode<'http://qudt.org/schema/qudt/AbstractQuantityKind'>;
    /** The root class for all QUDT concepts. */
    "Concept": NamedNode<'http://qudt.org/schema/qudt/Concept'>;
    "AerospaceCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/AerospaceCoordinateSystem'>;
    "CoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem'>;
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
    "AlignmentType": NamedNode<'http://qudt.org/schema/qudt/AlignmentType'>;
    "EnumeratedValue": NamedNode<'http://qudt.org/schema/qudt/EnumeratedValue'>;
    "AngleUnit": NamedNode<'http://qudt.org/schema/qudt/AngleUnit'>;
    /** A Dimensionless Unit is a quantity for which all the exponents of the factors corresponding to the base quantities in its quantity dimension are zero. */
    "DimensionlessUnit": NamedNode<'http://qudt.org/schema/qudt/DimensionlessUnit'>;
    "Array": NamedNode<'http://qudt.org/schema/qudt/Array'>;
    "CompositeDatatype": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype'>;
    "ArrayDataOrderType": NamedNode<'http://qudt.org/schema/qudt/ArrayDataOrderType'>;
    "ArrayIndex-elementType": NamedNode<'http://qudt.org/schema/qudt/ArrayIndex-elementType'>;
    /** This property is used to relate a structured data type with the data type of the structured type's elements. It is used for homogeneous structured data types, that is, those whose elements that are all of the same type. */
    "elementType": NamedNode<'http://qudt.org/schema/qudt/elementType'>;
    "ArrayIndex": NamedNode<'http://qudt.org/schema/qudt/ArrayIndex'>;
    "Vector": NamedNode<'http://qudt.org/schema/qudt/Vector'>;
    "ArrayIndexType": NamedNode<'http://qudt.org/schema/qudt/ArrayIndexType'>;
    "VectorType": NamedNode<'http://qudt.org/schema/qudt/VectorType'>;
    "ArrayType-byRow": NamedNode<'http://qudt.org/schema/qudt/ArrayType-byRow'>;
    "byRow": NamedNode<'http://qudt.org/schema/qudt/byRow'>;
    "ArrayType-dataOrder": NamedNode<'http://qudt.org/schema/qudt/ArrayType-dataOrder'>;
    "dataOrder": NamedNode<'http://qudt.org/schema/qudt/dataOrder'>;
    "ArrayType-dimensionVector": NamedNode<'http://qudt.org/schema/qudt/ArrayType-dimensionVector'>;
    "DimensionVector": NamedNode<'http://qudt.org/schema/qudt/DimensionVector'>;
    "dimensionVector": NamedNode<'http://qudt.org/schema/qudt/dimensionVector'>;
    "ArrayType-dimensionality": NamedNode<'http://qudt.org/schema/qudt/ArrayType-dimensionality'>;
    "dimensionality": NamedNode<'http://qudt.org/schema/qudt/dimensionality'>;
    "ArrayType-typeMatrix": NamedNode<'http://qudt.org/schema/qudt/ArrayType-typeMatrix'>;
    "typeMatrix": NamedNode<'http://qudt.org/schema/qudt/typeMatrix'>;
    /**
     * <p>An <em>array type</em> is a type specification for ordered entries of values arranged according to the dimensions given. The dimensions are given as a list of integers where each integer is the cardinality of each dimension. The number of dimensions is specified in the attribute 'dimensionality'.</p>
     *
     * <p>Optionally a reference can be made to a variable, whose values are the array entries. The data type of the array entries is an optional field, 'elementType', which points to a data type definition. If the data type is given, then it applies to all elements.  If it is not given then the elements can be of different types for each position in the array.</p>
     *
     * <p>The property <em>qudt:typeMatrix</em> must refer to a matrix of types.  If a default value is given this can be used to place the appropriate value in a cell when an entry value is not known. If no dimensionality or dimension vector is specified the array is under-specified but still legitimate as a place-holder for a data type.</p>
     */
    "ArrayType": NamedNode<'http://qudt.org/schema/qudt/ArrayType'>;
    "Article": NamedNode<'http://qudt.org/schema/qudt/Article'>;
    "PubEnumeratedType": NamedNode<'http://qudt.org/schema/qudt/PubEnumeratedType'>;
    /** An aspect is an abstract type class that defines properties that can be reused. */
    "Aspect": NamedNode<'http://qudt.org/schema/qudt/Aspect'>;
    "AspectClass": NamedNode<'http://qudt.org/schema/qudt/AspectClass'>;
    "AssociativeArray": NamedNode<'http://qudt.org/schema/qudt/AssociativeArray'>;
    "Collection": NamedNode<'http://qudt.org/schema/qudt/Collection'>;
    "Map": NamedNode<'http://qudt.org/schema/qudt/Map'>;
    "AssociativeArrayType": NamedNode<'http://qudt.org/schema/qudt/AssociativeArrayType'>;
    "CollectionType": NamedNode<'http://qudt.org/schema/qudt/CollectionType'>;
    "MapType": NamedNode<'http://qudt.org/schema/qudt/MapType'>;
    "AuralCue-sound": NamedNode<'http://qudt.org/schema/qudt/AuralCue-sound'>;
    /** The intended use of the sound property is to be associated with modal enumerations */
    "sound": NamedNode<'http://qudt.org/schema/qudt/sound'>;
    /** An aural cue is a sound produced by a device or a system that is used to alert personnel of of an advisory, cautionary, warning, or emergency state. */
    "AuralCue": NamedNode<'http://qudt.org/schema/qudt/AuralCue'>;
    "ModalCue": NamedNode<'http://qudt.org/schema/qudt/ModalCue'>;
    "AuralCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/AuralCueEnumeration-defaultValue'>;
    "defaultValue": NamedNode<'http://qudt.org/schema/qudt/defaultValue'>;
    "AxialOrientationType": NamedNode<'http://qudt.org/schema/qudt/AxialOrientationType'>;
    "BOOLEAN": NamedNode<'http://qudt.org/schema/qudt/BOOLEAN'>;
    "ansiSQLName": NamedNode<'http://qudt.org/schema/qudt/ansiSQLName'>;
    "encoding": NamedNode<'http://qudt.org/schema/qudt/encoding'>;
    "BooleanEncoding": NamedNode<'http://qudt.org/schema/qudt/BooleanEncoding'>;
    "javaName": NamedNode<'http://qudt.org/schema/qudt/javaName'>;
    "jsName": NamedNode<'http://qudt.org/schema/qudt/jsName'>;
    "microsoftSQLServerName": NamedNode<'http://qudt.org/schema/qudt/microsoftSQLServerName'>;
    "mySQLName": NamedNode<'http://qudt.org/schema/qudt/mySQLName'>;
    "odbcName": NamedNode<'http://qudt.org/schema/qudt/odbcName'>;
    "oleDBName": NamedNode<'http://qudt.org/schema/qudt/oleDBName'>;
    "oracleSQLName": NamedNode<'http://qudt.org/schema/qudt/oracleSQLName'>;
    "protocolBuffersName": NamedNode<'http://qudt.org/schema/qudt/protocolBuffersName'>;
    "pythonName": NamedNode<'http://qudt.org/schema/qudt/pythonName'>;
    "rdfsDatatype": NamedNode<'http://qudt.org/schema/qudt/rdfsDatatype'>;
    "BooleanType": NamedNode<'http://qudt.org/schema/qudt/BooleanType'>;
    "BYTE": NamedNode<'http://qudt.org/schema/qudt/BYTE'>;
    "abbreviation": NamedNode<'http://qudt.org/schema/qudt/abbreviation'>;
    /** Datatype name in the C programming language */
    "cName": NamedNode<'http://qudt.org/schema/qudt/cName'>;
    "OctetEncoding": NamedNode<'http://qudt.org/schema/qudt/OctetEncoding'>;
    "maxInclusive": NamedNode<'http://qudt.org/schema/qudt/maxInclusive'>;
    "minInclusive": NamedNode<'http://qudt.org/schema/qudt/minInclusive'>;
    "octets": NamedNode<'http://qudt.org/schema/qudt/octets'>;
    "signedness": NamedNode<'http://qudt.org/schema/qudt/signedness'>;
    "SIGNED": NamedNode<'http://qudt.org/schema/qudt/SIGNED'>;
    "SignedShortIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedShortIntegerType'>;
    "BalancedTree-maxDepth": NamedNode<'http://qudt.org/schema/qudt/BalancedTree-maxDepth'>;
    "maxDepth": NamedNode<'http://qudt.org/schema/qudt/maxDepth'>;
    "BalancedTree": NamedNode<'http://qudt.org/schema/qudt/BalancedTree'>;
    "Tree": NamedNode<'http://qudt.org/schema/qudt/Tree'>;
    "BalancedTreeType": NamedNode<'http://qudt.org/schema/qudt/BalancedTreeType'>;
    "TreeType": NamedNode<'http://qudt.org/schema/qudt/TreeType'>;
    /**
     * <p class="lm-para">A <em>Dimension</em> expresses a magnitude for a base quantiy kind such as mass, length and time.</p>
     * <p class="lm-para">DEPRECATED - each exponent is expressed as a property. Keep until a validaiton of this has been done.</p>
     */
    "BaseDimensionMagnitude": NamedNode<'http://qudt.org/schema/qudt/BaseDimensionMagnitude'>;
    "informativeReference": NamedNode<'http://qudt.org/schema/qudt/informativeReference'>;
    "BigEndian": NamedNode<'http://qudt.org/schema/qudt/BigEndian'>;
    "EndianType": NamedNode<'http://qudt.org/schema/qudt/EndianType'>;
    "BigIntegerType-octets": NamedNode<'http://qudt.org/schema/qudt/BigIntegerType-octets'>;
    "IntegerUnionList": NamedNode<'http://qudt.org/schema/qudt/IntegerUnionList'>;
    "BigIntegerType": NamedNode<'http://qudt.org/schema/qudt/BigIntegerType'>;
    "IntegerDatatype": NamedNode<'http://qudt.org/schema/qudt/IntegerDatatype'>;
    /** A <em>Binary Prefix</em> is a prefix for multiples of units in data processing, data transmission, and digital information, notably the bit and the byte, to indicate multiplication by a power of 2. */
    "BinaryPrefix": NamedNode<'http://qudt.org/schema/qudt/BinaryPrefix'>;
    "Prefix": NamedNode<'http://qudt.org/schema/qudt/Prefix'>;
    "BinaryTree": NamedNode<'http://qudt.org/schema/qudt/BinaryTree'>;
    "BinaryTreeType": NamedNode<'http://qudt.org/schema/qudt/BinaryTreeType'>;
    "BitAligned": NamedNode<'http://qudt.org/schema/qudt/BitAligned'>;
    "BitEncoding": NamedNode<'http://qudt.org/schema/qudt/BitEncoding'>;
    "bits": NamedNode<'http://qudt.org/schema/qudt/bits'>;
    "BitEncodingType": NamedNode<'http://qudt.org/schema/qudt/BitEncodingType'>;
    "Encoding": NamedNode<'http://qudt.org/schema/qudt/Encoding'>;
    "BitField01": NamedNode<'http://qudt.org/schema/qudt/BitField01'>;
    "BitFieldType": NamedNode<'http://qudt.org/schema/qudt/BitFieldType'>;
    "BitField02": NamedNode<'http://qudt.org/schema/qudt/BitField02'>;
    "BitField03": NamedNode<'http://qudt.org/schema/qudt/BitField03'>;
    "BitField04": NamedNode<'http://qudt.org/schema/qudt/BitField04'>;
    "BitField05": NamedNode<'http://qudt.org/schema/qudt/BitField05'>;
    "BitField06": NamedNode<'http://qudt.org/schema/qudt/BitField06'>;
    "BitField07": NamedNode<'http://qudt.org/schema/qudt/BitField07'>;
    "BitField08": NamedNode<'http://qudt.org/schema/qudt/BitField08'>;
    "BitField09": NamedNode<'http://qudt.org/schema/qudt/BitField09'>;
    "BitField10": NamedNode<'http://qudt.org/schema/qudt/BitField10'>;
    "bitOrder": NamedNode<'http://qudt.org/schema/qudt/bitOrder'>;
    "byteOrder": NamedNode<'http://qudt.org/schema/qudt/byteOrder'>;
    "BitField": NamedNode<'http://qudt.org/schema/qudt/BitField'>;
    "BitField11": NamedNode<'http://qudt.org/schema/qudt/BitField11'>;
    "BitField12": NamedNode<'http://qudt.org/schema/qudt/BitField12'>;
    "BitFieldType-encodedValue": NamedNode<'http://qudt.org/schema/qudt/BitFieldType-encodedValue'>;
    "encodedValue": NamedNode<'http://qudt.org/schema/qudt/encodedValue'>;
    "ScalarDatatype": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype'>;
    "Book": NamedNode<'http://qudt.org/schema/qudt/Book'>;
    "Booklet": NamedNode<'http://qudt.org/schema/qudt/Booklet'>;
    "BooleanEncodingType": NamedNode<'http://qudt.org/schema/qudt/BooleanEncodingType'>;
    "BooleanType-encoding": NamedNode<'http://qudt.org/schema/qudt/BooleanType-encoding'>;
    "OrdinalType": NamedNode<'http://qudt.org/schema/qudt/OrdinalType'>;
    "BooleanTypeEnumeratedValue": NamedNode<'http://qudt.org/schema/qudt/BooleanTypeEnumeratedValue'>;
    "ByColumn": NamedNode<'http://qudt.org/schema/qudt/ByColumn'>;
    "ByLeftMostIndex": NamedNode<'http://qudt.org/schema/qudt/ByLeftMostIndex'>;
    "ByRow": NamedNode<'http://qudt.org/schema/qudt/ByRow'>;
    "ByteAligned": NamedNode<'http://qudt.org/schema/qudt/ByteAligned'>;
    "ByteEncodingType": NamedNode<'http://qudt.org/schema/qudt/ByteEncodingType'>;
    "CCT_EarthCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_EarthCentered'>;
    "CoordinateCenterType": NamedNode<'http://qudt.org/schema/qudt/CoordinateCenterType'>;
    "CCT_MarsCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_MarsCentered'>;
    "CCT_MoonCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_MoonCentered'>;
    "CCT_SunCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_SunCentered'>;
    "CCT_VehicleCentered": NamedNode<'http://qudt.org/schema/qudt/CCT_VehicleCentered'>;
    "CFN_ConcatenateMatrixRows": NamedNode<'http://qudt.org/schema/qudt/CFN_ConcatenateMatrixRows'>;
    "CompositionFunction": NamedNode<'http://qudt.org/schema/qudt/CompositionFunction'>;
    "COLOR_AMBER": NamedNode<'http://qudt.org/schema/qudt/COLOR_AMBER'>;
    "literal": NamedNode<'http://qudt.org/schema/qudt/literal'>;
    "rgbCode": NamedNode<'http://qudt.org/schema/qudt/rgbCode'>;
    /** A visual cue that uses color to distinguish it from other cues. Each color cue has exactly one corresponding coordinate point in the RGB space. */
    "ColorCue": NamedNode<'http://qudt.org/schema/qudt/ColorCue'>;
    "COLOR_GREEN": NamedNode<'http://qudt.org/schema/qudt/COLOR_GREEN'>;
    "COLOR_ORANGE": NamedNode<'http://qudt.org/schema/qudt/COLOR_ORANGE'>;
    "COLOR_RED": NamedNode<'http://qudt.org/schema/qudt/COLOR_RED'>;
    "COLOR_YELLOW": NamedNode<'http://qudt.org/schema/qudt/COLOR_YELLOW'>;
    "CRC32": NamedNode<'http://qudt.org/schema/qudt/CRC32'>;
    "CT_COUNTABLY-INFINITE": NamedNode<'http://qudt.org/schema/qudt/CT_COUNTABLY-INFINITE'>;
    "CardinalityType": NamedNode<'http://qudt.org/schema/qudt/CardinalityType'>;
    "CT_FINITE": NamedNode<'http://qudt.org/schema/qudt/CT_FINITE'>;
    "CT_UNCOUNTABLE": NamedNode<'http://qudt.org/schema/qudt/CT_UNCOUNTABLE'>;
    "plainTextDescription": NamedNode<'http://qudt.org/schema/qudt/plainTextDescription'>;
    "CartesianCoordinates": NamedNode<'http://qudt.org/schema/qudt/CartesianCoordinates'>;
    "Coordinates": NamedNode<'http://qudt.org/schema/qudt/Coordinates'>;
    "CartesianCoordinatesType": NamedNode<'http://qudt.org/schema/qudt/CartesianCoordinatesType'>;
    "CharEncoding": NamedNode<'http://qudt.org/schema/qudt/CharEncoding'>;
    "bytes": NamedNode<'http://qudt.org/schema/qudt/bytes'>;
    "CharEncodingType": NamedNode<'http://qudt.org/schema/qudt/CharEncodingType'>;
    "CharacterType": NamedNode<'http://qudt.org/schema/qudt/CharacterType'>;
    /** Provides a simple way of making citations. */
    "Citation": NamedNode<'http://qudt.org/schema/qudt/Citation'>;
    "ColorCue-rgbCode": NamedNode<'http://qudt.org/schema/qudt/ColorCue-rgbCode'>;
    "VisualCue": NamedNode<'http://qudt.org/schema/qudt/VisualCue'>;
    "Comment": NamedNode<'http://qudt.org/schema/qudt/Comment'>;
    /** An aspect class that holds properties that provide external knowledge and specifications of a given resource. */
    "Verifiable": NamedNode<'http://qudt.org/schema/qudt/Verifiable'>;
    "CompositeDataStructure-dataElement": NamedNode<'http://qudt.org/schema/qudt/CompositeDataStructure-dataElement'>;
    /** A field is a tuple that carries a name, a type and optionally other properties that characterize a member element of a composite data strucuture. */
    "DataSetElement": NamedNode<'http://qudt.org/schema/qudt/DataSetElement'>;
    "field": NamedNode<'http://qudt.org/schema/qudt/field'>;
    /** 'Composite Data Structure', also referred to as 'Data Record' is a datatype that aggregates element of possibly different types. The aggregated items are called fields or members and are usually identified or indexed by field labels. */
    "CompositeDataStructure": NamedNode<'http://qudt.org/schema/qudt/CompositeDataStructure'>;
    "CompositeDatatype-alignment": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype-alignment'>;
    "alignment": NamedNode<'http://qudt.org/schema/qudt/alignment'>;
    "CompositeDatatype-elementType": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype-elementType'>;
    "Datatype": NamedNode<'http://qudt.org/schema/qudt/Datatype'>;
    "CompositeDatatype-padding": NamedNode<'http://qudt.org/schema/qudt/CompositeDatatype-padding'>;
    "PaddingType": NamedNode<'http://qudt.org/schema/qudt/PaddingType'>;
    "padding": NamedNode<'http://qudt.org/schema/qudt/padding'>;
    "CompositeTable": NamedNode<'http://qudt.org/schema/qudt/CompositeTable'>;
    "Table": NamedNode<'http://qudt.org/schema/qudt/Table'>;
    "Function": NamedNode<'http://qudt.org/schema/qudt/Function'>;
    "CompositionTreeType-compositionFunction": NamedNode<'http://qudt.org/schema/qudt/CompositionTreeType-compositionFunction'>;
    "CompositionTreeType": NamedNode<'http://qudt.org/schema/qudt/CompositionTreeType'>;
    "Conference": NamedNode<'http://qudt.org/schema/qudt/Conference'>;
    /** Used to specify the values of a constant. */
    "ConstantValue": NamedNode<'http://qudt.org/schema/qudt/ConstantValue'>;
    /** A <i>Quantity Value</i> expresses the magnitude and kind of a quantity and is given by the product of a numerical value <code>n</code> and a unit of measure <code>U</code>. The number multiplying the unit is referred to as the numerical value of the quantity expressed in that unit. Refer to <a href="http://physics.nist.gov/Pubs/SP811/sec07.html">NIST SP 811 section 7</a> for more on quantity values. */
    "QuantityValue": NamedNode<'http://qudt.org/schema/qudt/QuantityValue'>;
    "Container-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Container-elementTypeCount'>;
    "elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/elementTypeCount'>;
    "Container": NamedNode<'http://qudt.org/schema/qudt/Container'>;
    /** A nominal scale differentiates between items or subjects based only on their names or (meta-)categories and other qualitative classifications they belong to; thus dichotomous data involves the construction of classifications as well as the classification of items. Discovery of an exception to a classification can be viewed as progress. Numbers may be used to represent the variables but the numbers do not have numerical value or relationship: For example, a Globally unique identifier. Examples of these classifications include gender, nationality, ethnicity, language, genre, style, biological species, and form. In a university one could also use hall of affiliation as an example. */
    "NominalScale": NamedNode<'http://qudt.org/schema/qudt/NominalScale'>;
    "CoordinateMember": NamedNode<'http://qudt.org/schema/qudt/CoordinateMember'>;
    "TupleMember": NamedNode<'http://qudt.org/schema/qudt/TupleMember'>;
    "TupleMemberType": NamedNode<'http://qudt.org/schema/qudt/TupleMemberType'>;
    "CoordinateSystem-abbreviation": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-abbreviation'>;
    "CoordinateSystem-acronym": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-acronym'>;
    "CoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-coordinateCenter'>;
    "coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/coordinateCenter'>;
    "CoordinateSystem-referenceFrame": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystem-referenceFrame'>;
    "ReferenceFrame": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame'>;
    "referenceFrame": NamedNode<'http://qudt.org/schema/qudt/referenceFrame'>;
    "CoordinateSystemFrame": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystemFrame'>;
    "CoordinateSystemType-originDefinition": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystemType-originDefinition'>;
    "originDefinition": NamedNode<'http://qudt.org/schema/qudt/originDefinition'>;
    /**
     * <p>A coordinate system is a mathematical structure for assigning a unique n-tuple of numbers or scalars to each point in an n-dimensional space. A Coordinate System Type is a data type that defines the properties of data structures that represent coordinate systems.</p>
     *
     * <p>The primary attributes of any coordinate system are the coordinate frame or orientation of the axes of the coordinate system and the coordinate center or origin of the coordinate system. The coordinate center is the easier of the two attributes to define and in trajectory-related coordinate systems is often taken to be the center of mass of natural solar system bodies such as the Earth, the Moon, or Mars. Precise definition of the coordinate frame, however, usually takes much more effort. As a result, the primary purpose of this section is to provide a detailed description of a number of different coordinate frames commonly used in lunar and Mars mission analysis. </p>
     */
    "CoordinateSystemType": NamedNode<'http://qudt.org/schema/qudt/CoordinateSystemType'>;
    "TupleType": NamedNode<'http://qudt.org/schema/qudt/TupleType'>;
    "Coordinates-elementType": NamedNode<'http://qudt.org/schema/qudt/Coordinates-elementType'>;
    "Coordinates-2D-DoublePrecision-Double_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-DoublePrecision-Double_X'>;
    "Coordinates-2D-DoublePrecision-Double_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-DoublePrecision-Double_Y'>;
    "Coordinates-2D-DoublePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-DoublePrecision'>;
    "Coordinates-2D-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-Type'>;
    "Coordinates-2D": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D'>;
    "Coordinates-2D-SinglePrecision-float_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-SinglePrecision-float_X'>;
    "float_X": NamedNode<'http://qudt.org/schema/qudt/float_X'>;
    "Coordinates-2D-SinglePrecision-float_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-SinglePrecision-float_Y'>;
    "float_Y": NamedNode<'http://qudt.org/schema/qudt/float_Y'>;
    "Coordinates-2D-SinglePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-2D-SinglePrecision'>;
    "TwoTupleType": NamedNode<'http://qudt.org/schema/qudt/TwoTupleType'>;
    "Two-Tuple": NamedNode<'http://qudt.org/schema/qudt/Two-Tuple'>;
    "Coordinates-3D-DoublePrecision-Double_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Double_X'>;
    "Coordinates-3D-DoublePrecision-Double_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Double_Y'>;
    "Coordinates-3D-DoublePrecision-Double_Z": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Double_Z'>;
    "Coordinates-3D-DoublePrecision-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision-Type'>;
    "Coordinates-3D-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-Type'>;
    "Coordinates-3D-DoublePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-DoublePrecision'>;
    "Coordinates-3D": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D'>;
    "Coordinates-3D-SinglePrecision-Type": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-Type'>;
    "Coordinates-3D-SinglePrecision-float_X": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-float_X'>;
    "Coordinates-3D-SinglePrecision-float_Y": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-float_Y'>;
    "Coordinates-3D-SinglePrecision-float_Z": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision-float_Z'>;
    "float_Z": NamedNode<'http://qudt.org/schema/qudt/float_Z'>;
    "Coordinates-3D-SinglePrecision": NamedNode<'http://qudt.org/schema/qudt/Coordinates-3D-SinglePrecision'>;
    "ThreeTupleType": NamedNode<'http://qudt.org/schema/qudt/ThreeTupleType'>;
    "Three-Tuple": NamedNode<'http://qudt.org/schema/qudt/Three-Tuple'>;
    "Tuple": NamedNode<'http://qudt.org/schema/qudt/Tuple'>;
    /** Used for all units that express counts. Examples are Atomic Number, Number, Number per Year, Percent and Sample per Second. */
    "CountingUnit": NamedNode<'http://qudt.org/schema/qudt/CountingUnit'>;
    /** Currency Units have their own subclass of unit because: (a) they have additonal properites such as 'country' and (b) their URIs do not conform to the same rules as other units. */
    "CurrencyUnit": NamedNode<'http://qudt.org/schema/qudt/CurrencyUnit'>;
    "DATE": NamedNode<'http://qudt.org/schema/qudt/DATE'>;
    "encodingDescription": NamedNode<'http://qudt.org/schema/qudt/encodingDescription'>;
    "DateStringType": NamedNode<'http://qudt.org/schema/qudt/DateStringType'>;
    "DATETIME": NamedNode<'http://qudt.org/schema/qudt/DATETIME'>;
    "UTC-DATETIME": NamedNode<'http://qudt.org/schema/qudt/UTC-DATETIME'>;
    "DECIMAL": NamedNode<'http://qudt.org/schema/qudt/DECIMAL'>;
    "NumericType": NamedNode<'http://qudt.org/schema/qudt/NumericType'>;
    "DV_2x4": NamedNode<'http://qudt.org/schema/qudt/DV_2x4'>;
    "DV_4x4": NamedNode<'http://qudt.org/schema/qudt/DV_4x4'>;
    "DataElement-type": NamedNode<'http://qudt.org/schema/qudt/DataElement-type'>;
    "dataType": NamedNode<'http://qudt.org/schema/qudt/dataType'>;
    /** <p><em>Data Encoding</em> expresses the properties that specify how data is represented at the bit and byte level. These properties are applicable to describing raw data.</p> */
    "DataEncoding": NamedNode<'http://qudt.org/schema/qudt/DataEncoding'>;
    "DataSetElement-elementLabel": NamedNode<'http://qudt.org/schema/qudt/DataSetElement-elementLabel'>;
    "elementLabel": NamedNode<'http://qudt.org/schema/qudt/elementLabel'>;
    "DataSetElement-optional": NamedNode<'http://qudt.org/schema/qudt/DataSetElement-optional'>;
    "optional": NamedNode<'http://qudt.org/schema/qudt/optional'>;
    "DataSetElement-quantityKind": NamedNode<'http://qudt.org/schema/qudt/DataSetElement-quantityKind'>;
    /** A <b>Quantity Kind</b> is any observable property that can be  measured and quantified numerically. Familiar examples include physical properties such as length, mass, time, force, energy, power, electric charge, etc. Less familiar examples include currency, interest rate, price to earning ratio, and information capacity. */
    "QuantityKind": NamedNode<'http://qudt.org/schema/qudt/QuantityKind'>;
    "hasQuantityKind": NamedNode<'http://qudt.org/schema/qudt/hasQuantityKind'>;
    "Datatype-ansiSQLName": NamedNode<'http://qudt.org/schema/qudt/Datatype-ansiSQLName'>;
    "Datatype-basis": NamedNode<'http://qudt.org/schema/qudt/Datatype-basis'>;
    "basis": NamedNode<'http://qudt.org/schema/qudt/basis'>;
    "Datatype-bounded": NamedNode<'http://qudt.org/schema/qudt/Datatype-bounded'>;
    "bounded": NamedNode<'http://qudt.org/schema/qudt/bounded'>;
    "Datatype-cName": NamedNode<'http://qudt.org/schema/qudt/Datatype-cName'>;
    "Datatype-cardinality": NamedNode<'http://qudt.org/schema/qudt/Datatype-cardinality'>;
    "cardinality": NamedNode<'http://qudt.org/schema/qudt/cardinality'>;
    "Datatype-description": NamedNode<'http://qudt.org/schema/qudt/Datatype-description'>;
    "Datatype-id": NamedNode<'http://qudt.org/schema/qudt/Datatype-id'>;
    "id": NamedNode<'http://qudt.org/schema/qudt/id'>;
    "Datatype-javaName": NamedNode<'http://qudt.org/schema/qudt/Datatype-javaName'>;
    "Datatype-jsName": NamedNode<'http://qudt.org/schema/qudt/Datatype-jsName'>;
    "Datatype-matlabName": NamedNode<'http://qudt.org/schema/qudt/Datatype-matlabName'>;
    "matlabName": NamedNode<'http://qudt.org/schema/qudt/matlabName'>;
    "Datatype-microsoftSQLServerName": NamedNode<'http://qudt.org/schema/qudt/Datatype-microsoftSQLServerName'>;
    "Datatype-mySQLName": NamedNode<'http://qudt.org/schema/qudt/Datatype-mySQLName'>;
    "Datatype-odbcName": NamedNode<'http://qudt.org/schema/qudt/Datatype-odbcName'>;
    "Datatype-oleDBName": NamedNode<'http://qudt.org/schema/qudt/Datatype-oleDBName'>;
    "Datatype-oracleSQLName": NamedNode<'http://qudt.org/schema/qudt/Datatype-oracleSQLName'>;
    "Datatype-protocolBuffersName": NamedNode<'http://qudt.org/schema/qudt/Datatype-protocolBuffersName'>;
    "Datatype-pythonName": NamedNode<'http://qudt.org/schema/qudt/Datatype-pythonName'>;
    "Datatype-vbName": NamedNode<'http://qudt.org/schema/qudt/Datatype-vbName'>;
    "vbName": NamedNode<'http://qudt.org/schema/qudt/vbName'>;
    "DateTimeStringType": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringType'>;
    "DateTimeStringEncodingType-allowedPattern": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringEncodingType-allowedPattern'>;
    "allowedPattern": NamedNode<'http://qudt.org/schema/qudt/allowedPattern'>;
    "DateTimeStringEncodingType": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringEncodingType'>;
    "StringEncodingType": NamedNode<'http://qudt.org/schema/qudt/StringEncodingType'>;
    "DateTimeStringType-encoding": NamedNode<'http://qudt.org/schema/qudt/DateTimeStringType-encoding'>;
    "StringType": NamedNode<'http://qudt.org/schema/qudt/StringType'>;
    /** A <em>Decimal Prefix</em> is a prefix for multiples of units that are powers of 10. */
    "DecimalPrefix": NamedNode<'http://qudt.org/schema/qudt/DecimalPrefix'>;
    "DecimalScaledUnit": NamedNode<'http://qudt.org/schema/qudt/DecimalScaledUnit'>;
    "DerivedCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/DerivedCoherentUnit'>;
    "DerivedNonCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/DerivedNonCoherentUnit'>;
    /** A DerivedUnit is a type specification for units that are derived from other units. */
    "DerivedUnit": NamedNode<'http://qudt.org/schema/qudt/DerivedUnit'>;
    "dbpediaMatch": NamedNode<'http://qudt.org/schema/qudt/dbpediaMatch'>;
    "Unit": NamedNode<'http://qudt.org/schema/qudt/Unit'>;
    "Dictionary": NamedNode<'http://qudt.org/schema/qudt/Dictionary'>;
    "DictionaryType": NamedNode<'http://qudt.org/schema/qudt/DictionaryType'>;
    "DimensionalDatatype": NamedNode<'http://qudt.org/schema/qudt/DimensionalDatatype'>;
    "Discipline": NamedNode<'http://qudt.org/schema/qudt/Discipline'>;
    "DiscreteState": NamedNode<'http://qudt.org/schema/qudt/DiscreteState'>;
    "DoublePrecisionEncoding": NamedNode<'http://qudt.org/schema/qudt/DoublePrecisionEncoding'>;
    "FloatingPointEncodingType": NamedNode<'http://qudt.org/schema/qudt/FloatingPointEncodingType'>;
    "DoublePrecisionType": NamedNode<'http://qudt.org/schema/qudt/DoublePrecisionType'>;
    "SinglePrecisionType": NamedNode<'http://qudt.org/schema/qudt/SinglePrecisionType'>;
    "EarthCoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/EarthCoordinateSystem-coordinateCenter'>;
    "EarthCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/EarthCoordinateSystem'>;
    "TrajectoryCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/TrajectoryCoordinateSystem'>;
    "Encoding-bits": NamedNode<'http://qudt.org/schema/qudt/Encoding-bits'>;
    "Encoding-bytes": NamedNode<'http://qudt.org/schema/qudt/Encoding-bytes'>;
    "EngineeringValueTupleMember-elementType": NamedNode<'http://qudt.org/schema/qudt/EngineeringValueTupleMember-elementType'>;
    "RealSinglePrecisionType": NamedNode<'http://qudt.org/schema/qudt/RealSinglePrecisionType'>;
    "EngineeringValueTupleMember": NamedNode<'http://qudt.org/schema/qudt/EngineeringValueTupleMember'>;
    "RawValueTupleMember": NamedNode<'http://qudt.org/schema/qudt/RawValueTupleMember'>;
    "RawValueTupleMemberType": NamedNode<'http://qudt.org/schema/qudt/RawValueTupleMemberType'>;
    "EnumeratedQuantity": NamedNode<'http://qudt.org/schema/qudt/EnumeratedQuantity'>;
    "Enumeration-bits": NamedNode<'http://qudt.org/schema/qudt/Enumeration-bits'>;
    "Enumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/Enumeration-defaultValue'>;
    "Enumeration-encoding": NamedNode<'http://qudt.org/schema/qudt/Enumeration-encoding'>;
    "Enumeration-value": NamedNode<'http://qudt.org/schema/qudt/Enumeration-value'>;
    /**
     * <p>An enumeration is a set of literals from which a single value is selected. Each literal can have a tag as an integer within a standard encoding appropriate to the range of integer values. Consistency of enumeration types will allow them, and the enumerated values, to be referred to unambiguously either through symbolic name or encoding. Enumerated values are also controlled vocabularies and as such need to be standardized. Without this consistency enumeration literals can be stated differently and result in  data conflicts and misinterpretations.</p>
     *
     * <p>The tags are a set of positive whole numbers, not necessarily contiguous and having no numerical significance, each corresponding to the associated literal identifier. An order attribute can also be given on the enumeration elements. An enumeration can itself be a member of an enumeration. This allows enumerations to be enumerated in a selection. Enumerations are also subclasses of <em>Scalar Datatype</em>. This allows them to be used as the reference of a datatype specification.</p>
     */
    "Enumeration": NamedNode<'http://qudt.org/schema/qudt/Enumeration'>;
    "EnumerationScale": NamedNode<'http://qudt.org/schema/qudt/EnumerationScale'>;
    /** Scales (also called "scales of measurement" or "levels of measurement")  are expressions that typically refer to the theory of scale types. */
    "Scale": NamedNode<'http://qudt.org/schema/qudt/Scale'>;
    "FALSE": NamedNode<'http://qudt.org/schema/qudt/FALSE'>;
    "FLAG": NamedNode<'http://qudt.org/schema/qudt/FLAG'>;
    "FT_INERTIAL": NamedNode<'http://qudt.org/schema/qudt/FT_INERTIAL'>;
    "FrameType": NamedNode<'http://qudt.org/schema/qudt/FrameType'>;
    "FT_NON-ROTATING": NamedNode<'http://qudt.org/schema/qudt/FT_NON-ROTATING'>;
    "FT_ROTATING": NamedNode<'http://qudt.org/schema/qudt/FT_ROTATING'>;
    "FieldType-elementName": NamedNode<'http://qudt.org/schema/qudt/FieldType-elementName'>;
    "elementName": NamedNode<'http://qudt.org/schema/qudt/elementName'>;
    "FieldType-elementType": NamedNode<'http://qudt.org/schema/qudt/FieldType-elementType'>;
    "FieldType-fieldLabel": NamedNode<'http://qudt.org/schema/qudt/FieldType-fieldLabel'>;
    "FieldType-fieldType": NamedNode<'http://qudt.org/schema/qudt/FieldType-fieldType'>;
    "FieldType-optional": NamedNode<'http://qudt.org/schema/qudt/FieldType-optional'>;
    "FieldType": NamedNode<'http://qudt.org/schema/qudt/FieldType'>;
    "Figure": NamedNode<'http://qudt.org/schema/qudt/Figure'>;
    "FileFormat": NamedNode<'http://qudt.org/schema/qudt/FileFormat'>;
    "FixedIntervalTimeSeriesArray": NamedNode<'http://qudt.org/schema/qudt/FixedIntervalTimeSeriesArray'>;
    "TimeSeriesArray": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray'>;
    "FixedIntervalTimeSeriesArrayType": NamedNode<'http://qudt.org/schema/qudt/FixedIntervalTimeSeriesArrayType'>;
    "TimeSeriesArrayType": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArrayType'>;
    "FunctionDatatype-argType": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype-argType'>;
    "argType": NamedNode<'http://qudt.org/schema/qudt/argType'>;
    "FunctionDatatype-functionArity": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype-functionArity'>;
    "functionArity": NamedNode<'http://qudt.org/schema/qudt/functionArity'>;
    "FunctionDatatype-returnType": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype-returnType'>;
    "returnType": NamedNode<'http://qudt.org/schema/qudt/returnType'>;
    "FunctionDatatype": NamedNode<'http://qudt.org/schema/qudt/FunctionDatatype'>;
    "Graph": NamedNode<'http://qudt.org/schema/qudt/Graph'>;
    "GraphType": NamedNode<'http://qudt.org/schema/qudt/GraphType'>;
    "GreekCharacter": NamedNode<'http://qudt.org/schema/qudt/GreekCharacter'>;
    "GroundCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/GroundCoordinateSystem'>;
    "HEAP": NamedNode<'http://qudt.org/schema/qudt/HEAP'>;
    /** A heap is a specialized tree-based data structure that satisfies the condition: if B is a child node of A, then <em>key(A) &gt; key(B)</em>. This implies that an element with the greatest key is always in the root node, and so such a heap is sometimes called a max heap. Alternatively, if the comparison is reversed, the smallest element is always in the root node, which results in a min heap. The function or method that implements the key() operator is specified by the heap type. */
    "HeapType": NamedNode<'http://qudt.org/schema/qudt/HeapType'>;
    "HEXBINARY": NamedNode<'http://qudt.org/schema/qudt/HEXBINARY'>;
    "hexbinary": NamedNode<'http://qudt.org/schema/qudt/hexbinary'>;
    "HexBinaryType": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType'>;
    "HashTable": NamedNode<'http://qudt.org/schema/qudt/HashTable'>;
    /** A Table Type is a data type that specifies the properties of table data structures. A table is both a mode of visual communication and a means of arranging data. The use of tables is pervasive throughout NASA The precise conventions and terminology for describing tables varies depending on the context. Moreover, tables differ significantly in variety, structure, flexibility, notation, representation and use. */
    "TableType": NamedNode<'http://qudt.org/schema/qudt/TableType'>;
    "HashTableType": NamedNode<'http://qudt.org/schema/qudt/HashTableType'>;
    "Heap": NamedNode<'http://qudt.org/schema/qudt/Heap'>;
    "OrderedTree": NamedNode<'http://qudt.org/schema/qudt/OrderedTree'>;
    "OrderedTreeType": NamedNode<'http://qudt.org/schema/qudt/OrderedTreeType'>;
    "HexBinaryType-length": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-length'>;
    "length": NamedNode<'http://qudt.org/schema/qudt/length'>;
    "HexBinaryType-maxLength": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-maxLength'>;
    "maxLength": NamedNode<'http://qudt.org/schema/qudt/maxLength'>;
    "HexBinaryType-minLength": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-minLength'>;
    "minLength": NamedNode<'http://qudt.org/schema/qudt/minLength'>;
    "HexBinaryType-pattern": NamedNode<'http://qudt.org/schema/qudt/HexBinaryType-pattern'>;
    "pattern": NamedNode<'http://qudt.org/schema/qudt/pattern'>;
    "TextStringType": NamedNode<'http://qudt.org/schema/qudt/TextStringType'>;
    "HighToLow": NamedNode<'http://qudt.org/schema/qudt/HighToLow'>;
    "MemoryOrderType": NamedNode<'http://qudt.org/schema/qudt/MemoryOrderType'>;
    "IEEE754_1985RealEncoding": NamedNode<'http://qudt.org/schema/qudt/IEEE754_1985RealEncoding'>;
    "IERS-TN-32-2004": NamedNode<'http://qudt.org/schema/qudt/IERS-TN-32-2004'>;
    "url": NamedNode<'http://qudt.org/schema/qudt/url'>;
    "IMPERIAL-DimensionVector": NamedNode<'http://qudt.org/schema/qudt/IMPERIAL-DimensionVector'>;
    "ISO-DimensionVector": NamedNode<'http://qudt.org/schema/qudt/ISO-DimensionVector'>;
    "ISO8601-UTCDateTime-BasicFormat": NamedNode<'http://qudt.org/schema/qudt/ISO8601-UTCDateTime-BasicFormat'>;
    "IconicCue-image": NamedNode<'http://qudt.org/schema/qudt/IconicCue-image'>;
    "image": NamedNode<'http://qudt.org/schema/qudt/image'>;
    "IconicCue": NamedNode<'http://qudt.org/schema/qudt/IconicCue'>;
    "KinestheticCue": NamedNode<'http://qudt.org/schema/qudt/KinestheticCue'>;
    "IconicCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/IconicCueEnumeration-defaultValue'>;
    "ImperialUnit": NamedNode<'http://qudt.org/schema/qudt/ImperialUnit'>;
    "InBook": NamedNode<'http://qudt.org/schema/qudt/InBook'>;
    "InCollection": NamedNode<'http://qudt.org/schema/qudt/InCollection'>;
    "InProceedings": NamedNode<'http://qudt.org/schema/qudt/InProceedings'>;
    "InertialCoordinateFrame-frameType": NamedNode<'http://qudt.org/schema/qudt/InertialCoordinateFrame-frameType'>;
    "frameType": NamedNode<'http://qudt.org/schema/qudt/frameType'>;
    "InertialCoordinateFrame": NamedNode<'http://qudt.org/schema/qudt/InertialCoordinateFrame'>;
    "InertialReferenceFrame": NamedNode<'http://qudt.org/schema/qudt/InertialReferenceFrame'>;
    "NonRotatingInertialFrame": NamedNode<'http://qudt.org/schema/qudt/NonRotatingInertialFrame'>;
    "IntegerEncodingType": NamedNode<'http://qudt.org/schema/qudt/IntegerEncodingType'>;
    "IntegerList-first": NamedNode<'http://qudt.org/schema/qudt/IntegerList-first'>;
    "IntegerList-rest": NamedNode<'http://qudt.org/schema/qudt/IntegerList-rest'>;
    "IntegerList": NamedNode<'http://qudt.org/schema/qudt/IntegerList'>;
    "List": NamedNode<'http://qudt.org/schema/qudt/List'>;
    "IntegerVector": NamedNode<'http://qudt.org/schema/qudt/IntegerVector'>;
    "InterpolatedTable": NamedNode<'http://qudt.org/schema/qudt/InterpolatedTable'>;
    /**
     * <p>The interval type allows for the degree of difference between items, but not the ratio between them. Examples include temperature with the Celsius scale, which has two defined points (the freezing and boiling point of water at specific conditions) and then separated into 100 intervals, date when measured from an arbitrary epoch (such as AD), percentage such as a percentage return on a stock,[16] location in Cartesian coordinates, and direction measured in degrees from true or magnetic north. Ratios are not meaningful since 20 °C cannot be said to be "twice as hot" as 10 °C, nor can multiplication/division be carried out between any two dates directly. However, ratios of differences can be expressed; for example, one difference can be twice another. Interval type variables are sometimes also called "scaled variables", but the formal mathematical term is an affine space (in this case an affine line).</p>
     * <p>Characteristics: median, percentile &amp; Monotonic increasing (order (&lt;) &amp; totally ordered set</p>
     */
    "IntervalScale": NamedNode<'http://qudt.org/schema/qudt/IntervalScale'>;
    /** The ordinal type allows for rank order (1st, 2nd, 3rd, etc.) by which data can be sorted, but still does not allow for relative degree of difference between them. Examples include, on one hand, dichotomous data with dichotomous (or dichotomized) values such as 'sick' vs. 'healthy' when measuring health, 'guilty' vs. 'innocent' when making judgments in courts, 'wrong/false' vs. 'right/true' when measuring truth value, and, on the other hand, non-dichotomous data consisting of a spectrum of values, such as 'completely agree', 'mostly agree', 'mostly disagree', 'completely disagree' when measuring opinion. */
    "OrdinalScale": NamedNode<'http://qudt.org/schema/qudt/OrdinalScale'>;
    /** The ratio type takes its name from the fact that measurement is the estimation of the ratio between a magnitude of a continuous quantity and a unit magnitude of the same kind (Michell, 1997, 1999). A ratio scale possesses a meaningful (unique and non-arbitrary) zero value. Most measurement in the physical sciences and engineering is done on ratio scales. Examples include mass, length, duration, plane angle, energy and electric charge. In contrast to interval scales, ratios are now meaningful because having a non-arbitrary zero point makes it meaningful to say, for example, that one object has "twice the length" of another (= is "twice as long"). Very informally, many ratio scales can be described as specifying "how much" of something (i.e. an amount or magnitude) or "how many" (a count). The Kelvin temperature scale is a ratio scale because it has a unique, non-arbitrary zero point called absolute zero. */
    "RatioScale": NamedNode<'http://qudt.org/schema/qudt/RatioScale'>;
    "KinestheticCue-code": NamedNode<'http://qudt.org/schema/qudt/KinestheticCue-code'>;
    "code": NamedNode<'http://qudt.org/schema/qudt/code'>;
    "KinestheticCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/KinestheticCueEnumeration-defaultValue'>;
    "LIST": NamedNode<'http://qudt.org/schema/qudt/LIST'>;
    "LargeObject": NamedNode<'http://qudt.org/schema/qudt/LargeObject'>;
    "LargeObjectType": NamedNode<'http://qudt.org/schema/qudt/LargeObjectType'>;
    /** A type of string in which some characters may be wrapped with '\(' and '\) characters for LaTeX rendering. */
    "LatexString": NamedNode<'http://qudt.org/schema/qudt/LatexString'>;
    "LimitType": NamedNode<'http://qudt.org/schema/qudt/LimitType'>;
    "List-first": NamedNode<'http://qudt.org/schema/qudt/List-first'>;
    "List-rest": NamedNode<'http://qudt.org/schema/qudt/List-rest'>;
    "ListType": NamedNode<'http://qudt.org/schema/qudt/ListType'>;
    "LittleEndian": NamedNode<'http://qudt.org/schema/qudt/LittleEndian'>;
    "LocalCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/LocalCoordinateSystem'>;
    /** Logarithmic units are abstract mathematical units that can be used to express any quantities (physical or mathematical) that are defined on a logarithmic scale, that is, as being proportional to the value of a logarithm function. Examples of logarithmic units include common units of information and entropy, such as the bit, and the byte, as well as units of relative signal strength magnitude such as the decibel. */
    "LogarithmicUnit": NamedNode<'http://qudt.org/schema/qudt/LogarithmicUnit'>;
    "LongIntegerType-octets": NamedNode<'http://qudt.org/schema/qudt/LongIntegerType-octets'>;
    "LongIntegerType": NamedNode<'http://qudt.org/schema/qudt/LongIntegerType'>;
    "LongUnsignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/LongUnsignedIntegerEncoding'>;
    "LowToHigh": NamedNode<'http://qudt.org/schema/qudt/LowToHigh'>;
    "LunarCoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-coordinateCenter'>;
    "LunarCoordinateSystem-realization": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-realization'>;
    "realization": NamedNode<'http://qudt.org/schema/qudt/realization'>;
    "LunarCoordinateSystem-xAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-xAxisDefinition'>;
    "xAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/xAxisDefinition'>;
    "LunarCoordinateSystem-yAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-yAxisDefinition'>;
    "yAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/yAxisDefinition'>;
    "LunarCoordinateSystem-zAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem-zAxisDefinition'>;
    "zAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/zAxisDefinition'>;
    "LunarCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/LunarCoordinateSystem'>;
    "MASS-PROPERTIES-ARRAY": NamedNode<'http://qudt.org/schema/qudt/MASS-PROPERTIES-ARRAY'>;
    "MassPropertiesArrayType": NamedNode<'http://qudt.org/schema/qudt/MassPropertiesArrayType'>;
    "MATRIX-TYPE_2x4": NamedNode<'http://qudt.org/schema/qudt/MATRIX-TYPE_2x4'>;
    "columns": NamedNode<'http://qudt.org/schema/qudt/columns'>;
    "rows": NamedNode<'http://qudt.org/schema/qudt/rows'>;
    "MatrixType": NamedNode<'http://qudt.org/schema/qudt/MatrixType'>;
    "MATRIX": NamedNode<'http://qudt.org/schema/qudt/MATRIX'>;
    "MKS-Unit": NamedNode<'http://qudt.org/schema/qudt/MKS-Unit'>;
    "MULTi-DIMENSIONAL-ARRAY": NamedNode<'http://qudt.org/schema/qudt/MULTi-DIMENSIONAL-ARRAY'>;
    "MultiDimensionalArrayType": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalArrayType'>;
    "MajorMinorType": NamedNode<'http://qudt.org/schema/qudt/MajorMinorType'>;
    "Manual": NamedNode<'http://qudt.org/schema/qudt/Manual'>;
    "MarsCoordinateSystem-coordinateCenter": NamedNode<'http://qudt.org/schema/qudt/MarsCoordinateSystem-coordinateCenter'>;
    "MarsCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/MarsCoordinateSystem'>;
    "MassPropertiesArray": NamedNode<'http://qudt.org/schema/qudt/MassPropertiesArray'>;
    "MathsFunctionType": NamedNode<'http://qudt.org/schema/qudt/MathsFunctionType'>;
    "Matrix": NamedNode<'http://qudt.org/schema/qudt/Matrix'>;
    "MultiDimensionalArray": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalArray'>;
    "Misc": NamedNode<'http://qudt.org/schema/qudt/Misc'>;
    "ModalCue-duration": NamedNode<'http://qudt.org/schema/qudt/ModalCue-duration'>;
    "ModalEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/ModalEnumeration-defaultValue'>;
    "ModalEnumeration": NamedNode<'http://qudt.org/schema/qudt/ModalEnumeration'>;
    "MultiDimensionalDataFormat-descriptor": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalDataFormat-descriptor'>;
    "MultiDimensionalDataFormat": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalDataFormat'>;
    "MultiDimensionalDataFormatType": NamedNode<'http://qudt.org/schema/qudt/MultiDimensionalDataFormatType'>;
    "MultiModalEnumeration-auralCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-auralCueEnumeration'>;
    "auralCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/auralCueEnumeration'>;
    "MultiModalEnumeration-iconicCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-iconicCueEnumeration'>;
    "iconicCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/iconicCueEnumeration'>;
    "MultiModalEnumeration-kinestheticCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-kinestheticCueEnumeration'>;
    "kinestheticCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/kinestheticCueEnumeration'>;
    "MultiModalEnumeration-modalCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-modalCueEnumeration'>;
    "modalCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/modalCueEnumeration'>;
    "MultiModalEnumeration-visualCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration-visualCueEnumeration'>;
    "visualCueEnumeration": NamedNode<'http://qudt.org/schema/qudt/visualCueEnumeration'>;
    "MultiModalEnumeration": NamedNode<'http://qudt.org/schema/qudt/MultiModalEnumeration'>;
    "MultiModalType-auralCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-auralCue'>;
    "auralCue": NamedNode<'http://qudt.org/schema/qudt/auralCue'>;
    "MultiModalType-iconicCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-iconicCue'>;
    "iconicCue": NamedNode<'http://qudt.org/schema/qudt/iconicCue'>;
    "MultiModalType-kinestheticCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-kinestheticCue'>;
    "kinestheticCue": NamedNode<'http://qudt.org/schema/qudt/kinestheticCue'>;
    "MultiModalType-modalCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-modalCue'>;
    "modalCue": NamedNode<'http://qudt.org/schema/qudt/modalCue'>;
    "MultiModalType-visualCue": NamedNode<'http://qudt.org/schema/qudt/MultiModalType-visualCue'>;
    "visualCue": NamedNode<'http://qudt.org/schema/qudt/visualCue'>;
    "MultiModalType": NamedNode<'http://qudt.org/schema/qudt/MultiModalType'>;
    /** A bag is a set in which elements may be repeated. */
    "MultiSet": NamedNode<'http://qudt.org/schema/qudt/MultiSet'>;
    "N-Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/N-Tuple-elementType'>;
    "N-Tuple": NamedNode<'http://qudt.org/schema/qudt/N-Tuple'>;
    "N-TupleType": NamedNode<'http://qudt.org/schema/qudt/N-TupleType'>;
    "NIST_SP811_Comment": NamedNode<'http://qudt.org/schema/qudt/NIST_SP811_Comment'>;
    "NUMERIC": NamedNode<'http://qudt.org/schema/qudt/NUMERIC'>;
    "No": NamedNode<'http://qudt.org/schema/qudt/No'>;
    "YesNoType": NamedNode<'http://qudt.org/schema/qudt/YesNoType'>;
    /** Parameter is fixed, not modifiable. */
    "NonModifiableParameter": NamedNode<'http://qudt.org/schema/qudt/NonModifiableParameter'>;
    /** An enumeration of literals that signify whether a parameter is modifiable and if so, by whom. */
    "ParameterModifiabilityType": NamedNode<'http://qudt.org/schema/qudt/ParameterModifiabilityType'>;
    "NonNegativeIntegerUnionList": NamedNode<'http://qudt.org/schema/qudt/NonNegativeIntegerUnionList'>;
    "NonRotatingInertialFrame-frameType": NamedNode<'http://qudt.org/schema/qudt/NonRotatingInertialFrame-frameType'>;
    "NumericType-accuracy": NamedNode<'http://qudt.org/schema/qudt/NumericType-accuracy'>;
    "accuracy": NamedNode<'http://qudt.org/schema/qudt/accuracy'>;
    "NumericType-signedness": NamedNode<'http://qudt.org/schema/qudt/NumericType-signedness'>;
    "SignednessType": NamedNode<'http://qudt.org/schema/qudt/SignednessType'>;
    "NumericUnion": NamedNode<'http://qudt.org/schema/qudt/NumericUnion'>;
    "OOST_OFF": NamedNode<'http://qudt.org/schema/qudt/OOST_OFF'>;
    "OnOffStateType": NamedNode<'http://qudt.org/schema/qudt/OnOffStateType'>;
    "OOST_ON": NamedNode<'http://qudt.org/schema/qudt/OOST_ON'>;
    "OOST_ZERO-MEANS-OFF": NamedNode<'http://qudt.org/schema/qudt/OOST_ZERO-MEANS-OFF'>;
    "inverted": NamedNode<'http://qudt.org/schema/qudt/inverted'>;
    "OOST_ZERO-MEANS-ON": NamedNode<'http://qudt.org/schema/qudt/OOST_ZERO-MEANS-ON'>;
    "OctetType": NamedNode<'http://qudt.org/schema/qudt/OctetType'>;
    "UnsignedIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedIntegerType'>;
    /** A discrete state enumeration whose values are 'off' and 'on'. The 'off' value is encoded as a zero (0) and the 'on' value as a one (1). */
    "OffOnStateTypeEnumeration": NamedNode<'http://qudt.org/schema/qudt/OffOnStateTypeEnumeration'>;
    "On": NamedNode<'http://qudt.org/schema/qudt/On'>;
    /** A discrete state enumeration whose values are 'off' and 'on'. The 'on' value is encoded as a zero (0) and the 'off' value as a one (1). */
    "OnOffStateTypeEnumeration": NamedNode<'http://qudt.org/schema/qudt/OnOffStateTypeEnumeration'>;
    "OneMeansOff": NamedNode<'http://qudt.org/schema/qudt/OneMeansOff'>;
    "Open": NamedNode<'http://qudt.org/schema/qudt/Open'>;
    "OpenCloseStateType": NamedNode<'http://qudt.org/schema/qudt/OpenCloseStateType'>;
    "OrderedCollection-first": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection-first'>;
    "OrderedCollection-orderingRelation": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection-orderingRelation'>;
    "orderingRelation": NamedNode<'http://qudt.org/schema/qudt/orderingRelation'>;
    "OrderedCollection-rest": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection-rest'>;
    "OrderedCollectionType": NamedNode<'http://qudt.org/schema/qudt/OrderedCollectionType'>;
    "OrderedCollection": NamedNode<'http://qudt.org/schema/qudt/OrderedCollection'>;
    "OrderedType": NamedNode<'http://qudt.org/schema/qudt/OrderedType'>;
    "Organization": NamedNode<'http://qudt.org/schema/qudt/Organization'>;
    "PARTIAL-ARRAY": NamedNode<'http://qudt.org/schema/qudt/PARTIAL-ARRAY'>;
    "PartiallyOrdered": NamedNode<'http://qudt.org/schema/qudt/PartiallyOrdered'>;
    "Percentage": NamedNode<'http://qudt.org/schema/qudt/Percentage'>;
    "PhysicalAddress": NamedNode<'http://qudt.org/schema/qudt/PhysicalAddress'>;
    /** A physical constant is a physical quantity that is generally believed to be both universal in nature and constant in time. It can be contrasted with a mathematical constant, which is a fixed numerical value but does not directly involve any physical measurement. There are many physical constants in science, some of the most widely recognized being the speed of light in vacuum c, Newton's gravitational constant G, Planck's constant h, the electric permittivity of free space ε0, and the elementary charge e. Physical constants can take many dimensional forms, or may be dimensionless depending on the system of quantities and units used. */
    "PhysicalConstant": NamedNode<'http://qudt.org/schema/qudt/PhysicalConstant'>;
    /**
     * <p class="lm-para">A <b>quantity</b> is the measurement of an observable property of a particular object, event, or physical system. A quantity is always associated with the context of measurement (i.e. the thing measured, the measured value, the accuracy of measurement, etc.) whereas the underlying <b>quantity kind</b> is independent of any particular measurement. Thus, length is a quantity kind while the height of a rocket is a specific quantity of length; its magnitude that may be expressed in meters, feet, inches, etc. Examples of physical quantities include physical constants, such as the speed of light in a vacuum, Planck's constant, the electric permittivity of free space, and the fine structure constant. </p>
     *
     * <p class="lm-para">In other words, quantities are quantifiable aspects of the world, such as the duration of a movie, the distance between two points, velocity of a car, the pressure of the atmosphere, and a person's weight; and units are used to describe their numerical measure. 
     *
     * <p class="lm-para">Many <b>quantity kinds</b> are related to each other by various physical laws, and as a result, the associated units of some quantity kinds can be expressed as products (or ratios) of powers of other quantity kinds (e.g., momentum is mass times velocity and velocity is defined as distance divided by time). In this way, some quantities can be calculated from other measured quantities using their associations to the quantity kinds in these expressions. These quantity kind relationships are also discussed in dimensional analysis. Those that cannot be so expressed can be regarded as "fundamental" in this sense.</p>
     * <p class="lm-para">A quantity is distinguished from a "quantity kind" in that the former carries a value and the latter is a type specifier.</p>
     */
    "Quantity": NamedNode<'http://qudt.org/schema/qudt/Quantity'>;
    "PlaneAngleUnit": NamedNode<'http://qudt.org/schema/qudt/PlaneAngleUnit'>;
    "PolarCoordinates": NamedNode<'http://qudt.org/schema/qudt/PolarCoordinates'>;
    "PolarCoordinatesType": NamedNode<'http://qudt.org/schema/qudt/PolarCoordinatesType'>;
    /** A "Tagged Enumeration" with the following instance(s): "negative", "positive". */
    "Polarity": NamedNode<'http://qudt.org/schema/qudt/Polarity'>;
    "PositiveIntegerType": NamedNode<'http://qudt.org/schema/qudt/PositiveIntegerType'>;
    "UnsignedType": NamedNode<'http://qudt.org/schema/qudt/UnsignedType'>;
    "SignedIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedIntegerType'>;
    "PrefixUnit": NamedNode<'http://qudt.org/schema/qudt/PrefixUnit'>;
    "Proceedings": NamedNode<'http://qudt.org/schema/qudt/Proceedings'>;
    /** <p><em>Quantifiable</em> ascribes to some thing the capability of being measured, observed, or counted.</p> */
    "Quantifiable": NamedNode<'http://qudt.org/schema/qudt/Quantifiable'>;
    /**
     * <p class="lm-para">A  <em>Quantity Kind Dimension Vector</em> describes the dimensionality of a quantity kind in the context of a system of units. In the SI system of units, the dimensions of a quantity kind are expressed as a product of the basic physical dimensions mass (\(M\)), length (\(L\)), time (\(T\)) current (\(I\)), amount of substance (\(N\)), luminous intensity (\(J\)) and absolute temperature (\(\theta\)) as \(dim \, Q = L^{\alpha} \, M^{\beta} \, T^{\gamma} \, I ^{\delta} \, \theta ^{\epsilon} \, N^{\eta} \, J ^{\nu}\).</p>
     *
     * <p class="lm-para">The rational powers of the dimensional exponents, \(\alpha, \, \beta, \, \gamma, \, \delta, \, \epsilon, \, \eta, \, \nu\), are positive, negative, or zero.</p>
     *
     * <p class="lm-para">For example, the dimension of the physical quantity kind \(\it{speed}\) is \(\boxed{length/time}\), \(L/T\) or \(LT^{-1}\), and the dimension of the physical quantity kind force is \(\boxed{mass \times acceleration}\) or \(\boxed{mass \times (length/time)/time}\), \(ML/T^2\) or \(MLT^{-2}\) respectively.</p>
     */
    "QuantityKindDimensionVector": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector'>;
    /** A <em>CGS EMU Dimension Vector</em> is used to specify the dimensions for EMU C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-EMU": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-EMU'>;
    /** A <em>CGS Dimension Vector</em> is used to specify the dimensions for a C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS'>;
    /** A <em>CGS ESU Dimension Vector</em> is used to specify the dimensions for ESU C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-ESU": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-ESU'>;
    /** A <em>CGS GAUSS Dimension Vector</em> is used to specify the dimensions for Gaussioan C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-GAUSS": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-GAUSS'>;
    /** A <em>CGS LH Dimension Vector</em> is used to specify the dimensions for Lorentz-Heaviside C.G.S. quantity kind. */
    "QuantityKindDimensionVector_CGS-LH": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_CGS-LH'>;
    "QuantityKindDimensionVector_ISO": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_ISO'>;
    "QuantityKindDimensionVector_Imperial": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_Imperial'>;
    "QuantityKindDimensionVector_SI": NamedNode<'http://qudt.org/schema/qudt/QuantityKindDimensionVector_SI'>;
    "QuantityType": NamedNode<'http://qudt.org/schema/qudt/QuantityType'>;
    "QuantityValueType-basis": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType-basis'>;
    "QuantityValueType-elementType": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType-elementType'>;
    "QuantityValueType-elementUnit": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType-elementUnit'>;
    "elementUnit": NamedNode<'http://qudt.org/schema/qudt/elementUnit'>;
    "QuantityValueType": NamedNode<'http://qudt.org/schema/qudt/QuantityValueType'>;
    "RELATIVE-DATETIME": NamedNode<'http://qudt.org/schema/qudt/RELATIVE-DATETIME'>;
    /** A rational number can be expressed in the form m*b^e, where m (the mantissa), b (the base), and e (the exponent) are integers. In this case b is chosen to be 2, and then the values of m and e are determined given this choice of base. */
    "RN_BINARY-BASE": NamedNode<'http://qudt.org/schema/qudt/RN_BINARY-BASE'>;
    /** This is the class of data values that approximate real numbers in finite precision. Often, such values are expressed in "mantissa, base, exponent" form. Any rational number can be expressed in the form m*b^e, where m (the mantissa), b (the base), and e (the exponent) are integers. Typically, b is chosen to be either 2 or 10, and then the values of m and e are determined given the choice of base. */
    "RealNumberType": NamedNode<'http://qudt.org/schema/qudt/RealNumberType'>;
    /** A rational number can be expressed in the form m*b^e, where m (the mantissa), b (the base), and e (the exponent) are integers. In this case b is chosen to be 10, and then the values of m and e are determined given this choice of base. */
    "RN_DECIMAL-BASE": NamedNode<'http://qudt.org/schema/qudt/RN_DECIMAL-BASE'>;
    "RawValueTupleMember-elementType": NamedNode<'http://qudt.org/schema/qudt/RawValueTupleMember-elementType'>;
    "RealDatatype-base": NamedNode<'http://qudt.org/schema/qudt/RealDatatype-base'>;
    "base": NamedNode<'http://qudt.org/schema/qudt/base'>;
    "RealDatatype-maxExponent": NamedNode<'http://qudt.org/schema/qudt/RealDatatype-maxExponent'>;
    "maxExponent": NamedNode<'http://qudt.org/schema/qudt/maxExponent'>;
    "RealDatatype-precision": NamedNode<'http://qudt.org/schema/qudt/RealDatatype-precision'>;
    "precision": NamedNode<'http://qudt.org/schema/qudt/precision'>;
    "RealDatatype": NamedNode<'http://qudt.org/schema/qudt/RealDatatype'>;
    "RealDoublePrecisionType": NamedNode<'http://qudt.org/schema/qudt/RealDoublePrecisionType'>;
    "Record": NamedNode<'http://qudt.org/schema/qudt/Record'>;
    "ReferenceDatatype": NamedNode<'http://qudt.org/schema/qudt/ReferenceDatatype'>;
    "ReferenceFrame-comment": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-comment'>;
    "ReferenceFrame-description": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-description'>;
    "ReferenceFrame-frameType": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-frameType'>;
    "ReferenceFrame-realization": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-realization'>;
    "ReferenceFrame-xAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-xAxisDefinition'>;
    "ReferenceFrame-xCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-xCoordinateDefinition'>;
    "xCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/xCoordinateDefinition'>;
    "ReferenceFrame-yAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-yAxisDefinition'>;
    "ReferenceFrame-yCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-yCoordinateDefinition'>;
    "yCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/yCoordinateDefinition'>;
    "ReferenceFrame-zAxisDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-zAxisDefinition'>;
    "ReferenceFrame-zCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/ReferenceFrame-zCoordinateDefinition'>;
    "zCoordinateDefinition": NamedNode<'http://qudt.org/schema/qudt/zCoordinateDefinition'>;
    "RotatingReferenceFrame": NamedNode<'http://qudt.org/schema/qudt/RotatingReferenceFrame'>;
    "Rule": NamedNode<'http://qudt.org/schema/qudt/Rule'>;
    "RuleType": NamedNode<'http://qudt.org/schema/qudt/RuleType'>;
    "STATE-SPACE-MATRIX": NamedNode<'http://qudt.org/schema/qudt/STATE-SPACE-MATRIX'>;
    "StateSpaceMatrixType": NamedNode<'http://qudt.org/schema/qudt/StateSpaceMatrixType'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-1": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-1'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-2": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-2'>;
    "order": NamedNode<'http://qudt.org/schema/qudt/order'>;
    /** A reference to the specification of the data type of a variable or constant. */
    "type": NamedNode<'http://qudt.org/schema/qudt/type'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-3": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-3'>;
    "STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-4": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST-MEMBER_MASS-PROPERTIES-ELEMENT-4'>;
    "STATE-VECTOR-TYPE-LIST_MASS-PROPERTIES": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR-TYPE-LIST_MASS-PROPERTIES'>;
    "element": NamedNode<'http://qudt.org/schema/qudt/element'>;
    "STATE-VECTOR_MASS-PROPERTIES": NamedNode<'http://qudt.org/schema/qudt/STATE-VECTOR_MASS-PROPERTIES'>;
    "StateSpaceVectorType": NamedNode<'http://qudt.org/schema/qudt/StateSpaceVectorType'>;
    "ScalarDatatype-bitOrder": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-bitOrder'>;
    "ScalarDatatype-bits": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-bits'>;
    "ScalarDatatype-byteOrder": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-byteOrder'>;
    "ScalarDatatype-bytes": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-bytes'>;
    "ScalarDatatype-encoding": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-encoding'>;
    "ScalarDatatype-length": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-length'>;
    "ScalarDatatype-maxExclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-maxExclusive'>;
    "maxExclusive": NamedNode<'http://qudt.org/schema/qudt/maxExclusive'>;
    "ScalarDatatype-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-maxInclusive'>;
    "ScalarDatatype-minExclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-minExclusive'>;
    "minExclusive": NamedNode<'http://qudt.org/schema/qudt/minExclusive'>;
    "ScalarDatatype-minInclusive": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-minInclusive'>;
    "ScalarDatatype-rdfsDatatype": NamedNode<'http://qudt.org/schema/qudt/ScalarDatatype-rdfsDatatype'>;
    "ScaleType": NamedNode<'http://qudt.org/schema/qudt/ScaleType'>;
    "ScaledUnit": NamedNode<'http://qudt.org/schema/qudt/ScaledUnit'>;
    "Sequence-first": NamedNode<'http://qudt.org/schema/qudt/Sequence-first'>;
    "Sequence-rest": NamedNode<'http://qudt.org/schema/qudt/Sequence-rest'>;
    "SequenceType": NamedNode<'http://qudt.org/schema/qudt/SequenceType'>;
    "Sequence": NamedNode<'http://qudt.org/schema/qudt/Sequence'>;
    "Set": NamedNode<'http://qudt.org/schema/qudt/Set'>;
    "SetType": NamedNode<'http://qudt.org/schema/qudt/SetType'>;
    "ShortIntegerType": NamedNode<'http://qudt.org/schema/qudt/ShortIntegerType'>;
    "ShortSignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/ShortSignedIntegerEncoding'>;
    "ShortUnsignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/ShortUnsignedIntegerEncoding'>;
    "SignedBigIntegerType-literal": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType-literal'>;
    "SignedBigIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType-maxInclusive'>;
    "SignedBigIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType-minInclusive'>;
    "SignedBigIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedBigIntegerType'>;
    "SignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/SignedIntegerEncoding'>;
    "SignedType": NamedNode<'http://qudt.org/schema/qudt/SignedType'>;
    "SignedLongIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType-abbreviation'>;
    "SignedLongIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType-maxInclusive'>;
    "SignedLongIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType-minInclusive'>;
    "SignedLongIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedLongIntegerType'>;
    "SignedMediumIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedMediumIntegerType'>;
    "SignedShortIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/SignedShortIntegerType-abbreviation'>;
    "SignedType-signedness": NamedNode<'http://qudt.org/schema/qudt/SignedType-signedness'>;
    "SignedVariableLengthIntegerType": NamedNode<'http://qudt.org/schema/qudt/SignedVariableLengthIntegerType'>;
    "VariableLengthIntegerType": NamedNode<'http://qudt.org/schema/qudt/VariableLengthIntegerType'>;
    "SinglePrecisionRealEncoding": NamedNode<'http://qudt.org/schema/qudt/SinglePrecisionRealEncoding'>;
    "SolidAngleUnit": NamedNode<'http://qudt.org/schema/qudt/SolidAngleUnit'>;
    "SplineCalibrator": NamedNode<'http://qudt.org/schema/qudt/SplineCalibrator'>;
    "SplineCalibratorType": NamedNode<'http://qudt.org/schema/qudt/SplineCalibratorType'>;
    "SplinePoint": NamedNode<'http://qudt.org/schema/qudt/SplinePoint'>;
    "SplinePointType": NamedNode<'http://qudt.org/schema/qudt/SplinePointType'>;
    "StandardsUnit": NamedNode<'http://qudt.org/schema/qudt/StandardsUnit'>;
    "StateSpaceMatrix": NamedNode<'http://qudt.org/schema/qudt/StateSpaceMatrix'>;
    "StateSpaceVector-coordinateSystem": NamedNode<'http://qudt.org/schema/qudt/StateSpaceVector-coordinateSystem'>;
    "coordinateSystem": NamedNode<'http://qudt.org/schema/qudt/coordinateSystem'>;
    "StateSpaceVector": NamedNode<'http://qudt.org/schema/qudt/StateSpaceVector'>;
    "StateVectorType": NamedNode<'http://qudt.org/schema/qudt/StateVectorType'>;
    "Statement": NamedNode<'http://qudt.org/schema/qudt/Statement'>;
    "StringList-first": NamedNode<'http://qudt.org/schema/qudt/StringList-first'>;
    "StringList-rest": NamedNode<'http://qudt.org/schema/qudt/StringList-rest'>;
    "StringList": NamedNode<'http://qudt.org/schema/qudt/StringList'>;
    "StringType-dimensionality": NamedNode<'http://qudt.org/schema/qudt/StringType-dimensionality'>;
    "StringType-elementType": NamedNode<'http://qudt.org/schema/qudt/StringType-elementType'>;
    "StringType-isByteString": NamedNode<'http://qudt.org/schema/qudt/StringType-isByteString'>;
    "isByteString": NamedNode<'http://qudt.org/schema/qudt/isByteString'>;
    "StringType-maxLength": NamedNode<'http://qudt.org/schema/qudt/StringType-maxLength'>;
    "StringType-typeMatrix": NamedNode<'http://qudt.org/schema/qudt/StringType-typeMatrix'>;
    "StringUTF16-elementType": NamedNode<'http://qudt.org/schema/qudt/StringUTF16-elementType'>;
    "StringUTF16": NamedNode<'http://qudt.org/schema/qudt/StringUTF16'>;
    "StringUTF8-elementType": NamedNode<'http://qudt.org/schema/qudt/StringUTF8-elementType'>;
    "StringUTF8": NamedNode<'http://qudt.org/schema/qudt/StringUTF8'>;
    "StructuredDatatype-elementType": NamedNode<'http://qudt.org/schema/qudt/StructuredDatatype-elementType'>;
    /** A "Enumeration Literal". */
    "SubjectArea": NamedNode<'http://qudt.org/schema/qudt/SubjectArea'>;
    "Symbol": NamedNode<'http://qudt.org/schema/qudt/Symbol'>;
    /** Parameter is modifiable by a (computer) system. */
    "SystemModifiableParameter": NamedNode<'http://qudt.org/schema/qudt/SystemModifiableParameter'>;
    /** A system of quantity kinds is a set of one or more quantity kinds together with a set of zero or more algebraic equations that define relationships between quantity kinds in the set. In the physical sciences, the equations relating quantity kinds are typically physical laws and definitional relations, and constants of proportionality. Examples include Newton’s First Law of Motion, Coulomb’s Law, and the definition of velocity as the instantaneous change in position.  In almost all cases, the system identifies a subset of base quantity kinds. The base set is chosen so that all other quantity kinds of interest can be derived from the base quantity kinds and the algebraic equations. If the unit system is explicitly associated with a quantity kind system, then the unit system must define at least one unit for each quantity kind.  From a scientific point of view, the division of quantities into base quantities and derived quantities is a matter of convention. */
    "SystemOfQuantityKinds": NamedNode<'http://qudt.org/schema/qudt/SystemOfQuantityKinds'>;
    /** A system of units is a set of units which are chosen as the reference scales for some set of quantity kinds together with the definitions of each unit. Units may be defined by experimental observation or by proportion to another unit not included in the system. If the unit system is explicitly associated with a quantity kind system, then the unit system must define at least one unit for each quantity kind. */
    "SystemOfUnits": NamedNode<'http://qudt.org/schema/qudt/SystemOfUnits'>;
    "TABLE-COMPOSITION-EXAMPLE-SUBTREE_1": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-EXAMPLE-SUBTREE_1'>;
    "TABLE-COMPOSITION-EXAMPLE-SUBTREE_2": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-EXAMPLE-SUBTREE_2'>;
    "TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_1": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_1'>;
    /** This property identifies the value associated with a data structure. The value may be a scalar or a reference to another object. The disjoint sub-properties of this data:value distinguish between scalar values and object references. */
    "value": NamedNode<'http://qudt.org/schema/qudt/value'>;
    "TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_2": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSITION-SUBTREE-LIST-MEMBER_2'>;
    "TABLE-COMPOSTION-SUBTREE-LIST-EXAMPLE_1": NamedNode<'http://qudt.org/schema/qudt/TABLE-COMPOSTION-SUBTREE-LIST-EXAMPLE_1'>;
    "TABLE-TYPE_2x4": NamedNode<'http://qudt.org/schema/qudt/TABLE-TYPE_2x4'>;
    "TIME": NamedNode<'http://qudt.org/schema/qudt/TIME'>;
    "TimeStringType": NamedNode<'http://qudt.org/schema/qudt/TimeStringType'>;
    "TRUE": NamedNode<'http://qudt.org/schema/qudt/TRUE'>;
    "Table-byRow": NamedNode<'http://qudt.org/schema/qudt/Table-byRow'>;
    "Table-columns": NamedNode<'http://qudt.org/schema/qudt/Table-columns'>;
    "Table-dimensionality": NamedNode<'http://qudt.org/schema/qudt/Table-dimensionality'>;
    "Table-rows": NamedNode<'http://qudt.org/schema/qudt/Table-rows'>;
    "TaggedEnumeration-code": NamedNode<'http://qudt.org/schema/qudt/TaggedEnumeration-code'>;
    "TaggedEnumeration": NamedNode<'http://qudt.org/schema/qudt/TaggedEnumeration'>;
    "TechReport": NamedNode<'http://qudt.org/schema/qudt/TechReport'>;
    "Term": NamedNode<'http://qudt.org/schema/qudt/Term'>;
    "Three-Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/Three-Tuple-elementType'>;
    "Three-Tuple-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Three-Tuple-elementTypeCount'>;
    "ThreeBodyRotatingCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/ThreeBodyRotatingCoordinateSystem'>;
    "Time-type": NamedNode<'http://qudt.org/schema/qudt/Time-type'>;
    /** The class of data values that denote a point in time. Time values may be encoded in a 12-hour clock or a 24-hour clock, such as 1:35 AM, or 13:35. */
    "Time": NamedNode<'http://qudt.org/schema/qudt/Time'>;
    "TimeDataType": NamedNode<'http://qudt.org/schema/qudt/TimeDataType'>;
    "TimeInterval-type": NamedNode<'http://qudt.org/schema/qudt/TimeInterval-type'>;
    /** A relative interval that is an increment in time. For example, this is used in time series arrays to express the time point of a vector of values. */
    "TimeInterval": NamedNode<'http://qudt.org/schema/qudt/TimeInterval'>;
    "TimeSeriesArray-dimensionVector": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray-dimensionVector'>;
    "TimeSeriesArray-incrementDatatype": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray-incrementDatatype'>;
    "TimeSeriesArray-vector": NamedNode<'http://qudt.org/schema/qudt/TimeSeriesArray-vector'>;
    "vector": NamedNode<'http://qudt.org/schema/qudt/vector'>;
    "TotallyOrdered": NamedNode<'http://qudt.org/schema/qudt/TotallyOrdered'>;
    "TransformType": NamedNode<'http://qudt.org/schema/qudt/TransformType'>;
    "Triplet": NamedNode<'http://qudt.org/schema/qudt/Triplet'>;
    "True": NamedNode<'http://qudt.org/schema/qudt/True'>;
    "Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/Tuple-elementType'>;
    "Tuple-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Tuple-elementTypeCount'>;
    "Tuple-length": NamedNode<'http://qudt.org/schema/qudt/Tuple-length'>;
    "TupleMember-elementType": NamedNode<'http://qudt.org/schema/qudt/TupleMember-elementType'>;
    "TupleMember-orderInStructure": NamedNode<'http://qudt.org/schema/qudt/TupleMember-orderInStructure'>;
    "orderInStructure": NamedNode<'http://qudt.org/schema/qudt/orderInStructure'>;
    "Two-Tuple-elementType": NamedNode<'http://qudt.org/schema/qudt/Two-Tuple-elementType'>;
    "Two-Tuple-elementTypeCount": NamedNode<'http://qudt.org/schema/qudt/Two-Tuple-elementTypeCount'>;
    "TypeList": NamedNode<'http://qudt.org/schema/qudt/TypeList'>;
    /** Members of this class are matrix data structures that describe the datatypes of a class of matrices. That is, the members of this class are matrices with cells that contain datatypes (c.f. type:Datatype) and are used to describe the datatype structure of other matrices. */
    "TypeMatrix": NamedNode<'http://qudt.org/schema/qudt/TypeMatrix'>;
    "TypeVector-objectValue": NamedNode<'http://qudt.org/schema/qudt/TypeVector-objectValue'>;
    "TypeVector-type": NamedNode<'http://qudt.org/schema/qudt/TypeVector-type'>;
    /** A Type Vector is a vector whose elements are data types. They are used, for instance, to specify the type of each component of a vector or class of vectors. A <em>Type Vector Type</em> is a further abstraction that specifies the structure of Type Vectors. */
    "TypeVector": NamedNode<'http://qudt.org/schema/qudt/TypeVector'>;
    "TypeVector-typeVector": NamedNode<'http://qudt.org/schema/qudt/TypeVector-typeVector'>;
    "typeVector": NamedNode<'http://qudt.org/schema/qudt/typeVector'>;
    /** Lexical pattern for the terminal symbols in the case-insensitive version of UCUM code */
    "UCUMci-term": NamedNode<'http://qudt.org/schema/qudt/UCUMci-term'>;
    /** Lexical pattern for the case-insensitive version of UCUM code */
    "UCUMci": NamedNode<'http://qudt.org/schema/qudt/UCUMci'>;
    /** Lexical pattern for the terminal symbols in the case-sensitive version of UCUM code */
    "UCUMcs-term": NamedNode<'http://qudt.org/schema/qudt/UCUMcs-term'>;
    /** Lexical pattern for the case-sensitive version of UCUM code */
    "UCUMcs": NamedNode<'http://qudt.org/schema/qudt/UCUMcs'>;
    "UNARY-FUNCTION": NamedNode<'http://qudt.org/schema/qudt/UNARY-FUNCTION'>;
    "UNSIGNED": NamedNode<'http://qudt.org/schema/qudt/UNSIGNED'>;
    "UTC-DAYTIME": NamedNode<'http://qudt.org/schema/qudt/UTC-DAYTIME'>;
    "UTC-DayTime": NamedNode<'http://qudt.org/schema/qudt/UTC-DayTime'>;
    "UTF16-STRING": NamedNode<'http://qudt.org/schema/qudt/UTF16-STRING'>;
    "UTF16-StringEncoding": NamedNode<'http://qudt.org/schema/qudt/UTF16-StringEncoding'>;
    "UTF8-STRING": NamedNode<'http://qudt.org/schema/qudt/UTF8-STRING'>;
    "UTF8-StringEncoding": NamedNode<'http://qudt.org/schema/qudt/UTF8-StringEncoding'>;
    "Unordered": NamedNode<'http://qudt.org/schema/qudt/Unordered'>;
    "Unpublished": NamedNode<'http://qudt.org/schema/qudt/Unpublished'>;
    "UnsignedBigIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType-abbreviation'>;
    "UnsignedBigIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType-maxInclusive'>;
    "UnsignedBigIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType-minInclusive'>;
    "UnsignedBigIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedBigIntegerType'>;
    "UnsignedIntegerEncoding": NamedNode<'http://qudt.org/schema/qudt/UnsignedIntegerEncoding'>;
    "UnsignedLongIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType-maxInclusive'>;
    "UnsignedLongIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType-minInclusive'>;
    "UnsignedLongIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType'>;
    "UnsignedMediumIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedMediumIntegerType'>;
    "UnsignedShortIntegerType-abbreviation": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType-abbreviation'>;
    "UnsignedShortIntegerType-maxInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType-maxInclusive'>;
    "UnsignedShortIntegerType-minInclusive": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType-minInclusive'>;
    "UnsignedShortIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedShortIntegerType'>;
    "UnsignedType-signedness": NamedNode<'http://qudt.org/schema/qudt/UnsignedType-signedness'>;
    "UnsignedVariableLengthIntegerType": NamedNode<'http://qudt.org/schema/qudt/UnsignedVariableLengthIntegerType'>;
    /** Parameter is modifiable by a user. */
    "UserModifiableParameter": NamedNode<'http://qudt.org/schema/qudt/UserModifiableParameter'>;
    "UserQuantityKind": NamedNode<'http://qudt.org/schema/qudt/UserQuantityKind'>;
    "VECTOR": NamedNode<'http://qudt.org/schema/qudt/VECTOR'>;
    "VECTOR_3D": NamedNode<'http://qudt.org/schema/qudt/VECTOR_3D'>;
    "VariableIntervalTimeSeriesArray": NamedNode<'http://qudt.org/schema/qudt/VariableIntervalTimeSeriesArray'>;
    /** A Variable Interval Time Series Array Type is a data type that specifies the properties of arrays that hold time series data that has been sampled over non-uniformly spaced time intervals. A time series is a sequence of data points, measured typically at successive times, spaced at uniform or non-uniform time intervals. For variable interval time series, the successive time intervals may follow a repeating pattern, or may be completely random. */
    "VariableIntervalTimeSeriesArrayType": NamedNode<'http://qudt.org/schema/qudt/VariableIntervalTimeSeriesArrayType'>;
    "VariableLengthIntegerType-maxBits": NamedNode<'http://qudt.org/schema/qudt/VariableLengthIntegerType-maxBits'>;
    "maxBits": NamedNode<'http://qudt.org/schema/qudt/maxBits'>;
    "VariableLengthIntegerType-minBits": NamedNode<'http://qudt.org/schema/qudt/VariableLengthIntegerType-minBits'>;
    "minBits": NamedNode<'http://qudt.org/schema/qudt/minBits'>;
    "Vector-dimension": NamedNode<'http://qudt.org/schema/qudt/Vector-dimension'>;
    "dimension": NamedNode<'http://qudt.org/schema/qudt/dimension'>;
    "Vector-dimensionality": NamedNode<'http://qudt.org/schema/qudt/Vector-dimensionality'>;
    "Vector-referenceFrame": NamedNode<'http://qudt.org/schema/qudt/Vector-referenceFrame'>;
    "VectorArray-vector": NamedNode<'http://qudt.org/schema/qudt/VectorArray-vector'>;
    "VectorArray": NamedNode<'http://qudt.org/schema/qudt/VectorArray'>;
    "VectorArrayType": NamedNode<'http://qudt.org/schema/qudt/VectorArrayType'>;
    "VehicleCoordinateSystem-pitchRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem-pitchRotationDefinition'>;
    "pitchRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/pitchRotationDefinition'>;
    "VehicleCoordinateSystem-rollRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem-rollRotationDefinition'>;
    "rollRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/rollRotationDefinition'>;
    "VehicleCoordinateSystem-yawRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem-yawRotationDefinition'>;
    "yawRotationDefinition": NamedNode<'http://qudt.org/schema/qudt/yawRotationDefinition'>;
    "VehicleCoordinateSystem": NamedNode<'http://qudt.org/schema/qudt/VehicleCoordinateSystem'>;
    "VisualCueEnumeration-defaultValue": NamedNode<'http://qudt.org/schema/qudt/VisualCueEnumeration-defaultValue'>;
    "WDST_DRY": NamedNode<'http://qudt.org/schema/qudt/WDST_DRY'>;
    "WetDryStateType": NamedNode<'http://qudt.org/schema/qudt/WetDryStateType'>;
    "WDST_WET": NamedNode<'http://qudt.org/schema/qudt/WDST_WET'>;
    "Wikipedia": NamedNode<'http://qudt.org/schema/qudt/Wikipedia'>;
    "WordAligned": NamedNode<'http://qudt.org/schema/qudt/WordAligned'>;
    "YDT": NamedNode<'http://qudt.org/schema/qudt/YDT'>;
    "Yes": NamedNode<'http://qudt.org/schema/qudt/Yes'>;
    "acronym": NamedNode<'http://qudt.org/schema/qudt/acronym'>;
    "allowedUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/allowedUnitOfSystem'>;
    "unitOfSystem": NamedNode<'http://qudt.org/schema/qudt/unitOfSystem'>;
    "hasAllowedUnit": NamedNode<'http://qudt.org/schema/qudt/hasAllowedUnit'>;
    "applicableCGSUnit": NamedNode<'http://qudt.org/schema/qudt/applicableCGSUnit'>;
    "applicableUnit": NamedNode<'http://qudt.org/schema/qudt/applicableUnit'>;
    "applicableISOUnit": NamedNode<'http://qudt.org/schema/qudt/applicableISOUnit'>;
    "applicableImperialUnit": NamedNode<'http://qudt.org/schema/qudt/applicableImperialUnit'>;
    "applicablePhysicalConstant": NamedNode<'http://qudt.org/schema/qudt/applicablePhysicalConstant'>;
    "applicablePlanckUnit": NamedNode<'http://qudt.org/schema/qudt/applicablePlanckUnit'>;
    "applicableSIUnit": NamedNode<'http://qudt.org/schema/qudt/applicableSIUnit'>;
    "applicableUSCustomaryUnit": NamedNode<'http://qudt.org/schema/qudt/applicableUSCustomaryUnit'>;
    "arg1Type": NamedNode<'http://qudt.org/schema/qudt/arg1Type'>;
    "arg2Type": NamedNode<'http://qudt.org/schema/qudt/arg2Type'>;
    "arg3Type": NamedNode<'http://qudt.org/schema/qudt/arg3Type'>;
    "baseDimensionEnumeration": NamedNode<'http://qudt.org/schema/qudt/baseDimensionEnumeration'>;
    "baseUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/baseUnitOfSystem'>;
    "coherentUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/coherentUnitOfSystem'>;
    "hasBaseUnit": NamedNode<'http://qudt.org/schema/qudt/hasBaseUnit'>;
    "belongsToSystemOfQuantities": NamedNode<'http://qudt.org/schema/qudt/belongsToSystemOfQuantities'>;
    "categorizedAs": NamedNode<'http://qudt.org/schema/qudt/categorizedAs'>;
    "citation": NamedNode<'http://qudt.org/schema/qudt/citation'>;
    "definedUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/definedUnitOfSystem'>;
    "hasCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasCoherentUnit'>;
    "coherentUnitSystem": NamedNode<'http://qudt.org/schema/qudt/coherentUnitSystem'>;
    "hasUnitSystem": NamedNode<'http://qudt.org/schema/qudt/hasUnitSystem'>;
    "conversionCoefficient": NamedNode<'http://qudt.org/schema/qudt/conversionCoefficient'>;
    "conversionMultiplier": NamedNode<'http://qudt.org/schema/qudt/conversionMultiplier'>;
    "conversionOffset": NamedNode<'http://qudt.org/schema/qudt/conversionOffset'>;
    "coordinateSystemFrame": NamedNode<'http://qudt.org/schema/qudt/coordinateSystemFrame'>;
    "currencyCode": NamedNode<'http://qudt.org/schema/qudt/currencyCode'>;
    "currencyExponent": NamedNode<'http://qudt.org/schema/qudt/currencyExponent'>;
    "currencyNumber": NamedNode<'http://qudt.org/schema/qudt/currencyNumber'>;
    "dataEncoding": NamedNode<'http://qudt.org/schema/qudt/dataEncoding'>;
    "dataStructure": NamedNode<'http://qudt.org/schema/qudt/dataStructure'>;
    "default": NamedNode<'http://qudt.org/schema/qudt/default'>;
    "hasDefinedUnit": NamedNode<'http://qudt.org/schema/qudt/hasDefinedUnit'>;
    "denominatorDimensionVector": NamedNode<'http://qudt.org/schema/qudt/denominatorDimensionVector'>;
    "derivedCoherentUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedCoherentUnitOfSystem'>;
    "derivedUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedUnitOfSystem'>;
    "hasDerivedCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasDerivedCoherentUnit'>;
    "derivedNonCoherentUnitOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedNonCoherentUnitOfSystem'>;
    "hasDerivedNonCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasDerivedNonCoherentUnit'>;
    "derivedQuantityKindOfSystem": NamedNode<'http://qudt.org/schema/qudt/derivedQuantityKindOfSystem'>;
    "isQuantityKindOf": NamedNode<'http://qudt.org/schema/qudt/isQuantityKindOf'>;
    "systemDerivedQuantityKind": NamedNode<'http://qudt.org/schema/qudt/systemDerivedQuantityKind'>;
    "hasDerivedUnit": NamedNode<'http://qudt.org/schema/qudt/hasDerivedUnit'>;
    "dimensionExponent": NamedNode<'http://qudt.org/schema/qudt/dimensionExponent'>;
    "dimensionExponentForAmountOfSubstance": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForAmountOfSubstance'>;
    "dimensionExponentForElectricCurrent": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForElectricCurrent'>;
    "dimensionExponentForLength": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForLength'>;
    "dimensionExponentForLuminousIntensity": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForLuminousIntensity'>;
    "dimensionExponentForMass": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForMass'>;
    "dimensionExponentForThermodynamicTemperature": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForThermodynamicTemperature'>;
    "dimensionExponentForTime": NamedNode<'http://qudt.org/schema/qudt/dimensionExponentForTime'>;
    "dimensionInverse": NamedNode<'http://qudt.org/schema/qudt/dimensionInverse'>;
    "dimensionVectorForSI": NamedNode<'http://qudt.org/schema/qudt/dimensionVectorForSI'>;
    "dimensionlessExponent": NamedNode<'http://qudt.org/schema/qudt/dimensionlessExponent'>;
    "elementKind": NamedNode<'http://qudt.org/schema/qudt/elementKind'>;
    "elementTypeList": NamedNode<'http://qudt.org/schema/qudt/elementTypeList'>;
    "enumeratedValue": NamedNode<'http://qudt.org/schema/qudt/enumeratedValue'>;
    "enumeration": NamedNode<'http://qudt.org/schema/qudt/enumeration'>;
    "exactConstant": NamedNode<'http://qudt.org/schema/qudt/exactConstant'>;
    "exactMatch": NamedNode<'http://qudt.org/schema/qudt/exactMatch'>;
    /** The 'qudt:example' property is used to annotate an instance of a class with a reference to a concept that is an example. The type of this property is 'rdf:Property'. This allows both scalar and object ranges. */
    "example": NamedNode<'http://qudt.org/schema/qudt/example'>;
    "exponent": NamedNode<'http://qudt.org/schema/qudt/exponent'>;
    "expression": NamedNode<'http://qudt.org/schema/qudt/expression'>;
    "fieldCode": NamedNode<'http://qudt.org/schema/qudt/fieldCode'>;
    "fieldLabels": NamedNode<'http://qudt.org/schema/qudt/fieldLabels'>;
    "fieldName": NamedNode<'http://qudt.org/schema/qudt/fieldName'>;
    "figure": NamedNode<'http://qudt.org/schema/qudt/figure'>;
    "figureCaption": NamedNode<'http://qudt.org/schema/qudt/figureCaption'>;
    "figureLabel": NamedNode<'http://qudt.org/schema/qudt/figureLabel'>;
    "floatPercentage": NamedNode<'http://qudt.org/schema/qudt/floatPercentage'>;
    "generalization": NamedNode<'http://qudt.org/schema/qudt/generalization'>;
    "specialization": NamedNode<'http://qudt.org/schema/qudt/specialization'>;
    "guidance": NamedNode<'http://qudt.org/schema/qudt/guidance'>;
    "hasUnit": NamedNode<'http://qudt.org/schema/qudt/hasUnit'>;
    "hasBaseQuantityKind": NamedNode<'http://qudt.org/schema/qudt/hasBaseQuantityKind'>;
    "isBaseQuantityKindOfSystem": NamedNode<'http://qudt.org/schema/qudt/isBaseQuantityKindOfSystem'>;
    "hasDenominatorPart": NamedNode<'http://qudt.org/schema/qudt/hasDenominatorPart'>;
    "hasDimension": NamedNode<'http://qudt.org/schema/qudt/hasDimension'>;
    "hasDimensionExpression": NamedNode<'http://qudt.org/schema/qudt/hasDimensionExpression'>;
    "hasDimensionVector": NamedNode<'http://qudt.org/schema/qudt/hasDimensionVector'>;
    "hasNonCoherentUnit": NamedNode<'http://qudt.org/schema/qudt/hasNonCoherentUnit'>;
    "hasNumeratorPart": NamedNode<'http://qudt.org/schema/qudt/hasNumeratorPart'>;
    "hasPrefixUnit": NamedNode<'http://qudt.org/schema/qudt/hasPrefixUnit'>;
    "hasQuantity": NamedNode<'http://qudt.org/schema/qudt/hasQuantity'>;
    "hasReferenceQuantityKind": NamedNode<'http://qudt.org/schema/qudt/hasReferenceQuantityKind'>;
    "hasRule": NamedNode<'http://qudt.org/schema/qudt/hasRule'>;
    "hasVocabulary": NamedNode<'http://qudt.org/schema/qudt/hasVocabulary'>;
    "height": NamedNode<'http://qudt.org/schema/qudt/height'>;
    "iec61360Code": NamedNode<'http://qudt.org/schema/qudt/iec61360Code'>;
    "imageLocation": NamedNode<'http://qudt.org/schema/qudt/imageLocation'>;
    "integer1to12": NamedNode<'http://qudt.org/schema/qudt/integer1to12'>;
    "integer1to31": NamedNode<'http://qudt.org/schema/qudt/integer1to31'>;
    "integerPercentage": NamedNode<'http://qudt.org/schema/qudt/integerPercentage'>;
    "isComprisedOf": NamedNode<'http://qudt.org/schema/qudt/isComprisedOf'>;
    /** This property is used to identify a Quantity instance that is a measure of a change, or interval, of some property, rather than a measure of its absolute value. This is important for measurements such as temperature differences where the conversion among units would be calculated differently because of offsets. */
    "isDeltaQuantity": NamedNode<'http://qudt.org/schema/qudt/isDeltaQuantity'>;
    "isDimensionInSystem": NamedNode<'http://qudt.org/schema/qudt/isDimensionInSystem'>;
    "isMetricUnit": NamedNode<'http://qudt.org/schema/qudt/isMetricUnit'>;
    "isoNormativeReference": NamedNode<'http://qudt.org/schema/qudt/isoNormativeReference'>;
    "normativeReference": NamedNode<'http://qudt.org/schema/qudt/normativeReference'>;
    "landscape": NamedNode<'http://qudt.org/schema/qudt/landscape'>;
    "latexDefinition": NamedNode<'http://qudt.org/schema/qudt/latexDefinition'>;
    "latexSymbol": NamedNode<'http://qudt.org/schema/qudt/latexSymbol'>;
    "lowerBound": NamedNode<'http://qudt.org/schema/qudt/lowerBound'>;
    /** In scientific notation, the mantissa of a real number is the integer coefficient preceding the base raised to the exponent. */
    "mantissa": NamedNode<'http://qudt.org/schema/qudt/mantissa'>;
    "mathDefinition": NamedNode<'http://qudt.org/schema/qudt/mathDefinition'>;
    "mathMLdefinition": NamedNode<'http://qudt.org/schema/qudt/mathMLdefinition'>;
    "upperBound": NamedNode<'http://qudt.org/schema/qudt/upperBound'>;
    "maxMantissa": NamedNode<'http://qudt.org/schema/qudt/maxMantissa'>;
    "minMantissa": NamedNode<'http://qudt.org/schema/qudt/minMantissa'>;
    "minValue": NamedNode<'http://qudt.org/schema/qudt/minValue'>;
    /** Reference to one in a list of enumerated elements that indicates whether data (e.g. variable or parameter) can be changed. */
    "modifiability": NamedNode<'http://qudt.org/schema/qudt/modifiability'>;
    "negative": NamedNode<'http://qudt.org/schema/qudt/negative'>;
    "negativeDeltaLimit": NamedNode<'http://qudt.org/schema/qudt/negativeDeltaLimit'>;
    "numeratorDimensionVector": NamedNode<'http://qudt.org/schema/qudt/numeratorDimensionVector'>;
    "numericValue": NamedNode<'http://qudt.org/schema/qudt/numericValue'>;
    "omUnit": NamedNode<'http://qudt.org/schema/qudt/omUnit'>;
    "onlineReference": NamedNode<'http://qudt.org/schema/qudt/onlineReference'>;
    "orderedType": NamedNode<'http://qudt.org/schema/qudt/orderedType'>;
    "outOfScope": NamedNode<'http://qudt.org/schema/qudt/outOfScope'>;
    "permissibleMaths": NamedNode<'http://qudt.org/schema/qudt/permissibleMaths'>;
    "permissibleTransformation": NamedNode<'http://qudt.org/schema/qudt/permissibleTransformation'>;
    "rotationDefinition": NamedNode<'http://qudt.org/schema/qudt/rotationDefinition'>;
    "positive": NamedNode<'http://qudt.org/schema/qudt/positive'>;
    "positiveDeltaLimit": NamedNode<'http://qudt.org/schema/qudt/positiveDeltaLimit'>;
    /** Associates a unit with the appropriate prefix, if any. */
    "prefix": NamedNode<'http://qudt.org/schema/qudt/prefix'>;
    "prefixMultiplier": NamedNode<'http://qudt.org/schema/qudt/prefixMultiplier'>;
    "qkdvDenominator": NamedNode<'http://qudt.org/schema/qudt/qkdvDenominator'>;
    "qkdvNumerator": NamedNode<'http://qudt.org/schema/qudt/qkdvNumerator'>;
    "quantity": NamedNode<'http://qudt.org/schema/qudt/quantity'>;
    "quantityValue": NamedNode<'http://qudt.org/schema/qudt/quantityValue'>;
    "rationale": NamedNode<'http://qudt.org/schema/qudt/rationale'>;
    "reference": NamedNode<'http://qudt.org/schema/qudt/reference'>;
    "referenceFrameType": NamedNode<'http://qudt.org/schema/qudt/referenceFrameType'>;
    "referenceUnit": NamedNode<'http://qudt.org/schema/qudt/referenceUnit'>;
    "relativeStandardUncertainty": NamedNode<'http://qudt.org/schema/qudt/relativeStandardUncertainty'>;
    "relevantQuantityKind": NamedNode<'http://qudt.org/schema/qudt/relevantQuantityKind'>;
    /** This property is used for qudt:Discipline instances to identify the Unit instances that are used within a given discipline. */
    "relevantUnit": NamedNode<'http://qudt.org/schema/qudt/relevantUnit'>;
    "ruleType": NamedNode<'http://qudt.org/schema/qudt/ruleType'>;
    "scaleType": NamedNode<'http://qudt.org/schema/qudt/scaleType'>;
    "siUnitsExpression": NamedNode<'http://qudt.org/schema/qudt/siUnitsExpression'>;
    "significantDigits": NamedNode<'http://qudt.org/schema/qudt/significantDigits'>;
    "standardUncertainty": NamedNode<'http://qudt.org/schema/qudt/standardUncertainty'>;
    "stringValue": NamedNode<'http://qudt.org/schema/qudt/stringValue'>;
    "supercededBy": NamedNode<'http://qudt.org/schema/qudt/supercededBy'>;
    "symbol": NamedNode<'http://qudt.org/schema/qudt/symbol'>;
    "systemDefinition": NamedNode<'http://qudt.org/schema/qudt/systemDefinition'>;
    "systemDimension": NamedNode<'http://qudt.org/schema/qudt/systemDimension'>;
    "timeDatatype": NamedNode<'http://qudt.org/schema/qudt/timeDatatype'>;
    "totalDigits": NamedNode<'http://qudt.org/schema/qudt/totalDigits'>;
    "ucumCaseInsensitiveCode": NamedNode<'http://qudt.org/schema/qudt/ucumCaseInsensitiveCode'>;
    "ucumCode": NamedNode<'http://qudt.org/schema/qudt/ucumCode'>;
    "ucumCaseSensitiveCode": NamedNode<'http://qudt.org/schema/qudt/ucumCaseSensitiveCode'>;
    "udunitsCode": NamedNode<'http://qudt.org/schema/qudt/udunitsCode'>;
    "uneceCommonCode": NamedNode<'http://qudt.org/schema/qudt/uneceCommonCode'>;
    "unit": NamedNode<'http://qudt.org/schema/qudt/unit'>;
    "unitFor": NamedNode<'http://qudt.org/schema/qudt/unitFor'>;
    "valueQuantity": NamedNode<'http://qudt.org/schema/qudt/valueQuantity'>;
    "valueRange": NamedNode<'http://qudt.org/schema/qudt/valueRange'>;
    "valueType": NamedNode<'http://qudt.org/schema/qudt/valueType'>;
    "valueUnion": NamedNode<'http://qudt.org/schema/qudt/valueUnion'>;
    /** A list of the values of elements in a Partial Array. */
    "valueVector": NamedNode<'http://qudt.org/schema/qudt/valueVector'>;
    "vectorMagnitude": NamedNode<'http://qudt.org/schema/qudt/vectorMagnitude'>;
    "width": NamedNode<'http://qudt.org/schema/qudt/width'>;
    "UNSIGNED-INTEGER": NamedNode<'http://qudt.org/schema/qudt/UNSIGNED-INTEGER'>;
    "DataElement": NamedNode<'http://qudt.org/schema/qudt/DataElement'>;
    "function": NamedNode<'http://qudt.org/schema/qudt/function'>;
    "Double_X": NamedNode<'http://qudt.org/schema/qudt/Double_X'>;
    "Double_Y": NamedNode<'http://qudt.org/schema/qudt/Double_Y'>;
    "Double_Z": NamedNode<'http://qudt.org/schema/qudt/Double_Z'>;
    "fieldLabel": NamedNode<'http://qudt.org/schema/qudt/fieldLabel'>;
    "fieldType": NamedNode<'http://qudt.org/schema/qudt/fieldType'>;
    "duration": NamedNode<'http://qudt.org/schema/qudt/duration'>;
    "descriptor": NamedNode<'http://qudt.org/schema/qudt/descriptor'>;
    "baseImperialUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseImperialUnitDimensions'>;
    "baseCGSUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseCGSUnitDimensions'>;
    "baseISOUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseISOUnitDimensions'>;
    "baseSIUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseSIUnitDimensions'>;
    "baseUSCustomaryUnitDimensions": NamedNode<'http://qudt.org/schema/qudt/baseUSCustomaryUnitDimensions'>;
    "IndexedCollectionMember": NamedNode<'http://qudt.org/schema/qudt/IndexedCollectionMember'>;
    "FLOAT-DP": NamedNode<'http://qudt.org/schema/qudt/FLOAT-DP'>;
    "IndexedList": NamedNode<'http://qudt.org/schema/qudt/IndexedList'>;
    "NumericUnionList": NamedNode<'http://qudt.org/schema/qudt/NumericUnionList'>;
    "UTF16-CHAR": NamedNode<'http://qudt.org/schema/qudt/UTF16-CHAR'>;
    "UTF8-CHAR": NamedNode<'http://qudt.org/schema/qudt/UTF8-CHAR'>;
    "TIME-SERIES-TABLE-A-2x4": NamedNode<'http://qudt.org/schema/qudt/TIME-SERIES-TABLE-A-2x4'>;
    "TIME-SERIES-TABLE-B-2x4": NamedNode<'http://qudt.org/schema/qudt/TIME-SERIES-TABLE-B-2x4'>;
    "TreeListMember": NamedNode<'http://qudt.org/schema/qudt/TreeListMember'>;
    "Scalar": NamedNode<'http://qudt.org/schema/qudt/Scalar'>;
    "Parameter": NamedNode<'http://qudt.org/schema/qudt/Parameter'>;
    "incrementDatatype": NamedNode<'http://qudt.org/schema/qudt/incrementDatatype'>;
    "BooleanStateType": NamedNode<'http://qudt.org/schema/qudt/BooleanStateType'>;
    "objectValue": NamedNode<'http://qudt.org/schema/qudt/objectValue'>;
    "DatatypeStructuredData": NamedNode<'http://qudt.org/schema/qudt/DatatypeStructuredData'>;
    "STRING": NamedNode<'http://qudt.org/schema/qudt/STRING'>;
    "UnsignedLongIntegerType-literal": NamedNode<'http://qudt.org/schema/qudt/UnsignedLongIntegerType-literal'>;
    "scalarValue": NamedNode<'http://qudt.org/schema/qudt/scalarValue'>;
}

const builder = namespace("http://qudt.org/schema/qudt/") as any;
export const strict = builder as NamespaceBuilder<keyof Qudt> & Qudt;
export const loose = builder as NamespaceBuilder & Qudt;
