import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footerStyle: {
    backgrodColor: 'black',
    height: '32px',
    width: '100%',
  },
}));

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderFooter = this.RenderFooter.bind(this);
  }

  RenderFooter() {
    const classes = useStyles();

    return (
      <div className={classes.footerStyle}>
        We also have an empty Footer!
      </div>
    );
  }

  render() {
    return (
      <this.RenderFooter />
    );
  }
}

export default Footer;