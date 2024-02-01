import { createSlice } from "@reduxjs/toolkit";

interface ThemeInterface {
  theme: "light" | "dark" | "automatic";
}

// no automatico eu ja defino por aqui o tema

const localTheme = localStorage.getItem("theme") as
  | "light"
  | "dark"
  | "automatic";

// get initial state of matchMedia

// toggle can be handled in header component

const initialTheme: ThemeInterface = {
  theme: localTheme || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialTheme,
  reducers: {
    toggleManualTheme: (state) => {
      if (state.theme === "light") {
        console.log(state);
        localStorage.setItem("theme", "dark");
        state.theme = "dark";
      } else if (state.theme === "dark") {
        console.log(state);
        localStorage.setItem("theme", "light");
        state.theme = "light";
      }
    },
    setAutomaticTheme: (state) => {
      state.theme = "automatic";
      localStorage.setItem("theme", "automatic");
    },
    setManualTheme: (state) => {
      state.theme = "light";
      localStorage.setItem("theme", "light");
    },
  },
});

export const { toggleManualTheme, setAutomaticTheme, setManualTheme } =
  themeSlice.actions;
export default themeSlice.reducer;
