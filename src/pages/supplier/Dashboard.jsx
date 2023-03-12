import { bgcolor } from "@mui/system";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GET } from "../../services/axios";
import Loader from "../../shared/Loader";
import Layout from "./Layout";
import Navbar from "./Navbar";

import "./styles/supplier.css";

export const getCreatedDishes = (payload) =>
  GET(`/menu?created_by=${payload.id}`);

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));
  const payload = { id: 1 };
  console.log(user);

  const navigationHandler = () => {
    navigate("/add-dish");
  };

  const displayMenuHandler = (id) => {
    navigate(`/display-dish/${id}`);
  };

  const onError = (error) => {};

  const {
    data: menu,
    isLoading,
    isError,
    error,
  } = useQuery(["GetCreatedDishes"], () => getCreatedDishes(user), {
    onError,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    // navigate("/error");
  }
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Layout menus={menu} displayMenuHandler={displayMenuHandler} />
    </div>
  );
}

export default Dashboard;
