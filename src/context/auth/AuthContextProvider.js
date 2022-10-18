import React, { useCallback, useState } from 'react';
import AuthContext from './AuthContext';

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isLoggedIn: false,
    authToken: null,
  });

  const setLogin = useCallback((isLoggedIn, authToken) => {
    setAuth((prev) => ({ ...prev, isLoggedIn, authToken }));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        setLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
