(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{360:function(e,t,s){e.exports=s.p+"assets/img/css gridarea.69758c98.png"},404:function(e,t,s){"use strict";s.r(t);var r=s(45),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"grid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grid"}},[e._v("#")]),e._v(" Grid")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://css-tricks.com/things-ive-learned-css-grid-layout/",target:"_blank",rel:"noopener noreferrer"}},[e._v("css-tricks.com - Things I’ve Learned About CSS Grid Layout"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://css-tricks.com/snippets/css/complete-guide-grid/",target:"_blank",rel:"noopener noreferrer"}},[e._v("css-tricks.com - A complete guide to CSS Grid"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://scrimba.com/learn/R8PTE",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn CSS Grid - scrimba"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://hackernoon.com/how-css-grid-beats-bootstrap-85d5881cf163",target:"_blank",rel:"noopener noreferrer"}},[e._v("Why CSS Grid is better than Bootstrap"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://m.youtube.com/watch?v=paMmgo4MhQ8",target:"_blank",rel:"noopener noreferrer"}},[e._v("Moving From CSS Frameworks To CSS Grid"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://gridbyexample.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("gridbyexample"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://labs.jensimmons.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("jensimmons"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://rachelandrew.co.uk/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rachel Andrews"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grid - MDN"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://www.w3.org/TR/css-grid-1/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Specification w3.org"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://codepip.com/games/grid-garden/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Game: Grid Garden"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://cssgrid.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("cssgrid.io"),r("OutboundLink")],1)])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"creating-a-grid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-grid"}},[e._v("#")]),e._v(" Creating a Grid")]),e._v(" "),r("p",[e._v("=> defining the Parent/Container")]),e._v(" "),r("p",[e._v("To set up a grid, you need to have both a "),r("strong",[e._v("grid container")]),e._v(" (parent) and "),r("strong",[e._v("grid items")]),e._v(" (children).")]),e._v(" "),r("p",[e._v("To turn an HTML element into a grid container:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("display: grid;")]),e._v(" or")]),e._v(" "),r("li",[r("code",[e._v("display: inline-grid;")])])]),e._v(" "),r("p",[e._v("Direct child element(s) of the grid container automatically become grid items.")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"creating-columns-rows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-columns-rows"}},[e._v("#")]),e._v(" Creating Columns & Rows")]),e._v(" "),r("p",[e._v("Define the Columns & Rows (Number & Size): "),r("code",[e._v("grid-template: rows / columns;")])]),e._v(" "),r("p",[e._v("Or : "),r("code",[e._v("grid-template-columns")]),e._v(" or "),r("code",[e._v("grid-template-rows")]),e._v(" (By default, the rows are sized to fit evenly inside the grid.)")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 200px 300px / 20% 10% 70%"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"fraction"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fraction"}},[e._v("#")]),e._v(" Fraction")]),e._v(" "),r("p",[e._v("By using the "),r("strong",[e._v("fr")]),e._v(" unit, we can define the size of columns and rows as a fraction of the grid’s length and width.")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2fr 1fr 1fr / 1fr 3fr 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("It is possible to use fr with other units as well. Each fr represents a fraction of the "),r("strong",[e._v("available")]),e._v(" space.")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 1fr 60px 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"repeat"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#repeat"}},[e._v("#")]),e._v(" Repeat")]),e._v(" "),r("p",[e._v("The repeat function will duplicate the specifications for rows or columns a given number of times.")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("repeat")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("3"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("repeat")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 20px 50px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("repeat")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("5"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 1fr"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"minmax"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minmax"}},[e._v("#")]),e._v(" minmax")]),e._v(" "),r("p",[e._v("to prevent a row or column from getting too big or too small")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 100px "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("minmax")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" 500px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" 100px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("In this example, the first and third columns will always be 100 pixels wide, no matter the size of the grid. The second column, will vary in size (between 100 and 500 pixels) as the overall grid resizes.")]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"grid-gap"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grid-gap"}},[e._v("#")]),e._v(" Grid Gap")]),e._v(" "),r("p",[e._v("will put blank space between every row and column in the grid")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-gap")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 20px 10px"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("will set the distance between rows to 20 pixels and the distance between columns to 10 pixels. Unlike other CSS grid properties, this shorthand does not take a / between values!")]),e._v(" "),r("p",[e._v("Also: "),r("code",[e._v("grid-row-gap")]),e._v(" and "),r("code",[e._v("grid-column-gap")])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"defining-the-grid-items"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#defining-the-grid-items"}},[e._v("#")]),e._v(" Defining the Grid Items")]),e._v(" "),r("p",[e._v("we can make grid items take up more than one row and one column. In the diagram: Items A, B, C, and E span more than one row")]),e._v(" "),r("img",{staticStyle:{zoom:"50%"},attrs:{src:s(360),alt:"css gridarea.png"}}),e._v(" "),r("h2",{attrs:{id:"grid-area"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grid-area"}},[e._v("#")]),e._v(" Grid Area")]),e._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-area "),r("OutboundLink")],1),e._v(" is a shorthand for "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-row-start"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-column-start"),r("OutboundLink")],1),e._v(", "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-row-end"),r("OutboundLink")],1),e._v(" and "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end",target:"_blank",rel:"noopener noreferrer"}},[e._v("grid-column-end"),r("OutboundLink")],1),e._v(", all in one line:")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 2 / 3 / 4 / span 5"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("grid-area takes four values separated by slashes:")]),e._v(" "),r("ol",[r("li",[e._v("grid-row-start")]),e._v(" "),r("li",[e._v("grid-column-start")]),e._v(" "),r("li",[e._v("grid-row-end")]),e._v(" "),r("li",[e._v("grid-column-end")])]),e._v(" "),r("ul",[r("li",[r("p",[e._v("grid lines start at 1 and end at a value that is 1 greater than the number of rows or columns the grid has")])]),e._v(" "),r("li",[r("p",[e._v("The value for start should be the row/column at which you want the grid item to begin. The value for end should be one greater than the row/column at which you want the grid item to end")])]),e._v(" "),r("li",[r("p",[e._v("It is possible for the start-value to be greater than that end-value. Both properties can also each have negative values")])]),e._v(" "),r("li",[r("p",[e._v("use the keyword "),r("code",[e._v("span")]),e._v(" to start or end a column or row relative to its other end")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-column")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" 4 / span 2"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),r("li",[r("p",[e._v("it will also include the grid-gap if any exists.")])]),e._v(" "),r("li",[r("p",[r("code",[e._v("grid-row")]),e._v(" and "),r("code",[e._v("column-row")]),e._v(" are also available.the starting row goes before the “/“ and the ending row goes after it.")])])]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"grid-template-areas"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grid-template-areas"}},[e._v("#")]),e._v(" Grid Template Areas")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("grid-area")]),e._v(" can also be used to assign names to grid items.")]),e._v(" "),r("li",[e._v("Named grid items can be referred to by the "),r("code",[e._v("grid-template-areas")]),e._v(" property of the grid container.")]),e._v(" "),r("li",[e._v("To name sections of your web page.")]),e._v(" "),r("li",[e._v("-> gibt namen für die linien zwischen den columns")]),e._v(" "),r("li",[e._v("specifies grid named grid areas")]),e._v(" "),r("li",[e._v("Use as values in the grid-row-start, grid-row-end, grid-col-start,grid-col-end, and grid-area properties")])]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item1")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" header"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item2")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" menu"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item3")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" main"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item4")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" right"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".item5")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-area")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" footer"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n\n"),r("span",{pre:!0,attrs:{class:"token selector"}},[e._v(".grid-container")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-areas")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'header header header header header header'")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'menu main main main right right'")]),e._v("\n    "),r("span",{pre:!0,attrs:{class:"token string"}},[e._v("'menu footer footer footer footer footer'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-template-columns")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" \n  [full-start] 1fr\n  [content-start] 30em\n  [content-end] 1fr \n  [full-end]"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("hr"),e._v(" "),r("h3",{attrs:{id:"overlapping-elements"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#overlapping-elements"}},[e._v("#")]),e._v(" Overlapping Elements")]),e._v(" "),r("p",[e._v("When overlapping elements, it is generally easiest to use grid line names and the grid-area property.")]),e._v(" "),r("hr"),e._v(" "),r("h2",{attrs:{id:"justify-and-align-items-content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#justify-and-align-items-content"}},[e._v("#")]),e._v(" Justify and Align Items/Content")]),e._v(" "),r("ul",[r("li",[e._v("The "),r("strong",[e._v("column/block")]),e._v(" axis stretches from "),r("strong",[e._v("top to bottom")]),e._v(" across the web page.")]),e._v(" "),r("li",[e._v("The "),r("strong",[e._v("row/inline")]),e._v(" axis stretches from "),r("strong",[e._v("left to right")]),e._v(" across the web page")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"justify-items-align-items"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#justify-items-align-items"}},[e._v("#")]),e._v(" Justify Items - Align Items")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("justify-items")])]),e._v(" positions grid items along the inline (row) axis -> from left to right")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("align-items")])]),e._v(" positions grid items along the block, or column axis -> from top to bottom.")]),e._v(" "),r("p",[e._v("This property is declared on grid containers.")]),e._v(" "),r("p",[e._v("align-items specifies how individual elements should spread across the column axis")]),e._v(" "),r("p",[e._v("justify-items specifies how individual elements should spread across the row axis")]),e._v(" "),r("p",[e._v("Values:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("start — aligns grid items to the left/top side of the grid area")])]),e._v(" "),r("li",[r("p",[e._v("end — aligns grid items to the right/bottom side of the grid area")])]),e._v(" "),r("li",[r("p",[e._v("center — aligns grid items to the center of the grid area")])]),e._v(" "),r("li",[r("p",[e._v("stretch — stretches all items to fill the grid area")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout#Justifying_Items_on_the_Inline_or_Row_Axis",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Justify Items"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-items",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Align Items"),r("OutboundLink")],1)])])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"justify-content-align-content"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#justify-content-align-content"}},[e._v("#")]),e._v(" Justify Content - Align Content")]),e._v(" "),r("p",[e._v("position the entire grid")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("justify-content")])]),e._v(" position the entire grid along the row axis -> from left to right")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("align-content")])]),e._v(" positions the rows along the column axis -> from top to bottom")]),e._v(" "),r("p",[e._v("align-content specifies how groups of elements should spread across the column axis")]),e._v(" "),r("p",[e._v("justify-content specifies how groups of elements should spread across the row axis")]),e._v(" "),r("p",[e._v("Values:")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("start — aligns the grid to the left side/top of the grid container")])]),e._v(" "),r("li",[r("p",[e._v("end — aligns the grid to the right side/bottom of the grid container")])]),e._v(" "),r("li",[r("p",[e._v("center — centers the grid horizontally in the grid container")])]),e._v(" "),r("li",[r("p",[e._v("stretch — stretches the grid items to increase the size of the grid to expand across the container")])]),e._v(" "),r("li",[r("p",[e._v("space-around — includes an equal amount of space on each side of a grid element, resulting in double the amount of space between elements as there is before the first and after the last element")])]),e._v(" "),r("li",[r("p",[e._v("space-between — includes an equal amount of space between grid items and no space at either end")])]),e._v(" "),r("li",[r("p",[e._v("space-evenly — places an even amount of space between grid items and at either end")])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content#Values",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Justify Content"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/align-content#Values",target:"_blank",rel:"noopener noreferrer"}},[e._v("MDN - Align Content"),r("OutboundLink")],1)])])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"justify-self-align-self"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#justify-self-align-self"}},[e._v("#")]),e._v(" Justify Self - Align Self")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("justify-self")])]),e._v(" specifies how an individual element should position itself with respect to the row axis. This property will override justify-items for any item on which it is declared.")]),e._v(" "),r("p",[r("strong",[r("code",[e._v("align-self")])]),e._v(" specifies how an individual element should position itself with respect to the column axis. This property will override align-items for any item on which it is declared.")]),e._v(" "),r("p",[e._v("* align-self specifies how a single element should position itself with respect to the column axis")]),e._v(" "),r("p",[e._v("justify-self specifies how a single element should position itself with respect to the row axis")]),e._v(" "),r("p",[e._v("Values:")]),e._v(" "),r("ul",[r("li",[e._v("start — positions grid items on the left side/top of the grid area")]),e._v(" "),r("li",[e._v("end — positions grid items on the right side/bottom of the grid area")]),e._v(" "),r("li",[e._v("center — positions grid items on the center of the grid area")]),e._v(" "),r("li",[e._v("stretch — positions grid items to fill the grid area (default)")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"implicit-vs-explicit-grid"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#implicit-vs-explicit-grid"}},[e._v("#")]),e._v(" Implicit vs. Explicit Grid")]),e._v(" "),r("p",[e._v("The implicit grid is an algorithm that determines default behavior for the placement of elements when there are more than fit into the grid specified by the CSS.\n* grid-auto-rows specifies the height of rows added implicitly to the grid\n* grid-auto-columns specifies the width of columns added implicitly to the grid\nDefault behavior of the implicit grid is:")]),e._v(" "),r("ul",[r("li",[e._v("items fill up rows first, adding new rows as necessary.")]),e._v(" "),r("li",[e._v("New grid rows will only be tall enough to contain the content within them.")])]),e._v(" "),r("p",[r("code",[e._v("grid-auto-rows")]),e._v(" and "),r("code",[e._v("grid-auto-columns")]),e._v(". specify the size of grid tracks added implicitly. These properties are declared on grid containers.")]),e._v(" "),r("p",[e._v("They accept the same values as their explicit counterparts, grid-template-rows and grid-template-columns")]),e._v(" "),r("ul",[r("li",[e._v("pixels (px)")]),e._v(" "),r("li",[e._v("percentages (%)")]),e._v(" "),r("li",[e._v("fractions (fr)")]),e._v(" "),r("li",[e._v("the repeat() function")])]),e._v(" "),r("hr"),e._v(" "),r("h3",{attrs:{id:"grid-auto-flow"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grid-auto-flow"}},[e._v("#")]),e._v(" Grid Auto Flow")]),e._v(" "),r("p",[e._v("* grid-auto-flow specifies in which direction implicit elements should be created")]),e._v(" "),r("p",[e._v("In addition to setting the dimensions of implicitly-added rows and columns, we can specify the order in which they are rendered. grid-auto-flow specifies whether new elements should be added to rows or columns Values.")]),e._v(" "),r("ul",[r("li",[e._v("row — specifies the new elements should fill rows from left to right and create new rows when there are too many elements (default)")]),e._v(" "),r("li",[e._v("column — specifies the new elements should fill columns from top to bottom and create new columns when there are too many elements")]),e._v(" "),r("li",[e._v("dense — this keyword invokes an algorithm that attempts to fill holes earlier in the grid layout if smaller elements are added")])]),e._v(" "),r("p",[e._v("You can pair row and column with dense, like this:")]),e._v(" "),r("div",{staticClass:"language-css extra-class"},[r("pre",{pre:!0,attrs:{class:"language-css"}},[r("code",[r("span",{pre:!0,attrs:{class:"token property"}},[e._v("grid-auto-flow")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" row dense"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),r("p",[e._v("This property is declared on grid containers.")])])}),[],!1,null,null,null);t.default=a.exports}}]);