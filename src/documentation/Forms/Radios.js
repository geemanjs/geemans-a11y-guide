import React from 'react';
import styled from 'styled-components';
import { StyledLabel } from '../../components/Input/Input';
import Example from '../../components/Example/Example';
import CodeExample from '../../components/CodeExample/CodeExample';

//language=SCSS
const StyledFieldset = styled.fieldset`
  & {
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0 15px 15px 15px;
  }

  input { display: inline-block; margin-right: 10px; }

  input[type=radio] {
    padding: 10px;
    appearance: none;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 50px;
  }

  input[type=radio]:checked {
    background: no-repeat #FFF;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ0IDQ0IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA0NCA0NCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgPHBhdGggZD0ibTIyLDBjLTEyLjIsMC0yMiw5LjgtMjIsMjJzOS44LDIyIDIyLDIyIDIyLTkuOCAyMi0yMi05LjgtMjItMjItMjJ6bTEyLjcsMTUuMWwwLDAtMTYsMTYuNmMtMC4yLDAuMi0wLjQsMC4zLTAuNywwLjMtMC4zLDAtMC42LTAuMS0wLjctMC4zbC03LjgtOC40LS4yLS4yYy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjFjMC40LTAuNCAxLTAuNCAxLjQsMGwxLjQsMS40YzAuNCwwLjMgMC40LDAuOSAwLDEuM3oiIGZpbGw9IiMwMDAwMDAiLz4KPC9zdmc+Cg==);
    background-position: center;
  }

  input[type=checkbox] {
    padding: 10px;
    appearance: none;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 3px;
  }

  input[type=checkbox]:checked {
    background: no-repeat #FFF;
    background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=);
    background-position: center;
  }

  input[type=checkbox] + label,
  input[type=radio] + label {
    vertical-align: text-bottom;
  }

  label { display: inline-block }
`;

//language=SCSS
const StyledLegend = styled.legend`
  & {
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    font-size: 0.8em;
    font-weight: bold;
    padding: 0 10px;
    margin-left: -5px;
  }
`;

