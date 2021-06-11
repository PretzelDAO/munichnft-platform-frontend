import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderArtists = this.RenderArtists.bind(this);
  }

  RenderArtists() {
    const classes = useStyles();

    return (
      <Container>
        Artists
      </Container>
    );
  }

  render() {
    return (
      <this.RenderArtists />
    );
  }
}

export default Artists;