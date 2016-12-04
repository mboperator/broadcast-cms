import React from 'react';
import { compose } from 'recompose';
import StatelessList from './List';
import StatelessView from './View';
import * as Page from '../../graphql/Page';

export const List = compose(
  Page.queries.findAll,
  Page.mutations.destroyPage
)(StatelessList);

export const View = compose(
  Component => ({params, ...props}) => (
    <Component pageId={params.pageId} {...props} />
  ),
  Page.queries.findOne
)(StatelessView);
