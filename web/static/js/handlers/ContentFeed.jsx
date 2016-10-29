import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose, mapProps } from 'recompose';
import ContentFeed from '../components/ContentFeed';

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

export default compose(
  withContents,
  mapProps(({ data: { content } }) => ({ content })),
)(ContentFeed);
