import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import Assessment from './pages/Assessment';
import Summary from './pages/Summary';
import Navigation from './components/Navigation';
import { Container, Box } from '@material-ui/core/';
// import AuthContext from './context/auth/AuthContext';

export default function App() {
  // const ctx = useContext(AuthContext);

  return (
    <Box>
      <Navigation />
      <Container component="main" maxWidth="md">
        <Switch>
          {/* {!ctx.isLoggedIn && ( */}
          <Route path="/" exact>
            <Welcome />
          </Route>
          {/* )}
          {!ctx.isLoggedIn && ( */}
          {/* <Route path="*">
            <Redirect to="/" />
          </Route> */}
          {/* )}
          {ctx.isLoggedIn && ( */}
          <Route path="/assessment" exact>
            <Assessment />
          </Route>
          {/* )}
          {ctx.isLoggedIn && ( */}
          <Route path="/summary" exact>
            <Summary />
          </Route>
          {/* )}
          {ctx.isLoggedIn && ( */}
          <Route path="*">
            <NotFound />
          </Route>
          {/* )} */}
        </Switch>
      </Container>
    </Box>
  );
}
