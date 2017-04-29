import Overview from './documentation/Overview';
import Content from './documentation/Content/index';
import Typography from './documentation/Content/Typography';
import Colour from './documentation/Content/Colour';
import Navigation from './documentation/Navigation/index';
import Breadcrumbs from './documentation/Navigation/Breadcrumbs';
import Hamburger from './documentation/Navigation/Hamburger';
import Links from './documentation/Navigation/Links';
import Navbar from './documentation/Navigation/Navbar';
import Components from './documentation/Components/index';

const toc = [
  { label: 'Overview', path: '/overview', component: Overview, routes: [] },
  { label: 'Content', path: '/content', component: Content, routes: [
    { label: 'Typography', path: '/content/typography', component: Typography, routes:[] },
    { label: 'Tables', path: '/content/tables', component: Typography, routes:[] },
    { label: 'Colour', path: '/content/colour', component: Colour, routes:[] }
  ]},
  { label: 'Navigation', path: '/navigation', component: Navigation, routes:[
    { label: 'Breadcrumbs', path: '/navigation/breadcrumbs', component: Breadcrumbs, routes:[] },
    { label: 'Hamburger', path: '/navigation/hamburger', component: Hamburger, routes:[] },
    { label: 'Links', path: '/navigation/links', component: Links, routes:[] },
    { label: 'Navbar', path: '/navigation/navbar', component: Navbar, routes:[] },
  ] },
  { label: 'Components', path: '/components', component: Components, routes: []}
];

export default toc;
