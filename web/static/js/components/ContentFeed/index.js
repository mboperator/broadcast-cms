import { compose } from 'recompose';
import ContentFeed from './ContentFeed';
import * as Content from '../../graphql/Content';

export default compose(
  Content.queries.findAll,
  Content.mutations.destroyContent
)(ContentFeed);
