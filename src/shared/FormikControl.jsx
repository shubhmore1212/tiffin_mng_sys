import React from "react";
import InputBox from "./InputBox";
import SelectBox from "./SelectBox";

import "./styles/styles.css";

function FormikControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <InputBox {...rest} />;
    case "select-box":
      return <SelectBox {...rest} />;
    default:
      return <div>Invalid Entry of Formik</div>;
  }
}

export default FormikControl;
