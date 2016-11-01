import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const destroyContent = graphql(
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
