import React from 'react';
import Bignumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Container, Grid, TextField, Typography } from '@material-ui/core';


import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide } from 'opensea-js/lib/types'
import CONFIG from '../config';

const seaport = new OpenSeaPort(window.web3.currentProvider, {
  networkName: Network.Rinkeby,
});

const useStyles = makeStyles(theme => ({
  viewContainer: {
    marginTop: '64px',
  },
}));

class DetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tokenAddress: CONFIG.TOKEN_ADDRESS,
      name: '',
      artist: '',
      price: '',
      description: '',
      imageUrlOriginal: '',
      sold: false,
    };

    this.RenderDetailView = this.RenderDetailView.bind(this);
  }

  async componentDidMount() {
    const params = new URLSearchParams(window.location.search);
    const tokenIdQuery = params.get("item"); // is the string "Jonathan"

    const { tokenAddress, tokenId } = this.state;
    const asset = await seaport.api.getAsset({
      tokenAddress, // string
      tokenId: tokenIdQuery, // string | number | null
    });
    console.log(asset);
    let price;
    if (asset.orders[0]) {
      price = new Bignumber(asset.orders[0].basePrice).toNumber() / 1e19;
    } else {
      price = 0;
      this.setState({ sold: true });
    }
    console.log(price, asset.orders[0])

    console.log(asset.owner.address);

    this.setState({
      name: asset.name,
      imageUrlOriginal: asset.imageUrlOriginal,
      tokenId: tokenIdQuery,
      description: asset.description,
      artist: asset.owner.address,
      price,
      buyOrder: asset.orders[0],
    });
  }

  RenderDetailView() {
    const classes = useStyles();
    const { name, artist, price, description, tokenId, imageUrlOriginal, sold, buyOrder } = this.state;


    if (name === '') {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    const buyNft = async () => {
      const { tokenAddress, tokenId } = this.state;
      const { orders, count } = await seaport.api.getOrders({
        asset_contract_address: tokenAddress,
        token_id: tokenId,
        side: OrderSide.Sell
      });
      console.log(orders);
      const accountAddress = account = web3.eth.accounts[0]; // The buyer's wallet address, also the taker
      const transactionHash = await seaport.fulfillOrder({ order: orders[0], accountAddress });
      console.log(transactionHash);
    };

    return (
      <Container className={classes.viewContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={imageUrlOriginal} alt="" style={{ maxWidth: '300px', maxHeight: '600px' }}/>
          </Grid>
          <Grid item xs={12} md={8}>
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
                <Button variant="outlined" onClick={() => buyNft()}>
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