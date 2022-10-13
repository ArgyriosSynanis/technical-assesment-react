import React, { useCallback, useState } from 'react';
import AuthContext from './AuthContext';

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLogin = () => {
    setIsLoggedIn(true);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
  };

  const setLogin = useCallback((boolean) => {
    setIsLoggedIn(boolean);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setLogin,
        onLogin,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
