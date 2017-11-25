import * as React from 'react';
import {CounterViewProps} from '../../../scenes/Counter/CounterContainer';
import {Link} from 'react-router-dom';

export const Counter = (props: CounterViewProps) => (
  <section className='counter'>
    Hello World! <span>{props.number}</span>
    <button className='increment' onClick={props.incrementHandler}>increment</button>
    <button className='decrement' onClick={props.decrementHandler}>decrement</button>

    We are done here, let's go to the <Link to='/'>Home</Link>
  </section>
);
