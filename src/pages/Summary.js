import * as React from 'react';
import { useState } from 'react';
import { Typography, Box } from '@material-ui/core';

export default function Summary() {
  return (
    <Box>
      <Typography variant="h1">Your Summary</Typography>
      <Typography variant="body1">
        You have selected an annualy withdrawal of £5000 starting on 25/10/2022.
      </Typography>
    </Box>
  );
}
