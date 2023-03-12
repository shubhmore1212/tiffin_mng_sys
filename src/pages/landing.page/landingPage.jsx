import React from "react";
import Navbar from "./Navbar";
import IMAGES from "../../assets/index";
import "./styles/styles.css";
import About from "./About";
import Contact from "./Contact";
import Copyright from "./Copyright";
import { Typography } from "@mui/material";

function LandingPage() {
  return (
    <>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero-section" style={{ height: "100vh" }}>
        {/* HERO CONTENT */}
        <div className="hero-content">
          <div style={{ padding: "25px" }}>
            One Stop Solution for your Foodie need
          </div>
          <div style={{ fontSize: "4rem", padding: "25px" }}>
            So what are you waiting for?
          </div>
        </div>
        {/* IMAGE */}
        <div className="hero-image-tms">
          <img className="dish1" src={IMAGES.Dish} alt="dish" />
          <img className="dish2" src={IMAGES.Dish2} alt="dish" />
        </div>
      </div>
      <div className="about">
        <About />
      </div>
      <div className="contact-us">
        <Contact />
      </div>
      <div
        className="footer"
        style={{ height: "20vh", backgroundColor: "black" }}
      >
        <footer
          className="common-footer"
          style={{
            backgroundColor: "#FFEB3B",
            padding: "50px 0px",
            marginTop: "50px",
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            @E-DabbeWala
          </Typography>
          <Typography variant="subtitle1" align="center" color="GrayText">
            We are here, so that you never miss your home food
          </Typography>
          <Copyright sx={{ mt: 1, mb: 1 }} />
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
