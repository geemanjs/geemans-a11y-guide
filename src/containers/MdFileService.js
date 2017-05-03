import React from 'react';
import Content from '../components/Content/Content';

class MdFileService {

  constructor() {
    this.files = require.context('!markdown-with-front-matter?passoverHTML=true!../documentation/', true, /\.md$/);
  }

  getFile(file) {
    return this.files(file);
  }

  asComponent(file) {
    const props = this.getFile(file);
    return () => {
      return <Content {...props} />
    };
  }

}

export default new MdFileService();
