import * as React from 'react';
import {Link} from 'react-router-dom';

export const Home = () => (
  <section className='home'>
    This is our Home, go to the <Link to='/counter'>Counter!</Link>
  </section>
);

