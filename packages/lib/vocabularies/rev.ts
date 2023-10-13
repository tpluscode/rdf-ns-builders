import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "@rdfjs/types";

export interface Rev {
    '': NamedNode<'http://purl.org/stuff/rev#'>;
    /** A comment on a review */
    "Comment": NamedNode<'http://purl.org/stuff/rev#Comment'>;
    /** The commenter on the review */
    "commenter": NamedNode<'http://purl.org/stuff/rev#commenter'>;
    /** Feedback on the review. Expresses whether the review was useful or not */
    "Feedback": NamedNode<'http://purl.org/stuff/rev#Feedback'>;
    /** Used to associate a review with a comment on the review */
    "hasComment": NamedNode<'http://purl.org/stuff/rev#hasComment'>;
    /** Associates a review with a feedback on the review */
    "hasFeedback": NamedNode<'http://purl.org/stuff/rev#hasFeedback'>;
    /** Associates a work with a a review */
    "hasReview": NamedNode<'http://purl.org/stuff/rev#hasReview'>;
    /** A numeric value */
    "maxRating": NamedNode<'http://purl.org/stuff/rev#maxRating'>;
    /** A numeric value */
    "minRating": NamedNode<'http://purl.org/stuff/rev#minRating'>;
    /** Number of positive usefulness votes (integer) */
    "positiveVotes": NamedNode<'http://purl.org/stuff/rev#positiveVotes'>;
    /** A numeric value */
    "rating": NamedNode<'http://purl.org/stuff/rev#rating'>;
    /** A review of an work */
    "Review": NamedNode<'http://purl.org/stuff/rev#Review'>;
    /** The person that has written the review */
    "reviewer": NamedNode<'http://purl.org/stuff/rev#reviewer'>;
    /** The text of the review */
    "text": NamedNode<'http://purl.org/stuff/rev#text'>;
    /** The title of the review */
    "title": NamedNode<'http://purl.org/stuff/rev#title'>;
    /** Number of usefulness votes (integer) */
    "totalVotes": NamedNode<'http://purl.org/stuff/rev#totalVotes'>;
    /** The type of media of a work under review */
    "type": NamedNode<'http://purl.org/stuff/rev#type'>;
}

const builder = namespace("http://purl.org/stuff/rev#") as any;
export const strict = builder as NamespaceBuilder<keyof Rev> & Rev;
export const loose = builder as NamespaceBuilder & Rev;
