import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footerStyle: {
    backgroundColor: 'black',
    width: '100%',
    marginTop: '80px',
    padding: '8px 16px',
    textAlign: 'center'
  },
}));

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderFooter = this.RenderFooter.bind(this);
  }

  RenderFooter() {
    const classes = useStyles();
    const {
      history
    } = this.props;

    return (
      <div className={classes.footerStyle}>
        <Typography
          variant="body2" color="secondary">
          © 2021 Chair of Strategy and Organization, Technical University of Munich. All Rights Reserved.
          <br />
          <Link href="https://discord.gg/w5ugpemX2Z" target="_blank" rel="noopener" style={{ color: "#5865F2" }}>Discord</Link> ｜ <Link href="https://twitter.com/NftMunich" target="_blank" rel="noopener" style={{ color: "#1DA1F2" }}>Twitter</Link> ｜ <Link style={{ color: "#808080" }} href="/imprint">Legal Disclosure</Link>

        </Typography>

      </div>
    );
  }
  render() {
    return (
      <this.RenderFooter />
    );
  }
}

export default Footer;