import React from "react";
import CredentialImage from "../../shared/CredentialImage";
import SignUpForm from "./SignUpForm";

function Layout(props) {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-image">
          <CredentialImage
            heading="Welcome Back"
            paragraph={`To keep connected with us please login with your personal info`}
            buttonName="Sign In"
            buttonHandler={props.buttonHandler}
          />
        </div>
        <div className="signup-position">
          <SignUpForm {...props} />
        </div>
      </div>
    </div>
  );
}

export default Layout;
