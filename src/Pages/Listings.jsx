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
  Grid,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
}));


class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.RenderListings = this.RenderListings.bind(this);
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
        <Grid container spacing={6} alignContent="center" justify="flex-start" alignItems="flex-start">
          {this.props.nfts.map((nft) => {
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
