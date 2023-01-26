import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {BaseLayout} from "../layout";
import {Dashboard} from "../Pages";

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<BaseLayout />}>
        <Route index element={<Dashboard />} />
        <Route path='/' element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default PageRoutes;
