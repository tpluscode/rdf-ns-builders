import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "rdf-js";
type Doap = NamespaceBuilder & {
    /*Dépôt GNU Arch du code source.*/
    "ArchRepository": NamedNode<'http://usefulinc.com/ns/doap#ArchRepository'>;
    /*BitKeeper Quellcode-Versionierungssystem.*/
    "BKRepository": NamedNode<'http://usefulinc.com/ns/doap#BKRepository'>;
    /*Bazaar source code branch.*/
    "BazaarBranch": NamedNode<'http://usefulinc.com/ns/doap#BazaarBranch'>;
    /*CVS Quellcode-Versionierungssystem.*/
    "CVSRepository": NamedNode<'http://usefulinc.com/ns/doap#CVSRepository'>;
    /*Dépôt darcs du code source.*/
    "DarcsRepository": NamedNode<'http://usefulinc.com/ns/doap#DarcsRepository'>;
    /*Código fonte da ramificação Git.*/
    "GitBranch": NamedNode<'http://usefulinc.com/ns/doap#GitBranch'>;
    /*Dépôt Git du code source.*/
    "GitRepository": NamedNode<'http://usefulinc.com/ns/doap#GitRepository'>;
    /*Mercurial source code repository.*/
    "HgRepository": NamedNode<'http://usefulinc.com/ns/doap#HgRepository'>;
    /*A project.*/
    "Project": NamedNode<'http://usefulinc.com/ns/doap#Project'>;
    /*Dépôt du code source.*/
    "Repository": NamedNode<'http://usefulinc.com/ns/doap#Repository'>;
    /*Dépôt Subversion du code source.*/
    "SVNRepository": NamedNode<'http://usefulinc.com/ns/doap#SVNRepository'>;
    /*A especificação de aspetos, técnicas ou outros do sistema.*/
    "Specification": NamedNode<'http://usefulinc.com/ns/doap#Specification'>;
    /*Détails sur une version d'une release d'un projet.*/
    "Version": NamedNode<'http://usefulinc.com/ns/doap#Version'>;
    /*Dépôt pour accès anonyme.*/
    "anon-root": NamedNode<'http://usefulinc.com/ns/doap#anon-root'>;
    /*Description of target user base*/
    "audience": NamedNode<'http://usefulinc.com/ns/doap#audience'>;
    /*URI de um blog relacionado com um projeto*/
    "blog": NamedNode<'http://usefulinc.com/ns/doap#blog'>;
    /*Interface web au dépôt.*/
    "browse": NamedNode<'http://usefulinc.com/ns/doap#browse'>;
    /*Bug tracker for a project.*/
    "bug-database": NamedNode<'http://usefulinc.com/ns/doap#bug-database'>;
    /*A category of project.*/
    "category": NamedNode<'http://usefulinc.com/ns/doap#category'>;
    /*Data em que algo foi criado, no formato AAAA-MM-DD. e.g. 2004-04-05*/
    "created": NamedNode<'http://usefulinc.com/ns/doap#created'>;
    /*Beschreibung eines Projekts als einfacher Text mit der Länge von 2 bis 4 Sätzen.*/
    "description": NamedNode<'http://usefulinc.com/ns/doap#description'>;
    /*A forum or community for developers of this project.*/
    "developer-forum": NamedNode<'http://usefulinc.com/ns/doap#developer-forum'>;
    /*Desarrollador de software para el proyecto.*/
    "developer": NamedNode<'http://usefulinc.com/ns/doap#developer'>;
    /*Collaborateur à la documentation du projet.*/
    "documenter": NamedNode<'http://usefulinc.com/ns/doap#documenter'>;
    /*Miroir de la page de téléchargement du programme.*/
    "download-mirror": NamedNode<'http://usefulinc.com/ns/doap#download-mirror'>;
    /*Page web à partir de laquelle on peut télécharger le programme.*/
    "download-page": NamedNode<'http://usefulinc.com/ns/doap#download-page'>;
    /*URI adresa stažení asociované s revizí.*/
    "file-release": NamedNode<'http://usefulinc.com/ns/doap#file-release'>;
    /*Ajudante ou colaborador do projeto.*/
    "helper": NamedNode<'http://usefulinc.com/ns/doap#helper'>;
    /*El URL de la página de un proyecto,
            asociada con exactamente un proyecto.*/
    "homepage": NamedNode<'http://usefulinc.com/ns/doap#homepage'>;
    /*A specification that a project implements. Could be a standard, API or legally defined level of conformance.*/
    "implements": NamedNode<'http://usefulinc.com/ns/doap#implements'>;
    /*Código de idioma ISO do projeto para o qual foi traduzido*/
    "language": NamedNode<'http://usefulinc.com/ns/doap#language'>;
    /*Die URI einer RDF-Beschreibung einer Lizenz unter der die Software herausgegeben wird. z.B. eine SPDX Referenz*/
    "license": NamedNode<'http://usefulinc.com/ns/doap#license'>;
    /*Emplacement d'un dépôt.*/
    "location": NamedNode<'http://usefulinc.com/ns/doap#location'>;
    /*Domovská stránka nebo e–mailová adresa e–mailové diskuse.*/
    "mailing-list": NamedNode<'http://usefulinc.com/ns/doap#mailing-list'>;
    /*Desarrollador principal de un proyecto, un líder de proyecto.*/
    "maintainer": NamedNode<'http://usefulinc.com/ns/doap#maintainer'>;
    /*Jméno modulu v CVS, BitKeeper nebo Arch úložišti.*/
    "module": NamedNode<'http://usefulinc.com/ns/doap#module'>;
    /*A name of something.*/
    "name": NamedNode<'http://usefulinc.com/ns/doap#name'>;
    /*El URL de la antigua página de un proyecto,
            asociada con exactamente un proyecto.*/
    "old-homepage": NamedNode<'http://usefulinc.com/ns/doap#old-homepage'>;
    /*Betriebssystem auf dem das Projekt eingesetzt werden kann. Diese Eigenschaft kann ausgelassen werden, wenn das Projekt nicht BS-spezifisch ist.*/
    "os": NamedNode<'http://usefulinc.com/ns/doap#os'>;
    /*Indicador da plataforma do software (não específico a nenhum SO), ex.: Java, Firefox, ECMA CLR*/
    "platform": NamedNode<'http://usefulinc.com/ns/doap#platform'>;
    /*Langage de programmation avec lequel un projet est implémenté,
            ou avec lequel il est prévu de l'utiliser.*/
    "programming-language": NamedNode<'http://usefulinc.com/ns/doap#programming-language'>;
    /*A project release.*/
    "release": NamedNode<'http://usefulinc.com/ns/doap#release'>;
    /*Dépôt du code source.*/
    "repository": NamedNode<'http://usefulinc.com/ns/doap#repository'>;
    /*The project that uses a repository.*/
    "repositoryOf": NamedNode<'http://usefulinc.com/ns/doap#repositoryOf'>;
    /*Identifiant de révision d'une release du programme.*/
    "revision": NamedNode<'http://usefulinc.com/ns/doap#revision'>;
    /*Page web avec des captures d'écran du projet.*/
    "screenshots": NamedNode<'http://usefulinc.com/ns/doap#screenshots'>;
    /*The URI of a web service endpoint where software as a service may be accessed*/
    "service-endpoint": NamedNode<'http://usefulinc.com/ns/doap#service-endpoint'>;
    /*Descripción corta (8 o 9 palabras) en texto plano de un proyecto.*/
    "shortdesc": NamedNode<'http://usefulinc.com/ns/doap#shortdesc'>;
    /*A forum or community that supports this project.*/
    "support-forum": NamedNode<'http://usefulinc.com/ns/doap#support-forum'>;
    /*A tester or other quality control contributor.*/
    "tester": NamedNode<'http://usefulinc.com/ns/doap#tester'>;
    /*Collaborateur à la traduction du projet.*/
    "translator": NamedNode<'http://usefulinc.com/ns/doap#translator'>;
    /*Vendor organization: commercial, free or otherwise*/
    "vendor": NamedNode<'http://usefulinc.com/ns/doap#vendor'>;
    /*L'URL du Wiki pour la discussion collaborative sur le projet.*/
    "wiki": NamedNode<'http://usefulinc.com/ns/doap#wiki'>;
};
export const doap: Doap = (namespace("http://usefulinc.com/ns/doap#") as any);
