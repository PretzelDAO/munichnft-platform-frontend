import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MetaMaskButton } from 'rimble-ui';
import {
  AppBar,
  Toolbar,
  Grid,
  IconButton,
  Typography,
  Hidden,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';

import miniLogo from '../res/munichNFT-logo-white.png';

const useStyles = makeStyles((theme) => ({
  root: {},
  settingsPosition: {
    marginLeft: 'auto',
  },
}));

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

    this.RenderNavbar = this.RenderNavbar.bind(this);
  }

  RenderNavbar() {
    const classes = useStyles();

    const { onMenuSelected, history } = this.props;

    const [value, setValue] = React.useState(5); // higher than #tabs to hide initial underline

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <AppBar position="static" color="primary">
        <Hidden mdUp>
          <Toolbar>
            <IconButton
              edge="start"
              aria-label="menu"
              onClick={onMenuSelected}
              color="secondary"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="secondary">
              MunichNFT
            </Typography>
          </Toolbar>
        </Hidden>
        <Hidden smDown>
        <Grid container style={{ maxWidth: '1280px', margin: 'auto' }}>
            <Grid sm={4} item style={{ lineHeight: '1' }}>
            <img src={miniLogo} alt="munichNFT Logo" style={{ maxHeight: '44px', marginLeft: '16px', padding: '8px', cursor: 'pointer' }} onClick={() => history.push('/')} />
            </Grid>
            <Grid sm={8} item>
              <Grid container justify="flex-end">
          <Tabs value={value}
          onChange={handleChange}
          aria-label="Navigation Tabs"
          variant="fullWidth">
              {/*<Tab label="Home" onClick={() => history.push('/')}/>*/}
              <Tab label="About" onClick={() => history.push('/about')}/>
              <Tab label="Artists" onClick={() => history.push('/artists')}/>
              <Tab label="Q and A" onClick={() => history.push('/qanda')}/>
              {/* <Tab label="Mint" onClick={() => history.push('/mint')}/> */}
          </Tabs>
              </Grid>
            </Grid>
          </Grid>

        </Hidden>
      </AppBar>
    );
  }

  render() {
    return <this.RenderNavbar />;
  }
}

export default Navbar;