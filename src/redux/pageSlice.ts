import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pageTransition",
  initialState: {
    from: { transform: "translateX(-100%)" },
    transform: "translateX(0)",
    config: { duration: 300 },
  },
  reducers: {},
});

export default pageSlice.reducer;
