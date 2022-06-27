import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Sou {
    '': NamedNode<'http://qudt.org/vocab/sou/'>;
    "ASU": NamedNode<'http://qudt.org/vocab/sou/ASU'>;
    "CGS-EMU": NamedNode<'http://qudt.org/vocab/sou/CGS-EMU'>;
    "CGS-ESU": NamedNode<'http://qudt.org/vocab/sou/CGS-ESU'>;
    "CGS-GAUSS": NamedNode<'http://qudt.org/vocab/sou/CGS-GAUSS'>;
    "CGS": NamedNode<'http://qudt.org/vocab/sou/CGS'>;
    "IMPERIAL": NamedNode<'http://qudt.org/vocab/sou/IMPERIAL'>;
    "PLANCK": NamedNode<'http://qudt.org/vocab/sou/PLANCK'>;
    "SI": NamedNode<'http://qudt.org/vocab/sou/SI'>;
    "SOU_ASU": NamedNode<'http://qudt.org/vocab/sou/SOU_ASU'>;
    "SOU_CGS-EMU": NamedNode<'http://qudt.org/vocab/sou/SOU_CGS-EMU'>;
    "SOU_CGS-ESU": NamedNode<'http://qudt.org/vocab/sou/SOU_CGS-ESU'>;
    "SOU_CGS-GAUSS": NamedNode<'http://qudt.org/vocab/sou/SOU_CGS-GAUSS'>;
    "SOU_CGS": NamedNode<'http://qudt.org/vocab/sou/SOU_CGS'>;
    "SOU_IMPERIAL": NamedNode<'http://qudt.org/vocab/sou/SOU_IMPERIAL'>;
    "SOU_PLANCK": NamedNode<'http://qudt.org/vocab/sou/SOU_PLANCK'>;
    "SOU_SI": NamedNode<'http://qudt.org/vocab/sou/SOU_SI'>;
    "SOU_USCS": NamedNode<'http://qudt.org/vocab/sou/SOU_USCS'>;
    "USCS": NamedNode<'http://qudt.org/vocab/sou/USCS'>;
}

const builder = namespace("http://qudt.org/vocab/sou/") as any;
export const strict = builder as NamespaceBuilder<keyof Sou> & Sou;
export const loose = builder as NamespaceBuilder & Sou;
