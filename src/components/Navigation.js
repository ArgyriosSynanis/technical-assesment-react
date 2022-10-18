import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Toolbar, Button, AppBar, Box, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AuthContext from '../context/auth/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  spacer: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  const signOut = () => {
    authCtx.setLogin(false);
    authCtx.setToken('');
    history.push('/welcome');
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {authCtx.isLoggedIn && (
            <>
              <Button onClick={history.goBack}>
                <ArrowBackIcon />
              </Button>
              <Box className={classes.spacer}></Box>
              <Button onClick={signOut}>
                <ExitToAppIcon />
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
