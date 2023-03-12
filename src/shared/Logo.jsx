import React from "react";

function Logo(props) {
  const { color, id, homeNavigation } = props;

  return (
    <p className="logo" id={id} style={{ color }} onClick={homeNavigation}>
      <span className="logo-bold">E</span>-DabbeWala
    </p>
  );
}

export default Logo;
