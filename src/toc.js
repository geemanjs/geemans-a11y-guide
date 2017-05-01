import FileStore from './containers/FileStore';

const toc = [
  { label: 'Overview', path: '/overview', content: FileStore.getFile('./Index.md') },
  {
    label: 'Content', path: '/content', content: FileStore.getFile('./Content/Index.md'),
    routes: [
      { label: 'Structure', path: '/content/structure', content: FileStore.getFile('./Content/Structure.md'), routes: [] },
      { label: 'Typography', path: '/content/typography', content: FileStore.getFile('./Content/Typography.md'), routes: [] },
      { label: 'Tables', path: '/content/tables', content: FileStore.getFile('./Content/Tables.md'), routes: [] },
      { label: 'Colour', path: '/content/colour', content: FileStore.getFile('./Content/Colour.md'), routes: [] }
    ]
  },
  {
    label: 'Navigation', path: '/navigation', content: FileStore.getFile('./Navigation/Index.md'),
    routes: [
      { label: 'Breadcrumbs', path: '/navigation/breadcrumbs', content: FileStore.getFile('./Navigation/Breadcrumbs.md'), routes: [] },
      { label: 'Hamburger', path: '/navigation/hamburger', content: FileStore.getFile('./Navigation/Hamburger.md'), routes: [] },
      { label: 'Links', path: '/navigation/links', content: FileStore.getFile('./Navigation/Links.md'), routes: [] }
    ]
  },
  { label: 'Components', path: '/components', content: FileStore.getFile('./Components/Index.md'), routes: [] }
];

export default toc;
