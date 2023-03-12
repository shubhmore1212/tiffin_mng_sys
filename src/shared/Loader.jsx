import React from "react";
import { InfinitySpin } from "react-loader-spinner";

import "./styles/styles.css";

const Loader = () => {
  return (
    <div className="loading-spinner">
      <InfinitySpin color="#74afa6" width="200" />
    </div>
  );
};

export default React.memo(Loader);
