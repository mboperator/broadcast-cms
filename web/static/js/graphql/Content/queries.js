import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const findAll = graphql(
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
