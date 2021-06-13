import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MetaMaskButton } from 'rimble-ui';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Tabs,
  Tab,
} from '@material-ui/core';
import {
  Menu as MenuIcon,
} from '@material-ui/icons';

import miniLogo from '../res/logo.gif';

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

    const [value, setValue] = React.useState(0);

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
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" variant="fullWidth">
            <img src={miniLogo} style={{ maxHeight: '57px' }} />
            <div style={{ marginLeft: 'auto', marginRight: '32px' }}>
              <Tab label="Home" />
              <Tab label="in Munich and beyond" />
            </div>
          </Tabs>
        </Hidden>
      </AppBar>
    );
  }

  render() {
    return <this.RenderNavbar />;
  }
}

export default Navbar;