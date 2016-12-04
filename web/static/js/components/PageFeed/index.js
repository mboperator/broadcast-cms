import { compose } from 'recompose';
import PageFeed from './PageFeed';
import * as Page from '../../graphql/Page';

export default compose(
  Page.queries.findAll,
  Page.mutations.destroyPage
)(PageFeed);
