import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import ContentFeed from '../components/ContentFeed';

const withContents = graphql(
  gql`query Content {
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
  gql`mutation DestroyContent($id: String!) {
    destroyContent(input: {id: $id}) {
      deleted
      id
    }
  }
  `,
  {
    props: ({ mutate }) => ({
      destroyContent: id => mutate({
        variables: {id},
        optimisticResponse: {
          __typename: 'Mutation',
          destroyContent: {
            __typename: 'Content',
            id: id,
            deleted: true,
          },
        },
        updateQueries: {
          Content: (prev, { mutationResult: { data } }) => {
            const newState = ({
              content: prev.content
                .filter(c => c.id !== data.destroyContent.id),
            });
            return newState;
          },
        },
      }),
    }),
  },
);

export default compose(
  withContents,
  destroyContent
)(ContentFeed);
