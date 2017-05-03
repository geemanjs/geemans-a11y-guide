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
 
<br />
### Examples

Consider the following page:
* Insert image here
 
A beginner would typically do something like the following: 
<div class="section-with-aside"><div>
```html
<body>
  <div class="nav-bar">My navbar</div>
  <div class="left-bar">My left bar</div>
  <div class="right-bar">My right bar</div>
</body>
```
</div>&nbsp;
<aside>
> #### JAWS 17 
"My navbar, My left bar, My right bar"
</aside>
</div>
Although semantically valid the screen reader is unable to determine the 'meaning' of the content and therefore is unable to support the 
users needs. 

There are a few things we can do to give the best experience:
* Use the proper HTML5 elements for describing content
* Supplement our HTML with the ARIA role attribute to highlight to the tools what is contained.

The following code offers best support across all browsers & tools:
<div class="section-with-aside"><div>
```html
<body>
  <nav role="navigation">My navbar</nav>
  <div role="main">My left bar</div>
  <aside role="complementary">My right bar</aside>
</body>
```
</div>&nbsp;
<aside>
> #### JAWS 17 
"Navigation: My navbar, Main: My left bar, Complementary: My right bar"
</aside>
</div>
#### Page Region Tags
These HTML tags are the most common for defining page regions and should be used like `<header>Header content</header>`
 * `header`
 * `main`
 * `footer`
 * `nav`
 * `aside`
 * `section`
 * `article`
 
#### Useful Aria Roles
This [Mozilla article on Aria Roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) describes page 
region and widget roles.
