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

export const setTokenCookie = (token: String) => {
  document.cookie = `userToken=${token}`;
};
export const setAdminCookie = () => {
  document.cookie = "isAdmin=true";
};
export const setAuthCookie = () => {
  document.cookie = "isAuth=true";
};
export const resetAdminCookie = () => {
  document.cookie = "isAdmin=";
};
export const resetAuthCookie = () => {
  document.cookie = "isAuth=";
};
export const deleteTokenCookie = () => {
  document.cookie = "userToken=";
};
