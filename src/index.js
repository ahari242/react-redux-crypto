import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';

import HeaderBar from './components/header_bar';

import CryptoList from './containers/crypto_list';
import CryptoShow from './containers/crypto_show';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <div>

    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <div>
          <HeaderBar/>
          
          <Switch>
            <Route path="/crypto/:id" component={CryptoShow} />
            <Route path="/:page?" component={CryptoList}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  </div>
  , document.querySelector('.react-container'));
