import { compose } from 'recompose';
import Component from './Component';
import * as Content from '../../graphql/Content';

export default compose(
  Content.queries.findAll,
  Content.mutations.destroyContent
)(Component);

export const ContentList = Component;
