import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Card, Box, Flex, Icon, Text, Link, Heading, Button, Loader, Tooltip } from "rimble-ui";

const useStyles = makeStyles(theme => ({
  root: {

  },
}));

class TxDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.RenderTxDialog = this.RenderTxDialog.bind(this);
  }

  RenderTxDialog() {
    const classes = useStyles();

    return (
      <Card borderRadius={1} p={0}>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          borderBottom={1}
          borderColor="near-white"
          p={[3, 4]}
          pb={3}
        >
          <Loader color="black" aria-label="Processing" size="24px" />
          <Heading textAlign="center" as="h1" fontSize={[2, 3]} px={[3, 0]}>
            Your transaction has started
          </Heading>
        </Flex>
        <Box p={[3, 4]}>
          <Flex justifyContent={"space-between"} flexDirection={"column"}>
            <Text textAlign="center">
              The Ethereum network is processing your transaction, which can take a little while.
            </Text>
          </Flex>
        </Box>
      </Card>
    );
  }

  render() {
    return (
      <this.RenderTxDialog />
    );
  }
}

export default TxDialog;