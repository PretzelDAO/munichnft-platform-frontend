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
            qa: [
                {
                    q: 'What is the Blockchain?',
                    a: `Blockchain is a specific type of database, which stores data in blocks that are then chained together. As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order. Decentralized blockchains are immutable, which means that the data entered is irreversible. \r
            https://www.investopedia.com/terms/b/blockchain.asp`
                },
                {
                    q: 'Is the Blockchain harming the environment?',
                    a: `Blockchains consume a lot of energy and at least for now a big portion of this energy comes from fossil fuels. According to the Cambridge Bitcoin Electricity Consumption Index, bitcoin-mining operations worldwide now use energy equal to the annual domestic electricity consumption of the entire nation of Sweden (TheNewYorker). \r
            But there are many opportunities for improvement: Technical alternatives (proof of stake, the introduction of another layer…) will reduce emissions and the usage of clean energy will increase. \r
            Ultimately, artists are the ones pushing the most for change. \r
            
            https://www.newyorker.com/news/daily-comment/why-bitcoin-is-bad-for-the-environment`
                },
                {
                    q: 'What is Ethereum?',
                    a: `Ethereum is a blockchain platform with its own cryptocurrency, called Ether (ETH) or Ethereum, and its own programming language, called Solidity. \r
            As a blockchain network, Ethereum is a decentralized public ledger for verifying and recording transactions. The network's users can create, publish, monetize, and use applications on the platform, and use its Ether cryptocurrency as payment. \r
            https://www.investopedia.com/terms/e/ethereum.asp`
                },
                {
                    q: 'What are NFTs?',
                    a: `An NFT is a digital asset that represents real-world objects like art, music, in-game items, and videos. They are bought and sold online, frequently with cryptocurrency, and they are generally encoded with the same underlying software as many cryptos. Every NFT is unique and non-replicable. \r
            https://www.forbes.com/advisor/investing/nft-non-fungible-token/`
                },
                {
                    q: 'What are the legal aspects of trading NFTs?',
                    a: `Legal disputes with NFTs are currently only taking place in specialist circles. As this topic is quite complex the following merely provides an initial overview. \r
            When selling art ownership and intellectual copyrights can be transferred independently: \r
            1.  Ownership of the physical painting (regardless of the content) \r
            2.  Intellectual copyrights on the artwork (regardless of the physical embodiment) \r
            So far: Actual "ownership" of data is not possible, it requires a "physical object". The reason for this is the free duplicability of (conventional) data (copy=original).
            As a result authors can only license copyrights but cannot "sell" the property of the artwork itself. \r
            But changes are about to come as NFTs can represent a unique "digital original". \r
            For further information we recommend reading the following articles: \r
            https://www.cms-lawnow.com/ealerts/2021/04/legal-challenges-of-non-fungible-tokens-nfts?cc_lang=en \r
            https://www.cms-lawnow.com/ealerts/2021/06/german-income-tax-law-and-non-fungible-tokens?cc_lang=en \r
            Content: Dr. Alexander Schmid, CMS Germany`
                },
                {
                    q: 'What are gas fees?',
                    a: `Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on the Ethereum blockchain. \r
            https://www.investopedia.com/terms/g/gas-ethereum.asp`
                },
            ]
        };

        this.RenderQandA = this.RenderQandA.bind(this);
    }

    RenderQandA() {
        const classes = useStyles();

        return (
            <Container fixed style={{ minHeight: '100vh' }}>
                <Box pt={10}></Box>

                {
                    this.state.qa.map(qa => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{qa.q}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {qa.a}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })
                }


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
