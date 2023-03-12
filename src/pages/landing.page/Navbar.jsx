import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../shared/Logo";
import MouseOverPopover from "../../shared/MouseOverPopover";
import SearchBox from "../../shared/SearchBox";

function Navbar() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const homeNavigation = () => {
    navigate("/");
  };

  const signInHandler = () => {
    navigate("/signin");
  };

  const signUpHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="nav-container">
      {/* LOGO */}
      <div className="logo">
        <Logo id="login-heading" homeNavigation={homeNavigation} />
      </div>
      {/* SEARCH BAR */}
      <div className="nav-links"></div>
      {/* PROFILE */}
      <div className="nav-credentials">
        <div className="log-out">
          <button className="search-btn" onClick={signInHandler}>
            Sign In
          </button>
          <button className="search-btn" onClick={signUpHandler}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
