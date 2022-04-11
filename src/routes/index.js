import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import BackgroundAudio from "../assets/audio/background.mp3";
import Dashboard from "../protectedPages/dashboard/Dashboard";
import Setting from "../protectedPages/setting/setting";
import PublicRoute from "./publicRoutes/publicRoutes";
import ResetPassword from "../protectedPages/login/resetPassword";
import ForgotPassword from "../protectedPages/login/forgotPassword";
import SuperRoute from "../components/privateRoute/index";
import Login from "../protectedPages/login/login.page";
import HomePage from "../pages/homePage/homepage";
import OurTeamPage from "../pages/ourTeam";
import ProtectedLayout from "../layout/protectedLayout/layout";
import OurTeam from "../protectedPages/ourTeam/ourTeam";
import AnimatingPages from "../animatingPages";
function IndexRoute() {
  useEffect(()=>{

    sessionStorage.setItem("opened", "yes");

  },[])
  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />} />
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        <Route
          public
          noLayout
          path="/forgot-password"
          element={<ForgotPassword />}
        />
        <Route
          exact
          path="/admin"
          element={
            <SuperRoute>
              <Dashboard />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          element={
            <SuperRoute>
              <Dashboard />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/our-team"
          element={
            <SuperRoute>
              <OurTeam />
            </SuperRoute>
          }
        />
        <Route
          path="/admin/setting"
          element={
            <SuperRoute>
              <Setting />
            </SuperRoute>
          }
        /> 
         {/* <Route path="/" element={<AnimatingPages />} /> */}
      </Routes>
    </>
  );
}

export default IndexRoute;
