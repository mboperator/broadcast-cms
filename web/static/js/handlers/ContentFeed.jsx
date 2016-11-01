import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import ContentFeed from '../components/ContentFeed';

const withContents = graphql(
  gql`query q {
  	content: content {
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

const destroyContent = graphql(
  gql`mutation m($id: String!) {
    destroyContent(input: {id: $id}) {
      deleted
      id
    }
  }
  `,
  {
    props: ({ mutate }) => ({
      destroyContent: id => mutate({ variables: {id} }),
    }),
  },
);

export default compose(
  withContents,
  destroyContent
)(ContentFeed);
