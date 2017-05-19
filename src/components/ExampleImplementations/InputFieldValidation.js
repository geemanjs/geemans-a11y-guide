import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';

//  language=SCSS
const Error = styled.div`
  & {
    color: #C2255C;
    margin-top: -20px;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    font-size: 0.7em;
  }
`;

class InputFieldValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  onFieldChange(e) {
    const value = e.target.value;
    if (!this.props.isValid(value)) {
      this.setState({ error: false });
      this.props.onChange(value);
    } else {
      this.setState({ error: this.props.isValid(value) });
    }
  };

  render() {
    const { error } = this.state;
    return (
      <div>
        <Input label={this.props.label} onChange={this.onFieldChange.bind(this)} errorId="error_1" />
        <Error id="error_1">{ error ? error : null}</Error>
      </div>
    )
  }
}

export default InputFieldValidation;
