import React from 'react';
import Bignumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { Button, CircularProgress, Container, Grid, TextField, Typography, Dialog, Paper } from '@material-ui/core';


import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide } from 'opensea-js/lib/types'
import TxDialog from './TxDialog';

import CONFIG from '../config';
let seaport;
if (Web3.givenProvider) {
  seaport = new OpenSeaPort(Web3.givenProvider, {
    networkName: CONFIG.NETWORK,
  });
}

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

    const { owner } = this.state;
    const { nfts } = this.props;

    console.log(nfts);
    let asset;
    for (let i = 0; i < nfts.length; i += 1) {
      console.log(nfts[i].tokenId, tokenIdQuery);
      if (nfts[i].tokenId === tokenIdQuery) {
        asset = nfts[i];
      }
    }
    if (!asset) {
      return;
    }
    console.log(asset);

    this.setState({
      name: asset.name,
      imageUrlOriginal: asset.imageUrlOriginal,
      tokenId: tokenIdQuery,
      description: asset.description,
      owner: asset.owner,
      price: asset.price,
      buyOrder: asset.buyOrder,
    });


    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    if (!account) {
      return;
    }
    web3.eth.getBalance(account).then((balance) => {
      console.log(web3.utils.fromWei(balance, 'ether'));
      this.setState({ balance: web3.utils.fromWei(balance, 'ether') });
    });
  }

  async componentDidMount() {
    this.refresh();
  }

  RenderDetailView() {
    const classes = useStyles();
    const {
      name, price, description, tokenId, imageUrlOriginal,
      sold, dialogOpen, balance, owner,
    } = this.state;


    if (name === '') {
      return (
        <Container>
          <CircularProgress />
        </Container>
      );
    }

    const buyNft = async () => {
      const accounts = await web3.eth.requestAccounts();
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
        <Paper style={{ padding: '12px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <img src={imageUrlOriginal} alt="" style={{ maxWidth: '350px', maxHeight: '600px', borderRadius: '4px' }} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="h2">
                {name} #{tokenId}
              </Typography>
              <Typography variant="caption" style={{ marginBottom: '4px', marginTop: '4px' }} >
                by @{owner}
              </Typography>
              <Typography variant="body2" style={{ marginBottom: '4px', marginTop: '4px' }} >
                {description}
              </Typography>
              {sold ? (
                <Typography variant="h5">
                  This item is currently not on Sale
                </Typography>
              ) : (
                <>
                  <TextField variant="outlined" value={`${price} ETH`} disabled style={{ marginBottom: '4px', marginTop: '4px' }} />
                  {/*<Typography variant="body2">
                  ~ 403€
                  </Typography>*/}
                  {balance !== 0 && (
                    <Typography variant="h6" style={{ marginBottom: '4px', marginTop: '4px' }} >
                      Your available ETH {balance} ETH
                    </Typography>
                  )}
                  <div />
                  {Web3.givenProvider ? (
                    <Button variant="outlined" onClick={() => buyNft()} style={{ marginBottom: '4px', marginTop: '4px' }} >
                      Buy for {price} ETH
                    </Button>
                  ) : (
                    <Button variant="outlined" disabled style={{ marginBottom: '4px', marginTop: '4px' }} >
                      Please install Metamask to buy this Artwork
                    </Button>
                  )}
                </>
              )}
            </Grid>
          </Grid>
        </Paper>
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