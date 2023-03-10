import { ErrorMessage, Field } from "formik";
import React from "react";
import { TextError } from "./TextError";

function SelectBox(props) {
  const { name, label, options } = props;

  return (
    <div className="form-container">
      <div className="form-control">
        <label htmlFor={name}>{label}</label>
        <Field as="select" name={name}>
          <option>Select One</option>
          {options?.map((option) => (
            <option key={option.key} value={option.key}>
              {option.value}
            </option>
          ))}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default SelectBox;
