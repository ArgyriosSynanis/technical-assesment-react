import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginMock } from '../api';
import { Typography, TextField, Button, Box } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import AuthContext from '../context/auth/AuthContext';

export default function Welcome() {
  const [enterUsername, setEnterUsername] = useState('');
  const [enterPassword, setEnterPassword] = useState('');
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (enterUsername.length === 0 || enterPassword.length === 0) {
      return enqueueSnackbar('Please type in your details', {
        variant: 'error',
      });
    }
    authCtx.setLogin(true);
    loginMock(enterUsername, enterPassword);

    enqueueSnackbar('Successfully logged in', {
      variant: 'success',
    });
    history.push('/assessment');
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
          onChange={(e) => setEnterUsername(e.target.value)}
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
          onChange={(e) => setEnterPassword(e.target.value)}
        />
        <Button type="submit" fullWidth variant="outlined" size="large">
          Login
        </Button>
      </Box>
    </Box>
  );
}
