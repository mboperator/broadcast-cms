import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import NewContentModal from '../components/NewContentModal';

const createContent = graphql(
  gql`
    mutation m($description: String!, $type: String!, $data: String!) {
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
      createContent: content => mutate({ variables: content }),
    }),
  }
);

export default createContent(NewContentModal);
