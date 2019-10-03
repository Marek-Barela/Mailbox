import React from "react";
import styles from "./index.module.css";

const LoaderRing = () => {
  const { loaderWrapper, loaderRing } = styles;
  return (
    <div className={loaderWrapper}>
      <div className={loaderRing}></div>
    </div>
  );
};

export default LoaderRing;
