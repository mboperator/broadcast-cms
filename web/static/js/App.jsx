import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory } from 'react-router';

import client from './utils/getClient';
import store from './utils/getStore';

import AppLayout from './components/AppLayout';
import * as Pages from './components/Pages';

export const App = () => (
  <ApolloProvider store={store()} client={client()}>
    <AppLayout>
      <Router history={hashHistory}>
        <Route path="/" component={Pages.List} />
        <Route path="/pages/:page_id" component={Pages.View} />
      </Router>
    </AppLayout>
  </ApolloProvider>
);

export default App;
