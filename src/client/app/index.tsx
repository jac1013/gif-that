import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {App} from './components/App/App';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {counters} from './services/counter';

const store = createStore(counters);

const hotModule: any = module as any;

function render() {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App/>
      </Provider>
    </AppContainer>
    , document.getElementById('app')
  );
}

render();

if (hotModule.hot) {
  hotModule.hot.accept();
}
