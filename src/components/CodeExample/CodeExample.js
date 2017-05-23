/* eslint-disable */
import React, {Component} from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';
import 'prismjs/components/prism-css-extras.min';

//  language=SCSS
const Header = styled.h5`
  & {
    display: block;
    padding: 0px 12px;
    background-color: #f1f3f5;
    border: 1px solid rgba(0,0,0,0.1);
    border-top-right-radius: 3px;
    border-top-left-radius: 3px;
    font-weight: bold;
    font-size: 0.6em;
  }
`;

const Pre = styled.pre`
  max-width: 560px;
`;

export default class CodeExample extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div>
        <Header>{this.props.header}</Header>
        <Pre className={'lang' + this.props.syntax}>
          <code className={'lang-' + this.props.syntax} dangerouslySetInnerHTML={{ __html: this.props.children }}>
        </code>
      </Pre>
      </div>
    )
  }
}
