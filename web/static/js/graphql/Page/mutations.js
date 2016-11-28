import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const destroyPage = graphql(
  gql`mutation DestroyPage($id: String!) {
    destroyPage(input: {id: $id}) {
      deleted
      id
    }
  }
  `,
  {
    props: ({ mutate }) => ({
      destroyPage: id => mutate({
        variables: {id},
        optimisticResponse: {
          __typename: 'Mutation',
          destroyPage: {
            __typename: 'Page',
            id: id,
            deleted: true,
          },
        },
        updateQueries: {
          Page: (prev, { mutationResult: { data } }) => {
            const newState = ({
              content: prev.content
                .filter(c => c.id !== data.destroyPage.id),
            });
            return newState;
          },
        },
      }),
    }),
  },
);
