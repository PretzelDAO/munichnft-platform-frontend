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
      assetsObjects = await axios.get(`https://api.opensea.io/api/v1/assets?order_direction=desc&offset=0&limit=100&asset_contract_addresses=${tokenAddress}`);
      assetsObjects = assetsObjects.data;
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
          sold = true;
        }
      } else {
        price = 0;
        sold = true;
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
      const buyOrderObj = asset.sell_orders && asset.sell_orders[0];
      nfts.push({
        name: asset.name,
        imageUrlOriginal: asset.image_original_url,
        tokenId: asset.token_id,
        description: asset.description,
        owner,
        creator,
        ownerProfilePic: asset.owner.profile_img_url,
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
