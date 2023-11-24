import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65605ffa83aba11d99d0b29b.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts/contacts');
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkApi) => {
    try {
      const response = await axios.delete(`/contacts/contacts/${id}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (user, thunkApi) => {
    try {
      const response = await axios.post(`/contacts/contacts/`, {
        name: user.name,
        phone: user.phone,
      });
      console.log(response.data);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
