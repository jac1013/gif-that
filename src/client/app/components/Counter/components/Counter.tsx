import * as React from 'react';
import {CounterViewProps} from '../../../scenes/Counter/CounterContainer';
import {Link} from 'react-router-dom';

export const Counter = (props: CounterViewProps) => (
  <section>
    Hello World! {props.number}
    <button onClick={props.incrementHandler}>increment</button>
    <button onClick={props.decrementHandler}>decrement</button>

    We are done here, let's go to the <Link to='/'>Home</Link>
  </section>
);
