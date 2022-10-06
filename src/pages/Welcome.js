import * as React from 'react';
import { useState } from 'react';
import { Typography, TextField, Button, Box } from '@material-ui/core';

const Welcome = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  return (
    <Box>
      <Typography variant="h1">Welcome</Typography>
      <Typography variant="body1">
        Please enter your login and password
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Button type="submit" fullWidth variant="outlined" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
