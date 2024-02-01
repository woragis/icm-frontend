import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Contrib from "./Contrib";
import Register from "./Register";
import Login from "./Login";
import Report from "./Report";

const Router = () => {
  interface IPages {
    name: string;
    path: string;
    element: React.FunctionComponentElement<{}>;
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
    // {name: 'Perfil', path:'profile', element:},
  ];
  const pagesRoutes = pagesData.map(({ name, path, element }: IPages) => {
    return <Route key={name} path={path} element={element} />;
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {pagesRoutes}
        </Route>
      </Routes>
    </>
  );
};

export default Router;
