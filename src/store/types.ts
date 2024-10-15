// types.ts

// Người dùng
export interface User {
    id: number;
    name: string;
  }
  
  // Sản phẩm
  export interface Product {
    id: number;
    name: string;
    price: number;
  }
  
  // State của người dùng
  export interface UserState {
    users: User[];
  }
  
  // State của sản phẩm
  export interface ProductState {
    products: Product[];
  }
  
  // Tổng hợp state của ứng dụng
  export interface AppState {
    users: UserState;
    products: ProductState;
  }
  
  // Action types
  export const ADD_USER = 'ADD_USER';
  export const ADD_PRODUCT = 'ADD_PRODUCT';
  
  // Action creators
  interface AddUserAction {
    type: typeof ADD_USER;
    payload: User;
  }
  
  interface AddProductAction {
    type: typeof ADD_PRODUCT;
    payload: Product;
  }
  
  export type UserActionTypes = AddUserAction;
  export type ProductActionTypes = AddProductAction;
  