import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Users from "../pages/Users";
import TrainingBonds from "../pages/Trainingbonds";
import AdminHome from "../pages/Home";
import Test from "../pages/Test";
import Profile from "../pages/Profile";
import Component from "../Component";
import AdminDash from "../pages/AdminDash";

const route = () => {
  return (
    <div className="mt-[1.4rem]">
      <Routes>
        <Route path="/" element={<Navigate to="/admin/test" />} />
        <Route path="/sample_path" element={<Component />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="courses" element={<AdminHome />} />
        <Route path="leaderboards" element={<AdminHome />} />
        <Route path="forums" element={<AdminHome />} />
        <Route path="/admin">
          <Route index element={<Navigate to="test" />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="dashboard" element={<AdminDash />} />
          <Route path="users" element={<Users />} />
          <Route path="trainingbonds" element={<TrainingBonds />} />
          <Route path="settings" element={<Settings />} />
          <Route path="test" element={<Test />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default route;
