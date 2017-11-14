import { combineReducers } from 'redux'
import * as fromReducer from './reducers';

export const counters = combineReducers({
  counter: fromReducer.counter
});

export const getCounter = (state: any) : any => fromReducer.getCounter(state.counter);
