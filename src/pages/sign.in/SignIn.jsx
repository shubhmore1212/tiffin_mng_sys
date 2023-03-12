import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Layout from "./Layout";
import * as Yup from "yup";
import "./styles/signin.css";
import { GET } from "../../services/axios";

export const userLoginQuery = (payload) =>
  GET(`/users?email=${payload.email}&password=${payload.password}`);

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
    sessionStorage.setItem("user", JSON.stringify(response[0]));
    console.log(response[0]?.role_id);
    const role_id = response[0]?.role_id;
    toast(`Logged in successfully`);

    switch (role_id) {
      case "1":
        navigate("/supplier");
        break;
      case "2":
        navigate("/user");
        break;
      case "3":
        navigate("/admin");
        break;
      default:
        return "error";
    }
  };

  const onError = (error) => {
    console.log(error);

    toast.warn(error.response?.data);
    // errorNavigation(navigate, error);
  };

  const { mutate: userLogin } = useMutation(userLoginQuery, {
    onSuccess,
    onError,
  });

  const handleSubmit = (values) => {
    userLogin(values);
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
