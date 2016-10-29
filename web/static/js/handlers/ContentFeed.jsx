import React, { PropTypes } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { compose, mapProps } from 'recompose';

const contentQuery = gql`{
	content {
	  id,
    description,
    type,
    data
	}
}
`;

const withContents = graphql(contentQuery);

class ContentFeed extends React.Component {
  render() {
    return (
      <div>
        {JSON.stringify(this.props)}
      </div>
    );
  }
}

ContentFeed.propTypes = {
};

export default compose(
  withContents,
  mapProps(({ data: { content } }) => ({ content }))
)(ContentFeed);
