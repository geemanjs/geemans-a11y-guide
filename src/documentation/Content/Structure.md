---
title: Structure
---
## Structure
<div class="section-with-aside"><div>
Assistive tools use the structure of your HTML to determine the users journey through the page. Good semantics make it easier for 
assistive tools to interpret the meaning and thus offer a better experience. A positive side effect of good semantics will be the 
improvement of your SEO ranking.
</div>&nbsp;
<aside>
> * `<nav>` is used for left navbar
* `<article>` is used for main content
* `<aside>` is used for this right hand bar. 
* `<aside>` merely supplements the main content
</aside>
</div>&nbsp;
### Essentials
* Split your page into regions and use the `role` attribute to describe them 
* Use the 'correct' tag for the job
  * Section headers `h1 .. h6` to create navigable structure in the document
  * List constructs `dl` lists for key/value pairs, `ul` for unordered, `ol` where order matters
  * Group related inputs, checkboxes or radios using `fieldset` 
  * Ensure tabular data is represented in a `table` with appropriate `th` and `caption` elements to supplement experience
  * Use `p` for multiple lines of text
  * Use `nav` for navigation
* Try turning CSS off to see the structure of your page. This is the order in which a screen reader will browse your page

#### More info
 * [W3 Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/page-structure/)
 * [W3 Web Content Accessibility Guidelines](https://www.w3.org/TR/WCAG10-HTML-TECHS/#document)
 

### Examples
<div class="section-with-aside"><div>
Consider the following page:
 
This could be coded in a few different ways: 
```html
<body>
  <nav class="nav-bar">...</nav>
  <div class="left-bar">...</div>
  <div class="right-bar">...</div>
</body>
```
```html
<body>
  <nav></nav>
  <div></div>
  <div></div>
</body>
```
</div>&nbsp;
<aside>
> Some content
</aside>
</div>&nbsp;

