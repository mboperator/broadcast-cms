import React, { Component } from 'react';
import { PageHeader } from 'rebass';
import { ApolloProvider } from 'react-apollo';

import client from '../utils/getClient';
import store from '../utils/getStore';

import AppLayout from '../components/AppLayout';
import ContentFeed from './ContentFeed';
import NewContentModal from './NewContentModal';

import { Box } from 'react-layout-components';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider store={store()} client={client()}>
        <AppLayout>
          <Box justifyContent="space-between">
            <Box>
              <PageHeader
                heading="broadcast.love"
              />
            </Box>
            <Box>
              <NewContentModal />
            </Box>
          </Box>
          <ContentFeed />
        </AppLayout>
      </ApolloProvider>
    );
  }
}
