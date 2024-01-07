"use client";

// Handle User Token In Local Storage
export const saveUserToken = (token: string) => {
  localStorage.setItem("userToken", token);
};
export const deleteUserToken = () => {
  localStorage.removeItem("userToken");
};
export const getUserToken = () => {
  return localStorage.getItem("userToken") as string;
};

// Handle Cart On Local Storage
export const getProductsFromLocalStorageUtil = () => {
  return (JSON.parse(localStorage.getItem("cart") as string) as { id: number; count: number }[]) || [];
};
export const addProductToCartLocalStorageUtil = (id: number, count: number) => {
  const cart = getProductsFromLocalStorageUtil().filter((product) => product.id !== id);
  cart.push({ id, count });
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const removeProductFromLocalStorageUtil = (id: number) => {
  const cart = getProductsFromLocalStorageUtil().filter((product) => product.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
};
