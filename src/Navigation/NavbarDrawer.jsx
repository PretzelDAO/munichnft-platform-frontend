import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer, MenuItem, MenuList, ListItemIcon, Typography, Link, Container,
} from '@material-ui/core';

import {
  BorderColor,
  ContactSupport,
  Home,
  Info,
} from '@material-ui/icons';

import GavelIcon from '@material-ui/icons/Gavel';

import Logo from '../res/logo.jpg';

const useStyles = makeStyles(theme => ({
  disabled: {
    color: 'grey',
  },
}));

class NavbarDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderNavbarDrawer = this.RenderNavbarDrawer.bind(this);
  }

  RenderNavbarDrawer() {
    const classes = useStyles();

    const { 
      history, swipeSidebarOpen, onSidebarEventTouch, onMenuSelected 
    } = this.props;

    return (
      <SwipeableDrawer
        disableSwipeToOpen
        open={swipeSidebarOpen}
        onClose={onSidebarEventTouch(false)}
        onOpen={onSidebarEventTouch(true)}
      >
        <div style={{ margin: '0 auto', textAlign: 'center' }}>
          <img src={Logo} alt="MunichNFT" style={{ width: '155px', height: 'auto', margin: '0px' }} />
        </div>
        <MenuList>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/'); }}>
            <ListItemIcon>
              <Home fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Home</Typography>
          </MenuItem>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/about'); }}>
            <ListItemIcon>
              <Info fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">About</Typography>
          </MenuItem>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/artists'); }}>
            <ListItemIcon>
              <BorderColor fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Artists</Typography>
          </MenuItem>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/qandA'); }}>
            <ListItemIcon>
              <ContactSupport fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">FAQ</Typography>
          </MenuItem>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/imprint'); }}>
            <ListItemIcon>
              <GavelIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Imprint</Typography>
          </MenuItem>
        </MenuList>
      </SwipeableDrawer>
    );
  }

  render() {
    return (
      <this.RenderNavbarDrawer />
    );
  }
}

export default NavbarDrawer;