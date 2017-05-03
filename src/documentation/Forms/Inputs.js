import React from 'react';
import Input from '../../components/Input/Input';
import CodeExample from '../../components/CodeExample/CodeExample';

const TextualInputs = () => (
  <div>
    <h2>Textual Inputs</h2>
    <p>
      This page documents best practices using inputs of type <code>text</code>,&nbsp;
      <code>password</code>&nbsp;and <code>textarea</code> inputs
    </p>
    <h3>Essentials</h3>
    <ul>
      <li>Always link an input field to a label <code>&lt;label for="" ...</code> and <code>&lt;input id="" ...</code>. Remember id's must
        be unique on a page
      </li>
      <li>Ensure the label has a 'descriptive' name</li>
      <li>Identify 'optional' fields rather than mandatory. Why is it there if it's optional?</li>
      <li>Although unpreferred if labels need to be hidden see the advice below</li>
    </ul>
    <h4>More info</h4>
    <h3>Examples</h3>
    <h4>Required Input with label</h4>
    <p className="no-margin">The recommended method of displaying an input. A simple label with input</p>
    <section className="section-with-aside">
      <div>
        <Input type-="text" label="Name" placeholder={'e.g John'} required={true} />
        <CodeExample syntax="html">{
          `&lt;label for="name"&gt;Name&lt;label&gt;\n&lt;input id="name" type="text" placeholder="e.g. John" required&gt;`
        }</CodeExample>
      </div>
      <aside>
        <blockquote>
          On focus a clear <code>outline</code> is displayed to enable the user to know their current location
        </blockquote>
      </aside>
    </section>

    <br />
    <h4>Optional Input with label</h4>
    <p className="no-margin">Note the following differences from above:
      <ul>
        <li>Removal of <code>required</code> from the input</li>
        <li>Addition of '(Optional)' to the label</li>
        <li>Alteration to <code>placeholder</code> so visual users know what the field is</li>
      </ul>
    </p>
    <Input type-="text" label="Name" placeholder={'e.g John'} required={false} />
    <CodeExample syntax="html">{
      `&lt;label for="name"&gt;Name (Optional)&lt;label&gt;\n&lt;input id="name" type="text" placeholder="Name"&gt;`
    }</CodeExample>

    <br />
    <h4>Input with label hidden (off screen)</h4>
    <p className="no-margin">This method still attaches a label to the input but hides the input outside the 'visible' portion of the
      screen</p>
    <br />
    <Input type-="text" label="Name" displayLabel={false} placeholder={'Name'} />
    <br/>
    <CodeExample syntax="css">{
      `.sr-only {\n\tposition: absolute;\n\tleft: 10000px;\n}`
    }</CodeExample>
    <br />
    <CodeExample syntax="html">{
      `&lt;label for="name" class="sr-only"&gt;Name&lt;label&gt;\n&lt;input id="name" type="text" placeholder="e.g. John" required&gt;`
    }</CodeExample>
  </div>
);

export default TextualInputs;
