import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class Imprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderImprint = this.RenderImprint.bind(this);
  }

  RenderImprint() {
    const classes = useStyles();

    return (
      <Container>
        Imprint
      </Container>
    );
  }

  render() {
    return (
      <this.RenderImprint />
    );
  }
}

export default Imprint;