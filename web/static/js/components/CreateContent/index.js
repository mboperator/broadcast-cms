import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import NewContentModal from './NewContentModal';

const createContent = graphql(
  gql`
    mutation CreateContent($description: String!, $type: String!, $data: String!) {
      createContent(input: {description: $description, type: $type, data: $data}) {
        content {
          data
          description
          type
          id
        }
      }
    }
  `,
  {
    props: ({ mutate }) => ({
      createContent: content => mutate({
        variables: content,
        optimisticResponse: {
          __typename: 'Mutation',
          createContent: {
            __typename: 'Content',
            content: {...content, id: 'temp'},
          },
        },
        updateQueries: {
          Content: (prev, { mutationResult: { data } }) => {
            const newState = ({
              content: prev.content.concat(data.createContent.content),
            });
            return newState;
          },
        },
      }),
    }),
  }
);

export default createContent(NewContentModal);
