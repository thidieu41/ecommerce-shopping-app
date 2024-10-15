// rootReducer.ts

import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { productReducer } from './productReducer';
import { AppState } from './types';

export const rootReducer = combineReducers({
  users: userReducer,
  products: productReducer,
});
