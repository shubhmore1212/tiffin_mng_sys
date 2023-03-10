import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { POST } from "../sign.in/SignIn";
import Layout from "./Layout";
import * as Yup from "yup";
import "yup-phone";
import "./styles/signup.css";

export const SignUpInitialValues = {
  first_name: "",
  last_name: "",
  contact_no: "",
  role_id: "",
  email: "",
  password: "",
  re_password: "",
};

export const signUpValidationSchema = Yup.object({
  first_name: Yup.string().trim().required("Required*"),
  last_name: Yup.string().trim().required("Required*"),
  contact_no: Yup.string()
    .phone("IN", true, "Please Enter valid number")
    .required("Required*"),
  role_id: Yup.string()
    .notOneOf(["Select One"], "Please select the role")
    .required("Required*"),
  email: Yup.string()
    .email("Please Enter a valid email address")
    .trim()
    .required("Required*"),
  password: Yup.string()
    .trim()
    .min(5, "Password must be atleat 5 characters long")
    .required("Required*"),
  re_password: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

export const addUserQuery = (payload) => POST("/users", payload);

function SignUp() {
  const navigate = useNavigate();

  const onSuccess = (values) => {
    toast(`GO Login and Hope U would Like our Dabba`);
    navigate("/signin", { replace: true });
  };

  const onError = (error) => {
    toast.warn(error.response?.data);
    // errorNavigation(navigate, error);
  };

  const { mutate: addUser } = useMutation(addUserQuery, {
    onSuccess,
    onError,
  });

  const handleSubmit = (values, actions) => {
    console.log(values);
    // addUser({ user: { ...values } });
    actions.resetForm();
  };

  const imageButtonHandler = () => {
    navigate("/signin", { replace: true });
  };

  const homeNavigation = () => {
    navigate("/");
  };

  return (
    <Layout
      initialValues={SignUpInitialValues}
      validationSchema={signUpValidationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
      homeNavigation={homeNavigation}
    />
  );
}

export default SignUp;
