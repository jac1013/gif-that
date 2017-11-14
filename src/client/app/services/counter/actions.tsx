interface ActionTypes {
  INCREMENT: string
  DECREMENT: string
}

export const types: ActionTypes = {
  INCREMENT: 'INCREMENT_COUNTER',
  DECREMENT: 'DECREMENT_COUNTER'
};

export interface CounterAction {
  type: string
}

export const increment = (): CounterAction => {
  return {
    type: types.INCREMENT,
  }
};

export const decrement = (): CounterAction => {
  return {
    type: types.DECREMENT
  }
}
