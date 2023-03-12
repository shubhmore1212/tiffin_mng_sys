import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/landing.page/landingPage";
import SignIn from "./pages/sign.in/SignIn";
import SignUp from "./pages/signup/SignUp";
import AddDish from "./pages/supplier/AddDish";
import Dashboard from "./pages/supplier/Dashboard";
import DisplayDish from "./DisplayDish/DisplayDish";
import UserDashboard from "./pages/user/Dashboard";
import UpdateDish from "./pages/supplier/UpdateDish";
import OrderDish from "./pages/user/OrderDish";
import OrderDishDisplay from "./pages/user/OrderDishDisplay";

function App() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* ADMIN */}
        {/* SUPPLIER */}
        <Route path="/supplier" element={<Dashboard />} />
        <Route path="/add-dish" element={<AddDish />} />
        <Route path="/update-dish/:id" element={<UpdateDish />} />

        {/* USER */}
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/order-dish" element={<OrderDish />} />
        <Route path="/order-dish/:id" element={<OrderDishDisplay />} />

        <Route path="/display-dish/:id" element={<DisplayDish />} />
      </Route>
    </Routes>
  );
}

export default App;
