import MdFileService from './containers/MdFileService';
import Validation from './documentation/Forms/Validation';
import TextualInputs from './documentation/Forms/Inputs';

const toc = [
  { label: 'Overview', path: '/overview', component: MdFileService.asComponent('./Index.md') },
  {
    label: 'Content', path: '/content', component: MdFileService.asComponent('./Content/Index.md'),
    routes: [
      { label: 'Structure', path: '/content/structure', component: MdFileService.asComponent('./Content/Structure.md'), routes: [] },
      { label: 'Typography', path: '/content/typography', component: MdFileService.asComponent('./Content/Typography.md'), routes: [] },
      { label: 'Tables', path: '/content/tables', component: MdFileService.asComponent('./Content/Tables.md'), routes: [] },
      { label: 'Colour', path: '/content/colour', component: MdFileService.asComponent('./Content/Colour.md'), routes: [] }
    ]
  },
  {
    label: 'Navigation', path: '/navigation', component: MdFileService.asComponent('./Navigation/Index.md'),
    routes: [
      {
        label: 'Breadcrumbs',
        path: '/navigation/breadcrumbs',
        component: MdFileService.asComponent('./Navigation/Breadcrumbs.md'),
        routes: []
      },
      { label: 'Hamburger', path: '/navigation/hamburger', component: MdFileService.asComponent('./Navigation/Hamburger.md'), routes: [] },
      { label: 'Links', path: '/navigation/links', component: MdFileService.asComponent('./Navigation/Links.md'), routes: [] }
    ]
  },
  {
    label: 'Forms', path: '/forms', component: MdFileService.asComponent('./Forms/Index.md'), routes: [
    { label: 'Validation', path: '/forms/validation', component: Validation },
    { label: 'Textual inputs', path: '/forms/textual-inputs', component: TextualInputs }
  ]
  },
  { label: 'Components', path: '/components', component: MdFileService.asComponent('./Components/Index.md'), routes: [] }
];

export default toc;
