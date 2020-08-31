import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { isAuthenticated } from './services/auth';

import Login from './pages/Login';
import Home from './pages/Home';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Component {...props} />
    ) : (
        <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
      )
  )} />
)

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ) : (
        <Component {...props} />
      )
  )} />
)

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Home} />
      </Switch>
    </BrowserRouter>
  )
}