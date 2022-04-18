import { createSlice, current } from "@reduxjs/toolkit";
import { fetchAsync, addAsync, deleteAsync } from "./fetchAPI";

const CONTACTS_INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: CONTACTS_INITIAL_STATE,
  reducers: {
    setFilter: (state, action) => {
      state.contacts.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.fulfilled, (state, action) => {
        // console.log(current(state));
        state.contacts.items = action.payload;
      })
      .addCase(addAsync.fulfilled, (state, action) => {
        state.contacts.items = [...state.contacts.items, action.payload];
      })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.contacts.items.filter(contact => contact.id !== action.payload)
      });
  },
});



export { fetchAsync, addAsync, deleteAsync };
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
