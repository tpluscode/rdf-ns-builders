import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Prefix {
    '': NamedNode<'http://qudt.org/vocab/prefix/'>;
    "Atto": NamedNode<'http://qudt.org/vocab/prefix/Atto'>;
    "Centi": NamedNode<'http://qudt.org/vocab/prefix/Centi'>;
    "Deca": NamedNode<'http://qudt.org/vocab/prefix/Deca'>;
    "Deci": NamedNode<'http://qudt.org/vocab/prefix/Deci'>;
    "Deka": NamedNode<'http://qudt.org/vocab/prefix/Deka'>;
    "Exa": NamedNode<'http://qudt.org/vocab/prefix/Exa'>;
    "Exbi": NamedNode<'http://qudt.org/vocab/prefix/Exbi'>;
    "Femto": NamedNode<'http://qudt.org/vocab/prefix/Femto'>;
    "Gibi": NamedNode<'http://qudt.org/vocab/prefix/Gibi'>;
    "Giga": NamedNode<'http://qudt.org/vocab/prefix/Giga'>;
    "Hecto": NamedNode<'http://qudt.org/vocab/prefix/Hecto'>;
    "Kibi": NamedNode<'http://qudt.org/vocab/prefix/Kibi'>;
    "Kilo": NamedNode<'http://qudt.org/vocab/prefix/Kilo'>;
    "Mebi": NamedNode<'http://qudt.org/vocab/prefix/Mebi'>;
    "Mega": NamedNode<'http://qudt.org/vocab/prefix/Mega'>;
    "Micro": NamedNode<'http://qudt.org/vocab/prefix/Micro'>;
    "Milli": NamedNode<'http://qudt.org/vocab/prefix/Milli'>;
    "Nano": NamedNode<'http://qudt.org/vocab/prefix/Nano'>;
    "Pebi": NamedNode<'http://qudt.org/vocab/prefix/Pebi'>;
    "Peta": NamedNode<'http://qudt.org/vocab/prefix/Peta'>;
    "Pico": NamedNode<'http://qudt.org/vocab/prefix/Pico'>;
    "Tebi": NamedNode<'http://qudt.org/vocab/prefix/Tebi'>;
    "Tera": NamedNode<'http://qudt.org/vocab/prefix/Tera'>;
    "Yobi": NamedNode<'http://qudt.org/vocab/prefix/Yobi'>;
    "Yocto": NamedNode<'http://qudt.org/vocab/prefix/Yocto'>;
    "Yotta": NamedNode<'http://qudt.org/vocab/prefix/Yotta'>;
    "Zebi": NamedNode<'http://qudt.org/vocab/prefix/Zebi'>;
    "Zepto": NamedNode<'http://qudt.org/vocab/prefix/Zepto'>;
    "Zetta": NamedNode<'http://qudt.org/vocab/prefix/Zetta'>;
}

const builder = namespace("http://qudt.org/vocab/prefix/") as any;
export const strict = builder as NamespaceBuilder<keyof Prefix> & Prefix;
export const loose = builder as NamespaceBuilder & Prefix;
