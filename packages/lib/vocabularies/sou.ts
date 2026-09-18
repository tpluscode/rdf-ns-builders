import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Sou {
    '': NamedNode<'http://qudt.org/vocab/sou/'>;
    "ASU": NamedNode<'http://qudt.org/vocab/sou/ASU'>;
    "CGS-EMU": NamedNode<'http://qudt.org/vocab/sou/CGS-EMU'>;
    "CGS-ESU": NamedNode<'http://qudt.org/vocab/sou/CGS-ESU'>;
    "CGS-GAUSS": NamedNode<'http://qudt.org/vocab/sou/CGS-GAUSS'>;
    "CGS": NamedNode<'http://qudt.org/vocab/sou/CGS'>;
    "IMPERIAL": NamedNode<'http://qudt.org/vocab/sou/IMPERIAL'>;
    "PLANCK": NamedNode<'http://qudt.org/vocab/sou/PLANCK'>;
    "SI": NamedNode<'http://qudt.org/vocab/sou/SI'>;
    "UNSTATED": NamedNode<'http://qudt.org/vocab/sou/UNSTATED'>;
    "USCS": NamedNode<'http://qudt.org/vocab/sou/USCS'>;
}

const builder = namespace("http://qudt.org/vocab/sou/") as any;
export const strict = builder as NamespaceBuilder<keyof Sou> & Sou;
export const loose = builder as NamespaceBuilder & Sou;
