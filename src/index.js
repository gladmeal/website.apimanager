import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/App';
import SingIn from './app/sign-in/SignIn';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={ <App /> } />
        <Route path='/sign-in' element={ <SingIn /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
