import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, loginCredintials, signupFormData } from "@src/lib/types";
import { deleteAccessToken, deleteTokenCookie, getAccessToken, resetAdminCookie, resetAuthCookie, saveAccessToken, setAdminCookie, setAuthCookie, setTokenCookie } from "@src/lib/utils";
import axios from "axios";
import { redirect } from "next/navigation";

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
  reducers: {},
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
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.loading = "rejected";
        state.error = "Wrong email or password.";
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
      .addCase(setUser.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(setUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = "fulfilled";
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(setUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during get user.";
      });
  },
});

export default authSlice.reducer;

export const login = createAsyncThunk("auth/login", async (credentials: loginCredintials) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/auth/login", credentials);
    const token = response.data.token as string;
    const user = response.data.user as User;
    saveAccessToken(token);
    setTokenCookie(token);
    setAuthCookie();
    if (user.isAdmin) setAdminCookie();
    return { user: user, token: token };
  } catch (error) {
    throw error;
  }
});

export const signup = createAsyncThunk("auth/signup", async (formData: signupFormData) => {
  try {
    const response = await axios.post("http://127.0.0.1:8000/api/auth/register", formData);
    const token = response.data.token as string;
    saveAccessToken(token);
    setTokenCookie(token);
    setAuthCookie();
    return { user: response.data.user as User, token: token };
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await axios.get("http://127.0.0.1:8000/api/auth/logout", {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });
    deleteAccessToken();
    resetAuthCookie();
    resetAdminCookie();
    deleteTokenCookie();
  } catch (error) {
    throw error;
  }
});

export const setUser = createAsyncThunk("auth/setuser", async (token: string) => {
  try {
    const response = await axios.get("http://127.0.0.1:8000/api/auth/user-data", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const user = response.data.data as User;

    setAuthCookie();
    if (user.isAdmin) setAdminCookie();

    return { user: user, token: token };
  } catch (error) {
    throw error;
  }
});
