import MdFileService from './containers/MdFileService';
import Validation from './documentation/Forms/Validation';
import TextualInputs from './documentation/Forms/Inputs';
import Tables from './documentation/Content/Tables';
import Breadcrumbs from './documentation/Navigation/Breadcrumbs';
import Selects from './documentation/Forms/Selects';
import Radios from './documentation/Forms/Radios';

const toc = [
  { label: 'Overview', path: '/overview', component: MdFileService.asComponent('./Index.md') },
  {
    label: 'Content', path: '/content', component: MdFileService.asComponent('./Content/Index.md'),
    routes: [
      { label: 'Structure', path: '/content/structure', component: MdFileService.asComponent('./Content/Structure.md'), routes: [] },
      { label: 'Typography', path: '/content/typography', component: MdFileService.asComponent('./Content/Typography.md'), routes: [] },
      { label: 'Tables', path: '/content/tables', component: Tables, routes: [] },
      { label: 'Colour', path: '/content/colour', component: MdFileService.asComponent('./Content/Colour.md'), routes: [] },
      { label: 'Images & Icons', path: '/content/images', component: MdFileService.asComponent('./Content/Images.md'), routes: [] }
    ]
  },
  {
    label: 'Navigation', path: '/navigation', component: MdFileService.asComponent('./Navigation/Index.md'),
    routes: [
      {
        label: 'Breadcrumbs',
        path: '/navigation/breadcrumbs',
        component: Breadcrumbs,
        routes: []
      },
      { label: 'Links', path: '/navigation/links', component: MdFileService.asComponent('./Navigation/Links.md'), routes: [] }
    ]
  },
  {
    label: 'Forms', path: '/forms', component: MdFileService.asComponent('./Forms/Index.md'), routes: [
    { label: 'Validation', path: '/forms/validation', component: Validation },
    { label: 'Textual inputs', path: '/forms/textual-inputs', component: TextualInputs },
    { label: 'Selects', path: '/forms/selects', component: Selects },
    { label: 'Radios & Checkboxes', path: '/forms/radios', component: Radios }
  ]
  },
  { label: 'Components', path: '/components', component: MdFileService.asComponent('./Components/Index.md'), routes: [] }
];

export default toc;