import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

import Logo from '../res/logo.gif';

const useStyles = makeStyles(theme => ({
  root: {

  },
  header: {
    height: '800px',
    width: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
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
          <img src={Logo} />
          <Typography variant="h5" color="secondary" style={{ textAlign: 'center' }}>
            For all makers, creator and builders in Munich and beyond
          </Typography>
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