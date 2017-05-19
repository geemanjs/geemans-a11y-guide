import React from 'react';
import Input from '../../components/Input/Input';
import Example from '../../components/Example/Example';
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
      <li><strong>Every single field needs a label</strong></li>
      <li><strong>Always link an input field to a label</strong> (It's that important it's there twice) <code>&lt;label
        for="" ...</code> and <code>&lt;input id="" ...</code>. Remember id's must
        be unique on a page
      </li>
      <li>Ensure the label has a 'descriptive' name</li>
      <li>Identify 'optional' fields rather than mandatory. Why is it there if it's optional? It's possible you'll just
        end up with 'dirty' data
      </li>
      <li>Although unprefferred if labels need to be hidden see the advice in 'Input with label hidden'</li>
      <li>Vertically aligned forms are easier to comprehend</li>
    </ul>
    <h4>More info</h4>
    <ul>
      <li><a href="http://usability.com.au/2013/04/accessible-forms-1-labels-and-identification/">In depth write up on
        'why?'</a></li>
      <li><a href="https://www.w3.org/WAI/tutorials/forms/">W3 forms tutorial</a></li>
      <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/forms/Basic_form_hints">Mozilla's
        textual field advice</a></li>
    </ul>
    <br />
    <h3>Examples</h3>
    <h4>Required Input with label</h4>
    <p className="no-margin">The recommended method and the best from an accessibility perspective. A simple label with
      input vertically aligned</p>
    <section className="section-with-aside">
      <Example>
        <Input type-="text" label="Name" placeholder={'e.g John'} required={true} />
        <CodeExample header="HTML" syntax="html">{
          `&lt;label for="name"&gt;Name&lt;label&gt;\n&lt;input id="name" type="text" placeholder="e.g. John" required&gt;`
        }</CodeExample>
      </Example>
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
      </ul>
    </p>
    <Example>
      <Input type-="text" label="Name" placeholder={'e.g John'} required={false} />
      <CodeExample header="HTML" syntax="html">{
        `&lt;label for="name"&gt;Name (Optional)&lt;label&gt;\n&lt;input id="name" type="text" placeholder="Name"&gt;`
      }</CodeExample>
    </Example>

    <br />
    <h4>Input with label hidden (off screen)</h4>
    <p className="no-margin">This method still attaches a label to the input but hides the input outside the 'visible'
      portion of the
      screen</p>
    <ul>
      <li>Alteration to <code>placeholder</code> so visual users know what the field is</li>
    </ul>
    <Example>
      <Input type-="text" label="Name" displayLabel={false} placeholder={'Name'} />
      <br />
      <CodeExample header="CSS" syntax="css">{
        `.sr-only {\n\tposition: absolute;\n\tleft: 10000px;\n}`
      }</CodeExample>
      <br />
      <CodeExample header="HTML" syntax="html">{
        `&lt;label for="name" class="sr-only"&gt;Name&lt;label&gt;\n&lt;input id="name" type="text" placeholder="e.g. John" required&gt;`
      }</CodeExample>
    </Example>
  </div>
);

export default TextualInputs;
