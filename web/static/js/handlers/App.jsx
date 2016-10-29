import React, { Component } from 'react';
import { PageHeader } from 'rebass';
import { ApolloProvider } from 'react-apollo';
import AppLayout from '../components/AppLayout';
import client from '../utils/getClient';
import store from '../utils/getStore';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider store={store} client={client}>
        <AppLayout>
          <PageHeader
            description="worldwide"
            heading="broadcast.love"
          />
        </AppLayout>
      </ApolloProvider>
    );
  }
}
