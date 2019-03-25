// @flow
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import routes from '../../core/constants/routing';
import HomeView from '../views/HomeView.react';
import PageNotFoundView from '../views/PageNotFoundView.react';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.HOME_ROUTE} exact component={HomeView} />
        <Route component={PageNotFoundView} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
