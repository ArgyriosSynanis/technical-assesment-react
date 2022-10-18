import React, { useCallback, useState } from 'react';
import AuthContext from './AuthContext';

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState('');

  const setLogin = useCallback((boolean) => {
    setIsLoggedIn(boolean);
  }, []);

  const setToken = useCallback((string) => {
    setAuthToken(string);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLogin,
        authToken,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
