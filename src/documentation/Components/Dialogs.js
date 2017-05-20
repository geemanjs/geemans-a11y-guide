import React from 'react';
import styled from 'styled-components';
import Example from '../../components/Example/Example';
import CodeExample from '../../components/CodeExample/CodeExample';
import Input from '../../components/Input/Input';
import ReactModal from 'react-modal';

//language=SCSS
const StyledButton = styled.button`
  & {
    text-align: center;
    display: inline-block;
    margin: 0px;
    position: relative;
    border: none;
    cursor: pointer;
    border-radius: 3px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: 'futura-pt', sans-serif;
    line-height: 1.6em;
    font-size: 0.7em;
    letter-spacing: 1px;
    padding: 10px;
    background-color: #FFF;
    color: #212529;
    border: 0;
    text-transform: uppercase;
    margin-bottom: 10px;
    border: 4px solid #20C997;
  }
`;

class DialogsExample extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }

  open() {
    this.setState({ modal: true })
  }

  close() {
    this.setState({ modal: false });
  }

  render() {
    return (
      <div>
        <StyledButton onClick={this.open.bind(this)}>Open Dialog</StyledButton>
        <ReactModal
          isOpen={this.state.modal}
          contentLabel="Sample Dialog"
          style={{
            content: {
              position: 'absolute',
              width: '400px',
              height: '300px',
              marginLeft: '-220px',
              marginTop: '-170px',
              left: '50%',
              top: '50%',
              padding: '20px'
            },
            overlay: {
              backgroundColor: 'rgba(52, 58, 64, 0.8)'
            }
          }}
        >
          Sample Modal Dialog using React-Modal
          <Input label="Enter Cheese Name" type="text"/>
          <Input label="Enter Your Name" type="text"/>
          <StyledButton onClick={this.close.bind(this)}>Submit</StyledButton>
        </ReactModal>
      </div>
    );
  }

}
const DialogsDocument = () => (
  <div>
    <h2>Dialogs/Modals</h2>
    <p>A UI design pattern for displaying lots of content in a small area on a single page. Tabs have a navigation
      bar
      and panes. With regards to accessibility it is important that the navigation bar is usable by keyboard alone
      and
      the each navigation entry is linked to the panes content.</p>

    <h3>Essentials</h3>
    <ul>
      <li>Use <code>role="dialog"</code> on the dialog itself
      </li>
      <li>Ensure the focus is locked to the dialog. Especially when using keyboard navigation, it is quite common
        that
        users can escape the focus of the dialog and head back to the background content without realising
      </li>
      <li>Dialog Header should be labelled with <code>aria-labelledby="idOfHeaderElement"</code> content can be
        highlighted using <code>aria-describedby="idOfContent"</code> this should be on the same element that has
        <code>role="dialog"</code>
      </li>
      <li>Make sure there is a means for a user to exit the dialog</li>
    </ul>
    <h4>More info</h4>
    <ul>
      <li><a
        href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_dialog_role">Mozilla
        recommendations</a></li>
      <li><a href="https://www.smashingmagazine.com/2014/09/making-modal-windows-better-for-everyone/">Detailed
        post by
        Smashing Magazine recommending best practices</a></li>
    </ul>
    <h5>Good Libraries</h5>
    <ul>
      <li><a href="https://github.com/reactjs/react-modal">React Modal - fairly manual</a></li>
      <li><a href="http://edenspiekermann.github.io/a11y-dialog/">A11Y Dialog</a></li>
      <li><a href="https://react-bootstrap.github.io/react-overlays">React Overlays</a></li>
    </ul>
    <h5>Bad Libraries</h5>
    <ul>
      <li><a href="http://www.material-ui.com/">Material UI</a> - No ARIA, JS only focus lock. See <a
        href="https://github.com/callemall/material-ui/issues/61">Issue 61</a></li>
    </ul>
    <br />
    <h3>Examples</h3>
    <h4>React Modal</h4>
    <p>I'd actively recommend you use <a href="https://github.com/reactjs/react-modal">React Modal</a> as this
      gives you adequate control of the HTML produced. It also has plugins for redux and other popular flux implementations</p>
    <section className="section-with-aside">
      <Example>
        <DialogsExample />
        <CodeExample header="JSX" syntax="jsx">{
          `class DialogsExample extends React.Component {
  constructor() {
    super();
    this.state = {
      modal: false
    };
  }

  open() {
    this.setState({ modal: true })
  }

  close() {
    this.setState({ modal: false });
  }

  render() {
    return (
      &lt;div&gt;
        &lt;button onClick={this.open.bind(this)}&gt;Open Dialog&lt;/StyledButton&gt;
        &lt;ReactModal
          isOpen={this.state.modal}
          contentLabel="Sample Dialog"
          style={{
            content: {
              position: 'absolute',
              width: '400px',
              height: '300px',
              padding: '20px'
              marginLeft: '-220px', // half the sum of width + (padding * 2)
              marginTop: '-170px',  // half the sum of height + (padding * 2)
              left: '50%',
              top: '50%',
            },
            overlay: {
              backgroundColor: 'rgba(52, 58, 64, 0.8)'
            }
          }}
        &gt;
          Sample Modal Dialog using React-Modal
          &lt;button onClick={this.close.bind(this)}&gt;Close Dialog&lt;/StyledButton&gt;
        &lt;/ReactModal&gt;
      &lt;/div&gt;
    );
  }

}`
        }</CodeExample>
      </Example>
      <aside>
        <blockquote>
          Notice how once in the dialog, tabbing around is locked within the container
        </blockquote>
      </aside>
    </section>
  </div>
);

export default DialogsDocument;
