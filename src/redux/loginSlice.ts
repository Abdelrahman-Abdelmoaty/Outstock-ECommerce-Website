// loginSlice.ts

import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { deleteAccessToken, saveAccessToken } from "@src/lib/utils";
import axios from "axios";

interface LoginState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
}

const initialState: LoginState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: "idle",
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = "fulfilled";
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during login.";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      });
  },
});

export default loginSlice.reducer;

interface Credentials {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk("login/loginUser", async (credentials: Credentials) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/auth/login", credentials);
    saveAccessToken(response.data.token);
    return { user: response.data.user as User, token: response.data.token as string };
  } catch (error) {
    throw error;
  }
});

export const logoutUser = createAsyncThunk("login/logoutUser", async () => {
  try {
    await axios.post("http://127.0.0.1:8000/api/auth/logout");
    deleteAccessToken();
    return { user: null, token: null };
  } catch (error) {
    throw error;
  }
});
