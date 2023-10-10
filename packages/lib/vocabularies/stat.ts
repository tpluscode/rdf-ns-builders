import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Stat {
    '': NamedNode<'http://www.w3.org/ns/posix/stat#'>;
    /** time of last access */
    "atime": NamedNode<'http://www.w3.org/ns/posix/stat#atime'>;
    /** blocksize for file system I/O */
    "blksize": NamedNode<'http://www.w3.org/ns/posix/stat#blksize'>;
    /** number of 512B blocks allocated */
    "blocks": NamedNode<'http://www.w3.org/ns/posix/stat#blocks'>;
    /** time of last status change */
    "ctime": NamedNode<'http://www.w3.org/ns/posix/stat#ctime'>;
    /** ID of device containing file */
    "dev": NamedNode<'http://www.w3.org/ns/posix/stat#dev'>;
    /** group ID of owner */
    "gid": NamedNode<'http://www.w3.org/ns/posix/stat#gid'>;
    /** inode number */
    "ino": NamedNode<'http://www.w3.org/ns/posix/stat#ino'>;
    /** protection */
    "mode": NamedNode<'http://www.w3.org/ns/posix/stat#mode'>;
    /** time of last modification */
    "mtime": NamedNode<'http://www.w3.org/ns/posix/stat#mtime'>;
    /** number of hard links */
    "nlink": NamedNode<'http://www.w3.org/ns/posix/stat#nlink'>;
    /** device ID (if special file) */
    "rdev": NamedNode<'http://www.w3.org/ns/posix/stat#rdev'>;
    /** total size, in bytes */
    "size": NamedNode<'http://www.w3.org/ns/posix/stat#size'>;
    /** user ID of owner */
    "uid": NamedNode<'http://www.w3.org/ns/posix/stat#uid'>;
}

const builder = namespace("http://www.w3.org/ns/posix/stat#") as any;
export const strict = builder as NamespaceBuilder<keyof Stat> & Stat;
export const loose = builder as NamespaceBuilder & Stat;
