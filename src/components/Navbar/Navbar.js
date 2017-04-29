import React from 'react';
import styled from 'styled-components';
import StyledLink from '../Link/StyledLink';
import StyledSubLink from '../Link/StyledSubLink';

//  language=SCSS
const Title = styled.h1`
  & { text-align: center }
`;

const Navbar = ({toc}) => (
  <div>
    <Title>
      Geeman's<br/>A11y guide</Title>
    {toc.map((item,i) => (<StyledLink key={i} to={item.path}>
      {item.label}
      {item.routes ? item.routes.map((subItem,i) => (
        <StyledSubLink key={i} to={subItem.path}>{subItem.label}</StyledSubLink>
      )): null}
    </StyledLink> ))}
  </div>
);

export default Navbar;

