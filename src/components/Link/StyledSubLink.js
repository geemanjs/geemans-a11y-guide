import styled from 'styled-components';
import {Link} from 'react-router-dom';

//  language=SCSS
const StyledSubLink = styled(Link)`
  & {
    display:block;
    margin-left: 20px;
    margin-right: 0;
    padding: 5px 10px;
    font-size: 0.75em;
    color: inherit;
    text-decoration: none;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    outline:0;
  }
  
  &:hover, &:focus {
    background-color: #ffd43b;
    color: #4A444A;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;

export default StyledSubLink;
