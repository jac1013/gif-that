import {increment, decrement} from '../../services/counter/actions';
import {connect} from 'react-redux';
import {Counter} from '../../components/Counter/components/Counter';
import {getCounter} from '../../services/counter/index';

export interface CounterState {
  number: number;
}

export interface CounterProps {
  incrementHandler: any
  decrementHandler: any
}

export interface CounterViewProps extends CounterState, CounterProps {}

const mapStateToProps = (state: any) : CounterState => {
  return {
    number: getCounter(state)
  }
};

const mapDispatchToProps = (dispatch: any) : CounterProps => {
  return {
    incrementHandler: () => {
      dispatch(increment());
    },
    decrementHandler: () => {
      dispatch(decrement());
    }
  }
};

export const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
