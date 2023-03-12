import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GET } from "../../services/axios";
// import "./styles/styles.css";
import Loader from "../../shared/Loader";
import Layout from "../../DisplayDish/Layout";

export const getDish = (payload) => GET(`/order/${payload.id}`);

function OrderDishDisplay() {
  const data = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const { data: menu, isLoading } = useQuery(
    ["getDish"],
    () => getDish(data),
    {}
  );
  console.log(menu);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Layout menu={menu} />
    </div>
  );
}

export default OrderDishDisplay;
