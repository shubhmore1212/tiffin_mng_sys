import React from "react";
import { ErrorMessage, Field } from "formik";
import { TextError } from "./TextError";

function InputBox(props) {
  const { name, label, type, ...rest } = props;

  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field type={type} name={name} {...rest} />
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default InputBox;
