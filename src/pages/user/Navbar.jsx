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
    navigate("/supplier");
  };

  const searchHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const logoutHandler = () => {
    navigate("/");
    sessionStorage.removeItem("user");
  };

  const buttonHandler = () => {
    navigate("/order-dish");
  };

  return (
    <div className="nav-container">
      {/* LOGO */}
      <div className="logo">
        <Logo id="login-heading" homeNavigation={homeNavigation} />
      </div>
      {/* SEARCH BAR */}
      <div className="nav-links">
        <div className="search-box-container">
          <SearchBox searchInput={""} searchHandler={() => {}} />
          <button className="search-btn">Search</button>
        </div>

        <button className="search-btn" onClick={buttonHandler}>
          View Orders
        </button>
      </div>
      {/* PROFILE */}
      <div className="nav-credentials">
        <div className="log-out">
          <MouseOverPopover
            logoutHandler={logoutHandler}
            userName={user.first_name}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
