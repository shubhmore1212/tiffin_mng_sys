import { Link, Typography } from "@mui/material";
import React from "react";

function Copyright(props) {
  return (
    <Typography variant="body2" color="" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="/">
        E-DabbeWala
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default Copyright;
