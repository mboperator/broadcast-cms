import React, { PropTypes } from 'react';
import { config } from 'rebass';
import { Box } from 'react-layout-components';

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
      <Box column style={this.state.style}>
        {this.props.children}
      </Box>
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
