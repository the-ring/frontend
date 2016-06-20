'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route } from 'react-router';
import { ReduxRouter } from 'redux-router';
import { Dashboard, Signin, Signup, NotFound, Connect } from 'the-ring-main-react-components';
import configureStore from 'the-ring-main-react-components/src/_store';
import { post } from 'the-ring-main-react-components/src/_actions';

const store = configureStore();

function requireAuth(nextState, replace) {
  const isLoggedIn = window.localStorage.getItem('user.id') &&
    window.localStorage.getItem('user.authToken');
  if (!isLoggedIn) {
    replace('/login');
  }
}

function signout(nextState, replace) {
  post('auth/logout');
  store.dispatch({ type: 'LOGOUT' });
  window.localStorage.clear();
  replace('/login');
}

render(
  <Provider store={store}>
    <ReduxRouter>
      <Route path="/connect" component={Connect} onEnter={requireAuth} />
      <Redirect from="/signin" to="/login" />
      <Route path="/login" component={Signin} />
      <Redirect from="/signup" to="/register" />
      <Route path="/register" component={Signup} />
      <Redirect from="/signout" to="/logout" />
      <Route path="/logout" onEnter={signout} />
      <Redirect from="/" to="/weekly" />
      <Route path="/:period" component={Dashboard} onEnter={requireAuth} />
      <Route path="/:period/:id" component={Dashboard} onEnter={requireAuth} />
      <Route path="/:period/:id/reports" component={Dashboard} onEnter={requireAuth} />
      <Route path="/:period/:id/reports/:report" component={Dashboard} onEnter={requireAuth} />
      <Route path="*" component={NotFound} />
    </ReduxRouter>
  </Provider>,
  document.getElementById('root')
);
