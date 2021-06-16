import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  footerStyle: {
    backgroundColor: 'black',
    width: '100%',
    marginTop: '16px',
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
          <Link onClick={ () => {history.push('/imprint'); window.scrollTo(0, 0)}} color="secondary"> Legal Disclosure</Link>


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