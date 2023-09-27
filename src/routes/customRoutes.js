import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import TrainingBonds from "../pages/Trainingbonds";
import AdminHome from "../pages/AdminHome";
import Test from "../pages/Test";
import Profile from "../pages/Profile";
import Component from "../Component";

const route = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin/test" />} />
      <Route path="/sample_path" element={<Component/>} />
      <Route path="/admin">
        <Route index element={<Navigate to="analytics" />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="users" element={<Users />} />
        <Route path="trainingbonds" element={<TrainingBonds />} />
        <Route path="settings" element={<Settings />} />
        <Route path="test" element={<Test />} />
      </Route>
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default route;
