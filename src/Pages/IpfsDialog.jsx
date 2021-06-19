import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Card, Box, Flex, Icon, Text, Link, Heading, Button, Loader, Tooltip } from "rimble-ui";

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class IpfsDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderIpfsDialog = this.RenderIpfsDialog.bind(this);
  }

  RenderIpfsDialog() {
    const classes = useStyles();

    return (
      <Card borderRadius={1} p={0}>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          borderBottom={1}
          borderColor="near-white"
          p={[3, 4]}
          pb={3}
        >
          <Loader color="black" aria-label="Processing" size="24px" />
          <Heading textAlign="left" as="h1" fontSize={[2, 3]} px={[3, 0]}>
            File upload has started...
          </Heading>
        </Flex>
        <Box p={[3, 4]}>
          <Flex justifyContent={"space-between"} flexDirection={"column"}>
            <Text textAlign="center">
              The IPFS network is processing your upload, which can take a little while.
            </Text>
          </Flex>
        </Box>
      </Card>
    );
  }

  render() {
    return (
      <this.RenderIpfsDialog />
    );
  }
}

export default IpfsDialog;