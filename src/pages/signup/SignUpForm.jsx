import { Form, Formik } from "formik";
import React from "react";
import CredentialContent from "../../shared/CredentialContent";
import FormikControl from "../../shared/FormikControl";
import Logo from "../../shared/Logo";

export const ROLES = [
  {
    key: "1",
    value: "Supplier",
  },
  {
    key: "2",
    value: "User",
  },
];

function SignUpForm(props) {
  const { initialValues, validationSchema, handleSubmit, homeNavigation } =
    props;

  return (
    <>
      <Logo id="login-heading" homeNavigation={homeNavigation} />
      <div className="login-content">
        <CredentialContent
          heading="Create Account"
          paragraph={`A few clicks away from enjoying the events you enjoyed never before!`}
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {() => (
            <div className="form-login">
              <Form autoComplete="off">
                <div className="signup-form-format">
                  <FormikControl
                    type="text"
                    className="input-email"
                    control="input"
                    name="first_name"
                    label="FIRST NAME"
                    placeholder="John"
                  />
                  <FormikControl
                    type="text"
                    className="input-password"
                    control="input"
                    name="last_name"
                    label="LAST NAME"
                    placeholder="Fernandes"
                  />
                </div>
                <div className="signup-form-format">
                  <FormikControl
                    type="text"
                    className="input-contact"
                    control="input"
                    name="contact_no"
                    label="CONTACT"
                    placeholder="90087654230"
                  />
                  <FormikControl
                    className="roles-select-box"
                    control="select-box"
                    name="role_id"
                    label="ROLE"
                    options={ROLES}
                  />
                </div>
                <FormikControl
                  type="email"
                  className="input-email"
                  control="input"
                  name="email"
                  label="EMAIL"
                  placeholder="john@gmail.com"
                />
                <div className="signup-form-format">
                  <FormikControl
                    type="password"
                    className="input-password"
                    control="input"
                    name="password"
                    label="PASSWORD"
                    placeholder="******"
                  />
                  <FormikControl
                    type="password"
                    className="input-password"
                    control="input"
                    name="re_password"
                    label="RE-ENTER PASSWORD"
                    placeholder="******"
                  />
                </div>
                <button type="submit" className="log-in-btn">
                  Sign Up
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default SignUpForm;
