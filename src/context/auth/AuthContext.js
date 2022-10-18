import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setLogin: (boolean) => boolean,
  authToken: '',
  setToken: (string) => string,
});

export default AuthContext;
