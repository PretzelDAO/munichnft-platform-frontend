import React from 'react';

import Logo from '../res/logo.gif';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderHome = this.RenderHome.bind(this);
  }

  RenderHome() {

    return (
      <div class="ui container">
        <p>Home</p>
        <img src={Logo} />
        Test Text
      </div>
    );
  }

  render() {
    return (
      <this.RenderHome />
    );
  }
}

export default Home;