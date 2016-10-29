import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';
import getClient from './getClient';

const reducer = combineReducers({
  apollo: getClient().reducer(),
});

const initialState = {};

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(getClient().middleware()))
);

const getStore = () => store;

export default getStore;
