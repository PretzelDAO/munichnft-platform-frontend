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
            <Container fixed>
                <Box pt={10}>
                    <Typography variant="h2" component="h1" gutterBottom>Frequently asked questions</Typography>
                </Box>

                <h2>What is the Blockchain?</h2>
                <p>Blockchain is a specific type of database, which stores data in blocks that are then chained together. As new data comes in it is entered into a fresh block. Once the block is filled with data it is chained onto the previous block, which makes the data chained together in chronological order.Decentralized blockchains are immutable, which means that the data entered is irreversible.</p>
                <p><a href="https://www.investopedia.com/terms/b/blockchain.asp" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.investopedia.com/terms/b/blockchain.asp</a></p>

                <h2>Is the Blockchain harming the environment?</h2>
                <p>Blockchains consume a lot of energy and at least for now a big portion of this energy comes from fossil fuels. According to the Cambridge Bitcoin Electricity Consumption Index bitcoin-mining operations worldwide annual domestic electricity consumption of the entire nation of Sweden (TheNewYorker).</p>
                <p>But there are many opportunities for improvement: Technical alternatives (proof of stake, the introduction of another layer…) will reduce emissions and the usage of clean energy will increase.</p>
                <p>Ultimately, <b>artists</b> are the ones pushing the most for <b>change</b>.</p>
                <p><a href="https://www.newyorker.com/news/daily-comment/why-bitcoin-is-bad-for-the-environment" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.newyorker.com/news/daily-comment/why-bitcoin-is-bad-for-the-environment</a></p>

                <h2>What is Ethereum?</h2>
                <p>Ethereum is a blockchain platform with its own cryptocurrency, called Ether (ETH) or Ethereum, and its
                    own programming language, called Solidity.</p>
                <p>As a blockchain network, Ethereum is a decentralized public ledger for verifying and recording transactions. The network's users can create, publish, monetize, and use applications on the platform, and use its Ether cryptocurrency as payment.</p>
                <p><a href="https://www.investopedia.com/terms/e/ethereum.asp" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.investopedia.com/terms/e/ethereum.asp</a></p>

                <h2>What are NFTs?</h2>
                <p>An NFT is a digital asset that represents real-world objects like art, music, in-game items, and videos. They are bought and sold online, frequently with&nbsp;cryptocurrency, and they are generally encoded with the same underlying software as many cryptos. Every NFT is unique and non-replicable.</p>
                <p><a href="https://www.forbes.com/advisor/investing/nft-non-fungible-token/" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.forbes.com/advisor/investing/nft-non-fungible-token/</a></p>

                <h2>What are the legal aspects of trading NFTs?</h2>
                <p>Legal disputes with NFTs are currently only taking place in specialist circles. As this topic is quite complex the following merely provides an initial overview:</p>
                <p>When selling art <b>ownership</b> and intellectual <b>copyrights </b>can be transferred independently:</p>
                <ol>
                    <li>Ownership of the physical painting (regardless of the content)</li>
                    <li>Intellectual copyrights on the artwork (regardless of the physical embodiment)</li>
                </ol>

                <p>So far: Actual &quot;ownership&quot; of data is not possible, it requires a &quot;physical object&quot;. The reason for this is the free duplicability of (conventional) data (copy=original).<br />
                    As a result authors can only license copyrights but cannot &quot;sell&quot; the property of the artwork itself.</p>
                <p>But changes are about to come as NFTs can represent a unique &quot;digital original&quot;.</p>
                <p>For further information we recommend reading the following articles:</p>

                <p><a href="https://www.cms-lawnow.com/ealerts/2021/04/legal-challenges-of-non-fungible-tokens-nfts?cc_lang=en" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.cms-lawnow.com/ealerts/2021/04/legal-challenges-of-non-fungible-tokens-nfts?cc_lang=en</a><br />
                    <a href="https://www.cms-lawnow.com/ealerts/2021/06/german-income-tax-law-and-non-fungible-tokens?cc_lang=en" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.cms-lawnow.com/ealerts/2021/06/german-income-tax-law-and-non-fungible-tokens?cc_lang=en</a></p>
                <p>Content: Dr. Alexander Schmid, CMS Germany</p>

                <h2>What are gas fees?</h2>
                <p>Gas fees are payments made by users to compensate for the computing energy required to process and validate transactions on the Ethereum&nbsp;blockchain.</p>
                <p><a href="https://www.investopedia.com/terms/g/gas-ethereum.asp" rel="noopener" style={{ color: "#808080", textDecoration: "underline" }} target="_blank">https://www.investopedia.com/terms/g/gas-ethereum.asp</a></p>

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
