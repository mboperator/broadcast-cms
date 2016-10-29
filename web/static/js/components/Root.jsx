import React, {PropTypes} from 'react';
import { config } from 'rebass';

class Root extends React.Component {
  state = {
    style: {
      ...config,
      fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
    },
  }
  getChildContext() {
    return {
      rebass: this.state.style,
    };
  }

  render() {
    return (
      <div style={this.state.style}>
        {this.props.children}
      </div>
    );
  }

  static childContextTypes = {
    rebass: PropTypes.object,
  }

}

Root.propTypes = {
  children: PropTypes.node,
};

export default Root;
