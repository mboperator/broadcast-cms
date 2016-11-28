import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import { Router, Route, hashHistory } from 'react-router';

import client from '../utils/getClient';
import store from '../utils/getStore';

import AppLayout from '../components/AppLayout';
import PageFeed from './PageFeed';
import ContentFeed from './ContentFeed';
import NewContentModal from './NewContentModal';

import { Box } from 'react-layout-components';

export const App = () => (
  <ApolloProvider store={store()} client={client()}>
    <AppLayout>
      <Box justifyContent='center'
        style={{
          paddingTop: '20px',
          height: '96vh',
          overflow: 'hidden',
        }}
      >
        <Box
          justifyContent="space-between"
          style={{
            position: 'fixed',
            left: 0,
            top: 0,
            right: 0,
            backgroundColor: 'white',
            boxShadow: '0px 3px 17px 0px rgba(50, 50, 50, 0.46)',
          }}
        >
          <div style={{ padding: '5px', size: '25px' }}>♥</div>
          <Box>
            <NewContentModal />
          </Box>
        </Box>
        <Router history={hashHistory}>
          <Route path="/" component={PageFeed} />
          <Route path="/pages/:page_id" component={ContentFeed} />
        </Router>
      </Box>
    </AppLayout>
  </ApolloProvider>
);

export default App;
