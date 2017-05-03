---
title: Typography
---
## Typography
<div class="section-with-aside"><div>
Typography is an overlooked aspect of web accessibility. Rightfully so, if you are using the standard web fonts then you won't have any 
issues. However, with CSS3 `@font-face` it's becoming much more common for custom font's to appear. 
</div>&nbsp;
<aside>
> * 'Futura' - Headers
* 'Gouda old' - Paragraph
</aside>
</div>&nbsp;
### Essentials
* Prefer `<strong>` to `<b>` and `<em>` to `<i>` as they are more semantic
* Prefer the above over CSS font styling for emphasis `font-weight: bold`
* Use real text rather than text within graphics
* Ensure a clear distinction between different components. It's quite common for different header and body fonts
* Make sure your text has sufficient colour contrast for it's size
* Use `<p>` tag for multi line text

<br/>
#### More info
* [WCAG Colour Contrast Checker](https://colour-contrast.github.io/)
* [Strong vs bold argument](http://accessibility.psu.edu/boldfacehtml/)
* [Font selection guidance](http://webaim.org/techniques/fonts/)
* [Writing style checker](http://www.hemingwayapp.com/)

<br/>
### Example
<div class="section-with-aside"><div>
```html
<p>
  I am a well <strong>marked up</strong> paragraph of text. The 
  paragraph also has a specific sentence which we want to 
  highlight. <em>This sentence is emphasised for that reason</em>
</p>
```
</div>&nbsp;
<aside>
<p>I am a well <strong>marked up paragraph</strong> of text which 
  highlights a few words using the <strong>strong tag</strong>. 
  The paragraph also has a specific sentence which we want to 
  highlight to the user. <em>This sentence is emphasised for that 
  reason</em>
  </p>
</aside>
</div>&nbsp;


