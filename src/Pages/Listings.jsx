import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Box,
  Container,
  Card,
  CardHeader,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Link,
  Grid,
  Divider,
} from "@material-ui/core";

import * as Web3 from 'web3'
import Bignumber from 'bignumber.js';
import { OpenSeaPort, Network } from 'opensea-js'
import { OrderSide } from 'opensea-js/lib/types'
import CONFIG from '../config';

const seaport = new OpenSeaPort(window.web3.currentProvider, {
  networkName: Network.Rinkeby,
});

const useStyles = makeStyles((theme) => ({
  root: {},
}));


class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nfts: [],
    };
    this.RenderListings = this.RenderListings.bind(this);
    this.getData = this.getData.bind(this);
  }

  async getData() {
    const { nfts } = this.state;
    const tokenAddress = CONFIG.TOKEN_ADDRESS;
    let assetsObjects;
    try {
      assetsObjects = await seaport.api.getAssets({
        asset_contract_address: tokenAddress, // string
        offset: 0,
        limit: 100, // string | number | null
      });
    } catch (e) {
      console.log('retrying');
      setTimeout(() => {
        getData();
      }, 1500);
      return;
    }
    console.log(assetsObjects);
    assetsObjects.assets.reverse().forEach((asset) => {
      if (!asset.imageUrlOriginal) {
        return;
      }
      let price;
      let sold = false;
      console.log(asset);
      if (asset.sellOrders) {
        if (asset.sellOrders[0]) {
          price = new Bignumber(asset.sellOrders[0].basePrice).toNumber() / 1e19;
        } else {
          price = 0;
          sold = true;
        }
      } else {
        price = 0;
        sold = true;
      }
      seaport.api.getAssets()
      const buyOrderObj = asset.sellOrders && asset.sellOrders[0];
      nfts.push({
        name: asset.name,
        imageUrlOriginal: asset.imageUrlOriginal,
        tokenId: asset.tokenId,
        description: asset.description,
        owner: asset.owner.address,
        ownerProfilePic: asset.owner.profile_img_url,
        price,
        buyOrder: buyOrderObj,
        sold,
      });
    });
    this.setState({ nfts });
  }

  async componentDidMount() {
    this.getData();
  }

  RenderListings() {
    const classes = useStyles();
    const { history } = this.props;
    let nftOwner = '';
    return (
      <Container fixed style={{ maxWidth: "1600px" }}>
        <Box pt={10} pb={4}>
          <Typography variant="h5" component="h1">
            First edition NFTs
          </Typography>
          <Divider variant="fullWidth" />
        </Box>
        <Grid container spacing={6} alignContent="center" justify="center" alignItems="center">
          {this.state.nfts.map((nft) => {
            if (nft.owner.user) {
              nftOwner = nft.owner.user.username ? nft.owner.user.username : 'Owner';
            }
            console.log(nft);
            return (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card key={nft.tokenId}>
                  <CardActionArea onClick={() => history.push(`/view?item=${nft.tokenId}`)}>
                    <CardMedia
                      component="img"
                      className={classes.media}
                      image={nft.imageUrlOriginal}
                      title={nft.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h2">{nft.name}</Typography>
                      <CardHeader
                        avatar={
                          <Avatar src={nft.ownerProfilePic} />
                        }
                        subheader={nft.owner && nft.owner.slice(0, 16)}
                      />
                    </CardContent>

                    <CardActions style={{ backgroundColor: "black", padding: 24 }}>
                      {nft.price ? (
                        <Box>
                          <Typography variant="body2" style={{ color: "#7F7F7F" }}>Price</Typography>
                          <Typography color="secondary">{nft.price} ETH</Typography>
                        </Box>
                      ) : (
                        <Box>
                          <Typography variant="body2" style={{ color: "#7F7F7F" }}>Status</Typography>
                          <Typography color="secondary">SOLD</Typography>
                        </Box>
                      )}
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    );
  }

  render() {
    return <this.RenderListings />;
  }
}

export default Listings;
