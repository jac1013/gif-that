import {types, CounterAction} from './actions';

export const counter = (state: number = 0, action: CounterAction) => {
  switch (action.type) {
    case types.INCREMENT:
      return ++state;
    case types.DECREMENT:
      return --state;
    default:
      return state;
  }
};

export const getCounter = (state: any) : any => {
  return state;
};

