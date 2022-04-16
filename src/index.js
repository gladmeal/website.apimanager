import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './app/App';
import DocsBase from './app/docs-base/DocsBase';
import SingIn from './app/sign-in/SignIn';

import AccountBase from './app/account-base/AccountBase';
import AccountError from './app/account-error/AccountError';
import Home from './app/home/Home';

import Settings from './app/settings/Settings';
import SettingsIndex from './app/settings-index/SettingsIndex';
import SettingsAddAdmin from './app/settings-add-admin/SettingsAddAdmin';
import SettingsToken from './app/settings-token/SettingsToken';
import SettingsUser from './app/settings-user/SettingsUser';
import SettingsMe from './app/settings-me/SettingsMe';
import SettingsTokenData from './app/settings-token-data/SettingsTokenData';

import Add from './app/add/Add';
import AddIndex from './app/add-index/AddIndex';
import AddFood from './app/add-food/AddFood';
import AddFoodStuff from './app/add-foodstuff/AddFoodStuff';
import AddPlate from './app/add-plate/AddPlate';
import AddToken from './app/add-token/AddToken';

import History from './app/history/History';
import HistoryIndex from './app/history-index/HistoryIndex';
import HistoryTransaction from './app/history-transaction/HistoryTransaction';
import HistoryFood from './app/history-food/HistoryFood';
import HistoryFoodStuff from './app/history-foodstuff/HistoryFoodStuff';
import HistoryPlate from './app/history-plate/HistoryPlate';

import Update from './app/update/Update';
import UpdateIndex from './app/update-index/UpdateIndex';
import UpdatePlate from './app/update-plate/UpdatePlate';
import UpdateFood from './app/update-food/UpdateFood';
import UpdateFoodStuff from './app/update-foodstuff/UpdateFoodStuff';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={ <App /> } />
        <Route path='sign-in' element={ <SingIn /> } />
        <Route path='docs' element={ <DocsBase /> } />
        <Route path='account' element={ <AccountBase /> }>
          <Route index element={ <Home /> } />
          <Route path='home' element={ <Home /> } />
          <Route path='add' element={ <Add /> }>
            <Route index element={ <AddIndex /> } />
            <Route path='food' element={ <AddFood /> } />
            <Route path='foodstuff' element={ <AddFoodStuff /> } />
            <Route path='plate' element={ <AddPlate /> } />
            <Route path='token' element={ <AddToken /> } />
          </Route>
          <Route path='history' element={ <History /> }>
            <Route index element={ <HistoryIndex /> } />
            <Route path='transaction' element={ <HistoryTransaction /> } />
            <Route path='food' element={ <HistoryFood /> } />
            <Route path='foodstuff' element={ <HistoryFoodStuff /> } />
            <Route path='plate' element={ <HistoryPlate /> } />
          </Route>
          <Route path='settings' element={ <Settings /> }>
            <Route index element={ <SettingsIndex /> } />
            <Route path='add-user' element={ <SettingsAddAdmin /> } />
            <Route path='token' element={ <SettingsToken /> } />
            <Route path='token-data' element={ <SettingsTokenData /> } />
            <Route path='user' element={ <SettingsUser /> } />
            <Route path='me' element={ <SettingsMe /> } />
          </Route>
          <Route path='update' element={ <Update /> }>
            <Route index element={ <UpdateIndex /> } />
            <Route path="plate" element={ <UpdatePlate /> } />
            <Route path="food" element={ <UpdateFood /> } />
            <Route path="foodstuff" element={ <UpdateFoodStuff /> } />
          </Route>
          <Route path='*' element={ <AccountError /> } />
        </Route>
        <Route path='*' element={ <AccountError /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById( 'root' )
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
