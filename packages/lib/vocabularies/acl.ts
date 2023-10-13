import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Acl {
    '': NamedNode<'http://www.w3.org/ns/auth/acl#'>;
    /** Any kind of access to a resource. Don't use this, use R W and RW */
    "Access": NamedNode<'http://www.w3.org/ns/auth/acl#Access'>;
    /**
     * The Access Control file for this information resource.
     *         This may of course be a virtual resource implemented by the access control system.
     *         Note that HTTP header `Link: <foo.acl>; rel="acl"` can also be used for this.
     */
    "accessControl": NamedNode<'http://www.w3.org/ns/auth/acl#accessControl'>;
    /** The information resource to which access is being granted. */
    "accessTo": NamedNode<'http://www.w3.org/ns/auth/acl#accessTo'>;
    /** A class of information resources to which access is being granted. */
    "accessToClass": NamedNode<'http://www.w3.org/ns/auth/acl#accessToClass'>;
    /** A person or social entity to being given the right */
    "agent": NamedNode<'http://www.w3.org/ns/auth/acl#agent'>;
    /** A class of persons or social entities to being given the right */
    "agentClass": NamedNode<'http://www.w3.org/ns/auth/acl#agentClass'>;
    /**
     * A group of persons or social entities to being given the right.
     *           The right is given to any entity which is a vcard:member of the group,
     *           as defined by the document received when the Group is dereferenced.
     */
    "agentGroup": NamedNode<'http://www.w3.org/ns/auth/acl#agentGroup'>;
    /**
     * Append accesses are specific write access which only add information, and do not remove information.
     *     For text files, for example, append access allows bytes to be added onto the end of the file.
     *     For RDF graphs, Append access allows adds triples to the graph but does not remove any.
     *     Append access is useful for dropbox functionality.
     *     Dropbox can be used for link notification, which the information added is a notification
     *     that a some link has been made elsewhere relevant to the given resource.
     *     
     */
    "Append": NamedNode<'http://www.w3.org/ns/auth/acl#Append'>;
    /**
     * A class of agents who have been authenticated.
     * In other words, anyone can access this resource, but not anonymously.
     * The social expectation is that the authentication process will provide an
     * identify and a name, or pseudonym.
     * (A new ID should not be minted for every access: the intent is that the user
     * is able to continue to use the ID for continues interactions with peers,
     * and for example to develop a reputation)
     *
     */
    "AuthenticatedAgent": NamedNode<'http://www.w3.org/ns/auth/acl#AuthenticatedAgent'>;
    /**
     * An element of access control,
     *     allowing agent to agents access of some kind to resources or classes of resources
     */
    "Authorization": NamedNode<'http://www.w3.org/ns/auth/acl#Authorization'>;
    /** Allows read/write access to the ACL for the resource(s) */
    "Control": NamedNode<'http://www.w3.org/ns/auth/acl#Control'>;
    /**
     * If a resource has no ACL file (it is 404),
     *         then access to the resource is given by the ACL of the immediately
     *         containing directory, or failing that (404) the ACL of the recursively next
     *         containing directory which has an ACL file.
     *         Within that ACL file,
     *         any Authorization which has that directory as its acl:default applies to the
     *         resource. (The highest directory must have an ACL file.)
     *
     */
    "default": NamedNode<'http://www.w3.org/ns/auth/acl#default'>;
    /**
     * THIS IS OBSOLETE AS OF 2017-08-01.   See 'default'.
     *         Was: A directory for which this authorization is used for new files in the directory.
     */
    "defaultForNew": NamedNode<'http://www.w3.org/ns/auth/acl#defaultForNew'>;
    /**
     * Delegates a person or another agent to act on behalf of the agent.
     *     For example, Alice delegates Bob to act on behalf of Alice for ACL purposes.
     */
    "delegates": NamedNode<'http://www.w3.org/ns/auth/acl#delegates'>;
    /** A mode of access such as read or write. */
    "mode": NamedNode<'http://www.w3.org/ns/auth/acl#mode'>;
    /**
     * A web application, identified by its Origin, such as
     *         <https://scripts.example.com>, being given the right.
     *         When a user of the web application at a certain origin accesses the server,
     *         then the browser sets the Origin: header to warn that a possibly untrusted webapp
     *         is being used.
     *         Then, BOTH the user AND the origin must have the required access.
     */
    "origin": NamedNode<'http://www.w3.org/ns/auth/acl#origin'>;
    /**
     * An Origin is basically a web site
     *         (Note WITHOUT the trailing slash after the domain name and port in its URI)
     *         and is the basis for controlling access to data by web apps
     *         in the Same Origin Model of web security.
     *         All scripts from the same origin are given the same right.
     */
    "Origin": NamedNode<'http://www.w3.org/ns/auth/acl#Origin'>;
    /**
     * The person or other agent which owns this.
     *     For example, the owner of a file in a filesystem.
     *     There is a sense of "right to control".   Typically defaults to the agent who created
     *     something, but can be changed.
     */
    "owner": NamedNode<'http://www.w3.org/ns/auth/acl#owner'>;
    /** The class of read operations */
    "Read": NamedNode<'http://www.w3.org/ns/auth/acl#Read'>;
    "Write": NamedNode<'http://www.w3.org/ns/auth/acl#Write'>;
}

const builder = namespace("http://www.w3.org/ns/auth/acl#") as any;
export const strict = builder as NamespaceBuilder<keyof Acl> & Acl;
export const loose = builder as NamespaceBuilder & Acl;
