import { BrowserRouter } from "react-router-dom";
import Router from "../pages/router";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={
          theme === "light" ||
          (theme === "automatic" &&
            window.matchMedia("(prefers-color-scheme: light)").matches)
            ? light
            : dark
        }
      >
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
