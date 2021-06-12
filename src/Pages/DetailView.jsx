import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Container, Grid, Typography } from '@material-ui/core';


import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io')

const seaport = new OpenSeaPort(provider, {
  networkName: Network.Rinkeby,
})

const useStyles = makeStyles(theme => ({
  viewContainer: {
    marginTop: '64px',
  },
}));

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      artist: '',
      price: '',
      description: '',
    };

    this.RenderDetailView = this.RenderDetailView.bind(this);
  }

  async componentDidMount() {
    const tokenAddress = '0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5';
    const tokenId = '2';
    const asset = await seaport.api.getAsset({
      tokenAddress, // string
      tokenId, // string | number | null
    });
    console.log(asset);
    console.log(asset.orders[0].basePrice);
  }

  RenderDetailView() {
    const classes = useStyles();
    const { name, arist, price, description } = this.props;


    if (name === '') {
      <Container>
        <CircularProgress />
      </Container>
    }

    return (
      <Container className={classes.viewContainer}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src="https://ipfs.io/ipfs/QmfKEmwC9timUZWemvrKbGw3scEzPWGcGGgYWnPRxt1sqb" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h2">
              Iron Man
            </Typography>
            <Typography variant="caption">
              by @Christian
            </Typography>
            <Typography variant="h6">
              0.005 ETH
            </Typography>
            <Button variant="outlined">
              Buy
            </Button>
            <Typography variant="body2">
              Iron Man (amerikanische Aussprache: ['aɪɘrnˌmæn], britische Aussprache: ['aɪɘnˌmæn]) ist ein US-amerikanischer Action- und Science-Fiction-Spielfilm aus dem Jahr 2008, der als Comicverfilmung auf der Superhelden-Comicfigur Iron Man des Verlages Marvel basiert. Regie führte Jon Favreau, die Hauptrolle spielte Robert Downey Jr. In den USA war Paramount Pictures für den Verleih zuständig, in Deutschland Concorde. Der offizielle Filmstart erfolgte in den USA am 2. Mai 2008, in Deutschland bereits am 1. Mai.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    );
  }

  render() {
    return (
      <this.RenderDetailView />
    );
  }
}

export default DetailView;