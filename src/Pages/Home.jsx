import React from 'react';
import { Container, Item, Button, Header } from 'semantic-ui-react'

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
      <Container>
        <Header size='huge'>Home</Header>
        <img src={Logo} />
        <Item>
          <Item.Content>
            <Item.Header as='a'>Header</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Extra>Additional Details</Item.Extra>
          </Item.Content>
        </Item>
        <Button primary>Click me</Button>
      </Container>
    );
  }

  render() {
    return (
      <this.RenderHome />
    );
  }
}

export default Home;