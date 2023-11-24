import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.contacts = [...state?.contacts, action.payload];
    },
    deleteUser: (state, action) => {
      state.contacts = [
        ...state.contacts.filter(user => user.id !== action.payload),
      ];
    },
    addFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
    addUsersFromLocalStorage: (state, action) => {
      state.contacts = action.payload;
    },
  },
});

export const { addUser, addUsersFromLocalStorage, deleteUser, addFilter } =
  phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
