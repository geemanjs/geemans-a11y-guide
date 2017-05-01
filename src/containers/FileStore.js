class FileStore {

  constructor() {
    this.files = require.context('!markdown-with-front-matter!../documentation/', true, /\.md$/);
  }

  getFile(file) {
    return this.files(file);
  }

}

export default new FileStore();
