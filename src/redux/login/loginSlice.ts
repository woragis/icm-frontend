import { createSlice } from "@reduxjs/toolkit";

export interface ILogin {
  email: string;
  password: string;
}

const initialState: ILogin = {
  email: "",
  password: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    handleChange: () => {},
  },
});

export const { handleChange } = loginSlice.actions;

export default loginSlice.reducer;
