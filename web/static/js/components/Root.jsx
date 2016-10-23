import React, {PropTypes} from 'react';
import { config } from 'rebass';

class Root extends React.Component {
  getChildContext () {
    return {
      rebass: config,
    };
  }

  render () {
    return (
      <div>
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
