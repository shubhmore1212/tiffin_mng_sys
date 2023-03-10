import React from "react";
import CredentialImage from "../../shared/CredentialImage";
import SignInForm from "./SignInForm";

function Layout(props) {
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-position">
          <SignInForm {...props} />
        </div>
      </div>
      <div className="login-image">
        <CredentialImage
          heading="Hello, Foodie!"
          paragraph="Enter your details and start a journey with us!"
          buttonName="Sign Up"
          buttonHandler={props.buttonHandler}
        />
      </div>
    </div>
  );
}

export default Layout;
