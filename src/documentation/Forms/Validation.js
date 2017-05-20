import React from 'react';
import Example from '../../components/Example/Example';
import CodeExample from '../../components/CodeExample/CodeExample';
import InputFieldValidation from '../../components/ExampleImplementations/InputFieldValidation';

const Validation = () => (
  <div>
    <h2>Validation</h2>
    <p>Users often enter data which is not satisfactory for your service. Validation is how you correct these problems
      and if the user has no idea what they have done wrong frustration will follow.</p>
    <p>There are two types of validation
      <ul>
        <li>Inline - These messages appear next to the form field that errored and should contain specific information
          on what the user did wrong. They should be instantaneous (client side - Javascript based). For example an
          email address entry may not have an @ character. The message should read 'Email expected. No @ character
          found'
        </li>
        <li>Block - Messages here should be returned from the server. They are a problem with the form
          as a whole such as an 'Issue connecting to the server' or a server error of some form. They shouldn't relate
          to an individual field.
        </li>
      </ul>
    </p>
    <h3>Essentials</h3>
    <section label="Inline Validation">
      <strong>Inline Validation</strong>
      <ul>
        <li>Client side Javascript errors</li>
        <li><code>aria-invalid="true"</code> should be used on each invalid field</li>
        <li>Use <code>aria-describedby</code> to link the error to the input field</li>
        <li>If the error occurred on exit of the field use <code>role="alert"</code> on the error message to interrupt
          the next fields label
        </li>
      </ul>
    </section>
    <section>
      <strong>Block level validation</strong>
      <ul>
        <li>Server side only</li>
        <li>Use <code>role="alert"</code> to focus tools to the error on load</li>
        <li>Be descriptive to the remediation action. Should they resubmit? Should they change something? Should they
          try again later?
        </li>
      </ul>
    </section>
    <h4>More info</h4>
    <ul>
      <li><a href="http://webaim.org/techniques/formvalidation/">Covers the basics well</a></li>
      <li><a href="https://www.deque.com/blog/accessible-client-side-form-validation-html5/">Good explanation of HTML5
        methods</a></li>
      <li><a href="https://medium.com/@andrew.burton/form-validation-best-practices-8e3bec7d0549">Helps set
        you in the right mindset</a></li>
    </ul>
    <h3>Examples</h3>
    <h4>Inline Field</h4>
    <section className="section-with-aside">
      <Example>
        <InputFieldValidation label="Testing validation input (Numbers only)" name="num"
                              isValid={(value) => (isNaN(value) ? 'Value should be a number' : value < 10 ? 'Value should be greater than 10' :null)} />

        <CodeExample header="Component" syntax="JSX">{
          `import React, { Component } from 'react';

let id = 0;

class InputFieldValidation extends Component {

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
    const { label, required, placeholder } = this.props;
    return (
      &lt;div&gt;
        &lt;label htmlFor={'input_' + ++id}&gt;{label} {required ? null : '(optional)'}&lt;/label&gt;
        &lt;input id={'input_' + id} type="text" placeholder={placeholder} required={required}
               onChange={this.onFieldChange.bind(this)} aria-describedby={'error_' + id} /&gt;
        &lt;span id={'error_' + id + ''}&gt;{this.state &amp;&amp; this.state.error ? this.state.error : null}&lt;/span&gt;
      &lt;/div&gt;
    )
  }
}

export default InputFieldValidation;
`
        }</CodeExample>
        <br/>
        <CodeExample header="Usage" syntax="JSX">
          {`&lt;InputFieldValidation
   label="Testing validation input"
   name="num"
   isValid={(value) =&gt; (value &lt; 10 ? 'Value should be greater than 10' : null)}
   onChange={onChange}
/&gt;`}
        </CodeExample>
        <br/>
        <CodeExample header="CSS" syntax="CSS">{
          `ul {
   list-style: none;
}
li {
   display:inline-block;
}`
        }</CodeExample>
      </Example>
      <aside>
        <blockquote>
          On focus a clear <code>outline</code> is displayed to enable the user to know their current location
        </blockquote>
      </aside>
    </section>
  </div>
);

export default Validation;
