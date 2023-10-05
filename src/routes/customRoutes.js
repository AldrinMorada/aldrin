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
import Leaderboards from "../pages/Leaderboards";

const route = () => {
  return (
    <div className="mt-[calc(7vh+.5rem)]">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/sample_path" element={<Component />} />
        <Route path="home" element={<AdminHome />} />
        <Route path="forums" element={<AdminHome />} />
        <Route path="courses" element={<AdminHome />} />
        <Route path="leaderboards" element={<Leaderboards />} />

        <Route path="/admin">
          <Route index element={<Navigate to="test" />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="dashboard" element={<AdminDash />} />
          <Route path="users" element={<Users />} />
          <Route path="trainingbonds" element={<TrainingBonds />} />
          <Route path="settings" element={<Settings />} />
          <Route path="test" element={<Test />} />
        </Route>

        <Route path="/profile">
          <Route index element={<Navigate to="about" />} />
          <Route path="about" element={<Profile subpage="about" />} />
          <Route path="posts" element={<Profile subpage="posts" />} />
          <Route path="courses" element={<Profile subpage="courses" />} />
          <Route
            path="certificates"
            element={<Profile subpage="certificates" />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default route;
