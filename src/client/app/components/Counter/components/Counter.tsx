import * as React from 'react';
import {CounterViewProps} from '../../../scenes/Counter/CounterContainer';

export const Counter = (props: CounterViewProps) => (
  <section>
    Hello World! {props.number}
    <button onClick={props.incrementHandler}>increment</button>
    <button onClick={props.decrementHandler}>decrement</button>
  </section>
);
