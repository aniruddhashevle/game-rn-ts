import { createStore } from 'redux';
import { combineReducers } from 'redux';
import gameReducers from '../containers/Game/GameReducer';

const combinedReducer = combineReducers({
  gameReducers,
});

const store = createStore(combinedReducer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;