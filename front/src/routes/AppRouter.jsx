import { Routes, Route, Navigate } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./";
import { HomePage, MoviePage, DashboardPage, ProfilePage } from "../pages/";

import React from "react";
import { LoginPage } from "../pages/LoginPage";

export const AppRouter = () => {
  return (
    <Routes>
        <Route path= "/home" element={<HomePage />} />
        <Route path= "/movie/:id" element={<MoviePage />} />


        <Route path= "/login" element={
            <PublicRoutes>
                <LoginPage />
            </PublicRoutes>
        } />

        <Route path= "/profile" element={
            <PrivateRoutes>
                <ProfilePage />

        </PrivateRoutes>} />




        <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
};
