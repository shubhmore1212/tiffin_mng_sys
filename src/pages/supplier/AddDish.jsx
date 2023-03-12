import { Form, Formik } from "formik";
import React from "react";
import FormikControl from "../../shared/FormikControl";
import * as Yup from "yup";
import Navbar from "../../DisplayDish/Navbar";
import { toast } from "react-toastify";
import { useMutation } from "react-query";
import { POST } from "../../services/axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  name: "",
  description: "",
  price: "",
};

const validationSchema = Yup.object({
  name: Yup.string().trim().required("Required"),
  description: Yup.string().trim().required("Required"),
});

export const addDishQuery = (payload) => POST("/menu", payload);

function AddDish() {
  const navigate = useNavigate();
  const user = JSON.parse(sessionStorage.getItem("user"));

  const onSuccess = (values) => {
    toast(`Added Dish to your Dabba`);
    navigate("/supplier");
  };

  const onError = (error) => {
    toast.warn(error.response?.data);
    // errorNavigation(navigate, error);
  };

  const { mutate: addDish } = useMutation(addDishQuery, {
    onSuccess,
    onError,
  });

  const handleSubmit = (values) => {
    console.log({ ...values, created_by: user.id, status: "open" });
    addDish({ ...values, created_by: user.id, status: "open" });
  };

  const homeNavigation = () => {
    navigate("/supplier");
  };

  return (
    <>
      <Navbar homeNavigation={homeNavigation} />
      <div>
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
                  name="name"
                  label="Dish Name"
                  placeholder="Paneer Masala"
                />
                <FormikControl
                  type="textarea"
                  className="input-password"
                  control="input"
                  name="description"
                  label="Description"
                  placeholder=""
                />
                <FormikControl
                  type="number"
                  className="input-password"
                  control="input"
                  name="price"
                  label="Price"
                  placeholder=""
                />
                <button type="submit" className="log-in-btn">
                  Add Dish
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AddDish;
