import { FunctionComponentElement } from "react";
import { animated, useTransition } from "@react-spring/web";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./Layout";
import Contrib from "./Contrib";
import Register from "./Register";
import Login from "./Login";
import Report from "./Report";
import Profile from "./Profile";

const Router = () => {
  interface IPages {
    name: string;
    path: string;
    element: FunctionComponentElement<{}>;
  }
  const pagesData: IPages[] = [
    {
      name: "Contribuicoes",
      path: "/",
      element: <Contrib />,
    },
    { name: "Registrar", path: "/register", element: <Register /> },
    { name: "Login", path: "/login", element: <Login /> },
    { name: "Reportar", path: "/report", element: <Report /> },
    // {name: 'Admin', path:'/admin', element:},
    { name: "Perfil", path: "/profile", element: <Profile /> },
  ];
  const pagesRoutes = pagesData.map(({ name, path, element }: IPages) => {
    return <Route key={name} path={path} element={element} />;
  });

  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 1, transform: "translate3d(0, 100%, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 1, transform: "translate3d(0, -100%, 0)" },
    unique: true,
  });

  return (
    <>
      {/* <animated.div style={styles}> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {pagesRoutes}
        </Route>
      </Routes>
      {/* </animated.div> */}
    </>
  );
};

export default Router;
