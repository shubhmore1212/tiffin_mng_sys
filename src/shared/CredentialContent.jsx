import React from "react";

import "./styles/styles.css";

const CredentialContent = (props) => {
  const { heading, paragraph } = props;

  return (
    <>
      <div className="sub-heading">
        <h2>{heading}</h2>
      </div>
      <div>
        <p>{paragraph}</p>
      </div>
    </>
  );
};

export default React.memo(CredentialContent);
