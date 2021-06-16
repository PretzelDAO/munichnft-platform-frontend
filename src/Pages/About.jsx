import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderAbout = this.RenderAbout.bind(this);
  }

  RenderAbout() {
    const classes = useStyles();

    return (
      <Container fixed>
        <Typography variant="h1" component="h1" gutterBottom>
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          munichNFT is the world's first city-NFT and a platform for creatives and artists who want to learn about, create, mint, auction and buy NFTs. Become part of our MunichNFT community in the Web 3.0 revolution by joining us on discord and twitter!
        </Typography>
        <Typography variant="h2" component="h2" gutterBottom>
          Core Team
        </Typography>
        <Typography variant="body1" gutterBottom>
          munichNFT was initiaed by Sergej, Yonne, Isabell, Christian and Nick
        </Typography>
      </Container>
    );
  }

  render() {
    return (
      <this.RenderAbout />
    );
  }
}

export default About;