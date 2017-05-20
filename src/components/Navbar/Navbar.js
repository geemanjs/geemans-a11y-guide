import React from 'react';
import styled from 'styled-components';
import StyledLink from '../Link/StyledLink';
import StyledSubLink from '../Link/StyledSubLink';

//  language=SCSS
const Title = styled.h1`
  & { text-align: center }
`;
//  language=SCSS
const OuterUl = styled.ul`
 & {
    list-style: none;
    padding:0;
    margin: 0;
  }
`;
//  language=SCSS
const StyledUl = styled.ul`
  & {
    list-style: none;
    padding-left: 30px;
    margin-bottom:0;
  }
`;
//  language=SCSS
const StyledLi = styled.li`
  & {
    margin-top: 4px;
    margin-bottom:4px;
  }
`;


const Navbar = ({ toc, hash }) => (
  <div>
    <Title>
      Geeman's<br />A11y guide</Title>
    <OuterUl>
      {toc.map((item, i) => (<li><StyledLink key={i} to={item.path}> {item.label}</StyledLink>
          {hash.indexOf(item.path) !== -1 ? <StyledUl>{item.routes ? item.routes.map((subItem, i) => (
            <StyledLi><StyledSubLink key={i} to={subItem.path}>{subItem.label}</StyledSubLink></StyledLi>
          )) : null}</StyledUl> : null}
        </li>
      ))}
    </OuterUl>
  </div>
);

export default Navbar;

