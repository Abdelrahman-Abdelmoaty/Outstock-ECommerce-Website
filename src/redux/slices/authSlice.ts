import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  Cart,
  LocalStorage,
  User,
  SignUpFormData,
  Product,
} from "@src/utils/types";
import {
  deleteUserToken,
  getUserToken,
  saveUserToken,
  getProductsFromLocalStorageUtil,
  removeProductFromLocalStorageUtil,
  addProductToCartLocalStorageUtil,
} from "@src/utils/lib";
import { HOST_URL } from "@src/utils/URLS";
import axios from "axios";
import { IRootState } from "../store";
import { cookies } from "next/headers";

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
    addProductToLocalStorage: (
      state,
      action: PayloadAction<{ id: number; count: number }>,
    ) => {
      addProductToCartLocalStorageUtil(action.payload.id, action.payload.count);
      return {
        ...state,
        localStorage: {
          ...state.localStorage,
          products: [
            ...state.localStorage?.products.filter(
              (product) => product.id !== action.payload.id,
            ),
            { id: action.payload.id, count: action.payload.count },
          ],
        },
      };
    },
    removeProductFromLocalStorage: (
      state,
      action: PayloadAction<{ id: number }>,
    ) => {
      removeProductFromLocalStorageUtil(action.payload.id);
      return {
        ...state,
        localStorage: {
          ...state.localStorage,
          products: state.localStorage?.products.filter(
            (product) => product.id !== action.payload.id,
          ),
        },
      };
    },
    getProductsFromLocalStorage: (state) => {
      return {
        ...state,
        localStorage: {
          ...localStorage,
          products: getProductsFromLocalStorageUtil(),
        },
      };
    },
    setAuthentication: (
      state,
      action: PayloadAction<{ user: User; token: string }>,
    ) => {
      saveUserToken(action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.pending, (state) => {
        state.loading = "pending";
      })

      .addCase(
        setUser.fulfilled,
        (
          state,
          action: PayloadAction<{ user: User | null; token: string | null }>,
        ) => {
          state.loading = "fulfilled";
          state.isAuthenticated = true;
          state.user = action.payload.user;
          state.token = action.payload.token;
        },
      )
      .addCase(setUser.rejected, (state, action) => {
        state.loading = "rejected";
        state.error =
          action.error.message || "An error occurred during get user.";
      })
      .addCase(addToCart.pending, (state) => {
        state.loading = "pending";
      })
      // .addCase(
      //   addToCart.fulfilled,
      //   (state, action: PayloadAction<{ id: number; count: number }>) => {
      //     state.loading = "fulfilled";
      //     state.user &&
      //       (state.user.cart.products = [
      //         ...state.user.cart.products.filter(
      //           (product) => product.id !== action.payload.id,
      //         ),
      //         { id: action.payload.id, count: action.payload.count },
      //       ]);
      //   },
      // )
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = "rejected";
        state.error =
          action.error.message || "An error occurred while fetching products.";
      })
      .addCase(removeFromCart.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        removeFromCart.fulfilled,
        (state, action: PayloadAction<{ id: number }>) => {
          state.loading = "fulfilled";
          state.localStorage.products = state.localStorage.products.filter(
            (product) => product.id !== action.payload.id,
          );
        },
      )
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = "rejected";
        state.error =
          action.error.message || "An error occurred while fetching products.";
      })
      .addCase(mergeCarts.pending, (state) => {
        state.loading = "pending";
      })
      // .addCase(
      //   mergeCarts.fulfilled,
      //   (state, action: PayloadAction<{ cart: Cart }>) => {
      //     state.loading = "fulfilled";
      //     state.localStorage.products = action.payload.cart.products;
      //     state.user && (state.user.cart = action.payload.cart);
      //   },
      // )
      .addCase(mergeCarts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error =
          action.error.message || "An error occurred while fetching products.";
      });
  },
});
export const {
  addProductToLocalStorage,
  getProductsFromLocalStorage,
  removeProductFromLocalStorage,
  setAuthentication,
} = authSlice.actions;
export default authSlice.reducer;

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    deleteUserToken();
  } catch (error) {
    throw error;
  }
});

export const setUser = createAsyncThunk("auth/setuser", async () => {
  try {
    // const userToken = windcookies().get("currentUser")?.value;
    const userToken = "s";
    if (!userToken) return { user: null, token: null };
    const response = await axios.get(`${HOST_URL}api/auth/user-data`, {
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
export const addToCart = createAsyncThunk(
  "auth/addToCart",
  async ({ id, count }: { id: number; count: number }) => {
    try {
      const userToken = getUserToken();
      const postResponse = await axios.post(
        `${HOST_URL}api/carts/add-to-cart`,
        {
          products: [{ id, count }],
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      return { id, count };
    } catch (error) {
      throw error;
    }
  },
);

export const mergeCarts = createAsyncThunk(
  "auth/mergeCarts",
  async (_, { getState }) => {
    try {
      const userToken = getUserToken();
      const localStorageProducts = (getState() as IRootState).auth.localStorage
        .products;

      if (localStorageProducts.length > 0) {
        const postResponse = await axios.post(
          `${HOST_URL}api/carts/add-to-cart`,
          {
            products: localStorageProducts,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          },
        );
      }

      const getResponse = await axios.get(`${HOST_URL}api/carts/my-cart`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      return { cart: getResponse.data.data as Cart };
    } catch (error) {
      throw error;
    }
  },
);
export const removeFromCart = createAsyncThunk(
  "auth/removeFromCart",
  async ({ id }: { id: number }) => {
    try {
      const userToken = getUserToken();
      removeProductFromLocalStorageUtil(id);
      const response = await axios.post(
        `${HOST_URL}api/carts/remove-from-cart`,
        {
          products: [{ id, count: 2 }],
        },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        },
      );
      return { id };
    } catch (error) {
      throw error;
    }
  },
);
export const getProduct = async (id: number) => {
  if (typeof id !== "number" || id === null) {
    throw new Error("Invalid or missing id parameter");
  }
  try {
    const response = await axios.get(`${HOST_URL}api/products/${id}`, {
      timeout: 5000,
    });
    if (response.status === 200) {
      const product = response.data.data;
      if (product !== null) {
        return product as Product;
      } else {
        throw new Error("Product not found");
      }
    } else {
      throw new Error("Failed to fetch product");
    }
  } catch (error) {
    throw new Error("Failed to get product");
  }
};
export const getUserCart = async () => {
  try {
    const userToken = getUserToken();
    const response = await axios.get(`${HOST_URL}api/carts/my-cart`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return { cart: response.data.data as Cart };
  } catch (error) {
    throw error;
  }
};
