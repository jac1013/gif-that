import {increment, decrement} from '../../services/counter/actions';
import {connect} from 'react-redux';
import {Counter} from '../../components/Counter/components/Counter';
import {getCounter} from '../../services/counter/index';
import * as React from 'react';
import {CounterState} from '../../services/counter/reducers';

export interface CounterProps {
  increment: (event: React.MouseEvent<HTMLInputElement>) => void;
  decrement: (event: React.MouseEvent<HTMLInputElement>) => void;
}

export interface CounterViewProps extends CounterState, CounterProps {}

const mapStateToProps = (state: any) : CounterState => {
  return {
    number: getCounter(state)
  }
};

const mapDispatchToProps = (dispatch: any) : CounterProps => {
  return {
    increment: () => {
      dispatch(increment());
    },
    decrement: () => {
      dispatch(decrement());
    }
  }
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
