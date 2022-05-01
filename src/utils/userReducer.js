import { createSlice } from "@reduxjs/toolkit";
import { signupAsync, loginAsync, logoutAsync } from "./fetchAPI";

const USERS_INITIAL_STATE = {
  user: {},
  token: null,
  loading: false
}

const userSlice = createSlice({
  name: 'users',
  initialState: USERS_INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(signupAsync.fulfilled, (state, action) =>{
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupAsync.rejected, (state) =>{
        state.loading = false;
      })
      .addCase(signupAsync.pending, (state) => {
        state.loading = true;
        
      })
      .addCase(loginAsync.fulfilled, (state, action) =>{
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginAsync.rejected, (state) => {
        state.loading = false
      })
      .addCase(loginAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(logoutAsync.fulfilled, (state) =>{
        state.token = null;
      })
      .addCase(logoutAsync.rejected, (state) =>{
        state.token = null;
      })
  }

})

export default userSlice.reducer