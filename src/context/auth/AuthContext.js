import { createContext } from 'react';

const AuthContext = createContext({
  auth: { isLoggedIn: false, authToken: null },
  setLogin: (isLoggedIn, authToken) => {},
});

export default AuthContext;
