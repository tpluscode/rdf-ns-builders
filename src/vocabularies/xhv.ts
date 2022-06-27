import namespace, { NamespaceBuilder } from "@rdf-esm/namespace";
import { NamedNode } from "@rdfjs/types";

interface Xhv {
    '': NamedNode<'http://www.w3.org/1999/xhtml/vocab#'>;
    /**
     * A message
     *       with important, and usually time-sensitive, information. Also see
     *       alertdialog and status.
     */
    "alert": NamedNode<'http://www.w3.org/1999/xhtml/vocab#alert'>;
    /**
     * A
     *       type of dialog that contains an alert message, where initial focus goes
     *       to the dialog or an element within it. Also see alert and dialog.
     */
    "alertdialog": NamedNode<'http://www.w3.org/1999/xhtml/vocab#alertdialog'>;
    /**
     * alternate designates alternate
     *       versions for a resource.
     */
    "alternate": NamedNode<'http://www.w3.org/1999/xhtml/vocab#alternate'>;
    /**
     * appendix refers to a resource serving
     *       as an appendix in a collection. 
     */
    "appendix": NamedNode<'http://www.w3.org/1999/xhtml/vocab#appendix'>;
    /**
     * A
     *       region declared as a web application, as opposed to a web document.
     */
    "application": NamedNode<'http://www.w3.org/1999/xhtml/vocab#application'>;
    /**
     * A
     *       section of a page consisting of an independent part of a document, page,
     *       or site.
     */
    "article": NamedNode<'http://www.w3.org/1999/xhtml/vocab#article'>;
    /**
     * banner contains the prime heading or
     *       internal title of a page. 
     */
    "banner": NamedNode<'http://www.w3.org/1999/xhtml/vocab#banner'>;
    /**
     * bookmark refers to a bookmark - a link
     *       to a key entry point within an extended document. 
     */
    "bookmark": NamedNode<'http://www.w3.org/1999/xhtml/vocab#bookmark'>;
    /**
     * An input
     *       that allows for user-triggered actions when clicked or pressed.
     */
    "button": NamedNode<'http://www.w3.org/1999/xhtml/vocab#button'>;
    /**
     * chapter refers to a resource serving
     *       as a chapter in a collction. 
     */
    "chapter": NamedNode<'http://www.w3.org/1999/xhtml/vocab#chapter'>;
    /**
     * An
     *       checkable input that has three possible values: true, false, or
     *     mixed.
     */
    "checkbox": NamedNode<'http://www.w3.org/1999/xhtml/vocab#checkbox'>;
    /**
     * cite refers to a resource that defines
     *       a citation. 
     */
    "cite": NamedNode<'http://www.w3.org/1999/xhtml/vocab#cite'>;
    /**
     * A
     *       cell containing header information for a column.
     */
    "columnheader": NamedNode<'http://www.w3.org/1999/xhtml/vocab#columnheader'>;
    /**
     * A
     *       presentation of a select; usually similar to a textbox where users can
     *       type ahead to select an option, or type to enter arbitrary text as a new
     *       item in the list.
     */
    "combobox": NamedNode<'http://www.w3.org/1999/xhtml/vocab#combobox'>;
    /**
     * secondary indicates that the section
     *       supports but is separable from the main content of resource.
     */
    "complementary": NamedNode<'http://www.w3.org/1999/xhtml/vocab#complementary'>;
    /**
     * contentinfo has meta information about
     *       the content on the page or the page as a whole.
     */
    "contentinfo": NamedNode<'http://www.w3.org/1999/xhtml/vocab#contentinfo'>;
    /**
     * contents refers to a resource serving
     *       as a table of contents. 
     */
    "contents": NamedNode<'http://www.w3.org/1999/xhtml/vocab#contents'>;
    /**
     * copyright refers to a copyright
     *       statement for the resource. 
     */
    "copyright": NamedNode<'http://www.w3.org/1999/xhtml/vocab#copyright'>;
    /**
     * definition indicates the definition of
     *       a term or concept.
     */
    "definition": NamedNode<'http://www.w3.org/1999/xhtml/vocab#definition'>;
    /**
     * A dialog
     *       is an application window that is designed to interrupt the current
     *       processing of an application in order to prompt the user to enter
     *       information or require a response. Also see alertdialog.
     */
    "dialog": NamedNode<'http://www.w3.org/1999/xhtml/vocab#dialog'>;
    /**
     * A list
     *       of references to members of a group, such as a static table of
     *     contents.
     */
    "directory": NamedNode<'http://www.w3.org/1999/xhtml/vocab#directory'>;
    /**
     * A
     *       region containing related information that is declared as document
     *       content, as opposed to a web application.
     */
    "document": NamedNode<'http://www.w3.org/1999/xhtml/vocab#document'>;
    /**
     * first refers the first item in a
     *       collection (see also start and top).
     */
    "first": NamedNode<'http://www.w3.org/1999/xhtml/vocab#first'>;
    /**
     * glossary refers to a resource
     *       providing a glossary of terms. 
     */
    "glossary": NamedNode<'http://www.w3.org/1999/xhtml/vocab#glossary'>;
    /**
     * A grid
     *       contains cells of tabular data arranged in rows and columns, like a
     *     table.
     */
    "grid": NamedNode<'http://www.w3.org/1999/xhtml/vocab#grid'>;
    /**
     * A cell
     *       in a grid or treegrid.
     */
    "gridcell": NamedNode<'http://www.w3.org/1999/xhtml/vocab#gridcell'>;
    /**
     * A set of
     *       user interface objects which would not be included in a page summary or
     *       table of contents by an assistive technology.
     */
    "group": NamedNode<'http://www.w3.org/1999/xhtml/vocab#group'>;
    /**
     * A
     *       heading for a section of the page.
     */
    "heading": NamedNode<'http://www.w3.org/1999/xhtml/vocab#heading'>;
    /**
     * help refers to a resource offering
     *       help. 
     */
    "help": NamedNode<'http://www.w3.org/1999/xhtml/vocab#help'>;
    /**
     * icon refers to a resource that
     *       represents an icon. 
     */
    "icon": NamedNode<'http://www.w3.org/1999/xhtml/vocab#icon'>;
    /**
     * A container
     *       for a collection of elements that form an image.
     */
    "img": NamedNode<'http://www.w3.org/1999/xhtml/vocab#img'>;
    /**
     * index refers to a resource providing
     *       an index. 
     */
    "index": NamedNode<'http://www.w3.org/1999/xhtml/vocab#index'>;
    /**
     * itsRules indicates that the designated
     *       resource is an [ITS] rule set.
     */
    "itsRules": NamedNode<'http://www.w3.org/1999/xhtml/vocab#itsRules'>;
    /**
     * last refers to the last resource in a
     *       collection of resources. 
     */
    "last": NamedNode<'http://www.w3.org/1999/xhtml/vocab#last'>;
    /**
     * license refers to a resource that
     *       defines the associated license. 
     */
    "license": NamedNode<'http://www.w3.org/1999/xhtml/vocab#license'>;
    /**
     * An
     *       interactive reference to an internal or external resource.
     */
    "link": NamedNode<'http://www.w3.org/1999/xhtml/vocab#link'>;
    /**
     * A group of
     *       non-interactive list items.
     */
    "list": NamedNode<'http://www.w3.org/1999/xhtml/vocab#list'>;
    /**
     * A widget
     *       that allows the user to select one or more items from a list of
     *     choices.
     */
    "listbox": NamedNode<'http://www.w3.org/1999/xhtml/vocab#listbox'>;
    /**
     * A
     *       single item in a list, listbox, or directory.
     */
    "listitem": NamedNode<'http://www.w3.org/1999/xhtml/vocab#listitem'>;
    /**
     * A type of
     *       live region where new information is added in meaningful order and old
     *       information may disappear. Also see marquee.
     */
    "log": NamedNode<'http://www.w3.org/1999/xhtml/vocab#log'>;
    /**
     * main acts as the main content of the
     *       document. 
     */
    "main": NamedNode<'http://www.w3.org/1999/xhtml/vocab#main'>;
    /**
     * A type
     *       of live region where non-essential information changes frequently. Also
     *       see log.
     */
    "marquee": NamedNode<'http://www.w3.org/1999/xhtml/vocab#marquee'>;
    /**
     * An element
     *       that represents a mathematical expression.
     */
    "math": NamedNode<'http://www.w3.org/1999/xhtml/vocab#math'>;
    /**
     * A type of
     *       widget that offers a list of choices to the user.
     */
    "menu": NamedNode<'http://www.w3.org/1999/xhtml/vocab#menu'>;
    /**
     * A
     *       presentation of menu that usually remains visible and is usually
     *       presented horizontally.
     */
    "menubar": NamedNode<'http://www.w3.org/1999/xhtml/vocab#menubar'>;
    /**
     * An
     *       option in a group of choices contained by a menu or menubar.
     */
    "menuitem": NamedNode<'http://www.w3.org/1999/xhtml/vocab#menuitem'>;
    /**
     * A checkable menuitem that has three possible
     *       values: true, false, or mixed.
     */
    "menuitemcheckbox": NamedNode<'http://www.w3.org/1999/xhtml/vocab#menuitemcheckbox'>;
    /**
     * A
     *       checkable menuitem in a group of menuitemradio roles, only one of which
     *       can be checked at a time.
     */
    "menuitemradio": NamedNode<'http://www.w3.org/1999/xhtml/vocab#menuitemradio'>;
    /**
     * meta refers to a resource that
     *       provides metadata. 
     */
    "meta": NamedNode<'http://www.w3.org/1999/xhtml/vocab#meta'>;
    /**
     * navigation indicates a collection of
     *       items suitable for navigating the document or related documents.
     */
    "navigation": NamedNode<'http://www.w3.org/1999/xhtml/vocab#navigation'>;
    /**
     * next refers to the next resource
     *       (after the current one) in an ordered collection of resources. 
     */
    "next": NamedNode<'http://www.w3.org/1999/xhtml/vocab#next'>;
    /**
     * note indicates the content is
     *       parenthetic or ancillary to the main content of the resource. 
     */
    "note": NamedNode<'http://www.w3.org/1999/xhtml/vocab#note'>;
    /**
     * A
     *       selectable item in a select list.
     */
    "option": NamedNode<'http://www.w3.org/1999/xhtml/vocab#option'>;
    /**
     * p3pv1 refers to a P3P Policy Reference
     *       File [P3P]. 
     */
    "p3pv1": NamedNode<'http://www.w3.org/1999/xhtml/vocab#p3pv1'>;
    /**
     * An
     *       element whose role is presentational and does not need to be mapped to
     *       the accessibility API.
     */
    "presentation": NamedNode<'http://www.w3.org/1999/xhtml/vocab#presentation'>;
    /**
     * prev refers to a previous resource
     *       (before the current one) in an ordered collection of resources. 
     */
    "prev": NamedNode<'http://www.w3.org/1999/xhtml/vocab#prev'>;
    /**
     * An
     *       element that displays the progress status for tasks that take a long
     *     time.
     */
    "progressbar": NamedNode<'http://www.w3.org/1999/xhtml/vocab#progressbar'>;
    /**
     * A
     *       checkable input in a group of radio roles, only one of which can be
     *       checked at a time.
     */
    "radio": NamedNode<'http://www.w3.org/1999/xhtml/vocab#radio'>;
    /**
     * A
     *       group of radio buttons.
     */
    "radiogroup": NamedNode<'http://www.w3.org/1999/xhtml/vocab#radiogroup'>;
    /**
     * A large
     *       perceivable section of a web page or document, that the author feels
     *       should be included in a summary of page features.
     */
    "region": NamedNode<'http://www.w3.org/1999/xhtml/vocab#region'>;
    "relrev-properties": NamedNode<'http://www.w3.org/1999/xhtml/vocab#relrev-properties'>;
    "role-properties": NamedNode<'http://www.w3.org/1999/xhtml/vocab#role-properties'>;
    /**
     * role indicates the purpose of the
     *       resource. See the XHTML Role
     *       Vocabulary for roles in this vocabulary space, and XHTMLROLE for information on extending the
     *       collection of roles. 
     */
    "role": NamedNode<'http://www.w3.org/1999/xhtml/vocab#role'>;
    /**
     * A row of
     *       cells in a grid.
     */
    "row": NamedNode<'http://www.w3.org/1999/xhtml/vocab#row'>;
    /**
     * A cell
     *       containing header information for a row in a grid.
     */
    "rowheader": NamedNode<'http://www.w3.org/1999/xhtml/vocab#rowheader'>;
    /**
     * search indicates that the section
     *       provides a search facility. 
     */
    "search": NamedNode<'http://www.w3.org/1999/xhtml/vocab#search'>;
    /**
     * section refers to a resource serving
     *       as a section in a collection. 
     */
    "section": NamedNode<'http://www.w3.org/1999/xhtml/vocab#section'>;
    /**
     * A
     *       divider that separates and distinguishes sections of content or groups of
     *       menuitems.
     */
    "separator": NamedNode<'http://www.w3.org/1999/xhtml/vocab#separator'>;
    /**
     * A user
     *       input where the user selects a value from within a given range.
     */
    "slider": NamedNode<'http://www.w3.org/1999/xhtml/vocab#slider'>;
    /**
     * A
     *       form of range that expects a user to select from amongst discrete
     *     choices.
     */
    "spinbutton": NamedNode<'http://www.w3.org/1999/xhtml/vocab#spinbutton'>;
    /**
     * start refers to the first resource in
     *       a collection of resources. 
     */
    "start": NamedNode<'http://www.w3.org/1999/xhtml/vocab#start'>;
    /**
     * A
     *       container whose content is advisory information for the user but is not
     *       important enough to justify an alert. Also see alert.
     */
    "status": NamedNode<'http://www.w3.org/1999/xhtml/vocab#status'>;
    /**
     * stylesheet refers to a resource
     *       serving as a stylesheet for a resource. 
     */
    "stylesheet": NamedNode<'http://www.w3.org/1999/xhtml/vocab#stylesheet'>;
    /**
     * subsection refers to a resource
     *       serving as a subsection in a collection. 
     */
    "subsection": NamedNode<'http://www.w3.org/1999/xhtml/vocab#subsection'>;
    /**
     * A header for
     *       a tabpanel.
     */
    "tab": NamedNode<'http://www.w3.org/1999/xhtml/vocab#tab'>;
    /**
     * A list
     *       of tab elements, which are references to tabpanel elements.
     */
    "tablist": NamedNode<'http://www.w3.org/1999/xhtml/vocab#tablist'>;
    /**
     * A
     *       container for the resources associated with a tab.
     */
    "tabpanel": NamedNode<'http://www.w3.org/1999/xhtml/vocab#tabpanel'>;
    /**
     * Input
     *       that allows free-form text as their value.
     */
    "textbox": NamedNode<'http://www.w3.org/1999/xhtml/vocab#textbox'>;
    /**
     * A
     *       numerical counter which indicates an amount of elapsed time from a start
     *       point, or the time remaining until an end point.
     */
    "timer": NamedNode<'http://www.w3.org/1999/xhtml/vocab#timer'>;
    /**
     * A
     *       collection of commonly used function buttons represented in compact
     *       visual form.
     */
    "toolbar": NamedNode<'http://www.w3.org/1999/xhtml/vocab#toolbar'>;
    /**
     * A
     *       contextual popup that displays a description for an element in a mouse
     *       hover or keyboard focused state. Supplement to the normal tooltip
     *       processing of the user agent.
     */
    "tooltip": NamedNode<'http://www.w3.org/1999/xhtml/vocab#tooltip'>;
    /** top is a synonym for start. */
    "top": NamedNode<'http://www.w3.org/1999/xhtml/vocab#top'>;
    /**
     * A type of
     *       list that may contain sub-level nested groups that can be collapsed and
     *       expanded.
     */
    "tree": NamedNode<'http://www.w3.org/1999/xhtml/vocab#tree'>;
    /**
     * A grid
     *       whose rows can be expanded and collapsed in the same manner as for a
     *     tree.
     */
    "treegrid": NamedNode<'http://www.w3.org/1999/xhtml/vocab#treegrid'>;
    /**
     * An
     *       option item of a tree. This is an element within a tree that may be
     *       expanded or collapsed if it contains a sub-level group of treeitems.
     */
    "treeitem": NamedNode<'http://www.w3.org/1999/xhtml/vocab#treeitem'>;
    /**
     * up refers to a resource "above" in a
     *       hierarchically structured set. 
     */
    "up": NamedNode<'http://www.w3.org/1999/xhtml/vocab#up'>;
}

const builder = namespace("http://www.w3.org/1999/xhtml/vocab#") as any;
export const strict = builder as NamespaceBuilder<keyof Xhv> & Xhv;
export const loose = builder as NamespaceBuilder & Xhv;
