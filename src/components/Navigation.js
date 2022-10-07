import * as React from 'react';
import { Box, Toolbar, Typography, Button, AppBar } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function ButtonAppBar() {
  const history = useHistory();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Button onClick={history.goBack} variant="outlined">
            Back
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navigation
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
