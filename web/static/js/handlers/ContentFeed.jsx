import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
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
  `,
  {
    props: ({ data: { content = [] } }) => ({ content }),
  }
);

const createContent = graphql(
  gql`
    mutation createContent($content: content) {
      createContent(content: $content) {
        data
        description
        type
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      createContent: content => mutate({ variables: content }),
    }),
  }
);

export default compose(
  withContents,
  createContent,
)(ContentFeed);
