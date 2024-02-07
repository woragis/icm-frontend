import { BrowserRouter } from "react-router-dom";
import Router from "../pages/router";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";
import neonDark from "../styles/themes/neonDark";

function App() {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <BrowserRouter>
      <ThemeProvider
        theme={
          theme === "light"
            ? light
            : theme === "automatic" &&
              window.matchMedia("(prefers-color-scheme: light)").matches
            ? light
            : theme === "automatic" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches
            ? dark
            : theme === "dark"
            ? dark
            : neonDark
        }
      >
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
