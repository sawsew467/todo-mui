import React from "react";
import { Route, Routes } from "react-router";
import NotFound from "./NotFound";
import GuestPage from "./GuestPage";
import MainPage from "./MainPage";

function AppRoutes() {
  const isLoggedIn = ()=> {
    // xu ly
    return true;
  };


  return (
    <Routes>
      <Route path="/*" element={isLoggedIn() ? <MainPage></MainPage> : <GuestPage />} />
      <Route path="404" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
