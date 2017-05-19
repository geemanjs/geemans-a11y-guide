---
title: 'Navigation'
---
## Navigation
This is how user more around your site or application. You should aim to have logical grouping between pages and 
opportunities for users to return to their previous location. 
 
In the single page application world it is important to remember the power of the browser 'back' button. When 
an unintended action occurs a user assumes the back button will return them to where they were so bare this in mind.

### Essentials
* Use anchor tags over javascript for jumping to or scrolling to a location on a page. Screen readers will follow the
 anchor tag but not the javascript.
* An anchor location can be defined as follows. These are especially useful for assistive tools as many offer 
shortcuts to jump to these locations `<a id="myLocation" title="My Location"></a>`
* To go to the anchor use the URL `http://localhost:3000/#myLocation` will scroll the screen and the assistive tool 
to the correct location
