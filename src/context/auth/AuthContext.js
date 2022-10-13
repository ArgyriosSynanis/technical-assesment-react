import { createContext } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setLogin: (boolean) => boolean,
  onLogin: (username, password) => {},
  onLogout: () => {},
});

export default AuthContext;
