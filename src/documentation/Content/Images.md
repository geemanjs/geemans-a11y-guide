---
title: Images
---
## Images
Images are a great way to enable better comprehension of textual information.
 
### Essentials
 * When image conveys useful information ensure it has an `alt` tag which describes its content
 * A brand logo is an example of something that can have an empty `alt` tag 
 * Icons should have a `tooltip` or `title` to convey the textual meaning
 
#### More info
 * [WebAIM Image techniques](http://webaim.org/techniques/images/)
 
### Examples
```javascript 
import React from 'react';

const Image = ({src, alt}) => (
  <img src={src} alt={alt} />
);

export default Image;
```

```javascript 
import React from 'react';

const Icon = ({ type, text }) => (
  <i class={'icon-' + type} title={text} />
);

export default Icon;
```
