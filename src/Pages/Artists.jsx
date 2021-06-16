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
import tomal from '../res/tomal.png';
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
        name: 'Max Haarich',
        image: max,
        description: `"I am a Munich-based conceptual artist and ethics consultant with focus on technology. Munich is the place where a lot of money and tech is concentrated at the moment. In my opinion, arts can help to reflect the usage and impact of those resources. Therefore, my favorite place is the Kreativquartier where more and more Start-up's settle amid a lively arts scene. I am at the same time critical and enthusiastic about NFT and have given numerous interviews about my NFT art, which which integrates both perspectives. I would like to represent Munich with a balanced and responsible view on this fascinating technology."`,
        twitter: 'https://twitter.com/UzupisMUC',
        instagram: 'https://www.instagram.com/uzupis_munich/'
      },
      {
        name: 'Nils Fröhling',
        image: nils,
        description: `"Munich based architect & digital artist."`,
        twitter: ' https://twitter.com/FroehlingNils',
        instagram: 'https://www.instagram.com/nils.froehling/'
      },
      {
        name: 'Tomal K. Ganguly (tkg/nft)',
        image: tomal,
        description: `"Munich-based blockchain pro combining business, art and culture."`,
        twitter: 'https://twitter.com/tomalganguly',
        instagram: 'https://www.instagram.com/tomstr83'
      },
      ],
    };

    this.RenderArtists = this.RenderArtists.bind(this);
  }

  RenderArtists() {
    const classes = useStyles();

    return (
      <Container fixed>
        <Typography variant="h2" component="h2" gutterBottom>
          Artists
        </Typography>
        <Grid container spacing={6} alignContent="center" justify="flex-start" alignItems="flex-start">
          {
            this.state.artists.map((p) => {
              return (
                <Grid item xs={12} sm={6} md={3}>
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