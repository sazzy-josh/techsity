import React from "react";
import {Routes, Route} from "react-router-dom";
import {BaseLayout} from "../layout";

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<h1>FIRST ROUTE</h1>}></Route>
      </Route>
    </Routes>
  );
};

export default PageRoutes;
