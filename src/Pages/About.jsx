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

import nick from '../res/nick.jpg';
import isabell from '../res/isabell.jpg';
import yonne from '../res/yonne.jpg';
import lukas from '../res/lukas.jpg';
import sergej from '../res/sergej.jpg';
import christian from '../res/christian.jpg';
import felix from '../res/felix.jpg';
import johannes from '../res/johannes.jpg';

const useStyles = makeStyles(theme => ({
  root: {}
}));

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      core: [{
        name: 'Prof. Dr. Isabell M. Welpe',
        image: isabell,
        description: 'Professor for Strategy & Organisation @TUM',
        title: 'Head of Strategy',
        twitter: 'https://twitter.com/IsabellWelpe',
        linkedin: 'https://www.linkedin.com/in/isabell-welpe-83a202/'
      },
      {
        name: 'Yonne-Luca Hack',
        image: yonne,
        description: 'M.A. Architecture @TUM, Urban Enthusiast',
        title: 'Creative Director',
        twitter: 'https://twitter.com/HackYonne',
        linkedin: 'https://www.linkedin.com/in/yonne-luca-hack-86286bb1/'
      },
      {
        name: 'Sergej Lotz',
        image: sergej,
        description: 'CDTM, M.Sc. Technology Management @LMU',
        title: 'Head of Product',
        twitter: 'https://twitter.com/serglotz',
        linkedin: 'https://www.linkedin.com/in/serglotz/'
      },
      {
        name: 'Christian Ziegler',
        image: christian,
        description: 'CTO Blockcurators GmbH, Graduate CS Student @TUM',
        title: 'Tech Lead',
        twitter: 'https://twitter.com/Totenfluch',
        linkedin: 'https://www.linkedin.com/in/christian-ziegler-26a45a132/'
      },
      {
        name: 'Nick Stracke',
        image: nick,
        description: 'CDTM, M.Sc. Data Science @LMU',
        title: 'Blockchain Developer',
        twitter: 'https://twitter.com/StrackeNick',
        linkedin: 'https://www.linkedin.com/in/nick-stracke-327100141/'
      },
      ],
      helpers: [{
        name: 'Lukas Ruppert',
        image: lukas,
        description: 'Management & Technology @ TUM',
        title: 'Coordinator',
        twitter: 'https://twitter.com/Lk_Ruppert',
        linkedin: 'https://www.linkedin.com/in/lukas-ruppert/'
      },
      {
        name: 'Felix von Stumpfeldt',
        image: felix,
        description: 'Politics & Technology @TUM',
        title: 'Social Media',
        twitter: 'https://twitter.com/Felixvomfeldt',
        linkedin: 'https://www.linkedin.com/in/felix-von-stumpfeldt-aa6848170/'
      },
      {
        name: 'Johannes Theisen',
        image: johannes,
        description: 'Information Systems @TUM',
        title: 'Developer',
        twitter: 'https://twitter.com/JHNTheisen',
        linkedin: 'https://www.linkedin.com/in/johannes-theisen-b8111b149/'
      },
      ],
    };

    this.RenderAbout = this.RenderAbout.bind(this);
  }

  RenderAbout() {
    const classes = useStyles();

    return (
      <Container>
        <Box pt={10} pb={8}>
          <Typography variant="body1" gutterBottom>
            munichNFT is the world's first city-NFT platform for creatives and artists who want to learn about, create, mint, auction and buy NFTs. Become part of our MunichNFT community in the Web 3.0 revolution by joining us on <Link href="https://discord.gg/CmuQjxpRvg" style={{ color: "#808080", textDecoration: "underline" }}>Discord</Link> and <Link href="https://twitter.com/NftMunich" style={{ color: "#808080", textDecoration: "underline" }}>Twitter</Link>!
          </Typography>
        </Box>
        <Box pb={4}>
          <Typography variant="h2" component="h2" gutterBottom>
            Core Team
          </Typography>
        </Box>
        <Grid container spacing={6} alignContent="center" justify="flex-start" alignItems="flex-start">
          {
            this.state.core.map((p) => {
              return (
                <Grid item xs={12} sm={6} lg={4}>
                  <Profile person={p} />
                </Grid>
              )
            })
          }
        </Grid>


        <Typography variant="h2" component="h2" gutterBottom style={{ marginTop: '48px' }}>
          Hackathon Helper
        </Typography>
        <Grid container spacing={6} alignContent="center" justify="flex-start" alignItems="flex-start">
          {
            this.state.helpers.map((p) => {
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
      <this.RenderAbout />
    );
  }
}

export default About;