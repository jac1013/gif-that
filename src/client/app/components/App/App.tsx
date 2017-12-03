import * as React from 'react'
import {CounterContainer} from '../../scenes/Counter/CounterContainer';
import { Switch, Route } from 'react-router-dom'
import {Home} from '../Home/Home';

export const App = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/counter' component={CounterContainer}/>
    </Switch>
  </main>
);
