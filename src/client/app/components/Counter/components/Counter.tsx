import * as React from 'react';
import './Counter.scss';
import {CounterViewProps} from '../../../scenes/Counter/CounterContainer';
import {Link} from 'react-router-dom';

export const Counter = (props: CounterViewProps) => (
  <section className='counter-section'>
    <div className="counter-section__container">
      <button className='counter-section__container__button -regular increment' onClick={props.incrementHandler}>+</button>
      <span className='counter-section__container__number-display'>{props.number}</span>
      <button className='counter-section__container__button -regular decrement' onClick={props.decrementHandler}>-</button>
    </div>

    <div className="counter-section__back-home">
      We are done here, let's go to the <Link className='counter-section__home-link' to='/'>Home</Link>
    </div>

  </section>
);
