import React from 'react';
import styled from 'styled-components';
import Example from '../../components/Example/Example';
import CodeExample from '../../components/CodeExample/CodeExample';
import Breadcrumb from '../../components/ExampleImplementations/Breadcrumb';

//  language=SCSS
const BadUl = styled.ul`
  & {
    display: inline-block;
    list-style: none;
    padding: 0;
    font-size: 0.8em;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
  }
  li {
    display:inline-block;
  }
`;

const Breadcrumbs = () => {
  const items = [
    { href: '/', label: 'Home' },
    { href: '/Navigation', label: 'Navigation' },
    { href: '/Navigation/Breadcrumb', label: 'Breadcrumb' },
  ];
  return (
    <div>
      <h2>Breadcrumbs</h2>
      <p>
        Breadcrumbs form a great way to sign post users to their current location. They are especially useful when
        building
        something like an intranet where content is structured and well ordered.
      </p>
      <h3>Essentials</h3>
      <ul>
        <li>It should make sense for you to go up and down the hierarchy of the breadcrumb</li>
        <li>Use a css styled <code>&lt;ul&gt;</code> and <code>&lt;li&gt;</code> to enable screen readers to skip the
          content
        </li>
        <li>Use only <code>&lt;a&gt;</code> tags. Buttons are overkill for something like this</li>
        <li>Give a descriptive name to the content. The pages 'title' is a usually a good descriptor</li>
        <li>Wrap in a a <code>&lt;nav&gt;</code> element with an <code>aria-label="breadcrumb"</code> to describe it
        </li>
      </ul>
      <h4>More Info</h4>
      <ul>
        <li><a href="https://www.w3.org/TR/WCAG20-TECHS/G65.html">WCAG Guidance : Good explanations</a></li>
      </ul>

      <h3>Examples</h3>
      <h4>Well marked up Breadcrumb</h4>
      <p>
        A well marked up breadcrumb should be:
        <ul>
          <li>Labelled appropriately</li>
          <li>A list of links</li>
          <li>Have a role of navigation</li>
          <li>Add the spacer '/' with CSS</li>
        </ul>
      </p>
      <section className="section-with-aside">
        <Example>
          <Breadcrumb items={items} />
          <CodeExample header="JSX" syntax="JSX">{
            `const Breadcrumb = ({ items }) =&gt; {
  const last = items.pop();
  return (
    &lt;ul role="navigation" aria-label="breadcrumb"&gt;
      {items.map((item) =&gt;
        (&lt;li&gt;&lt;a href={item.href}&gt;{item.label}&lt;/a&gt;&lt;/li&gt;)
      )}
      &lt;li&gt;{last.label}&lt;/li&gt;
    &lt;/ul&gt;
  );
};`
          }</CodeExample>
          <br/>
          <CodeExample header="CSS" syntax="CSS">{
            `ul {
   list-style: none;
}
li {
   display:inline-block;
}

li:after {
  content:'/';
  margin-left: 10px;
  margin-right: 10px;
}

li:last-of-type:after {
  content: '';
}`
          }</CodeExample>
        </Example>
        <aside>
          <blockquote>
           Navigation Group - Breadcrumb, Three items present, Home, Navigation, Breadcrumb.
          </blockquote>
        </aside>
      </section>

      <br/>
      <h4>Poorly marked up Breadcrumb</h4>

      <section className="section-with-aside">
        <Example>
          <BadUl>
            {items.map((item) => (<li><a href={item.href}>{item.label}</a> /</li>))}
          </BadUl>

          <CodeExample header="JSX" syntax="JSX">{
            `const Breadcrumb = ({ items }) =&gt; {
  return (
    &lt;ul&gt;
      {items.map((item) =&gt;
        (&lt;li&gt;&lt;a href={item.href}&gt;{item.label}&lt;/a&gt; /&lt;/li&gt;)
      )}
    &lt;/ul&gt;
  );
};`
          }</CodeExample>
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
  )
};

export default Breadcrumbs;