const Radios = () => (
  <div>
    <h2>Radios & Checkboxes</h2>
    <p>These are good replacements for <code>&lt;select&gt;</code> where there are only a few options.</p>


    <h3>Essentials</h3>
    <ul>
      <li>Use a <code>&lt;select&gt;</code> menu if there are greater than 5 radios</li>
      <li>Make sure you wrap your radios in a <code>&lt;fieldset&gt;</code> with a <code>&lt;legend&gt;</code>
        describing what the radios represent
      </li>
      <li>Make sure each radio has it's own unique <code>&lt;label&gt;</code>. This increases both the clickable area
        (for motor impaired users) and screen readers will know what each radio represents
      </li>
    </ul>
    <h4>More info</h4>
    <ul>
      <li><a href="https://gdstechnology.blog.gov.uk/2015/08/27/making-radio-buttons-and-checkboxes-easier-to-use/">GDS
        Improving Radios & Checkboxes</a></li>
      <li>
        <a href="https://www.w3.org/WAI/tutorials/forms/grouping/">W3 grouping controls</a>
      </li>
      <li><a href="http://oaa-accessibility.org/example/6/">Multi level grouped checkboxes</a></li>
    </ul>
    <br />
    <h3>Examples</h3>
    <h4>Simple Radio</h4>
    <p>Below is a simple radio button with styling to make it 'better'. There is no need to use a third party library
      for this. Just CSS3. The important aspect of the styling is: <code>appearance: none</code> as this hides the
      default visual aid which the browser displays.</p>
    <section className="section-with-aside">
      <Example>
        <StyledFieldset>
          <StyledLegend>Select a cheese</StyledLegend>
          <div>
            <input type="radio" name="cheese" id="brie" value="BRIE" />
            <StyledLabel display="true" htmlFor="brie">Brie</StyledLabel>
          </div>
          <div>
            <input type="radio" name="cheese" id="cheddar" value="CHEDDAR" />
            <StyledLabel display="true" htmlFor="cheddar">Cheddar</StyledLabel>
          </div>
          <div>
            <input type="radio" name="cheese" id="stilton" value="STILTON" />
            <StyledLabel display="true" htmlFor="stilton">Stilton</StyledLabel>
          </div>
        </StyledFieldset>
        <br />
        <CodeExample header="HTML" syntax="html">{
          `&#x3C;fieldset&#x3E;
  &#x3C;legend&#x3E;Select a cheese&#x3C;/legend&#x3E;
  &#x3C;div&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;cheese&#x22; id=&#x22;brie&#x22; value=&#x22;BRIE&#x22; /&#x3E;
    &#x3C;label display=&#x22;true&#x22; htmlFor=&#x22;brie&#x22;&#x3E;Brie&#x3C;/label&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;cheese&#x22; id=&#x22;cheddar&#x22; value=&#x22;CHEDDAR&#x22; /&#x3E;
    &#x3C;label display=&#x22;true&#x22; htmlFor=&#x22;cheddar&#x22;&#x3E;Cheddar&#x3C;/label&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div&#x3E;
    &#x3C;input type=&#x22;radio&#x22; name=&#x22;cheese&#x22; id=&#x22;stilton&#x22; value=&#x22;STILTON&#x22; /&#x3E;
    &#x3C;label display=&#x22;true&#x22; htmlFor=&#x22;stilton&#x22;&#x3E;Stilton&#x3C;/label&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/fieldset&#x3E;`
        }</CodeExample>
        <br />
        <CodeExample header="CSS" syntax="css">
          {`fieldset {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px 15px 15px;
}

legend {
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 10px;
  margin-left: -5px;
}

input[type=radio] {
  display: inline-block;
  margin-right: 10px;
}

label {
  display: inline-block
}`}
        </CodeExample>
      </Example>
      <aside>
        <blockquote>
          Similar to <code>&lt;select&gt;</code> alphabetically ordering the radios & checkboxes makes for better
          location awareness
        </blockquote>
      </aside>
    </section>

    <br />
    <h4>Simple Checkbox</h4>
    <Example>
      <StyledFieldset>
        <StyledLegend>Select cheeses</StyledLegend>
        <div>
          <input type="checkbox" name="cheese" id="brie_c" value="BRIE" />
          <StyledLabel display="true" htmlFor="brie_c">Brie</StyledLabel>
        </div>
        <div>
          <input type="checkbox" name="cheese" id="cheddar_c" value="CHEDDAR" />
          <StyledLabel display="true" htmlFor="cheddar_c">Cheddar</StyledLabel>
        </div>
        <div>
          <input type="checkbox" name="cheese" id="stilton_c" value="STILTON" />
          <StyledLabel display="true" htmlFor="stilton_c">Stilton</StyledLabel>
        </div>
      </StyledFieldset>
      <br />
      <CodeExample header="HTML" syntax="html">{
        `&#x3C;fieldset&#x3E;
  &#x3C;legend&#x3E;Select a cheese&#x3C;/legend&#x3E;
  &#x3C;div&#x3E;
    &#x3C;input type=&#x22;checkbox&#x22; name=&#x22;cheese&#x22; id=&#x22;brie&#x22; value=&#x22;BRIE&#x22; /&#x3E;
    &#x3C;label display=&#x22;true&#x22; htmlFor=&#x22;brie&#x22;&#x3E;Brie&#x3C;/label&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div&#x3E;
    &#x3C;input type=&#x22;checkbox&#x22; name=&#x22;cheese&#x22; id=&#x22;cheddar&#x22; value=&#x22;CHEDDAR&#x22; /&#x3E;
    &#x3C;label display=&#x22;true&#x22; htmlFor=&#x22;cheddar&#x22;&#x3E;Cheddar&#x3C;/label&#x3E;
  &#x3C;/div&#x3E;
  &#x3C;div&#x3E;
    &#x3C;input type=&#x22;checkbox&#x22; name=&#x22;cheese&#x22; id=&#x22;stilton&#x22; value=&#x22;STILTON&#x22; /&#x3E;
    &#x3C;label display=&#x22;true&#x22; htmlFor=&#x22;stilton&#x22;&#x3E;Stilton&#x3C;/label&#x3E;
  &#x3C;/div&#x3E;
&#x3C;/fieldset&#x3E;`
      }</CodeExample>
      <br />
      <CodeExample header="CSS" syntax="css">
        {`fieldset {
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px 15px 15px;
}

legend {
  font-size: 0.8em;
  font-weight: bold;
  padding: 0 10px;
  margin-left: -5px;
}

input[type=checkbox] {
  padding: 10px;
  appearance: none;
  border: 1px solid rgba(0,0,0,0.4);
  border-radius: 3px;
}

input[type=checkbox]:checked {
  background: no-repeat #FFF;
  //  You can change the checkmark here. This one is from Eleonor Wang and requires attribution without a licence
  background-image: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjMDAwMDAwIi8+Cjwvc3ZnPgo=);
  background-position: center;
}

label {
  display: inline-block
}`}
      </CodeExample>
    </Example>
  </div>
);

export default Radios;
