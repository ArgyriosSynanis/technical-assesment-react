import * as React from 'react';
import { Box, Toolbar, Typography, Button, AppBar } from '@material-ui/core';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Navigation
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
