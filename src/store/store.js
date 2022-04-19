import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profile';

export default configureStore( {
  reducer: {
      profile: profileReducer
  },
} );