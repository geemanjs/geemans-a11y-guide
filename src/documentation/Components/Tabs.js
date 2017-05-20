import React from 'react';
import styled from 'styled-components';
import Example from '../../components/Example/Example';
import CodeExample from '../../components/CodeExample/CodeExample';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

//language=SCSS
const StyledTabs = styled.div`
  & {
    padding: 20px;
  }
  .react-tabs__tab-list {
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #CCC
  }

  .react-tabs__tab {
    display: inline-block;
    font-family: "futura-pt", "Helvetica Neue", sans-serif;
    font-size: 0.8em;
    padding: 5px 15px;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    border-bottom: 4px solid #20C997;
  }

  .react-tabs__tab-panel--selected {
    padding: 10px;
  }
`;

const TabsDocument = () => (
  <div>
    <h2>Tabs</h2>
    <p>A UI design pattern for displaying lots of content in a small area on a single page. Tabs have a navigation bar
      and panes. With regards to accessibility it is important that the navigation bar is usable by keyboard alone and
      the each navigation entry is linked to the panes content.</p>

    <h3>Essentials</h3>
    <ul>
      <li>Use <code>role="tablist"</code> for the navigation bar with <code>role="tab"</code> for each navigation entry
      </li>
      <li>Use <code>role="tabpanel"</code> for each pane</li>
      <li>Navigation entry's should be linked to panes using <code>aria-controls="idOfPane"</code> on the navigation
        entry and <code>id="idOfPane"</code> on the pane
      </li>
      <li>Ensure tab navigation is possible by keyboard only</li>
    </ul>
    <h4>More info</h4>
    <ul>
      <li><a href="https://www.smashingmagazine.com/2009/06/module-tabs-in-web-design-best-practices-and-solutions/">Good
        writeup which links out to further examples</a></li>
      <li><a href="http://oaa-accessibility.org/example/34/">Fully marked up example</a></li>
      <li><a href="https://www.w3.org/TR/wai-aria-practices/#tabpanel">How users expect tabs to behave</a></li>
    </ul>
    <h5>Good Libraries</h5>
    <ul>
      <li><a href="https://github.com/reactjs/react-tabs">React tabs</a></li>
      <li><a href="https://github.com/stowball/react-accessible-tabs">React accessible tabs</a></li>
    </ul>
    <h5>Bad Libraries</h5>
    <ul>
      <li><a href="https://www.muicss.com">MUI CSS</a> - No Keyboard Navigation</li>
      <li><a href="http://www.material-ui.com/">Material UI</a> - No linking between title &amp; content. See <a
        href="https://github.com/callemall/material-ui/issues/61">Issue 61</a></li>
    </ul>
    <br />
    <h3>Examples</h3>
    <h4>React Tabs</h4>
    <p>I'd actively recommend you use <a href="https://github.com/reactjs/react-tabs">React tabs</a> as this abstracts
      all the aria and linking of panes behind a relatively clean api.</p>
    <section className="section-with-aside">
      <Example>
        <StyledTabs>
          <Tabs>
            <TabList>
              <Tab>Cheddar</Tab>
              <Tab>Stilton</Tab>
            </TabList>
            <TabPanel>
              Cheddar cheese is a relatively hard, off-white (or orange if spices such as annatto are added), sometimes
              sharp-tasting.
            </TabPanel>
            <TabPanel>
              Stilton is an English cheese, produced in two varieties: Blue, known for its characteristic strong smell
              and taste, and the lesser-known White.
            </TabPanel>
          </Tabs>
        </StyledTabs>
        <CodeExample header="JSX" syntax="jsx">{
          `&lt;Tabs&gt;
  &lt;TabList&gt;
    &lt;Tab&gt;Cheddar&lt;/Tab&gt;
    &lt;Tab&gt;Stilton&lt;/Tab&gt;
  &lt;/TabList&gt;
  &lt;TabPanel&gt;
    Cheddar cheese is a relatively hard, off-white (or orange if spices such as annatto are added), sometimes
    sharp-tasting.
  &lt;/TabPanel&gt;
  &lt;TabPanel&gt;
    Stilton is an English cheese, produced in two varieties: Blue, known for its characteristic strong smell
    and taste, and the lesser-known White.
  &lt;/TabPanel&gt;
&lt;/Tabs&gt;`
        }</CodeExample>
        <br />
        <CodeExample header="CSS" syntax="css">
          {`.react-tabs__tab-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid #CCC
}

.react-tabs__tab {
  display: inline-block;
  font-family: "futura-pt", "Helvetica Neue", sans-serif;
  font-size: 0.8em;
  padding: 5px 15px;
  cursor: pointer;
}

.react-tabs__tab--selected {
  border-bottom: 4px solid #20C997
}

.react-tabs__tab-panel--selected {
  padding: 10px;
}`}
        </CodeExample>
      </Example>
      <aside>
        <blockquote>
          Notice how the left and right arrows are used to change tab. This comes from
          W3's guidance on how users should expect to interact with tabs
        </blockquote>
      </aside>
    </section>
  </div>
);

export default TabsDocument;
