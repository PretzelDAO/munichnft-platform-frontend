import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import Logo from '../res/logo.gif';
import munichNFTanimation from '../res/munichNFT-animated-logo2.gif';

const useStyles = makeStyles(theme => ({
  root: {

  },
  header: {
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingTop: '4rem',
    paddingBottom: '4rem',
    [theme.breakpoints.down('sm')]: {
      height: '225px',
    },
  },
  mobilePicture: {
    [theme.breakpoints.down('sm')]: {
      width: '90%'
    },
  }
}));

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderHome = this.RenderHome.bind(this);
  }

  RenderHome() {
    const classes = useStyles();

    return (
      <div>
        <div className={classes.header}>
          <img src={munichNFTanimation} className={classes.mobilePicture} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <this.RenderHome />
    );
  }
}

export default Home;