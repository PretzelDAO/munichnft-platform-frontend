import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderAbout = this.RenderAbout.bind(this);
  }

  RenderAbout() {
    const classes = useStyles();

    return (
      <Container>
        About
      </Container>
    );
  }

  render() {
    return (
      <this.RenderAbout />
    );
  }
}

export default About;