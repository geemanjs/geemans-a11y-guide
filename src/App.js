import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import toc from './toc';

import Content from './components/Content/Content';
import StyledNavbar from './components/Navbar/StyledNavbar';
import ContentWrapper from './components/Content/ContentWrapper';

const toHtml =  (props) => () => {
  return <Content {...props}/>
};

const Routes = ({ route }) => {
  return <div>
    <Route path={route.path} exact={true} component={toHtml(route.content)} />
    {route.routes ? route.routes.map((nestedRoute, i) => (
      <Routes key={i} route={nestedRoute} />
    )) : null}
  </div>
};

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <StyledNavbar toc={toc} />
          <ContentWrapper>
            {toc.map((tocItem, i ) => {
             return <Routes key={i} route={tocItem} />
            })}
          </ContentWrapper>
        </div>
      </Router>
    );
  }
}

export default App;
