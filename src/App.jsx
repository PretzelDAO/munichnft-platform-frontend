import React from 'react';
import history from './history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import CONFIG from './config';

import Artists from './Pages/Artists';
import About from './Pages/About';
import Imprint from './Pages/Imprint';
import Home from './Pages/Home';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderApp = this.RenderApp.bind(this);
  }

  RenderApp() {

    return (
      <Router style={{ height: '100%' }} history={history}>
        <Switch>
          <Route
            exact
            path={'/'}
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            exact
            path={'/artists'}
            render={props => (
              <Artists {...props} />
            )}
          />
          <Route
            exact
            path={'/about'}
            render={props => (
              <About {...props} />
            )}
          />
          <Route
            exact
            path={'/imprint'}
            render={props => (
              <Imprint {...props} />
            )}
          />
        </Switch>
      </Router>
    );
  }

  render() {
    return <this.RenderApp />;
  }
}

export default App;
