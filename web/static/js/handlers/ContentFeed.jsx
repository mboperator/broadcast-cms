import { compose } from 'recompose';
import ContentFeed from '../components/ContentFeed';
import * as Content from '../graphql/Content';

export default compose(
  Content.queries.findAll,
  Content.mutations.destroyContent
)(ContentFeed);
