import { createSlice } from "@reduxjs/toolkit";

export interface IRegister {
  name: string;
  email: string;
  password: string;
  cellphone_number: string;
}

const initialState: IRegister = {
  name: "",
  email: "",
  password: "",
  cellphone_number: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    handleChange: () => {},
  },
});

export const { handleChange } = registerSlice.actions;

export default registerSlice.reducer;
