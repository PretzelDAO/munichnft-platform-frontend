import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Container, Grid, TextareaAutosize, TextField,
  Typography, Stepper, Step, StepLabel,
} from '@material-ui/core';

import { create } from 'ipfs-http-client';
import { CID } from 'ipfs-http-client'
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
const client = create(new URL('https://ipfs.infura.io:5001'));

import * as Web3 from 'web3'
const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

import CONFIG from '../config';
import contractAbi from '../res/contract';

const IpfsUploader = (props) => {
  // specify upload params and url for your files
  const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }

  // receives array of files that are done uploading when submit button is clicked
  const handleSubmit = (files, allFiles) => {
    files.forEach(async (file) => {
      console.log(file);
      const res = await client.add(file.file);
      props.onUploaded(res.path);
      console.log(res);
      file.remove();
    });
  }

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      accept="image/*,audio/*,video/*"
      maxFiles={1}
      inputContent="Drag your Art here!"
    />
  )
}

const useStyles = makeStyles(theme => ({
  root: {

  },
  dropStyle: {
    border: '1px solid black',
    width: 600,
    color: 'black',
    padding: 20,
  },
  nextButtonStyle: {
    padding: '8px',
  }
}));

class MintNft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUploadResult: '',
      metaDataUploadResult: '',
      nftMintResult: '',

      nftName: '',
      nftDescription: '',
    };

    this.RenderMintNft = this.RenderMintNft.bind(this);
  }

  RenderMintNft() {
    const classes = useStyles();

    // addMetaData();

    const onUploaded = (path) => {
      this.setState({ fileUploadResult: path });
    }

    const { fileUploadResult, nftName, nftDescription, metaDataUploadResult, nftMintResult } = this.state;

    const mintNft = async () => {
      const contractAddres = CONFIG.TOKEN_ADDRESS;
      const accounts = await web3.eth.getAccounts();
      const account = accounts[0];
      const contract = new web3.eth.Contract(contractAbi.ABI, contractAddres, {
        from: account, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
      });
      const contractCallRes = await contract.methods.mint(account, metaDataUploadResult).send();
      console.log(contractCallRes);
      this.setState({ nftMintResult: contractCallRes })
    }

    const addMetaData = async () => {
      const doc = JSON.stringify({
        name: nftName,
        description: nftDescription,
        image: `https://ipfs.io/ipfs/${fileUploadResult}`,
        external_link: 'https://munichnft.com',
      });

      const cid = await client.add(doc);
      console.log("IPFS cid:", cid);
      this.setState({ metaDataUploadResult: cid.path });
    }

    const getSteps = () => {
      return ['Upload your Art', 'Add Information to it', 'Mint your NFT', 'List it for Sale'];
    }

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
      setActiveStep(0);
    };

    const step1 = (
      <>
        {fileUploadResult === '' ? (
          <Container>
            <Typography variant="h5">
              Upload your Art
            </Typography>
            <IpfsUploader onUploaded={onUploaded} />
          </Container>
        ) : (
          <Container>
            <Typography variant="body2">
              Uploaded: {fileUploadResult}
            </Typography>
            <Button onClick={handleNext} variant="outlined" className={classes.nextButtonStyle} size="massive">
              Next
            </Button>
          </Container>
        )}
      </>
    );

    const step2 = (
      <Container>
        <Typography variant="h5">
          Add Information to your Art
        </Typography>
        {metaDataUploadResult === '' ? (
          <>
            <TextField variant="outlined" placeholder="Name" value={nftName} onChange={(event) => this.setState({ nftName: event.target.value })} />
            <TextareaAutosize placeholder="Description" rowsMin={6} value={nftDescription} onChange={(event) => this.setState({ nftDescription: event.target.value })} />
            <Button variant="outlined" onClick={() => addMetaData()}>
              Create Metadata!
            </Button>
          </>
        ) : (
          <>
            <Typography variant="body2">
              Uploaded: {metaDataUploadResult}
            </Typography>
            <Button onClick={handleNext} variant="outlined" className={classes.nextButtonStyle} size="massive">
              Next
            </Button>
          </>
        )}
      </Container>
    );

    const step3 = (
      <>
        {nftMintResult === '' ? (
          <Container>
            <Typography variant="h5">
              Mint your NFT
            </Typography>
            <Button variant="outlined" onClick={() => mintNft()}>
              Mint!
            </Button>
          </Container>
        ) : (
          <Container>
            <Typography variant="body2">
              Minted: {nftMintResult}
            </Typography>
            <Button onClick={handleNext} variant="outlined" className={classes.nextButtonStyle} size="massive">
              Next
            </Button>
          </Container>
        )}
      </>
    );

    const stepper = (
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === 0 && (
            <>
              {step1}
            </>
          )}
          {activeStep === 1 && (
            <>
              {step2}
            </>
          )}
          {activeStep === 2 && (
            <>
              {step3}
            </>
          )}
        </div>
      </div>
    );

    return (
      <>
        {stepper}
      </>
    );
  }

  render() {
    return (
      <this.RenderMintNft />
    );
  }
}

export default MintNft;