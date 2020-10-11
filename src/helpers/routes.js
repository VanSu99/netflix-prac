import React from 'react';
import { Redirect, Route } from 'react-router-dom';

// React Route Auth
export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        if(!user) {
          return children;
        }
        if(user) {
          return (
            <Redirect 
              to={{
                pathname: loggedInPath
              }}
            />
          )
        }

        return null;
      }}
    />
  )
}

// đăng nhập rồi thì mới được vào trong
export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Route 
      {...rest}
      render={({ location }) => {
        if(user) {
          return children;
        }

        if(!user) {
          return (
            <Redirect 
              to={{
                pathname: 'signin',
                state: { from: location }
              }}
            />
          )
        }

        return null;
      }}
    />
  )
}