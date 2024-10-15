// store.ts

import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { AppState } from './types';

export const store = createStore(rootReducer);

// Thêm kiểu cho store
export type RootState = ReturnType<typeof rootReducer>;
