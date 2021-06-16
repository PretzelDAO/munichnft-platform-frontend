import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
    Avatar,
    Box,
    Button,
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
        paddingBottom: 24,
        paddingTop: 24,
        minHeight: '582px',

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
        textAlign: 'center',
        paddingLeft: 24,
        paddingRight: 24,
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

                </CardContent>
                <Box style={{ marginTop: 'auto', width: '100%' }}>
                    <Grid container direction="row" alignItems="flex-end" className={classes.iconGrid}>
                        <Grid item xs={6}>
                            <Link href={p.twitter} target="_blank" rel="noopener">
                                <TwitterIcon />
                            </Link>

                        </Grid>
                        <Grid item xs={6} style={{ marginTop: 'auto' }}>
                            {p.linkedin ?
                                <Link href={p.linkedin} target="_blank" rel="noopener">
                                    <LinkedInIcon />
                                </Link>
                                :
                                <Link href={p.instagram} target="_blank" rel="noopener">
                                    <InstagramIcon />
                                </Link>
                            }
                        </Grid>
                    </Grid>
                </Box>
            </Card>
        );
    }
}

export default Profile;