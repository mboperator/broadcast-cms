import React, { Component } from 'react';
import { PageHeader } from 'rebass';
import Root from '../components/Root';

export default class App extends Component {
  render() {
    return (
      <Root>
        <PageHeader
          description="worldwide"
          heading="broadcast.love"
        />
      </Root>
    );
  }
}
