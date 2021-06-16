import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    root: {

    },
}));

class QandA extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.RenderQandA = this.RenderQandA.bind(this);
    }

    RenderQandA() {
        const classes = useStyles();

        return (
            <Container fixed style={{ minHeight: '100vh' }}>
                <Box pt={10}></Box>

                <p><b>What is the Blockchain?</b></p>

                <p>Blockchain is a specific type of database, which stores data in blocks that are then chained together. As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.Decentralized blockchains are immutable, which means that the data entered is irreversible.</p>
                <p><a href="https://www.investopedia.com/terms/b/blockchain.asp" target="_blank">https://www.investopedia.com/terms/b/blockchain.asp</a></p>


            </Container>
        );
    }

    render() {
        return (
            <this.RenderQandA />
        );
    }
}

export default QandA;
