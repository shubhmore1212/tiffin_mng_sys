import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";
import * as Yup from "yup";
import axios from "axios";
import "./styles/signin.css";

const instance = axios.create({ baseURL: "http://localhost:3000" });

export const POST = (url, body) =>
  instance
    .post(url, body, { headers: { Authorization: body.accessToken } })
    .then((res) => res);

export const userLoginQuery = (payload) => POST("/users/sign_in", payload);

/* login form */
export const loginInitialValues = {
  email: "",
  password: "",
};

export const LoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .trim()
    .required("Required"),
  password: Yup.string().trim().required("Required"),
});

/* end login form */

function SignIn() {
  const navigate = useNavigate();

  const onSuccess = (response) => {
    // const accessToken = response?.headers?.authorization;
    // const role_id = response?.data?.status?.data?.role_id;
    // const user = response?.data?.status?.data;

    // setLocalStorage(TOKEN, accessToken);
    // setLocalStorage(USER, stringifyData(user));

    toast(`Logged in successfully`);
    // navigate(handleNavigate(role_id), { replace: true });
  };

  const onError = (error) => {
    toast.warn(error.response?.data);
    // errorNavigation(navigate, error);
  };

  const { mutate: userLogin } = useMutation(userLoginQuery, {
    onSuccess,
    onError,
  });

  const handleSubmit = (values) => {
    // userLogin({ user: { ...values } });
    console.log(values);
  };

  const imageButtonHandler = () => {
    navigate("/signup", { replace: true });
  };

  const homeNavigation = () => {
    navigate("/");
  };

  return (
    <Layout
      initialValues={loginInitialValues}
      validationSchema={LoginValidationSchema}
      handleSubmit={handleSubmit}
      buttonHandler={imageButtonHandler}
      homeNavigation={homeNavigation}
    />
  );
}

export default SignIn;
