import React from 'react';
import Prism from 'prismjs';

export default class CodeExample extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    return (
      <pre className={'lang' + this.props.syntax}>
        <code className={'lang-' + this.props.syntax} dangerouslySetInnerHTML={{__html:this.props.children}}>
        </code>
      </pre>
    )
  }
}
