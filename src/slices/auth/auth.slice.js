import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from '../../services/auth.service';

const user = JSON.parse(localStorage.getItem("token"));
let error = null
let logInLoading = false
let regLoading = false
let registered = false



export const register = createAsyncThunk(
  "auth/register",
  async ({ user, email, password }) => {
    try {
      const response = await AuthService.register(user, password, email);
      return response.data
    } catch (error) {
      throw error
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const data = await AuthService.login(email, password);
      return { user: data, email: email};
    } catch (err) {
       throw error
    }
  }
);

export const logout = createAsyncThunk("auth/logout", () => {
    AuthService.logout();
});

const initialState = user
  ? { isLoggedIn: true, user, logInLoading, regLoading, registered }
  : { isLoggedIn: false, user: null, error, logInLoading, regLoading, registered }

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: (state) => {
      state.regLoading = false
    },
    [register.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.registered = action.payload
      state.regLoading = false
    },
    [register.rejected]: (state,action) => {
      state.isLoggedIn = false;
      state.error = action.error.message
      state.regLoading = false
    },
    [login.pending]: (state) => {
      state.logInLoading = true
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.logInLoading = false
      state.user = action.payload.user;
      state.email = action.payload.email
    },
    [login.rejected]: (state, action) => {
      state.logInLoading = false
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.error.message
    },
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;