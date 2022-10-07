import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Assessment from './pages/Assessment';
import Summary from './pages/Summary';
import Navigation from './components/Navigation';

import { Container, Box } from '@material-ui/core/';

export default function App() {
  return (
    <Box>
      <Navigation />
      <Container component="main" maxWidth="md">
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/assessment" exact>
            <Assessment />
          </Route>
          <Route path="/summary" exact>
            <Summary />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </Box>
  );
}
