import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const findAll = graphql(
  gql`query pages {
  	pages:page {
  	  id,
      title,
      subtitle,
      contents {
        id,
        type,
        data,
        description
      }
  	}
  }
  `,
  {
    props: ({ data: { pages = [] } }) => ({ pages }),
  }
);

export const findOne = graphql(
  gql`query page($id: ID!) {
    page(id: $id) {
      id,
      title,
      subtitle,
      contents {
        id,
        type,
        data,
        description
      }
    }
  }`,
  {
    options: ({ pageId }) => ({ variables: { id: pageId }}),
    props: ({ data: { page = {} } }) => ({ page }),
  }
);
