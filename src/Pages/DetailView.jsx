import React from 'react';
import Bignumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';


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
      tokenId: '',
      imageUrlOriginal: '',
      sold: false,
    };

    this.RenderDetailView = this.RenderDetailView.bind(this);
  }

  async componentDidMount() {
    const tokenAddress = '0x7b0fd0d4022382ff2f2ddae8182648daaac3e2e5';
    const tokenId = '3';
    const asset = await seaport.api.getAsset({
      tokenAddress, // string
      tokenId, // string | number | null
    });
    console.log(asset);
    let price;
    if (asset.orders[0]) {
      price = Number(new Bignumber(asset.orders[0].basePrice).toNumber() / 10).toFixed(8);
    } else {
      price = 0;
      this.setState({ sold: true });
    }
    console.log(price, asset.orders[0])

    console.log(asset.owner.address);

    this.setState({
      name: asset.name,
      imageUrlOriginal: asset.imageUrlOriginal,
      tokenId,
      description: asset.description,
      artist: asset.owner.address,
      price,
    });
  }

  RenderDetailView() {
    const classes = useStyles();
    const { name, artist, price, description, tokenId, imageUrlOriginal, sold } = this.state;


    if (name === '') {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    return (
      <Container className={classes.viewContainer}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img src={imageUrlOriginal} alt="" />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h2">
              {name} #{tokenId}
            </Typography>
            <Typography variant="caption">
              by @{artist}
            </Typography>
            <Typography variant="body2">
              {description}
            </Typography>
            {sold ? (
              <Typography variant="h5">
                SOLD
              </Typography>
            ) : (
              <>
                <TextField variant="outlined" value={`${price} ETH`} />
                <TextField variant="outlined" value={`Your balance ${price} ETH`} />
                <Typography variant="body2">
                  ~ 403€
                </Typography>
                <Button variant="outlined">
                  Buy
                </Button>
              </>
            )}
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