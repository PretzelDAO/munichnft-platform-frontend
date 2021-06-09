import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderAbout = this.RenderAbout.bind(this);
  }

  RenderAbout() {

    return (
      <div>
        <p>About</p>
      </div>
    );
  }

  render() {
    return (
      <this.RenderAbout />
    );
  }
}

export default About;