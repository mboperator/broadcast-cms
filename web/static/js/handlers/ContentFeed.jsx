import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
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


export default withContents(ContentFeed);
