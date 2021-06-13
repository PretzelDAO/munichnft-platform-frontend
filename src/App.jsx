import React from 'react';
import history from './history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { lightTheme } from './theme/muiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

import CONFIG from './config';

import Artists from './Pages/Artists';
import About from './Pages/About';
import Imprint from './Pages/Imprint';
import Home from './Pages/Home';

import Navbar from './Navigation/Navbar';
import NavbarDrawer from './Navigation/NavbarDrawer';
import Listings from './Pages/Listings';
import DetailView from './Pages/DetailView';
import MintNft from './Pages/MintNft';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderApp = this.RenderApp.bind(this);
  }

  RenderApp() {
    const classes = useStyles();

    const onMenuSelected = () => {
      const { swipeSidebarOpen } = this.state;
      this.setState({ swipeSidebarOpen: !swipeSidebarOpen });
    };

    const onSidebarEventTouch = open => event => {
      if (
        event
        && event.type === 'keydown'
        && (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      this.setState({ swipeSidebarOpen: open });
    };

    return (
      <MuiThemeProvider theme={lightTheme}>
        <CssBaseline>
          <Navbar {...this.props} onMenuSelected={onMenuSelected} />
          <NavbarDrawer {...this.props} swipeSidebarOpen={this.state.swipeSidebarOpen} onSidebarEventTouch={onSidebarEventTouch} onMenuSelected={onMenuSelected} />
          <Router style={{ height: '100%' }} history={history}>
            <Switch>
              <Route
                exact
                path={'/'}
                render={props => (
                  <>
                    <Home {...props} />
                    <Listings {...props} />
                  </>
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
              <Route
                exact
                path={'/listings'}
                render={props => (
                  <Listings {...props} />
                )}
              />
              <Route
                exact
                path={'/view'}
                render={props => (
                  <DetailView {...props} />
                )}
              />
              <Route
                exact
                path={'/mint'}
                render={props => (
                  <MintNft {...props} />
                )}
              />
            </Switch>
          </Router>
        </CssBaseline>
      </MuiThemeProvider>
    );
  }

  render() {
    return <this.RenderApp />;
  }
}

export default App;
