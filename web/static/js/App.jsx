import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Miss, Match, BrowserRouter } from 'react-router';

import client from './utils/getClient';
import store from './utils/getStore';

import AppLayout from './components/App';
import Login from './components/App/Login';
import Signup from './components/App/Signup';
import * as Pages from './components/Pages';

export const App = () => (
  <ApolloProvider store={store()} client={client()}>
    <BrowserRouter>
      <AppLayout>
        <Match pattern="/login" component={Login} />
        <Match pattern="/signup" component={Signup} />
        <Match pattern="/pages/:pageId" component={Pages.View} />
        <Miss component={Pages.List} />
      </AppLayout>
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
