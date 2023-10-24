import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Login from "../Login";
import Register from "../Register";

function GuestPage() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Navigate to={"/login"} replace />} />
    </Routes>
  );
}

export default GuestPage;
