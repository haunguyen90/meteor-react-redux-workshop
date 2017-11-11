// Import needed components

// Set up all routes in the app
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';

import configureStore from '../../ui/store/configureStore';

import { MainLayout, Dashboard } from '../../ui/components';

export const history = createHistory();
export const store = configureStore();

const Routes = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <MainLayout>
          <Switch>
            <Route path="/" exact component={Dashboard} />
          </Switch>
        </MainLayout>
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
