import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import createLogger from 'redux-logger';
import getClient from './getClient';

const logger = createLogger({
  collapsed: false,
});

const reducer = combineReducers({
  apollo: getClient().reducer(),
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(logger, getClient().middleware()))
);

const getStore = () => store;

export default getStore;
