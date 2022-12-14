import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import App from './App';
import AuthContextProvider from './context/auth/AuthContextProvider';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <AuthContextProvider>
      <SnackbarProvider autoHideDuration={2000}>
        <App />
      </SnackbarProvider>
    </AuthContextProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
