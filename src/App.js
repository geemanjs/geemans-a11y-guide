import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import toc from './toc';

import StyledNavbar from './components/Navbar/StyledNavbar';
import ContentWrapper from './components/Content/ContentWrapper';

const Routes = ({ route }) => {
  return <div>
    <Route path={route.path} exact={true} component={route.component} />
    {route.routes ? route.routes.map((nestedRoute, i) => (
      <Routes key={i} route={nestedRoute} />
    )) : null}
  </div>
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      hash: window.location.hash
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({ hash: window.location.hash });
    })
  }

  render() {
    return (
      <Router>
        <div>
          <StyledNavbar toc={toc} hash={this.state.hash} />
          <ContentWrapper>
            {
              toc.map((tocItem, i) => {
                return <Routes key={i} route={tocItem} />
              })
            }
          </ContentWrapper>
        </div>
      </Router>
    );
  }
}

export default App;
