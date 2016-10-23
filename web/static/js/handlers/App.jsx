import React, { Component } from 'react';
import { Heading } from 'rebass';
import Root from '../components/Root';

export default class App extends Component {
  render() {
    return (
      <Root>
        <Heading level={1}>
          broadcast.love
        </Heading>
      </Root>
    );
  }
}
