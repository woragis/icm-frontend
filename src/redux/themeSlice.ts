import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeInterface {
  theme: "light" | "dark" | "neonDark" | "automatic";
}

// no automatico eu ja defino por aqui o tema

const localTheme = localStorage.getItem("theme") as "light" | "dark" | "neonDark" | "automatic";

// get initial state of matchMedia

// toggle can be handled in header component

const initialTheme: ThemeInterface = {
  theme: localTheme || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeInterface>) => {
      state.theme = action.payload.theme;
      localStorage.setItem("theme", action.payload.theme);
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
