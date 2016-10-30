import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, mapProps } from 'recompose';
import ContentFeed from '../components/ContentFeed';

const withContents = graphql(
  gql`{
  	content {
  	  id,
      description,
      type,
      data
  	}
  }
  `
);

export default compose(
  withContents,
  mapProps(({ data: { content = [] } }) => ({ content })),
)(ContentFeed);
