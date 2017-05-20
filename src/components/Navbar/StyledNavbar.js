import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

//  language=SCSS
const NavbarStyles = styled.div`
  & {
    position:fixed; 
    color:#ffd43b;
    background-color: #343a40;
    width: ${props => props.open ? '300px' : '0'};
    width: 300px;
    height: 100%;
    padding-top: 40px;
  }
  `;

const StyledNavbar = (props) => {
  console.log(props);
  return (  <NavbarStyles>
    <Navbar {...props} />
  </NavbarStyles>)
}



export default StyledNavbar;
