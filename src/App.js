import React from 'react';
import Welcome from './pages/Welcome';
import Assessment from './pages/Assessment';
import Navigation from './components/Navigation';

import { Container, Box } from '@material-ui/core/';

export default function App() {
  return (
    <Box>
      <Navigation />
      <Container component="main" maxWidth="md">
        <Welcome />
        <Assessment />
      </Container>
    </Box>
  );
}
