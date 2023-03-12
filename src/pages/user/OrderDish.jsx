import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Navbar from "../../DisplayDish/Navbar";
import { GET } from "../../services/axios";
import Loader from "../../shared/Loader";
import Layout from "../supplier/Layout";

export const getOrderDishes = (payload) =>
  GET(`/order?user_id=${payload.id}`, payload);

function OrderDish() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const navigationHandler = () => {
    navigate("/add-dish");
  };

  const displayMenuHandler = (id) => {
    navigate(`/order-dish/${id}`);
  };

  const onError = (error) => {};

  const { data: menu, isLoading } = useQuery(
    ["getOrderDishes"],
    () => getOrderDishes(user),
    {
      onError,
    }
  );

  const homeNavigation = () => {
    navigate("/user");
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="navbar">
        <Navbar homeNavigation={homeNavigation} />
      </div>
      <Layout menus={menu} displayMenuHandler={displayMenuHandler} />
    </div>
  );
}

export default OrderDish;
