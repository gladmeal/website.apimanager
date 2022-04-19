import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers( {
  profile: profileReducer
} );

const persistConfig = {
  key: 'root',
  storage,
};

const store = configureStore( {
  reducer: persistReducer( persistConfig, reducers ),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [ thunk ],
});

export default store;