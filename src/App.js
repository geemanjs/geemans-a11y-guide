import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import toc from './toc';
import StyledNavbar from './components/Navbar/StyledNavbar';
import ContentWrapper from './components/ContentWrapper';

const Routes = ({route}) => (
  <div>
    <Route path={route.path} exact={true} render={route.component} />
    {route.routes ? route.routes.map((nestedRoute, i) => (
      <Routes key={i} route={nestedRoute}/>
    )) : null}
  </div>
);

class App extends Component {

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
