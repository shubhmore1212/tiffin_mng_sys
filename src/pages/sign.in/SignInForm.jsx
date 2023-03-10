import { Form, Formik } from "formik";
import React from "react";
import CredentialContent from "../../shared/CredentialContent";
import FormikControl from "../../shared/FormikControl";
import Logo from "../../shared/Logo";

function SignInForm(props) {
  const { initialValues, validationSchema, handleSubmit, homeNavigation } =
    props;

  return (
    <>
      <Logo id="login-heading" homeNavigation={homeNavigation} />
      <div className="login-content">
        <CredentialContent
          heading="Sign In to E-DabbeWala"
          paragraph="Using your email account:"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="form-login">
              <Form autoComplete="off">
                <FormikControl
                  type="text"
                  className="input-email"
                  control="input"
                  name="email"
                  label="YOUR EMAIL"
                  placeholder="john@gmail.com"
                />
                <FormikControl
                  type="password"
                  className="input-password"
                  control="input"
                  name="password"
                  label="PASSWORD"
                  placeholder="5+ characters"
                />
                <button type="submit" className="log-in-btn">
                  Log In
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SignInForm;
