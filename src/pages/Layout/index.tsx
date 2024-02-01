import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import GlobalStyles from "../../styles/GlobalStyles";
import { StyledLayout } from "./style";

const Layout = () => {
  return (
    <StyledLayout>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
