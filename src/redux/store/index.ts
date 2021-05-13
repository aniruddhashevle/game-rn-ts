import { createStore } from 'redux';
import { combineReducers } from 'redux';
import gameReducers from '../reducers/game-reducers';

const combinedReducer = combineReducers({
  gameReducers,
});

export default function configureStore(initialState = {}) {
  return createStore(combinedReducer, initialState);
}