import ApolloClient, { createNetworkInterface } from 'apollo-client';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/api',
  }),
});

const getClient = () => client;

export default getClient;
