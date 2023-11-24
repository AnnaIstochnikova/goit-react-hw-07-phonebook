import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';

const initialState = {
  contacts: [],
  filter: '',
  isLoading: false,
  error: null,
};

const phonebookSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
      state.error = null;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.contacts.push(action.payload);
      state.error = null;
    },
    [addContact.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addFilter } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
