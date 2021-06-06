import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";

interface Time {
    /** Descripción de fecha y tiempo estructurada con valores separados para los diferentes elementos de un sistema calendario-reloj. El sistema de referencia temporal está fijado al calendario gregoriano, y el rango de las propiedades año, mes, día restringidas a los correspondientes tipos del XML Schema xsd:gYear, xsd:gMonth y xsd:gDay respectivamente. */
    "DateTimeDescription": NamedNode<'http://www.w3.org/2006/time#DateTimeDescription'>;
    /** 'intervalo de fecha-hora' es una subclase de 'intervalo propio', definida utilizando el multi-elemento 'descripción de fecha-hora'. */
    "DateTimeInterval": NamedNode<'http://www.w3.org/2006/time#DateTimeInterval'>;
    /** El día de la semana */
    "DayOfWeek": NamedNode<'http://www.w3.org/2006/time#DayOfWeek'>;
    /** Duración de una extensión temporal expresada como un número escalado por una unidad temporal. */
    "Duration": NamedNode<'http://www.w3.org/2006/time#Duration'>;
    /** Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario. El sistema de referencia temporal se fija al calendario gregoriano, y el intervalo de cada una de las propiedades numéricas se restringe a xsd:decimal. */
    "DurationDescription": NamedNode<'http://www.w3.org/2006/time#DurationDescription'>;
    "Friday": NamedNode<'http://www.w3.org/2006/time#Friday'>;
    /** Descripción de fecha y hora estructurada con valores separados para los distintos elementos de un sistema calendario-reloj. */
    "GeneralDateTimeDescription": NamedNode<'http://www.w3.org/2006/time#GeneralDateTimeDescription'>;
    /** Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario. */
    "GeneralDurationDescription": NamedNode<'http://www.w3.org/2006/time#GeneralDurationDescription'>;
    /** A temporal entity with zero extent or duration */
    "Instant": NamedNode<'http://www.w3.org/2006/time#Instant'>;
    /** A temporal entity with an extent or duration */
    "Interval": NamedNode<'http://www.w3.org/2006/time#Interval'>;
    "January": NamedNode<'http://www.w3.org/2006/time#January'>;
    "Monday": NamedNode<'http://www.w3.org/2006/time#Monday'>;
    /** El mes del año. */
    "MonthOfYear": NamedNode<'http://www.w3.org/2006/time#MonthOfYear'>;
    /** A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different */
    "ProperInterval": NamedNode<'http://www.w3.org/2006/time#ProperInterval'>;
    "Saturday": NamedNode<'http://www.w3.org/2006/time#Saturday'>;
    "Sunday": NamedNode<'http://www.w3.org/2006/time#Sunday'>;
    /**
     * A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system. 
     *
     * This is a stub class, representing the set of all temporal reference systems.
     */
    "TRS": NamedNode<'http://www.w3.org/2006/time#TRS'>;
    /** Extensión de tiempo; duración de un intervalo de tiempo independiente de su posición de inicio particular. */
    "TemporalDuration": NamedNode<'http://www.w3.org/2006/time#TemporalDuration'>;
    /** A temporal interval or instant. */
    "TemporalEntity": NamedNode<'http://www.w3.org/2006/time#TemporalEntity'>;
    /** A position on a time-line */
    "TemporalPosition": NamedNode<'http://www.w3.org/2006/time#TemporalPosition'>;
    /** A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position. */
    "TemporalUnit": NamedNode<'http://www.w3.org/2006/time#TemporalUnit'>;
    "Thursday": NamedNode<'http://www.w3.org/2006/time#Thursday'>;
    /** A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system. */
    "TimePosition": NamedNode<'http://www.w3.org/2006/time#TimePosition'>;
    /**
     * A Time Zone specifies the amount by which the local time is offset from UTC. 
     * 	A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region. 
     * The region where it applies and the offset from UTC are specified by a locally recognised governing authority.
     */
    "TimeZone": NamedNode<'http://www.w3.org/2006/time#TimeZone'>;
    "Tuesday": NamedNode<'http://www.w3.org/2006/time#Tuesday'>;
    "Wednesday": NamedNode<'http://www.w3.org/2006/time#Wednesday'>;
    /** Year duration */
    "Year": NamedNode<'http://www.w3.org/2006/time#Year'>;
    /** Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2. */
    "after": NamedNode<'http://www.w3.org/2006/time#after'>;
    /** Asume una dirección en el tiempo. Si una entidad temporal T1 está antes que otra entidad temporal T2, entonces el final de T1 está antes que el principio de T2. Así, "antes" se puede considerar básica para instantes y derivada para intervalos. */
    "before": NamedNode<'http://www.w3.org/2006/time#before'>;
    /**
     * Day position in a calendar-clock system.
     *
     * The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar. 
     */
    "day": NamedNode<'http://www.w3.org/2006/time#day'>;
    /** El día de la semana, cuyo valor es un miembro de la clase 'día de la semana'. */
    "dayOfWeek": NamedNode<'http://www.w3.org/2006/time#dayOfWeek'>;
    /** El número de día en el año. */
    "dayOfYear": NamedNode<'http://www.w3.org/2006/time#dayOfYear'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en días. */
    "days": NamedNode<'http://www.w3.org/2006/time#days'>;
    /**
     * Day of month - formulated as a text string with a pattern constraint to reproduce the same lexical form as gDay, except that values up to 99 are permitted, in order to support calendars with more than 31 days in a month. 
     * Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.
     */
    "generalDay": NamedNode<'http://www.w3.org/2006/time#generalDay'>;
    /**
     * Mes del año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gMonth, excepto que se permiten valores hasta el 20, con el propósito de proporcionar soporte a calendarios con años con más de 12 meses.
     *             Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.
     */
    "generalMonth": NamedNode<'http://www.w3.org/2006/time#generalMonth'>;
    /**
     * Número de año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gYear, aunque no está restringido a valores del calendario gregoriano.
     *             Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.
     */
    "generalYear": NamedNode<'http://www.w3.org/2006/time#generalYear'>;
    /** Beginning of a temporal entity */
    "hasBeginning": NamedNode<'http://www.w3.org/2006/time#hasBeginning'>;
    /** Valor de intervalo de fecha-hora expresado como un valor estructurado. El principio y el final del intervalo coincide con los límites del elemento más corto en la descripción. */
    "hasDateTimeDescription": NamedNode<'http://www.w3.org/2006/time#hasDateTimeDescription'>;
    /** Duración de una entidad temporal, expresada como un valor escalado o un valor nominal. */
    "hasDuration": NamedNode<'http://www.w3.org/2006/time#hasDuration'>;
    /** Duración de una entidad temporal, expresada utilizando una descripción estructurada. */
    "hasDurationDescription": NamedNode<'http://www.w3.org/2006/time#hasDurationDescription'>;
    /** End of a temporal entity. */
    "hasEnd": NamedNode<'http://www.w3.org/2006/time#hasEnd'>;
    /** El sistema de referencia temporal utilizado por una posición temporal o descripción de extensión. */
    "hasTRS": NamedNode<'http://www.w3.org/2006/time#hasTRS'>;
    /** Duración de una entidad temporal. */
    "hasTemporalDuration": NamedNode<'http://www.w3.org/2006/time#hasTemporalDuration'>;
    /** Proporciona soporte a la asociación de una entidad temporal (instante o intervalo) a cualquier cosa. */
    "hasTime": NamedNode<'http://www.w3.org/2006/time#hasTime'>;
    /** Extensión de una entidad temporal, expresada utilizando xsd:duration. */
    "hasXSDDuration": NamedNode<'http://www.w3.org/2006/time#hasXSDDuration'>;
    /** Hour position in a calendar-clock system. */
    "hour": NamedNode<'http://www.w3.org/2006/time#hour'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en horas. */
    "hours": NamedNode<'http://www.w3.org/2006/time#hours'>;
    /** Posición de un instante, expresada utilizando una descripción estructurada. */
    "inDateTime": NamedNode<'http://www.w3.org/2006/time#inDateTime'>;
    /** Posición de un instante de tiempo. */
    "inTemporalPosition": NamedNode<'http://www.w3.org/2006/time#inTemporalPosition'>;
    /** Posición de un instante, expresada como una coordenada temporal o un valor nominal. */
    "inTimePosition": NamedNode<'http://www.w3.org/2006/time#inTimePosition'>;
    /** Posición de un instante, expresado utilizando xsd:date. */
    "inXSDDate": NamedNode<'http://www.w3.org/2006/time#inXSDDate'>;
    /** Posición de un instante, expresado utilizando xsd:dateTime. */
    "inXSDDateTime": NamedNode<'http://www.w3.org/2006/time#inXSDDateTime'>;
    /** Posición de un instante, expresado utilizando xsd:dateTimeStamp. */
    "inXSDDateTimeStamp": NamedNode<'http://www.w3.org/2006/time#inXSDDateTimeStamp'>;
    /** Posición de un instante, expresado utilizando xsd:gYear. */
    "inXSDgYear": NamedNode<'http://www.w3.org/2006/time#inXSDgYear'>;
    /** Posición de un instante, expresado utilizando xsd:gYearMonth. */
    "inXSDgYearMonth": NamedNode<'http://www.w3.org/2006/time#inXSDgYearMonth'>;
    /** An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals. */
    "inside": NamedNode<'http://www.w3.org/2006/time#inside'>;
    /** If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2. */
    "intervalAfter": NamedNode<'http://www.w3.org/2006/time#intervalAfter'>;
    /** If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2. */
    "intervalBefore": NamedNode<'http://www.w3.org/2006/time#intervalBefore'>;
    /** If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2. */
    "intervalContains": NamedNode<'http://www.w3.org/2006/time#intervalContains'>;
    /** If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known. */
    "intervalDisjoint": NamedNode<'http://www.w3.org/2006/time#intervalDisjoint'>;
    /** If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2. */
    "intervalDuring": NamedNode<'http://www.w3.org/2006/time#intervalDuring'>;
    /** If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2. */
    "intervalEquals": NamedNode<'http://www.w3.org/2006/time#intervalEquals'>;
    /** If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2. */
    "intervalFinishedBy": NamedNode<'http://www.w3.org/2006/time#intervalFinishedBy'>;
    /** If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2. */
    "intervalFinishes": NamedNode<'http://www.w3.org/2006/time#intervalFinishes'>;
    /** If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2. */
    "intervalIn": NamedNode<'http://www.w3.org/2006/time#intervalIn'>;
    /** If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2. */
    "intervalMeets": NamedNode<'http://www.w3.org/2006/time#intervalMeets'>;
    /** If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2. */
    "intervalMetBy": NamedNode<'http://www.w3.org/2006/time#intervalMetBy'>;
    /** If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2. */
    "intervalOverlappedBy": NamedNode<'http://www.w3.org/2006/time#intervalOverlappedBy'>;
    /** Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2. */
    "intervalOverlaps": NamedNode<'http://www.w3.org/2006/time#intervalOverlaps'>;
    /** If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2. */
    "intervalStartedBy": NamedNode<'http://www.w3.org/2006/time#intervalStartedBy'>;
    /** If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2. */
    "intervalStarts": NamedNode<'http://www.w3.org/2006/time#intervalStarts'>;
    /** Minute position in a calendar-clock system. */
    "minute": NamedNode<'http://www.w3.org/2006/time#minute'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en minutos. */
    "minutes": NamedNode<'http://www.w3.org/2006/time#minutes'>;
    /**
     * Month position in a calendar-clock system.
     *
     * The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar. 
     */
    "month": NamedNode<'http://www.w3.org/2006/time#month'>;
    /** El mes del año, cuyo valor es un miembro de la clase 'mes del año'. */
    "monthOfYear": NamedNode<'http://www.w3.org/2006/time#monthOfYear'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en meses. */
    "months": NamedNode<'http://www.w3.org/2006/time#months'>;
    /** El valor (nominal) que indica posición temporal en un sistema de referencia ordinal. */
    "nominalPosition": NamedNode<'http://www.w3.org/2006/time#nominalPosition'>;
    /** Valor de una extensión temporal expresada como un número decimal escalado por una unidad de tiempo. */
    "numericDuration": NamedNode<'http://www.w3.org/2006/time#numericDuration'>;
    /** El valor (numérico) que indica posición temporal en un sistema de referencia ordinal. */
    "numericPosition": NamedNode<'http://www.w3.org/2006/time#numericPosition'>;
    /** Posición de segundo en un sistema calendario-reloj. */
    "second": NamedNode<'http://www.w3.org/2006/time#second'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en segundos. */
    "seconds": NamedNode<'http://www.w3.org/2006/time#seconds'>;
    /** The time zone for clock elements in the temporal position */
    "timeZone": NamedNode<'http://www.w3.org/2006/time#timeZone'>;
    "unitDay": NamedNode<'http://www.w3.org/2006/time#unitDay'>;
    "unitHour": NamedNode<'http://www.w3.org/2006/time#unitHour'>;
    "unitMinute": NamedNode<'http://www.w3.org/2006/time#unitMinute'>;
    "unitMonth": NamedNode<'http://www.w3.org/2006/time#unitMonth'>;
    "unitSecond": NamedNode<'http://www.w3.org/2006/time#unitSecond'>;
    /** La unidad de tiempo que proporciona la precisión de un valor fecha-hora o la escala de una extensión temporal. */
    "unitType": NamedNode<'http://www.w3.org/2006/time#unitType'>;
    "unitWeek": NamedNode<'http://www.w3.org/2006/time#unitWeek'>;
    "unitYear": NamedNode<'http://www.w3.org/2006/time#unitYear'>;
    /** Número de semana en el año. */
    "week": NamedNode<'http://www.w3.org/2006/time#week'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en semanas. */
    "weeks": NamedNode<'http://www.w3.org/2006/time#weeks'>;
    /** Valor de 'intervalo de fecha-hora' expresado como un valor compacto. */
    "xsdDateTime": NamedNode<'http://www.w3.org/2006/time#xsdDateTime'>;
    /**
     * Posición de año en un sistema calendario-reloj.
     *
     * l rango de esta propiedad no está especificado, por tanto, se puede reemplazar por cualquier representación específica de un año de calendario de un calendario cualquiera.
     */
    "year": NamedNode<'http://www.w3.org/2006/time#year'>;
    /** Longitud de, o elemento de la longitud de, una extensión temporal expresada en años. */
    "years": NamedNode<'http://www.w3.org/2006/time#years'>;
    "2006": NamedNode<'http://www.w3.org/2006/time#2006'>;
    "2016": NamedNode<'http://www.w3.org/2006/time#2016'>;
}

const builder = namespace("http://www.w3.org/2006/time#") as any;
export const strict = builder as NamespaceBuilder<keyof Time> & Time;
export const loose = builder as NamespaceBuilder & Time;
