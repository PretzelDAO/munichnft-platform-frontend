import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

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

const useStyles = makeStyles(theme => ({
    card: {
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 20,
        paddingTop: 20,

    },
    image: {
        width: "80%",
        height: "80%",
        borderRadius: '50%',
        objectFit: 'cover'

    },
    content: {
        objectFit: 'cover'
    },
    iconGrid: {
        textAlign: 'center'
    }
}));

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

        this.RenderProfile = this.RenderProfile.bind(this);
    }

    render() {
        return (
            <this.RenderProfile />
        );
    }

    RenderProfile() {
        const p = this.props.person;
        const classes = useStyles();

        return (
            <Card key={p.name} className={classes.card}>
                <CardMedia
                    component="img"
                    className={classes.image}
                    image={p.image}
                    title={p.name}
                />
                <CardContent className={classes.content}>
                    <Typography
                        variant="h5"
                        gutterBottom>
                        {p.name}

                    </Typography>

                    {p.title
                        ? <Typography variant="overline" display="block" gutterBottom>
                            {p.title}
                        </Typography>
                        : null
                    }


                    <Typography variant="body2" gutterBottom>{
                        p.description}
                    </Typography>
                    <Grid container spacing={3} direction="row" className={classes.iconGrid}>
                        <Grid item xs={6}>
                            <Link href={p.twitter} target="_blanc" rel="noopener">
                                <TwitterIcon />
                            </Link>

                        </Grid>
                        <Grid item xs={6}>
                            {p.linkedin ?
                                <Link href={p.linkedin} target="_blanc" rel="noopener">
                                    <LinkedInIcon />
                                </Link>
                                :
                                <Link href={p.instagram} target="_blanc" rel="noopener">
                                    <InstagramIcon />
                                </Link>
                            }
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        );
    }
}

export default Profile;