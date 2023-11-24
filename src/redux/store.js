import { configureStore } from '@reduxjs/toolkit';

import { phonebookReducer } from './usersSlice';

export const store = configureStore({
  reducer: phonebookReducer,
});
