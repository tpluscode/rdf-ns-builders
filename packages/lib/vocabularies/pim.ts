import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Pim {
    '': NamedNode<'http://www.w3.org/ns/pim/space#'>;
    "ConfigurationFile": NamedNode<'http://www.w3.org/ns/pim/space#ConfigurationFile'>;
    /**
     * A  storage is a space of URIs in which you can individually control for each resource
     *     who has access to it.
     *
     */
    "ControlledStorage": NamedNode<'http://www.w3.org/ns/pim/space#ControlledStorage'>;
    "masterWorkspace": NamedNode<'http://www.w3.org/ns/pim/space#masterWorkspace'>;
    /**
     * This is a workspace for storing the
     *     information about the other workspaces.
     *     As a user, you normally don't have to worry about it.
     */
    "MasterWorkspace": NamedNode<'http://www.w3.org/ns/pim/space#MasterWorkspace'>;
    /**
     * A personal storage is a space of URIs in which you and only you have access to data,
     *     you cannot give access to anyone else.
     *
     */
    "PersonalStorage": NamedNode<'http://www.w3.org/ns/pim/space#PersonalStorage'>;
    "preferencesFile": NamedNode<'http://www.w3.org/ns/pim/space#preferencesFile'>;
    /** Aceess may not be open to the public. Contains preferences resources. */
    "PreferencesWorkspace": NamedNode<'http://www.w3.org/ns/pim/space#PreferencesWorkspace'>;
    /** Access only by the you, the user. */
    "PrivateWorkspace": NamedNode<'http://www.w3.org/ns/pim/space#PrivateWorkspace'>;
    /**
     * A public storage is a space of URIs in which you have access to data,
     *     and all data is accessible to anyone without control.
     *
     */
    "PublicStorage": NamedNode<'http://www.w3.org/ns/pim/space#PublicStorage'>;
    /**
     * Aceess is open to the public. Anything in a public workspace
     *     can be accesed by anyone.
     */
    "PublicWorkspace": NamedNode<'http://www.w3.org/ns/pim/space#PublicWorkspace'>;
    /** Access is to some but not all people. */
    "SharedWorkspace": NamedNode<'http://www.w3.org/ns/pim/space#SharedWorkspace'>;
    /**
     * The storage in which this workspace is, or the storage which
     * contains this resource, or a storage available to this agent to use.
     */
    "storage": NamedNode<'http://www.w3.org/ns/pim/space#storage'>;
    /**
     * A storage is a space of URIs in which you have access to data.
     *
     */
    "Storage": NamedNode<'http://www.w3.org/ns/pim/space#Storage'>;
    /**
     * URIs which start with this string are in this workspace or storage.
     * This may be used for constructing URIs for new storage resources.
     *
     */
    "uriPrefix": NamedNode<'http://www.w3.org/ns/pim/space#uriPrefix'>;
    "workspace": NamedNode<'http://www.w3.org/ns/pim/space#workspace'>;
    /**
     * Workspaces are place where data is stored, and associated polices of privacy.
     * A given application typically stores information in several different
     * workspaces, some being user private, some shared, and some public.
     *
     */
    "Workspace": NamedNode<'http://www.w3.org/ns/pim/space#Workspace'>;
}

const builder = namespace("http://www.w3.org/ns/pim/space#") as any;
export const strict = builder as NamespaceBuilder<keyof Pim> & Pim;
export const loose = builder as NamespaceBuilder & Pim;
