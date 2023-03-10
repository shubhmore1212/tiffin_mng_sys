import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landing.page/landingPage";
import SignIn from "./pages/sign.in/SignIn";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}

export default App;
