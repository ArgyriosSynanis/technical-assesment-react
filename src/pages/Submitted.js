import React from 'react';
import { Typography, Box } from '@material-ui/core';

const Submitted = () => {
  return (
    <Box>
      <Typography variant="h2">Widthdrawl request submitted</Typography>
      <Typography variant="body1">
        You have Successfully Submitted your request for a new pension
        withdrawal and may close the browser or log out in the top right.
      </Typography>
    </Box>
  );
};

export default Submitted;
