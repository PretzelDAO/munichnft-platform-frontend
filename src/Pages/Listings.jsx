import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderListings = this.RenderListings.bind(this);
  }

  RenderListings() {
    const classes = useStyles();

    return (
      <Container>
        Listings
      </Container>
    );
  }

  render() {
    return (
      <this.RenderListings />
    );
  }
}

export default Listings;