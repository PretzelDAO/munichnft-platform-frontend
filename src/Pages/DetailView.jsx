import React from 'react';
import Bignumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Container, Grid, TextField, Typography, Dialog } from '@material-ui/core';


import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide } from 'opensea-js/lib/types'
import CONFIG from '../config';
import TxDialog from './TxDialog';

const seaport = new OpenSeaPort(window.web3.currentProvider, {
  networkName: Network.Rinkeby,
});

web3 = new Web3(window.web3.currentProvider);

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
    };

    this.RenderDetailView = this.RenderDetailView.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  async refresh() {
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

  async componentDidMount() {
    this.refresh();
  }

  RenderDetailView() {
    const classes = useStyles();
    const { name, artist, price, description, tokenId, imageUrlOriginal, sold, buyOrder, dialogOpen } = this.state;


    if (name === '') {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    const buyNft = async () => {
      if (window.ethereum) {
        await ethereum.enable();
      }
      const account = web3.currentProvider.selectedAddress;
      console.log(account);
      const { tokenAddress, tokenId } = this.state;
      const { orders, count } = await seaport.api.getOrders({
        asset_contract_address: tokenAddress,
        token_id: tokenId,
        side: OrderSide.Sell,
      });

      const accountAddress = web3.eth.currentProvider; //web3.rinkeby.accounts[0]; // The buyer's wallet address, also the taker
      this.setState({ dialogOpen: true });
      const transactionHash = await seaport.fulfillOrder({ order: orders[0], accountAddress });
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