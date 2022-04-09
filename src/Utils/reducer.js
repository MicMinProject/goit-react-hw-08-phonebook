import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./fetchAPI";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const fetchAsync = createAsyncThunk("contacts/fetchContacts", async () => {
  const response = await fetchContacts();
  return response;
});

const addAsync = createAsyncThunk("contacts/addContact", async (contacts) => {
  const response = await addContact(contacts);
  return response;
});

const deleteAsync = createAsyncThunk("contacts/deleteContact", async (id) => {
  await deleteContact(id);
  const response = await fetchContacts();
  return response;
});

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync, (state, action) => {
        state.contacts.items = action;
      })
      .addCase(addAsync, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(deleteAsync, (state, action) => {
        state.contacts.items = state.contacts.items.filter(
          (item) => item.id !== action.payload,
        );
      });
  },
});

export { INITIAL_STATE, fetchAsync, addAsync, deleteAsync };
export const { setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;

// const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {

//     case "ADD_ITEM":
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, action.payload],
//         },
//       };

//     case "DELETE_ITEM":
//       const filtered = state.contacts.items.filter(
//         (contact) => action.payload.id !== contact.id,
//       );
//       return { ...state, contacts: { ...state.contacts, items: filtered } };

//     case "SET_FILTER":
//       const filter = action.payload.filter;
//       return { ...state, contacts: { ...state.contacts, filter: filter } };

//     default:
//       return state;
//   }
// };
