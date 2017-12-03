import {types, CounterAction} from './actions';

export interface CounterState {
  number: number;
}

export const counter = (state: CounterState = {number: 0}, action: CounterAction) => {
  switch (action.type) {
    case types.INCREMENT:
      return {...state, number: increment(state)};
    case types.DECREMENT:
      return {...state, number: decrement(state)};
    default:
      return state;
  }
};

export const getCounter = (state: any) : any => {
  return state.number;
};

function increment(state: CounterState) {
  return ++state.number;
}

function decrement(state: CounterState) {
  return --state.number;
}

