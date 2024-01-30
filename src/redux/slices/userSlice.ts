import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, type Cart } from "@src/utils/types";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

export const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
  },
});

export default UserSlice.reducer;
export const { setUser } = UserSlice.actions;
export const useUser = () => useSelector((state: RootState) => state.user);
