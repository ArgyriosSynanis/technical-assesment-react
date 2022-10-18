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

export default function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Box>
      <Navigation />
      <Container component="main" maxWidth="md">
        <Switch>
          {!authCtx.isLoggedIn && (
            <Route path="/" exact>
              <Welcome />
            </Route>
          )}
          {!authCtx.isLoggedIn && (
            <Route path="*">
              <Redirect to="/" />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/assessment" exact>
              <Assessment />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/summary" exact>
              <Summary />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="/submitted" exact>
              <Submitted />
            </Route>
          )}
          {authCtx.isLoggedIn && (
            <Route path="*">
              <NotFound />
            </Route>
          )}
        </Switch>
      </Container>
    </Box>
  );
}
