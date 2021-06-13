import React from 'react';
import Bignumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Container, Grid, TextField, Typography, Dialog } from '@material-ui/core';


import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide } from 'opensea-js/lib/types'
import TxDialog from './TxDialog';

import CONFIG from '../config';
const seaport = new OpenSeaPort(Web3.givenProvider, {
  networkName: CONFIG.NETWORK,
});

const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

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
      dialogOpen: false,
      balance: 0,
    };

    this.RenderDetailView = this.RenderDetailView.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  async refresh() {
    const params = new URLSearchParams(window.location.search);
    const tokenIdQuery = params.get("item"); // is the string "Jonathan"

    const { tokenAddress, tokenId } = this.state;

    let asset;
    try {
      asset = await seaport.api.getAsset({
        tokenAddress, // string
        tokenId: tokenIdQuery, // string | number | null
      });
    } catch (e) {
      console.log('retrying');
      setTimeout(() => {
        refresh();
      }, 1500);
      return;
    }

    console.log(asset);
    let price;
    if (asset.orders[0]) {
      price = web3.utils.fromWei(`${new Bignumber(asset.orders[0].basePrice).toNumber()}`, 'ether');
    } else {
      price = 0;
      this.setState({ sold: true });
    }

    this.setState({
      name: asset.name,
      imageUrlOriginal: asset.imageUrlOriginal,
      tokenId: tokenIdQuery,
      description: asset.description,
      artist: asset.owner.address,
      price,
      buyOrder: asset.orders[0],
    });


    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    if (!account) {
      return;
    }
    web3.eth.getBalance(account).then((balance) => {
      console.log(web3.utils.fromWei(balance, 'ether'));
      this.setState({ balance: web3.utils.fromWei(balance, 'ether')});
    });
  }

  async componentDidMount() {
    this.refresh();
  }

  RenderDetailView() {
    const classes = useStyles();
    const { 
      name, artist, price, description, tokenId,imageUrlOriginal,
      sold, buyOrder, dialogOpen,balance
    } = this.state;


    if (name === '') {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    const buyNft = async () => {
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const { tokenAddress, tokenId } = this.state;
      const { orders, count } = await seaport.api.getOrders({
        asset_contract_address: tokenAddress,
        token_id: tokenId,
        side: OrderSide.Sell,
      });

      this.setState({ dialogOpen: true });

      const transactionHash = await seaport.fulfillOrder({ order: orders[0], accountAddress: account });
      this.setState({ dialogOpen: false });
      console.log(transactionHash);
      this.refresh();
    };

    return (
      <Container className={classes.viewContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img src={imageUrlOriginal} alt="" style={{ maxWidth: '300px', maxHeight: '600px' }} />
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
                <Typography variant="h6">
                  Your Balance: {balance} ETH
                </Typography>
                <Button variant="outlined" onClick={() => buyNft()}>
                  Buy
                </Button>
              </>
            )}
          </Grid>
        </Grid>
        <Dialog
          open={dialogOpen}
          onClose={() => this.setState({ dialogOpen: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <TxDialog />
        </Dialog>
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