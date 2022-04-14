import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/App';
import SingIn from './app/sign-in/SignIn';

import AccountBase from './app/account-base/AccountBase';
import AccountError from './app/account-error/AccountError';
import Home from './app/home/Home';

import Settings from './app/settings/Settings';
import SettingsIndex from './app/settings-index/SettingsIndex';

import Add from './app/add/Add';
import AddIndex from './app/add-index/AddIndex';

import History from './app/history/History';
import HistoryIndex from './app/history-index/HistoryIndex';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={ <App /> } />
        <Route path='sign-in' element={ <SingIn /> } />
        <Route path='account' element={ <AccountBase /> }>
          <Route path='home' element={ <Home /> } />
          <Route path='add' element={ <Add /> }>
            <Route index element={ <AddIndex /> } />
          </Route>
          <Route path='history' element={ <History /> }>
            <Route index element={ <HistoryIndex /> } />
          </Route>
          <Route path='settings' element={ <Settings /> }>
            <Route index element={ <SettingsIndex /> } />
          </Route>
          <Route path='*' element={ <AccountError /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
