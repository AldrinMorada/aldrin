import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import TrainingBonds from "../pages/Trainingbonds";
import AdminHome from "../pages/AdminHome";
import Test from "../pages/Test";

const route = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/analytics" />} />
      <Route path="/admin">
        <Route index element={<Navigate to="analytics" />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="users" element={<Users />} />
        <Route path="trainingbonds" element={<TrainingBonds />} />
        <Route path="settings" element={<Settings />} />
        <Route path="test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default route;
