import React from 'react';

class DUMMY extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderDUMMY = this.RenderDUMMY.bind(this);
  }

  RenderDUMMY() {

    return (
      <div class="ui container">
        <p>DUMMY</p>
      </div>
    );
  }

  render() {
    return (
      <this.RenderDUMMY />
    );
  }
}

export default DUMMY;