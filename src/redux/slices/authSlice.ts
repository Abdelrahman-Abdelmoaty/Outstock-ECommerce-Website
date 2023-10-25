import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, loginCredintials, signupFormData } from "@src/lib/types";
import { deleteAccessToken, getAccessToken, saveAccessToken } from "@src/lib/utils";
import axios from "axios";
import { redirect } from "next/navigation";
import { setUser } from "./userSlice";

interface authState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: authState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginApi: (_state, action: PayloadAction<{ token: string }>) => {
      return { isAuthenticated: true, user: null, token: action.payload.token, loading: "fulfilled", error: null };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = "fulfilled";
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during login.";
      })
      .addCase(logout.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during logout.";
      })
      .addCase(signup.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = "fulfilled";
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during signup.";
      })
      .addCase(getUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = "fulfilled";
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during get user.";
      });
  },
});

export default authSlice.reducer;
export const { loginApi } = authSlice.actions;

export const login = createAsyncThunk("auth/login", async (credentials: loginCredintials) => {
  try {
    const loginResponse = await axios.post("http://127.0.0.1:8000/api/auth/login", credentials);
    const token = loginResponse.data.token as string;
    saveAccessToken(token);
    const userResponse = await axios.get("http://127.0.0.1:8000/api/auth/user-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { user: userResponse.data.data as User, token: token };
  } catch (error) {
    throw error;
  }
});

export const signup = createAsyncThunk("auth/signup", async (formData: signupFormData) => {
  try {
    const signupResponse = await axios.post("http://127.0.0.1:8000/api/auth/register", formData);
    const token = signupResponse.data.token as string;
    saveAccessToken(token);
    const userResponse = await axios.get("http://127.0.0.1:8000/api/auth/user-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { user: userResponse.data.user as User, token: token };
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.post("http://127.0.0.1:8000/api/auth/logout");
  } catch (error) {
    throw error;
  }
});

export const getUser = createAsyncThunk("auth/getUser", async () => {
  try {
    const token = getAccessToken();
    const response = await axios.get("http://127.0.0.1:8000/api/auth/user-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { user: response.data.data as User, token: token };
  } catch (error) {
    throw error;
  }
});
