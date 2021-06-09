import React from 'react';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderArtists = this.RenderArtists.bind(this);
  }

  RenderArtists() {

    return (
      <div>
        <p>Artists</p>
      </div>
    );
  }

  render() {
    return (
      <this.RenderArtists />
    );
  }
}

export default Artists;