import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Profile from '../Components/Profile';

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
  Link
} from "@material-ui/core";

import domi from '../res/domi.jpg';
import max from '../res/max.jpg';
import tomal from '../res/tomal.jpg';
import nils from '../res/nils.jpg';

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: [{
        name: 'Dominik Bais',
        image: domi,
        description: `"As a visual artist, filmmaker and founder of the „OpenSource Archive“, Dominik Bais deals with concepts of the digital in relation to matter, memory, storage of information and its social impact."`,
        twitter: 'https://dominikbais.com/',
        instagram: 'https://www.instagram.com/dominikbais/'
      },
      {
        name: 'Nils Fröhling',
        image: nils,
        description: `"Munich based architect & digital artist."`,
        twitter: ' https://twitter.com/FroehlingNils',
        instagram: 'https://www.instagram.com/nils.froehling/'
      },
      {
        name: 'Tomal K. Ganguly (tkgNFT)',
        image: tomal,
        description: `"I am a Munich based blockchain pro combining business, art and culture. Non-fungible tokens are a new way of thinking and have the disruptive power changing the current digital world and connecting the real with  the virtual world in a sustainable manner."`,
        twitter: 'https://twitter.com/tomalganguly',
        instagram: 'https://www.instagram.com/tomstr83'
      },
      {
        name: 'Max Haarich',
        image: max,
        description: `"I am a Munich-based conceptual artist and ethics consultant with focus on technology. Munich is the place where a lot of money and tech is concentrated at the moment. In my opinion, arts can help to reflect the usage and impact of those resources. Therefore, my favorite place is the Kreativquartier where more and more Start-up's settle amid a lively arts scene. I am at the same time critical and enthusiastic about NFT and have given numerous interviews about my NFT art, which which integrates both perspectives. I would like to represent Munich with a balanced and responsible view on this fascinating technology."`,
        twitter: 'https://twitter.com/UzupisMUC',
        instagram: 'https://www.instagram.com/uzupis_munich/'
      },
      ],
    };

    this.RenderArtists = this.RenderArtists.bind(this);
  }

  RenderArtists() {
    const classes = useStyles();

    return (
      <Container>
        <Box pt={10} pb={8}>
          <Typography variant="h2" component="h1" gutterBottom>Artists</Typography>
          <Typography variant="body1" gutterBottom>
            The first munichNFT collection was produced and minted in a workshop on 11.-13.06.21. The participating artists represent a broad variaty of background, from conceptual artists to architects, from movie makers to activists. We discussed the opportunities of NFTs for Munich and how we can represent the city through this new medium. At the end, every creative chose an iconic Munich site as the foundation of his/her art work.          </Typography>
        </Box>
        <Grid container spacing={6} alignContent="center" justify="flex-start" alignItems="flex-start">
          {
            this.state.artists.map((p) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Profile person={p} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    );
  }

  render() {
    return (
      <this.RenderArtists />
    );
  }
}

export default Artists;