import React from 'react';
import styled from 'styled-components';

let id = 0;

//  language=SCSS
const StyledInput = styled.input`
  & {
    padding: 10px;
    display: block;
    font-size: .8em;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
  }
`;

//  language=SCSS
const StyledLabel = styled.label`
  & {
    display: block;
    font-size: 0.8em;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    position: ${props => props.display ? 'inherit' : 'absolute'};
    left: ${props => props.display ? 'inherit' : '-1000px'};
  }
`;
//  language=SCSS

const StyledWrapper = styled.div`
  & { 
    display: block;
    margin: 20px 0;
  }
`;

const Input = ({ label, type, placeholder = '', displayLabel = true, required = true, onChange, errorId=false}) => (
  <StyledWrapper>
    <StyledLabel htmlFor={'input_' + ++id} display={displayLabel}>{label} {required ? null : '(optional)'}</StyledLabel>
    <StyledInput id={'input_' + id} type={type} placeholder={placeholder} required={required} onChange={onChange} aria-describedby={errorId}/>
  </StyledWrapper>
);

export default Input;
