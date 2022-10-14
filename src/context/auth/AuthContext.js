import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setLogin: (boolean) => boolean,
});

export default AuthContext;
