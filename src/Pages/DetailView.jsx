import React from 'react';
import Bignumber from 'bignumber.js';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, CircularProgress, Container, Grid, CardHeader, Typography, Dialog, Paper, Fab, Avatar, Link } from '@material-ui/core';


import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide } from 'opensea-js/lib/types'
import TxDialog from './TxDialog';

import ModalImage from 'react-modal-image';

import CONFIG from '../config';
let seaport;
let web3;
if (Web3.givenProvider) {
  web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
  seaport = new OpenSeaPort(Web3.givenProvider, {
    networkName: CONFIG.NETWORK,
  });
}

import ethIcon from '../res/ethereum.png';

const useStyles = makeStyles(theme => ({
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
    if (this.state.name === asset.name) {
      return;
    }

    this.setState({
      name: asset.name,
      imageUrlOriginal: asset.imageUrlOriginal,
      tokenId: tokenIdQuery,
      description: asset.description,
      ownerProfilePic: asset.ownerProfilePic,
      owner: asset.owner,
      creator: asset.creator,
      price: asset.price,
      buyOrder: asset.buyOrder,
      sold: asset.sold,
    });

    if (!web3) {
      return;
    }
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

  async componentDidUpdate() {
    this.refresh();
  }

  async componentDidMount() {
    this.refresh();
  }

  RenderDetailView() {
    const classes = useStyles();
    const {
      name, price, description, tokenId, imageUrlOriginal,
      sold, dialogOpen, balance, owner, creator, ownerProfilePic,
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
      <Container>
        <Box pt={10}></Box>
        <Grid container spacing={8}>
          <Grid item xs={12} md={7}>
            <ModalImage className={'modalimagestyle'}
              hideDownload={true}
              small={imageUrlOriginal}
              large={imageUrlOriginal}
              alt={name}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography component="h1" gutterBottom variant="h2">
              {name}
            </Typography>
            <Typography variant="overline" display="block" gutterBottom>
              Token #{tokenId}
            </Typography>
            <CardHeader
              avatar={
                <Avatar src={ownerProfilePic} />
              }
              subheader={'Created by ' + creator.slice(0, 16)}
            />
            <Typography variant="body2" gutterBottom style={{ marginTop: '20px', marginBottom: '32px' }} >
              {description}
            </Typography>

            {sold ? (
              <Typography variant="h5">
                Sold to @{owner}
              </Typography>
            ) : (
              <>
                <div />
                {Web3.givenProvider ? (
                  <Fab variant="contained" color="secondary" style={{ borderRadius: '8px', fontWeight: 'bold', backgroundColor: '#ffee00', padding: '16px', color: 'black', marginLeft: '0px', boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)' }}
                    onClick={() => buyNft()}>
                    Buy for&nbsp;&nbsp;&nbsp;{price}&nbsp;ETH&nbsp;
                    <img src={ethIcon} style={{ height: '24px' }} />
                  </Fab>
                ) : (
                  <Button size="large" variant="outlined" disabled>
                    Please install Metamask to buy this Artwork
                  </Button>
                )}
              </>
            )}

            <div style={{marginTop: '16px', fontSize: '12px'}}>
              <Link href={`https://opensea.io/assets/0xce4f570801a50ee1833b7480ef16c4fd1b3caa8f/${tokenId}`} target="_blank" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }}>View on OpenSea</Link>
            </div>

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