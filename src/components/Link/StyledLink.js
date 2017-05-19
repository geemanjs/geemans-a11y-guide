import styled from 'styled-components';
import { Link } from 'react-router-dom';

//  language=SCSS
const StyledLink = styled(Link)`
  & {
    display: block;
    margin-left: 30px;
    margin-right: 30px;
    padding: 10px;
    color: #ffd43b;
    border-bottom: 1px solid #ffd43b;
    text-decoration: none;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    outline: 0;
  }

  &:hover, &:focus {
    background-color: #ffd43b;
    color: #4A444A
  }
`;

export default StyledLink;
