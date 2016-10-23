// Phoenix' dependencies
import '../../../deps/phoenix/priv/static/phoenix';
import '../../../deps/phoenix_html/priv/static/phoenix_html';

// Shiny new, hot React component
import React, { Component } from 'react';
import { render } from 'react-dom';

class BroadcastLove extends Component {
  render() {
    return (
      <section>
        <h1>broadcast.love</h1>
      </section>
    );
  }
}

render(<BroadcastLove />, document.getElementById('root'));
