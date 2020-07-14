import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Time = NamespaceBuilder & {
    /*Descripción de fecha y tiempo estructurada con valores separados para los diferentes elementos de un sistema calendario-reloj. El sistema de referencia temporal está fijado al calendario gregoriano, y el rango de las propiedades año, mes, día restringidas a los correspondientes tipos del XML Schema xsd:gYear, xsd:gMonth y xsd:gDay respectivamente.*/
    "DateTimeDescription": NamedNode;
    /*'intervalo de fecha-hora' es una subclase de 'intervalo propio', definida utilizando el multi-elemento 'descripción de fecha-hora'.*/
    "DateTimeInterval": NamedNode;
    /*El día de la semana*/
    "DayOfWeek": NamedNode;
    /*Duración de una extensión temporal expresada como un número escalado por una unidad temporal.*/
    "Duration": NamedNode;
    /*Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario. El sistema de referencia temporal se fija al calendario gregoriano, y el intervalo de cada una de las propiedades numéricas se restringe a xsd:decimal.*/
    "DurationDescription": NamedNode;
    "Friday": NamedNode;
    /*Descripción de fecha y hora estructurada con valores separados para los distintos elementos de un sistema calendario-reloj.*/
    "GeneralDateTimeDescription": NamedNode;
    /*Descripción de extensión temporal estructurada con valores separados para los distintos elementos de un sistema de horario-calendario.*/
    "GeneralDurationDescription": NamedNode;
    /*A temporal entity with zero extent or duration*/
    "Instant": NamedNode;
    /*A temporal entity with an extent or duration*/
    "Interval": NamedNode;
    "January": NamedNode;
    "Monday": NamedNode;
    /*El mes del año.*/
    "MonthOfYear": NamedNode;
    /*A temporal entity with non-zero extent or duration, i.e. for which the value of the beginning and end are different*/
    "ProperInterval": NamedNode;
    "Saturday": NamedNode;
    "Sunday": NamedNode;
    /*A temporal reference system, such as a temporal coordinate system (with an origin, direction, and scale), a calendar-clock combination, or a (possibly hierarchical) ordinal system.
    
    This is a stub class, representing the set of all temporal reference systems.*/
    "TRS": NamedNode;
    /*Extensión de tiempo; duración de un intervalo de tiempo independiente de su posición de inicio particular.*/
    "TemporalDuration": NamedNode;
    /*A temporal interval or instant.*/
    "TemporalEntity": NamedNode;
    /*A position on a time-line*/
    "TemporalPosition": NamedNode;
    /*A standard duration, which provides a scale factor for a time extent, or the granularity or precision for a time position.*/
    "TemporalUnit": NamedNode;
    "Thursday": NamedNode;
    /*A temporal position described using either a (nominal) value from an ordinal reference system, or a (numeric) value in a temporal coordinate system. */
    "TimePosition": NamedNode;
    /*A Time Zone specifies the amount by which the local time is offset from UTC.
        A time zone is usually denoted geographically (e.g. Australian Eastern Daylight Time), with a constant value in a given region.
    The region where it applies and the offset from UTC are specified by a locally recognised governing authority.*/
    "TimeZone": NamedNode;
    "Tuesday": NamedNode;
    "Wednesday": NamedNode;
    /*Year duration*/
    "Year": NamedNode;
    /*Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2.*/
    "after": NamedNode;
    /*Asume una dirección en el tiempo. Si una entidad temporal T1 está antes que otra entidad temporal T2, entonces el final de T1 está antes que el principio de T2. Así, "antes" se puede considerar básica para instantes y derivada para intervalos.*/
    "before": NamedNode;
    /*Day position in a calendar-clock system.
    
    The range of this property is not specified, so can be replaced by any specific representation of a calendar day from any calendar. */
    "day": NamedNode;
    /*El día de la semana, cuyo valor es un miembro de la clase 'día de la semana'.*/
    "dayOfWeek": NamedNode;
    /*El número de día en el año.*/
    "dayOfYear": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en días.*/
    "days": NamedNode;
    /*Day of month - formulated as a text string with a pattern constraint to reproduce the same lexical form as gDay, except that values up to 99 are permitted, in order to support calendars with more than 31 days in a month.
    Note that the value-space is not defined, so a generic OWL2 processor cannot compute ordering relationships of values of this type.*/
    "generalDay": NamedNode;
    /*Mes del año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gMonth, excepto que se permiten valores hasta el 20, con el propósito de proporcionar soporte a calendarios con años con más de 12 meses.
                Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.*/
    "generalMonth": NamedNode;
    /*Número de año - formulado como una cadena de texto con una restricción patrón para reproducir la misma forma léxica que gYear, aunque no está restringido a valores del calendario gregoriano.
                Nótese que el espacio de valores no está definido, por tanto, un procesador genérico de OWL2 no puede computar relaciones de orden de valores de este tipo.*/
    "generalYear": NamedNode;
    /*Beginning of a temporal entity*/
    "hasBeginning": NamedNode;
    /*Valor de intervalo de fecha-hora expresado como un valor estructurado. El principio y el final del intervalo coincide con los límites del elemento más corto en la descripción.*/
    "hasDateTimeDescription": NamedNode;
    /*Duración de una entidad temporal, expresada como un valor escalado o un valor nominal.*/
    "hasDuration": NamedNode;
    /*Duración de una entidad temporal, expresada utilizando una descripción estructurada.*/
    "hasDurationDescription": NamedNode;
    /*End of a temporal entity.*/
    "hasEnd": NamedNode;
    /*El sistema de referencia temporal utilizado por una posición temporal o descripción de extensión.*/
    "hasTRS": NamedNode;
    /*Duración de una entidad temporal.*/
    "hasTemporalDuration": NamedNode;
    /*Proporciona soporte a la asociación de una entidad temporal (instante o intervalo) a cualquier cosa.*/
    "hasTime": NamedNode;
    /*Extensión de una entidad temporal, expresada utilizando xsd:duration.*/
    "hasXSDDuration": NamedNode;
    /*Hour position in a calendar-clock system.*/
    "hour": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en horas.*/
    "hours": NamedNode;
    /*Posición de un instante, expresada utilizando una descripción estructurada.*/
    "inDateTime": NamedNode;
    /*Posición de un instante de tiempo.*/
    "inTemporalPosition": NamedNode;
    /*Posición de un instante, expresada como una coordenada temporal o un valor nominal.*/
    "inTimePosition": NamedNode;
    /*Posición de un instante, expresado utilizando xsd:date.*/
    "inXSDDate": NamedNode;
    /*Posición de un instante, expresado utilizando xsd:dateTime.*/
    "inXSDDateTime": NamedNode;
    /*Posición de un instante, expresado utilizando xsd:dateTimeStamp.*/
    "inXSDDateTimeStamp": NamedNode;
    /*Posición de un instante, expresado utilizando xsd:gYear.*/
    "inXSDgYear": NamedNode;
    /*Posición de un instante, expresado utilizando xsd:gYearMonth.*/
    "inXSDgYearMonth": NamedNode;
    /*An instant that falls inside the interval. It is not intended to include beginnings and ends of intervals.*/
    "inside": NamedNode;
    /*If a proper interval T1 is intervalAfter another proper interval T2, then the beginning of T1 is after the end of T2.*/
    "intervalAfter": NamedNode;
    /*If a proper interval T1 is intervalBefore another proper interval T2, then the end of T1 is before the beginning of T2.*/
    "intervalBefore": NamedNode;
    /*If a proper interval T1 is intervalContains another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is after the end of T2.*/
    "intervalContains": NamedNode;
    /*If a proper interval T1 is intervalDisjoint another proper interval T2, then the beginning of T1 is after the end of T2, or the end of T1 is before the beginning of T2, i.e. the intervals do not overlap in any way, but their ordering relationship is not known.*/
    "intervalDisjoint": NamedNode;
    /*If a proper interval T1 is intervalDuring another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is before the end of T2.*/
    "intervalDuring": NamedNode;
    /*If a proper interval T1 is intervalEquals another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is coincident with the end of T2.*/
    "intervalEquals": NamedNode;
    /*If a proper interval T1 is intervalFinishedBy another proper interval T2, then the beginning of T1 is before the beginning of T2, and the end of T1 is coincident with the end of T2.*/
    "intervalFinishedBy": NamedNode;
    /*If a proper interval T1 is intervalFinishes another proper interval T2, then the beginning of T1 is after the beginning of T2, and the end of T1 is coincident with the end of T2.*/
    "intervalFinishes": NamedNode;
    /*If a proper interval T1 is intervalIn another proper interval T2, then the beginning of T1 is after the beginning of T2 or is coincident with the beginning of T2, and the end of T1 is before the end of T2, or is coincident with the end of T2, except that end of T1 may not be coincident with the end of T2 if the beginning of T1 is coincident with the beginning of T2.*/
    "intervalIn": NamedNode;
    /*If a proper interval T1 is intervalMeets another proper interval T2, then the end of T1 is coincident with the beginning of T2.*/
    "intervalMeets": NamedNode;
    /*If a proper interval T1 is intervalMetBy another proper interval T2, then the beginning of T1 is coincident with the end of T2.*/
    "intervalMetBy": NamedNode;
    /*If a proper interval T1 is intervalOverlappedBy another proper interval T2, then the beginning of T1 is after the beginning of T2, the beginning of T1 is before the end of T2, and the end of T1 is after the end of T2.*/
    "intervalOverlappedBy": NamedNode;
    /*Asume una dirección en el tiempo. Si una entidad temporal T1 está después de otra entidad temporal T2, entonces el principio de T1 está después del final de T2.*/
    "intervalOverlaps": NamedNode;
    /*If a proper interval T1 is intervalStarted another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is after the end of T2.*/
    "intervalStartedBy": NamedNode;
    /*If a proper interval T1 is intervalStarts another proper interval T2, then the beginning of T1 is coincident with the beginning of T2, and the end of T1 is before the end of T2.*/
    "intervalStarts": NamedNode;
    /*Minute position in a calendar-clock system.*/
    "minute": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en minutos.*/
    "minutes": NamedNode;
    /*Month position in a calendar-clock system.
    
    The range of this property is not specified, so can be replaced by any specific representation of a calendar month from any calendar. */
    "month": NamedNode;
    /*El mes del año, cuyo valor es un miembro de la clase 'mes del año'.*/
    "monthOfYear": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en meses.*/
    "months": NamedNode;
    /*El valor (nominal) que indica posición temporal en un sistema de referencia ordinal.*/
    "nominalPosition": NamedNode;
    /*Valor de una extensión temporal expresada como un número decimal escalado por una unidad de tiempo.*/
    "numericDuration": NamedNode;
    /*El valor (numérico) que indica posición temporal en un sistema de referencia ordinal.*/
    "numericPosition": NamedNode;
    /*Posición de segundo en un sistema calendario-reloj.*/
    "second": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en segundos.*/
    "seconds": NamedNode;
    /*The time zone for clock elements in the temporal position*/
    "timeZone": NamedNode;
    "unitDay": NamedNode;
    "unitHour": NamedNode;
    "unitMinute": NamedNode;
    "unitMonth": NamedNode;
    "unitSecond": NamedNode;
    /*La unidad de tiempo que proporciona la precisión de un valor fecha-hora o la escala de una extensión temporal.*/
    "unitType": NamedNode;
    "unitWeek": NamedNode;
    "unitYear": NamedNode;
    /*Número de semana en el año.*/
    "week": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en semanas.*/
    "weeks": NamedNode;
    /*Valor de 'intervalo de fecha-hora' expresado como un valor compacto.*/
    "xsdDateTime": NamedNode;
    /*Posición de año en un sistema calendario-reloj.
    
    l rango de esta propiedad no está especificado, por tanto, se puede reemplazar por cualquier representación específica de un año de calendario de un calendario cualquiera.*/
    "year": NamedNode;
    /*Longitud de, o elemento de la longitud de, una extensión temporal expresada en años.*/
    "years": NamedNode;
    "2006": NamedNode;
    "2016": NamedNode;
};
export const time: Time = (namespace("http://www.w3.org/2006/time#") as any);
