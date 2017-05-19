import React from 'react';
import styled from 'styled-components';

//  language=SCSS
const BreadcrumbWrapper = styled.ul`
  & {
    list-style: none;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    font-size: 0.8em;
    margin-left: 10px;
    margin-bottom: 10px;
    padding: 0;
  }

  li {
    display: inline-block;
  }

  li:after {
    content: '/';
    margin-left: 10px;
    margin-right: 10px;
  }

  li:last-of-type:after {
    content: '';
  }
`;

const Breadcrumb = ({ items }) => {
  const last = items.pop();
  return (
    <BreadcrumbWrapper role="navigation" aria-label="breadcrumb">
      {items.map((item) =>
        (<li><a href={item.href}>{item.label}</a></li>)
      )}
      <li>{last.label}</li>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
