import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Cert {
    '': NamedNode<'http://www.w3.org/ns/auth/cert#'>;
    /**
     * A certificate is a Document that is signed.
     *     As explained here http://www.pgpi.org/doc/pgpintro/#p16
     *     'A digital certificate consists of three things:
     *         * A public key.
     *         * Certificate information. ('Identity' information about the  
     *           user, such as name, user ID, and so on.)
     *         * One or more digital signatures.'
     *     
     */
    "Certificate": NamedNode<'http://www.w3.org/ns/auth/cert#Certificate'>;
    "DSAKey": NamedNode<'http://www.w3.org/ns/auth/cert#DSAKey'>;
    /**
     *        The exponent used to encrypt the message. Number chosen between
     *        1 and the totient(p*q). Often named 'e' .
     *     
     */
    "exponent": NamedNode<'http://www.w3.org/ns/auth/cert#exponent'>;
    /**
     * <span xmlns="http://www.w3.org/1999/xhtml"><p>
     *    An encoding of a positive integer (from 0 to infinity) as a hexadecimal string that makes it easy to read and/or fun to present on the web.</p>
     *    <p>The purpose of this way of representing hexadecimals is to enable users to copy and paste hexadecimal notations as shown by most browsers, keychains or tools such as opensso, into their rdf representation of choice.  There are a wide variety of ways in which such strings can be presented. One finds the following:</p>
     * <pre>
     *   e1 dc d5 e1 00 8f 21 5e d5 cc 7c 7e c4 9c ad 86 
     *   64 aa dc 29 f2 8d d9 56 7f 31 b6 bd 1b fd b8 ee 
     *   51 0d 3c 84 59 a2 45 d2 13 59 2a 14 82 1a 0f 6e 
     *   d3 d1 4a 2d a9 4c 7e db 90 07 fc f1 8d a3 8e 38 
     *   25 21 0a 32 c1 95 31 3c ba 56 cc 17 45 87 e1 eb 
     *   fd 9f 0f 82 16 67 9f 67 fa 91 e4 0d 55 4e 52 c0 
     *   66 64 2f fe 98 8f ae f8 96 21 5e ea 38 9e 5c 4f 
     *   27 e2 48 ca ca f2 90 23 ad 99 4b cc 38 32 6d bf  
     * </pre>
     * <p>
     *  Or the same as the above, with ':' instead of spaces. We can't guarantee that these are the only ways such tools will present hexadecimals, so we are very lax.</p>
     *  <p>The letters can be uppercase or lowercase, or mixed.  </p>
     *  <p>Some strings may start with initial 00's, and can be stripped in this notation as they often are. Doing this could, in complement of 2 notation turn a positive number into a negative one, if the first hexadecimal character happens to be one of  the set {'8', '9', 'a', 'A', 'b', 'B', 'c', 'C', 'd', 'D', 'e', 'E', 'f', 'F'} .  As we interpret this string as a hexadecimal number leading 00s are not important  (Complement of 2 notation and hexadecimal overlap for positive numbers)</p>
     * <p> In order to make this fun, we allow any unicode characters in the string. A parser should </p>
     *   <ol>
     * <li>remove all non hexadecimal characters</li>
     * <li>treat the resulting as a hexadecimal representation of a number</li>
     * </ol>
     * <p>
     *  This will allow people to make an ascii - better yet a UTF-8 - picture of their public key when publishing it on the web.
     * </p>
     * <p>
     *   Cert hex is also a datatype property because we used to write it out like this
     * </p>
     *  <pre>
     *    [] a rsa:RSAPublicKey;
     *      rsa:public_exponent [ cert:hex "e1 dc d5 ..."] 
     *  </pre> 
     * <p> The above notation is now deprecated. Now we prefer the literal format below.</p>
     *  <pre>
     *    [] a rsa:RSAPublicKey;
     *      rsa:public_exponent "e1 dc d5 ..."^^cert:hex .
     *  </pre> 
     *    </span>
     *         
     */
    "hex": NamedNode<'http://www.w3.org/ns/auth/cert#hex'>;
    /**
     *     the identity of the public key. This is the entity that knows the private key and 
     *     so can decrypt messages encrypted with the public key, or encrypt messages that can 
     *     be decrypted with the public key. 
     *     
     */
    "identity": NamedNode<'http://www.w3.org/ns/auth/cert#identity'>;
    /** relates an agent to a key - most often the public key. */
    "key": NamedNode<'http://www.w3.org/ns/auth/cert#key'>;
    /** the class of keys */
    "Key": NamedNode<'http://www.w3.org/ns/auth/cert#Key'>;
    /**
     *     
     *    <p>The modulus of an RSA public and private key. 
     *    Or the modulus of a DSA Key.
     *    The modulus is encoded as a hex binary. The binary is the same as the one encoded in the 
     *   <a href="http://www.w3.org/TR/xmldsig-core/#sec-CryptoBinary">XML DSIG CryptoBinary</a>
     *   </p>
     *   <blockquote>
     *    This specification defines the ds:CryptoBinary simple type for representing arbitrary-length integers (e.g. "bignums") in XML as octet strings. The integer value is first converted to a "big endian" bitstring. The bitstring is then padded with leading zero bits so that the total number of bits == 0 mod 8 (so that there are an integral number of octets). If the bitstring contains entire leading octets that are zero, these are removed (so the high-order octet is always non-zero).
     *   </blockquote>
     *  <p>The only difference is that the octet string is then encoded using either xsd:base64Binary or xsd:hexBinary. Currently for all usages of this relation, the xsd:hexBinary datatype should be used until the SPARQL working group specifies specifies in its <a href="http://www.w3.org/TR/sparql11-entailment/#DEntRegime">D-Entailment</a> that those two types are equivalent.</p>
     *  <p>It would have been better had there been a hexInteger datatype that was standard and supported by all tools.</p>
     *    
     */
    "modulus": NamedNode<'http://www.w3.org/ns/auth/cert#modulus'>;
    /** the class of PGP Certificates */
    "PGPCertificate": NamedNode<'http://www.w3.org/ns/auth/cert#PGPCertificate'>;
    /**
     *        The exponent used to decrypt the message
     *        calculated as 
     *           public_exponent*private_exponent = 1 modulo totient(p*q)
     *        The private exponent is often named 'd'
     *     
     */
    "privateExponent": NamedNode<'http://www.w3.org/ns/auth/cert#privateExponent'>;
    /** Private Key */
    "PrivateKey": NamedNode<'http://www.w3.org/ns/auth/cert#PrivateKey'>;
    /** Public Key */
    "PublicKey": NamedNode<'http://www.w3.org/ns/auth/cert#PublicKey'>;
    /**
     *     The union of the public and private components of an RSAKey.
     *     Usually those pieces are not kept together
     *     
     */
    "RSAKey": NamedNode<'http://www.w3.org/ns/auth/cert#RSAKey'>;
    "RSAPrivateKey": NamedNode<'http://www.w3.org/ns/auth/cert#RSAPrivateKey'>;
    /**
     *     The RSA public key.  Padded message m are encrypted by applying the function
     *       modulus(power(m,exponent),modulus)
     *     
     */
    "RSAPublicKey": NamedNode<'http://www.w3.org/ns/auth/cert#RSAPublicKey'>;
    /** the class of signtatures */
    "Signature": NamedNode<'http://www.w3.org/ns/auth/cert#Signature'>;
    /** the class of X509 Certificates */
    "X509Certificate": NamedNode<'http://www.w3.org/ns/auth/cert#X509Certificate'>;
}

const builder = namespace("http://www.w3.org/ns/auth/cert#") as any;
export const strict = builder as NamespaceBuilder<keyof Cert> & Cert;
export const loose = builder as NamespaceBuilder & Cert;
