import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {App} from './components/App/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {counters} from './services/counter';

const store = createStore(counters);
import {BrowserRouter} from 'react-router-dom';

const hotModule: any = module as any;

function render() {
  ReactDOM.render(
    <AppContainer>
      <BrowserRouter>
        <Provider store={store}>
          <App/>
        </Provider></BrowserRouter>
    </AppContainer>
    , document.getElementById('app')
  );
}

render();

if (hotModule.hot) {
  hotModule.hot.accept();
}
