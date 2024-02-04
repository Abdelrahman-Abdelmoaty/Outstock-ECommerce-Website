"use server";

import axios from "axios";
import { LoginFormData, RegisterFormData } from "./schemas";
import {
  ADD_TO_CART_URL,
  FACEBOOK_LOGIN_URL,
  GOOGLE_LOGIN_URL,
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
  REMOVE_FROM_CART_URL,
  USER_CART_URL,
  USER_DATA_URL,
} from "./URLS";
import { Cart, CartProduct, Product, User } from "./types";
import { cookies } from "next/headers";

// Handling authentication
export async function authenticate(formData: LoginFormData) {
  const cookie = cookies();
  try {
    const response = await axios.post(LOGIN_URL, formData);
    const data: { token: string; user: User } = await response.data;
    if (data.user.isAdmin === true) cookie.set("admin", "true");
    cookie.set("currentUser", data.token);
    await mergeCarts();
    return data;
  } catch (error: any) {
    if (error.response.status === 422) {
      throw new Error("Wrong email or password");
    } else {
      throw new Error("Something went wrong, please try again.");
    }
  }
}

export async function register(formData: RegisterFormData) {
  const cookie = cookies();
  try {
    const response = await axios.post(REGISTER_URL, formData);
    cookie.set("currentUser", response.data.token);
    await mergeCarts();
    return response.data as { token: string; user: User };
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}

export async function authenticateGoogle(authCode: string) {
  const cookie = cookies();
  try {
    const response = await axios.post(
      GOOGLE_LOGIN_URL,
      {},
      {
        params: {
          auth_code: authCode,
        },
      },
    );
    cookie.set("currentUser", response.data.token);
    await mergeCarts();
    return response.data as { token: string; user: User };
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}

export async function authenticateFacebook(authCode: string) {
  const cookie = cookies();
  try {
    const response = await axios.get(FACEBOOK_LOGIN_URL, {
      params: {
        code: authCode,
      },
    });
    cookie.set("currentUser", response.data.token);
    await mergeCarts();
    return response.data as { token: string; user: User };
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}

export async function logout() {
  const cookie = cookies();
  try {
    await axios.get(LOGOUT_URL, {
      headers: {
        Authorization: `Bearer ${cookie.get("currentUser")?.value}`,
      },
    });
    cookie.delete("currentUser");
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}

// Handling user data
export async function getUserData() {
  const cookie = cookies();
  try {
    const response = await axios.get(USER_DATA_URL, {
      headers: {
        Authorization: `Bearer ${cookie.get("currentUser")?.value}`,
      },
    });
    return response.data.data as User;
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}

export async function getUserCart() {
  const cookie = cookies();
  try {
    const response = await axios.get(USER_CART_URL, {
      headers: {
        Authorization: `Bearer ${cookie.get("currentUser")?.value}`,
      },
    });
    return response.data.data as Cart;
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}

export async function addToCart(cartProduct: CartProduct) {
  const cookie = cookies();
  if (cookie.get("currentUser")) {
    try {
      let response = await axios.post(
        ADD_TO_CART_URL,
        {
          products: [{ id: cartProduct.id, count: cartProduct.count }],
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("currentUser")?.value}`,
          },
        },
      );
      const cart = await getUserCart();
      return cart;
    } catch (error: any) {
      throw new Error("Something went wrong, please try again.");
    }
  } else {
    const tempCart = cookies().get("tempCart")?.value;
    let cart: Cart = {
      products: [],
    };
    if (tempCart) {
      cart = JSON.parse(tempCart);
    }
    const filteredCart: Cart = {
      ...cart,
      products: cart.products.filter((pr) => pr.id !== cartProduct.id),
    };
    if (cartProduct.count !== 0) filteredCart.products.push(cartProduct);
    cookie.set("tempCart", JSON.stringify(filteredCart));
    return filteredCart;
  }
}

export async function removeFromCart(cartProduct: CartProduct) {
  const cookie = cookies();
  if (cookie.get("currentUser")) {
    try {
      let response = await axios.post(
        REMOVE_FROM_CART_URL,
        {
          products: [{ id: cartProduct.id }],
        },
        {
          headers: {
            Authorization: `Bearer ${cookie.get("currentUser")?.value}`,
          },
        },
      );

      response = await axios.get(USER_CART_URL, {
        headers: {
          Authorization: `Bearer ${cookie.get("currentUser")?.value}`,
        },
      });

      return response.data.data as Cart;
    } catch (error: any) {
      throw new Error("Something went wrong, please try again.");
    }
  } else {
    const tempCart = cookies().get("tempCart")?.value;
    let cart: Cart = {
      products: [],
    };
    if (tempCart) {
      cart = JSON.parse(tempCart);
    }
    const newTempCart: Cart = {
      ...cart,
      products: [...cart.products.filter((pr) => pr.id !== cartProduct.id)],
    };
    cookie.set("tempCart", JSON.stringify(newTempCart));
    return newTempCart;
  }
}

export async function mergeCarts() {
  const cookie = cookies();
  let tempCart: Cart = {
    products: [],
  };
  if (cookie.get("tempCart")?.value)
    tempCart = JSON.parse(cookie.get("tempCart")?.value || "{}") as Cart;
  try {
    tempCart.products.forEach(async (product) => {
      await addToCart(product);
    });
    cookie.delete("tempCart");
  } catch (error: any) {
    throw new Error("Something went wrong, please try again.");
  }
}
