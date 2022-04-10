import{ createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://6250baabe3e5d24b34264548.mockapi.io/contacts';

export const fetchAsync = createAsyncThunk("contacts/fetchContacts", async () => {
  const response = await axios.get(BASE_URL)
    .then(response => {return response})
    .catch(error => console.log(error))
  return response.data;
});

export const addAsync = createAsyncThunk("contacts/addContact", async (contact) => {
  const response = await axios.post(BASE_URL, contact)
  .then(response => {return response})
  .catch(error => console.log(error))
  return response.data;
});

export const deleteAsync = createAsyncThunk("contacts/deleteContact", async (id) => {
  await axios.delete(`${BASE_URL}/${id}`)
  const response = await axios.get(BASE_URL)
    .then(response => {return response})
    .catch(error => console.log(error))
  return response.data;
});