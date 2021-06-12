import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class MintNft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderMintNft = this.RenderMintNft.bind(this);
  }

  RenderMintNft() {
    const classes = useStyles();

    return (
      <Container>
        MintNft
      </Container>
    );
  }

  render() {
    return (
      <this.RenderMintNft />
    );
  }
}

export default MintNft;