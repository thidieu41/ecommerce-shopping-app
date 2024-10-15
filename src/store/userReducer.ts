// userReducer.ts

import { UserState, UserActionTypes, ADD_USER } from './types';

const initialState: UserState = {
  users: [],
};

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
};
