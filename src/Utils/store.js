import contactsReducer from "./contactsReducer";
import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './userReducer';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import localStorage from "redux-persist/lib/storage";

const reducers = combineReducers({
  contacts: contactsReducer,
  users: usersReducer
});

const persistConfig = ({
  key: "root",
  storage: localStorage,
  blacklist: ["users.loading"],
  rootReducer: reducers,
})

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});