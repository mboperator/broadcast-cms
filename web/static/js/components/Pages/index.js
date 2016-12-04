import { compose } from 'recompose';
import Component from './Component';
import * as Page from '../../graphql/Page';

export default compose(
  Page.queries.findAll,
  Page.mutations.destroyPage
)(Component);
