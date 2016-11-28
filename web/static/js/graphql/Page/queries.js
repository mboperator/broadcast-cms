import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const findAll = graphql(
  gql`query pages {
  	pages:page {
  	  id,
      title,
      subtitle,
      contents{
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
