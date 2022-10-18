import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { loginMock } from '../api';
import {
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@material-ui/core';
import { useSnackbar } from 'notistack';
import AuthContext from '../context/auth/AuthContext';

export default function Welcome() {
  const [enterUsername, setEnterUsername] = useState('');
  const [enterPassword, setEnterPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const loginToken = async ({ username, password }) => {
    setIsLoading(true);
    try {
      const result = await loginMock(enterUsername, enterPassword);
      if (result) {
        authCtx.setLogin(true);
        authCtx.setToken(result.token);
        enqueueSnackbar('Successfully logged in', {
          variant: 'success',
        });
        history.push('/assessment', {
          ...result,
        });
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      enqueueSnackbar('Something went wrong', {
        variant: 'error',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (enterUsername.length === 0 || enterPassword.length === 0) {
      return enqueueSnackbar('Please type in your details', {
        variant: 'error',
      });
    }

    loginToken(enterUsername, enterPassword);
  };

  return (
    <Box>
      <Typography variant="h2">Welcome</Typography>
      <Typography variant="body1">
        Please enter your login and password
      </Typography>

      <Box component="form" onSubmit={handleSubmit} noValidate>
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
          {!isLoading ? 'Login' : <CircularProgress />}
        </Button>
      </Box>
    </Box>
  );
}
