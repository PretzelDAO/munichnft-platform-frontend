import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
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
  }

  async componentDidMount() {
    const { nfts } = this.state;
    const tokenAddress = CONFIG.TOKEN_ADDRESS;
    const assetsObjects = await seaport.api.getAssets({
      asset_contract_address: tokenAddress, // string
      offset: 4,
      limit: 3, // string | number | null
    });
    assetsObjects.assets.forEach((asset) => {
      let price;
      let sold = false;
      if (asset.orders && asset.orders[0]) {
        price = new Bignumber(asset.orders[0].basePrice).toNumber() / 1e19;
      } else {
        price = 0;
        sold = true;
      }
      seaport.api.getAssets()
      const buyOrderObj = asset.orders && asset.orders[0];
      nfts.push({
        name: asset.name,
        imageUrlOriginal: asset.imageUrlOriginal,
        tokenId: asset.tokenId,
        description: asset.description,
        owner: asset.owner,
        price,
        buyOrder: buyOrderObj,
        sold,
      });
    });
    this.setState({ nfts });
  }

  RenderListings() {
    const classes = useStyles();
    const { history } = this.props;
    let nftOwner = '';
    return (
      <Grid container spacing={2} alignContent="center" justify="center" alignItems="center">
        {this.state.nfts.map((nft) => {
          if (nft.owner.user) {
            nftOwner = nft.owner.user.username ? nft.owner.user.username : 'Owner';
          }
          return (
            <Grid item xs={2}>
              <Card key={nft.tokenId}>
                <CardActionArea onClick={() => history.push(`/view?item=${nft.tokenId}`) }>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={nft.imageUrlOriginal}
                    title={nft.name}
                  />
                  <CardContent>
                    <Typography>{nft.name}</Typography>
                    <Typography>{nft.description && nft.description.slice(0, 60)}...</Typography>
                    <Typography>
                      {nftOwner}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {nft.price ? (
                      <Box>
                        <Typography>{nft.price}</Typography>
                        <Button>
                          <Typography>Buy</Typography>
                        </Button>
                      </Box>
                    ) : (
                      <Typography>Not for sale</Typography>
                    )}
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    );
  }

  render() {
    return <this.RenderListings />;
  }
}

export default Listings;
