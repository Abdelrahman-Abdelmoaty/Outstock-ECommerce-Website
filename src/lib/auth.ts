import axios from "axios";
import { User } from "./types";

export const authUser = async (username: string, password: string) => {
  const response = await axios.post("", {
    username,
    password,
  });
  if (response.status === 200) {
    const token = response.data.code as string;
    return token;
  } else {
    return null;
  }
};

export const registerUser = async (user: User) => {
  try {
    const res = await axios.post(
      "http://127.0.0.1:8000/api/auth/register",
      { ...user, password_confirmation: user.password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return {
      status: 200,
      token: res.data.token,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
      error: "An error occurred while registering the user.",
    };
  }
};
