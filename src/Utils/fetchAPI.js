import{ createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Notify } from 'notiflix';

const BASE_URL = 'https://connections-api.herokuapp.com';

// CONTACTS

export const fetchAsync = createAsyncThunk("contacts/fetchContacts", async (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  const response = await axios.get(`${BASE_URL}/contacts`)
    .then(response => {return response})
    .catch(error => Notify.failure(`${error.message}`))
  return response.data;
});

export const addAsync = createAsyncThunk("contacts/addContact", async ({token, contact}) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  const response = await axios.post(`${BASE_URL}/contacts`,{name: contact.name, number: contact.number})
  .then(response => {return response})
  .catch(error => Notify.failure(`${error.message}`))
  return response.data;
});

export const deleteAsync = createAsyncThunk("contacts/deleteContact", async ({token, id}) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  await axios.delete(`${BASE_URL}/contacts/${id}`)
});

// USERS

export const signupAsync = createAsyncThunk('users/signup', async (user) => {
  const response = await axios.post(`${BASE_URL}/users/signup`, user)
    .then(response => {return response})
    .catch(error => Notify.failure(`${error.message}`))
  return response.data;
})

export const loginAsync = createAsyncThunk('users/login', async (user) => {
  const response = await axios.post(`${BASE_URL}/users/login`, user)
    .then(response => {return response})
    .catch(error => Notify.failure(`${error.message}`))
  return response.data;
})

export const logoutAsync = createAsyncThunk('users/logout', async (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
  const response = await axios.post(`${BASE_URL}/users/logout`)
    .then(response => {return response})
    .catch(error => Notify.failure(`${error.message}`))
  return response.data
})