import React from "react";
import MediaCard from "../../shared/MediaCard";
import { Typography, Box } from "@mui/material";
import IMAGES from "../../assets";

function Layout(props) {
  return (
    <div className="card-display-grid">
      {props?.menus?.length ? (
        props?.menus?.map((menu) => (
          <div key={menu.id} onClick={() => props.displayMenuHandler(menu.id)}>
            <MediaCard menu={menu} />
          </div>
        ))
      ) : (
        <Box className="content-center" sx={{ mt: 15, ml: 40 }}>
          <Box className="error-content">
            <Box>
              <Typography className="error-description" variant="h5">
                OOPs! No Dabba Added
              </Typography>
              <Typography variant="body2">
                Click on the Add Dish Button to Show your Dish to the World
              </Typography>
            </Box>
            <img
              className="error-img"
              alt="error-illustration"
              src={IMAGES.Error401}
            />
          </Box>
        </Box>
      )}
    </div>
  );
}

export default Layout;
