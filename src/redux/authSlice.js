import { createSlice } from '@reduxjs/toolkit';
import { registerUserThunk, loginUserThunk, logOutThunk, takeCurrentUser } from './thunks';

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: '',
    isLoggedIn: false,
  };

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
      builder
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
    })
    .addCase(loginUserThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(loginUserThunk.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    })
    .addCase(loginUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
  })
  .addCase(logOutThunk.pending, (state) => {
    state.isLoading = true;
    state.error = null;
  })
  .addCase(logOutThunk.fulfilled, (state) => {
    state.user = null;
    state.token = null;
    state.isLoggedIn = false;
    state.isLoading = false;
    state.error = null;
  })
  .addCase(logOutThunk.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error.message;
  })
  .addCase(takeCurrentUser.fulfilled, (state, action) => {
    state.user = { ...action.payload};
    state.isLoggedIn = true;
    state.error = null;
  })  
    }
  });

  export const authSliceReduser = authSlice.reducer;