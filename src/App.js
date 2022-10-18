import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Assessment from './pages/Assessment';
import Summary from './pages/Summary';
import Submitted from './pages/Submitted';
import Navigation from './components/Navigation';
import { Container, Box } from '@material-ui/core/';
import AuthContext from './context/auth/AuthContext';

function PrivateRoute({ children, ...rest }) {
  let authCtx = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authCtx.auth.isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/welcome',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default function App() {
  return (
    <Box>
      <Navigation />
      <Container component="main" maxWidth="md">
        <Switch>
          <Route path="/welcome" exact>
            <Welcome />
          </Route>

          <PrivateRoute path="/assessment">
            <Assessment />
          </PrivateRoute>

          <PrivateRoute path="/summary">
            <Summary />
          </PrivateRoute>

          <PrivateRoute path="/submitted">
            <Submitted />
          </PrivateRoute>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}
