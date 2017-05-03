import React from 'react';
import Helmet from 'react-helmet';
import Prism from 'prismjs';

class Content extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    const { title, description, __content, og } = this.props;
    console.log(__content);
    return (
      <section>
        <Helmet
          title={title + ' | Geeman\'s A11y guide'}
          meta={[
            { 'name': 'description', 'content': description },
            { 'property': 'og:type', 'content': 'article' },
            { 'property': 'og:title', 'content': title },
            { 'property': 'og:description', 'content': description },
            { 'property': 'og:image', 'content': og && og['image'] },
            { 'property': 'og:image:width', 'content': og && og['image:width'] },
            { 'property': 'og:image:height', 'content': og && og['image:height'] }
          ]}
        />
        <div>
          <article>
            <section className='markdown-body' dangerouslySetInnerHTML={{ __html: __content }}></section>
          </article>
        </div>
      </section>
    )
  }
}

export default Content;
