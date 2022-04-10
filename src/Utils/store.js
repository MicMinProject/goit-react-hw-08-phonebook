import contactsReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contactsReducer,
  }
});