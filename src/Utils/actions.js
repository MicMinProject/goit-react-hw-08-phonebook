// import { nanoid } from "nanoid";
import {createAction} from '@reduxjs/toolkit';

const addItem = createAction('contactsReducer/addItem');
const deleteItem = createAction('contactsReducer/deleteItem');
const setFilter = createAction('contactsReducer/setFilter')

export { addItem, deleteItem, setFilter };

// const addItem = (name, number) => ({
//   type: "ADD_ITEM",
//   payload: {
//     name: name,
//     number: number,
//     id: nanoid(),
//   },
// });

// const deleteItem = (id) => ({
//   type: "DELETE_ITEM",
//   payload: {
//     id: id,
//   },
// });

// const setFilter = (filter) => ({
//   type: "SET_FILTER",
//   payload: {
//     filter: filter,
//   },
// });

