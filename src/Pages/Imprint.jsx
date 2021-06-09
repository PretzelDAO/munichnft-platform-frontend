import React from 'react';

class Imprint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderImprint = this.RenderImprint.bind(this);
  }

  RenderImprint() {

    return (
      <div>
        <p>Imprint</p>
      </div>
    );
  }

  render() {
    return (
      <this.RenderImprint />
    );
  }
}

export default Imprint;