import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { GET } from "../../services/axios";
import Loader from "../../shared/Loader";
import Layout from "../supplier/Layout";
import Navbar from "./Navbar";

import "./styles/user.css";

export const getCreatedDishes = (payload) => GET(`/menu`, payload);

function Dashboard() {
  const navigate = useNavigate();
  const payload = { id: 1 };
  const user = JSON.parse(sessionStorage.getItem("user"));

  const navigationHandler = () => {
    navigate("/add-dish");
  };

  const displayMenuHandler = (id) => {
    navigate(`/display-dish/${id}`);
  };

  const onError = (error) => {
    // toast.warn(error.response?.data);
    // navigate("/error");
  };

  const {
    data: menu,
    isLoading,
    isError,
    error,
  } = useQuery(["getCreatedDishes"], () => getCreatedDishes(payload), {
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
