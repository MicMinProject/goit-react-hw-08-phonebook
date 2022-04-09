import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";
import contactsReducer from "./Utils/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// import { persistReducer, persistStore } from 'redux-persist';
// import localStorage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react';

// const persistConfig = {
//   key: 'root',
//   storage: localStorage,
// }

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  reducer: {
    contactsReducer,
  }
});

// const persistedStore = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistedStore}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
