import React from "react";

import "./styles/styles.css";

const CredentialImage = (props) => {
  const { heading, paragraph, buttonName, buttonHandler } = props;

  return (
    <div className="login-image-content">
      <div id="sub-heading">
        <h2>{heading}</h2>
      </div>
      <p>{paragraph}</p>
      <button onClick={buttonHandler}>{buttonName}</button>
    </div>
  );
};

export default React.memo(CredentialImage);
