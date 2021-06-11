import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class DUMMY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderDUMMY = this.RenderDUMMY.bind(this);
  }

  RenderDUMMY() {
    const classes = useStyles();

    return (
      <Container>
        DUMMY
      </Container>
    );
  }

  render() {
    return (
      <this.RenderDUMMY />
    );
  }
}

export default DUMMY;