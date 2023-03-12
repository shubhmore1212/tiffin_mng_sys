import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { DELETE, POST } from "../services/axios";
import DishHeroSection from "./DishHeroSection";
import Navbar from "./Navbar";

export const deleteEvent = (payload) => DELETE(`menu/${payload}`);

export const addOrderQuery = (payload) => POST("/order", payload);

function Layout(props) {
  const { menu } = props;
  const user = JSON.parse(sessionStorage.getItem("user"));
  const navigate = useNavigate();
  const query = useQueryClient();

  const onSuccess = () => {
    query.invalidateQueries("GetCreatedDishes");
    navigate("/supplier");
  };

  const { mutate: deleteDish } = useMutation(deleteEvent, {
    onSuccess,
  });

  const onOrderSuccess = (values) => {
    toast(`Added Dish to your Dabba`);
  };

  const onError = (error) => {
    toast.warn(error.response?.data);
    // errorNavigation(navigate, error);
  };

  const { mutate: addOrder } = useMutation(addOrderQuery, {
    onSuccess: onOrderSuccess,
    onError,
  });

  //Update
  const buttonName1Handler = (id) => {
    console.log(id);
    navigate(`/update-dish/${id}`);
  };

  //Delete
  const buttonName2Handler = (id) => {
    console.log(id);
    deleteDish(id);
    navigate("/supplier");
  };

  //Order
  const buttonName3Handler = (menu) => {
    console.log(menu);
    delete menu.id;
    addOrder({ ...menu, user_id: user.id });
  };

  //Review
  const buttonName4Handler = (id) => {};

  return (
    <>
      <Navbar />
      <DishHeroSection />
      <div className="image-container">
        <div className="block">
          <h1 id="event-name">{menu.name}</h1>
          <p id="organizer-name">by Lorem, ipsum.</p>
          <p id="event-description">
            {menu?.description?.substring(0, menu.description.indexOf("."))}
          </p>
        </div>
        <div className="date-block">
          <div className="date-time-block">Date & Time</div>
          <div id="date-time">{`start_date at {start_time}`}</div>

          <div className="registration-btn">
            <button
              className="display-event-btn-1"
              onClick={
                user.role_id == 2
                  ? () => buttonName3Handler(menu)
                  : () => buttonName1Handler(menu.id)
              }
            >
              {user.role_id == 2 ? "Order" : "Update"}
            </button>
            <button
              className="display-event-btn-2"
              onClick={() => buttonName2Handler(menu.id)}
            >
              {user.role_id == 2 ? "Review" : "Delete"}
            </button>
          </div>
        </div>
      </div>
      <div className="event-description-container">
        <Box className="event-description-box">
          <Paper className="event-description-paper" elevation={3}>
            <h2>
              <b>Description</b>
            </h2>
            <div
              className="event-description-content"
              style={{ width: "600px" }}
            >
              {menu.description}
            </div>
          </Paper>
        </Box>
        <Box className="event-time-box" sx={{ minHeight: 200 }}>
          <Paper
            className="event-time-box"
            elevation={3}
            sx={{ minHeight: 200 }}
          >
            <h2>
              <b>Price</b>
            </h2>
            <p>
              <span style={{ padding: 20, fontSize: "2rem" }}>
                {menu.price} Rs
              </span>
            </p>
          </Paper>
        </Box>
      </div>
    </>
  );
}

export default Layout;
