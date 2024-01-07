import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Cart, LocalStorage, Product, User, SignUpFormData } from "@src/lib/types";
import { deleteUserToken, getUserToken, saveUserToken, getProductsFromLocalStorageUtil, removeProductFromLocalStorageUtil, addProductToCartLocalStorageUtil } from "@src/lib/utils";
import { HOST } from "@src/lib/validations";
import axios from "axios";
import { useAppDispatch } from "../store";

interface RootState {
  isAuthenticated: boolean;
  user: User | null;
  localStorage: LocalStorage;
  token: string | null;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: RootState = {
  isAuthenticated: false,
  localStorage: {
    products: [],
  },
  user: null,
  token: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addProductToLocalStorage: (state, action: PayloadAction<{ id: number; count: number }>) => {
      addProductToCartLocalStorageUtil(action.payload.id, action.payload.count);
      return { ...state, localStorage: { ...state.localStorage, products: [...state.localStorage?.products.filter((product) => product.id !== action.payload.id), { id: action.payload.id, count: action.payload.count }] } };
    },
    getProductsFromLocalStorage: (state) => {
      return { ...state, localStorage: { ...localStorage, products: getProductsFromLocalStorageUtil() } };
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
        state.error = null;
      })
      .addCase(login.rejected, (state) => {
        state.loading = "rejected";
        state.error = "Wrong email or password.";
      })
      .addCase(signup.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(signup.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = "fulfilled";
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred during signup.";
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
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addToCart.fulfilled, (state, action: PayloadAction<{ id: number; count: number }>) => {
        state.loading = "fulfilled";
        state.user && (state.user.cart.products = [...state.user.cart.products.filter((product) => product.id !== action.payload.id), { id: action.payload.id, count: action.payload.count }]);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred while fetching products.";
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(removeFromCart.fulfilled, (state, action: PayloadAction<{ id: number }>) => {
        state.loading = "fulfilled";
        state.localStorage.products = state.localStorage.products.filter((product) => product.id !== action.payload.id);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred while fetching products.";
      })
      .addCase(mergeCarts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(mergeCarts.fulfilled, (state, action: PayloadAction<{ cart: Cart }>) => {
        state.loading = "fulfilled";
        state.localStorage.products = action.payload.cart.products;
        state.user && (state.user.cart = action.payload.cart);
      })
      .addCase(mergeCarts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred while fetching products.";
      })
      .addCase(googleLogin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(googleLogin.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = "fulfilled";
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred while fetching products.";
      })
      .addCase(facebookLogin.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(facebookLogin.fulfilled, (state, action: PayloadAction<{ token: string; user: User }>) => {
        state.loading = "fulfilled";
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(facebookLogin.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "An error occurred while fetching products.";
      });
  },
});
export const { addProductToLocalStorage, getProductsFromLocalStorage } = authSlice.actions;
export default authSlice.reducer;

export const login = createAsyncThunk("auth/login", async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axios.post(`${HOST}api/auth/login`, { email, password });
    const token = response.data.token as string;
    const user = response.data.user as User;
    saveUserToken(token);
    return { user, token };
  } catch (error) {
    throw error;
  }
});

export const signup = createAsyncThunk("auth/signup", async (formData: SignUpFormData) => {
  try {
    const response = await axios.post(`${HOST}api/auth/register`, formData);
    const token = response.data.token as string;
    saveUserToken(token);
    return { user: response.data.user as User, token: token };
  } catch (error) {
    throw error;
  }
});

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const response = await axios.get(`${HOST}api/auth/logout`, {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    });
    deleteUserToken();
  } catch (error) {
    throw error;
  }
});

export const setUser = createAsyncThunk("auth/setuser", async () => {
  try {
    const userToken = getUserToken();
    const response = await axios.get(`${HOST}api/auth/user-data`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    const user = response.data.data as User;
    return { user: user, token: userToken };
  } catch (error) {
    throw error;
  }
});

export const addToCart = createAsyncThunk("auth/addToCart", async ({ id, count }: { id: number; count: number }) => {
  try {
    const userToken = getUserToken();
    const postResponse = await axios.post(
      `${HOST}api/carts/add-to-cart`,
      {
        products: [{ id, count }],
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return { id, count };
  } catch (error) {
    throw error;
  }
});

export const mergeCarts = createAsyncThunk("auth/mergeCarts", async () => {
  try {
    const userToken = getUserToken();

    if (getProductsFromLocalStorageUtil() === null) {
      const postResponse = await axios.post(
        `${HOST}api/carts/add-to-cart`,
        {
          products: getProductsFromLocalStorageUtil(),
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
    }
    const getResponse = await axios.get(`${HOST}api/carts/my-cart`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return { cart: getResponse.data.data as Cart };
  } catch (error) {
    throw error;
  }
});
export const removeFromCart = createAsyncThunk("auth/removeFromCart", async ({ id }: { id: number }) => {
  try {
    const userToken = getUserToken();
    removeProductFromLocalStorageUtil(id);
    const response = await axios.post(
      `${HOST}api/carts/remove-from-cart`,
      {
        products: [{ id, count: 0 }],
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
    return { id };
  } catch (error) {
    throw error;
  }
});
const getProduct = async (id: number) => {
  try {
    const response = await axios.get(`${HOST}api/products/${id}`);
    const product = (await response.data.data) as Product;
    return product;
  } catch (error) {
    throw error;
  }
};

export const getUserCart = async () => {
  try {
    const userToken = getUserToken();
    const response = await axios.get(`${HOST}api/carts/my-cart`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return { cart: response.data.data as Cart };
  } catch (error) {
    throw error;
  }
};

export const googleLogin = createAsyncThunk("auth/googleLogin", async (authCode: string) => {
  try {
    const response = await axios.post(
      `${HOST}api/auth/google/login/`,
      {},
      {
        params: {
          auth_code: authCode,
        },
      }
    );
    const user = response.data.user as User;
    const userToken = response.data.token as string;
    saveUserToken(userToken);
    return { user: user, token: userToken };
  } catch (error) {
    throw error;
  }
});
export const facebookLogin = createAsyncThunk("auth/facebookLogin", async (authCode: string) => {
  try {
    const response = await axios.post(
      `${HOST}auth/facebook/`,
      {},
      {
        params: {
          auth_code: authCode,
        },
      }
    );
    console.log(response);

    const user = response.data.user as User;
    const userToken = response.data.token as string;
    saveUserToken(userToken);
    return { user: user, token: userToken };
  } catch (error) {
    throw error;
  }
});
