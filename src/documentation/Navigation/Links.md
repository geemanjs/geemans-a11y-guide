---
title: Links
---

## Links
The fundamental way in which we move across the web. Although relatively simple beginners 
often misuse and abuse the link.

### Essentials
* Ensure the text is descriptive as to what action will occur. Avoid:
   * 'Click here'
   * 'Next'
   * 'Go' 
* Use href's effectively
* No title required

#### More info
* [asd](asd)

### Implementation

```javascript
import React from 'react';

const Link = ({location, children}) => (
   <a href={location}>{text}</a>
);

export default Link;
```

#### Usage
```javascript
import React from 'react';
import Link from './Link';

const MyNavbar = () => (
  <ul>
    <li>
      <Link location="/about">About</Link>
      <Link location="/next">Next page</Link>
      <Link location="/section-5">Go to section 5</Link>
    </li>
  </ul>
)
```

