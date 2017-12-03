import * as React from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';

export const Home = () => (
  <section className='home-section'>
    <div className='home-section__text'> Welcome to <Link className='home-section__counter-link' to='/counter'>Counter!</Link></div>
  </section>
);

