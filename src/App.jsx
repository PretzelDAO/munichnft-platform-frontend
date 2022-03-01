import React from 'react';
import axios from 'axios';
import Bignumber from 'bignumber.js';
import history from './history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import { lightTheme } from './theme/muiTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

import CONFIG from './config';

import Artists from './Pages/Artists';
import About from './Pages/About';
import Imprint from './Pages/Imprint';
import Home from './Pages/Home';
import QandA from './Pages/QandA';

import Navbar from './Navigation/Navbar';
import NavbarDrawer from './Navigation/NavbarDrawer';
import Footer from './Navigation/Footer';
import Listings from './Pages/Listings';
import DetailView from './Pages/DetailView';
import MintNft from './Pages/MintNft';

import * as Web3 from 'web3'

import openseaData from './res/openseadata';

import { OpenSeaPort } from 'opensea-js';
let web3;
let seaport;
if (Web3.givenProvider) {
  web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
  seaport = new OpenSeaPort(Web3.givenProvider, {
    networkName: CONFIG.NETWORK,
  });
}

const useStyles = makeStyles((theme) => ({
  root: {},
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nfts: [],
      isLoggedIn: false,
      user: {
        accountAddress: '',
        accountBalance: 0,
      },
    };

    this.RenderApp = this.RenderApp.bind(this);
    this.refreshData = this.refreshData.bind(this);
    this.loadAccount = this.loadAccount.bind(this);
  }

  componentDidMount() {
    this.refreshData();
    this.loadAccount();
  }

  async loadAccount() {
    if (!web3) {
      return;
    }
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    if (!account) {
      return;
    }
    const user = {};
    web3.eth.getBalance(account).then((balance) => {
      console.log(web3.utils.fromWei(balance, 'ether'));
      user.accountBalance = web3.utils.fromWei(balance, 'ether');
      user.accountAddress = account;
      this.setState({ user, isLoggedIn: true });
    });
  }

  async refreshData() {
    const nfts = [];
    const tokenAddress = CONFIG.TOKEN_ADDRESS;
    let assetsObjects;
    try {
      // assetsObjects = await axios.get(`https://api.opensea.io/api/v1/assets/?asset_contract_address=${tokenAddress}`);
      // assetsObjects = assetsObjects.data;
      assetsObjects = openseaData;
    } catch (e) {
      console.log('retrying', e);
      setTimeout(() => {
        this.refreshData();
      }, 1500);
      return;
    }
    console.log(assetsObjects);
    assetsObjects.assets.reverse().forEach(async (asset) => {
      if (!asset.image_original_url) {
        return;
      }
      let price;
      let sold = false;
      console.log(asset);
      if (asset.sell_orders) {
        if (asset.sell_orders[0]) {
          //price = web3.utils.fromWei(`${new Bignumber(asset.sell_orders[0].base_price).toNumber()}`, 'ether');
          price = new Bignumber(asset.sell_orders[0].base_price).toNumber() / 1e18;
        } else {
          price = 0;
          sold = false;
        }
      } else {
        price = 0;
        sold = false;
      }
      let owner;
      let soldFor;
      if (asset.owner.user) {
        if (asset.owner.user.username) {
          owner = asset.owner.user.username;
        }
      }
      if (asset.last_sale) {
        soldFor = new Bignumber(asset.last_sale.total_price).toNumber() / 1e18;
      }
      if (!owner) {
        owner = asset.owner.address;
      }
      if (owner === 'BurnAddress') {
        return;
      }

      let creator;
      if (asset.creator.user) {
        if (asset.creator.user.username) {
          creator = asset.creator.user.username;
        }
      }
      if (!creator) {
        creator = asset.creator.address;
      }
      let ownerProfilePic = asset.owner.profile_img_url;
      switch (asset.token_id) {
        case '1':
          creator = 'munichNFT_Team';
          break;
        case '2':
          creator = 'Max_Haarich';
          ownerProfilePic = 'https://lh3.googleusercontent.com/ShSpCRLtkHL8Gqi6cfZk5xNJ3-t1JrmIzJUQsDvTo00ZsK-OhFGHLNgmLyto_4pum4PiDeujKoNup0PdbEwy38QzoEtWgTBVmi25n0k=s44';
          break;
        case '3':
          creator = 'tkgNFT';
          ownerProfilePic = 'https://lh3.googleusercontent.com/hIvSfX6gTfuWRnO0uqfd3rnnzxo_xIYNjJ8lV9cgFHMEIz47_kg-STRoS9BRD9qrUlEkAfquau07VyxpWaYph2mbA6UbpnoUl82E7A=s44';
          break;
        case '4':
          creator = 'Nils_Froehling';
          ownerProfilePic = 'https://lh3.googleusercontent.com/lI7GDFBvS_Pa9lKNOFKwPx7lWZZBMv97bcWfCUMjWYZ6yAssiRx6qKen32TTykkMAaWczwKhkDn8_m8P9kVasHrohuWrDCEkCPxwrg=s44';
          break;
        case '5':
          creator = 'dominikbais';
          ownerProfilePic = 'https://lh3.googleusercontent.com/lx_r7bnWKDJCDgn-uxLPk_r27Irkcay7w8lJXNbX8mb4cuyXnXP63LIOJAkAp7ykocZqjru8X5tA5c589tsoHIW-Fcl7-ESlS_gPLgc=s44';
          break;
        case '6':
          creator = 'Delix';
          ownerProfilePic = 'https://lh3.googleusercontent.com/IGXrpq7wTSHJiJvN-biQ1H7Ab7ulwvSDGgG2hZ16t2s_Ylm7l-cJvJ-JBdLvsi1OgoyBUBz5XX9pOgntVaq2-EIB-0shkKJ0hG3S=s44';
          break;
        case '7':
          creator = 'LuXxn';
          ownerProfilePic = 'https://lh3.googleusercontent.com/oYeAa-cpZHpYMzNQdVckIAHuaGqfnHnMiPxGgFVaNY5L3LfOa8-kWtwPx4e-bPJ4fV63CyCincTBl_FcpB8jVr-Nv8hMpfHICvM3Hw=s44';
          break;
        case '9':
          creator = 'FelixST';
          ownerProfilePic = 'https://lh3.googleusercontent.com/Q68EM-mlTQlJovxATlq8K4WeoGEgy4jB4cOeM8kK6XPKGANQpeGyMYQWssDfvUGgKM41qw1PFWVkBRw6uvjlJ8J7bvVVv9eVaHS-0Wo=s44';
          break;
      }
      const buyOrderObj = asset.last_sale;
      nfts.push({
        name: asset.name,
        imageUrlOriginal: asset.image_original_url,
        imageUrl: asset.image_url,
        tokenId: asset.token_id,
        description: asset.description,
        owner,
        creator,
        ownerProfilePic,
        price,
        buyOrder: buyOrderObj,
        sold,
        soldFor,
        raw: asset,
      });
    });
    console.log(nfts);
    this.setState({ nfts });
  }

  RenderApp() {
    const classes = useStyles();

    const onMenuSelected = () => {
      const { swipeSidebarOpen } = this.state;
      this.setState({ swipeSidebarOpen: !swipeSidebarOpen });
    };

    const onSidebarEventTouch = open => event => {
      if (
        event
        && event.type === 'keydown'
        && (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }

      this.setState({ swipeSidebarOpen: open });
    };

    const onLoginRequest = async () => {
      if (!web3) {
        console.log('metamask not installed');
        return;
      }
      const accounts = await web3.eth.requestAccounts();
      const account = accounts[0];
      if (!account) {
        return;
      }
      const user = {};
      web3.eth.getBalance(account).then((balance) => {
        console.log(web3.utils.fromWei(balance, 'ether'));
        user.accountBalance = web3.utils.fromWei(balance, 'ether');
        user.accountAddress = account;
        this.setState({ user, isLoggedIn: true });
      });
    };

    const { nfts, isLoggedIn, user } = this.state;

    return (
      <MuiThemeProvider theme={lightTheme}>
        <CssBaseline>
          <Navbar {...this.props} history={history} onMenuSelected={onMenuSelected} onLoginRequest={onLoginRequest} user={user} isLoggedIn={isLoggedIn} />
          <NavbarDrawer {...this.props} history={history} swipeSidebarOpen={this.state.swipeSidebarOpen} onSidebarEventTouch={onSidebarEventTouch} onMenuSelected={onMenuSelected} />
          <Router style={{ minHeight: '100vh' }} history={history}>
            <Switch>
              <Route
                exact
                path={'/'}
                render={props => (
                  <>
                    <Home {...props} />
                    <Listings {...props} nfts={nfts} />
                  </>
                )}
              />
              <Route
                exact
                path={'/artists'}
                render={props => (
                  <Artists {...props} />
                )}
              />
              <Route
                exact
                path={'/about'}
                render={props => (
                  <About {...props} />
                )}
              />
              <Route
                exact
                path={'/imprint'}
                render={props => (
                  <Imprint {...props} />
                )}
              />
              <Route
                exact
                path={'/qanda'}
                render={props => (
                  <QandA {...props} />
                )}
              />
              <Route
                exact
                path={'/view'}
                render={props => (
                  <DetailView {...props} nfts={nfts} />
                )}
              />
              <Route
                exact
                path={'/mint'}
                render={props => (
                  <MintNft {...props} />
                )}
              />
            </Switch>
          </Router>
          <Footer history={history} />
        </CssBaseline>
      </MuiThemeProvider>
    );
  }

  render() {
    return <this.RenderApp />;
  }
}

export default App;
