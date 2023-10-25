"use client";
export const saveAccessToken = (token: string) => {
  window.localStorage.setItem("userToken", token);
};
export const deleteAccessToken = () => {
  window.localStorage.removeItem("userToken");
};
export const getAccessToken = () => {
  return window.localStorage.getItem("userToken") as string;
};
