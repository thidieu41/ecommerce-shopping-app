// productReducer.ts

import { ProductState, ProductActionTypes, ADD_PRODUCT } from './types';

const initialState: ProductState = {
  products: [],
};

export const productReducer = (state = initialState, action: ProductActionTypes): ProductState => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return state;
  }
};
