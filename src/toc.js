import React from 'react';
import Overview from './documentation/Overview';
import Content from './documentation/Content/index';
import Typography from './documentation/Content/Typography';
import Colour from './documentation/Content/Colour';

const toc = [
  { label: 'Overview', path: '/overview', component: Overview, routes: [] },
  { label: 'Content', path: '/content', component: Content, routes: [
    { label: 'Typography', path: '/content/typography', component: Typography, routes:[] },
    { label: 'Tables', path: '/content/tables', component: Typography, routes:[] },
    { label: 'Colour', path: '/content/colour', component: Colour, routes:[] }
  ]},
  { label: 'Navigation', path: '/navigation', component: <div>Nav</div> },
  { label: 'Components', path: '/components', component: <div></div>}
];

export default toc;
