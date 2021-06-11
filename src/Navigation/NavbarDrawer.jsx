import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  SwipeableDrawer, MenuItem, MenuList, ListItemIcon, Typography, Link, Container,
} from '@material-ui/core';

import {
  MenuOpen,
} from '@material-ui/icons';

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
          <img src={Logo} alt="MunichNFT" style={{ width: '10vh', height: 'auto', margin: '8px' }} />
        </div>
        <MenuList>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/'); }}>
            <ListItemIcon>
              <MenuOpen fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Home - Coming Soon</Typography>
          </MenuItem>
          <MenuItem onClick={() => { onMenuSelected(); history.push('/munichandbeyond'); }}>
            <ListItemIcon>
              <MenuOpen fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">in Munich and beyond</Typography>
          </MenuItem>
        </MenuList>
        <Container style={{ marginTop: '100%' }}>
          <Link href="https://munichnft.com/imprint">
            <Typography variant="body2">
              Imprint&nbsp;
            </Typography>
          </Link>
          <Link href="https://munichnft.com/about">
            <Typography variant="body2">
              About
            </Typography>
          </Link>
        </Container>
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