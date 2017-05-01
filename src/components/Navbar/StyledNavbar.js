import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

//  language=SCSS
const NavbarStyles = styled.div`
  & {
    position:fixed; 
    color:#F4EB49;
    background-color: #4A444A;
    border-right: 1px solid #2C282C;
    width: ${props => props.open ? '300px' : '0'};
    width: 340px;
    height: 100%;
    padding-top: 40px;
  }
  `;

const StyledNavbar = (props) => (
  <NavbarStyles>
    <Navbar {...props} />
  </NavbarStyles>
);

export default StyledNavbar;
