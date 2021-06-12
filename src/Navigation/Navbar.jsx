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
            <MetaMaskButton.Outline size="medium">
              Connect
            </MetaMaskButton.Outline>
          </Toolbar>
        </Hidden>
        <Hidden smDown>
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Coming Soon" />
            <Tab label="in Munich and beyond" />
            <MetaMaskButton.Outline size="medium">
              Connect
            </MetaMaskButton.Outline>
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