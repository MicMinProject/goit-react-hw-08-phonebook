import { createReducer } from '@reduxjs/toolkit';
import { addItem, deleteItem, setFilter } from './actions';

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const contactsReducer = createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(addItem, (state, action) =>{
      state.contacts.items = [...state.contacts.items, action.payload]
    })
    .addCase(deleteItem, (state, action) =>{
      state.contacts.items = state.contacts.items.filter(
        (contact) => action.payload !== contact.id
      )
    })
    .addCase(setFilter, (state, action) =>{
      state.contacts.filter = action.payload
    })
    .addDefaultCase((state, action) => {})
})

export { contactsReducer, INITIAL_STATE };

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

