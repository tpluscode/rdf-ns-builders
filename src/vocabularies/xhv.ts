import { prefixes } from "@zazuko/rdf-vocabularies";
import namespace, { NamespaceBuilder } from "@rdfjs/namespace";
import { NamedNode } from "rdf-js";
type Xhv = NamespaceBuilder & {
    /*A message
          with important, and usually time-sensitive, information. Also see
          alertdialog and status.*/
    "alert": NamedNode;
    /*A
          type of dialog that contains an alert message, where initial focus goes
          to the dialog or an element within it. Also see alert and dialog.*/
    "alertdialog": NamedNode;
    /*alternate designates alternate
          versions for a resource.*/
    "alternate": NamedNode;
    /*appendix refers to a resource serving
          as an appendix in a collection. */
    "appendix": NamedNode;
    /*A
          region declared as a web application, as opposed to a web document.*/
    "application": NamedNode;
    /*A
          section of a page consisting of an independent part of a document, page,
          or site.*/
    "article": NamedNode;
    /*banner contains the prime heading or
          internal title of a page. */
    "banner": NamedNode;
    /*bookmark refers to a bookmark - a link
          to a key entry point within an extended document. */
    "bookmark": NamedNode;
    /*An input
          that allows for user-triggered actions when clicked or pressed.*/
    "button": NamedNode;
    /*chapter refers to a resource serving
          as a chapter in a collction. */
    "chapter": NamedNode;
    /*An
          checkable input that has three possible values: true, false, or
        mixed.*/
    "checkbox": NamedNode;
    /*cite refers to a resource that defines
          a citation. */
    "cite": NamedNode;
    /*A
          cell containing header information for a column.*/
    "columnheader": NamedNode;
    /*A
          presentation of a select; usually similar to a textbox where users can
          type ahead to select an option, or type to enter arbitrary text as a new
          item in the list.*/
    "combobox": NamedNode;
    /*secondary indicates that the section
          supports but is separable from the main content of resource.*/
    "complementary": NamedNode;
    /*contentinfo has meta information about
          the content on the page or the page as a whole.*/
    "contentinfo": NamedNode;
    /*contents refers to a resource serving
          as a table of contents. */
    "contents": NamedNode;
    /*copyright refers to a copyright
          statement for the resource. */
    "copyright": NamedNode;
    /*definition indicates the definition of
          a term or concept.*/
    "definition": NamedNode;
    /*A dialog
          is an application window that is designed to interrupt the current
          processing of an application in order to prompt the user to enter
          information or require a response. Also see alertdialog.*/
    "dialog": NamedNode;
    /*A list
          of references to members of a group, such as a static table of
        contents.*/
    "directory": NamedNode;
    /*A
          region containing related information that is declared as document
          content, as opposed to a web application.*/
    "document": NamedNode;
    /*first refers the first item in a
          collection (see also start and top).*/
    "first": NamedNode;
    /*glossary refers to a resource
          providing a glossary of terms. */
    "glossary": NamedNode;
    /*A grid
          contains cells of tabular data arranged in rows and columns, like a
        table.*/
    "grid": NamedNode;
    /*A cell
          in a grid or treegrid.*/
    "gridcell": NamedNode;
    /*A set of
          user interface objects which would not be included in a page summary or
          table of contents by an assistive technology.*/
    "group": NamedNode;
    /*A
          heading for a section of the page.*/
    "heading": NamedNode;
    /*help refers to a resource offering
          help. */
    "help": NamedNode;
    /*icon refers to a resource that
          represents an icon. */
    "icon": NamedNode;
    /*A container
          for a collection of elements that form an image.*/
    "img": NamedNode;
    /*index refers to a resource providing
          an index. */
    "index": NamedNode;
    /*itsRules indicates that the designated
          resource is an [ITS] rule set.*/
    "itsRules": NamedNode;
    /*last refers to the last resource in a
          collection of resources. */
    "last": NamedNode;
    /*license refers to a resource that
          defines the associated license. */
    "license": NamedNode;
    /*An
          interactive reference to an internal or external resource.*/
    "link": NamedNode;
    /*A group of
          non-interactive list items.*/
    "list": NamedNode;
    /*A widget
          that allows the user to select one or more items from a list of
        choices.*/
    "listbox": NamedNode;
    /*A
          single item in a list, listbox, or directory.*/
    "listitem": NamedNode;
    /*A type of
          live region where new information is added in meaningful order and old
          information may disappear. Also see marquee.*/
    "log": NamedNode;
    /*main acts as the main content of the
          document. */
    "main": NamedNode;
    /*A type
          of live region where non-essential information changes frequently. Also
          see log.*/
    "marquee": NamedNode;
    /*An element
          that represents a mathematical expression.*/
    "math": NamedNode;
    /*A type of
          widget that offers a list of choices to the user.*/
    "menu": NamedNode;
    /*A
          presentation of menu that usually remains visible and is usually
          presented horizontally.*/
    "menubar": NamedNode;
    /*An
          option in a group of choices contained by a menu or menubar.*/
    "menuitem": NamedNode;
    /*A checkable menuitem that has three possible
          values: true, false, or mixed.*/
    "menuitemcheckbox": NamedNode;
    /*A
          checkable menuitem in a group of menuitemradio roles, only one of which
          can be checked at a time.*/
    "menuitemradio": NamedNode;
    /*meta refers to a resource that
          provides metadata. */
    "meta": NamedNode;
    /*navigation indicates a collection of
          items suitable for navigating the document or related documents.*/
    "navigation": NamedNode;
    /*next refers to the next resource
          (after the current one) in an ordered collection of resources. */
    "next": NamedNode;
    /*note indicates the content is
          parenthetic or ancillary to the main content of the resource. */
    "note": NamedNode;
    /*A
          selectable item in a select list.*/
    "option": NamedNode;
    /*p3pv1 refers to a P3P Policy Reference
          File [P3P]. */
    "p3pv1": NamedNode;
    /*An
          element whose role is presentational and does not need to be mapped to
          the accessibility API.*/
    "presentation": NamedNode;
    /*prev refers to a previous resource
          (before the current one) in an ordered collection of resources. */
    "prev": NamedNode;
    /*An
          element that displays the progress status for tasks that take a long
        time.*/
    "progressbar": NamedNode;
    /*A
          checkable input in a group of radio roles, only one of which can be
          checked at a time.*/
    "radio": NamedNode;
    /*A
          group of radio buttons.*/
    "radiogroup": NamedNode;
    /*A large
          perceivable section of a web page or document, that the author feels
          should be included in a summary of page features.*/
    "region": NamedNode;
    "relrev-properties": NamedNode;
    "role-properties": NamedNode;
    /*role indicates the purpose of the
          resource. See the XHTML Role
          Vocabulary for roles in this vocabulary space, and XHTMLROLE for information on extending the
          collection of roles. */
    "role": NamedNode;
    /*A row of
          cells in a grid.*/
    "row": NamedNode;
    /*A cell
          containing header information for a row in a grid.*/
    "rowheader": NamedNode;
    /*search indicates that the section
          provides a search facility. */
    "search": NamedNode;
    /*section refers to a resource serving
          as a section in a collection. */
    "section": NamedNode;
    /*A
          divider that separates and distinguishes sections of content or groups of
          menuitems.*/
    "separator": NamedNode;
    /*A user
          input where the user selects a value from within a given range.*/
    "slider": NamedNode;
    /*A
          form of range that expects a user to select from amongst discrete
        choices.*/
    "spinbutton": NamedNode;
    /*start refers to the first resource in
          a collection of resources. */
    "start": NamedNode;
    /*A
          container whose content is advisory information for the user but is not
          important enough to justify an alert. Also see alert.*/
    "status": NamedNode;
    /*stylesheet refers to a resource
          serving as a stylesheet for a resource. */
    "stylesheet": NamedNode;
    /*subsection refers to a resource
          serving as a subsection in a collection. */
    "subsection": NamedNode;
    /*A header for
          a tabpanel.*/
    "tab": NamedNode;
    /*A list
          of tab elements, which are references to tabpanel elements.*/
    "tablist": NamedNode;
    /*A
          container for the resources associated with a tab.*/
    "tabpanel": NamedNode;
    /*Input
          that allows free-form text as their value.*/
    "textbox": NamedNode;
    /*A
          numerical counter which indicates an amount of elapsed time from a start
          point, or the time remaining until an end point.*/
    "timer": NamedNode;
    /*A
          collection of commonly used function buttons represented in compact
          visual form.*/
    "toolbar": NamedNode;
    /*A
          contextual popup that displays a description for an element in a mouse
          hover or keyboard focused state. Supplement to the normal tooltip
          processing of the user agent.*/
    "tooltip": NamedNode;
    /*top is a synonym for start. */
    "top": NamedNode;
    /*A type of
          list that may contain sub-level nested groups that can be collapsed and
          expanded.*/
    "tree": NamedNode;
    /*A grid
          whose rows can be expanded and collapsed in the same manner as for a
        tree.*/
    "treegrid": NamedNode;
    /*An
          option item of a tree. This is an element within a tree that may be
          expanded or collapsed if it contains a sub-level group of treeitems.*/
    "treeitem": NamedNode;
    /*up refers to a resource "above" in a
          hierarchically structured set. */
    "up": NamedNode;
};
export const xhv: Xhv = (namespace("http://www.w3.org/1999/xhtml/vocab#") as any);
