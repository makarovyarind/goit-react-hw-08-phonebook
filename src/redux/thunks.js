import { createAsyncThunk } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from '../api/api';
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContactsThunk = createAsyncThunk(
  'contacts/getAllContacts',
  () => {
    return getContacts();
  }
);

export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact) => {
  const response = await addContact(contact);
  if (response.status === 201) {
    return response.data;
  } else {
    throw new Error('Failed to add contact');
  }
});

export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (contactId) => {
  const response = await deleteContact(contactId);
  if (response.status === 200) {
    return contactId;
  } else {
    throw new Error('Failed to delete contact');
  }
});

export const registerUserThunk = createAsyncThunk('users/register', async credentials => {
  try {
    const {data} = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
      } catch (error) {
    }
});

export const loginUserThunk = createAsyncThunk('users/login', async credentials => {
  try {
    const {data} = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
      } catch (error) {
    }
});

export const logOutThunk = createAsyncThunk('user/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unset();  
  } catch (error) {
  }
});

export const takeCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const currentToken = state.auth.token;
  if(currentToken === null) {
    return thunkAPI.rejectWithValue();
  }
  
  token.set(currentToken)
  try {
    const { data } = await axios.get('/users/current');
    return data;
  } catch (error) {
    
  }
})