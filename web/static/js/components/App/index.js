import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { config } from 'rebass';
import { Box } from 'react-layout-components';
import Signup from './Signup';
import Login from './Login';

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
              <Link to="/login">
                Login
              </Link>
              <Link to="/signup">
                Signup
              </Link>
            </Box>
          </Box>
          {this.props.children}
        </Box>
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
